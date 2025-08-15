'use client'

export const useAnalytics = () => {
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, {
        event_category: 'engagement',
        event_label: 'PointLine Solutions',
        ...parameters
      })
    }
  }

  const trackPageView = (pageTitle?: string, pageLocation?: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: pageTitle || document.title,
        page_location: pageLocation || window.location.href,
        send_page_view: true
      })
    }
  }

  const trackButtonClick = (buttonName: string, location: string) => {
    trackEvent('button_click', {
      button_name: buttonName,
      location: location,
      event_category: 'cta_engagement'
    })
  }

  const trackFormSubmission = (formName: string, location: string) => {
    trackEvent('form_submission', {
      form_name: formName,
      location: location,
      event_category: 'lead_generation'
    })
  }

  const trackPricingView = (packageName: string) => {
    trackEvent('pricing_view', {
      package_name: packageName,
      event_category: 'pricing_engagement'
    })
  }

  const trackCalendlyClick = (location: string) => {
    trackEvent('calendly_click', {
      location: location,
      event_category: 'booking_engagement'
    })
  }

  const trackPDFDownload = (location: string) => {
    trackEvent('pdf_download', {
      location: location,
      event_category: 'content_engagement'
    })
  }

  const trackScrollDepth = (depth: number) => {
    trackEvent('scroll_depth', {
      depth_percentage: depth,
      event_category: 'engagement'
    })
  }

  const trackTimeOnPage = (timeSpent: number) => {
    trackEvent('time_on_page', {
      time_spent_seconds: timeSpent,
      event_category: 'engagement'
    })
  }

  return {
    trackEvent,
    trackPageView,
    trackButtonClick,
    trackFormSubmission,
    trackPricingView,
    trackCalendlyClick,
    trackPDFDownload,
    trackScrollDepth,
    trackTimeOnPage
  }
}
