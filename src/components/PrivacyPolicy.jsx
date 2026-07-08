import React from 'react';
import { Shield, ArrowLeft, Lock, Eye, FileText } from 'lucide-react';

export default function PrivacyPolicy({ onBack }) {
  return (
    <div className="pt-32 pb-24 grid-bg min-h-screen relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-blue-600/5 blur-[80px]" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[300px] h-[300px] rounded-full bg-cyan-500/5 blur-[80px]" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-left">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="inline-flex items-center space-x-2 text-sm font-semibold text-cyan-400 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Home</span>
        </button>

        {/* Page Header */}
        <div className="space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-950/15 text-xs font-semibold text-cyan-400 uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5" />
            <span>Data Security</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-none">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-400">
            Last Updated: July 7, 2026
          </p>
        </div>

        {/* Content Panel */}
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl space-y-8 text-slate-300">
          
          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-white flex items-center space-x-2">
              <Lock className="w-5 h-5 text-cyan-400" />
              <span>1. Introduction</span>
            </h2>
            <p className="text-sm leading-relaxed">
              At VCODE TECHNOLOGIES, we prioritize the confidentiality and safety of our visitors' and clients' information. This Privacy Policy details how we collect, store, utilize, and guard your personal data when you interact with our website and utilize our digital growth services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-white flex items-center space-x-2">
              <Eye className="w-5 h-5 text-cyan-400" />
              <span>2. Information We Collect</span>
            </h2>
            <p className="text-sm leading-relaxed">
              We gather information to offer premium customized systems and enhance our operations:
            </p>
            <ul className="list-disc list-inside text-sm space-y-1.5 pl-2">
              <li><strong>Contact Information:</strong> Name, email address, phone number, and company name when you fill out contact or project inquiry forms.</li>
              <li><strong>Usage Information:</strong> Data about how you navigate and interact with our platform (IP addresses, browser type, referral URLs, pages visited).</li>
              <li><strong>Service Data:</strong> Project parameters, market targets, and automation details required to configure your growth systems.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-white flex items-center space-x-2">
              <FileText className="w-5 h-5 text-cyan-400" />
              <span>3. How We Use Your Data</span>
            </h2>
            <p className="text-sm leading-relaxed">
              The data collected is processed to support your business expansion and maintain operations:
            </p>
            <ul className="list-disc list-inside text-sm space-y-1.5 pl-2">
              <li>To build, customize, and optimize your digital systems.</li>
              <li>To contact you regarding queries, updates, and deliverables.</li>
              <li>To run targeted ad campaigns and analyze audience patterns for performance marketing.</li>
              <li>To improve website speeds, security, and responsive layouts.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-white flex items-center space-x-2">
              <Shield className="w-5 h-5 text-cyan-400" />
              <span>4. Data Storage & Protection</span>
            </h2>
            <p className="text-sm leading-relaxed">
              We execute advanced security setups (including encryption and secure API layers) to protect against unauthorized data intrusion, alteration, or sharing. We retain your information only as long as necessary to complete your scaling contracts or fulfill legal criteria.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-white flex items-center space-x-2">
              <Lock className="w-5 h-5 text-cyan-400" />
              <span>5. Third-Party Sharing</span>
            </h2>
            <p className="text-sm leading-relaxed">
              VCODE TECHNOLOGIES does not sell or lease user information to third-party brokers. We may share information with verified automation partners or cloud processors solely to execute technical operations under strict NDA requirements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-white flex items-center space-x-2">
              <Shield className="w-5 h-5 text-cyan-400" />
              <span>6. Contact Information</span>
            </h2>
            <p className="text-sm leading-relaxed">
              For any questions regarding this Privacy Policy or your data, connect with our compliance group at **contact@vcode.in**.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
