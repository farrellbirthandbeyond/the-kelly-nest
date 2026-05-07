import Link from 'next/link';
import ServiceCards from '../components/ServiceCards';

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero-section" style={{ minHeight: '92vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', padding: '5rem 1.5rem 4rem' }}>
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

        <div className="two-col" style={{ maxWidth: '1100px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
          <div className="fade-up">
            <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: '1.25rem' }}>
              Birth &amp; Postpartum Doula
            </p>
            <h1 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: 300, color: 'var(--warm-brown)', lineHeight: 1.05, marginBottom: '1.5rem' }}>
              Helping your new family{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--terracotta)' }}>land softly.</em>
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
          <div className="fade-up fade-up-delay-2 hide-mobile" style={{ position: 'relative' }}>
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
      <section style={{ padding: '5rem 1.5rem', backgroundColor: 'var(--warm-brown)' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--sage-light)', marginBottom: '1.25rem' }}>My Philosophy</p>
          <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 300, fontStyle: 'italic', color: 'var(--cream)', lineHeight: 1.6, marginBottom: '1.75rem' }}>
            &ldquo;Birth has always been close to my heart.&rdquo;
          </p>
          <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.95rem', lineHeight: 1.85, color: 'var(--cream-dark)', marginBottom: '1.25rem' }}>
            As a mother of four, I know firsthand the vulnerability, the power, and the emotion that comes with bringing a new life into the world. And when I had the privilege of being present at my grandchildren&apos;s births, something shifted in me — I felt the profound impact of simply being a calm, steady presence in one of life&apos;s most sacred moments.
          </p>
          <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.95rem', lineHeight: 1.85, color: 'var(--cream-dark)', fontStyle: 'italic' }}>
            My promise to every family is simple: I will show up fully, hold space gently, and advocate for you fiercely — every step of the way.
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

          <ServiceCards />
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
