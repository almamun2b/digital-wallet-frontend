import { BarChart, CreditCard, ShieldCheck, Users } from "lucide-react";

export default function Features() {
  const features = [
    {
      name: "User Dashboard",
      description:
        "Check wallet balance, send/receive money, and manage your profile with ease. Includes transaction history, filtering, and quick actions.",
      icon: CreditCard,
    },
    {
      name: "Agent Dashboard",
      description:
        "Assist users with deposits and withdrawals, track cash-in/out activity, and earn commissions through a secure and streamlined process.",
      icon: Users,
    },
    {
      name: "Admin Dashboard",
      description:
        "Monitor the entire system: manage users and agents, review transactions with advanced filters, and adjust service fees or limits.",
      icon: BarChart,
    },
    {
      name: "Bank-Level Security",
      description:
        "All dashboards are protected with advanced encryption, role-based authentication, and persistent session management.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="relative isolate overflow-hidden py-24 sm:py-32">
      <div className="mx-auto container px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold text-primary">Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Role-Based Dashboards for Everyone
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Whether you’re a User, Agent, or Admin, our digital wallet platform
            is designed with tailored dashboards and features just for you.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:mt-20 lg:max-w-none lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {feature.name}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
