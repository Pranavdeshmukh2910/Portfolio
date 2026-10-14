import React from 'react';
import { Brain, BarChart3, Code2, Database, GraduationCap, MapPin, Target, Sparkles, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Brain: <Brain className="w-6 h-6 text-blue-500" />,
    BarChart3: <BarChart3 className="w-6 h-6 text-cyan-500" />,
    Code2: <Code2 className="w-6 h-6 text-purple-500" />,
    Database: <Database className="w-6 h-6 text-emerald-500" />,
  };

  return (
    <section id="about" className="py-20 relative bg-slate-50/50 dark:bg-[#080d1a]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Engineering Tomorrow’s Intelligence With Data & Code
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            A closer look into my technical background, academic journey, and what fuels my passion for Artificial Intelligence and Software Engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Personal Narrative & Quick Identity Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0c1324] border border-slate-200 dark:border-slate-800 shadow-sm leading-relaxed text-slate-700 dark:text-slate-300 space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                Hello! I'm <span className="text-blue-600 dark:text-cyan-400">{portfolioData.personal.name}</span>
              </h3>
              <p className="text-sm sm:text-base">
                I am an Artificial Intelligence & Data Science Engineering student at{' '}
                <strong className="text-slate-900 dark:text-white font-semibold">
                  {portfolioData.personal.collegeFull}
                </strong>
                . I enjoy programming, data analysis, machine learning, and developing practical technology solutions.
              </p>
              <p className="text-sm sm:text-base">
                My technical philosophy centers on mathematical curiosity combined with disciplined software engineering. Rather than treating ML models as black boxes, I focus on understanding algorithm mechanics, feature relationships, and computational efficiency to craft systems that solve real problems.
              </p>
              <p className="text-sm sm:text-base">
                Whether it is building predictive models for resale valuations, engineering computer vision pipelines for diabetic retinopathy diagnosis, or designing greedy & backtracking engines for conflict-free exam allocations, I am enthusiastic about transforming ideas into tangible code.
              </p>

              {/* Highlights checkmarks */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Analytical Problem Solver</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Hands-on Machine Learning</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Clean & Structured Code</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Quick Learner & Collaborator</span>
                </div>
              </div>
            </div>

            {/* Quick At-A-Glance Card */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-xl bg-white dark:bg-[#0c1324] border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">College</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">R.C. Patel Institute of Tech</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-[#0c1324] border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">Location</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">{portfolioData.personal.location}</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-[#0c1324] border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                <Target className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">Target Roles</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">AI / ML & SDE Intern</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Technical Pillars */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Core Technical Pillars
            </h3>
            {portfolioData.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="group p-5 rounded-2xl bg-white dark:bg-[#0c1324] border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 dark:hover:border-cyan-500/40 shadow-sm transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 group-hover:scale-110 transition-transform">
                    {iconMap[pillar.icon]}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
