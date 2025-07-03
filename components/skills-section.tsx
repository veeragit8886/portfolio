import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Monitor,
  Server,
  BookOpen,
  Wrench,
  Search
} from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Monitor,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      borderColor: 'border-blue-200 dark:border-blue-800',
      skills: [
        { name: 'React', description: 'Component architecture & hooks' },
        { name: 'Next.js', description: 'App Router & API Routes' },
        { name: 'Tailwind CSS', description: 'Utility-first styling' },
        { name: 'Ant Design', description: 'Complex dashboard UIs' },
        { name: 'Shadcn UI', description: 'Modern component library' },
        { name: 'Bootstrap', description: 'Responsive grid systems' },
        { name: 'Angular', level: 'Beginner', description: 'Basic component development' },
      ]
    },
    {
      title: 'Backend',
      icon: Server,
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      borderColor: 'border-green-200 dark:border-green-800',
      skills: [
        { name: 'Express.js', description: 'RESTful API development' },
        { name: 'MongoDB', description: 'Document database operations' },
        { name: 'Node.js', description: 'Server-side JavaScript' },
        { name: 'API Integration', description: 'Third-party service integration' },
      ]
    },
    {
      title: 'Currently Learning',
      icon: BookOpen,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      borderColor: 'border-purple-200 dark:border-purple-800',
      skills: [
        { name: 'Next.js App Router', level: 'Learning', description: 'Modern routing & layouts' },
        { name: 'API Routes', level: 'Learning', description: 'Fullstack Next.js development' },
        { name: 'Prompt Engineering', level: 'Learning', description: 'AI interaction optimization' },
      ]
    },
    {
      title: 'Tools',
      icon: Wrench,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      borderColor: 'border-orange-200 dark:border-orange-800',
      skills: [
        { name: 'Git & GitHub', description: 'Version control & collaboration' },
        { name: 'VSCode', description: 'Development environment' },
        { name: 'Postman', description: 'API testing & documentation' },
        { name: 'Vite', description: 'Build tool & dev server' },
      ]
    },
    {
      title: 'Search AIs',
      icon: Search,
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50 dark:bg-cyan-900/20',
      borderColor: 'border-cyan-200 dark:border-cyan-800',
      skills: [
        { name: 'Perplexity', description: 'Research & problem solving' },
        { name: 'Manus', description: 'Development assistance' },
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Advanced':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100';
      case 'Intermediate':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100';
      case 'Beginner':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100';
      case 'Learning':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100';
    }
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and the tools I work with daily
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`${category.bgColor} ${category.borderColor} border-2 hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-3">
                  <category.icon className={`h-6 w-6 ${category.color}`} />
                  <span className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center justify-between bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm"
                    >
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-1">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            {skill.name}
                          </span>
                          <Badge className={getLevelColor(skill.level ?? '')}>
                            {skill.level}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
