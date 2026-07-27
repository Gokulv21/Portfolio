import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePortfolioMode } from '../hooks/usePortfolioMode';

export function Navbar() {
  const { t, i18n } = useTranslation();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [showLangHint, setShowLangHint] = useState(true);
  const { mode, setMode } = usePortfolioMode();

  // Scroll logic to hide/show navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const shouldBeVisible = prevScrollPos > currentScrollPos || currentScrollPos < 50;

      setVisible(shouldBeVisible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
    setLangMenuOpen(false);
  };

  const navItems = [
    { key: 'about', href: '#about' },
    { key: 'experience', href: '#experience' },
    { key: 'projects', href: '#projects' },
    { key: 'tech', href: '#tech' },
    { key: 'roadmap', href: '#roadmap' },
    { key: 'certifications', href: '#certifications' },
    { key: 'contact', href: '#contact' },
  ];

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'ja', label: '日本語' },
    { code: 'ta', label: 'தமிழ்' },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-40 px-6 py-4 flex justify-center pointer-events-none"
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className="w-full max-w-6xl glass rounded-full px-6 py-3 flex items-center justify-between pointer-events-auto border-none shadow-2xl">
        {/* Brand Logo */}
        <a href="#" className="font-display font-extrabold text-sm sm:text-lg tracking-tight text-white flex items-center gap-1.5 flex-shrink-0">
          {t('name_first')} <span className="text-brand-red">{t('name_last')}</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-xs font-medium text-gray-400 hover:text-white transition-colors duration-200"
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}
        </div>

        {/* Language switcher, Mode Switcher & CTA */}
        <div className="flex items-center gap-3 sm:gap-4 relative">

          {/* Mode Switcher */}
          <div className="relative flex items-center bg-zinc-950/85 border border-zinc-800 rounded-full p-0.5 w-[140px] sm:w-[160px] h-7 sm:h-8 text-[9px] sm:text-[10px] font-bold select-none cursor-pointer">
            <button
              onClick={() => setMode('job')}
              className={`flex-1 text-center py-1 rounded-full z-10 transition-colors duration-200 ${mode === 'job' ? 'text-white' : 'text-zinc-500 hover:text-zinc-400'
                }`}
            >
              {t('nav.mode_job') || 'Job'}
            </button>
            <button
              onClick={() => setMode('freelance')}
              className={`flex-1 text-center py-1 rounded-full z-10 transition-colors duration-200 ${mode === 'freelance' ? 'text-white' : 'text-zinc-500 hover:text-zinc-400'
                }`}
            >
              {t('nav.mode_freelance') || 'Freelance'}
            </button>
            {/* Sliding Highlight */}
            <motion.div
              layoutId="navModeHighlight"
              className="absolute top-0.5 bottom-0.5 left-0.5 w-[calc(50%-2px)] rounded-full bg-brand-red"
              animate={{
                x: mode === 'freelance' ? '100%' : '0%',
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          </div>

          <div className="relative">
            <button
              onClick={() => {
                setLangMenuOpen(!langMenuOpen);
                setShowLangHint(false);
              }}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-[10px] font-semibold bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-gray-300 transition-colors"
            >
              <Globe className="w-3 h-3" />
              <span className="uppercase">{i18n.language.substring(0, 2)}</span>
            </button>

            {/* Language hint popup */}
            {showLangHint && !langMenuOpen && (
              <div className="absolute top-10 right-0 mt-1.5 whitespace-nowrap bg-brand-red text-[9px] font-bold text-white px-2.5 py-1 rounded-md shadow-lg pointer-events-none animate-bounce z-50">
                {t('nav.lang_hint')}
                <div className="absolute -top-1 right-5 w-2 h-2 bg-brand-red rotate-45" />
              </div>
            )}

            {/* Language Switcher Dropdown */}
            <AnimatePresence>
              {langMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-32 glass rounded-2xl overflow-hidden border border-zinc-800 shadow-xl"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`w-full text-left px-4 py-2.5 text-xs transition-colors duration-150 ${i18n.language === lang.code
                          ? 'bg-brand-red/20 text-white font-bold'
                          : 'text-gray-400 hover:bg-zinc-900 hover:text-white'
                        }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href="#contact"
            className="hidden sm:inline-flex px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold bg-brand-red hover:bg-brand-red-hover text-white transition-colors"
          >
            {t('nav.contact')}
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-gray-300 hover:bg-zinc-800"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-20 left-6 right-6 glass rounded-3xl p-6 border border-zinc-800 shadow-2xl flex flex-col gap-4 pointer-events-auto lg:hidden overflow-hidden"
          >
            {/* Mobile Mode Switcher */}
            <div className="relative flex items-center bg-zinc-950/80 border border-zinc-800 rounded-full p-0.5 w-full h-10 text-xs font-bold select-none cursor-pointer mb-2">
              <button
                onClick={() => setMode('job')}
                className={`flex-1 text-center py-2 rounded-full z-10 transition-colors duration-200 ${mode === 'job' ? 'text-white' : 'text-zinc-500 hover:text-zinc-400'
                  }`}
              >
                💼 {t('nav.mode_job') || 'Job'}
              </button>
              <button
                onClick={() => setMode('freelance')}
                className={`flex-1 text-center py-2 rounded-full z-10 transition-colors duration-200 ${mode === 'freelance' ? 'text-white' : 'text-zinc-500 hover:text-zinc-400'
                  }`}
              >
                🚀 {t('nav.mode_freelance') || 'Freelance'}
              </button>
              {/* Sliding Highlight */}
              <motion.div
                layoutId="navModeHighlightMobile"
                className="absolute top-0.5 bottom-0.5 left-0.5 w-[calc(50%-2px)] rounded-full bg-brand-red"
                animate={{
                  x: mode === 'freelance' ? '100%' : '0%',
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            </div>

            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-gray-400 hover:text-white py-2 border-b border-zinc-900 last:border-0"
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
export default Navbar;
