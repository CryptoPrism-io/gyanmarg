import { useState } from 'react';
import { useUserStore } from '@/store/userStore';

export interface PaywallState {
  paywallModuleId: string | null;
  canAccessModule: (moduleId: string) => boolean;
  canAccessLesson: (moduleId: string, lessonIndex: number) => boolean;
  showPaywall: (moduleId?: string | null) => void;
  closePaywall: () => void;
}

/**
 * Hook that returns access helpers and paywall trigger state.
 *
 * Access rules:
 * - hasLifetimeAccess → full access to everything
 * - isTrialActive() → 60-day free trial, full access
 * - freeModules → modules chosen during onboarding, always free
 * - purchasedModules → individually bought at ₹99
 * - lesson index < 3 (first 3 lessons) → always free regardless of module access
 */
export function usePaywall(): PaywallState {
  const freeModules = useUserStore(state => state.freeModules);
  const purchasedModules = useUserStore(state => state.purchasedModules);
  const hasLifetimeAccess = useUserStore(state => state.hasLifetimeAccess);
  const isTrialActive = useUserStore(state => state.isTrialActive);

  const [paywallModuleId, setPaywallModuleId] = useState<string | null>(null);

  function canAccessModule(moduleId: string): boolean {
    return (
      hasLifetimeAccess ||
      isTrialActive() ||
      freeModules.includes(moduleId) ||
      purchasedModules.includes(moduleId)
    );
  }

  function canAccessLesson(moduleId: string, lessonIndex: number): boolean {
    return lessonIndex < 3 || canAccessModule(moduleId); // first 3 lessons always free
  }

  function showPaywall(moduleId: string | null = null): void {
    setPaywallModuleId(moduleId);
  }

  function closePaywall(): void {
    setPaywallModuleId(null);
  }

  return { canAccessModule, canAccessLesson, showPaywall, closePaywall, paywallModuleId };
}

export default usePaywall;
