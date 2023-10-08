'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

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
    <button type="button" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? (
        <Image src="/icons/sun.png" alt="Sun" width={30} height={30} />
      ) : (
        <Image src="/icons/moon.png" alt="Moon" width={30} height={30} />
      )}
    </button>
  );
}
