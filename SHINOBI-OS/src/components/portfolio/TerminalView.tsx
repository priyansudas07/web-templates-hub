import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft } from 'lucide-react';
import { profile } from '@/data/profile';
import { projects } from '@/data/projects';
import { skills } from '@/data/skills';
import { experience, education } from '@/data/timeline';
import { siteConfig } from '@/data/siteConfig';
import type { RouteKey } from '@/types/navigation';

export interface TerminalViewProps {
  onNavigate: (route: RouteKey, subParam?: string) => void;
}

interface OutputEntry {
  id: string;
  command: string;
  content: React.ReactNode;
  timestamp: string;
}

export const TerminalView: React.FC<TerminalViewProps> = ({ onNavigate }) => {
  const [inputVal, setInputVal] = useState('');
  const [outputEntries, setOutputEntries] = useState<OutputEntry[]>(() => [
    {
      id: 'init-1',
      command: 'system-init',
      content: (
        <div className="space-y-2 text-slate-300">
          <p className="text-emerald-400 font-bold">
            [SHINOBI OS // CLASSIFIED INTELLIGENCE TERMINAL v1.0]
          </p>
          <p className="text-slate-400">
            Welcome, operative. Enter <span className="text-emerald-400 font-semibold underline cursor-pointer" onClick={() => handleCommandRun('help')}>help</span> to view available system commands.
          </p>
          <p className="text-xs text-slate-500">
            Navigation: Click quick links or type commands like <span className="text-cyan-400">projects</span>, <span className="text-cyan-400">skills</span>, <span className="text-cyan-400">records</span>, <span className="text-cyan-400">resume</span>, <span className="text-cyan-400">contact</span>.
          </p>
        </div>
      ),
      timestamp: new Date().toLocaleTimeString(),
    },
  ]);

  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyPointer, setHistoryPointer] = useState<number>(-1);
  const [tempDraft, setTempDraft] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const terminalContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of output
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [outputEntries]);

  // Focus input on initial mount or container click
  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  const executeCommand = (rawCommand: string) => {
    const trimmed = rawCommand.trim();
    if (!trimmed) return;

    // Add to history
    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryPointer(-1);

    const parts = trimmed.split(' ').filter(Boolean);
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);

    let resultNode: React.ReactNode;

    switch (cmd) {
      case 'help':
        resultNode = (
          <div className="space-y-2 text-xs sm:text-sm">
            <p className="text-emerald-400 font-semibold">// AVAILABLE SHINOBI OS COMMANDS</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-slate-300">
              <div>
                <span className="text-cyan-400 font-mono font-medium">help</span> — Display this help index
              </div>
              <div>
                <span className="text-cyan-400 font-mono font-medium">about / bio</span> — Operative profile & affiliation
              </div>
              <div>
                <span className="text-cyan-400 font-mono font-medium">projects / missions</span> — List verified mission dossiers
              </div>
              <div>
                <span className="text-cyan-400 font-mono font-medium">skills / jutsu</span> — Display categorized technical jutsu
              </div>
              <div>
                <span className="text-cyan-400 font-mono font-medium">records / history</span> — Shinobi career and academy timeline
              </div>
              <div>
                <span className="text-cyan-400 font-mono font-medium">resume</span> — Open developer resume modal
              </div>
              <div>
                <span className="text-cyan-400 font-mono font-medium">contact</span> — Open communication dispatch
              </div>
              <div>
                <span className="text-cyan-400 font-mono font-medium">clear</span> — Clear terminal output
              </div>
              <div>
                <span className="text-cyan-400 font-mono font-medium">history</span> — View active session command history
              </div>
            </div>
          </div>
        );
        break;

      case 'about':
      case 'bio':
      case 'whoami':
        resultNode = (
          <div className="space-y-2 text-slate-300">
            <p className="text-emerald-400 font-semibold">// OPERATIVE PROFILE</p>
            <p className="text-slate-100 font-medium">
              {profile.fullName} ({profile.callsign}) — {profile.title}
            </p>
            <p className="text-slate-400 text-xs sm:text-sm">{profile.bio}</p>
            <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-400 pt-1">
              <span>Village: <strong className="text-slate-200">{profile.villageAffiliation}</strong></span>
              <span>Location: <strong className="text-slate-200">{profile.location}</strong></span>
              <span>Status: <strong className="text-emerald-400 uppercase">{profile.availabilityStatus}</strong></span>
            </div>
          </div>
        );
        break;

      case 'projects':
      case 'missions':
      case 'ls':
        if (args.length > 0) {
          const targetId = args[0].toLowerCase();
          const found = projects.find((p) => p.id === targetId);
          if (found) {
            resultNode = (
              <div className="space-y-1 text-slate-300">
                <p className="text-emerald-400 font-semibold">// OPENING DOSSIER: {found.title}</p>
                <p className="text-xs text-slate-400">Navigating to mission dossier inspector...</p>
              </div>
            );
            onNavigate('missions', found.id);
            break;
          }
        }
        resultNode = (
          <div className="space-y-3 text-slate-300">
            <div className="flex items-center justify-between">
              <p className="text-emerald-400 font-semibold">// VERIFIED MISSION DOSSIERS ({projects.length})</p>
              <button
                type="button"
                onClick={() => onNavigate('missions')}
                className="text-xs text-cyan-400 underline hover:text-cyan-300 font-mono"
              >
                Open Full Mission Grid →
              </button>
            </div>
            <div className="space-y-2">
              {projects.map((proj) => (
                <div key={proj.id} className="p-2.5 rounded bg-[#111622] border border-[#1B2232]">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-100 font-mono font-medium text-xs sm:text-sm">
                      [{proj.missionRank}] {proj.title}
                    </span>
                    <button
                      type="button"
                      onClick={() => onNavigate('missions', proj.id)}
                      className="text-xs text-emerald-400 hover:underline font-mono"
                    >
                      Inspect →
                    </button>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">{proj.summary}</p>
                  <p className="text-[11px] text-slate-500 font-mono mt-1">
                    Tech: {proj.techStack.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'skills':
      case 'jutsu':
        resultNode = (
          <div className="space-y-2 text-slate-300">
            <div className="flex items-center justify-between">
              <p className="text-emerald-400 font-semibold">// TECHNICAL JUTSU ARCHIVE ({skills.length} skills)</p>
              <button
                type="button"
                onClick={() => onNavigate('jutsu')}
                className="text-xs text-cyan-400 underline hover:text-cyan-300 font-mono"
              >
                Open Jutsu Quadrants →
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
              {skills.map((s) => (
                <div key={s.id} className="flex items-center justify-between p-1.5 rounded bg-[#111622] border border-[#1B2232]">
                  <span className="text-slate-200">{s.name}</span>
                  <span className="text-emerald-400 text-[10px] uppercase">[{s.proficiency}]</span>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'records':
      case 'experience':
        resultNode = (
          <div className="space-y-3 text-slate-300">
            <div className="flex items-center justify-between">
              <p className="text-emerald-400 font-semibold">// SHINOBI CAREER & ACADEMY RECORDS</p>
              <button
                type="button"
                onClick={() => onNavigate('records')}
                className="text-xs text-cyan-400 underline hover:text-cyan-300 font-mono"
              >
                Open Timeline View →
              </button>
            </div>
            <div className="space-y-2">
              {experience.map((exp) => (
                <div key={exp.id} className="p-2 rounded bg-[#111622] border border-[#1B2232]">
                  <p className="text-slate-100 font-medium text-xs">
                    {exp.roleTitle} @ {exp.organization} ({exp.startDate} - Present)
                  </p>
                  <p className="text-xs text-slate-400 mt-1">{exp.summary}</p>
                </div>
              ))}
              {education.map((edu) => (
                <div key={edu.id} className="p-2 rounded bg-[#111622] border border-[#1B2232]">
                  <p className="text-slate-100 font-medium text-xs">
                    {edu.degree} in {edu.fieldOfStudy} @ {edu.institution}
                  </p>
                  <p className="text-xs text-slate-500">{edu.thematicAcademyLabel}</p>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'resume':
        resultNode = (
          <div className="space-y-2 text-slate-300">
            <p className="text-emerald-400 font-semibold">// RESUME DOSSIER DISPATCH</p>
            <p className="text-xs sm:text-sm text-slate-300">
              Opening ATS Candidate Dossier Modal...
            </p>
            <p className="text-xs text-slate-500">
              Asset: {siteConfig.resumeConfig.fileName} (Status: {siteConfig.resumeConfig.isAvailable ? 'Available' : 'Pending Sign-Off'})
            </p>
          </div>
        );
        onNavigate('resume');
        break;

      case 'contact':
        resultNode = (
          <div className="space-y-2 text-slate-300">
            <p className="text-emerald-400 font-semibold">// COMMUNICATION DISPATCH</p>
            <p className="text-xs sm:text-sm text-slate-300">
              Launching encrypted transmission dispatch modal...
            </p>
            <p className="text-xs text-slate-500">
              Direct Contact: priyansudas273@gmail.com
            </p>
          </div>
        );
        onNavigate('contact');
        break;

      case 'clear':
        setOutputEntries([]);
        return;

      case 'history':
        resultNode = (
          <div className="space-y-1 text-slate-300 font-mono text-xs">
            <p className="text-emerald-400 font-semibold">// ACTIVE SESSION HISTORY ({commandHistory.length})</p>
            {commandHistory.length === 0 ? (
              <p className="text-slate-500">No commands in session history yet.</p>
            ) : (
              commandHistory.map((item, idx) => (
                <div key={idx} className="flex gap-2">
                  <span className="text-slate-500">{idx + 1}.</span>
                  <span className="text-slate-200">{item}</span>
                </div>
              ))
            )}
          </div>
        );
        break;

      default:
        resultNode = (
          <div className="space-y-1 text-xs sm:text-sm">
            <p className="text-rose-400">
              Command not found: <span className="font-semibold text-rose-300">"{trimmed}"</span>
            </p>
            <p className="text-slate-500">
              Type <button type="button" onClick={() => handleCommandRun('help')} className="text-emerald-400 underline font-mono">help</button> to view valid shinobi commands.
            </p>
          </div>
        );
        break;
    }

    setOutputEntries((prev) => [
      ...prev,
      {
        id: `cmd-${Date.now()}-${Math.random()}`,
        command: trimmed,
        content: resultNode,
        timestamp: new Date().toLocaleTimeString(),
      },
    ]);
  };

  const handleCommandRun = (cmdString: string) => {
    executeCommand(cmdString);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      executeCommand(inputVal);
      setInputVal('');
      setTempDraft('');
      setHistoryPointer(-1);
    } else if (e.key === 'ArrowUp') {
      if (commandHistory.length === 0) return;
      e.preventDefault();

      if (historyPointer === -1) {
        setTempDraft(inputVal);
        const newPointer = commandHistory.length - 1;
        setHistoryPointer(newPointer);
        setInputVal(commandHistory[newPointer]);
      } else if (historyPointer > 0) {
        const newPointer = historyPointer - 1;
        setHistoryPointer(newPointer);
        setInputVal(commandHistory[newPointer]);
      }
    } else if (e.key === 'ArrowDown') {
      if (historyPointer === -1) return;
      e.preventDefault();

      if (historyPointer < commandHistory.length - 1) {
        const newPointer = historyPointer + 1;
        setHistoryPointer(newPointer);
        setInputVal(commandHistory[newPointer]);
      } else {
        setHistoryPointer(-1);
        setInputVal(tempDraft);
      }
    }
  };

  return (
    <div
      ref={terminalContainerRef}
      onClick={handleContainerClick}
      className="w-full max-w-4xl mx-auto bg-[#0B0E14] border border-[#283347] rounded-xl shadow-2xl overflow-hidden flex flex-col min-h-[500px] max-h-[75vh]"
    >
      {/* Terminal Title Bar */}
      <div className="px-4 py-2.5 bg-[#111622] border-b border-[#1B2232] flex items-center justify-between select-none">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          <span className="ml-2 font-mono text-xs text-slate-400 flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-emerald-400" />
            shinobi-shell // {profile.callsign}
          </span>
        </div>
        <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500">
          <span>PORT: 432Hz</span>
          <span>|</span>
          <span className="text-emerald-400">READY</span>
        </div>
      </div>

      {/* Terminal Output Stream */}
      <div
        role="log"
        aria-live="polite"
        className="flex-1 p-4 sm:p-6 overflow-y-auto font-mono text-xs sm:text-sm space-y-4 cursor-text"
      >
        {outputEntries.map((entry) => (
          <div key={entry.id} className="space-y-1.5">
            <div className="flex items-center justify-between text-slate-500 text-[11px]">
              <span className="text-emerald-400/90 font-semibold">
                shinobi@konoha:~$ <span className="text-slate-200">{entry.command}</span>
              </span>
              <span>{entry.timestamp}</span>
            </div>
            <div className="pl-2 border-l border-[#1E2638]">{entry.content}</div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Terminal Command Input Prompt */}
      <div className="p-3 sm:p-4 bg-[#0E121A] border-t border-[#1B2232] flex items-center gap-2 font-mono text-xs sm:text-sm">
        <label htmlFor="terminal-input" className="text-emerald-400 font-semibold shrink-0 select-none">
          shinobi@konoha:~$
        </label>
        <input
          id="terminal-input"
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          spellCheck="false"
          placeholder="type 'help' for available commands..."
          aria-label="Terminal command line input"
          className="flex-1 bg-transparent text-slate-100 placeholder:text-slate-600 focus:outline-none"
        />
        <button
          type="button"
          onClick={() => {
            executeCommand(inputVal);
            setInputVal('');
            setTempDraft('');
          }}
          aria-label="Execute command"
          className="p-1 rounded text-slate-500 hover:text-emerald-400 transition-colors focus-visible:outline-2 focus-visible:outline-emerald-500"
        >
          <CornerDownLeft className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
