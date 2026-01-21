import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { cn } from "@/lib/utils";
import { Rocket, TrendingUp, Award } from "lucide-react";

const timeline = [
  {
    year: "2023",
    title: "The Genesis",
    description: "Digital Wallet was founded with a vision to democratize digital finance for the unbanked.",
    icon: Rocket
  },
  {
    year: "2024",
    title: "Strategic Growth",
    description: "Expanded our agent network across 15+ regions, reaching our first 500,000 active users.",
    icon: TrendingUp
  },
  {
    year: "2025",
    title: "Global Recognition",
    description: "Awarded 'Most Secure Digital Wallet' at the Global Fintech Awards for our unique infrastructure.",
    icon: Award
  }
];

export function AboutJourney() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeader
          badge="Our Journey"
          title="The Path to"
          titleAccent="Global Impact"
          description="From a small startup to a global fintech player, here's how we evolved to serve millions."
          align="center"
        />

        <div className="mt-20 relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-border/60 hidden md:block" />
          
          <div className="space-y-16">
            {timeline.map((item, index) => (
              <div key={item.year} className={cn(
                "flex flex-col md:flex-row gap-8 items-center relative",
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              )}>
                <div className="flex-1 w-full text-center md:text-right md:pr-12 group">
                  <div className={cn(
                    "transition-all duration-300",
                    index % 2 === 1 ? "md:text-left md:pl-12 md:pr-0" : ""
                  )}>
                    <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/5">
                      {item.year}
                    </Badge>
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground max-w-md mx-auto md:ml-auto md:mr-0 group-hover:text-foreground transition-colors">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                <div className="relative z-20 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                  <item.icon className="h-6 w-6" />
                </div>
                
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
