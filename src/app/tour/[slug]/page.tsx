import { client, urlFor } from "@/sanity/client";
import TourHero from "@/components/TourHero";
import TourPriceCard from "@/components/TourPriceCard";
import TourDetails from "@/components/TourDetails";
import TourDescription from "@/components/TourDescription";
import ImageGallery from "@/components/ImageGallery";
import RouteTimeline from "@/components/RouteTimeline";
import IncludedSection from "@/components/IncludedSection";
import AccommodationCard from "@/components/AccommodationCard";
import ImportantInfo from "@/components/ImportantInfo";
import TourFooter from "@/components/TourFooter";

export const revalidate = 0;

const TOUR_QUERY = `*[_type == "tour" && slug.current == $slug][0]{
  ...,
  "mainImageUrl": mainImage.asset->url,
  "galleryImages": gallery[]{
    "src": asset->url,
    "alt": alt
  },
  "accommodationImageUrl": accommodation.image.asset->url,
  "programDays": program[]{
    day,
    title,
    description,
    "imageUrl": image.asset->url
  }
}`;

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const tour = await client.fetch(TOUR_QUERY, { slug });
    if (!tour) return { title: 'Тур не найден' };
    return {
        title: tour.title,
        description: `Отправляйтесь в ${tour.title} вместе с KOVER.travel`,
    };
}

export default async function TourPage({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const tour = await client.fetch(TOUR_QUERY, { slug });

    if (!tour) {
        return <div className="min-h-screen flex items-center justify-center text-2xl font-display">Тур не найден 😔</div>;
    }

    return (
        <div className="min-h-screen bg-background text-foreground">
            <TourHero
                heroImage={tour.mainImageUrl || "https://kovertrip.b-cdn.net/images/hero-morocco.jpg"}
                heroImageAlt={tour.title}
                title={tour.title.split('—')[0]?.trim() || tour.title}
                titleItalic={tour.title.split('—')[1]?.trim() || ''}
                subtitle={tour.dates || "Даты уточняются"}
                rating={5.0}
                reviewCount={3}
                location={tour.location || ""}
                duration={tour.duration || ""}
                category={tour.category || "Тур"}
                discountLabel={tour.discountLabel || ""}
                showDiscount={!!tour.discountLabel}
            />

            <div className="max-w-6xl mx-auto px-4 md:px-8 py-10">
                <div className="flex flex-col lg:flex-row gap-10">
                    <div className="flex-1 min-w-0">

                        {tour.tourDetails && tour.tourDetails.length > 0 && (
                            <TourDetails
                                heading="Детали тура"
                                details={tour.tourDetails.map((d: any) => ({
                                    icon: d.icon,
                                    label: d.label,
                                    value: d.value,
                                }))}
                            />
                        )}

                        {(tour.introText || tour.bodyText) && (
                            <TourDescription
                                heading="О путешествии"
                                introText={tour.introText || ""}
                                bodyText={tour.bodyText || ""}
                                highlights={(tour.highlights || []).map((text: string) => ({ text }))}
                            />
                        )}

                        {tour.galleryImages && tour.galleryImages.length > 0 && (
                            <ImageGallery
                                heading="Фотогалерея"
                                images={tour.galleryImages.map((img: any) => ({
                                    src: img.src,
                                    alt: img.alt || "Фото тура",
                                }))}
                            />
                        )}

                        {tour.programDays && tour.programDays.length > 0 && (
                            <RouteTimeline
                                heading="Программа"
                                days={tour.programDays.map((day: any) => ({
                                    day: day.day?.replace(/[^0-9]/g, '') || "1",
                                    title: day.title,
                                    description: day.description,
                                    image: day.imageUrl || tour.mainImageUrl || "",
                                }))}
                            />
                        )}

                        {tour.includedItems && tour.includedItems.length > 0 && (
                            <IncludedSection
                                heading="Что включено"
                                includedTitle="Включено"
                                includedItems={tour.includedItems}
                                notIncludedTitle="Не включено"
                                notIncludedItems={tour.notIncludedItems || []}
                            />
                        )}

                        {tour.accommodation?.name && (
                            <AccommodationCard
                                heading="Проживание"
                                image={tour.accommodationImageUrl || tour.mainImageUrl || ""}
                                imageAlt={tour.accommodation.name}
                                name={tour.accommodation.name}
                                comfortLabel={tour.accommodation.comfortLabel || ""}
                                roomType={tour.accommodation.roomType || ""}
                                description={tour.accommodation.description || ""}
                            />
                        )}

                        {tour.importantInfo && tour.importantInfo.length > 0 && (
                            <ImportantInfo
                                heading="Важно знать"
                                blocks={tour.importantInfo.map((block: any) => ({
                                    icon: block.icon,
                                    title: block.title,
                                    content: block.content,
                                }))}
                            />
                        )}
                    </div>

                    <div className="w-full lg:w-[380px] flex-shrink-0">
                        <TourPriceCard
                            price={tour.price ? `₽ ${tour.price.toLocaleString('ru-RU')}` : "По запросу"}
                            oldPrice={tour.oldPrice ? tour.oldPrice.toLocaleString('ru-RU') : undefined}
                            discountPercent={tour.discountLabel}
                            showDiscount={!!tour.discountLabel}
                            pricePerDay={tour.duration && tour.price ? `₽ ${Math.round(tour.price / parseInt(tour.duration))} / день · ${tour.duration}` : ''}
                            dateRange={tour.dates || ''}
                            durationLabel={tour.duration || ''}
                            groupSize={tour.groupSize || ""}
                            ageRange={tour.ageRange ? `Возраст группы: ${tour.ageRange}` : ""}
                            bookingUrl={tour.bookingUrl || "#"}
                            bookingLabel="Забронировать"
                            contactUrl={tour.contactUrl || "#"}
                            contactLabel="Задать вопрос"
                            paymentNote="Предоплата не более 50% · Безопасная оплата"
                        />
                    </div>
                </div>
            </div>

            <TourFooter
                title={tour.title}
                subtitle={tour.dates ? `${tour.dates} · ${tour.location || ''}` : tour.location || ""}
            />
        </div>
    );
}
