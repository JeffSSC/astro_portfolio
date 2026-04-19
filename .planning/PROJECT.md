# PROJECT.md — astro_portfolio

## Project Context

**Date:** 2026-04-18
**Type:** Working rebuild
**Goal:** Redesign UI to match reference project

### Reference Design

Target design from `The Goal/` folder — a React-based portfolio with:
- Minimalist, editorial aesthetic with Instrument Serif + Inter fonts
- Warm, paper-like background (#F2EEE6 light / #0E0D0B dark)
- Monochromatic accent using OKLCH color space (hue 145, adjustable)
- Grid-based layout with subtle dot patterns
- Sticky navigation with blur backdrop
- Large typography (clamp-based scaling)
- Smooth animations and micro-interactions

### Current Codebase

Astro-based portfolio with:
- Stack: Astro, Tailwind CSS, TypeScript, Three.js
- Structure: Components in `src/components/`, pages in `src/pages/`
- Features: Projects, experience, tech stack, testimonials, i18n

### Scope

**Transform** existing Astro portfolio to match The Goal's design system while maintaining Astro's performance benefits.

### Exclusions (Out of Scope)

- Three.js 3D elements (remove, simplify to CSS grid background)
- Complex build tooling changes

---

## Vision

A high-performance, minimalist portfolio built on Astro that matches The Goal's aesthetic exactly — clean typography, warm color palette, thoughtful animations, and excellent responsive behavior.

---

## Success Criteria

1. Design matches The Goal reference (colors, typography, layout, animations)
2. All sections from reference implemented: Hero, About, Experience, Stack, Projects, Testimonials, Contact, Footer
3. Theme toggle (dark/light) works correctly
4. Responsive at all breakpoints (mobile, tablet, desktop)
5. Animations smooth and performant
6. Page loads fast (Astro static generation)
7. Lighthouse performance score > 90