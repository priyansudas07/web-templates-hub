import React from 'react';
import { Link } from 'react-router-dom';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text' | 'emerald' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  isExternal = false,
  children,
  icon,
  fullWidth = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-sans font-extrabold uppercase tracking-wider transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3261E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0A] disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none active:scale-[0.98]';

  const variantStyles = {
    primary:
      'bg-[#E3261E] hover:bg-[#c91e17] text-[#F3F0E8] border border-[#E3261E] shadow-sm',
    secondary:
      'bg-[#151514] hover:bg-[#1f1f1d] text-[#F3F0E8] border border-[#292927]',
    outline:
      'bg-[#0B0B0A] hover:bg-[#151514] text-[#F3F0E8] border border-[#292927] hover:border-[#9B9992]',
    text:
      'bg-transparent text-[#9B9992] hover:text-[#F3F0E8] hover:bg-[#151514] border border-transparent',
    emerald:
      'bg-[#151514] hover:bg-[#16231b] text-[#F3F0E8] border border-[#292927] hover:border-[#25D366]/60 shadow-sm',
    whatsapp:
      'bg-[#151514] hover:bg-[#122218] text-[#F3F0E8] border border-[#292927] hover:border-[#25D366]/60 shadow-sm transition-all duration-300'
  };

  const sizeStyles = {
    sm: 'text-xs px-4 py-2.5 min-h-[40px] rounded-sm gap-2',
    md: 'text-xs sm:text-sm px-6 py-3 min-h-[46px] rounded-sm gap-2.5',
    lg: 'text-sm sm:text-base px-7 py-3.5 min-h-[52px] rounded-sm gap-3'
  };

  const combinedClasses = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `.trim();

  const content = (
    <>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </>
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <Link to={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled} {...props}>
      {content}
    </button>
  );
};
