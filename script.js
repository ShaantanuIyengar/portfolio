/* ==========================================================================
   Minimalist Indigo & Slate — Portfolio of Shaantanu Iyengar (script.js)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================================================
    // 1. MOBILE NAVIGATION DRAWER TOGGLE
    // ==========================================================================
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('mobile-show');
            menuToggle.classList.toggle('open');
        });
        
        // Close menu when clicking a navigation link
        navMenu.querySelectorAll('.nav-item').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('mobile-show');
                menuToggle.classList.remove('open');
            });
        });
    }

    // Mobile Navigation Drawer Toggle completed above
});
