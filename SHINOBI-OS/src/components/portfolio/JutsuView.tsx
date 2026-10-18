import React from 'react';
import { Code, Database, Cloud, Sparkles } from 'lucide-react';
import { skillCategories } from '@/data/skills';
import { getSkillsByDiscipline } from '@/data/index';
import { Badge, Card, SectionHeader } from '@/components/ui';
import type { JutsuDiscipline } from '@/types/schema';
import {
  ChakraSpark,
  CornerBrackets,
  InkanStamp,
  BoltHardware,
} from '@/components/ui/ShinobiIcons';

export interface JutsuViewProps {
  onNavigateToMission?: (projectId: string) => void;
}

const DISCIPLINE_ICONS: Record<JutsuDiscipline, React.ComponentType<{ className?: string }>> = {
  ninjutsu: Code,
  taijutsu: Database,
  fuinjutsu: Cloud,
  genjutsu: Sparkles,
};

const DISCIPLINE_META: Record<
  JutsuDiscipline,
  { kanji: string; accentBorder: string; stampVariant: 'emerald' | 'amber' | 'crimson' }
> = {
  ninjutsu: { kanji: '忍', accentBorder: 'border-t-2 border-t-emerald-500/60', stampVariant: 'emerald' },
  taijutsu: { kanji: '体', accentBorder: 'border-t-2 border-t-amber-500/60', stampVariant: 'amber' },
  fuinjutsu: { kanji: '封', accentBorder: 'border-t-2 border-t-cyan-500/60', stampVariant: 'emerald' },
  genjutsu: { kanji: '幻', accentBorder: 'border-t-2 border-t-rose-500/60', stampVariant: 'crimson' },
};

export const JutsuView: React.FC<JutsuViewProps> = ({ onNavigateToMission }) => {
  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      {/* Header with SectionHeader Primitive */}
      <SectionHeader
        icon={<ChakraSpark className="w-4 h-4 text-emerald-400" />}
        title="CLASSIFIED JUTSU ARCHIVE // TECHNICAL MASTERY SCROLLS"
        subtitle="Categorized software arts, full-stack runtimes, cloud sealing formulas, and sensory engineering."
      />

      {/* Quadrants Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category) => {
          const Icon = DISCIPLINE_ICONS[category.id] || ChakraSpark;
          const meta = DISCIPLINE_META[category.id];
          const categorySkills = getSkillsByDiscipline(category.id);

          return (
            <Card
              key={category.id}
              variant="elevated"
              padding="md"
              className={`relative overflow-hidden space-y-4 bg-gradient-to-b from-[#121824] via-[#0F1420] to-[#0A0D15] border border-[#242E42] shadow-[0_6px_24px_rgba(0,0,0,0.5)] transition-all ${meta.accentBorder}`}
            >
              {/* Tactical Corner Brackets */}
              <CornerBrackets position="tl" className="border-slate-500/40" />
              <CornerBrackets position="tr" className="border-slate-500/40" />
              <CornerBrackets position="bl" className="border-slate-500/40" />
              <CornerBrackets position="br" className="border-slate-500/40" />

              {/* Kanji Discipline Seal Watermark */}
              <span
                className="absolute right-3 top-2 font-serif font-black text-6xl text-slate-700/10 select-none pointer-events-none"
                aria-hidden="true"
              >
                {meta.kanji}
              </span>

              {/* Category Header */}
              <div className="flex items-start justify-between gap-3 border-b border-[#1A2234] pb-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <BoltHardware className="w-1.5 h-1.5" />
                    <Icon className="w-4 h-4 text-emerald-400" />
                    <h2 className="text-sm font-mono font-bold text-slate-100">
                      {category.title}
                    </h2>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400/90 block">
                    {category.thematicLabel}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <InkanStamp text={meta.kanji} variant={meta.stampVariant} />
                  <span className="text-xs font-mono text-slate-400 bg-[#0E121B] px-2 py-0.5 rounded border border-[#1B2232]">
                    {categorySkills.length} Jutsu
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                {category.description}
              </p>

              {/* Skills List */}
              {categorySkills.length === 0 ? (
                <p className="text-xs text-slate-500 font-mono italic">No registered jutsu in this sector.</p>
              ) : (
                <div className="space-y-2.5">
                  {categorySkills.map((skill) => (
                    <div
                      key={skill.id}
                      className="p-2.5 rounded-lg bg-[#111622] border border-[#1B2232] flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-medium text-slate-200">
                            {skill.name}
                          </span>
                          {skill.highlighted && (
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" title="Core Specialty" />
                          )}
                        </div>

                        {/* Associated Projects */}
                        {skill.associatedProjectIds && skill.associatedProjectIds.length > 0 && onNavigateToMission && (
                          <div className="flex items-center gap-1.5 mt-1">
                            <span className="text-[10px] font-mono text-slate-500">Missions:</span>
                            {skill.associatedProjectIds.map((projId) => (
                              <button
                                key={projId}
                                type="button"
                                onClick={() => onNavigateToMission(projId)}
                                className="text-[10px] font-mono text-cyan-400 hover:underline min-h-[24px] inline-flex items-center"
                              >
                                #{projId}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>

                      <Badge variant="proficiency" proficiency={skill.proficiency}>
                        {skill.proficiency}
                      </Badge>
                    </div>
                  ))}
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
};
