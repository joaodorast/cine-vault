import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ContentCard from "./ContentCard";
import type { Movie } from "@/data/movies";

interface ContentCarouselProps {
  titulo: string;
  subtitulo?: string;
  items: Movie[];
  showType?: boolean;
}

const ContentCarousel = ({ titulo, subtitulo, items, showType }: ContentCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const amount = scrollRef.current.clientWidth * 0.7;
      scrollRef.current.scrollBy({
        left: dir === "left" ? -amount : amount,
        behavior: "smooth",
      });
      setTimeout(checkScroll, 400);
    }
  };

  return (
    <section className="section-spacing">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="flex items-end justify-between mb-8"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">{titulo}</h2>
            {subtitulo && <p className="text-sm text-muted-foreground mt-2">{subtitulo}</p>}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="glass-surface rounded-full p-2 text-muted-foreground hover:text-foreground disabled:opacity-30 transition-all duration-300"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="glass-surface rounded-full p-2 text-muted-foreground hover:text-foreground disabled:opacity-30 transition-all duration-300"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>

      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-5 overflow-x-auto scrollbar-hide px-6 pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="w-[calc((100vw-1400px)/2+2rem-1.25rem)] flex-shrink-0 hidden 2xl:block" />
        {items.map((item, i) => (
          <div key={item.id} className="flex-shrink-0 w-[200px] md:w-[220px]">
            <ContentCard item={item} index={i} showType={showType} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContentCarousel;
