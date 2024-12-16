import { Check } from 'lucide-react';

const steps = [
  { id: 'investment', title: 'Investimento' },
  { id: 'region', title: 'Região' },
  { id: 'details', title: 'Detalhes' },
  { id: 'lead', title: 'Contato' },
];

interface PropertySearchStepsProps {
  currentStep: string;
}

export function PropertySearchSteps({ currentStep }: PropertySearchStepsProps) {
  const currentStepIndex = steps.findIndex((step) => step.id === currentStep);

  return (
    <div className="relative">
      <div
        className="absolute top-4 left-0 right-0 h-0.5 bg-gray-200"
        aria-hidden="true"
      >
        <div
          className="h-full bg-primary transition-all duration-500"
          style={{
            width: `${((currentStepIndex + 1) / steps.length) * 100}%`,
          }}
        />
      </div>

      <ul className="relative flex justify-between">
        {steps.map((step, index) => {
          const isCompleted = index < currentStepIndex;
          const isCurrent = index === currentStepIndex;

          return (
            <li key={step.id} className="flex flex-col items-center">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full border-2 transition-colors ${
                  isCompleted
                    ? 'border-primary bg-primary text-white'
                    : isCurrent
                    ? 'border-primary bg-white text-primary'
                    : 'border-gray-300 bg-white'
                }`}
              >
                {isCompleted ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <span className="text-sm">{index + 1}</span>
                )}
              </div>
              <span
                className={`mt-2 text-sm ${
                  isCurrent ? 'font-medium text-primary' : 'text-gray-500'
                }`}
              >
                {step.title}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
