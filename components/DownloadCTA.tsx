import Image from 'next/image';
import WaitlistForm from './WaitlistForm';

export default function DownloadCTA() {
  return (
    <section style={{ padding: '100px 0', background: '#080A07', position: 'relative', overflow: 'hidden' }}>
      {/* Ambient glows — amber + green like the app */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: '40%', left: '20%',
        transform: 'translate(-50%,-50%)',
        width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(247,157,13,0.12) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div aria-hidden="true" style={{
        position: 'absolute', top: '60%', right: '10%',
        transform: 'translate(50%,-50%)',
        width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(22,163,74,0.10) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <div className="text-center">
          <Image
            src="/logo_complete.png"
            alt="BeAssos"
            width={160}
            height={40}
            style={{ objectFit: 'contain', margin: '0 auto 32px', filter: 'brightness(0) invert(1)' }}
          />

          {/* Category badges */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {['🌍 Culturel', '🤝 Social', '📚 Éducatif', '⚽ Sportif', '🙏 Humanitaire'].map((cat) => (
              <span
                key={cat}
                className="rounded-full px-3 py-1 text-xs font-bold"
                style={{
                  background: 'rgba(247,157,13,0.10)',
                  color: 'rgba(247,157,13,0.85)',
                  border: '1px solid rgba(247,157,13,0.18)',
                }}
              >
                {cat}
              </span>
            ))}
          </div>

          <h2
            className="font-black mb-6"
            style={{
              fontSize: 'clamp(30px, 5vw, 54px)',
              color: '#F0F5E8',
              letterSpacing: '-0.025em',
              lineHeight: 1.08,
            }}
          >
            Rejoignez la communauté{' '}
            <span style={{
              background: 'linear-gradient(135deg,#F79D0D,#FFB534)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              dès le lancement
            </span>
          </h2>

          <p className="max-w-lg mx-auto mb-10" style={{ fontSize: 17, color: '#A8BC8E', lineHeight: 1.65, fontWeight: 500 }}>
            L'app arrive bientôt. Laissez votre email et soyez le premier informé quand BeAssos sera disponible sur iOS et Android.
          </p>

          <div className="max-w-lg mx-auto">
            <WaitlistForm dark />
          </div>

          <p className="mt-8 text-sm font-semibold" style={{ color: '#6A8055' }}>
            Gratuit · Sans engagement · iOS & Android
          </p>

          {/* Trust icons row */}
          <div className="flex items-center justify-center gap-6 mt-8">
            {['320+ associations', '2 400 membres', '15 villes', '4.8/5 ⭐'].map((stat) => (
              <span key={stat} style={{ fontSize: 12, color: '#4A5E3A', fontWeight: 700 }}>{stat}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
