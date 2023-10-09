import Image from 'next/image';
import CountDown from '../CountDown';

export default function Offer() {
  return (
    <div className="flex h-screen flex-col bg-black p-4 md:flex-row md:justify-between">
      {/* TEXT CONTAINER */}
      <div className="flex h-[50vw] flex-1 flex-col items-center justify-center gap-4 p-6 text-center md:h-full md:gap-8">
        <h1 className="text-3xl font-bold text-white md:text-5xl xl:text-6xl">
          O hambúrguer que vai te surpreender
        </h1>
        <p className="text-white xl:text-xl">
          Nosso hambúrguer é feito com carne de primeira qualidade, queijo
          derretido, bacon crocante e um molho especial que vai te deixar com
          água na boca.
        </p>
        <CountDown />
        <button className="bg-red-500 px-4 py-2 text-white duration-150 hover:bg-red-600 md:px-8 md:py-4">
          Peça já
        </button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="relative m-4 h-[50vw] w-full flex-1 md:h-full">
        <Image
          src="/offerProduct.png"
          alt="Offer"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
