import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, CheckCircle2, Sparkles, Award, ChevronUp, Zap,
  Lightbulb, Target, Flame, BookOpen, Brain, Trophy,
} from 'lucide-react';
import { modules } from '@/data/modules';
import { useProgressStore } from '@/store/progressStore';
import type { PathwayLesson, QuizQuestion } from '@/types';

// ============================================================================
// Types
// ============================================================================
type CardType =
  | 'hook' | 'concept' | 'list' | 'quote' | 'insight'
  | 'quiz' | 'milestone' | 'takeaway' | 'action' | 'complete';

interface ReelCard {
  id: string;
  type: CardType;
  heading?: string;
  body?: string;
  items?: string[];
  quiz?: QuizQuestion;
  milestoneMsg?: string;
  milestonePct?: number;
}

// ============================================================================
// Visual styles per card type — each card feels DIFFERENT
// ============================================================================
const cardGradients: Record<CardType, string> = {
  hook:      'from-amber-600/20 via-orange-500/8 to-transparent',
  concept:   'from-sky-600/12 via-indigo-500/5 to-transparent',
  list:      'from-teal-600/12 via-cyan-500/5 to-transparent',
  quote:     'from-violet-600/15 via-purple-500/5 to-transparent',
  insight:   'from-rose-600/12 via-pink-500/5 to-transparent',
  quiz:      'from-amber-600/15 via-yellow-500/5 to-transparent',
  milestone: 'from-orange-600/25 via-red-500/10 to-transparent',
  takeaway:  'from-amber-500/20 via-yellow-500/10 to-transparent',
  action:    'from-emerald-600/15 via-green-500/5 to-transparent',
  complete:  'from-amber-500/30 via-yellow-500/15 to-transparent',
};

const cardGlows: Record<CardType, string> = {
  hook:      'rgba(245,158,11,0.12)',
  concept:   'rgba(56,189,248,0.08)',
  list:      'rgba(20,184,166,0.08)',
  quote:     'rgba(167,139,250,0.10)',
  insight:   'rgba(251,113,133,0.08)',
  quiz:      'rgba(245,158,11,0.10)',
  milestone: 'rgba(249,115,22,0.15)',
  takeaway:  'rgba(245,158,11,0.12)',
  action:    'rgba(52,211,153,0.10)',
  complete:  'rgba(245,158,11,0.18)',
};

