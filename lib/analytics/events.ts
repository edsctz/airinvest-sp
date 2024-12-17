export const AnalyticsEvents = {
    // Page Events
    PAGE_VIEW: 'page_view',
    
    // Search Flow Events
    SEARCH_START: 'search_start',
    SEARCH_COMPLETE: 'search_complete',
    
    // Filter Events
    INVESTMENT_SELECT: 'investment_select',
    REGION_SELECT: 'region_select',
    PROPERTY_FILTER: 'property_filter',
    
    // Lead Events
    LEAD_START: 'lead_start',
    LEAD_COMPLETE: 'lead_complete',
    
    // Interaction Events
    CTA_CLICK: 'cta_click',
    NAVIGATION_CLICK: 'navigation_click',
} as const;

export type AnalyticsEventName = keyof typeof AnalyticsEvents;
