import poster1 from "@/assets/poster-1.jpg";
import poster2 from "@/assets/poster-2.jpg";
import poster3 from "@/assets/poster-3.jpg";
import poster4 from "@/assets/poster-4.jpg";
import poster5 from "@/assets/poster-5.jpg";
import poster6 from "@/assets/poster-6.jpg";
import poster7 from "@/assets/poster-7.jpg";
import poster8 from "@/assets/poster-8.jpg";
import poster9 from "@/assets/poster-9.jpg";
import poster10 from "@/assets/poster-10.jpg";
import poster11 from "@/assets/poster-11.jpg";
import poster12 from "@/assets/poster-12.jpg";
import poster13 from "@/assets/poster-13.jpg";
import poster14 from "@/assets/poster-14.jpg";
import poster15 from "@/assets/poster-15.jpg";
import poster16 from "@/assets/poster-16.jpg";
import heroFeatured from "@/assets/hero-featured.jpg";

export type ContentType = "filme" | "serie" | "documentario" | "curta" | "animacao";

export interface Movie {
  id: string;     
  titulo: string;
  tituloOriginal: string;
  ano: number;
  duracao: string;
  nota: number;
  totalAvaliacoes: string;
  generos: string[];
  diretor: string;
  sinopse: string;
  poster: string;
  backdrop: string;
  aprovacao: number;
  elenco: { nome: string; personagem: string; foto?: string }[];
  tipo: ContentType;
  pais?: string;
  idioma?: string;
  orcamento?: string;
  bilheteria?: string;
  premios?: string[];
  classificacao?: string;
  estudio?: string;
  roteiristas?: string[];
  produtores?: string[];
  temporadas?: number;
  episodios?: number;
}

export const generos = [
  "Ação", "Aventura", "Animação", "Comédia", "Crime", "Documentário",
  "Drama", "Família", "Fantasia", "Ficção Científica", "Guerra",
  "Histórico", "Mistério", "Musical", "Noir", "Romance", "Suspense",
  "Terror", "Thriller", "Épico", "Sobrenatural", "Western"
];

export const paises = [
  "Brasil", "EUA", "Reino Unido", "França", "Japão", "Coreia do Sul",
  "Alemanha", "Itália", "Espanha", "México", "Argentina", "Índia"
];

export const filmeDestaque: Movie = {
  id: "1",
  titulo: "Horizonte Neon",
  tituloOriginal: "Neon Horizon",
  ano: 2025,
  duracao: "2h 38min",
  nota: 9.1,
  totalAvaliacoes: "1.8M",
  generos: ["Ficção Científica", "Ação", "Drama"],
  diretor: "Elena Vasquez",
  sinopse: "Em uma metrópole futurista onde a realidade e o digital se fundem, um detetive cibernético precisa desvendar uma conspiração que ameaça apagar a fronteira entre o humano e o artificial. Uma jornada épica de autodescoberta nos limites da consciência.",
  poster: poster1,
  backdrop: heroFeatured,
  aprovacao: 98,
  tipo: "filme",
  pais: "EUA",
  idioma: "Inglês",
  orcamento: "$180M",
  bilheteria: "$890M",
  classificacao: "14+",
  estudio: "Vertex Studios",
  premios: ["Oscar de Melhor Filme", "Palma de Ouro", "Globo de Ouro"],
  roteiristas: ["Elena Vasquez", "James Chen"],
  produtores: ["Michael Stone", "Sarah Blake"],
  elenco: [
    { nome: "Marco Silva", personagem: "Detetive Kael", foto: undefined },
    { nome: "Ana Torres", personagem: "Dr. Lena", foto: undefined },
    { nome: "Rafael Costa", personagem: "Nexus", foto: undefined },
    { nome: "Julia Mendes", personagem: "Aria", foto: undefined },
  ],
};

