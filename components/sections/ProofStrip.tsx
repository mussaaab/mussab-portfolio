import { proof } from "@/data/portfolio";

export function ProofStrip() {
  return (
    <section aria-label="At a glance" className="border-y border-line bg-surface/40">
      <ul className="container-x flex flex-wrap items-center justify-center gap-x-6 gap-y-3 py-5 font-mono text-[12px] text-muted md:justify-between md:text-[13px]">
        {proof.map((item, i) => (
          <li key={item} className="flex items-center gap-6">
            {i > 0 && <span aria-hidden className="hidden h-1 w-1 rounded-full bg-terracotta/60 md:inline-block" />}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
