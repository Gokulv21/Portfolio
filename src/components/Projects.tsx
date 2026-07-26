import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink, ChevronDown, ChevronUp, Layers, HelpCircle, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMouseGlow } from '../hooks/useMouseGlow';

interface FlagshipProject {
  name: string;
  tagline: string;
  overview: string;
  architecture: string;
  tech: string;
  features: string;
  challenges: string;
  results: string;
}

interface ReusableProjectProps {
  proj: {
    name: string;
    tagline: string;
    desc: string;
    tech: string;
    imgs: string[];
    documentUrl: string;
  };
  idx: number;
}

function ProjectCard({ proj, idx }: ReusableProjectProps) {
  const { t } = useTranslation();
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  return (
    <motion.div
      className="glass-card rounded-[28px] overflow-hidden flex flex-col justify-between"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: idx * 0.15 }}
    >
      {/* Image Header with Carousel */}
      <div className="aspect-video w-full overflow-hidden bg-zinc-950 border-b border-zinc-900 relative group">
        <img
          src={proj.imgs[activeImgIndex]}
          alt={`${proj.name} Screenshot ${activeImgIndex + 1}`}
          className="w-full h-full object-contain transition-all duration-500"
        />

        {/* Carousel Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

        {/* Left/Right Buttons */}
        <button
          onClick={() => setActiveImgIndex((prev) => (prev === 0 ? proj.imgs.length - 1 : prev - 1))}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-brand-red text-white flex items-center justify-center transition-colors duration-200 cursor-pointer z-10"
          aria-label="Previous image"
        >
          &larr;
        </button>
        <button
          onClick={() => setActiveImgIndex((prev) => (prev === proj.imgs.length - 1 ? 0 : prev + 1))}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-brand-red text-white flex items-center justify-center transition-colors duration-200 cursor-pointer z-10"
          aria-label="Next image"
        >
          &rarr;
        </button>

        {/* Dots indicator */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
          {proj.imgs.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setActiveImgIndex(dotIdx)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeImgIndex === dotIdx ? 'bg-brand-red w-3' : 'bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${dotIdx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
        <div className="space-y-3">
          <div>
            <h4 className="font-display text-xl font-bold text-white">
              {proj.name}
            </h4>
            <p className="text-xs text-brand-red font-semibold">
              {proj.tagline}
            </p>
          </div>
          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
            {proj.desc}
          </p>
        </div>

        <div className="space-y-4">
          {/* Tech List */}
          <div className="flex flex-wrap gap-1.5">
            {proj.tech.split(', ').map((techItem, techIdx) => (
              <span
                key={techIdx}
                className="text-[9px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-500"
              >
                {techItem}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 pt-2">
            <a
              href={proj.documentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-brand-red hover:bg-brand-red-hover text-white transition-colors"
            >
              {t('projects.view_document')}
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const { t } = useTranslation();
  const [showDeepDive, setShowDeepDive] = useState(false);
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const glowRef = useMouseGlow<HTMLDivElement>();
  const screenshots = [
    '/images/prescripto/Screenshot 2026-07-26 220731.png',
    '/images/prescripto/Screenshot 2026-07-26 220905.png',
    '/images/prescripto/Screenshot 2026-07-26 221033.png'
  ];

  const worksphereScreenshots = [
    '/images/worksphere/Screenshot 2026-07-27 020256.png',
    '/images/worksphere/Screenshot 2026-07-27 020331.png',
    '/images/worksphere/Screenshot 2026-07-27 020342.png',
    '/images/worksphere/Screenshot 2026-07-27 020356.png',
    '/images/worksphere/Screenshot 2026-07-27 020407.png',
    '/images/worksphere/Screenshot 2026-07-27 020422.png',
    '/images/worksphere/Screenshot 2026-07-27 020433.png',
    '/images/worksphere/Screenshot 2026-07-27 020442.png',
    '/images/worksphere/Screenshot 2026-07-27 020454.png',
    '/images/worksphere/Screenshot 2026-07-27 020505.png'
  ];

  const staybyteScreenshots = [
    '/images/staybyte/Screenshot 2026-07-27 021658.png',
    '/images/staybyte/Screenshot 2026-07-27 021711.png',
    '/images/staybyte/Screenshot 2026-07-27 021728.png',
    '/images/staybyte/Screenshot 2026-07-27 021740.png',
    '/images/staybyte/Screenshot 2026-07-27 021758.png',
    '/images/staybyte/Screenshot 2026-07-27 021809.png',
    '/images/staybyte/Screenshot 2026-07-27 021818.png',
    '/images/staybyte/Screenshot 2026-07-27 021828.png',
    '/images/staybyte/Screenshot 2026-07-27 021838.png',
    '/images/staybyte/Screenshot 2026-07-27 021942.png',
    '/images/staybyte/Screenshot 2026-07-27 022005.png',
    '/images/staybyte/Screenshot 2026-07-27 022017.png',
    '/images/staybyte/Screenshot 2026-07-27 022039.png',
    '/images/staybyte/Screenshot 2026-07-27 022053.png',
    '/images/staybyte/Screenshot 2026-07-27 022111.png',
    '/images/staybyte/Screenshot 2026-07-27 022120.png'
  ];

  const flagship = t('projects.prescripto', { returnObjects: true }) as FlagshipProject;
  const hrms = t('projects.hrms', { returnObjects: true }) as { name: string; tagline: string; description: string };
  const staybite = t('projects.staybite', { returnObjects: true }) as { name: string; tagline: string; description: string };

  const reusableProjects = [
    {
      name: hrms.name,
      tagline: hrms.tagline,
      desc: hrms.description,
      tech: 'React, TypeScript, Tailwind, Chart.js, Spring Boot',
      imgs: worksphereScreenshots,
      documentUrl: 'https://drive.google.com/drive/folders/1kFbnkX8PTggxnTSlkOR9fSj8cWtSkoja?usp=drive_link',
    },
    {
      name: staybite.name,
      tagline: staybite.tagline,
      desc: staybite.description,
      tech: 'React Native, Spring Boot, Socket.io, MySQL',
      imgs: staybyteScreenshots,
      documentUrl: 'https://drive.google.com/drive/folders/1hyxVOgUYK5OhCpdKhBb2sq9UZ8qqMBq7?usp=drive_link',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-brand-glow opacity-10 blur-[150px] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center md:text-left space-y-2 mb-16">
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            {t('projects.title')}
          </h2>
          <p className="text-zinc-500 text-sm sm:text-base">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Flagship Project Showcase */}
        {flagship && (
          <div className="space-y-6 mb-16">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-red mb-2">
              🏆 {t('projects.flagship')}
            </div>

            <div
              ref={glowRef}
              className="glass-premium rounded-[32px] overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8"
            >
              {/* Flagship Left: Large Image Container with Carousel */}
              <div className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-900 group">
                <img
                  src={screenshots[activeImgIndex]}
                  alt={`${flagship.name} Screenshot ${activeImgIndex + 1}`}
                  className="w-full h-full object-contain transition-all duration-500"
                />
                
                {/* Carousel Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Left/Right Buttons */}
                <button
                  onClick={() => setActiveImgIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1))}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-brand-red text-white flex items-center justify-center transition-colors duration-200 cursor-pointer"
                  aria-label="Previous image"
                >
                  &larr;
                </button>
                <button
                  onClick={() => setActiveImgIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1))}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-brand-red text-white flex items-center justify-center transition-colors duration-200 cursor-pointer"
                  aria-label="Next image"
                >
                  &rarr;
                </button>

                {/* Dots indicator */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                  {screenshots.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setActiveImgIndex(dotIdx)}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        activeImgIndex === dotIdx ? 'bg-brand-red w-3' : 'bg-white/40 hover:bg-white/70'
                      }`}
                      aria-label={`Go to slide ${dotIdx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Flagship Right: Details */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                      {flagship.name}
                    </h3>
                    <p className="text-sm font-semibold text-brand-red">
                      {flagship.tagline}
                    </p>
                  </div>

                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                    {flagship.overview}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {flagship.tech.split(', ').map((techItem: string, idx: number) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-gray-400"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Deep Dive & Actions */}
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-4 items-center">
                    <button
                      onClick={() => setShowDeepDive(!showDeepDive)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white transition-colors"
                    >
                      {showDeepDive ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      {t('projects.technical_deep_dive')}
                    </button>

                    <div className="flex items-center gap-3">
                      <a
                        href="https://drive.google.com/drive/folders/1eBY21Bd34zisOC1vtRst534_Xiyoch80?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs font-bold bg-brand-red hover:bg-brand-red-hover text-white transition-colors"
                      >
                        {t('projects.view_document')}
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Deep Dive Content Drawer */}
            <AnimatePresence>
              {showDeepDive && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 sm:p-8 glass rounded-[28px] border border-brand-red/10 bg-zinc-950/50 mt-4">
                    {/* Architecture */}
                    <div className="space-y-3 p-4 rounded-2xl bg-zinc-900/30 border border-zinc-800/50">
                      <div className="flex items-center gap-2 text-brand-red font-semibold text-xs uppercase tracking-wider">
                        <Layers className="w-4 h-4" />
                        Architecture
                      </div>
                      <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                        {flagship.architecture}
                      </p>
                    </div>

                    {/* Challenges */}
                    <div className="space-y-3 p-4 rounded-2xl bg-zinc-900/30 border border-zinc-800/50">
                      <div className="flex items-center gap-2 text-brand-red font-semibold text-xs uppercase tracking-wider">
                        <HelpCircle className="w-4 h-4" />
                        Key Challenges
                      </div>
                      <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                        {flagship.challenges}
                      </p>
                    </div>

                    {/* Results */}
                    <div className="space-y-3 p-4 rounded-2xl bg-zinc-900/30 border border-zinc-800/50">
                      <div className="flex items-center gap-2 text-brand-red font-semibold text-xs uppercase tracking-wider">
                        <Award className="w-4 h-4" />
                        Quantifiable Results
                      </div>
                      <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                        {flagship.results}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* Other Projects Reusable Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reusableProjects.map((proj, idx) => (
            <ProjectCard key={idx} proj={proj} idx={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
export default Projects;
