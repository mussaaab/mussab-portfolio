import { profile, terminal } from "@/data/portfolio";

type Line = { cmd: string; out: React.ReactNode };

export function TerminalCard() {
  const lines: Line[] = [
    {
      cmd: "whoami",
      out: (
        <>
          <span className="text-cream">{profile.handle}</span>
          <span className="text-muted"> — software engineer</span>
        </>
      ),
    },
    { cmd: "cat focus.txt", out: <span className="text-muted">{terminal.focus}</span> },
    {
      cmd: "ls shipped/",
      out: (
        <span className="flex flex-wrap gap-x-4 gap-y-1">
          {terminal.shipped.map((s) => (
            <span key={s} className="text-gold">
              {s}
            </span>
          ))}
        </span>
      ),
    },
    {
      cmd: "status",
      out: (
        <span className="inline-flex items-center gap-2 text-sage">
          <span className="status-dot" aria-hidden />
          {terminal.status}
        </span>
      ),
    },
  ];

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl border border-line-strong bg-[#2f2823]/90 shadow-warm-lg backdrop-blur"
      role="figure"
      aria-label="Terminal summary"
    >
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-[#c9705a]/80" />
        <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-gold/70" />
        <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-sage/70" />
        <span className="ml-3 font-mono text-[11px] text-muted/80">~/{profile.handle} — zsh</span>
      </div>
      <div className="space-y-4 p-5 font-mono text-[12.5px] leading-relaxed md:p-6 md:text-[13px]">
        {lines.map((line, i) => (
          <div key={line.cmd} className="hero-in" style={{ animationDelay: `${0.4 + i * 0.25}s` }}>
            <div>
              <span aria-hidden className="text-terracotta">$ </span>
              <span className="text-cream">{line.cmd}</span>
            </div>
            <div className="mt-1">{line.out}</div>
          </div>
        ))}
        <div aria-hidden>
          <span className="text-terracotta">$ </span>
          <span className="cursor-blink inline-block h-[1.05em] w-[0.55em] translate-y-[2px] bg-cream/70" />
        </div>
      </div>
    </div>
  );
}
