// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';

// Painel /keystatic: sempre no `npm run dev`; em produção só quando o GitHub App estiver configurado
// (variável PUBLIC_KEYSTATIC_REPO na Vercel). Sem isso, o painel não é publicado.
const comPainel = process.argv.includes('dev') || Boolean(process.env.PUBLIC_KEYSTATIC_REPO);

export default defineConfig({
  site: 'https://www.camillaaroucapediatra.com.br', // manter igual a src/data/site.ts
  trailingSlash: 'ignore', // 'always' quebra as rotas /api/keystatic do painel
  // Páginas são estáticas (ótimo para SEO); só o painel /keystatic roda sob demanda na Vercel.
  output: 'static',
  adapter: vercel(),
  integrations: [
    mdx(),
    react(),
    ...(comPainel ? [keystatic()] : []),
    sitemap({
      filter: (page) => !page.includes('/keystatic') && !page.includes('/api/'),
      i18n: { defaultLocale: 'pt-BR', locales: { 'pt-BR': 'pt-BR' } },
    }),
  ],
  image: { responsiveStyles: true },
  // Atalhos curtos com rastreio (para Google Meu Negócio, Instagram etc.).
  redirects: {
    '/gmn': { status: 302, destination: '/?utm_source=google&utm_medium=perfil&utm_campaign=gmn' },
    '/insta': { status: 302, destination: '/?utm_source=instagram&utm_medium=bio&utm_campaign=perfil' },
  },
});
