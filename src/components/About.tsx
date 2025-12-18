import React from 'react';
import { GraduationCap, Mail, Phone, MapPin, User, Code, Briefcase } from 'lucide-react';

const About = () => {
  const personalInfo = [
    { icon: User, label: 'Name', value: 'Gokul' },
    { icon: GraduationCap, label: 'Education', value: 'B.Tech in Computer Science and Business Systems (2024)' },
    { icon: MapPin, label: 'Location', value: 'India' },
    { icon: Mail, label: 'Email', value: 'gokie210402@gmail.com', href: 'mailto:gokie210402@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 9585052446', href: 'tel:+919585052446' },
    { icon: Code, label: 'Title', value: 'Full-Stack Developer & Java Developer' },
  ];

  const bio = {
    title: 'About Me',
    subtitle: 'Passionate Full-Stack Developer',
    description: `I am a passionate Full-Stack Developer with a strong foundation in Java, Spring Boot, and modern web technologies. With a B.Tech in Computer Science and Business Systems, I specialize in building scalable backend solutions combined with seamless frontend experiences.

My expertise spans across the full development stack - from designing robust database architectures to creating intuitive user interfaces. I have hands-on experience in developing real-world applications including travel booking platforms, hotel management systems, and mobile applications for healthcare and education sectors.

I am particularly skilled in Java ecosystem, React.js, and modern development practices. My approach to development focuses on clean code, optimal performance, and user-centric design. I thrive on solving complex problems and turning innovative ideas into functional, production-ready applications.

Currently seeking opportunities to apply my skills in challenging projects and contribute to building innovative solutions that make a real impact.`
  };

  return (
    <section id="about" className="section-padding bg-slate-950">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get to know more about my background, skills, and professional journey
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Personal Info & Image */}
          <div className="space-y-8">
            {/* Professional Image Placeholder */}
            <div className="relative group">
              <div className="glass rounded-2xl p-1">
                <div className="aspect-square bg-gradient-to-br from-amber-500/20 to-orange-600/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                      <User className="w-16 h-16 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Gokul</h3>
                    <p className="text-gray-300">Full-Stack Developer</p>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 glass p-3 rounded-xl card-hover">
                <Code className="w-6 h-6 text-amber-400" />
              </div>
              <div className="absolute -bottom-4 -left-4 glass p-3 rounded-xl card-hover">
                <Briefcase className="w-6 h-6 text-amber-400" />
              </div>
            </div>

            {/* Personal Information Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {personalInfo.map((info, index) => (
                <div
                  key={index}
                  className="glass rounded-xl p-4 card-hover group"
                >
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-amber-500/10 rounded-lg group-hover:bg-amber-500/20 transition-colors">
                      <info.icon className="w-5 h-5 text-amber-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-400 text-sm mb-1">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-white hover:text-amber-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white">{info.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Bio */}
          <div className="space-y-8">
            {/* Bio Card */}
            <div className="glass rounded-2xl p-8 h-full">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {bio.subtitle}
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full"></div>
              </div>
              
              <div className="prose prose-invert max-w-none">
                {bio.description.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-300 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Key Highlights */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="text-lg font-semibold text-white mb-4">Key Highlights</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">B.Tech CSBS (2024)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">Full-Stack Development</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">Java & Spring Boot</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">React.js & Modern Web</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <a
                  href="mailto:gokie210402@gmail.com"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Get In Touch</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
