import { principles } from "@/data/portfolio";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";

export function Principles() {
  return (
    <section id="principles" aria-labelledby="principles-title" className="pb-24 md:pb-32">
      <div className="container-x">
        <SectionHeader id="principles-title" index="06" label="Engineering Principles" title="How I work." />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, i) => (
            <Reveal
              as="li"
              key={p.title}
              delay={i * 0.06}
              className="group relative flex flex-col rounded-2xl border border-line bg-surface/50 p-6 transition-colors hover:border-line-strong hover:bg-elevated/50"
            >
              <span className="font-mono text-[11px] text-muted/60">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-10 text-xl font-medium text-cream">{p.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{p.body}</p>
              <span
                aria-hidden
                className="absolute left-6 right-6 top-0 h-px origin-left scale-x-0 bg-terracotta/70 transition-transform duration-500 group-hover:scale-x-100"
              />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
