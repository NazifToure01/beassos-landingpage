import Image from 'next/image';
import { IoHeartSharp } from 'react-icons/io5';

const cols = [
  { title: 'Application', links: ['Fonctionnalités', 'Comment ça marche', 'Télécharger'] },
  { title: 'Légal', links: ["Conditions d'utilisation", 'Politique de confidentialité', 'Mentions légales'] },
];

export default function Footer() {
  return (
    <footer style={{ background: '#0B1120', borderTop: '1px solid #1F2E48' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '48px 24px 32px' }}>
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
          <div style={{ maxWidth: 280 }}>
            <Image
              src="/logo_complete.png"
              alt="BeAssos"
              width={130}
              height={32}
              style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)', marginBottom: 12 }}
            />
            <p className="text-sm leading-relaxed" style={{ color: '#6B7FA0' }}>
              La plateforme dédiée aux associations de la diaspora africaine en France.
            </p>
          </div>

          <div className="flex gap-16">
            {cols.map((col) => (
              <div key={col.title}>
                <h4 className="text-sm font-semibold mb-4" style={{ color: '#9AAAC0' }}>{col.title}</h4>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="footer-link text-sm">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8" style={{ borderTop: '1px solid #1F2E48' }}>
          <p className="text-xs" style={{ color: '#6B7FA0' }}>
            © <time dateTime="2025">2025</time> BeAssos. Tous droits réservés.
          </p>
          <p className="text-xs flex items-center gap-1" style={{ color: '#6B7FA0' }}>
            Fait avec <IoHeartSharp aria-hidden="true" size={12} color="var(--color-primary)" /> pour la diaspora africaine
          </p>
        </div>
      </div>
    </footer>
  );
}
