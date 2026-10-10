import React, { useState, useMemo } from 'react';
import { ExternalLink, Eye, Layers } from 'lucide-react';
import { projects } from '@/data/projects';
import type { MissionRank } from '@/types/schema';
import { Badge } from '@/components/ui/Badge';
import { GitRepoIcon } from '@/components/ui/Icons';
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
      {/* View Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#1B2232] pb-4">
        <div>
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-emerald-400" />
            <h1 className="text-lg sm:text-xl font-mono font-bold text-slate-100 tracking-wide">
              MISSION DOSSIERS // DEPLOYED PROJECTS
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Verified production systems, software architectures, and active engineering missions.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1 bg-[#0E121A] p-1 rounded-lg border border-[#1B2232] self-start sm:self-auto overflow-x-auto max-w-full">
          {filterTabs.map((rank) => (
            <button
              key={rank}
              type="button"
              onClick={() => setActiveFilter(rank)}
              className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all min-h-[36px] focus-visible:outline-2 focus-visible:outline-emerald-500 ${
                activeFilter === rank
                  ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-[#161D2D]'
              }`}
            >
              {rank}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="p-8 text-center rounded-xl bg-[#0E121A] border border-[#1B2232] space-y-2">
          <p className="text-slate-300 font-mono text-sm">No mission dossiers match rank "{activeFilter}".</p>
          <p className="text-xs text-slate-500">Select another filter tier to view active records.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col justify-between p-5 rounded-xl bg-[#0B0E14] border border-[#1B2232] hover:border-[#283347] transition-all hover:shadow-xl hover:shadow-emerald-950/10 focus-within:border-emerald-500/60"
            >
              <div className="space-y-3">
                {/* Card Header */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono text-slate-400 tracking-wider">
                    {project.codename}
                  </span>
                  <Badge variant="rank" rank={project.missionRank}>
                    {project.missionRank}
                  </Badge>
                </div>

                {/* Title */}
                <h2 className="text-base sm:text-lg font-mono font-semibold text-slate-100 group-hover:text-emerald-300 transition-colors">
                  {project.title}
                </h2>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed line-clamp-3">
                  {project.summary}
                </p>

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
              <div className="pt-5 mt-4 border-t border-[#161D2D] flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => onSelectProject(project.id)}
                  aria-label={`Inspect dossier for ${project.title}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-xs text-slate-300 hover:text-slate-100 bg-[#111622] hover:bg-[#161D2D] border border-[#1B2232] transition-colors min-h-[44px] focus-visible:outline-2 focus-visible:outline-emerald-500"
                >
                  <Eye className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Inspect Dossier</span>
                </button>

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
            </article>
          ))}
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
