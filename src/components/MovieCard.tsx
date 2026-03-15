import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import RatingCircle from "./RatingCircle";
import type { Movie } from "@/data/movies";

interface MovieCardProps {
  movie: Movie;
  index: number;
}

const itemVariants = {
  hidden: { y: 20, opacity: 0, filter: "blur(10px)" },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] as const },
  },
};

const MovieCard = ({ movie, index }: MovieCardProps) => {
  return (
    <motion.div variants={itemVariants} className="group">
      <Link to={`/filme/${movie.id}`} className="block">
        <div className="relative rounded-[24px] overflow-hidden movie-card-hover">
          {/* Poster */}
          <div className="aspect-[2/3] overflow-hidden rounded-[24px]">
            <motion.img
              src={movie.poster}
              alt={movie.titulo}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
            />
          </div>

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[24px] flex flex-col justify-end p-5">
            <div className="flex items-end justify-between">
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground mb-1">
                  {movie.generos.slice(0, 2).join(" • ")} • {movie.ano}
                </p>
                <p className="text-xs text-muted-foreground">{movie.duracao}</p>
              </div>
              <RatingCircle nota={movie.nota} size={44} />
            </div>
          </div>

          {/* Rating badge always visible */}
          <div className="absolute top-3 right-3 glass-surface rounded-full px-2.5 py-1 flex items-center gap-1">
            <span className="font-mono-nums text-xs font-semibold text-primary">
              {movie.nota.toFixed(1)}
            </span>
          </div>
        </div>

        {/* Title below */}
        <div className="mt-3 px-1">
          <h3 className="text-sm font-semibold text-foreground truncate group-hover:text-primary transition-colors duration-300">
            {movie.titulo}
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            {movie.ano} • {movie.duracao}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default MovieCard;
