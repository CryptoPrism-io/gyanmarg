import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Eye, X } from 'lucide-react';
import { Modal } from './Modal';
import { Button } from '@/components/atoms';
import { useUserStore } from '@/store/userStore';
import { getModuleMetaById } from '@/data/modules-meta';

interface VizUnlockModalProps {
  isOpen: boolean;
  onClose: () => void;
  vizUnlock: { vizId: string; moduleId: string; levelId: string } | null;
}

// Get viz title from the VisualLab visualizations data
// We keep a small lookup here to avoid importing the full VisualLab
const vizTitles: Record<string, string> = {
  'habit-loop': 'The Habit Loop',
  'compound-growth': 'The Power of 1%',
  'activation-energy': 'Activation Energy',
  'two-minute-rule': 'The Two-Minute Rule',
  'eisenhower-matrix': 'The Eisenhower Matrix',
  'parkinsons-law': "Parkinson's Law",
  'zeigarnik-effect': 'The Zeigarnik Effect',
  'flywheel-effect': 'The Flywheel Effect',
  'deliberate-practice': 'Deliberate Practice',
  'identity-habits': 'Identity-Based Habits',
  'four-laws-habits': 'Four Laws of Behavior Change',
  'document-dont-create': "Document, Don't Create",
  'patience-hustle': 'Macro Patience, Micro Speed',
  'system-thinking': 'System 1 vs System 2',
  'dunning-kruger': 'The Dunning-Kruger Effect',
  'confirmation-bias': 'Confirmation Bias',
  'availability-heuristic': 'Availability Heuristic',
  'anchoring-bias': 'Anchoring Bias',
  'mere-exposure': 'Mere Exposure Effect',
  'peak-end-rule': 'Peak-End Rule',
  'hedonic-treadmill': 'The Hedonic Treadmill',
  'ladder-of-inference': 'Ladder of Inference',
  'dark-triad': 'The Dark Triad',
  'framing-effect': 'The Framing Effect',
  'spotlight-effect': 'The Spotlight Effect',
  'halo-effect': 'The Halo Effect',
  'knowledge-illusion': 'The Knowledge Illusion',
  'eq-quadrants': 'The EQ Quadrants',
  'six-second-pause': 'The 6-Second Pause',
  'status-games': 'Dominance vs Prestige',
  'virtue-success-status': 'Three Status Games',
  'loss-aversion': 'Loss Aversion',
  'sunk-cost-fallacy': 'Sunk Cost Fallacy',
  'second-order-thinking': 'Second-Order Thinking',
  'inversion-thinking': 'Inversion Thinking',
  'first-principles': 'First Principles Thinking',
  'regret-minimization': 'Regret Minimization',
  'ooda-loop': 'The OODA Loop',
  'circle-competence': 'Circle of Competence',
  'pareto-principle': 'The 80/20 Rule',
  'the-dip': 'The Dip',
  'resulting-bias': 'Resulting (Outcome Bias)',
  'confidence-calibration': 'Confidence Calibration',
  'margin-of-safety': 'Margin of Safety',
  'time-in-market': 'Time in Market',
  'barbell-strategy': 'Barbell Strategy',
  'lindy-effect': 'The Lindy Effect',
  'compound-interest': 'Compound Interest',
  'rule-of-72': 'The Rule of 72',
  'dollar-cost-averaging': 'Dollar Cost Averaging',
  'asset-allocation': 'Asset Allocation',
  'black-swan': 'Black Swan Events',
  'blockchain-basics': 'Blockchain Fundamentals',
  'pay-yourself-first': 'Pay Yourself First',
  'seven-cures': 'Seven Cures for a Lean Purse',
  'asset-liability': 'Assets vs Liabilities',
  'cashflow-quadrant': 'Cashflow Quadrant',
  'tax-buckets': 'Three Tax Buckets',
  'tax-strategy-quadrant': 'Tax Strategy Quadrant',
  'buy-vs-build': 'Buy vs Build',
  'acquisition-criteria': 'Acquisition Criteria',
  'decentralized-command': 'Decentralized Command',
  'batna': 'BATNA',
  'feynman-technique': 'The Feynman Technique',
  'tactical-empathy': 'Tactical Empathy',
  'cialdini-principles': '6 Weapons of Influence',
  'ackerman-model': 'The Ackerman Model',
  'interest-vs-positions': 'Interests vs Positions',
  'batna-power': 'BATNA Power',
  'network-effect': 'The Network Effect',
  'generosity-loop': 'The Generosity Loop',
  'nvc-four-steps': 'NVC: OFNR Process',
  'request-vs-demand': 'Requests vs Demands',
  'state-path': 'STATE Your Path',
  'safety-restoration': 'Restoring Safety',
  'three-conversations': 'The Three Conversations',
  'contribution-vs-blame': 'Contribution vs Blame',
  'rule-of-three': 'The Rule of Three',
  'jaw-dropping-moment': 'The Jaw-Dropping Moment',
  'storybrand-framework': 'StoryBrand Framework',
  'customer-as-hero': 'Customer as Hero',
  'pacifying-behaviors': 'Pacifying Behaviors',
  'feet-dont-lie': "Feet Don't Lie",
  'power-poses': 'Power Poses',
  'mirroring-rapport': 'Mirroring & Rapport',
  'status-transactions': 'Status Transactions',
  'yes-and-principle': '"Yes, And" Principle',
  'flow-state': 'The Flow State',
  'forgetting-curve': 'The Forgetting Curve',
  'sleep-architecture': 'Sleep Architecture',
  'dopamine-baseline': 'Dopamine Baseline',
  'ultradian-rhythms': 'Ultradian Rhythms',
  'attention-residue': 'Attention Residue',
  'vo2max-longevity': 'VO2 Max & Longevity',
  'neuroplasticity': 'Neuroplasticity',
  'hormesis': 'Hormesis',
  'circadian-rhythm': 'Circadian Rhythm',
  'box-breathing': 'Box Breathing',
  'wim-hof-method': 'Wim Hof Method',
  'protein-synthesis': 'Muscle Protein Synthesis',
  'mindfulness-meditation': 'Mindfulness Meditation',
  'energy-pyramid': 'The Energy Pyramid',
  'work-rest-cycle': 'Work-Rest Oscillation',
  'antifragility': 'Antifragility',
  'circle-of-control': 'Circle of Control',
  'forty-percent-rule': 'The 40% Rule',
  'cookie-jar': 'The Cookie Jar',
  'extreme-ownership-principle': 'Extreme Ownership',
  'circle-of-safety': 'Circle of Safety',
  'growth-mindset': 'Growth vs Fixed Mindset',
  'be-water': 'Be Water',
  'iceberg-model': 'Iceberg of Success',
  'logotherapy': 'Logotherapy: Finding Meaning',
  'stoic-dichotomy': 'Dichotomy of Control',
  'dichotomy-control': 'Dichotomy of Control (Daily Stoic)',
  'memento-mori': 'Memento Mori',
  'stress-recovery-balance': 'Stress + Recovery = Growth',
  'purpose-pyramid': 'The Purpose Pyramid',
  'leadership-chemicals': 'Leadership Chemicals',
};

