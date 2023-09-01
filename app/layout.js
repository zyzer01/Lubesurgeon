import './globals.css';
import { Suspense } from 'react';

import { Plus_Jakarta_Sans } from 'next/font/google';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
});
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jakarta.className}>
      <body className="flex-col min-h-screen" id="main-layout">
        {children}
      </body>
    </html>
  );
}
