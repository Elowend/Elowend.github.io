# Stitch Prompt — Elowen's Personal Website Prototype

Use this prompt to generate a **wireframe / high-fidelity UI prototype** (not production code). **Do not include any photos, avatars, or image placeholders for people.** Use typography, icons, geometric shapes, and UI chrome only.

---

## Role

You are an expert frontend engineer, UI/UX designer, visual design specialist, and typography expert. Your goal is to design a personal website prototype that is visually consistent, maintainable in concept, and expressive of a strong design personality—not a generic template.

Before designing, internalize:
- **Tech context**: React-based personal site (single-page or multi-section with in-page navigation).
- **Design tokens**: Cyberpunk / Glitch design system (see below).
- **Component thinking**: Header, Hero, About, Projects/Works, Contact, Footer; reusable buttons, cards, nav.
- **Constraints**: No photographic assets; accessibility-friendly contrast; responsive layouts.

**Deliverable**: A complete prototype covering all pages/sections with clear navigation, interaction notes, and visual specs aligned to the design system.

---

## Project Overview

**Name**: Elowen's Personal Website  
**Purpose**: A personal homepage to showcase creative works and provide contact information.  
**Audience**: Visitors who want to learn about Elowen, browse portfolio pieces, and reach out.  
**Tone**: Geek / hacker / cyberpunk—"High-Tech, Low-Life." Dangerous, electric, rebellious, retro-futuristic.

---

## Information Architecture & Page Structure

Design **four main destinations** with click-to-jump navigation (anchor scroll or page transitions):

| Section | Route / Anchor | Content Requirements |
|---------|----------------|----------------------|
| **Home** | `#home` / Home | See Home spec below |
| **About Me** | `#about` / About | Open creative layout—designer's choice within the design system |
| **Works / Portfolio** | `#works` / Works | Open creative layout—showcase grid or terminal-style project list |
| **Contact Me** | `#contact` / Contact | See Contact spec below |

### Home Page

- **Logo**: Large capital letter **"E"** (typographic mark, not an image)—prominent, neon-accented, optionally with subtle glitch/chromatic aberration.
- **Navigation**: Fixed **top-right** corner. Items: **Home**, **About Me**, **Contact Me**, **Works**. Monospace, uppercase, accent hover glow.
- **Hero headline**: **"HI HERE IS Elowen"** — primary H1, glitched headline treatment (chromatic aberration + occasional flicker animation in spec notes).
- **Sub-hero / body**: Optional terminal-style subtitle or tagline (e.g. `> initializing portfolio...` with blinking cursor)—designer's choice.
- **Primary CTA**: **"Contact Me"** button placed **below** the hero text block. Use Glitch or Default button variant; links to Contact section.
- **Background**: Deep void black, subtle grid/circuit pattern, scanline overlay on full viewport.

### About Me Page / Section

- **Creative freedom** within the Cyberpunk system.
- Suggested directions (pick one or combine): terminal bio panel, holographic card with monospace copy, stats row (skills/tools as HUD labels), asymmetric 60/40 layout with overlapping chamfered cards.
- **No profile photo**—use initials, ASCII art block, or abstract geometric avatar frame only if needed.

### Works / Portfolio Page / Section

- **Creative freedom** within the Cyberpunk system.
- Suggested directions: project cards with chamfered corners and neon border on hover; terminal-variant cards with fake window chrome (red/yellow/green dots); 2–3 column responsive grid; project titles as monospace uppercase.
- Each card: title, short description, optional tags (e.g. `#react`, `#design`)—**no project thumbnail images**; use color blocks, gradient meshes, or icon-only placeholders.

### Contact Me Page / Section

- **Avatar area**: Empty **placeholder frame only** (chamfered border, dashed or muted outline, label like `[ AVATAR SLOT ]` or icon silhouette)—**no face or photo**.
- **Contact methods** (list or card group):
  - **WeChat** (label + handle placeholder, e.g. `wechat_id`)
  - **GitHub** (label + username placeholder)
  - **Xiaohongshu / Little Red Book** (label + account placeholder)
- Optional: terminal-style input rows with `>` prefix for each field (read-only display, not a form unless specified).

---

## Navigation & Routing Behavior

- **Position**: Navigation bar **fixed at top-right** (does not scroll away).
- **Items**: Home · About Me · Contact Me · Works (order can match reading flow: Home first in nav).
- **Behavior**: Clicking a nav item **jumps to the corresponding section/page** (smooth scroll or full section swap).
- **Active state**: Current section indicated by accent underline, glow, or brighter text.
- **Mobile**: Collapse to hamburger or compact top bar; maintain 44px touch targets.

---

## Visual Style — Cyberpunk / Glitch Design System

Apply the full design system below. The site theme is **Geek / Cyberpunk** (极客风)—not clean corporate minimalism.

### Design Philosophy

- **Core**: Digital dystopia, neon-drenched void, corrupted data streams, CRT artifacts.
- **Tactile**: Scanlines, chromatic aberration, signal noise as intentional features.
- **Shapes**: Hard, angular, chamfered corners (clip-path cuts)—no friendly rounded cards by default.
- **Light**: Neon illuminates against absolute dark; glows define hierarchy.

