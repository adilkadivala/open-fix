import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

function BentoCard({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={cn("p-6 rounded-2xl border border-border bg-card hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group overflow-hidden", className)}
    >
      {children}
    </motion.div>
  );
}

export default BentoCard