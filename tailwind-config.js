/* ==========================================================================
   ACCESS // VERTICAL SOLUTIONS - Configuración de Tailwind CSS
   ========================================================================== */

tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                background: "var(--color-background)",
                surface: "var(--color-surface)",
                "surface-dim": "var(--color-surface-dim)",
                "surface-bright": "var(--color-surface-bright)",
                "surface-container-lowest": "var(--color-surface-container-lowest)",
                "surface-container-low": "var(--color-surface-container-low)",
                "surface-container": "var(--color-surface-container)",
                "surface-container-high": "var(--color-surface-container-high)",
                "surface-container-highest": "var(--color-surface-container-highest)",
                "on-surface": "var(--color-on-surface)",
                "on-surface-variant": "var(--color-on-surface-variant)",
                "inverse-surface": "var(--color-inverse-surface)",
                "inverse-on-surface": "var(--color-inverse-on-surface)",
                outline: "var(--color-outline)",
                "outline-variant": "var(--color-outline-variant)",
                
                primary: "var(--color-primary)",
                "on-primary": "var(--color-on-primary)",
                "primary-container": "var(--color-primary-container)",
                "on-primary-container": "var(--color-on-primary-container)",
                "primary-fixed": "var(--color-primary-fixed)",
                "primary-fixed-dim": "var(--color-primary-fixed-dim)",
                
                secondary: "var(--color-secondary)",
                "on-secondary": "var(--color-on-secondary)",
                "secondary-container": "var(--color-secondary-container)",
                "on-secondary-container": "var(--color-on-secondary-container)",
                
                error: "var(--color-error)",
                "on-error": "var(--color-on-error)",
                "error-container": "var(--color-error-container)",
                "on-error-container": "var(--color-on-error-container)",
                
                "safety-teal": "var(--color-safety-teal)"
            },
            borderRadius: {
                DEFAULT: "0.125rem",
                lg: "0.25rem",
                xl: "0.5rem",
                full: "0.75rem"
            },
            spacing: {
                "margin-desktop": "64px",
                "margin-mobile": "24px",
                "container-max": "1440px",
                gutter: "24px",
                unit: "8px"
            },
            fontFamily: {
                "label-mono": ["JetBrains Mono", "monospace"]
            }
        }
    }
};
