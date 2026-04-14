import { motion } from "framer-motion";
import estudio1 from "@/assets/estudio-1.jpg";
import estudio2 from "@/assets/estudio-2.jpg";

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

      <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
        {/* Text block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-5 space-y-6 text-muted-foreground text-sm md:text-base leading-relaxed"
        >
          <p>
            El proceso de Nieves comienza siempre con la observación. Antes de tocar el lienzo, 
            pasa semanas recopilando impresiones: fotografías de texturas naturales, paletas de 
            color encontradas en el paisaje cotidiano, fragmentos de conversaciones que se 
            transforman en ritmos visuales.
          </p>
          <p>
            En su estudio, la artista trabaja simultáneamente en varias piezas, permitiendo que 
            cada una dialogue con las demás. Utiliza capas sucesivas de pintura, dejando que el 
            azar y la intuición guíen el proceso tanto como la intención.
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

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-7"
        >
          <img
            src={estudio2}
            alt="Proceso de pintura"
            loading="lazy"
            className="w-full"
            width={1024}
            height={700}
          />
        </motion.div>

        {/* Text block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="md:col-span-5 space-y-6 text-muted-foreground text-sm md:text-base leading-relaxed"
        >
          <p>
            La materialidad es central en su trabajo. Experimenta constantemente con pigmentos 
            naturales, arenas, resinas y pan de oro, buscando que la superficie de cada obra tenga 
            una presencia física que invite a la contemplación cercana.
          </p>
          <p>
            Sus influencias van desde los maestros del informalismo europeo hasta las tradiciones 
            artesanales venezolanas, pasando por la poesía y la música. El resultado es un lenguaje 
            visual que es a la vez íntimo y expansivo.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
