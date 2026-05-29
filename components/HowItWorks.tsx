import {
  IoLogoGoogle,
  IoLogoApple,
  IoMapOutline,
  IoRocketOutline,
  IoCheckmarkCircle,
} from 'react-icons/io5';

const steps = [
  {
    step: '01',
    title: 'Créez votre compte',
    description: 'Inscrivez-vous en quelques secondes via Google ou Apple. Aucun formulaire fastidieux, juste votre email.',
    icons: [IoLogoGoogle, IoLogoApple],
    active: false,
    color: 'var(--color-primary)',
    tag: 'Gratuit',
  },
  {
    step: '02',
    title: 'Explorez & abonnez-vous',
    description: 'Découvrez les associations autour de vous sur la carte et abonnez-vous à celles qui vous correspondent.',
    icons: [IoMapOutline],
    active: true,
    color: '#F79D0D',
    tag: '42 à Paris',
  },
  {
    step: '03',
    title: 'Participez pleinement',
    description: 'Rejoignez les channels, inscrivez-vous aux événements, obtenez votre billet QR et contribuez à votre communauté.',
    icons: [IoRocketOutline],
    active: false,
    color: '#7C3AED',
    tag: 'En route !',
  },
];

export default function HowItWorks() {
  return (
    <section
      id="comment-ca-marche"
      style={{
        padding: '100px 0',
        background: '#fff',
        borderTop: '1px solid #DDD9D4',
        borderBottom: '1px solid #DDD9D4',
      }}
    >
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px' }}>
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 text-sm font-bold"
            style={{ background: 'rgba(247,157,13,0.10)', color: '#F79D0D', border: '1px solid rgba(247,157,13,0.22)' }}
          >
            Comment ça marche
          </div>
          <h2 className="font-black" style={{ fontSize: 'clamp(28px, 4vw, 44px)', color: '#0F172A', letterSpacing: '-0.022em', lineHeight: 1.1 }}>
            Démarrez en <span className="text-gradient">3 étapes</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Progress connector */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute"
            style={{
              top: 28,
              left: 'calc(16.6% + 22px)',
              right: 'calc(16.6% + 22px)',
              height: 2,
              background: 'linear-gradient(90deg, rgba(22,163,74,0.3), #F79D0D 50%, rgba(124,58,237,0.3))',
              borderRadius: 2,
            }}
          />
          {/* Active indicator dot on connector */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute"
            style={{
              top: 22,
              left: 'calc(50% - 7px)',
              width: 14,
              height: 14,
              borderRadius: '50%',
              background: '#F79D0D',
              boxShadow: '0 0 0 4px rgba(247,157,13,0.20)',
            }}
          />

          {steps.map((s, idx) => (
            <div
              key={s.step}
              className="flex flex-col items-center text-center"
              style={{ position: 'relative' }}
            >
              {/* Step icon circle */}
              <div
                aria-label={`Étape ${idx + 1}`}
                className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                style={{
                  background: s.active ? s.color : '#F5F3EE',
                  border: `2px solid ${s.active ? s.color : '#DDD9D4'}`,
                  boxShadow: s.active ? `0 8px 24px ${s.color}33` : 'none',
                  transition: 'box-shadow 0.2s',
                }}
              >
                {(() => {
                  const iconColor = s.active ? '#fff' : '#64748B';
                  if (s.icons.length === 1) {
                    const SingleIcon = s.icons[0];
                    return <SingleIcon size={24} color={iconColor} />;
                  }
                  return (
                    <div className="flex gap-1">
                      {s.icons.map((Icon, i) => <Icon key={i} size={16} color={iconColor} />)}
                    </div>
                  );
                })()}
                {s.active && <span className="sr-only">Étape en cours</span>}
              </div>

              {/* Step tag */}
              <div
                className="rounded-full px-2.5 py-0.5 text-xs font-bold mb-3"
                style={{
                  background: s.active ? `${s.color}15` : 'rgba(22,163,74,0.08)',
                  color: s.active ? s.color : 'var(--color-primary)',
                  border: `1px solid ${s.active ? `${s.color}30` : 'rgba(22,163,74,0.18)'}`,
                }}
              >
                ÉTAPE {s.step} · {s.tag}
              </div>

              <h3 className="font-extrabold text-lg mb-3" style={{ color: '#0F172A', lineHeight: 1.15, letterSpacing: '-0.01em' }}>{s.title}</h3>
              <p style={{ color: '#64748B', fontSize: 14, lineHeight: 1.65, fontWeight: 500 }}>{s.description}</p>

              {/* Done checkmark for first step */}
              {idx === 0 && (
                <div className="flex items-center gap-1.5 mt-4 rounded-full px-3 py-1" style={{ background: 'rgba(22,163,74,0.08)' }}>
                  <IoCheckmarkCircle size={13} color="var(--color-primary)" />
                  <span style={{ fontSize: 11, color: 'var(--color-primary)', fontWeight: 700 }}>30 secondes</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
