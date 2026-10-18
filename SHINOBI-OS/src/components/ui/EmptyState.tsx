import React from 'react';

export interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  icon,
  action,
  className = '',
}) => {
  return (
    <div
      className={`p-8 text-center rounded-xl bg-[#0E121A] border border-[#1B2232] space-y-3 ${className}`}
    >
      {icon && (
        <div className="flex justify-center text-slate-500 mb-1">{icon}</div>
      )}
      <p className="text-slate-200 font-mono text-sm font-medium">{title}</p>
      {description && (
        <p className="text-xs text-slate-400 font-sans max-w-md mx-auto leading-relaxed">
          {description}
        </p>
      )}
      {action && <div className="pt-2">{action}</div>}
    </div>
  );
};
