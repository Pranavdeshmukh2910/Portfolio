import React, { useState } from 'react';
import { Briefcase, Award, Presentation, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

type ViewTab = 'experience' | 'certifications' | 'workshops';

export const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ViewTab>('certifications');

  return (
    <section id="experience" className="py-20 relative bg-slate-50/50 dark:bg-[#080d1a]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            Experience & Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Certifications, Practical Work & Workshops
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Practical development milestones, professional learning certifications, and technical symposium engagements.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center mb-10">
          <div className="p-1 rounded-2xl bg-white dark:bg-[#0c1324] border border-slate-200 dark:border-slate-800 shadow-sm inline-flex">
            <button
              onClick={() => setActiveTab('certifications')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === 'certifications'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                  : 'text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white'
              }`}
            >
              <Award className="w-4 h-4" />
              Certifications ({portfolioData.certifications.length})
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === 'experience'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                  : 'text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              Practical Experience ({portfolioData.experience.length})
            </button>
            <button
              onClick={() => setActiveTab('workshops')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === 'workshops'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                  : 'text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white'
              }`}
            >
              <Presentation className="w-4 h-4" />
              Workshops & Seminars
            </button>
          </div>
        </div>

        {/* Tab 1: Certifications */}
        {activeTab === 'certifications' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
            {portfolioData.certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-[#0c1324] border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 dark:hover:border-cyan-500/40 shadow-sm transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-500/10 text-blue-600 dark:text-cyan-400 border border-blue-500/20">
                      {cert.category}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">{cert.period}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3">
                    Issued by: {cert.issuer}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {cert.description}
                  </p>
                </div>

                <div>
                  <div className="text-[11px] uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500 mb-2">
                    Skills Covered:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsGained.map((sk) => (
                      <span
                        key={sk}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Practical Experience */}
        {activeTab === 'experience' && (
          <div className="space-y-6 max-w-4xl mx-auto animate-fade-in">
            {portfolioData.experience.map((exp, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0c1324] border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 dark:hover:border-cyan-500/40 shadow-sm transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-1.5">
                      {exp.type}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-blue-600 dark:text-cyan-400">
                      {exp.organization}
                    </p>
                  </div>

                  <div className="flex sm:flex-col items-start sm:items-end gap-2 text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-blue-500" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 mt-4">
                  {exp.contributions.map((con, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                      <span>{con}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Workshops & Seminars */}
        {activeTab === 'workshops' && (
          <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0c1324] border border-slate-200 dark:border-slate-800 shadow-sm space-y-5 animate-fade-in">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Presentation className="w-5 h-5 text-blue-500" />
              Technical Seminars, Bootcamps & Hackathons
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Actively participating in university workshops, code sprints, and technology hackathons to test ideas against real constraints.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#070b16] border border-slate-200 dark:border-slate-800">
                <span className="text-[11px] font-mono text-blue-600 dark:text-cyan-400 uppercase font-bold">RCPIT Campus Hackathon</span>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white mt-1">AI Solution Sprint</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  Collaborative 24-hour sprint developing algorithmic seating optimization and biometric verification prototypes.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#070b16] border border-slate-200 dark:border-slate-800">
                <span className="text-[11px] font-mono text-blue-600 dark:text-cyan-400 uppercase font-bold">Hands-On Bootcamp</span>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white mt-1">Deep Learning & Computer Vision</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  Intensive laboratory training on CNNs, OpenCV image operations, and GPU-accelerated model training.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
