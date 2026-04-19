# Domain Pitfalls: Portfolio Sites

## Critical Pitfalls

### 1. Performance Budget Overruns
**What goes wrong:** Too much JavaScript, unoptimized images, heavy fonts cause slow loads
**Prevention:** 
- Use Astro's islands architecture — only hydrate what needs interaction
- Use `<Image />` component with WebP format
- Preload critical fonts with `font-display: swap`
- Run Lighthouse audits early and often

**Detection:** Lighthouse performance score < 90, LCP > 2.5s

### 2. Visual Overload
**What goes wrong:** Too many effects, animations, colors overwhelm visitors
**Prevention:**
- Limit to 2-3 colors
- Use CSS for simple interactions only
- Let content breathe with generous whitespace

**Detection:** Visitors leave within 3 seconds, no clear CTA

## Moderate Pitfalls

### 3. Case Study Weakness
**What goes wrong:** Project pages just show images with no context
**Prevention:** Structure case studies with clear problem → solution → results sections

### 4. Typography Mismatch
**What goes wrong:** Using fonts at wrong sizes, poor hierarchy
**Prevention:**
- Body text: 16px minimum, 1.5-1.7 line-height
- Clear heading/body weight contrast
- Limit to two font families

## Phase-Specific Warnings

| Phase | Pitfall | Mitigation |
|-------|---------|------------|
| Design matching | Color system complexity | Use OKLCH color space, CSS variables |
| Animations | Performance drain | Use CSS + transform/opacity only |
| Responsive | Layout breaks | Test mobile-first throughout |
| Theme toggle | Flash of wrong theme | Set theme in `<head>` script |

## Sources

- The Crit: Complete Design Portfolio Guide 2026 (March 2026)
- BetterLink Blog: Astro Performance Optimization (December 2025)