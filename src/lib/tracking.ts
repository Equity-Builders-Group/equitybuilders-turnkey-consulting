import ReactPixel from 'react-facebook-pixel';

// Centralized tracking configuration
const TRACKING_CONFIG = {
  facebook: {
    enabled: true,
    pixelId: '1094603982657805'
  },
  // Add more platforms here in the future:
  // google: {
  //   enabled: true,
  //   measurementId: 'G-XXXXXXXXXX'
  // },
  // tiktok: {
  //   enabled: true,
  //   pixelId: 'XXXXXXXXXXX'
  // }
};

// Initialize all tracking platforms
export const initTracking = () => {
  if (TRACKING_CONFIG.facebook.enabled) {
    ReactPixel.init(TRACKING_CONFIG.facebook.pixelId);
    ReactPixel.pageView();
  }
  
  // Add more platform initializations here
  // if (TRACKING_CONFIG.google.enabled) {
  //   gtag('config', TRACKING_CONFIG.google.measurementId);
  // }
};

// Track page views
export const trackPageView = () => {
  if (TRACKING_CONFIG.facebook.enabled) {
    ReactPixel.pageView();
  }
  
  // Add more platforms
  // if (TRACKING_CONFIG.google.enabled) {
  //   gtag('event', 'page_view');
  // }
};

// Track custom events
export const trackEvent = (eventName: string, data?: Record<string, any>) => {
  if (TRACKING_CONFIG.facebook.enabled) {
    ReactPixel.trackCustom(eventName, data);
  }
  
  // Add more platforms
  // if (TRACKING_CONFIG.google.enabled) {
  //   gtag('event', eventName, data);
  // }
};

// Track CTA clicks
export const trackCTAClick = (ctaType: 'consultation' | 'webinar') => {
  trackEvent('CTA Clicked', { cta: ctaType });
};

// Track complete registration with Base64 encoded user data
export const trackCompleteRegistration = (userData: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}) => {
  // Base64 encode user data
  const encodedData = {
    firstName: btoa(userData.firstName),
    lastName: btoa(userData.lastName),
    email: btoa(userData.email),
    phone: btoa(userData.phone)
  };
  
  if (TRACKING_CONFIG.facebook.enabled) {
    ReactPixel.track('CompleteRegistration', encodedData);
  }
  
  // Add more platforms
  // if (TRACKING_CONFIG.google.enabled) {
  //   gtag('event', 'sign_up', { method: 'form' });
  // }
};

// Track video content views with content IDs
export const trackViewContent = (contentId: string) => {
  if (TRACKING_CONFIG.facebook.enabled) {
    ReactPixel.track('ViewContent', {
      content_ids: contentId
    });
  }
  
  // Add more platforms
  // if (TRACKING_CONFIG.google.enabled) {
  //   gtag('event', 'view_item', {
  //     items: [{ item_id: contentId }]
  //   });
  // }
};

// Video content IDs mapping
export const VIDEO_CONTENT_IDS = {
  CLASS_REPLAY: '114d20b4-b152-48e8-b8d1-0a0e12470326',
  HERO_SECTION: 'c6b998b8-9763-4324-94ea-1b19b14c3dc1',
  VIDEO_SHOWCASE: '65558fdd-047e-401c-b75c-210360836388'
} as const;

// Helper to get content ID from video URL
export const getContentIdFromUrl = (videoUrl: string): string | null => {
  if (videoUrl.includes(VIDEO_CONTENT_IDS.CLASS_REPLAY)) {
    return VIDEO_CONTENT_IDS.CLASS_REPLAY;
  } else if (videoUrl.includes(VIDEO_CONTENT_IDS.HERO_SECTION)) {
    return VIDEO_CONTENT_IDS.HERO_SECTION;
  } else if (videoUrl.includes(VIDEO_CONTENT_IDS.VIDEO_SHOWCASE)) {
    return VIDEO_CONTENT_IDS.VIDEO_SHOWCASE;
  }
  return null;
};
