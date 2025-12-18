import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Briefcase, User, MessageSquare, Github, Linkedin, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [activeTab, setActiveTab] = useState<'hire' | 'freelance'>('hire');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = activeTab === 'hire' 
      ? encodeURIComponent('Full-Time Employment Opportunity - Gokul Portfolio')
      : encodeURIComponent('Freelance Project Inquiry - Gokul Portfolio');
    
    const body = encodeURIComponent(
      `Name: ${formData.name}
Email: ${formData.email}
${activeTab === 'hire' ? `Company: ${formData.company}` : 'Type: Freelance Project'}

Message:
${formData.message}

---
Sent from Gokul's Portfolio Website`
    );

    window.open(`mailto:gokie210402@gmail.com?subject=${subject}&body=${body}`);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      message: ''
    });
  };

  const tabs = [
    {
      id: 'hire',
      label: 'Hire Full-Time',
      icon: Briefcase,
      description: 'Looking for a dedicated full-time developer to join your team'
    },
    {
      id: 'freelance',
      label: 'Freelance Project',
      icon: User,
      description: 'Need help with a specific project or consulting'
    }
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
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Gokulv21'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/gokul-v-022936215/'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/919585052446'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-slate-950">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how I can help bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="glass rounded-2xl p-8">
            {/* Tab Navigation */}
            <div className="flex mb-8 bg-slate-900/50 rounded-xl p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as 'hire' | 'freelance')}
                  className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Description */}
            <div className="mb-6 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
              <p className="text-gray-300 text-sm">
                {tabs.find(tab => tab.id === activeTab)?.description}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              {activeTab === 'hire' && (
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
                    placeholder="Acme Inc."
                  />
                </div>
              )}

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all resize-none"
                  placeholder={
                    activeTab === 'hire'
                      ? 'Tell me about the position and your team...'
                      : 'Describe your project requirements...'
                  }
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>

            <p className="text-xs text-gray-500 mt-6 text-center">
              This will open your default email client with pre-filled information
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                <MessageSquare className="w-6 h-6 text-amber-400" />
                <span>Let's Connect</span>
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-slate-900/50 rounded-xl hover:bg-slate-900/70 transition-colors"
                  >
                    <div className="p-3 bg-amber-500/10 rounded-lg">
                      <info.icon className="w-5 h-5 text-amber-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      {info.href && info.href !== '#' ? (
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
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Follow Me</h3>
              
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center space-y-2 p-4 bg-slate-900/50 rounded-xl hover:bg-slate-900/70 transition-all hover:scale-105"
                  >
                    <social.icon className="w-6 h-6 text-gray-400 group-hover:text-amber-400 transition-colors" />
                    <span className="text-xs text-gray-400 group-hover:text-amber-400 transition-colors">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="glass rounded-2xl p-6 bg-gradient-to-r from-amber-500/10 to-orange-600/10 border border-amber-500/20">
              <h4 className="text-lg font-semibold text-white mb-3">Response Time</h4>
              <p className="text-gray-300 text-sm">
                I typically respond to inquiries within 24 hours. For urgent matters, 
                feel free to reach out via phone or WhatsApp for faster communication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
