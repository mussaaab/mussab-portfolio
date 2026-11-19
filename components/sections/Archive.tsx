import { archive } from "@/data/portfolio";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";

export function Archive() {
  return (
    <section id="archive" aria-labelledby="archive-title" className="pb-24 md:pb-32">
      <div className="container-x">
        <SectionHeader
          id="archive-title"
          index="03"
          label="Engineering Archive"
          title="More products I've built."
          intro="Client products across social, streaming, booking and full-stack work."
        />
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-line">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">Archive of other projects: name, type and stack</caption>
              <thead className="hidden bg-surface/60 md:table-header-group">
                <tr className="label-mono text-muted/80">
                  <th scope="col" className="w-[22%] px-5 py-3 font-normal">Project</th>
                  <th scope="col" className="w-[30%] px-5 py-3 font-normal">Type</th>
                  <th scope="col" className="px-5 py-3 font-normal">Stack</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {archive.map((p, i) => (
                  <tr
                    key={p.name}
                    className="grid grid-cols-1 gap-1.5 px-5 py-4 transition-colors hover:bg-surface/50 md:table-row md:p-0"
                  >
                    <th scope="row" className="font-display text-lg font-medium text-cream md:px-5 md:py-4">
                      <span className="mr-3 font-mono text-[11px] font-normal text-muted/50">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {p.name}
                    </th>
                    <td className="text-[15px] text-muted md:px-5 md:py-4">{p.type}</td>
                    <td className="font-mono text-[12px] leading-relaxed text-cream/70 md:px-5 md:py-4">
                      {p.stack.join(" · ")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
