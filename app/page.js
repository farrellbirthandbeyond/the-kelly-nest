import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ minHeight: '92vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', padding: '5rem 1.5rem 4rem' }}>
        {/* Background blob */}
        <div style={{
          position: 'absolute', top: '-10%', right: '-8%',
          width: '55vw', maxWidth: '700px', height: '55vw', maxHeight: '700px',
          backgroundColor: 'var(--sage-light)',
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          opacity: 0.22,
          zIndex: 0,
        }} />
        <div style={{
          position: 'absolute', bottom: '-5%', left: '-5%',
          width: '30vw', maxWidth: '380px', height: '30vw', maxHeight: '380px',
          backgroundColor: 'var(--terracotta)',
          borderRadius: '40% 60% 70% 30% / 50% 60% 40% 50%',
          opacity: 0.1,
          zIndex: 0,
        }} />

        <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
          <div className="fade-up">
            <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: '1.25rem' }}>
              Birth &amp; Postpartum Doula
            </p>
            <h1 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: 300, color: 'var(--warm-brown)', lineHeight: 1.05, marginBottom: '1.5rem' }}>
              You deserve to feel{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--terracotta)' }}>held</em>{' '}
              through every moment.
            </h1>
            <p style={{ fontFamily: 'var(--font-jost)', fontSize: '1.05rem', lineHeight: 1.75, color: 'var(--stone)', maxWidth: '460px', marginBottom: '2.5rem' }}>
              Farrell Kelly provides compassionate, evidence-based doula support — from your first contraction through those tender early weeks of new parenthood.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link
                href="/contact"
                style={{
                  fontFamily: 'var(--font-jost)', fontSize: '0.75rem', letterSpacing: '0.16em', textTransform: 'uppercase',
                  backgroundColor: 'var(--terracotta)', color: 'white',
                  padding: '0.9rem 2rem', borderRadius: '100px', textDecoration: 'none',
                }}
              >
                Book a Free Consultation
              </Link>
              <Link
                href="/services"
                style={{
                  fontFamily: 'var(--font-jost)', fontSize: '0.75rem', letterSpacing: '0.16em', textTransform: 'uppercase',
                  border: '1px solid var(--warm-brown)', color: 'var(--warm-brown)',
                  padding: '0.9rem 2rem', borderRadius: '100px', textDecoration: 'none',
                }}
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Photo placeholder */}
          <div className="fade-up fade-up-delay-2" style={{ position: 'relative' }}>
            <div style={{
              width: '100%', aspectRatio: '4/5',
              backgroundColor: 'var(--cream-deeper)',
              borderRadius: '50% 50% 40% 60% / 55% 45% 55% 45%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              overflow: 'hidden',
            }}>
              <div style={{ textAlign: 'center', padding: '2rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>🪺</div>
                <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.75rem', color: 'var(--stone)', letterSpacing: '0.1em' }}>Photo of Farrell</p>
              </div>
            </div>
            {/* Floating badge */}
            <div style={{
              position: 'absolute', bottom: '8%', left: '-10%',
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '1rem 1.25rem',
              boxShadow: '0 8px 32px rgba(42,31,26,0.12)',
              maxWidth: '170px',
            }}>
              <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.5rem', color: 'var(--terracotta)', margin: 0, lineHeight: 1 }}>Certified</p>
              <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--stone)', marginTop: '4px' }}>Birth &amp; Postpartum Doula</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: 'var(--cream-dark)' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: '1rem' }}>
            My Philosophy
          </p>
          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 300, color: 'var(--warm-brown)', lineHeight: 1.2, marginBottom: '1.5rem' }}>
            Birth is not a medical event.<br />It's a{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--terracotta)' }}>rite of passage.</em>
          </h2>
          <p style={{ fontFamily: 'var(--font-jost)', fontSize: '1rem', lineHeight: 1.85, color: 'var(--stone)' }}>
            Every family deserves a dedicated advocate who will listen without judgment, hold space without agenda, and show up — fully — for the moments that matter most. I believe in the innate wisdom of birthing bodies, and I&apos;m here to help you trust yours.
          </p>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section style={{ padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: '0.75rem' }}>How I Can Help</p>
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: 'var(--warm-brown)' }}>Services</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
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
            ].map((s) => (
              <Link key={s.title} href={s.href} style={{ textDecoration: 'none' }}>
                <div style={{
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
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: 'var(--warm-brown)' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(1.4rem, 3vw, 2.1rem)', fontWeight: 300, fontStyle: 'italic', color: 'var(--cream)', lineHeight: 1.55, marginBottom: '2rem' }}>
            "Having Farrell with us during labor changed everything. I went in nervous and overwhelmed — and came out feeling like I could do absolutely anything. She was our anchor."
          </p>
          <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--sage-light)' }}>
            — Placeholder Client Name · Denver, CO
          </p>
          <Link
            href="/testimonials"
            style={{
              display: 'inline-block', marginTop: '2rem',
              fontFamily: 'var(--font-jost)', fontSize: '0.7rem', letterSpacing: '0.16em', textTransform: 'uppercase',
              border: '1px solid var(--sage-light)', color: 'var(--cream)',
              padding: '0.7rem 1.5rem', borderRadius: '100px', textDecoration: 'none',
            }}
          >
            Read More Stories
          </Link>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ padding: '6rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: 'var(--warm-brown)', marginBottom: '1rem' }}>
            Ready to feel supported?
          </h2>
          <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.95rem', lineHeight: 1.8, color: 'var(--stone)', marginBottom: '2.5rem' }}>
            Let's connect. Your free consultation is a no-pressure conversation about your hopes, questions, and what kind of support feels right for you.
          </p>
          <Link
            href="/contact"
            style={{
              fontFamily: 'var(--font-jost)', fontSize: '0.75rem', letterSpacing: '0.16em', textTransform: 'uppercase',
              backgroundColor: 'var(--sage)', color: 'white',
              padding: '1rem 2.25rem', borderRadius: '100px', textDecoration: 'none',
            }}
          >
            Book Your Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
