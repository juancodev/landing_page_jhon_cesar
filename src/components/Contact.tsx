import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { MicrophoneScene } from "./MicrophoneScene";

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-bold tracking-widest uppercase text-[var(--color-primary)] mb-4">
            Trabajemos Juntos
          </h2>
          <h3 className="text-4xl md:text-6xl font-black tracking-tighter">
            ¿Listo para llevar tus videos <br /> al siguiente nivel?
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div>
              <h4 className="text-2xl font-bold mb-6">Ponte en contacto</h4>
              <p className="text-[var(--color-muted)] text-lg mb-8">
                Si quieres que trabajemos juntos, envíame un mensaje y me pondré en contacto contigo lo antes posible.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-[var(--color-muted)] hover:text-white transition-colors">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-card)] flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <span className="text-lg">hola@jhon-cesar.com</span>
                </div>
                <div className="flex items-center gap-4 text-[var(--color-muted)] hover:text-white transition-colors">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-card)] flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <span className="text-lg">+34 600 000 000</span>
                </div>
                <div className="flex items-center gap-4 text-[var(--color-muted)] hover:text-white transition-colors">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-card)] flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <span className="text-lg">Madrid, España (Remoto)</span>
                </div>
              </div>
            </div>

            {/* Microphone 3D Element - Fixed to this section */}
            <div className="w-full h-[300px] lg:h-[400px] mt-8 lg:mt-12 relative">
              <div className="absolute inset-0 lg:-left-12">
                <MicrophoneScene />
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="bg-[var(--color-card)] p-8 md:p-12 rounded-3xl border border-white/5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--color-muted)] mb-2">Nombre Completo</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--color-muted)] mb-2">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[var(--color-muted)] mb-2">Mensaje</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] transition-colors resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[var(--color-primary)] text-white font-bold py-4 rounded-xl hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
              >
                Enviar Mensaje
                <Send className="w-5 h-5" />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
