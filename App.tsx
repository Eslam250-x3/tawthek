
import React, { useState, useMemo } from 'react';
import { World, Stage, Zone } from './types';
import { GAME_WORLDS } from './constants';
import useGameLogic from './hooks/useGameLogic';
import Header from './components/Header';
import WorldMap from './components/WorldMap';
import StageView from './components/StageView';
import Challenge from './components/Challenge';

type GameView = 'map' | 'stage' | 'challenge';

export default function App(): React.ReactNode {
  const { progress, completeZone, isWorldUnlocked, isStageUnlocked, isZoneCompleted } = useGameLogic();
  const [currentView, setCurrentView] = useState<GameView>('map');
  const [selectedWorldId, setSelectedWorldId] = useState<number | null>(null);
  const [selectedStageId, setSelectedStageId] = useState<number | null>(null);
  const [selectedZone, setSelectedZone] = useState<Zone | null>(null);

  const handleSelectWorld = (worldId: number) => {
    setSelectedWorldId(worldId);
    setCurrentView('stage');
  };

  const handleSelectStage = (stageId: number) => {
    setSelectedStageId(stageId);
  };

  const handleStartZone = (zone: Zone) => {
    setSelectedZone(zone);
    setCurrentView('challenge');
  };
  
  const handleBackToMap = () => {
    setCurrentView('map');
    setSelectedWorldId(null);
    setSelectedStageId(null);
    setSelectedZone(null);
  };

  const handleBackToStages = () => {
    setCurrentView('stage');
    setSelectedStageId(null);
    setSelectedZone(null);
  };

  const handleChallengeComplete = () => {
    if (selectedWorldId && selectedStageId && selectedZone) {
      completeZone(selectedWorldId, selectedStageId, selectedZone.id);
    }
    setCurrentView('stage');
    setSelectedZone(null);
  };

  const selectedWorld = useMemo(
    () => GAME_WORLDS.find(w => w.id === selectedWorldId),
    [selectedWorldId]
  );

  const selectedStage = useMemo(
    () => selectedWorld?.stages.find(s => s.id === selectedStageId),
    [selectedWorld, selectedStageId]
  );
  
  const renderContent = () => {
    switch (currentView) {
      case 'challenge':
        return selectedWorld && selectedStage && selectedZone && (
          <Challenge
            world={selectedWorld}
            stage={selectedStage}
            zone={selectedZone}
            onComplete={handleChallengeComplete}
            onBack={handleBackToStages}
          />
        );
      case 'stage':
        return selectedWorld && (
          <StageView
            world={selectedWorld}
            progress={progress}
            isStageUnlocked={isStageUnlocked}
            isZoneCompleted={isZoneCompleted}
            onSelectStage={handleSelectStage}
            onStartZone={handleStartZone}
            selectedStageId={selectedStageId}
            onBack={handleBackToMap}
          />
        );
      case 'map':
      default:
        return (
          <WorldMap
            worlds={GAME_WORLDS}
            onSelectWorld={handleSelectWorld}
            isWorldUnlocked={isWorldUnlocked}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-stone-100 text-slate-800" style={{ background: "url('https://www.transparenttextures.com/patterns/old-paper.png')" }}>
      <div className="min-h-screen bg-stone-900/10">
        <Header progress={progress} />
        <main className="container mx-auto p-4 sm:p-6 lg:p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
