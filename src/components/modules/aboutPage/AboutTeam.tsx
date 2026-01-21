import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { Twitter, Linkedin, Github } from "lucide-react";
import { cn } from "@/lib/utils";

const teamMembers = [
  {
    name: "John Doe",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400&q=80",
    bio: "Visionary leader with 15+ years in fintech and digital transformation.",
    social: { twitter: "#", linkedin: "#", github: "#" }
  },
  {
    name: "Jane Smith",
    role: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400&q=80",
    bio: "Ex-Google engineer specializing in high-frequency trading systems and security.",
    social: { twitter: "#", linkedin: "#", github: "#" }
  },
  {
    name: "Alex Lee",
    role: "Head of Product",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80",
    bio: "Product strategist focused on creating intuitive and accessible user experiences.",
    social: { twitter: "#", linkedin: "#", github: "#" }
  },
];

export function AboutTeam() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeader
          badge="The Team"
          title="Powered by Passionate"
          titleAccent="Innovators"
          description="Meet the thinkers and builders creating the next generation of digital finance infrastructure."
          align="left"
        />

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {teamMembers.map((member, idx) => (
            <div 
              key={member.name} 
              className={cn(
                "group relative animate-in fade-in slide-in-from-bottom-12 transition-all duration-700",
                "bg-card/30 backdrop-blur-sm border border-border/50 rounded-[2.5rem] p-4 hover:border-primary/30 hover:shadow-2xl hover:-translate-y-4"
              )}
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="relative aspect-square rounded-4xl overflow-hidden mb-6 filter grayscale hover:grayscale-0 transition-all duration-700">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Social Links on Hover */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <Button size="icon" variant="secondary" className="h-10 w-10 rounded-full bg-background/80 backdrop-blur hover:bg-primary hover:text-white transition-colors">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="h-10 w-10 rounded-full bg-background/80 backdrop-blur hover:bg-primary hover:text-white transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="h-10 w-10 rounded-full bg-background/80 backdrop-blur hover:bg-primary hover:text-white transition-colors">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="px-4 pb-4">
                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                <p className="text-primary font-medium text-sm mb-3 uppercase tracking-wider">{member.role}</p>
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {member.bio}
                </p>
              </div>

              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -mr-16 -mt-16 rounded-full group-hover:bg-primary/10 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
