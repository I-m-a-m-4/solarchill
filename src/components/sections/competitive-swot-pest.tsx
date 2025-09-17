import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CheckCircle } from "lucide-react"

const advantages = [
  "Local Adaptation & Durability",
  "Superior After-Sales Support",
  "Trust & Local Branding",
  "Leverage of SIS Funding"
]

const swot = {
  strengths: ["Local expertise", "SIS funding", "Strong brand trust"],
  weaknesses: ["New market entry", "Production scaling", "Brand recognition vs. giants"],
  opportunities: ["Growing demand for green tech", "Government incentives", "Expansion to new markets"],
  threats: ["Price competition from China", "Supply chain disruptions", "Regulatory changes"]
}

const pest = {
  political: ["Government support for renewables", "Stable trade policies"],
  economic: ["Growing middle class", "Fluctuating currency rates"],
  social: ["Demand for sustainable products", "Increasing climate change awareness"],
  technological: ["Advances in solar tech", "IoT integration opportunities"]
}

export function CompetitiveSwotPest() {
  return (
    <section id="strategy-analysis" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 space-y-24">
        
        {/* Competitive Advantage */}
        <div>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl tracking-tight text-white sm:text-5xl font-sans font-semibold">Competitive Advantage</h2>
            <p className="mt-4 text-lg text-neutral-400">
              While competing with established players, our local focus and superior value proposition set us apart.
            </p>
          </div>
          <Card className="mt-12">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[250px] font-semibold text-white">Feature</TableHead>
                  <TableHead className="text-center font-semibold text-emerald-400">SolarChill</TableHead>
                  <TableHead className="text-center font-semibold text-neutral-400">Imports (e.g., China)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {advantages.map((adv, i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium">{adv}</TableCell>
                    <TableCell className="text-center"><CheckCircle className="h-6 w-6 text-emerald-500 mx-auto" /></TableCell>
                    <TableCell className="text-center"><CheckCircle className="h-6 w-6 text-neutral-700 mx-auto" /></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>

        {/* SWOT Analysis */}
        <div id="swot">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl tracking-tight text-white sm:text-5xl font-sans font-semibold">SWOT Analysis</h2>
            <p className="mt-4 text-lg text-neutral-400">
              A clear view of our internal and external strategic landscape.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-neutral-900/60 ring-1 ring-green-500/20">
              <CardHeader><CardTitle className="font-sans text-green-400">Strengths</CardTitle></CardHeader>
              <CardContent><ul className="space-y-2 list-disc list-inside text-neutral-400">{swot.strengths.map(s => <li key={s}>{s}</li>)}</ul></CardContent>
            </Card>
            <Card className="bg-neutral-900/60 ring-1 ring-red-500/20">
              <CardHeader><CardTitle className="font-sans text-red-400">Weaknesses</CardTitle></CardHeader>
              <CardContent><ul className="space-y-2 list-disc list-inside text-neutral-400">{swot.weaknesses.map(w => <li key={w}>{w}</li>)}</ul></CardContent>
            </Card>
            <Card className="bg-neutral-900/60 ring-1 ring-blue-500/20">
              <CardHeader><CardTitle className="font-sans text-blue-400">Opportunities</CardTitle></CardHeader>
              <CardContent><ul className="space-y-2 list-disc list-inside text-neutral-400">{swot.opportunities.map(o => <li key={o}>{o}</li>)}</ul></CardContent>
            </Card>
            <Card className="bg-neutral-900/60 ring-1 ring-yellow-500/20">
              <CardHeader><CardTitle className="font-sans text-yellow-400">Threats</CardTitle></CardHeader>
              <CardContent><ul className="space-y-2 list-disc list-inside text-neutral-400">{swot.threats.map(t => <li key={t}>{t}</li>)}</ul></CardContent>
            </Card>
          </div>
        </div>

        {/* PEST Analysis */}
        <div id="pest">
           <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl tracking-tight text-white sm:text-5xl font-sans font-semibold">PEST Analysis</h2>
            <p className="mt-4 text-lg text-neutral-400">
              Understanding the macro-environmental factors that influence our success.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader><CardTitle className="font-sans text-emerald-400">Political</CardTitle></CardHeader>
              <CardContent><ul className="space-y-2 list-disc list-inside text-neutral-400">{pest.political.map(p => <li key={p}>{p}</li>)}</ul></CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="font-sans text-emerald-400">Economic</CardTitle></CardHeader>
              <CardContent><ul className="space-y-2 list-disc list-inside text-neutral-400">{pest.economic.map(e => <li key={e}>{e}</li>)}</ul></CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="font-sans text-emerald-400">Social</CardTitle></CardHeader>
              <CardContent><ul className="space-y-2 list-disc list-inside text-neutral-400">{pest.social.map(s => <li key={s}>{s}</li>)}</ul></CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="font-sans text-emerald-400">Technological</CardTitle></CardHeader>
              <CardContent><ul className="space-y-2 list-disc list-inside text-neutral-400">{pest.technological.map(t => <li key={t}>{t}</li>)}</ul></CardContent>
            </Card>
          </div>
        </div>

      </div>
    </section>
  )
}