export const filmesPopulares: Movie[] = [
  {
    id: "2",
    titulo: "Sombras na Chuva",
    tituloOriginal: "Shadows in Rain",
    ano: 2024,
    duracao: "2h 14min",
    nota: 8.7,
    totalAvaliacoes: "2.1M",
    generos: ["Thriller", "Noir", "Mistério"],
    diretor: "Carlos Montenegro",
    sinopse: "Um detetive atormentado investiga uma série de desaparecimentos em uma cidade que nunca para de chover. Cada pista o leva mais fundo em uma teia de segredos que desafia sua própria sanidade.",
    poster: poster2,
    backdrop: poster2,
    aprovacao: 94,
    tipo: "filme",
    pais: "Brasil",
    idioma: "Português",
    classificacao: "16+",
    estudio: "Nova Era Films",
    elenco: [
      { nome: "Diego Ferreira", personagem: "Det. Marcos" },
      { nome: "Clara Ribeiro", personagem: "Helena" },
    ],
  },
  {
    id: "3",
    titulo: "O Reino Além das Nuvens",
    tituloOriginal: "Kingdom Beyond Clouds",
    ano: 2025,
    duracao: "2h 52min",
    nota: 8.9,
    totalAvaliacoes: "1.5M",
    generos: ["Fantasia", "Aventura", "Épico"],
    diretor: "Marina Alves",
    sinopse: "Uma rainha guerreira deve unir reinos divididos para enfrentar uma ameaça antiga que desperta das profundezas do mundo.",
    poster: poster3,
    backdrop: poster3,
    aprovacao: 96,
    tipo: "filme",
    pais: "Reino Unido",
    idioma: "Inglês",
    classificacao: "12+",
    estudio: "Crown Pictures",
    elenco: [
      { nome: "Beatriz Santos", personagem: "Rainha Elara" },
      { nome: "Pedro Lima", personagem: "General Thorn" },
    ],
  },
  {
    id: "4",
    titulo: "Últimas Palavras",
    tituloOriginal: "Last Words",
    ano: 2024,
    duracao: "1h 58min",
    nota: 8.3,
    totalAvaliacoes: "890K",
    generos: ["Romance", "Drama"],
    diretor: "Fernanda Cruz",
    sinopse: "Dois estranhos se encontram em uma ponte ao amanhecer e descobrem que compartilham o mesmo segredo devastador.",
    poster: poster4,
    backdrop: poster4,
    aprovacao: 91,
    tipo: "filme",
    pais: "França",
    idioma: "Francês",
    classificacao: "14+",
    estudio: "Lumière Films",
    elenco: [
      { nome: "Lucas Oliveira", personagem: "Daniel" },
      { nome: "Sofia Martins", personagem: "Isabela" },
    ],
  },
  {
    id: "5",
    titulo: "A Casa no Fim do Mundo",
    tituloOriginal: "House at World's End",
    ano: 2025,
    duracao: "2h 06min",
    nota: 8.5,
    totalAvaliacoes: "1.2M",
    generos: ["Terror", "Suspense", "Sobrenatural"],
    diretor: "Rodrigo Mendes",
    sinopse: "Uma família se muda para uma mansão isolada apenas para descobrir que a casa tem vontade própria e não pretende deixá-los partir.",
    poster: poster5,
    backdrop: poster5,
    aprovacao: 88,
    tipo: "filme",
    pais: "EUA",
    idioma: "Inglês",
    classificacao: "18+",
    estudio: "Darkwood Studios",
    elenco: [
      { nome: "André Costa", personagem: "Thomas" },
      { nome: "Mariana Souza", personagem: "Sarah" },
    ],
  },
  {
    id: "6",
    titulo: "Golpe Perfeito",
    tituloOriginal: "Perfect Score",
    ano: 2024,
    duracao: "2h 21min",
    nota: 8.6,
    totalAvaliacoes: "1.9M",
    generos: ["Ação", "Crime", "Thriller"],
    diretor: "Victor Hugo",
    sinopse: "Uma equipe de especialistas planeja o maior roubo da história em um cassino flutuante no Mediterrâneo.",
    poster: poster6,
    backdrop: poster6,
    aprovacao: 93,
    tipo: "filme",
    pais: "EUA",
    idioma: "Inglês",
    classificacao: "14+",
    estudio: "Atlas Entertainment",
    elenco: [
      { nome: "Gabriel Santos", personagem: "Alex" },
      { nome: "Camila Torres", personagem: "Valentina" },
    ],
  },
  {
    id: "7",
    titulo: "A Grande Aventura",
    tituloOriginal: "The Grand Adventure",
    ano: 2025,
    duracao: "1h 45min",
    nota: 8.1,
    totalAvaliacoes: "2.4M",
    generos: ["Animação", "Aventura", "Família"],
    diretor: "Paula Rodrigues",
    sinopse: "Um jovem explorador descobre um mapa mágico que revela a localização de templos perdidos cheios de tesouros e perigos inimagináveis.",
    poster: poster7,
    backdrop: poster7,
    aprovacao: 95,
    tipo: "animacao",
    pais: "Brasil",
    idioma: "Português",
    classificacao: "Livre",
    estudio: "Anima Studios",
    elenco: [
      { nome: "Tiago Almeida", personagem: "Leo (voz)" },
      { nome: "Bianca Dias", personagem: "Maya (voz)" },
    ],
  },
  {
    id: "8",
    titulo: "Fronteira Final",
    tituloOriginal: "Final Frontier",
    ano: 2024,
    duracao: "2h 45min",
    nota: 8.8,
    totalAvaliacoes: "1.7M",
    generos: ["Guerra", "Drama", "Histórico"],
    diretor: "Alexandre Neto",
    sinopse: "Baseado em fatos reais, acompanha um pelotão durante os últimos dias de uma guerra que mudou o rumo da história para sempre.",
    poster: poster8,
    backdrop: poster8,
    aprovacao: 97,
    tipo: "filme",
    pais: "EUA",
    idioma: "Inglês",
    classificacao: "16+",
    estudio: "War Films Inc",
    premios: ["Oscar de Melhor Direção"],
    elenco: [
      { nome: "Ricardo Ferreira", personagem: "Capitão Silva" },
      { nome: "Helena Costa", personagem: "Enfermeira Clara" },
    ],
  },
  {
    id: "9",
    titulo: "Código Sombrio",
    tituloOriginal: "Dark Code",
    ano: 2025,
    duracao: "2h 10min",
    nota: 8.4,
    totalAvaliacoes: "1.3M",
    generos: ["Thriller", "Ficção Científica", "Mistério"],
    diretor: "Leonardo Park",
    sinopse: "Um hacker descobre um algoritmo que pode prever crimes antes de acontecerem, mas cada previsão tem um custo que ele não poderia imaginar.",
    poster: poster9,
    backdrop: poster9,
    aprovacao: 90,
    tipo: "filme",
    pais: "Coreia do Sul",
    idioma: "Coreano",
    classificacao: "16+",
    estudio: "Hangul Films",
    elenco: [
      { nome: "Park Jun-ho", personagem: "Min-woo" },
      { nome: "Kim Soo-yeon", personagem: "Ji-hye" },
    ],
  },
  {
    id: "10",
    titulo: "Metrópolis 2099",
    tituloOriginal: "Metropolis 2099",
    ano: 2025,
    duracao: "2h 28min",
    nota: 8.2,
    totalAvaliacoes: "980K",
    generos: ["Ficção Científica", "Ação", "Thriller"],
    diretor: "Yuki Tanaka",
    sinopse: "Em uma megacidade controlada por corporações, um grupo de rebeldes luta para devolver o poder ao povo usando tecnologia proibida.",
    poster: poster10,
    backdrop: poster10,
    aprovacao: 87,
    tipo: "filme",
    pais: "Japão",
    idioma: "Japonês",
    classificacao: "14+",
    estudio: "Neo Tokyo Films",
    elenco: [
      { nome: "Kenji Takahashi", personagem: "Ryo" },
      { nome: "Sakura Yamamoto", personagem: "Aiko" },
    ],
  },
  {
    id: "11",
    titulo: "Amor em Sepia",
    tituloOriginal: "Sepia Love",
    ano: 2024,
    duracao: "2h 05min",
    nota: 8.0,
    totalAvaliacoes: "720K",
    generos: ["Romance", "Drama", "Histórico"],
    diretor: "Isabella Romano",
    sinopse: "Na Itália dos anos 1950, dois amantes de mundos diferentes desafiam convenções sociais em uma história de paixão e sacrifício.",
    poster: poster15,
    backdrop: poster15,
    aprovacao: 89,
    tipo: "filme",
    pais: "Itália",
    idioma: "Italiano",
    classificacao: "12+",
    estudio: "Roma Films",
    elenco: [
      { nome: "Luca Moretti", personagem: "Giovanni" },
      { nome: "Giulia Bianchi", personagem: "Maria" },
    ],
  },
  {
    id: "12",
    titulo: "O Sussurro das Sombras",
    tituloOriginal: "The Whisper of Shadows",
    ano: 2025,
    duracao: "1h 52min",
    nota: 7.8,
    totalAvaliacoes: "560K",
    generos: ["Terror", "Suspense"],
    diretor: "André Mello",
    sinopse: "Uma psicóloga começa a ouvir sussurros de seus pacientes falecidos, revelando segredos perturbadores que conectam todos os casos.",
    poster: poster16,
    backdrop: poster16,
    aprovacao: 82,
    tipo: "filme",
    pais: "Brasil",
    idioma: "Português",
    classificacao: "18+",
    estudio: "Shadow Films",
    elenco: [
      { nome: "Renata Campos", personagem: "Dr. Vera" },
      { nome: "Thiago Reis", personagem: "Lucas" },
    ],
  },
];

