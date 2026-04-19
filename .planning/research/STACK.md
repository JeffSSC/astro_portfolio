# Technology Stack: Astro Portfolio 2026

## Recommended Stack

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| Astro | 5.x | Framework | Zero JS by default, islands architecture, built-in optimizations |
| Tailwind CSS | 4.x | Styling | CSS-first config, performance-optimized |
| TypeScript | 5.x | Type safety | Better DX, catch errors at build time |
| React | 19.x | Interactive islands | Only load where needed via hydration directives |
| @fontsource | latest | Font hosting | Self-hosted, no external requests, no layout shift |

## Key Alternatives Considered

| Category | Recommended | Alternative | Why Not |
|----------|------------|------------|---------|
| Framework | Astro | Next.js | Next.js ships 500KB+ runtime; Astro ships zero JS by default |
| Styling | Tailwind CSS | CSS Modules | Tailwind purges unused CSS, smaller bundles |
| Animation | CSS + ViewTransitions | GSAP | Use GSAP only for complex sequences; CSS for everything else |

## Installation

```bash
# Core dependencies
npm install astro@^5.0 @astrojs/tailwind @astrojs/react react react-dom typescript

# Fonts (self-hosted)
npm install @fontsource/inter @fontsource/instrument-serif
```

## Sources

- Astro Documentation: Performance Optimization Guide
- BetterLink Blog: Astro Performance Optimization (December 2025)