import Image from "next/image";
import { alsoShipped, caseStudies, type CaseStudy as CaseStudyT } from "@/data/portfolio";
import { ArchitectureStrip } from "../ui/ArchitectureStrip";
import { PhoneMockup } from "../ui/PhoneMockup";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";
import { StoreBadge } from "../ui/StoreBadge";

export function SelectedWork() {
  return (
    <section id="work" aria-labelledby="work-title" className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          id="work-title"
          index="02"
          label="Selected Work"
          title="Case studies from production."
          intro="Each of these shipped to the App Store and Google Play. Problem, what I built, and the engineering that mattered."
        />
        <div className="flex flex-col gap-24 md:gap-32">
          {caseStudies.map((cs, i) => (
            <CaseStudy key={cs.id} study={cs} index={i} />
          ))}
        </div>
        <AlsoInProduction />
      </div>
    </section>
  );
}

function CaseStudy({ study, index }: { study: CaseStudyT; index: number }) {
  const flip = index % 2 === 1;
  const num = String(index + 1).padStart(2, "0");
  const titleId = `${study.id}-title`;

  return (
    <article aria-labelledby={titleId} className="scroll-mt-24" id={study.id}>
      <div className={`grid items-start gap-12 lg:gap-16 ${flip ? "lg:grid-cols-[1.1fr_0.9fr]" : "lg:grid-cols-[0.9fr_1.1fr]"}`}>
        {/* Visual column */}
        <Reveal className={`lg:sticky lg:top-24 ${flip ? "lg:order-2" : ""}`}>
          {study.cover ? (
            <figure className="overflow-hidden rounded-3xl border border-line bg-surface/60 shadow-warm">
              <Image
                src={study.cover.src}
                alt={study.cover.alt}
                width={study.cover.width}
                height={study.cover.height}
                sizes="(min-width: 1200px) 560px, (min-width: 1024px) 45vw, 100vw"
                className="h-auto w-full"
              />
              <figcaption className="flex items-center justify-between border-t border-line px-5 py-3 font-mono text-[11px] text-muted">
                <span>CS-{num}</span>
                <span>Product screens</span>
              </figcaption>
            </figure>
          ) : (
          <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-3xl border border-line bg-surface/60 px-6 py-12 shadow-warm md:min-h-[520px]">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(60% 50% at 50% 40%, rgb(233 184 114 / 0.10), transparent 70%)",
              }}
            />
            <div aria-hidden className="absolute inset-0 bg-[linear-gradient(rgb(244_235_221/0.03)_1px,transparent_1px),linear-gradient(90deg,rgb(244_235_221/0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
            <span className="label-mono absolute left-5 top-5 text-muted/70">CS-{num}</span>
            <div className="relative flex items-center">
              {study.mockups.map((m, j) => (
                <div
                  key={m.label}
                  className={study.mockups.length > 1 ? (j === 0 ? "z-10 -rotate-3" : "-ml-14 mt-16 rotate-3 opacity-95 md:-ml-10") : ""}
                >
                  <PhoneMockup {...m} />
                  {study.mockups.length > 1 && (
                    <p className="mt-3 text-center font-mono text-[11px] text-muted">{m.label} app</p>
                  )}
                </div>
              ))}
            </div>
          </div>
          )}
        </Reveal>

        {/* Content column */}
        <div className={flip ? "lg:order-1" : ""}>
          <Reveal>
            <p className="label-mono flex items-center gap-3 text-muted">
              <span className="text-terracotta">Case Study {num}</span>
            </p>
            <h3 id={titleId} className="mt-3 text-3xl font-medium leading-tight text-cream md:text-4xl">
              {study.name}
            </h3>
            <p className="mt-2 text-lg text-muted">{study.tagline}</p>
          </Reveal>

          {/* Spec sheet */}
          <Reveal delay={0.05}>
            <dl className="mt-8 divide-y divide-line overflow-hidden rounded-xl border border-line bg-surface/40 font-mono text-[12.5px]">
              {study.spec.map((row) => (
                <SpecRow key={row.key} k={row.key}>{row.value}</SpecRow>
              ))}
              <SpecRow k="Stack">{study.stack.join(" · ")}</SpecRow>
              <SpecRow k="Status">
                <span className="inline-flex items-center gap-2 text-sage">
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-sage" />
                  {study.status}
                </span>
              </SpecRow>
            </dl>
          </Reveal>

          <Reveal delay={0.08}>
            <Block label="Problem">
              <p className="text-[15px] leading-relaxed text-cream/85">{study.problem}</p>
            </Block>
          </Reveal>

          <div className="grid sm:grid-cols-2 sm:gap-6">
            <Reveal delay={0.1}>
              <Block label="What I built">
                <List items={study.built} marker="text-muted/60" />
              </Block>
            </Reveal>
            <Reveal delay={0.14}>
              <Block label="Engineering highlights">
                <List items={study.highlights} marker="text-terracotta" />
              </Block>
            </Reveal>
          </div>

          <Reveal delay={0.16}>
            <Block label="Result">
              <div className="flex flex-col gap-4">
                {study.apps.map((app, k) => (
                  <div key={app.label ?? k} className="flex flex-wrap items-center gap-3">
                    {app.label && (
                      <span className="w-full font-mono text-[11px] uppercase tracking-wider text-muted sm:w-14">{app.label}</span>
                    )}
                    {app.links.map((l) => (
                      <StoreBadge key={l.platform} {...l} appName={`${study.name}${app.label ? ` ${app.label}` : ""}`} />
                    ))}
                  </div>
                ))}
              </div>
            </Block>
          </Reveal>
        </div>
      </div>

      <Reveal className="mt-10">
        <ArchitectureStrip columns={study.architecture} title={study.name} />
      </Reveal>
    </article>
  );
}

