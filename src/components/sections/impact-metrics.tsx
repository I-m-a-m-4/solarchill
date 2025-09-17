"use client"

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"

const impactData = [
  { name: 'Safe Storage', value: 85, fill: "hsl(var(--primary))" },
  { name: 'Reduced Spoilage', value: 60, fill: "hsl(var(--primary))" },
  { name: 'Lower CO2', value: 75, fill: "hsl(var(--primary))" },
]

const chartConfig = {
  value: {
    label: "%",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;


export function ImpactMetrics() {
  return (
    <section id="impact" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-400">Our Impact</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Measuring what matters: a tangible, positive change for people and the planet.
          </p>
        </div>
        <Card className="mt-16 max-w-4xl mx-auto bg-background/50">
          <CardHeader>
            <CardTitle>Key Performance Indicators (%)</CardTitle>
            <CardDescription>Projected improvements based on pilot studies.</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={impactData} margin={{ top: 20, right: 20, left: -10, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))"/>
                  <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" unit="%" />
                  <Tooltip
                    cursor={{ fill: 'hsl(var(--muted))' }}
                    content={<ChartTooltipContent indicator="dot" />}
                  />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
