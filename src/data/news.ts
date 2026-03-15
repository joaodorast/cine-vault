import poster1 from "@/assets/poster-1.jpg";
import poster3 from "@/assets/poster-3.jpg";
import poster6 from "@/assets/poster-6.jpg";
import poster8 from "@/assets/poster-8.jpg";
import poster13 from "@/assets/poster-13.jpg";

export interface NewsItem {
  id: string;
  titulo: string;
  subtitulo: string;
  conteudo: string;
  imagem: string;
  data: string;
  categoria: string;
  autor: string;
}

export const noticias: NewsItem[] = [
  {
    id: "n1",
    titulo: "'Horizonte Neon' domina temporada de premiações com 12 indicações ao Oscar",
    subtitulo: "O épico sci-fi de Elena Vasquez se torna o filme mais indicado da história do gênero",
    conteudo: "O filme 'Horizonte Neon', dirigido por Elena Vasquez, recebeu 12 indicações ao Oscar, incluindo Melhor Filme, Melhor Direção, Melhor Ator e Melhor Fotografia. A obra, que já arrecadou mais de $890 milhões em bilheteria mundial, é considerada uma das maiores conquistas do cinema de ficção científica.",
    imagem: poster1,
    data: "12 Mar 2025",
    categoria: "Premiações",
    autor: "Sofia Andrade",
  },
  {
    id: "n2",
    titulo: "Sequência de 'O Reino Além das Nuvens' é confirmada para 2026",
    subtitulo: "Marina Alves retorna para dirigir a continuação do épico de fantasia",
    conteudo: "A Crown Pictures confirmou oficialmente que 'O Reino Além das Nuvens 2: A Ascensão' está em desenvolvimento. Marina Alves retorna como diretora e roteirista, com Beatriz Santos reprisando seu papel icônico como Rainha Elara.",
    imagem: poster3,
    data: "10 Mar 2025",
    categoria: "Produção",
    autor: "Rafael Lima",
  },
  {
    id: "n3",
    titulo: "Marco Silva é confirmado como protagonista de novo thriller de espionagem",
    subtitulo: "O ator brasileiro mais premiado da atualidade embarca em nova franquia internacional",
    conteudo: "Marco Silva foi confirmado como protagonista de 'Operação Phantom', um thriller de espionagem com orçamento de $200 milhões. O filme será dirigido por Victor Hugo e as filmagens começam em setembro.",
    imagem: poster6,
    data: "8 Mar 2025",
    categoria: "Elenco",
    autor: "Maria Castro",
  },
  {
    id: "n4",
    titulo: "'Fronteira Final' ultrapassa $1 bilhão em bilheteria mundial",
    subtitulo: "O drama de guerra de Alexandre Neto atinge marco histórico",
    conteudo: "O épico 'Fronteira Final' se tornou o primeiro drama de guerra a ultrapassar $1 bilhão em bilheteria global. O feito é considerado extraordinário para um filme do gênero, demonstrando o apetite do público por narrativas históricas de qualidade.",
    imagem: poster8,
    data: "5 Mar 2025",
    categoria: "Bilheteria",
    autor: "Carlos Medeiros",
  },
  {
    id: "n5",
    titulo: "Studio Ghibli anuncia novo projeto de Hayao Miyazaki",
    subtitulo: "Lendário diretor de animação trabalha em épico fantástico que pode ser seu último filme",
    conteudo: "O Studio Ghibli confirmou que Hayao Miyazaki está trabalhando em um novo projeto de animação, descrito como 'uma celebração da imaginação humana'. 'Mundo dos Sonhos' promete ser uma experiência visual sem precedentes.",
    imagem: poster13,
    data: "1 Mar 2025",
    categoria: "Animação",
    autor: "Julia Tanaka",
  },
];
