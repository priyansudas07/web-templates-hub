import React from 'react';
import { ExternalLink, CheckCircle2, ShieldAlert } from 'lucide-react';
import type { Project } from '@/types/schema';
import { Modal } from '@/components/ui/Modal';
import { Badge } from '@/components/ui/Badge';
import { GitRepoIcon } from '@/components/ui/Icons';
import { InkanStamp, CornerBrackets, ScrollIcon } from '@/components/ui/ShinobiIcons';

export interface MissionDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const MissionDetailModal: React.FC<MissionDetailModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  if (!project) return null;

  const rankStamp =
    project.missionRank === 'S-Rank'
      ? { text: '極秘', variant: 'crimson' as const }
      : project.missionRank === 'A-Rank'
      ? { text: '機密', variant: 'amber' as const }
      : { text: '公認', variant: 'emerald' as const };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={project.title}
      subtitle={`CLASSIFIED DOSSIER // ${project.codename} // ${project.category.toUpperCase()}`}
      maxWidth="max-w-2xl"
    >
      <div className="relative space-y-6 text-sm">
        <CornerBrackets position="tl" className="border-emerald-500/40" />
        <CornerBrackets position="tr" className="border-emerald-500/40" />

        {/* Header Badges */}
        <div className="flex flex-wrap items-center gap-2">
          <InkanStamp text={rankStamp.text} variant={rankStamp.variant} />
          <Badge variant="rank" rank={project.missionRank}>
            {project.missionRank} Mission
          </Badge>
          <Badge variant="status">
            Status: {project.status.toUpperCase()}
          </Badge>
          {project.featured && (
            <span className="text-xs font-mono text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded flex items-center gap-1">
              <ScrollIcon className="w-3 h-3" /> Flagship Dossier
            </span>
          )}
        </div>

        {/* Mission Summary */}
        <div>
          <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
            // Mission Briefing & Objective
          </h3>
          <p className="text-slate-200 leading-relaxed font-sans">
            {project.summary}
          </p>
        </div>

        {/* Problem Statement */}
        {project.problemStatement && (
          <div className="p-4 rounded-lg bg-[#111622] border border-[#1B2232] space-y-1">
            <h3 className="text-xs font-mono text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5" />
              Tactical Challenge
            </h3>
            <p className="text-xs text-slate-300 font-sans leading-relaxed">
              {project.problemStatement}
            </p>
          </div>
        )}

        {/* Approach Description */}
        {project.approachDescription && (
          <div className="p-4 rounded-lg bg-[#111622] border border-[#1B2232] space-y-1">
            <h3 className="text-xs font-mono text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Architectural Execution
            </h3>
            <p className="text-xs text-slate-300 font-sans leading-relaxed">
              {project.approachDescription}
            </p>
          </div>
        )}

        {/* Verified Metrics (if any) */}
        {project.metrics && project.metrics.length > 0 && (
          <div>
            <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
              // Verified Performance Benchmarks
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-2.5 rounded bg-[#161D2D] border border-[#283347]">
                  <span className="text-[10px] font-mono text-slate-400 block">{m.label}</span>
                  <span className="text-sm font-mono font-bold text-emerald-400">{m.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack */}
        <div>
          <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
            // Technology Formulation
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="tech">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="pt-4 border-t border-[#1B2232] flex flex-wrap items-center gap-3">
          {project.links.map((link) => {
            const isGithub = link.type === 'github';
            const Icon = isGithub ? GitRepoIcon : ExternalLink;

            return (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-xs font-semibold transition-all min-h-[44px] focus-visible:outline-2 focus-visible:outline-emerald-500 ${
                  link.isPrimary
                    ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-md shadow-emerald-500/20'
                    : 'bg-[#161D2D] hover:bg-[#1E2638] text-slate-200 border border-[#283347]'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{link.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </Modal>
  );
};
