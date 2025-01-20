import Navbar from "@/components/navbar";
import HeroSection from '@/components/HeroSection'

import Menu from "@/components/menu";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Your main content will go here */}
        <Menu />
      </div>
    </main>
  );
}