export const series: Movie[] = [
  {
    id: "s1",
    titulo: "Ecos do Passado",
    tituloOriginal: "Echoes of the Past",
    ano: 2024,
    duracao: "8 episódios",
    nota: 9.0,
    totalAvaliacoes: "3.2M",
    generos: ["Drama", "Mistério", "Thriller"],
    diretor: "Carlos Montenegro",
    sinopse: "Uma detetive investiga o desaparecimento de uma família inteira em uma pequena cidade costeira, apenas para descobrir que o mistério está entrelaçado com seu próprio passado.",
    poster: poster9,
    backdrop: poster9,
    aprovacao: 96,
    tipo: "serie",
    pais: "Brasil",
    idioma: "Português",
    classificacao: "16+",
    estudio: "Globoplay Originals",
    temporadas: 2,
    episodios: 16,
    elenco: [
      { nome: "Fernanda Montenegro", personagem: "Det. Lúcia" },
      { nome: "Wagner Moura", personagem: "César" },
    ],
  },
  {
    id: "s2",
    titulo: "Nova Ordem",
    tituloOriginal: "New Order",
    ano: 2025,
    duracao: "10 episódios",
    nota: 8.8,
    totalAvaliacoes: "2.8M",
    generos: ["Ficção Científica", "Drama", "Thriller"],
    diretor: "Yuki Tanaka",
    sinopse: "Em um futuro próximo, a humanidade é governada por uma IA que promete paz eterna, mas um grupo de dissidentes descobre a verdade terrível por trás da utopia.",
    poster: poster10,
    backdrop: poster10,
    aprovacao: 94,
    tipo: "serie",
    pais: "EUA",
    idioma: "Inglês",
    classificacao: "14+",
    estudio: "StreamX Originals",
    temporadas: 3,
    episodios: 30,
    elenco: [
      { nome: "Chris Hemsworth", personagem: "Commander Drake" },
      { nome: "Zendaya", personagem: "Nova" },
    ],
  },
  {
    id: "s3",
    titulo: "A Mansão dos Segredos",
    tituloOriginal: "The Manor of Secrets",
    ano: 2024,
    duracao: "6 episódios",
    nota: 8.5,
    totalAvaliacoes: "1.9M",
    generos: ["Drama", "Mistério", "Histórico"],
    diretor: "Isabella Romano",
    sinopse: "Uma família aristocrática britânica esconde gerações de segredos sombrios que começam a vir à tona quando uma jornalista investigativa aparece.",
    poster: poster11,
    backdrop: poster11,
    aprovacao: 92,
    tipo: "serie",
    pais: "Reino Unido",
    idioma: "Inglês",
    classificacao: "14+",
    estudio: "BBC Studios",
    temporadas: 1,
    episodios: 6,
    elenco: [
      { nome: "Helena Bonham Carter", personagem: "Lady Ashworth" },
      { nome: "Tom Holland", personagem: "James" },
    ],
  },
  {
    id: "s4",
    titulo: "Rua Escura",
    tituloOriginal: "Dark Street",
    ano: 2025,
    duracao: "12 episódios",
    nota: 8.7,
    totalAvaliacoes: "2.5M",
    generos: ["Crime", "Noir", "Drama"],
    diretor: "Victor Hugo",
    sinopse: "Na São Paulo dos anos 80, um detetive particular enfrenta o submundo do crime enquanto lida com seus próprios demônios internos.",
    poster: poster14,
    backdrop: poster14,
    aprovacao: 93,
    tipo: "serie",
    pais: "Brasil",
    idioma: "Português",
    classificacao: "18+",
    estudio: "HBO Max Brasil",
    temporadas: 2,
    episodios: 24,
    elenco: [
      { nome: "Rodrigo Santoro", personagem: "Det. Fonseca" },
      { nome: "Alice Braga", personagem: "Marta" },
    ],
  },
];

