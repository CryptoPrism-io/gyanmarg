import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  BookOpen,
  Brain,
  Zap,
  Flame,
} from 'lucide-react';
import { useProgressStore } from '@/store/progressStore';

const navItems = [
  { id: 'dashboard', path: '/dashboard', label: 'Home', icon: LayoutDashboard },
  { id: 'pathway', path: '/pathway', label: 'Learn', icon: BookOpen },
  { id: 'review', path: '/review', label: 'Review', icon: Brain },
  { id: 'challenges', path: '/challenges', label: 'Challenges', icon: Zap },
];

export function Navbar() {
  const location = useLocation();
  const userProgress = useProgressStore((state) => state.userProgress);

  return (
    <nav className="bg-card/95 backdrop-blur-xl sticky top-0 z-50 border-b border-border/50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <Link to="/dashboard" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent to-purple-500 flex items-center justify-center">
              <span className="text-white font-bold text-xs">G</span>
            </div>
          </Link>

          {/* Desktop Navigation - Clean icons only */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive =
                location.pathname === item.path ||
                location.pathname.startsWith(`${item.path}/`);
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  title={item.label}
                  className={`
                    flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium
                    transition-all duration-200
                    ${isActive
                      ? 'bg-accent/15 text-accent'
                      : 'text-muted hover:text-primary hover:bg-secondary/50'
                    }
                  `}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden lg:inline">{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Compact XP & Streak */}
          <div className="flex items-center gap-3">
            {(userProgress?.currentStreak ?? 0) > 0 && (
              <div className="flex items-center gap-1 text-orange-400">
                <Flame className="w-4 h-4" />
                <span className="text-xs font-semibold">{userProgress.currentStreak}</span>
              </div>
            )}
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10">
              <span className="text-xs font-semibold text-amber-500">
                {(userProgress?.xp ?? 0).toLocaleString()}
              </span>
              <span className="text-[10px] text-amber-500/70">XP</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Mobile Bottom Navigation - Clean 4-item nav
const mobileNavItems = [
  { id: 'dashboard', path: '/dashboard', label: 'Home', icon: LayoutDashboard },
  { id: 'pathway', path: '/pathway', label: 'Learn', icon: BookOpen },
  { id: 'review', path: '/review', label: 'Review', icon: Brain },
  { id: 'challenges', path: '/challenges', label: 'Goals', icon: Zap },
];

export function MobileNav() {
  const location = useLocation();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-xl border-t border-border/50 z-50 safe-area-bottom">
      <div className="flex justify-around items-center h-14 px-1">
        {mobileNavItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            location.pathname === item.path ||
            location.pathname.startsWith(`${item.path}/`);
          return (
            <Link
              key={item.id}
              to={item.path}
              className={`
                flex flex-col items-center justify-center py-1.5 px-2 rounded-lg
                transition-all duration-200 min-w-[52px]
                ${isActive ? 'text-accent' : 'text-muted'}
              `}
            >
              <Icon className={`w-5 h-5 ${isActive ? '' : 'opacity-70'}`} />
              <span className={`text-[9px] mt-0.5 font-medium ${isActive ? '' : 'opacity-70'}`}>
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
