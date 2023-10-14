import Link from 'next/link';
import { MenuType } from '../../types/type-menu';

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/categories', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data on menu');
  }

  return res.json();
};

export default async function Menu() {
  const menu: MenuType[] = await getData();

  return (
    <div className="flex h-[calc(100vh-9rem)] flex-col items-center justify-center p-4 md:h-[calc(100vh-15rem)] md:flex-row lg:px-20 xl:px-40">
      {menu.map((item) => (
        <Link
          href={`/menu/${item.slug}`}
          key={item.id}
          style={{ backgroundImage: `url(${item.img})` }}
          className="h-1/3 w-full bg-cover p-8 md:h-[50vh]"
        >
          <div className={`text-${item.color} h-full w-2/3`}>
            <h1 className={`text-3xl font-bold uppercase`}>{item.title}</h1>
            <p className="my-8 text-sm">{item.desc}</p>
            <span className="hidden 2xl:block">Explorar</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
