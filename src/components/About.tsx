import { motion } from "framer-motion";
import retrato from "@/assets/retrato-artista.jpg";

export default function About() {
  return (
    <section id="sobre" className="py-24 md:py-32 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={retrato}
            alt="Retrato de Nieves"
            loading="lazy"
            className="w-full max-w-md mx-auto"
            width={800}
            height={1024}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-8">Sobre Nieves</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
            <p>
              Nacida en Venezuela, Nieves es una artista plástica contemporánea cuya obra explora la intersección 
              entre la memoria, el paisaje interior y la materia. Su trabajo se nutre de las texturas, colores y 
              ritmos de su tierra natal, transformándolos en composiciones abstractas que dialogan con lo universal.
            </p>
            <p>
              Formada en Caracas y con estudios complementarios en Europa, su práctica artística abarca el óleo, 
              el acrílico, la técnica mixta y la experimentación con pigmentos naturales. Cada pieza es una 
              investigación sobre el gesto, la luz y las capas de significado que habitan en la superficie pictórica.
            </p>
            <p>
              Su obra ha sido exhibida en galerías y ferias de arte en Venezuela, Colombia, México, España y 
              Estados Unidos. Actualmente trabaja desde su estudio, donde continúa desarrollando nuevas series 
              que profundizan en su lenguaje visual.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
