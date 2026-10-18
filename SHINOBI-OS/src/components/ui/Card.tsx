import React, { forwardRef } from 'react';

export type CardVariant = 'surface' | 'elevated' | 'interactive';
export type CardPadding = 'none' | 'sm' | 'md' | 'lg';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  padding?: CardPadding;
  as?: 'div' | 'article' | 'section';
}

const VARIANT_STYLES: Record<CardVariant, string> = {
  surface: 'bg-[#111622] border border-[#1B2232]',
  elevated: 'bg-[#0B0E14] border border-[#1B2232]',
  interactive:
    'bg-[#0B0E14] border border-[#1B2232] hover:border-[#283347] transition-all hover:shadow-xl hover:shadow-emerald-950/10 focus-within:border-emerald-500/60',
};

const PADDING_STYLES: Record<CardPadding, string> = {
  none: '',
  sm: 'p-3',
  md: 'p-5',
  lg: 'p-6',
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'elevated',
      padding = 'md',
      as: Component = 'div',
      className = '',
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={`rounded-xl ${VARIANT_STYLES[variant]} ${PADDING_STYLES[padding]} ${className}`}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);

Card.displayName = 'Card';
