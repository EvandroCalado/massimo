import Link from 'next/link';

export default function Footer() {
  return (
    <div className="flex h-12 items-center justify-between border-t-2 border-red-500 p-4 text-red-500 md:h-24 lg:px-20 xl:px-40">
      <Link href={'/'} className="text-xl font-bold uppercase">
        Massimo
      </Link>
      <p>© Todos os direitos reservados.</p>
    </div>
  );
}
