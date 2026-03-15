import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { Person } from "@/data/people";

interface PersonCardProps {
  person: Person;
}

const PersonCard = ({ person }: PersonCardProps) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <Link to={`/pessoa/${person.id}`} className="block group">
        <div className="glass-card overflow-hidden p-2">
          <div className="aspect-square overflow-hidden rounded-[20px]">
            <motion.img
              src={person.foto}
              alt={person.nome}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
            />
          </div>
        </div>
        <div className="mt-3 px-1 text-center">
          <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
            {person.nome}
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            {person.profissoes.join(" • ")}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default PersonCard;
