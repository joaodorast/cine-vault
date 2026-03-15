import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsCard from "@/components/NewsCard";
import { noticias } from "@/data/news";

const NewsPage = () => {
  const featured = noticias[0];
  const rest = noticias.slice(1);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-8">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground">
              Notícias
            </h1>
            <p className="text-sm text-muted-foreground mt-2">
              As últimas novidades do mundo do cinema e entretenimento
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
            {/* Featured */}
            <div className="lg:col-span-2">
              <NewsCard news={featured} featured />
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground mb-2">Mais Notícias</h3>
              {rest.map(n => (
                <NewsCard key={n.id} news={n} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NewsPage;
