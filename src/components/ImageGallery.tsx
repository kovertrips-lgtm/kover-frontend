import type { ImageGalleryProps } from "@/types/tour";

const ImageGallery = ({ heading, images }: ImageGalleryProps) => {
  return (
    <section className="py-8 w-full max-w-4xl mx-auto">
      <h2 className="font-display text-2xl font-bold mb-6 text-foreground">{heading}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {images.map((img) => (
          <figure key={img.alt} className="rounded-xl overflow-hidden aspect-[4/3]">
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </figure>
        ))}
      </div>
    </section>
  );
};

export default ImageGallery;
