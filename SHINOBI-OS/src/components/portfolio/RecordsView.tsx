import React from 'react';
import { Briefcase, GraduationCap, Award, ExternalLink } from 'lucide-react';
import { experience, education, achievements } from '@/data/timeline';
import { Card, SectionHeader } from '@/components/ui';
import {
  ScrollIcon,
  InkanStamp,
  CornerBrackets,
  BoltHardware,
} from '@/components/ui/ShinobiIcons';

export const RecordsView: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      {/* View Header with SectionHeader Primitive */}
      <SectionHeader
        icon={<ScrollIcon className="w-4 h-4 text-emerald-400" />}
        title="SHINOBI SERVICE ARCHIVE // CAREER & ACADEMY CHRONICLES"
        subtitle="Verified shinobi operational service history, software engineering milestones, and Academy credentials."
      />

      {/* Section 1: Professional Experience */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider">
          <Briefcase className="w-4 h-4 text-emerald-400" />
          <h2>// ACTIVE SERVICE COMMISSIONS & FIELD EXPERIENCE</h2>
        </div>

        <div className="relative pl-6 sm:pl-8 border-l-2 border-[#242E42] space-y-6">
          {experience.map((exp) => (
            <div key={exp.id} className="relative space-y-2">
              {/* Timeline Pip Styled as Seal Knot */}
              <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#0B0E14] border-2 border-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </span>

              <Card
                variant="elevated"
                padding="md"
                className="relative overflow-hidden space-y-3 bg-gradient-to-b from-[#121824] via-[#0F1420] to-[#0A0D15] border border-[#242E42] shadow-[0_6px_24px_rgba(0,0,0,0.5)] border-t-2 border-t-emerald-500/50"
              >
                <CornerBrackets position="tl" className="border-slate-500/40" />
                <CornerBrackets position="tr" className="border-slate-500/40" />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-[#1A2234] pb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <BoltHardware className="w-1.5 h-1.5" />
                      <h3 className="text-base font-mono font-bold text-slate-100">
                        {exp.roleTitle}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm font-mono text-emerald-400 mt-0.5">
                      {exp.organization}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 sm:text-right mt-1 sm:mt-0">
                    <InkanStamp text="任" variant="emerald" />
                    <div>
                      <span className="text-xs font-mono text-slate-300 block">
                        {exp.startDate} — {exp.isCurrent ? 'Present' : exp.endDate}
                      </span>
                      <span className="text-[11px] font-mono text-slate-500">
                        {exp.location}
                      </span>
                    </div>
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
                        <span className="text-emerald-400 mt-0.5 font-bold">▹</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#1A2234]">
                  {exp.techStackUsed.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#0E121B] text-slate-300 border border-[#1B2232]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Education */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider">
          <GraduationCap className="w-4 h-4 text-cyan-400" />
          <h2>// ACADEMY GRADUATION & FORMAL DISCIPLINES</h2>
        </div>

        <div className="relative pl-6 sm:pl-8 border-l-2 border-[#242E42] space-y-6">
          {education.map((edu) => (
            <div key={edu.id} className="relative space-y-2">
              <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#0B0E14] border-2 border-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.5)] flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              </span>

              <Card
                variant="elevated"
                padding="md"
                className="relative overflow-hidden space-y-3 bg-gradient-to-b from-[#121824] via-[#0F1420] to-[#0A0D15] border border-[#242E42] shadow-[0_6px_24px_rgba(0,0,0,0.5)] border-t-2 border-t-cyan-500/50"
              >
                <CornerBrackets position="tl" className="border-slate-500/40" />
                <CornerBrackets position="tr" className="border-slate-500/40" />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-[#1A2234] pb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <BoltHardware className="w-1.5 h-1.5" />
                      <h3 className="text-base font-mono font-bold text-slate-100">
                        {edu.degree}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm font-mono text-cyan-400 mt-0.5">
                      {edu.fieldOfStudy}
                    </p>
                    <p className="text-xs text-slate-400">
                      {edu.institution}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 sm:text-right mt-1 sm:mt-0">
                    <InkanStamp text="学" variant="emerald" />
                    <div>
                      <span className="text-xs font-mono text-slate-300 block">
                        {edu.startDate} — {edu.isCurrent ? 'Present (Expected 2026)' : edu.endDate}
                      </span>
                      <span className="text-[11px] font-mono text-slate-500">
                        {edu.location}
                      </span>
                    </div>
                  </div>
                </div>

                {edu.thematicAcademyLabel && (
                  <p className="text-xs font-mono text-slate-500 italic">
                    Academy Track: {edu.thematicAcademyLabel}
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
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#0E121B] text-slate-300 border border-[#1B2232]"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Verified Achievements */}
      {achievements.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-amber-400 font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider">
            <Award className="w-4 h-4 text-amber-400" />
            <h2>// SCROLLS OF MERIT & HONORS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((ach) => (
              <Card
                key={ach.id}
                variant="elevated"
                padding="md"
                className="relative overflow-hidden space-y-2 bg-gradient-to-b from-[#121824] via-[#0F1420] to-[#0A0D15] border border-[#242E42] shadow-[0_6px_24px_rgba(0,0,0,0.5)] border-t-2 border-t-amber-500/50"
              >
                <CornerBrackets position="tl" className="border-slate-500/40" />
                <CornerBrackets position="tr" className="border-slate-500/40" />

                <div className="flex items-start justify-between gap-2 border-b border-[#1A2234] pb-2">
                  <div className="flex items-center gap-1.5">
                    <BoltHardware className="w-1.5 h-1.5" />
                    <h3 className="text-sm font-mono font-bold text-slate-100">
                      {ach.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <InkanStamp text="誉" variant="amber" />
                    {ach.proofUrl && (
                      <a
                        href={ach.proofUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-emerald-400 transition-colors p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg focus-visible:outline-2 focus-visible:outline-emerald-500"
                        aria-label={`Proof for ${ach.title}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-xs text-slate-400 font-sans">
                  {ach.description}
                </p>
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-1 border-t border-[#161D2D]">
                  <span>{ach.issuingBody}</span>
                  <span>{ach.dateAwarded}</span>
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
