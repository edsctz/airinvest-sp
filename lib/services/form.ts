import { LeadFormData, WebhookSubmissionData } from '@/lib/types/forms';
import { submitToWebhook } from './webhook';

export async function submitLeadForm(
  formData: LeadFormData,
  searchData: {
    investment: number;
    regions: string[];
    bedrooms: string;
    bathrooms: string;
    condition: string;
  },
  propertyCount: number
): Promise<{ success: boolean; error?: string }> {
  try {
    const webhookData: WebhookSubmissionData = {
      // Property preferences
      ...searchData,
      
      // Contact information
      ...formData,
      
      // Metadata
      submittedAt: new Date().toISOString(),
      propertiesFound: propertyCount,
    };

    const success = await submitToWebhook(webhookData);
    
    if (!success) {
      throw new Error('Webhook submission failed');
    }

    return { success: true };
  } catch (error) {
    console.error('Form submission error:', error);
    return {
      success: false,
      error: 'Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.',
    };
  }
}
