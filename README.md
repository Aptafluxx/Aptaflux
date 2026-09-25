# Aptaflux — B2B Agency Landing Page

Next.js (App Router, TypeScript) + Tailwind CSS + Framer Motion + Lucide React.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy

Push to a Git repo and import it in Vercel — zero config needed.

## Wiring up the contact form

The form in `components/ContactForm.tsx` posts to a placeholder endpoint.
Replace `FORM_ENDPOINT` near the top of that file with your real
Formspree or Web3Forms endpoint:

- **Formspree**: `https://formspree.io/f/{your_form_id}`
- **Web3Forms**: `https://api.web3forms.com/submit`, and add a hidden
  input with your access key:
  `<input type="hidden" name="access_key" value="YOUR_KEY" />`

## Structure

```
app/
  layout.tsx      Root layout, fonts, metadata
  page.tsx         Assembles all sections
  globals.css      Design tokens, base styles
components/
  NavBar.tsx       Sticky nav + mobile menu
  Hero.tsx         Hero section
  InfraBanner.tsx  Tech stack trust banner
  Capabilities.tsx Core capabilities grid
  CaseStudies.tsx  Case study alternating blocks
  CaseStudyArt.tsx Bespoke SVG illustrations per case study
  Process.tsx      4-step methodology timeline
  ContactForm.tsx  Lead capture form
  Footer.tsx       Footer
  ui.tsx           Shared button/section primitives
```
