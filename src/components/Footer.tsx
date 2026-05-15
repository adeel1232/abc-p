import React from 'react';
import { ArrowUp, Code2 } from 'lucide-react';
import { FiGithub, FiLinkedin, FiTwitter, FiMessageSquare } from 'react-icons/fi';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-slate-800/60">
          
          {/* Brand Info */}
          <div className="md:col-span-4 flex flex-col items-start gap-4">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.4)] group-hover:scale-105 transition-transform">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white font-code tracking-tight group-hover:text-cyan-400 transition-colors">
                  Adeel Ahmad
                </span>
                <span className="text-xs text-cyan-500 font-medium tracking-widest font-sans uppercase">
                  Full Stack
                </span>
              </div>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              {portfolioData.personalInfo.shortIntro}
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-5 flex flex-wrap justify-center gap-x-6 gap-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Social Icons & Back to top */}
          <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-4">
            <a
              href={portfolioData.personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500 transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <FiGithub className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500 transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personalInfo.socials.twitter}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-sky-500 transition-all hover:scale-110"
              aria-label="Twitter"
            >
              <FiTwitter className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personalInfo.socials.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-emerald-500 transition-all hover:scale-110"
              aria-label="WhatsApp"
            >
              <FiMessageSquare className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-cyan-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.5)] hover:scale-110 transition-transform ml-2"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-code text-slate-500">
          <div>
            © {new Date().getFullYear()} {portfolioData.personalInfo.name}. All rights reserved.
          </div>
          <div>
            Built with ❤️ by <span className="text-cyan-400">Adeel Ahmad</span>.
          </div>
        </div>

      </div>
    </footer>
  );
};
