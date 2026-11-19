import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Archive } from "@/components/sections/Archive";
import { Capabilities } from "@/components/sections/Capabilities";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Principles } from "@/components/sections/Principles";
import { Process } from "@/components/sections/Process";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { capabilities, profile, siteUrl } from "@/data/portfolio";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: `${profile.title} (${profile.discipline})`,
  description: profile.description,
  url: siteUrl,
  email: `mailto:${profile.email}`,
  telephone: profile.phone.replace(/\s/g, ""),
  address: { "@type": "PostalAddress", addressLocality: "Karachi", addressCountry: "PK" },
  sameAs: [profile.linkedin, profile.github],
  knowsLanguage: profile.languages.map((l) => l.name),
  knowsAbout: capabilities.flatMap((c) => c.items),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
      />
      {/* Faint amber glow behind the hero (sits under the sticky nav too) */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[900px] overflow-hidden">
        <div
          className="absolute -top-64 left-1/2 h-[900px] w-[1200px] -translate-x-1/2"
          style={{
            background:
              "radial-gradient(closest-side, rgb(233 184 114 / 0.15), rgb(224 138 79 / 0.05) 55%, transparent 100%)",
          }}
        />
      </div>
      <Navbar />
      <main id="main">
        <Hero />
        <ProofStrip />
        <Process />
        <SelectedWork />
        <Archive />
        <Experience />
        <Capabilities />
        <Principles />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
