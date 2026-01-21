import { SectionHeader } from "@/components/shared/SectionHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ShieldCheck, Fingerprint, Lock, Eye, Server, ArrowRight } from "lucide-react";

const securityFeatures = [
  {
    title: "256-bit Encryption",
    description: "All data and transactions are secured using industry-standard AES-256 encryption.",
    icon: Lock
  },
  {
    title: "Biometric Auth",
    description: "Secure your wallet with fingerprint or facial recognition for instant, safe access.",
    icon: Fingerprint
  },
  {
    title: "Audit Transparency",
    description: "Real-time activity logs and immutable transaction records for complete peace of mind.",
    icon: Eye
  },
  {
    title: "Robust Infrastructure",
    description: "Multi-region server distribution ensures 99.9% uptime and lightning-fast processing.",
    icon: Server
  }
];

export function AboutSecurity() {
  return (
    <section className="py-24 bg-muted/40 relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '24px 24px' }} 
      />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {securityFeatures.map((feature, idx) => (
                <Card 
                  key={feature.title} 
                  className={cn(
                    "group relative glass-effect border-border/40 backdrop-blur-md transition-all duration-500",
                    "hover:border-primary/30 hover:shadow-2xl hover:-translate-y-3 overflow-hidden animate-in fade-in slide-in-from-bottom-6"
                  )}
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <CardHeader className="pb-2 space-y-4">
                    <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-2 group-hover:scale-110 transition-transform duration-500">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                  {/* Decorative accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -mr-16 -mt-16 rounded-full group-hover:bg-primary/10 transition-colors duration-500" />
                </Card>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <SectionHeader
              badge="Privacy & Security"
              title="Your Financial Safety is"
              titleAccent="Our Priority"
              description="We deploy multi-layered security protocols to ensure that your funds and data are always protected. From advanced encryption to real-time fraud detection, we've got you covered."
              align="left"
            />
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 group/item cursor-default">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors duration-300">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <span className="font-semibold text-foreground group-hover/item:text-primary transition-colors">PCI DSS Compliant Infrastructure</span>
              </div>
              <div className="flex items-center gap-3 group/item cursor-default">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors duration-300">
                  <Fingerprint className="h-5 w-5" />
                </div>
                <span className="font-semibold text-foreground group-hover/item:text-primary transition-colors">Multi-Factor Authentication (MFA)</span>
              </div>
              <Separator className="my-6 opacity-50" />
              <Button variant="link" className="px-0 text-primary group/btn text-base font-bold">
                Read our full Security Protocol <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
