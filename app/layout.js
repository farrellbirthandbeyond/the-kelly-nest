import { Cormorant_Garamond, Jost } from 'next/font/google';
import './globals.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-jost',
  display: 'swap',
});

export const metadata = {
  title: 'The Kelly Nest | Birth & Postpartum Doula',
  description: 'Farrell Kelly offers compassionate birth and postpartum doula support. Serving families through the sacred journey of pregnancy, birth, and the fourth trimester.',
  keywords: 'doula, birth doula, postpartum doula, Farrell Kelly, The Kelly Nest',
  openGraph: {
    title: 'The Kelly Nest | Birth & Postpartum Doula',
    description: 'Compassionate support for your birth journey and beyond.',
    url: 'https://thekellynest.com',
    siteName: 'The Kelly Nest',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body>
        <Nav />
        <main style={{ paddingTop: '72px' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
