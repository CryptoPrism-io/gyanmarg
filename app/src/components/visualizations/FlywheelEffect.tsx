import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { RotateCcw } from 'lucide-react';

interface MilestoneType {
  pushes: number;
  label: string;
  insight: string;
}

const milestones: MilestoneType[] = [
  { pushes: 1, label: 'First Push', insight: 'The hardest push. Nothing seems to move.' },
  { pushes: 5, label: 'Barely Moving', insight: 'Slight movement. Most people quit here.' },
  { pushes: 15, label: 'Building Speed', insight: 'Now each push adds noticeably more speed.' },
  { pushes: 30, label: 'Real Momentum', insight: 'The wheel is helping you push now.' },
  { pushes: 50, label: 'Breakthrough', insight: 'One push = massive rotation. Unstoppable.' },
];

const realWorldExamples = [
  { company: 'Amazon', flywheel: 'Lower prices -> More customers -> More sellers -> Lower prices' },
  { company: 'Netflix', flywheel: 'More subscribers -> More content budget -> Better content -> More subscribers' },
  { company: 'Your Skills', flywheel: 'Practice -> Competence -> Confidence -> More practice' },
];

export function FlywheelEffect() {
  const [pushes, setPushes] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [momentum, setMomentum] = useState(0);
  const [showExamples, setShowExamples] = useState(false);
  const [recentMilestone, setRecentMilestone] = useState<MilestoneType | null>(null);
  const animationRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);

  // Continuous rotation based on momentum
  useEffect(() => {
    const animate = (time: number) => {
      if (lastTimeRef.current) {
        const delta = (time - lastTimeRef.current) / 1000;
        setRotation(prev => prev + momentum * delta * 50);
      }
      lastTimeRef.current = time;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [momentum]);

  // Decay momentum slowly
  useEffect(() => {
    if (momentum > 0) {
      const decay = setInterval(() => {
        setMomentum(prev => Math.max(0, prev - 0.02));
      }, 100);
      return () => clearInterval(decay);
    }
  }, [momentum > 0]);

  const push = () => {
    const newPushes = pushes + 1;
    setPushes(newPushes);

    // Each push adds more momentum (compound effect)
    const momentumGain = 0.1 + (newPushes * 0.05);
    setMomentum(prev => Math.min(10, prev + momentumGain));

    // Check for milestones
    const milestone = milestones.find(m => m.pushes === newPushes);
    if (milestone) {
      setRecentMilestone(milestone);
      setTimeout(() => setRecentMilestone(null), 3000);
    }
  };

  const reset = () => {
    setPushes(0);
    setMomentum(0);
    setRotation(0);
    setRecentMilestone(null);
  };

  const currentPhase = pushes >= 50 ? 4 : pushes >= 30 ? 3 : pushes >= 15 ? 2 : pushes >= 5 ? 1 : 0;
  const phaseColors = ['#6B7280', '#EF4444', '#F59E0B', '#22C55E', '#10B981'];
  const phaseColor = phaseColors[currentPhase];

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[var(--viz-bg)]">
      {/* Dark Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.03] via-transparent to-emerald-500/[0.02]" />
      <div className="absolute inset-0 border border-[var(--viz-border-light)] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--viz-line)] to-transparent" />

      <div className="relative z-10 p-5">
        {/* Header */}
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 flex items-center justify-center border border-amber-500/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
            <RotateCcw className="w-4 h-4 text-amber-400" />
          </div>
          <span className="text-sm font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            The Flywheel Effect
          </span>
        </div>

        <div className="flex flex-col items-center gap-6">
          {/* Flywheel visualization */}
          <div className="relative">
            {/* Outer glow based on momentum */}
            <motion.div
              className="absolute inset-0 rounded-full blur-xl"
              style={{ backgroundColor: phaseColor }}
              animate={{
                opacity: momentum > 0 ? 0.3 : 0,
                scale: 1 + momentum * 0.05,
              }}
            />

            {/* Main flywheel */}
            <div className="relative w-44 h-44">
              <motion.svg
                viewBox="0 0 100 100"
                className="w-full h-full"
                style={{ rotate: rotation }}
              >
                {/* Outer ring */}
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke={phaseColor}
                  strokeWidth="8"
                  opacity="0.3"
                />

                {/* Spokes */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                  <line
                    key={i}
                    x1="50"
                    y1="50"
                    x2={50 + 40 * Math.cos((angle * Math.PI) / 180)}
                    y2={50 + 40 * Math.sin((angle * Math.PI) / 180)}
                    stroke={phaseColor}
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity={0.6}
                  />
                ))}

                {/* Center hub */}
                <circle cx="50" cy="50" r="12" fill={phaseColor} />
                <circle cx="50" cy="50" r="6" fill="#0A0A0B" />

                {/* Momentum indicators on rim */}
                {[0, 90, 180, 270].map((angle, i) => (
                  <circle
                    key={i}
                    cx={50 + 45 * Math.cos((angle * Math.PI) / 180)}
                    cy={50 + 45 * Math.sin((angle * Math.PI) / 180)}
                    r="4"
                    fill={phaseColor}
                  />
                ))}
              </motion.svg>

              {/* Speed lines when fast */}
              {momentum > 3 && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-8 rounded-full"
                      style={{
                        backgroundColor: phaseColor,
                        left: '50%',
                        top: '50%',
                        transformOrigin: '50% 0',
                        transform: `rotate(${i * 45}deg) translateY(-70px)`,
                      }}
                      animate={{ opacity: [0, 0.5, 0] }}
                      transition={{ duration: 0.3, repeat: Infinity, delay: i * 0.05 }}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Center stats */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center">
                <motion.p
                  className="text-2xl font-bold"
                  style={{ color: phaseColor }}
                  animate={{ scale: momentum > 5 ? [1, 1.1, 1] : 1 }}
                  transition={{ repeat: momentum > 5 ? Infinity : 0, duration: 0.5 }}
                >
                  {pushes}
                </motion.p>
                <p className="text-[10px] text-[var(--viz-muted)]">pushes</p>
              </div>
            </div>
          </div>

          {/* Momentum meter */}
          <div className="w-full max-w-xs">
            <div className="flex justify-between text-[10px] text-[var(--viz-muted)] mb-1">
              <span>Momentum</span>
              <span style={{ color: phaseColor }}>{momentum.toFixed(1)}x</span>
            </div>
            <div className="h-3 rounded-full border border-[var(--viz-border)] overflow-hidden"
              style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: phaseColor }}
                animate={{ width: `${(momentum / 10) * 100}%` }}
              />
            </div>
          </div>

          {/* Phase indicator */}
          <div className="flex gap-1">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: pushes >= m.pushes ? phaseColors[i] : 'rgba(255,255,255,0.2)',
                }}
                animate={pushes >= m.pushes ? { scale: [1, 1.3, 1] } : {}}
              />
            ))}
          </div>

          {/* Milestone notification */}
          {recentMilestone && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              className="relative overflow-hidden px-4 py-2 rounded-xl border"
              style={{
                background: `linear-gradient(135deg, ${phaseColor}20 0%, ${phaseColor}05 100%)`,
                borderColor: `${phaseColor}50`,
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--viz-line)] to-transparent" />
              <p className="text-sm font-medium" style={{ color: phaseColor }}>
                {recentMilestone.label}
              </p>
              <p className="text-xs text-[var(--viz-secondary)]">{recentMilestone.insight}</p>
            </motion.div>
          )}

          {/* Push button */}
          <motion.button
            onClick={push}
            className="px-8 py-4 rounded-2xl text-sm font-semibold transition-all border-2 backdrop-blur-sm"
            style={{
              background: `linear-gradient(135deg, ${phaseColor}15 0%, ${phaseColor}05 100%)`,
              borderColor: phaseColor,
              color: phaseColor,
              boxShadow: `0 0 20px ${phaseColor}20`,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Push the Flywheel
          </motion.button>

          {/* Current phase description */}
          <div
            className="relative overflow-hidden w-full max-w-xs p-4 rounded-xl border"
            style={{
              background: `linear-gradient(135deg, ${phaseColor}10 0%, ${phaseColor}02 100%)`,
              borderColor: `${phaseColor}30`,
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <p className="text-sm font-medium mb-1" style={{ color: phaseColor }}>
              {milestones[currentPhase]?.label || 'Not Started'}
            </p>
            <p className="text-xs text-[var(--viz-secondary)]">
              {milestones[currentPhase]?.insight || 'Click the button to start pushing.'}
            </p>
            {pushes > 0 && (
              <div className="mt-3 pt-3 border-t border-[var(--viz-border)]">
                <p className="text-[10px] text-[var(--viz-muted)]">
                  Momentum per push: <span style={{ color: phaseColor }}>+{(0.1 + pushes * 0.05).toFixed(2)}</span>
                  {pushes > 10 && <span className="text-green-400 ml-2">({((pushes * 0.05) / 0.1 * 100).toFixed(0)}% more efficient than push #1!)</span>}
                </p>
              </div>
            )}
          </div>

          {/* Real world examples */}
          <button
            onClick={() => setShowExamples(!showExamples)}
            className="text-xs text-[var(--viz-muted)] hover:text-[var(--viz-secondary)] transition-colors"
          >
            {showExamples ? 'Hide' : 'See'} real-world flywheels
          </button>

          {showExamples && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="w-full max-w-xs space-y-2"
            >
              {realWorldExamples.map((ex, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden p-3 rounded-lg border border-[var(--viz-border)]"
                  style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <p className="text-xs font-medium text-amber-400 mb-1">{ex.company}</p>
                  <p className="text-[10px] text-[var(--viz-secondary)]">{ex.flywheel}</p>
                </div>
              ))}
            </motion.div>
          )}

          {pushes > 0 && (
            <button
              onClick={reset}
              className="text-xs text-[var(--viz-muted)] hover:text-[var(--viz-secondary)] transition-colors"
            >
              Reset flywheel
            </button>
          )}

          {/* Key insight */}
          <div className="relative overflow-hidden rounded-xl p-4 max-w-xs border border-[var(--viz-border)]"
            style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <p className="text-xs text-[var(--viz-secondary)] leading-relaxed">
              <span className="text-green-400 font-medium">Jim Collins:</span> "No matter how dramatic
              the end result, good-to-great transformations never happen in one fell swoop. There's
              no single defining action, no miracle moment. It's a cumulative process—push by push."
            </p>
          </div>

          <p className="text-[10px] text-[var(--viz-muted)]">
            From Good to Great by Jim Collins
          </p>
        </div>
      </div>
    </div>
  );
}

export default FlywheelEffect;
