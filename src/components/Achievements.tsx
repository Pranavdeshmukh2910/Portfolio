import React from 'react';
import { Trophy, Code, Presentation, GraduationCap, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Code: <Code className="w-6 h-6 text-blue-500" />,
    Presentation: <Presentation className="w-6 h-6 text-cyan-500" />,
    Trophy: <Trophy className="w-6 h-6 text-amber-500" />,
    GraduationCap: <GraduationCap className="w-6 h-6 text-purple-500" />,
  };

  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5" />
            Key Milestones
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Honors, Achievements & Participation
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Tangible highlights reflecting problem-solving consistency, academic performance, and technical showcase participation.
          </p>
        </div>

        {/* Achievement Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.achievements.map((item, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-2xl bg-white dark:bg-[#0c1324] border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 dark:hover:border-cyan-500/40 shadow-sm transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 group-hover:scale-110 transition-transform shadow-sm">
                    {iconMap[item.iconName] || <Trophy className="w-6 h-6 text-blue-500" />}
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                    {item.date}
                  </span>
                </div>

                <span className="text-[11px] font-mono uppercase font-bold text-blue-600 dark:text-cyan-400 tracking-wider block mb-1">
                  {item.category}
                </span>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                Verified Student Milestone
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
