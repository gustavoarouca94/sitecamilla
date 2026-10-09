// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://www.camillaarouca.com.br', // manter igual a src/data/site.ts
  trailingSlash: 'ignore', // 'always' quebra as rotas /api/keystatic do painel
  // Páginas são estáticas (ótimo para SEO); só o painel /keystatic roda sob demanda na Vercel.
  output: 'static',
  adapter: vercel(),
  integrations: [
    mdx(),
    react(),
    keystatic(),
    sitemap({
      filter: (page) => !page.includes('/keystatic') && !page.includes('/api/'),
      i18n: { defaultLocale: 'pt-BR', locales: { 'pt-BR': 'pt-BR' } },
    }),
  ],
  image: { responsiveStyles: true },
});
