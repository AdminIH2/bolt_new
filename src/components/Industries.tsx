import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Factory, Truck, Building2, ShoppingBag, Users } from 'lucide-react';

const Industries: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const industries = [
    { icon: Factory, name: 'Manufacturing', description: 'Smart factory automation and predictive maintenance' },
    { icon: Truck, name: 'Logistics', description: 'Supply chain optimization and real-time tracking' },
    { icon: Building2, name: 'Government', description: 'Public sector efficiency and smart city solutions' },
    { icon: ShoppingBag, name: 'Retail', description: 'Customer experience enhancement and inventory management' },
    { icon: Users, name: 'SMEs', description: 'Scalable solutions for growing businesses' }
  ];

  return (
    <section id="industries" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Industries We <span className="text-teal-600">Serve</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering intelligent solutions across diverse sectors with proven expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              
              return (
                <div
                  key={index}
                  className="group text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="bg-gradient-to-br from-blue-100 to-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {industry.name}
                  </h3>
                  
                  <p className="text-sm text-gray-600">
                    {industry.description}
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

export default Industries;