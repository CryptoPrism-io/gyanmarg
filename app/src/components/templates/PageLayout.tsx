import { type ReactNode } from 'react';
import { Navbar, MobileNav } from '@/components/organisms';

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <main className="pb-24 md:pb-8">{children}</main>
      <MobileNav />
    </div>
  );
}

// Module Layout - for feature pages within the app
interface ModuleLayoutProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  rightContent?: ReactNode;
  children: ReactNode;
}

export function ModuleLayout({
  title,
  subtitle,
  icon,
  rightContent,
  children,
}: ModuleLayoutProps) {
  return (
    <div>
      {/* Module Header */}
      <div className="bg-card/50 backdrop-blur border-b border-border px-4 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            {icon && <span className="text-accent">{icon}</span>}
            <div>
              <h1 className="text-lg font-semibold text-primary">{title}</h1>
              {subtitle && <p className="text-sm text-muted">{subtitle}</p>}
            </div>
          </div>
          {rightContent && <div>{rightContent}</div>}
        </div>
      </div>

      {/* Module Content */}
      <div className="max-w-3xl mx-auto px-4 py-6">{children}</div>
    </div>
  );
}

// Onboarding Layout
interface OnboardingLayoutProps {
  step: number;
  totalSteps: number;
  children: ReactNode;
  footer: ReactNode;
}

export function OnboardingLayout({
  step,
  totalSteps,
  children,
  footer,
}: OnboardingLayoutProps) {
  const progress = ((step + 1) / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-primary flex flex-col">
      {/* Progress Bar */}
      <div className="p-6">
        <div className="max-w-md mx-auto">
          <div className="flex justify-between text-xs text-muted mb-3">
            <span>
              Step {step + 1} of {totalSteps}
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="bg-border rounded-full h-1.5">
            <div
              className="h-full bg-gradient-to-r from-accent to-amber-400 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-md w-full">{children}</div>
      </div>

      {/* Footer */}
      <div className="p-6 border-t border-border">
        <div className="max-w-md mx-auto">{footer}</div>
      </div>
    </div>
  );
}

export default PageLayout;
