import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    projects: defineCollection({
      type: 'page',
      source: 'projects/*.md',
      schema: z.object({
        title: z.string(),
        tagline: z.string(),
        status: z.string().optional(),
        featured: z.boolean().optional(),
        order: z.number().optional(),
        demoUrl: z.string().nullable().optional(),
        repoUrl: z.string().nullable().optional(),
        videoUrl: z.string().nullable().optional(),
        stack: z.array(z.string()),
        role: z.string().optional(),
        timeline: z.array(z.object({
          date: z.string(),
          label: z.string(),
          description: z.string()
        })).optional(),
        challenges: z.array(z.object({
          problem: z.string(),
          solution: z.string()
        })).optional(),
        results: z.array(z.string()).optional(),
        nextSteps: z.array(z.string()).optional()
      })
    }),
    pages: defineCollection({
      type: 'page',
      source: 'pages/*.md',
      schema: z.object({
        title: z.string(),
        intro: z.string(),
        heroText: z.string().optional()
      })
    })
  }
})