import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface GenreTagProps {
  genre: string;
  active?: boolean;
}

const GenreTag = ({ genre, active = false }: GenreTagProps) => (
  <Link to={`/explorar?genero=${encodeURIComponent(genre)}`}>
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`inline-block px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
        active
          ? "bg-primary text-primary-foreground"
          : "glass-surface text-muted-foreground hover:text-foreground hover:border-primary/30"
      }`}
    >
      {genre}
    </motion.span>
  </Link>
);

export default GenreTag;
