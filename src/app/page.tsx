import { Hero } from "@/components/sections/hero";
import { Highlights } from "@/components/sections/highlights";
import { About } from "@/components/sections/about";
import { ProblemSolution } from "@/components/sections/problem-solution";
import { Features } from "@/components/sections/features";
import { MarketBusiness } from "@/components/sections/market-business";
import { CompetitiveSwotPest } from "@/components/sections/competitive-swot-pest";
import { Strategy } from "@/components/sections/strategy";
import { TractionFinancials } from "@/components/sections/traction-financials";
import { ImpactMetrics } from "@/components/sections/impact-metrics";
import { Cta } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <About />
      <ProblemSolution />
      <Features />
      <MarketBusiness />
      <CompetitiveSwotPest />
      <Strategy />
      <TractionFinancials />
      <ImpactMetrics />
      <Cta />
    </>
  );
}
