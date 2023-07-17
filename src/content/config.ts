import { defineCollection, z } from "astro:content";

const articles = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
    tags: z.array(z.any()),
    heroImage: z.string().optional(),
  }),
});

export const collections = { articles };
