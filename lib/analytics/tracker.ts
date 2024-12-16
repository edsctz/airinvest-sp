import { AnalyticsEvent } from './types';
import { pushToDataLayer } from './dataLayer';

export function trackEvent({ name, data }: AnalyticsEvent): void {
  pushToDataLayer({
    event: name,
    ...data,
  });
}

export function trackPageView(path: string, search?: string): void {
  trackEvent({
    name: 'page_view',
    data: {
      page_path: path,
      page_search: search,
    },
  });
}
