import { AboutUs } from "@/components/ui/AboutUs";
import { Feature } from "@/components/ui/Feature";
import { HeroSection } from "@/components/ui/HeroSection";
import { Navbar } from "@/components/ui/Navbar";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Feature />
    </div>
  );
}
