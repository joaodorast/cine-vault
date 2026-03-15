import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { Filter, SlidersHorizontal } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContentCard from "@/components/ContentCard";
import GenreTag from "@/components/GenreTag";
import { todosFilmes, generos, paises, type ContentType } from "@/data/movies";

const tipos: { value: ContentType | "todos"; label: string }[] = [
  { value: "todos", label: "Todos" },
  { value: "filme", label: "Filmes" },
  { value: "serie", label: "Séries" },
  { value: "documentario", label: "Documentários" },
  { value: "animacao", label: "Animações" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
};

const ExplorePage = () => {
  const [searchParams] = useSearchParams();
  const generoParam = searchParams.get("genero") || "";
  const tipoParam = (searchParams.get("tipo") || "todos") as ContentType | "todos";

  const [selectedTipo, setSelectedTipo] = useState<ContentType | "todos">(tipoParam);
  const [selectedGenero, setSelectedGenero] = useState(generoParam);
  const [selectedPais, setSelectedPais] = useState("");
  const [selectedAno, setSelectedAno] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<"nota" | "ano" | "nome">("nota");

  const filtered = useMemo(() => {
    let result = [...todosFilmes];
    if (selectedTipo !== "todos") result = result.filter(f => f.tipo === selectedTipo);
    if (selectedGenero) result = result.filter(f => f.generos.includes(selectedGenero));
    if (selectedPais) result = result.filter(f => f.pais === selectedPais);
    if (selectedAno) result = result.filter(f => f.ano === selectedAno);

    if (sortBy === "nota") result.sort((a, b) => b.nota - a.nota);
    else if (sortBy === "ano") result.sort((a, b) => b.ano - a.ano);
    else result.sort((a, b) => a.titulo.localeCompare(b.titulo));

    return result;
  }, [selectedTipo, selectedGenero, selectedPais, selectedAno, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-8">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground">
              Explorar
            </h1>
            <p className="text-sm text-muted-foreground mt-2">
              Descubra filmes, séries, documentários e muito mais
            </p>
          </motion.div>

          {/* Type filter */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-wrap gap-2 mt-8"
          >
            {tipos.map(t => (
              <button
                key={t.value}
                onClick={() => setSelectedTipo(t.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedTipo === t.value
                    ? "bg-primary text-primary-foreground"
                    : "glass-surface text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.label}
              </button>
            ))}
          </motion.div>

          {/* Genre filter */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap gap-2 mt-4"
          >
            <button
              onClick={() => setSelectedGenero("")}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                !selectedGenero ? "bg-primary/20 text-primary border border-primary/30" : "glass-surface text-muted-foreground hover:text-foreground"
              }`}
            >
              Todos os Gêneros
            </button>
            {generos.slice(0, 12).map(g => (
              <button
                key={g}
                onClick={() => setSelectedGenero(selectedGenero === g ? "" : g)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  selectedGenero === g ? "bg-primary/20 text-primary border border-primary/30" : "glass-surface text-muted-foreground hover:text-foreground"
                }`}
              >
                {g}
              </button>
            ))}
          </motion.div>

          {/* Sort + Country */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap items-center gap-4 mt-6"
          >
            <div className="flex items-center gap-2 glass-surface rounded-full px-4 py-2">
              <SlidersHorizontal size={14} className="text-muted-foreground" />
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value as "nota" | "ano" | "nome")}
                className="bg-transparent text-sm text-foreground outline-none cursor-pointer"
              >
                <option value="nota">Melhor Avaliados</option>
                <option value="ano">Mais Recentes</option>
                <option value="nome">A-Z</option>
              </select>
            </div>

            <div className="flex items-center gap-2 glass-surface rounded-full px-4 py-2">
              <Filter size={14} className="text-muted-foreground" />
              <select
                value={selectedPais}
                onChange={e => setSelectedPais(e.target.value)}
                className="bg-transparent text-sm text-foreground outline-none cursor-pointer"
              >
                <option value="">Todos os Países</option>
                {paises.map(p => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>

            <span className="text-xs text-muted-foreground">
              {filtered.length} resultado{filtered.length !== 1 ? "s" : ""}
            </span>
          </motion.div>

          {/* Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 md:gap-6 mt-10"
          >
            {filtered.map((item, i) => (
              <ContentCard key={item.id} item={item} index={i} showType />
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">Nenhum resultado encontrado.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ExplorePage;
