'use client';

import { useState } from 'react';
import { useAnalyticsEvent } from '@/hooks/useAnalytics';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { formatCurrency } from '@/lib/utils';
import { INVESTMENT_RANGE } from '@/lib/constants';
import { PropertySearchCard } from './PropertySearchCard';

interface InvestmentRangeProps {
  value: number;
  onChange: (value: number) => void;
  onNext: () => void;
}

export function InvestmentRange({ value, onChange, onNext }: InvestmentRangeProps) {
  const { trackEvent, events } = useAnalyticsEvent();

  const handleSliderChange = (values: number[]) => {
    const newValue = values[0];
    onChange(newValue);
    trackEvent(events.INVESTMENT_SELECT as any, { // Correct usage
      value: newValue,
      formatted_value: formatCurrency(newValue),
    });
  };

  const handleNext = () => {
    trackEvent(events.SEARCH_START as any, { // Correct usage
      initial_investment: value,
      formatted_investment: formatCurrency(value),
    });
    onNext();
  };

  return (
    <PropertySearchCard
      title="Qual é o seu investimento planejado?"
      description="Defina o valor que você pretende investir"
    >
      <div className="space-y-8">
        <div className="text-center">
          <span className="text-4xl font-bold text-secondary">
            {formatCurrency(value)}
          </span>
        </div>

        <Slider
          value={[value]}
          min={INVESTMENT_RANGE.min}
          max={INVESTMENT_RANGE.max}
          step={INVESTMENT_RANGE.step}
          onValueChange={handleSliderChange}
          className="w-full"
        />

        <div className="flex justify-between text-sm text-muted">
          <span>{formatCurrency(INVESTMENT_RANGE.min)}</span>
          <span>{formatCurrency(INVESTMENT_RANGE.max)}</span>
        </div>

        <div className="flex justify-center">
          <Button onClick={handleNext} className="airbnb-button" size="lg">
            Continuar
          </Button>
        </div>
      </div>
    </PropertySearchCard>
  );
}
