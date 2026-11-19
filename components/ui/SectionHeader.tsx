import { Reveal } from "./Reveal";

type SectionHeaderProps = {
  index: string;
  label: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  tone?: "dark" | "sand";
  id?: string;
};

export function SectionHeader({ index, label, title, intro, tone = "dark", id }: SectionHeaderProps) {
  const sand = tone === "sand";
  return (
    <Reveal className="mb-12 max-w-3xl md:mb-16">
      <p className={`label-mono mb-5 flex items-center gap-3 ${sand ? "text-ink-muted" : "text-muted"}`}>
        <span className={sand ? "text-rust" : "text-terracotta"}>{index}</span>
        <span aria-hidden className={sand ? "text-ink/30" : "text-cream/25"}>/</span>
        <span>{label}</span>
      </p>
      <h2
        id={id}
        className={`text-3xl font-medium leading-[1.08] md:text-5xl ${sand ? "text-ink" : "text-cream"}`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 max-w-2xl text-base leading-relaxed md:text-lg ${sand ? "text-ink-muted" : "text-muted"}`}>
          {intro}
        </p>
      )}
    </Reveal>
  );
}
