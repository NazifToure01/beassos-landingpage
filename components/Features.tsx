import { IoMapOutline, IoChatbubblesOutline, IoCalendarOutline, IoCheckmarkCircleOutline } from 'react-icons/io5';

// Features — pure display, no client state needed
export default function Features() {
  const features = [
    {
      Icon: IoMapOutline,
      title: 'Carte interactive',
      description: 'Explorez toutes les associations autour de vous sur une carte interactive. Filtrez par ville, catégorie ou distance.',
      color: 'var(--color-primary)',
      bg: 'rgba(22,163,74,0.08)',
      highlights: ['Recherche par géolocalisation', 'Filtres par catégorie', 'Fiche détaillée de chaque asso'],
    },
    {
      Icon: IoChatbubblesOutline,
      title: 'Channels exclusifs',
      description: 'Abonnez-vous aux associations et accédez à leurs channels privés. Réagissez aux posts et restez informé en temps réel.',
      color: 'var(--color-gold)',
      bg: 'rgba(217,119,6,0.08)',
      highlights: ['Fil d\'actualité personnalisé', 'Réactions et interactions', 'Partage d\'événements'],
    },
    {
      Icon: IoCalendarOutline,
      title: 'Gestion d\'événements',
      description: 'Inscrivez-vous aux événements en quelques secondes. Recevez votre billet QR et retrouvez-le même hors ligne.',
      color: '#7C3AED',
      bg: 'rgba(124,58,237,0.08)',
      highlights: ['Billet QR numérique', 'Rappels automatiques', 'Historique de vos participations'],
    },
  ];

  return (
    // id fixed: "fonctionnalites" (was "fonctionnalits" — missing accent + letter)
    <section id="fonctionnalites" style={{ padding: '100px 0' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px' }}>
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 text-sm font-medium"
            style={{ background: 'rgba(22,163,74,0.10)', color: 'var(--color-primary)', border: '1px solid rgba(22,163,74,0.20)' }}
          >
            Fonctionnalités
          </div>
          <h2
            className="font-bold mb-4"
            style={{ fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-text-primary)', letterSpacing: '-0.02em' }}
          >
            Tout ce dont vous avez besoin,{' '}
            <span className="text-gradient">en un seul endroit</span>
          </h2>
          <p className="max-w-xl mx-auto" style={{ fontSize: 17, color: '#64748B', lineHeight: 1.6 }}>
            BeAssos réunit carte interactive, actualités, événements et gestion associative dans une seule application pensée pour la diaspora.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="feature-card rounded-3xl p-8"
              style={{ background: '#fff', border: '1px solid #DDD9D4' }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: f.bg }}
              >
                <f.Icon size={26} color={f.color} aria-hidden="true" />
              </div>
              <h3 className="font-bold mb-3 text-xl" style={{ color: 'var(--color-text-primary)' }}>{f.title}</h3>
              {/* fontSize: 15 → --font-size-base */}
              <p className="mb-6 leading-relaxed" style={{ color: '#64748B', fontSize: 15 }}>{f.description}</p>
              <ul className="flex flex-col gap-2">
                {f.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                    <IoCheckmarkCircleOutline size={16} color={f.color} style={{ flexShrink: 0 }} aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
