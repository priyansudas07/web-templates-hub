import React from 'react';
import { Zap, Code, Database, Cloud, Sparkles } from 'lucide-react';
import { skillCategories } from '@/data/skills';
import { getSkillsByDiscipline } from '@/data/index';
import { Badge } from '@/components/ui/Badge';
import type { JutsuDiscipline } from '@/types/schema';

export interface JutsuViewProps {
  onNavigateToMission?: (projectId: string) => void;
}

const DISCIPLINE_ICONS: Record<JutsuDiscipline, React.ComponentType<{ className?: string }>> = {
  ninjutsu: Code,
  taijutsu: Database,
  fuinjutsu: Cloud,
  genjutsu: Sparkles,
};

export const JutsuView: React.FC<JutsuViewProps> = ({ onNavigateToMission }) => {
  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="border-b border-[#1B2232] pb-4">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-emerald-400" />
          <h1 className="text-lg sm:text-xl font-mono font-bold text-slate-100 tracking-wide">
            TECHNICAL JUTSU ARCHIVE // SKILLS QUADRANT
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Categorized technical masteries, core programming languages, frameworks, and deployment disciplines.
        </p>
      </div>

      {/* Quadrants Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category) => {
          const Icon = DISCIPLINE_ICONS[category.id] || Zap;
          const categorySkills = getSkillsByDiscipline(category.id);

          return (
            <div
              key={category.id}
              className="p-5 rounded-xl bg-[#0B0E14] border border-[#1B2232] space-y-4 hover:border-[#283347] transition-all"
            >
              {/* Category Header */}
              <div className="flex items-start justify-between gap-3 border-b border-[#161D2D] pb-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-emerald-400" />
                    <h2 className="text-sm font-mono font-bold text-slate-100">
                      {category.title}
                    </h2>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400/90 block">
                    {category.thematicLabel}
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-500 bg-[#111622] px-2 py-0.5 rounded border border-[#1B2232]">
                  {categorySkills.length} Jutsu
                </span>
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
                                className="text-[10px] font-mono text-cyan-400 hover:underline"
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
            </div>
          );
        })}
      </div>
    </div>
  );
};
