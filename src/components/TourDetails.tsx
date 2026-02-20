import { Globe, Activity, Sparkles, Users, Calendar, Compass } from "lucide-react";
import type { TourDetailsProps } from "@/types/tour";

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  calendar: Calendar,
  compass: Compass,
  globe: Globe,
  sparkles: Sparkles,
  activity: Activity,
  users: Users,
};

const TourDetails = ({ heading, details }: TourDetailsProps) => {
  return (
    <section className="py-8 w-full max-w-4xl mx-auto">
      <h2 className="font-display text-2xl font-bold mb-6 text-foreground">{heading}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {details.map((d) => {
          const Icon = iconMap[d.icon] || Globe;
          return (
            <article
              key={d.label}
              className="flex items-center gap-3 p-4 rounded-xl bg-muted/60"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{d.label}</p>
                <p className="text-sm font-semibold text-foreground">{d.value}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default TourDetails;
