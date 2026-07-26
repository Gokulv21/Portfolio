import { useTranslation } from 'react-i18next';
import { Award, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface Certification {
  name: string;
  issuer: string;
  date: string;
  url?: string;
}

export function Certifications() {
  const { t } = useTranslation();

  // Safely fetch certifications list
  const certs = t('certifications.items', { returnObjects: true }) as Certification[];

  return (
    <section id="certifications" className="py-24 bg-black relative overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center md:text-left space-y-2 mb-16">
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            {t('certifications.title')}
          </h2>
          <p className="text-zinc-500 text-sm sm:text-base">
            {t('certifications.subtitle')}
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certs && certs.map((cert, idx) => (
            <motion.div
              key={idx}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between items-start h-full space-y-6"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="space-y-4 w-full">
                {/* Certification Icon */}
                <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-brand-red w-fit">
                  <Award className="w-5 h-5" />
                </div>

                <div className="space-y-1">
                  <h3 className="font-display text-base sm:text-lg font-bold text-white leading-snug">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-zinc-500 font-medium">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              {/* Footer row */}
              <div className="w-full flex items-center justify-between pt-4 border-t border-zinc-900">
                <span className="font-mono text-[10px] text-brand-red font-semibold">
                  {cert.date}
                </span>

                <a
                  href={cert.url || "/Gokul_Resume.pdf"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[10px] text-zinc-400 hover:text-white font-bold transition-colors"
                >
                  {t('certifications.verify')}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
export default Certifications;
