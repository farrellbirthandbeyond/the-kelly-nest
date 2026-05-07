import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ backgroundColor: 'var(--cream-dark)', borderTop: '1px solid var(--cream-deeper)', marginTop: '6rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 1.5rem 2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
        {/* Brand */}
        <div>
          <Image src="/logo.png" alt="The Kelly Nest" width={180} height={90} style={{ objectFit: 'contain' }} />
          <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.85rem', lineHeight: 1.7, color: 'var(--stone)', maxWidth: '220px' }}>
            Supporting families through the sacred journey of birth and beyond.
          </p>

        </div>

        {/* Navigation */}
        <div>
          <h4 style={{ fontFamily: 'var(--font-jost)', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terracotta)', marginBottom: '1.25rem' }}>
            Navigate
          </h4>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {[['/', 'Home'], ['/about', 'About Farrell'], ['/services', 'Services'], ['/contact', 'Contact']].map(([href, label]) => (
              <Link key={href} href={href} style={{ fontFamily: 'var(--font-jost)', fontSize: '0.85rem', color: 'var(--warm-brown)', textDecoration: 'none' }}>
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ fontFamily: 'var(--font-jost)', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terracotta)', marginBottom: '1.25rem' }}>
            Get in Touch
          </h4>
          <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.85rem', color: 'var(--warm-brown)', marginBottom: '0.4rem' }}>farrellbirthandbeyond@gmail.com</p>
          <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.85rem', color: 'var(--warm-brown)', marginBottom: '1.5rem' }}>Lone Tree · Highlands Ranch · Parker · Centennial<br />Castle Pines · Castle Rock · Littleton<br />Englewood · DTC &amp; surrounding areas</p>
          <Link
            href="/contact"
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-jost)',
              fontSize: '0.65rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              backgroundColor: 'var(--terracotta)',
              color: 'white',
              padding: '0.6rem 1.25rem',
              borderRadius: '100px',
              textDecoration: 'none',
            }}
          >
            Book a Free Consultation
          </Link>
        </div>
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '1.5rem', borderTop: '1px solid var(--cream-deeper)', textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.7rem', color: 'var(--stone)', letterSpacing: '0.05em' }}>
          © {year} The Kelly Nest · Farrell Kelly · All rights reserved
        </p>
      </div>
    </footer>
  );
}
