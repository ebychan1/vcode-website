import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setError('Please fill in all the fields.');
      return;
    }
    
    setError('');
    setIsSubmitting(true);

    fetch('https://formsubmit.co/ajax/contact@vcode.in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        _subject: `New Lead from VCODE Website: ${formData.name}`
      })
    })
      .then(response => response.json())
      .then(data => {
        setIsSubmitting(false);
        if (data.success === 'true' || data.success) {
          setSubmitted(true);
          setFormData({ name: '', email: '', phone: '', message: '' });
        } else {
          setError('Submission failed. Please try again or email us directly.');
        }
      })
      .catch(err => {
        setIsSubmitting(false);
        setError('An error occurred. Please try again or email us directly.');
      });
  };

  return (
    <section id="contact" className="py-24 bg-navy-dark relative overflow-hidden">
      {/* Background blur decorative circles */}
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-cyan-600/5 blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-blue-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
          
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-950/15 text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                <span>Connect with VCODE</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
                Ready To Build Your Digital Advantage?
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Connect with our growth engineering specialists today. Tell us about your goals and let’s construct a roadmap to scale your brand.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 rounded-2xl border border-white/5 bg-white/[0.01]">
                <div className="h-12 w-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 text-blue-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Us</h4>
                  <p className="text-sm font-semibold text-slate-200">contact@vcode.in</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-2xl border border-white/5 bg-white/[0.01]">
                <div className="h-12 w-12 rounded-xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 text-cyan-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Call Us</h4>
                  <p className="text-sm font-semibold text-slate-200">+91 9526 9527 08</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-2xl border border-white/5 bg-white/[0.01]">
                <div className="h-12 w-12 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 text-indigo-400 mt-1 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Registered Office</h4>
                    <p className="text-sm font-semibold text-slate-200 leading-relaxed">
                      Suite No. 723, 2nd Floor, KC Arcade,<br />
                      P.O CSEZ, Kakkanad, Kerala 682037
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Corporate Hub</h4>
                    <p className="text-sm font-semibold text-slate-200 leading-relaxed">
                      The W Room, First floor, Thapasya Building,<br />
                      Thapasya Rd, Infopark Campus, Kochi 682042
                    </p>
                  </div>
                  <div className="pt-2 border-t border-white/5">
                    <h4 className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">Active Markets</h4>
                    <p className="text-xs text-slate-400">India • UAE • UK • USA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-xs text-slate-500 font-semibold tracking-wider uppercase">
              Average response time: &lt; 4 hours
            </div>
          </div>

          {/* Right Column - Glass Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl relative"
            >
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6 text-left"
                  >
                    {error && (
                      <div className="p-4 rounded-xl border border-red-500/25 bg-red-950/20 text-red-400 text-sm font-medium">
                        {error}
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Your Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full px-4 py-3 rounded-xl border border-white/5 bg-navy-dark/50 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 transition-all"
                        />
                      </div>
                      
                      {/* Email */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 rounded-xl border border-white/5 bg-navy-dark/50 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 transition-all"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl border border-white/5 bg-navy-dark/50 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 transition-all"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Your Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        placeholder="Tell us about your project, goals, and target market..."
                        className="w-full px-4 py-3 rounded-xl border border-white/5 bg-navy-dark/50 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:opacity-95 active:scale-98 transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Configuring Engine...</span>
                      ) : (
                        <>
                          <span>Start Your Growth Journey</span>
                          <Send className="w-4 h-4 ml-1" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="py-12 text-center space-y-4 flex flex-col items-center justify-center"
                  >
                    <div className="h-16 w-16 rounded-full bg-green-500/10 border border-green-500/35 flex items-center justify-center text-green-400 mb-2">
                      <Send className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-display font-extrabold text-white">
                      Transmission Confirmed!
                    </h3>
                    <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
                      Your growth profile has been logged. Our strategist team will analyze your digital footprint and connect shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 px-6 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-slate-300 hover:bg-white/10 transition"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>

      </div>

      {/* Floating WhatsApp Widget */}
      <motion.a
        href="https://wa.me/919526952708"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-green-500 flex items-center justify-center text-white shadow-2xl shadow-green-500/40 cursor-pointer border border-green-400 group"
      >
        <span className="absolute -inset-1 rounded-full bg-green-500/30 opacity-70 animate-ping pointer-events-none group-hover:hidden" />
        <MessageCircle className="w-7 h-7 fill-white stroke-green-500" />
      </motion.a>
    </section>
  );
}
