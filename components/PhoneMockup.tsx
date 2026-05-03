import Image from 'next/image';
import { IoMapOutline } from 'react-icons/io5';

// PhoneMockup — pure display, no client state needed
export default function PhoneMockup() {
  return (
    <div className="relative flex justify-center items-center" style={{ minWidth: 300 }}>
      {/* Glow — decorative */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(22,163,74,0.25) 0%, transparent 68%)',
          filter: 'blur(32px)',
          pointerEvents: 'none',
        }}
      />

      {/* Floating cards — decorative overlay */}
      <div aria-hidden="true">
        {/* Floating card — Carte interactive */}
        <div
          className="animate-float absolute z-20 rounded-2xl px-4 py-3 shadow-xl"
          style={{
            background: '#fff',
            border: '1px solid #DDD9D4',
            left: -60,
            top: 60,
            minWidth: 160,
          }}
        >
          <div className="flex items-center gap-2 mb-1">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: '#DCFCE7' }}>
              <IoMapOutline size={15} color="var(--color-primary)" aria-hidden="true" />
            </div>
            <span className="text-xs font-semibold" style={{ color: 'var(--color-text-primary)' }}>Carte interactive</span>
          </div>
          <p className="text-xs" style={{ color: '#64748B' }}>42 associations près de vous</p>
        </div>

        {/* Floating card — Présence confirmée */}
        <div
          className="animate-float2 absolute z-20 rounded-2xl px-4 py-3 shadow-xl"
          style={{
            background: '#fff',
            border: '1px solid #DDD9D4',
            right: -52,
            bottom: 80,
            minWidth: 164,
          }}
        >
          <div className="flex items-center gap-2 mb-1">
            <div className="w-5 h-5 rounded-full animate-pulse-green" style={{ background: 'var(--color-primary)' }} />
            <span className="text-xs font-semibold" style={{ color: 'var(--color-text-primary)' }}>Présence confirmée ✅</span>
          </div>
          <p className="text-xs" style={{ color: '#64748B' }}>Billet scanné à l'entrée</p>
        </div>
      </div>

      {/* Phone frame with real screenshot */}
      <div className="phone-frame relative z-10" style={{ animationDelay: '0.3s' }}>
        <div className="phone-screen" style={{ position: 'relative' }}>
          <Image
            src="/app-screenshot.png"
            alt="BeAssos — fil d'actualité"
            fill
            style={{ objectFit: 'cover', objectPosition: 'top', borderRadius: 30 }}
            priority
          />
        </div>
      </div>
    </div>
  );
}
