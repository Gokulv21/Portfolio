import { useTranslation } from 'react-i18next';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github className="w-4 h-4" />, href: 'https://github.com/Gokulv21', label: 'GitHub' },
    { icon: <Linkedin className="w-4 h-4" />, href: 'https://www.linkedin.com/in/gokul-v-022936215/', label: 'LinkedIn' },
    { icon: <Mail className="w-4 h-4" />, href: 'mailto:gokie210402@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-black py-12 border-t border-zinc-900">
      <div className="w-full max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Section */}
        <div className="text-center md:text-left space-y-2">
          <p className="font-display font-bold text-base tracking-wider text-white">
            {t('name_first')} <span className="text-brand-red">{t('name_last')}</span>
          </p>
          <p className="text-[10px] sm:text-xs text-zinc-500">
            &copy; {currentYear} {t('name_first')} {t('name_last')}. {t('footer.rights')}
          </p>
        </div>

        {/* Right Section: Social handles */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex items-center gap-3">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="p-2.5 rounded-full bg-zinc-950 border border-zinc-800 text-gray-500 hover:text-white hover:border-brand-red transition-all duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <p className="text-[9px] text-zinc-600 font-mono">
            {t('footer.design_by')}
          </p>
        </div>

      </div>
    </footer>
  );
}
export default Footer;
