import { experience } from "@/data/portfolio";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";

export function Experience() {
  const main = experience.filter((r) => !r.minor);
  const earlier = experience.filter((r) => r.minor);

  return (
    <section id="experience" aria-labelledby="experience-title" className="border-t border-line py-24 md:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionHeader
          id="experience-title"
          index="04"
          label="Experience"
          title="Ownership, role by role."
          intro="From building web interfaces to owning mobile products from requirements to store release."
        />
        <div>
          <ol className="relative border-l border-line-strong">
            {main.map((role, i) => (
              <Reveal as="li" key={role.company} delay={i * 0.06} className="relative pb-12 pl-8 last:pb-0 md:pl-10">
                <span
                  aria-hidden
                  className={`absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full border ${
                    role.current ? "border-sage bg-sage" : "border-cream/40 bg-cocoa"
                  }`}
                />
                <p className="font-mono text-[12px] text-muted">
                  <time>{role.start}</time> – <time>{role.end}</time>
                  {role.current && (
                    <span className="ml-3 inline-flex items-center gap-1.5 rounded-full border border-sage/25 bg-sage/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-sage">
                      Current
                    </span>
                  )}
                </p>
                <h3 className="mt-2 text-xl font-medium text-cream md:text-2xl">{role.title}</h3>
                <p className="mt-1 font-mono text-[13px] text-gold/90">{role.company}</p>
                <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">{role.summary}</p>
              </Reveal>
            ))}
          </ol>
          {earlier.length > 0 && (
            <Reveal>
              <div className="mt-12 border-t border-line pt-6">
                <p className="label-mono mb-3 text-muted/60">Earlier</p>
                {earlier.map((r) => (
                  <p key={r.company} className="text-sm text-muted/70">
                    {r.title} · {r.company}{" "}
                    <span className="font-mono text-[12px] text-muted/50">
                      {r.start} – {r.end}
                    </span>
                  </p>
                ))}
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
