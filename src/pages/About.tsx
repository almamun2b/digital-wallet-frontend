import storyImage from "@/assets/images/story.jpg";
import { Button } from "@/components/ui/button";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { Globe, ShieldCheck, Users, Zap } from "lucide-react";
import { Link } from "react-router";

const coreValues = [
  {
    name: "Security",
    description:
      "Bank-level encryption and role-based access to keep your money safe.",
    icon: ShieldCheck,
  },
  {
    name: "Accessibility",
    description:
      "Designed to work anytime, anywhere — even in remote communities.",
    icon: Globe,
  },
  {
    name: "Innovation",
    description:
      "Constantly improving with new features and smarter user experiences.",
    icon: Zap,
  },
  {
    name: "Community",
    description: "Connecting users, agents, and admins in a trusted ecosystem.",
    icon: Users,
  },
];

const teamMembers = [
  {
    name: "John Doe",
    role: "Founder & CEO",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Jane Smith",
    role: "CTO",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Alex Lee",
    role: "Lead Developer",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

export default function AboutPage() {
  const { data: user } = useUserInfoQuery();
  return (
    <main className="bg-background">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden py-24 sm:py-32">
        <div className="mx-auto container px-4 lg:px-8 text-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            About Our Digital Wallet
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We are building a secure, accessible, and user-friendly platform
            that empowers individuals and businesses to manage money
            effortlessly — anytime, anywhere.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-muted/40 py-20 sm:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-base font-semibold text-primary">Our Story</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Designed for Everyone, Built for Trust
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Our journey began with a simple mission — to make digital
              transactions easier and safer for everyone. Whether you’re sending
              money to loved ones, depositing cash through agents, or managing
              large-scale transactions as an admin, our platform delivers a
              seamless experience tailored to your needs.
            </p>
          </div>
          <div className="rounded-xl bg-card p-8 shadow-sm">
            <img
              src={storyImage}
              alt="Digital Wallet Story"
              className="rounded-lg w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-6xl">
          <h2 className="text-base font-semibold text-primary">Our Values</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What We Stand For
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Our platform is built on values that define every feature and
            interaction we deliver.
          </p>
        </div>

        <div className="mt-16 grid max-w-5xl mx-auto grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {coreValues.map((value) => (
            <div
              key={value.name}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <value.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {value.name}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-muted/40 py-20 sm:py-28">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <h2 className="text-base font-semibold text-primary">
            Meet Our Team
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            People Behind the Wallet
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            A passionate team of developers, designers, and innovators working
            together to deliver a seamless digital finance experience.
          </p>
        </div>

        <div className="mt-16 grid max-w-5xl mx-auto grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="rounded-xl bg-card p-6 shadow-md transition hover:-translate-y-0.5 hover:scale-105 hover:shadow-lg text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="mx-auto h-24 w-24 rounded-full object-cover"
              />
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {member.name}
              </h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 text-center">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready to Experience Secure Digital Payments?
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Join thousands of users who trust our wallet for everyday
            transactions.
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
