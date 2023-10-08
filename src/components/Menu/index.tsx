'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Cart from '../Cart';

const links = [
  { id: 1, title: 'Home', url: '/' },
  { id: 2, title: 'Menu', url: '/menu' },
  { id: 3, title: 'Funcionamento', url: '/' },
  { id: 4, title: 'Contato', url: '/' },
];

export default function Menu() {
  const [open, setOpen] = useState(false);

  const user = false;

  return (
    <div className="cursor-pointer">
      {!open ? (
        <Image
          src="/icons/open.png"
          alt="Open"
          width={20}
          height={20}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src="/icons/close.png"
          alt="Open"
          width={20}
          height={20}
          onClick={() => setOpen(false)}
        />
      )}
      {open && (
        <div className="absolute left-0 top-24 z-10 flex h-[calc(100vh-6rem)] w-full flex-col items-center justify-center gap-8 bg-red-500 text-3xl text-white">
          {links.map((link) => (
            <Link key={link.id} href={link.url} onClick={() => setOpen(false)}>
              {link.title}
            </Link>
          ))}
          {!user ? (
            <Link href={'/login'} onClick={() => setOpen(false)}>
              Entrar
            </Link>
          ) : (
            <Link href={'/orders'} onClick={() => setOpen(false)}>
              Pedidos
            </Link>
          )}
          <Link href={'/cart'} onClick={() => setOpen(false)}>
            <Cart />
          </Link>
        </div>
      )}
    </div>
  );
}
