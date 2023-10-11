'use client';

import Image from 'next/image';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { featuredProducts } from '../../utils/data';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Featured() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      autoplay
      loop
      pagination={{ clickable: true }}
      spaceBetween={50}
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
      {/* <SwiperSlide>Slide 1</SwiperSlide> */}
    </Swiper>
  );
  // <div className="w-screen overflow-x-scroll text-red-500">
  //   {/* WRAPPER */}
  //   <div className="flex w-max">
  //     {/* SINGLE ITEM */}
  //     {featuredProducts.map((product) => (
  //       <div
  //         key={product.id}
  //         className="flex h-screen w-screen flex-col items-center p-4 duration-150 hover:bg-fuchsia-50 md:w-[49.3vw] xl:h-[90vh] xl:w-[33.3vw]"
  //       >
  //         {/* IMAGE CONTAINER */}
  //         {product.img && (
  //           <div className="relative m-4 w-full flex-1 duration-150 hover:scale-105">
  //             <Image
  //               src={product.img}
  //               alt="Product"
  //               fill
  //               className="object-contain"
  //             />
  //           </div>
  //         )}
  //         {/* TEXT CONTAINER */}
  //         <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
  //           <h1 className="text-xl font-bold uppercase xl:text-2xl">
  //             {product.title}
  //           </h1>
  //           <p className="p-4">{product.desc}</p>
  //           <span className="text-xl font-bold">R$ {product.price}</span>
  //           <button className="bg-red-500 p-2 text-white duration-150 hover:bg-red-600">
  //             Adicionar
  //           </button>
  //         </div>
  //       </div>
  //     ))}
  //   </div>
  // </div>
  // );
}
