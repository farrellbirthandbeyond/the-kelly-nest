import Link from 'next/link';

export const metadata = {
  title: 'Testimonials | The Kelly Nest',
  description: 'Read what families say about working with Farrell Kelly — birth and postpartum doula.',
};

const testimonials = [
  {
    quote: "Having Farrell with us during labor changed everything. I went in nervous and overwhelmed — and came out feeling like I could do absolutely anything. She was our anchor.",
    name: "[Client Name]",
    location: "Denver, CO",
    service: "Birth Doula",
  },
  {
    quote: "[Placeholder testimonial — a heartfelt quote from a postpartum client describing the impact of Farrell's support during the fourth trimester.]",
    name: "[Client Name]",
    location: "[City, State]",
    service: "Postpartum Doula",
  },
  {
    quote: "[Placeholder testimonial — a quote from a client about how having a doula helped their partner feel included and supported during birth.]",
    name: "[Client Name]",
    location: "[City, State]",
    service: "Birth Doula",
  },
  {
    quote: "[Placeholder testimonial — a quote from a client about the postpartum visits, rest, and confidence they gained with Farrell's help.]",
    name: "[Client Name]",
    location: "[City, State]",
    service: "Postpartum Doula",
  },
  {
    quote: "[Placeholder testimonial — a quote describing Farrell's calm presence, knowledge, and genuine care for families.]",
    name: "[Client Name]",
    location: "[City, State]",
    service: "Birth Doula",
  },
  {
    quote: "[Placeholder testimonial — a quote from a repeat client or someone who used both birth and postpartum support.]",
    name: "[Client Name]",
    location: "[City, State]",
    service: "Birth &amp; Postpartum",
  },
];

export default function Testimonials() {
  return (
    <>
      {/* ── HEADER ── */}
      <section style={{ padding: '5rem 1.5rem 3rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)',
          width: '50vw', maxWidth: '550px', height: '50vw', maxHeight: '550px',
          backgroundColor: 'var(--terracotta)', opacity: 0.07,
          borderRadius: '50%', zIndex: 0,
        }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: '1rem' }}>From the Families I&apos;ve Served</p>
          <h1 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 300, color: 'var(--warm-brown)', marginBottom: '1.25rem' }}>
            Their Stories
          </h1>
          <p style={{ fontFamily: 'var(--font-jost)', fontSize: '1rem', color: 'var(--stone)', maxWidth: '480px', margin: '0 auto', lineHeight: 1.8 }}>
            Words from the families who've trusted me with their most sacred moments.
          </p>
        </div>
      </section>

      {/* ── FEATURED ── */}
      <section style={{ padding: '3rem 1.5rem', backgroundColor: 'var(--warm-brown)' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.4rem', fontStyle: 'italic', color: 'var(--cream-light)', lineHeight: 1.5, marginBottom: '2rem', color: 'var(--cream)' }}>
            "Farrell didn't just support me — she supported my whole family. My partner finally felt like an equal participant in the birth, and I felt genuinely seen every step of the way."
          </p>
          <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--sage-light)' }}>
            — [Featured Client Name] · Birth &amp; Postpartum Client
          </p>
        </div>
      </section>

      {/* ── TESTIMONIALS GRID ── */}
      <section style={{ padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              style={{
                backgroundColor: i % 3 === 1 ? 'var(--cream-dark)' : 'white',
                border: '1px solid var(--cream-deeper)',
                borderRadius: '20px',
                padding: '2.25rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: '3.5rem', lineHeight: 0.8, color: 'var(--sage-light)', display: 'block', marginBottom: '0.5rem' }}>"</span>
                <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.92rem', lineHeight: 1.8, color: 'var(--stone)' }} dangerouslySetInnerHTML={{ __html: t.quote }} />
              </div>
              <div style={{ marginTop: '1.75rem', borderTop: '1px solid var(--cream-deeper)', paddingTop: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                  <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.85rem', fontWeight: 500, color: 'var(--warm-brown)', marginBottom: '0.2rem' }}>{t.name}</p>
                  <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.75rem', color: 'var(--stone)' }}>{t.location}</p>
                </div>
                <span style={{
                  fontFamily: 'var(--font-jost)', fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase',
                  backgroundColor: 'var(--cream-deeper)', color: 'var(--warm-brown)',
                  padding: '0.35rem 0.75rem', borderRadius: '100px',
                }} dangerouslySetInnerHTML={{ __html: t.service }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '4rem 1.5rem 6rem', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 300, color: 'var(--warm-brown)', marginBottom: '1rem' }}>
          Ready to write your own story?
        </h2>
        <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.95rem', color: 'var(--stone)', marginBottom: '2rem' }}>
          Let's connect and see if we're the right fit.
        </p>
        <Link
          href="/contact"
          style={{
            fontFamily: 'var(--font-jost)', fontSize: '0.75rem', letterSpacing: '0.16em', textTransform: 'uppercase',
            backgroundColor: 'var(--sage)', color: 'white',
            padding: '1rem 2.25rem', borderRadius: '100px', textDecoration: 'none',
          }}
        >
          Book a Free Consultation
        </Link>
      </section>
    </>
  );
}
