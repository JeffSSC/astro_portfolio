# Architecture Patterns: Astro Portfolio

## Component Boundary Strategy

| Component Type | Responsibility | Hydration Strategy |
|----------------|---------------|-------------------|
| Layouts | Shared structure (nav, footer) | Static (no JS) |
| Page content | Static pages | Static |
| Interactive elements | Forms, theme toggle | client:visible or client:idle |
| Static listings | Project grids, experience | Static |

## Data Flow

```
Content (MDX/collections) → Astro → Static HTML → Browser
                                     ↓
                          Islands (React) where needed
```

## Patterns to Follow

### Zero-JS-by-Default Philosophy
- Every component renders as static HTML by default
- Add client directives only when interactivity is required
- Use `client:idle` for non-critical interactions (theme toggle)
- Use `client:visible` for below-fold content

### Image Optimization
```astro
<Image
  src={projectImage}
  alt={title}
  width={800}
  height={600}
  format="webp"
  loading="lazy"
/>
```

### Font Preloading
```astro
<link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin />
```

## Anti-Patterns to Avoid

- Adding React to the entire site — defeats Astro's purpose
- Not using the `<Image />` component for optimization
- Loading all JavaScript on page load — bad for Lighthouse scores
- Missing `font-display: swap` — causes FOUT (flash of unstyled text)

## Sources

- Astro Documentation: Performance Optimization
- Joost.blog: Astro SEO Guide (April 2026)