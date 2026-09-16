import React from 'react';
import { ShieldX, Home, Grid } from 'lucide-react';
import { Button } from './Button';

export interface NotFoundProps {
  title?: string;
  message?: string;
}

export const NotFound: React.FC<NotFoundProps> = ({
  title = 'PAGE NOT FOUND',
  message = 'The page or product kit you are looking for does not exist or has been relocated.'
}) => {
  return (
    <div className="max-w-md mx-auto px-4 py-24 text-center space-y-6">
      <div className="w-20 h-20 rounded-full bg-rose-950/60 border border-rose-800 flex items-center justify-center text-rose-500 mx-auto shadow-2xl">
        <ShieldX className="w-10 h-10" />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-mono font-bold tracking-widest text-rose-500 uppercase">
          ERROR 404
        </span>
        <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-slate-100">
          {title}
        </h1>
        <p className="text-slate-400 text-sm leading-relaxed">
          {message}
        </p>
      </div>

      <div className="pt-4 flex items-center justify-center gap-4">
        <Button href="/" variant="primary" icon={<Home className="w-4 h-4" />}>
          Home
        </Button>
        <Button href="/collection" variant="secondary" icon={<Grid className="w-4 h-4" />}>
          Collection
        </Button>
      </div>
    </div>
  );
};
