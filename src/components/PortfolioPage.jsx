import React, { useState } from 'react';
import { HeartPulse, Sparkles, Cpu, GraduationCap, ArrowLeft, ArrowRight, ShieldCheck, Filter } from 'lucide-react';

const casesDetail = [
  {
    category: 'Education',
    icon: GraduationCap,
    title: 'Stanley Bastin Educational Services Scaling',
    metrics: '+340% Enrollments',
    client: 'Stanley Bastin Education',
    sector: 'Educational Institute',
    challenge: 'Scaling overseas enrollments across the UAE and India. Standard paid ads had high cost-per-lead and low conversion rate due to unoptimized landing pages.',
    solution: 'Re-engineered the enrollment pipeline by launching high-speed local landers, setting up conversational AI booking systems, and optimizing semantic AEO/GEO query visibility for local educational searches.',
    results: ['Lead Acquisition Campaign Optimization', 'LMS and Automated Booking Integrations', 'Organic Local Search Engine Citation Growth'],
    color: 'border-purple-500/20 shadow-purple-500/5',
    iconColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20'
  },
  {
    category: 'Healthcare',
    icon: HeartPulse,
    title: 'Healthcare Growth System',
    metrics: '+240% Lead Rate',
    client: 'Metro Health Hubs',
    sector: 'Healthcare & Clinics',
    challenge: 'High cost per acquisition and low organic visibility on maps for multi-location healthcare clinics.',
    solution: 'Implemented automated booking sync, optimized local schema tags, and deployed Meta Ads campaigns focusing on localized geo-fenced patient groups.',
    results: ['Patient Lead Funnel Conversions', 'Google Maps / Local Map Pack Domination', 'Auto-scheduling Messaging Integrations'],
    color: 'border-blue-500/20 shadow-blue-500/5',
    iconColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20'
  },
  {
    category: 'Ayurveda',
    icon: Sparkles,
    title: 'Ayurveda Brand Growth Campaign',
    metrics: '3.8x ROI Boost',
    client: 'Nirvana Ayurveda Wellness',
    sector: 'Wellness & Lifestyle',
    challenge: 'Poor digital footprints and lack of trust elements in marketing, resulting in stagnant direct-to-consumer ecommerce sales.',
    solution: 'Constructed detailed content structures, set up performance-focused web landers, and deployed retention funnel flows using email and WhatsApp automation.',
    results: ['D2C Ecommerce Funnel Structuring', 'Brand Trust Guidelines & Communication', 'High-Converting Performance Ads Push'],
    color: 'border-cyan-500/20 shadow-cyan-500/5',
    iconColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20'
  },
  {
    category: 'Technology',
    icon: Cpu,
    title: 'Enterprise Business Automation',
    metrics: '-60% Ops Cost',
    client: 'LogiCore Systems',
    sector: 'SaaS & Enterprise Automation',
    challenge: 'High support team friction and manual CRM updates, causing delayed follow-up times and lost leads.',
    solution: 'Programmed custom automation middleware syncing API pipelines, triggers, lead scoring parameters, and email drip responders.',
    results: ['Automated Lead Pipeline Synchronizations', 'Custom API Middleware Implementations', 'Operational Friction Remediation'],
    color: 'border-indigo-500/20 shadow-indigo-500/5',
    iconColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20'
  }
];

export default function PortfolioPage({ onBack }) {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Education', 'Healthcare', 'Ayurveda', 'Technology'];

  const filteredCases = filter === 'All' 
    ? casesDetail 
    : casesDetail.filter(item => item.category === filter);

  return (
    <div className="pt-32 pb-24 grid-bg min-h-screen relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-blue-600/5 blur-[90px]" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] h-[350px] rounded-full bg-cyan-500/5 blur-[90px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-left">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="inline-flex items-center space-x-2 text-sm font-semibold text-cyan-400 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Home</span>
        </button>

        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-6 md:space-y-0">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-950/15 text-xs font-semibold text-purple-400 uppercase tracking-wider">
              <span>Client Success Showcase</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              Real Brands. Real Growth.
            </h1>
            <p className="text-base text-slate-400 leading-relaxed">
              Read how VCODE Technologies engineers scalable pipelines, automates customer acquisition, and powers brand transformations across education, healthcare, and technology sectors.
            </p>
          </div>

          {/* Filter badges */}
          <div className="flex items-center flex-wrap gap-2 pt-2 md:pt-0">
            <Filter className="w-4 h-4 text-slate-500 mr-2 hidden sm:inline" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border transition-all duration-300 ${
                  filter === cat
                    ? 'bg-cyan-500 border-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/20'
                    : 'border-white/5 bg-white/[0.02] text-slate-400 hover:border-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Detail Layout */}
        <div className="space-y-12">
          {filteredCases.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`glass-panel rounded-3xl p-8 md:p-12 border ${item.color} shadow-2xl transition-all duration-300 hover:border-white/10`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column (Meta & Stats) */}
                  <div className="lg:col-span-4 space-y-6">
                    <div className="space-y-3">
                      <span className="text-[10px] font-extrabold tracking-widest text-slate-500 uppercase">
                        {item.sector}
                      </span>
                      <h2 className="text-2xl font-display font-bold text-white">
                        {item.title}
                      </h2>
                    </div>

                    {/* Metric Card */}
                    <div className="inline-block px-5 py-2.5 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 text-center">
                      <span className="text-2xl font-display font-extrabold text-cyan-400">
                        {item.metrics}
                      </span>
                    </div>

                    {/* Client tag */}
                    <div className="text-xs text-slate-500 font-semibold tracking-wide uppercase">
                      Client: <span className="text-slate-300 font-bold">{item.client}</span>
                    </div>
                  </div>

                  {/* Right Column (Details) */}
                  <div className="lg:col-span-8 space-y-6 lg:border-l lg:border-white/5 lg:pl-8">
                    
                    {/* Challenge Block */}
                    <div className="space-y-2">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300">
                        The Challenge
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed font-normal">
                        {item.challenge}
                      </p>
                    </div>

                    {/* Solution Block */}
                    <div className="space-y-2">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300">
                        The Solution
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed font-normal">
                        {item.solution}
                      </p>
                    </div>

                    {/* Results Block */}
                    <div className="space-y-3 pt-4 border-t border-white/5">
                      <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">
                        Key Outputs
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {item.results.map((res, rIdx) => (
                          <li key={rIdx} className="flex items-start space-x-2 text-sm text-slate-300">
                            <ShieldCheck className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                            <span>{res}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
