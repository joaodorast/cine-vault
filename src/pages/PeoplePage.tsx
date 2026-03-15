import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PersonCard from "@/components/PersonCard";
import { pessoas, diretores, atores } from "@/data/people";

const PeoplePage = () => {
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
              Celebridades
            </h1>
            <p className="text-sm text-muted-foreground mt-2">
              Atores, diretores e talentos que moldam o cinema
            </p>
          </motion.div>

          {/* Actors */}
          <section className="mt-12">
            <h2 className="text-xl font-bold text-foreground mb-6">Atores & Atrizes</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {atores.map(p => (
                <PersonCard key={p.id} person={p} />
              ))}
            </div>
          </section>

          {/* Directors */}
          <section className="mt-16">
            <h2 className="text-xl font-bold text-foreground mb-6">Diretores & Diretoras</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {diretores.map(p => (
                <PersonCard key={p.id} person={p} />
              ))}
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PeoplePage;
