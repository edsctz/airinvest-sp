'use client';

    import { useState } from 'react';
    import { useAnalyticsEvent } from '@/hooks/useAnalytics';
    import { submitLeadForm } from '@/lib/services/form';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
    import type { LeadFormData } from '@/lib/types/forms';

    interface LeadFormProps {
      propertyCount: number;
      searchData: {
        investment: number;
        regions: string[];
        bedrooms: string;
        bathrooms: string;
        condition: string;
      };
    }

    export function LeadForm({ propertyCount, searchData }: LeadFormProps) {
      const { trackEvent, events } = useAnalyticsEvent();
      const [isSubmitting, setIsSubmitting] = useState(false);
      const [isSubmitted, setIsSubmitted] = useState(false);
      const [error, setError] = useState<string | null>(null);

      const [formData, setFormData] = useState<LeadFormData>({
        name: '',
        email: '',
        phone: '',
        bestTime: '',
        acceptTerms: false,
      });

      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        const result = await submitLeadForm(formData, searchData, propertyCount);

        if (result.success) {
          trackEvent(events.LEAD_COMPLETE, {
            properties_found: propertyCount,
            ...formData,
            ...searchData,
          });
          setIsSubmitted(true);
        } else {
          setError(result.error || 'Erro ao enviar formulário');
        }

        setIsSubmitting(false);
      };

      if (isSubmitted) {
        return (
          <div className="airbnb-card text-center">
            <h2 className="text-2xl font-bold text-secondary">Obrigado!</h2>
            <p className="mt-4 text-muted">
              Em breve, um de nossos especialistas entrará em contato para apresentar as melhores opções de investimento para você.
            </p>
          </div>
        );
      }

      return (
        <div className="airbnb-card">
          <h2 className="text-2xl font-bold text-center text-secondary">
            Desbloqueie {propertyCount} Propriedades
          </h2>
          <p className="mt-2 text-center text-muted">
            Preencha seus dados para receber as melhores opções
          </p>

          {error && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-secondary">
                  Nome Completo
                </label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Seu nome completo"
                  className="airbnb-input"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-secondary">
                  E-mail
                </label>
                <Input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="seu@email.com"
                  className="airbnb-input"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-secondary">
                  Telefone
                </label>
                <Input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(11) 99999-9999"
                  className="airbnb-input"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-secondary">
                  Melhor horário para contato
                </label>
                <Select
                  value={formData.bestTime}
                  onValueChange={(value) => setFormData({ ...formData, bestTime: value })}
                >
                  <SelectTrigger className="airbnb-input">
                    <SelectValue placeholder="Selecione o horário" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border border-border">
                    <SelectItem value="morning">Manhã (8h-12h)</SelectItem>
                    <SelectItem value="afternoon">Tarde (12h-18h)</SelectItem>
                    <SelectItem value="evening">Noite (18h-20h)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex justify-center">
              <Button
                type="submit"
                className="airbnb-button"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Desbloquear Propriedades'}
              </Button>
            </div>
          </form>
        </div>
      );
    }
