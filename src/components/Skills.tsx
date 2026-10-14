import React, { useState } from 'react';
import { Cpu, Search, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

type CategoryFilter = 'All' | 'Programming' | 'AI & Machine Learning' | 'Data Science' | 'Tools' | 'Databases';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { label: CategoryFilter }[] = [
    { label: 'All' },
    { label: 'Programming' },
    { label: 'AI & Machine Learning' },
    { label: 'Data Science' },
    { label: 'Tools' },
    { label: 'Databases' },
  ];

  const filteredSkills = portfolioData.skills.filter((skill) => {
    const matchesCategory = activeCategory === 'All' || skill.category === activeCategory;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getBadgeStyle = (level: string) => {
    switch (level) {
      case 'Proficient':
        return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20';
      case 'Intermediate':
        return 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20';
      default:
        return 'bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20';
    }
  };

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'Programming':
        return 'from-blue-600 to-indigo-600';
      case 'AI & Machine Learning':
        return 'from-purple-600 to-indigo-600';
      case 'Data Science':
        return 'from-cyan-600 to-blue-600';
      case 'Tools':
        return 'from-amber-600 to-orange-600';
      case 'Databases':
        return 'from-emerald-600 to-teal-600';
      default:
        return 'from-blue-600 to-cyan-600';
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            Technical Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills, Frameworks & Tooling
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Organized across core computer science disciplines, machine learning pipelines, and data manipulation suites. All levels reflect practical project experience.
          </p>
        </div>

        {/* Filter Tabs & Search Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            {categories.map((cat) => (
              <button
                key={cat.label}
                onClick={() => setActiveCategory(cat.label)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat.label
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20 scale-105'
                    : 'bg-white dark:bg-[#0c1324] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search skill (e.g. Python, SQL)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl text-xs sm:text-sm bg-white dark:bg-[#0c1324] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="group p-5 rounded-2xl bg-white dark:bg-[#0c1324] border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 dark:hover:border-cyan-500/40 shadow-sm transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Header: Skill Name & Category + Level */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      {skill.category}
                    </span>
                  </div>

                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${getBadgeStyle(
                      skill.level
                    )}`}
                  >
                    {skill.level}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {skill.description}
                </p>
              </div>

              {/* Progress Indicator */}
              <div>
                <div className="flex justify-between items-center text-xs mb-1.5 font-medium">
                  <span className="text-slate-500 dark:text-slate-400">Mastery Index</span>
                  <span className="font-mono text-slate-700 dark:text-slate-300">{skill.percentage}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800/80 overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${getCategoryColor(
                      skill.category
                    )} transition-all duration-1000`}
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 text-slate-500 dark:text-slate-400 text-sm">
            No technical skills found matching "{searchQuery}".
          </div>
        )}

        {/* Note on Skill Proficiency */}
        <div className="mt-10 p-4 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/50 dark:border-blue-900/30 text-xs text-slate-600 dark:text-slate-400 flex items-center justify-between flex-wrap gap-2">
          <span className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-500 shrink-0" />
            All proficiencies are calibrated honestly based on actual project implementations and academic coursework.
          </span>
          <span className="text-slate-500 dark:text-slate-400 italic">
            Configurable in <code className="text-blue-600 dark:text-cyan-400">portfolioData.ts</code>
          </span>
        </div>
      </div>
    </section>
  );
};
