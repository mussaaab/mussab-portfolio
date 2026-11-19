import { contact, profile } from "@/data/portfolio";
import { ContactForm } from "../ContactForm";
import { CopyEmail } from "../CopyEmail";
import { GitHubIcon, LinkedInIcon, PhoneIcon } from "../ui/Icons";
import { Reveal } from "../ui/Reveal";

export function Contact() {
  const links = [
    { label: "Phone / WhatsApp", value: profile.phone, href: profile.whatsapp, Icon: PhoneIcon, ext: true },
    { label: "LinkedIn", value: "in/muhammad-mussab", href: profile.linkedin, Icon: LinkedInIcon, ext: true },
    { label: "GitHub", value: "github.com/mussaaab", href: profile.github, Icon: GitHubIcon, ext: true },
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="on-sand bg-sand text-ink">
      <div className="container-x py-24 md:py-32">
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="label-mono mb-5 flex items-center gap-3 text-ink-muted">
                <span className="text-rust">07</span>
                <span aria-hidden className="text-ink/30">/</span>
                <span>Contact</span>
              </p>
              <h2 id="contact-title" className="text-3xl font-medium leading-[1.08] text-ink md:text-5xl">
                {contact.headline}
              </h2>
              <p className="mt-5 max-w-md text-lg text-ink-muted">{contact.sub}</p>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-12">
                <p className="mb-2 font-mono text-[12px] text-ink-muted">Email</p>
                <CopyEmail email={profile.email} />
              </div>
              <ul className="mt-10 divide-y divide-ink-line border-y border-ink-line">
                {links.map(({ label, value, href, Icon, ext }) => (
                  <li key={label}>
                    <a
                      href={href}
                      {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="group flex items-center justify-between gap-4 py-4"
                    >
                      <span className="flex items-center gap-3 font-mono text-[12px] text-ink-muted">
                        <Icon size={16} />
                        {label}
                      </span>
                      <span className="text-[15px] text-ink transition-colors group-hover:text-rust">
                        {value} <span aria-hidden>↗</span>
                        {ext && <span className="sr-only"> (opens in a new tab)</span>}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-ink/10 bg-[#efe6da] p-6 shadow-[0_30px_60px_-40px_rgb(46_38_34/0.45)] md:p-8">
              <p className="mb-6 font-mono text-[12px] text-ink-muted">
                <span className="text-rust">$</span> new message
              </p>
              <ContactForm />
            </div>
          </Reveal>
        </div>

        <div className="mt-20 flex flex-col gap-2 border-t border-ink-line pt-6 font-mono text-[12px] text-ink-muted sm:flex-row sm:gap-8">
          <p>
            <span className="text-ink/50">Education:</span> {profile.education}
          </p>
          <p>
            <span className="text-ink/50">Languages:</span>{" "}
            {profile.languages.map((l) => `${l.name} (${l.level})`).join(", ")}
          </p>
        </div>
      </div>
    </section>
  );
}
