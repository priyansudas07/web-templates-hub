import React, { useState, useMemo } from 'react';
import { ExternalLink } from 'lucide-react';
import { projects } from '@/data/projects';
import type { MissionRank } from '@/types/schema';
import {
  Badge,
  Button,
  Card,
  SectionHeader,
  EmptyState,
  GitRepoIcon,
} from '@/components/ui';
import {
  ScrollIcon,
  InkanStamp,
  CornerBrackets,
  BoltHardware,
} from '@/components/ui/ShinobiIcons';
import { MissionDetailModal } from '@/components/portfolio/MissionDetailModal';

export interface MissionsViewProps {
  selectedProjectId?: string;
  onSelectProject: (projectId?: string) => void;
}

type FilterRank = 'ALL' | MissionRank;

export const MissionsView: React.FC<MissionsViewProps> = ({
  selectedProjectId,
  onSelectProject,
}) => {
  const [activeFilter, setActiveFilter] = useState<FilterRank>('ALL');

  // Filter projects by rank
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'ALL') return projects;
    return projects.filter((p) => p.missionRank === activeFilter);
  }, [activeFilter]);

  // Project selected for modal inspection
  const activeModalProject = useMemo(() => {
    if (!selectedProjectId) return null;
    return projects.find((p) => p.id === selectedProjectId) || null;
  }, [selectedProjectId]);

  const filterTabs: FilterRank[] = ['ALL', 'S-Rank', 'A-Rank', 'B-Rank'];

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      {/* View Header with SectionHeader Primitive */}
      <SectionHeader
        icon={<ScrollIcon className="w-4 h-4 text-emerald-400" />}
        title="CLASSIFIED MISSION DOSSIERS // DEPLOYED PROJECTS"
        subtitle="Verified production software architectures, full-stack systems, and active engineering missions."
        action={
          <div className="flex items-center gap-1 bg-[#0E121A] p-1 rounded-lg border border-[#1B2232] overflow-x-auto max-w-full">
            {filterTabs.map((rank) => (
              <button
                key={rank}
                type="button"
                onClick={() => setActiveFilter(rank)}
                className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all min-h-[44px] focus-visible:outline-2 focus-visible:outline-emerald-500 ${
                  activeFilter === rank
                    ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-[#161D2D]'
                }`}
              >
                {rank}
              </button>
            ))}
          </div>
        }
      />

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <EmptyState
          icon={<ScrollIcon className="w-8 h-8 text-slate-500" />}
          title={`No mission dossiers match rank "${activeFilter}".`}
          description="Select another filter tier above to view active classified project records."
          action={
            <Button
              variant="outline"
              size="sm"
              onClick={() => setActiveFilter('ALL')}
            >
              Reset to All Missions
            </Button>
          }
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {filteredProjects.map((project) => {
            const rankStamp =
              project.missionRank === 'S-Rank'
                ? { text: '極秘', variant: 'crimson' as const, borderTop: 'border-t-2 border-t-rose-500/50' }
                : project.missionRank === 'A-Rank'
                ? { text: '機密', variant: 'amber' as const, borderTop: 'border-t-2 border-t-amber-500/50' }
                : { text: '公認', variant: 'emerald' as const, borderTop: 'border-t-2 border-t-emerald-500/50' };

            return (
              <Card
                key={project.id}
                as="article"
                variant="interactive"
                padding="md"
                className={`group relative flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#121824] via-[#0F1420] to-[#0A0D15] border border-[#242E42] shadow-[0_4px_20px_rgba(0,0,0,0.5)] ${rankStamp.borderTop}`}
              >
                {/* Tactical Corner Brackets */}
                <CornerBrackets position="tl" className="border-slate-500/40 group-hover:border-emerald-500/60" />
                <CornerBrackets position="tr" className="border-slate-500/40 group-hover:border-emerald-500/60" />
                <CornerBrackets position="bl" className="border-slate-500/40 group-hover:border-emerald-500/60" />
                <CornerBrackets position="br" className="border-slate-500/40 group-hover:border-emerald-500/60" />

                <div className="space-y-3">
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-2 border-b border-[#1A2234] pb-2">
                    <div className="flex items-center gap-1.5">
                      <BoltHardware className="w-1.5 h-1.5" />
                      <span className="text-[11px] font-mono text-slate-400 font-semibold tracking-wider">
                        DOSSIER // {project.codename}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <InkanStamp text={rankStamp.text} variant={rankStamp.variant} />
                      <Badge variant="rank" rank={project.missionRank}>
                        {project.missionRank}
                      </Badge>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-base sm:text-lg font-mono font-semibold text-slate-100 group-hover:text-emerald-300 transition-colors">
                    {project.title}
                  </h2>

                  {/* Mission Directive Label & Summary */}
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block mb-1">
                      // MISSION DIRECTIVE
                    </span>
                    <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed line-clamp-3">
                      {project.summary}
                    </p>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="tech">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-4 mt-4 border-t border-[#1A2234] flex items-center justify-between gap-2">
                  <Button
                    variant="secondary"
                    size="md"
                    onClick={() => onSelectProject(project.id)}
                    aria-label={`Inspect dossier for ${project.title}`}
                    icon={<ScrollIcon className="w-3.5 h-3.5 text-emerald-400" />}
                  >
                    Inspect Dossier
                  </Button>

                  <div className="flex items-center gap-2">
                    {project.links.map((link) => {
                      const isGithub = link.type === 'github';
                      const Icon = isGithub ? GitRepoIcon : ExternalLink;

                      return (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${link.label} for ${project.title}`}
                          className="p-2.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-[#161D2D] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center focus-visible:outline-2 focus-visible:outline-emerald-500"
                          title={link.label}
                        >
                          <Icon className="w-4 h-4" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      )}

      {/* Inspector Modal */}
      <MissionDetailModal
        project={activeModalProject}
        isOpen={Boolean(activeModalProject)}
        onClose={() => onSelectProject(undefined)}
      />
    </div>
  );
};
