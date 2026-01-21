import storyImage from "@/assets/images/story.jpg";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Active Users", value: "2M+" },
  { label: "Countries", value: "45+" },
  { label: "Total Volume", value: "$1.2B" },
  { label: "Trusted Agents", value: "10K+" },
];

export function AboutStory() {
  return (
    <section className="py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left-12 duration-1000">
            <SectionHeader
              badge="The Genesis"
              title="Designed for Everyone,"
              titleAccent="Built for Trust"
              description="Our journey began with a simple mission — to make digital transactions easier and safer for everyone. Whether you're sending money to loved ones, depositing cash through agents, or managing large-scale transactions as an admin, our platform delivers a seamless experience tailored to your needs."
              align="left"
              className="animate-none" // Disable nested animation to use parent
            />
            <div className="grid grid-cols-2 gap-8 pt-4">
              {stats.map((stat, idx) => (
                <div key={stat.label} className={cn(
                  "space-y-2 p-6 rounded-3xl bg-card/20 backdrop-blur-sm border border-border/40 hover:border-primary/30 transition-all duration-500 hover:shadow-xl group",
                  "animate-in fade-in slide-in-from-bottom-8"
                )} style={{ animationDelay: `${400 + (idx * 100)}ms` }}>
                  <p className="text-4xl font-extrabold text-primary group-hover:scale-110 transition-transform origin-left">{stat.value}</p>
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative animate-in fade-in slide-in-from-right-12 duration-1000 delay-300">
            <div className="absolute -inset-6 bg-primary/10 rounded-4xl blur-3xl z-0" />
            <div className="relative z-10 rounded-4xl overflow-hidden border border-border/50 shadow-2xl transition-all duration-700 hover:scale-[1.03] hover:shadow-primary/10 group">
              <img
                src={storyImage}
                alt="Digital Wallet Story"
                className="w-full aspect-4/3 object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              
              {/* Floating Badge on Image */}
              <div className="absolute bottom-6 left-6 right-6 p-6 glass-effect rounded-3xl border border-white/10 hidden md:block translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-sm font-medium leading-relaxed italic">
                  "Empowering the next billion users with financial freedom and borderless transactions."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
