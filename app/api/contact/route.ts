import { NextResponse } from "next/server";

type Payload = { name?: string; email?: string; company?: string; message?: string; website?: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const clip = (s: unknown, n: number) => (typeof s === "string" ? s.trim().slice(0, n) : "");
const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  // Bots fill the hidden field; pretend success.
  if (body.website) return NextResponse.json({ ok: true });

  const name = clip(body.name, 120);
  const email = clip(body.email, 200);
  const company = clip(body.company, 160);
  const message = clip(body.message, 5000);

  if (!name || !EMAIL_RE.test(email) || message.length < 10) {
    return NextResponse.json({ ok: false, error: "Missing or invalid fields" }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    // No provider configured: tell the client to fall back to mailto.
    return NextResponse.json({ ok: false, fallback: true }, { status: 503 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
      to: [to],
      reply_to: email,
      subject: `Portfolio inquiry: ${name}${company ? ` (${company})` : ""}`,
      text: `${message}\n\n— ${name} <${email}>${company ? `\n${company}` : ""}`,
      html: `<p>${escape(message).replace(/\n/g, "<br>")}</p><p>— ${escape(name)} &lt;${escape(email)}&gt;${
        company ? `<br>${escape(company)}` : ""
      }</p>`,
    }),
  });

  if (!res.ok) return NextResponse.json({ ok: false, error: "Delivery failed" }, { status: 502 });
  return NextResponse.json({ ok: true });
}