function SpecRow({ k, children }: { k: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[88px_1fr] gap-4 px-4 py-2.5 sm:grid-cols-[104px_1fr]">
      <dt className="text-muted/70">{k}</dt>
      <dd className="text-cream/90">{children}</dd>
    </div>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mt-8">
      <h4 className="label-mono mb-3 font-normal tracking-[0.04em] text-muted">{label}</h4>
      {children}
    </div>
  );
}

function List({ items, marker }: { items: string[]; marker: string }) {
  return (
    <ul className="space-y-2 text-[15px] leading-snug text-cream/85">
      {items.map((it) => (
        <li key={it} className="flex gap-3">
          <span aria-hidden className={`mt-[1px] font-mono text-xs ${marker}`}>
            ▸
          </span>
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

function AlsoInProduction() {
  return (
    <div className="mt-28">
      <Reveal>
        <h3 className="label-mono mb-6 flex items-center gap-3 font-normal text-muted">
          <span className="text-terracotta">+</span> Also in production
        </h3>
      </Reveal>
      <ul className="grid gap-5 md:grid-cols-2">
        {alsoShipped.map((p, i) => (
          <Reveal as="li" key={p.name} delay={i * 0.06}>
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/60 transition-colors hover:border-line-strong hover:bg-elevated/60">
              <div className="relative aspect-[4/3] overflow-hidden border-b border-line">
                {p.cover ? (
                  <Image
                    src={p.cover.src}
                    alt={p.cover.alt}
                    fill
                    sizes="(min-width: 1200px) 560px, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full justify-center bg-[linear-gradient(rgb(244_235_221/0.03)_1px,transparent_1px),linear-gradient(90deg,rgb(244_235_221/0.03)_1px,transparent_1px)] bg-[size:32px_32px] pt-10">
                    <PhoneMockup label={p.name} variant={p.mockup} />
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col p-5 md:p-6">
                <p className="inline-flex items-center gap-2 font-mono text-[11px] text-sage">
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-sage" /> Live · iOS · Android
                </p>
                <h4 className="mt-2 text-2xl font-medium text-cream">{p.name}</h4>
                <p className="mt-1 text-[15px] text-muted">{p.type}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                  {p.links.map((l) => (
                    <StoreBadge key={l.platform} {...l} appName={p.name} size="sm" />
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
