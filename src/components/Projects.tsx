import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Eye, X, Tag } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import { portfolioData, Project } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Full Stack', 'Frontend', 'React'];

  const filteredProjects = filter === 'All'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-code text-xs font-semibold uppercase tracking-wider mb-3"
          >
            04. PORTFOLIO SHOWCASE
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Featured Works
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '80px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? 'bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.5)] scale-105'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project: Project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl glass-card overflow-hidden group hover:border-cyan-500/50 transition-all duration-500 flex flex-col justify-between shadow-xl"
              >
                {/* Image Container */}
                <div className="relative aspect-video overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-30 transition-opacity" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700 text-xs font-code text-cyan-400 font-semibold">
                    {project.category}
                  </div>

                  {/* Hover Overlay Buttons */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 bg-slate-950/60 backdrop-blur-sm transition-all duration-300">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="p-3 rounded-xl bg-cyan-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.6)] hover:scale-110 transition-transform"
                      title="Inspect Details"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 rounded-xl bg-slate-900 text-white border border-slate-700 hover:border-cyan-500 hover:scale-110 transition-transform"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 rounded-xl bg-slate-900 text-white border border-slate-700 hover:border-blue-500 hover:scale-110 transition-transform"
                      title="Source Code"
                    >
                      <FiGithub className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 font-code">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Bottom Action links */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-800/80 text-sm">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-cyan-400 font-code font-semibold hover:underline flex items-center gap-1"
                      >
                        <span>Details</span>
                      </button>
                      <div className="flex items-center gap-3">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                        >
                          <FiGithub className="w-4 h-4" />
                          <span className="text-xs">Code</span>
                        </a>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span className="text-xs font-semibold">Demo</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-slate-950/80 backdrop-blur-xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3 }}
                className="max-w-3xl w-full bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
              >
                {/* Modal Header Image */}
                <div className="relative aspect-video max-h-72 overflow-hidden bg-slate-950">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                  
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/80 text-slate-300 hover:text-white hover:bg-slate-900 border border-slate-700 transition-colors z-20"
                    aria-label="Close modal"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  <div className="absolute bottom-4 left-6 z-10">
                    <span className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-xs font-code text-cyan-400 font-semibold mb-2 inline-block">
                      {selectedProject.category}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {selectedProject.title}
                    </h2>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                  <div>
                    <h4 className="text-xs font-code uppercase tracking-wider text-cyan-500 font-semibold mb-2">
                      Overview
                    </h4>
                    <p className="text-slate-300 leading-relaxed text-base">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-code uppercase tracking-wider text-cyan-500 font-semibold mb-2 flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5" />
                      <span>Technologies Used</span>
                    </h4>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {selectedProject.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-cyan-400 font-code text-xs font-semibold">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-800">
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_25px_rgba(6,182,212,0.7)] flex items-center gap-2 transition-all"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Launch Live Demo</span>
                    </a>
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-6 py-3 rounded-xl font-semibold bg-slate-950 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 flex items-center gap-2 transition-all"
                    >
                      <FiGithub className="w-5 h-5" />
                      <span>Source Repository</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
