import React, { useState } from 'react';
import { Mail, MapPin, Send, Copy, Check, MessageSquare, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';
import { useToast } from './Toast';

export const Contact: React.FC = () => {
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const quickSubjects = [
    'Internship Opportunity',
    'AI / ML Project Inquiry',
    'Software Engineering Role',
    'Technical Collaboration'
  ];

  const handleSelectQuickSubject = (subj: string) => {
    setFormData(prev => ({ ...prev, subject: subj }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopiedEmail(true);
    showToast("Email address copied to clipboard!", "success");
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please provide a subject.';
    if (!formData.message.trim()) {
      errs.message = 'Please write a message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters long.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const endpoint = portfolioData.contactConfig.formspreeEndpoint;
      if (endpoint && endpoint.trim().length > 0) {
        // Send via configured endpoint
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error('Form service response error');
        }
      } else {
        // Direct client mailto fallback trigger
        const mailtoLink = `mailto:${portfolioData.personal.email}?subject=${encodeURIComponent(
          portfolioData.contactConfig.subjectPrefix + formData.subject
        )}&body=${encodeURIComponent(
          `Sender: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
        )}`;
        
        // Open default mail client
        window.open(mailtoLink, '_blank');
      }

      // Trigger celebration confetti
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#3b82f6', '#06b6d4', '#10b981', '#a855f7'],
      });

      showToast("Message prepared & sent! Thank you for getting in touch.", "success");
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    } catch {
      showToast("Could not send directly via endpoint. Triggering email client instead...", "info");
      const mailtoLink = `mailto:${portfolioData.personal.email}?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(formData.message)}`;
      window.location.href = mailtoLink;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-50/50 dark:bg-[#080d1a]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            Let's Connect
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Get in Touch for Opportunities
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Interested in hiring me for internships, discussing AI/Data Science projects, or collaborating? Reach out directly via the form or my social channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Contact Information
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              I am based in Shirpur, Maharashtra and open to on-site, hybrid, and remote internship opportunities across India and globally.
            </p>

            {/* Email Card with Copy button */}
            <div className="p-5 rounded-2xl bg-white dark:bg-[#0c1324] border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between gap-3">
              <div className="flex items-center gap-3.5 overflow-hidden">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-600 dark:text-cyan-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-xs text-slate-400 block font-medium">Email Address</span>
                  <a
                    href={`mailto:${portfolioData.personal.email}`}
                    className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-cyan-400 transition-colors truncate block"
                  >
                    {portfolioData.personal.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0"
                title="Copy Email"
                aria-label="Copy Email Address"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* LinkedIn Card */}
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white dark:bg-[#0c1324] border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between gap-3 group hover:border-blue-500/40 transition-all"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-600 dark:text-cyan-400 shrink-0 group-hover:scale-110 transition-transform">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">LinkedIn Profile</span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                    linkedin.com/in/pranav-deshmukh
                  </span>
                </div>
              </div>
              <span className="text-xs text-blue-600 dark:text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform">
                Connect &rarr;
              </span>
            </a>

            {/* GitHub Card */}
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white dark:bg-[#0c1324] border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between gap-3 group hover:border-blue-500/40 transition-all"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 shrink-0 group-hover:scale-110 transition-transform">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">GitHub Repositories</span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                    github.com/Pranavdeshmukh2910
                  </span>
                </div>
              </div>
              <span className="text-xs text-blue-600 dark:text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform">
                Follow &rarr;
              </span>
            </a>

            {/* Location Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-[#0c1324] border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-3.5">
              <div className="p-3 rounded-xl bg-rose-500/10 text-rose-500 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block font-medium">Academic Campus & Base</span>
                <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                  {portfolioData.personal.collegeFull}, {portfolioData.personal.location}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0c1324] border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
                Fill out the form below or pick a quick topic to initiate a conversation.
              </p>

              {/* Quick Topic Chips */}
              <div className="mb-6">
                <span className="text-xs font-semibold text-slate-400 block mb-2">
                  Quick Topics:
                </span>
                <div className="flex flex-wrap gap-2">
                  {quickSubjects.map(qs => (
                    <button
                      key={qs}
                      type="button"
                      onClick={() => handleSelectQuickSubject(qs)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                        formData.subject === qs
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                      }`}
                    >
                      + {qs}
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-[#080d1a] border text-slate-900 dark:text-white focus:outline-none focus:ring-2 ${
                        errors.name
                          ? 'border-rose-500 focus:ring-rose-500/40'
                          : 'border-slate-200 dark:border-slate-800 focus:ring-blue-500/40'
                      }`}
                    />
                    {errors.name && (
                      <span className="text-[11px] text-rose-500 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. rahul@company.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-[#080d1a] border text-slate-900 dark:text-white focus:outline-none focus:ring-2 ${
                        errors.email
                          ? 'border-rose-500 focus:ring-rose-500/40'
                          : 'border-slate-200 dark:border-slate-800 focus:ring-blue-500/40'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-rose-500 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Subject <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. AI / Machine Learning Internship Discussion"
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-[#080d1a] border text-slate-900 dark:text-white focus:outline-none focus:ring-2 ${
                      errors.subject
                        ? 'border-rose-500 focus:ring-rose-500/40'
                        : 'border-slate-200 dark:border-slate-800 focus:ring-blue-500/40'
                    }`}
                  />
                  {errors.subject && (
                    <span className="text-[11px] text-rose-500 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" /> {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Hello Pranav, I came across your portfolio projects and would love to discuss an internship opportunity..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-[#080d1a] border text-slate-900 dark:text-white focus:outline-none focus:ring-2 ${
                      errors.message
                        ? 'border-rose-500 focus:ring-rose-500/40'
                        : 'border-slate-200 dark:border-slate-800 focus:ring-blue-500/40'
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[11px] text-rose-500 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-blue-500/25 active:scale-98 transition-all duration-200 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
