'use client';

import { useEffect, useState } from 'react';
import { moon, sun } from '../../icons';

export default function Toggle() {
  const [isMounted, setIsMounted] = useState(false);
  const [darkMode, setDarkMode] = useState(
    isMounted && localStorage.getItem('theme') === 'dark',
  );

  useEffect(() => {
    setIsMounted(true);

    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);
  return (
    <button
      type="button"
      onClick={() => setDarkMode(!darkMode)}
      className="inline-flex items-center rounded-lg border border-theme-700 p-1.5 text-theme-700 duration-200 hover:bg-theme-200 dark:border-theme-300 dark:text-theme-300 dark:hover:bg-theme-990"
    >
      {darkMode ? (
        <span className="[&>svg]:h-6 [&>svg]:w-6">{sun}</span>
      ) : (
        <span className="[&>svg]:h-6 [&>svg]:w-6">{moon}</span>
      )}
    </button>
  );
}
