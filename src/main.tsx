import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { StrictMode } from 'react'
import { PostHogProvider } from 'posthog-js/react'
import { PostHogConfig } from 'posthog-js'
import { POSTHOG_CONFIG } from './config/analytics.ts'
import ReactPixel from 'react-facebook-pixel'

// Initialize Facebook Pixel
ReactPixel.init('1094603982657805');
ReactPixel.pageView();

// Handle GitHub Pages SPA routing
const redirect = sessionStorage.redirect;
delete sessionStorage.redirect;
if (redirect && redirect !== location.href) {
    history.replaceState(null, '', redirect);
}

const options = {
    api_host: POSTHOG_CONFIG.VITE_PUBLIC_POSTHOG_HOST,
    defaults: {
        // Add any default configuration properties here
    },
} as PostHogConfig

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <PostHogProvider apiKey={POSTHOG_CONFIG.VITE_PUBLIC_POSTHOG_KEY} options={options}>
            <App />
        </PostHogProvider>
    </StrictMode>,
);