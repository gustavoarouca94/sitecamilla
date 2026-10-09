import { config, fields, collection } from '@keystatic/core';

// Em desenvolvimento (npm run dev) o painel grava direto nos arquivos locais.
// Em produção, grava no GitHub: defina PUBLIC_KEYSTATIC_REPO=usuario/repositorio na Vercel
// e siga o README (seção "Painel de edição") para criar o GitHub App.
const repo = import.meta.env.PUBLIC_KEYSTATIC_REPO as `${string}/${string}` | undefined;

export default config({
  storage: import.meta.env.PROD && repo ? { kind: 'github', repo } : { kind: 'local' },
  ui: {
    brand: { name: 'Dra. Camilla Arouca' },
  },
  locale: 'pt-BR',
  collections: {
    blog: collection({
      label: 'Artigos do blog',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      entryLayout: 'content',
      columns: ['title', 'pubDate'],
      schema: {
        title: fields.slug({
          name: { label: 'Título', description: 'Escreva como a mãe pesquisaria no Google. Ex.: "Febre em bebê: quando ir à emergência"' },
          slug: { label: 'Endereço (URL)', description: 'Gerado a partir do título. Evite mudar depois de publicado.' },
        }),
        description: fields.text({
          label: 'Resumo para o Google',
          description: 'Até 160 caracteres. Aparece abaixo do título nos resultados de busca.',
          multiline: true,
          validation: { length: { min: 50, max: 170 } },
        }),
        pubDate: fields.date({ label: 'Data de publicação', defaultValue: { kind: 'today' } }),
        updatedDate: fields.date({ label: 'Última revisão (opcional)' }),
        category: fields.select({
          label: 'Categoria',
          options: [
            { label: 'Recém-nascido', value: 'Recém-nascido' },
            { label: 'Puericultura', value: 'Puericultura' },
            { label: 'Alimentação', value: 'Alimentação' },
            { label: 'Sono', value: 'Sono' },
            { label: 'Vacinas', value: 'Vacinas' },
            { label: 'Saúde do dia a dia', value: 'Saúde do dia a dia' },
            { label: 'Gestação e pré-natal', value: 'Gestação e pré-natal' },
          ],
          defaultValue: 'Puericultura',
        }),
        tags: fields.array(fields.text({ label: 'Palavra-chave' }), {
          label: 'Palavras-chave',
          itemLabel: (p) => p.value,
        }),
        cover: fields.image({
          label: 'Imagem de capa (opcional)',
          directory: 'public/img/blog',
          publicPath: '/img/blog/',
        }),
        coverAlt: fields.text({ label: 'Descrição da imagem (acessibilidade e SEO)' }),
        references: fields.array(fields.text({ label: 'Referência' }), {
          label: 'Referências',
          description: 'SBP, Ministério da Saúde, OMS... Fortalece a autoridade do artigo.',
          itemLabel: (p) => p.value,
        }),
        faq: fields.array(
          fields.object({
            q: fields.text({ label: 'Pergunta' }),
            a: fields.text({ label: 'Resposta', multiline: true }),
          }),
          {
            label: 'Perguntas frequentes (opcional)',
            description: 'Perguntas reais das famílias. Podem aparecer em destaque no Google.',
            itemLabel: (p) => p.fields.q.value,
          },
        ),
        draft: fields.checkbox({ label: 'Rascunho (não publicar ainda)', defaultValue: false }),
        content: fields.mdx({ label: 'Texto do artigo' }),
      },
    }),
  },
});
