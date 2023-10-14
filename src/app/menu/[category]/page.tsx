import Image from 'next/image';
import Link from 'next/link';
import { ProductType } from '../../../types/type-product';

const getData = async (category: string) => {
  const res = await fetch(
    `http://localhost:3000/api/products?cat=${category}`,
    {
      cache: 'no-store',
    },
  );

  if (!res.ok) throw new Error('Failed to fetch data on menu');

  return res.json();
};

type ParamsType = {
  params: {
    category: string;
  };
};

export default async function Category({ params }: ParamsType) {
  const products: ProductType[] = await getData(params.category);

  return (
    <div className="grid grid-cols-1 text-red-500 md:grid-cols-2 lg:grid-cols-3">
      {products.map((pizza) => (
        <Link
          href={`/product/${pizza.id}`}
          key={pizza.id}
          className="group flex h-[60vh] w-full flex-col items-center justify-between p-4 even:bg-theme-50 dark:even:bg-theme-800"
        >
          {/* IMAGE CONTAINER */}
          {pizza.img && (
            <div className="relative h-[80%] w-[80%]">
              <Image
                src={pizza.img}
                alt={pizza.title}
                fill
                className="object-contain"
              />
            </div>
          )}
          {/* TEXT CONTAINER */}
          <div className="flex w-full items-center justify-between gap-2 font-bold">
            <h1 className="p-2 font-bold uppercase">{pizza.title}</h1>
            <h2 className="group-hover:hidden">R${pizza.price}</h2>
            <button className="hidden rounded-md bg-red-500 p-2 text-sm uppercase text-white duration-150 hover:bg-red-600 group-hover:block">
              Adicionar
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
}
