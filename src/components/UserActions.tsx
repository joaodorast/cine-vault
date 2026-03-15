import { motion } from "framer-motion";
import { Heart, Bookmark, Star, MessageSquare } from "lucide-react";
import { useState } from "react";
import { useUserData, type UserReview } from "@/hooks/useUserData";
import { Textarea } from "@/components/ui/textarea";

interface UserActionsProps {
  movieId: string;
  movieTitle: string;
}

const StarRating = ({ value, onChange }: { value: number; onChange: (v: number) => void }) => {
  const [hover, setHover] = useState(0);

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
        <button
          key={i}
          onMouseEnter={() => setHover(i)}
          onMouseLeave={() => setHover(0)}
          onClick={() => onChange(i)}
          className="p-0.5 transition-transform hover:scale-125"
        >
          <Star
            size={18}
            className={`transition-colors duration-200 ${
              i <= (hover || value) ? "text-primary fill-primary" : "text-muted-foreground/30"
            }`}
          />
        </button>
      ))}
      {(hover || value) > 0 && (
        <span className="font-mono-nums text-sm text-primary ml-2 font-semibold">
          {hover || value}/10
        </span>
      )}
    </div>
  );
};

const UserActions = ({ movieId, movieTitle }: UserActionsProps) => {
  const { isFavorito, isWatchlist, toggleFavorito, toggleWatchlist, avaliar, getAvaliacao, addReview, getReview } = useUserData();
  const [showReview, setShowReview] = useState(false);
  const [reviewText, setReviewText] = useState(getReview(movieId)?.texto || "");
  const userRating = getAvaliacao(movieId);
  const favorito = isFavorito(movieId);
  const watchlist = isWatchlist(movieId);

  const handleSubmitReview = () => {
    if (reviewText.trim()) {
      addReview({
        movieId,
        nota: userRating || 8,
        texto: reviewText,
        data: new Date().toLocaleDateString("pt-BR"),
      });
      setShowReview(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Action buttons */}
      <div className="flex items-center gap-3">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => toggleFavorito(movieId)}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
            favorito
              ? "bg-destructive/20 text-destructive border border-destructive/30"
              : "glass-surface text-foreground hover:border-destructive/30"
          }`}
        >
          <Heart size={16} className={favorito ? "fill-current" : ""} />
          {favorito ? "Favoritado" : "Favoritar"}
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => toggleWatchlist(movieId)}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
            watchlist
              ? "bg-primary/20 text-primary border border-primary/30"
              : "glass-surface text-foreground hover:border-primary/30"
          }`}
        >
          <Bookmark size={16} className={watchlist ? "fill-current" : ""} />
          {watchlist ? "Na Watchlist" : "Watchlist"}
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowReview(!showReview)}
          className="flex items-center gap-2 glass-surface px-4 py-2.5 rounded-full text-sm font-medium text-foreground hover:border-primary/30 transition-all duration-300"
        >
          <MessageSquare size={16} />
          Review
        </motion.button>
      </div>

      {/* Rating */}
      <div>
        <p className="text-sm text-muted-foreground mb-2">Sua Avaliação</p>
        <StarRating value={userRating} onChange={(v) => avaliar(movieId, v)} />
      </div>

      {/* Review form */}
      {showReview && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="glass-card p-5 space-y-4"
        >
          <h3 className="text-sm font-semibold text-foreground">
            Escreva sua review de "{movieTitle}"
          </h3>
          <Textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="O que você achou deste filme?"
            className="bg-secondary/50 border-border/50 rounded-2xl min-h-[100px] text-sm"
          />
          <div className="flex gap-3">
            <button
              onClick={handleSubmitReview}
              className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold hover:brightness-110 transition-all"
            >
              Publicar Review
            </button>
            <button
              onClick={() => setShowReview(false)}
              className="glass-surface px-5 py-2 rounded-full text-sm text-muted-foreground hover:text-foreground transition-all"
            >
              Cancelar
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default UserActions;
