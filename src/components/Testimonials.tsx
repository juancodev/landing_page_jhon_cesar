import { motion } from "motion/react";
import { Quote } from "lucide-react";

const customEase = [0.22, 1, 0.36, 1] as any;

const testimonials = [
  {
    quote: "Te has adaptado rapidísimo a nuestra marca y ya hemos conseguido resultados increíbles. Superó nuestras expectativas.",
    name: "Luis Fernández",
    role: "Director, Brand Studio",
    stats: "654K subs",
    initials: "LF"
  },
  {
    quote: "Muy buen trabajo, exactamente lo que pedí. Lo entendió todo a la primera. La retención de nuestros videos se disparó.",
    name: "Sofia Torres",
    role: "CEO, Content Masters",
    stats: "3.1M subs",
    initials: "ST"
  },
  {
    quote: "Trabajo profesional y entrega rápida. Ha mejorado significativamente nuestro engagement en todas las plataformas.",
    name: "David Sánchez",
    role: "Founder, Video Labs",
    stats: "445K subs",
    initials: "DS"
  },
  {
    quote: "La forma en la que está contado me mantuvo enganchado hasta el final. Increíble la calidad y el profesionalismo en cada detalle.",
    name: "Carlos Gómez",
    role: "Creador de Contenido",
    stats: "1.2M subs",
    initials: "CG"
  },
  {
    quote: "El mejor editor con el que he trabajado. Entiende perfectamente el ritmo que necesita YouTube hoy en día.",
    name: "Ana Martínez",
    role: "Tech YouTuber",
    stats: "890K subs",
    initials: "AM"
  },
  {
    quote: "Nuestras campañas de TikTok pasaron de tener 10k vistas a más de 1M gracias a su visión y edición dinámica.",
    name: "Roberto Díaz",
    role: "Marketing Manager",
    stats: "Agencia Creativa",
    initials: "RD"
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: any }) => (
  <div className="group relative z-10 w-[260px] md:w-[280px] h-full flex-shrink-0 bg-[var(--color-card)] p-5 rounded-2xl border border-white/5 flex flex-col justify-between hover:border-[var(--color-primary)]/50 hover:bg-[#0a0a0a] hover:scale-[1.03] hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(242,125,38,0.15)] hover:z-20 transition-all duration-500 cursor-pointer overflow-hidden">
    {/* Inner glow effect on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    
    <div className="relative z-10">
      <Quote className="w-5 h-5 text-white/20 mb-3 group-hover:text-[var(--color-primary)] transition-colors duration-500" fill="currentColor" />
      <p className="text-xs md:text-sm text-white/90 leading-relaxed mb-4 group-hover:text-white transition-colors duration-500">
        "{testimonial.quote}"
      </p>
    </div>
    
    <div className="relative z-10">
      <div className="h-px w-full bg-white/10 mb-3 group-hover:bg-gradient-to-r group-hover:from-[var(--color-primary)]/60 group-hover:to-transparent transition-all duration-500"></div>
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold text-xs shrink-0 group-hover:bg-[var(--color-primary)] group-hover:text-white group-hover:shadow-[0_0_15px_rgba(242,125,38,0.4)] group-hover:scale-110 transition-all duration-500">
          {testimonial.initials}
        </div>
        <div>
          <h4 className="font-bold text-white text-xs">{testimonial.name}</h4>
          <p className="text-[10px] text-[var(--color-muted)]">{testimonial.role}</p>
          <p className="text-[9px] text-[var(--color-muted)] mt-0.5">{testimonial.stats}</p>
        </div>
      </div>
    </div>
  </div>
);

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-12 md:py-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: customEase }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-sm font-bold tracking-widest uppercase text-[var(--color-primary)] mb-4">
            Referencias
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter">
            Testimonios de Clientes
          </h3>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative flex overflow-hidden w-full group/marquee py-4">
        {/* Gradient Masks for smooth fade on edges */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-40 bg-gradient-to-r from-[var(--color-background)] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 md:w-40 bg-gradient-to-l from-[var(--color-background)] to-transparent z-10 pointer-events-none"></div>

        <div className="flex gap-6 w-max py-4">
          {/* First Set */}
          <div className="flex flex-shrink-0 gap-6 animate-marquee">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={`set1-${index}`} testimonial={testimonial} />
            ))}
          </div>
          {/* Second Set (Duplicate for infinite scroll) */}
          <div className="flex flex-shrink-0 gap-6 animate-marquee" aria-hidden="true">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={`set2-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
