'use client';

    import { useEffect } from 'react';
    import { usePageView } from '@/hooks/useAnalytics';
    import { initializeDataLayer } from '@/lib/analytics/dataLayer';

    export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
      useEffect(() => {
        initializeDataLayer(); // Ensure dataLayer is initialized before usePageView
      }, []);
      usePageView(); // Call usePageView after initializing dataLayer

      return <>{children}</>;
    }
