'use client';

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export function UserLinks() {
  const { status } = useSession();

  return (
    <div>
      {status === 'authenticated' ? (
        <div className="flex items-center gap-4">
          <Link href={'/orders'}>Pedidos</Link>
          <span className="cursor-pointer" onClick={() => signOut()}>
            Sair
          </span>
        </div>
      ) : (
        <Link href={'/login'}>Entrar</Link>
      )}
    </div>
  );
}
