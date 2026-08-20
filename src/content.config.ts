import { z, defineCollection } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    ai_personas: z.array(z.string()),
    topic: z.string(),
    verdict: z.enum(['won', 'lost', 'mixed']),
    description: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
