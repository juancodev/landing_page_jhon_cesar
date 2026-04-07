import { motion } from "motion/react";

const customEase = [0.22, 1, 0.36, 1] as any;

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center flex flex-col items-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: customEase }}
          className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium tracking-wide uppercase text-[var(--color-muted)] pointer-events-auto"
        >
          Jhon Cesar • Filmmaker & Editor
        </motion.div>
        
        <motion.h1
          initial={{ y: 60, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.1, ease: customEase }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-8"
        >
          EDICIÓN DE VIDEO <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-orange-300 italic">
            REINVENTADA.
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: customEase }}
          className="max-w-2xl text-base sm:text-lg md:text-xl text-[var(--color-muted)] mb-10"
        >
          Transformo ideas en experiencias visuales que conectan, impactan y retienen a tu audiencia. Storytelling visual para marcas y creadores.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: customEase }}
          className="flex flex-col sm:flex-row gap-4 pointer-events-auto w-full sm:w-auto"
        >
          <a
            href="#portfolio"
            className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 w-full sm:w-auto"
          >
            Ver Proyectos
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300 w-full sm:w-auto"
          >
            Contactar
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1.2, ease: customEase }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-[var(--color-muted)]">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" 
        />
      </motion.div>
    </section>
  );
}
