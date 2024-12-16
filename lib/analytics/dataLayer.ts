import { WindowWithDataLayer, DataLayerEvent } from './types';

    declare const window: WindowWithDataLayer;

    export function initializeDataLayer(): void {
      if (typeof window === 'undefined') {
        return;
      }
      window.dataLayer = window.dataLayer || []; // Initialize dataLayer if it doesn't exist
    }

    export function pushToDataLayer(event: DataLayerEvent): void {
      if (typeof window === 'undefined') {
        return;
      }
      window.dataLayer.push(event);
    }
