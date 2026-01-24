import AboutSection from "@/components/modules/homePage/AboutSection";
import AppShowcase from "@/components/modules/homePage/AppShowcase";
import FAQSection from "@/components/modules/homePage/FAQSection";
import FeaturesSection from "@/components/modules/homePage/FeaturesSection";
import HeroSection from "@/components/modules/homePage/HeroSection";
import HowItWorks from "@/components/modules/homePage/HowItWorks";
import ServicesSection from "@/components/modules/homePage/ServicesSection";
import TestimonialsSection from "@/components/modules/homePage/TestimonialsSection";

export default function Homepage() {
  return (
    <div className="bg-background text-foreground">
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <ServicesSection />
      <AppShowcase />
      <AboutSection />
      <TestimonialsSection />
      <FAQSection />
    </div>
  );
}
