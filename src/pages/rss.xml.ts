import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { publishedPosts } from '../lib/blog';
import { site } from '../data/site';

export async function GET(context: APIContext) {
  const posts = await publishedPosts();
  return rss({
    title: `Blog · ${site.nome}`,
    description: site.descricao,
    site: context.site ?? site.url,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.pubDate,
      link: `/blog/${p.id}/`,
      categories: [p.data.category],
    })),
    customData: '<language>pt-br</language>',
  });
}
