'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Learning Badge */}
          <Badge className="mb-6 bg-emerald-100 text-emerald-800 hover:bg-emerald-200 dark:bg-emerald-900 dark:text-emerald-100">
            🎓 Currently Learning: Fullstack with Next.js
          </Badge>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Hi 👋 I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Veera Narayana
            </span>
          </h1>

          {/* Subheading */}
          <h2 className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-4 font-medium">
            Fresher Web Developer | Intern @ VBLP Tech Solutions pvt.ltd
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Skilled in React, Next.js, and API development. Passionate about clean UI, 
            learning modern tools, and building fullstack apps that make a difference.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="lg"
                asChild
                className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
              >
                <a href="https://github.com/veeragit8886" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
              >
                <a href="https://linkedin.com/in/veera-narayana-67a236168" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
              >
                <a href="mailto:veeranarayanavra@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Tech Stack Preview */}
          <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
            {['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Express.js'].map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-sm py-1 px-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-gray-400" />
      </div>
    </section>
  );
};

export default HeroSection;
