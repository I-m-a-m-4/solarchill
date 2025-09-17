import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card } from "../ui/card";

export function About() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about');

  return (
    <section id="about" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-400">
              About the Project
            </h2>
            <p className="text-lg text-muted-foreground">
              The Solar-Powered Cold Box is a compact, off-grid refrigeration solution designed to combat food spoilage in communities with unreliable electricity. By harnessing the power of the sun, we provide a sustainable and affordable way for small-scale farmers, local shops, and households to preserve fresh produce, reduce waste, and increase their income.
            </p>
            <p className="text-lg text-muted-foreground">
              Our mission is to empower these communities with technology that is not only eco-friendly but also built to last, adapted to local conditions, and supported by a brand they can trust.
            </p>
          </div>
          <div className="relative aspect-video">
            {aboutImage && (
              <Card className="overflow-hidden shadow-2xl shadow-primary/10">
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  data-ai-hint={aboutImage.imageHint}
                />
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
