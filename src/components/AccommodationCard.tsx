import Image from "next/image";
import { Star, Bed } from "lucide-react";
import type { AccommodationCardProps } from "@/types/tour";

const AccommodationCard = ({
  heading,
  image,
  imageAlt,
  name,
  comfortLabel,
  roomType,
  description,
}: AccommodationCardProps) => {
  return (
    <section className="py-8 w-full max-w-4xl mx-auto">
      <h2 className="font-display text-2xl font-bold mb-6 text-foreground">{heading}</h2>
      <article className="rounded-xl overflow-hidden border border-border bg-card">
        <div className="relative w-full h-64">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="font-display text-xl font-semibold mb-2 text-foreground">{name}</h3>
          <div className="flex items-center gap-4 mb-4">
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <Star className="w-4 h-4 text-sunset fill-sunset" /> {comfortLabel}
            </span>
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <Bed className="w-4 h-4" /> {roomType}
            </span>
          </div>
          <p className="text-sm text-foreground/75">{description}</p>
        </div>
      </article>
    </section>
  );
};

export default AccommodationCard;