async function fireConfetti() {
  try {
    const confetti = (await import('canvas-confetti')).default;
    // Burst from both sides
    confetti({
      particleCount: 60,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.65 },
      colors: ['#f59e0b', '#a855f7', '#6366f1', '#ec4899', '#22c55e'],
    });
    confetti({
      particleCount: 60,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.65 },
      colors: ['#f59e0b', '#a855f7', '#6366f1', '#ec4899', '#22c55e'],
    });
  } catch {
    // confetti not available
  }
}

export function VizUnlockModal({ isOpen, onClose, vizUnlock }: VizUnlockModalProps) {
  const navigate = useNavigate();
  const settings = useUserStore((state) => state.settings);

  const vizTitle = vizUnlock ? (vizTitles[vizUnlock.vizId] || vizUnlock.vizId) : '';
  const moduleInfo = useMemo(() => {
    if (!vizUnlock) return null;
    const mod = getModuleMetaById(vizUnlock.moduleId);
    if (!mod) return null;
    return { moduleName: mod.title, levelName: '' };
  }, [vizUnlock]);

  useEffect(() => {
    if (isOpen && vizUnlock) {
      fireConfetti();
      if (settings.soundEnabled) {
        try {
          const audio = new Audio('/sounds/achievement.mp3');
          audio.volume = 0.5;
          audio.play().catch(() => {});
        } catch {
          // sound not available
        }
      }
    }
  }, [isOpen, vizUnlock, settings.soundEnabled]);

  if (!vizUnlock) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center py-6 relative"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          onTouchEnd={(e) => { e.preventDefault(); e.stopPropagation(); onClose(); }}
          className="absolute top-0 right-0 p-3 text-muted hover:text-text-secondary active:text-text-primary transition-colors touch-manipulation"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Sparkle icon animation */}
        <motion.div
          initial={{ rotateY: 0, scale: 0 }}
          animate={{ rotateY: 360, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 200 }}
          className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-lavender to-purple-600 flex items-center justify-center shadow-lg shadow-lavender/30"
        >
          <Sparkles className="w-12 h-12 text-white" />
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-bold text-text-primary mb-2"
        >
          Visualization Unlocked!
        </motion.h2>

        {/* Viz name */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-lavender font-semibold mb-2"
        >
          {vizTitle}
        </motion.p>

        {/* Module context */}
        {moduleInfo && (
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-sm text-text-muted mb-6 px-4"
          >
            Earned by completing <span className="text-sunrise">{moduleInfo.levelName}</span> in {moduleInfo.moduleName}
          </motion.p>
        )}

        {/* Stars decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-1 mb-6"
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.7 + i * 0.1, type: 'spring', stiffness: 400 }}
            >
              <Sparkles className="w-4 h-4 text-lavender/60" />
            </motion.div>
          ))}
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col gap-2 px-4"
        >
          <Button
            variant="primary"
            className="w-full flex items-center justify-center gap-2"
            onClick={() => {
              onClose();
              navigate('/visualizations');
            }}
          >
            <Eye className="w-4 h-4" />
            View in Visual Lab
          </Button>
          <button
            onClick={onClose}
            className="text-sm text-text-muted hover:text-text-secondary transition-colors py-2"
          >
            Continue Learning
          </button>
        </motion.div>
      </motion.div>
    </Modal>
  );
}

export default VizUnlockModal;
