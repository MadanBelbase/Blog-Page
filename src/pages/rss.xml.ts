import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: any) {
  const blogs = await getCollection('blog', ({ data }) => !data.draft);
  const notes = await getCollection('notes', ({ data }) => !data.draft);

  const items = [
    ...blogs.map(item => ({
      title: item.data.title,
      pubDate: new Date(item.data.pubDate),
      description: item.data.description,
      link: `/blog/${item.slug}/`,
    })),
    ...notes.map(item => ({
      title: item.data.title,
      pubDate: new Date(item.data.pubDate),
      description: item.data.description || '',
      link: `/notes/${item.slug}/`,
    }))
  ].sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

  return rss({
    title: 'Madan Belbase\'s Notebook',
    description: 'Technical notes, articles, and research on Machine Learning and Software Engineering.',
    site: context.site || 'https://madanbelbase.com.np',
    items: items,
  });
}
