'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Button from '../Button';

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
    <div className="flex h-[calc(100vh-6rem)] flex-col bg-fuchsia-50 dark:bg-theme-800 md:flex-row lg:h-[calc(100vh-9rem)]">
      {/* TEXT CONTAINER */}
      <div className="flex h-1/2 w-full flex-col items-center justify-center gap-8 font-bold text-red-500 md:h-full">
        <h1 className="p-4 text-center text-4xl uppercase sm:text-5xl md:p-6 md:text-6xl xl:text-7xl">
          {sliders[currentSlide].title}
        </h1>
        <Button>Peça já</Button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="relative h-1/2 w-full md:h-full">
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
