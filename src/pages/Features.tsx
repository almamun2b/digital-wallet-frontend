import { CTA } from "@/components/shared/CTA";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Activity,
  BarChart,
  CheckCircle,
  CreditCard,
  Database,
  Download,
  Eye,
  Filter,
  Fingerprint,
  Globe,
  Lock,
  PieChart,
  Receipt,
  Send,
  Settings,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  Upload,
  UserCog,
  Users,
  Zap,
} from "lucide-react";

const featureCategories = [
  {
    title: "User",
    description:
      "Empowering users with intuitive tools for complete financial control.",
    icon: Users,
    color: "from-blue-500/20 to-cyan-500/20",
    features: [
      {
        name: "Smart Wallet Dashboard",
        description:
          "Get a complete overview of your finances with real-time balance tracking, spending insights, and personalized recommendations.",
        icon: CreditCard,
        color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
        stats: ["Real-time updates", "AI insights", "Custom views"],
      },
      {
        name: "Instant Money Transfer",
        description:
          "Send and receive money instantly using phone numbers, emails, or wallet IDs. Cross-border transfers in seconds.",
        icon: Send,
        color: "bg-green-500/10 text-green-500 border-green-500/20",
        stats: ["Instant delivery", "Global reach", "Zero fees"],
      },
      {
        name: "Flexible Funding Options",
        description:
          "Add funds through multiple channels - bank transfers, agent deposits, or direct integrations. Withdraw anytime, anywhere.",
        icon: Download,
        color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
        stats: ["Multiple channels", "Instant processing", "Low fees"],
      },
      {
        name: "Advanced Transaction Management",
        description:
          "Track every transaction with powerful filtering, search, and export capabilities. Get detailed analytics and reports.",
        icon: Filter,
        color: "bg-orange-500/10 text-orange-500 border-orange-500/20",
        stats: ["Smart search", "Custom filters", "PDF exports"],
      },
    ],
  },
  {
    title: "Agent",
    description:
      "Comprehensive tools for agents to provide seamless financial services.",
    icon: UserCog,
    color: "from-emerald-500/20 to-teal-500/20",
    features: [
      {
        name: "Cash-In Operations",
        description:
          "Process customer deposits efficiently with real-time verification and instant wallet crediting.",
        icon: Upload,
        color: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
        stats: ["Real-time processing", "Auto verification", "SMS alerts"],
      },
      {
        name: "Cash-Out Services",
        description:
          "Help customers withdraw funds securely with multiple payout options and fraud detection.",
        icon: Download,
        color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
        stats: ["Secure processing", "Multiple options", "Fraud detection"],
      },
      {
        name: "Performance Analytics",
        description:
          "Track earnings, transaction volumes, and customer satisfaction with comprehensive dashboards.",
        icon: BarChart,
        color: "bg-violet-500/10 text-violet-500 border-violet-500/20",
        stats: ["Revenue tracking", "Customer metrics", "Growth insights"],
      },
    ],
  },
  {
    title: "Admin",
    description:
      "Enterprise-grade tools for complete platform management and oversight.",
    icon: Settings,
    color: "from-red-500/20 to-pink-500/20",
    features: [
      {
        name: "User Management System",
        description:
          "Complete control over user accounts with role-based access, bulk operations, and audit trails.",
        icon: Users,
        color: "bg-red-500/10 text-red-500 border-red-500/20",
        stats: ["Role management", "Bulk operations", "Audit logs"],
      },
      {
        name: "Dynamic Configuration",
        description:
          "Adjust transaction limits, fees, and commission structures in real-time based on market conditions.",
        icon: Settings,
        color: "bg-indigo-500/10 text-indigo-500 border-indigo-500/20",
        stats: ["Real-time updates", "Market responsive", "A/B testing"],
      },
      {
        name: "Business Intelligence",
        description:
          "Advanced analytics with custom reports, predictive insights, and performance monitoring.",
        icon: PieChart,
        color: "bg-pink-500/10 text-pink-500 border-pink-500/20",
        stats: ["Custom reports", "Predictive analytics", "KPI tracking"],
      },
    ],
  },
  {
    title: "Security",
    description:
      "Bank-level security with cutting-edge technology to protect your assets.",
    icon: ShieldCheck,
    color: "from-amber-500/20 to-orange-500/20",
    features: [
      {
        name: "Military-Grade Encryption",
        description:
          "End-to-end encryption with AES-256 standards and multi-layer security protocols.",
        icon: Lock,
        color: "bg-amber-500/10 text-amber-500 border-amber-500/20",
        stats: [
          "AES-256 encryption",
          "Multi-layer security",
          "Compliance ready",
        ],
      },
      {
        name: "Biometric Authentication",
        description:
          "Advanced biometric security including fingerprint, face recognition, and behavioral analysis.",
        icon: Fingerprint,
        color: "bg-lime-500/10 text-lime-500 border-lime-500/20",
        stats: ["Biometric login", "Face recognition", "Behavior analysis"],
      },
      {
        name: "Fraud Detection AI",
        description:
          "AI-powered fraud detection with real-time monitoring and automatic threat prevention.",
        icon: Eye,
        color: "bg-teal-500/10 text-teal-500 border-teal-500/20",
        stats: ["AI monitoring", "Real-time alerts", "Auto prevention"],
      },
    ],
  },
];

