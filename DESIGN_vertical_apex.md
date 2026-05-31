---
name: Vertical Apex
colors:
  surface: '#111318'
  surface-dim: '#111318'
  surface-bright: '#37393e'
  surface-container-lowest: '#0c0e12'
  surface-container-low: '#1a1c20'
  surface-container: '#1e2024'
  surface-container-high: '#282a2e'
  surface-container-highest: '#333539'
  on-surface: '#e2e2e8'
  on-surface-variant: '#b9cac3'
  inverse-surface: '#e2e2e8'
  inverse-on-surface: '#2f3035'
  outline: '#84948d'
  outline-variant: '#3b4a44'
  surface-tint: '#00e0b5'
  primary: '#baffe7'
  on-primary: '#00382b'
  primary-container: '#28efc3'
  on-primary-container: '#006853'
  inverse-primary: '#006b56'
  secondary: '#a5caf1'
  on-secondary: '#043353'
  secondary-container: '#23496b'
  on-secondary-container: '#94b9df'
  tertiary: '#f0f0ff'
  on-tertiary: '#0c2879'
  tertiary-container: '#cad3ff'
  on-tertiary-container: '#4156a7'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#43fdd1'
  primary-fixed-dim: '#00e0b5'
  on-primary-fixed: '#002018'
  on-primary-fixed-variant: '#005140'
  secondary-fixed: '#cfe5ff'
  secondary-fixed-dim: '#a5caf1'
  on-secondary-fixed: '#001d33'
  on-secondary-fixed-variant: '#23496b'
  tertiary-fixed: '#dde1ff'
  tertiary-fixed-dim: '#b7c4ff'
  on-tertiary-fixed: '#001552'
  on-tertiary-fixed-variant: '#2a4190'
  background: '#111318'
  on-background: '#e2e2e8'
  surface-variant: '#333539'
  safety-teal: '#00AFAA'
  structural-gray: '#33A3A3'
  surface-light: '#EEAEEA'
typography:
  display-lg:
    fontFamily: Lexend
    fontSize: 80px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Lexend
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Lexend
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Lexend
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Lexend
    fontSize: 18px
    fontWeight: '300'
    lineHeight: '1.6'
  body-md:
    fontFamily: Lexend
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 24px
---

## Brand & Style

This design system translates the high-stakes world of high-altitude industrial work into a digital experience that balances "safety-first" professionalism with cutting-edge technical precision. The brand personality is authoritative, resilient, and technologically advanced.

The visual style is **High-Contrast / Modern**, utilizing a dark-mode foundation to evoke depth and focus, similar to developer tools or advanced engineering software. It borrows the "aggressive" layouts of modern high-end agencies—heavy typography, dynamic grid structures, and sharp lines—to reflect the physical geometry of skyscrapers and industrial structures. The aesthetic communicates that high-altitude work is not just manual labor, but a high-tech engineering feat.

## Colors

The palette is anchored by a "Neon Tech" teal (`#28EFC3`) set against deep, structural blues. This creates a high-contrast environment where safety information and call-to-actions vibrate against the dark background.

- **Primary:** The electric teal is used for interactive elements, highlights, and status indicators.
- **Secondary/Tertiary:** Deep navy tones represent the "Access" legacy colors, used for structural backgrounds and container shading.
- **Neutral:** A near-black base (`#0A0C10`) is used to maintain a premium, high-tech atmosphere, allowing the brand colors to lead the visual hierarchy.
- **Functional:** Use high-saturation teal for "Safe" states and the secondary navy for "Information" states.

## Typography

The typography system uses **Lexend** as its primary driver. Its hyper-legible, geometric construction feels both industrial and approachable. 

- **Headlines:** Use heavy weights (700-800) with tight letter spacing to create a "blocky," structural feel reminiscent of architectural beams.
- **Display Text:** Large-scale headings should be used sparingly for high-impact messaging, often utilizing the primary teal color.
- **Labels:** **JetBrains Mono** is introduced for technical data, specifications, and "metadata" (heights, safety ratings, coordinates) to reinforce the technological narrative.
- **Scalability:** Headlines scale aggressively down for mobile to maintain readability while preserving the "bold" impact.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** model for desktop to maintain a cinematic, controlled presentation, transitioning to a fluid model for mobile devices.

- **The 12-Column Grid:** A strict 12-column grid is used for desktop. Components should often span "unconventional" column counts (e.g., 5 or 7) to create a dynamic, asymmetrical feel similar to modern editorial design.
- **Spacing Rhythm:** Use an 8px base unit. Large sections should be separated by significant whitespace (80px - 120px) to give the content "room to breathe," echoing the vastness of high-altitude work environments.
- **Verticality:** Design elements should emphasize vertical lines—long thin dividers and top-to-bottom progress indicators—to visually reinforce the concept of height and "vertical solutions."

## Elevation & Depth

To match the dark-tech aesthetic, the design system utilizes **Tonal Layers** and **Low-Contrast Outlines** rather than traditional shadows.

- **Surface Tiers:** The base background is the darkest neutral. Containers and cards sit one tier higher (using `#14171C`), creating subtle separation.
- **Borders:** Instead of shadows, use 1px solid borders in `#1A202C` or semi-transparent versions of the primary teal to define shapes.
- **Glow Effects:** High-importance elements (active states or primary buttons) can use a subtle "outer glow" using the primary teal with high blur and low opacity to simulate a digital HUD (Heads-Up Display).

## Shapes

The shape language is **Soft (0.25rem)**. 

- **Precision Geometry:** While corners are slightly softened to ensure the UI feels modern and accessible, the overall impression should be one of "hard" industrial materials. 
- **Icons:** Use thick-stroke (2px) icons with square terminals to match the structural logo.
- **Decorative Elements:** Use 45-degree angled cuts or "clipped corners" on containers to mimic specialized hardware and military-grade equipment.

## Components

### Buttons
- **Primary:** Solid Primary Teal with black text. Sharp corners or very slight rounding. No gradient. 
- **Secondary:** Outlined in Primary Teal with Teal text. On hover, fills with a 10% opacity teal tint.
- **Technical:** Small, mono-spaced labels above buttons to provide "system" context (e.g., "CMD // INITIATE").

### Cards
- Backgrounds are dark navy or off-black. 
- Top-left corner features a "ID tag" or "Serial Number" in JetBrains Mono to reinforce the industrial theme.
- High-contrast borders appear only on hover.

### Inputs
- Bottom-border only or fully enclosed with a 1px structural gray border.
- Focus state switches the border to Primary Teal and adds a subtle "glow" text effect.

### Chips/Badges
- Used for status indicators (e.g., "On-Site," "Certified," "Secure").
- High-saturation backgrounds with white text; always in uppercase Mono font.

### Progress & Data
- Utilize "loading bars" and "meters" that look like industrial gauges or telemetry data to display service completion or safety metrics.