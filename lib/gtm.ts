type WindowWithDataLayer = Window & {
  dataLayer: Record<string, any>[];
};

declare const window: WindowWithDataLayer;

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export function initializeGTM() {
  if (typeof window === 'undefined' || !GTM_ID) return;

  window.dataLayer = window.dataLayer || [];
}

export function pushEvent(event: string, data?: Record<string, any>) {
  if (typeof window === 'undefined') return;

  window.dataLayer.push({
    event,
    ...data,
  });
}

// Predefined events for consistency
export const GTMEvents = {
  PAGE_VIEW: 'page_view',
  SEARCH_START: 'search_start',
  SEARCH_COMPLETE: 'search_complete',
  INVESTMENT_SELECT: 'investment_select',
  REGION_SELECT: 'region_select',
  PROPERTY_FILTER: 'property_filter',
  LEAD_START: 'lead_start',
  LEAD_COMPLETE: 'lead_complete',
  CTA_CLICK: 'cta_click',
} as const;
