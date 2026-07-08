import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Zap, Activity, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden grid-bg">
      {/* Animated Ambient Light Blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-blue-600/10 blur-[80px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-[100px] animate-pulse-slow" style={{ animationDelay: '4s' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 relative z-10 w-full items-center">
        
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
          
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="self-start inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-950/20 text-xs font-semibold tracking-wider text-cyan-400 uppercase"
          >
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            <span>AI Powered Digital Growth Partner</span>
          </motion.div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.1] md:leading-[1.05]">
            <motion.span
              initial={{ opacity: 0, x: -30, filter: 'blur(5px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="block"
            >
              Build.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -30, filter: 'blur(5px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="block"
            >
              Market.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -30, filter: 'blur(5px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="block bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent glow-text"
            >
              Scale.
            </motion.span>
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-slate-300 max-w-xl font-normal leading-relaxed"
          >
            VCODE TECHNOLOGIES builds intelligent digital ecosystems with AI marketing, SEO, GEO optimization, automation and modern web solutions.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium shadow-lg shadow-blue-500/25 hover:shadow-cyan-500/35 hover:scale-105 active:scale-95 transition-all duration-300 group"
            >
              <span>Start Growing</span>
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="#portfolio"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white font-medium hover:border-white/20 transition-all duration-300"
            >
              Explore Work
            </a>
          </motion.div>
        </div>

        {/* Right Content - 3D Floating Glass Card */}
        <div className="lg:col-span-5 flex items-center justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            className="w-full max-w-md"
          >
            <div className="relative animate-float-slow">
              {/* Card glowing backdrops */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-400 opacity-30 blur-lg" />
              
              {/* Glass Card Container */}
              <div className="relative glass-panel rounded-3xl p-8 border border-white/10 shadow-2xl flex flex-col justify-between space-y-8">
                
                {/* Card Header */}
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/25">
                    <Cpu className="w-6 h-6 text-cyan-400" />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full border border-green-500/20 bg-green-950/20 text-green-400">
                    Live System
                  </span>
                </div>

                {/* Main Analytic Graphic */}
                <div className="text-left space-y-2">
                  <motion.h2 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="text-7xl font-display font-extrabold tracking-tight text-white flex items-baseline"
                  >
                    +300%
                  </motion.h2>
                  <p className="text-sm font-semibold tracking-wider text-slate-400 uppercase">
                    AI Powered Growth Systems
                  </p>
                </div>

                {/* Sub Features Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-panel p-4 rounded-2xl border border-white/5 flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span className="text-sm font-semibold text-slate-200">AI Ads</span>
                  </div>
                  <div className="glass-panel p-4 rounded-2xl border border-white/5 flex items-center space-x-3">
                    <Activity className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-sm font-semibold text-slate-200">GEO</span>
                  </div>
                  <div className="glass-panel p-4 rounded-2xl border border-white/5 flex items-center space-x-3">
                    <ShieldCheck className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span className="text-sm font-semibold text-slate-200">Growth</span>
                  </div>
                  <div className="glass-panel p-4 rounded-2xl border border-white/5 flex items-center space-x-3">
                    <Cpu className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                    <span className="text-sm font-semibold text-slate-200">AI Automation</span>
                  </div>
                </div>

                {/* Card footer indicator */}
                <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-white/5">
                  <span>Engine: vcode-core-v4.1</span>
                  <span>Uptime: 99.98%</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
