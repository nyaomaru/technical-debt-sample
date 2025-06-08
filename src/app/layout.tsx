'use client';

import './globals.css';

import { Geist, Geist_Mono } from 'next/font/google';

import { Header, Footer } from '@/components/shared';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='h-full'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white h-full`}
      >
        <main className='flex flex-col h-full'>
          <Header />
          <div className='flex-1 flex flex-col items-center justify-center overflow-hidden px-6 py-12'>
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
