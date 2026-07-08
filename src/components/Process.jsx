import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Lightbulb, Code2, Rocket, LineChart } from 'lucide-react';

const steps = [
  {
    step: '01',
    title: 'Discover',
    icon: Compass,
    description: 'We deep dive into your business model, target audience, and existing digital data pipelines to identify bottlenecks and scaling paths.',
    color: 'from-blue-600 to-blue-400',
  },
  {
    step: '02',
    title: 'Strategy',
    icon: Lightbulb,
    description: 'We construct a customized multi-channel execution map covering custom web architecture, AI optimization (GEO/AEO), and paid client acquisition.',
    color: 'from-cyan-500 to-cyan-300',
  },
  {
    step: '03',
    title: 'Build',
    icon: Code2,
    description: 'Our engineering team constructs fast, responsive websites and integrates marketing automation triggers, tracking events, and AI agents.',
    color: 'from-indigo-600 to-indigo-400',
  },
  {
    step: '04',
    title: 'Launch',
    icon: Rocket,
    description: 'We push production-ready applications live, activate target marketing funnels, and test the tracking setups under live conditions.',
    color: 'from-purple-600 to-purple-400',
  },
  {
    step: '05',
    title: 'Optimize',
    icon: LineChart,
    description: 'Continuous split testing, search positioning crawls, AI reference tracking, and performance tuning to sustain maximum growth velocity.',
    color: 'from-pink-600 to-pink-400',
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-950/15 text-xs font-semibold text-indigo-400 uppercase tracking-wider">
            <span>Our Methodology</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            How We Build Growth
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Our systematic, engineering-led scaling process ensures predictability, speed, and continuous improvement.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/5 -translate-x-1/2" />
          
          {/* Animated Central Glowing Line Overlay */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute left-4 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-400 to-pink-500 -translate-x-1/2 origin-top"
          />

          {/* Timeline Items */}
          <div className="space-y-16 md:space-y-24">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              const isEven = idx % 2 === 0;

              const Card = () => (
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6 }}
                  className="glass-panel p-6 rounded-2xl border border-white/5 shadow-xl text-left max-w-md w-full"
                >
                  <span className={`inline-block text-xs font-extrabold tracking-widest bg-gradient-to-r ${item.color} bg-clip-text text-transparent uppercase mb-2`}>
                    Step {item.step}
                  </span>
                  <h3 className="text-xl font-display font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </motion.div>
              );

              return (
                <div key={idx} className="relative flex flex-col md:flex-row md:items-center justify-between">
                  
                  {/* Outer Dot Indicator */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.6, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className={`h-9 w-9 rounded-full bg-navy-dark border-2 flex items-center justify-center text-xs font-bold text-white shadow-lg ${
                        idx === 0 ? 'border-blue-500' :
                        idx === 1 ? 'border-cyan-400' :
                        idx === 2 ? 'border-indigo-500' :
                        idx === 3 ? 'border-purple-500' :
                        'border-pink-500'
                      }`}
                    >
                      <Icon className="w-4 h-4 text-slate-300" />
                    </motion.div>
                  </div>

                  {/* Left Side (Desktop: Content or Spacer) */}
                  <div className="hidden md:flex w-1/2 pr-12 justify-end">
                    {isEven && <Card />}
                  </div>

                  {/* Right Side (Desktop: Content or Spacer / Mobile: Content Always) */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-12 flex justify-start">
                    {!isEven ? <Card /> : <div className="md:hidden w-full"><Card /></div>}
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
