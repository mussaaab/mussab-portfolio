type ChipProps = { children: React.ReactNode; tone?: "default" | "sage" | "sand" };

export function Chip({ children, tone = "default" }: ChipProps) {
  const styles = {
    default: "border-line-strong bg-cream/[0.03] text-muted",
    sage: "border-sage/25 bg-sage/[0.08] text-sage",
    sand: "border-ink-line bg-ink/[0.04] text-ink-muted",
  }[tone];
  return (
    <span className={`inline-flex items-center rounded-md border px-2 py-1 font-mono text-[11px] leading-none tracking-wide ${styles}`}>
      {children}
    </span>
  );
}
