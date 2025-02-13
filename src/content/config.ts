import { defineCollection, z } from 'astro:content';

const cvCollection = defineCollection({
  type: 'content',
  schema: z.object({
    role: z.string(),
    draft: z.boolean().default(false),
    keywords: z.array(z.string()),
    noContact: z.array(z.string()),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
    location: z.string(),
  }),
});

export const collections = {
  'cv': cvCollection,
  schema: z.object({
    role: z.string(),
    company: z.string(),
    draft: z.boolean().default(false),
    keywords: z.array(z.string()),
    noContact: z.array(z.string()),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
    name: z.string(),
    location: z.string(),
  }),
};
