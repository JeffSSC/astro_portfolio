# Phase 4 Context: Experience Section

**Date:** 2026-04-18
**Phase:** 4
**Focus:** Timeline-based experience entries

---

## Prior Context

- Phases 1-3 completed: Design system, Navigation, Hero, About
- CSS variables, fonts, layout patterns already established
- Reference: `The Goal/` folder

---

## Decisions Locked (from Prior Phases)

- **Colors:** OKLCH system in design-tokens.css
- **Fonts:** Instrument Serif (serif), Inter (sans), JetBrains Mono (mono)
- **Layout:** Two-column grid, container 1320px
- **Animations:** CSS-first, micro-interactions

---

## Decisions for Phase 4

### Experience Structure

| Decision | Value |
|----------|-------|
| Layout | Two-column: year badge (left) + company info (right) |
| Order | Chronological, newest first |
| Year display | Large (72px), accent color |
| Company | Large (40px), serif |
| Bullets | Achievements/duties list |

### Content Source

Experience content from existing `src/i18n/ui.ts`:
- Compass UOL (Estagiário em IA)
- Informatech (Estagiário)

---

## Implementation Notes

- Follow same patterns as About.astro component
- Use i18n for localization
- Responsive: stack on mobile

---

## Next Steps

Run `/gsd-plan-phase 4 --skip-research` to create detailed plan.