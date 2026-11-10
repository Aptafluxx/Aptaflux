# Aptaflux

A multi-page Next.js foundation using the App Router, TypeScript, Tailwind CSS,
Framer Motion, and Lenis.

## Development

```bash
npm install
npm run dev
npm run build
```

The project uses the root-level `app/` directory, with shared UI in
`components/`, site data in `content/`, and font/motion setup in `lib/`.

## Editing content

- `content/home.ts` — homepage headline, proof bar, featured section headings,
  services teaser, testimonial, and CTA copy.
- `content/work.ts` — work listing and case-study names, summaries, metadata,
  story content, results, art keys, and project navigation.
- `content/services.ts` — services, deliverables, and the three-step process.
- `content/about.ts` — manifesto, values, and founder note/portrait settings.
- `content/site.ts` — shared brand/navigation/social information and contact
  page/form copy.

Placeholder copy is marked with `TODO(copy)`; values needing factual review use
`TODO(verify)`.

## Deploy

Deploy the project to Vercel using the repository's standard Next.js build
settings. Set `NEXT_PUBLIC_SITE_URL` to the canonical HTTPS domain before
deployment so metadata, sitemap, robots, and structured data use the correct
origin.

For contact form delivery, configure `RESEND_API_KEY`, `CONTACT_TO`, and
`CONTACT_FROM` in the Vercel project environment. Verify the sending domain in
Resend and use an address on that verified domain for `CONTACT_FROM`. Add the
domain to Vercel and configure its DNS records before making it the canonical
`NEXT_PUBLIC_SITE_URL`.

## Routes

- `/`
- `/work` and `/work/[slug]`
- `/services`
- `/about`
- `/contact`

## License

This repository is proprietary to Aptaflux. Unless explicitly authorized, the
source code, design, branding, assets, and other materials contained in this
repository may not be copied, modified, distributed, or commercially used.
