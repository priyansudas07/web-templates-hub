import React from 'react';
import { Download, AlertCircle, Mail, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { profile } from '@/data/profile';
import { Modal, Button } from '@/components/ui';
import { InkanStamp, CornerBrackets, ScrollIcon } from '@/components/ui/ShinobiIcons';

export interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact?: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  onOpenContact,
}) => {
  const { resumeConfig } = siteConfig;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="CANDIDATE DOSSIER // ATS RESUME SCROLL"
      subtitle={`SPECIFICATION: ${resumeConfig.fileName}`}
      maxWidth="max-w-xl"
    >
      <div className="relative space-y-6 text-sm">
        <CornerBrackets position="tl" className="border-emerald-500/40" />
        <CornerBrackets position="tr" className="border-emerald-500/40" />

        {/* Availability Banner */}
        {resumeConfig.isAvailable ? (
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <InkanStamp text="公認" variant="emerald" />
                <h3 className="font-mono font-semibold text-emerald-300 text-xs sm:text-sm">
                  VERIFIED ATS RESUME READY FOR DOWNLOAD
                </h3>
              </div>
              <p className="text-xs text-slate-300">
                Single-page ATS-formatted engineering resume. Includes full contact coordinates, verified projects, and technical skills.
              </p>
            </div>
          </div>
        ) : (
          <div className="p-4 rounded-xl bg-[#111622] border border-amber-500/30 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h3 className="font-mono font-semibold text-amber-300 text-xs sm:text-sm">
                DOSSIER UNDER CONFIDENTIAL REVISION
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                The authentic PDF dossier file is currently undergoing formatting alignment for latest 2026 project milestones. 
                All career and academic details are accurately documented in the{' '}
                <span className="font-mono text-emerald-400">Records</span> and{' '}
                <span className="font-mono text-emerald-400">Missions</span> sections of this tactical OS.
              </p>
            </div>
          </div>
        )}

        {/* Dossier Metadata Table */}
        <div className="p-4 rounded-xl bg-[#0B0E14] border border-[#1B2232] space-y-2.5 font-mono text-xs">
          <div className="flex justify-between py-1 border-b border-[#161D2D]">
            <span className="text-slate-500">Candidate Name:</span>
            <span className="text-slate-200 font-medium">{profile.fullName}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-[#161D2D]">
            <span className="text-slate-500">Designation:</span>
            <span className="text-slate-200">{profile.title}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-[#161D2D]">
            <span className="text-slate-500">Target Format:</span>
            <span className="text-slate-200">{resumeConfig.mimeType} ({resumeConfig.fileSizeLabel})</span>
          </div>
          <div className="flex justify-between py-1 border-b border-[#161D2D]">
            <span className="text-slate-500">Last Revised:</span>
            <span className="text-slate-200">{resumeConfig.lastUpdated}</span>
          </div>
          <div className="flex justify-between py-1">
            <span className="text-slate-500">Verification State:</span>
            <span className={resumeConfig.isAvailable ? 'text-emerald-400' : 'text-amber-400'}>
              {resumeConfig.isAvailable ? 'AVAILABLE FOR DOWNLOAD' : 'OFFLINE // PENDING ASSET INJECTION'}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {resumeConfig.isAvailable ? (
            <a
              href={resumeConfig.assetPath}
              download={resumeConfig.fileName}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono text-xs font-semibold shadow-lg shadow-emerald-500/20 transition-all min-h-[44px] focus-visible:outline-2 focus-visible:outline-emerald-500"
            >
              <Download className="w-4 h-4" />
              <span>Download ATS Resume ({resumeConfig.fileSizeLabel})</span>
            </a>
          ) : (
            <Button
              variant="outline"
              size="md"
              disabled
              icon={<ScrollIcon className="w-4 h-4 text-slate-600" />}
            >
              PDF Download Temporarily Offline
            </Button>
          )}

          {onOpenContact && (
            <Button
              variant="secondary"
              size="md"
              icon={<Mail className="w-4 h-4 text-cyan-400" />}
              onClick={() => {
                onClose();
                onOpenContact();
              }}
            >
              Contact Operative Directly
            </Button>
          )}
        </div>
      </div>
    </Modal>
  );
};
