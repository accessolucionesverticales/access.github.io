/* ==========================================================================
   ACCESS // VERTICAL SOLUTIONS - Lógica del Tema Claro/Oscuro e Interacciones
   ========================================================================== */

// Lógica de Persistencia del Tema - Se ejecuta inmediatamente para evitar destellos de color
(function() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const html = document.documentElement;
    if (savedTheme === 'dark') {
        html.classList.remove('light');
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
        html.classList.add('light');
    }
})();

// Configuración de eventos cuando el DOM está completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    const html = document.documentElement;
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeToggleIcon = document.getElementById('theme-toggle-icon');

    // Sincronizar el icono inicial del tema
    if (themeToggleIcon) {
        themeToggleIcon.textContent = html.classList.contains('dark') ? 'light_mode' : 'dark_mode';
    }

    // Manejador del cambio de tema
    if (themeToggleBtn && themeToggleIcon) {
        themeToggleBtn.addEventListener('click', () => {
            if (html.classList.contains('dark')) {
                html.classList.remove('dark');
                html.classList.add('light');
                themeToggleIcon.textContent = 'dark_mode';
                localStorage.setItem('theme', 'light');
            } else {
                html.classList.remove('light');
                html.classList.add('dark');
                themeToggleIcon.textContent = 'light_mode';
                localStorage.setItem('theme', 'dark');
            }
        });
    }

    // Microinteracciones para botones y enlaces del sitio
    const interactiveElements = document.querySelectorAll('button, a[href], input[type="submit"], input[type="button"]');
    interactiveElements.forEach(element => {
        element.addEventListener('mousedown', () => {
            element.classList.add('scale-95', 'opacity-90');
        });
        element.addEventListener('mouseup', () => {
            element.classList.remove('scale-95', 'opacity-90');
        });
        element.addEventListener('mouseleave', () => {
            element.classList.remove('scale-95', 'opacity-90');
        });
    });

    // Efecto simple de revelación en scroll para las secciones
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
            }
        });
    }, observerOptions);

    const scrollSections = document.querySelectorAll('main > section');
    scrollSections.forEach(section => {
        section.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
        observer.observe(section);
    });
});
