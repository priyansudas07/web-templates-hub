import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldX, Home, Grid } from 'lucide-react';

export const NotFound: React.FC = () => {
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
          PAGE NOT FOUND
        </h1>
        <p className="text-slate-400 text-sm leading-relaxed">
          The page or route you are looking for does not exist or has been relocated.
        </p>
      </div>

      <div className="pt-4 flex items-center justify-center gap-4">
        <Link
          to="/"
          className="px-5 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg shadow-rose-950/50"
        >
          <Home className="w-4 h-4" />
          <span>Home</span>
        </Link>
        <Link
          to="/collection"
          className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all"
        >
          <Grid className="w-4 h-4" />
          <span>Browse Collection</span>
        </Link>
      </div>
    </div>
  );
};
