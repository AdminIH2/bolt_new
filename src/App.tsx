import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Solutions from './components/Solutions';
import Industries from './components/Industries';
import CaseStudies from './components/CaseStudies';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Solutions />
      <Industries />
      <CaseStudies />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;