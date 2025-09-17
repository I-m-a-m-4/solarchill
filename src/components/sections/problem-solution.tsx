import { Zap, Apple, DollarSign, LayoutPanelTop, Leaf, Wrench } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const problems = [
  {
    icon: Zap,
    title: "Power Instability",
    content: "Frequent power outages and lack of grid access in many regions lead to unreliable refrigeration, causing massive food spoilage."
  },
  {
    icon: Apple,
    title: "Spoilage & Financial Loss",
    content: "Without proper cooling, up to 45% of horticultural produce is lost post-harvest, directly impacting the income of small-scale farmers and vendors."
  },
  {
    icon: DollarSign,
    title: "High Costs & Environmental Impact",
    content: "Conventional refrigeration methods are expensive to run, rely on fossil fuels, and often use harmful refrigerants, making them inaccessible and unsustainable."
  }
];

const solutions = [
  {
    icon: LayoutPanelTop,
    title: "Affordable Cooling",
    description: "Harnessing solar power eliminates electricity costs, making refrigeration accessible and affordable for off-grid communities."
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Our system runs on clean energy and uses natural refrigerants, significantly reducing carbon footprint and environmental impact."
  },
  {
    icon: Wrench,
    title: "Versatile & Robust Use",
    description: "Designed for durability in harsh conditions, our cold box is perfect for farms, local markets, clinics, and households."
  }
];

export function ProblemSolution() {
  return (
    <>
      <section id="problem" className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">The Challenge We Address</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Millions face critical challenges in preserving perishable goods, leading to significant economic and nutritional losses.
            </p>
          </div>
          <div className="mt-16 max-w-4xl mx-auto">
            <Accordion type="single" collapsible defaultValue="item-0">
              {problems.map((problem, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border">
                  <AccordionTrigger className="text-lg font-headline font-semibold hover:no-underline">
                    <div className="flex items-center gap-4">
                      <problem.icon className="h-8 w-8 text-primary" />
                      <span>{problem.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground pl-16">
                    {problem.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="solution" className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-400">Our Innovative Solution</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The Solar-Powered Cold Box directly counters these challenges with sustainable, reliable, and cost-effective technology.
            </p>
          </div>
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {solutions.map((solution) => (
              <Card key={solution.title} className="text-center bg-background/50 hover:bg-background transition-colors group">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                    <solution.icon className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-2xl pt-4">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{solution.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
