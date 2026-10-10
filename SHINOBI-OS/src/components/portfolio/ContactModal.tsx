import React, { useState } from 'react';
import { Copy, Check, ExternalLink, Globe, Send } from 'lucide-react';
import { profile } from '@/data/profile';
import { Modal } from '@/components/ui/Modal';
import { GitRepoIcon } from '@/components/ui/Icons';

export interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'failed'>('idle');
  const [copiedText, setCopiedText] = useState('');

  // Extract primary email
  const emailLink = profile.socialLinks.find((l) => l.type === 'email');
  const emailAddress = emailLink ? emailLink.value.replace(/^mailto:/, '') : '';

  const handleCopyEmail = async () => {
    if (!emailAddress) return;

    try {
      if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(emailAddress);
        setCopyState('copied');
        setCopiedText('Email copied to clipboard successfully.');
      } else {
        // Fallback for older environments
        const textarea = document.createElement('textarea');
        textarea.value = emailAddress;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        setCopyState('copied');
        setCopiedText('Email copied to clipboard successfully.');
      }
    } catch {
      setCopyState('failed');
      setCopiedText('Failed to copy to clipboard.');
    }

    setTimeout(() => {
      setCopyState('idle');
      setCopiedText('');
    }, 3000);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="COMMUNICATION DISPATCH // CONTACT"
      subtitle={`OPERATIVE: ${profile.callsign} // ${profile.location}`}
      maxWidth="max-w-lg"
    >
      <div className="space-y-6 text-sm">
        {/* Intro */}
        <p className="text-slate-300 font-sans text-xs sm:text-sm leading-relaxed">
          Open for technical discussions, software engineering opportunities, open-source collaboration, and architecture consultations.
        </p>

        {/* Primary Email Box */}
        {emailAddress && (
          <div className="p-4 rounded-xl bg-[#0B0E14] border border-[#283347] space-y-3">
            <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider block">
              // Direct Transmission Channel (Email)
            </span>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 rounded-lg bg-[#111622] border border-[#1B2232]">
              <span className="font-mono text-xs sm:text-sm text-slate-100 select-all truncate">
                {emailAddress}
              </span>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address to clipboard"
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md font-mono text-xs transition-colors min-h-[36px] focus-visible:outline-2 focus-visible:outline-emerald-500 ${
                    copyState === 'copied'
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                      : copyState === 'failed'
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                      : 'bg-[#161D2D] hover:bg-[#1E2638] text-slate-300 border border-[#283347]'
                  }`}
                >
                  {copyState === 'copied' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : copyState === 'failed' ? (
                    <span>Copy Failed</span>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${emailAddress}`}
                  aria-label="Send direct email"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md font-mono text-xs bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold transition-colors min-h-[36px] focus-visible:outline-2 focus-visible:outline-emerald-500"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send</span>
                </a>
              </div>
            </div>

            {/* Screen reader announcement */}
            <div aria-live="polite" className="sr-only">
              {copiedText}
            </div>
          </div>
        )}

        {/* Other Social & Verified Coordinates */}
        <div className="space-y-2">
          <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
            // Verified External Coordinates
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {profile.socialLinks
              .filter((link) => link.type !== 'email')
              .map((link) => {
                const isGithub = link.type === 'github';
                const Icon = isGithub ? GitRepoIcon : Globe;

                return (
                  <a
                    key={link.value}
                    href={link.value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg bg-[#0B0E14] border border-[#1B2232] hover:border-[#283347] text-slate-300 hover:text-slate-100 transition-colors min-h-[44px] focus-visible:outline-2 focus-visible:outline-emerald-500"
                  >
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-emerald-400" />
                      <span className="font-mono text-xs">{link.label}</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                  </a>
                );
              })}
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-[11px] font-mono text-slate-500 pt-2 border-t border-[#1B2232]">
          Response Window: Typically within 24-48 business hours. Confidential communications strictly respected.
        </p>
      </div>
    </Modal>
  );
};
