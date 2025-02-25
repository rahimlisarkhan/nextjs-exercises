import React from 'react';
import vercel from '@/../public/vercel.svg';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Image src={vercel} alt="vercel" />
    </div>
  );
}
