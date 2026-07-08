import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Compass, TrendingUp, Code2, Palette, RefreshCw } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'AI Powered Digital Marketing',
    description: 'Smart campaigns using automation, creativity and data-driven growth systems.',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Compass,
    title: 'SEO + GEO + AEO Optimization',
    description: 'Helping brands appear on Google search, AI search engines and future discovery platforms.',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: TrendingUp,
    title: 'Performance Marketing',
    description: 'Meta Ads and Google Ads campaigns focused on measurable business growth.',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Code2,
    title: 'Website & App Development',
    description: 'Modern, fast and conversion-focused digital platforms.',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Palette,
    title: 'Brand Identity & Creative Design',
    description: 'Building memorable brands with powerful visual communication.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: RefreshCw,
    title: 'Marketing Automation',
    description: 'Automated systems that improve leads, customer engagement and efficiency.',
    color: 'from-pink-500 to-rose-500',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function Services() {
  return (
    <section id="solutions" className="py-24 bg-navy relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-cyan-600/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] rounded-full bg-blue-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-blue-500/10 bg-blue-950/10 text-xs font-semibold text-cyan-400 uppercase tracking-wider"
          >
            <span>Our Capabilities</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight"
          >
            Solutions Designed For Tomorrow
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-400 font-normal leading-relaxed"
          >
            We deploy specialized, AI-driven growth engineering systems built for rapid scaling and future search environments.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="glass-panel glass-panel-hover rounded-2xl p-8 border border-white/5 relative overflow-hidden transition-all duration-300 group hover:-translate-y-2 flex flex-col justify-between"
              >
                {/* Gradient background hover splash */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="space-y-6">
                  {/* Icon Wrapper */}
                  <div className={`h-12 w-12 rounded-xl bg-gradient-to-r ${service.color} p-2.5 flex items-center justify-center text-white shadow-lg`}>
                    <Icon className="w-full h-full stroke-[1.5]" />
                  </div>

                  {/* Title & Desc */}
                  <div className="space-y-2 text-left">
                    <h3 className="text-xl font-display font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed font-normal">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Subtle Action Link */}
                <div className="pt-6 mt-6 border-t border-white/5 text-left flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-cyan-400 transition-colors duration-300">
                  <span>Learn more</span>
                  <span className="w-5 h-5 rounded-full border border-white/5 flex items-center justify-center transition-all duration-300 group-hover:border-cyan-400/30 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
