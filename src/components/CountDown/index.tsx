'use client';

import { useEffect, useState } from 'react';
import Countdown from 'react-countdown';

const endingDate = new Date('2023-10-25');

export default function CountDown() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div>
      {isMounted && (
        <Countdown
          date={endingDate}
          className="text-3xl font-bold text-yellow-300 md:text-5xl"
        />
      )}
    </div>
  );
}
