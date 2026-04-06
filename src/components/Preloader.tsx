import { useProgress } from '@react-three/drei';
import { useEffect, useState } from 'react';

export function Preloader() {
  const { progress } = useProgress();
  const [show, setShow] = useState(true);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    // Safety fallback: force hide after 3 seconds no matter what
    const fallbackTimer = setTimeout(() => {
      setOpacity(0);
      setTimeout(() => setShow(false), 500);
    }, 3000);
    
    return () => clearTimeout(fallbackTimer);
  }, []);

  useEffect(() => {
    if (progress >= 99) {
      const timer = setTimeout(() => {
        setOpacity(0);
        setTimeout(() => setShow(false), 500);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [show]);

  if (!show) return null;

  return (
    <div
      style={{ opacity, transition: 'opacity 0.5s ease' }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] text-white"
    >
      <div className="text-2xl font-black tracking-tighter mb-8 animate-pulse">
        JHON CESAR
      </div>

      <div className="w-64 md:w-80 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
        <div 
          className="absolute top-0 left-0 h-full bg-white transition-all duration-200 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mt-4 flex justify-between w-64 md:w-80 text-xs font-medium tracking-widest uppercase text-gray-500">
        <span>Cargando recursos</span>
        <span className="font-mono">{Math.round(progress)}%</span>
      </div>
    </div>
  );
}