### Color Palette (adapt site brief: black, blue, fluorescent green)

Map the project brief onto these tokens:

```
background:          #0a0a0f      /* deep void black, slight blue undertone */
foreground:          #e0e0e0      /* primary text */
card:                #12121a      /* card surfaces */
muted:               #1c1c2e      /* elevated UI chrome */
mutedForeground:     #6b7280      /* secondary text */
accent:              #00ff88      /* PRIMARY — bright fluorescent green */
accentSecondary:     #ff00ff      /* magenta neon */
accentTertiary:      #00d4ff      /* cyan / electric blue — use for "blue" in brief */
border:              #2a2a3a
ring / focus:        #00ff88
destructive:         #ff3366
```

**Typography color**: Headlines and key labels use a **gradient from dark green to fluorescent green** (`#0d4d2e` → `#00ff88` or similar), with optional neon text-shadow glow.

### Typography

- **Headings**: Orbitron, Share Tech Mono — geometric, uppercase, wide tracking.
- **Body**: JetBrains Mono, Fira Code — terminal monospace.
- **Labels / UI**: Share Tech Mono, uppercase, letter-spacing ~0.2em.
- **Scale**: Hero H1 very large (6xl–8xl desktop); section H2 4xl–5xl; body base with relaxed leading.

### Visual Signatures (mandatory in prototype)

1. **Chromatic aberration** on hero headline (RGB split shadows).
2. **Scanline overlay** on entire page (subtle horizontal lines).
3. **Glitch effects** on key text (clip-path / skew flicker—note in spec).
4. **Neon glow** on borders and CTAs (stacked box-shadow, not flat color).
5. **Chamfered corners** on cards and buttons.
6. **Grid or circuit pattern** in at least one section background.
7. **Terminal aesthetic** in at least one block (`>` prefixes, blinking cursor).

### Components (prototype styling)

- **Buttons**: Monospace, uppercase, chamfered; variants—Default (accent border), Glitch (solid accent CTA), Outline, Ghost.
- **Cards**: Default (card bg + border), Terminal (traffic-light header bar), Holographic (glass + corner accents).
- **Inputs** (if shown): Dark bg, `>` prefix, accent focus ring + glow.

### Layout

- Max content width ~7xl; generous section padding (py-24–32).
- Asymmetry: hero 60/40 split; at least one overlapping element; optional slight skew on a section container.
- Responsive: mobile-first; nav adapts; grids 1 → 2 → 3 columns.

---

## Interaction & Motion Spec

Document these behaviors in the prototype annotations:

| Interaction | Specification |
|-------------|---------------|
| **Page / section transitions** | **Fade in / fade out** when navigating between Home, About, Works, Contact (opacity crossfade, ~300–500ms). |
| **Scroll effects** | **None** — no parallax, no scroll-triggered reveal animations. |
| **Cursor** | **Ripple effect** follows the mouse pointer (subtle expanding ring or water-ripple distortion in accent green/cyan, low opacity). |
| **Loading state** | **Old TV / CRT boot effect** on initial load: static noise, scanlines, brief "channel tuning" flicker, then fade to main UI (~1–2s). |
| **Hover** | Cards lift slightly; borders gain neon glow; nav items glow on hover. |
| **Reduced motion** | Note: respect `prefers-reduced-motion`—static glitch, no flicker animations. |

**Motion feel**: Sharp, digital, mechanical—quick transitions (100–150ms) or stepped easing for UI chrome; glitch keyframes occasional, not constant.

---

## Prototype Output Requirements

1. **Screens / frames**: Home, About Me, Works, Contact—plus optional Loading screen and Mobile breakpoint (375px) and Desktop (1440px).
2. **No images**: No photos, avatars, stock imagery, or project screenshots. Use typography, icons, gradients, and geometric placeholders only.
3. **Annotations**: Label design tokens, interaction notes (fade transition, ripple, CRT loader), and component variant names where helpful.
4. **Accessibility**: WCAG AA contrast on text; visible focus rings (accent glow); clear nav labels.
5. **Brand consistency**: Logo **"E"**, hero copy **"HI HERE IS Elowen"**, CTA **"Contact Me"**, contact channels **WeChat · GitHub · Xiaohongshu**.

---

## Summary Checklist for Stitch

- [ ] Four sections: Home, About, Works, Contact  
- [ ] Fixed top-right nav with jump navigation  
- [ ] Home: "E" logo, "HI HERE IS Elowen", Contact Me CTA  
- [ ] Contact: avatar placeholder frame only + three social/contact rows  
- [ ] Cyberpunk / Geek visual system (black, blue, fluorescent green)  
- [ ] Gradient typography (dark green → neon green)  
- [ ] Fade page transitions, cursor ripple, CRT TV loading—no scroll effects  
- [ ] No photos or avatar images anywhere in the prototype  

---

*End of Stitch prompt.*
