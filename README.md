# The Kelly Nest — thekellynest.com

Birth & Postpartum Doula website for Farrell Kelly.

Built with **Next.js 14** (App Router) + **Tailwind CSS**, deployed on **Vercel**.

---

## Local Development

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```
app/
  layout.js          # Root layout (Nav + Footer)
  page.js            # Home page
  about/page.js      # About Farrell
  services/page.js   # Services (birth + postpartum)
  testimonials/page.js
  contact/page.js    # Contact form
  globals.css        # Design tokens + global styles

components/
  Nav.js             # Sticky navigation
  Footer.js          # Site footer
```

## Design Tokens (globals.css)

| Variable | Color | Usage |
|---|---|---|
| `--cream` | `#F8F1E7` | Page background |
| `--sage` | `#7A9E7E` | Accents, buttons |
| `--terracotta` | `#C4714F` | Primary CTA, highlights |
| `--warm-brown` | `#5C3D2E` | Headings, body text |
| `--stone` | `#9C8878` | Secondary text |

---

## Deployment (Vercel)

This repo auto-deploys to Vercel on every push to `main`.

Connected to: `website-three-peach-30.vercel.app`  
Domain: `thekellynest.com`

---

## TODO — Replace Placeholders

- [ ] Add Farrell's bio (app/about/page.js)
- [ ] Add service descriptions and pricing
- [ ] Add real testimonials
- [ ] Add contact info (email, phone, social links)
- [ ] Add photos (replace blob shapes with `<Image>` components)
- [ ] Wire up contact form (Formspree / Resend / etc.)
- [ ] Update Footer location if not Denver
- [ ] Add social media links in Footer + Contact
