import { GOOGLE_ANALYTICS } from '../config/constants';

// log the pageview with their URL
export const trackPageview = (url) => {
  window.gtag('config', GOOGLE_ANALYTICS, {
    page_path: url,
  });
};

// log specific events happening.
export const trackEvent = ({ action, params }) => {
  window.gtag('event', action, params);
};
