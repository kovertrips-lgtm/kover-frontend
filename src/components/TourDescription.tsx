import type { TourDescriptionProps } from "@/types/tour";

const TourDescription = ({
  heading,
  introText,
  bodyText,
  highlights,
}: TourDescriptionProps) => {
  return (
    <section className="py-8 w-full max-w-4xl mx-auto">
      <h2 className="font-display text-2xl font-bold mb-6 text-foreground">{heading}</h2>
      <div className="space-y-4 text-foreground/85 leading-relaxed">
        <p className="text-lg font-light italic text-foreground/70">{introText}</p>
        <p>{bodyText}</p>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {highlights.map((item) => (
          <div key={item.text} className="flex items-start gap-2">
            <span className="mt-1 text-primary text-lg">✦</span>
            <span className="text-sm text-foreground/80">{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TourDescription;
