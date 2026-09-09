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

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-20 pt-10 border-t border-border flex flex-wrap justify-center gap-8"
      >
        <a href="https://www.instagram.com/lisettnievesart" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm uppercase tracking-wider">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> Instagram
        </a>
        <a href="https://www.tiktok.com/@artnieveslis" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm uppercase tracking-wider">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a3 3 0 0 1-3 3z" /></svg> TikTok
        </a>
        <a href="https://www.youtube.com/@artesnieves" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm uppercase tracking-wider">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg> YouTube
        </a>
      </motion.div>
    </section>
  );
}
