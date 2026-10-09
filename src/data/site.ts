// Dados centrais do site. Tudo que estiver marcado com TODO precisa ser preenchido antes de publicar.
export const site = {
  url: 'https://www.camillaarouca.com.br', // TODO: confirmar domínio registrado no Registro.br
  nome: 'Dra. Camilla Arouca',
  nomeCurto: 'Camilla Arouca',
  especialidade: 'Pediatra',
  crm: 'CRM-PE 22927',
  rqe: 'RQE 8059',
  slogan: 'Clareza nas escolhas. Confiança no cuidado.',
  descricao:
    'Pediatra particular em Piedade, pertinho de Boa Viagem. Consultas de 1 hora, puericultura e pré-natal pediátrico com acompanhamento próximo e pediatria baseada em evidências.',
  whatsapp: '5581900000000', // TODO: WhatsApp só com números (55 + DDD + número)
  whatsappTexto: 'Olá! Vim pelo site e gostaria de agendar uma consulta com a Dra. Camilla.',
  telefoneExibicao: '(81) 90000-0000', // TODO
  email: '', // opcional
  instagram: 'https://www.instagram.com/camillaarouca.pediatra/',
  instagramUser: '@camillaarouca.pediatra',
  // Quando o perfil no Google Business existir, trocar pelo link do perfil dela.
  googleMaps: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('The Garden Open Mall, Av. Bernardo Vieira de Melo, 209, Piedade, Jaboatão dos Guararapes - PE'),
  endereco: {
    local: 'Unidade de Pediatria · The Garden Open Mall',
    rua: 'Av. Bernardo Vieira de Melo, 209',
    bairro: 'Piedade',
    cidade: 'Jaboatão dos Guararapes',
    uf: 'PE',
    cep: '54400-000',
    lat: -8.1757, // aproximado; ajustar pelas coordenadas exatas do Google Maps
    lng: -34.9178,
  },
  horarios: 'Segunda a sábado, com hora marcada',
  horariosSchema: [
    { dias: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], abre: '08:00', fecha: '18:00' }, // TODO
    { dias: ['Saturday'], abre: '08:00', fecha: '12:00' }, // TODO
  ],
  // Área de atendimento priorizada: bairros com perfil de família que busca pediatria particular.
  regiao: ['Boa Viagem', 'Setúbal', 'Pina', 'Piedade', 'Candeias', 'Reserva do Paiva'],
};

export const whatsappLink = (texto = site.whatsappTexto) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(texto)}`;

export const nav = [
  { href: '/', label: 'Início' },
  { href: '/sobre/', label: 'Sobre' },
  { href: '/consultas/', label: 'Consultas' },
  { href: '/consultorio/', label: 'O consultório' },
  { href: '/blog/', label: 'Blog' },
  { href: '/contato/', label: 'Contato' },
];
