import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { MessageSquare, Package, BarChart3 } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const caseStudies = [
    {
      icon: MessageSquare,
      title: 'AI Customer Support',
      impact: '70% Faster Response Time',
      description: 'Deployed an intelligent AI agent that handles customer inquiries 24/7, resolving common issues instantly and escalating complex cases to human agents.',
      results: ['Reduced response time from 2 hours to 20 minutes', 'Improved customer satisfaction by 45%', 'Decreased support costs by 60%'],
      color: 'blue'
    },
    {
      icon: Package,
      title: 'IoT Inventory Tracking',
      impact: 'Real-Time Visibility',
      description: 'Implemented smart sensors and IoT devices to monitor warehouse inventory levels, automatically triggering reorders and preventing stockouts.',
      results: ['99.5% inventory accuracy', 'Reduced stockouts by 80%', 'Optimized storage space by 35%'],
      color: 'teal'
    },
    {
      icon: BarChart3,
      title: 'Workflow Automation',
      impact: '90% Manual Process Reduction',
      description: 'Connected Salesforce with Google Sheets and automated reporting workflows, eliminating manual data entry and ensuring real-time insights.',
      results: ['Saved 20 hours per week', 'Eliminated data entry errors', 'Improved reporting accuracy by 95%'],
      color: 'green'
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Success <span className="text-green-600">Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world results from our AI and IoT implementations
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => {
              const Icon = study.icon;
              
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className={`w-16 h-16 rounded-full bg-${study.color}-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-8 w-8 text-${study.color}-600`} />
                  </div>
                  
                  <div className={`text-2xl font-bold text-${study.color}-600 mb-2`}>
                    {study.impact}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {study.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {study.description}
                  </p>
                  
                  <div className="space-y-2">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className={`w-2 h-2 rounded-full bg-${study.color}-600 mt-2 flex-shrink-0`}></div>
                        <span className="text-sm text-gray-700">{result}</span>
                      </div>
                    ))}
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

export default CaseStudies;