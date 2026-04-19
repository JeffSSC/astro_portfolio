# Phase 3 Context: Hero & About Sections

**Date:** 2026-04-18
**Phase:** 3
**Focus:** Hero and About components matching reference design

---

## Prior Context

- Phase 1 completed: Design system (CSS variables, fonts, theme toggle)
- Phase 2 completed: Navigation component with anchor IDs
- Reference: `The Goal/` folder (React converted to Astro patterns)

---

## Decisions Locked (from Phases 1-2)

- **CSS Variables:** OKLCH colors in design-tokens.css (Phase 1)
- **Fonts:** Instrument Serif (serif), Inter (sans), JetBrains Mono (mono) - Phase 1
- **Theme:** Dark/light toggle exists in ThemeToggle component - Phase 1
- **Container:** max-width 1320px, 40px padding - Phase 1
- **Navigation:** Anchors #about, #experience, #work, #contact, #stack, #testimonials - Phase 2

---

## Decisions for Phase 3

### Hero Section (REQ-003)

| Element | Spec | Reference Line |
|---------|------|----------------|
| Height | 88vh min-height | `.hero { min-height: 88vh }` |
| Background | Grid dot pattern | `.hero-grid-bg` |
| Title | "Jefferson Silva Caires" clamp(80px, 16vw, 240px) | `.hero-title` |
| Role | "Full-Stack Developer" 22px | `.role-text` |
| Tagline | max-width 420px, 15px | `.hero-tagline` |
| CTA Primary | "View Work" → #work | `.btn-primary` |
| CTA Ghost | "Contact Me" → #contact | `.btn-ghost` |
| Availability | Green dot with pulse | `.dot` |
| Animations | Fade-in on load | CSS keyframes |

### About Section (REQ-004)

| Element | Spec | Reference Line |
|---------|------|----------------|
| Layout | 2-column grid (1fr 360px) | `.about-grid` |
| Bio | Serif font, 28px, line-height 1.32 | `.about-p` |
| Key-Values | Location, Availability, Role | `.kv` |
| Sidebar | Sticky on desktop (top: 100px) | `.about-side` |

---

## Implementation Notes

### Component Structure
- Create `src/components/Hero.astro` - Full hero section
- Create `src/components/About.astro` - About with bio + sidebar
- Replace existing sections in `src/pages/[lang]/index.astro`

### CSS Approach
- Use existing design tokens (design-tokens.css)
- Extend with hero-specific styles in base.css or component-scoped
- Grid dot pattern: CSS gradients

### Animations
- Use CSS keyframes (no external libraries)
- Respect `prefers-reduced-motion`

### Content (from i18n/ui.ts)
- Use existing translations for name, role, bio
- Update i18n if needed

---

## Out of Scope

- Experience section (Phase 4)
- Projects section (Phase 5)
- Testimonials (Phase 6)
- Contact cards (Phase 7)
- Advanced animations (Phase 8)

---

## Next Steps

Run `/gsd-plan-phase 3` to create detailed execution plan.