# Site · Dra. Camilla Arouca, Pediatra

Site institucional + blog, feito em **Astro** (páginas estáticas, ótimas para SEO), hospedado na **Vercel**, com painel de edição **Keystatic** para a Dra. Camilla publicar artigos sem mexer em código.

## Estrutura

Baseada no documento "Site profissional — Dra. Camilla Arouca".

| Página | Endereço | Busca principal |
|---|---|---|
| Início | `/` | pediatra particular perto de Boa Viagem |
| Sobre | `/sobre/` | nome, CRM e formação (credibilidade) |
| Consultas | `/consultas/` | visão geral das três consultas |
| Pré-natal pediátrico | `/consultas/pre-natal-pediatrico/` | consulta pré-natal pediátrica |
| Rotina e puericultura | `/consultas/puericultura/` | puericultura, consulta de rotina |
| Queixas agudas | `/consultas/queixas-agudas/` | pediatra para febre e tosse, sábado |
| Como funciona e o espaço | `/como-funciona/` | duração, recibo para reembolso, o que levar, local |
| Dúvidas frequentes | `/duvidas/` | perguntas das famílias, por tema |
| Blog | `/blog/` | entra no menu a partir de 4 posts (`blogNoMenuAPartirDe` em `site.ts`) |

Onde editar o conteúdo:
- Dados de contato, horários e bairros: `src/data/site.ts`
- Dúvidas frequentes: `src/data/duvidas.ts`. Cada pergunta indica em que páginas aparece. Quando houver um post sobre o tema, preencha `post: '/blog/url-do-post/'` para mostrar o link "Leia o artigo completo".
- Textos das páginas: `src/pages/`

SEO configurado: título e descrição por página, URL canônica, preview no WhatsApp/Instagram, sitemap, robots, RSS, breadcrumbs e dados estruturados (`Physician`, `MedicalWebPage`, `FAQPage`, `Person`, `BreadcrumbList`).

## Fonte Featherly

O guia visual usa a Featherly nas frases manuscritas. Coloque o arquivo em `public/fonts/featherly.woff2` e o site passa a usá-la automaticamente. Se a fonte estiver em `.otf` ou `.ttf`, converta para `.woff2`. Confirme antes se a licença permite uso na web. Sem o arquivo, o site usa a Satisfy.

## Antes de publicar (TODO)

1. **`src/data/site.ts`**: WhatsApp, horários exatos, coordenadas exatas e, depois de criado, o link do perfil no Google Business.
2. **`src/data/duvidas.ts`**: incluir a regra de dúvidas pós-consulta (há um TODO marcado).
3. **Domínio**: registrar no Registro.br e atualizar em `site.ts`, `astro.config.mjs` e `public/robots.txt`.
4. **Privacidade**: revisar o texto com assessoria jurídica.
5. Revisar tudo à luz da **Resolução CFM 2.336/2023** (publicidade médica).

## Blog

O blog começa vazio e a página mostra um aviso de "em breve". Para criar posts:

- **Guia de escrita e SEO:** `docs/guia-de-posts.md`
- **Modelo:** `docs/modelo-de-post.mdx`. Copie para `src/content/blog/<url>.mdx`.
- Ou escreva direto pelo painel `/keystatic`.

## Rodar localmente

```bash
npm install
npm run dev        # http://localhost:4321  ·  painel em http://localhost:4321/keystatic
npm run build
```

No modo dev, o painel grava direto nos arquivos `.mdx` locais.

## Publicar na Vercel

1. Crie um repositório no GitHub e suba este projeto.
2. Na Vercel: *Add New Project* → importe o repositório (framework detectado: Astro).
3. Em *Domains*, aponte o domínio `.com.br`.

## Painel de edição em produção (Keystatic + GitHub)

Para a Dra. Camilla escrever direto em `https://seudominio/keystatic`:

1. Com o projeto rodando localmente, acesse `/keystatic`. Defina `PUBLIC_KEYSTATIC_REPO=usuario/repo` no `.env` e o Keystatic guia a criação de um **GitHub App** (gera client ID/secret).
2. Copie as variáveis do `.env` gerado (`KEYSTATIC_GITHUB_CLIENT_ID`, `KEYSTATIC_GITHUB_CLIENT_SECRET`, `KEYSTATIC_SECRET`, `PUBLIC_KEYSTATIC_GITHUB_APP_SLUG`, `PUBLIC_KEYSTATIC_REPO`) para *Settings → Environment Variables* na Vercel.
3. Adicione a conta GitHub da Dra. Camilla como colaboradora do repositório.

Cada artigo salvo vira um commit; a Vercel publica sozinha em ~1 minuto.

## Depois de no ar

- **Google Search Console**: verificar domínio e enviar `sitemap-index.xml`.
- **Google Business Profile**: categoria "Pediatra", fotos, horários, link para o site. É o principal canal para buscas locais.
- **Métricas**: Vercel Web Analytics (sem cookies) ou GA4 (exige banner de cookies).
- **Doctoralia** e **Instagram** apontando para o site e para os artigos.
- Ritmo sugerido: 2 artigos/mês, cada um respondendo a uma dúvida real das consultas.
