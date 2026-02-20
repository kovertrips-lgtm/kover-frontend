/** Tour Hero Section */
export interface TourHeroProps {
  heroImage: string;
  heroImageAlt: string;
  title: string;
  titleItalic: string;
  subtitle: string;
  rating: number;
  reviewCount: number;
  location: string;
  duration: string;
  category: string;
  discountLabel?: string;
  showDiscount?: boolean;
}

/** Tour Price Card (Sidebar) */
export interface TourPriceCardProps {
  price: string;
  oldPrice?: string;
  discountPercent?: string;
  showDiscount?: boolean;
  pricePerDay: string;
  dateRange: string;
  durationLabel: string;
  groupSize: string;
  ageRange: string;
  bookingUrl?: string;
  bookingLabel: string;
  contactUrl?: string;
  contactLabel: string;
  paymentNote: string;
}

/** Tour Detail Item */
export interface TourDetailItem {
  icon: string;
  label: string;
  value: string;
}

export interface TourDetailsProps {
  heading: string;
  details: TourDetailItem[];
}

/** Tour Description */
export interface TourHighlight {
  text: string;
}

export interface TourDescriptionProps {
  heading: string;
  introText: string;
  bodyText: string;
  highlights: TourHighlight[];
}

/** Image Gallery */
export interface GalleryImage {
  src: string;
  alt: string;
}

export interface ImageGalleryProps {
  heading: string;
  images: GalleryImage[];
}

/** Route Timeline (Program) */
export interface TimelineDay {
  day: number;
  title: string;
  image: string;
  description: string;
}

export interface RouteTimelineProps {
  heading: string;
  days: TimelineDay[];
}

/** Included / Not Included */
export interface IncludedSectionProps {
  heading: string;
  includedTitle: string;
  includedItems: string[];
  notIncludedTitle: string;
  notIncludedItems: string[];
}

/** Accommodation Card */
export interface AccommodationCardProps {
  heading: string;
  image: string;
  imageAlt: string;
  name: string;
  comfortLabel: string;
  roomType: string;
  description: string;
}

/** Important Info */
export interface InfoBlock {
  icon: string;
  title: string;
  content: string;
}

export interface ImportantInfoProps {
  heading: string;
  blocks: InfoBlock[];
}

/** Footer */
export interface TourFooterProps {
  title: string;
  subtitle: string;
}
