import React from 'react';
import { Linkedin, Mail, Cpu } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo and Company */}
          <div className="flex items-center gap-3 mb-6 md:mb-0">
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-3 rounded-full">
              <Cpu className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold">IH2</h3>
              <p className="text-sm text-gray-400">Intelligent Hybrid Solutions</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com/company/ih2-solutions"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            
            <a
              href="mailto:solutions@ih2.online"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300"
            >
              <Mail className="h-5 w-5" />
              <span className="hidden sm:inline">Email</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 IH2 - Intelligent Hybrid Solutions. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Empowering businesses through AI and IoT innovation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;