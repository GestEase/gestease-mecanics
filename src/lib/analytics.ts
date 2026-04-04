/**
 * GA4 Analytics utilities for mecanics.gestease.ca
 * Measurement ID: G-GWN7Z69PLN
 *
 * gtag.js is loaded in index.html with send_page_view: false
 * so we control page_view events manually on SPA route changes.
 */

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}

/** Send a page_view event (SPA route change) */
export function trackPageView(path: string, title: string) {
  if (typeof window.gtag !== 'function') return
  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: title,
    page_location: `https://mecanics.gestease.ca${path}`,
  })
}

/** Send a custom GA4 event */
export function trackEvent(action: string, params?: Record<string, string | number>) {
  if (typeof window.gtag !== 'function') return
  window.gtag('event', action, params)
}

/** Track search queries (call with debounced value) */
export function trackSearch(query: string) {
  if (!query || query.length < 2) return
  trackEvent('search', { search_term: query })
}

/** Track CTA clicks (Conception, GestFlow links in header) */
export function trackCtaClick(ctaName: string, url: string) {
  trackEvent('cta_click', { cta_name: ctaName, link_url: url })
}
