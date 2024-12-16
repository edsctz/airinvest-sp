import { Search, MapPin, ClipboardCheck, Key } from 'lucide-react';

const steps = [
  {
    title: 'Defina seu Investimento',
    description: 'Escolha o valor que deseja investir e região de interesse',
    icon: Search,
  },
  {
    title: 'Selecione a Região',
    description: 'Explore as melhores áreas de São Paulo para seu perfil',
    icon: MapPin,
  },
  {
    title: 'Analise as Opções',
    description: 'Compare propriedades e projeções de retorno',
    icon: ClipboardCheck,
  },
  {
    title: 'Comece a Investir',
    description: 'Receba suporte completo para concretizar seu investimento',
    icon: Key,
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Como Funciona
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Processo simplificado para encontrar seu imóvel ideal
          </p>
        </div>

        <div className="mt-20">
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-between">
              {steps.map((step, index) => (
                <div key={step.title} className="flex flex-col items-center">
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white border-2 border-primary text-primary">
                    <step.icon className="h-6 w-6" />
                    <span className="absolute -bottom-8 text-sm font-medium text-gray-900">
                      {index + 1}
                    </span>
                  </div>
                  <div className="mt-12 text-center">
                    <h3 className="text-lg font-medium text-gray-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 max-w-[200px]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
