import { X } from "lucide-react";
import { motion } from "framer-motion";
import type { Artwork } from "@/data/artworks";

interface Props {
  artwork: Artwork;
  onClose: () => void;
}

export default function LightboxModal({ artwork, onClose }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors z-10"
        aria-label="Cerrar"
      >
        <X className="w-6 h-6" />
      </button>

      <div
        className="flex flex-col md:flex-row gap-8 max-w-5xl w-full max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex-1 flex items-center justify-center min-h-0">
          <img
            src={artwork.image}
            alt={artwork.title}
            className="max-w-full max-h-[70vh] object-contain"
          />
        </div>
        <div className="md:w-72 flex flex-col justify-center gap-4">
          <h3 className="font-serif text-3xl font-light">{artwork.title}</h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p><span className="uppercase tracking-wider text-xs text-foreground/60">Año</span><br />{artwork.year}</p>
            <p><span className="uppercase tracking-wider text-xs text-foreground/60">Técnica</span><br />{artwork.technique}</p>
            <p><span className="uppercase tracking-wider text-xs text-foreground/60">Dimensiones</span><br />{artwork.dimensions}</p>
            {artwork.note && <p><span className="uppercase tracking-wider text-xs text-foreground/60">Nota</span><br />{artwork.note}</p>}
          </div>
          <a
            href={`#contacto`}
            onClick={onClose}
            className="mt-4 inline-block text-center text-xs uppercase tracking-[0.2em] border border-foreground text-foreground px-6 py-3 hover:bg-foreground hover:text-primary-foreground transition-colors"
          >
            Consultar esta obra
          </a>
        </div>
      </div>
    </motion.div>
  );
}
