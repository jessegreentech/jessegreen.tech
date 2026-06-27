import { defineCollection, z } from 'astro:content';

const writing = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    pillar: z.string(),
    readTime: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { writing };
