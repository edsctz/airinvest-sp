export interface PropertyFilters {
  bedrooms: string;
  bathrooms: string;
  condition: string;
  capacity?: string;
}

export interface Region {
  id: string;
  name: string;
  properties: number;
}

export interface FilterOption {
  value: string;
  label: string;
}
