import {
  BarChart,
  CreditCard,
  Download,
  Filter,
  Send,
  ShieldCheck,
  Upload,
  UserCog,
  Users,
} from "lucide-react";

const featureCategories = [
  {
    title: "User Features",
    description:
      "Tools designed to give users full control over their wallet and transactions.",
    features: [
      {
        name: "Wallet Overview",
        description:
          "Check your balance, view insights, and manage transactions with ease.",
        icon: CreditCard,
      },
      {
        name: "Send & Receive Money",
        description:
          "Instant transfers to other users via phone, email, or wallet ID.",
        icon: Send,
      },
      {
        name: "Deposit & Withdraw",
        description:
          "Seamlessly add or withdraw funds through agents or bank integrations.",
        icon: Download,
      },
      {
        name: "Transaction History",
        description:
          "Detailed logs with filtering by type, date, and amount for clarity.",
        icon: Filter,
      },
    ],
  },
  {
    title: "Agent Features",
    description:
      "Dedicated tools for agents to assist users with secure transactions.",
    features: [
      {
        name: "Cash-In Assistance",
        description: "Deposit money into a user’s wallet in real time.",
        icon: Upload,
      },
      {
        name: "Cash-Out Assistance",
        description: "Help users withdraw funds securely and instantly.",
        icon: Download,
      },
      {
        name: "Commission Tracking",
        description:
          "Track earnings from transactions and withdrawals over time.",
        icon: BarChart,
      },
    ],
  },
  {
    title: "Admin Features",
    description:
      "System-wide tools to monitor, manage, and optimize the platform.",
    features: [
      {
        name: "Manage Users & Agents",
        description:
          "Approve, suspend, or block users and agents with role-based access.",
        icon: Users,
      },
      {
        name: "Adjust Fees & Limits",
        description:
          "Set transaction limits, fees, and commission rules dynamically.",
        icon: UserCog,
      },
      {
        name: "Advanced Analytics",
        description:
          "View overall transaction volume, trends, and reports in real time.",
        icon: BarChart,
      },
    ],
  },
  {
    title: "Security Features",
    description:
      "Bank-level protection with multiple layers of authentication and monitoring.",
    features: [
      {
        name: "Encryption",
        description:
          "All transactions are secured with advanced encryption protocols.",
        icon: ShieldCheck,
      },
      {
        name: "Role-Based Access",
        description:
          "Separate dashboards ensure each role only sees what’s necessary.",
        icon: ShieldCheck,
      },
      {
        name: "Persistent Sessions",
        description:
          "Stay logged in securely while reducing unauthorized access risks.",
        icon: ShieldCheck,
      },
    ],
  },
];

export default function Features() {
  return (
    <main className="bg-background">
      {/* Page Header */}
      <section className="py-24 sm:py-32 text-center">
        <div className="mx-auto container px-4 lg:px-8 max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Features That Empower Every Role
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Whether you’re a user, agent, or admin, our digital wallet is packed
            with powerful tools tailored to your needs.
          </p>
        </div>
      </section>

      {/* Feature Categories */}
      {featureCategories.map((category, idx) => (
        <section key={idx} className="py-20 sm:py-28 border-t border-muted/40">
          <div className="mx-auto container px-4 lg:px-8">
            <div className="max-w-3xl text-center mx-auto">
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                {category.title}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {category.description}
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {category.features.map((feature) => (
                <div
                  key={feature.name}
                  className="flex flex-col items-center text-center rounded-xl border bg-card p-6 shadow-md transition hover:-translate-y-0.5 hover:scale-105 hover:shadow-lg"
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
      ))}
    </main>
  );
}
