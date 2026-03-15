import { Link } from "react-router-dom";
import { Film, Github, Twitter, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/30 pt-16 pb-8">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <span className="text-2xl font-extrabold tracking-tighter text-primary">CINE</span>
            <span className="text-2xl font-light tracking-tighter text-foreground">VAULT</span>
          </Link>
          <p className="text-xs text-muted-foreground leading-relaxed max-w-[240px]">
            A plataforma definitiva para os amantes de cinema. Descubra, avalie e explore o universo cinematográfico.
          </p>
        </div>

        {/* Explorar */}
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4">Explorar</h4>
          <div className="flex flex-col gap-2.5">
            <Link to="/explorar" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Filmes</Link>
            <Link to="/explorar?tipo=serie" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Séries</Link>
            <Link to="/explorar?tipo=documentario" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Documentários</Link>
            <Link to="/explorar?tipo=animacao" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Animações</Link>
            <Link to="/rankings" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Rankings</Link>
          </div>
        </div>

        {/* Comunidade */}
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4">Comunidade</h4>
          <div className="flex flex-col gap-2.5">
            <Link to="/noticias" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Notícias</Link>
            <Link to="/rankings" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Top 250</Link>
            <Link to="/pessoas" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Celebridades</Link>
            <Link to="/premiados" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Premiados</Link>
          </div>
        </div>

        {/* Sobre */}
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4">Sobre</h4>
          <div className="flex flex-col gap-2.5">
            <span className="text-xs text-muted-foreground">Política de Privacidade</span>
            <span className="text-xs text-muted-foreground">Termos de Uso</span>
            <span className="text-xs text-muted-foreground">Contato</span>
            <span className="text-xs text-muted-foreground">FAQ</span>
          </div>
        </div>
      </div>

      <div className="h-px bg-border/30 mb-6" />

      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          Onde cada frame conta uma história. © 2025 CineVault
        </p>
        <div className="flex items-center gap-4">
          <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"><Twitter size={16} /></span>
          <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"><Instagram size={16} /></span>
          <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"><Github size={16} /></span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
