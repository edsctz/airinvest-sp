'use client';

import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export function CTA() {
  const router = useRouter();

  return (
    <section className="py-24 bg-primary">
      <div className="airbnb-container">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Pronto para Começar?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Encontre as melhores oportunidades de investimento em São Paulo
          </p>
          <div className="mt-8">
            <Button
              onClick={() => router.push('/search')}
              size="lg"
              variant="secondary"
              className="group"
            >
              Iniciar Busca
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          <p className="mt-4 text-sm text-white/60">
            Mais de 1.000 propriedades disponíveis em toda São Paulo
          </p>
        </div>
      </div>
    </section>
  );
}
