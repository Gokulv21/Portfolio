import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export function TechStack() {
  const { t } = useTranslation();

  const categories = [
    {
      key: 'frontend',
      color: 'from-blue-500/20 to-indigo-500/5',
      borderColor: 'border-blue-500/20',
      skills: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'React Native', 'GSAP', 'HTML5/CSS3', 'JavaScript'],
    },
    {
      key: 'backend',
      color: 'from-emerald-500/20 to-teal-500/5',
      borderColor: 'border-emerald-500/20',
      skills: ['Java', 'Spring Boot', 'Core / Advanced Java', 'Node.js', 'SQL', 'PostgreSQL', 'MySQL', 'MongoDB', 'REST APIs'],
    },
    {
      key: 'devops',
      color: 'from-purple-500/20 to-pink-500/5',
      borderColor: 'border-purple-500/20',
      skills: ['AWS (S3, Lambda, EC2)', 'Docker', 'Vercel / Netlify', 'Git / GitHub Actions', 'CI/CD Pipelines'],
    },
  ];

  return (
    <section id="tech" className="py-24 bg-black relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-brand-glow opacity-10 blur-[150px] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center md:text-left space-y-2 mb-16">
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            {t('tech.title')}
          </h2>
          <p className="text-zinc-500 text-sm sm:text-base">
            {t('tech.subtitle')}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.key}
              className={`glass rounded-3xl p-6 sm:p-8 border ${cat.borderColor} bg-gradient-to-br ${cat.color} relative group overflow-hidden`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              {/* Card top flare */}
              <div className="absolute -top-12 -left-12 w-24 h-24 rounded-full bg-white/5 blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />

              <h3 className="font-display text-lg sm:text-xl font-extrabold text-white mb-6">
                {t(`tech.${cat.key}`)}
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-black/60 border border-zinc-800 text-gray-300 hover:border-brand-red hover:text-white transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
export default TechStack;
