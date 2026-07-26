import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useMouseGlow } from '../hooks/useMouseGlow';

interface Milestone {
  year: string;
  title: string;
  description: string;
}

export function About() {
  const { t } = useTranslation();
  const containerRef = useMouseGlow<HTMLDivElement>();

  // Safely fetch milestones array
  const milestones = t('about.milestones', { returnObjects: true }) as Milestone[];

  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-brand-glow opacity-10 blur-[150px] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto px-6 relative" ref={containerRef}>
        
        {/* Section Title */}
        <div className="text-center md:text-left space-y-2 mb-16">
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            {t('about.title')}
          </h2>
          <p className="text-zinc-500 text-sm sm:text-base">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-zinc-800 ml-4 md:ml-32 space-y-12">
          {milestones && milestones.map((item, idx) => (
            <motion.div
              key={idx}
              className="relative pl-8 md:pl-12 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              {/* Timeline Node Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 border-brand-red bg-black group-hover:bg-brand-red group-hover:scale-125 transition-all duration-300" />

              {/* Grid content */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8">
                
                {/* Year tag */}
                <div className="md:col-span-3">
                  <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-brand-red uppercase">
                    {item.year}
                  </span>
                </div>

                {/* Milestone Details */}
                <div className="md:col-span-9 space-y-2">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-glow-white transition-all">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
                    {item.description}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
export default About;
