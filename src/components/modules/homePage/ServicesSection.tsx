import { Send, Smartphone, TrendingUp, Wallet, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Link } from "react-router";

const services = [
  {
    name: "Instant Transfers",
    description:
      "Send and receive money instantly to friends, family, or businesses without any delays or hidden fees.",
    icon: Send,
  },
  {
    name: "Wallet Management",
    description:
      "Easily deposit, withdraw, and track your balance with a secure digital wallet that’s always with you.",
    icon: Wallet,
  },
  {
    name: "Smart Insights",
    description:
      "Track your spending, view transaction trends, and make smarter financial decisions with real-time analytics.",
    icon: TrendingUp,
  },
  {
    name: "Mobile First",
    description:
      "Access your wallet anywhere with a seamless, mobile-optimized experience designed for all devices.",
    icon: Smartphone,
  },
];

export default function ServicesSection() {
  return (
    <section className="relative isolate overflow-hidden bg-muted/30 py-24 sm:py-32">
      <div className="mx-auto container px-6 lg:px-12">
        <SectionHeader
          badge="Our Services"
          title="Everything You"
          titleAccent="Need in One Wallet"
          description="From instant transfers to smart money insights, our services are built to make your financial life simple and secure."
        />

        <div className="mx-auto mt-16 lg:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <Card 
              key={service.name} 
              className="group border-border/50 bg-background hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl animate-in fade-in slide-in-from-bottom-12"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <CardHeader className="text-center space-y-4">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary group-hover:rotate-6 transition-all duration-500">
                  <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                </div>
                <CardTitle className="text-2xl font-bold transition-colors">
                  {service.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
                <Link to="/features" className="inline-flex items-center text-sm font-bold text-primary hover:underline group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="size-4 ml-1 opacity-0 group-hover:opacity-100 transition-all" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
