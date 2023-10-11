import Image from 'next/image';
import Link from 'next/link';
import Cart from '../Cart';
import Menu from '../Menu';

export default function Navbar() {
  const user = false;

  return (
    <div className="flex h-12 items-center justify-between border-b-2 border-b-red-500 p-4 uppercase text-red-500 md:h-24 lg:px-20 xl:px-40">
      {/* LEFT LINKS */}
      <div className="hidden flex-1 gap-4 md:flex">
        <Link href={'/'}>Home</Link>
        <Link href={'/menu'}>Menu</Link>
        <Link href={'/'}>Contato</Link>
      </div>
      {/* LOGO */}
      <div className="flex-1 text-xl md:text-center md:font-bold">
        <Link href={'/'}>Massimo</Link>
      </div>
      {/* MENU MOBILE */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* RIGHT LINKS */}
      <div className="hidden flex-1 items-center justify-end gap-4 md:flex">
        <div className="flex cursor-pointer items-center gap-2 rounded-md bg-orange-300 px-2 py-1 text-[10.5px] duration-150 hover:brightness-95 lg:text-base">
          <Image src="/icons/phone.png" alt="Phone" width={20} height={20} />
          <span>(99) 99999-9999</span>
        </div>
        {!user ? (
          <Link href={'/login'}>Entrar</Link>
        ) : (
          <Link href={'/orders'}>Pedidos</Link>
        )}
        <Cart />
      </div>
    </div>
  );
}
