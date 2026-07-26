import { useTranslation } from 'react-i18next';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

interface Role {
  period: string;
  company: string;
  role: string;
  points: string[];
}

export function Experience() {
  const { t } = useTranslation();

  // Safely retrieve roles array
  const roles = t('experience.roles', { returnObjects: true }) as Role[];

  return (
    <section id="experience" className="py-24 bg-black relative overflow-hidden">
      {/* Red accent light glow */}
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-brand-glow opacity-15 blur-[100px] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center md:text-left space-y-2 mb-16">
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            {t('experience.title')}
          </h2>
          <p className="text-zinc-500 text-sm sm:text-base">
            {t('experience.subtitle')}
          </p>
        </div>

        {/* Roles List */}
        <div className="space-y-8">
          {roles && roles.map((job, idx) => (
            <motion.div
              key={idx}
              className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-start"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              {/* Job icon wrapper */}
              <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-brand-red self-start">
                <Briefcase className="w-6 h-6" />
              </div>

              {/* Job Info Details */}
              <div className="flex-1 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                      {job.role}
                    </h3>
                    <p className="text-sm text-gray-400 font-medium">
                      {job.company}
                    </p>
                  </div>
                  <span className="font-mono text-xs font-semibold px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-brand-red w-fit">
                    {job.period}
                  </span>
                </div>

                <ul className="space-y-2.5 text-zinc-400 text-xs sm:text-sm list-disc pl-4 leading-relaxed">
                  {job.points.map((pt, pIdx) => (
                    <li key={pIdx}>{pt}</li>
                  ))}
                </ul>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
export default Experience;
