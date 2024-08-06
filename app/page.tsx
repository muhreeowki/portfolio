import {
  Header,
  Hero,
  About,
  Skills,
  Experience,
  Testimonials,
  Projects,
  Contact,
  Footer
} from '@/components/sections';

import Preloader from '@/components/preloader/preloader';
import Cursor from '@/components/cursor/cursor';
import SmoothScroll from '@/components/smooth-scroll';

export default function Home() {
  return (
    <SmoothScroll>
      <Preloader />
      <div className="flex min-h-[100dvh] flex-col items-center">
        <Header loader={true} />
        <main className="max-w-screen-xl flex-1">
          <Hero />
          <About />
          <Projects />
          {/*
            <Skills />
            <Experience />
          */}
          <Contact />
          <Footer />
        </main>
      </div>
      <Cursor />
    </SmoothScroll>
  );
}
