import type { StoreLink } from "@/data/portfolio";
import { AppleIcon, PlayIcon } from "./Icons";

const copy = {
  ios: { eyebrow: "Download on the", store: "App Store", name: "the App Store" },
  android: { eyebrow: "Get it on", store: "Google Play", name: "Google Play" },
} as const;

type StoreBadgeProps = StoreLink & { appName: string; size?: "md" | "sm" };

/**
 * Store badge in the style of the official Apple / Google artwork (black, rounded, hairline border).
 * To use the exact official files, drop the SVGs from Apple/Google marketing resources into /public
 * and swap the inner markup for an <img>.
 */
export function StoreBadge({ platform, url, appName, size = "md" }: StoreBadgeProps) {
  const c = copy[platform];
  const sm = size === "sm";
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${appName} on ${c.name} (opens in a new tab)`}
      className={`group inline-flex items-center gap-2 rounded-[9px] border border-[#a6a6a6]/70 bg-black text-white transition-colors hover:border-white/90 ${
        sm ? "h-9 px-2.5" : "h-11 px-3"
      }`}
    >
      {platform === "ios" ? <AppleIcon size={sm ? 18 : 22} /> : <PlayIcon size={sm ? 17 : 20} />}
      <span className="flex flex-col leading-none">
        <span className={`font-sans ${sm ? "text-[8px]" : "text-[9px]"} ${platform === "android" ? "uppercase tracking-wide" : ""}`}>
          {c.eyebrow}
        </span>
        <span className={`font-sans font-semibold tracking-tight ${sm ? "text-[13px]" : "text-[16px]"}`}>{c.store}</span>
      </span>
    </a>
  );
}
