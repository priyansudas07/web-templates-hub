import React from 'react';
import { useHashRoute } from '@/hooks/useHashRoute';
import { TopStatusBar } from '@/components/layout/TopStatusBar';
import { TacticalDock } from '@/components/layout/TacticalDock';
import { ShinobiEnvironment } from '@/components/layout/ShinobiEnvironment';
import { TerminalView } from '@/components/portfolio/TerminalView';
import { MissionsView } from '@/components/portfolio/MissionsView';
import { JutsuView } from '@/components/portfolio/JutsuView';
import { RecordsView } from '@/components/portfolio/RecordsView';
import { ResumeModal } from '@/components/portfolio/ResumeModal';
import { ContactModal } from '@/components/portfolio/ContactModal';

export const AppShell: React.FC = () => {
  const { route, subParam, activePrimaryRoute, navigate, closeModal } = useHashRoute();

  return (
    <div className="min-h-screen bg-[#080D1A] text-[#F1F5F9] flex flex-col font-sans selection:bg-rose-600 selection:text-white relative overflow-x-hidden">
      {/* Shinobi Atmospheric Background Layer */}
      <ShinobiEnvironment />

      {/* Top Status Bar */}
      <div className="relative z-20">
        <TopStatusBar currentRoute={route} onNavigate={navigate} />
      </div>

      {/* Main Tactical Workspace Viewport */}
      <main
        role="main"
        className="relative z-10 flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-28 flex flex-col items-center"
      >
        {activePrimaryRoute === 'terminal' && (
          <TerminalView onNavigate={navigate} />
        )}

        {activePrimaryRoute === 'missions' && (
          <MissionsView
            selectedProjectId={route === 'missions' ? subParam : undefined}
            onSelectProject={(projectId) => navigate('missions', projectId)}
          />
        )}

        {activePrimaryRoute === 'jutsu' && (
          <JutsuView
            onNavigateToMission={(projectId) => navigate('missions', projectId)}
          />
        )}

        {activePrimaryRoute === 'records' && (
          <RecordsView />
        )}
      </main>

      {/* Bottom Navigation Dock */}
      <TacticalDock currentRoute={route} onNavigate={navigate} />

      {/* Modals rendered on top of active primary view */}
      <ResumeModal
        isOpen={route === 'resume'}
        onClose={closeModal}
        onOpenContact={() => navigate('contact')}
      />

      <ContactModal
        isOpen={route === 'contact'}
        onClose={closeModal}
      />
    </div>
  );
};

export default AppShell;
