# REQUIREMENTS.md — astro_portfolio

## Requirements Overview

**Project:** astro_portfolio
**Scope:** Full v1 (all reference sections)
**Date:** 2026-04-18

---

## REQ-001: Design System Matching

**Priority:** MUST
**Type:** Visual/UX

Match The Goal's design system exactly:

- [ ] **Colors**: Use CSS custom properties with OKLCH
  - `--bg`: #F2EEE6 (light) / #0E0D0B (dark)
  - `--ink`: #14120F (light) / #EDE7D8 (dark)
  - `--ink-2`: #36322B (light) / #BDB6A4 (dark)
  - `--muted`: #8A8478 (light) / #76716A (dark)
  - `--rule`: #CFC8B9 (light) / #2A2722 (dark)
  - `--card`: #ECE7DC (light) / #16140F (dark)
  - `--accent`: oklch(0.58 0.14 145) light / oklch(0.75 0.14 145) dark
  - `--accent-soft`: with 10%/12% alpha

- [ ] **Typography**:
  - Serif: Instrument Serif (headlines, emphasis)
  - Sans: Inter (body, UI)
  - Mono: JetBrains Mono (labels, code)

- [ ] **Layout**:
  - Container: max-width 1320px, 40px padding
  - Grid baseline: 8px
  - Responsive breakpoints: 520px, 720px, 860px

- [ ] **Animations**:
  - CSS transitions where possible
  - Reveal-on-scroll patterns
  - Micro-interactions on hover/focus

---

## REQ-002: Navigation

**Priority:** MUST
**Type:** Component

Implement sticky navigation:

- [ ] Sticky positioning with blur backdrop
- [ ] Brand mark (monogram J in serif)
- [ ] Nav links: About, Experience, Work, Contact
- [ ] Language switcher (EN/PT)
- [ ] Theme toggle button (sun/moon)
- [ ] Progress indicator bar
- [ ] Scroll state (border appears on scroll)

---

## REQ-003: Hero Section

**Priority:** MUST
**Type:** Component

- [ ] Full viewport height (88vh)
- [ ] Grid dot pattern background (subtle)
- [ ] Large title: "Jefferson Silva Caires" in clamp sizing
- [ ] Subtitle: "Full-Stack Developer"
- [ ] Tagline text
- [ ] CTA buttons: "View Work" (primary), "Contact Me" (ghost)
- [ ] Availability indicator (green dot)
- [ ] Fade-in animations

---

## REQ-004: About Section

**Priority:** MUST
**Type:** Component

- [ ] Two-column layout: bio text + sidebar
- [ ] Bio paragraphs (serif font, 28px)
- [ ] Key-value list: Location, Availability, Role
- [ ] Sticky sidebar on desktop

---

## REQ-005: Experience Section

**Priority:** MUST
**Type:** Component

Timeline-based experience entries:

- [ ] Company name (large, 40px)
- [ ] Role + period
- [ ] Year badge (72px, accent color)
- [ ] Bullet points for achievements
- [ ] Chronological order (newest first)

**Content:** 3-4 experience entries from current portfolio

---

## REQ-006: Tech Stack Section

**Priority:** MUST
**Type:** Component

- [ ] Three-column grid of categories
- [ ] Chip components with dot indicators
- [ ] Categories: Frontend, Backend, Tools
- [ ] Certifications row
- [ ] Infinite marquee of tech names

---

## REQ-007: Projects Section

**Priority:** MUST
**Type:** Component

- [ ] Toggle between list/grid view
- [ ] Filter by category
- [ ] List view: expandable rows
- [ ] Grid view: 2-column cards
- [ ] Project title, description, tags
- [ ] Links: Live, GitHub

**Content:** 4-6 projects from current portfolio

---

## REQ-008: Testimonials Section

**Priority:** MUST
**Type:** Component

- [ ] Quote display with avatar
- [ ] Navigation (prev/next)
- [ ] Dot indicators
- [ ] Auto-animate option

---

## REQ-009: Contact Section

**Priority:** MUST
**Type:** Component

- [ ] 4-card grid: Email, GitHub, LinkedIn, Twitter
- [ ] Hover: invert colors
- [ ] Large label text
- [ ] Subtle icon/label

---

## REQ-010: Footer

**Priority:** MUST
**Type:** Component

- [ ] "Let's work together" call
- [ ] Large footer text
- [ ] Social links
- [ ] Copyright

---

## REQ-011: Theme Toggle

**Priority:** MUST
**Type:** Feature

- [ ] Dark/light mode switch
- [ ] Persist preference in localStorage
- [ ] System preference detection
- [ ] Smooth color transitions

---

## REQ-012: Responsive Design

**Priority:** MUST
**Type:** Feature

- [ ] Mobile (320px+)
- [ ] Tablet (720px+)
- [ ] Desktop (860px+)
- [ ] Large (1320px+)
- [ ] Touch-friendly tap targets (44px min)

---

## REQ-013: Performance

**Priority:** MUST
**Type:** Technical

- [ ] Static generation (Astro)
- [ ] Minimal JavaScript
- [ ] Optimized images
- [ ] Lighthouse score > 90

---

## REQ-014: Internationalization

**Priority:** SHOULD
**Type:** Feature

- [ ] English (en) default
- [ ] Portuguese (pt) support
- [ ] Lang switcher in nav

---

## REQ-015: Animations

**Priority:** SHOULD
**Type:** Feature

- [ ] Page load animations
- [ ] Scroll-triggered reveals
- [ ] Hover micro-interactions
- [ ] Reduced motion support