import { Button } from "@/components/ui/button";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { Rocket } from "lucide-react";
import { Link } from "react-router";

export function AboutCTA() {
  const { data: user } = useUserInfoQuery(undefined);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-8 animate-bounce">
          <Rocket className="h-6 w-6" />
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Ready to Experience the <span className="text-primary italic">Future?</span>
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Join thousands of users who trust our wallet for everyday transactions. Get started today and manage your finances with absolute confidence.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="h-14 px-8 text-lg rounded-2xl button-glow" asChild>
            {user?.data?.email ? (
              <Link to="/">Go to Dashboard</Link>
            ) : (
              <Link to="/register">Create Your Account</Link>
            )}
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-2xl backdrop-blur-sm border-2" asChild>
            <Link to="/contact">Contact Our Team</Link>
          </Button>
        </div>
      </div>
      
      {/* Subtle Background Elements */}
      <div className="absolute -bottom-24 -right-24 h-64 w-64 bg-primary/10 blur-[100px] rounded-full" />
      <div className="absolute -top-24 -left-24 h-48 w-48 bg-primary/5 blur-[80px] rounded-full" />
    </section>
  );
}
