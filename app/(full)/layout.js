'use client';
import '../globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function FullLayout({ children }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
