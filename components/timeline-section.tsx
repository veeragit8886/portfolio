import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Briefcase, Code, Database, Rocket } from 'lucide-react';

const TimelineSection = () => {
  const timelineEvents = [
    {
      date: 'April 2025',
      title: 'Started Internship at VBLP Tech Solutions pvt.ltd',
      description: 'Began my journey as a web developer intern, focusing on frontend development and modern UI frameworks.',
      icon: Briefcase,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      achievements: [
        'Onboarded to company development processes',
        'Started working with React and component libraries',
        'Learned team collaboration using Git'
      ]
    },
    {
      date: 'May 2025',
      title: 'Mastered UI Development',
      description: 'Built complex user interfaces using Ant Design and Shadcn UI, focusing on responsive design and user experience.',
      icon: Code,
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      achievements: [
        'Created dashboard UIs with Ant Design',
        'Implemented responsive layouts with Tailwind CSS',
        'Developed reusable component libraries'
      ]
    },
    {
      date: 'June 2025',
      title: 'Backend API Development',
      description: 'Expanded skills to backend development, creating RESTful APIs using Express.js and working with MongoDB databases.',
      icon: Database,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      achievements: [
        'Built RESTful APIs with Express.js',
        'Integrated MongoDB for data persistence',
        'Implemented authentication and authorization'
      ]
    },
    {
      date: 'July 2025',
      title: 'Fullstack Next.js Journey',
      description: 'Currently learning fullstack development with Next.js, exploring App Router, API Routes, and modern development patterns.',
      icon: Rocket,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      achievements: [
        'Learning Next.js App Router architecture',
        'Building fullstack applications',
        'Exploring serverless deployment patterns'
      ]
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Journey
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A timeline of my growth and learning experience during my internship at VBLP Technologies
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-orange-200 dark:from-blue-800 dark:via-purple-800 dark:to-orange-800"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative flex items-start space-x-6">
                {/* Timeline dot */}
                <div className={`flex-shrink-0 w-16 h-16 ${event.bgColor} rounded-full flex items-center justify-center border-4 border-white dark:border-gray-800 shadow-lg`}>
                  <event.icon className={`h-8 w-8 ${event.color}`} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <Badge variant="outline" className="text-sm">
                          {event.date}
                        </Badge>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {event.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        {event.description}
                      </p>

                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-1">
                          {event.achievements.map((achievement, achievementIndex) => (
                            <li
                              key={achievementIndex}
                              className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400"
                            >
                              <span className={`${event.color} mt-1`}>•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