const cardPills: Record<CardType, { label: string; emoji: string; color: string }> = {
  hook:      { label: 'Start',       emoji: '\u2728', color: 'bg-amber-500/15 text-amber-400 border-amber-500/25' },
  concept:   { label: 'Learn',       emoji: '\uD83D\uDCD6', color: 'bg-sky-500/15 text-sky-400 border-sky-500/25' },
  list:      { label: 'Key Points',  emoji: '\uD83D\uDCCB', color: 'bg-teal-500/15 text-teal-400 border-teal-500/25' },
  quote:     { label: 'Wisdom',      emoji: '\uD83D\uDCAC', color: 'bg-violet-500/15 text-violet-400 border-violet-500/25' },
  insight:   { label: 'Insight',     emoji: '\uD83D\uDCA1', color: 'bg-rose-500/15 text-rose-400 border-rose-500/25' },
  quiz:      { label: 'Quick Check', emoji: '\uD83E\uDDE0', color: 'bg-amber-500/15 text-amber-400 border-amber-500/25' },
  milestone: { label: 'Progress',    emoji: '\uD83D\uDD25', color: 'bg-orange-500/15 text-orange-400 border-orange-500/25' },
  takeaway:  { label: 'Takeaway',    emoji: '\uD83C\uDFAF', color: 'bg-amber-500/15 text-amber-400 border-amber-500/25' },
  action:    { label: 'Action',      emoji: '\u26A1',       color: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/25' },
  complete:  { label: 'Complete',    emoji: '\uD83C\uDFC6', color: 'bg-amber-500/15 text-amber-400 border-amber-500/25' },
};

// ============================================================================
// Smart content parser — breaks lesson into bite-sized visual cards
// ============================================================================
function buildCards(lesson: PathwayLesson): ReelCard[] {
  const cards: ReelCard[] = [];
  let n = 0;

  // 1. Hook card
  cards.push({ id: `${lesson.id}-hook`, type: 'hook', heading: lesson.title, body: lesson.content.overview });
  n++;

  // 2. Parse mainContent
  const raw = lesson.content.mainContent;
  const sections = raw.split(/(?=^## )/gm).filter(Boolean);

  for (const section of sections) {
    const lines = section.trim().split('\n');
    const heading = lines[0].replace(/^##\s*/, '').trim();
    const body = lines.slice(1).join('\n').trim();
    if (!body) continue;

    const blocks = body.split(/\n\n+/).filter(s => s.trim());

    for (const block of blocks) {
      const trimmed = block.trim();

      // Blockquote → QuoteCard
      if (trimmed.startsWith('> ')) {
        const qt = trimmed.replace(/^>\s*/gm, '').replace(/^["\u201C]|["\u201D]$/g, '').trim();
        cards.push({ id: `${lesson.id}-c${n++}`, type: 'quote', body: qt, heading });
        continue;
      }

      // Bullets / numbered list → ListCard (max 4 items per card)
      if (/^[-*\u2022]\s/.test(trimmed) || /^\d+[.)]\s/.test(trimmed)) {
        const items = trimmed.split('\n')
          .map(l => l.replace(/^[-*\u2022]\s+/, '').replace(/^\d+[.)]\s+/, '').trim())
          .filter(Boolean);
        for (let i = 0; i < items.length; i += 4) {
          cards.push({
            id: `${lesson.id}-c${n++}`,
            type: 'list',
            heading: i === 0 ? heading : undefined,
            items: items.slice(i, i + 4),
          });
        }
        continue;
      }

      const wordCount = trimmed.split(/\s+/).length;

      // Short → InsightCard (big centered text)
      if (wordCount < 25) {
        cards.push({ id: `${lesson.id}-c${n++}`, type: 'insight', heading, body: trimmed });
        continue;
      }

      // Long → split into ~50 word concept cards
      if (wordCount > 55) {
        const sentences = trimmed.match(/[^.!?]+[.!?]+/g) || [trimmed];
        let current = '';
        let first = true;
        for (const sentence of sentences) {
          if (current && (current + ' ' + sentence).split(/\s+/).length > 50) {
            cards.push({ id: `${lesson.id}-c${n++}`, type: 'concept', heading: first ? heading : undefined, body: current.trim() });
            first = false;
            current = sentence.trim();
          } else {
            current = current ? current + ' ' + sentence.trim() : sentence.trim();
          }
        }
        if (current.trim()) {
          cards.push({ id: `${lesson.id}-c${n++}`, type: 'concept', heading: first ? heading : undefined, body: current.trim() });
        }
        continue;
      }

      // Default → ConceptCard
      cards.push({ id: `${lesson.id}-c${n++}`, type: 'concept', heading, body: trimmed });
    }
  }

  // 3. Inject milestone celebration cards
  const total = cards.length;
  const milestones = [
    { at: Math.floor(total * 0.33), msg: 'Warming up!', pct: 33 },
    { at: Math.floor(total * 0.66), msg: "You're crushing it!", pct: 66 },
  ];
  let offset = 0;
  for (const ms of milestones) {
    if (ms.at > 1 && ms.at < total) {
      cards.splice(ms.at + offset, 0, {
        id: `${lesson.id}-ms${offset}`,
        type: 'milestone',
        milestoneMsg: ms.msg,
        milestonePct: ms.pct,
      });
      offset++;
    }
  }

  // 4. Quiz
  if (lesson.content.quiz) {
    cards.push({ id: `${lesson.id}-quiz`, type: 'quiz', quiz: lesson.content.quiz });
  }

  // 5. Takeaway
  cards.push({ id: `${lesson.id}-takeaway`, type: 'takeaway', body: lesson.content.keyTakeaway });

  // 6. Action
  if (lesson.content.actionItem) {
    cards.push({ id: `${lesson.id}-action`, type: 'action', body: lesson.content.actionItem });
  }

  // 7. Complete
  cards.push({ id: `${lesson.id}-complete`, type: 'complete' });

  return cards;
}

// ============================================================================
// Inline text formatting (**bold**, *italic*, `code`)
// ============================================================================
function fmt(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  const regex = /(\*\*(.+?)\*\*|\*(.+?)\*|`(.+?)`)/g;
  let last = 0;
  let match;
  let k = 0;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    if (match[2]) parts.push(<strong key={k++} className="text-white font-semibold">{match[2]}</strong>);
    else if (match[3]) parts.push(<em key={k++} className="italic text-white/50">{match[3]}</em>);
    else if (match[4]) parts.push(<code key={k++} className="px-1 py-0.5 rounded bg-white/10 text-amber-300 text-[13px] font-mono">{match[4]}</code>);
    last = match.index + match[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts.length === 1 ? parts[0] : <>{parts}</>;
}

// ============================================================================
// Main Component
// ============================================================================
export function ReelReader() {
  const { moduleId, lessonId } = useParams<{ moduleId: string; lessonId: string }>();
  const navigate = useNavigate();
  const { completeLesson, isLessonCompleted, addMicroXP } = useProgressStore();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [direction, setDirection] = useState<'up' | 'down'>('up');

  const touchStartY = useRef(0);
  const touchStartTime = useRef(0);
  const isTransitioning = useRef(false);

  const mod = useMemo(() => modules.find((m) => m.id === moduleId), [moduleId]);
  const lesson = useMemo<PathwayLesson | null>(() => {
    if (!mod?.pathway) return null;
    for (const level of mod.pathway) {
      const found = level.lessons.find((l) => l.id === lessonId);
      if (found) return found;
    }
    return null;
  }, [mod, lessonId]);

  const cards = useMemo(() => (lesson ? buildCards(lesson) : []), [lesson]);
  const card = cards[currentIndex];
  const isCompleted = lesson ? isLessonCompleted(lesson.id) : false;
  const progress = cards.length > 0 ? ((currentIndex + 1) / cards.length) * 100 : 0;

  // Navigation
  const goNext = useCallback(() => {
    if (isTransitioning.current || currentIndex >= cards.length - 1) return;
    if (card?.type === 'quiz' && !quizSubmitted) {
      if (selectedAnswer === null) return;
      setQuizSubmitted(true);
      return;
    }
    isTransitioning.current = true;
    addMicroXP(2);
    setDirection('up');
    setCurrentIndex((p) => p + 1);
    setSelectedAnswer(null);
    setQuizSubmitted(false);
    setTimeout(() => { isTransitioning.current = false; }, 350);
  }, [currentIndex, cards.length, card, quizSubmitted, selectedAnswer, addMicroXP]);

  const goPrev = useCallback(() => {
    if (isTransitioning.current || currentIndex <= 0) return;
    isTransitioning.current = true;
    setDirection('down');
    setCurrentIndex((p) => p - 1);
    setSelectedAnswer(null);
    setQuizSubmitted(false);
    setTimeout(() => { isTransitioning.current = false; }, 350);
  }, [currentIndex]);

  const handleComplete = () => {
    if (lesson && !isCompleted) completeLesson(lesson.id, lesson.xpReward);
    navigate(-1);
  };

  // Touch
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
    touchStartTime.current = Date.now();
  }, []);
  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    const dy = touchStartY.current - e.changedTouches[0].clientY;
    const dt = Date.now() - touchStartTime.current;
    const v = Math.abs(dy) / dt;
    if (dy > 50 || (dy > 25 && v > 0.3)) goNext();
    else if (dy < -50 || (dy < -25 && v > 0.3)) goPrev();
  }, [goNext, goPrev]);

  // Mouse drag
  const mouseY = useRef(0);
  const handleMouseDown = useCallback((e: React.MouseEvent) => { mouseY.current = e.clientY; }, []);
  const handleMouseUp = useCallback((e: React.MouseEvent) => {
    const dy = mouseY.current - e.clientY;
    if (dy > 50) goNext(); else if (dy < -50) goPrev();
  }, [goNext, goPrev]);

  // Keyboard
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp' || e.key === 'k') goPrev();
      else if (e.key === 'ArrowDown' || e.key === 'j' || e.key === ' ') { e.preventDefault(); goNext(); }
      else if (e.key === 'Escape') navigate(-1);
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [goNext, goPrev, navigate]);

  // Wheel
  useEffect(() => {
    let cd = false;
    const h = (e: WheelEvent) => {
      if (cd) return;
      if (e.deltaY > 30) { goNext(); cd = true; }
      else if (e.deltaY < -30) { goPrev(); cd = true; }
      setTimeout(() => { cd = false; }, 450);
    };
    window.addEventListener('wheel', h, { passive: true });
    return () => window.removeEventListener('wheel', h);
  }, [goNext, goPrev]);

  // Not found
  if (!mod || !lesson || !card) {
    return (
      <div className="min-h-screen bg-[#0A0A0B] flex items-center justify-center">
        <div className="text-center">
          <p className="text-white/50 mb-4">Lesson not found</p>
          <button onClick={() => navigate('/lab')} className="text-amber-400 hover:underline">Back to Lab</button>
        </div>
      </div>
    );
  }

  const slideVariants = {
    enter: (d: 'up' | 'down') => ({ y: d === 'up' ? '100%' : '-100%' }),
    center: { y: '0%' },
    exit: (d: 'up' | 'down') => ({ y: d === 'up' ? '-100%' : '100%' }),
  };

  const pill = cardPills[card.type];

  return (
    <div
      className="fixed inset-0 bg-[#0A0A0B] overflow-hidden select-none"
      style={{ touchAction: 'none' }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-white/5 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-amber-500 to-yellow-400 rounded-r-full"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Top bar */}
      <div className="absolute top-2 left-0 right-0 z-50 flex items-center justify-between px-4">
        {/* Card type pill */}
        <motion.div
          key={card.type}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px] font-medium ${pill.color}`}
        >
          <span>{pill.emoji}</span>
          <span>{pill.label}</span>
        </motion.div>

        <div className="flex items-center gap-3">
          <span className="text-[11px] text-white/30 tabular-nums">{currentIndex + 1}/{cards.length}</span>
          <button
            onClick={() => navigate(-1)}
            className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition"
          >
            <X className="w-3.5 h-3.5 text-white/60" />
          </button>
        </div>
      </div>

      {/* Right pip indicators */}
      <div className="absolute right-2 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-[3px]">
        {cards.map((c, i) => (
          <button
            key={i}
            onClick={() => { setDirection(i > currentIndex ? 'up' : 'down'); setCurrentIndex(i); }}
            className={`w-[5px] rounded-full transition-all duration-300 ${
              i === currentIndex ? 'h-5 bg-amber-400' : i < currentIndex ? 'h-2 bg-white/30' : 'h-2 bg-white/10'
            }`}
          />
        ))}
      </div>

      {/* Main reel area */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={card.id}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
          className="absolute inset-0"
          style={{ willChange: 'transform' }}
        >
          <div className={`relative w-full h-full bg-gradient-to-b ${cardGradients[card.type]} to-transparent`}>
            {/* Ambient glow */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[120px] opacity-60 pointer-events-none"
              style={{ background: `radial-gradient(ellipse, ${cardGlows[card.type]}, transparent 70%)` }}
            />

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center h-full px-6 pt-12 pb-24 overflow-y-auto">
              <div className="max-w-lg w-full">
                {card.type === 'hook' && <HookSlide lesson={lesson} />}
                {card.type === 'concept' && <ConceptSlide heading={card.heading} body={card.body!} />}
                {card.type === 'list' && <ListSlide heading={card.heading} items={card.items!} />}
                {card.type === 'quote' && <QuoteSlide body={card.body!} />}
                {card.type === 'insight' && <InsightSlide heading={card.heading} body={card.body!} />}
                {card.type === 'quiz' && card.quiz && (
                  <QuizSlide quiz={card.quiz} selected={selectedAnswer} onSelect={setSelectedAnswer} submitted={quizSubmitted} />
                )}
                {card.type === 'milestone' && <MilestoneSlide msg={card.milestoneMsg!} pct={card.milestonePct!} />}
                {card.type === 'takeaway' && <TakeawaySlide body={card.body!} />}
                {card.type === 'action' && <ActionSlide body={card.body!} />}
                {card.type === 'complete' && <CompleteSlide lesson={lesson} isCompleted={isCompleted} onComplete={handleComplete} />}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 z-50 pointer-events-none">
        <div className="bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/80 to-transparent pt-12 pb-5 px-6">
          <div className="max-w-lg mx-auto flex items-center justify-between pointer-events-auto">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20">
                <Zap className="w-3 h-3 text-amber-400" />
                <span className="text-[11px] font-bold text-amber-400">{lesson.xpReward} XP</span>
              </div>
              <span className="text-[10px] text-white/20">{lesson.duration}m</span>
            </div>

            {currentIndex < cards.length - 1 && card.type !== 'complete' && (
              <motion.button
                onClick={goNext}
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/40 text-[11px] hover:bg-white/10 transition"
              >
                <ChevronUp className="w-3.5 h-3.5" />
                <span>Swipe</span>
              </motion.button>
            )}

            {card.type === 'complete' && (
              <motion.button
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleComplete}
                className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-[#0A0A0B] font-bold text-sm shadow-lg shadow-amber-500/25"
              >
                <CheckCircle2 className="w-4 h-4" />
                {isCompleted ? 'Done' : 'Claim XP'}
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// HOOK SLIDE — First card, big title, grab attention
// ============================================================================
function HookSlide({ lesson }: { lesson: PathwayLesson }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[65vh] text-center">
      <motion.div
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', damping: 12, delay: 0.1 }}
        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/30 to-orange-500/20 border border-amber-500/40 flex items-center justify-center mb-8"
      >
        <Sparkles className="w-8 h-8 text-amber-400" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-[28px] md:text-4xl font-bold text-white mb-5 leading-[1.2] tracking-tight"
      >
        {lesson.title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="text-[15px] text-white/50 max-w-sm leading-relaxed mb-8"
      >
        {lesson.content.overview}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
        className="flex items-center gap-2.5"
      >
        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/30 text-xs capitalize">
          {lesson.type}
        </span>
        <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
          +{lesson.xpReward} XP
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4, y: [0, -6, 0] }}
        transition={{ delay: 1.2, duration: 1.5, repeat: Infinity }}
        className="mt-14 flex flex-col items-center gap-1"
      >
        <ChevronUp className="w-5 h-5 text-white/40" />
        <span className="text-[10px] text-white/25 tracking-wider uppercase">Swipe up to begin</span>
      </motion.div>
    </div>
  );
}

// ============================================================================
// CONCEPT SLIDE — Clean paragraph with section heading
// ============================================================================
function ConceptSlide({ heading, body }: { heading?: string; body: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col justify-center min-h-[50vh] py-6"
    >
      {heading && (
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-8 h-8 rounded-lg bg-sky-500/15 flex items-center justify-center">
            <BookOpen className="w-4 h-4 text-sky-400" />
          </div>
          <h2 className="text-sm font-semibold text-sky-400 uppercase tracking-wider">{heading}</h2>
        </div>
      )}
      <p className="text-[17px] leading-[1.75] text-white/75">{fmt(body)}</p>
    </motion.div>
  );
}

// ============================================================================
// LIST SLIDE — Clean items with accent markers
// ============================================================================
function ListSlide({ heading, items }: { heading?: string; items: string[] }) {
  const accents = ['bg-teal-400', 'bg-cyan-400', 'bg-emerald-400', 'bg-sky-400'];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col justify-center min-h-[50vh] py-6"
    >
      {heading && (
        <div className="flex items-center gap-2.5 mb-6">
          <span className="text-lg">{'\uD83D\uDCCB'}</span>
          <h2 className="text-sm font-semibold text-teal-400 uppercase tracking-wider">{heading}</h2>
        </div>
      )}
      <div className="space-y-3">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + i * 0.08 }}
            className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]"
          >
            <div className={`w-2 h-2 rounded-full mt-2 ${accents[i % accents.length]} flex-shrink-0`} />
            <p className="text-[15px] text-white/70 leading-relaxed">{fmt(item)}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// ============================================================================
// QUOTE SLIDE — Big centered quote
// ============================================================================
function QuoteSlide({ body }: { body: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center min-h-[60vh] text-center px-2"
    >
      <motion.span
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 0.15, y: 0 }}
        className="text-[80px] leading-none text-violet-400 font-serif mb-2"
      >
        {'\u201C'}
      </motion.span>
      <p className="text-xl md:text-2xl leading-relaxed text-white/80 italic max-w-md -mt-8">
        {fmt(body)}
      </p>
      <div className="w-12 h-0.5 bg-violet-500/30 rounded-full mt-6" />
    </motion.div>
  );
}

// ============================================================================
// INSIGHT SLIDE — Short wisdom, big text, centered
// ============================================================================
function InsightSlide({ heading, body }: { heading?: string; body: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center min-h-[55vh] text-center px-2"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', damping: 15 }}
        className="w-12 h-12 rounded-full bg-rose-500/15 border border-rose-500/25 flex items-center justify-center mb-6"
      >
        <Lightbulb className="w-6 h-6 text-rose-400" />
      </motion.div>

      {heading && (
        <p className="text-xs font-semibold text-rose-400/70 uppercase tracking-widest mb-4">{heading}</p>
      )}

      <p className="text-xl md:text-2xl leading-relaxed text-white/85 font-medium max-w-md">
        {fmt(body)}
      </p>
    </motion.div>
  );
}

// ============================================================================
// QUIZ SLIDE
// ============================================================================
function QuizSlide({
  quiz, selected, onSelect, submitted,
}: {
  quiz: QuizQuestion; selected: number | null; onSelect: (i: number) => void; submitted: boolean;
}) {
  const isCorrect = selected === quiz.correct;
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col justify-center min-h-[55vh] py-4">
      <div className="flex items-center gap-2.5 mb-5">
        <div className="w-9 h-9 rounded-xl bg-amber-500/15 flex items-center justify-center">
          <Brain className="w-5 h-5 text-amber-400" />
        </div>
        <h2 className="text-sm font-semibold text-amber-400 uppercase tracking-wider">Quick Check</h2>
      </div>

      <p className="text-lg font-medium text-white mb-6 leading-relaxed">{quiz.question}</p>

      <div className="space-y-2">
        {quiz.options.map((opt, i) => {
          const isSel = selected === i;
          const isRight = i === quiz.correct;
          let cls = 'bg-white/[0.04] border-white/10 hover:bg-white/[0.08]';
          if (submitted) {
            if (isRight) cls = 'bg-emerald-500/15 border-emerald-500/40';
            else if (isSel) cls = 'bg-red-500/15 border-red-500/40';
            else cls = 'bg-white/[0.02] border-white/5 opacity-40';
          } else if (isSel) {
            cls = 'bg-amber-500/15 border-amber-500/40';
          }
          return (
            <motion.button
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => !submitted && onSelect(i)}
              disabled={submitted}
              className={`w-full p-3.5 rounded-xl text-left border transition-all text-[15px] ${cls}`}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[11px] font-bold text-white/50 flex-shrink-0">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="text-white/80">{opt}</span>
                </div>
                {submitted && isRight && <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />}
                {submitted && isSel && !isRight && <X className="w-4 h-4 text-red-400 flex-shrink-0" />}
              </div>
            </motion.button>
          );
        })}
      </div>

      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-4 p-3.5 rounded-xl border text-sm ${isCorrect ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-amber-500/10 border-amber-500/20'}`}
        >
          <p className={`font-semibold mb-1 ${isCorrect ? 'text-emerald-400' : 'text-amber-400'}`}>
            {isCorrect ? 'Correct!' : 'Not quite'}
          </p>
          <p className="text-white/50 leading-relaxed">{quiz.explanation}</p>
        </motion.div>
      )}
    </motion.div>
  );
}

