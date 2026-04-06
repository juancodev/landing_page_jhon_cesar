import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "Campaña Publicitaria",
    category: "Comercial",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 2,
    title: "Documental Urbano",
    category: "Storytelling",
    image: "https://images.unsplash.com/photo-1578022761797-b8636ac1773c?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 3,
    title: "Vlogs de Viajes",
    category: "YouTube",
    image: "https://images.unsplash.com/photo-1518131672697-611eb14bf8d6?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 4,
    title: "Reels & TikToks",
    category: "Redes Sociales",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-32 px-6 md:px-12 bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8"
        >
          <div>
            <h2 className="text-sm font-bold tracking-widest uppercase text-[var(--color-primary)] mb-4">
              Trabajos Destacados
            </h2>
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter">
              Proyectos que hablan <br /> por sí solos.
            </h3>
          </div>
          <p className="max-w-md text-[var(--color-muted)] text-lg">
            Una selección de mis mejores ediciones, donde el ritmo, el color y la narrativa se unen para crear impacto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative block overflow-hidden rounded-2xl bg-[var(--color-card)] aspect-[4/3] cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-between items-end">
                <div>
                  <p className="text-[var(--color-primary)] font-medium text-sm mb-2 uppercase tracking-wider">
                    {project.category}
                  </p>
                  <h4 className="text-2xl md:text-3xl font-bold text-white">
                    {project.title}
                  </h4>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
