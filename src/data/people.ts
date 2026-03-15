import actor1 from "@/assets/actor-1.jpg";
import actor2 from "@/assets/actor-2.jpg";
import actor3 from "@/assets/actor-3.jpg";
import actor4 from "@/assets/actor-4.jpg";

export interface Person {
  id: string;
  nome: string;
  nascimento: string;
  nacionalidade: string;
  foto: string;
  bio: string;
  profissoes: string[];
  filmografia: string[]; // movie IDs
  premios?: string[];
  filmesFamosos?: string[];
}

export const pessoas: Person[] = [
  {
    id: "p1",
    nome: "Marco Silva",
    nascimento: "15 de março de 1988",
    nacionalidade: "Brasileiro",
    foto: actor1,
    bio: "Marco Silva é um dos atores mais versáteis de sua geração. Começou no teatro aos 16 anos e rapidamente ganhou reconhecimento internacional por suas atuações intensas e transformadoras. Conhecido por sua preparação meticulosa para cada papel, já mergulhou em mundos que vão da ficção científica ao drama intimista.",
    profissoes: ["Ator", "Produtor"],
    filmografia: ["1", "2", "9"],
    premios: ["Melhor Ator - Festival de Cannes", "Globo de Ouro - Melhor Ator Dramático"],
    filmesFamosos: ["Horizonte Neon", "Sombras na Chuva", "Código Sombrio"],
  },
  {
    id: "p2",
    nome: "Ana Torres",
    nascimento: "22 de julho de 1992",
    nacionalidade: "Espanhola",
    foto: actor2,
    bio: "Ana Torres conquistou o público mundial com sua presença magnética nas telas. Formada pela Real Escola de Arte Dramática de Madrid, fez sua estreia em Hollywood com 'Horizonte Neon', recebendo aclamação universal. Sua capacidade de transmitir emoções profundas com sutileza a tornou uma das atrizes mais requisitadas da indústria.",
    profissoes: ["Atriz"],
    filmografia: ["1", "4", "s1"],
    premios: ["Oscar de Melhor Atriz Coadjuvante"],
    filmesFamosos: ["Horizonte Neon", "Últimas Palavras"],
  },
  {
    id: "p3",
    nome: "Carlos Montenegro",
    nascimento: "8 de novembro de 1975",
    nacionalidade: "Brasileiro",
    foto: actor3,
    bio: "Carlos Montenegro é um dos diretores mais aclamados do cinema contemporâneo. Seus filmes são conhecidos por atmosferas densas, narrativas não-lineares e fotografia impecável. Começou como assistente de direção e rapidamente se destacou com seu primeiro longa, que ganhou o prêmio de melhor diretor no Festival de Berlim.",
    profissoes: ["Diretor", "Roteirista", "Produtor"],
    filmografia: ["2", "s1", "s4"],
    premios: ["Urso de Ouro - Berlim", "Melhor Diretor - César"],
    filmesFamosos: ["Sombras na Chuva", "Ecos do Passado"],
  },
  {
    id: "p4",
    nome: "Elena Vasquez",
    nascimento: "3 de janeiro de 1980",
    nacionalidade: "Argentina",
    foto: actor4,
    bio: "Elena Vasquez revolucionou o cinema de ficção científica com suas visões ousadas e narrativas humanistas. Diretora de 'Horizonte Neon', ela é conhecida por extrair performances extraordinárias de seus elencos e por sua atenção obsessiva aos detalhes visuais. Cada frame de seus filmes é uma obra de arte em si.",
    profissoes: ["Diretora", "Roteirista"],
    filmografia: ["1"],
    premios: ["Oscar de Melhor Direção", "Palma de Ouro - Cannes", "BAFTA de Melhor Filme"],
    filmesFamosos: ["Horizonte Neon"],
  },
  {
    id: "p5",
    nome: "Marina Alves",
    nascimento: "19 de junho de 1985",
    nacionalidade: "Portuguesa",
    foto: actor2,
    bio: "Marina Alves trouxe uma nova dimensão ao cinema de fantasia com sua abordagem realista e emocionalmente profunda. 'O Reino Além das Nuvens' a consagrou como uma das grandes diretoras do gênero, comparada aos mestres do épico cinematográfico.",
    profissoes: ["Diretora", "Roteirista"],
    filmografia: ["3"],
    premios: ["Hugo Award", "Saturn Award"],
    filmesFamosos: ["O Reino Além das Nuvens"],
  },
  {
    id: "p6",
    nome: "Beatriz Santos",
    nascimento: "11 de setembro de 1990",
    nacionalidade: "Brasileira",
    foto: actor2,
    bio: "Beatriz Santos é uma atriz premiada conhecida por seus papéis fortes e complexos. Sua interpretação da Rainha Elara em 'O Reino Além das Nuvens' a transformou em um ícone do cinema de fantasia.",
    profissoes: ["Atriz"],
    filmografia: ["3", "s3"],
    premios: ["Melhor Atriz - Veneza"],
    filmesFamosos: ["O Reino Além das Nuvens"],
  },
  {
    id: "p7",
    nome: "Victor Hugo",
    nascimento: "25 de abril de 1978",
    nacionalidade: "Brasileiro",
    foto: actor3,
    bio: "Victor Hugo é um diretor conhecido por filmes de ação inteligentes e estilosos. 'Golpe Perfeito' mostrou sua habilidade em combinar suspense com humor sofisticado, tornando-se um dos maiores sucessos de bilheteria do cinema nacional.",
    profissoes: ["Diretor", "Produtor"],
    filmografia: ["6", "s4"],
    premios: ["Grande Prêmio do Cinema Brasileiro"],
    filmesFamosos: ["Golpe Perfeito", "Rua Escura"],
  },
  {
    id: "p8",
    nome: "Rodrigo Mendes",
    nascimento: "7 de fevereiro de 1983",
    nacionalidade: "Brasileiro",
    foto: actor1,
    bio: "Rodrigo Mendes é o mestre do terror brasileiro contemporâneo. Seus filmes são conhecidos por construírem atmosferas sufocantes e revelarem horrores que vão além do sobrenatural.",
    profissoes: ["Diretor", "Roteirista"],
    filmografia: ["5", "12"],
    filmesFamosos: ["A Casa no Fim do Mundo", "O Sussurro das Sombras"],
  },
];

export const getPessoaById = (id: string) => pessoas.find(p => p.id === id);
export const getPessoaByNome = (nome: string) => pessoas.find(p => p.nome === nome);
export const diretores = pessoas.filter(p => p.profissoes.includes("Diretor") || p.profissoes.includes("Diretora"));
export const atores = pessoas.filter(p => p.profissoes.includes("Ator") || p.profissoes.includes("Atriz"));
