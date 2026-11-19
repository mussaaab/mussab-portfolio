"use client";

import { useState } from "react";
import { CheckIcon, CopyIcon } from "./ui/Icons";
import { useToast } from "./ui/Toast";

export function CopyEmail({ email }: { email: string }) {
  const { notify } = useToast();
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      notify("Email copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      notify("Couldn't copy. Select the address instead.", "error");
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={`mailto:${email}`}
        className="break-all font-display text-2xl font-medium tracking-tight text-ink underline decoration-ink/20 underline-offset-[6px] transition-colors hover:decoration-rust sm:text-3xl"
      >
        {email}
      </a>
      <button
        type="button"
        onClick={copy}
        className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 px-3 py-1.5 font-mono text-[12px] text-ink-muted transition-colors hover:border-ink/30 hover:text-ink"
      >
        {copied ? <CheckIcon size={14} /> : <CopyIcon size={14} />}
        {copied ? "Copied" : "Copy"}
        <span className="sr-only"> email address</span>
      </button>
    </div>
  );
}
