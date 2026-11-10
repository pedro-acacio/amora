// Conteúdo da Amora · Papelaria Afetiva (antiga Amor à Palavra).
// Rascunho a partir da bio/feed públicos do Instagram e da apresentação de
// marca enviada pela cliente. Ajuste os textos com o material da Gabi
// (frases da marca, fotos reais dos produtos etc.).

export const MARCA = "Amora";
export const MARCA_COMPLETA = "Amora · Papelaria Afetiva";
export const NOME_ANTIGO = "Amor à Palavra";

// Número da loja (o mesmo do link wa.me/message da bio do Instagram).
// Usamos wa.me/<número>?text= porque o link curto /message/ não aceita
// mensagem pronta: com ?text= o WhatsApp abria a tela de encaminhar.
export const WHATSAPP_NUMERO = "558196194844";
export const WHATSAPP_MENSAGEM =
  "Oi! Vim pelo site da Amora e gostaria de fazer um pedido.";
export const whatsappLink = (texto = WHATSAPP_MENSAGEM) =>
  `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(texto)}`;
export const WHATSAPP_LINK = whatsappLink();
export const INSTAGRAM_URL = "https://www.instagram.com/amora.afetivaa";
export const INSTAGRAM_HANDLE = "@amora.afetivaa";
export const LOCAL = "Recife/PE";
export const FUNDADORA = "Gabi Andrade";

export const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#produtos", label: "Produtos" },
  { href: "#guias", label: "Guias" },
  { href: "#galeria", label: "Galeria" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#contato", label: "Contato" },
];

export const MISSAO = [
  "A Amora é uma papelaria que une organização, criatividade e afeto. Cada caderno é feito à mão para te aproximar da Bíblia todos os dias: um espaço para anotar, estudar, orar e organizar a rotina com a Palavra no centro.",
  "O nome nasceu do Amor à Palavra, como a loja se chamava antes. Juntamos as duas palavras numa só, mais curta e fácil de lembrar, e o propósito continua o mesmo.",
];

export const CONCEITO = [
  {
    title: "Folhas da amora",
    text: "Lembram as páginas de um caderno aberto: estudo, conhecimento e criação.",
  },
  {
    title: "Duas amoras",
    text: "Unidas no centro, formam um coração. É o cuidado afetivo que vai em cada peça.",
  },
  {
    title: "Livro e caderno",
    text: "O universo da papelaria, da organização e do registro de ideias e aprendizados.",
  },
];

export const SOBRE_FUNDADORA =
  "Por trás da Amora está Gabi Andrade, que transformou o cuidado com a encadernação artesanal em uma papelaria dedicada a produtos devocionais. Cada peça é feita à mão, em pequenos lotes, com tecidos escolhidos um a um, do primeiro corte até o acabamento da capa dura, pensando em quem vai usar aquele caderno para se aproximar de Deus.";

export const COMO_FUNCIONA =
  "Os pedidos são feitos sob encomenda, direto pelo WhatsApp. Você escolhe o modelo, o tecido da capa e a personalização; a Gabi cuida da produção artesanal e do envio para todo o Brasil pelos Correios, com atendimento também presencial em Recife-PE.";

export const PRODUTOS = [
  {
    title: "Cadernos Devocionais",
    text: "Cadernos artesanais com capa dura revestida em tecido, feitos para o seu tempo diário com Deus: leitura, oração e reflexão.",
  },
  {
    title: "Estudo Bíblico",
    text: "Cadernos e blocos estruturados para registrar aprendizados, versículos e anotações de estudos e pregações.",
  },
  {
    title: "Planners & Agenda 2026",
    text: "Planners semanais e mensais e a Agenda 2026, para organizar a rotina, os cultos e os compromissos com propósito.",
  },
  {
    title: "Cursos de Encadernação",
    text: "Oficinas presenciais de encadernação do zero, para aprender a montar cadernos de capa dura do primeiro corte ao acabamento.",
  },
];

export const GUIAS = [
  {
    title: "Guia bíblico: Pentateuco",
    text: "Um guia de estudo para percorrer os cinco primeiros livros da Bíblia com mais profundidade.",
    link: "https://pay.kiwify.com.br/Ypy3Bm0",
  },
  {
    title: "Guia bíblico: Livros Históricos",
    text: "Um guia de estudo para acompanhar a história do povo de Deus nos livros históricos do Antigo Testamento.",
    link: "https://pay.kiwify.com.br/gdu9cDT",
  },
];

export const GALERIA = [
  { slug: "cadernos-devocionais", title: "Cadernos Devocionais" },
  { slug: "estudo-biblico", title: "Estudo Bíblico" },
  { slug: "planners-agenda", title: "Planners & Agenda" },
  { slug: "capas-tecido", title: "Capas em Tecido" },
  { slug: "encadernacao", title: "Encadernação Artesanal" },
  { slug: "kits-personalizados", title: "Kits Personalizados" },
];
