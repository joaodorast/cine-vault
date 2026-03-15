import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, MapPin, Award, Film } from "lucide-react";
import { getPessoaById } from "@/data/people";
import { todosFilmes } from "@/data/movies";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContentCard from "@/components/ContentCard";

const PersonDetail = () => {
  const { id } = useParams();
  const person = getPessoaById(id || "");

  if (!person) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Pessoa não encontrada.</p>
          <Link to="/pessoas" className="text-primary hover:underline text-sm">Ver celebridades</Link>
        </div>
      </div>
    );
  }

  const filmografia = todosFilmes.filter(f => person.filmografia.includes(f.id));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-8">
        <div className="container mx-auto px-6">
          <Link
            to="/pessoas"
            className="inline-flex items-center gap-2 glass-surface rounded-full px-4 py-2 text-sm text-foreground hover:border-primary/30 transition-all duration-300 mb-8"
          >
            <ArrowLeft size={16} />
            Celebridades
          </Link>

          <div className="flex flex-col md:flex-row gap-10">
            {/* Photo */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
              className="w-56 md:w-72 flex-shrink-0"
            >
              <div className="glass-card overflow-hidden p-2">
                <img
                  src={person.foto}
                  alt={person.nome}
                  className="w-full rounded-[20px] aspect-square object-cover"
                />
              </div>
            </motion.div>

            {/* Info */}
            <div className="flex-1">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  {person.profissoes.map(p => (
                    <span key={p} className="glass-surface rounded-full px-3 py-1 text-xs text-primary font-medium">
                      {p}
                    </span>
                  ))}
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground">
                  {person.nome}
                </h1>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-wrap items-center gap-5 mt-4"
              >
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar size={14} />
                  <span>{person.nascimento}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin size={14} />
                  <span>{person.nacionalidade}</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="mt-8 max-w-[65ch]"
              >
                <h2 className="text-lg font-semibold text-foreground mb-3">Biografia</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{person.bio}</p>
              </motion.div>

              {/* Awards */}
              {person.premios && person.premios.length > 0 && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mt-8"
                >
                  <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Award size={18} className="text-primary" /> Prêmios
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {person.premios.map(p => (
                      <span key={p} className="glass-surface rounded-full px-3 py-1.5 text-xs text-primary font-medium cinema-glow">
                        {p}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Filmography */}
              {filmografia.length > 0 && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mt-12"
                >
                  <h2 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                    <Film size={18} /> Filmografia
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                    {filmografia.map((item, i) => (
                      <ContentCard key={item.id} item={item} index={i} showType />
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PersonDetail;