// ============================================================================
// MILESTONE SLIDE — Celebration card, keeps user hooked
// ============================================================================
function MilestoneSlide({ msg, pct }: { msg: string; pct: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center min-h-[60vh] text-center"
    >
      <motion.div
        initial={{ scale: 0, rotate: -30 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', damping: 10, delay: 0.1 }}
        className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500/30 to-red-500/20 border-2 border-orange-500/40 flex items-center justify-center mb-6"
      >
        <Flame className="w-10 h-10 text-orange-400" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-2xl font-bold text-white mb-2"
      >
        {msg}
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-4 w-48"
      >
        <div className="h-2 rounded-full bg-white/10 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
            className="h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-400"
          />
        </div>
        <p className="text-xs text-white/30 mt-2">{pct}% through this lesson</p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-sm text-white/30 mt-6"
      >
        Keep swiping {'\u2191'}
      </motion.p>
    </motion.div>
  );
}

// ============================================================================
// TAKEAWAY SLIDE
// ============================================================================
function TakeawaySlide({ body }: { body: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center min-h-[55vh] text-center px-2"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', delay: 0.1 }}
        className="w-14 h-14 rounded-full bg-amber-500/20 border-2 border-amber-500/35 flex items-center justify-center mb-6"
      >
        <Target className="w-7 h-7 text-amber-400" />
      </motion.div>

      <h2 className="text-xs font-semibold text-amber-400/70 uppercase tracking-widest mb-5">Key Takeaway</h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="text-xl leading-relaxed text-white/85 font-medium max-w-md"
      >
        {fmt(body)}
      </motion.p>
    </motion.div>
  );
}

// ============================================================================
// ACTION SLIDE
// ============================================================================
function ActionSlide({ body }: { body: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col justify-center min-h-[50vh] py-6"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center">
          <Zap className="w-5 h-5 text-emerald-400" />
        </div>
        <div>
          <h2 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider">Your Action Step</h2>
          <p className="text-[10px] text-emerald-400/40 mt-0.5">Try this after the lesson</p>
        </div>
      </div>

      <div className="p-4 rounded-2xl bg-emerald-500/[0.06] border border-emerald-500/15">
        <p className="text-[16px] leading-[1.7] text-white/75">{fmt(body)}</p>
      </div>
    </motion.div>
  );
}

// ============================================================================
// COMPLETE SLIDE
// ============================================================================
function CompleteSlide({
  lesson, isCompleted, onComplete,
}: {
  lesson: PathwayLesson; isCompleted: boolean; onComplete: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center min-h-[65vh] text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', damping: 10, delay: 0.1 }}
        className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-500/30 to-yellow-500/20 border-[3px] border-amber-400 flex items-center justify-center mb-6"
      >
        <Trophy className="w-10 h-10 text-amber-400" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-3xl font-bold text-white mb-3 tracking-tight"
      >
        {isCompleted ? 'Already Done!' : 'Lesson Complete!'}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="px-5 py-2.5 rounded-2xl bg-amber-500/15 border-2 border-amber-500/30 mb-5"
      >
        <span className="text-2xl font-bold text-amber-400">+{lesson.xpReward}</span>
        <span className="text-sm text-amber-400/50 ml-1">XP</span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-sm text-white/30 max-w-xs mb-8"
      >
        {isCompleted ? 'You already earned XP for this lesson.' : 'Tap below to claim your reward.'}
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        whileTap={{ scale: 0.95 }}
        onClick={onComplete}
        className="px-8 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-[#0A0A0B] font-bold text-sm shadow-lg shadow-amber-500/25"
      >
        {isCompleted ? 'Back to Lab' : 'Claim XP & Finish'}
      </motion.button>
    </motion.div>
  );
}

export default ReelReader;
