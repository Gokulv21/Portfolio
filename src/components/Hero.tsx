import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, FileText, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  const { t } = useTranslation();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [typingIndex, setTypingIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Retrieve typing array safely
  const typingTexts = t('hero.typing', { returnObjects: true }) as string[];

  // Animated Typing Effect
  useEffect(() => {
    if (!typingTexts || typingTexts.length === 0) return;
    let timer: NodeJS.Timeout;

    const currentFullText = typingTexts[typingIndex];
    const typingSpeed = isDeleting ? 30 : 80;

    if (!isDeleting && displayText === currentFullText) {
      // Pause at full text
      timer = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setTypingIndex((prev) => (prev + 1) % typingTexts.length);
    } else {
      timer = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentFullText.substring(0, displayText.length - 1)
            : currentFullText.substring(0, displayText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, typingIndex, typingTexts]);

  // Particles Canvas Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    const handleResize = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    const createParticles = () => {
      particles = [];
      const count = Math.min(Math.floor(canvas.width / 15), 60);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          speedX: Math.random() * 0.4 - 0.2,
          speedY: Math.random() * -0.5 - 0.1, // Float upwards
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
    };

    createParticles();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 0, 51, ${p.opacity})`;
        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;

        // Reset if particles go offscreen
        if (p.y < 0) {
          p.y = canvas.height;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < 0 || p.x > canvas.width) {
          p.x = Math.random() * canvas.width;
        }
      });
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-24 md:pt-0 bg-black">
      {/* Background Particles Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-40 z-0" />

      {/* Cinematic Red Ambient Glow */}
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-brand-darkred to-transparent opacity-40 blur-[120px] pointer-events-none z-0" />
      <div className="absolute left-1/4 top-1/4 w-[300px] h-[300px] rounded-full bg-brand-glow opacity-25 blur-[100px] pointer-events-none z-0" />

      {/* Main Grid Wrapper */}
      <div className="w-full max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center z-10">
        
        {/* Left Side: Portrait Photo with gradient masks (40% width on desktop) */}
        <div className="col-span-1 md:col-span-5 flex justify-center order-2 md:order-1 relative">
          {/* Subtle floating outer circle */}
          <div className="absolute inset-0 max-w-[320px] aspect-square rounded-full border border-brand-red/10 animate-pulse-slow pointer-events-none" />
          
          <motion.div
            className="relative w-full max-w-[340px] aspect-[4/5] overflow-hidden mask-portrait animate-float"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            {/* Blended gradient overlay at the base */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 pointer-events-none" />
            <img
              src="/images/gokul.png"
              alt={`${t('name_first')} ${t('name_last')}`}
              className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
        </div>

        {/* Right Side: Professional Intro & Details (60% width on desktop) */}
        <div className="col-span-1 md:col-span-7 flex flex-col justify-center order-1 md:order-2 space-y-6 text-left">
          
          {/* Based In Indicator */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs text-gray-400 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-ping" />
            {t('hero.location')}
          </div>

          <div className="space-y-2">
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-white uppercase">
              {t('name_first')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-zinc-500">{t('name_last')}</span>
            </h1>
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-brand-red flex items-center gap-2">
              {t('hero.role_engineer')}
              <span className="text-gray-600">|</span>
              <span className="text-gray-400 font-normal">{t('hero.role_stack')}</span>
            </h2>
          </div>

          {/* Tagline */}
          <p className="text-gray-400 text-sm sm:text-base max-w-lg leading-relaxed">
            {t('hero.tagline')}
          </p>

          {/* Typing Effect Container */}
          <div className="h-8 flex items-center">
            <p className="font-mono text-xs sm:text-sm text-zinc-500">
              <span className="text-brand-red font-semibold">&gt; </span>
              {displayText}
              <span className="w-1.5 h-4 bg-brand-red ml-1 inline-block animate-pulse" />
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-white text-black hover:bg-gray-200 transition-colors"
            >
              {t('hero.btn_projects')}
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white transition-colors"
            >
              {t('hero.btn_contact')}
              <Send className="w-4 h-4" />
            </a>

            <a
              href="/Gokul_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-transparent hover:bg-zinc-900 text-gray-400 hover:text-white transition-colors"
            >
              <FileText className="w-4 h-4" />
              {t('hero.btn_resume')}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
export default Hero;
