import Image from 'next/image';
import {
  IoMapOutline,
  IoCheckmarkCircle,
  IoLocationOutline,
  IoNotificationsOutline,
} from 'react-icons/io5';

export default function PhoneMockup() {
  return (
    <div className="relative flex justify-center items-center" style={{ minWidth: 320, minHeight: 600 }}>
      {/* Ambient glow — amber tones matching the app */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: -40,
          background:
            'radial-gradient(ellipse 70% 60% at 55% 45%, rgba(247,157,13,0.18) 0%, rgba(22,163,74,0.10) 55%, transparent 75%)',
          filter: 'blur(28px)',
          pointerEvents: 'none',
          borderRadius: '50%',
        }}
      />

      {/* Floating card — top-left: Associations discovered */}
      <div
        aria-hidden="true"
        className="animate-float float-card absolute z-20 rounded-2xl px-3 py-2.5"
        style={{
          background: '#10140D',
          border: '1px solid rgba(247,157,13,0.25)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.45)',
          left: -56,
          top: 72,
          minWidth: 168,
        }}
      >
        <div className="flex items-center gap-2 mb-1">
          <div
            className="w-6 h-6 rounded-lg flex items-center justify-center"
            style={{ background: 'rgba(22,163,74,0.20)' }}
          >
            <IoMapOutline size={13} color="#83C81F" />
          </div>
          <span style={{ fontSize: 11, fontWeight: 700, color: '#F0F5E8', fontFamily: 'var(--font-nunito)' }}>
            42 associations
          </span>
        </div>
        <p style={{ fontSize: 10, color: '#A8BC8E', lineHeight: 1.4 }}>Dans un rayon de 30 km</p>
        <div className="flex items-center gap-1 mt-1.5">
          <IoLocationOutline size={10} color="#F79D0D" />
          <span style={{ fontSize: 10, color: '#F79D0D', fontWeight: 600 }}>Paris, France</span>
        </div>
      </div>

      {/* Floating card — bottom-right: ticket scanned */}
      <div
        aria-hidden="true"
        className="animate-float2 float-card absolute z-20 rounded-2xl px-3 py-2.5"
        style={{
          background: '#10140D',
          border: '1px solid rgba(22,163,74,0.25)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.45)',
          right: -58,
          bottom: 88,
          minWidth: 170,
        }}
      >
        <div className="flex items-center gap-2 mb-1">
          <IoCheckmarkCircle size={16} color="#83C81F" />
          <span style={{ fontSize: 11, fontWeight: 700, color: '#F0F5E8' }}>Présence confirmée</span>
        </div>
        <p style={{ fontSize: 10, color: '#A8BC8E' }}>Billet QR scanné à l&apos;entrée</p>
      </div>

      {/* Floating card — top-right: new notification */}
      <div
        aria-hidden="true"
        className="animate-float3 float-card absolute z-20 rounded-xl px-3 py-2"
        style={{
          background: '#10140D',
          border: '1px solid rgba(247,157,13,0.20)',
          boxShadow: '0 6px 24px rgba(0,0,0,0.40)',
          right: -44,
          top: 130,
          minWidth: 148,
        }}
      >
        <div className="flex items-center gap-2">
          <div
            className="w-5 h-5 rounded-full flex items-center justify-center"
            style={{ background: 'rgba(247,157,13,0.20)' }}
          >
            <IoNotificationsOutline size={11} color="#F79D0D" />
          </div>
          <span style={{ fontSize: 10, fontWeight: 600, color: '#F0F5E8' }}>Nouvel événement</span>
        </div>
        <p style={{ fontSize: 10, color: '#A8BC8E', marginTop: 2 }}>Soirée culturelle · 15 juin</p>
      </div>

      {/* Phone shell with real app screenshot */}
      <div className="phone-frame relative z-10">
        <div className="phone-screen relative">
          <Image
            src="/app-screenshot.png"
            alt="Capture d'écran BeAssos — fil d'actualité avec événements et publications"
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 240px, 270px"
            priority
          />
        </div>
      </div>
    </div>
  );
}
