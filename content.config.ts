import { defineContentConfig, defineCollection, z } from '@nuxt/content'

type CollectionOptions = Parameters<typeof defineCollection>[0]
type Schema = NonNullable<CollectionOptions['schema']>
type Source = string | { include: string; prefix?: string }

const locales = ['fr', 'en']

const timelineSchema = z.array(z.object({
  date: z.string(),
  label: z.string(),
  description: z.string()
}))

const projectSchema = z.object({
  title: z.string(),
  tagline: z.string(),
  status: z.enum(['production', 'development', 'archived']).optional(),
  featured: z.boolean().optional(),
  order: z.number().optional(),
  prodUrl: z.string().nullable().optional(),
  demoUrl: z.string().nullable().optional(),
  repoUrl: z.string().nullable().optional(),
  videoUrl: z.string().nullable().optional(),
  stack: z.array(z.string()),
  role: z.string().optional(),
  timeline: timelineSchema.optional(),
  challenges: z.array(z.object({
    problem: z.string(),
    solution: z.string()
  })).optional(),
  metrics: z.array(z.object({
    label: z.string(),
    before: z.string(),
    after: z.string(),
    note: z.string().optional()
  })).optional(),
  results: z.array(z.string()).optional(),
  nextSteps: z.array(z.string()).optional(),
  gallery: z.array(z.object({
    src: z.string(),
    alt: z.string(),
    width: z.number(),
    height: z.number(),
    caption: z.string().optional()
  })).optional(),
  galleryColumns: z.number().optional()
})

const homeSchema = z.object({
  title: z.string(),
  intro: z.string(),
  heroText: z.string().optional(),
  work: z.string(),
  activities: z.string(),
  timeline: timelineSchema.optional()
})

// Adaptez ce schéma au contenu réel de votre resume.md
const resumeSchema = z.object({
  title: z.string(),
  summary: z.string(),
  experience: z.array(z.object({
    period: z.string(),
    role: z.string(),
    company: z.string(),
    location: z.string().optional(),
    bullets: z.array(z.string())
  })),
  education: z.array(z.object({
    period: z.string(),
    title: z.string(),
    place: z.string()
  })).optional(),
  languages: z.array(z.object({
    name: z.string(),
    level: z.string()
  })).optional()
})

// Adaptez ce schéma au contenu réel de votre resume.md
const stackSchema = z.object({
  title: z.string(),
  intro: z.string()
  })

const perLocale = (name: string, source: (locale: string) => Source, schema: Schema) =>
  Object.fromEntries(
    locales.map(l => [
      `${name}_${l}`,
      defineCollection({ type: 'page', source: source(l), schema })
    ])
  )

export default defineContentConfig({
  collections: {
    ...perLocale('projects', l => ({ include: `${l}/projects/*.md`, prefix: '/projects' }), projectSchema),
    ...perLocale('home', l => `${l}/pages/home.md`, homeSchema),
    ...perLocale('resume', l => `${l}/pages/resume.md`, resumeSchema),
    ...perLocale('stack', l => `${l}/pages/stack.md`, stackSchema)
  }
})