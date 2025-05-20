import Hero from '@/components/sections/hero';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import Experience from '@/components/sections/experience';
import Contact from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}