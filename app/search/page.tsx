'use client';

import { useState } from 'react';
import { PropertySearchSteps } from '@/components/search/PropertySearchSteps';
import { InvestmentRange } from '@/components/search/InvestmentRange';
import { RegionSelection } from '@/components/search/RegionSelection';
import { PropertyDetails } from '@/components/search/PropertyDetails';
import { LeadForm } from '@/components/search/LeadForm';
import { calculateAvailableProperties } from '@/lib/services/property-calculator';
import type { PropertyFilters } from '@/lib/types';

type SearchStep = 'investment' | 'region' | 'details' | 'lead';

export default function SearchPage() {
  const [currentStep, setCurrentStep] = useState<SearchStep>('investment');
  const [searchData, setSearchData] = useState({
    investment: 500000,
    regions: [] as string[],
    bedrooms: '',
    bathrooms: '',
    condition: '',
  });

  const [availableProperties, setAvailableProperties] = useState(0);

  const updateSearchData = (data: Partial<typeof searchData>) => {
    const newData = { ...searchData, ...data };
    setSearchData(newData);
    
    // Only calculate properties when all required fields are filled
    if (currentStep === 'details' && 
        newData.regions.length > 0 &&
        newData.bedrooms &&
        newData.bathrooms &&
        newData.condition) {
      const count = calculateAvailableProperties(
        newData.regions,
        newData.investment,
        {
          bedrooms: newData.bedrooms,
          bathrooms: newData.bathrooms,
          condition: newData.condition,
        }
      );
      setAvailableProperties(count);
    }
  };

  const nextStep = () => {
    const steps: SearchStep[] = ['investment', 'region', 'details', 'lead'];
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1]);
    }
  };

  return (
    <main className="min-h-screen bg-surface pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <PropertySearchSteps currentStep={currentStep} />
        
        <div className="mt-8">
          {currentStep === 'investment' && (
            <InvestmentRange
              value={searchData.investment}
              onChange={(value) => updateSearchData({ investment: value })}
              onNext={nextStep}
            />
          )}
          
          {currentStep === 'region' && (
            <RegionSelection
              selectedRegions={searchData.regions}
              onChange={(regions) => updateSearchData({ regions })}
              onNext={nextStep}
            />
          )}
          
          {currentStep === 'details' && (
            <PropertyDetails
              data={{
                bedrooms: searchData.bedrooms,
                bathrooms: searchData.bathrooms,
                condition: searchData.condition,
              }}
              onChange={updateSearchData}
              availableProperties={availableProperties}
              onNext={nextStep}
            />
          )}
          
          {currentStep === 'lead' && (
            <LeadForm
              propertyCount={availableProperties}
              searchData={searchData}
            />
          )}
        </div>
      </div>
    </main>
  );
}
