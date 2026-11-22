# JG Tech Thinking

Personal brand website — Astro + Vercel deployment.

## Stack

- **Framework**: [Astro](https://astro.build) (static-first)
- **Hosting**: [Vercel](https://vercel.com)
- **Fonts**: Inter + Space Grotesk (Google Fonts)
- **Styling**: Vanilla CSS with design tokens (no Tailwind, no framework)

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321)

## Deploy to Vercel

1. Push this repo to GitHub
2. Import into [Vercel](https://vercel.com/new)
3. Vercel auto-detects Astro — no config needed beyond `vercel.json`
4. Add your custom domain in Vercel → Domains

## Content

### Pages
- `src/pages/index.astro` — Home / Hero
- `src/pages/about.astro` — Executive Profile
- `src/pages/writing/index.astro` — Writing index
- `src/pages/cv.astro` — CV (on-page + print-to-PDF)

### Adding Articles
Currently using hardcoded placeholder posts in `writing/index.astro`.
When ready to add real articles, migrate to Astro Content Collections:

1. Create `src/content/writing/` directory
2. Add `src/content/config.ts` with schema
3. Add `.md` or `.mdx` files per post
4. Update `writing/index.astro` to use `getCollection('writing')`

### Updating CV
Edit the `roles`, `education`, and `skills` arrays in `src/pages/cv.astro`.

## Brand Tokens (CSS Variables)

All design tokens live in `src/styles/global.css`.

| Token | Value | Use |
|-------|-------|-----|
| `--c-base` | `#111315` | Page background |
| `--c-surface` | `#1A1D20` | Cards, nav, footer |
| `--c-accent` | `#FF5500` | Orange dot, CTAs, highlights |
| `--c-text` | `#FFFFFF` | Primary text |
| `--c-text-muted` | `#B0B3B8` | Secondary text |

## Find & Replace Before Launch

Search the codebase for these placeholders and replace:

- `[Your Name]` — your full name
- `hello@yourdomain.com` — your email
- `yourhandle` — LinkedIn/GitHub handles
- `yourdomain.com` — your actual domain (also update `astro.config.mjs`)
- `[Company Name]` — your employers
- CV role content — your actual history

## Visual testing

Advisory layout checks that never block a merge. See `docs/design/README.md` and `CLAUDE.md` for the rules.

- `npm run visual` checks every page in `visual/pages.json` at 380, 768, 1024 and 1920 px: no horizontal overflow, no broken images, no clipped text, no console errors. It compares against baselines where they exist.
- Baselines are created by CI. On a pull request from this repository, the "Create missing baselines" job runs `tools/ci-baseline.sh`, which runs the baseline command (creates only the missing ones, never overwrites), commits them to the branch and comments the list. Review the images in the diff; approving the pull request approves them. To change an approved baseline, delete its file in the pull request and CI recreates it. Do not commit baselines made locally: a different browser build renders slightly differently.
- `npm run visual:evidence` writes screenshots to `visual/output/evidence/` for the pull request description.
- When a draft post is published, add its page to `visual/pages.json`.
- If Playwright cannot download Chromium, set `CHROME_PATH` to an installed Chrome.
- Netlify deploy previews already give a preview URL per pull request, so no separate preview deploy is configured here.
