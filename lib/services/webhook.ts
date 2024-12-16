import { WebhookSubmissionData } from '@/lib/types/forms';

const WEBHOOK_URL = process.env.NEXT_PUBLIC_WEBHOOK_URL;

export async function submitToWebhook(data: WebhookSubmissionData): Promise<boolean> {
  if (!WEBHOOK_URL) {
    console.error('Webhook URL not configured');
    return false;
  }

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Webhook error response:', errorText);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return true;
  } catch (error) {
    console.error('Failed to submit to webhook:', error);
    return false;
  }
}
