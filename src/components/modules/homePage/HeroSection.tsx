import heroImage from "@/assets/images/heroImage.png";
import { Button } from "@/components/ui/button";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { Link } from "react-router";

export default function HeroBanner() {
  const { data: user } = useUserInfoQuery();
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-background via-background to-muted/50 text-foreground">
      {/* Decorative gradient blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-40 [mask-image:radial-gradient(60%_60%_at_50%_40%,black,transparent)]"
      >
        <div className="absolute left-1/2 top-[-10%] h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-primary blur-3xl" />
      </div>

      <div className="mx-auto grid container grid-cols-1 items-center gap-10 px-4 py-24 sm:py-32 md:grid-cols-2">
        {/* Copy */}
        <div className="text-center md:text-left">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium ring-1 ring-inset ring-primary/20">
            Digital Wallet Platform
          </span>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            One Wallet, Endless Possibilities
          </h1>

          <p className="mt-6 text-base/7 text-muted-foreground sm:text-lg/8">
            Secure your finances, manage transactions, and access your money
            globally. Designed for Users, Agents, and Admins with powerful
            role-based dashboards.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row md:justify-start">
            <Button
              asChild
              className="px-5 py-3 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              {user?.data?.email ? (
                <Link
                  to={
                    user?.data?.role === "ADMIN" ||
                    user?.data?.role === "SUPER_ADMIN"
                      ? "/admin"
                      : user?.data?.role === "AGENT"
                      ? "/agent"
                      : "/user"
                  }
                  className="flex items-center"
                >
                  Dashboard
                </Link>
              ) : (
                <Link to="/register">Get Started</Link>
              )}
            </Button>

            <Button
              asChild
              variant="outline"
              className="px-5 py-3 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Link to="/features">Explore Features</Link>
            </Button>
          </div>

          {/* Social proof */}
          <div className="mt-8 flex items-center justify-center gap-6 md:justify-start">
            <div className="text-xs text-muted-foreground">
              Trusted by Users & Agents
            </div>
            <div className="h-1 w-1 rounded-full bg-border" />
            <div className="text-xs text-muted-foreground">
              Bank-level security
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-2xl p-2">
          <img
            src={heroImage}
            alt="Hero"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
