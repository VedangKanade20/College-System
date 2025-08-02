import { AboutUs } from "@/components/ui/AboutUs";
import { CtaSection } from "@/components/ui/CtaSection";
import { Feature } from "@/components/ui/Feature";
import { Footer } from "@/components/ui/Footer";
import { HeroSection } from "@/components/ui/HeroSection";
import { Navbar } from "@/components/ui/Navbar";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Feature />
      <CtaSection />
      <Footer />
    </div>
  );
}
