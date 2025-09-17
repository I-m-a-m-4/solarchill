"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, Pie, PieChart, Cell, XAxis, YAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig
} from "@/components/ui/chart"

const marketData = [
  { segment: 'Shops', units: 120, fill: 'var(--color-shops)' },
  { segment: 'Clinics', units: 80, fill: 'var(--color-clinics)' },
  { segment: 'MVP', units: 60, fill: 'var(--color-mvp)' },
  { segment: 'Households', units: 40, fill: 'var(--color-households)' },
  { segment: 'NGOs', units: 20, fill: 'var(--color-ngos)' },
]

const businessData = [
  { model: 'Direct Sales', revenue: 55, fill: 'var(--color-direct)' },
  { model: 'Leasing', revenue: 30, fill: 'var(--color-leasing)' },
  { model: 'Service', revenue: 15, fill: 'var(--color-service)' },
]

const marketChartConfig = {
  units: {
    label: "Units",
  },
  shops: {
    label: "Shops",
    color: "hsl(var(--chart-1))",
  },
  clinics: {
    label: "Clinics",
    color: "hsl(var(--chart-2))",
  },
  mvp: {
    label: "MVP",
    color: "hsl(var(--chart-3))",
  },
  households: {
    label: "Households",
    color: "hsl(var(--chart-4))",
  },
  ngos: {
    label: "NGOs",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

const businessChartConfig = {
  revenue: {
    label: "Revenue (%)",
  },
  direct: {
    label: "Direct Sales",
    color: "hsl(var(--chart-1))",
  },
  leasing: {
    label: "Leasing",
    color: "hsl(var(--chart-2))",
  },
  service: {
    label: "Service & Maintenance",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

export function MarketBusiness() {
  return (
    <section id="market" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          <div>
            <h2 className="font-headline text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-400">Market Opportunity</h2>
            <p className="text-muted-foreground mb-8">
              A significant and diverse market exists for affordable, off-grid cooling solutions.
            </p>
            <Card className="bg-background/50 overflow-hidden">
              <CardHeader>
                <CardTitle>Target Segments (Projected Units)</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer config={marketChartConfig} className="w-full min-h-[200px] max-h-[400px]">
                  <BarChart 
                    accessibilityLayer 
                    data={marketData} 
                    layout="vertical" 
                    margin={{ left: 0, top: 20, right: 50 }}
                  >
                    <CartesianGrid horizontal={false} strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <YAxis
                      dataKey="segment"
                      type="category"
                      tickLine={false}
                      axisLine={false}
                      tick={{ fill: 'hsl(var(--muted-foreground))' }}
                    />
                    <XAxis dataKey="units" type="number" hide />
                    <ChartTooltip
                      cursor={{ fill: 'hsl(var(--accent))', opacity: 0.1 }}
                      content={<ChartTooltipContent indicator="dot" />}
                    />
                    <Bar dataKey="units" layout="vertical" radius={5}>
                      {marketData.map((entry) => (
                        <Cell key={entry.segment} fill={entry.fill} />
                      ))}
                      <LabelList
                        dataKey="units"
                        position="right"
                        offset={8}
                        className="fill-foreground text-sm"
                        formatter={(value: number) => `${value} Units`}
                      />
                    </Bar>
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>

          <div id="business-model">
            <h2 className="font-headline text-4xl font-bold mb-2">Business Model</h2>
            <p className="text-muted-foreground mb-8">
              Our multi-pronged approach ensures wide market penetration and sustainable growth.
            </p>
            <Card className="bg-background/50 overflow-hidden">
              <CardHeader>
                <CardTitle>Revenue Streams (Share %)</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 pb-0">
                <ChartContainer
                  config={businessChartConfig}
                  className="mx-auto w-full max-w-[300px] min-h-[200px] max-h-[350px]"
                >
                  <PieChart>
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent hideLabel />}
                    />
                    <Pie
                      data={businessData}
                      dataKey="revenue"
                      nameKey="model"
                      innerRadius={60}
                      strokeWidth={5}
                    >
                      {businessData.map((entry) => (
                        <Cell key={entry.model} fill={entry.fill} />
                      ))}
                      <LabelList
                        dataKey="model"
                        className="fill-background text-xs"
                        stroke="none"
                        fontSize={12}
                      />
                    </Pie>
                  </PieChart>
                </ChartContainer>
              </CardContent>
              <CardFooter className="flex-col gap-2 text-sm pt-4">
                <div className="flex items-center gap-2 font-medium leading-none text-muted-foreground">
                  Multi-pronged approach for sustainable growth <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                  Showing projected revenue share from different business models.
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}