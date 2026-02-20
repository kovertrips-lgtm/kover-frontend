import type { TourFooterProps } from "@/types/tour";

const TourFooter = ({ title, subtitle }: TourFooterProps) => {
  return (
    <footer className="border-t border-border bg-muted/30 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
        <p className="font-display text-xl font-semibold text-foreground mb-2">{title}</p>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>
    </footer>
  );
};

export default TourFooter;
