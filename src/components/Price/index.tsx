'use client';

import { useEffect, useState } from 'react';

export type PriceProps = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};

export default function Price({ price, options }: PriceProps) {
  const [totalPrice, setTotalPrice] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setTotalPrice(
      quantity * (options ? price + options[selected].additionalPrice : price),
    );
  }, [options, price, quantity, selected]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold sm:text-2xl">
        R${totalPrice.toFixed(2)}
      </h2>
      {/* OPTIONS CONTAINER */}
      <div className="flex gap-4">
        {options?.map((option, index) => (
          <button
            className="w-24 rounded-md p-2 text-sm ring-1 ring-red-500 sm:text-base"
            key={option.title}
            style={{
              background: selected === index ? 'rgb(239 68 68)' : 'transparent',
              color: selected === index ? '#fff' : 'rgb(239 68 68)',
            }}
            onClick={() => setSelected(index)}
          >
            {option.title}
          </button>
        ))}
      </div>
      {/* QUANTITY AND ADD BUTTON CONTAINER */}
      <div className="flex items-center justify-between">
        {/* QUANTITY */}
        <div className="flex w-full items-center justify-between rounded-s-lg p-2 ring-1 ring-red-500 sm:p-3">
          <span>Quantidade</span>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              {'<'}
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
            >
              {'>'}
            </button>
          </div>
        </div>
        {/* CART BUTTON */}
        <button className="rounded-e-lg bg-red-500 p-2 uppercase text-white ring-1 ring-red-500 sm:p-3">
          Adicionar
        </button>
      </div>
    </div>
  );
}
