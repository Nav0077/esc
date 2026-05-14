/**
 * Google Analytics Integration
 * Replace 'G-XXXXXXXXXX' with your actual Measurement ID
 */

const GA_MEASUREMENT_ID = 'G-8ZHNZ7VN9X';

export function initGA() {
    if (GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') {
        console.warn('Google Analytics: Measurement ID is not configured. Please update js/analytics.js');
    }

    // Load the gtag.js script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // Initialize dataLayer and gtag function
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
        window.dataLayer.push(arguments);
    };

    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID);
    
    console.log(`Google Analytics initialized with ID: ${GA_MEASUREMENT_ID}`);
}
