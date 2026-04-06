import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center flex flex-col items-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium tracking-wide uppercase text-[var(--color-muted)] pointer-events-auto"
        >
          Jhon Cesar • Filmmaker & Editor
        </motion.div>
        
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-8"
        >
          EDICIÓN DE VIDEO <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-orange-300 italic">
            REINVENTADA.
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="max-w-2xl text-lg md:text-xl text-[var(--color-muted)] mb-10"
        >
          Transformo ideas en experiencias visuales que conectan, impactan y retienen a tu audiencia. Storytelling visual para marcas y creadores.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 pointer-events-auto"
        >
          <a
            href="#portfolio"
            className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform"
          >
            Ver Proyectos
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-colors"
          >
            Contactar
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-[var(--color-muted)]">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}
