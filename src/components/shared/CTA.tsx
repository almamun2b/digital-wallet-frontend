import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { Link } from "react-router";

interface CTAProps {
  badge?: string;
  title: string;
  titleAccent?: string;
  description: string;
  primaryText?: string;
  primaryLink?: string;
  secondaryText?: string;
  secondaryLink?: string;
  variant?: "default" | "gradient";
}

export function CTA({
  badge = "Get Started",
  title,
  titleAccent,
  description,
  primaryText,
  primaryLink,
  secondaryText = "Learn More",
  secondaryLink = "/contact-us",
  variant = "default",
}: CTAProps) {
  const { data: user } = useUserInfoQuery(undefined);

  const getPrimaryButtonContent = () => {
    if (primaryText && primaryLink) {
      return <Link to={primaryLink}>{primaryText}</Link>;
    }
    return user?.data?.email ? (
      <Link to="/">Go to Dashboard</Link>
    ) : (
      <Link to="/register">Register Now</Link>
    );
  };

  return (
    <section
      className={`relative isolate overflow-hidden py-24 sm:py-32 ${
        variant === "gradient"
          ? "bg-gradient-to-br from-primary/5 to-primary/10"
          : "bg-background border-t border-muted/40"
      }`}
    >
      {/* Background decoration */}
      {variant === "default" && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary blur-[100px] rounded-full" />
        </div>
      )}

      <div className="mx-auto container px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          {variant === "default" ? (
            <div className="space-y-6">
              <Badge className="px-4 py-2 bg-primary/10 text-primary border-primary/20">
                {badge}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold">
                {title}{" "}
                {titleAccent && (
                  <span className="text-primary">{titleAccent}</span>
                )}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {description}
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
                {badge}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {title}{" "}
                {titleAccent && (
                  <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    {titleAccent}
                  </span>
                )}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                {description}
              </p>
            </div>
          )}

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto px-8 py-6 rounded-2xl text-base font-bold shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all hover:-translate-y-1 active:scale-95 button-glow"
            >
              {getPrimaryButtonContent()}
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto px-8 py-6 rounded-2xl text-base font-semibold border-2 transition-all hover:bg-primary/5 active:scale-95"
            >
              <Link to={secondaryLink}>{secondaryText}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
