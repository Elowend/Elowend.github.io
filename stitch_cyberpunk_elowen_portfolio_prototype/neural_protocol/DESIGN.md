---
name: Neural Protocol
colors:
  surface: '#131318'
  surface-dim: '#131318'
  surface-bright: '#39383e'
  surface-container-lowest: '#0e0e13'
  surface-container-low: '#1b1b20'
  surface-container: '#1f1f25'
  surface-container-high: '#2a292f'
  surface-container-highest: '#35343a'
  on-surface: '#e4e1e9'
  on-surface-variant: '#b9cbb9'
  inverse-surface: '#e4e1e9'
  inverse-on-surface: '#303036'
  outline: '#849585'
  outline-variant: '#3b4b3d'
  surface-tint: '#00e479'
  primary: '#f1ffef'
  on-primary: '#003919'
  primary-container: '#00ff88'
  on-primary-container: '#007139'
  inverse-primary: '#006d37'
  secondary: '#ffabf3'
  on-secondary: '#5b005b'
  secondary-container: '#fe00fe'
  on-secondary-container: '#500050'
  tertiary: '#f6fcff'
  on-tertiary: '#003642'
  tertiary-container: '#a7e8ff'
  on-tertiary-container: '#006b82'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#60ff99'
  primary-fixed-dim: '#00e479'
  on-primary-fixed: '#00210c'
  on-primary-fixed-variant: '#005228'
  secondary-fixed: '#ffd7f5'
  secondary-fixed-dim: '#ffabf3'
  on-secondary-fixed: '#380038'
  on-secondary-fixed-variant: '#810081'
  tertiary-fixed: '#b4ebff'
  tertiary-fixed-dim: '#3cd7ff'
  on-tertiary-fixed: '#001f27'
  on-tertiary-fixed-variant: '#004e5f'
  background: '#131318'
  on-background: '#e4e1e9'
  surface-variant: '#35343a'
typography:
  display-lg:
    fontFamily: spaceGrotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: 0.1em
  headline-lg:
    fontFamily: spaceGrotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: spaceGrotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: spaceGrotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: jetbrainsMono
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: jetbrainsMono
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: jetbrainsMono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  code-sm:
    fontFamily: jetbrainsMono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  container-max: 1280px
---

## Brand & Style
The design system is built on the "High-Tech, Low-Life" philosophy, channeling a hacker-noir aesthetic for a personal portfolio. The personality is precise, technical, and slightly subversive, evoking the feeling of a high-end terminal interface found in a dystopian sprawl. 

The style merges **Brutalism** with **Vaporwave** influences—specifically through the use of neon-saturated accents against a crushing void-black background. Visual interest is driven by technical artifacts: scanlines, grid systems, and data-heavy layouts. The emotional response should be one of "digital craftsmanship" and "unfiltered access."

## Colors
The palette is anchored in a "Deep Void" black to ensure maximum contrast for the fluorescent accents. 

- **Primary (Fluorescent Green):** Used for terminal prompts, successful states, and primary actions.
- **Secondary (Magenta Neon):** Reserved for warnings, critical errors, or high-energy highlights.
- **Tertiary (Electric Cyan):** Used for informational overlays, links, and data visualization.
- **Neutral (Slate/Carbon):** Backgrounds and borders use desaturated cool tones to maintain a technical, hardware-like feel.

Implement a 1px "Scanline" overlay using a repeating linear gradient of `rgba(0, 255, 136, 0.03)` to simulate cathode-ray tube displays.

## Typography
Typography is the primary visual engine of this design system. 

**Headlines:** Utilize a heavy geometric sans-serif (Space Grotesk as a proxy for Orbitron's structure). All major headlines must feature a linear gradient from `#0d4d2e` to `#00ff88`. Apply a `text-shadow` of `2px 0 #ff00ff` at 30% opacity to simulate chromatic aberration on hover.

**Body/UI:** JetBrains Mono provides the terminal-style clarity required for "High-Tech" interfaces. Use code-inspired prefixes for list items (e.g., `[01]`, `> `, or `root@elowen:~#`). 

Ensure all technical labels are set in uppercase with slight tracking to enhance the "monitored" aesthetic.

## Layout & Spacing
The layout follows a **Fixed Grid** model based on a 12-column system. 

- **Grid Lines:** On desktop, render the grid lines faintly (`#2a2a3a` at 0.1 opacity) in the background.
- **Margins:** Generous outer margins to focus the "console" in the center of the screen.
- **Alignment:** Strictly lean into a "Data Dashboard" feel. Use asymmetrical layouts where sidebars or status tickers occupy 2 or 3 columns, leaving the rest for the primary "data stream."
- **Mobile:** Transition to a single-column view where elements are stacked within "modules" separated by thick 2px horizontal rules.

## Elevation & Depth
In this design system, depth is not created by physical shadows, but by **Radiance** and **Tonal Layering**.

- **Surface Tiers:** The background is `#0a0a0f`. "Floating" cards use `#12121a` with a 1px solid border of `#2a2a3a`.
- **Neon Glow:** Interactive elements do not cast shadows; they emit light. Use `box-shadow: 0 0 15px rgba(0, 255, 136, 0.4)` for primary active states.
- **Transparency:** Use semi-transparent backdrops (`rgba(18, 18, 26, 0.8)`) with `backdrop-filter: blur(10px)` for navigation bars to suggest a digital overlay atop the background grid.

## Shapes
The shape language is strictly **Angular and Chamfered**. 

Avoid standard border-radii. Instead, use CSS `clip-path` to create 45-degree angular cuts (chamfers) on the top-right and bottom-left corners of buttons and cards. 

**Component Geometry:**
- **Cards:** 8px chamfer on the top-right corner.
- **Buttons:** 4px chamfer on the bottom-left corner.
- **Inputs:** Square, sharp corners with a 1px inset border.

## Components
- **Buttons:** Background color of `#00ff88` with black text for primary; transparent with `#ff00ff` border for secondary. On hover, apply a rapid "glitch" animation (jittering position by 1-2px).
- **Input Fields:** Styled as terminal prompts. Include a leading `>` character. Use a blinking block cursor (`_`) at the end of active text.
- **Chips/Tags:** Small, rectangular labels with no rounding. Use `#1c1c2e` background with `#00d4ff` text.
- **Cards:** High-contrast borders. Use a "Header" section within the card that has a different background color and a small "ID" number in the corner (e.g., `REF_042`).
- **Lists:** Every list item should be prefixed with a hexadecimal index (e.g., `0x01`, `0x02`).
- **Progress Bars:** Segmented blocks rather than a smooth fill, reminiscent of BIOS loading screens.
- **Status Indicators:** Use small "LED" circles that pulse with an inner glow when active.