export const documentarios: Movie[] = [
  {
    id: "d1",
    titulo: "Planeta Selvagem",
    tituloOriginal: "Wild Planet",
    ano: 2024,
    duracao: "1h 48min",
    nota: 9.2,
    totalAvaliacoes: "1.1M",
    generos: ["Documentário", "Aventura"],
    diretor: "David Attenborough",
    sinopse: "Uma jornada épica pelos ecossistemas mais remotos e intocados do planeta, revelando espécies nunca antes filmadas e a luta pela sobrevivência na natureza.",
    poster: poster12,
    backdrop: poster12,
    aprovacao: 99,
    tipo: "documentario",
    pais: "Reino Unido",
    idioma: "Inglês",
    classificacao: "Livre",
    estudio: "BBC Earth",
    premios: ["Emmy de Melhor Documentário"],
    elenco: [],
  },
  {
    id: "d2",
    titulo: "O Último Código",
    tituloOriginal: "The Last Code",
    ano: 2025,
    duracao: "2h 12min",
    nota: 8.6,
    totalAvaliacoes: "680K",
    generos: ["Documentário", "Ficção Científica"],
    diretor: "James Chen",
    sinopse: "Um mergulho profundo no mundo da inteligência artificial e os dilemas éticos que a humanidade enfrenta ao criar mentes digitais cada vez mais sofisticadas.",
    poster: poster10,
    backdrop: poster10,
    aprovacao: 91,
    tipo: "documentario",
    pais: "EUA",
    idioma: "Inglês",
    classificacao: "Livre",
    estudio: "National Geographic",
    elenco: [],
  },
];

