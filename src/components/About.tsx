import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, Calendar, Globe, Award, Briefcase, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  const stats = [
    { label: 'Years Experience', value: portfolioData.personalInfo.yearsExperience, icon: Award, suffix: '+' },
    { label: 'Completed Projects', value: portfolioData.personalInfo.completedProjects, icon: Briefcase, suffix: '+' },
    { label: 'Happy Clients', value: portfolioData.personalInfo.happyClients, icon: User, suffix: '+' },
    { label: 'Satisfaction Rate', value: portfolioData.personalInfo.satisfactionRate, icon: CheckCircle2, suffix: '%' },
  ];

  const personalDetails = [
    { label: 'Full Name', value: portfolioData.personalInfo.name, icon: User },
    { label: 'Email', value: portfolioData.personalInfo.email, icon: Mail },
    { label: 'Phone / WhatsApp', value: portfolioData.personalInfo.phone, icon: Phone },
    { label: 'Location', value: portfolioData.personalInfo.location, icon: MapPin },
    { label: 'Availability', value: portfolioData.personalInfo.availability, icon: Calendar },
    { label: 'Languages', value: portfolioData.personalInfo.languages.join(', '), icon: Globe },
  ];

  return (
    <section id="about" className="py-20 bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-code text-xs font-semibold uppercase tracking-wider mb-3"
          >
            01. ABOUT ME
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Professional Background
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '80px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Intro Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
              Transforming complex problems into <span className="text-cyan-400">elegant web solutions</span>.
            </h3>
            <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
              {portfolioData.personalInfo.aboutIntro}
            </p>
            <div className="p-6 rounded-2xl bg-gradient-to-tr from-slate-900 to-slate-800/80 border border-slate-700/60 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl" />
              <p className="text-slate-200 italic font-medium relative z-10">
                "My mission is to build highly robust web applications with pristine code quality and modern UI aesthetics that elevate user conversion."
              </p>
              <div className="mt-4 font-code font-bold text-sm text-cyan-400">
                — {portfolioData.personalInfo.name}
              </div>
            </div>
          </motion.div>

          {/* Right Personal Details Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {personalDetails.map((detail) => {
              const Icon = detail.icon;
              return (
                <div
                  key={detail.label}
                  className="p-5 rounded-2xl glass-card hover:border-cyan-500/30 hover:bg-slate-900/80 transition-all duration-300 flex items-start gap-4 group"
                >
                  <div className="p-3 rounded-xl bg-slate-900 text-cyan-400 border border-slate-800 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <span className="text-xs text-slate-400 font-medium font-code uppercase">
                      {detail.label}
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-white truncate">
                      {detail.value}
                    </span>
                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800/80 shadow-lg text-center flex flex-col items-center justify-center relative overflow-hidden group hover:border-cyan-500/40 transition-all"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-xl group-hover:bg-cyan-500/15 transition-all" />
                <Icon className="w-8 h-8 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-4xl sm:text-5xl font-black text-white font-code tracking-tight mb-2 flex items-center">
                  <span>{stat.value}</span>
                  <span className="text-cyan-400">{stat.suffix}</span>
                </div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
