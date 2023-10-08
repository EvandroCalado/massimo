import Link from 'next/link';

export default function Footer() {
  return (
    <div className="flex h-12 items-center justify-between p-4 text-red-500 md:h-24 lg:p-20 xl:p-40">
      <Link href={'/'} className="text-xl font-bold uppercase">
        Massimo
      </Link>
      <p>© Todos os direitos reservados.</p>
    </div>
  );
}
