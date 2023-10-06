import Link from 'next/link';
import { arrowLeft } from '../../icons/';

export default function Error404() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <h1 className="mb-8 text-7xl font-bold">404</h1>
      <span className="mb-6 text-lg font-semibold">
        Pagina não encontrada !
      </span>
      <Link
        href={'/'}
        className="flex items-center rounded-lg border border-theme-900 px-4 py-2 duration-200 hover:bg-theme-200 hover:pl-2 active:bg-theme-300 dark:border-theme-300 dark:text-theme-300 dark:hover:bg-theme-950 dark:active:bg-theme-990 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:duration-200 [&>svg]:hover:mr-2"
      >
        {arrowLeft}
        Voltar para Home
      </Link>
    </div>
  );
}
