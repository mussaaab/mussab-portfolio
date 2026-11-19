import { profile } from "@/data/portfolio";
import { ArrowUpIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./ui/Icons";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-x flex flex-col items-start justify-between gap-6 py-8 sm:flex-row sm:items-center">
        <p className="font-mono text-[12px] text-muted">
          © 2026 {profile.name} · {profile.title}
        </p>
        <div className="flex items-center gap-1">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)" className="rounded-md p-2 text-muted transition-colors hover:text-cream">
            <GitHubIcon size={17} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)" className="rounded-md p-2 text-muted transition-colors hover:text-cream">
            <LinkedInIcon size={17} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="rounded-md p-2 text-muted transition-colors hover:text-cream">
            <MailIcon size={17} />
          </a>
          <span aria-hidden className="mx-3 h-4 w-px bg-line-strong" />
          <a href="#top" className="inline-flex items-center gap-1.5 rounded-md px-2 py-2 font-mono text-[12px] text-muted transition-colors hover:text-cream">
            <ArrowUpIcon size={14} /> Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
