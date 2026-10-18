import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { IconButton } from './IconButton';
import { CornerBrackets, BoltHardware } from './ShinobiIcons';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  ariaLabel?: string;
  maxWidth?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  ariaLabel,
  maxWidth = 'max-w-2xl',
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  // Store opener element and restore focus on close
  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement;

      // Lock body scroll
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      // Focus first focusable element inside modal or the modal container itself
      const timer = setTimeout(() => {
        if (modalRef.current) {
          const focusable = modalRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (focusable.length > 0) {
            focusable[0].focus();
          } else {
            modalRef.current.focus();
          }
        }
      }, 50);

      return () => {
        clearTimeout(timer);
        document.body.style.overflow = originalOverflow;
        if (previousActiveElement.current && typeof previousActiveElement.current.focus === 'function') {
          previousActiveElement.current.focus();
        }
      };
    }
  }, [isOpen]);

  // Handle Escape key and focus trap
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const titleId = `modal-title-${title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={handleBackdropClick}
      role="presentation"
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-label={ariaLabel || title}
        tabIndex={-1}
        className={`relative w-full ${maxWidth} max-h-[90vh] flex flex-col bg-gradient-to-b from-[#121824] via-[#0E131F] to-[#0A0D15] border border-[#2D374D] rounded-t-2xl sm:rounded-xl shadow-[0_16px_50px_rgba(0,0,0,0.9)] overflow-hidden focus:outline-none transition-transform`}
      >
        {/* Tactical Corner Brackets */}
        <CornerBrackets position="tl" className="border-emerald-500/50" />
        <CornerBrackets position="tr" className="border-emerald-500/50" />
        <CornerBrackets position="bl" className="border-emerald-500/50" />
        <CornerBrackets position="br" className="border-emerald-500/50" />

        {/* Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 bg-gradient-to-r from-[#141C2B] via-[#101724] to-[#141C2B] border-b border-[#242E42]">
          <div>
            <div className="flex items-center gap-2">
              <BoltHardware className="w-1.5 h-1.5" />
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
              <h2 id={titleId} className="text-base sm:text-lg font-mono font-semibold text-slate-100">
                {title}
              </h2>
            </div>
            {subtitle && (
              <p className="text-xs font-mono text-slate-400 mt-0.5 tracking-wider">
                {subtitle}
              </p>
            )}
          </div>
          <IconButton
            aria-label="Close dialog"
            variant="ghost"
            size="md"
            icon={<X className="w-5 h-5 text-slate-400 hover:text-rose-400" />}
            onClick={onClose}
          />
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {children}
        </div>
      </div>
    </div>
  );
};
