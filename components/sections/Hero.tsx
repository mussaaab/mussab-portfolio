import { profile } from "@/data/portfolio";
import { ArrowRightIcon, GitHubIcon, LinkedInIcon, MailIcon } from "../ui/Icons";
import { TerminalCard } from "../TerminalCard";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative">
      <div className="container-x relative grid items-center gap-14 pb-20 pt-14 md:pb-28 md:pt-24 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <div>
          <div className="hero-in" style={{ animationDelay: "0.00s" }}>
            <p className="label-mono mb-7 flex flex-wrap items-center gap-x-2 gap-y-1 text-muted">
              <span className="text-cream">{profile.title}</span>
              <span aria-hidden className="text-terracotta">·</span>
              <span>{profile.discipline}</span>
              <span aria-hidden className="text-terracotta">·</span>
              <span>
                {profile.location} <span className="normal-case text-muted/70">({profile.locationNote})</span>
              </span>
            </p>
          </div>
          <div className="hero-in" style={{ animationDelay: "0.05s" }}>
            <h1
              id="hero-title"
              className="text-[2.6rem] font-medium leading-[1.02] tracking-[-0.035em] text-cream sm:text-6xl lg:text-[4.4rem]"
            >
              I take products from concept to <span className="text-terracotta">production.</span>
            </h1>
          </div>
          <div className="hero-in" style={{ animationDelay: "0.10s" }}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted md:text-lg">{profile.intro}</p>
          </div>
          <div className="hero-in" style={{ animationDelay: "0.15s" }}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-terracotta px-5 py-3 text-sm font-medium text-ink shadow-[0_10px_30px_-10px_rgb(224_138_79/0.6)] transition-colors hover:bg-[#e89a62]"
              >
                View Case Studies
                <ArrowRightIcon className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-line-strong px-5 py-3 text-sm font-medium text-cream transition-colors hover:border-cream/30 hover:bg-cream/[0.04]"
              >
                Get in Touch
              </a>
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-3 font-mono text-[13px] text-muted underline decoration-cream/20 underline-offset-4 transition-colors hover:text-cream hover:decoration-terracotta"
              >
                Résumé ↗<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
          <div className="hero-in" style={{ animationDelay: "0.20s" }}>
            <ul className="mt-10 flex items-center gap-1" aria-label="Profiles">
              {[
                { href: profile.github, label: "GitHub", Icon: GitHubIcon, ext: true },
                { href: profile.linkedin, label: "LinkedIn", Icon: LinkedInIcon, ext: true },
                { href: `mailto:${profile.email}`, label: "Email", Icon: MailIcon, ext: false },
              ].map(({ href, label, Icon, ext }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex items-center gap-2 rounded-md px-2.5 py-2 font-mono text-xs text-muted transition-colors hover:bg-cream/[0.04] hover:text-cream"
                  >
                    <Icon size={16} />
                    {label}
                    {ext && <span className="sr-only">(opens in a new tab)</span>}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="hero-in" style={{ animationDelay: "0.15s" }}>
          <TerminalCard />
        </div>
      </div>
    </section>
  );
}
