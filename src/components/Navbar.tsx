import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X } from "lucide-react";
import { todosFilmes } from "@/data/movies";

const navLinks = [
  { label: "Início", to: "/" },
  { label: "Explorar", to: "/explorar" },
  { label: "Rankings", to: "/rankings" },
  { label: "Celebridades", to: "/pessoas" },
  { label: "Notícias", to: "/noticias" },
];

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const searchResults = searchQuery.length >= 2
    ? todosFilmes.filter(f =>
        f.titulo.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.tituloOriginal.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      className="fixed top-0 left-0 right-0 z-50 glass-surface"
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-extrabold tracking-tighter text-primary">CINE</span>
          <span className="text-2xl font-light tracking-tighter text-foreground">VAULT</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3 relative">
          <AnimatePresence>
            {searchOpen && (
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 280, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
                className="relative"
              >
                <input
                  type="text"
                  placeholder="Buscar filmes, séries..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-secondary/80 text-foreground text-sm px-4 py-2 rounded-full border border-border/50 outline-none focus:border-primary/50 placeholder:text-muted-foreground"
                  autoFocus
                />

                {/* Search results dropdown */}
                {searchResults.length > 0 && (
                  <div className="absolute top-full mt-2 left-0 right-0 glass-surface rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
                    {searchResults.map(movie => (
                      <Link
                        key={movie.id}
                        to={movie.tipo === "serie" ? `/serie/${movie.id}` : `/filme/${movie.id}`}
                        onClick={() => { setSearchQuery(""); setSearchOpen(false); }}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-secondary/50 transition-colors"
                      >
                        <img src={movie.poster} alt={movie.titulo} className="w-8 h-12 rounded-lg object-cover" />
                        <div>
                          <p className="text-sm font-medium text-foreground">{movie.titulo}</p>
                          <p className="text-xs text-muted-foreground">{movie.ano} • {movie.generos[0]}</p>
                        </div>
                        <span className="ml-auto font-mono-nums text-xs text-primary font-semibold">
                          {movie.nota.toFixed(1)}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
          <button
            onClick={() => { setSearchOpen(!searchOpen); setSearchQuery(""); }}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            {searchOpen ? <X size={18} /> : <Search size={18} />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-surface border-t border-border/30 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
