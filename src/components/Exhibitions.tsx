import { motion } from "framer-motion";

export default function Exhibitions() {
  return (
    <section id="exposiciones" className="py-24 md:py-32 px-6 md:px-12 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-serif text-4xl md:text-5xl font-light text-center mb-20"
      >
        Exposiciones & CV
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-16 md:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-foreground mb-6 border-b border-border pb-2">
              Exposiciones Individuales
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-serif text-lg text-foreground">Exposición individual</p>
                <p className="text-sm text-muted-foreground">2023 · Restaurante Dharma, El Hatillo, Caracas, Venezuela</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-foreground mb-6 border-b border-border pb-2">
              Exposiciones Colectivas
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-serif text-lg text-foreground">Salón Elsa Morales</p>
                <p className="text-sm text-muted-foreground">2025 · Galería de Arte Nacional, Caracas, Venezuela</p>
              </div>
              <div>
                <p className="font-serif text-lg text-foreground">Salón Arturo Michelena</p>
                <p className="text-sm text-muted-foreground">2025 · Museo de la Cultura, Carabobo, Venezuela</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-12"
        >
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-foreground mb-6 border-b border-border pb-2">
              Distinciones
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-serif text-lg text-foreground">Seleccionada - Salón Elsa Morales</p>
                <p className="text-sm text-muted-foreground">2025 · Galería de Arte Nacional, Caracas</p>
              </div>
              <div>
                <p className="font-serif text-lg text-foreground">Seleccionada - Salón Arturo Michelena</p>
                <p className="text-sm text-muted-foreground">2025 · Museo de la Cultura, Carabobo</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-foreground mb-6 border-b border-border pb-2">
              Formación
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-serif text-lg text-foreground">TSU en Gerencia Financiera</p>
                <p className="text-sm text-muted-foreground">Instituto Universitario de Profesiones Gerenciales, Venezuela</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
