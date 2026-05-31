---
name: Vertical Apex Light
colors:
  surface: '#f8f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f8f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#3b4a44'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#6b7b74'
  outline-variant: '#b9cac3'
  surface-tint: '#006b56'
  primary: '#006b56'
  on-primary: '#ffffff'
  primary-container: '#28efc3'
  on-primary-container: '#006853'
  inverse-primary: '#00e0b5'
  secondary: '#585e6c'
  on-secondary: '#ffffff'
  secondary-container: '#dde2f3'
  on-secondary-container: '#5e6473'
  tertiary: '#545f72'
  on-tertiary: '#ffffff'
  tertiary-container: '#cad5ec'
  on-tertiary-container: '#515c6f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#43fdd1'
  primary-fixed-dim: '#00e0b5'
  on-primary-fixed: '#002018'
  on-primary-fixed-variant: '#005140'
  secondary-fixed: '#dde2f3'
  secondary-fixed-dim: '#c1c6d7'
  on-secondary-fixed: '#161c27'
  on-secondary-fixed-variant: '#414754'
  tertiary-fixed: '#d8e3fa'
  tertiary-fixed-dim: '#bcc7dd'
  on-tertiary-fixed: '#111c2c'
  on-tertiary-fixed-variant: '#3c475a'
  background: '#f8f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-xl:
    fontFamily: Lexend
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Lexend
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Lexend
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Lexend
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Lexend
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Lexend
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Lexend
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Lexend
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  headline-xl-mobile:
    fontFamily: Lexend
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
  headline-lg-mobile:
    fontFamily: Lexend
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style

The design system is built for high-performance environments where precision, clarity, and technical excellence are paramount. It targets a professional audience that values efficiency and data-driven insights, evoking an emotional response of confidence and focused energy.

The aesthetic follows a **Technical Minimalism** approach. It leverages the clarity of a light-mode interface while maintaining the "engineered" feel of a specialized tool. The style is defined by ample whitespace, a crisp hierarchy, and a restrained use of vibrant accents to draw attention to critical data points and primary actions. It avoids unnecessary decoration in favor of structural integrity and functional elegance.

## Colors

The palette is anchored by a high-contrast foundation to ensure maximum legibility and a professional tone. 

- **Primary Action**: Turquoise (#28efc3) is used exclusively for primary calls to action, active states, and highlights. It provides a modern, energetic contrast against the neutral base.
- **Surface**: The primary background is a clean, technical light gray (#f5f7f9), which reduces eye strain compared to pure white while maintaining a spacious feel.
- **Typography**: Headings are rendered in a deep slate (#1a202c) for authoritative presence, while body text utilizes a slightly softer dark gray (#4a5568) to facilitate long-form reading.
- **Functional States**: Success, warning, and error states should use desaturated versions of green, amber, and red to stay consistent with the professional, technical aesthetic.

## Typography

This design system utilizes **Lexend** across all levels. Lexend was specifically designed to reduce visual stress and improve reading proficiency, making it ideal for a technical, performance-oriented interface.

- **Headlines**: Use heavy weights (600-700) with slight negative letter spacing on larger sizes to create a compact, "engineered" appearance.
- **Body**: Standard weight (400) is used for all descriptive text. The increased x-height of Lexend ensures clarity even at smaller sizes.
- **Labels**: Small caps or increased letter spacing should be applied to labels and overlines to distinguish them from body content.
- **Hierarchy**: Use color (Deep Slate for headings, Dark Gray for body) in tandem with size to establish a clear information architecture.

## Layout & Spacing

The layout philosophy is based on a **Fixed Grid** system for desktop to ensure data visualizations and technical dashboards maintain their intended proportions. 

- **Desktop**: A 12-column grid with a maximum content width of 1280px. Gutters are fixed at 24px to provide clear breathing room between technical components.
- **Mobile**: A 4-column fluid grid with 16px side margins. 
- **Spacing Rhythm**: All measurements are derived from an 8px base unit. This ensures vertical rhythm and consistent alignment across complex layouts. Use larger spacing (40px+) to separate distinct content sections, and tighter spacing (8px-12px) to group related data points within components.

## Elevation & Depth

To maintain a crisp, technical feel, this design system avoids heavy shadows. Instead, it uses **Low-contrast outlines** and **Tonal layers** to communicate hierarchy.

- **Surface Levels**: The base background is #f5f7f9. Primary containers (cards, modals) use a pure white (#ffffff) surface to pull forward visually.
- **Outlines**: Elements are defined by 1px borders in a light gray (#e2e8f0). This creates a "blueprint" aesthetic that feels precise and structured.
- **Subtle Depth**: For interactive elements like dropdowns or hovering over cards, use a very soft, highly diffused ambient shadow (0px 4px 12px, 5% opacity) tinted with the deep slate text color to indicate elevation without adding visual clutter.

## Shapes

The shape language is **Soft (0.25rem)**. This slight rounding takes the edge off the technical aesthetic, making it feel modern and accessible without losing the professional "grid-based" look of sharp corners.

- **Components**: Standard buttons, inputs, and tags use the base 0.25rem radius.
- **Containers**: Larger cards and sections use 0.5rem (rounded-lg) to frame content clearly.
- **Specifics**: Icons should follow a similar 1px or 2px corner radius to match the UI elements. Avoid completely circular "pill" shapes unless used for status indicators or notification badges.

## Components

- **Buttons**: Primary buttons use a turquoise (#28efc3) fill with deep slate (#1a202c) text for high-contrast legibility. Secondary buttons use a slate outline with no fill.
- **Input Fields**: These should feature a 1px border (#e2e8f0) and a white background. On focus, the border transitions to turquoise with a subtle 2px outer glow.
- **Cards**: Cards use white backgrounds with the 1px border. Headers within cards should be separated by a subtle horizontal rule.
- **Chips & Tags**: Use a light version of the turquoise (10% opacity) with dark turquoise text for active categories, and light gray for neutral ones.
- **Data Tables**: Essential for this system. Use zebra-striping with the base #f5f7f9 color and clear, slate-colored headers in `label-md` styling.
- **Checkboxes/Radios**: Use sharp, geometric forms with the turquoise accent appearing only when selected.