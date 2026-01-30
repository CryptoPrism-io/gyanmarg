// Auth Gate Hook - Use this to require sign-in before specific actions
import { useState, useCallback } from 'react';
import { useAuth } from './useAuth';
import { SignInGate } from '@/components/organisms';

interface UseAuthGateReturn {
  /** Whether user is authenticated */
  isAuthenticated: boolean;
  /** Whether sign-in gate is currently shown */
  isGateOpen: boolean;
  /** Check auth and execute action if authenticated, or show gate */
  requireAuth: (onSuccess: () => void) => void;
  /** The SignInGate component to render (only renders when needed) */
  AuthGateModal: React.ReactNode;
}

/**
 * Hook to gate specific actions behind authentication
 *
 * Usage:
 * ```tsx
 * function LessonCard({ lesson }) {
 *   const { requireAuth, AuthGateModal } = useAuthGate();
 *
 *   const handleStartLesson = () => {
 *     requireAuth(() => {
 *       // This only runs if user is authenticated
 *       startLesson(lesson.id);
 *     });
 *   };
 *
 *   return (
 *     <>
 *       <button onClick={handleStartLesson}>Start Lesson</button>
 *       {AuthGateModal}
 *     </>
 *   );
 * }
 * ```
 */
export function useAuthGate(): UseAuthGateReturn {
  const { user, isConfigured } = useAuth();
  const [isGateOpen, setIsGateOpen] = useState(false);
  const [pendingAction, setPendingAction] = useState<(() => void) | null>(null);

  const isAuthenticated = Boolean(user) || !isConfigured;

  const requireAuth = useCallback((onSuccess: () => void) => {
    // If Firebase not configured, allow action (local-only mode)
    if (!isConfigured) {
      onSuccess();
      return;
    }

    // If already authenticated, execute action
    if (user) {
      onSuccess();
      return;
    }

    // Not authenticated - show gate and save action for after sign-in
    setPendingAction(() => onSuccess);
    setIsGateOpen(true);
  }, [user, isConfigured]);

  const handleSignIn = useCallback(() => {
    setIsGateOpen(false);
    // Execute the pending action after sign-in
    if (pendingAction) {
      pendingAction();
      setPendingAction(null);
    }
  }, [pendingAction]);

  const handleClose = useCallback(() => {
    setIsGateOpen(false);
    setPendingAction(null);
  }, []);

  const AuthGateModal = (
    <SignInGate
      isOpen={isGateOpen}
      onClose={handleClose}
      onSignIn={handleSignIn}
    />
  );

  return {
    isAuthenticated,
    isGateOpen,
    requireAuth,
    AuthGateModal,
  };
}

export default useAuthGate;
