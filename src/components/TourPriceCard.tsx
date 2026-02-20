import { Calendar, Users, MessageCircle } from "lucide-react";
import type { TourPriceCardProps } from "@/types/tour";

const TourPriceCard = ({
  price,
  oldPrice,
  discountPercent,
  showDiscount = true,
  pricePerDay,
  dateRange,
  durationLabel,
  groupSize,
  ageRange,
  bookingUrl,
  bookingLabel,
  contactUrl,
  contactLabel,
  paymentNote,
}: TourPriceCardProps) => {
  return (
    <aside className="bg-card w-full max-w-sm mx-auto rounded-2xl border border-border p-6 shadow-lg sticky top-8">
      <div className="mb-4">
        <div className="flex items-baseline gap-3 mb-1">
          <span className="text-3xl font-bold font-display text-foreground">{price}</span>
          {oldPrice && (
            <span className="text-lg text-muted-foreground line-through">{oldPrice}</span>
          )}
          {showDiscount && discountPercent && (
            <span className="bg-destructive text-destructive-foreground text-xs font-bold px-2 py-0.5 rounded-full">
              {discountPercent}
            </span>
          )}
        </div>
        <p className="text-sm text-muted-foreground">{pricePerDay}</p>
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-muted">
          <Calendar className="w-5 h-5 text-primary" />
          <div>
            <p className="text-sm font-medium text-foreground">{dateRange}</p>
            <p className="text-xs text-muted-foreground">{durationLabel}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3 rounded-xl bg-muted">
          <Users className="w-5 h-5 text-primary" />
          <div>
            <p className="text-sm font-medium text-foreground">{groupSize}</p>
            <p className="text-xs text-muted-foreground">{ageRange}</p>
          </div>
        </div>
      </div>

      <a
        href={bookingUrl || "#"}
        className="block w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-4 rounded-xl font-semibold mb-3 text-center"
      >
        {bookingLabel}
      </a>

      <a
        href={contactUrl || "#"}
        className="flex items-center justify-center gap-2 w-full border border-border py-3 rounded-xl text-foreground hover:bg-muted transition-colors"
      >
        <MessageCircle className="w-4 h-4" />
        {contactLabel}
      </a>

      <p className="text-xs text-muted-foreground text-center mt-4">{paymentNote}</p>
    </aside>
  );
};

export default TourPriceCard;
