import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import ProductsSection from '@/components/sections/ProductsSection';
import ShopBySection from '@/components/sections/ShopBySection';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <ShopBySection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}