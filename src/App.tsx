import React, { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import About from './components/About.tsx';
import { useScrollAnimation } from './hooks/useScrollAnimation.ts';

const App = () => {
  const skillsRef = useScrollAnimation();
  const projectsRef = useScrollAnimation();
  const [showBall, setShowBall] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // hide when user scrolls down more than 80px
      setShowBall(window.scrollY < 400);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />

      {/* Home Section */}
      <section id="home" className="section-padding bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left side - Photo */}
            <div className="flex justify-center lg:justify-start relative">
              <div className={`cricket-ball-container ${showBall ? '' : 'cricket-ball-hidden'}`}>
                <img
                  src={`${process.env.PUBLIC_URL}/Vg pic.png`}
                  alt="Gokul"
                  className="cricket-ball-image"
                />
              </div>
            </div>

            {/* Right side - Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-gradient">Hi, I'm Gokul</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Full-Stack Developer & Java Developer
              </p>
              <p className="text-lg text-gray-400 mb-12">
                Building scalable backend solutions with modern frontend experiences
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <a href="#contact" className="btn-primary inline-flex items-center justify-center">
                  Get In Touch
                </a>
                <a href="#projects" className="btn-secondary inline-flex items-center justify-center">
                  View My Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />

      {/* Skills Section */}
      <section id="skills" className="section-padding bg-slate-950">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Skills & Expertise</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
          </div>

          <div ref={skillsRef.ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className={`glass rounded-2xl p-8 card-hover text-center animate-slide-right ${skillsRef.isVisible ? 'animate-visible' : ''}`}>
              <h3 className="text-2xl font-bold text-white mb-4">Backend Development</h3>
              <div className="space-y-2 text-gray-300">
                <p>• Java & Spring Boot</p>
                <p>• RESTful APIs</p>
                <p>• Database Design</p>
                <p>• Microservices</p>
              </div>
            </div>

            <div className={`glass rounded-2xl p-8 card-hover text-center animate-slide-left ${skillsRef.isVisible ? 'animate-visible' : ''}`}>
              <h3 className="text-2xl font-bold text-white mb-4">Frontend Development</h3>
              <div className="space-y-2 text-gray-300">
                <p>• React.js</p>
                <p>• TypeScript</p>
                <p>• Tailwind CSS</p>
                <p>• Responsive Design</p>
              </div>
            </div>

            <div className={`glass rounded-2xl p-8 card-hover text-center animate-slide-right ${skillsRef.isVisible ? 'animate-visible' : ''}`}>
              <h3 className="text-2xl font-bold text-white mb-4">Tools & Technologies</h3>
              <div className="space-y-2 text-gray-300">
                <p>• Git & GitHub</p>
                <p>• Docker</p>
                <p>• AWS</p>
                <p>• Agile/Scrum</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              My professional journey and key achievements
            </p>
          </div>

          <div className="space-y-8">
            <div className="glass rounded-2xl p-8 card-hover">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">Full-Stack Developer</h3>
                  <p className="text-amber-400 font-medium">Various Projects</p>
                </div>
                <div className="text-gray-400 mt-2 md:mt-0">
                  2023 - Present
                </div>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>• Developed scalable backend solutions using Java and Spring Boot</li>
                <li>• Built responsive frontend applications with React.js</li>
                <li>• Implemented RESTful APIs and database architectures</li>
                <li>• Collaborated on travel booking and healthcare applications</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-slate-950">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Featured Projects</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A showcase of my recent work and contributions
            </p>
          </div>

          <div ref={projectsRef.ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className={`glass rounded-2xl p-6 card-hover animate-slide-right ${projectsRef.isVisible ? 'animate-visible' : ''}`}>
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-2">Travel Booking Platform</h3>
                <p className="text-gray-400">Full-stack application for booking travel services</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm">Java</span>
                <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm">Spring Boot</span>
                <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm">React</span>
              </div>
            </div>

            <div className={`glass rounded-2xl p-6 card-hover animate-slide-left ${projectsRef.isVisible ? 'animate-visible' : ''}`}>
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-2">Healthcare Mobile App</h3>
                <p className="text-gray-400">Mobile application for healthcare services</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm">React Native</span>
                <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm">Node.js</span>
              </div>
            </div>

            <div className={`glass rounded-2xl p-6 card-hover animate-slide-right ${projectsRef.isVisible ? 'animate-visible' : ''}`}>
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-2">Hotel Management System</h3>
                <p className="text-gray-400">Comprehensive hotel management solution</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm">Java</span>
                <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm">MySQL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Get In Touch</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="glass rounded-2xl p-8 card-hover">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                  <a href="mailto:gokie210402@gmail.com" className="text-gray-300 hover:text-amber-400 transition-colors">
                    gokie210402@gmail.com
                  </a>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                  <a href="tel:+919585052446" className="text-gray-300 hover:text-amber-400 transition-colors">
                    +91 9585052446
                  </a>
                </div>
              </div>

              <div className="text-center">
                <p className="text-gray-400 mb-6">
                  Feel free to reach out for collaborations, opportunities, or just to say hello!
                </p>
                <div className="flex justify-center space-x-6">
                  <a href="https://github.com/Gokulv21" target="_blank" rel="noopener noreferrer"
                     className="text-gray-400 hover:text-amber-400 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/gokul-v-022936215/" target="_blank" rel="noopener noreferrer"
                     className="text-gray-400 hover:text-amber-400 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
