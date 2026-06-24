import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-code text-xs font-semibold uppercase tracking-wider mb-3"
          >
            07. GET IN TOUCH
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Contact Me
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '80px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Info Columns */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">
              Let's build something awesome together!
            </h3>
            <p className="text-slate-400 leading-relaxed text-sm sm:text-base mb-8">
              Whether you have a startup idea, need a full-stack developer, or just want to discuss web technology, feel free to reach out. I will respond within 24 hours.
            </p>

        {/* Email Card */}
<div className="p-6 rounded-2xl glass-card border border-slate-800 flex items-center gap-4 hover:border-cyan-500/40 transition-all group">
  <div className="p-4 rounded-xl bg-slate-900 text-cyan-400 border border-slate-800 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white transition-all">
    <Mail className="w-6 h-6" />
  </div>
  <div>
    <span className="text-xs font-code uppercase text-slate-500 block mb-1">
      Email Address
    </span>

    <a
      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.personalInfo.email}`}
      target="_blank"
      rel="noreferrer"
      className="text-white font-semibold hover:text-cyan-400 transition-colors"
    >
      {portfolioData.personalInfo.email}
    </a>
  </div>
</div>
<div className="p-6 rounded-2xl glass-card border border-slate-800 hover:border-emerald-500/40 transition-all group">
  <a
    href={portfolioData.personalInfo.socials.whatsapp}
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-4"
  >
    <div className="p-4 rounded-xl bg-slate-900 text-emerald-400 border border-slate-800 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all">
      <MessageSquare className="w-6 h-6" />
    </div>

    <div>
      <span className="text-xs font-code uppercase text-slate-500 block mb-1">
        WhatsApp
      </span>

      <div className="text-white font-semibold hover:text-emerald-400 transition-colors flex items-center gap-2">
        <span>WhatsApp Chat</span>
        <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
      </div>
    </div>
  </a>
</div>

{/* Location Card */}
<div className="p-6 rounded-2xl glass-card border border-slate-800 flex items-center gap-4 hover:border-blue-500/40 transition-all group">
  <div className="p-4 rounded-xl bg-slate-900 text-blue-400 border border-slate-800 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all">
    <MapPin className="w-6 h-6" />
  </div>
  <div>
    <span className="text-xs font-code uppercase text-slate-500 block mb-1">
      Current Base
    </span>

    <a
      href="https://www.google.com/maps/place/Pakistan"
      target="_blank"
      rel="noreferrer"
      className="text-white font-semibold hover:text-blue-400 transition-colors"
    >
      {portfolioData.personalInfo.location}
    </a>
  </div>
</div>

            {/* Stylized Google Map Placeholder / IFrame */}
            <div className="rounded-2xl overflow-hidden border border-slate-800 h-64 relative shadow-xl">
              <iframe
                title="Google Map Placeholder"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108844.20235378772!2d74.26449179924953!3d31.516845348825752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(120%) brightness(80%)" }}
                allowFullScreen={false}
                loading="lazy"
              />
              <div className="absolute top-2 left-2 bg-slate-950/90 backdrop-blur-md px-3 py-1 rounded-lg border border-slate-800 text-xs font-code text-cyan-400">
                📍 Based in Lahore, Pakistan
              </div>
            </div>

          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl glass-card-premium border border-slate-800/80 shadow-2xl relative">
              <h3 className="text-2xl font-extrabold text-white mb-6">
                Send a Message
              </h3>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 mb-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-3 font-medium text-sm"
                >
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                  <div>
                    <span className="font-bold">Thank you!</span> Your message has been sent successfully. I will get back to you shortly.
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-code font-semibold uppercase text-slate-400 mb-2">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-code font-semibold uppercase text-slate-400 mb-2">
                      Email Address <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@example.com"
                      className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-code font-semibold uppercase text-slate-400 mb-2">
                    Subject / Project Interest
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. MERN Full Stack Development Opportunity"
                    className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-code font-semibold uppercase text-slate-400 mb-2">
                    Your Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project requirements and timeline..."
                    className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full py-4 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_25px_rgba(6,182,212,0.7)] hover:scale-[1.02] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:pointer-events-none"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message Now</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
