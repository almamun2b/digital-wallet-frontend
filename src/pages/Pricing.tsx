import { Button } from "@/components/ui/button";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { Check } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const pricingPlans = [
  {
    name: "Basic",
    price: "৳0",
    description: "Ideal for individuals starting out with our wallet.",
    features: [
      "Wallet overview",
      "Send & receive money",
      "Transaction history (last 30 days)",
      "Basic support",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "৳10/mo",
    description: "For regular users who need more control and features.",
    features: [
      "Everything in Basic",
      "Extended transaction history (6 months)",
      "Priority support",
      "Deposit & Withdraw via agent",
      "Advanced analytics",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "৳30/mo",
    description: "For agents, businesses, or admins managing multiple users.",
    features: [
      "Everything in Pro",
      "Bulk transfers",
      "Agent/Team management",
      "Advanced reporting & filters",
      "Custom limits & fees",
    ],
    popular: false,
  },
];

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState(pricingPlans[1].name);
  const { data: user } = useUserInfoQuery();

  return (
    <main className="bg-background">
      {/* Header */}
      <section className="py-24 sm:py-32 text-center">
        <div className="mx-auto container px-4 lg:px-8 max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Pricing Plans
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Choose the plan that fits your needs. Our pricing is transparent,
            simple, and designed to grow with you.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto container px-4 lg:px-8 max-w-6xl grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan) => {
            const isSelected = selectedPlan === plan.name;
            return (
              <div
                key={plan.name}
                className={`cursor-pointer rounded-2xl border p-8 shadow-sm transition hover:shadow-lg ${
                  isSelected
                    ? "border-primary bg-primary/10"
                    : plan.popular
                    ? "border-primary/40 bg-card"
                    : "border-muted/40 bg-card"
                }`}
                onClick={() => setSelectedPlan(plan.name)}
              >
                <h3
                  className={`text-xl font-semibold ${
                    isSelected ? "text-primary" : "text-foreground"
                  }`}
                >
                  {plan.name}
                </h3>
                <p className="mt-2 text-3xl font-bold text-foreground">
                  {plan.price}
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  {plan.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-8 w-full rounded-lg px-6 py-3 font-semibold shadow transition ${
                    isSelected
                      ? "bg-primary text-primary-foreground hover:opacity-90"
                      : "border bg-card text-foreground hover:bg-muted"
                  }`}
                >
                  {isSelected ? "Selected" : "Choose Plan"}
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 text-center">
        <div className="mx-auto container px-4 lg:px-8 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready to get started?
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Select the plan that fits your needs and start using your digital
            wallet today.
          </p>
          <div className="mt-8 flex justify-center gap-x-6">
            <Button asChild>
              {user?.data?.email ? (
                <Link to="/">Dashboard</Link>
              ) : (
                <Link to="/register">Get Started</Link>
              )}
            </Button>
            <Button asChild variant="outline">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
