// Analytics Configuration
// Replace the placeholder values with your actual tracking IDs

export const analyticsConfig = {
  // Google Analytics 4
  googleAnalytics: {
    measurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-ELBP9XJCKC',
    enabled: process.env.NODE_ENV === 'production',
  },
}

// Custom event tracking functions
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && analyticsConfig.googleAnalytics.enabled) {
    // Google Analytics 4 event tracking
    if (window.gtag) {
      window.gtag('event', eventName, parameters)
    }
  }
}

// Page view tracking
export const trackPageView = (url: string) => {
  trackEvent('page_view', {
    page_title: document.title,
    page_location: url,
  })
}

// Conversion tracking
export const trackConversion = (conversionType: string, value?: number) => {
  trackEvent('conversion', {
    conversion_type: conversionType,
    value: value,
  })
}

// Service booking tracking
export const trackServiceBooking = (serviceType: string, location: string) => {
  trackEvent('service_booking', {
    service_type: serviceType,
    location: location,
    event_category: 'engagement',
    event_label: 'service_booking',
  })
}

// Phone call tracking
export const trackPhoneCall = (phoneNumber: string) => {
  trackEvent('phone_call', {
    phone_number: phoneNumber,
    event_category: 'engagement',
    event_label: 'phone_call',
  })
}

// WhatsApp tracking
export const trackWhatsApp = (message: string) => {
  trackEvent('whatsapp_contact', {
    message: message,
    event_category: 'engagement',
    event_label: 'whatsapp',
  })
}

// Declare global types for analytics
declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}
