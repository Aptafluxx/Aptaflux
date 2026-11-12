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

## Content to replace

The following content modules contain placeholder copy marked with
`// PLACEHOLDER: replace later`. Review and replace it before launch:

- `content/about.ts` — About story, principles, and page CTA.
- `content/services.ts` — service deliverables, process descriptions, FAQs, and comparison content.
- `content/work.ts` — portfolio project challenges, approaches, and outcomes.
- `content/site.ts` — contact follow-up steps.
- `content/legal.ts` — privacy policy and terms, which require legal review.

## Deploy

Deploy the project to Vercel using the repository's standard Next.js build
settings. Set `NEXT_PUBLIC_SITE_URL` to the canonical HTTPS domain before
deployment so metadata, sitemap, robots, and structured data use the correct
origin.

Indexing is disabled by default: `NEXT_PUBLIC_ALLOW_INDEXING=false` adds
`noindex`/`nofollow`, blocks all crawlers in `robots.txt`, and keeps the sitemap
empty. Set `NEXT_PUBLIC_ALLOW_INDEXING=true` in the deployment environment when
you are ready to launch; this restores indexing and publishes the sitemap.

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
- `/privacy`
- `/terms`

## License

This repository is proprietary to Aptaflux. Unless explicitly authorized, the
source code, design, branding, assets, and other materials contained in this
repository may not be copied, modified, distributed, or commercially used.
