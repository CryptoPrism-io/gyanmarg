import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Icon } from '@/components/atoms/Icon';
import { useAuthContext } from '@/contexts/AuthContext';
import { useProgressStore } from '@/store/progressStore';
import { useSpacedRepetitionStore } from '@/store/spacedRepetitionStore';
import { useUserStore } from '@/store/userStore';
import { FreeTrialGate } from '@/components/organisms/FreeTrialGate';
import { getDailyQuote } from '@/data/quotes';

const fadeIn = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 28 } },
};

export function Dashboard() {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const userName = user?.displayName || 'Reader';
  const generateWeeklyChallenge = useProgressStore((s) => s.generateWeeklyChallenge);
  const updateStreak = useProgressStore((s) => s.updateStreak);
  const refreshStreakFreeze = useProgressStore((s) => s.refreshStreakFreeze);
  const lastViewedLesson = useProgressStore((s) => s.lastViewedLesson);
  const userProgress = useProgressStore((s) => s.userProgress);

  const hasLifetimeAccess = useUserStore((s) => s.hasLifetimeAccess);
  const isTrialActive = useUserStore((s) => s.isTrialActive);
  const purchasedModules = useUserStore((s) => s.purchasedModules);
  const showUpgradeBanner = !hasLifetimeAccess && !isTrialActive() && purchasedModules.length === 0;

  const [isPaywallOpen, setIsPaywallOpen] = useState(false);

  const getDueCards = useSpacedRepetitionStore((s) => s.getDueCards);
  const dueCount = useMemo(() => getDueCards().length, [getDueCards]);

  useEffect(() => {
    generateWeeklyChallenge();
    updateStreak();
    refreshStreakFreeze();
  }, [generateWeeklyChallenge, updateStreak, refreshStreakFreeze]);

  const greeting = useMemo(() => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
  }, []);

  const dailyQuote = getDailyQuote();
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);

  // Daily power: calculate which activities are done
  const hasLesson = (userProgress?.lessonsCompleted?.length ?? 0) > 0;
  const totalReviews = useSpacedRepetitionStore((s) => s.totalReviews);
  const hasReview = totalReviews > 0;
  const hasStreak = (userProgress?.currentStreak ?? 0) > 0;
  const powerActivities = [
    { id: 'lesson', icon: 'menu_book', label: 'Lesson', done: hasLesson },
    { id: 'review', icon: 'psychology', label: 'Review', done: hasReview },
    { id: 'challenge', icon: 'emoji_events', label: 'Challenge', done: false },
    { id: 'streak', icon: 'local_fire_department', label: 'Streak', done: hasStreak },
  ];
  const powerPercent = powerActivities.filter(a => a.done).length * 25;

  return (
    <div className="pb-28">
      {/* Upgrade banner — shown only to users with no purchases yet */}
      {showUpgradeBanner && (
        <div className="px-4 pt-4 max-w-3xl mx-auto">
          <div className="flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl bg-green-500/8 border border-green-500/20 text-sm">
            <span className="text-green-400/90 text-[11px] leading-snug">
              ✨ Unlock all 76 modules free for 60 days — no card required
            </span>
            <button
              onClick={() => setIsPaywallOpen(true)}
              className="shrink-0 px-3 py-1 rounded-lg bg-green-500 hover:bg-green-400 text-black text-[11px] font-semibold transition-colors"
            >
              Start Free Trial
            </button>
          </div>
        </div>
      )}

      <main className="px-6 space-y-16 mt-8 max-w-3xl mx-auto">

        {/* === HERO QUOTE === */}
        <motion.section initial="hidden" animate="visible" variants={fadeIn}>
          <div className="w-12 h-[1px] bg-[var(--color-accent)] mb-8" />
          <h2 className="text-3xl md:text-5xl font-serif leading-[1.1] tracking-tight mb-6">
            &ldquo;{dailyQuote.text.split(' ').map((word, i) => {
              // Highlight a keyword in gold (first word > 5 chars)
              if (i === Math.floor(dailyQuote.text.split(' ').length / 3) && word.length > 4) {
                return <span key={i} className="text-[var(--color-accent)] italic">{word} </span>;
              }
              return word + ' ';
            })}&rdquo;
          </h2>
          <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-[var(--color-text-muted)]">
            — {dailyQuote.author}
          </span>
        </motion.section>

        {/* === GREETING + RESUME === */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-12 gap-y-10"
        >
          {/* Left: Greeting */}
          <motion.div variants={fadeIn} className="col-span-12 md:col-span-4 self-end">
            <p className="text-xs uppercase tracking-[0.4em] font-bold text-[var(--color-text-muted)] mb-2">
              Issue No. {String(dayOfYear).padStart(2, '0')}
            </p>
            <p className="text-2xl font-serif">{greeting}, {userName}.</p>
            <p className="text-sm text-[var(--color-text-muted)] mt-1 italic">Your reading desk awaits.</p>
          </motion.div>

          {/* Right: Resume Card */}
          <motion.div variants={fadeIn} className="col-span-12 md:col-start-6 md:col-span-7">
            {lastViewedLesson && !lastViewedLesson.completed ? (
              <button
                onClick={() => navigate(`/pathway/${lastViewedLesson.moduleId}`, {
                  state: { resumeLesson: lastViewedLesson.lessonId, scrollTo: lastViewedLesson.scrollPosition },
                })}
                className="w-full text-left group cursor-pointer"
              >
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--color-accent)] mb-1">
                      Continue Reading
                    </p>
                    <h3 className="text-2xl font-serif tracking-tight group-hover:text-[var(--color-accent)] transition-colors">
                      Your Last Session
                    </h3>
                  </div>
                </div>
                <div className="w-full h-[1px] bg-[var(--color-border)] relative overflow-hidden mb-4">
                  <div className="absolute left-0 top-0 h-full bg-[var(--color-accent)] transition-all duration-700" style={{ width: `${lastViewedLesson.scrollPosition}%` }} />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[11px] text-[var(--color-text-muted)] tracking-wide uppercase">
                    {Math.round(lastViewedLesson.scrollPosition)}% complete
                  </span>
                  <span className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold group-hover:text-[var(--color-accent)] transition-colors">
                    Resume
                    <Icon name="arrow_forward_ios" size={12} weight={600} />
                  </span>
                </div>
              </button>
            ) : (
              <button
                onClick={() => navigate('/pathway')}
                className="w-full text-left group cursor-pointer"
              >
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--color-accent)] mb-1">
                      The Archive
                    </p>
                    <h3 className="text-2xl font-serif tracking-tight group-hover:text-[var(--color-accent)] transition-colors">
                      Start Your Journey
                    </h3>
                  </div>
                </div>
                <div className="w-full h-[1px] bg-[var(--color-border)] mb-4" />
                <div className="flex justify-between items-center">
                  <span className="text-[11px] text-[var(--color-text-muted)] tracking-wide">
                    76 domains of knowledge await
                  </span>
                  <span className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold group-hover:text-[var(--color-accent)] transition-colors">
                    Explore
                    <Icon name="arrow_forward_ios" size={12} weight={600} />
                  </span>
                </div>
              </button>
            )}
          </motion.div>
        </motion.section>

        {/* === DAILY MOMENTUM + ACTIONS === */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-12 gap-y-12 border-t border-[var(--color-border)] pt-12"
        >
          {/* Left: Power Meter */}
          <motion.div variants={fadeIn} className="col-span-12 md:col-span-5 flex flex-col gap-8">
            <div className="flex items-end gap-4">
              <span className="text-6xl font-serif leading-none">{powerPercent}%</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--color-text-muted)] pb-2">
                Daily Momentum
              </span>
            </div>
            <div className="grid grid-cols-2 gap-y-6 gap-x-12">
              {powerActivities.map(a => (
                <div key={a.id} className={`flex items-center gap-3 ${a.done ? '' : 'opacity-30'}`}>
                  <Icon
                    name={a.icon}
                    size={18}
                    filled={a.done}
                    weight={a.done ? 400 : 200}
                    className={a.done ? 'text-[var(--color-accent)]' : ''}
                  />
                  <span className="text-[11px] uppercase tracking-wider font-semibold">{a.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Action Items */}
          <motion.div variants={fadeIn} className="col-span-12 md:col-start-7 md:col-span-6 space-y-8">
            {/* Start Reading */}
            <button
              onClick={() => navigate('/pathway')}
              className="group w-full flex justify-between items-start cursor-pointer border-b border-[var(--color-border)] pb-6 transition-colors hover:border-[var(--color-accent)]"
            >
              <div className="flex gap-6">
                <span className="text-sm font-serif italic text-[var(--color-text-muted)]">01.</span>
                <div className="text-left">
                  <h4 className="text-lg font-serif mb-1">Start Daily Reading</h4>
                  <p className="text-xs text-[var(--color-text-muted)] tracking-wide">Curated selections for your growth.</p>
                </div>
              </div>
              <span className="text-[10px] uppercase font-bold tracking-tighter text-[var(--color-accent)]">+50 XP</span>
            </button>

            {/* Quick Revisit */}
            <button
              onClick={() => navigate('/review')}
              className="group w-full flex justify-between items-start cursor-pointer border-b border-[var(--color-border)] pb-6 transition-colors hover:border-[var(--color-accent)]"
            >
              <div className="flex gap-6">
                <span className="text-sm font-serif italic text-[var(--color-text-muted)]">02.</span>
                <div className="text-left">
                  <h4 className="text-lg font-serif mb-1">Quick Revisit</h4>
                  <p className="text-xs text-[var(--color-text-muted)] tracking-wide">
                    {dueCount > 0 ? `${dueCount} concepts due for recollection.` : 'All caught up. Check back later.'}
                  </p>
                </div>
              </div>
              {dueCount > 0 && <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] mt-2" />}
            </button>
          </motion.div>
        </motion.section>

      </main>

      {/* FreeTrialGate — triggered from upgrade banner "Start Free Trial" */}
      {isPaywallOpen && (
        <FreeTrialGate onClose={() => setIsPaywallOpen(false)} />
      )}
    </div>
  );
}

export default Dashboard;
