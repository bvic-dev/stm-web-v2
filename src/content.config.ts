import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const legal = defineCollection({
  loader: glob({ base: 'src/content', pattern: '*/mobile/*.md' }),
  schema: z.object({
    head: z.object({
      title: z.string(),
      description: z.string(),
    }),
    title: z.string(),
  }),
});

export const collections = { legal };
