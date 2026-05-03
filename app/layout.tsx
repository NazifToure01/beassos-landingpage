import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'BeAssos — La communauté de la diaspora africaine',
  description: 'Trouvez, suivez et rejoignez les associations de la diaspora africaine près de chez vous. Carte interactive, channels exclusifs et gestion d\'événements.',
  keywords: ['associations', 'diaspora', 'africaine', 'communauté', 'événements', 'carte'],
  openGraph: {
    title: 'BeAssos — La communauté de la diaspora africaine',
    description: 'Trouvez, suivez et rejoignez les associations de la diaspora africaine.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
