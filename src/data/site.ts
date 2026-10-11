// Dados centrais do site.
export const site = {
  // Com false, o site sai do Google (noindex + robots bloqueando tudo). Útil só para manutenção.
  lancado: true,
  url: 'https://www.camillaaroucapediatra.com.br',
  nome: 'Dra. Camilla Arouca',
  nomeCurto: 'Camilla Arouca',
  especialidade: 'Pediatra',
  crm: 'CRM-PE 22927',
  rqe: 'RQE 8059',
  slogan: 'Clareza nas escolhas. Confiança no cuidado.',
  descricao:
    'Pediatria baseada em evidências, com tempo e acolhimento. Consultas particulares de segunda a sábado no The Garden, em Piedade, perto de Boa Viagem.',
  whatsapp: '5581981673755',
  whatsappTexto: 'Olá! Vim pelo site e gostaria de agendar uma consulta com a Dra. Camilla.',
  telefoneExibicao: '(81) 98167-3755',
  agendamentoWhatsapp: 'em horário comercial',
  instagram: 'https://www.instagram.com/camillaarouca.pediatra/',
  instagramUser: '@camillaarouca.pediatra',
  doctoralia: 'https://www.doctoralia.com.br/camilla-arouca/pediatra/jaboatao-dos-guararapes',
  pagamento: ['PIX', 'espécie'],
  idiomas: ['Português', 'Inglês'],
  // Quando o perfil no Google Business existir, trocar pelo link do perfil dela.
  googleMaps:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('The Garden Open Mall, Av. Bernardo Vieira de Melo, 209, Piedade, Jaboatão dos Guararapes - PE'),
  endereco: {
    local: 'The Garden Open Mall',
    unidade: 'Unidade de Pediatria',
    rua: 'Av. Bernardo Vieira de Melo, 209',
    bairro: 'Piedade',
    cidade: 'Jaboatão dos Guararapes',
    uf: 'PE',
    cep: '54400-000',
    lat: -8.1609945, // coordenadas do perfil no Doctoralia
    lng: -34.9130135,
  },
  horarios: 'Segunda a sábado, conforme disponibilidade da agenda',
  // Os horários específicos não ficam no site: são informados na conversa de agendamento.
  // Área de atendimento priorizada: bairros com perfil de família que busca pediatria particular.
  regiao: ['Boa Viagem', 'Setúbal', 'Pina', 'Piedade', 'Candeias', 'Reserva do Paiva'],
  // Medição (Google Analytics 4 e Google Ads). Preencher com os códigos das contas; vazio = desligado.
  // ga4: 'G-XXXXXXXXXX' · googleAds: 'AW-123456789'
  // conversões: 'AW-123456789/AbCdEfGhIj' (ID/rótulo que o Google Ads mostra ao criar cada conversão)
  medicao: {
    ga4: '',
    googleAds: '',
    conversaoWhatsapp: '',
    conversaoDoctoralia: '',
    conversaoTelefone: '',
  },
  // O blog só entra no menu principal quando tiver pelo menos este número de posts publicados.
  blogNoMenuAPartirDe: 1,
};

export const whatsappLink = (texto = site.whatsappTexto) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(texto)}`;

export const consultas = [
  {
    slug: 'pre-natal-pediatrico',
    nome: 'Pré-natal pediátrico',
    resumo: 'Um encontro ainda na gestação para preparar a chegada do bebê com mais segurança.',
    cor: 'rosa',
  },
  {
    slug: 'puericultura',
    nome: 'Rotina e puericultura',
    resumo: 'Muito além de peso e altura: crescimento, desenvolvimento, sono, alimentação e comportamento.',
    cor: 'dourado',
  },
  {
    slug: 'queixas-agudas',
    nome: 'Queixas agudas',
    resumo: 'Febre, tosse, diarreia, dor ou lesões de pele, avaliadas com escuta e exame cuidadoso, de segunda a sábado.',
    cor: 'salvia',
  },
] as const;

export const nav = [
  { href: '/', label: 'Início' },
  { href: '/sobre/', label: 'Sobre' },
  { href: '/consultas/', label: 'Consultas' },
  { href: '/como-funciona/', label: 'Como funciona' },
  { href: '/duvidas/', label: 'Dúvidas' },
];
