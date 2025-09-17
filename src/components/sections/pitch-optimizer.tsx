"use client"

import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useState } from "react"

import { handlePitchOptimization } from "@/app/actions"
import type { OptimizePitchTextOutput } from "@/ai/flows/optimize-pitch-text"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Bot, Lightbulb } from "lucide-react"

const formSchema = z.object({
  text: z.string().min(20, "Please enter at least 20 characters."),
  targetAudience: z.string({ required_error: "Please select a target audience." }),
})

type FormValues = z.infer<typeof formSchema>

export function PitchOptimizer() {
  const [result, setResult] = useState<OptimizePitchTextOutput | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: "Our Solar-Powered Cold Box reduces post-harvest loss by 45% and lowers carbon footprint by 2 tons per unit annually. We project to sell 500 units in Year 1, generating €125,000 in revenue.",
      targetAudience: "Investors",
    },
  })

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true)
    setResult(null)
    const response = await handlePitchOptimization(data)
    setIsLoading(false)

    if (response.success && response.data) {
      setResult(response.data)
    } else {
      toast({
        variant: "destructive",
        title: "Optimization Failed",
        description: response.error || "An unknown error occurred.",
      })
    }
  }

  return (
    <section id="pitch-optimizer" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-400">AI Pitch Optimizer</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tailor your message for maximum impact. Select an audience and let our AI craft the perfect pitch.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-12">
          <Card className="bg-background/50">
            <CardHeader>
              <CardTitle>Craft Your Pitch</CardTitle>
              <CardDescription>Enter your text and choose your audience.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="text"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Original Text</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Enter your pitch text here..." className="min-h-[150px]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="targetAudience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Target Audience</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select an audience" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Investors">Investors</SelectItem>
                            <SelectItem value="NGOs">NGOs & Partners</SelectItem>
                            <SelectItem value="General Public">General Public</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isLoading} className="w-full">
                    {isLoading ? "Optimizing..." : "Optimize with AI"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            <Card className="bg-background/50 h-fit">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Bot className="text-primary"/> AI-Optimized Text</CardTitle>
              </CardHeader>
              <CardContent>
                {isLoading && <p className="text-muted-foreground italic">Generating optimized text...</p>}
                {result ? (
                  <p className="text-foreground">{result.optimizedText}</p>
                ) : (
                  !isLoading && <p className="text-muted-foreground">Your optimized text will appear here.</p>
                )}
              </CardContent>
            </Card>
            <Card className="bg-background/50 h-fit">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Lightbulb className="text-yellow-400" /> Reasoning</CardTitle>
              </CardHeader>
              <CardContent>
                {isLoading && <p className="text-muted-foreground italic">Generating reasoning...</p>}
                {result ? (
                  <p className="text-foreground/80 text-sm">{result.reasoning}</p>
                ) : (
                  !isLoading && <p className="text-muted-foreground">The AI's reasoning for the changes will appear here.</p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
