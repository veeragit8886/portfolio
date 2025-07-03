import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Zap, Github } from 'lucide-react';

const AboutSection = () => {
  const funFacts = [
    { icon: Code, text: 'Writing APIs & fullstack features', color: 'text-blue-600' },
    { icon: Zap, text: 'Exploring prompt engineering', color: 'text-yellow-600' },
    { icon: Github, text: 'Practicing daily on GitHub', color: 'text-purple-600' },
    { icon: Database, text: 'Learning MongoDB & Express.js', color: 'text-green-600' },
  ];

  const techStack = [
    'React', 'Next.js', 'Tailwind CSS', 'Ant Design', 
    'Shadcn UI', 'Bootstrap', 'Express.js', 'MongoDB', 'Angular'
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know me better - my journey, interests, and what drives my passion for web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Main Content */}
          <div className="space-y-6">
            <Card className="p-8 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  I'm a web developer currently interning at{' '}
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    VBLP Techn Solutions pvt.ltd
                  </span>{' '}
                  since April 2025. I'm experienced in building responsive UIs using React, 
                  Tailwind CSS, Bootstrap, and modern UI kits like Ant Design and Shadcn.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mt-4">
                  Recently, I started writing backend APIs using Express.js and MongoDB, 
                  and I'm learning to build fullstack apps using Next.js. My goal is to 
                  become a well-rounded developer who can handle both frontend elegance 
                  and backend functionality.
                </p>
              </CardContent>
            </Card>

            {/* Fun Facts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {funFacts.map((fact, index) => (
                <Card key={index} className="p-4 bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0 flex items-center space-x-3">
                    <fact.icon className={`h-6 w-6 ${fact.color}`} />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {fact.text}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-6">
            <Card className="p-8 bg-white dark:bg-gray-800 shadow-lg">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                  {techStack.map((tech) => (
                    <Badge
                      key={tech}
                      className="text-sm py-2 px-4 bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-100 transition-colors duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-200 dark:border-emerald-800">
                  <h4 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-2">
                    Currently Learning
                  </h4>
                  <p className="text-emerald-700 dark:text-emerald-300 text-sm">
                    Next.js App Router, API Routes, and Prompt Engineering
                  </p>
                </div>

                <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
                    Tools & Search AIs
                  </h4>
                  <p className="text-purple-700 dark:text-purple-300 text-sm">
                    Git, GitHub, VSCode, Postman, Vite, Perplexity, Manus
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
