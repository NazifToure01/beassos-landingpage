import {
  IoLockClosedOutline,
  IoCompassOutline,
  IoPeopleOutline,
} from 'react-icons/io5';

const steps = [
  { step: '01', title: 'Créez votre compte', description: 'Inscrivez-vous en quelques secondes via Google ou Apple. Aucun formulaire fastidieux.', Icon: IoLockClosedOutline, active: false },
  { step: '02', title: 'Explorez la carte', description: 'Découvrez les associations autour de vous et abonnez-vous à celles qui vous correspondent.', Icon: IoCompassOutline, active: true },
  { step: '03', title: 'Participez', description: 'Rejoignez les channels, inscrivez-vous aux événements et contribuez à votre communauté.', Icon: IoPeopleOutline, active: false },
];

export default function HowItWorks() {
  return (
    <section
      id="comment-ca-marche"
      style={{ padding: '100px 0', background: '#fff', borderTop: '1px solid #DDD9D4', borderBottom: '1px solid #DDD9D4' }}
    >
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px' }}>
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 text-sm font-medium"
            style={{ background: 'rgba(22,163,74,0.10)', color: 'var(--color-primary)', border: '1px solid rgba(22,163,74,0.20)' }}
          >
            Comment ça marche
          </div>
          <h2 className="font-bold" style={{ fontSize: 'clamp(28px, 4vw, 42px)', color: '#0F172A', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            Démarrez en <span className="text-gradient">3 étapes</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 relative">
          {/* Decorative connecting line between steps */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute h-px"
            style={{
              top: 28,
              left: 'calc(33% + 28px)',
              right: 'calc(33% + 28px)',
              background: 'linear-gradient(90deg, #DDD9D4, #16A34A, #DDD9D4)',
            }}
          />
          {steps.map((s, index) => (
            <div key={s.step} className="flex flex-col items-center text-center">
              <div
                aria-label={`Étape ${index + 1}`}
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 relative z-10"
                style={{
                  background: s.active ? 'var(--color-primary)' : '#F3F2EF',
                  border: '2px solid',
                  borderColor: s.active ? 'var(--color-primary)' : '#DDD9D4',
                }}
              >
                <s.Icon size={24} color={s.active ? '#fff' : '#64748B'} />
                {s.active && <span className="sr-only">Étape en cours</span>}
              </div>
              <div className="text-xs font-bold mb-2 tracking-widest" style={{ color: 'var(--color-primary)', fontSize: 12 }}>ÉTAPE {s.step}</div>
              <h3 className="font-bold text-lg mb-3" style={{ color: '#0F172A', lineHeight: 1.1 }}>{s.title}</h3>
              <p style={{ color: '#64748B', fontSize: 15, lineHeight: 1.6 }}>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
