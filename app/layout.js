import './globals.css';
import { Suspense } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { jakarta } from './font';
import CookieManager from './cookieManager';

export const metadata = {
  title: {
    template: '%s | Lubesurgeons - Your Mobile Mechanic Patner',
    default: 'Lubesurgeons - Your Mobile Mechanic Patner',
  },
  description:
    "At Lubesurgeons, we're on a mission to transform the way you experience vehicle maintenance. Say goodbye to the hassle of traditional garages and hello to the convenience of our certified mobile mechanics.",
  referrer: 'origin-when-cross-origin',
  keywords: ['Vehicle', 'Maintenance', 'Servicing'],
  metadataBase: new URL('https://lubesurgeons.com'),

  themeColor: '#1F2B4A',
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    title: 'Lubesurgeons - Your Mobile Mechanic Patner',
    description:
      "At Lubesurgeons, we're on a mission to transform the way you experience vehicle maintenance. Say goodbye to the hassle of traditional garages and hello to the convenience of our certified mobile mechanics.",
    url: 'https://lubesurgeons.com',
    siteName: 'Lubesurgeons',
    image: {
      url: 'https://lubesurgeon.vercel.app/regular.jpg',
      width: 1200,
      height: 630,
    },
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jakarta.className}>
      <body className="flex-col min-h-screen" id="main-layout">
        <CookieManager />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
