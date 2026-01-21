import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge: string;
  title: string;
  titleAccent?: string;
  description: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  titleAccent,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "space-y-4 animate-in fade-in duration-1000",
        align === "center" ? "mx-auto text-center max-w-3xl slide-in-from-bottom-8" : "text-left max-w-2xl slide-in-from-left-8",
        className
      )}
    >
      <Badge
        variant="outline"
        className="px-4 py-1 border-primary/20 text-primary bg-primary/5 uppercase tracking-wider font-bold"
      >
        {badge}
      </Badge>
      
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
        {title}{" "}
        {titleAccent && (
          <span className="text-primary italic">{titleAccent}</span>
        )}
      </h2>
      
      <p className={cn(
        "text-lg md:text-xl text-muted-foreground leading-relaxed",
        align === "center" && "mx-auto"
      )}>
        {description}
      </p>
    </div>
  );
}
