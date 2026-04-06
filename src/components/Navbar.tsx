import { motion } from "motion/react";

export function Navbar() {
  return (
    <motion.div 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
    >
      <nav className="pointer-events-auto bg-white rounded-full p-1.5 flex items-center gap-4 md:gap-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        {/* Profile & Name */}
        <div className="flex items-center gap-3 pl-1 md:pl-2">
          <img 
            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&fit=crop&q=80&w=100&h=100" 
            alt="Jhon Cesar" 
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-black font-bold text-base whitespace-nowrap">Jhon Cesar</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6 text-[15px] font-medium text-gray-500">
          <a href="#portfolio" className="hover:text-black transition-colors">Portfolio</a>
          <a href="#testimonios" className="hover:text-black transition-colors">Testimonios</a>
          <a href="#process" className="hover:text-black transition-colors">Proceso</a>
          <a href="#faq" className="hover:text-black transition-colors">FAQ</a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 pr-1 md:pr-0">
          <button className="hidden sm:flex w-10 h-10 rounded-full bg-gray-100 items-center justify-center text-sm font-bold text-black hover:bg-gray-200 transition-colors">
            ES
          </button>
          <a 
            href="#contact"
            className="px-6 py-2.5 bg-black text-white text-[15px] font-medium rounded-full hover:bg-gray-800 transition-colors whitespace-nowrap"
          >
            Contacto
          </a>
        </div>
      </nav>
    </motion.div>
  );
}
