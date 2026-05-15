import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Atom, Code2, FileCode2, Palette, Wind, Cpu, Layers, Database, 
  Flame, GitBranch, Smartphone, Network, Rocket, Triangle, Box, Layout, Server 
} from 'lucide-react';
import { FiFigma } from 'react-icons/fi';
import { portfolioData, Skill } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Frontend' | 'Backend' | 'Tools & Deployment' | 'Core Competencies'>('All');

  const categories: ('All' | 'Frontend' | 'Backend' | 'Tools & Deployment' | 'Core Competencies')[] = [
    'All', 'Frontend', 'Backend', 'Tools & Deployment', 'Core Competencies'
  ];

  const filteredSkills = activeCategory === 'All' 
    ? portfolioData.skills 
    : portfolioData.skills.filter(s => s.category === activeCategory);

  const getIconComponent = (iconName: string) => {
    switch(iconName) {
      case 'Atom': return Atom;
      case 'Code2': return Code2;
      case 'FileCode2': return FileCode2;
      case 'Palette': return Palette;
      case 'Wind': return Wind;
      case 'Cpu': return Cpu;
      case 'Layers': return Layers;
      case 'Database': return Database;
      case 'Flame': return Flame;
      case 'GitBranch': return GitBranch;
      case 'Smartphone': return Smartphone;
      case 'Network': return Network;
      case 'Figma': return FiFigma;
      case 'Rocket': return Rocket;
      case 'Triangle': return Triangle;
      case 'Box': return Box;
      case 'Layout': return Layout;
      case 'Server': return Server;
      default: return Code2;
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-code text-xs font-semibold uppercase tracking-wider mb-3"
          >
            02. PROFESSIONAL SKILLS
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Technologies & Tools
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '80px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)] scale-105'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredSkills.map((skill: Skill) => {
              const IconComp = getIconComponent(skill.icon);
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 group shadow-lg flex flex-col justify-between relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-xl group-hover:from-cyan-500/20 transition-all" />

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div 
                        className="p-3 rounded-xl bg-slate-950 border border-slate-800 group-hover:scale-110 transition-transform duration-300"
                        style={{ color: skill.color }}
                      >
                        <IconComp className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {skill.name}
                        </h4>
                        <span className="text-xs text-slate-500 font-medium tracking-wide uppercase font-code">
                          {skill.category}
                        </span>
                      </div>
                    </div>
                    <span className="text-lg font-black font-code text-cyan-400">
                      {skill.percentage}%
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden p-0.5 border border-slate-800">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_0_10px_rgba(6,182,212,0.8)]"
                      style={{ backgroundColor: skill.color }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
