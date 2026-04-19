# Portfolio — Astro + Tailwind

Refactor of the portfolio as an **Astro 5** project with **Tailwind CSS** and a small set of **React islands** (hydrated only where interactivity is needed).

## Structure

```
astro/
├── astro.config.mjs          # React + Tailwind integrations, static output
├── tailwind.config.mjs       # Design tokens via CSS vars (accent, ink, etc.)
├── src/
│   ├── data/portfolio.ts     # Single source of truth for all content
│   ├── styles/global.css     # Tokens, base, component layer helpers
│   ├── layouts/Base.astro    # HTML shell, fonts, theme bootstrap
│   ├── components/
│   │   ├── Nav.tsx           # client:load — scroll progress, theme toggle
│   │   ├── Hero.tsx          # client:load — cursor spotlight, live clock
│   │   ├── About.astro       # static
│   │   ├── Projects.tsx      # client:visible — filter + expand rows
│   │   ├── Experience.astro  # static
│   │   ├── Stack.astro       # static (CSS marquee)
│   │   ├── Testimonials.tsx  # client:visible — carousel
│   │   ├── Contact.astro     # static
│   │   └── Footer.astro      # static
│   └── pages/index.astro     # composition
```

## Why this is faster than the previous SPA

- **Static HTML by default** — sections that don't need JS (about, experience, stack, contact, footer) render zero client code.
- **Partial hydration** — only `Nav` and `Hero` hydrate on load. `Projects` and `Testimonials` hydrate when they scroll into view (`client:visible`).
- **No Babel in the browser** — real TSX build at compile time, not `<script type="text/babel">`.
- **Tailwind purge** — CSS ships only what's used.
- **No CDN React** — bundled + tree-shaken, fonts preconnected with `display=swap`.

## Run locally

```bash
cd astro
pnpm install      # or npm / yarn
pnpm dev          # localhost:4321
pnpm build        # static output in ./dist
pnpm preview
```

## Deploy

Any static host: Cloudflare Pages, Vercel, Netlify, AWS S3 + CloudFront.
Build command: `pnpm build` — output dir: `dist/`.

## Tokens

All colors are CSS custom properties in `global.css`. `html[data-theme="dark"]` flips the palette. Tailwind consumes them via `tailwind.config.mjs` so utilities like `bg-bg`, `text-ink`, `border-rule` stay in sync.

## Notes

- The live preview in this workspace (`index.html` + `app.jsx` at the project root) is the single-file version, kept for visual reference. The `astro/` folder is the production build.
- React components use `"use client"` implicitly via Astro's `client:*` directives — no extra pragmas needed.
- Animations respect `prefers-reduced-motion`.
