import './globals.css';
import { Suspense } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { jakarta } from './font'

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
