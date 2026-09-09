import { useState } from "react";
import { motion } from "framer-motion";
import { artworks, series, years, type Artwork } from "@/data/artworks";
import LightboxModal from "./LightboxModal";

export default function Gallery() {
  const [filterSeries, setFilterSeries] = useState<string | null>(null);
  const [filterYear, setFilterYear] = useState<number | null>(null);
  const [selected, setSelected] = useState<Artwork | null>(null);

  const filtered = artworks.filter((a) => {
    if (filterSeries && a.series !== filterSeries) return false;
    if (filterYear && a.year !== filterYear) return false;
    return true;
  });

  return (
    <section id="obra" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-serif text-4xl md:text-5xl font-light text-center mb-16"
      >
        Obra
      </motion.h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        <button
          onClick={() => { setFilterSeries(null); setFilterYear(null); }}
          className={`text-xs uppercase tracking-[0.15em] px-4 py-2 border transition-colors ${
            !filterSeries && !filterYear
              ? "border-foreground text-foreground"
              : "border-border text-muted-foreground hover:text-foreground hover:border-foreground"
          }`}
        >
          Todas
        </button>
        {series.map((s) => (
          <button
            key={s}
            onClick={() => { setFilterSeries(s); setFilterYear(null); }}
            className={`text-xs uppercase tracking-[0.15em] px-4 py-2 border transition-colors ${
              filterSeries === s
                ? "border-foreground text-foreground"
                : "border-border text-muted-foreground hover:text-foreground hover:border-foreground"
            }`}
          >
            {s}
          </button>
        ))}
        {years.map((y) => (
          <button
            key={y}
            onClick={() => { setFilterYear(y); setFilterSeries(null); }}
            className={`text-xs uppercase tracking-[0.15em] px-4 py-2 border transition-colors ${
              filterYear === y
                ? "border-foreground text-foreground"
                : "border-border text-muted-foreground hover:text-foreground hover:border-foreground"
            }`}
          >
            {y}
          </button>
        ))}
      </div>

      {/* Masonry-like grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {filtered.map((artwork, i) => (
          <motion.div
            key={artwork.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="break-inside-avoid cursor-pointer group"
            onClick={() => setSelected(artwork)}
          >
            <div className="relative overflow-hidden">
              <img
                src={artwork.image}
                alt={artwork.title}
                loading="lazy"
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm translate-y-full group-hover:translate-y-0 transition-transform duration-500 border-t border-border/50">
                <p className="font-serif text-lg text-foreground">{artwork.title}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{artwork.year} · {artwork.technique}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {selected && (
        <LightboxModal artwork={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
