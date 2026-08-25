import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		dek: z.string(),
		tag: z.enum(['LIFE', 'INFRA', 'DESIGN']),
		subtag: z.string().optional(),
		pubDate: z.coerce.date(),
		heroImage: z.string(),
		heroCredit: z.string().optional(),
	}),
});

const works = defineCollection({
	loader: glob({ base: './src/content/works', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		year: z.number(),
		tag: z.string(),
		category: z.string(),
		period: z.string().optional(),
		heroImage: z.string().optional(),
		heroVideo: z.string().optional(),
		closingImage: z.string().optional(),
		quote: z.string(),
		info: z.array(z.object({ label: z.string(), value: z.string() })),
		order: z.number().default(99),
		draft: z.boolean().default(false),
	}),
});

const cityQuestion = defineCollection({
	loader: glob({ base: './src/content/city-question', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		code: z.string(),
		status: z.string(),
		title: z.string(),
		desc: z.string(),
		pubDate: z.coerce.date(),
		heroImage: z.string(),
	}),
});

export const collections = { blog, works, cityQuestion };
