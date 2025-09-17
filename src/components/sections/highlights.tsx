"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const highlightsContent = [
  {
    title: "Empowering Communities",
    description: "Our Solar-Powered Cold Box provides off-grid refrigeration, helping small businesses and households preserve perishables.",
    imageId: "slideshow1",
  },
  {
    title: "Sustainable Innovation",
    description: "Leveraging solar energy, we offer an eco-friendly solution that reduces food spoilage and carbon emissions.",
    imageId: "slideshow2",
  },
  {
    title: "Built for Africa",
    description: "Designed with local needs in mind, our solution is robust, reliable, and supported by a trusted local brand.",
    imageId: "slideshow3",
  },
];

export function Highlights() {
  const images = PlaceHolderImages.filter(p => highlightsContent.some(h => h.imageId === p.id));

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <Carousel
          className="w-full"
          plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
          opts={{ loop: true }}
        >
          <CarouselContent>
            {highlightsContent.map((highlight, index) => {
              const image = images.find(img => img.id === highlight.imageId);
              return (
                <CarouselItem key={index}>
                  <Card className="overflow-hidden border-none bg-transparent">
                    <CardContent className="relative aspect-[16/9] w-full p-0">
                      {image && (
                         <Image
                          src={image.imageUrl}
                          alt={image.description}
                          fill
                          className="object-cover brightness-50"
                          data-ai-hint={image.imageHint}
                        />
                      )}
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-8 bg-black/40">
                        <h3 className="font-headline text-3xl md:text-5xl font-bold">
                          {highlight.title}
                        </h3>
                        <p className="mt-4 max-w-2xl text-lg text-white/90">
                          {highlight.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
        </Carousel>
      </div>
    </section>
  );
}
