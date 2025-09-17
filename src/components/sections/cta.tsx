"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type FormValues = z.infer<typeof formSchema>;

export function Cta() {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  function onSubmit(values: FormValues) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll be in touch soon.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-card to-card" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">
              Join Us in Cooling the Future Sustainably.
            </h2>
            <p className="text-lg text-muted-foreground">
              Whether you're an investor, a potential partner, or a community in need, we want to hear from you. Let's work together to create a world where sustainable cooling is accessible to all.
            </p>
            <div className="text-2xl font-bold font-headline text-primary">
              Scale across Africa → Export Globally
            </div>
          </div>
          <Card className="bg-background/70 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>Fill out the form below and our team will get back to you.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="How can we help?" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
