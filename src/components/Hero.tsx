import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Download,
  Check,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMessageSquare,
} from "react-icons/fi";

import { portfolioData } from "../data/portfolioData";

export const Hero: React.FC = () => {
  const [downloaded, setDownloaded] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [current, setCurrent] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const roles = [
    "Full Stack MERN Developer",
    "React Frontend Expert",
    "UI/UX Designer",
    "Freelance Web Developer",
  ];

  useEffect(() => {
    const currentText = roles[current];
    const speed = deleting ? 50 : 120;

    const timer = setTimeout(() => {
      setTypedText((prev) =>
        deleting
          ? currentText.substring(0, prev.length - 1)
          : currentText.substring(0, prev.length + 1)
      );

      if (!deleting && typedText === currentText) {
        setTimeout(() => setDeleting(true), 1500);
      }

      if (deleting && typedText === "") {
        setDeleting(false);
        setCurrent((prev) => (prev + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [typedText, deleting, current]);

  const handleResumeDownload = () => {
    setDownloaded(true);

    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "resume.pdf";
    link.click();

    setTimeout(() => {
      setDownloaded(false);
    }, 3000);
  };

  return (
    <section
  id="home"
  className="relative min-h-screen flex items-center justify-center overflow-hidden mt-20 pt-20 pb-16 bg-[#020617]"
>
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-500/10 blur-3xl rounded-full" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/20 bg-slate-900/70 backdrop-blur-md mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-slate-300">
                Available for Freelance Projects
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-5">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {portfolioData.personalInfo.name}
              </span>
            </h1>

            {/* Typing Text */}
            <div className="h-14 mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-300">
                {typedText}
                <span className="text-cyan-400 animate-pulse">|</span>
              </h2>
            </div>

            {/* Intro */}
            <p className="text-slate-400 text-lg leading-relaxed max-w-xl mb-8">
              {portfolioData.personalInfo.shortIntro}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#projects"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold flex items-center gap-2 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(6,182,212,0.3)]"
              >
                View Projects
                <ArrowRight className="w-5 h-5" />
              </a>

              <button
                onClick={handleResumeDownload}
                className={`px-8 py-4 rounded-2xl border font-semibold flex items-center gap-2 transition-all duration-300 ${
                  downloaded
                    ? "bg-emerald-500/20 border-emerald-500 text-emerald-400"
                    : "bg-slate-900 border-slate-700 text-white hover:border-cyan-500"
                }`}
              >
                {downloaded ? (
                  <>
                    <Check className="w-5 h-5" />
                    Downloaded
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5" />
                    Download CV
                  </>
                )}
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href={portfolioData.personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-xl border border-slate-700 bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-400 transition-all"
              >
                <FiGithub size={20} />
              </a>

              <a
                href={portfolioData.personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-xl border border-slate-700 bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 transition-all"
              >
                <FiLinkedin size={20} />
              </a>

              <a
                href={portfolioData.personalInfo.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-xl border border-slate-700 bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:border-sky-400 transition-all"
              >
                <FiTwitter size={20} />
              </a>

              <a
                href={portfolioData.personalInfo.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-xl border border-slate-700 bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:border-emerald-400 transition-all"
              >
                <FiMessageSquare size={20} />
              </a>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative w-[320px] h-[420px] sm:w-[400px] sm:h-[500px]">
              
              {/* Glow */}
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 blur-2xl opacity-30 animate-pulse" />

              {/* Card */}
              <div className="relative h-full w-full rounded-[40px] border border-slate-700 bg-slate-900/70 backdrop-blur-xl overflow-hidden shadow-2xl">
                
                {/* Image */}
                <img
                  src="/profiles.png"
                  alt="Profile"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-3xl font-bold text-white mb-1">
                    {portfolioData.personalInfo.name}
                  </h3>

                  <p className="text-cyan-400 font-medium">
                    MERN Stack Developer
                  </p>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute -top-5 -left-5 bg-slate-900 border border-cyan-500/30 px-4 py-3 rounded-2xl shadow-xl"
              >
                <span className="text-cyan-400 font-bold text-sm">
                  React JS
                </span>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="absolute -bottom-5 -right-5 bg-slate-900 border border-indigo-500/30 px-4 py-3 rounded-2xl shadow-xl"
              >
                <span className="text-indigo-400 font-bold text-sm">
                  Full Stack
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};