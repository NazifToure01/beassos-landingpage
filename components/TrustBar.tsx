import { IoPeopleOutline, IoMapOutline, IoStarSharp, IoHeartOutline } from 'react-icons/io5';

const stats = [
  { value: '320+', label: 'Associations référencées', Icon: IoPeopleOutline, color: '#F79D0D' },
  { value: '2 400+', label: 'Membres actifs', Icon: HeartIcon, color: '#16A34A' },
  { value: '15', label: 'Villes couvertes', Icon: IoMapOutline, color: '#7C3AED' },
  { value: '4.8/5', label: 'Note utilisateurs', Icon: IoStarSharp, color: '#F79D0D' },
];

function HeartIcon(props: { size: number; color: string }) {
  return <IoHeartOutline {...props} />;
}

export default function TrustBar() {
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
              <s.Icon size={20} color={s.color} style={{ marginBottom: 6 }} aria-hidden="true" />
              <span
                className="font-black mb-1"
                style={{ fontSize: 28, color: s.color, letterSpacing: '-0.025em' }}
              >
                {s.value}
              </span>
              <span className="text-sm text-center font-semibold" style={{ color: '#64748B' }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
