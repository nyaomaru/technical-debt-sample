import { TfiGithub } from 'react-icons/tfi';
import Link from 'next/link';

export function Header() {
  return (
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
        <Link
          href='https://github.com/nyaomaru/technical-debt-sample'
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-400 hover:text-white transition'
        >
          <TfiGithub className='w-6 h-6' />
        </Link>
      </nav>
    </header>
  );
}
