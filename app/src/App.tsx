import { useEffect, lazy, Suspense } from 'react';
import { PolymindLogo } from '@/components/brand/PolymindLogo';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Error Boundary
import { ErrorBoundary } from '@/components/atoms/ErrorBoundary';

// Analytics
import { analytics } from '@/lib/analytics';

// Store
import { useUserStore } from '@/store/userStore';

// Auth
import { AuthProvider } from '@/contexts/AuthContext';

// Celebration Modals (lazy-loaded — only rendered on user interaction)
const CelebrationModals = lazy(() => import('@/components/CelebrationModals'));


// Templates
import { PageLayout } from '@/components/templates';

// Code-split routes - lazy loaded for better performance
const Dashboard = lazy(() => import('@/features/dashboard/Dashboard').then(m => ({ default: m.Dashboard })));
const LearningPathway = lazy(() => import('@/features/learning-pathway/LearningPathway').then(m => ({ default: m.LearningPathway })));
const DailyChallenges = lazy(() => import('@/features/daily-challenges/DailyChallenges').then(m => ({ default: m.DailyChallenges })));
const Profile = lazy(() => import('@/features/profile/Profile').then(m => ({ default: m.Profile })));

const LearningSciencePage = lazy(() => import('@/features/science/LearningSciencePage').then(m => ({ default: m.LearningSciencePage })));
const BookListPage = lazy(() => import('@/features/books/BookListPage').then(m => ({ default: m.BookListPage })));
const BlogPage = lazy(() => import('@/features/blog/BlogPage').then(m => ({ default: m.BlogPage })));
const BlogArticlePage = lazy(() => import('@/features/blog/BlogArticlePage').then(m => ({ default: m.BlogArticlePage })));
const HowToPage = lazy(() => import('@/features/how-to/HowToPage').then(m => ({ default: m.HowToPage })));
const BrandKitPage = lazy(() => import('@/features/brand-kit/BrandKitPage').then(m => ({ default: m.BrandKitPage })));
const ChangelogPage = lazy(() => import('@/features/changelog/ChangelogPage').then(m => ({ default: m.ChangelogPage })));

// Landing Page
const LandingPage = lazy(() => import('@/features/landing/LandingPage').then(m => ({ default: m.LandingPage })));

// Legal Pages
const PrivacyPolicy = lazy(() => import('@/features/legal/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicy })));
const TermsOfService = lazy(() => import('@/features/legal/TermsOfService').then(m => ({ default: m.TermsOfService })));

// Explore Page
const ExplorePage = lazy(() => import('@/features/explore/ExplorePage').then(m => ({ default: m.ExplorePage })));

// Public lesson preview — no auth required
const PreviewLesson = lazy(() => import('@/features/preview/PreviewLesson').then(m => ({ default: m.PreviewLesson })));

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
      <PolymindLogo size="lg" variant="simple" animated />
    </div>
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

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

// App Routes
function AppRoutes() {
  return (
    <Routes>
      {/* Onboarding removed — redirect to dashboard */}
      <Route path="/onboarding" element={<Navigate to="/dashboard" replace />} />

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

      <Route path="/review" element={<Navigate to="/profile" replace />} />


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

      {/* Visual Lab - Legacy redirect to explore */}
      <Route path="/visualizations" element={<Navigate to="/explore" replace />} />

      {/* Connections — legacy, redirect to learn */}
      <Route path="/connections" element={<Navigate to="/pathway" replace />} />

      {/* Explore — full page */}
      <Route
        path="/explore"
        element={
          <ProtectedRoute>
            <PageLayout>
              <PageTransition>
                <Suspense fallback={<PageLoader />}>
                  <ExplorePage />
                </Suspense>
              </PageTransition>
            </PageLayout>
          </ProtectedRoute>
        }
      />


      {/* Public lesson preview — no auth required */}
      <Route
        path="/preview/:moduleId/:lessonId"
        element={
          <PageTransition>
            <Suspense fallback={<PageLoader />}>
              <PreviewLesson />
            </Suspense>
          </PageTransition>
        }
      />

      {/* Landing Page */}
      <Route
        path="/"
        element={
          <PageTransition>
            <Suspense fallback={<PageLoader />}>
              <LandingPage />
            </Suspense>
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

      {/* Legal Pages */}
      <Route
        path="/privacy"
        element={
          <PageTransition>
            <Suspense fallback={<PageLoader />}>
              <PrivacyPolicy />
            </Suspense>
          </PageTransition>
        }
      />
      <Route
        path="/terms"
        element={
          <PageTransition>
            <Suspense fallback={<PageLoader />}>
              <TermsOfService />
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
      <ErrorBoundary>
        <AuthProvider>
          <AppRoutes />
          <Suspense fallback={null}>
            <CelebrationModals />
          </Suspense>
        </AuthProvider>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
