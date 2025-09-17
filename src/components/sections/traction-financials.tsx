import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Target, Rocket, TrendingUp } from "lucide-react";

const financialData = [
  { year: "Year 1", units: 500, revenue: "₦125,000" },
  { year: "Year 2", units: 1500, revenue: "₦375,000" },
  { year: "Year 3", units: 3500, revenue: "₦875,000" },
];

export function TractionFinancials() {
  return (
    <section id="traction" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 space-y-24">
        
        {/* Traction & ExO Canvas */}
        <div>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">Traction & Vision</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our journey from a powerful idea to a scalable global solution.
            </p>
          </div>
          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
            <Card className="bg-card">
              <CardHeader>
                <Target className="h-10 w-10 mx-auto text-primary" />
                <CardTitle className="font-headline mt-4">MTP (Massive Transformative Purpose)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">"Empowering communities with sustainable cooling to unlock potential and preserve futures."</p>
              </CardContent>
            </Card>
            <Card className="bg-card">
              <CardHeader>
                <Rocket className="h-10 w-10 mx-auto text-primary" />
                <CardTitle className="font-headline mt-4">Pilot Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground space-y-1">
                  <li>3 Clinics</li>
                  <li>5 Shops</li>
                  <li>10 Households</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-card">
              <CardHeader>
                <TrendingUp className="h-10 w-10 mx-auto text-primary" />
                <CardTitle className="font-headline mt-4">Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Scale across Africa → export globally.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Financial Projections */}
        <div id="financials">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">Financial Projections</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A sustainable financial model designed for exponential growth and long-term profitability.
            </p>
          </div>
          <Card className="mt-12 bg-card">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-headline text-lg">Year</TableHead>
                  <TableHead className="text-center font-headline text-lg">Units Sold</TableHead>
                  <TableHead className="text-right font-headline text-lg">Revenue</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {financialData.map((data) => (
                  <TableRow key={data.year}>
                    <TableCell className="font-medium">{data.year}</TableCell>
                    <TableCell className="text-center">{data.units.toLocaleString()}</TableCell>
                    <TableCell className="text-right font-mono">{data.revenue}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>

      </div>
    </section>
  );
}
