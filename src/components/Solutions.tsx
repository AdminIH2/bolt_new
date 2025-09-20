import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Bot, Wifi, Workflow, GraduationCap } from 'lucide-react';

const Solutions: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const solutions = [
    {
      icon: Bot,
      title: 'AI Business Assistants',
      description: 'Customized AI agents for sales, marketing, finance, and operations that work 24/7 to boost productivity.',
      color: 'blue'
    },
    {
      icon: Wifi,
      title: 'IoT Integration',
      description: 'Smart devices and sensor-based automation that provide real-time insights and automated responses.',
      color: 'teal'
    },
    {
      icon: Workflow,
      title: 'Workflow Automation',
      description: 'Seamlessly connect systems like CRM, ERP, and cloud tools to eliminate manual processes.',
      color: 'green'
    },
    {
      icon: GraduationCap,
      title: 'Consulting & Training',
      description: 'Expert guidance and comprehensive training to help businesses adopt AI and IoT effectively.',
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600 bg-blue-100 text-blue-600',
      teal: 'from-teal-500 to-teal-600 bg-teal-100 text-teal-600',
      green: 'from-green-500 to-green-600 bg-green-100 text-green-600',
      purple: 'from-purple-500 to-purple-600 bg-purple-100 text-purple-600'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI and IoT solutions designed to transform your business operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              const colorClasses = getColorClasses(solution.color);
              
              return (
                <div
                  key={index}
                  className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className={`w-16 h-16 rounded-full ${colorClasses.split(' ').slice(2, 4).join(' ')} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-8 w-8 ${colorClasses.split(' ').slice(4).join(' ')}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {solution.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;