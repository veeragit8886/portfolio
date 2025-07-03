'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Github, ExternalLink, Brain, ShoppingCart, Zap, FileText } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Intern Dashboard',
      icon: Brain,
      description: 'A comprehensive dashboard built with Ant Design featuring tabs, modals, and protected routes.',
      fullDescription: 'This project showcases my ability to build complex user interfaces using Ant Design. The dashboard includes multiple tabs for different data views, modal dialogs for detailed information, and a robust authentication system with protected routes. The application demonstrates advanced React patterns and state management.',
      stack: ['React', 'Ant Design', 'Tailwind CSS', 'React Router'],
      features: [
        'Multi-tab interface with dynamic content',
        'Modal dialogs for detailed views',
        'Protected routes with authentication',
        'Responsive design for all devices',
        'Data visualization with charts',
        'Real-time updates and notifications'
      ],
      github: 'https://github.com/veeragit8886',
      demo: 'https://demo.com',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      id: 2,
      title: 'Product Management Panel',
      icon: ShoppingCart,
      description: 'Full-stack application for managing products with CRUD operations and backend API integration.',
      fullDescription: 'A complete product management system built with React frontend and Express.js backend. This project demonstrates my full-stack capabilities, including API design, database operations, and seamless frontend-backend communication.',
      stack: ['React', 'Express.js', 'MongoDB', 'Node.js'],
      features: [
        'Complete CRUD operations for products',
        'RESTful API with proper error handling',
        'MongoDB integration with Mongoose',
        'Form validation and error handling',
        'Image upload and storage',
        'Search and filter functionality'
      ],
      github: 'https://github.com/veeragit8886',
      demo: 'https://demo.com',
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      id: 3,
      title: 'Prompt Tool UI',
      icon: Zap,
      description: 'Modern AI prompt evaluator interface designed with Shadcn UI components.',
      fullDescription: 'A sleek and intuitive interface for AI prompt evaluation, showcasing modern design principles and component composition. This project highlights my ability to create user-friendly interfaces for complex AI tools.',
      stack: ['React', 'Shadcn UI', 'Tailwind CSS', 'TypeScript'],
      features: [
        'Clean and intuitive prompt editor',
        'Real-time syntax highlighting',
        'Prompt evaluation metrics',
        'Export and import functionality',
        'Dark/light mode support',
        'Responsive design patterns'
      ],
      github: 'https://github.com/veeragit8886',
      demo: 'https://demo.com',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
      id: 4,
      title: 'Form Validation App',
      icon: FileText,
      description: 'Advanced contact form with comprehensive validation using react-hook-form and zod.',
      fullDescription: 'A robust form application demonstrating advanced form validation techniques, error handling, and user experience optimization. Built with modern form libraries and validation schemas.',
      stack: ['React', 'react-hook-form', 'Zod', 'Tailwind CSS'],
      features: [
        'Schema-based validation with Zod',
        'Real-time form validation',
        'Custom error messages',
        'Accessibility compliant',
        'Multi-step form flow',
        'Form data persistence'
      ],
      github: 'https://github.com/veeragit8886',
      demo: 'https://demo.com',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my work demonstrating frontend, backend, and full-stack development skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 shadow-lg"
            >
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 ${project.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                  <project.icon className={`h-6 w-6 ${project.color}`} />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </CardTitle>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs py-1 px-2 bg-gray-100 dark:bg-gray-700"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm" className={`flex-1 ${project.color} hover:opacity-90`}>
                        View More
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="flex items-center space-x-3">
                          <div className={`w-10 h-10 ${project.bgColor} rounded-lg flex items-center justify-center`}>
                            <project.icon className={`h-5 w-5 ${project.color}`} />
                          </div>
                          <span>{project.title}</span>
                        </DialogTitle>
                      </DialogHeader>
                      
                      <div className="space-y-6">
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {project.fullDescription}
                        </p>

                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                            Tech Stack
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.stack.map((tech) => (
                              <Badge key={tech} variant="secondary">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                            Key Features
                          </h4>
                          <ul className="space-y-2">
                            {project.features.map((feature, index) => (
                              <li
                                key={index}
                                className="flex items-start space-x-2 text-gray-700 dark:text-gray-300"
                              >
                                <span className="text-green-500 mt-1">•</span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex gap-3 pt-4">
                          <Button asChild variant="outline" className="flex-1">
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center"
                            >
                              <Github className="h-4 w-4 mr-2" />
                              View Code
                            </a>
                          </Button>
                          <Button asChild className="flex-1">
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center"
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;