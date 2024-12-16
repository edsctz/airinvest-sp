import { SP_REGIONS } from '@/lib/constants';
import type { PropertyFilters } from '@/lib/types';

export function calculateAvailableProperties(
  selectedRegions: string[],
  investment: number,
  filters: PropertyFilters
): number {
  if (!selectedRegions.length) return 0;

  // Get total base properties from selected regions
  const baseCount = selectedRegions.reduce((total, regionId) => {
    const region = SP_REGIONS.find((r) => r.id === regionId);
    return total + (region?.properties || 0);
  }, 0);

  // Apply investment range filter with consistent ratios
  let count = baseCount;
  const investmentRatio = getInvestmentRatio(investment);
  count = Math.floor(count * investmentRatio);

  // Apply property filters consistently
  if (isFiltersComplete(filters)) {
    count = applyCapacityFilter(count, filters.capacity);
    count = applyBedroomFilter(count, filters.bedrooms);
    count = applyBathroomFilter(count, filters.bathrooms);
    count = applyConditionFilter(count, filters.condition);
  }

  return Math.max(count, 1);
}

function getInvestmentRatio(investment: number): number {
  if (investment < 500000) return 0.4;
  if (investment < 1000000) return 0.35;
  if (investment < 1500000) return 0.15;
  return 0.1;
}

function isFiltersComplete(filters: PropertyFilters): boolean {
  return Object.values(filters).every(Boolean);
}

function applyCapacityFilter(count: number, capacity: string): number {
  const capacityNum = parseInt(capacity, 10);
  if (capacityNum <= 4) return Math.floor(count * 0.4);
  if (capacityNum <= 6) return Math.floor(count * 0.35);
  if (capacityNum <= 8) return Math.floor(count * 0.15);
  return Math.floor(count * 0.1);
}

function applyBedroomFilter(count: number, bedrooms: string): number {
  const bedroomNum = parseInt(bedrooms, 10);
  return Math.floor(count * (1 - (bedroomNum - 1) * 0.2));
}

function applyBathroomFilter(count: number, bathrooms: string): number {
  const bathroomNum = parseInt(bathrooms, 10);
  return Math.floor(count * (1 - (bathroomNum - 1) * 0.15));
}

function applyConditionFilter(count: number, condition: string): number {
  return Math.floor(count * (condition === 'ready' ? 0.7 : 0.3));
}
