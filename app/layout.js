import './globals.css';
import { Suspense } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { jakarta } from './font'

export const metadata = {
  title: 'Lubesurgeons - Your Mobile Mechanic Patner',
  description: "At Lubesurgeons, we're on a mission to transform the way you experience vehicle maintenance. Say goodbye to the hassle of traditional garages and hello to the convenience of our certified mobile mechanics.",
  openGraph: {
    title: 'Lubesurgeons - Your Mobile Mechanic Patner',
    description: "At Lubesurgeons, we're on a mission to transform the way you experience vehicle maintenance. Say goodbye to the hassle of traditional garages and hello to the convenience of our certified mobile mechanics.",
    image: {
      url: 'https://yourwebsite.com/images/og-image-homepage.jpg',
      width: 1200,
      height: 630,
    },
  },
  twitter: {
    cardType: 'summary_large_image',
    image: {
      url: 'https://yourwebsite.com/images/twitter-image-homepage.jpg',
      width: 1200,
      height: 600,
    },
  },
  whatsapp: {
    image: {
      url: 'https://yourwebsite.com/images/whatsapp-image-homepage.jpg',
      width: 800,
      height: 400,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jakarta.className}>
      <body className="flex-col min-h-screen" id="main-layout">
      <Nav />
        {children}
      <Footer />
      </body>
    </html>
  );
}
