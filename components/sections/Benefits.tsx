import { Building2, TrendingUp, Shield, Map } from 'lucide-react';

const benefits = [
  {
    title: 'Localização Privilegiada',
    description: 'São Paulo é o principal destino de negócios da América Latina',
    icon: Map,
  },
  {
    title: 'Alto Retorno',
    description: 'Rentabilidade média 40% superior a aluguéis tradicionais',
    icon: TrendingUp,
  },
  {
    title: 'Demanda Constante',
    description: 'Ocupação média de 75% ao longo do ano',
    icon: Building2,
  },
  {
    title: 'Segurança',
    description: 'Processo 100% documentado e regularizado',
    icon: Shield,
  },
];

export function Benefits() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Por que investir em Airbnb em São Paulo?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Descubra as vantagens de investir em imóveis para aluguel por temporada
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="relative p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow"
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                <div className="rounded-full bg-primary/10 p-3">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
              </div>

              <div className="pt-8 text-center">
                <h3 className="text-xl font-semibold text-gray-900">
                  {benefit.title}
                </h3>
                <p className="mt-4 text-gray-500">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
