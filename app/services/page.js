import Link from 'next/link';

export const metadata = {
  title: 'Services | The Kelly Nest',
  description: 'Birth doula, postpartum doula, and consultation services from Farrell Kelly.',
};

export default function Services() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section style={{ padding: '5rem 1.5rem 3rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)',
          width: '60vw', maxWidth: '600px', height: '60vw', maxHeight: '600px',
          backgroundColor: 'var(--sage-light)', opacity: 0.15,
          borderRadius: '50%',
          zIndex: 0,
        }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: '1rem' }}>What I Offer</p>
          <h1 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 300, color: 'var(--warm-brown)', lineHeight: 1.05, marginBottom: '1.5rem' }}>
            Services
          </h1>
          <p style={{ fontFamily: 'var(--font-jost)', fontSize: '1rem', lineHeight: 1.8, color: 'var(--stone)', maxWidth: '520px', margin: '0 auto' }}>
            Every package is tailored to your family&apos;s needs. Reach out and we&apos;ll find the support that&apos;s right for you.
          </p>
        </div>
      </section>

      {/* ── BIRTH DOULA ── */}
      <section id="birth" style={{ padding: '5rem 1.5rem', scrollMarginTop: '80px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
          <div>
            <div style={{ width: '48px', height: '3px', backgroundColor: 'var(--terracotta)', marginBottom: '1.5rem', borderRadius: '2px' }} />
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: 'var(--warm-brown)', marginBottom: '1.25rem' }}>
              Birth Doula
            </h2>
            <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.95rem', lineHeight: 1.85, color: 'var(--stone)', marginBottom: '1.25rem' }}>
              As your birth doula, I provide steady emotional, physical, and informational support throughout pregnancy, labor, and birth. My goal is to help you feel safe, informed, empowered, and deeply supported as you navigate your unique birth experience.
            </p>
            <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.95rem', lineHeight: 1.85, color: 'var(--stone)', marginBottom: '2rem' }}>
              I offer continuous encouragement, comfort measures, advocacy support, breathing and positioning guidance, and a calm grounding presence for both you and your partner. I believe birth is a transformative experience, and I strive to create a space where families feel respected, heard, and supported in making the choices that feel right for them.
            </p>
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontFamily: 'var(--font-jost)', fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terracotta)', marginBottom: '1rem' }}>What's Included</h3>
              {[
                '2 prenatal visits',
                'On-call support starting at 36 weeks',
                'Continuous labor support',
                'Immediate postpartum support',
                'Unlimited phone/text/email access',
                'Birth preferences review',
                '[Placeholder item]',
              ].map((item) => (
                <div key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', marginBottom: '0.6rem' }}>
                  <span style={{ color: 'var(--sage)', fontSize: '0.85rem', marginTop: '2px', flexShrink: 0 }}>✦</span>
                  <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.9rem', color: 'var(--stone)', margin: 0, lineHeight: 1.6 }}>{item}</p>
                </div>
              ))}
            </div>
            <div style={{ backgroundColor: 'var(--cream-dark)', borderRadius: '16px', padding: '1.5rem', display: 'inline-block' }}>
              <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--stone)', marginBottom: '0.4rem' }}>Investment</p>
              <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.75rem', color: 'var(--warm-brown)' }}>[Placeholder pricing]</p>
            </div>
          </div>
          <div style={{
            aspectRatio: '3/4',
            backgroundColor: 'var(--cream-deeper)',
            borderRadius: '40% 60% 55% 45% / 50% 45% 55% 50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem' }}>🌙</div>
              <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.75rem', color: 'var(--stone)', marginTop: '0.5rem' }}>Birth doula photo</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── POSTPARTUM DOULA ── */}
      <section id="postpartum" style={{ padding: '5rem 1.5rem', backgroundColor: 'var(--cream-dark)', scrollMarginTop: '80px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
          <div style={{
            aspectRatio: '3/4',
            backgroundColor: 'var(--cream-deeper)',
            borderRadius: '60% 40% 45% 55% / 45% 55% 45% 55%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem' }}>🌿</div>
              <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.75rem', color: 'var(--stone)', marginTop: '0.5rem' }}>Postpartum photo</p>
            </div>
          </div>
          <div>
            <div style={{ width: '48px', height: '3px', backgroundColor: 'var(--sage)', marginBottom: '1.5rem', borderRadius: '2px' }} />
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: 'var(--warm-brown)', marginBottom: '1.25rem' }}>
              Postpartum Doula
            </h2>
            <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.95rem', lineHeight: 1.85, color: 'var(--stone)', marginBottom: '1.25rem' }}>
              As your postpartum doula, I provide compassionate, nonjudgmental support as your family settles into life with a new baby. My role is to help create a calm, supported environment so you can rest, recover, and build confidence during the postpartum transition.
            </p>
            <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.95rem', lineHeight: 1.85, color: 'var(--stone)', marginBottom: '2rem' }}>
              Support may include newborn care guidance, feeding support, emotional support, light household help, meal preparation, sibling support, and creating space for parents to feel nurtured and cared for. I believe every family deserves to feel seen, supported, and empowered during the early postpartum period, and I strive to bring a grounding, calming presence into your home.
            </p>
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontFamily: 'var(--font-jost)', fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: '1rem' }}>What's Included</h3>
              {[
                'Overnight availability',
                'Infant feeding support',
                'Light household tasks',
                'Sibling &amp; family adjustment',
                'Emotional support &amp; recovery',
                'Resource &amp; referral network',
                '[Placeholder item]',
              ].map((item) => (
                <div key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', marginBottom: '0.6rem' }}>
                  <span style={{ color: 'var(--sage)', fontSize: '0.85rem', marginTop: '2px', flexShrink: 0 }}>✦</span>
                  <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.9rem', color: 'var(--stone)', margin: 0, lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: item }} />
                </div>
              ))}
            </div>
            <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '1.5rem', display: 'inline-block', boxShadow: '0 2px 16px rgba(42,31,26,0.06)' }}>
              <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--stone)', marginBottom: '0.4rem' }}>Investment</p>
              <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.75rem', color: 'var(--warm-brown)' }}>[Placeholder pricing]</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ADD-ONS ── */}
      <section style={{ padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: '0.75rem' }}>More Ways to Support You</p>
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 300, color: 'var(--warm-brown)' }}>Additional Services</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {[
              { title: 'Free Consultation', desc: "Not sure what you need? Book a free 30-minute call and let's figure it out together." },
            ].map((s) => (
              <div key={s.title} style={{ border: '1px solid var(--cream-deeper)', borderRadius: '16px', padding: '2rem' }}>
                <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.4rem', color: 'var(--warm-brown)', marginBottom: '0.75rem' }}>{s.title}</h3>
                <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.87rem', lineHeight: 1.75, color: 'var(--stone)' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '4rem 1.5rem 6rem', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 300, color: 'var(--warm-brown)', marginBottom: '1rem' }}>
          Ready to explore working together?
        </h2>
        <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.95rem', color: 'var(--stone)', marginBottom: '2rem' }}>
          Every journey starts with a conversation.
        </p>
        <Link
          href="/contact"
          style={{
            fontFamily: 'var(--font-jost)', fontSize: '0.75rem', letterSpacing: '0.16em', textTransform: 'uppercase',
            backgroundColor: 'var(--terracotta)', color: 'white',
            padding: '1rem 2.25rem', borderRadius: '100px', textDecoration: 'none',
          }}
        >
          Book a Free Consultation
        </Link>
      </section>
    </>
  );
}
