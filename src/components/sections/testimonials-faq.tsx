import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Amina Yusuf",
    title: "Local Shop Owner",
    quote: "This cold box saved my shop's produce! My fruits and vegetables stay fresh for weeks, not days. I've cut my losses by more than half."
  },
  {
    name: "Dr. Ben Carter",
    title: "Clinic Director",
    quote: "Reliable vaccine storage was always our biggest challenge. The SolarChill box is a game-changer for our community's health."
  },
  {
    name: "Kofi Annan Jr.",
    title: "Small-scale Farmer",
    quote: "I can now sell my produce at the market when prices are best, instead of being forced to sell immediately. It has transformed my business."
  }
];

const faqs = [
  {
    question: "What is the lifespan of the SolarChill Cold Box?",
    answer: "The cold box is designed for durability with a lifespan of over 10 years. The solar panels are rated for 25 years, and the battery typically lasts 5-7 years before needing replacement."
  },
  {
    question: "How much maintenance is required?",
    answer: "Minimal maintenance is needed. We recommend regular cleaning of the solar panels to ensure optimal performance and checking the system periodically. We provide a full user manual and local support."
  },
  {
    question: "What happens on cloudy days or at night?",
    answer: "The integrated battery system stores excess solar energy generated during the day, ensuring the cold box remains operational and maintains a stable temperature through the night and on overcast days."
  },
  {
    question: "Is financing available?",
    answer: "Yes, we offer flexible financing options, including leasing and Pay-As-You-Go (PAYG) models, to make our solution accessible to a wider range of customers."
  }
];

export function TestimonialsFaq() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 space-y-24">
        
        {/* Testimonials */}
        <div>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">From Our Community</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Real stories from users who are benefiting from sustainable cooling.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <Card key={i} className="bg-card border border-border">
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={`https://i.pravatar.cc/150?u=${testimonial.name}`} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div id="faq">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Your questions, answered.
            </p>
          </div>
          <div className="mt-12 max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="text-left font-headline text-lg hover:no-underline">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

      </div>
    </section>
  );
}
