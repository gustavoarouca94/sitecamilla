# Site · Dra. Camilla Arouca, Pediatra

Site institucional + blog, feito em **Astro** (páginas estáticas, ótimas para SEO), hospedado na **Vercel**, com painel de edição **Keystatic** para a Dra. Camilla publicar artigos sem mexer em código.

## Estrutura

| Página | Endereço | Foco de busca |
|---|---|---|
| Início | `/` | "pediatra Piedade", "pediatra perto de Boa Viagem" |
| Sobre | `/sobre/` | nome da médica, credenciais (E-E-A-T) |
| Consultas | `/consultas/` | puericultura, pré-natal pediátrico, FAQ |
| O consultório | `/consultorio/` | SEO local: The Garden, Piedade, Boa Viagem, Paiva |
| Blog | `/blog/` + `/blog/categoria/...` | conteúdo educativo |
| Contato | `/contato/` | agendamento |

SEO já configurado: título/descrição por página, URL canônica, Open Graph (preview no WhatsApp/Instagram), `sitemap-index.xml`, `robots.txt`, RSS, breadcrumbs e dados estruturados (`Physician`, `MedicalWebPage`, `FAQPage`, `BreadcrumbList`, `Person`).

## Antes de publicar (TODO)

1. **`src/data/site.ts`**: WhatsApp, horários exatos, coordenadas exatas e, depois de criado, o link do perfil no Google Business.
2. **Domínio**: registrar no Registro.br e atualizar em `site.ts`, `astro.config.mjs` e `public/robots.txt`.
3. **Sobre**: completar formação (pós-graduações, SBP/SOPEPE etc.).
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
