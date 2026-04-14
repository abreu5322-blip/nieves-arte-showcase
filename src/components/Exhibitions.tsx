import { motion } from "framer-motion";

const timeline = [
  { year: "2024", type: "Individual", title: "Tierra Encendida", venue: "Galería Carmen Araujo Arte, Caracas" },
  { year: "2024", type: "Colectiva", title: "Nuevas Voces Latinoamericanas", venue: "ARCO Madrid, España" },
  { year: "2023", type: "Individual", title: "Impulso", venue: "Galería Freites, Caracas" },
  { year: "2023", type: "Colectiva", title: "Arte Contemporáneo Venezolano", venue: "Museo de Arte Contemporáneo de Bogotá" },
  { year: "2022", type: "Individual", title: "Geometrías del Silencio", venue: "Espacio Monitor, Ciudad de México" },
  { year: "2022", type: "Premio", title: "Mención Honorífica", venue: "Salón Nacional de Arte Joven, Venezuela" },
  { year: "2021", type: "Colectiva", title: "Diálogos del Sur", venue: "Galería Henrique Faria, Nueva York" },
  { year: "2021", type: "Formación", title: "Residencia artística", venue: "Fundación Botín, Santander, España" },
  { year: "2020", type: "Individual", title: "Raíces", venue: "Centro de Arte Los Galpones, Caracas" },
  { year: "2019", type: "Formación", title: "Licenciatura en Artes Plásticas", venue: "Universidad Central de Venezuela" },
];

const typeColors: Record<string, string> = {
  Individual: "text-foreground",
  Colectiva: "text-muted-foreground",
  Premio: "text-foreground",
  Formación: "text-muted-foreground",
};

export default function Exhibitions() {
  return (
    <section id="exposiciones" className="py-24 md:py-32 px-6 md:px-12 max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-serif text-4xl md:text-5xl font-light text-center mb-16"
      >
        Exposiciones & CV
      </motion.h2>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-12">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`relative pl-12 md:pl-0 md:w-1/2 ${
                i % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
              }`}
            >
              {/* Dot */}
              <div className={`absolute top-1 w-2.5 h-2.5 rounded-full bg-foreground/30 left-[11px] md:left-auto ${
                i % 2 === 0 ? "md:right-[-5px]" : "md:left-[-5px]"
              }`} />

              <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1">
                {item.year} · {item.type}
              </p>
              <p className={`font-serif text-xl font-light ${typeColors[item.type] || "text-foreground"}`}>
                {item.title}
              </p>
              <p className="text-sm text-muted-foreground mt-1">{item.venue}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
