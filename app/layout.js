import "./globals.css";
import { Inter } from "next/font/google";
import { Suspense } from 'react';

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex-col min-h-screen" id="main-layout">
        {children}
      </body>
    </html>
  );
}
