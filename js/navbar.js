/**
 * NAVBAR LOGIC
 * Handles hamburger menu, overlay, and active page highlighting
 */

export function initNavbar() {
    setupHamburgerMenu();
    setupActiveLinks();
}

function setupHamburgerMenu() {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");
    const overlay = document.getElementById("nav-overlay");

    if (!hamburger || !navMenu) {
        console.warn("⚠️ Navbar elements not found. Waiting for load...");
        return;
    }

    // Toggle menu
    hamburger.onclick = (e) => {
        e.stopPropagation();
        const isOpen = navMenu.classList.toggle("show");
        hamburger.classList.toggle("open");
        if (overlay) overlay.classList.toggle("show");
        document.body.style.overflow = isOpen ? "hidden" : "";
    };

    // Close menu when link is clicked
    document.querySelectorAll(".nav-link").forEach((link) => {
        link.addEventListener("click", () => closeMenu(navMenu, hamburger, overlay));
    });

    // Close menu when overlay is clicked
    if (overlay) {
        overlay.addEventListener("click", () => closeMenu(navMenu, hamburger, overlay));
    }

    // Close menu on Escape key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeMenu(navMenu, hamburger, overlay);
    });

    // Close menu when window is resized to desktop
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) closeMenu(navMenu, hamburger, overlay);
    });
}

function closeMenu(navMenu, hamburger, overlay) {
    if (!navMenu) return;
    navMenu.classList.remove("show");
    hamburger.classList.remove("open");
    if (overlay) overlay.classList.remove("show");
    document.body.style.overflow = "";
}

function setupActiveLinks() {
    // Get current filename (e.g., 'matches.html') or default to 'index.html'
    let path = window.location.pathname;
    let page = path.split("/").pop();
    
    if (page === "" || page === "index.html") {
        page = "index.html";
    }

    const navLinks = document.querySelectorAll(".nav-link");
    
    navLinks.forEach((link) => {
        // Remove active class from everyone first to prevent double-highlights
        link.classList.remove("active");

        const href = link.getAttribute("href");
        
        // Strict matching: Only highlight if the href exactly matches the page
        if (href === page || (page === "index.html" && href === "/")) {
            link.classList.add("active");
        }
    });
}