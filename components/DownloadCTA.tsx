import Image from 'next/image';
import { IoLogoApple, IoLogoGoogle } from 'react-icons/io5';

export default function DownloadCTA() {
  return (
    <section style={{ padding: '100px 0', background: '#0B1120', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative radial glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 700, height: 700,
          background: 'radial-gradient(circle, rgba(22,163,74,0.12) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <div className="text-center">
          <Image
            src="/logo_complete.png"
            alt="BeAssos"
            width={160}
            height={40}
            style={{ objectFit: 'contain', margin: '0 auto 32px', filter: 'brightness(0) invert(1)' }}
          />
          <h2
            className="font-bold mb-6"
            style={{ fontSize: 'clamp(30px, 5vw, 52px)', color: '#F5F0EB', letterSpacing: '-0.02em', lineHeight: 1.1 }}
          >
            Rejoignez la communauté dès aujourd'hui
          </h2>
          <p className="max-w-lg mx-auto mb-10" style={{ fontSize: 17, color: '#9AAAC0', lineHeight: 1.6 }}>
            Téléchargez BeAssos gratuitement et connectez-vous à la diaspora africaine en France.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="store-btn text-white"
              style={{ background: '#1C2A42', border: '1px solid #2A3F5F' }}
              aria-label="Télécharger sur l'App Store"
            >
              <IoLogoApple size={22} color="white" />
              <div className="text-left">
                <div style={{ fontSize: 10, opacity: 0.6, lineHeight: 1 }}>Disponible sur</div>
                <div style={{ fontSize: 15, fontWeight: 700, lineHeight: 1.3 }}>App Store</div>
              </div>
            </a>
            <a
              href="#"
              className="store-btn text-white"
              style={{ background: '#22C55E' }}
              aria-label="Télécharger sur Google Play"
            >
              <IoLogoGoogle size={20} color="white" />
              <div className="text-left">
                <div style={{ fontSize: 10, opacity: 0.8, lineHeight: 1 }}>Disponible sur</div>
                <div style={{ fontSize: 15, fontWeight: 700, lineHeight: 1.3 }}>Google Play</div>
              </div>
            </a>
          </div>

          <p className="mt-8 text-sm" style={{ color: '#6B7FA0' }}>
            Gratuit · Sans engagement · iOS & Android
          </p>
        </div>
      </div>
    </section>
  );
}
