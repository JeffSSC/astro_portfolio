# Phase 2 Context: Layout & Navigation

**Date:** 2026-04-18
**Phase:** 2
**Focus:** Navigation component and base layout

---

## Prior Context

- Phase 1 completed: Design system (CSS variables, fonts, theme toggle)
- Reference: `The Goal/` folder

---

## Decisions Locked (from Phase 1)

- **CSS Variables:** OKLCH colors in design-tokens.css
- **Fonts:** Instrument Serif (serif), Inter (sans), JetBrains Mono (mono)
- **Theme:** Dark/light toggle exists, localStorage persistence
- **Container:** max-width 1320px, 40px padding

---

## Decisions for Phase 2

### Navigation Structure

| Decision | Locked |
|----------|--------|
| Position | Sticky with backdrop blur |
| Brand | "J" monogram in serif |
| Links | About, Experience, Work, Contact |
| Hover | Underline animation |
| Scroll state | Border appears on scroll |
| Mobile | Hide links, show brand only |

### Navigation Links

| Link | Target | Behavior |
|------|--------|----------|
| About | `#about` | Smooth scroll |
| Experience | `#experience` | Smooth scroll |
| Work | `#work` | Smooth scroll |
| Contact | `#contact` | Smooth scroll |

### Language Switcher

| Decision | Value |
|----------|-------|
| Languages | EN / PT |
| Persist | localStorage `lang` |
| Default | EN |

### Footer (deferred to Phase 7)

Footer section has been deferred to Phase 7 per roadmap.

---

## Implementation Notes

- Use anchor IDs matching section names
- Scroll behavior: `scroll-behavior: smooth` in base.css
- Mobile breakpoint: <720px hides nav-links, shows brand only
- ThemeToggle component already exists (Phase 1)

---

## Out of Scope

- Hamburger menu (not in reference, mobile hides links)
- Progress bar (mentioned in reference but not blocking)

---

## Next Steps

Run `/gsd-plan-phase 2` to create detailed execution plan.