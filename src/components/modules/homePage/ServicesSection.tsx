import { Send, Smartphone, TrendingUp, Wallet } from "lucide-react";

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
    <section className="relative isolate overflow-hidden bg-background py-24 sm:py-32">
      <div className="mx-auto container px-4">
        <div className="mx-auto container text-center">
          <h2 className="text-base font-semibold text-primary">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything You Need in One Wallet
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            From instant transfers to smart money insights, our services are
            built to make your financial life simple and secure.
          </p>
        </div>

        <div className="mx-auto mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.name}
              className="flex flex-col items-center text-center rounded-xl border bg-card p-6 shadow-md transition hover:-translate-y-0.5 hover:scale-105 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {service.name}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
