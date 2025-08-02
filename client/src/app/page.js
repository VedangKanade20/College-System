import { AboutUs } from "@/components/ui/AboutUs";
import { HeroSection } from "@/components/ui/HeroSection";
import { Navbar } from "@/components/ui/Navbar";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <HeroSection />
      <AboutUs />
    </div>
  );
}
