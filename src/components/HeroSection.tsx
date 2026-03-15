import { motion } from "framer-motion";
import { Play, Plus, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { filmeDestaque } from "@/data/movies";
import RatingCircle from "./RatingCircle";

const HeroSection = () => {
  const movie = filmeDestaque;

  return (
    <section className="relative h-[100vh] min-h-[600px] overflow-hidden">
      {/* Background image */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.2, 0.8, 0.2, 1] }}
        className="absolute inset-0"
      >
        <img
          src={movie.backdrop}
          alt={movie.titulo}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 gradient-cinema" />
      <div className="absolute inset-0 gradient-cinema-left opacity-60" />
      <div className="absolute inset-0 bg-background/30" />

      {/* Content */}
      <div className="relative h-full container mx-auto px-6 flex items-end pb-24 md:pb-32">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="glass-surface rounded-full px-3 py-1 text-xs font-medium text-primary">
              ★ Em Destaque
            </span>
            <span className="text-xs text-muted-foreground">
              {movie.aprovacao}% de aprovação da crítica • {movie.duracao} • {movie.ano}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ y: 30, opacity: 0, filter: "blur(10px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-foreground leading-[0.9]"
          >
            {movie.titulo}
          </motion.h1>

          {/* Genres */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            className="flex items-center gap-3 mt-4"
          >
            {movie.generos.map((g) => (
              <span key={g} className="text-sm text-muted-foreground">{g}</span>
            ))}
          </motion.div>

          {/* Synopsis */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            className="text-sm md:text-base text-secondary-foreground/70 mt-5 leading-relaxed max-w-lg"
          >
            {movie.sinopse}
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            className="flex items-center gap-4 mt-8"
          >
            <Link
              to={`/filme/${movie.id}`}
              className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold hover:brightness-110 transition-all duration-300"
            >
              <Play size={16} fill="currentColor" />
              Explorar Obra
            </Link>
            <button className="flex items-center gap-2 glass-surface px-5 py-3 rounded-full text-sm font-medium text-foreground hover:border-primary/30 transition-all duration-300">
              <Plus size={16} />
              Watchlist
            </button>
          </motion.div>

          {/* Rating */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            className="flex items-center gap-4 mt-8"
          >
            <RatingCircle nota={movie.nota} size={52} />
            <div>
              <p className="text-xs text-muted-foreground">
                <span className="font-mono-nums text-foreground font-semibold">{movie.nota.toFixed(1)}</span> / 10 por{" "}
                <span className="font-mono-nums">{movie.totalAvaliacoes}</span> cinéfilos
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">Dirigido por {movie.diretor}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
