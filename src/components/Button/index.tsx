import { twMerge } from 'tailwind-merge';

export type ButtonProps = {
  children: string;
  className?: string;
};

export default function Button({ children, className }: ButtonProps) {
  return (
    <button
      className={twMerge(
        'rounded-lg bg-red-500 px-4 py-2 text-white duration-150 hover:bg-red-600 md:px-8 md:py-4',
        className,
      )}
    >
      {children}
    </button>
  );
}
