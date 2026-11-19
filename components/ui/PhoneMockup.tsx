import Image from "next/image";
import type { MockupVariant } from "@/data/portfolio";

type PhoneMockupProps = {
  label: string;
  variant: MockupVariant;
  screenshot?: string;
  className?: string;
  size?: "md" | "sm";
};

/**
 * Device frame with an abstract, on-brand wireframe of the app's core screen.
 * Pass `screenshot` (a portrait PNG in /public) to show a real capture instead.
 */
export function PhoneMockup({ label, variant, screenshot, className = "", size = "md" }: PhoneMockupProps) {
  const sm = size === "sm";
  return (
    <figure
      className={`relative aspect-[9/19] shrink-0 border border-line-strong bg-[#2a231f] shadow-warm-lg ${
        sm ? "w-[132px] rounded-[1.7rem] p-[5px]" : "w-[170px] rounded-[2.4rem] p-[7px] sm:w-[200px] md:w-[230px]"
      } ${className}`}
    >
      <div
        className={`relative h-full w-full overflow-hidden bg-surface ${sm ? "rounded-[1.35rem]" : "rounded-[2rem]"}`}
      >
        {/* Dynamic island */}
        <div
          aria-hidden
          className={`absolute left-1/2 z-10 -translate-x-1/2 rounded-full bg-[#1d1815] ${
            sm ? "top-1.5 h-3 w-10" : "top-2.5 h-[18px] w-[68px]"
          }`}
        />
        {screenshot ? (
          <Image src={screenshot} alt={`${label} app screen`} fill sizes="230px" className="object-cover" />
        ) : (
          <div aria-hidden className={`flex h-full flex-col ${sm ? "gap-1.5 px-2 pt-6" : "gap-2.5 px-3.5 pt-10"}`}>
            <Screen variant={variant} />
          </div>
        )}
      </div>
      <figcaption className="sr-only">{`${label}: illustrative app screen`}</figcaption>
    </figure>
  );
}

const bar = "rounded-full bg-cream/10";
const card = "rounded-xl border border-line bg-elevated/70";

function TabBar() {
  return (
    <div className="-mx-3.5 mt-auto flex items-center justify-around border-t border-line bg-cocoa/40 px-4 pb-5 pt-3">
      {[0, 1, 2, 3].map((i) => (
        <span key={i} className={`h-1.5 w-4 rounded-full ${i === 0 ? "bg-terracotta" : "bg-cream/15"}`} />
      ))}
    </div>
  );
}

