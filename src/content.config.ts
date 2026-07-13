import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
		}),
});


const works = defineCollection({
	loader: glob({ base: './src/content/works', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
	  title: z.string(),            // 프로젝트명 (스파인 가운데 큰 글씨)
	  subtitle: z.string(),         // 한 줄 컨셉 — Stripe의 부제 자리
	  role: z.string(),             // 코니의 실제 역할 (스파인 왼쪽, "저자" 자리)
	  year: z.number(),             // 정렬 및 표시용
	  accent: z.string().default('#4b47b3'), // 스파인/포인트 색 (없으면 기본값)
	  ink: z.string().default('#f4f1e6'),    // 스파인 위 글자색 (밝은 색 위면 어둡게 바꾸기)
	  partner: z.string().optional(),        // 협업사/발주 구조 (예: "무브컬처 협업")
	  cover: z.string().optional(),          // 나중에 표지/사진 생기면 경로만 추가
	  links: z.array(z.object({              // 상세 페이지 상단 태그형 링크 (Website / 보도 등)
		label: z.string(),
		url: z.string(),
	  })).optional(),
	  draft: z.boolean().default(false),     // true면 목록에서 숨김
	}),
  });
   
  export const collections = { blog, works };
  