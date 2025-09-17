'use server';

/**
 * @fileOverview A flow to optimize pitch text for the SolarChill Solutions website, tailoring messaging to specific audiences.
 *
 * - optimizePitchText - A function that accepts a text and target audience and returns optimized text.
 * - OptimizePitchTextInput - The input type for the optimizePitchText function.
 * - OptimizePitchTextOutput - The return type for the optimizePitchText function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const OptimizePitchTextInputSchema = z.object({
  text: z
    .string()
    .describe("The text to be optimized, such as a description of market opportunity or impact metrics."),
  targetAudience: z
    .string()
    .describe("The target audience for the text (e.g., NGOs, investors, general public)."),
});
export type OptimizePitchTextInput = z.infer<typeof OptimizePitchTextInputSchema>;

const OptimizePitchTextOutputSchema = z.object({
  optimizedText: z
    .string()
    .describe("The optimized text, tailored to the specified target audience."),
  reasoning: z
    .string()
    .describe("Explanation of why the text was optimized in this way."),
});
export type OptimizePitchTextOutput = z.infer<typeof OptimizePitchTextOutputSchema>;

export async function optimizePitchText(input: OptimizePitchTextInput): Promise<OptimizePitchTextOutput> {
  return optimizePitchTextFlow(input);
}

const optimizePitchTextPrompt = ai.definePrompt({
  name: 'optimizePitchTextPrompt',
  input: {schema: OptimizePitchTextInputSchema},
  output: {schema: OptimizePitchTextOutputSchema},
  prompt: `You are an expert marketing copywriter specializing in crafting compelling, data-driven messaging for sustainable solutions.

You will receive a text snippet and a target audience. Your task is to rewrite the text to be more effective for that audience, taking into account the specific concerns and interests of that audience.

Provide the optimized text and a brief explanation of your reasoning.

Original Text: {{{text}}}
Target Audience: {{{targetAudience}}}
`,
});

const optimizePitchTextFlow = ai.defineFlow(
  {
    name: 'optimizePitchTextFlow',
    inputSchema: OptimizePitchTextInputSchema,
    outputSchema: OptimizePitchTextOutputSchema,
  },
  async input => {
    const {output} = await optimizePitchTextPrompt(input);
    return output!;
  }
);
