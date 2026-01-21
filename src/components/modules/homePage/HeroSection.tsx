import heroImage from "@/assets/images/heroImage.png";
import { Button } from "@/components/ui/button";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { Link } from "react-router";
import { ArrowRight, Shield, Globe, Zap } from "lucide-react";

export default function HeroBanner() {
  const { data: user } = useUserInfoQuery();
  
  const dashboardLink = 
    user?.data?.role === "ADMIN" || user?.data?.role === "SUPER_ADMIN"
      ? "/admin"
      : user?.data?.role === "AGENT"
      ? "/agent"
      : "/user";

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background hero-mesh">
      {/* Mesh Background Decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full -mr-64 -mt-32 opacity-10 dark:opacity-5 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full -ml-48 -mb-24 opacity-8 dark:opacity-3 transition-all duration-1000" />

      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-12 md:py-20 lg:py-24 relative z-10">
        {/* Content */}
        <div className="text-center lg:text-left space-y-8 max-w-2xl mx-auto lg:mx-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm animate-in fade-in slide-in-from-top-4 duration-700">
            <Zap className="size-4 animate-pulse fill-primary/20" />
            <span className="text-sm font-semibold tracking-wide uppercase">The Future of Digital Finance</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] animate-in fade-in slide-in-from-left-6 duration-1000">
            One Wallet, <span className="text-primary italic">Endless</span> <br className="hidden md:block" /> Possibilities
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-left-8 duration-1000 delay-200">
            Securely manage your global transactions with bank-level encryption. 
            A unified platform for users, agents, and admins to navigate the digital economy with ease.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto px-8 py-6 rounded-2xl text-base font-bold shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all hover:-translate-y-1 active:scale-95 button-glow"
            >
              {user?.data?.email ? (
                <Link to={dashboardLink} className="flex items-center gap-2">
                  Go to Dashboard <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                </Link>
              ) : (
                <Link to="/register" className="flex items-center gap-2">
                  Get Started <ArrowRight className="size-5" />
                </Link>
              )}
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto px-8 py-6 rounded-2xl text-base font-semibold border-2 transition-all hover:bg-primary/5 active:scale-95"
            >
              <Link to="/features">Explore Features</Link>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-8 opacity-70 animate-in fade-in duration-1000 delay-500">
            <div className="flex items-center gap-2">
              <Shield className="size-5 text-primary" />
              <span className="text-sm font-medium">Bank-level Security</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="size-5 text-primary" />
              <span className="text-sm font-medium">Global Access</span>
            </div>
          </div>
        </div>

        {/* Visual / Image */}
        <div className="relative group animate-in fade-in slide-in-from-right-12 duration-1000 delay-300">
          <div className="absolute inset-0 bg-primary/5 blur-[80px] rounded-full group-hover:bg-primary/10 transition-colors duration-700" />
          <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl animate-float">
            <img
              src={heroImage}
              alt="Digital Wallet interface"
              className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
            {/* Glass decoration on image */}
            <div className="absolute bottom-8 left-8 right-8 p-6 glass-effect rounded-3xl border border-white/10 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Zap className="size-6 text-primary fill-primary/20" />
                </div>
                <div>
                  <h4 className="font-bold">Real-time Trading</h4>
                  <p className="text-sm text-muted-foreground">Transactions processed in milliseconds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
