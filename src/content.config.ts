import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
		}),
});

const works = defineCollection({
	loader: glob({ base: './src/content/works', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),                      // 프로젝트명
		subtitle: z.string(),                   // 한 줄 컨셉
		slug: z.string().optional(),            // 파일명이 id라 표시용
		year: z.number(),
		category: z.string(),                   // 예: 공간·콘텐츠 기획
		role: z.array(z.string()),              // 배열로 변경
		period: z.string().optional(),
		partner: z.string().optional(),         // 발주/실행 구조
		summary: z.string(),
		quote: z.string(),
		accent: z.string().default('#4b47b3'),  // 스파인 색
		ink: z.string().default('#f4f1e6'),
		cover: z.string().optional(),
		links: z.array(z.object({
			label: z.string(),
			url: z.string(),
		})).optional(),
		order: z.number().default(99),          // 진열 순서
		draft: z.boolean().default(false),
	}),
});

const timeline = defineCollection({
	loader: glob({ base: './src/content/timeline', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
	}),
});

export const collections = { blog, works, timeline };