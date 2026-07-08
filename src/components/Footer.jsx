import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      {/* Subtle bottom grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-white/5 text-left">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-6">
            <a href="#home" className="flex items-center space-x-3">
              <img src="/logo.png" alt="VCODE" className="h-9 w-9 object-cover object-top" />
              <div className="flex flex-col leading-none">
                <span className="font-display font-extrabold text-xl tracking-wider text-white">
                  VCODE
                </span>
                <span className="font-sans font-light text-[9px] tracking-widest text-slate-400 uppercase">
                  Technologies
                </span>
              </div>
            </a>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              VCODE TECHNOLOGIES builds intelligent digital ecosystems with AI marketing, SEO, GEO, automation, and modern web solutions to grow businesses across the globe.
            </p>
            <div className="text-xs font-semibold text-cyan-400">
              Digital Growth • AI Marketing • Technology Solutions
            </div>
          </div>

          {/* Service Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Solutions</h4>
            <ul className="space-y-2">
              {[
                { name: 'AI Digital Marketing', href: '#solutions' },
                { name: 'SEO + GEO Optimization', href: '#solutions' },
                { name: 'Performance Marketing', href: '#solutions' },
                { name: 'Web & App Development', href: '#solutions' },
                { name: 'Brand Creative Design', href: '#solutions' },
                { name: 'Marketing Automation', href: '#solutions' }
              ].map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Company</h4>
            <ul className="space-y-2">
              {[
                { name: 'About Us', href: '#about' },
                { name: 'Case Studies', href: '#portfolio' },
                { name: 'Our Methods', href: '#portfolio' },
                { name: 'Careers', href: '#contact' },
                { name: 'Contact', href: '#contact' }
              ].map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Icons Connect */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Connect</h4>
            <div className="flex space-x-3">
              {[
                { Icon: Linkedin, href: '#' },
                { Icon: Twitter, href: '#' },
                { Icon: Instagram, href: '#' },
                { Icon: Facebook, href: '#' },
                { Icon: Github, href: '#' }
              ].map((social, idx) => {
                const IconComp = social.Icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    className="h-10 w-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-white/[0.04] transition-all"
                  >
                    <IconComp className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            <p className="text-xs text-slate-500 font-medium">
              Subscribe to our AI growth digest for insights.
            </p>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between text-left space-y-4 md:space-y-0 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} VCODE TECHNOLOGIES. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
