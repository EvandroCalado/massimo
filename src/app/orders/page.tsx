'use client';

import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { OrderType } from '../../types/type-order';
import { formatDate } from '../../utils/formatDate';

export default function Orders() {
  const [isMounted, setIsMounted] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, [status]);

  if (status === 'unauthenticated' && isMounted) {
    router.push('/');
  }

  const { isLoading, error, data } = useQuery({
    queryKey: ['orders'],
    queryFn: () =>
      fetch('http://localhost:3000/api/orders').then((res) => res.json()),
  });

  if (isLoading || status === 'loading') return 'Loading...';

  if (error) return `An error has occurred: ${error}`;

  return (
    <div className="p-4 lg:px-20 xl:px-40">
      <table className="w-full">
        <thead className="text-bold">
          <tr className="text-left">
            <th className="hidden md:block">Pedido ID</th>
            <th>Data</th>
            <th>Preço</th>
            <th className="hidden md:block">Produtos</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: OrderType) => (
            <tr
              key={item.id}
              className="text-sm even:bg-theme-50 dark:even:bg-theme-800 md:text-base"
            >
              <td className="hidden px-1 py-4 md:block">{item.id}</td>
              <td className="px-1 py-4">{formatDate(item.createdAt)}</td>
              <td className="px-1 py-4">R$ {item.price}</td>
              <td className="hidden items-center gap-2 px-1 py-4 md:flex">
                {item.products.map((item) => (
                  <div key={item.id}>
                    <span>
                      {item.title}({item.quantity})
                    </span>
                  </div>
                ))}
              </td>
              {session?.user.isAdmin ? (
                <td>
                  <form className="flex items-center gap-2">
                    <input
                      placeholder={item.status}
                      className="rounded-md p-2 ring-1 ring-red-200"
                    />
                    <button className="rounded-full bg-red-500 p-2 duration-150 hover:bg-red-600">
                      <Image
                        src="/icons/edit.png"
                        alt="Edit"
                        width={20}
                        height={20}
                      />
                    </button>
                  </form>
                </td>
              ) : (
                <td className="px-1 py-4">{item.status}...</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
