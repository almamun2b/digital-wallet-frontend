import { SectionHeader } from "@/components/shared/SectionHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ShieldCheck, Globe, Zap, Users } from "lucide-react";

const coreValues = [
  {
    name: "Uncompromising Security",
    description: "Bank-level encryption and multi-factor authentication protecting every single satoshi.",
    icon: ShieldCheck,
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    name: "Global Accessibility",
    description: "Designed to bridge the gap between traditional finance and the digital future, everywhere.",
    icon: Globe,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  },
  {
    name: "Constant Innovation",
    description: "We never stop evolving. Our engineering team ships features that redefine convenience.",
    icon: Zap,
    color: "text-amber-500",
    bg: "bg-amber-500/10"
  },
  {
    name: "Trusted Community",
    description: "A transparent ecosystem connecting users, agents, and admins with total integrity.",
    icon: Users,
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  },
];

export function AboutValues() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeader
          badge="Our Values"
          title="The Principles That"
          titleAccent="Drive Us"
          description="Our platform is built on values that define every feature and interaction we deliver."
          align="center"
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {coreValues.map((value, idx) => (
            <Card 
              key={value.name} 
              className={cn(
                "group relative border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500",
                "hover:border-primary/30 hover:shadow-2xl hover:-translate-y-3 overflow-hidden animate-in fade-in slide-in-from-bottom-12"
              )}
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <CardHeader className="text-center space-y-4">
                <div className={cn(
                  "mx-auto h-16 w-16 flex items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110", 
                  value.bg, 
                  value.color
                )}>
                  <value.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">{value.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  {value.description}
                </CardDescription>
              </CardContent>
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -mr-16 -mt-16 rounded-full group-hover:bg-primary/10 transition-colors duration-500" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
