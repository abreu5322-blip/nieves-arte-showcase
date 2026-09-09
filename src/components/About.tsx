import { motion } from "framer-motion";
import retrato from "@/assets/retrato-artista.jpg";

export default function About() {
  return (
    <>
      <section id="sobre" className="pt-24 md:pt-32 pb-16 px-6 md:px-12 max-w-6xl mx-auto">
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
                Lisett Illiana Nieves de Tovar nació en Maracaibo y reside en Caracas, Venezuela. 
                Su camino hacia el arte no siguió una trayectoria convencional: formada como Técnico 
                Superior en Gerencia Financiera, fue una decisión personal radical la que la llevó a 
                dejar su carrera anterior, emprender un viaje a Colombia y regresar con sus primeros 
                materiales de pintura.
              </p>
              <p>
                Desde ese punto de partida, Nieves ha desarrollado un lenguaje visual propio: limpio, 
                ordenado y elegante, pero siempre con un giro inesperado. Su obra explora la elegancia 
                contemporánea y el misterio de los sueños a través de atmósferas depuradas y elementos 
                surrealistas. La figura femenina, las situaciones oníricas y la geometría son constantes 
                recurrentes en su trabajo, junto a una paleta de colores en permanente evolución.
              </p>
              <p>
                Su técnica principal es la pintura al óleo, aunque también trabaja con acrílicos, acuarelas 
                y lápices de color. Entre sus referentes visuales se encuentra 'El jardín de las delicias' 
                de Hieronymus Bosch.
              </p>
              <p>
                En 2025 fue seleccionada para dos de los salones más reconocidos del país: el Salón Arturo 
                Michelena en el Museo de la Cultura de Carabobo, y el Salón Elsa Morales en la Galería de 
                Arte Nacional de Caracas.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <blockquote className="font-serif text-2xl md:text-4xl italic font-light text-foreground mb-6 leading-snug">
            "Mi obra explora la elegancia contemporánea y el misterio de los sueños.<br className="hidden md:block" /> 
            A través de atmósferas limpias y elementos surrealistas."
          </blockquote>
          <p className="text-sm uppercase tracking-widest text-muted-foreground">— Nieves</p>
        </motion.div>
      </section>
    </>
  );
}
