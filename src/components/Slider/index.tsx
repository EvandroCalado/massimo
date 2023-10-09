'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const sliders = [
  {
    id: 1,
    title: 'Sempre fresco, crocante e quentinho',
    image: '/slide/slide1.png',
  },
  {
    id: 2,
    title: 'Entregamos seu pedido em até 30 minutos',
    image: '/slide/slide2.png',
  },
  {
    id: 3,
    title: 'Compartilhe o melhor com sua familia',
    image: '/slide/slide3.jpg',
  },
];

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === sliders.length - 1 ? 0 : prev + 1)),
      4000,
    );

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="flex h-[calc(100vh-6rem)] flex-col bg-fuchsia-50 md:h-[calc(100vh-9rem)] lg:flex-row">
      {/* TEXT CONTAINER */}
      <div className="flex h-1/2 w-full flex-col items-center justify-center gap-8 font-bold text-red-500 lg:h-full">
        <h1 className="p-4 text-center text-4xl uppercase sm:text-5xl md:p-6 md:text-6xl xl:text-7xl">
          {sliders[currentSlide].title}
        </h1>
        <button className="bg-red-500 px-4 py-2 text-white duration-150 hover:bg-red-600 md:px-8 md:py-4">
          Peça já
        </button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="relative h-1/2 w-full lg:h-full">
        <Image
          src={sliders[currentSlide].image}
          alt="Slide"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
