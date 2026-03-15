import { motion } from "framer-motion";
import MovieCard from "./MovieCard";
import type { Movie } from "@/data/movies";

interface MovieSectionProps {
  titulo: string;
  subtitulo?: string;
  filmes: Movie[];
}

const containerVariants = {    
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const MovieSection = ({ titulo, subtitulo, filmes }: MovieSectionProps) => {
  return (
    <section className="section-spacing">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            {titulo}
          </h2>
          {subtitulo && (
            <p className="text-sm text-muted-foreground mt-2">{subtitulo}</p>
          )}
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-5 md:gap-6"
        >
          {filmes.map((movie, index) => (
            <MovieCard key={movie.id} movie={movie} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MovieSection;
