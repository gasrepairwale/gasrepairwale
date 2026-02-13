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

// Lead notification sending
export const sendLeadNotification = async (data: any) => {
  try {
    const response = await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, type: 'lead' }),
    })
    return await response.json()
  } catch (error) {
    console.error('[Analytics] Failed to send lead notification:', error)
    return { ok: false, error }
  }
}

// NEW: Short activity logging for Telegram
export const logActivity = async (action: string, city?: string, area?: string) => {
  try {
    // Only log in production or if explicitly enabled
    const isEnabled = analyticsConfig.googleAnalytics.enabled || (typeof window !== 'undefined' && window.location.hostname === 'localhost');
    if (!isEnabled) return;

    // Get city/area from URL if not provided
    let autoCity = city || '';
    let autoArea = area || '';

    if (typeof window !== 'undefined' && !city) {
      const pathParts = window.location.pathname.split('/').filter(Boolean);
      if (pathParts[0] === 'locations') {
        autoCity = pathParts[1] || '';
        autoArea = pathParts[2] || '';
      }
    }

    await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'activity',
        source: action,
        city: autoCity,
        area: autoArea,
        pagePath: typeof window !== 'undefined' ? window.location.pathname : ''
      }),
    })
  } catch (error) {
    console.error('[Analytics] Failed to log activity:', error)
  }
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
  // Log real-time activity to Telegram
  logActivity(`Clicked 'Call' (${phoneNumber})`, city, area)
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
  // Log real-time activity to Telegram
  logActivity(`Clicked 'WhatsApp' (${message})`, city, area)
}

/**
 * Lead Notification Utilities
 */

// Format WhatsApp URL with pre-filled message
export const getWhatsAppRedirectUrl = (data: {
  serviceType: string;
  city: string;
  area?: string;
  phone?: string;
  address?: string;
  preferredTime?: string;
  message?: string;
}) => {
  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+918302713127'

  let messageText = `*Gas Service Booking*\n\n` +
    `👤 *Service:* ${data.serviceType}\n` +
    `📍 *City:* ${data.city}\n`;

  if (data.area && data.area !== 'N/A' && data.area !== '') {
    messageText += `🏘️ *Area:* ${data.area}\n`;
  }

  if (data.address && data.address !== 'N/A' && data.address !== '') {
    messageText += `🏠 *Address:* ${data.address}\n`;
  }

  if (data.preferredTime && data.preferredTime !== 'N/A' && data.preferredTime !== '') {
    messageText += `⏰ *Slot:* ${data.preferredTime}\n`;
  }

  if (data.phone && data.phone !== 'USER_PHONE' && data.phone !== '') {
    messageText += `📞 *Phone:* ${data.phone}\n`;
  }

  messageText += `\n*Message:* ${data.message || 'I am visiting from the website and want to book a service.'}`;

  return `https://wa.me/${waNumber.replace('+', '')}?text=${encodeURIComponent(messageText)}`;
}

// Declare global types for analytics
declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}
