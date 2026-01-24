import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import {
  Calculator,
  CreditCard,
  Gift,
  HandCoins,
  PiggyBank,
  Send,
  Shield,
  TrendingDown,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { Link } from "react-router";

const feeCategories = [
  {
    title: "Registration",
    description: "Start your digital wallet journey with these benefits",
    icon: Gift,
    color: "bg-green-500/10 text-green-500",
    items: [
      {
        name: "Registration Bonus",
        description: "৳50 automatically credited to your wallet",
        type: "bonus",
        amount: "+৳50",
      },
      {
        name: "Registration Fee",
        description: "Account creation is completely free",
        type: "free",
        amount: "FREE",
      },
      {
        name: "Welcome Benefits",
        description:
          "Immediate wallet activation with default transaction limits",
        type: "benefit",
        amount: "ACTIVE",
      },
    ],
  },
  {
    title: "Transaction Fees",
    description: "Transparent and competitive fee structure",
    icon: Calculator,
    color: "bg-blue-500/10 text-blue-500",
    items: [
      {
        name: "Send Money (P2P)",
        description: "Fixed fee per transfer, no commission",
        type: "fixed",
        amount: "৳5",
      },
      {
        name: "Cash-In (Agent)",
        description: "2% fee, 50% goes to agent, 50% to system",
        type: "percentage",
        amount: "2%",
      },
      {
        name: "Cash-Out (Agent)",
        description: "2% fee, 50% goes to agent, 50% to system",
        type: "percentage",
        amount: "2%",
      },
      {
        name: "Withdrawal (Direct)",
        description: "System withdrawal with no fees",
        type: "free",
        amount: "FREE",
      },
    ],
  },
  {
    title: "Transaction Limits",
    description: "Default limits for secure transactions",
    icon: Shield,
    color: "bg-purple-500/10 text-purple-500",
    items: [
      {
        name: "Daily Limit",
        description: "Maximum transaction amount per day",
        type: "limit",
        amount: "৳50,000",
      },
      {
        name: "Monthly Limit",
        description: "Maximum transaction amount per month",
        type: "limit",
        amount: "৳500,000",
      },
      {
        name: "Minimum Transaction",
        description: "Smallest allowed transaction amount",
        type: "limit",
        amount: "৳0.01",
      },
    ],
  },
  {
    title: "User Benefits",
    description: "Comprehensive benefits for all users",
    icon: PiggyBank,
    color: "bg-orange-500/10 text-orange-500",
    items: [
      {
        name: "Free Registration",
        description: "No signup costs or hidden charges",
        type: "benefit",
        amount: "FREE",
      },
      {
        name: "Welcome Bonus",
        description: "৳50 starting balance for new users",
        type: "bonus",
        amount: "+৳50",
      },
      {
        name: "Secure Transfers",
        description: "Low fixed fees for P2P transfers",
        type: "benefit",
        amount: "SECURE",
      },
      {
        name: "Agent Network",
        description: "Access to cash-in/out services",
        type: "benefit",
        amount: "AVAILABLE",
      },
    ],
  },
];

const costExamples = [
  {
    title: "Send Money Example",
    icon: Send,
    color: "bg-blue-500/10 text-blue-500",
    calculation: [
      "Send ৳1,000 to friend",
      "Fee: ৳5",
      "Total deducted: ৳1,005",
      "Receiver gets: ৳1,000",
    ],
  },
  {
    title: "Cash-In Example",
    icon: TrendingUp,
    color: "bg-green-500/10 text-green-500",
    calculation: [
      "Cash-in ৳1,000 through agent",
      "Fee: ৳20 (2%)",
      "Agent commission: ৳10",
      "System fee: ৳10",
      "You pay: ৳1,020",
      "Your wallet credited: ৳1,000",
    ],
  },
  {
    title: "Cash-Out Example",
    icon: TrendingDown,
    color: "bg-red-500/10 text-red-500",
    calculation: [
      "Cash-out ৳1,000 through agent",
      "Fee: ৳20 (2%)",
      "Agent commission: ৳10",
      "System fee: ৳10",
      "Deducted from wallet: ৳1,020",
      "You receive: ৳1,000",
    ],
  },
];

export default function Pricing() {
  const { data: user } = useUserInfoQuery();

  return (
    <main className="bg-background overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-24 pb-16 md:pt-32 md:pb-24 hero-mesh">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full -mr-64 -mt-32 opacity-10 dark:opacity-5 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full -ml-48 -mb-24 opacity-8 dark:opacity-3 transition-all duration-1000" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeader
              badge="Fee Structure"
              title="Transparent"
              titleAccent="Pricing"
              description="Clear and competitive fee structure with no hidden costs. Understand exactly what you pay for each transaction."
              align="center"
            />
          </div>
        </div>
      </section>

      {/* Fee Categories */}
      <section className="relative isolate overflow-hidden py-24 sm:py-32 bg-background">
        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary blur-[100px] rounded-full" />
        </div>

        <div className="mx-auto container px-6 lg:px-12">
          <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
            {feeCategories.map((category, idx) => (
              <Card
                key={category.title}
                className="group relative border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-12"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                {/* Decorative accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -mr-16 -mt-16 rounded-full group-hover:bg-primary/10 transition-colors duration-500" />

                <CardHeader className="space-y-4 pb-4">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${category.color} group-hover:scale-110 transition-transform duration-500`}
                  >
                    <category.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {category.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between p-3 rounded-lg bg-card/30 border border-border/30"
                    >
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm">{item.name}</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          {item.description}
                        </p>
                      </div>
                      <div
                        className={`ml-4 px-3 py-1 rounded-full text-xs font-bold ${
                          item.type === "free"
                            ? "bg-green-500/10 text-green-500"
                            : item.type === "bonus"
                              ? "bg-blue-500/10 text-blue-500"
                              : item.type === "fixed"
                                ? "bg-orange-500/10 text-orange-500"
                                : item.type === "percentage"
                                  ? "bg-purple-500/10 text-purple-500"
                                  : item.type === "limit"
                                    ? "bg-red-500/10 text-red-500"
                                    : "bg-gray-500/10 text-gray-500"
                        }`}
                      >
                        {item.amount}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Examples */}
      <section className="relative isolate overflow-hidden py-24 sm:py-32 bg-background border-t border-muted/40">
        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary blur-[100px] rounded-full" />
        </div>

        <div className="mx-auto container px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeader
              badge="Examples"
              title="Cost"
              titleAccent="Calculations"
              description="See exactly how fees are calculated for different transaction types."
              align="center"
            />
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
            {costExamples.map((example, idx) => (
              <Card
                key={example.title}
                className="group border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-12"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <CardHeader className="space-y-4 pb-4">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${example.color} group-hover:scale-110 transition-transform duration-500 mx-auto`}
                  >
                    <example.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl font-bold text-center group-hover:text-primary transition-colors duration-300">
                    {example.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <div className="space-y-2">
                    {example.calculation.map((line, lineIdx) => (
                      <div
                        key={lineIdx}
                        className={`text-sm ${
                          line.includes("Fee:")
                            ? "text-orange-500 font-semibold"
                            : line.includes("Total") ||
                                line.includes("You pay") ||
                                line.includes("Deducted")
                              ? "text-red-500 font-semibold"
                              : line.includes("Receiver") ||
                                  line.includes("credited") ||
                                  line.includes("receive")
                                ? "text-green-500 font-semibold"
                                : "text-muted-foreground"
                        }`}
                      >
                        {line}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* System Features */}
      <section className="relative isolate overflow-hidden py-24 sm:py-32 bg-background">
        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary blur-[100px] rounded-full" />
        </div>

        <div className="mx-auto container px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              badge="Features"
              title="System"
              titleAccent="Benefits"
              description="Advanced features that make our digital wallet secure and efficient."
              align="center"
            />

            <div className="mt-16 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Zap,
                  title: "Real-time Processing",
                  description: "Instant transaction completion",
                },
                {
                  icon: CreditCard,
                  title: "Multi-currency Support",
                  description: "BDT default currency",
                },
                {
                  icon: Users,
                  title: "Mobile-friendly",
                  description: "Accessible wallet management",
                },
                {
                  icon: Shield,
                  title: "Secure Authentication",
                  description: "JWT-based security",
                },
                {
                  icon: HandCoins,
                  title: "Refund Protection",
                  description: "Transaction reversal capabilities",
                },
                {
                  icon: Calculator,
                  title: "Configurable Fees",
                  description: "Adjustable system settings",
                },
              ].map((feature, idx) => (
                <Card
                  key={feature.title}
                  className="group border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg overflow-hidden animate-in fade-in slide-in-from-bottom-12"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative isolate overflow-hidden py-24 sm:py-32 bg-background border-t border-muted/40">
        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary blur-[100px] rounded-full" />
        </div>

        <div className="mx-auto container px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeader
              badge="Get Started"
              title="Ready to"
              titleAccent="Begin?"
              description="Join thousands of users enjoying transparent fees and secure transactions."
              align="center"
            />

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto px-8 py-6 rounded-2xl text-base font-bold shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all hover:-translate-y-1 active:scale-95 button-glow"
              >
                {user?.data?.email ? (
                  <Link to="/">Go to Dashboard</Link>
                ) : (
                  <Link to="/register">Register Now</Link>
                )}
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto px-8 py-6 rounded-2xl text-base font-semibold border-2 transition-all hover:bg-primary/5 active:scale-95"
              >
                <Link to="/contact-us">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
