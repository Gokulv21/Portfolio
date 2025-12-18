import React from 'react';
import { Briefcase, Calendar, MapPin, Award, TrendingUp, Users, Code, Database } from 'lucide-react';

const Experience = () => {
  const experience = {
    company: 'Exposys Datalabs',
    position: 'Software Developer Intern',
    location: 'Bangalore',
    duration: 'Mar 2023 - Apr 2023',
    project: '24/7 Health and Care W',
    achievements: [
      {
        icon: TrendingUp,
        title: 'Process Optimization',
        description: 'Reduced manual input by 30% through intelligent automation systems'
      },
      {
        icon: Database,
        title: 'Database Architecture',
        description: 'Designed and implemented optimized MySQL database with seamless frontend-backend synchronization'
      },
      {
        icon: Users,
        title: 'User Experience',
        description: 'Developed comprehensive patient records and appointment management modules'
      },
      {
        icon: Code,
        title: 'Full-Stack Development',
        description: 'Built complete healthcare application using Java, MySQL, and Android Studio'
      }
    ],
    technologies: ['Java', 'MySQL', 'Android Studio', 'XML'],
    impact: 'Successfully delivered a production-ready healthcare application that improved operational efficiency and user experience'
  };

  return (
    <section id="experience" className="section-padding bg-slate-950">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Work Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional experience and contributions to real-world projects
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Experience Card */}
          <div className="glass rounded-2xl p-8 md:p-12 card-hover relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-500/10 to-orange-600/10 rounded-full blur-3xl -translate-y-32 translate-x-32"></div>
            
            <div className="relative z-10">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">{experience.position}</h3>
                  <div className="flex items-center space-x-2 text-amber-400 text-lg font-semibold">
                    <Briefcase className="w-5 h-5" />
                    <span>{experience.company}</span>
                  </div>
                </div>
                
                <div className="flex flex-col md:items-end mt-4 md:mt-0 space-y-2">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span>{experience.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{experience.duration}</span>
                  </div>
                </div>
              </div>

              {/* Project Overview */}
              <div className="mb-8 p-6 bg-gradient-to-r from-amber-500/10 to-orange-600/10 rounded-xl border border-amber-500/20">
                <h4 className="text-xl font-semibold text-white mb-3">Project: {experience.project}</h4>
                <p className="text-gray-300 leading-relaxed">
                  Developed a comprehensive healthcare management application for Android that enables 
                  24/7 patient care with features including patient records management, appointment 
                  scheduling, and automated medication reminders.
                </p>
              </div>

              {/* Key Achievements */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
                  <Award className="w-6 h-6 text-amber-400" />
                  <span>Key Achievements</span>
                </h4>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {experience.achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="glass rounded-xl p-6 card-hover group"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-amber-500/10 rounded-lg group-hover:bg-amber-500/20 transition-colors">
                          <achievement.icon className="w-6 h-6 text-amber-400" />
                        </div>
                        <div>
                          <h5 className="text-lg font-semibold text-white mb-2">
                            {achievement.title}
                          </h5>
                          <p className="text-gray-300 leading-relaxed">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-white mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-3">
                  {experience.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-amber-500/20 to-orange-600/20 border border-amber-500/30 rounded-lg text-amber-400 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Impact Summary */}
              <div className="p-6 bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl border border-white/10">
                <h4 className="text-lg font-semibold text-white mb-3">Project Impact</h4>
                <p className="text-gray-300 leading-relaxed">
                  {experience.impact}
                </p>
              </div>

              {/* Call to Action */}
              <div className="mt-8 text-center">
                <a
                  href="#contact"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <Briefcase className="w-5 h-5" />
                  <span>Discuss Similar Opportunities</span>
                </a>
              </div>
            </div>
          </div>

          {/* Additional Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="glass rounded-xl p-6 text-center card-hover">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h5 className="text-lg font-semibold text-white mb-2">30% Efficiency Gain</h5>
              <p className="text-gray-400 text-sm">Reduced manual data entry through automation</p>
            </div>

            <div className="glass rounded-xl p-6 text-center card-hover">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h5 className="text-lg font-semibold text-white mb-2">Healthcare Focus</h5>
              <p className="text-gray-400 text-sm">24/7 patient care and management system</p>
            </div>

            <div className="glass rounded-xl p-6 text-center card-hover">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h5 className="text-lg font-semibold text-white mb-2">Database Expertise</h5>
              <p className="text-gray-400 text-sm">Optimized MySQL with seamless sync</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
