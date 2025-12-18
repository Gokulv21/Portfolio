import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Phone, MapPin, Briefcase, User } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const nextSection = document.querySelector('#about');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleHireMeClick = () => {
    const subject = encodeURIComponent('Full-Time Employment Opportunity - Gokul Portfolio');
    const body = encodeURIComponent(`Hi Gokul,

I came across your portfolio and I'm impressed with your skills and experience. I would like to discuss a full-time opportunity at our company.

Looking forward to connecting with you.

Best regards`);
    window.open(`mailto:gokie210402@gmail.com?subject=${subject}&body=${body}`);
  };

  const handleFreelanceClick = () => {
    const subject = encodeURIComponent('Freelance Project Inquiry - Gokul Portfolio');
    const body = encodeURIComponent(`Hi Gokul,

I found your portfolio and I'm interested in discussing a freelance project with you.

Project details:
[Please describe your project here]

Looking forward to hearing from you.

Best regards`);
    window.open(`mailto:gokie210402@gmail.com?subject=${subject}&body=${body}`);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-amber-600/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '6s' }}></div>
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Photo */}
          <div className="mb-8 animate-fade-in relative">
            <div className="relative inline-block">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-amber-500/20 shadow-2xl animate-float group">
                <img 
                  src="/gokul-photo.jpeg" 
                  alt="Gokul" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              {/* Animated ring effect */}
              <div className="absolute inset-0 rounded-full border-2 border-amber-500/30 animate-pulse"></div>
              <div className="absolute inset-0 rounded-full border border-amber-400/20 scale-110 animate-ping"></div>
            </div>
          </div>

          {/* Greeting */}
          <div className="mb-6 animate-fade-in">
            <span className="text-amber-400 font-semibold text-lg">Hello, I'm</span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up">
            <span className="text-white">Gokul</span>
          </h1>

          {/* Title */}
          <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-300 mb-4">
              Full-Stack Developer & Java Developer
            </h2>
            <p className="text-lg md:text-xl text-gray-400 italic">
              "Building scalable backend solutions with modern frontend experiences"
            </p>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center space-x-2 mb-8 text-gray-400 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <MapPin className="w-4 h-4" />
            <span>India</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <button
              onClick={handleHireMeClick}
              className="btn-primary flex items-center justify-center space-x-2"
            >
              <Briefcase className="w-5 h-5" />
              <span>Hire Me Full-Time</span>
            </button>
            <button
              onClick={handleFreelanceClick}
              className="btn-secondary flex items-center justify-center space-x-2"
            >
              <User className="w-5 h-5" />
              <span>Freelance Projects</span>
            </button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 text-gray-300 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <a
              href="mailto:gokie210402@gmail.com"
              className="flex items-center space-x-2 hover:text-amber-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>gokie210402@gmail.com</span>
            </a>
            <a
              href="tel:+919585052446"
              className="flex items-center space-x-2 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+91 9585052446</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6 mb-16 animate-slide-up" style={{ animationDelay: '1s' }}>
            <a
              href="https://github.com/Gokulv21"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-3 rounded-full text-gray-400 hover:text-amber-400 hover:scale-110 transition-all duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/gokul-v-022936215/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-3 rounded-full text-gray-400 hover:text-amber-400 hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://wa.me/919585052446"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-3 rounded-full text-gray-400 hover:text-amber-400 hover:scale-110 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToNext}
            className="text-gray-400 hover:text-amber-400 transition-colors"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
