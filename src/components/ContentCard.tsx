import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Tv, Film, Clapperboard } from "lucide-react";
import RatingCircle from "./RatingCircle";
import type { Movie } from "@/data/movies";

interface ContentCardProps {
  item: Movie;
  index?: number;
  showType?: boolean;
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

const typeIcons: Record<string, typeof Film> = {
  filme: Film,
  serie: Tv,
  documentario: Clapperboard,
  animacao: Film,
  curta: Film,
};

const typeLabels: Record<string, string> = {
  filme: "Filme",
  serie: "Série",
  documentario: "Doc",
  animacao: "Animação",
  curta: "Curta",
};

const getLink = (item: Movie) => {
  if (item.tipo === "serie") return `/serie/${item.id}`;
  return `/filme/${item.id}`;
};

const ContentCard = ({ item, index = 0, showType = false }: ContentCardProps) => {
  const Icon = typeIcons[item.tipo] || Film;

  return (
    <motion.div variants={itemVariants} className="group">
      <Link to={getLink(item)} className="block">
        <div className="relative rounded-[24px] overflow-hidden movie-card-hover">
          <div className="aspect-[2/3] overflow-hidden rounded-[24px]">
            <motion.img
              src={item.poster}
              alt={item.titulo}
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
                  {item.generos.slice(0, 2).join(" • ")} • {item.ano}
                </p>
                <p className="text-xs text-muted-foreground">{item.duracao}</p>
              </div>
              <RatingCircle nota={item.nota} size={44} />
            </div>
          </div>

          {/* Badges */}
          <div className="absolute top-3 right-3 flex flex-col gap-1.5 items-end">
            <div className="glass-surface rounded-full px-2.5 py-1 flex items-center gap-1">
              <span className="font-mono-nums text-xs font-semibold text-primary">
                {item.nota.toFixed(1)}
              </span>
            </div>
            {showType && (
              <div className="glass-surface rounded-full px-2 py-1 flex items-center gap-1">
                <Icon size={10} className="text-muted-foreground" />
                <span className="text-[10px] text-muted-foreground">{typeLabels[item.tipo]}</span>
              </div>
            )}
          </div>
        </div>

        <div className="mt-3 px-1">
          <h3 className="text-sm font-semibold text-foreground truncate group-hover:text-primary transition-colors duration-300">
            {item.titulo}
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            {item.ano} • {item.duracao}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ContentCard;
