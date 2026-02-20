import { Info, Plane, CreditCard, ShieldCheck } from "lucide-react";
import type { ImportantInfoProps } from "@/types/tour";

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  shield: ShieldCheck,
  plane: Plane,
  card: CreditCard,
  info: Info,
};

const ImportantInfo = ({ heading, blocks }: ImportantInfoProps) => {
  return (
    <section className="py-8 w-full max-w-4xl mx-auto">
      <h2 className="font-display text-2xl font-bold mb-6 text-foreground">{heading}</h2>
      <div className="space-y-4">
        {blocks.map((block) => {
          const Icon = iconMap[block.icon] || Info;
          return (
            <article key={block.title} className="flex gap-4 p-4 rounded-xl bg-muted/50">
              <Icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-foreground text-sm mb-1">{block.title}</h4>
                <div
                  className="text-sm text-foreground/75"
                  dangerouslySetInnerHTML={{ __html: block.content }}
                />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default ImportantInfo;
