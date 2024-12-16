import { NavigationButton } from '@/components/navigation/NavigationButton';

export function Hero() {
  return (
    <div className="relative min-h-[80vh] flex items-center bg-surface">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80"
          alt="Modern São Paulo Apartment"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
      </div>

      <div className="airbnb-container relative">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="block">Invista em Imóveis para</span>
            <span className="block text-primary">Airbnb em São Paulo</span>
          </h1>
          <p className="mt-6 text-xl text-white/90">
            Descubra as melhores oportunidades de investimento em apartamentos para Airbnb.
            Retorno acima do mercado com nossa análise especializada.
          </p>
          <div className="mt-10">
            <NavigationButton
              href="/search"
              size="lg"
              className="airbnb-button text-lg"
            >
              Encontrar Propriedades
            </NavigationButton>
          </div>
        </div>
      </div>
    </div>
  );
}
