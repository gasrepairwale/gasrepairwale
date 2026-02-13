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
  if (typeof window !== 'undefined') {
    // Only track in production or if explicitly enabled
    const isEnabled = analyticsConfig.googleAnalytics.enabled || window.location.hostname === 'localhost';

    if (isEnabled && window.gtag) {
      // Get city and area from URL if possible
      const pathParts = window.location.pathname.split('/').filter(Boolean);
      let autoCity = '';
      let autoArea = '';

      if (pathParts[0] === 'locations') {
        autoCity = pathParts[1] || '';
        autoArea = pathParts[2] || '';
      }

      const finalParameters = {
        ...parameters,
        city: parameters?.city || autoCity,
        area: parameters?.area || autoArea,
        page_path: window.location.pathname,
      };

      window.gtag('event', eventName, finalParameters)
      console.log(`[Analytics] Tracked ${eventName}:`, finalParameters)
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
export const trackServiceBooking = (data: { serviceType: string; city: string; area: string; phone?: string }) => {
  trackEvent('service_booking', {
    service_type: data.serviceType,
    city: data.city,
    area: data.area,
    phone: data.phone,
    event_category: 'engagement',
    event_label: 'service_booking',
  })
}

// Phone call tracking
export const trackPhoneCall = (phoneNumber: string, city?: string, area?: string) => {
  trackEvent('phone_call', {
    phone_number: phoneNumber,
    city: city,
    area: area,
    event_category: 'engagement',
    event_label: 'phone_call',
  })
}

// WhatsApp tracking
export const trackWhatsApp = (message: string, city?: string, area?: string) => {
  trackEvent('whatsapp_contact', {
    message: message,
    city: city,
    area: area,
    event_category: 'engagement',
    event_label: 'whatsapp',
  })
}

/**
 * Lead Notification Utilities
 */

// Format WhatsApp URL with pre-filled message
export const getWhatsAppRedirectUrl = (data: {
  serviceType: string;
  city: string;
  area: string;
  phone: string;
  address?: string;
  preferredTime?: string;
  message?: string;
}) => {
  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+918302713127'
  const messageText = `*Gas Service Booking*\n\n` +
    `👤 *Service:* ${data.serviceType}\n` +
    `📍 *City:* ${data.city}\n` +
    `🏘️ *Area:* ${data.area || 'N/A'}\n` +
    `🏠 *Address:* ${data.address || 'N/A'}\n` +
    `⏰ *Slot:* ${data.preferredTime || 'N/A'}\n` +
    `📞 *Phone:* ${data.phone}\n\n` +
    `*Message:* ${data.message || 'I am visiting from the website and want to book a service.'}`;

  return `https://wa.me/${waNumber.replace('+', '')}?text=${encodeURIComponent(messageText)}`;
}

// Send lead data to Telegram via our internal API
export const sendLeadNotification = async (data: {
  name?: string;
  phone: string;
  service: string;
  city: string;
  area?: string;
  address?: string;
  preferredTime?: string;
  message?: string;
  source?: string
}) => {
  try {
    console.log('[Analytics] Sending lead notification:', data)
    const response = await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    return await response.json()
  } catch (error) {
    console.error('[Analytics] Failed to send lead notification:', error)
    return { ok: false, error }
  }
}

// Declare global types for analytics
declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}
