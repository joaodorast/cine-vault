import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Film, Globe, Award, Tv } from "lucide-react";
import { todosFilmes } from "@/data/movies";
import RatingCircle from "@/components/RatingCircle";
import UserActions from "@/components/UserActions";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContentCard from "@/components/ContentCard";

const MovieDetail = () => {
  const { id } = useParams();
  const movie = todosFilmes.find((m) => m.id === id);

  if (!movie) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Filme não encontrado.</p>
          <Link to="/" className="text-primary hover:underline text-sm">Voltar ao início</Link>
        </div>
      </div>
    );
  }

  // Related content
  const related = todosFilmes
    .filter(f => f.id !== movie.id && f.generos.some(g => movie.generos.includes(g)))
    .slice(0, 4);

  const isSerie = movie.tipo === "serie";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero backdrop */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
          className="absolute inset-0"
        >
          <img src={movie.backdrop} alt={movie.titulo} className="w-full h-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 gradient-cinema" />
        <div className="absolute inset-0 bg-background/40" />

        <div className="absolute top-20 left-6 z-10">
          <Link
            to="/"
            className="flex items-center gap-2 glass-surface rounded-full px-4 py-2 text-sm text-foreground hover:border-primary/30 transition-all duration-300"
          >
            <ArrowLeft size={16} />
            Voltar
          </Link>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-6 -mt-40 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Poster */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            className="w-48 md:w-64 flex-shrink-0"
          >
            <div className="glass-card overflow-hidden p-2">
              <img src={movie.poster} alt={movie.titulo} className="w-full rounded-[18px] aspect-[2/3] object-cover" />
            </div>
          </motion.div>

          {/* Info */}
          <div className="flex-1 pt-4 md:pt-12">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="flex flex-wrap items-center gap-2 mb-3">
                {movie.generos.map((g) => (
                  <Link
                    key={g}
                    to={`/explorar?genero=${encodeURIComponent(g)}`}
                    className="glass-surface rounded-full px-3 py-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    {g}
                  </Link>
                ))}
                {isSerie && (
                  <span className="glass-surface rounded-full px-3 py-1 text-xs text-primary font-medium flex items-center gap-1">
                    <Tv size={10} /> Série
                  </span>
                )}
              </div>

              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground">
                {movie.titulo}
              </h1>
              <p className="text-sm text-muted-foreground mt-1 italic">{movie.tituloOriginal}</p>
            </motion.div>

            {/* Meta */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap items-center gap-5 mt-6"
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar size={14} />
                <span className="font-mono-nums">{movie.ano}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock size={14} />
                <span>{movie.duracao}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Film size={14} />
                <span>{movie.diretor}</span>
              </div>
              {movie.pais && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Globe size={14} />
                  <span>{movie.pais}</span>
                </div>
              )}
              {movie.classificacao && (
                <span className="glass-surface rounded-full px-2.5 py-0.5 text-xs font-mono-nums text-muted-foreground">
                  {movie.classificacao}
                </span>
              )}
            </motion.div>

            {/* Series info */}
            {isSerie && movie.temporadas && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.75, duration: 0.6 }}
                className="flex items-center gap-4 mt-4"
              >
                <span className="glass-surface rounded-full px-3 py-1 text-xs text-foreground">
                  {movie.temporadas} temporada{movie.temporadas > 1 ? "s" : ""}
                </span>
                {movie.episodios && (
                  <span className="glass-surface rounded-full px-3 py-1 text-xs text-foreground">
                    {movie.episodios} episódios
                  </span>
                )}
              </motion.div>
            )}

            {/* Rating */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex items-center gap-4 mt-8"
            >
              <RatingCircle nota={movie.nota} size={64} />
              <div>
                <p className="text-sm text-foreground font-semibold">
                  <span className="font-mono-nums text-lg">{movie.nota.toFixed(1)}</span> / 10
                </p>
                <p className="text-xs text-muted-foreground">
                  por {movie.totalAvaliacoes} cinéfilos • {movie.aprovacao}% aprovação
                </p>
              </div>
            </motion.div>

            {/* User Actions */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="mt-8"
            >
              <UserActions movieId={movie.id} movieTitle={movie.titulo} />
            </motion.div>

            {/* Synopsis */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="mt-10 max-w-[65ch]"
            >
              <h2 className="text-lg font-semibold text-foreground mb-3">Sinopse</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{movie.sinopse}</p>
            </motion.div>

            {/* Awards */}
            {movie.premios && movie.premios.length > 0 && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-10"
              >
                <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Award size={18} className="text-primary" /> Prêmios
                </h2>
                <div className="flex flex-wrap gap-2">
                  {movie.premios.map((p) => (
                    <span key={p} className="glass-surface rounded-full px-3 py-1.5 text-xs text-primary font-medium cinema-glow">
                      {p}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Details */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-10 glass-card p-6"
            >
              <h2 className="text-lg font-semibold text-foreground mb-4">Detalhes</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {movie.estudio && (
                  <div>
                    <p className="text-xs text-muted-foreground">Estúdio</p>
                    <p className="text-sm text-foreground mt-0.5">{movie.estudio}</p>
                  </div>
                )}
                {movie.idioma && (
                  <div>
                    <p className="text-xs text-muted-foreground">Idioma Original</p>
                    <p className="text-sm text-foreground mt-0.5">{movie.idioma}</p>
                  </div>
                )}
                {movie.orcamento && (
                  <div>
                    <p className="text-xs text-muted-foreground">Orçamento</p>
                    <p className="text-sm text-foreground font-mono-nums mt-0.5">{movie.orcamento}</p>
                  </div>
                )}
                {movie.bilheteria && (
                  <div>
                    <p className="text-xs text-muted-foreground">Bilheteria</p>
                    <p className="text-sm text-foreground font-mono-nums mt-0.5">{movie.bilheteria}</p>
                  </div>
                )}
                {movie.roteiristas && (
                  <div>
                    <p className="text-xs text-muted-foreground">Roteiristas</p>
                    <p className="text-sm text-foreground mt-0.5">{movie.roteiristas.join(", ")}</p>
                  </div>
                )}
                {movie.produtores && (
                  <div>
                    <p className="text-xs text-muted-foreground">Produtores</p>
                    <p className="text-sm text-foreground mt-0.5">{movie.produtores.join(", ")}</p>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Cast */}
            {movie.elenco.length > 0 && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-12"
              >
                <h2 className="text-lg font-semibold text-foreground mb-4">Elenco Principal</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {movie.elenco.map((ator, i) => (
                    <motion.div
                      key={ator.nome}
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="glass-card p-4"
                    >
                      <p className="text-sm font-medium text-foreground">{ator.nome}</p>
                      <p className="text-xs text-muted-foreground mt-1">como {ator.personagem}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Related */}
            {related.length > 0 && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-16"
              >
                <h2 className="text-lg font-semibold text-foreground mb-6">Conteúdos Similares</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                  {related.map((item, i) => (
                    <ContentCard key={item.id} item={item} index={i} showType />
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <div className="h-16" />
      <Footer />
    </div>
  );
};

export default MovieDetail;
