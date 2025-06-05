'use client';

import Link from 'next/link';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

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
        <div className='flex flex-col h-full'>
          <header className='w-full px-6 py-4 bg-neutral-900 shadow-md flex justify-between items-center border-b border-neutral-800'>
            <Link
              href='/'
              className='text-2xl font-bold text-white hover:text-gray-300 transition'
            >
              Order Form Demo
            </Link>
            <nav className='flex gap-6 text-gray-400 text-lg'>
              <Link href='/normal' className='hover:text-white transition'>
                Normal
              </Link>
              <Link href='/special' className='hover:text-white transition'>
                Special
              </Link>
              <Link href='/admin' className='hover:text-white transition'>
                Admin
              </Link>
            </nav>
          </header>
          <main className='flex-1 flex flex-col items-center justify-center overflow-hidden px-6 py-12'>
            {children}
          </main>
          <footer className='w-full p-4 text-center text-sm text-gray-500 border-t border-neutral-800'>
            © {new Date().getFullYear()} Order Form Demo
          </footer>
        </div>
      </body>
    </html>
  );
}
