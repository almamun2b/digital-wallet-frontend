import AboutSection from "@/components/modules/homePage/AboutSection";
import FeaturesSection from "@/components/modules/homePage/FeaturesSection";
import HeroSection from "@/components/modules/homePage/HeroSection";
import ServicesSection from "@/components/modules/homePage/ServicesSection";
import TrustSection from "@/components/modules/homePage/TrustSection";
import HowItWorks from "@/components/modules/homePage/HowItWorks";
import AppShowcase from "@/components/modules/homePage/AppShowcase";
import FAQSection from "@/components/modules/homePage/FAQSection";
import TestimonialsSection from "@/components/modules/homePage/TestimonialsSection";

export default function Homepage() {
  return (
    <div className="bg-background text-foreground">
      <HeroSection />
      <TrustSection />
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
