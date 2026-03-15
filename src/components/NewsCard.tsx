import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { NewsItem } from "@/data/news";

interface NewsCardProps {
  news: NewsItem;
  featured?: boolean;
}

const NewsCard = ({ news, featured = false }: NewsCardProps) => {
  if (featured) {
    return (
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <Link to={`/noticia/${news.id}`} className="block group">
          <div className="glass-card overflow-hidden">
            <div className="aspect-video overflow-hidden rounded-t-[24px]">
              <motion.img
                src={news.imagem}
                alt={news.titulo}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="glass-surface rounded-full px-3 py-1 text-xs text-primary font-medium">
                  {news.categoria}
                </span>
                <span className="text-xs text-muted-foreground">{news.data}</span>
              </div>
              <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                {news.titulo}
              </h3>
              <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                {news.subtitulo}
              </p>
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <Link to={`/noticia/${news.id}`} className="block group">
        <div className="glass-card overflow-hidden flex gap-4 p-3">
          <div className="w-28 h-20 flex-shrink-0 overflow-hidden rounded-[16px]">
            <img src={news.imagem} alt={news.titulo} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 min-w-0 py-1">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[10px] text-primary font-medium">{news.categoria}</span>
              <span className="text-[10px] text-muted-foreground">{news.data}</span>
            </div>
            <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2 leading-snug">
              {news.titulo}
            </h3>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default NewsCard;
