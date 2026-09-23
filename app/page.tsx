import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <div className="max-w-[1100px] mx-auto px-6 sm:px-8">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </div>
      <footer className="border-t border-gray-100 py-8 mt-20">
        <div className="max-w-[1100px] mx-auto px-6 sm:px-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Htun Linn Khant. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
