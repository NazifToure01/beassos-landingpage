import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-nunito',
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
    <html lang="fr" className={nunito.variable}>
      <body>{children}</body>
    </html>
  );
}
