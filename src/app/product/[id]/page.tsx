import Image from 'next/image';
import Price from '../../../components/Price';
import { singleProduct } from '../../../utils/data';

export default function Product() {
  return (
    <div className="flex h-[calc(100vh-9rem)] flex-col items-center justify-around p-4 text-red-500 md:h-[calc(100vh-15rem)] md:flex-row lg:px-20 xl:px-40">
      {/* IMAGE CONTAINER */}
      {singleProduct.img && (
        <div className="relative flex h-1/2 w-full flex-1 items-center justify-center p-4">
          <Image
            src={singleProduct.img}
            alt={singleProduct.title}
            fill
            className="object-contain"
          />
        </div>
      )}
      {/* TEXT CONTAINER */}
      <div className="flex flex-1 flex-col justify-center gap-2 p-4 sm:gap-4">
        <h1 className="text-xl font-bold uppercase sm:text-3xl xl:text-5xl">
          {singleProduct.title}
        </h1>
        <p className="text-sm md:text-base">{singleProduct.desc}</p>
        <Price
          price={singleProduct.price}
          id={singleProduct.id}
          options={singleProduct.options}
        />
      </div>
    </div>
  );
}
