export interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  bestTime: string;
  acceptTerms: boolean;
}

export interface SearchFormData {
  investment: number;
  regions: string[];
  bedrooms: string;
  bathrooms: string;
  condition: string;
}

export interface WebhookSubmissionData {
  // Property preferences
  investment: number;
  regions: string[];
  bedrooms: string;
  bathrooms: string;
  condition: string;
  
  // Contact information
  name: string;
  email: string;
  phone: string;
  bestTime: string;
  
  // Metadata
  submittedAt: string;
  propertiesFound: number;
}
