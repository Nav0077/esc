/**
 * Cookie Consent Manager for Elite Social Club
 */

export function initCookies() {
    const COOKIE_NAME = 'esc_cookies_accepted';
    const bannerHtml = `
        <div id="cookie-banner" class="cookie-banner">
            <div class="cookie-content">
                <div class="cookie-header">
                    <div class="cookie-logo">
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' width='32' height='32'><circle cx='50' cy='50' r='50' fill='#22c55e'/><text x='50' y='65' font-family='Arial' font-weight='bold' font-size='35' fill='white' text-anchor='middle'>ESC</text></svg>
                    </div>
                    <span class="cookie-title">Elite Social Club</span>
                </div>
                <p class="cookie-text">
                    We use cookies to enhance your experience, analyze site traffic, and provide better cricket stats. 
                    By clicking "Accept", you agree to our use of cookies.
                </p>
                <div class="cookie-actions">
                    <button id="cookie-accept" class="cookie-btn cookie-btn-accept">Accept All</button>
                    <button id="cookie-decline" class="cookie-btn cookie-btn-decline">Decline</button>
                </div>
            </div>
        </div>
    `;

    // Check if user already made a choice
    if (!localStorage.getItem(COOKIE_NAME)) {
        // Inject banner into the DOM
        document.body.insertAdjacentHTML('beforeend', bannerHtml);
        
        const banner = document.getElementById('cookie-banner');
        const acceptBtn = document.getElementById('cookie-accept');
        const declineBtn = document.getElementById('cookie-decline');

        // Show banner with a small delay for better UX
        setTimeout(() => {
            banner.style.display = 'block';
        }, 1000);

        acceptBtn.addEventListener('click', () => {
            localStorage.setItem(COOKIE_NAME, 'true');
            hideBanner(banner);
        });

        declineBtn.addEventListener('click', () => {
            localStorage.setItem(COOKIE_NAME, 'false');
            hideBanner(banner);
        });
    }
}

function hideBanner(banner) {
    banner.style.animation = 'slideUp 0.5s reverse cubic-bezier(0.16, 1, 0.3, 1)';
    banner.style.opacity = '0';
    banner.style.transform = 'translateY(100%) scale(0.9)';
    
    setTimeout(() => {
        banner.style.display = 'none';
        banner.remove();
    }, 500);
}
