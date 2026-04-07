import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { MicrophoneScene } from "./MicrophoneScene";

const customEase = [0.22, 1, 0.36, 1] as any;

export function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-32 px-6 md:px-12 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: customEase }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-sm font-bold tracking-widest uppercase text-[var(--color-primary)] mb-4">
            Trabajemos Juntos
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter">
            ¿Listo para llevar tus videos <br className="hidden sm:block" /> al siguiente nivel?
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: customEase }}
            className="space-y-12"
          >
            <div>
              <h4 className="text-2xl font-bold mb-6">Ponte en contacto</h4>
              <p className="text-[var(--color-muted)] text-lg mb-8">
                Si quieres que trabajemos juntos, envíame un mensaje y me pondré en contacto contigo lo antes posible.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-[var(--color-muted)] hover:text-white transition-colors group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-card)] flex items-center justify-center group-hover:bg-[var(--color-primary)]/10 transition-colors duration-300">
                    <Mail className="w-5 h-5 text-[var(--color-primary)] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="text-lg">hola@jhon-cesar.com</span>
                </div>
                <div className="flex items-center gap-4 text-[var(--color-muted)] hover:text-white transition-colors group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-card)] flex items-center justify-center group-hover:bg-[var(--color-primary)]/10 transition-colors duration-300">
                    <Phone className="w-5 h-5 text-[var(--color-primary)] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="text-lg">+34 600 000 000</span>
                </div>
                <div className="flex items-center gap-4 text-[var(--color-muted)] hover:text-white transition-colors group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-card)] flex items-center justify-center group-hover:bg-[var(--color-primary)]/10 transition-colors duration-300">
                    <MapPin className="w-5 h-5 text-[var(--color-primary)] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="text-lg">Madrid, España (Remoto)</span>
                </div>
              </div>
            </div>

            {/* Microphone 3D Element - Fixed to this section */}
            <div className="w-full h-[300px] lg:h-[400px] mt-8 lg:mt-12 relative pointer-events-none">
              <div className="absolute inset-0 lg:-left-12">
                <MicrophoneScene />
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: customEase }}
            className="relative z-20 pointer-events-auto bg-[var(--color-card)] p-8 md:p-12 rounded-3xl border border-white/5 hover:border-white/10 transition-colors duration-500"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-6">
              <div className="group">
                <label htmlFor="name" className="block text-sm font-medium text-[var(--color-muted)] mb-2 group-focus-within:text-[var(--color-primary)] transition-colors">Nombre Completo</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] focus:bg-black/80 transition-all duration-300"
                  placeholder="Tu nombre"
                />
              </div>
              <div className="group">
                <label htmlFor="email" className="block text-sm font-medium text-[var(--color-muted)] mb-2 group-focus-within:text-[var(--color-primary)] transition-colors">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] focus:bg-black/80 transition-all duration-300"
                  placeholder="tu@email.com"
                />
              </div>
              <div className="group">
                <label htmlFor="message" className="block text-sm font-medium text-[var(--color-muted)] mb-2 group-focus-within:text-[var(--color-primary)] transition-colors">Mensaje</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] focus:bg-black/80 transition-all duration-300 resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[var(--color-primary)] text-white font-bold py-4 rounded-xl hover:bg-orange-600 hover:shadow-[0_0_20px_rgba(242,125,38,0.4)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Enviar Mensaje
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
