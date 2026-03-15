import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Award, Newspaper } from "lucide-react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MovieSection from "@/components/MovieSection";
import ContentCarousel from "@/components/ContentCarousel";
import PersonCard from "@/components/PersonCard";
import NewsCard from "@/components/NewsCard";
import GenreTag from "@/components/GenreTag";
import Footer from "@/components/Footer";
import { filmesPopulares, series, documentarios, animacoes, generos, emAlta, premiados, topAvaliados, todosFilmes } from "@/data/movies";
import { pessoas } from "@/data/people";
import { noticias } from "@/data/news";

const SectionHeader = ({ titulo, subtitulo, link, icon: Icon }: { titulo: string; subtitulo?: string; link?: string; icon?: typeof TrendingUp }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, margin: "-100px" }}      
    transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
    className="flex items-end justify-between mb-8"
  >
    <div>
      <div className="flex items-center gap-2">
        {Icon && <Icon size={20} className="text-primary" />}
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">{titulo}</h2>
      </div>
      {subtitulo && <p className="text-sm text-muted-foreground mt-2">{subtitulo}</p>}
    </div>
    {link && (
      <Link to={link} className="flex items-center gap-1 text-sm text-primary hover:underline transition-colors">
        Ver Todos <ArrowRight size={14} />
      </Link>
    )}
  </motion.div>
);

const Index = () => {
  const populares = filmesPopulares.slice(0, 4);
  const maisPopulares = filmesPopulares.slice(4, 8);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />

      {/* Popular Movies */}
      <MovieSection
        titulo="Populares Agora"
        subtitulo="Os filmes mais assistidos pelos cinéfilos nesta semana"
        filmes={populares}
      />

      <div className="container mx-auto px-6"><div className="h-px bg-border/50" /></div>

      {/* Series Carousel */}
      <ContentCarousel
        titulo="Séries em Destaque"
        subtitulo="As séries que estão dominando as conversas"
        items={series}
        showType
      />

      {/* Genres */}
      <section className="section-spacing">
        <div className="container mx-auto px-6">
          <SectionHeader titulo="Explorar por Gênero" subtitulo="Encontre o conteúdo perfeito para o seu humor" link="/explorar" />
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-2"
          >
            {generos.slice(0, 14).map(g => (
              <GenreTag key={g} genre={g} />
            ))}
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6"><div className="h-px bg-border/50" /></div>

      {/* Trending */}
      <section className="section-spacing">
        <div className="container mx-auto px-6">
          <SectionHeader titulo="Em Alta" subtitulo="Lançamentos de 2025 que você não pode perder" link="/rankings" icon={TrendingUp} />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {emAlta.slice(0, 4).map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ y: 20, opacity: 0, filter: "blur(10px)" }}
                whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <Link to={item.tipo === "serie" ? `/serie/${item.id}` : `/filme/${item.id}`} className="block group">
                  <div className="relative rounded-[24px] overflow-hidden movie-card-hover">
                    <div className="aspect-[2/3] overflow-hidden rounded-[24px]">
                      <img src={item.poster} alt={item.titulo} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="absolute top-3 left-3 glass-surface rounded-full px-2.5 py-1 flex items-center gap-1">
                      <TrendingUp size={10} className="text-primary" />
                      <span className="text-[10px] text-primary font-semibold">#{i + 1}</span>
                    </div>
                    <div className="absolute top-3 right-3 glass-surface rounded-full px-2.5 py-1">
                      <span className="font-mono-nums text-xs font-semibold text-primary">{item.nota.toFixed(1)}</span>
                    </div>
                  </div>
                  <div className="mt-3 px-1">
                    <h3 className="text-sm font-semibold text-foreground truncate group-hover:text-primary transition-colors">{item.titulo}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.ano} • {item.duracao}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6"><div className="h-px bg-border/50" /></div>

      {/* Awarded */}
      <MovieSection
        titulo="Premiados & Aclamados"
        subtitulo="Selecionados pela crítica e público"
        filmes={maisPopulares}
      />

      {/* Documentaries + Animations */}
      <ContentCarousel
        titulo="Documentários"
        subtitulo="Histórias reais que inspiram e surpreendem"
        items={documentarios}
      />

      {animacoes.length > 0 && (
        <ContentCarousel
          titulo="Animações"
          subtitulo="Mundos imaginários ganham vida"
          items={[...animacoes, ...filmesPopulares.filter(f => f.tipo === "animacao")]}
          showType
        />
      )}

      <div className="container mx-auto px-6"><div className="h-px bg-border/50" /></div>

      {/* Celebrities */}
      <section className="section-spacing">
        <div className="container mx-auto px-6">
          <SectionHeader titulo="Celebridades" subtitulo="Os talentos que definem o cinema contemporâneo" link="/pessoas" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {pessoas.slice(0, 5).map(p => (
              <PersonCard key={p.id} person={p} />
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6"><div className="h-px bg-border/50" /></div>

      {/* News */}
      <section className="section-spacing">
        <div className="container mx-auto px-6">
          <SectionHeader titulo="Notícias" subtitulo="As últimas novidades do mundo do cinema" link="/noticias" icon={Newspaper} />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <NewsCard news={noticias[0]} featured />
            </div>
            <div className="space-y-4">
              {noticias.slice(1, 4).map(n => (
                <NewsCard key={n.id} news={n} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Top 10 Quick */}
      <section className="section-spacing">
        <div className="container mx-auto px-6">
          <SectionHeader titulo="Top 10 CineVault" subtitulo="Os melhores de todos os tempos segundo nossa comunidade" link="/rankings" icon={Award} />
          <div className="space-y-3">
            {topAvaliados.slice(0, 5).map((movie, i) => (
              <motion.div
                key={movie.id}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <Link
                  to={movie.tipo === "serie" ? `/serie/${movie.id}` : `/filme/${movie.id}`}
                  className="flex items-center gap-5 glass-card p-4 group hover:border-primary/30 transition-all duration-300"
                >
                  <span className="font-mono-nums text-2xl font-bold text-muted-foreground/30 w-10 text-center">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <img src={movie.poster} alt={movie.titulo} className="w-12 h-[4.5rem] rounded-xl object-cover flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">{movie.titulo}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{movie.ano} • {movie.generos.slice(0, 2).join(", ")}</p>
                  </div>
                  <span className="font-mono-nums text-sm font-semibold text-primary flex-shrink-0">{movie.nota.toFixed(1)}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
