'use client';

import { Button } from '@/components/ui/button';
import { SP_REGIONS } from '@/lib/constants';

interface RegionSelectionProps {
  selectedRegions: string[];
  onChange: (regions: string[]) => void;
  onNext: () => void;
}

export function RegionSelection({
  selectedRegions,
  onChange,
  onNext,
}: RegionSelectionProps) {
  const toggleRegion = (regionId: string) => {
    const newRegions = selectedRegions.includes(regionId)
      ? selectedRegions.filter((id) => id !== regionId)
      : [...selectedRegions, regionId];
    onChange(newRegions);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold text-center text-gray-900">
        Selecione as Regiões de Interesse
      </h2>
      <p className="mt-2 text-center text-gray-600">
        Escolha uma ou mais regiões para sua busca
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SP_REGIONS.map((region) => (
          <button
            key={region.id}
            onClick={() => toggleRegion(region.id)}
            className={`p-4 rounded-lg border-2 transition-all ${
              selectedRegions.includes(region.id)
                ? 'border-primary bg-primary/5'
                : 'border-gray-200 hover:border-primary/50'
            }`}
          >
            <h3 className="font-medium text-gray-900">{region.name}</h3>
            <p className="mt-1 text-sm text-gray-500">
              {region.properties} propriedades
            </p>
          </button>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Button
          size="lg"
          onClick={onNext}
          disabled={selectedRegions.length === 0}
        >
          Continuar
        </Button>
      </div>
    </div>
  );
}
