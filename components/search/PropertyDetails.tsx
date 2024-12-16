'use client';

import { useAnalyticsEvent } from '@/hooks/useAnalytics';
import { Button } from '@/components/ui/button';
import { PropertyFilter } from './filters/PropertyFilter';
import { PropertySearchCard } from './PropertySearchCard';
import type { PropertyFilters } from '@/lib/types';

interface PropertyDetailsProps {
  data: PropertyFilters;
  onChange: (data: Partial<PropertyFilters>) => void;
  availableProperties: number;
  onNext: () => void;
}

export function PropertyDetails({
  data,
  onChange,
  availableProperties,
  onNext,
}: PropertyDetailsProps) {
  const { trackEvent, events } = useAnalyticsEvent();
  const isComplete = Object.values(data).every(Boolean);

  const handleChange = (key: keyof PropertyFilters, value: string) => {
    onChange({ [key]: value });
    trackEvent(events.PROPERTY_FILTER, {
      filter_type: key,
      filter_value: value,
    });
  };

  const handleNext = () => {
    trackEvent(events.SEARCH_COMPLETE, {
      properties_found: availableProperties,
      filters: data,
    });
    onNext();
  };

  return (
    <PropertySearchCard
      title="Detalhes da Propriedade"
      description="Defina as características do imóvel ideal"
    >
      <div className="space-y-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <PropertyFilter
            label="Quartos"
            value={data.bedrooms}
            onChange={(value) => handleChange('bedrooms', value)}
            options={[
              { value: '1', label: '1 quarto' },
              { value: '2', label: '2 quartos' },
              { value: '3', label: '3 quartos' },
              { value: '4', label: '4+ quartos' },
            ]}
          />

          <PropertyFilter
            label="Banheiros"
            value={data.bathrooms}
            onChange={(value) => handleChange('bathrooms', value)}
            options={[
              { value: '1', label: '1 banheiro' },
              { value: '2', label: '2 banheiros' },
              { value: '3', label: '3 banheiros' },
              { value: '4', label: '4+ banheiros' },
            ]}
          />

          <PropertyFilter
            label="Condição"
            value={data.condition}
            onChange={(value) => handleChange('condition', value)}
            options={[
              { value: 'ready', label: 'Pronto para Alugar' },
              { value: 'needs-repair', label: 'Precisa de Reforma' },
            ]}
          />
        </div>

        <div className="pt-6 border-t border-border">
          <div className="text-center">
            <p className="text-lg font-medium text-secondary">
              {availableProperties} propriedades encontradas
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <Button
            onClick={handleNext}
            className="airbnb-button"
            size="lg"
            disabled={!isComplete}
          >
            Ver Propriedades
          </Button>
        </div>
      </div>
    </PropertySearchCard>
  );
}
