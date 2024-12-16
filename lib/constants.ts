export const INVESTMENT_RANGE = {
  min: 100000,
  max: 1000000,
  step: 50000,
};

export const SP_REGIONS = [
  { id: 'north', name: 'Zona Norte', properties: 145 },
  { id: 'south', name: 'Zona Sul', properties: 283 },
  { id: 'center', name: 'Centro', properties: 198 },
  { id: 'east', name: 'Zona Leste', properties: 167 },
  { id: 'west', name: 'Zona Oeste', properties: 234 },
];

export const CAPACITY_OPTIONS = Array.from({ length: 11 }, (_, i) => ({
  value: String(i + 2),
  label: `${i + 2} pessoas`,
}));

export const BEDROOM_OPTIONS = Array.from({ length: 5 }, (_, i) => ({
  value: String(i + 1),
  label: `${i + 1} ${i === 4 ? 'ou mais' : ''} quarto${i === 0 ? '' : 's'}`,
}));

export const BATHROOM_OPTIONS = Array.from({ length: 4 }, (_, i) => ({
  value: String(i + 1),
  label: `${i + 1} ${i === 3 ? 'ou mais' : ''} banheiro${i === 0 ? '' : 's'}`,
}));

export const PROPERTY_CONDITIONS = [
  { value: 'ready', label: 'Pronto para Alugar' },
  { value: 'needs-repair', label: 'Precisa de Reforma' },
];
