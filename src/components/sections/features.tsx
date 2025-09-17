import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card } from "@/components/ui/card";
import { Sun, Shield, Thermometer, BatteryCharging, Smartphone } from "lucide-react";

const featuresList = [
  {
    icon: Sun,
    title: "100% Solar-Powered",
    description: "Operates entirely off-grid using high-efficiency solar panels."
  },
  {
    icon: Shield,
    title: "Robust & Durable Design",
    description: "Built to withstand harsh environmental conditions with minimal maintenance."
  },
  {
    icon: Thermometer,
    title: "Consistent Temperature",
    description: "Maintains optimal cooling levels to ensure maximum preservation of contents."
  },
  {
    icon: BatteryCharging,
    title: "Long-Life Battery",
    description: "Includes battery storage for reliable cooling even on cloudy days and at night."
  },
  {
    icon: Smartphone,
    title: "Smart Monitoring (Optional)",
    description: "Optional IoT integration for remote temperature monitoring and system diagnostics."
  },
];

export function Features() {
  const featuresImage = PlaceHolderImages.find(p => p.id === 'features');

  return (
    <section id="features" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Product Features</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Engineered for reliability, efficiency, and ease of use in any environment.
          </p>
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-12 items-center">
          <div className="space-y-8">
            {featuresList.slice(0, 3).map((feature) => (
              <div key={feature.title} className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-headline text-lg font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative aspect-square group">
            {featuresImage && (
              <Card className="overflow-hidden rounded-2xl shadow-2xl shadow-primary/10">
                <Image
                  src={featuresImage.imageUrl}
                  alt={featuresImage.description}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                  data-ai-hint={featuresImage.imageHint}
                />
              </Card>
            )}
          </div>
          
          <div className="space-y-8">
            {featuresList.slice(3).map((feature) => (
              <div key={feature.title} className="flex items-start gap-4 md:flex-row-reverse md:text-right">
                <div className="bg-primary/10 p-3 rounded-full">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="md:mr-4">
                  <h3 className="font-headline text-lg font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
