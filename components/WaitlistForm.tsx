'use client';

import { useState } from 'react';
import { IoMailOutline, IoCheckmarkCircle, IoArrowForward } from 'react-icons/io5';

type Props = {
  dark?: boolean;
};

export default function WaitlistForm({ dark = false }: Props) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus('loading');

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setMessage(data.message ?? 'Inscription réussie !');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error ?? 'Une erreur est survenue.');
      }
    } catch {
      setStatus('error');
      setMessage('Erreur réseau, réessayez.');
    }
  };

  const textColor = dark ? '#F5F0EB' : 'var(--color-text-primary)';
  const subColor = dark ? '#9AAAC0' : 'var(--color-text-secondary)';
  const inputBg = dark ? '#1C2A42' : '#fff';
  const inputBorder = dark ? '#2A3F5F' : 'var(--color-border)';
  const inputColor = dark ? '#F5F0EB' : 'var(--color-text-primary)';

  if (status === 'success') {
    return (
      <div
        className="flex flex-col items-center gap-3 text-center"
        style={{ animation: 'fadeIn 0.3s ease' }}
      >
        <IoCheckmarkCircle size={48} color="#22C55E" />
        <p style={{ fontSize: 17, fontWeight: 600, color: textColor }}>{message}</p>
        <p style={{ fontSize: 14, color: subColor }}>
          On vous préviendra dès que l'app sera disponible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <p style={{ fontSize: 14, color: subColor, marginBottom: 12, textAlign: 'center' }}>
        Soyez informé dès la sortie de l'app
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <IoMailOutline
            size={18}
            style={{
              position: 'absolute',
              left: 14,
              top: '50%',
              transform: 'translateY(-50%)',
              color: subColor,
              pointerEvents: 'none',
            }}
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Votre adresse email"
            required
            disabled={status === 'loading'}
            style={{
              width: '100%',
              padding: '12px 16px 12px 40px',
              borderRadius: 10,
              border: `1.5px solid ${status === 'error' ? '#EF4444' : inputBorder}`,
              background: inputBg,
              color: inputColor,
              fontSize: 15,
              outline: 'none',
              boxSizing: 'border-box',
            }}
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading' || !email.trim()}
          className="flex items-center justify-center gap-2"
          style={{
            padding: '12px 22px',
            borderRadius: 10,
            background: status === 'loading' ? '#15803D' : 'var(--color-primary)',
            color: '#fff',
            fontWeight: 700,
            fontSize: 15,
            border: 'none',
            cursor: status === 'loading' ? 'wait' : 'pointer',
            whiteSpace: 'nowrap',
            opacity: !email.trim() ? 0.6 : 1,
            transition: 'opacity 0.2s',
          }}
        >
          {status === 'loading' ? (
            <span style={{ display: 'inline-block', width: 18, height: 18, border: '2.5px solid rgba(255,255,255,0.4)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
          ) : (
            <>M'inscrire <IoArrowForward size={16} /></>
          )}
        </button>
      </div>
      {status === 'error' && (
        <p style={{ marginTop: 8, fontSize: 13, color: '#EF4444', textAlign: 'center' }}>{message}</p>
      )}
      <style>{`
        @keyframes fadeIn { from { opacity:0; transform:translateY(6px); } to { opacity:1; transform:none; } }
        @keyframes spin   { to { transform: rotate(360deg); } }
        input::placeholder { color: ${subColor}; opacity: 0.7; }
      `}</style>
    </form>
  );
}
