import React, { useState } from 'react';
import { X, ExternalLink, Check, Copy, Sparkles, Layers, Terminal } from 'lucide-react';
import { GithubIcon } from './Icons';
import type { Project } from '../data/portfolioData';
import { useToast } from './Toast';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [copied, setCopied] = useState(false);
  const { showToast } = useToast();

  if (!project) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(project.githubUrl);
    setCopied(true);
    showToast("GitHub URL copied to clipboard!", "info");
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-2xl bg-white dark:bg-[#0d1424] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden text-slate-800 dark:text-slate-100"
        onClick={e => e.stopPropagation()}
      >
        {/* Banner with gradient */}
        <div className={`p-6 md:p-8 bg-gradient-to-r ${project.gradient} text-white relative`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            {project.badge}
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            {project.title}
          </h2>
          <p className="text-white/80 text-sm mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 text-sm">
          {/* Detailed Overview */}
          <div>
            <h3 className="text-xs uppercase font-bold tracking-wider text-blue-600 dark:text-cyan-400 mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4" /> System Overview & Methodology
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
              {project.longDescription}
            </p>
          </div>

          {/* Key Engineering Highlights */}
          <div className="bg-slate-50 dark:bg-[#070b16] p-5 rounded-xl border border-slate-200 dark:border-slate-800/80">
            <h4 className="text-xs uppercase font-bold tracking-wider text-slate-700 dark:text-slate-300 mb-3">
              Key Engineering Highlights & Results
            </h4>
            <ul className="space-y-2">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-600 dark:text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xs uppercase font-bold tracking-wider text-blue-600 dark:text-cyan-400 mb-2.5 flex items-center gap-2">
              <Terminal className="w-4 h-4" /> Technologies & Frameworks
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <span 
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#090e1c]">
          <button
            onClick={handleCopyLink}
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
            {copied ? "Link Copied!" : "Copy Repo Link"}
          </button>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 shadow transition-all duration-200"
            >
              <GithubIcon className="w-4 h-4" />
              View on GitHub
            </a>
            {project.liveUrl && project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-md shadow-blue-500/20 transition-all duration-200"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
