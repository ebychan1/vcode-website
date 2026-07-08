import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HeartPulse, Sparkles, Cpu, ArrowUpRight, GraduationCap } from 'lucide-react';

const cases = [
  {
    icon: HeartPulse,
    category: 'Healthcare sector',
    title: 'Healthcare Growth System',
    metrics: '+240% Lead Rate',
    results: [
      'Lead Generation Strategy',
      'Local Visibility Growth',
      'Conversion Optimization',
    ],
    color: 'border-blue-500/20 shadow-blue-500/5',
    iconColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  },
  {
    icon: Sparkles,
    category: 'Wellness & Lifestyle',
    title: 'Ayurveda Brand Growth',
    metrics: '3.8x ROI Boost',
    results: [
      'Digital Presence Improvement',
      'Customer Engagement Growth',
      'Performance Marketing Push',
    ],
    color: 'border-cyan-500/20 shadow-cyan-500/5',
    iconColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
  },
  {
    icon: GraduationCap,
    category: 'Higher Education',
    title: 'EdTech & Institute Scaling',
    metrics: '+340% Enrollments',
    results: [
      'Lead Acquisition Campaign',
      'LMS Platform Development',
      'Organic SEO & Brand Footprint',
    ],
    color: 'border-purple-500/20 shadow-purple-500/5',
    iconColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
  },
  {
    icon: Cpu,
    category: 'Enterprise SaaS',
    title: 'Business Automation Solutions',
    metrics: '-60% Ops Cost',
    results: [
      'Workflow Optimization',
      'Smart Digital Systems',
      'CRM Integration & Sync',
    ],
    color: 'border-indigo-500/20 shadow-indigo-500/5',
    iconColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
  },
];

export default function CaseStudies() {
  return (
    <section id="portfolio" className="py-24 bg-navy-dark relative overflow-hidden">
      {/* Background radial overlay */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0 text-left">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-950/15 text-xs font-semibold text-blue-400 uppercase tracking-wider">
              <span>Case Studies</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              Real Brands.<br />
              Real Growth.
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-base leading-relaxed">
            Read through real success metrics where our engineering-first marketing framework scaled performance and automated workflow systems.
          </p>
        </div>

        {/* Case Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`glass-panel p-8 rounded-3xl border ${item.color} shadow-2xl flex flex-col justify-between items-stretch text-left group transition-all duration-300 hover:border-white/15 hover:-translate-y-1`}
              >
                <div className="space-y-6">
                  {/* Category, Icon & Metrics */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                      {item.category}
                    </span>
                    <div className={`h-10 w-10 rounded-xl border flex items-center justify-center ${item.iconColor}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Metric Stat */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-display font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <div className="inline-block px-3 py-1 rounded-lg bg-white/[0.03] border border-white/5">
                      <span className="text-sm font-bold text-cyan-400">
                        {item.metrics}
                      </span>
                    </div>
                  </div>

                  {/* Results list */}
                  <div className="space-y-3 pt-4 border-t border-white/5">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                      Key Deliverables
                    </p>
                    <ul className="space-y-2">
                      {item.results.map((res, rIdx) => (
                        <li key={rIdx} className="flex items-start space-x-2 text-sm text-slate-300">
                          <ShieldCheck className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom link */}
                <div className="pt-8 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-white transition-colors duration-300">
                  <span>View Project Details</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