export const animacoes: Movie[] = [
  {
    id: "a1",
    titulo: "Mundo dos Sonhos",
    tituloOriginal: "Dreamworld",
    ano: 2025,
    duracao: "1h 52min",
    nota: 8.9,
    totalAvaliacoes: "3.1M",
    generos: ["Animação", "Aventura", "Fantasia"],
    diretor: "Hayao Miyazaki",
    sinopse: "Uma menina descobre que pode entrar nos sonhos das pessoas e decide salvar aqueles presos em pesadelos eternos, mas o preço pode ser ficar presa para sempre.",
    poster: poster13,
    backdrop: poster13,
    aprovacao: 97,
    tipo: "animacao",
    pais: "Japão",
    idioma: "Japonês",
    classificacao: "Livre",
    estudio: "Studio Ghibli",
    premios: ["Oscar de Melhor Animação"],
    elenco: [
      { nome: "Aoi Miyazaki", personagem: "Hana (voz)" },
      { nome: "Takeru Satoh", personagem: "Yuki (voz)" },
    ],
  },
];

export const todosFilmes: Movie[] = [
  filmeDestaque,
  ...filmesPopulares,
  ...series,
  ...documentarios,
  ...animacoes,
];

export const todosPorTipo = (tipo: ContentType) => todosFilmes.filter(f => f.tipo === tipo);

export const todosPorGenero = (genero: string) => todosFilmes.filter(f => f.generos.includes(genero));

export const todosPorPais = (pais: string) => todosFilmes.filter(f => f.pais === pais);

export const todosPorAno = (ano: number) => todosFilmes.filter(f => f.ano === ano);

export const topAvaliados = [...todosFilmes].sort((a, b) => b.nota - a.nota);

export const emAlta = todosFilmes.filter(f => f.ano === 2025);

export const premiados = todosFilmes.filter(f => f.premios && f.premios.length > 0);
