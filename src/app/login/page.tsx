'use client';

import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Login() {
  const { status } = useSession();
  const router = useRouter();

  if (status === 'loading') {
    return (
      <div className="flex h-[calc(100vh-15rem)] w-full animate-pulse items-center justify-center text-xl font-bold text-red-500">
        Loading...
      </div>
    );
  }

  if (status === 'authenticated') {
    router.push('/');
  }

  return (
    <div className="flex h-[calc(100vh-9rem)] items-center justify-center p-4 md:h-[calc(100vh-15rem)]">
      {/* BOX */}
      <div className="flex h-full flex-col overflow-hidden rounded-lg shadow-2xl md:h-[70%] md:w-[70%] md:flex-row lg:w-[60%] 2xl:w-1/3">
        {/* IMAGE CONTAINER */}
        <div className="relative h-1/3 w-full md:h-full md:w-1/2">
          <Image src="/login2.jpg" alt="Login" fill className="object-cover" />
        </div>
        {/* FORM CONTAINER */}
        <div className="flex h-2/3 flex-col justify-center gap-4 p-4 md:h-full md:w-1/2 md:gap-8 lg:p-10">
          <h1 className="text-xl font-bold xl:text-2xl">Bem Vindo!</h1>
          <p>Entre com sua conta ou crie uma nova usando suas mídias sociais</p>
          <button
            onClick={() => signIn('google')}
            className="flex items-center justify-center gap-4 rounded-md p-4 ring-1 ring-orange-200"
          >
            <Image
              src="/icons/google.png"
              alt="Google"
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Entrar com Google</span>
          </button>
          <button
            onClick={() => signIn('facebook')}
            className="flex items-center justify-center gap-4 rounded-md p-4 ring-1 ring-orange-200"
          >
            <Image
              src="/icons/facebook.png"
              alt="Google"
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Entrar com Facebook</span>
          </button>
          <p className="flex items-center justify-between text-sm">
            Teve algum problema?{' '}
            <Link href={'/'} className="underline">
              Contate-nos
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
