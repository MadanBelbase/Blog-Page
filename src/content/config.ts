import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.union([z.date(), z.string().transform(str => new Date(str))]),
    tags: z.array(z.string()).optional().default([]),
    categories: z.array(z.string()).optional().default([]),
    draft: z.boolean().optional().default(false),
  }),
});

const notes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.union([z.date(), z.string().transform(str => new Date(str))]),
    topics: z.array(z.string()).optional().default([]),
    draft: z.boolean().optional().default(false),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    description: z.string(),
    techStack: z.array(z.string()),
    githubLink: z.string().url().optional(),
    liveDemo: z.string().url().optional(),
    docLink: z.string().url().optional(),
    status: z.enum(['Active', 'Completed']),
    featured: z.boolean().optional().default(false),
    order: z.number().optional().default(99),
  }),
});

const research = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.union([z.date(), z.string().transform(str => new Date(str))]),
    description: z.string(),
    type: z.enum(['paper', 'summary', 'experiment', 'replication', 'idea', 'dataset', 'benchmark', 'reading-list']),
    paperUrl: z.string().url().optional(),
    githubUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    venue: z.string().optional(),
    status: z.string().optional(),
  }),
});

const bookmarks = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    url: z.string().url(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
    pubDate: z.union([z.date(), z.string().transform(str => new Date(str))]),
  }),
});

export const collections = {
  blog,
  notes,
  projects,
  research,
  bookmarks,
};