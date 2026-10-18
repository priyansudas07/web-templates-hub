import React, { forwardRef } from 'react';

export type IconButtonVariant = 'default' | 'outline' | 'ghost' | 'danger';
export type IconButtonSize = 'sm' | 'md' | 'lg';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label': string; // Mandatory for accessibility
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  icon: React.ReactNode;
}

const VARIANT_STYLES: Record<IconButtonVariant, string> = {
  default:
    'bg-[#161D2D] hover:bg-[#1E2638] active:bg-[#111622] text-[#CBD5E1] hover:text-[#F1F5F9] border border-[#283347] hover:border-[#384660]',
  outline:
    'bg-transparent hover:bg-[#161D2D] active:bg-[#0B0E14] text-[#94A3B8] hover:text-[#F1F5F9] border border-[#1B2232] hover:border-[#283347]',
  ghost:
    'bg-transparent hover:bg-[#161D2D] active:bg-[#0B0E14] text-[#94A3B8] hover:text-[#F1F5F9] border border-transparent',
  danger:
    'bg-rose-500/10 hover:bg-rose-500/20 active:bg-rose-500/30 text-rose-400 border border-rose-500/40 hover:border-rose-500/60',
};

const SIZE_STYLES: Record<IconButtonSize, string> = {
  sm: 'min-h-[36px] min-w-[36px] p-1.5',
  md: 'min-h-[44px] min-w-[44px] p-2.5', // Meets WCAG touch target >= 44x44
  lg: 'min-h-[48px] min-w-[48px] p-3',
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      'aria-label': ariaLabel,
      variant = 'default',
      size = 'md',
      icon,
      disabled = false,
      className = '',
      type = 'button',
      ...rest
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        aria-label={ariaLabel}
        className={`inline-flex items-center justify-center rounded-lg transition-all select-none focus-visible:outline-2 focus-visible:outline-emerald-500 focus-visible:outline-offset-2 ${
          VARIANT_STYLES[variant]
        } ${SIZE_STYLES[size]} ${
          disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer active:scale-[0.96]'
        } ${className}`}
        {...rest}
      >
        <span className="shrink-0 flex items-center justify-center">{icon}</span>
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';
