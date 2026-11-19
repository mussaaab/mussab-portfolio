import type { ArchColumn } from "@/data/portfolio";

/**
 * Columns of boxes joined by SVG arrows. Horizontal on md+, vertical on small screens,
 * so labels stay legible at any width (unlike a scaled single SVG).
 */
export function ArchitectureStrip({ columns, title }: { columns: ArchColumn[]; title: string }) {
  return (
    <figure className="rounded-2xl border border-line bg-cocoa/60 p-4 md:p-5">
      <figcaption className="label-mono mb-4 flex items-center justify-between text-muted">
        <span>Architecture</span>
        <span className="text-cream/30" aria-hidden>
          ─ ─ ─
        </span>
      </figcaption>
      <ol aria-label={`${title} architecture, left to right`} className="flex flex-col items-stretch md:flex-row md:items-start">
        {columns.map((col, i) => (
          <li key={col.layer} className="flex flex-col items-stretch md:flex-1 md:flex-row md:items-start">
            <div className="flex-1">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.08em] text-muted/70">{col.layer}</p>
              <div className="flex flex-wrap gap-1.5 md:flex-col">
                {col.nodes.map((n, j) => (
                  <span
                    key={n}
                    className={`rounded-md border px-2.5 py-1.5 font-mono text-[11px] leading-tight ${
                      i === 0 && j === 0
                        ? "border-terracotta/40 bg-terracotta/10 text-cream"
                        : "border-line-strong bg-surface text-cream/85"
                    }`}
                  >
                    {n}
                  </span>
                ))}
              </div>
            </div>
            {i < columns.length - 1 && <Connector />}
          </li>
        ))}
      </ol>
    </figure>
  );
}

function Connector() {
  return (
    <>
      {/* vertical (mobile) */}
      <svg aria-hidden viewBox="0 0 12 28" className="mx-auto my-2 h-7 w-3 text-terracotta/60 md:hidden">
        <path d="M6 0v24" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 3" />
        <path d="M2 20l4 5 4-5" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {/* horizontal (md+) */}
      <svg aria-hidden viewBox="0 0 36 12" className="mx-2 mt-[34px] hidden h-3 w-9 shrink-0 text-terracotta/60 md:block">
        <path d="M0 6h31" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 3" />
        <path d="M28 2l5 4-5 4" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
}