const additionalFeatures = [
  {
    icon: Globe,
    title: "Global Accessibility",
    description:
      "Access your wallet from anywhere in the world with multi-language support.",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description:
      "Optimized mobile experience with native apps for iOS and Android.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Infrastructure",
    description:
      "Built to handle millions of transactions with 99.9% uptime guarantee.",
  },
  {
    icon: Database,
    title: "Data Backup",
    description:
      "Automatic encrypted backups with disaster recovery protocols.",
  },
  {
    icon: Activity,
    title: "Real-time Monitoring",
    description:
      "24/7 system monitoring with instant issue detection and resolution.",
  },
  {
    icon: Receipt,
    title: "Instant Receipts",
    description:
      "Digital receipts for every transaction with detailed breakdowns.",
  },
];

export default function Features() {
  return (
    <main className="bg-background overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-24 pb-16 md:pt-32 md:pb-24 hero-mesh">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 blur-[150px] rounded-full -mr-64 -mt-32 opacity-10 dark:opacity-5 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full -ml-48 -mb-24 opacity-8 dark:opacity-3 transition-all duration-1000" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="mb-6 px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20">
              <Zap className="w-4 h-4 mr-2" />
              Industry-Leading Features
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
              Powerful Tools for
              <span className="text-primary bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                {" "}
                Every Role
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
              Whether you're a user, agent, or admin, our digital wallet
              platform provides enterprise-grade tools tailored to your specific
              needs with unmatched security and performance.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Categories */}
      {featureCategories.map((category, categoryIdx) => (
        <section
          key={categoryIdx}
          className="relative isolate overflow-hidden py-24 sm:py-32"
        >
          {/* Background decoration */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5`}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[100px] rounded-full animate-pulse" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 blur-[100px] rounded-full animate-pulse delay-1000" />
          </div>

          <div className="mx-auto container px-6 lg:px-12 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-6">
                <div
                  className={`p-3 rounded-2xl bg-gradient-to-br ${category.color}`}
                >
                  <category.icon className="h-8 w-8 text-primary" />
                </div>
                <Badge className="px-4 py-2 bg-primary/10 text-primary border-primary/20">
                  {category.title} Features
                </Badge>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {category.title} <span className="text-primary">Solutions</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {category.description}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {category.features.map((feature, featureIdx) => (
                <Card
                  key={feature.name}
                  className="group relative border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 hover:shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-12"
                  style={{
                    animationDelay: `${featureIdx * 150}ms`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <CardHeader className="space-y-4 pb-4">
                    <div className="flex items-start justify-between">
                      <div
                        className={`p-3 rounded-xl ${feature.color} border group-hover:scale-110 transition-transform duration-500`}
                      >
                        <feature.icon className="h-6 w-6" />
                      </div>
                      <CheckCircle className="h-5 w-5 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300 mb-2">
                        {feature.name}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2">
                      {feature.stats.map((stat, statIdx) => (
                        <Badge
                          key={statIdx}
                          variant="secondary"
                          className="text-xs px-2 py-1 bg-muted/50"
                        >
                          {stat}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -mr-16 -mt-16 rounded-full group-hover:bg-primary/10 transition-colors duration-500" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 -ml-12 -mb-12 rounded-full group-hover:bg-primary/10 transition-colors duration-500 delay-100" />
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Additional Features Grid */}
      <section className="relative py-24 sm:py-32 bg-muted/30">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <SectionHeader
              badge="Additional Features"
              title="More Reasons to"
              titleAccent="Choose Us"
              description="Discover the extra capabilities that make our platform truly exceptional."
              align="center"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        badge="Get Started"
        title="Ready to"
        titleAccent="Begin?"
        description="Join thousands of users, agents, and admins who are already using our platform to manage their digital finances with confidence and ease."
      />
    </main>
  );
}
