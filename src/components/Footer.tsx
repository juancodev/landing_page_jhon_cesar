export function Footer() {
  return (
    <footer className="py-8 md:py-12 px-6 md:px-12 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 text-center md:text-left">
        <div className="text-xl font-bold tracking-tighter uppercase">
          Jhon<span className="text-[var(--color-primary)]">.Cesar</span>
        </div>
        <p className="text-[var(--color-muted)] text-sm">
          © {new Date().getFullYear()} Jhon Cesar. Todos los derechos reservados.
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-[var(--color-muted)] text-sm">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">YouTube</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
