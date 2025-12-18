import React, { useState } from 'react';
import { Code, ExternalLink, Star, TrendingUp } from 'lucide-react';
import ProjectModal from './ProjectModal.tsx';

interface Project {
  id: number;
  title: string;
  tech: string[];
  description: string;
  keyFeatures: string[];
  technicalHighlights: string[];
  challenges: string[];
  impact: string;
  featured: boolean;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects: Project[] = [
    {
      id: 3,
      title: 'Info View',
      tech: ['Java', 'MySQL', 'Android Studio', 'XML'],
      description: 'Android application facilitating seamless communication between students, teachers, and parents with real-time updates and notifications.',
      keyFeatures: [
        'Real-time push notifications for announcements and updates',
        'Internship and hackathon opportunity posting system',
        'Dedicated parent-teacher communication channel',
        'Student performance tracking and progress reports',
        'Interactive event calendar with RSVP functionality'
      ],
      technicalHighlights: [
        'Developed native Android app with Java and XML',
        'Implemented Firebase for real-time data synchronization',
        'Created RESTful APIs for backend communication',
        'Designed responsive UI following Material Design principles'
      ],
      challenges: [
        'Ensured low-latency real-time messaging across different user roles',
        'Managed large-scale user data with efficient database queries',
        'Implemented offline functionality for critical features'
      ],
      impact: 'Improved communication efficiency by 70%, increased event participation by 45%, and enhanced parent engagement through streamlined information access.',
      featured: true
    },
    {
      id: 4,
      title: 'Behavioral Biometric Authentication',
      tech: ['Java', 'Machine Learning', 'Python', 'TensorFlow'],
      description: 'Advanced security system that authenticates users through unique behavioral patterns including keystroke dynamics and mouse movement analysis.',
      keyFeatures: [
        'Keystroke dynamics analysis for user authentication',
        'Mouse movement pattern recognition and tracking',
        'Continuous authentication during active sessions',
        'Machine learning-based pattern recognition system',
        'Real-time anomaly detection and security alerts'
      ],
      technicalHighlights: [
        'Implemented ML algorithms using TensorFlow and Python',
        'Developed Java-based data collection and processing system',
        'Created neural network models for behavior classification',
        'Built real-time monitoring and alerting system'
      ],
      challenges: [
        'Collected and processed large datasets of user behavior patterns',
        'Achieved high accuracy while minimizing false positives',
        'Implemented efficient real-time processing for continuous authentication'
      ],
      impact: 'Enhanced security systems by 85%, reduced unauthorized access attempts by 92%, and provided seamless user experience with invisible authentication.',
      featured: true
    },
    {
      id: 5,
      title: '24/7 Health and Care W',
      tech: ['Java', 'MySQL', 'Android Studio', 'XML'],
      description: 'Comprehensive healthcare management application for patient records, appointment scheduling, and automated medication reminders.',
      keyFeatures: [
        'Electronic health records management system',
        'Appointment booking with doctor availability calendar',
        'Automated medication reminders and tracking',
        'Medical history and health metrics monitoring',
        'Emergency contact and critical information access'
      ],
      technicalHighlights: [
        'Designed secure MySQL database for patient data',
        'Developed Android app with Java and XML layouts',
        'Implemented secure authentication and data encryption',
        'Created backend APIs for data synchronization'
      ],
      challenges: [
        'Ensured HIPAA compliance and data security requirements',
        'Managed sensitive patient information with encryption',
        'Implemented reliable notification system for medication reminders'
      ],
      impact: 'Reduced manual data entry by 30%, improved medication adherence by 55%, and enhanced patient care through streamlined health management.',
      featured: false
    }
  ];

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my portfolio of innovative solutions spanning web development, mobile applications, and cutting-edge technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="glass rounded-2xl p-6 card-hover group cursor-pointer"
              onClick={() => openProjectModal(project)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg group-hover:scale-110 transition-transform">
                  <Code className="w-6 h-6 text-white" />
                </div>
                {project.featured && (
                  <div className="flex items-center space-x-1 text-amber-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-xs font-semibold">Featured</span>
                  </div>
                )}
              </div>

              {/* Project Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.slice(0, 3).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-amber-500/10 border border-amber-500/20 rounded text-amber-400 text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="px-2 py-1 bg-gray-500/10 border border-gray-500/20 rounded text-gray-400 text-xs">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>

              {/* Project Stats */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center space-x-2 text-gray-400">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-xs">Click to view details</span>
                </div>
                <div className="flex items-center space-x-3">
                  <button className="text-gray-400 hover:text-amber-400 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-12">
          <button className="btn-secondary inline-flex items-center space-x-2">
            <ExternalLink className="w-5 h-5" />
            <span>View All Projects on GitHub</span>
          </button>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default Projects;
