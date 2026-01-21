import { SectionHeader } from "@/components/shared/SectionHeader";
import { CheckCircle2, ShieldCheck, Zap, Users } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    { title: "24/7", label: "Access Anytime", icon: Zap },
    { title: "100%", label: "Secure Transactions", icon: ShieldCheck },
    { title: "0 Fees", label: "Peer Transfers", icon: CheckCircle2 },
    { title: "Multi-Role", label: "User, Agent & Admin", icon: Users },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-muted/30 py-20 sm:py-32">
      <div className="mx-auto container px-6 lg:px-12">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left Side - Text */}
          <SectionHeader
            align="left"
            badge="About Our Platform"
            title="Empowering"
            titleAccent="Secure & Seamless"
            description="Our Digital Wallet platform is engineered to transform personal finance into a frictionless experience. Whether you’re sending money overseas or managing local agent cash-outs, our infrastructure ensures speed without compromising security."
          />

          {/* Right Side - Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-in fade-in slide-in-from-right-8 duration-1000">
            {highlights.map((item, idx) => (
              <div 
                key={idx} 
                className="group p-8 rounded-4xl bg-background border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <item.icon className="size-6 text-primary" />
                </div>
                <h3 className="text-3xl font-black text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
