'use client';

import Image from 'next/image';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ProductType } from '../../types/type-product';

export default function Featured() {
  const [featuredProducts, setFeaturedProducts] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/api/products')
      .then((res) => res.json())
      .then((data) => {
        setFeaturedProducts(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <div className="flex h-[80vh] w-full animate-pulse items-center justify-center text-xl font-bold text-red-500">
        Loading...
      </div>
    );

  if (!featuredProducts) return <div>No products found</div>;

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      autoplay
      loop
      pagination={{ clickable: true }}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {featuredProducts.map((product) => (
        <SwiperSlide key={product.id}>
          <div
            className={`flex h-[80vh] flex-col items-center p-8 duration-150 hover:bg-theme-50 dark:hover:bg-theme-800`}
          >
            {/* IMAGE CONTAINER */}
            {product.img && (
              <div className="relative m-4 w-full flex-1 duration-150 hover:scale-105">
                <Image
                  src={product.img}
                  alt="Product"
                  fill
                  className="object-contain"
                />
              </div>
            )}
            {/* TEXT CONTAINER */}
            <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
              <h1 className="text-xl font-bold uppercase xl:text-2xl">
                {product.title}
              </h1>
              <p className="p-4 text-sm lg:text-base">{product.desc}</p>
              <span className="text-xl font-bold">R$ {product.price}</span>
              <button className="rounded-md bg-red-500 p-2 text-white duration-150 hover:bg-red-600">
                Adicionar
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
