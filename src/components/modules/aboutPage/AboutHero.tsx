import { SectionHeader } from "@/components/shared/SectionHeader";

export function AboutHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center pt-24 pb-16 md:pt-32 md:pb-24 hero-mesh">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full -mr-64 -mt-32 opacity-10 dark:opacity-5 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full -ml-48 -mb-24 opacity-8 dark:opacity-3 transition-all duration-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            badge="Our Mission"
            title="Redefining the Future of"
            titleAccent="Digital Finance"
            description="We are building a secure, accessible, and user-friendly platform that empowers individuals and businesses to manage money effortlessly — anytime, anywhere."
            align="center"
          />
        </div>
      </div>
    </section>
  );
}
