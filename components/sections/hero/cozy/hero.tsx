import React from 'react';
import MotionWrap from '@/components/motion-wrap';
import Image from 'next/image';

import { metadata as meta } from '@/app/config';
import { hero } from '@/components/sections/hero/config';

function Hero() {
  return (
    <MotionWrap className="mt-14 flex h-[calc(100dvh-62.5px-56px)] w-full items-center justify-center">
      <div className="flex w-full items-center justify-center gap-4 px-4 md:grid-cols-2 md:px-6 lg:gap-10">
        <div className="flex w-full items-center justify-center space-y-3 text-left">
          <div className="flex w-full max-w-screen-xl flex-col items-center justify-center">
            <h1 className="self-start text-8xl font-bold tracking-tight md:text-9xl lg:text-[15rem]">
              {hero.firstName}
            </h1>
            <h1 className="self-end text-8xl font-bold tracking-tight md:text-9xl lg:text-[15rem]">
              {hero.lastName}
            </h1>
            <div className="inline-block w-fit rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-foreground/10">
              {hero.label}
            </div>
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default Hero;
