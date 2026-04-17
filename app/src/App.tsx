import { useEffect, useState, lazy, Suspense } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Analytics
import { analytics } from '@/lib/analytics';

// Celebration Queue
import { celebrationQueue, type CelebrationEvent } from '@/lib/celebrationQueue';

// Store
import { useUserStore, usePendingAchievement, useIsOnboarded } from '@/store/userStore';
import { useProgressStore, usePendingLevelUp, usePendingVizUnlock } from '@/store/progressStore';

// Auth
import { AuthProvider } from '@/contexts/AuthContext';

// Celebration Components
import { AchievementUnlock, LevelUpModal, VizUnlockModal } from '@/components/organisms';
import DailyRewardModal from '@/components/organisms/DailyRewardModal';

// PWA Install Prompt
import { PWAInstallPrompt } from '@/components/molecules';

// Templates
import { PageLayout } from '@/components/templates';

// Critical path - loaded immediately
import { LandingPage } from '@/features/landing/LandingPage';

// Code-split routes - lazy loaded for better performance
const Dashboard = lazy(() => import('@/features/dashboard/Dashboard').then(m => ({ default: m.Dashboard })));
const LearningPathway = lazy(() => import('@/features/learning-pathway/LearningPathway').then(m => ({ default: m.LearningPathway })));
const SpacedRepetition = lazy(() => import('@/features/spaced-repetition/SpacedRepetition').then(m => ({ default: m.SpacedRepetition })));
const DailyChallenges = lazy(() => import('@/features/daily-challenges/DailyChallenges').then(m => ({ default: m.DailyChallenges })));
const VisualLab = lazy(() => import('@/features/visual-lab/VisualLab').then(m => ({ default: m.VisualLab })));
const Profile = lazy(() => import('@/features/profile/Profile').then(m => ({ default: m.Profile })));
const Onboarding = lazy(() => import('@/features/onboarding/Onboarding').then(m => ({ default: m.Onboarding })));

const LearningSciencePage = lazy(() => import('@/features/science/LearningSciencePage').then(m => ({ default: m.LearningSciencePage })));
const BookListPage = lazy(() => import('@/features/books/BookListPage').then(m => ({ default: m.BookListPage })));
const BlogPage = lazy(() => import('@/features/blog/BlogPage').then(m => ({ default: m.BlogPage })));
const BlogArticlePage = lazy(() => import('@/features/blog/BlogArticlePage').then(m => ({ default: m.BlogArticlePage })));
const HowToPage = lazy(() => import('@/features/how-to/HowToPage').then(m => ({ default: m.HowToPage })));
const BrandKitPage = lazy(() => import('@/features/brand-kit/BrandKitPage').then(m => ({ default: m.BrandKitPage })));
const ChangelogPage = lazy(() => import('@/features/changelog/ChangelogPage').then(m => ({ default: m.ChangelogPage })));

// Experimental Features
const ReelReader = lazy(() => import('@/features/experimental/ReelReader').then(m => ({ default: m.ReelReader })));
const LabHub = lazy(() => import('@/features/experimental/LabHub'));
const StoryMode = lazy(() => import('@/features/experimental/StoryMode'));
const KnowledgeCards = lazy(() => import('@/features/experimental/KnowledgeCards'));
const MindMapExplorer = lazy(() => import('@/features/experimental/MindMapExplorer'));

// Loading fallback for lazy components
function PageLoader() {
  return (
    <div className="min-h-screen bg-base flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-2 border-golden/30 border-t-golden rounded-full animate-spin" />
        <p className="text-text-muted text-sm">Loading...</p>
      </div>
    </div>
  );
}

