import heroImage from "@/assets/images/story.jpg"; // Reusing for placeholder
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { Smartphone, Laptop, Zap } from "lucide-react";

export default function AppShowcase() {
  return (
    <section className="py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <div className="relative animate-in fade-in slide-in-from-left-12 duration-1000">
            <div className="absolute -inset-10 bg-primary/20 blur-[100px] rounded-full opacity-50 animate-pulse" />
            <div className="relative z-10 rounded-[3rem] overflow-hidden border-8 border-background shadow-[0_0_50px_rgba(0,0,0,0.2)] dark:shadow-[0_0_50px_rgba(255,255,255,0.05)]">
              <img 
                src={heroImage} 
                alt="App Interface" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/40 to-transparent" />
            </div>
            
            {/* Floating UI Element */}
            <div className="absolute -bottom-10 -right-10 z-20 glass-effect p-6 rounded-3xl border border-white/20 shadow-2xl animate-float hidden md:block">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-bold">Transfer Success!</p>
                  <p className="text-xs text-muted-foreground">$1,200.00 to Alex Moore</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8 animate-in fade-in slide-in-from-right-12 duration-1000 delay-300">
            <SectionHeader
              badge="Seamless Experience"
              title="One Platform for All Your"
              titleAccent="Devices"
              description="Whether you're on the go with your smartphone or managing complex operations from your desktop, our interface adapts perfectly to your needs."
              align="left"
              className="animate-none"
            />
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start group">
                <div className="h-12 w-12 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <Smartphone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Mobile Native Apps</h4>
                  <p className="text-muted-foreground">Download our iOS and Android apps for lightning-fast payments on the move.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start group text-slate-400">
                <div className="h-12 w-12 shrink-0 rounded-2xl bg-muted flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <Laptop className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Web Dashboard</h4>
                  <p className="text-muted-foreground">A powerful desktop experience for detailed reporting and bulk transaction management.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="h-14 px-8 rounded-2xl button-glow text-lg font-bold">
                Download Now
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 rounded-2xl border-2 text-lg font-bold">
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
