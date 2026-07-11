import React from 'react';
import { Sparkles, Compass, TrendingUp, Code2, Palette, RefreshCw, ArrowLeft, ArrowRight } from 'lucide-react';

const solutionsDetail = [
  {
    icon: Sparkles,
    title: 'AI Powered Digital Marketing',
    tagline: 'Automated Campaigns. Smart Analytics.',
    description: 'We construct intelligent advertising pipelines that leverage machine learning algorithms to audit, adjust, and optimize ad copy and target parameters in real-time.',
    features: ['Real-time Bid Optimizations', 'Dynamic Ad Copy Generation', 'Cross-Channel Audience Syncing', 'Advanced ROI Attribution Modeling'],
    color: 'text-blue-400 bg-blue-500/10 border-blue-500/20'
  },
  {
    icon: Compass,
    title: 'SEO + GEO + AEO Optimization',
    tagline: 'Targeting Next-Gen Search Models.',
    description: 'We restructure your website markup, schema graphs, and content density so your brand becomes the citation reference for LLM models (ChatGPT, Gemini, Perplexity) and traditional Google crawler systems.',
    features: ['Natural Language Citation Audits', 'Knowledge Graph Schema Injectors', 'Query-Response Density Mapping', 'Traditional Core Web Vitals Dominance'],
    color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20'
  },
  {
    icon: TrendingUp,
    title: 'Performance Marketing',
    tagline: 'High-Velocity Scaling. Paid Efficiency.',
    description: 'Meta and Google Ads campaigns engineered around strict cost-per-acquisition metrics. We run multi-variant creative split testing to maximize budget output.',
    features: ['Creative Split Testing (CBO/ABO)', 'Custom Retargeting Funnels', 'Pixel & CAPI Sync Deployments', 'LTV and CAC Ratio Optimization'],
    color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
  },
  {
    icon: Code2,
    title: 'Website & App Development',
    tagline: 'Edge-Rendered. Conversion-Focused.',
    description: 'Custom React & Vite applications built for rapid page speeds and clean responsive layouts. We optimize every script and image to maximize mobile performance.',
    features: ['React, Next.js & Vite Frameworks', 'Tailwind CSS Grid Architecture', 'Zero-Layout-Shift (CLS) Sizing', 'Custom Serverless API Integrations'],
    color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20'
  },
  {
    icon: Palette,
    title: 'Brand Identity & Creative Design',
    tagline: 'Memorable Aesthetics. Visual Power.',
    description: 'We craft comprehensive visual identity guidelines including logos, custom vector iconography, and typography scales that match your brand strategy.',
    features: ['Custom Logo & Trademark Assets', 'Responsive Typography Scales', 'Marketing Deck Artworks', 'Color Psychology Frameworks'],
    color: 'text-purple-400 bg-purple-500/10 border-purple-500/20'
  },
  {
    icon: RefreshCw,
    title: 'Marketing Automation',
    tagline: 'Synchronized Pipelines. System Efficiency.',
    description: 'We integrate CRM trigger actions (HubSpot, Zoho) and email autoresponders to automate follow-ups, lead scores, and customer syncing, reducing human friction.',
    features: ['CRM Webhook Integrations', 'Automated Email Nurture Flows', 'Lead Scoring Rulesets', 'Sync-Loss Monitoring Systems'],
    color: 'text-pink-400 bg-pink-500/10 border-pink-500/20'
  }
];

export default function SolutionsPage({ onBack }) {
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
        <div className="space-y-4 mb-16 max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-950/15 text-xs font-semibold text-cyan-400 uppercase tracking-wider">
            <span>Corporate Solutions</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Solutions Designed For Tomorrow
          </h1>
          <p className="text-base text-slate-400 leading-relaxed">
            We develop bespoke, engineering-led scaling models to ensure your brand stands out in both traditional web search indexing and generative AI engines.
          </p>
        </div>

        {/* Detailed Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutionsDetail.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-8 rounded-3xl border border-white/5 shadow-2xl flex flex-col justify-between space-y-6 hover:border-cyan-500/20 transition-all duration-300 group"
              >
                <div className="space-y-6">
                  {/* Icon & Title */}
                  <div className="flex items-center space-x-4">
                    <div className={`h-12 w-12 rounded-2xl border flex items-center justify-center ${item.color}`}>
                      <Icon className="w-6 h-6 stroke-[1.5]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold tracking-widest text-cyan-400 uppercase">
                        {item.tagline}
                      </span>
                      <h2 className="text-xl font-display font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {item.title}
                      </h2>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed font-normal">
                    {item.description}
                  </p>

                  {/* Bullet Points */}
                  <div className="space-y-2 pt-2">
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center space-x-2.5 text-xs text-slate-300 font-medium">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="#contact"
                  className="pt-6 border-t border-white/5 inline-flex items-center space-x-2 text-xs font-bold text-slate-400 hover:text-white transition-colors group/link"
                >
                  <span>Request Custom Roadmap</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