function Screen({ variant }: { variant: MockupVariant }) {
  switch (variant) {
    case "marketplace":
      return (
        <>
          <div className="flex items-center justify-between">
            <div className={`${bar} h-2 w-16`} />
            <div className="h-5 w-5 rounded-full bg-cream/10" />
          </div>
          <div className="relative h-[42%] overflow-hidden rounded-xl border border-line bg-[#40372f]">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
              <path d="M0 30 Q30 40 50 20 T100 35" stroke="rgb(244 235 221 / .1)" strokeWidth="3" fill="none" />
              <path d="M10 100 L35 0" stroke="rgb(244 235 221 / .08)" strokeWidth="2" fill="none" />
              <path d="M0 70 L100 60" stroke="rgb(244 235 221 / .08)" strokeWidth="2" fill="none" />
              <path d="M70 0 Q60 50 85 100" stroke="rgb(244 235 221 / .06)" strokeWidth="5" fill="none" />
            </svg>
            <span className="absolute left-[30%] top-[38%] h-3 w-3 rounded-full border-2 border-cocoa bg-terracotta" />
            <span className="absolute left-[62%] top-[58%] h-2.5 w-2.5 rounded-full border-2 border-cocoa bg-gold" />
            <span className="absolute left-[48%] top-[20%] h-2.5 w-2.5 rounded-full border-2 border-cocoa bg-cream/60" />
          </div>
          <div className={`${card} p-2.5`}>
            <div className="mb-2 flex gap-2">
              <div className="h-8 w-10 rounded-md bg-cream/10" />
              <div className="flex flex-1 flex-col justify-center gap-1.5">
                <div className={`${bar} h-1.5 w-3/4`} />
                <div className={`${bar} h-1.5 w-1/2`} />
              </div>
            </div>
            <div className="h-6 rounded-md bg-terracotta/90" />
          </div>
          <div className={`${card} h-10`} />
          <TabBar />
        </>
      );
    case "chat":
      return (
        <>
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-sage/40" />
            <div className="flex flex-col gap-1">
              <div className={`${bar} h-1.5 w-14`} />
              <div className="h-1 w-8 rounded-full bg-sage/50" />
            </div>
          </div>
          <div className="mt-1 flex flex-1 flex-col gap-2">
            <div className="h-7 w-3/4 rounded-xl rounded-bl-sm bg-elevated" />
            <div className="ml-auto h-7 w-2/3 rounded-xl rounded-br-sm bg-terracotta/80" />
            <div className="h-11 w-4/5 rounded-xl rounded-bl-sm bg-elevated" />
            <div className={`${card} p-2`}>
              <div className="mb-1.5 flex items-center justify-between">
                <div className={`${bar} h-1.5 w-12`} />
                <div className="h-1.5 w-6 rounded-full bg-gold/70" />
              </div>
              <div className={`${bar} h-1.5 w-full`} />
            </div>
            <div className="ml-auto h-7 w-1/2 rounded-xl rounded-br-sm bg-terracotta/80" />
          </div>
          <div className="mb-4 flex h-8 items-center gap-2 rounded-full border border-line bg-elevated/60 px-2.5">
            <div className={`${bar} h-1.5 flex-1`} />
            <div className="h-4 w-4 rounded-full bg-terracotta" />
          </div>
        </>
      );
    case "finance":
      return (
        <>
          <div className={`${bar} h-1.5 w-12`} />
          <div className="font-display text-lg font-medium tracking-tight text-cream/90">$48,210</div>
          <div className={`${card} p-2.5`}>
            <div className="flex h-20 items-end gap-1.5">
              {[38, 52, 44, 66, 58, 74, 62, 88].map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${h}%` }}
                  className={`flex-1 rounded-sm ${i === 7 ? "bg-terracotta" : i === 5 ? "bg-gold/80" : "bg-cream/15"}`}
                />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className={`${card} p-2`}>
              <div className="mb-1.5 h-1 w-6 rounded-full bg-sage/70" />
              <div className={`${bar} h-1.5 w-10`} />
            </div>
            <div className={`${card} p-2`}>
              <div className="mb-1.5 h-1 w-6 rounded-full bg-terracotta/80" />
              <div className={`${bar} h-1.5 w-8`} />
            </div>
          </div>
          {[0.7, 0.5, 0.6].map((w, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-md bg-cream/10" />
              <div className={`${bar} h-1.5`} style={{ width: `${w * 100}%` }} />
            </div>
          ))}
          <TabBar />
        </>
      );
    case "video":
      return (
        <>
          <div className="relative -mx-3.5 -mt-10 h-[55%] bg-gradient-to-b from-[#5a4a3f] to-[#3e342d]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/15 backdrop-blur">
                <div className="ml-0.5 h-0 w-0 border-y-[7px] border-l-[11px] border-y-transparent border-l-cream/80" />
              </div>
            </div>
            <div className="absolute inset-x-3.5 bottom-3">
              <div className="h-1 rounded-full bg-cream/15">
                <div className="h-1 w-2/5 rounded-full bg-terracotta" />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className={`${bar} h-2 w-20`} />
            <div className="rounded-full border border-gold/40 px-1.5 py-0.5 font-mono text-[7px] text-gold">PRO</div>
          </div>
          <div className="flex gap-3">
            {["♡", "◎", "⌑"].map((g) => (
              <div key={g} className="h-5 w-5 rounded-md bg-cream/10" />
            ))}
          </div>
          <div className={`${card} h-9`} />
          <div className={`${card} h-9`} />
          <TabBar />
        </>
      );
    case "calendar":
      return (
        <>
          <div className={`${bar} h-1.5 w-10`} />
          <div className="grid grid-cols-7 gap-[3px]">
            {Array.from({ length: 28 }).map((_, i) => (
              <div
                key={i}
                className={`aspect-square rounded-[3px] ${
                  i === 17 ? "bg-terracotta" : i === 9 || i === 22 ? "bg-sage/50" : "bg-cream/[0.07]"
                }`}
              />
            ))}
          </div>
          <div className={`${card} h-7`} />
          <div className={`${card} h-7`} />
        </>
      );
    case "commerce":
      return (
        <>
          <div className="h-5 rounded-full border border-line bg-elevated/60" />
          <div className="grid grid-cols-2 gap-1.5">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className={`${card} p-1`}>
                <div className={`mb-1 aspect-square rounded-md ${i === 1 ? "bg-gold/30" : "bg-cream/10"}`} />
                <div className={`${bar} h-1 w-3/4`} />
              </div>
            ))}
          </div>
          <div className="h-5 rounded-md bg-terracotta/90" />
        </>
      );
  }
}
