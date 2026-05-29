import Image from 'next/image';
import {
  IoMapOutline,
  IoChatbubblesOutline,
  IoCalendarOutline,
  IoCheckmarkCircleOutline,
} from 'react-icons/io5';

function FeaturePreview({ src, alt, width, height }: { src: string; alt: string; width: number; height: number }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid #E8E4DF' }}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-auto"
        sizes="(max-width: 768px) 100vw, 360px"
      />
    </div>
  );
}

const features = [
  {
    Icon: IoMapOutline,
    title: 'Carte & Découverte',
    description: 'Explorez les associations de la diaspora sur une carte interactive. Géolocalisation, filtres par ville et par catégorie.',
    color: '#F79D0D',
    bg: 'rgba(247,157,13,0.10)',
    highlights: ['Recherche par géolocalisation', 'Filtres par catégorie', 'Rayon de 30 km'],
    previewSrc: '/carte_decouverte.png',
    previewAlt: 'Vue carte de découverte des associations en France',
    previewWidth: 1320,
    previewHeight: 961,
  },
  {
    Icon: IoChatbubblesOutline,
    title: 'Fil & Channels',
    description: 'Abonnez-vous et recevez les actualités en temps réel. Réagissez aux posts avec des emojis et restez informé.',
    color: '#16A34A',
    bg: 'rgba(22,163,74,0.10)',
    highlights: ['Fil d\'actualité personnalisé', 'Réactions emoji 👍❤️🔥', 'Notifications push'],
    previewSrc: '/fil_channels.png',
    previewAlt: 'Publication du fil avec réactions emoji',
    previewWidth: 1320,
    previewHeight: 688,
  },
  {
    Icon: IoCalendarOutline,
    title: 'Événements & Billets',
    description: 'Inscrivez-vous aux événements en quelques secondes. Recevez un billet QR numérique et retrouvez-le hors ligne.',
    color: '#7C3AED',
    bg: 'rgba(124,58,237,0.10)',
    highlights: ['Billet QR numérique', 'Rappels automatiques', 'Historique de participations'],
    previewSrc: '/evenements_billets.png',
    previewAlt: 'Carte événement avec date, lieu et réactions',
    previewWidth: 1320,
    previewHeight: 1019,
  },
];

export default function Features() {
  return (
    <section id="fonctionnalites" style={{ padding: '100px 0' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px' }}>
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 text-sm font-bold"
            style={{ background: 'rgba(247,157,13,0.10)', color: '#F79D0D', border: '1px solid rgba(247,157,13,0.22)' }}
          >
            Fonctionnalités
          </div>
          <h2
            className="font-black mb-4"
            style={{ fontSize: 'clamp(28px, 4vw, 44px)', color: 'var(--color-text-primary)', letterSpacing: '-0.022em' }}
          >
            Tout ce dont vous avez besoin,{' '}
            <span className="text-gradient-green">en un seul endroit</span>
          </h2>
          <p className="max-w-xl mx-auto" style={{ fontSize: 17, color: '#64748B', lineHeight: 1.65, fontWeight: 500 }}>
            BeAssos réunit carte interactive, actualités communautaires, événements et gestion associative dans une seule app pensée pour la diaspora.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="feature-card rounded-3xl overflow-hidden"
              style={{ background: '#fff', border: '1px solid #DDD9D4' }}
            >
              <div style={{ background: '#F5F0E8', padding: '20px 20px 16px' }}>
                <FeaturePreview
                  src={f.previewSrc}
                  alt={f.previewAlt}
                  width={f.previewWidth}
                  height={f.previewHeight}
                />
              </div>

              <div style={{ padding: '24px 24px 28px' }}>
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: f.bg }}
                >
                  <f.Icon size={22} color={f.color} aria-hidden="true" />
                </div>
                <h3 className="font-extrabold mb-2" style={{ fontSize: 18, color: 'var(--color-text-primary)', letterSpacing: '-0.01em' }}>{f.title}</h3>
                <p className="mb-5 leading-relaxed" style={{ color: '#64748B', fontSize: 14, fontWeight: 500 }}>{f.description}</p>
                <ul className="flex flex-col gap-2">
                  {f.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm font-semibold" style={{ color: 'var(--color-text-secondary)' }}>
                      <IoCheckmarkCircleOutline size={15} color={f.color} style={{ flexShrink: 0 }} aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
