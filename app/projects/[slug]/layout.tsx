import type { Metadata } from 'next';

import { Header } from '@/components/sections';

import Preloader from '@/components/preloader/preloader';
import Cursor from '@/components/cursor/cursor';
import SmoothScroll from '@/components/smooth-scroll';

export default function ProjectLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SmoothScroll>
      {/* <Preloader /> */}
      <div className="flex min-h-[100dvh] w-full flex-col items-center">
        <Header />
        <main className="my-14 max-w-screen-xl flex-1 ">{children}</main>
      </div>
      <Cursor />
    </SmoothScroll>
  );
}
