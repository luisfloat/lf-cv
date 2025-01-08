import { defineCollection, z } from 'astro:content';

const cvCollection = defineCollection({
  type: 'content',
  schema: z.object({
    role: z.string(),
    draft: z.boolean().default(false),
    keywords: z.array(z.string()),
    noContact: z.array(z.string()),
  }),
});

export const collections = {
  'cv': cvCollection,
};
