import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Trust from './components/Trust';
import Services from './components/Services';
import SearchFuture from './components/SearchFuture';
import About from './components/About';
import CaseStudies from './components/CaseStudies';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

export default function App() {
  const [view, setView] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#privacy') {
        setView('privacy');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#terms') {
        setView('terms');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        setView('home');
      }
    };

    // Run on initial load
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleBackToHome = () => {
    window.location.hash = '';
  };

  return (
    <div className="bg-[#020817] text-slate-100 min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Navbar */}
      <Navbar />

      {/* Page Routing */}
      {view === 'privacy' && (
        <PrivacyPolicy onBack={handleBackToHome} />
      )}
      
      {view === 'terms' && (
        <TermsOfService onBack={handleBackToHome} />
      )}

      {view === 'home' && (
        <>
          {/* Hero Section */}
          <Hero />

          {/* Trust Section */}
          <Trust />

          {/* Solutions / Services Section */}
          <Services />

          {/* AI Search Future Section */}
          <SearchFuture />

          {/* About Section */}
          <About />

          {/* Case Studies / Portfolio Section */}
          <CaseStudies />

          {/* Build Process Section */}
          <Process />

          {/* Contact Section */}
          <Contact />
        </>
      )}

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
