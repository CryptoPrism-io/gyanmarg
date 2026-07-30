/**
 * Google Analytics 4 (GA4) Analytics Service
 *
 * Usage:
 *   import { analytics } from '@/lib/analytics';
 *   analytics.track('lesson_completed', { moduleId: 'ai-ml', lessonId: 'intro' });
 */

// Extend window for gtag
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

// GA4 Measurement ID - Replace with your actual ID
const GA_MEASUREMENT_ID = 'G-6EG3H24GE3';

/**
 * Check if GA is loaded
 */
function isGALoaded(): boolean {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
}

/**
 * Track a custom event
 */
function track(eventName: string, params?: Record<string, unknown>): void {
  if (!isGALoaded()) {
    console.debug('[Analytics] GA not loaded, skipping event:', eventName);
    return;
  }

  window.gtag?.('event', eventName, params);

  if (import.meta.env.DEV) {
    console.debug('[Analytics] Event tracked:', eventName, params);
  }
}

/**
 * Track page view (called automatically by GA4, but can be used for SPAs)
 */
function pageView(path: string, title?: string): void {
  if (!isGALoaded()) return;

  window.gtag?.('config', GA_MEASUREMENT_ID, {
    page_path: path,
    page_title: title,
  });
}

/**
 * Set user properties (for logged-in users)
 */
function setUserProperties(properties: Record<string, unknown>): void {
  if (!isGALoaded()) return;

  window.gtag?.('set', 'user_properties', properties);
}

/**
 * Set user ID (for cross-device tracking)
 */
function setUserId(userId: string | null): void {
  if (!isGALoaded()) return;

  window.gtag?.('config', GA_MEASUREMENT_ID, {
    user_id: userId,
  });
}

// ============================================
// Pre-defined Events for Polymind
// ============================================

const events = {
  // Onboarding
  onboardingStarted: () => track('onboarding_started'),
  onboardingCompleted: (modulesSelected: number) =>
    track('onboarding_completed', { modules_selected: modulesSelected }),

  // Authentication
  signInStarted: (method: string) => track('sign_in_started', { method }),
  signInCompleted: (method: string) => track('sign_in_completed', { method }),
  signOut: () => track('sign_out'),

  // Module & Lesson
  moduleViewed: (moduleId: string) => track('module_viewed', { module_id: moduleId }),
  lessonStarted: (moduleId: string, lessonId: string) =>
    track('lesson_started', { module_id: moduleId, lesson_id: lessonId }),
  lessonCompleted: (moduleId: string, lessonId: string, durationSeconds: number) =>
    track('lesson_completed', {
      module_id: moduleId,
      lesson_id: lessonId,
      duration_seconds: durationSeconds
    }),

  // Flashcards & Review
  flashcardReviewed: (rating: string, cardId: string) =>
    track('flashcard_reviewed', { rating, card_id: cardId }),
  reviewSessionCompleted: (cardsReviewed: number, correctRate: number) =>
    track('review_session_completed', {
      cards_reviewed: cardsReviewed,
      correct_rate: correctRate
    }),

  // Quiz
  quizStarted: (moduleId: string, lessonId: string) =>
    track('quiz_started', { module_id: moduleId, lesson_id: lessonId }),
  quizCompleted: (moduleId: string, lessonId: string, score: number, total: number) =>
    track('quiz_completed', {
      module_id: moduleId,
      lesson_id: lessonId,
      score,
      total,
      percentage: Math.round((score / total) * 100)
    }),

  // Gamification
  xpEarned: (amount: number, source: string) =>
    track('xp_earned', { amount, source }),
  levelUp: (newLevel: number) =>
    track('level_up', { new_level: newLevel }),
  achievementUnlocked: (achievementId: string) =>
    track('achievement_unlocked', { achievement_id: achievementId }),
  streakUpdated: (streakCount: number) =>
    track('streak_updated', { streak_count: streakCount }),

  // Engagement
  dailyChallengeStarted: (challengeId: string) =>
    track('daily_challenge_started', { challenge_id: challengeId }),
  dailyChallengeCompleted: (challengeId: string) =>
    track('daily_challenge_completed', { challenge_id: challengeId }),
  habitLogged: (habitId: string) =>
    track('habit_logged', { habit_id: habitId }),

  // Content
  blogArticleViewed: (articleId: string) =>
    track('blog_article_viewed', { article_id: articleId }),
  howToPageViewed: () => track('how_to_page_viewed'),
};

export const analytics = {
  track,
  pageView,
  setUserProperties,
  setUserId,
  events,
  isLoaded: isGALoaded,
};

export default analytics;
