import React, { useState, useEffect, Suspense, lazy } from 'react';
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
import GeminiBot from './components/GeminiBot';

// Lazy load sub-pages for optimal page speed performance
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./components/TermsOfService'));
const SolutionsPage = lazy(() => import('./components/SolutionsPage'));
const PortfolioPage = lazy(() => import('./components/PortfolioPage'));

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
      } else if (hash === '#solutions') {
        setView('solutions');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#portfolio') {
        setView('portfolio');
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

      {/* Page Routing wrapped in Suspense for dynamic import code splitting */}
      <Suspense fallback={
        <div className="h-screen w-screen flex items-center justify-center bg-[#020817]">
          <div className="relative flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-400"></div>
          </div>
        </div>
      }>
        {view === 'privacy' && (
          <PrivacyPolicy onBack={handleBackToHome} />
        )}
        
        {view === 'terms' && (
          <TermsOfService onBack={handleBackToHome} />
        )}

        {view === 'solutions' && (
          <SolutionsPage onBack={handleBackToHome} />
        )}

        {view === 'portfolio' && (
          <PortfolioPage onBack={handleBackToHome} />
        )}
      </Suspense>

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

      {/* Floating Gemini AI Bot Widget */}
      <GeminiBot />
    </div>
  );
}
