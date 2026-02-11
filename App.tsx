import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { AdvisoryFocus } from './components/AdvisoryFocus';
import { Exclusions } from './components/Exclusions';
import { Approach } from './components/Approach';
import { Industries } from './components/Industries';
import { EngagementModel } from './components/EngagementModel';
import { LegalSection } from './components/LegalSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <AdvisoryFocus />
      <Exclusions />
      <Approach />
      <Industries />
      <EngagementModel />
      <LegalSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;