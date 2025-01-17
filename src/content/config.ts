import { file } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  loader: file("src/content/projects.json"),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    demo: z.string().optional(),
    short_description: z.string(),
    images: z.object({
      principal: z.string(),
      rest: z.array(z.string()).max(2),
    }),
    tech: z.array(z.string()),
  }),
});

export const collections = {
  projects,
};
