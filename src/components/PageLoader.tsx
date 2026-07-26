import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center space-y-4"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {/* Main pulsing brand logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="font-display font-extrabold text-3xl tracking-tight text-white flex items-center gap-1"
          >
            GOKUL<span className="text-brand-red">.V</span>
          </motion.div>

          {/* Glowing bottom progress line */}
          <div className="w-32 h-[2px] bg-zinc-900 rounded-full overflow-hidden relative">
            <motion.div
              className="absolute left-0 top-0 h-full bg-brand-red"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.4, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
export default PageLoader;
