import { motion } from "framer-motion";
import { Trophy, TrendingUp, Star, Award } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RatingCircle from "@/components/RatingCircle";
import { topAvaliados, premiados, emAlta } from "@/data/movies";

const RankingsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-8">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground">
              Rankings
            </h1>
            <p className="text-sm text-muted-foreground mt-2">
              Os melhores filmes e séries segundo a comunidade CineVault
            </p>
          </motion.div>

          {/* Top Rated */}
          <section className="mt-12">
            <div className="flex items-center gap-3 mb-6">
              <Trophy size={20} className="text-primary" />
              <h2 className="text-xl font-bold text-foreground">Top Avaliados</h2>
            </div>
            <div className="space-y-3">
              {topAvaliados.slice(0, 15).map((movie, i) => (
                <motion.div
                  key={movie.id}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                >
                  <Link
                    to={movie.tipo === "serie" ? `/serie/${movie.id}` : `/filme/${movie.id}`}
                    className="flex items-center gap-5 glass-card p-4 group hover:border-primary/30 transition-all duration-300"
                  >
                    <span className="font-mono-nums text-2xl font-bold text-muted-foreground/30 w-10 text-center">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <img
                      src={movie.poster}
                      alt={movie.titulo}
                      className="w-14 h-20 rounded-xl object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                        {movie.titulo}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {movie.ano} • {movie.generos.slice(0, 2).join(", ")} • {movie.diretor}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <RatingCircle nota={movie.nota} size={42} />
                      <div className="text-right hidden sm:block">
                        <p className="font-mono-nums text-sm font-semibold text-foreground">{movie.nota.toFixed(1)}</p>
                        <p className="text-[10px] text-muted-foreground">{movie.totalAvaliacoes}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Awards */}
          <section className="mt-16">
            <div className="flex items-center gap-3 mb-6">
              <Award size={20} className="text-primary" />
              <h2 className="text-xl font-bold text-foreground">Premiados</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {premiados.map((movie, i) => (
                <motion.div
                  key={movie.id}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <Link
                    to={`/filme/${movie.id}`}
                    className="flex gap-4 glass-card p-4 group hover:border-primary/30 transition-all duration-300"
                  >
                    <img
                      src={movie.poster}
                      alt={movie.titulo}
                      className="w-20 h-28 rounded-xl object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                        {movie.titulo}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5">{movie.ano} • {movie.diretor}</p>
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {movie.premios?.slice(0, 3).map(p => (
                          <span key={p} className="text-[10px] text-primary bg-primary/10 rounded-full px-2 py-0.5">
                            🏆 {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Trending */}
          <section className="mt-16">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp size={20} className="text-primary" />
              <h2 className="text-xl font-bold text-foreground">Em Alta em 2025</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {emAlta.slice(0, 6).map((movie, i) => (
                <motion.div
                  key={movie.id}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <Link
                    to={movie.tipo === "serie" ? `/serie/${movie.id}` : `/filme/${movie.id}`}
                    className="flex items-center gap-4 glass-card p-4 group hover:border-primary/30 transition-all duration-300"
                  >
                    <img
                      src={movie.poster}
                      alt={movie.titulo}
                      className="w-14 h-20 rounded-xl object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                        {movie.titulo}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {movie.generos.slice(0, 2).join(", ")} • {movie.duracao}
                      </p>
                    </div>
                    <RatingCircle nota={movie.nota} size={42} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RankingsPage;
