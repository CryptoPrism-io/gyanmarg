import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  BookOpen,
  Brain,
  Flame,
  Target,
  Zap,
  Trophy,
  Lightbulb,
  CheckCircle2,
  Keyboard,
  Smartphone,
} from 'lucide-react';
import { PolymindLogo } from '@/components/brand';

// Demo Components
import { DemoFlashCard, DemoTinderStack, BlogEmbed } from '@/components/molecules';

export function HowToPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white relative">
      {/* Animated Background */}
      <div className="animated-gradient-bg">
        <div className="wave-orb wave-orb-1" />
        <div className="wave-orb wave-orb-2" />
        <div className="wave-orb wave-orb-3" />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition">
            <ArrowLeft size={20} />
            <span className="text-sm">Back</span>
          </Link>
          <Link to="/" className="flex items-center gap-2.5">
            <PolymindLogo size="xs" variant="simple" />
            <span className="polymind-brand-text font-display text-lg font-bold tracking-wider">POLYMIND</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
          </Link>
          <Link
            to="/dashboard"
            className="text-sm text-amber-500 hover:text-amber-400 transition font-medium"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-8"
          >
            <Lightbulb size={16} className="text-amber-500" />
            <span className="text-xs text-amber-500 font-medium tracking-wider">YOUR GUIDE</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif mb-6"
          >
            Navigate the Library
            <span className="block bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              in 5 Minutes
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-xl mx-auto"
          >
            Interactive guides to help you explore 76 worlds of knowledge.
            Try the demos below — they're fully functional!
          </motion.p>
        </div>
      </section>

      {/* Section 1: Swipe-Based Lessons */}
      <Section
        number={1}
        title="Immersive Reading"
        subtitle="Swipe through curated lessons from the world's best authors"
        icon={BookOpen}
        color="sunrise"
      >
        <p className="text-gray-400 mb-6">
          Each reading journey is broken into beautiful, swipeable cards. Swipe right to continue, left to revisit.
          The flow is natural: overview → deep content → quiz → key takeaway.
        </p>
        <p className="text-gray-400 mb-8">
          <strong className="text-white">Try it yourself:</strong> Swipe through the demo below or use the buttons.
        </p>
        <DemoTinderStack />
      </Section>

      {/* Section 2: Flashcard Mastery */}
      <Section
        number={2}
        title="Quick Revisit"
        subtitle="Revisit concepts at the perfect moment"
        icon={Brain}
        color="lavender"
      >
        <p className="text-gray-400 mb-6">
          As you read, key concepts are saved for revisiting later. The system schedules
          revisits at optimal intervals so ideas stay fresh without any effort from you.
        </p>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h4 className="font-display font-semibold text-white mb-3">How Ratings Work</h4>
            <div className="space-y-3">
              <RatingExplanation
                rating="Hard"
                color="coral"
                description="Struggled to remember. Card resets to short interval."
              />
              <RatingExplanation
                rating="Good"
                color="golden"
                description="Remembered with effort. Interval extends moderately."
              />
              <RatingExplanation
                rating="Easy"
                color="sage"
                description="Instant recall. Interval extends significantly."
              />
            </div>
          </div>
          <div>
            <h4 className="font-display font-semibold text-white mb-3">Try It</h4>
            <DemoFlashCard
              front="What is spaced repetition?"
              back="A learning technique that spaces out review sessions over increasing intervals to optimize memory retention."
              category="Learning Science"
              showRatingButtons={true}
            />
          </div>
        </div>
      </Section>

      {/* Section 3: Gamification */}
      <Section
        number={3}
        title="Track Your Journey"
        subtitle="See how much of the library you've explored"
        icon={Trophy}
        color="golden"
      >
        <p className="text-gray-400 mb-8">
          Every reading session earns XP. Explore new domains, revisit concepts, maintain your streak.
          Watch your journey grow as you explore more of the library.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <GamificationCard
            icon={Zap}
            title="Earn XP"
            description="Lessons: +15-30 XP. Flashcards: +1-5 XP. Streaks: +10 XP/day."
            color="golden"
          />
          <GamificationCard
            icon={Trophy}
            title="Level Up"
            description="Every 500 XP advances your level. Track your growth over time."
            color="lavender"
          />
          <GamificationCard
            icon={Target}
            title="Achievements"
            description="Unlock badges for milestones: streaks, lessons, reviews, and more."
            color="sage"
          />
        </div>
        <div className="mt-8">
          <BlogEmbed type="ProgressBar" props={{ xp: 1750, level: 4, nextLevelXp: 500 }} />
        </div>
      </Section>

      {/* Section 4: Streaks & Habits */}
      <Section
        number={4}
        title="Daily Reading"
        subtitle="A few minutes every day compounds into vast knowledge"
        icon={Flame}
        color="coral"
      >
        <p className="text-gray-400 mb-8">
          Your streak tracks consecutive days of reading. 10 minutes daily beats
          2 hours once a week. The reading habit becomes something to protect.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass rounded-2xl p-6 border border-coral/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-coral/20 flex items-center justify-center">
                <Flame className="w-6 h-6 text-coral" />
              </div>
              <div>
                <p className="text-xs text-text-muted uppercase tracking-wide">Current Streak</p>
                <p className="text-2xl font-display font-bold text-coral">21 days</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Complete at least one lesson or review session each day to maintain your streak.
            </p>
          </div>
          <div className="glass rounded-2xl p-6 border border-white/10">
            <h4 className="font-display font-semibold text-white mb-4">Daily Habits</h4>
            <div className="space-y-3">
              <HabitItem
                label="Morning Review"
                time="8:00 AM"
                completed={true}
              />
              <HabitItem
                label="Lunch Learning"
                time="12:30 PM"
                completed={true}
              />
              <HabitItem
                label="Evening Quiz"
                time="7:00 PM"
                completed={false}
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Section 5: Daily Challenges */}
      <Section
        number={5}
        title="Weekly Explorations"
        subtitle="Fresh goals to expand your horizons"
        icon={Target}
        color="sunrise"
      >
        <p className="text-gray-400 mb-8">
          Each week brings fresh exploration challenges. Discover new domains, read across
          categories, and earn bonus XP for broadening your horizons.
        </p>
        <BlogEmbed
          type="Challenge"
          props={{
            title: 'Quiz Master',
            description: 'Score 80%+ on 3 quiz cards',
            xpReward: 50,
            progress: 2,
            total: 3,
          }}
        />
      </Section>

      {/* Quick Tips Section */}
      <section className="py-16 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif text-center mb-12">
            Quick Tips
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Keyboard Shortcuts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6 border border-white/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-lavender/20 flex items-center justify-center">
                  <Keyboard className="w-5 h-5 text-lavender" />
                </div>
                <h3 className="font-display font-semibold text-white">Keyboard Shortcuts</h3>
              </div>
              <div className="space-y-2">
                <ShortcutRow keys={['→']} description="Swipe card right / Continue" />
                <ShortcutRow keys={['←']} description="Swipe card left / Go back" />
                <ShortcutRow keys={['Space']} description="Flip flashcard" />
                <ShortcutRow keys={['1']} description="Rate Hard" />
                <ShortcutRow keys={['2']} description="Rate Good" />
                <ShortcutRow keys={['3']} description="Rate Easy" />
              </div>
            </motion.div>

            {/* Mobile Gestures */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass rounded-2xl p-6 border border-white/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-sage/20 flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-sage" />
                </div>
                <h3 className="font-display font-semibold text-white">Mobile Gestures</h3>
              </div>
              <div className="space-y-3 text-sm">
                <GestureRow gesture="Swipe Right" description="Continue to next card" />
                <GestureRow gesture="Swipe Left" description="Revisit current card" />
                <GestureRow gesture="Tap Card" description="Flip flashcard" />
                <GestureRow gesture="Pull Down" description="Refresh content" />
              </div>
            </motion.div>

            {/* Pro Tips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass rounded-2xl p-6 border border-white/10 md:col-span-2"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-golden/20 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-golden" />
                </div>
                <h3 className="font-display font-semibold text-white">Pro Tips</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <ProTip
                  title="Read at the same time daily"
                  description="Consistency builds the reading habit. Pick a time and stick to it."
                />
                <ProTip
                  title="Be honest with ratings"
                  description="The algorithm works best when you rate accurately."
                />
                <ProTip
                  title="Start with 2-3 worlds"
                  description="Explore a few domains deeply, then expand to new worlds."
                />
                <ProTip
                  title="Look for connections"
                  description="The real magic is synthesis across domains."
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-accent rounded-2xl p-10"
          >
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-amber-500 to-amber-400 flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-black" />
            </div>
            <h2 className="text-2xl md:text-3xl font-serif mb-4">
              Ready to Explore?
            </h2>
            <p className="text-gray-400 mb-8">
              You've seen how it works. Now experience it yourself.
              76 worlds of knowledge await.
            </p>
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-400 text-black font-semibold rounded-xl hover:opacity-90 transition"
              style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), 0 8px 32px rgba(245,158,11,0.3)' }}
            >
              Get Started Free
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <Link to="/" className="flex items-center gap-2.5">
            <PolymindLogo size="xs" variant="simple" />
            <span className="polymind-brand-text font-display text-lg font-bold tracking-wider">POLYMIND</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
          </Link>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link to="/blog" className="hover:text-white transition">Blog</Link>
            <Link to="/science" className="hover:text-white transition">The Science</Link>
            <Link to="/books" className="hover:text-white transition">Book List</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Section Component
interface SectionProps {
  number: number;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  color: 'sunrise' | 'lavender' | 'golden' | 'coral' | 'sage';
  children: React.ReactNode;
}

function Section({ number, title, subtitle, icon: Icon, color, children }: SectionProps) {
  const colorClasses = {
    sunrise: 'bg-sunrise/20 text-sunrise border-sunrise/30',
    lavender: 'bg-lavender/20 text-lavender border-lavender/30',
    golden: 'bg-golden/20 text-golden border-golden/30',
    coral: 'bg-coral/20 text-coral border-coral/30',
    sage: 'bg-sage/20 text-sage border-sage/30',
  };

  return (
    <section className="py-16 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <div className="flex items-start gap-4 mb-8">
            <div className={`w-12 h-12 rounded-xl ${colorClasses[color]} flex items-center justify-center shrink-0 border`}>
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-text-muted uppercase tracking-wider mb-1">
                Step {number}
              </p>
              <h2 className="text-2xl md:text-3xl font-serif text-white">
                {title}
              </h2>
              <p className="text-gray-400 mt-1">{subtitle}</p>
            </div>
          </div>

          {/* Section Content */}
          <div className="ml-0 md:ml-16">
            {children}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Rating Explanation Component
function RatingExplanation({
  rating,
  color,
  description,
}: {
  rating: string;
  color: 'coral' | 'golden' | 'sage';
  description: string;
}) {
  const colorClasses = {
    coral: 'bg-coral/10 border-coral/20 text-coral',
    golden: 'bg-golden/10 border-golden/20 text-golden',
    sage: 'bg-sage/10 border-sage/20 text-sage',
  };

  return (
    <div className={`px-4 py-3 rounded-xl border ${colorClasses[color]}`}>
      <span className="font-semibold">{rating}:</span>{' '}
      <span className="text-text-secondary text-sm">{description}</span>
    </div>
  );
}

// Gamification Card Component
function GamificationCard({
  icon: Icon,
  title,
  description,
  color,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  color: 'golden' | 'lavender' | 'sage';
}) {
  const colorClasses = {
    golden: 'bg-golden/10 border-golden/20',
    lavender: 'bg-lavender/10 border-lavender/20',
    sage: 'bg-sage/10 border-sage/20',
  };

  const iconColors = {
    golden: 'text-golden',
    lavender: 'text-lavender',
    sage: 'text-sage',
  };

  return (
    <div className={`glass rounded-xl p-5 border ${colorClasses[color]}`}>
      <Icon className={`w-6 h-6 ${iconColors[color]} mb-3`} />
      <h4 className="font-display font-semibold text-white mb-2">{title}</h4>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
}

// Habit Item Component
function HabitItem({
  label,
  time,
  completed,
}: {
  label: string;
  time: string;
  completed: boolean;
}) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
      <div className="flex items-center gap-3">
        <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
          completed ? 'bg-sage/20' : 'bg-surface'
        }`}>
          {completed && <CheckCircle2 className="w-4 h-4 text-sage" />}
        </div>
        <span className={completed ? 'text-text-primary' : 'text-text-muted'}>{label}</span>
      </div>
      <span className="text-xs text-text-muted">{time}</span>
    </div>
  );
}

// Shortcut Row Component
function ShortcutRow({ keys, description }: { keys: string[]; description: string }) {
  return (
    <div className="flex items-center justify-between py-1">
      <div className="flex gap-1">
        {keys.map((key, i) => (
          <kbd
            key={i}
            className="px-2 py-1 bg-surface rounded text-xs font-mono text-text-primary border border-white/10"
          >
            {key}
          </kbd>
        ))}
      </div>
      <span className="text-sm text-gray-400">{description}</span>
    </div>
  );
}

// Gesture Row Component
function GestureRow({ gesture, description }: { gesture: string; description: string }) {
  return (
    <div className="flex items-center justify-between py-1">
      <span className="text-text-primary font-medium">{gesture}</span>
      <span className="text-gray-400">{description}</span>
    </div>
  );
}

// Pro Tip Component
function ProTip({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex gap-3">
      <CheckCircle2 className="w-5 h-5 text-golden shrink-0 mt-0.5" />
      <div>
        <p className="font-medium text-text-primary">{title}</p>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
}

export default HowToPage;
