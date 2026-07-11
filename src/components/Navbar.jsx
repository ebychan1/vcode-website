import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Solutions', href: '#solutions' },
  { name: 'About', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'py-4 bg-[#020817]/70 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-3">
            <img src="/logo.png" alt="VCODE" width="36" height="36" className="h-9 w-9 object-cover object-top" />
            <div className="flex flex-col leading-none">
              <span className="font-display font-extrabold text-xl tracking-wider text-white">
                VCODE
              </span>
              <span className="font-sans font-light text-[9px] tracking-widest text-slate-400 uppercase">
                Technologies
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-sans text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors relative py-2 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/919526952708"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-full group bg-gradient-to-br from-blue-600 to-cyan-500 text-white hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-800 transition-all duration-300"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#020817] rounded-full group-hover:bg-opacity-0 flex items-center space-x-1">
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[72px] left-4 right-4 z-40 md:hidden glass-panel rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="font-sans text-lg font-medium text-slate-300 hover:text-cyan-400 transition-colors py-2 border-b border-white/5"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="https://wa.me/919526952708"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium shadow-lg shadow-cyan-500/20 hover:opacity-90 transition-opacity flex items-center justify-center space-x-1"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
