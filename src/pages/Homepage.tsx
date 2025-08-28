import AboutSection from "@/components/modules/homePage/AboutSection";
import FeaturesSection from "@/components/modules/homePage/FeaturesSection";
import HeroSection from "@/components/modules/homePage/HeroSection";
import ServicesSection from "@/components/modules/homePage/ServicesSection";

export default function Homepage() {
  return (
    <div className=" bg-gradient-to-b from-background via-background to-muted/50 text-foreground">
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <AboutSection />
    </div>
  );
}
