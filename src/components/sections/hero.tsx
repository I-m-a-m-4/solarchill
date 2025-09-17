"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";


export function Hero() {
  const heroImages = PlaceHolderImages.filter(
    (img) => img.id.startsWith('hero-image')
  );

  return (
    <section className="relative pt-24 pb-20 overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 ring-1 ring-emerald-500/20 text-emerald-300 text-sm font-medium mb-8 animate-[fadeIn_0.8s_ease-out_0.2s_both]">
            <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></div>
            Cooling Powered by the Sun
          </div>
          <h1 className="md:text-7xl text-4xl font-light text-white tracking-tighter font-headline mb-6 animate-[slideUp_0.8s_ease-out_0.4s_both]">
            The Solar Powered 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
              {' '}
              Cold Box
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed animate-[slideUp_0.8s_ease-out_0.6s_both]">
           An innovative, off-grid refrigeration solution designed to reduce waste and create opportunities for communities in need.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-[slideUp_0.8s_ease-out_0.8s_both]">
            <Button size="lg" asChild>
                <Link href="#solution">Discover the Solution</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
            >
              <Link href="#contact">Get Involved</Link>
            </Button>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 mt-12 text-sm text-white/40 animate-[fadeIn_0.8s_ease-out_1s_both]">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-400" />
              100% Solar Powered
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-400" />
              Reduces Food Waste
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-400" />
              Creates Opportunity
            </div>
          </div>
        </div>

        <Carousel
          className="relative max-w-6xl mx-auto animate-[slideUp_0.8s_ease-out_1.2s_both]"
          opts={{ loop: true }}
           plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
        >
          <CarouselContent>
            {heroImages.map((image, index) => (
              <CarouselItem key={image.id}>
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-violet-500/10 rounded-3xl blur-2xl"></div>
                   <div className="relative h-[500px] w-full overflow-hidden rounded-3xl">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-cover shadow-2xl shadow-black/50 ring-1 ring-white/[0.08] border border-white/[0.05]"
                      data-ai-hint={image.imageHint}
                      priority={index === 0}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-2 md:-left-12 top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute right-2 md:-right-12 top-1/2 -translate-y-1/2" />
        </Carousel>
      </div>
    </section>
  );
}
