// app/page.tsx
import Navbar from "@/app/components/ui/Navbar";
import Hero from "@/app/components/sections/Hero";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
    </main>
  );
}