import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Navbar, MobileNav } from '@/components/organisms';
import { ProgressBar } from '@/components/atoms';

interface PageLayoutProps {
  children: ReactNode;
  showNav?: boolean;
  className?: string;
}

// Animated Background Component - Exported for reuse
export function AnimatedBackground() {
  return (
    <div className="animated-gradient-bg pointer-events-none">
      {/* Wave orbs */}
      <div className="wave-orb wave-orb-1" />
      <div className="wave-orb wave-orb-2" />
      <div className="wave-orb wave-orb-3" />
      <div className="wave-orb wave-orb-4" />

      {/* Wave lines */}
      <div className="wave-lines">
        <div className="wave-line wave-line-1" />
        <div className="wave-line wave-line-2" />
        <div className="wave-line wave-line-3" />
      </div>

      {/* Sun dust particles */}
      <div className="particles-container">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 25}s`,
              animationDuration: `${20 + Math.random() * 20}s`,
              opacity: 0.3 + Math.random() * 0.5,
              width: `${0.5 + Math.random() * 0.5}px`,
              height: `${0.5 + Math.random() * 0.5}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function PageLayout({ children, showNav = true, className = '' }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-base">
      {/* Animated gradient background */}
      <AnimatedBackground />

      {/* Content */}
      <div className="relative z-10">
        {showNav && <Navbar />}
        <main className={`pb-20 md:pb-8 ${className}`}>{children}</main>
        {showNav && <MobileNav />}
      </div>
    </div>
  );
}

// Module Layout - for feature pages
interface ModuleLayoutProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  rightContent?: ReactNode;
  children: ReactNode;
  headerGradient?: 'sunrise' | 'aurora' | 'forest' | 'sunset';
}

const gradientStyles = {
  sunrise: 'from-sunrise/5 to-transparent',
  aurora: 'from-lavender/5 to-transparent',
  forest: 'from-sage/5 to-transparent',
  sunset: 'from-coral/5 to-transparent',
};

export function ModuleLayout({
  title,
  subtitle,
  icon,
  rightContent,
  children,
  headerGradient = 'sunrise',
}: ModuleLayoutProps) {
  return (
    <div>
      {/* Module Header with gradient */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`
          relative overflow-hidden
          bg-gradient-to-b ${gradientStyles[headerGradient]}
          border-b border-white/[0.06]
          px-3 py-2.5 sm:px-4 sm:py-5
        `}
      >
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.03)_1px,transparent_0)] bg-[size:24px_24px]" />

        <div className="relative max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-4">
            {icon && (
              <div className="w-7 h-7 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-sunrise/10 border border-sunrise/20 flex items-center justify-center text-sunrise [&>svg]:w-3.5 [&>svg]:h-3.5 sm:[&>svg]:w-5 sm:[&>svg]:h-5">
                {icon}
              </div>
            )}
            <div>
              <h1 className="text-sm sm:text-xl font-display font-semibold text-text-primary">
                {title}
              </h1>
              {subtitle && (
                <p className="text-[10px] sm:text-sm text-text-secondary mt-0.5">{subtitle}</p>
              )}
            </div>
          </div>
          {rightContent && <div className="[&>*]:scale-75 sm:[&>*]:scale-100 origin-right">{rightContent}</div>}
        </div>
      </motion.div>

      {/* Module Content */}
      <div className="max-w-4xl mx-auto px-2 py-3 sm:px-4 sm:py-6">{children}</div>
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
    <div className="min-h-screen bg-base flex flex-col relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-glow-top opacity-40" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-lavender/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-sunrise/5 rounded-full blur-3xl" />
      </div>

      {/* Progress Bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative p-6"
      >
        <div className="max-w-md mx-auto">
          <div className="flex justify-between text-xs mb-3">
            <span className="text-text-secondary font-medium">
              Step {step + 1} of {totalSteps}
            </span>
            <span className="text-sunrise font-semibold">
              {Math.round(progress)}%
            </span>
          </div>
          <ProgressBar
            value={step + 1}
            max={totalSteps}
            variant="gradient"
            size="sm"
            animated
          />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative flex-1 flex items-center justify-center p-6">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="max-w-md w-full"
        >
          {children}
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative p-6 border-t border-white/[0.06] bg-elevated/50 backdrop-blur-sm"
      >
        <div className="max-w-md mx-auto">{footer}</div>
      </motion.div>
    </div>
  );
}

// Hero Section - For landing/marketing pages
interface HeroSectionProps {
  title: string | ReactNode;
  subtitle?: string;
  children?: ReactNode;
  centered?: boolean;
}

export function HeroSection({
  title,
  subtitle,
  children,
  centered = true,
}: HeroSectionProps) {
  return (
    <section
      className={`
        relative py-16 md:py-24 px-4
        ${centered ? 'text-center' : ''}
      `}
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-sunrise/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-display-lg gradient-text"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-text-secondary max-w-xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}

// Section Container - For organizing content sections
interface SectionProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  action?: ReactNode;
}

export function Section({
  title,
  subtitle,
  children,
  className = '',
  action,
}: SectionProps) {
  return (
    <section className={`py-3 sm:py-6 ${className}`}>
      {(title || action) && (
        <div className="flex items-center justify-between mb-2 sm:mb-4">
          <div>
            {title && (
              <h2 className="text-xs sm:text-lg font-display font-semibold text-text-primary">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-[10px] sm:text-sm text-text-secondary mt-0.5">{subtitle}</p>
            )}
          </div>
          {action}
        </div>
      )}
      {children}
    </section>
  );
}

export default PageLayout;
