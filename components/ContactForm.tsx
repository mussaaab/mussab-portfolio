"use client";

import { useState } from "react";
import { profile } from "@/data/portfolio";
import { useToast } from "./ui/Toast";

type Status = "idle" | "sending" | "sent" | "error";
type Fields = { name: string; email: string; company: string; message: string };
const empty: Fields = { name: "", email: "", company: "", message: "" };

const input =
  "w-full rounded-lg border border-ink/15 bg-[#f3ebe0] px-4 py-3 text-[15px] text-ink placeholder:text-ink-muted/60 transition-colors focus:border-rust focus:outline-none focus-visible:outline-none focus:ring-2 focus:ring-rust/20 aria-[invalid=true]:border-rust";

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const { notify } = useToast();

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFields((f) => ({ ...f, [k]: e.target.value }));

  function validate(): boolean {
    const next: typeof errors = {};
    if (!fields.name.trim()) next.name = "Please add your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) next.email = "Please add a valid email.";
    if (fields.message.trim().length < 10) next.message = "A sentence or two helps.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function openMailClient() {
    const subject = `Project inquiry from ${fields.name}${fields.company ? ` (${fields.company})` : ""}`;
    const body = `${fields.message}\n\n${fields.name}\n${fields.email}${fields.company ? `\n${fields.company}` : ""}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    const honeypot = (e.currentTarget.elements.namedItem("website") as HTMLInputElement | null)?.value;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, website: honeypot }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; fallback?: boolean };

      if (res.ok && data.ok) {
        setStatus("sent");
        setFields(empty);
        notify("Message sent. I'll reply soon.");
      } else if (data.fallback) {
        // No mail provider configured: hand off to the visitor's mail app.
        setStatus("idle");
        openMailClient();
      } else {
        throw new Error("send failed");
      }
    } catch {
      setStatus("error");
      notify("Couldn't send. Please email me directly.", "error");
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4" aria-describedby="form-status">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="name" label="Name" error={errors.name}>
          <input id="name" name="name" autoComplete="name" value={fields.name} onChange={set("name")} className={input} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} required />
        </Field>
        <Field id="email" label="Email" error={errors.email}>
          <input id="email" name="email" type="email" autoComplete="email" value={fields.email} onChange={set("email")} className={input} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} required />
        </Field>
      </div>
      <Field id="company" label="Company" optional>
        <input id="company" name="company" autoComplete="organization" value={fields.company} onChange={set("company")} className={input} />
      </Field>
      <Field id="message" label="Message" error={errors.message}>
        <textarea id="message" name="message" rows={5} value={fields.message} onChange={set("message")} placeholder="What are you building, and where are you in the process?" className={`${input} resize-y`} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} required />
      </Field>

      {/* Honeypot: hidden from people and assistive tech */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-2 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-[#433732] disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        <p id="form-status" role="status" className="font-mono text-[12px] text-ink-muted">
          {status === "sent" && "✓ Sent. Thanks, I’ll be in touch."}
          {status === "error" && `Something went wrong. Email ${profile.email} directly.`}
        </p>
      </div>
    </form>
  );
}

function Field({ id, label, optional, error, children }: { id: string; label: string; optional?: boolean; error?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="font-mono text-[12px] text-ink-muted">
        {label} {optional && <span className="text-ink-muted/60">(optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="font-mono text-[12px] text-rust">
          {error}
        </p>
      )}
    </div>
  );
}
