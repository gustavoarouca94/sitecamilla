import type { APIRoute } from 'astro';
import { site } from '../data/site';

export const GET: APIRoute = () => {
  const corpo = site.lancado
    ? `User-agent: *\nAllow: /\nDisallow: /keystatic/\nDisallow: /api/\n\nSitemap: ${site.url}/sitemap-index.xml\n`
    : `# Pré-lançamento: site fora dos buscadores até site.lancado = true\nUser-agent: *\nDisallow: /\n`;
  return new Response(corpo, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
