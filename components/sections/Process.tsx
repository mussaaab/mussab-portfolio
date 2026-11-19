import { lifecycle } from "@/data/portfolio";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";

export function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="on-sand bg-sand py-24 text-ink md:py-32">
      <div className="container-x">
        <SectionHeader
          id="process-title"
          tone="sand"
          index="01"
          label="Process"
          title="How I take a product to production."
        />
        <ol className="relative grid gap-10 md:grid-cols-5 md:gap-6">
          {/* connecting line */}
          <span aria-hidden className="absolute left-[11px] top-3 bottom-3 w-px bg-ink/15 md:inset-x-0 md:bottom-auto md:left-0 md:right-0 md:top-[11px] md:h-px md:w-auto" />
          {lifecycle.steps.map((step, i) => (
            <Reveal as="li" key={step.id} delay={i * 0.07} className="relative pl-10 md:pl-0">
              <span
                aria-hidden
                className={`absolute left-0 top-0 flex h-[23px] w-[23px] items-center justify-center rounded-full border bg-sand md:static md:mb-6 ${
                  i === lifecycle.steps.length - 1 ? "border-rust" : "border-ink/25"
                }`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${i === lifecycle.steps.length - 1 ? "bg-rust" : "bg-ink/60"}`} />
              </span>
              <p className="font-mono text-xs text-rust">{step.id}</p>
              <h3 className="mt-1.5 text-xl font-medium text-ink">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{step.body}</p>
            </Reveal>
          ))}
        </ol>
        <Reveal>
          <p className="mt-16 border-t border-ink-line pt-6 font-mono text-[13px] text-ink-muted">
            <span className="text-rust">→ </span>
            {lifecycle.caption}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
