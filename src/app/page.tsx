import { client } from "@/sanity/client";
import Link from "next/link";

export const revalidate = 0;

export default async function Home() {
  const tours = await client.fetch(`*[_type == "tour"]{
    _id,
    title,
    slug,
    price,
    dates,
    duration,
    location,
    category,
    discountLabel,
    "mainImageUrl": mainImage.asset->url
  } | order(_createdAt desc)`);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero секция каталога */}
      <header className="relative py-20 md:py-32 px-6 text-center bg-gradient-to-b from-foreground/5 to-transparent">
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-4 tracking-tight">
          Travel with <span className="italic font-medium text-primary">KOVER</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
          Авторские туры с душой. Серфинг, горы, океан и настоящие приключения.
        </p>
      </header>

      {/* Список туров */}
      <main className="max-w-6xl mx-auto px-4 md:px-8 pb-20">
        {tours.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour: any) => (
              <Link
                key={tour._id}
                href={`/tour/${tour.slug.current}`}
                className="group relative block overflow-hidden rounded-2xl bg-card border border-border hover:shadow-xl transition-all duration-300"
              >
                {/* Фото */}
                <div className="aspect-[4/3] w-full overflow-hidden">
                  {tour.mainImageUrl ? (
                    <img
                      src={tour.mainImageUrl}
                      alt={tour.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-muted flex items-center justify-center text-4xl">🌍</div>
                  )}
                </div>

                {/* Бейдж скидки */}
                {tour.discountLabel && (
                  <span className="absolute top-4 right-4 bg-destructive text-destructive-foreground text-xs font-bold px-3 py-1 rounded-full">
                    {tour.discountLabel}
                  </span>
                )}

                {/* Инфо */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    {tour.location && <span>📍 {tour.location}</span>}
                    {tour.duration && <span>· {tour.duration}</span>}
                    {tour.category && <span>· {tour.category}</span>}
                  </div>

                  <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {tour.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4">{tour.dates || "Даты уточняются"}</p>

                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-lg text-primary">
                      {tour.price ? `₽ ${tour.price.toLocaleString('ru-RU')}` : 'По запросу'}
                    </span>
                    <span className="text-sm font-medium text-primary group-hover:translate-x-1 transition-transform">
                      Подробнее →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-muted-foreground">
            <p className="text-2xl mb-2">🏖️</p>
            <p>Туров пока нет. Создайте первый тур в Sanity!</p>
          </div>
        )}
      </main>
    </div>
  );
}
