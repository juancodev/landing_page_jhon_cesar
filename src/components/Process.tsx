import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { MonitorScene } from "./MonitorScene";

const STEPS = [
  {
    number: "01",
    title: "Análisis del Contenido",
    description: "Revisamos tu material en bruto y definimos el objetivo del video. Entendemos a tu audiencia y el mensaje que quieres transmitir.",
  },
  {
    number: "02",
    title: "Idea y Estructura",
    description: "Creamos un guion de edición. Seleccionamos las mejores tomas, definimos el ritmo y la narrativa visual.",
  },
  {
    number: "03",
    title: "Edición y Postproducción",
    description: "Cortes precisos, corrección de color, diseño sonoro y efectos visuales. Aquí es donde la magia ocurre.",
  },
  {
    number: "04",
    title: "Revisión y Entrega",
    description: "Te enviamos una versión preliminar para ajustes. Una vez aprobado, entregamos el video final en alta calidad.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative py-32 px-6 md:px-12 bg-[#0a0a0a] overflow-hidden">
      {/* Background 3D Monitor */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <MonitorScene />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-bold tracking-widest uppercase text-[var(--color-primary)] mb-4">
            Cómo Trabajo
          </h2>
          <h3 className="text-4xl md:text-6xl font-black tracking-tighter">
            Un proceso diseñado <br /> para el éxito.
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative p-8 rounded-2xl bg-[var(--color-card)] border border-white/5 hover:border-[var(--color-primary)]/50 transition-colors group"
            >
              <div className="text-6xl font-black text-white/5 mb-6 group-hover:text-[var(--color-primary)]/20 transition-colors">
                {step.number}
              </div>
              <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)]" />
                {step.title}
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
