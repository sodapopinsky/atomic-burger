// app/page.tsx
import HeroSection from '@/components/HeroSection'
import Menu from "@/components/menu";

export default function Home() {
  return (
    <>
      <HeroSection /> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-0">
        <Menu />
      </div>
    </>
  );
}