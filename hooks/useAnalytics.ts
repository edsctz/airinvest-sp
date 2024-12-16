'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { trackEvent, trackPageView } from '@/lib/analytics/tracker';
import { AnalyticsEvents } from '@/lib/analytics/events';
import type { AnalyticsEventName } from '@/lib/analytics/events';

export function usePageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      trackPageView(pathname, searchParams?.toString());
    }
  }, [pathname, searchParams]);
}

export function useAnalyticsEvent() {
  return {
    trackEvent: (name: AnalyticsEventName, data?: Record<string, any>) => {
      trackEvent({ name, data });
    },
    events: AnalyticsEvents,
  };
}
