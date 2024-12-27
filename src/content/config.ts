import { file } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  loader: file("src/content/projects.json"),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    tech: z.array(z.string()),
  }),
});

export const collections = {
  projects,
};
