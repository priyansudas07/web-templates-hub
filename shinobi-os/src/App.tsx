import React, { useState } from 'react';
import { Terminal, Shield, Cpu, Activity, FolderGit2, Disc3 } from 'lucide-react';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'terminal' | 'system'>('terminal');

  return (
    <div className="min-h-screen bg-[#07080C] text-[#E2E8F0] flex flex-col selection:bg-rose-600 selection:text-white font-sans">
      {/* Top OS Navigation Bar */}
      <header className="h-12 border-b border-[#1E2433] bg-[#0B0E17]/80 backdrop-blur-md px-4 flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 font-bold tracking-wider text-rose-500">
            <Shield className="w-4 h-4 text-rose-500 animate-pulse" />
            <span>SHINOBI OS</span>
          </div>
          <span className="text-[#475569]">v1.0.0-alpha</span>
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] bg-rose-500/10 text-rose-400 border border-rose-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
            STANDBY
          </span>
        </div>

        <div className="flex items-center gap-4 text-[#94A3B8]">
          <div className="hidden sm:flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>SYS_OK</span>
          </div>
          <div className="flex items-center gap-2">
            <Activity className="w-3.5 h-3.5 text-emerald-400" />
            <span>CORE: ACTIVE</span>
          </div>
          <span className="text-[#334155]">|</span>
          <span className="text-zinc-400 font-mono">WORKSPACE: READY</span>
        </div>
      </header>

      {/* Main Workspace */}
      <main className="flex-1 p-4 md:p-8 flex flex-col items-center justify-center max-w-5xl mx-auto w-full">
        <div className="w-full bg-[#0D111D] border border-[#1E2638] rounded-xl shadow-2xl overflow-hidden">
          {/* Terminal / Window Title Bar */}
          <div className="px-4 py-3 bg-[#111625] border-b border-[#1E2638] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-3 font-mono text-xs text-[#94A3B8]">shinobi-shell // kernel-init</span>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setActiveTab('terminal')}
                className={`px-3 py-1 text-xs font-mono rounded transition-colors ${
                  activeTab === 'terminal' ? 'bg-[#1E2638] text-white' : 'text-[#64748B] hover:text-white'
                }`}
              >
                Terminal
              </button>
              <button
                onClick={() => setActiveTab('system')}
                className={`px-3 py-1 text-xs font-mono rounded transition-colors ${
                  activeTab === 'system' ? 'bg-[#1E2638] text-white' : 'text-[#64748B] hover:text-white'
                }`}
              >
                Specs
              </button>
            </div>
          </div>

          {/* Window Body */}
          <div className="p-6 md:p-8 font-mono text-sm min-h-[380px] flex flex-col justify-between">
            {activeTab === 'terminal' ? (
              <div className="space-y-4">
                <div className="text-rose-400 font-semibold flex items-center gap-2">
                  <Terminal className="w-4 h-4" />
                  <span>[SHINOBI OS INITIALIZATION COMPLETE]</span>
                </div>
                <p className="text-[#94A3B8] leading-relaxed">
                  Project workspace bootstrapped successfully inside <code className="text-cyan-400">web-templates-hub</code>.
                  Template structure, dependencies, and environment are locked and waiting for system modules.
                </p>

                <div className="bg-[#080B13] border border-[#1E2638] rounded-lg p-4 space-y-2 text-xs">
                  <p className="text-zinc-500">// Status Report</p>
                  <p className="text-emerald-400">✓ React 19 + TypeScript + Vite 8 scaffolded</p>
                  <p className="text-emerald-400">✓ Tailwind CSS initialized</p>
                  <p className="text-emerald-400">✓ Lucide Icons & Framer Motion primed</p>
                  <p className="text-amber-400">⏳ Awaiting user code & custom interfaces</p>
                </div>

                <div className="pt-2 flex items-center gap-2 text-rose-400">
                  <span className="text-zinc-500">shinobi@kernel:~$</span>
                  <span className="animate-pulse">_</span>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="text-cyan-400 font-semibold flex items-center gap-2">
                  <Disc3 className="w-4 h-4" />
                  <span>SYSTEM SPECIFICATIONS</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 bg-[#080B13] border border-[#1E2638] rounded-lg space-y-2">
                    <span className="text-zinc-500 block">Repository Hub</span>
                    <span className="text-white font-medium flex items-center gap-1.5">
                      <FolderGit2 className="w-3.5 h-3.5 text-rose-400" />
                      priyansudas07 / web-templates-hub
                    </span>
                  </div>
                  <div className="p-4 bg-[#080B13] border border-[#1E2638] rounded-lg space-y-2">
                    <span className="text-zinc-500 block">Template Name</span>
                    <span className="text-white font-medium">SHINOBI OS (`shinobi-os`)</span>
                  </div>
                </div>
              </div>
            )}

            <div className="pt-6 border-t border-[#1E2638] text-xs text-zinc-500 flex items-center justify-between">
              <span>Next: Provide your UI components, desktop apps, or layout design</span>
              <span className="text-rose-500/80">STANDBY_MODE</span>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Taskbar */}
      <footer className="h-10 border-t border-[#1E2433] bg-[#0B0E17]/80 px-4 flex items-center justify-between text-xs text-[#64748B] font-mono">
        <span>SHINOBI-OS // WEB-TEMPLATES-HUB</span>
        <span>STATUS: READY FOR CODE INJECTION</span>
      </footer>
    </div>
  );
};

export default App;
