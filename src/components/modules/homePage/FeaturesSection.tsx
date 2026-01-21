import { BarChart, CreditCard, ShieldCheck, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SectionHeader } from "@/components/shared/SectionHeader";

export default function Features() {
  const features = [
    {
      name: "User Dashboard",
      description:
        "Check wallet balance, send/receive money, and manage your profile with ease. Includes transaction history, filtering, and quick actions.",
      icon: CreditCard,
      color: "bg-blue-500/10 text-blue-500",
    },
    {
      name: "Agent Dashboard",
      description:
        "Assist users with deposits and withdrawals, track cash-in/out activity, and earn commissions through a secure and streamlined process.",
      icon: Users,
      color: "bg-green-500/10 text-green-500",
    },
    {
      name: "Admin Dashboard",
      description:
        "Monitor the entire system: manage users and agents, review transactions with advanced filters, and adjust service fees or limits.",
      icon: BarChart,
      color: "bg-purple-500/10 text-purple-500",
    },
    {
      name: "Bank-Level Security",
      description:
        "All dashboards are protected with advanced encryption, role-based authentication, and persistent session management.",
      icon: ShieldCheck,
      color: "bg-orange-500/10 text-orange-500",
    },
  ];

  return (
    <section className="relative isolate overflow-hidden py-24 sm:py-32 bg-background">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary blur-[100px] rounded-full" />
      </div>

      <div className="mx-auto container px-6 lg:px-12">
        <SectionHeader
          badge="Key Features"
          title="Role-Based"
          titleAccent="Dashboards"
          description="Tailored experiences for every user. Whether you're managing personal funds or overseeing global operations, our dashboards give you absolute control."
        />

        <div className="mx-auto mt-16 lg:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <Card 
              key={feature.name} 
              className="group relative border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-12"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <CardHeader className="space-y-4">
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${feature.color} group-hover:scale-110 transition-transform duration-500`}>
                  <feature.icon className="h-7 w-7" />
                </div>
                <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                  {feature.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  {feature.description}
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
