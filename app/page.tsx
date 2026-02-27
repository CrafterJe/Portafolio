// app/page.tsx
import Navbar from "@/app/components/ui/Navbar";
import Hero from "@/app/components/sections/Hero";
import About from "@/app/components/sections/About";
import Skills from "@/app/components/sections/Skills";
import Projects from "@/app/components/sections/Projects";
import CV from "@/app/components/sections/CV";
import Footer from "@/app/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <CV />
      <Footer />
    </main>
  );
}