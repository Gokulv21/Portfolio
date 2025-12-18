import React from 'react';
import { X, ExternalLink, TrendingUp, Award, Code, Database } from 'lucide-react';

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

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project || !isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="glass-dark rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto hide-scrollbar animate-slide-up">
        {/* Header */}
        <div className="sticky top-0 glass-dark border-b border-white/10 p-6 z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <div className="flex items-center space-x-2">
                  {project.featured && (
                    <span className="px-2 py-1 bg-amber-500/20 border border-amber-500/30 rounded text-amber-400 text-xs font-semibold">
                      Featured
                    </span>
                  )}
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-6 h-6 text-gray-400 hover:text-white" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Overview */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Project Overview</h4>
            <p className="text-gray-300 leading-relaxed">{project.description}</p>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
              <Code className="w-5 h-5 text-amber-400" />
              <span>Technologies Used</span>
            </h4>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-amber-500/20 to-orange-600/20 border border-amber-500/30 rounded-lg text-amber-400 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
              <Award className="w-5 h-5 text-amber-400" />
              <span>Key Features</span>
            </h4>
            <div className="space-y-3">
              {project.keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Highlights */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
              <Database className="w-5 h-5 text-amber-400" />
              <span>Technical Highlights</span>
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              {project.technicalHighlights.map((highlight, index) => (
                <div key={index} className="glass rounded-xl p-4">
                  <p className="text-gray-300">{highlight}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges */}
          {project.challenges.length > 0 && (
            <div>
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-amber-400" />
                <span>Challenges & Solutions</span>
              </h4>
              <div className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="glass rounded-xl p-4">
                    <p className="text-gray-300">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Impact */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-amber-400" />
              <span>Impact & Results</span>
            </h4>
            <div className="p-6 bg-gradient-to-r from-amber-500/10 to-orange-600/10 rounded-xl border border-amber-500/20">
              <p className="text-gray-300 leading-relaxed">{project.impact}</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-white/10">
            <button
              onClick={onClose}
              className="btn-primary flex items-center justify-center space-x-2"
            >
              <ExternalLink className="w-4 h-4" />
              <span>View Live Demo</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
