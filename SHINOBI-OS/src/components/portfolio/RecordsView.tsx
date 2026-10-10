import React from 'react';
import { History, Briefcase, GraduationCap, Award, ExternalLink } from 'lucide-react';
import { experience, education, achievements } from '@/data/timeline';

export const RecordsView: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      {/* View Header */}
      <div className="border-b border-[#1B2232] pb-4">
        <div className="flex items-center gap-2">
          <History className="w-4 h-4 text-emerald-400" />
          <h1 className="text-lg sm:text-xl font-mono font-bold text-slate-100 tracking-wide">
            SHINOBI ARCHIVE // CAREER & ACADEMY RECORDS
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Verified tactical service history, professional engineering milestones, and formal academic training.
        </p>
      </div>

      {/* Section 1: Professional Experience */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-emerald-400 font-mono text-sm font-semibold uppercase tracking-wider">
          <Briefcase className="w-4 h-4" />
          <h2>Operational Experience</h2>
        </div>

        <div className="relative pl-6 sm:pl-8 border-l-2 border-[#1B2232] space-y-6">
          {experience.map((exp) => (
            <div key={exp.id} className="relative space-y-2">
              {/* Timeline Pip */}
              <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#07080C] border-2 border-emerald-500" />

              <div className="p-5 rounded-xl bg-[#0B0E14] border border-[#1B2232] space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-[#161D2D] pb-3">
                  <div>
                    <h3 className="text-base font-mono font-bold text-slate-100">
                      {exp.roleTitle}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-emerald-400">
                      {exp.organization}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono text-slate-400 block">
                      {exp.startDate} — {exp.isCurrent ? 'Present' : exp.endDate}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                  {exp.summary}
                </p>

                {/* Key Responsibilities */}
                {exp.responsibilities && exp.responsibilities.length > 0 && (
                  <ul className="space-y-1.5 pt-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-xs text-slate-400 flex items-start gap-2">
                        <span className="text-emerald-500 mt-0.5">▹</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#161D2D]">
                  {exp.techStackUsed.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#111622] text-slate-300 border border-[#1B2232]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Education */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm font-semibold uppercase tracking-wider">
          <GraduationCap className="w-4 h-4" />
          <h2>Academy Credentials & Education</h2>
        </div>

        <div className="relative pl-6 sm:pl-8 border-l-2 border-[#1B2232] space-y-6">
          {education.map((edu) => (
            <div key={edu.id} className="relative space-y-2">
              <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#07080C] border-2 border-cyan-500" />

              <div className="p-5 rounded-xl bg-[#0B0E14] border border-[#1B2232] space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-[#161D2D] pb-3">
                  <div>
                    <h3 className="text-base font-mono font-bold text-slate-100">
                      {edu.degree}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-cyan-400">
                      {edu.fieldOfStudy}
                    </p>
                    <p className="text-xs text-slate-400">
                      {edu.institution}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono text-slate-400 block">
                      {edu.startDate} — {edu.isCurrent ? 'Present (Expected 2026)' : edu.endDate}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">
                      {edu.location}
                    </span>
                  </div>
                </div>

                {edu.thematicAcademyLabel && (
                  <p className="text-xs font-mono text-slate-500 italic">
                    Division: {edu.thematicAcademyLabel}
                  </p>
                )}

                {/* Coursework */}
                {edu.relevantCoursework && edu.relevantCoursework.length > 0 && (
                  <div>
                    <span className="text-xs font-mono text-slate-400 block mb-1.5">
                      Core Foundations:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.relevantCoursework.map((course) => (
                        <span
                          key={course}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#111622] text-slate-300 border border-[#1B2232]"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Verified Achievements */}
      {achievements.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-amber-400 font-mono text-sm font-semibold uppercase tracking-wider">
            <Award className="w-4 h-4" />
            <h2>Scrolls of Merit & Open Source</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((ach) => (
              <div
                key={ach.id}
                className="p-4 rounded-xl bg-[#0B0E14] border border-[#1B2232] space-y-2"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-sm font-mono font-bold text-slate-100">
                    {ach.title}
                  </h3>
                  {ach.proofUrl && (
                    <a
                      href={ach.proofUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-emerald-400 transition-colors p-1"
                      aria-label={`Proof for ${ach.title}`}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
                <p className="text-xs text-slate-400">
                  {ach.description}
                </p>
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-1">
                  <span>{ach.issuingBody}</span>
                  <span>{ach.dateAwarded}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
