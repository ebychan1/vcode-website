import React from 'react';
import { motion } from 'framer-motion';
import { Search, Brain, HelpCircle, Eye, Network } from 'lucide-react';

const nodes = [
  { id: 'seo', name: 'SEO', icon: Search, label: 'Search Engine Optimization', x: '15%', y: '20%', color: '#3b82f6' },
  { id: 'geo', name: 'GEO', icon: Brain, label: 'Generative Engine Optimization', x: '85%', y: '20%', color: '#06b6d4' },
  { id: 'aeo', name: 'AEO', icon: HelpCircle, label: 'Answer Engine Optimization', x: '15%', y: '80%', color: '#6366f1' },
  { id: 'ai', name: 'AI Visibility', icon: Eye, label: 'Omnichannel AI Indexing', x: '85%', y: '80%', color: '#ec4899' },
];

export default function SearchFuture() {
  return (
    <section className="py-24 bg-navy-dark relative overflow-hidden">
      {/* Grid Overlay */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      {/* Radial Gradient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] ambient-gradient pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-5 text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-pink-500/20 bg-pink-950/15 text-xs font-semibold text-pink-400 uppercase tracking-wider"
            >
              <span>The Paradigm Shift</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight"
            >
              Search Has Changed.<br />
              Is Your Business Ready?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-300 leading-relaxed font-normal"
            >
              Customers no longer only search. They ask AI engines like Gemini, ChatGPT, Perplexity and Claude. We optimize your digital presence for the next generation of discovery.
            </motion.p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start space-x-3">
                <div className="h-6 w-6 rounded-md bg-blue-500/10 flex items-center justify-center border border-blue-500/20 text-blue-400 mt-1">
                  ✓
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Targeted AI Citations</h4>
                  <p className="text-xs text-slate-400">Position your brand as the primary reference for AI search models.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="h-6 w-6 rounded-md bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 text-cyan-400 mt-1">
                  ✓
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Natural Language Architecture</h4>
                  <p className="text-xs text-slate-400">Reconstruct website schema to directly feed LLM scrapers and indexers.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Connected Nodes Graphic Column */}
          <div className="lg:col-span-7 flex justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-[4/3] max-w-xl glass-panel border border-white/5 rounded-3xl p-6 shadow-2xl flex items-center justify-center overflow-hidden"
            >
              {/* Connected Lines Layer */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* Lines connecting outer nodes to central hub */}
                <line x1="15" y1="20" x2="50" y2="50" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="0.5" className="animated-dash-line" />
                <line x1="85" y1="20" x2="50" y2="50" stroke="rgba(6, 182, 212, 0.4)" strokeWidth="0.5" className="animated-dash-line" />
                <line x1="15" y1="80" x2="50" y2="50" stroke="rgba(99, 102, 241, 0.4)" strokeWidth="0.5" className="animated-dash-line" />
                <line x1="85" y1="80" x2="50" y2="50" stroke="rgba(236, 72, 153, 0.4)" strokeWidth="0.5" className="animated-dash-line" />

                {/* Outer bounding connections */}
                <line x1="15" y1="20" x2="85" y2="20" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="0.5" />
                <line x1="85" y1="20" x2="85" y2="80" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="0.5" />
                <line x1="85" y1="80" x2="15" y2="80" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="0.5" />
                <line x1="15" y1="80" x2="15" y2="20" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="0.5" />
              </svg>

              {/* Central Glowing Growth Hub */}
              <div 
                className="absolute z-20 w-24 h-24 rounded-full flex flex-col items-center justify-center border border-cyan-500 bg-cyan-950/40 shadow-[0_0_30px_rgba(6,182,212,0.3)] animate-pulse-slow cursor-default"
                style={{ left: 'calc(50% - 48px)', top: 'calc(50% - 48px)' }}
              >
                <Network className="w-8 h-8 text-cyan-400 mb-1" />
                <span className="text-[10px] font-bold tracking-widest text-slate-300 text-center uppercase leading-none">
                  VCODE<br />CORE
                </span>
              </div>

              {/* Node Cards */}
              {nodes.map((node) => {
                const Icon = node.icon;
                return (
                  <motion.div
                    key={node.id}
                    className="absolute z-20 flex flex-col items-center cursor-pointer group"
                    style={{
                      left: node.x,
                      top: node.y,
                      transform: 'translate(-50%, -50%)',
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {/* Node Circle */}
                    <div 
                      className="w-14 h-14 rounded-full flex items-center justify-center border bg-navy-dark shadow-lg transition-colors duration-300"
                      style={{ 
                        borderColor: `${node.color}50`, 
                        boxShadow: `0 0 15px ${node.color}20` 
                      }}
                    >
                      <Icon 
                        className="w-6 h-6 transition-colors duration-300"
                        style={{ color: node.color }}
                      />
                    </div>
                    {/* Node Text */}
                    <div className="mt-2 text-center">
                      <span className="text-xs font-bold text-white tracking-wider block bg-navy-dark/85 px-2 py-0.5 rounded-full border border-white/5 shadow">
                        {node.name}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
