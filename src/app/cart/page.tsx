import Image from 'next/image';

export default function Cart() {
  return (
    <div className="flex h-full flex-col text-red-500 lg:flex-row lg:px-20 xl:px-40">
      {/* PRODUCTS CONTAINER */}
      <div className="flex flex-col justify-center p-4 lg:h-full lg:w-2/3">
        {/* SINGLE PRODUCT */}
        <div className="mb-4 flex items-center justify-between border-b border-red-200">
          <Image
            src="/products/p1.png"
            alt="Product"
            width={100}
            height={100}
          />
          <div>
            <h1 className="text-xl font-bold uppercase">sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">R$79.90</h2>
          <span className="cursor-pointer text-xl font-bold">X</span>
        </div>
        {/* SINGLE PRODUCT */}
        <div className="mb-4 flex items-center justify-between border-b border-red-200 pb-4">
          <Image
            src="/products/p1.png"
            alt="Product"
            width={100}
            height={100}
          />
          <div>
            <h1 className="text-xl font-bold uppercase">sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">R$79.90</h2>
          <span className="cursor-pointer text-xl font-bold">X</span>
        </div>
        {/* SINGLE PRODUCT */}
        <div className="mb-4 flex items-center justify-between border-b border-red-200 pb-4">
          <Image
            src="/products/p1.png"
            alt="Product"
            width={100}
            height={100}
          />
          <div>
            <h1 className="text-xl font-bold uppercase">sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">R$79.90</h2>
          <span className="cursor-pointer text-xl font-bold">X</span>
        </div>
        {/* SINGLE PRODUCT */}
        <div className="mb-4 flex items-center justify-between border-b border-red-200 pb-4">
          <Image
            src="/products/p1.png"
            alt="Product"
            width={100}
            height={100}
          />
          <div>
            <h1 className="text-xl font-bold uppercase">sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">R$79.90</h2>
          <span className="cursor-pointer text-xl font-bold">X</span>
        </div>
      </div>
      {/* PAYMENT CONTAINER */}
      <div className=" flex flex-col justify-center gap-4 p-4 lg:mb-4 lg:h-full lg:w-1/3 lg:self-end">
        <div className="flex justify-between">
          <span>Subtotal (3 item)</span>
          <span>R$81.90</span>
        </div>
        <div className="flex justify-between">
          <span>Custo de serviço</span>
          <span>R$0.00</span>
        </div>
        <div className="flex justify-between">
          <span>Frete</span>
          <span className="text-green-500">R$0.00</span>
        </div>
        <hr className="my-2 border-[1px] border-red-200" />
        <div className="flex justify-between">
          <span className="font-bold">TOTAL</span>
          <span className="font-bold">R$0.00</span>
        </div>
        <button className="w-1/2 self-end rounded-md bg-red-500 p-3 text-white duration-150 hover:bg-red-600 md:w-1/3">
          Finalizar
        </button>
      </div>
    </div>
  );
}
