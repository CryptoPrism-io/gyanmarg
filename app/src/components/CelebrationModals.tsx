import { useEffect, useState } from 'react';

import { celebrationQueue, type CelebrationEvent } from '@/lib/celebrationQueue';
import { useUserStore, usePendingAchievement } from '@/store/userStore';
import { useProgressStore, usePendingLevelUp, usePendingVizUnlock } from '@/store/progressStore';

import { AchievementUnlock } from '@/components/organisms/AchievementUnlock';
import { LevelUpModal } from '@/components/organisms/LevelUpModal';
import { VizUnlockModal } from '@/components/organisms/VizUnlockModal';
export default function CelebrationModals() {
  const pendingAchievement = usePendingAchievement();
  const pendingLevelUp = usePendingLevelUp();
  const pendingVizUnlock = usePendingVizUnlock();
  const clearPendingAchievement = useUserStore((s) => s.clearPendingAchievement);
  const clearPendingLevelUp = useProgressStore((s) => s.clearPendingLevelUp);
  const clearPendingVizUnlock = useProgressStore((s) => s.clearPendingVizUnlock);

  const [showAchievement, setShowAchievement] = useState(false);
  const [showLevelUp, setShowLevelUp] = useState(false);
  const [showVizUnlock, setShowVizUnlock] = useState(false);
  const [currentAchievement, setCurrentAchievement] = useState<{
    id: string;
    name: string;
    xpReward: number;
  } | null>(null);
  const [currentLevel, setCurrentLevel] = useState<number>(1);
  const [currentVizUnlock, setCurrentVizUnlock] = useState<{
    vizId: string;
    moduleId: string;
    levelId: string;
  } | null>(null);

  useEffect(() => {
    celebrationQueue.initialize((event: CelebrationEvent) => {
      if (event.type === 'achievement') {
        setCurrentAchievement({
          id: event.payload.id,
          name: event.payload.name,
          xpReward: event.payload.xpReward,
        });
        setShowAchievement(true);
      } else if (event.type === 'levelUp') {
        setCurrentLevel(event.payload.newLevel);
        setShowLevelUp(true);
      } else if (event.type === 'vizUnlock') {
        setCurrentVizUnlock(event.payload);
        setShowVizUnlock(true);
      }
    });

    return () => celebrationQueue.destroy();
  }, []);

  useEffect(() => {
    if (pendingAchievement) {
      celebrationQueue.enqueue({
        type: 'achievement',
        payload: pendingAchievement,
      });
      clearPendingAchievement();
    }
  }, [pendingAchievement, clearPendingAchievement]);

  useEffect(() => {
    if (pendingLevelUp) {
      celebrationQueue.enqueue({
        type: 'levelUp',
        payload: { newLevel: pendingLevelUp },
      });
      clearPendingLevelUp();
    }
  }, [pendingLevelUp, clearPendingLevelUp]);

  useEffect(() => {
    if (pendingVizUnlock) {
      celebrationQueue.enqueue({
        type: 'vizUnlock',
        payload: pendingVizUnlock,
      });
      clearPendingVizUnlock();
    }
  }, [pendingVizUnlock, clearPendingVizUnlock]);

  const handleAchievementClose = () => {
    setShowAchievement(false);
    celebrationQueue.onCelebrationClosed();
  };

  const handleLevelUpClose = () => {
    setShowLevelUp(false);
    celebrationQueue.onCelebrationClosed();
  };

  const handleVizUnlockClose = () => {
    setShowVizUnlock(false);
    celebrationQueue.onCelebrationClosed();
  };

  return (
    <>
      <AchievementUnlock
        isOpen={showAchievement}
        onClose={handleAchievementClose}
        achievement={currentAchievement}
      />
      <LevelUpModal
        isOpen={showLevelUp}
        onClose={handleLevelUpClose}
        newLevel={currentLevel}
      />
      <VizUnlockModal
        isOpen={showVizUnlock}
        onClose={handleVizUnlockClose}
        vizUnlock={currentVizUnlock}
      />
    </>
  );
}
