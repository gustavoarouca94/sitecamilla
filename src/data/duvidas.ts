// Perguntas frequentes, organizadas por tema (texto da Dra. Camilla).
// `paginas` indica em quais páginas de consulta a pergunta também aparece.
// `destaque` marca as cinco que aparecem na página inicial.
// `post` (opcional): quando existir um artigo do blog sobre o tema, coloque a URL dele aqui para mostrar o link "Leia mais".

export type Duvida = {
  q: string;
  a: string;
  paginas?: ('pre-natal-pediatrico' | 'puericultura' | 'queixas-agudas')[];
  destaque?: boolean;
  post?: string;
};

export const temas: { titulo: string; id: string; itens: Duvida[] }[] = [
  {
    titulo: 'Sobre a escolha da pediatra',
    id: 'escolha',
    itens: [
      {
        q: 'Tenho plano de saúde. Vale a pena ter uma pediatra particular?',
        a: 'Você não precisa abrir mão do plano. Ele continua útil para exames, internações e emergências. A pediatra de referência é quem conhece a história do seu filho, acompanha cada fase com tempo e ajuda a família a decidir com mais clareza. Se o seu plano oferece reembolso para consultas particulares, você pode solicitar diretamente à operadora com o recibo da consulta.',
        destaque: true,
      },
      {
        q: 'Por que a consulta dura cerca de 1 hora?',
        a: 'Porque cuidar bem leva tempo. Em uma hora, consigo ouvir suas dúvidas, conhecer o histórico, examinar com calma e avaliar alimentação, sono, desenvolvimento e vacinação. E você sai com um plano de cuidados por escrito.',
        destaque: true,
        paginas: ['puericultura'],
      },
      {
        q: 'Vou ser julgada pelas minhas escolhas?',
        a: 'Não. Aqui não existe mãe perfeita, existe a melhor escolha possível para o momento da sua família. Meu papel é trazer a melhor evidência e construir o caminho junto com você.',
      },
      {
        q: 'Tenho medo de estar exagerando. Devo marcar mesmo assim?',
        a: 'Nenhuma dúvida sobre o seu filho é boba. Muitas vezes, uma conversa tranquila evita semanas de preocupação. É para isso que estou aqui.',
        paginas: ['queixas-agudas'],
      },
    ],
  },
  {
    titulo: 'Febre e doenças do dia a dia',
    id: 'febre',
    itens: [
      {
        q: 'Meu filho está com febre. Quando devo ir à emergência?',
        post: '/blog/quando-levar-crianca-ao-pronto-socorro/',
        a: 'A febre é uma forma de o corpo se defender e, sozinha, nem sempre indica gravidade. Procure a emergência se houver dificuldade para respirar, criança muito sonolenta ou difícil de acordar, convulsão, sinais de desidratação, manchas na pele que não somem ao pressionar ou febre em bebês com menos de 3 meses. Nos outros casos, muitos quadros podem ser avaliados no consultório, que atende de segunda a sábado, conforme a agenda.',
        destaque: true,
        paginas: ['queixas-agudas'],
      },
      {
        q: 'Meu filho vive doente desde que entrou na escola. Isso é normal?',
        a: 'É comum que crianças pequenas tenham várias infecções no início da convivência com outras crianças, a maioria causada por vírus. A consulta ajuda a separar o que é esperado do que merece investigação, sem culpa: a escola também traz convivência e desenvolvimento.',
        paginas: ['queixas-agudas'],
      },
      {
        q: 'Meu filho precisa de antibiótico?',
        a: 'Muitas infecções da infância são virais e não melhoram com antibiótico. A decisão depende do exame físico e da história de cada criança. Por isso, a avaliação é sempre individual.',
        paginas: ['queixas-agudas'],
      },
    ],
  },
  {
    titulo: 'O bebê e os primeiros dias',
    id: 'bebe',
    itens: [
      {
        q: 'E se eu não conseguir amamentar?',
        a: 'A amamentação é aprendida, e dificuldades são comuns. No pré-natal pediátrico, conversamos e praticamos antes do bebê chegar. Se algo não sair como planejado, construímos juntos o melhor caminho para a sua família, sem julgamento.',
        paginas: ['pre-natal-pediatrico'],
      },
      {
        q: 'Meu bebê chora muito. É cólica ou é algo errado?',
        a: 'O choro é a forma de o bebê se comunicar, e alguns choram mais que outros. Na consulta, avaliamos o bebê como um todo e conversamos sobre sinais que merecem atenção e estratégias possíveis para a rotina.',
        paginas: ['pre-natal-pediatrico', 'puericultura'],
      },
      {
        q: 'Meu bebê não dorme a noite inteira. Estou fazendo algo errado?',
        a: 'O sono muda muito em cada fase, e acordar à noite costuma ser esperado nos primeiros meses. Conversamos sobre sono seguro e sobre uma rotina possível para a sua casa, sem fórmulas prontas.',
        destaque: true,
        paginas: ['puericultura'],
      },
    ],
  },
  {
    titulo: 'Alimentação, desenvolvimento e comportamento',
    id: 'desenvolvimento',
    itens: [
      {
        q: 'Meu filho come pouco. Ele está bem?',
        a: 'O apetite da criança varia, e comer pouco nem sempre é um problema. Avaliamos a curva de crescimento, a rotina e a relação com a comida antes de qualquer conclusão.',
        paginas: ['puericultura'],
      },
      {
        q: 'Quando começar a introdução alimentar?',
        a: 'Em geral, por volta dos 6 meses, conforme as orientações da Sociedade Brasileira de Pediatria. O momento certo depende também dos sinais de prontidão do bebê. Na consulta, montamos um plano prático para a rotina da família.',
        destaque: true,
        paginas: ['puericultura'],
      },
      {
        q: 'Meu filho ainda não fala ou não anda. Devo me preocupar?',
        a: 'Cada criança se desenvolve no seu tempo, dentro de marcos esperados para cada idade. Acompanhar esses marcos é parte da puericultura. Se algo merecer atenção, você saberá com clareza o próximo passo.',
        paginas: ['puericultura'],
      },
      {
        q: 'Quanto tempo de tela é aceitável?',
        a: 'A Sociedade Brasileira de Pediatria recomenda evitar telas antes dos 2 anos e limitar o uso depois. Na vida real, conversamos sobre escolhas possíveis, sem culpa, para a rotina da sua família.',
        paginas: ['puericultura'],
      },
      {
        q: 'Birras e limites: é só uma fase?',
        a: 'Birras fazem parte do desenvolvimento emocional. Na consulta, entendemos o contexto da criança e pensamos juntos em formas de acolher e colocar limites com segurança.',
        paginas: ['puericultura'],
      },
    ],
  },
  {
    titulo: 'Na prática',
    id: 'pratica',
    itens: [
      {
        q: 'A consulta é pelo plano de saúde?',
        a: 'Não. A consulta é particular e não atendemos por convênios. Emitimos recibo: se o seu plano oferece reembolso para consultas particulares, você pode solicitar diretamente à operadora, conforme as regras do plano.',
      },
      {
        q: 'Quais são as formas de pagamento?',
        a: 'PIX, cartão de crédito ou cartão de débito.',
      },
      {
        q: 'A consulta tem retorno?',
        post: '/blog/consulta-de-puericultura-o-que-e/',
        a: 'Quando eu indicar uma reavaliação breve, em poucos dias, do mesmo quadro clínico, o atendimento é considerado retorno e não há novo pagamento. Uma nova queixa, uma nova doença, a necessidade de exame físico ou uma avaliação fora do prazo combinado são consideradas uma nova consulta.',
      },
      {
        q: 'Você atende aos sábados?',
        a: 'Sim. O atendimento é de segunda a quarta, das 8h às 12h; quinta, das 14h às 18h; sexta, das 13h às 17h; e sábado, das 8h às 12h, conforme a disponibilidade da agenda.',
        paginas: ['queixas-agudas'],
      },
      {
        q: 'Meu filho adoeceu. Consigo um horário rápido?',
        a: 'Entre em contato para verificarmos a possibilidade de encaixe, conforme a disponibilidade da agenda. O encaixe não substitui o pronto atendimento: diante de sinais de gravidade ou necessidade de avaliação imediata, procure diretamente um serviço de urgência.',
        paginas: ['queixas-agudas'],
      },
      {
        q: 'Posso tirar dúvidas pelo WhatsApp depois da consulta?',
        post: '/blog/como-mandar-mensagem-para-a-pediatra/',
        a: 'O WhatsApp é um canal de apoio, e as mensagens são respondidas assim que possível. Ele não substitui consulta, exame físico, teleconsulta formal ou atendimento de urgência. Quando surgirem muitas dúvidas, o melhor é anotá-las para esclarecermos juntos na próxima consulta.',
        paginas: ['puericultura'],
      },
      {
        q: 'O pai, os avós ou a rede de apoio podem participar?',
        a: 'Sim, e são muito bem-vindos.',
        paginas: ['pre-natal-pediatrico'],
      },
      {
        q: 'Como agendar?',
        a: 'Pelo WhatsApp (81) 98167-3755, em horário comercial: diga o melhor dia e turno para sua família e verificamos os horários disponíveis. Se preferir, o agendamento também pode ser feito a qualquer hora pelo Doctoralia.',
      },
    ],
  },
];

export const todasDuvidas = temas.flatMap((t) => t.itens);
export const duvidasDaPagina = (slug: NonNullable<Duvida['paginas']>[number]) =>
  todasDuvidas.filter((d) => d.paginas?.includes(slug));
export const duvidasDestaque = todasDuvidas.filter((d) => d.destaque);

export const faqSchema = (itens: Duvida[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: itens.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});
