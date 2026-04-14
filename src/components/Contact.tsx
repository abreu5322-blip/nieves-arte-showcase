import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const subjects = [
  "Consulta general",
  "Interés en obra",
  "Prensa",
  "Galería",
];

export default function Contact() {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Mensaje enviado. Nos pondremos en contacto pronto.");
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contacto" className="py-24 md:py-32 px-6 md:px-12 max-w-2xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-serif text-4xl md:text-5xl font-light text-center mb-4"
      >
        Contacto
      </motion.h2>
      <p className="text-center text-muted-foreground text-sm mb-12">
        ¿Interesado en una obra o colaboración? Escríbenos.
      </p>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">Nombre</label>
            <input
              type="text"
              required
              className="w-full bg-transparent border-b border-border py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors"
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">Email</label>
            <input
              type="email"
              required
              className="w-full bg-transparent border-b border-border py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors"
              placeholder="tu@email.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">Asunto</label>
          <select
            required
            className="w-full bg-transparent border-b border-border py-3 text-sm text-foreground focus:outline-none focus:border-foreground transition-colors appearance-none"
          >
            <option value="" className="bg-background">Seleccionar</option>
            {subjects.map((s) => (
              <option key={s} value={s} className="bg-background">{s}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">Mensaje</label>
          <textarea
            required
            rows={5}
            className="w-full bg-transparent border-b border-border py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors resize-none"
            placeholder="Tu mensaje..."
          />
        </div>

        <div className="text-center pt-4">
          <button
            type="submit"
            disabled={sending}
            className="text-xs uppercase tracking-[0.2em] border border-foreground text-foreground px-10 py-4 hover:bg-foreground hover:text-primary-foreground transition-colors disabled:opacity-50"
          >
            {sending ? "Enviando..." : "Enviar mensaje"}
          </button>
        </div>
      </motion.form>
    </section>
  );
}
