// Dados centrais do site. Tudo que estiver marcado com TODO precisa ser preenchido antes de publicar.
export const site = {
  url: 'https://www.camillaarouca.com.br', // TODO: confirmar domínio registrado no Registro.br
  nome: 'Dra. Camilla Arouca',
  nomeCurto: 'Camilla Arouca',
  especialidade: 'Pediatra',
  crm: 'CRM-PE 00000', // TODO: número do CRM
  rqe: 'RQE 00000', // TODO: número do RQE em Pediatria (obrigatório ao divulgar a especialidade)
  slogan: 'Clareza nas escolhas. Confiança no cuidado.',
  descricao:
    'Pediatra em Piedade, Jaboatão dos Guararapes, pertinho de Boa Viagem. Puericultura, pré-natal pediátrico e consultas de 1 hora com pediatria baseada em evidências.',
  whatsapp: '5581900000000', // TODO: WhatsApp só com números (55 + DDD + número)
  whatsappTexto: 'Olá! Vim pelo site e gostaria de agendar uma consulta com a Dra. Camilla.',
  telefoneExibicao: '(81) 90000-0000', // TODO
  email: '', // opcional
  instagram: 'https://www.instagram.com/camillaarouca.pediatra/',
  instagramUser: '@camillaarouca.pediatra',
  googleMaps: 'https://maps.google.com/?q=The+Garden+Open+Mall+Piedade+Jaboatao', // TODO: link do perfil no Google Business
  endereco: {
    local: 'Unidade de Pediatria · The Garden Open Mall',
    rua: '', // TODO: rua e número
    bairro: 'Piedade',
    cidade: 'Jaboatão dos Guararapes',
    uf: 'PE',
    cep: '', // TODO
    lat: -8.1757, // TODO: ajustar pelas coordenadas exatas do Google Maps
    lng: -34.9178,
  },
  horarios: 'Segunda a sábado, com hora marcada',
  horariosSchema: [
    { dias: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], abre: '08:00', fecha: '18:00' }, // TODO
    { dias: ['Saturday'], abre: '08:00', fecha: '12:00' }, // TODO
  ],
  regiao: ['Piedade', 'Boa Viagem', 'Candeias', 'Paiva', 'Zona Sul do Recife', 'Jaboatão dos Guararapes'],
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
