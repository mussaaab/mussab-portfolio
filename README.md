# Mussab Yaqoob · Portfolio

Next.js (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Editing content
All copy, links, projects and experience live in **`data/portfolio.ts`**. Components read from it, so you shouldn't need to touch the JSX to change content.

- **Résumé:** add `public/resume.pdf` (the path is set in `profile.resume`).
- **Real screenshots:** add a portrait PNG to `public/` and set `screenshot: "/shots/x.png"` on a case-study mockup.
- **Store badges:** drawn in the official style. To use Apple's/Google's exact artwork, replace the markup in `components/ui/StoreBadge.tsx`.

## Environment
Set these in `.env.local` (locally) or in your Vercel project settings.
- `NEXT_PUBLIC_SITE_URL`: your domain (canonical URL, OG, JSON-LD, sitemap). Defaults to `http://localhost:3000`.
- `RESEND_API_KEY` + `CONTACT_TO_EMAIL`: contact form delivery via Resend. Without them the form opens the visitor's mail client, pre-filled.
- `CONTACT_FROM_EMAIL` (optional): sender address. Defaults to `Portfolio <onboarding@resend.dev>`.

## Structure
```
app/            layout (fonts, metadata), page (sections + JSON-LD), OG image, robots, sitemap, /api/contact
components/     Navbar, TerminalCard, ContactForm, CopyEmail, Footer
components/sections/  Hero, ProofStrip, Process, SelectedWork, Archive, Experience, Capabilities, Principles, Contact
components/ui/  Reveal, SectionHeader, StoreBadge, PhoneMockup, ArchitectureStrip, Chip, Toast, Icons
data/portfolio.ts
```