// Global Celebration Modals
function CelebrationModals() {
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

  // Daily reward state
  const [showDailyReward, setShowDailyReward] = useState(false);
  const [dailyRewardData, setDailyRewardData] = useState<{
    streak: number;
    reward: number;
  } | null>(null);

  const checkDailyLogin = useUserStore((s) => s.checkDailyLogin);

  // Check daily login on mount
  useEffect(() => {
    const result = checkDailyLogin();
    if (result.isNewDay && result.reward !== null) {
      setDailyRewardData({
        streak: result.streak,
        reward: result.reward,
      });
      setShowDailyReward(true);
    }
  }, []); // Only run once on mount

  // Initialize celebration queue
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

  // Handle pending achievement - enqueue instead of showing immediately
  useEffect(() => {
    if (pendingAchievement) {
      // Just use the pending achievement directly - it's already the right shape
      celebrationQueue.enqueue({
        type: 'achievement',
        payload: pendingAchievement,
      });
      clearPendingAchievement();
    }
  }, [pendingAchievement, clearPendingAchievement]);

  // Handle pending level up - enqueue instead of auto-clearing
  // NOW ENABLED: Modal queue system prevents blocking during lessons
  useEffect(() => {
    if (pendingLevelUp) {
      celebrationQueue.enqueue({
        type: 'levelUp',
        payload: { newLevel: pendingLevelUp },
      });
      clearPendingLevelUp();
    }
  }, [pendingLevelUp, clearPendingLevelUp]);

  // Handle pending viz unlock — enqueue as celebration
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
      <DailyRewardModal
        isOpen={showDailyReward}
        onClose={() => setShowDailyReward(false)}
        streak={dailyRewardData?.streak || 1}
        reward={dailyRewardData?.reward || 0}
      />
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

// Page transition wrapper with analytics
function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  // Track page views on route change
  useEffect(() => {
    analytics.pageView(location.pathname, document.title);
  }, [location.pathname]);

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

// Protected route wrapper - redirects to onboarding if not completed
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const isOnboarded = useIsOnboarded();
  if (!isOnboarded) {
    return <Navigate to="/onboarding" replace />;
  }
  return <>{children}</>;
}

