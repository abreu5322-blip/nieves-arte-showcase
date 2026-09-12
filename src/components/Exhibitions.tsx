import { motion } from "framer-motion";

export default function Exhibitions() {
  return (
    <section id="exposiciones" className="py-24 md:py-32 px-6 md:px-12 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-serif text-4xl md:text-5xl font-light text-center mb-20"
      >
        Exposiciones & CV
      </motion.h2>

      <div className="relative grid md:grid-cols-2 gap-12 md:gap-0 max-w-5xl mx-auto">
        {/* Central Line Desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-border/80 -translate-x-1/2" />
        
        {/* Mobile Line */}
        <div className="md:hidden absolute left-[24px] top-0 bottom-0 w-[1px] bg-border/80" />

        {/* Left side: Exposiciones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative md:pr-12 lg:pr-20 space-y-16 md:text-right pl-12 md:pl-0"
        >
          <div>
            <h3 className="font-bold text-sm uppercase tracking-[0.2em] text-foreground mb-12 relative">
              Exposiciones
            </h3>
            <div className="space-y-12">
              
              <div className="relative">
                <div className="absolute top-2 -left-12 md:left-auto md:-right-12 lg:-right-20 w-[7px] h-[7px] bg-foreground rounded-full -translate-x-[0.5px] md:translate-x-[3.5px]" />
                <p className="font-serif text-lg text-foreground">Salón Elsa Morales (Colectiva)</p>
                <p className="text-sm text-muted-foreground mt-1">2025 · Galería de Arte Nacional, Caracas</p>
              </div>

              <div className="relative">
                <div className="absolute top-2 -left-12 md:left-auto md:-right-12 lg:-right-20 w-[7px] h-[7px] bg-foreground rounded-full -translate-x-[0.5px] md:translate-x-[3.5px]" />
                <p className="font-serif text-lg text-foreground">Salón Arturo Michelena (Colectiva)</p>
                <p className="text-sm text-muted-foreground mt-1">2025 · Museo de la Cultura, Carabobo</p>
              </div>

              <div className="relative">
                <div className="absolute top-2 -left-12 md:left-auto md:-right-12 lg:-right-20 w-[7px] h-[7px] bg-foreground rounded-full -translate-x-[0.5px] md:translate-x-[3.5px]" />
                <p className="font-serif text-lg text-foreground">Exposición Individual</p>
                <p className="text-sm text-muted-foreground mt-1">2023 · Restaurante Dharma, El Hatillo, Caracas</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right side: Distinciones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative md:pl-12 lg:pl-20 space-y-16 pl-12 pt-16 md:pt-32"
        >
          <div>
            <h3 className="font-bold text-sm uppercase tracking-[0.2em] text-foreground mb-12 relative">
              Distinciones
            </h3>
            <div className="space-y-12">
              <div className="relative">
                <div className="absolute top-2 -left-12 md:-left-12 lg:-left-20 w-[7px] h-[7px] bg-foreground rounded-full -translate-x-[0.5px] md:-translate-x-[3.5px]" />
                <p className="font-serif text-lg text-foreground">Seleccionada - Salón Elsa Morales</p>
                <p className="text-sm text-muted-foreground mt-1">2025 · Galería de Arte Nacional, Caracas</p>
              </div>
              <div className="relative">
                <div className="absolute top-2 -left-12 md:-left-12 lg:-left-20 w-[7px] h-[7px] bg-foreground rounded-full -translate-x-[0.5px] md:-translate-x-[3.5px]" />
                <p className="font-serif text-lg text-foreground">Seleccionada - Salón Arturo Michelena</p>
                <p className="text-sm text-muted-foreground mt-1">2025 · Museo de la Cultura, Carabobo</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
