import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Target, Users, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            About <span className="text-blue-600">IH2</span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-16 leading-relaxed">
            At IH2, we deliver customized AI agents and IoT-powered automation solutions 
            for real-world industries. Our mission is to bridge the gap between cutting-edge 
            technology and practical business applications, creating intelligent hybrid systems 
            that drive measurable results.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Precision Focus</h3>
              <p className="text-gray-600">
                Tailored solutions that address specific business challenges with measurable outcomes.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">
                Experienced professionals in AI, IoT, and business process optimization.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation First</h3>
              <p className="text-gray-600">
                Cutting-edge technology applied to solve tomorrow's business challenges today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;