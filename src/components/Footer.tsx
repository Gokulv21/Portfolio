import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, MessageCircle, ArrowUp, Download, Code } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    // Placeholder for resume download
    alert('Resume download functionality will be implemented here');
  };

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Gokulv21',
      description: 'View my code and projects'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/gokul-v-022936215/',
      description: 'Connect professionally'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/919585052446',
      description: 'Chat directly'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:gokie210402@gmail.com',
      description: 'Send me an email'
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'gokie210402@gmail.com',
      href: 'mailto:gokie210402@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9585052446',
      href: 'tel:+919585052446'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      href: '#'
    },
  ];

  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient">Gokul</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Full-Stack Developer & Java Developer specializing in building scalable 
              backend solutions with modern frontend experiences.
            </p>
            <div className="flex space-x-3">
              {socialLinks.slice(0, 3).map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 glass rounded-lg text-gray-400 hover:text-amber-400 transition-all hover:scale-110"
                  title={social.description}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <info.icon className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    {info.href && info.href !== '#' ? (
                      <a
                        href={info.href}
                        className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-gray-400 text-sm">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <button
                onClick={handleDownloadResume}
                className="w-full btn-secondary flex items-center justify-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </button>
              <a
                href="#contact"
                className="w-full btn-primary inline-flex items-center justify-center space-x-2"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2024 Gokul. All rights reserved. Built with React & Tailwind CSS.
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 px-4 py-2 glass rounded-lg text-gray-400 hover:text-amber-400 transition-all hover:scale-105"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-sm">Back to Top</span>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-t from-amber-500/5 to-transparent rounded-full blur-3xl -translate-x-32 translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-t from-orange-600/5 to-transparent rounded-full blur-3xl translate-x-32 translate-y-32"></div>
    </footer>
  );
};

export default Footer;
