import {
  IoDocumentTextOutline,
  IoMegaphoneOutline,
  IoTicketOutline,
  IoDownloadOutline,
  IoPeopleOutline,
  IoQrCodeOutline,
} from 'react-icons/io5';

const features = [
  { Icon: IoDocumentTextOutline, title: 'Créez votre page en quelques minutes', description: "Présentez votre association avec un logo, une description et vos coordonnées. Soyez visible sur la carte dès aujourd'hui." },
  { Icon: IoMegaphoneOutline, title: 'Channel de communication', description: 'Publiez vos actualités directement dans votre channel. Vos abonnés reçoivent une notification instantanée.' },
  { Icon: IoTicketOutline, title: 'Gérez vos événements', description: 'Créez des événements, gérez les inscriptions et contrôlez les accès avec le scanner QR intégré.' },
  { Icon: IoDownloadOutline, title: 'Exportez vos participants', description: 'Téléchargez la liste de vos inscrits en CSV ou JSON pour vos besoins administratifs.' },
];

export default function ForAssociations() {
  return (
    <section id="associations" style={{ padding: '100px 0' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px' }}>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
          {/* Left */}
          <div className="flex-1">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-sm font-medium"
              style={{ background: 'rgba(217,119,6,0.10)', color: 'var(--color-gold)', border: '1px solid rgba(217,119,6,0.20)' }}
            >
              Pour les associations
            </div>
            <h2
              className="font-bold mb-6"
              style={{ fontSize: 'clamp(28px, 4vw, 42px)', color: '#0F172A', letterSpacing: '-0.02em', lineHeight: 1.1 }}
            >
              Donnez une voix à votre{' '}
              <span className="text-gradient">association</span>
            </h2>
            <p className="mb-10" style={{ fontSize: 17, color: '#64748B', lineHeight: 1.6 }}>
              BeAssos est conçu pour que les associations de la diaspora puissent gérer leur présence, communiquer avec leurs membres et organiser leurs événements simplement.
            </p>

            <div className="flex flex-col gap-6">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: '#F3F2EF' }}
                  >
                    <f.Icon aria-hidden="true" size={20} color="var(--color-primary)" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: '#0F172A', fontSize: 14 }}>{f.title}</h4>
                    <p style={{ color: '#64748B', fontSize: 14, lineHeight: 1.6 }}>{f.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#waitlist" className="store-btn inline-flex mt-10 text-white" style={{ background: 'linear-gradient(135deg,#F79D0D,#FFB534)', boxShadow: '0 4px 16px rgba(247,157,13,0.35)', fontWeight: 700 }}>
              Inscrire mon association →
            </a>
          </div>

          {/* Right — dashboard mockup (decorative/illustrative) */}
          <div aria-hidden="true" className="flex-shrink-0 w-full max-w-md">
            <div
              className="rounded-3xl p-6"
              style={{ background: '#fff', border: '1px solid #DDD9D4', boxShadow: '0 20px 60px rgba(0,0,0,0.07)' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(22,163,74,0.10)' }}>
                  <IoPeopleOutline size={20} color="var(--color-primary)" />
                </div>
                <div>
                  <p className="font-bold text-sm" style={{ color: '#0F172A' }}>Association Béninoise de France</p>
                  <p className="text-xs" style={{ color: '#64748B' }}>Tableau de bord</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-5">
                {[
                  { label: 'Abonnés', value: '1 243', color: 'var(--color-primary)' },
                  { label: 'Événements', value: '8', color: 'var(--color-gold)' },
                  { label: 'À venir', value: '3', color: '#475569' },
                ].map((s) => (
                  <div key={s.label} className="rounded-2xl p-3 text-center" style={{ background: '#F3F2EF' }}>
                    <p className="font-bold text-lg" style={{ color: s.color }}>{s.value}</p>
                    <p className="text-xs" style={{ color: '#64748B' }}>{s.label}</p>
                  </div>
                ))}
              </div>

              <p className="text-xs font-bold mb-3" style={{ color: '#0F172A' }}>Événements (8)</p>
              {[
                { title: 'Journée culturelle', date: '12 mai', inscrits: 87, capacity: 120 },
                { title: 'Soirée networking', date: '28 mai', inscrits: 34, capacity: 60 },
              ].map((ev) => (
                <div key={ev.title} className="flex items-center justify-between rounded-2xl p-3 mb-2" style={{ background: '#F3F2EF' }}>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: '#0F172A' }}>{ev.title}</p>
                    <p className="text-xs" style={{ color: '#64748B' }}>{ev.date} · {ev.inscrits}/{ev.capacity} inscrits</p>
                  </div>
                  <div
                    className="rounded-xl px-3 py-1.5 text-xs font-semibold flex items-center gap-1"
                    style={{ background: 'rgba(22,163,74,0.10)', color: 'var(--color-primary)' }}
                  >
                    Actions
                  </div>
                </div>
              ))}

              <div
                className="rounded-2xl p-3 mt-3 flex items-center gap-3"
                style={{ background: 'rgba(22,163,74,0.06)', border: '1px dashed rgba(22,163,74,0.30)' }}
              >
                <IoQrCodeOutline size={22} color="var(--color-primary)" />
                <div>
                  <p className="text-sm font-semibold" style={{ color: '#0F172A' }}>Scanner les billets QR</p>
                  <p className="text-xs" style={{ color: '#64748B' }}>Contrôle d'accès à l'entrée</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
