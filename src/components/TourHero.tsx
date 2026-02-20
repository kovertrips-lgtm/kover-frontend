import Image from "next/image";
import { Star, MapPin, Calendar, Tag } from "lucide-react";
import type { TourHeroProps } from "@/types/tour";

const TourHero = ({
  heroImage,
  heroImageAlt,
  title,
  titleItalic,
  subtitle,
  rating,
  reviewCount,
  location,
  duration,
  category,
  discountLabel,
  showDiscount = true,
}: TourHeroProps) => {
  return (
    <section className="relative w-full h-[80vh] min-h-[500px] md:min-h-[600px] overflow-hidden">
      <Image
        src={heroImage}
        alt={heroImageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-12 lg:p-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 bg-sunset px-3 py-1 rounded-full text-sm font-semibold text-primary-foreground">
              <Star className="w-4 h-4 fill-current" /> {rating}
            </span>
            <span className="text-primary-foreground/80 text-sm">
              {reviewCount} отзыва
            </span>
            <span className="inline-flex items-center gap-1 text-primary-foreground/90 text-sm bg-primary-foreground/10 backdrop-blur-sm px-3 py-1 rounded-full">
              <MapPin className="w-3.5 h-3.5" /> {location}
            </span>
            <span className="inline-flex items-center gap-1 text-primary-foreground/90 text-sm bg-primary-foreground/10 backdrop-blur-sm px-3 py-1 rounded-full">
              <Calendar className="w-3.5 h-3.5" /> {duration}
            </span>
            <span className="text-primary-foreground/90 text-sm bg-primary-foreground/10 backdrop-blur-sm px-3 py-1 rounded-full">
              🏄 {category}
            </span>
            {showDiscount && discountLabel && (
              <span className="inline-flex items-center gap-1 bg-destructive px-3 py-1 rounded-full text-sm font-semibold text-destructive-foreground">
                <Tag className="w-3.5 h-3.5" /> {discountLabel}
              </span>
            )}
          </div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-4">
            {title}
            <br />
            <span className="italic font-medium">{titleItalic}</span>
          </h1>

          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl font-light">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TourHero;
