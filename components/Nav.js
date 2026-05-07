'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      style={{
        backgroundColor: 'var(--cream)',
        borderBottom: scrolled ? '1px solid var(--cream-deeper)' : '1px solid transparent',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        boxShadow: scrolled ? '0 1px 12px rgba(42,31,26,0.06)' : 'none',
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem', height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <Image src="/logo.png" alt="The Kelly Nest" width={220} height={110} style={{ objectFit: 'contain' }} priority />
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="hidden md:flex">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                fontFamily: 'var(--font-jost)',
                fontSize: '0.7rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: pathname === href ? 'var(--terracotta)' : 'var(--warm-brown)',
                textDecoration: 'none',
                transition: 'color 0.2s',
                borderBottom: pathname === href ? '1px solid var(--terracotta)' : '1px solid transparent',
                paddingBottom: '2px',
              }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            style={{
              fontFamily: 'var(--font-jost)',
              fontSize: '0.7rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              backgroundColor: 'var(--sage)',
              color: 'white',
              padding: '0.55rem 1.25rem',
              borderRadius: '100px',
              textDecoration: 'none',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--sage-dark)'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--sage)'}
          >
            Book a Call
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', display: 'flex', flexDirection: 'column', gap: '5px' }}
          className="md:hidden"
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              style={{
                display: 'block',
                width: '22px',
                height: '1.5px',
                backgroundColor: 'var(--warm-brown)',
                transformOrigin: 'center',
                transition: 'transform 0.3s ease, opacity 0.3s ease',
                transform: open
                  ? i === 0 ? 'rotate(45deg) translate(4.5px, 4.5px)'
                  : i === 2 ? 'rotate(-45deg) translate(4.5px, -4.5px)'
                  : 'none'
                  : 'none',
                opacity: open && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        style={{
          maxHeight: open ? '400px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.35s ease',
          backgroundColor: 'var(--cream)',
          borderTop: open ? '1px solid var(--cream-deeper)' : 'none',
        }}
        className="md:hidden"
      >
        <div style={{ padding: '1rem 1.5rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0' }}>
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                fontFamily: 'var(--font-jost)',
                fontSize: '0.75rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--warm-brown)',
                textDecoration: 'none',
                padding: '0.85rem 0',
                borderBottom: '1px solid var(--cream-deeper)',
              }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            style={{
              fontFamily: 'var(--font-jost)',
              fontSize: '0.75rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              backgroundColor: 'var(--sage)',
              color: 'white',
              padding: '0.75rem 1.25rem',
              borderRadius: '100px',
              textDecoration: 'none',
              textAlign: 'center',
              marginTop: '1rem',
            }}
          >
            Book a Call
          </Link>
        </div>
      </div>
    </header>
  );
}
