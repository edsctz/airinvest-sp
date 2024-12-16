import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { GTMScript } from '@/components/analytics/GTMScript';
import { AnalyticsProvider } from '@/components/analytics/AnalyticsProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AirInvest SP - Investimentos em Airbnb em São Paulo',
  description: 'Encontre as melhores oportunidades de investimento em imóveis para Airbnb em São Paulo. Análise especializada e retorno acima do mercado.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <GTMScript />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <AnalyticsProvider>
          {children}
        </AnalyticsProvider>
      </body>
    </html>
  );
}
