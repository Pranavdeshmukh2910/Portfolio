import React from 'react';
import { ArrowRight, Download, Mail, MapPin, Cpu } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import { NeuralCanvas } from './NeuralCanvas';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-cyber-grid"
    >
      {/* Interactive AI Neural Background Canvas */}
      <NeuralCanvas />

      {/* Futuristic Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-blue-600/20 via-cyan-500/15 to-purple-600/20 blur-[130px] rounded-full pointer-events-none -z-0" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none -z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-500/15 border border-blue-500/30 text-blue-600 dark:text-cyan-300 text-xs sm:text-sm font-medium mb-6 shadow-glow-sm hover:scale-105 transition-transform cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-semibold">{portfolioData.personal.statusBadge}</span>
          <span className="text-slate-400 dark:text-slate-500">&bull;</span>
          <span className="hidden sm:inline text-slate-600 dark:text-slate-300">R.C. Patel Institute of Technology</span>
        </div>

        {/* Main Name Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-4xl leading-[1.1]">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 dark:from-blue-400 dark:via-cyan-300 dark:to-purple-400 bg-clip-text text-transparent">
            {portfolioData.personal.name}
          </span>
        </h1>

        {/* Dynamic Headline */}
        <p className="mt-4 text-lg sm:text-xl md:text-2xl font-semibold text-slate-700 dark:text-slate-300 max-w-3xl flex items-center justify-center gap-2 flex-wrap">
          <span className="text-blue-600 dark:text-cyan-400">Aspiring AI Engineer</span>
          <span className="text-slate-400 dark:text-slate-600">|</span>
          <span className="text-indigo-600 dark:text-blue-300">Data Science Enthusiast</span>
          <span className="text-slate-400 dark:text-slate-600">|</span>
          <span className="text-purple-600 dark:text-purple-400">Problem Solver</span>
        </p>

        {/* Engaging Introduction */}
        <p className="mt-5 text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          {portfolioData.personal.intro}
        </p>

        {/* Location & Quick Meta */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-rose-500" />
            {portfolioData.personal.location}
          </span>
          <span>&bull;</span>
          <span className="flex items-center gap-1.5">
            <Cpu className="w-4 h-4 text-blue-500" />
            B.Tech in AI & Data Science
          </span>
        </div>

        {/* Action Buttons: Explore Projects & Download Resume */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="group flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 active:scale-95 transition-all duration-200"
          >
            Explore My Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            onClick={onOpenResume}
            className="group flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-slate-800 dark:text-white bg-white/80 dark:bg-slate-900/80 hover:bg-white dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:border-blue-500/50 dark:hover:border-cyan-400/50 shadow-md backdrop-blur-md active:scale-95 transition-all duration-200"
          >
            <Download className="w-4 h-4 text-blue-500 group-hover:-translate-y-0.5 transition-transform" />
            Download Resume
          </button>
        </div>

        {/* Quick Social Badges */}
        <div className="mt-8 flex items-center gap-3">
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-3 rounded-xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-600 hover:scale-110 shadow-sm transition-all duration-200"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-3 rounded-xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:border-blue-400/50 hover:scale-110 shadow-sm transition-all duration-200"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${portfolioData.personal.email}`}
            aria-label="Send Email"
            className="p-3 rounded-xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-rose-500 dark:hover:text-rose-400 hover:border-rose-400/50 hover:scale-110 shadow-sm transition-all duration-200"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Key Metrics / Stats Bar */}
        <div className="mt-14 w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {portfolioData.stats.map((stat, i) => (
            <div
              key={i}
              className="p-4 sm:p-5 rounded-2xl bg-white/70 dark:bg-[#0c1426]/70 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:border-blue-500/40 dark:hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
