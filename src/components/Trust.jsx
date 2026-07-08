import React from 'react';
import { Globe2, HeartPulse, Sparkles, GraduationCap, Laptop, Building2 } from 'lucide-react';

const brands = [
  { name: 'India', type: 'region', icon: Globe2 },
  { name: 'UAE', type: 'region', icon: Globe2 },
  { name: 'UK', type: 'region', icon: Globe2 },
  { name: 'USA', type: 'region', icon: Globe2 },
  { name: 'Healthcare', type: 'industry', icon: HeartPulse },
  { name: 'Ayurveda', type: 'industry', icon: Sparkles },
  { name: 'Education', type: 'industry', icon: GraduationCap },
  { name: 'Technology', type: 'industry', icon: Laptop },
  { name: 'Local Businesses', type: 'industry', icon: Building2 },
];

const clientLogos = [
  { name: 'Ideal Architects', img: '/client_ideal.jpg' },
  { name: 'Future Generali', img: '/client_generali.jpg' },
  { name: 'Suguna Chicken', img: '/client_suguna.png' },
  { name: 'Stanley Bastin', img: '/client_stanley.jpg' },
  { name: 'Asramam', img: '/client_asramam.jpg' },
  { name: 'Study Canada', img: '/client_canada.jpg' },
  { name: 'Star Health', img: '/client_star.jpg' },
  { name: 'Inspire Fashion', img: '/client_inspire.jpg' },
  { name: 'Kerala Herbs', img: '/client_kerala.jpg' },
];

export default function Trust() {
  // Duplicate lists for smooth looping
  const tagTickerItems = [...brands, ...brands, ...brands];
  const logoTickerItems = [...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="py-16 bg-navy-dark border-y border-white/5 relative overflow-hidden space-y-10">
      {/* Edge shading gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020817] via-transparent to-[#020817] z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <p className="font-sans text-xs font-semibold uppercase tracking-widest text-slate-400">
          Trusted by growing brands across
        </p>
      </div>

      {/* Row 1: Tag Marquee (Left Scroll) */}
      <div className="relative flex overflow-x-hidden">
        <div className="flex space-x-6 whitespace-nowrap animate-ticker py-1">
          {tagTickerItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="inline-flex items-center space-x-3 px-6 py-3 rounded-full border border-white/5 bg-white/[0.01] backdrop-blur-sm hover:border-cyan-500/20 hover:bg-white/[0.03] transition-all duration-300 group"
              >
                <Icon className={`w-4 h-4 transition-transform duration-300 group-hover:scale-110 ${
                  item.type === 'region' ? 'text-blue-400' : 'text-cyan-400'
                }`} />
                <span className="text-sm font-semibold tracking-wide text-slate-300 group-hover:text-white transition-colors">
                  {item.name}
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 bg-white/5 px-2 py-0.5 rounded-full">
                  {item.type}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Row 2: Client Logos Marquee (Right Scroll) */}
      <div className="relative flex overflow-x-hidden">
        <div className="flex space-x-8 whitespace-nowrap animate-ticker-reverse py-1">
          {logoTickerItems.map((item, idx) => (
            <div
              key={idx}
              className="inline-flex items-center justify-center p-3 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm shadow-md hover:border-cyan-500/20 hover:bg-white/[0.04] transition-all duration-300 h-16 w-36 overflow-hidden flex-shrink-0 group"
            >
              <img
                src={item.img}
                alt={item.name}
                className="h-full w-full object-contain filter brightness-95 opacity-80 group-hover:brightness-100 group-hover:opacity-100 transition-all duration-300 rounded"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
