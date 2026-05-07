export const metadata = {
  title: 'About Farrell | The Kelly Nest',
  description: 'Meet Farrell Kelly — certified birth and postpartum doula serving families in the Denver metro area.',
};

export default function About() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ padding: '5rem 1.5rem 4rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: '-15%', right: '-10%',
          width: '45vw', maxWidth: '500px', height: '45vw', maxHeight: '500px',
          backgroundColor: 'var(--sage-light)', opacity: 0.18,
          borderRadius: '40% 60% 70% 30% / 50% 60% 40% 50%',
        }} />
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
          {/* Photo */}
          <div>
            <div style={{
              aspectRatio: '3/4',
              backgroundColor: 'var(--cream-deeper)',
              borderRadius: '50% 50% 45% 55% / 50% 50% 50% 50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem' }}>🪺</div>
                <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.75rem', color: 'var(--stone)', marginTop: '0.5rem' }}>Photo of Farrell</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: '1rem' }}>Meet Your Doula</p>
            <h1 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, color: 'var(--warm-brown)', marginBottom: '1.5rem', lineHeight: 1.05 }}>
              Hi, I&apos;m Farrell Kelly.
            </h1>
            <p style={{ fontFamily: 'var(--font-jost)', fontSize: '1rem', lineHeight: 1.85, color: 'var(--stone)', marginBottom: '1.25rem' }}>
              I&apos;m a certified Birth and Postpartum Doula based in the south Denver metro, passionate about supporting families through pregnancy, birth, and the postpartum transition with a calm, grounded, and compassionate presence. As a mother of four and grandmother of two, I bring not only professional training but lived experience to every family I serve. I believe every family deserves to feel informed, supported, and deeply cared for during this transformative season of life.
            </p>
            <p style={{ fontFamily: 'var(--font-jost)', fontSize: '1rem', lineHeight: 1.85, color: 'var(--stone)' }}>
              My approach is centered around creating a safe and nurturing space where parents feel empowered in their choices and supported emotionally, physically, and practically. Whether I&apos;m providing reassurance during labor, helping care for a newborn, or simply making sure a family feels seen and cared for, I strive to bring warmth, steadiness, and genuine support into every experience.
            </p>
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section style={{ padding: '4rem 1.5rem', backgroundColor: 'var(--cream-dark)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: '0.75rem' }}>Credentials</p>
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 300, color: 'var(--warm-brown)' }}>Training &amp; Certifications</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {[
              { title: 'Certified Birth Doula', body: 'BEST Doula' },
              { title: 'Certified Postpartum Doula', body: 'Birth and Baby University' },
              { title: 'Certified Birth Doula', body: 'Birth and Baby University' },
            ].map((c) => (
              <div key={c.title} style={{ backgroundColor: 'white', borderRadius: '16px', padding: '1.75rem', border: '1px solid var(--cream-deeper)' }}>
                <div style={{ width: '32px', height: '3px', backgroundColor: 'var(--sage)', borderRadius: '2px', marginBottom: '1rem' }} />
                <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.25rem', color: 'var(--warm-brown)', marginBottom: '0.5rem' }}>{c.title}</h3>
                <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.85rem', color: 'var(--stone)', lineHeight: 1.6 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section style={{ padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: '0.75rem' }}>What I Stand For</p>
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 300, color: 'var(--warm-brown)' }}>My Values</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2.5rem' }}>
            {[
              { label: 'Non-Judgmental Support', body: 'Your birth, your choices. I show up for all families, all birth preferences, and all paths to parenthood.' },
              { label: 'Evidence-Based Care', body: 'I stay current with the latest research so I can offer you accurate, balanced information — never fear or pressure.' },
              { label: 'Whole-Family Wellness', body: 'You are more than a patient. I care for the emotional, physical, and relational wellbeing of everyone in your nest.' },
            ].map((v) => (
              <div key={v.label} style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--cream-deeper)' }}>
                <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.4rem', color: 'var(--terracotta)', marginBottom: '0.6rem' }}>{v.label}</h3>
                <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.9rem', lineHeight: 1.75, color: 'var(--stone)' }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
