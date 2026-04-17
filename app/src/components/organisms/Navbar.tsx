import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Icon } from '@/components/atoms/Icon';
import { useProgressStore } from '@/store/progressStore';
import { useAuth } from '@/hooks';
import { UserAvatar, GoogleSignInButton } from '@/components/molecules';
import { SearchModal } from '@/components/organisms/SearchModal';

const navItems = [
  { id: 'dashboard', path: '/dashboard', label: 'Index', icon: 'grid_view' },
  { id: 'pathway', path: '/pathway', label: 'Archive', icon: 'auto_stories' },
  { id: 'review', path: '/review', label: 'Reflect', icon: 'history_edu' },
  { id: 'profile', path: '/profile', label: 'Profile', icon: 'person' },
];

export function Navbar() {
  const location = useLocation();
  const userProgress = useProgressStore((state) => state.userProgress);
  const { user, isConfigured } = useAuth();

  return (
    <nav className="glass-nav sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link to="/dashboard" className="flex items-center gap-2 group">
            <Icon name="auto_awesome" size={20} filled className="text-[var(--color-accent)]" />
            <span className="font-serif italic text-lg tracking-tight">Polymind</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive =
                location.pathname === item.path ||
                location.pathname.startsWith(`${item.path}/`);
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  title={item.label}
                  className="relative"
                >
                  <div
                    className={`
                      flex items-center gap-2 px-4 py-2 text-sm transition-colors
                      ${isActive
                        ? 'text-[var(--color-accent)]'
                        : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]'
                      }
                    `}
                  >
                    <Icon name={item.icon} size={18} filled={isActive} weight={isActive ? 400 : 200} />
                    <span className="hidden lg:inline text-[11px] uppercase tracking-[0.15em] font-semibold">{item.label}</span>
                  </div>
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-[var(--color-accent)]"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Search + XP */}
          <div className="flex items-center gap-3">
            <SearchModal />

            {/* XP Badge — editorial style */}
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold tabular-nums text-[var(--color-accent)]">
                {(userProgress?.xp ?? 0).toLocaleString()}
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[var(--color-text-muted)]">XP</span>
            </div>

            <Icon name="search" size={20} className="text-[var(--color-text-primary)] cursor-pointer" />

            {/* User Avatar or Sign In Button */}
            {isConfigured && (
              user ? (
                <UserAvatar size="sm" />
              ) : (
                <GoogleSignInButton
                  variant="outline"
                  size="sm"
                  iconOnly
                  className="hidden sm:flex"
                />
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

// Mobile Bottom Navigation — Editorial style
export function MobileNav() {
  const location = useLocation();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 safe-area-bottom">
      <div className="glass-nav px-6 pb-8 pt-3 flex justify-between items-center">
        {navItems.map((item) => {
          const isActive =
            location.pathname === item.path ||
            location.pathname.startsWith(`${item.path}/`);

          return (
            <Link
              key={item.id}
              to={item.path}
              className={`flex flex-col items-center gap-1 transition-colors ${
                isActive ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-muted)]'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="mobile-nav-indicator"
                  className="w-6 h-[2px] bg-[var(--color-accent)] mb-0.5"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
              <Icon
                name={item.icon}
                size={22}
                filled={isActive}
                weight={isActive ? 400 : 200}
              />
              <span className="text-[9px] uppercase tracking-[0.2em] font-semibold">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;
