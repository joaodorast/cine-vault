import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { noticias } from "@/data/news";

const NewsDetail = () => {
  const { id } = useParams();
  const news = noticias.find(n => n.id === id);

  if (!news) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Notícia não encontrada.</p>
          <Link to="/noticias" className="text-primary hover:underline text-sm">Ver notícias</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-8">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link
            to="/noticias"
            className="inline-flex items-center gap-2 glass-surface rounded-full px-4 py-2 text-sm text-foreground hover:border-primary/30 transition-all duration-300 mb-8"
          >
            <ArrowLeft size={16} />
            Notícias
          </Link>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="glass-surface rounded-full px-3 py-1 text-xs text-primary font-medium">
              {news.categoria}
            </span>

            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-foreground mt-4 leading-tight">
              {news.titulo}
            </h1>
            <p className="text-lg text-muted-foreground mt-3">{news.subtitulo}</p>

            <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User size={14} />
                <span>{news.autor}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={14} />
                <span>{news.data}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8"
          >
            <div className="glass-card overflow-hidden">
              <img src={news.imagem} alt={news.titulo} className="w-full aspect-video object-cover rounded-[24px]" />
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-10"
          >
            <p className="text-sm text-muted-foreground leading-relaxed">
              {news.conteudo}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mt-4">
              A indústria cinematográfica continua a se reinventar, trazendo novas perspectivas e tecnologias que ampliam os limites da narrativa audiovisual. Este é mais um capítulo fascinante na história do cinema que promete impactar gerações futuras.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mt-4">
              Fique ligado no CineVault para as últimas atualizações sobre este e outros assuntos do universo do entretenimento. Nossa equipe de redação trabalha incansavelmente para trazer as notícias mais relevantes e análises aprofundadas.
            </p>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NewsDetail;
