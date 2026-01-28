import { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Store
import { useUserStore, usePendingAchievement } from '@/store/userStore';
import { useProgressStore, usePendingLevelUp } from '@/store/progressStore';
import { useHabitStore } from '@/store/habitStore';

// Celebration Components
import { AchievementUnlock, LevelUpModal } from '@/components/organisms';

// PWA Install Prompt
import { PWAInstallPrompt } from '@/components/molecules';

// Templates
import { PageLayout } from '@/components/templates';

// Features
import { LandingPage } from '@/features/landing/LandingPage';
import { Onboarding } from '@/features/onboarding/Onboarding';
import { Dashboard } from '@/features/dashboard/Dashboard';
import { LearningPathway } from '@/features/learning-pathway/LearningPathway';
import { SpacedRepetition } from '@/features/spaced-repetition/SpacedRepetition';
import { HabitCalendar } from '@/features/habit-calendar/HabitCalendar';
import { DailyChallenges } from '@/features/daily-challenges/DailyChallenges';
import { KnowledgeMap } from '@/features/knowledge-map/KnowledgeMap';
import { ModuleHub } from '@/features/module-hub/ModuleHub';
import ModulePage from '@/features/module-page/ModulePage';
import { Settings } from '@/features/settings/Settings';
import { VisualLab } from '@/features/visual-lab/VisualLab';

// Global Celebration Modals
function CelebrationModals() {
  const pendingAchievement = usePendingAchievement();
  const pendingLevelUp = usePendingLevelUp();
  const clearPendingAchievement = useUserStore((s) => s.clearPendingAchievement);
  const clearPendingLevelUp = useProgressStore((s) => s.clearPendingLevelUp);

  const [showAchievement, setShowAchievement] = useState(false);
  const [showLevelUp, setShowLevelUp] = useState(false);
  const [currentAchievement, setCurrentAchievement] = useState<{
    id: string;
    name: string;
    xpReward: number;
  } | null>(null);
  const [currentLevel, setCurrentLevel] = useState<number>(1);

  // Handle pending achievement
  useEffect(() => {
    if (pendingAchievement) {
      setCurrentAchievement({
        id: pendingAchievement.id,
        name: pendingAchievement.name,
        xpReward: pendingAchievement.xpReward,
      });
      setShowAchievement(true);
    }
  }, [pendingAchievement]);

  // Handle pending level up
  useEffect(() => {
    if (pendingLevelUp) {
      setCurrentLevel(pendingLevelUp);
      setShowLevelUp(true);
    }
  }, [pendingLevelUp]);

  const handleAchievementClose = () => {
    setShowAchievement(false);
    clearPendingAchievement();
  };

  const handleLevelUpClose = () => {
    setShowLevelUp(false);
    clearPendingLevelUp();
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
    </>
  );
}

// Page transition wrapper
function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

// Protected route wrapper
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const isOnboarded = useUserStore((state) => state.isOnboarded);

  if (!isOnboarded) {
    return <Navigate to="/onboarding" replace />;
  }

  return <>{children}</>;
}

// App Routes
function AppRoutes() {
  const isOnboarded = useUserStore((state) => state.isOnboarded);
  const resetDailyHabits = useHabitStore((state) => state.resetDailyHabits);

  // Reset daily habits at midnight
  useEffect(() => {
    resetDailyHabits();
  }, [resetDailyHabits]);

  return (
    <Routes>
      {/* Onboarding */}
      <Route
        path="/onboarding"
        element={
          isOnboarded ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <PageTransition>
              <Onboarding />
            </PageTransition>
          )
        }
      />

      {/* Main App Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <PageLayout>
              <PageTransition>
                <Dashboard />
              </PageTransition>
            </PageLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/pathway"
        element={
          <ProtectedRoute>
            <PageLayout>
              <PageTransition>
                <LearningPathway />
              </PageTransition>
            </PageLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/review"
        element={
          <ProtectedRoute>
            <PageLayout>
              <PageTransition>
                <SpacedRepetition />
              </PageTransition>
            </PageLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/habits"
        element={
          <ProtectedRoute>
            <PageLayout>
              <PageTransition>
                <HabitCalendar />
              </PageTransition>
            </PageLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/challenges"
        element={
          <ProtectedRoute>
            <PageLayout>
              <PageTransition>
                <DailyChallenges />
              </PageTransition>
            </PageLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/connections"
        element={
          <ProtectedRoute>
            <PageLayout>
              <PageTransition>
                <KnowledgeMap />
              </PageTransition>
            </PageLayout>
          </ProtectedRoute>
        }
      />

      {/* Settings */}
      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <PageLayout>
              <PageTransition>
                <Settings />
              </PageTransition>
            </PageLayout>
          </ProtectedRoute>
        }
      />

      {/* Visual Lab */}
      <Route
        path="/lab"
        element={
          <ProtectedRoute>
            <PageLayout>
              <PageTransition>
                <VisualLab />
              </PageTransition>
            </PageLayout>
          </ProtectedRoute>
        }
      />

      {/* Module Hub */}
      <Route
        path="/modules"
        element={
          <ProtectedRoute>
            <PageLayout>
              <PageTransition>
                <ModuleHub />
              </PageTransition>
            </PageLayout>
          </ProtectedRoute>
        }
      />

      {/* Individual Module Pages */}
      <Route
        path="/modules/:moduleId"
        element={
          <ProtectedRoute>
            <PageLayout>
              <PageTransition>
                <ModulePage />
              </PageTransition>
            </PageLayout>
          </ProtectedRoute>
        }
      />

      {/* Landing Page */}
      <Route
        path="/"
        element={
          <PageTransition>
            <LandingPage />
          </PageTransition>
        }
      />

      {/* 404 */}
      <Route
        path="*"
        element={
          <Navigate to="/" replace />
        }
      />
    </Routes>
  );
}

// Main App
function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <CelebrationModals />
      <PWAInstallPrompt />
    </BrowserRouter>
  );
}

export default App;
