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
			rest: z.array(z.string()).max(4),
		}),
		tech: z.array(z.string()),
		repository: z.string(),
		real_site: z.string().optional(),
	}),
});

const about = defineCollection({
	loader: file("src/content/about.json"),
	schema: z.object({
		icon: z.enum(["Book", "Medal", "Network", "AppWindow"]),
		slug: z.string(),
		title: z.string(),
		description: z.string(),
		className: z.string(),
	}),
});

export const collections = {
	projects,
	about,
};
