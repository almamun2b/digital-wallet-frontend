import { SectionHeader } from "@/components/shared/SectionHeader";
import { UserPlus, Wallet, Globe, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    title: "Quick Sign Up",
    description: "Create your secure account in less than 2 minutes with simple identity verification.",
    icon: UserPlus,
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    title: "Fund Your Wallet",
    description: "Connect your bank or visit a local agent to add funds instantly to your digital wallet.",
    icon: Wallet,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  },
  {
    title: "Transact Globally",
    description: "Send money, pay bills, or cash out anywhere in the world with zero hidden fees.",
    icon: Globe,
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <SectionHeader
          badge="Simplicity First"
          title="Getting Started is"
          titleAccent="Easy"
          description="Follow three simple steps to unlock the full potential of your digital finances."
          align="center"
        />

        <div className="mt-20 grid gap-12 md:grid-cols-3 relative">
          {/* Connector Arrows (Desktop) */}
          <div className="hidden md:block absolute top-1/4 left-1/3 -translate-x-1/2 opacity-20">
            <ArrowRight className="h-12 w-12 text-primary" />
          </div>
          <div className="hidden md:block absolute top-1/4 left-2/3 -translate-x-1/2 opacity-20">
            <ArrowRight className="h-12 w-12 text-primary" />
          </div>

          {steps.map((step, idx) => (
            <div 
              key={step.title}
              className={cn(
                "group relative text-center space-y-6 p-8 rounded-[2.5rem] bg-card/30 border border-border/50 transition-all duration-500",
                "hover:border-primary/30 hover:shadow-2xl hover:-translate-y-3 animate-in fade-in slide-in-from-bottom-12"
              )}
              style={{ animationDelay: `${idx * 200}ms` }}
            >
              <div className={cn(
                "mx-auto h-20 w-20 flex items-center justify-center rounded-3xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6",
                step.bg,
                step.color
              )}>
                <step.icon className="h-10 w-10" />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Step Number Badge */}
              <div className="absolute -top-4 -left-4 h-10 w-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold shadow-lg">
                {idx + 1}
              </div>
              
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -mr-16 -mt-16 rounded-full group-hover:bg-primary/10 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
