'use client';

import { useState, useEffect } from 'react';
import { Home } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NavigationButton } from '@/components/navigation/NavigationButton';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-200',
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border'
          : 'bg-black/30 backdrop-blur-sm'
      )}
    >
      <div className="airbnb-container">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Home className="h-8 w-8 text-primary" />
            <span className={cn(
              "text-xl font-bold transition-colors",
              isScrolled ? "text-secondary" : "text-white"
            )}>
              AirInvest SP
            </span>
          </div>
          
          <NavigationButton
            href="/search"
            className="airbnb-button"
            size="lg"
          >
            Iniciar Busca
          </NavigationButton>
        </div>
      </div>
    </header>
  );
}
