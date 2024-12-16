export type DataLayerEvent = {
  event: string;
  [key: string]: any;
};

export type WindowWithDataLayer = Window & {
  dataLayer: DataLayerEvent[];
};

export type GTMConfig = {
  id: string | undefined;
};

export type AnalyticsEvent = {
  name: string;
  data?: Record<string, any>;
};
