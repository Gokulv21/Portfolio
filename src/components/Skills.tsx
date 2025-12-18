import React, { useState } from 'react';
import { Database, Code2, Cpu, Users, ChevronRight } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const Skills = () => {
  const [activeTab, setActiveTab] = useState('backend');

  const skillsData: Record<string, Skill[]> = {
    backend: [
      { name: 'Java', level: 90, category: 'backend' },
      { name: 'Spring Boot', level: 85, category: 'backend' },
      { name: 'MySQL', level: 88, category: 'backend' },
      { name: 'Android Studio', level: 85, category: 'backend' },
      { name: 'REST APIs', level: 87, category: 'backend' },
      { name: 'MongoDB', level: 82, category: 'backend' },
    ],
    frontend: [
      { name: 'JavaScript', level: 88, category: 'frontend' },
      { name: 'React.js', level: 90, category: 'frontend' },
      { name: 'HTML/CSS', level: 92, category: 'frontend' },
      { name: 'Tailwind CSS', level: 85, category: 'frontend' },
      { name: 'Android UI/UX', level: 83, category: 'frontend' },
    ],
    technical: [
      { name: 'Machine Learning', level: 80, category: 'technical' },
      { name: 'Behavioral Biometrics', level: 85, category: 'technical' },
      { name: 'DSA', level: 88, category: 'technical' },
      { name: 'Database Design', level: 87, category: 'technical' },
      { name: 'CRUD Operations', level: 90, category: 'technical' },
    ],
    other: [
      { name: 'Git & GitHub', level: 90, category: 'other' },
      { name: 'Debugging & Testing', level: 88, category: 'other' },
      { name: 'Problem Solving', level: 90, category: 'other' },
      { name: 'Agile', level: 80, category: 'other' },
    ],
  };

  const tabs = [
    {
      id: 'backend',
      label: 'Backend',
      icon: Database,
      color: 'from-blue-500 to-cyan-600',
    },
    {
      id: 'frontend',
      label: 'Frontend',
      icon: Code2,
      color: 'from-green-500 to-emerald-600',
    },
    {
      id: 'technical',
      label: 'Technical',
      icon: Cpu,
      color: 'from-purple-500 to-pink-600',
    },
    {
      id: 'other',
      label: 'Other',
      icon: Users,
      color: 'from-orange-500 to-red-600',
    },
  ];

  const getProgressBarColor = (level: number) => {
    if (level >= 90) return 'from-amber-500 to-orange-600';
    if (level >= 85) return 'from-amber-400 to-amber-600';
    if (level >= 80) return 'from-yellow-500 to-amber-500';
    return 'from-orange-400 to-amber-500';
  };

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Technical Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive expertise across the full development stack with proven proficiency in modern technologies
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`group relative flex items-center space-x-3 px-6 py-3 rounded-xl transition-all duration-300 ${
                activeTab === tab.id
                  ? 'glass-dark border-amber-500/50 text-amber-400'
                  : 'glass border-white/10 text-gray-400 hover:text-white hover:border-white/20'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span className="font-medium">{tab.label}</span>
              {activeTab === tab.id && (
                <ChevronRight className="w-4 h-4 animate-pulse" />
              )}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skillsData[activeTab].map((skill, index) => (
            <div
              key={skill.name}
              className="glass rounded-xl p-6 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                  <span className="text-amber-400 font-bold">{skill.level}%</span>
                </div>
                
                {/* Progress Bar */}
                <div className="relative">
                  <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${getProgressBarColor(skill.level)} rounded-full transition-all duration-1000 ease-out`}
                      style={{
                        width: `${skill.level}%`,
                        animation: 'slide-up 0.8s ease-out',
                        animationDelay: `${index * 0.1}s`,
                        animationFillMode: 'both',
                      }}
                    ></div>
                  </div>
                  
                  {/* Animated glow effect */}
                  {skill.level >= 85 && (
                    <div
                      className="absolute inset-0 h-3 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full opacity-30 blur-sm"
                      style={{
                        width: `${skill.level}%`,
                        animation: 'slide-up 0.8s ease-out',
                        animationDelay: `${index * 0.1}s`,
                        animationFillMode: 'both',
                      }}
                    ></div>
                  )}
                </div>
              </div>

              {/* Skill Level Badge */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${
                    skill.level >= 90 ? 'bg-amber-400' :
                    skill.level >= 85 ? 'bg-amber-500' :
                    skill.level >= 80 ? 'bg-yellow-500' :
                    'bg-orange-400'
                  }`}></div>
                  <span className="text-gray-400 text-sm">
                    {skill.level >= 90 ? 'Expert' :
                     skill.level >= 85 ? 'Advanced' :
                     skill.level >= 80 ? 'Proficient' :
                     'Intermediate'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 glass rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Skills Overview</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {tabs.map((tab) => {
              const tabSkills = skillsData[tab.id];
              const averageLevel = Math.round(
                tabSkills.reduce((sum, skill) => sum + skill.level, 0) / tabSkills.length
              );
              
              return (
                <div key={tab.id} className="text-center">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${tab.color} mb-4`}>
                    <tab.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{tab.label}</h4>
                  <div className="text-amber-400 text-2xl font-bold mb-1">{averageLevel}%</div>
                  <p className="text-gray-400 text-sm">Average Proficiency</p>
                  <div className="mt-2 text-xs text-gray-500">
                    {tabSkills.length} technologies
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
