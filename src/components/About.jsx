import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Rocket, Globe, Layers, CheckCircle2 } from 'lucide-react';

const stats = [
  { value: '8+ Years', label: 'Experience', icon: Calendar, color: 'text-blue-400' },
  { value: '500+', label: 'Projects Delivered', icon: Rocket, color: 'text-cyan-400' },
  { value: 'Global', label: 'Client Experience', icon: Globe, color: 'text-indigo-400' },
  { value: 'Multiple', label: 'Industries Served', icon: Layers, color: 'text-pink-400' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-navy relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-blue-600/5 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 text-left space-y-8">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-950/15 text-xs font-semibold text-cyan-400 uppercase tracking-wider"
              >
                <span>About Us</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight"
              >
                Not Another Digital Agency.<br />
                <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 bg-clip-text text-transparent glow-text">
                  A Growth Engineering Team.
                </span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-300 leading-relaxed font-normal"
            >
              VCODE TECHNOLOGIES combines strategy, creativity, technology and AI-driven systems to help businesses grow in the changing digital world. We don't just build pages or run ads—we build complete, automated growth engines.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-sm text-slate-400 leading-relaxed font-normal"
            >
              Our engineering approach bridges the gap between high-performance code and digital marketing. By developing custom automation scripts, setting up natural language optimization (AEO/GEO), and engineering scalable websites, we ensure businesses in India, the UAE, the UK, and the USA establish a sustainable competitive advantage in the AI era.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {[
                'Data-Driven Decision Making',
                'Custom AI Agent Development',
                'Advanced Search Dominance (GEO/AEO)',
                'End-to-End Scalability Architecture',
              ].map((point, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-sm font-semibold text-slate-300">{point}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Statistics Column */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    whileHover={{ y: -5, borderColor: 'rgba(6, 182, 212, 0.2)' }}
                    className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/5 flex flex-col justify-between items-start space-y-4 text-left transition-all duration-300 shadow-xl"
                  >
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                      <Icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
                        {stat.value}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-wider">
                        {stat.label}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
