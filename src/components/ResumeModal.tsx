import React from 'react';
import { X, Download, FileText, CheckCircle2, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';
import { useToast } from './Toast';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { showToast } = useToast();

  if (!isOpen) return null;

  const handleDownload = () => {
    // Launch confetti celebration
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#3b82f6', '#06b6d4', '#8b5cf6', '#10b981'],
    });

    showToast("Resume downloaded successfully! Thank you for reviewing.", "success");

    // Download actual PDF
    const link = document.createElement('a');
    link.href = portfolioData.personal.resumeUrl;
    link.download = 'Pranav_Mukund_Deshmukh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl bg-white dark:bg-[#0c1324] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden text-slate-800 dark:text-slate-100"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-[#080d1a]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-500/10 text-brand-blue">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight">Curriculum Vitae Preview</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {portfolioData.personal.name} &bull; AI & DS Engineering Student
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-md shadow-blue-500/20 transition-all duration-200 active:scale-95"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body / Resume Preview Document */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 text-sm bg-slate-100/50 dark:bg-[#070b16]">
          <div className="max-w-3xl mx-auto bg-white dark:bg-[#0f172a] p-8 md:p-10 rounded-xl shadow-md border border-slate-200 dark:border-slate-800 space-y-6">
            {/* Header Document Area */}
            <div className="text-center pb-5 border-b border-slate-200 dark:border-slate-800">
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                {portfolioData.personal.name}
              </h1>
              <p className="text-blue-600 dark:text-brand-blue font-semibold text-sm mt-1">
                {portfolioData.personal.profession}
              </p>
              <div className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
                <span>{portfolioData.personal.email}</span>
                <span>&bull;</span>
                <span>{portfolioData.personal.location}</span>
                <span>&bull;</span>
                <a 
                  href={portfolioData.personal.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-blue-500 flex items-center gap-1"
                >
                  LinkedIn <ExternalLink className="w-3 h-3" />
                </a>
                <span>&bull;</span>
                <a 
                  href={portfolioData.personal.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-blue-500 flex items-center gap-1"
                >
                  GitHub <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Objective */}
            <div>
              <h2 className="text-xs uppercase font-bold tracking-widest text-blue-600 dark:text-cyan-400 mb-2">
                Career Objective & Summary
              </h2>
              <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                {portfolioData.personal.aboutDetailed}
              </p>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs uppercase font-bold tracking-widest text-blue-600 dark:text-cyan-400 mb-2">
                Education
              </h2>
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-xs text-slate-900 dark:text-white">
                      {portfolioData.education[0].institution}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300">
                      {portfolioData.education[0].degree} - {portfolioData.education[0].branch}
                    </p>
                  </div>
                  <span className="text-xs text-slate-500 font-mono">
                    {portfolioData.education[0].period}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  <span className="font-semibold">Relevant Coursework: </span>
                  {portfolioData.education[0].courses.join(", ")}
                </p>
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-xs uppercase font-bold tracking-widest text-blue-600 dark:text-cyan-400 mb-2">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="font-bold text-slate-900 dark:text-white">Programming: </span>
                  <span className="text-slate-600 dark:text-slate-300">Python, Java, C++</span>
                </div>
                <div>
                  <span className="font-bold text-slate-900 dark:text-white">AI & Machine Learning: </span>
                  <span className="text-slate-600 dark:text-slate-300">Machine Learning, Deep Learning, NLP</span>
                </div>
                <div>
                  <span className="font-bold text-slate-900 dark:text-white">Data Science: </span>
                  <span className="text-slate-600 dark:text-slate-300">NumPy, Pandas, Matplotlib, Data Analysis</span>
                </div>
                <div>
                  <span className="font-bold text-slate-900 dark:text-white">Databases & Tools: </span>
                  <span className="text-slate-600 dark:text-slate-300">SQL, MySQL, Git, GitHub, VS Code, Jupyter</span>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div>
              <h2 className="text-xs uppercase font-bold tracking-widest text-blue-600 dark:text-cyan-400 mb-2">
                Featured Projects
              </h2>
              <div className="space-y-3">
                {portfolioData.projects.map((p) => (
                  <div key={p.id} className="border-l-2 border-blue-500/50 pl-3">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-xs text-slate-900 dark:text-white">
                        {p.title}
                      </h3>
                      <span className="text-[11px] text-blue-600 dark:text-blue-400 font-mono">
                        {p.badge}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5">
                      {p.description}
                    </p>
                    <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-1">
                      <span className="font-semibold text-slate-500 dark:text-slate-400">Tech:</span> {p.technologies.join(", ")}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Achievements */}
            <div>
              <h2 className="text-xs uppercase font-bold tracking-widest text-blue-600 dark:text-cyan-400 mb-2">
                Achievements & Activities
              </h2>
              <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                {portfolioData.achievements.map((ach, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                    <span><strong>{ach.title}:</strong> {ach.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#080d1a] text-xs text-slate-500">
          <span>Actual file size: ~5 KB (Direct PDF)</span>
          <button
            onClick={handleDownload}
            className="text-blue-600 dark:text-brand-blue hover:underline font-semibold flex items-center gap-1"
          >
            <Download className="w-3.5 h-3.5" /> Direct PDF Download
          </button>
        </div>
      </div>
    </div>
  );
};
