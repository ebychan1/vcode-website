import React from 'react';
import { FileText, ArrowLeft, BookOpen, Scale, AlertCircle } from 'lucide-react';

export default function TermsOfService({ onBack }) {
  return (
    <div className="pt-32 pb-24 grid-bg min-h-screen relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-blue-600/5 blur-[80px]" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[300px] h-[300px] rounded-full bg-cyan-500/5 blur-[80px]" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-left">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="inline-flex items-center space-x-2 text-sm font-semibold text-cyan-400 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Home</span>
        </button>

        {/* Page Header */}
        <div className="space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-950/15 text-xs font-semibold text-indigo-400 uppercase tracking-wider">
            <Scale className="w-3.5 h-3.5" />
            <span>Legal Framework</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-none">
            Terms of Service
          </h1>
          <p className="text-sm text-slate-400">
            Last Updated: July 7, 2026
          </p>
        </div>

        {/* Content Panel */}
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl space-y-8 text-slate-300">
          
          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-white flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-indigo-400" />
              <span>1. Agreement to Terms</span>
            </h2>
            <p className="text-sm leading-relaxed">
              By accessing our website and engaging with our digital growth, performance marketing, development, and automation systems, you agree to be bound by these Terms of Service. If you do not accept these terms, you should immediately suspend usage of our digital assets and services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-white flex items-center space-x-2">
              <FileText className="w-5 h-5 text-indigo-400" />
              <span>2. Service Deliverables</span>
            </h2>
            <p className="text-sm leading-relaxed">
              VCODE TECHNOLOGIES details growth systems, SEO, GEO, AEO configurations, and custom web setups under separate signed project agreements (statements of work). While our systems are engineered to maximize digital footprint citations and organic/paid conversion rates, we do not guarantee specific indexing rankings or query responses by third-party search models (e.g. OpenAI Search, Perplexity, Gemini, Google Search) since search algorithms are subject to autonomous shifts.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-white flex items-center space-x-2">
              <Scale className="w-5 h-5 text-indigo-400" />
              <span>3. Intellectual Property</span>
            </h2>
            <p className="text-sm leading-relaxed">
              All materials, design templates, layouts, core optimization frameworks, custom scripts, and visual concepts created by VCODE TECHNOLOGIES are protected by copyright and intellectual property legislation. Clients receive a perpetual, non-exclusive license to use the developed codebases and growth systems upon receipt of final, full contract settlement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-white flex items-center space-x-2">
              <AlertCircle className="w-5 h-5 text-indigo-400" />
              <span>4. User Obligations & Conduct</span>
            </h2>
            <p className="text-sm leading-relaxed">
              You agree to provide accurate information through our inquiry channels. You are prohibited from:
            </p>
            <ul className="list-disc list-inside text-sm space-y-1.5 pl-2">
              <li>Engaging in vulnerability scans, reverse engineering, or scraping operations against our domain.</li>
              <li>Injecting malicious payloads, viruses, or spam requests into our contact structures.</li>
              <li>Impersonating representative entities or submitting falsified metrics.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-white flex items-center space-x-2">
              <Scale className="w-5 h-5 text-indigo-400" />
              <span>5. Limitation of Liability</span>
            </h2>
            <p className="text-sm leading-relaxed">
              Under no circumstances shall VCODE TECHNOLOGIES or its project teams be held liable for indirect, incidental, or operational loss (including profit loss, database interruptions, or ad budget burns) resulting from system deployments, or indexing changes made by third-party platforms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-white flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-indigo-400" />
              <span>6. Governing Jurisdiction</span>
            </h2>
            <p className="text-sm leading-relaxed">
              These Terms of Service shall be governed and interpreted under the commercial legislation of India, without regard to conflict of law criteria. Any claims arising from website use must be filed in the courts of Kochi, Kerala.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
