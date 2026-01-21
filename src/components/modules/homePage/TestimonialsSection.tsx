import { SectionHeader } from "@/components/shared/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Michael Chen",
    role: "Regular User",
    content: "Sending money to my family used to take days. With Digital Wallet, it's instant and virtually free. The interface is stunning and so easy to use!",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5
  },
  {
    name: "Sarah Williams",
    role: "Small Business Owner",
    content: "The Agent system has transformed how I handle cash flow. The security features give me real peace of mind, and the real-time reporting is top-notch.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5
  },
  {
    name: "David Rodriguez",
    role: "Financial Agent",
    content: "Being an agent for this platform has provided a steady stream of income. The agent dashboard is remarkably intuitive and very fast.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 h-96 w-96 bg-primary/5 blur-[120px] rounded-full z-0" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <SectionHeader
          badge="Social Proof"
          title="What Our Users"
          titleAccent="Are Saying"
          description="Join over 2 million satisfied users who have transformed their financial lives."
          align="center"
        />

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <Card 
              key={testimonial.name}
              className={cn(
                "group relative border-border/50 bg-card/20 backdrop-blur-sm transition-all duration-500",
                "hover:border-primary/30 hover:shadow-2xl hover:-translate-y-3 animate-in fade-in slide-in-from-bottom-12"
              )}
              style={{ animationDelay: `${idx * 200}ms` }}
            >
              <CardContent className="pt-12 pb-8 px-8 space-y-6">
                <Quote className="absolute top-6 left-6 h-8 w-8 text-primary/10 group-hover:text-primary/20 transition-colors" />
                
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-border/40">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="h-12 w-12 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
              
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -mr-16 -mt-16 rounded-full group-hover:bg-primary/10 transition-colors duration-500" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
