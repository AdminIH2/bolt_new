import React from 'react';
import { ArrowDown, Cpu, Wifi, Zap } from 'lucide-react';
import { smoothScrollTo } from '../utils/smoothScroll';

const Hero: React.FC = () => {
  const handleCTAClick = () => {
    smoothScrollTo('contact');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20">
          <Cpu className="h-16 w-16 text-blue-600 animate-pulse" />
        </div>
        <div className="absolute top-40 right-32">
          <Wifi className="h-12 w-12 text-teal-600 animate-bounce" />
        </div>
        <div className="absolute bottom-32 left-1/4">
          <Zap className="h-14 w-14 text-green-600 animate-pulse" />
        </div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 bg-clip-text text-transparent">
              AI + IoT
            </span>
            <br />
            for Smarter Business Operations
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            IH2 builds intelligent hybrid solutions that automate workflows, 
            optimize processes, and connect systems for the future of business.
          </p>

          <button
            onClick={handleCTAClick}
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get in Touch
            <ArrowDown className="h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Hero Image Placeholder */}
        <div className="mt-16 animate-fade-in-up delay-300">
          <div className="relative mx-auto max-w-4xl">
            <img
              src="https://images.pexels.com/photos/8728382/pexels-photo-8728382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="AI and IoT technology visualization"
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;