// App Routes
function AppRoutes() {
  return (
    <Routes>
      {/* Onboarding flow for new users */}
      <Route
        path="/onboarding"
        element={
          <Suspense fallback={<PageLoader />}>
            <Onboarding />
          </Suspense>
        }
      />

      {/* Main App Routes - Lazy loaded */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <PageLayout>
              <PageTransition>
                <Suspense fallback={<PageLoader />}>
                  <Dashboard />
                </Suspense>
              </PageTransition>
            </PageLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/pathway/:moduleId?/:levelId?/:lessonId?"
        element={
          <ProtectedRoute>
            <PageLayout>
              <PageTransition>
                <Suspense fallback={<PageLoader />}>
                  <LearningPathway />
                </Suspense>
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
                <Suspense fallback={<PageLoader />}>
                  <SpacedRepetition />
                </Suspense>
              </PageTransition>
            </PageLayout>
          </ProtectedRoute>
        }
      />


      {/* Challenges — still accessible but not in main nav */}
      <Route
        path="/challenges"
        element={
          <ProtectedRoute>
            <PageLayout>
              <PageTransition>
                <Suspense fallback={<PageLoader />}>
                  <DailyChallenges />
                </Suspense>
              </PageTransition>
            </PageLayout>
          </ProtectedRoute>
        }
      />

      {/* Profile — unified badge showcase, saved cards, settings */}
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <PageLayout>
              <PageTransition>
                <Suspense fallback={<PageLoader />}>
                  <Profile />
                </Suspense>
              </PageTransition>
            </PageLayout>
          </ProtectedRoute>
        }
      />

      {/* Legacy redirects */}
      <Route path="/settings" element={<Navigate to="/profile" replace />} />
      <Route path="/saved" element={<Navigate to="/profile" replace />} />

      {/* Lab Hub - Experimental Learning Modes */}
      <Route
        path="/lab"
        element={
          <ProtectedRoute>
            <PageLayout>
              <PageTransition>
                <Suspense fallback={<PageLoader />}>
                  <LabHub />
                </Suspense>
              </PageTransition>
            </PageLayout>
          </ProtectedRoute>
        }
      />

      {/* Experimental Story Mode - Full-screen, no PageLayout */}
      <Route
        path="/lab/story/:moduleId/:lessonId"
        element={
          <ProtectedRoute>
            <Suspense fallback={<PageLoader />}>
              <StoryMode />
            </Suspense>
          </ProtectedRoute>
        }
      />

      {/* Experimental Knowledge Cards - Full-screen, no PageLayout */}
      <Route
        path="/lab/cards/:moduleId/:lessonId"
        element={
          <ProtectedRoute>
            <Suspense fallback={<PageLoader />}>
              <KnowledgeCards />
            </Suspense>
          </ProtectedRoute>
        }
      />

      {/* Experimental Mind Map Explorer - Full-screen, no PageLayout */}
      <Route
        path="/lab/map/:moduleId/:lessonId"
        element={
          <ProtectedRoute>
            <Suspense fallback={<PageLoader />}>
              <MindMapExplorer />
            </Suspense>
          </ProtectedRoute>
        }
      />

      {/* Experimental Reel Reader - Full-screen, no PageLayout */}
      <Route
        path="/lab/reels/:moduleId/:lessonId"
        element={
          <ProtectedRoute>
            <Suspense fallback={<PageLoader />}>
              <ReelReader />
            </Suspense>
          </ProtectedRoute>
        }
      />

      {/* Visual Lab - Legacy route, now accessible via dedicated path */}
      <Route
        path="/visualizations"
        element={
          <ProtectedRoute>
            <PageLayout>
              <PageTransition>
                <Suspense fallback={<PageLoader />}>
                  <VisualLab />
                </Suspense>
              </PageTransition>
            </PageLayout>
          </ProtectedRoute>
        }
      />

      {/* Connections — legacy, redirect to learn */}
      <Route path="/connections" element={<Navigate to="/pathway" replace />} />

      {/* Explore — temp redirect until ExplorePage lands */}
      <Route path="/explore" element={<Navigate to="/pathway" replace />} />


      {/* Landing Page */}
      <Route
        path="/"
        element={
          <PageTransition>
            <LandingPage />
          </PageTransition>
        }
      />

      {/* Public Pages */}
      <Route
        path="/science"
        element={
          <PageTransition>
            <Suspense fallback={<PageLoader />}>
              <LearningSciencePage />
            </Suspense>
          </PageTransition>
        }
      />
      <Route
        path="/books"
        element={
          <PageTransition>
            <Suspense fallback={<PageLoader />}>
              <BookListPage />
            </Suspense>
          </PageTransition>
        }
      />
      <Route
        path="/blog"
        element={
          <PageTransition>
            <Suspense fallback={<PageLoader />}>
              <BlogPage />
            </Suspense>
          </PageTransition>
        }
      />
      <Route
        path="/blog/:articleId"
        element={
          <PageTransition>
            <Suspense fallback={<PageLoader />}>
              <BlogArticlePage />
            </Suspense>
          </PageTransition>
        }
      />
      <Route
        path="/how-to"
        element={
          <PageTransition>
            <Suspense fallback={<PageLoader />}>
              <HowToPage />
            </Suspense>
          </PageTransition>
        }
      />
      <Route
        path="/brand-kit"
        element={
          <PageTransition>
            <Suspense fallback={<PageLoader />}>
              <BrandKitPage />
            </Suspense>
          </PageTransition>
        }
      />
      <Route
        path="/changelog"
        element={
          <PageTransition>
            <Suspense fallback={<PageLoader />}>
              <ChangelogPage />
            </Suspense>
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
function useThemeSync() {
  const theme = useUserStore((s) => s.settings.theme);
  useEffect(() => {
    const resolved = theme === 'system'
      ? (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')
      : theme;
    document.documentElement.setAttribute('data-theme', resolved);

    // Also update Tailwind bg classes on body
    if (resolved === 'light') {
      document.body.style.background = '#FAF9F6';
      document.body.style.color = '#1A1A1A';
    } else {
      document.body.style.background = '#141312';
      document.body.style.color = '#E6E1DF';
    }
  }, [theme]);
}

function App() {
  useThemeSync();

  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
        <CelebrationModals />
        <PWAInstallPrompt />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
