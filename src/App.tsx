import React from 'react';
import { ParticleBackground } from './components/ParticleBackground';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Technologies } from './components/Technologies';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <ParticleBackground />
      
      <div className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Technologies />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;