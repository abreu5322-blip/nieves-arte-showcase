import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-obra.jpg";

export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Obra destacada de Nieves"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-background/30 dark:bg-background/50" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="font-serif text-6xl sm:text-8xl md:text-9xl font-light tracking-wide text-foreground"
        >
          Nieves
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-4 text-sm md:text-base uppercase tracking-[0.3em] text-muted-foreground"
        >
          Artista visual venezolana
        </motion.p>
      </div>

      <motion.a
        href="#obra"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
        aria-label="Ir a galería"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.a>
    </section>
  );
}
