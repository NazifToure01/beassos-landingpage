import { IoPeopleOutline, IoMapOutline, IoStarSharp } from 'react-icons/io5';

// TrustBar — pure display, no client state needed
export default function TrustBar() {
  const stats = [
    { value: '320+', label: 'Associations référencées', Icon: IoPeopleOutline },
    { value: '2 400+', label: 'Membres actifs', Icon: IoPeopleOutline },
    { value: '15', label: 'Villes couvertes', Icon: IoMapOutline },
    { value: '98%', label: 'Satisfaction utilisateurs', Icon: IoStarSharp },
  ];

  return (
    <section
      aria-label="Chiffres clés"
      style={{ background: '#fff', borderTop: '1px solid #DDD9D4', borderBottom: '1px solid #DDD9D4' }}
    >
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px' }}>
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="flex flex-col items-center py-8 px-4"
              style={{ borderRight: i < 3 ? '1px solid #DDD9D4' : 'none' }}
            >
              <s.Icon size={20} color="var(--color-primary)" style={{ marginBottom: 6 }} aria-hidden="true" />
              {/* fontSize: 28 → --font-size-xxl */}
              <span className="font-bold mb-1" style={{ fontSize: 28, color: 'var(--color-primary)', letterSpacing: '-0.02em' }}>{s.value}</span>
              <span className="text-sm text-center" style={{ color: '#64748B' }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
