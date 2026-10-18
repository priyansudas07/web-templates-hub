import React, { useState } from 'react';
import { Copy, Check, ExternalLink, Globe, Send } from 'lucide-react';
import { profile } from '@/data/profile';
import { Modal, Button, GitRepoIcon } from '@/components/ui';
import { InkanStamp, CornerBrackets, KunaiIcon } from '@/components/ui/ShinobiIcons';

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
      title="COMMUNICATION DISPATCH // SHINOBI MESSENGER"
      subtitle={`OPERATIVE: ${profile.callsign} // ${profile.location}`}
      maxWidth="max-w-lg"
    >
      <div className="relative space-y-6 text-sm">
        <CornerBrackets position="tl" className="border-emerald-500/40" />
        <CornerBrackets position="tr" className="border-emerald-500/40" />

        <div className="flex items-center justify-between border-b border-[#1A2234] pb-2">
          <div className="flex items-center gap-2">
            <KunaiIcon className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-mono text-slate-300 font-semibold tracking-wider">
              CARRIER PROTOCOL: ENCRYPTED
            </span>
          </div>
          <InkanStamp text="通信" variant="emerald" />
        </div>
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

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-lg bg-[#111622] border border-[#1B2232]">
              <span className="font-mono text-xs sm:text-sm text-slate-100 select-all truncate">
                {emailAddress}
              </span>

              <div className="flex items-center gap-2 shrink-0">
                <Button
                  variant={copyState === 'copied' ? 'primary' : copyState === 'failed' ? 'danger' : 'secondary'}
                  size="md"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address to clipboard"
                  icon={
                    copyState === 'copied' ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )
                  }
                >
                  {copyState === 'copied' ? 'Copied!' : copyState === 'failed' ? 'Failed' : 'Copy'}
                </Button>

                <a
                  href={`mailto:${emailAddress}`}
                  aria-label="Send direct email"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg font-mono text-xs bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold transition-colors min-h-[44px] focus-visible:outline-2 focus-visible:outline-emerald-500 shadow-sm shadow-emerald-500/10"
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
