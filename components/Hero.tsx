import { IoLogoApple, IoLogoGoogle, IoPeopleOutline, IoStarSharp } from 'react-icons/io5';
import PhoneMockup from './PhoneMockup';

// Hero — pure display, no client state needed
export default function Hero() {
  return (
    <section style={{ padding: '80px 0 96px' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px' }}>
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Left */}
          <div className="flex-1 text-center lg:text-left">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-sm font-medium"
              style={{ background: 'rgba(22,163,74,0.10)', color: 'var(--color-primary)', border: '1px solid rgba(22,163,74,0.20)' }}
            >
              <span className="animate-pulse-green w-2 h-2 rounded-full inline-block" style={{ background: 'var(--color-primary)' }} />
              Disponible sur iOS & Android
            </div>

            <h1
              className="font-bold mb-6"
              style={{ fontSize: 'clamp(36px, 5vw, 58px)', color: 'var(--color-text-primary)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
            >
              La communauté de la{' '}
              <span className="text-gradient">diaspora africaine</span>
              {' '}en France
            </h1>

            <p className="mb-8 max-w-lg mx-auto lg:mx-0" style={{ fontSize: 18, color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
              Trouvez et rejoignez les associations près de chez vous. Suivez leurs actualités, participez à leurs événements et restez connecté à votre communauté.
            </p>

            {/* Store buttons */}
            <div id="download" className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a
                href="#"
                className="store-btn text-white"
                style={{ background: 'var(--color-text-primary)' }}
                aria-label="Télécharger sur l'App Store"
              >
                <IoLogoApple size={22} color="white" aria-hidden="true" />
                <div className="text-left">
                  <div style={{ fontSize: 10, opacity: 0.7, lineHeight: 1.0 }}>Disponible sur</div>
                  {/* fontSize: 15 → --font-size-base */}
                  <div style={{ fontSize: 15, fontWeight: 700, lineHeight: 1.3 }}>App Store</div>
                </div>
              </a>
              <a
                href="#"
                className="store-btn"
                style={{ background: '#fff', border: '1.5px solid #DDD9D4', color: 'var(--color-text-primary)' }}
                aria-label="Télécharger sur Google Play"
              >
                <IoLogoGoogle size={20} color="var(--color-primary)" aria-hidden="true" />
                <div className="text-left">
                  <div style={{ fontSize: 10, opacity: 0.55, lineHeight: 1.0 }}>Disponible sur</div>
                  {/* fontSize: 15 → --font-size-base */}
                  <div style={{ fontSize: 15, fontWeight: 700, lineHeight: 1.3 }}>Google Play</div>
                </div>
              </a>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              {/* Overlapping avatars */}
              <div className="flex -space-x-2" aria-label="Utilisateurs de l'app">
                {['var(--color-primary)', 'var(--color-gold)', '#7C3AED', 'var(--color-text-primary)'].map((bg, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full flex items-center justify-center border-2"
                    style={{ background: bg, borderColor: '#F3F2EF' }}
                  >
                    <IoPeopleOutline size={16} color="white" aria-hidden="true" />
                  </div>
                ))}
              </div>
              <div>
                <div className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>+2 400 membres</div>
                {/* Star rating */}
                <div className="flex items-center gap-0.5 mt-0.5" aria-label="4.9 étoiles sur 5">
                  {[...Array(5)].map((_, i) => (
                    <IoStarSharp key={i} size={12} color="var(--color-gold)" aria-hidden="true" />
                  ))}
                  <span className="text-xs ml-1" style={{ color: '#64748B' }}>4.8/5</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right — phone */}
          <div className="flex-shrink-0">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
