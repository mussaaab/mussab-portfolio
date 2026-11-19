import { capabilities } from "@/data/portfolio";
import { Chip } from "../ui/Chip";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";

export function Capabilities() {
  return (
    <section id="capabilities" aria-labelledby="capabilities-title" className="border-t border-line py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          id="capabilities-title"
          index="05"
          label="Technical Capabilities"
          title="The stack, layer by layer."
        />
        <div className="grid overflow-hidden rounded-2xl border border-line md:grid-cols-2">
          {capabilities.map((group, i) => (
            <Reveal
              key={group.layer}
              delay={i * 0.05}
              className={`border-line p-6 md:p-8 ${i > 0 ? "border-t" : ""} ${i === 1 ? "md:border-t-0" : ""} ${
                i % 2 === 1 ? "md:border-l" : ""
              }`}
            >
              <h3 className="mb-5 flex items-baseline gap-3 text-lg font-medium text-cream">
                <span className="font-mono text-[11px] font-normal text-terracotta">L{i + 1}</span>
                {group.layer}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <Chip>{item}</Chip>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
