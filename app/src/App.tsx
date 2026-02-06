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

// Store
import { useUserStore, usePendingAchievement } from '@/store/userStore';
import { useProgressStore, usePendingLevelUp } from '@/store/progressStore';

// Auth
import { AuthProvider } from '@/contexts/AuthContext';

// Celebration Components
import { AchievementUnlock, LevelUpModal } from '@/components/organisms';

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
const KnowledgeMap = lazy(() => import('@/features/knowledge-map/KnowledgeMap').then(m => ({ default: m.KnowledgeMap })));
const ModuleHub = lazy(() => import('@/features/module-hub/ModuleHub').then(m => ({ default: m.ModuleHub })));
const ModulePage = lazy(() => import('@/features/module-page/ModulePage'));
const Settings = lazy(() => import('@/features/settings/Settings').then(m => ({ default: m.Settings })));
const VisualLab = lazy(() => import('@/features/visual-lab/VisualLab').then(m => ({ default: m.VisualLab })));

const LearningSciencePage = lazy(() => import('@/features/science/LearningSciencePage').then(m => ({ default: m.LearningSciencePage })));
const BookListPage = lazy(() => import('@/features/books/BookListPage').then(m => ({ default: m.BookListPage })));
const BlogPage = lazy(() => import('@/features/blog/BlogPage').then(m => ({ default: m.BlogPage })));
const BlogArticlePage = lazy(() => import('@/features/blog/BlogArticlePage').then(m => ({ default: m.BlogArticlePage })));
const HowToPage = lazy(() => import('@/features/how-to/HowToPage').then(m => ({ default: m.HowToPage })));
const BrandKitPage = lazy(() => import('@/features/brand-kit/BrandKitPage').then(m => ({ default: m.BrandKitPage })));

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

// Protected route wrapper - auth checked at action level, no onboarding gate
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

// App Routes
function AppRoutes() {
  return (
    <Routes>
      {/* Onboarding removed — redirect to dashboard */}
      <Route
        path="/onboarding"
        element={<Navigate to="/dashboard" replace />}
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
        path="/pathway"
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

      <Route
        path="/connections"
        element={
          <ProtectedRoute>
            <PageLayout>
              <PageTransition>
                <Suspense fallback={<PageLoader />}>
                  <KnowledgeMap />
                </Suspense>
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
                <Suspense fallback={<PageLoader />}>
                  <Settings />
                </Suspense>
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
                <Suspense fallback={<PageLoader />}>
                  <VisualLab />
                </Suspense>
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
                <Suspense fallback={<PageLoader />}>
                  <ModuleHub />
                </Suspense>
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
                <Suspense fallback={<PageLoader />}>
                  <ModulePage />
                </Suspense>
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
      <AuthProvider>
        <AppRoutes />
        <CelebrationModals />
        <PWAInstallPrompt />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
