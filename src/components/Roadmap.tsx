import { useTranslation } from 'react-i18next';
import { CheckCircle2, CircleDot, Hourglass } from 'lucide-react';
import { motion } from 'framer-motion';

interface RoadmapItem {
  name: string;
  status: 'completed' | 'in_progress' | 'next_up';
  desc: string;
}

export function Roadmap() {
  const { t } = useTranslation();

  // Safely fetch items array
  const items = t('roadmap.items', { returnObjects: true }) as RoadmapItem[];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="w-5 h-5 text-emerald-400" />;
      case 'in_progress':
        return <CircleDot className="w-5 h-5 text-amber-400 animate-pulse" />;
      case 'next_up':
      default:
        return <Hourglass className="w-5 h-5 text-zinc-500" />;
    }
  };

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400';
      case 'in_progress':
        return 'bg-amber-500/10 border-amber-500/20 text-amber-400';
      case 'next_up':
      default:
        return 'bg-zinc-900 border-zinc-800 text-zinc-400';
    }
  };

  return (
    <section id="roadmap" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-brand-glow opacity-10 blur-[150px] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center md:text-left space-y-2 mb-16">
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            {t('roadmap.title')}
          </h2>
          <p className="text-zinc-500 text-sm sm:text-base">
            {t('roadmap.subtitle')}
          </p>
        </div>

        {/* Roadmap Items List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items && items.map((item, idx) => (
            <motion.div
              key={idx}
              className="glass-card rounded-2xl p-6 flex items-start gap-4"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              {/* Icon Status */}
              <div className="mt-1">{getStatusIcon(item.status)}</div>

              {/* Text content */}
              <div className="space-y-2 flex-1">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <h3 className="font-display text-base sm:text-lg font-bold text-white">
                    {item.name}
                  </h3>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${getStatusBadgeClass(item.status)}`}>
                    {t(`roadmap.status.${item.status}`)}
                  </span>
                </div>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
export default Roadmap;
