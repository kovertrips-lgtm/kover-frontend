import { Check, X } from "lucide-react";
import type { IncludedSectionProps } from "@/types/tour";

const IncludedSection = ({
  heading,
  includedTitle,
  includedItems,
  notIncludedTitle,
  notIncludedItems,
}: IncludedSectionProps) => {
  return (
    <section className="py-8 w-full max-w-4xl mx-auto">
      <h2 className="font-display text-2xl font-bold mb-6 text-foreground">{heading}</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
              <Check className="w-3.5 h-3.5 text-green-600" />
            </span>
            {includedTitle}
          </h3>
          <ul className="space-y-2.5">
            {includedItems.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                <Check className="w-4 h-4 mt-0.5 text-green-500 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
              <X className="w-3.5 h-3.5 text-red-500" />
            </span>
            {notIncludedTitle}
          </h3>
          <ul className="space-y-2.5">
            {notIncludedItems.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                <X className="w-4 h-4 mt-0.5 text-red-400 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default IncludedSection;
