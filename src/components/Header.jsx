import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, Download } from 'lucide-react';
import { cn } from '../lib/utils.js';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/Gokul_Resume.pdf`;
    link.download = 'Gokul_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'glass-dark shadow-lg backdrop-blur-xl'
          : 'bg-transparent'
      )}
    >
      <nav className="container-custom px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-lg overflow-hidden border-2 border-amber-500/30">
            <img
              src={`${process.env.PUBLIC_URL}/gokul-photo.jpeg`}
              alt="Gokul"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-xl font-bold text-gradient">Gokul</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="text-gray-300 hover:text-amber-400 transition-colors duration-200 font-medium"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA and Social */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={handleDownloadResume}
            className="btn-secondary flex items-center space-x-2"
          >
            <Download className="w-4 h-4" />
            <span>Resume</span>
          </button>
          
          <div className="flex items-center space-x-3">
            <a
              href="https://github.com/Gokulv21"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-amber-400 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/gokul-v-022936215/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-amber-400 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:gokie210402@gmail.com"
              className="text-gray-400 hover:text-amber-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-300 hover:text-amber-400 transition-colors"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-dark border-t border-white/10">
          <div className="container-custom section-padding py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-300 hover:text-amber-400 transition-colors duration-200 font-medium text-left py-2"
                >
                  {item.label}
                </button>
              ))}
              
              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={handleDownloadResume}
                  className="btn-secondary w-full flex items-center justify-center space-x-2 mb-4"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </button>
                
                <div className="flex items-center justify-center space-x-4">
                  <a
                    href="https://github.com/Gokulv21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/gokul-v-022936215/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:gokie210402@gmail.com"
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  <a
                    href="tel:+919585052446"
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
