import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const customEase = [0.22, 1, 0.36, 1] as any;

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: customEase }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
      >
        <nav className={`pointer-events-auto rounded-full p-1.5 flex items-center gap-4 md:gap-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md' : 'bg-white'}`}>
          {/* Profile & Name */}
          <div className="flex items-center gap-3 pl-1 md:pl-2 group cursor-pointer">
            <div className="relative overflow-hidden rounded-full w-10 h-10">
              <img 
                src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&fit=crop&q=80&w=100&h=100" 
                alt="Jhon Cesar" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <span className="text-black font-bold text-base whitespace-nowrap">Jhon Cesar</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 text-[15px] font-medium text-gray-500">
            <a href="#portfolio" className="hover:text-black transition-colors duration-300">Portfolio</a>
            <a href="#process" className="hover:text-black transition-colors duration-300">Proceso</a>
            <a href="#testimonials" className="hover:text-black transition-colors duration-300">Testimonios</a>
            <a href="#contact" className="hover:text-black transition-colors duration-300">Contacto</a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 pr-1 md:pr-0">
            <button className="hidden sm:flex w-10 h-10 rounded-full bg-gray-100 items-center justify-center text-sm font-bold text-black hover:bg-gray-200 transition-colors duration-300">
              ES
            </button>
            <a 
              href="#contact"
              className="hidden md:flex px-6 py-2.5 bg-black text-white text-[15px] font-medium rounded-full hover:bg-[var(--color-primary)] hover:shadow-[0_0_15px_rgba(242,125,38,0.4)] transition-all duration-300 whitespace-nowrap"
            >
              Hablemos
            </a>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-black hover:bg-gray-200 transition-colors duration-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: customEase }}
            className="fixed top-24 left-4 right-4 z-40 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-6 md:hidden flex flex-col gap-4 border border-gray-100"
          >
            <a href="#portfolio" onClick={() => setIsOpen(false)} className="text-black font-bold text-lg py-2 border-b border-gray-100/50 hover:text-[var(--color-primary)] transition-colors">Portfolio</a>
            <a href="#process" onClick={() => setIsOpen(false)} className="text-black font-bold text-lg py-2 border-b border-gray-100/50 hover:text-[var(--color-primary)] transition-colors">Proceso</a>
            <a href="#testimonials" onClick={() => setIsOpen(false)} className="text-black font-bold text-lg py-2 border-b border-gray-100/50 hover:text-[var(--color-primary)] transition-colors">Testimonios</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="text-black font-bold text-lg py-2 border-b border-gray-100/50 hover:text-[var(--color-primary)] transition-colors">Contacto</a>
            <a 
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 w-full py-3 bg-black text-white text-center font-bold rounded-xl hover:bg-[var(--color-primary)] transition-colors duration-300"
            >
              Hablemos
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
