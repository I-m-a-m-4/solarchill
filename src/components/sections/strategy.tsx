import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Target, Megaphone, Users, Handshake, Gift } from "lucide-react";

const fundingSteps = [
  { name: "Awareness", description: "Build initial interest through outreach." },
  { name: "Interest", description: "Engage potential investors with our vision." },
  { name: "Desire & Action", description: "Secure funding through compelling proposals." },
];

const marketingStrategies = [
  { icon: Handshake, title: "Beat China with Trust", description: "Emphasize local support and reliability." },
  { icon: Megaphone, title: "Local-Language Campaigns", description: "Connect with communities in their own language." },
  { icon: Gift, title: "Referral Programs", description: "Incentivize word-of-mouth marketing." },
  { icon: Users, title: "Demonstration Hubs", description: "Allow customers to experience the product firsthand." },
  { icon: Target, title: "Influencer Endorsements", description: "Partner with trusted local figures." },
];

export function Strategy() {
  return (
    <section id="strategy" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6 space-y-24">
        
        {/* Funding Strategy */}
        <div>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-400">Funding Strategy</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A clear pathway to securing the necessary capital for growth and impact.
            </p>
          </div>
          <div className="mt-16 max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              {fundingSteps.map((step, index) => (
                <React.Fragment key={step.name}>
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-primary/10 text-primary rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold font-headline">
                      {index + 1}
                    </div>
                    <h3 className="mt-4 font-headline text-xl font-semibold">{step.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                  </div>
                  {index < fundingSteps.length - 1 && (
                    <ArrowRight className="h-8 w-8 text-primary/50 hidden md:block" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Marketing Strategy */}
        <div id="marketing">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">Marketing & Awareness</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Building a strong brand presence through targeted, community-focused initiatives.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingStrategies.map((strategy) => (
              <Card key={strategy.title} className="bg-background/50 hover:bg-background transition-colors">
                <CardHeader className="flex-row items-center gap-4">
                  <strategy.icon className="h-8 w-8 text-primary" />
                  <CardTitle className="font-headline text-xl">{strategy.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{strategy.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
