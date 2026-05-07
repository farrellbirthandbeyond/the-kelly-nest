'use client';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', dueDate: '', service: '', message: '' });
  const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    // TODO: wire up to Formspree, Resend, or your preferred email service
    // For now, simulate a short delay
    setTimeout(() => setStatus('success'), 1200);
  };

  const inputStyle = {
    width: '100%',
    fontFamily: 'var(--font-jost)',
    fontSize: '0.9rem',
    color: 'var(--dark)',
    backgroundColor: 'var(--cream)',
    border: '1px solid var(--cream-deeper)',
    borderRadius: '10px',
    padding: '0.85rem 1rem',
    outline: 'none',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box',
  };

  const labelStyle = {
    display: 'block',
    fontFamily: 'var(--font-jost)',
    fontSize: '0.65rem',
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    color: 'var(--warm-brown)',
    marginBottom: '0.5rem',
  };

  return (
    <>
      {/* ── HEADER ── */}
      <section style={{ padding: '5rem 1.5rem 3rem', textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: '1rem' }}>
          Let's Connect
        </p>
        <h1 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 300, color: 'var(--warm-brown)', marginBottom: '1.25rem' }}>
          Get in Touch
        </h1>
        <p style={{ fontFamily: 'var(--font-jost)', fontSize: '1rem', color: 'var(--stone)', maxWidth: '480px', margin: '0 auto', lineHeight: 1.8 }}>
          Whether you have questions, want to learn more, or are ready to book — I'd love to hear from you. Free consultations are always available.
        </p>
      </section>

      {/* ── CONTENT ── */}
      <section style={{ padding: '2rem 1.5rem 6rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '5rem', alignItems: 'start' }}>

          {/* Left: Info */}
          <div>
            <div style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.75rem', fontWeight: 300, color: 'var(--warm-brown)', marginBottom: '0.75rem' }}>
                Farrell Kelly
              </h2>
              <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.85rem', lineHeight: 1.75, color: 'var(--stone)' }}>
                Certified Birth &amp; Postpartum Doula<br />
                Denver Metro Area, Colorado
              </p>
            </div>

            {[
              { label: 'Email', value: 'hello@thekellynest.com', href: 'mailto:hello@thekellynest.com' },
              { label: 'Phone', value: '[Placeholder phone number]', href: 'tel:+1' },
              { label: 'Service Area', value: 'Denver Metro Area, CO', href: null },
            ].map((c) => (
              <div key={c.label} style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--cream-deeper)' }}>
                <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terracotta)', marginBottom: '0.4rem' }}>{c.label}</p>
                {c.href ? (
                  <a href={c.href} style={{ fontFamily: 'var(--font-jost)', fontSize: '0.95rem', color: 'var(--warm-brown)', textDecoration: 'none' }}>{c.value}</a>
                ) : (
                  <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.95rem', color: 'var(--warm-brown)', margin: 0 }}>{c.value}</p>
                )}
              </div>
            ))}

            <div style={{ marginTop: '2rem' }}>
              <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terracotta)', marginBottom: '0.75rem' }}>Follow Along</p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="#" style={{ fontFamily: 'var(--font-jost)', fontSize: '0.8rem', color: 'var(--sage)', textDecoration: 'none' }}>Instagram →</a>
                <a href="#" style={{ fontFamily: 'var(--font-jost)', fontSize: '0.8rem', color: 'var(--sage)', textDecoration: 'none' }}>Facebook →</a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div style={{ backgroundColor: 'var(--cream-dark)', borderRadius: '24px', padding: '2.5rem' }}>
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🪺</div>
                <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '2rem', color: 'var(--warm-brown)', marginBottom: '0.75rem' }}>Message received!</h3>
                <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.9rem', color: 'var(--stone)', lineHeight: 1.75 }}>
                  Thank you for reaching out. Farrell will be in touch within 24–48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.75rem', fontWeight: 300, color: 'var(--warm-brown)', marginBottom: '2rem' }}>
                  Send a Message
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={labelStyle}>Name *</label>
                    <input required name="name" value={form.name} onChange={handleChange} placeholder="Your full name" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" style={inputStyle} />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={labelStyle}>Phone</label>
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="(Optional)" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Due Date / Birth Date</label>
                    <input name="dueDate" value={form.dueDate} onChange={handleChange} placeholder="Month &amp; Year" style={inputStyle} />
                  </div>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={labelStyle}>Service You're Interested In</label>
                  <select name="service" value={form.service} onChange={handleChange} style={{ ...inputStyle, cursor: 'pointer' }}>
                    <option value="">Select a service…</option>
                    <option value="birth">Birth Doula</option>
                    <option value="postpartum">Postpartum Doula</option>
                    <option value="both">Birth &amp; Postpartum</option>
                    <option value="consultation">Free Consultation</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div style={{ marginBottom: '1.75rem' }}>
                  <label style={labelStyle}>Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me a little about yourself, your pregnancy or postpartum journey, and what you're hoping for…"
                    style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  style={{
                    width: '100%',
                    fontFamily: 'var(--font-jost)',
                    fontSize: '0.75rem',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    backgroundColor: status === 'sending' ? 'var(--stone)' : 'var(--terracotta)',
                    color: 'white',
                    border: 'none',
                    padding: '1rem',
                    borderRadius: '100px',
                    cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                    transition: 'background-color 0.2s',
                  }}
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>

                <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.75rem', color: 'var(--stone)', textAlign: 'center', marginTop: '1rem', lineHeight: 1.6 }}>
                  I respond within 24–48 hours. All inquiries are kept private.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
