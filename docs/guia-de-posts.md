# Guia de posts do blog

Como transformar um material da Dra. Camilla (texto, roteiro de Reels, carrossel, áudio transcrito, PDF) em um artigo que a mãe encontra no Google.

## Fluxo

1. **Material bruto** → a Dra. Camilla preenche o formulário do documento "Modelo de post para o blog" e o Gustavo envia no chat.
2. **Proposta de SEO** → antes de escrever, definimos:
   - a busca principal (como a mãe digitaria no Google);
   - 3 a 5 buscas relacionadas;
   - título, URL e resumo para o Google;
   - estrutura de subtítulos (H2) e perguntas frequentes.
3. **Texto** → escrito no tom da marca a partir do material, sem acrescentar conteúdo clínico que não esteja nele.
4. **Revisão clínica** da Dra. Camilla.
5. **Publicação** → arquivo `.mdx` em `src/content/blog/`, `draft: false`. Commit e push na `main` → a Vercel publica em ~1 min.
6. **Distribuição** → postagem "Novidade" no Google Meu Negócio (2–3 frases + link) e legenda para o Instagram.

## Como a mãe pesquisa

Ela não pesquisa como médica. Pesquisa como está se sentindo, muitas vezes de madrugada e no celular.

| Termo técnico | Como ela digita |
|---|---|
| Introdução alimentar | "quando começar a dar comida pro bebê" |
| Regurgitação fisiológica | "bebê golfando muito é normal" |
| Dermatite de fraldas | "assadura no bebê o que passar" |
| Marcos do desenvolvimento | "com quantos meses o bebê senta" |
| Cólica do lactente | "bebê chorando muito à noite cólica" |

Padrões que funcionam:
- **Pergunta direta:** "é normal…?", "quando…?", "com quantos meses…?", "o que fazer quando…?"
- **Sintoma + idade:** "febre bebê 6 meses", "tosse criança 2 anos"
- **Local**, nas páginas de serviço, não nos artigos: "pediatra particular Boa Viagem", "pediatra perto de Boa Viagem", "pediatra Candeias", "pediatra Reserva do Paiva"

## Público e território

- **Bairros priorizados:** Boa Viagem (incluindo Setúbal), orla do Pina, Piedade, Candeias e Reserva do Paiva. A lista fica em `src/data/site.ts → regiao`.
- **Público:** famílias A/B/C que escolhem pediatria particular.
- **Como o texto atrai esse público:** pelo posicionamento, e não por exclusão. Usar termos como "particular", "consulta de 1 hora", "acompanhamento próximo", "do pré-natal à adolescência" e "pediatria baseada em evidências".
- Nunca usar no site linguagem que exclua ou rotule público por renda.

## Checklist de cada post

**Título (até ~60 caracteres)**
- Contém a busca principal, de preferência no começo.
- Promete uma resposta: "…: quando se preocupar", "…: o que fazer".

**URL**
- Curta, sem acentos, com a busca principal: `/blog/bebe-golfando-e-normal/`.
- Não mudar depois de publicado.

**Resumo para o Google (120–160 caracteres)**
- Responde ao "isso é pra mim?" e convida ao clique.

**Corpo**
- Primeiro parágrafo responde a pergunta em 2–3 frases. Quem tem pressa já sai com a resposta.
- Subtítulos (H2) em forma de pergunta, com as buscas relacionadas.
- Parágrafos curtos, listas quando houver passos ou sinais.
- Quando aplicável, bloco **"quando procurar atendimento"**, com os sinais de alerta.
- 1 citação em destaque (`>`) com uma frase-assinatura da Dra. Camilla.
- Links internos: para 1–2 outros posts e para `/consultas/`.
- Tom: calmo, elegante, acolhedor. Sem culpa, sem alarmismo, sem promessas.

**Autoridade (E-E-A-T)**
- Referências: SBP, Ministério da Saúde, OMS, AAP. Só as que realmente sustentam o texto.
- Data de revisão sempre que o conteúdo for atualizado.

**Perguntas frequentes (2–4)**
- Perguntas reais de consultório e da caixinha do Instagram.
- Respostas curtas, de 1–2 frases. Podem aparecer em destaque no Google.

**Regras definidas pela Dra. Camilla**
- Não citar horários de atendimento (são informados no agendamento) nem preço.
- Pagamento, quando citado: PIX ou espécie.
- Listas de sinais de alerta são sempre **exemplos**, com aviso de que não são completas.
- Evitar frases que soem como crítica a colegas (ex.: "cuidar bem leva tempo" ao falar da duração da consulta).
- Retorno inclui exame físico; nova consulta = nova queixa, nova doença ou avaliação fora do prazo combinado.
- Não incluir fotos de regiões íntimas nem orientar o envio delas.

**Publicidade médica (Resolução CFM 2.336/2023)**
- Sem promessa de resultado, sem "melhor pediatra", sem preço no post.
- Sem fotos de pacientes identificáveis sem autorização.

## Categorias

Recém-nascido · Puericultura · Alimentação · Sono · Vacinas · Saúde do dia a dia · Gestação e pré-natal

Para criar uma nova categoria, ajustar `src/content.config.ts` e `keystatic.config.ts`.

## Ritmo

2 posts por mês, com regularidade, vale mais do que 10 de uma vez. Cada post publicado pode virar 1 carrossel e 1 Reels apontando para o site.
