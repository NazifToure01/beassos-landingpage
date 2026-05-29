import { IoPeopleOutline, IoStarSharp, IoSparkles } from 'react-icons/io5';
import PhoneMockup from './PhoneMockup';
import WaitlistForm from './WaitlistForm';

export default function Hero() {
  const categories = ['Culturel', 'Social', 'Éducatif', 'Sportif', 'Humanitaire'];

  return (
    <section className="hero-bg" style={{ padding: '80px 0 100px' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px' }}>
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">
          {/* Left */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-sm font-semibold"
              style={{
                background: 'rgba(247,157,13,0.10)',
                color: '#F79D0D',
                border: '1px solid rgba(247,157,13,0.25)',
              }}
            >
              <span className="animate-pulse-amber w-2 h-2 rounded-full inline-block" style={{ background: '#F79D0D' }} />
              Bientôt disponible · iOS & Android
            </div>

            {/* Headline */}
            <h1
              className="font-black mb-6"
              style={{
                fontSize: 'clamp(38px, 5.5vw, 62px)',
                color: 'var(--color-text-primary)',
                letterSpacing: '-0.028em',
                lineHeight: 1.05,
              }}
            >
              La diaspora africaine{' '}
              <span className="text-gradient">
                unie en un seul endroit
              </span>
            </h1>

            <p className="mb-8 max-w-lg mx-auto lg:mx-0" style={{ fontSize: 18, color: 'var(--color-text-secondary)', lineHeight: 1.65, fontWeight: 500 }}>
              Trouvez et rejoignez les associations près de chez vous. Suivez leurs actualités, inscrivez-vous à leurs événements et restez connecté à votre communauté.
            </p>

            {/* Category pills */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8">
              {categories.map((cat, i) => (
                <span
                  key={cat}
                  className="rounded-full px-3 py-1 text-xs font-bold"
                  style={{
                    background: i === 0 ? 'rgba(247,157,13,0.12)' : 'rgba(22,163,74,0.08)',
                    color: i === 0 ? '#F79D0D' : 'var(--color-primary)',
                    border: `1px solid ${i === 0 ? 'rgba(247,157,13,0.22)' : 'rgba(22,163,74,0.18)'}`,
                  }}
                >
                  {cat}
                </span>
              ))}
              <span className="rounded-full px-3 py-1 text-xs font-bold" style={{ background: '#F5F3EE', color: '#64748B', border: '1px solid #DDD9D4' }}>
                + d'autres...
              </span>
            </div>

            {/* Waitlist form */}
            <div id="waitlist" className="mb-10 max-w-lg mx-auto lg:mx-0">
              <WaitlistForm />
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <div className="flex -space-x-2.5" aria-label="Utilisateurs de l'app">
                {[
                  'linear-gradient(135deg,#F79D0D,#FFB534)',
                  'linear-gradient(135deg,#16A34A,#22C55E)',
                  'linear-gradient(135deg,#7C3AED,#A855F7)',
                  'linear-gradient(135deg,#0F172A,#334155)',
                ].map((bg, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full flex items-center justify-center border-2"
                    style={{ background: bg, borderColor: '#F5F3EE' }}
                  >
                    <IoPeopleOutline size={15} color="white" aria-hidden="true" />
                  </div>
                ))}
              </div>
              <div>
                <div className="text-sm font-bold" style={{ color: 'var(--color-text-primary)' }}>+2 400 membres</div>
                <div className="flex items-center gap-0.5 mt-0.5" aria-label="4.8 étoiles sur 5">
                  {[...Array(5)].map((_, i) => (
                    <IoStarSharp key={i} size={11} color="#F79D0D" aria-hidden="true" />
                  ))}
                  <span className="text-xs ml-1 font-semibold" style={{ color: '#64748B' }}>4.8/5</span>
                </div>
              </div>
              <div
                className="hidden sm:flex items-center gap-1.5 rounded-full px-3 py-1"
                style={{ background: 'rgba(22,163,74,0.08)', border: '1px solid rgba(22,163,74,0.18)' }}
              >
                <IoSparkles size={13} color="var(--color-primary)" />
                <span className="text-xs font-bold" style={{ color: 'var(--color-primary)' }}>320+ associations</span>
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
