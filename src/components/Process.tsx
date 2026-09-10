import { motion } from "framer-motion";
import estudio1 from "@/assets/Expodharma.jpg";

export default function Process() {
  return (
    <section id="proceso" className="py-24 md:py-32 px-6 md:px-12 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-serif text-4xl md:text-5xl font-light text-center mb-16"
      >
        Proceso Creativo
      </motion.h2>

      <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
        {/* Text block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-5 space-y-6 text-muted-foreground text-sm md:text-base leading-relaxed flex flex-col justify-center"
        >
          <p>
            Para Nieves, las ideas no se buscan: aparecen. Una escena de una película, una situación 
            cotidiana o una imagen fugaz pueden convertirse en el punto de partida de una obra. Desde 
            ese primer destello, el proceso es todo lo contrario a impulsivo: cada idea se anota, se 
            elabora y se deja madurar durante semanas, meses o, en ocasiones, años enteros antes de 
            que el pincel toque el lienzo.
          </p>
          <p>
            Su técnica principal es el óleo, aunque también trabaja con acrílicos, acuarelas y lápices 
            de color. No hay fórmulas fijas: cada obra encuentra su propio ritmo, su propia escala y 
            su propio momento.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="md:col-span-7"
        >
          <img
            src={estudio1}
            alt="Estudio de Nieves"
            loading="lazy"
            className="w-full"
            width={1024}
            height={700}
          />
        </motion.div>
      </div>
    </section>
  );
}
