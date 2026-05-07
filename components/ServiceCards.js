'use client';
import Link from 'next/link';

const services = [
  {
    icon: '🌙',
    title: 'Birth Doula',
    desc: "Continuous labor support from early labor through delivery. I'll be by your side — and your partner's — every step of the way.",
    href: '/services#birth',
  },
  {
    icon: '🌿',
    title: 'Postpartum Doula',
    desc: 'In-home support for the fourth trimester. Newborn care, feeding support, light household help, and emotional nurturing for the whole family.',
    href: '/services#postpartum',
  },
  {
    icon: '✨',
    title: 'Consultations',
    desc: "Not sure what kind of support you need? Let's chat. Free 30-minute calls to explore your options with zero pressure.",
    href: '/contact',
  },
];

export default function ServiceCards() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
      {services.map((s) => (
        <Link key={s.title} href={s.href} style={{ textDecoration: 'none' }}>
          <div
            style={{
              backgroundColor: 'var(--cream-dark)',
              borderRadius: '20px',
              padding: '2.5rem',
              height: '100%',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(42,31,26,0.1)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            <span style={{ fontSize: '2rem', marginBottom: '1.25rem', display: 'block' }}>{s.icon}</span>
            <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.6rem', fontWeight: 400, color: 'var(--warm-brown)', marginBottom: '0.75rem' }}>{s.title}</h3>
            <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.9rem', lineHeight: 1.75, color: 'var(--stone)' }}>{s.desc}</p>
            <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--sage)', marginTop: '1.5rem' }}>Learn more →</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
