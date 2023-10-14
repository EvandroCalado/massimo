import Image from 'next/image';
import Link from 'next/link';

export default function Cart() {
  return (
    <Link href={'/cart'} className="flex items-center gap-2">
      <div className="relative h-8 w-8">
        <Image src="/icons/cart.png" alt="Cart" fill />
        <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full border border-black bg-red-500 text-center text-sm text-white">
          3
        </span>
      </div>
    </Link>
  );
}
