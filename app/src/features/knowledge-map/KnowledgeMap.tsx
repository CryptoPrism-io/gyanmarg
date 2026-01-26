import { useState } from 'react';
import { motion } from 'framer-motion';
import { Network, ChevronRight, Lightbulb, Sparkles, Link2 } from 'lucide-react';
import { ModuleLayout } from '@/components/templates';
import { GlassCard } from '@/components/molecules';
import { Modal } from '@/components/organisms';
import { Button } from '@/components/atoms';

const colorMap: Record<string, { bg: string; border: string; text: string; bar: string }> = {
  orange: { bg: 'bg-sunrise/10', border: 'border-sunrise/30', text: 'text-sunrise', bar: 'bg-sunrise' },
  blue: { bg: 'bg-sky/10', border: 'border-sky/30', text: 'text-sky', bar: 'bg-sky' },
  emerald: { bg: 'bg-sage/10', border: 'border-sage/30', text: 'text-sage', bar: 'bg-sage' },
  purple: { bg: 'bg-lavender/10', border: 'border-lavender/30', text: 'text-lavender', bar: 'bg-lavender' },
  amber: { bg: 'bg-golden/10', border: 'border-golden/30', text: 'text-golden', bar: 'bg-golden' },
  cyan: { bg: 'bg-sky/10', border: 'border-sky/30', text: 'text-sky', bar: 'bg-sky' },
  rose: { bg: 'bg-coral/10', border: 'border-coral/30', text: 'text-coral', bar: 'bg-coral' },
  fuchsia: { bg: 'bg-blush/10', border: 'border-blush/30', text: 'text-blush', bar: 'bg-blush' },
};

const connections = [
  {
    id: 'habits-identity',
    concept1: 'Atomic Habits',
    concept2: 'Identity Change',
    relationship: 'Both emphasize that lasting change comes from identity shifts, not just behavior changes.',
    insight: 'Clear says "become a reader" not "read more." Hardy says your Future Self requires a new identity. Same principle.',
    color: 'orange',
  },
  {
    id: 'deep-habits',
    concept1: 'Deep Work',
    concept2: 'Environment Design',
    relationship: "Newport's environment optimization for focus directly applies Clear's principle of making good habits obvious.",
    insight: 'Remove distractions (make bad habits invisible) and create a dedicated workspace (make focus obvious).',
    color: 'blue',
  },
  {
    id: 'meaning-values',
    concept1: 'Search for Meaning',
    concept2: 'Values Hierarchy',
    relationship: "Frankl's logotherapy and Manson's f*ck budget both address what truly matters.",
    insight: "Both ask: What's worth suffering for? What deserves your limited attention and energy?",
    color: 'emerald',
  },
  {
    id: 'future-deep',
    concept1: 'Future Self',
    concept2: 'Deep Work',
    relationship: 'Prospection (imagining future) helps prioritize which deep work matters most.',
    insight: 'Ask: "What would my Future Self want me to focus on?" to clarify deep work priorities.',
    color: 'purple',
  },
  {
    id: 'compound-10x',
    concept1: '1% Improvements',
    concept2: '10X Thinking',
    relationship: 'Seemingly opposite but complementary: 1% daily + 10X vision creates exponential growth.',
    insight: 'Small actions toward a big vision. The 10X goal eliminates 80% of noise; 1% ensures daily progress.',
    color: 'amber',
  },
  {
    id: 'stimulus-habits',
    concept1: 'Stimulus-Response Gap',
    concept2: 'Habit Loop',
    relationship: "Frankl's space between stimulus and response IS the moment to choose a different response (habit).",
    insight: 'Awareness of the gap lets you interrupt automatic habits and consciously choose better ones.',
    color: 'rose',
  },
  {
    id: 'shutdown-meaning',
    concept1: 'Shutdown Ritual',
    concept2: 'Sources of Meaning',
    relationship: 'Ending work properly allows for experiential values (love, beauty) outside work.',
    insight: "Meaning comes from work AND love/experience. Without shutdown, you sacrifice one source for another.",
    color: 'cyan',
  },
  {
    id: 'not-giving-future',
    concept1: "Not Giving F*cks",
    concept2: 'Future Self Connection',
    relationship: "Manson's selectivity + Hardy's Future Self = give f*cks only about what serves your Future Self.",
    insight: "Filter decisions through: 'Does my Future Self care about this?' If not, don't give it energy.",
    color: 'fuchsia',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
};

export function KnowledgeMap() {
  const [selectedConnection, setSelectedConnection] = useState<typeof connections[0] | null>(null);

  return (
    <ModuleLayout
      title="Knowledge Connections"
      subtitle="See how ideas link across books"
      icon={<Network className="w-5 h-5" />}
      headerGradient="aurora"
    >
      {/* Intro Card */}
      <GlassCard className="mb-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-lavender/10 border border-lavender/20 flex items-center justify-center shrink-0">
            <Lightbulb className="w-6 h-6 text-lavender" />
          </div>
          <div>
            <h3 className="font-display font-semibold text-text-primary mb-1">Why Connections Matter</h3>
            <p className="text-sm text-text-secondary">
              The 5 books in this module aren't separate ideas—they reinforce each other.
              Understanding these connections creates deeper insight and retention.
            </p>
          </div>
        </div>
      </GlassCard>

      {/* Connections Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-3"
      >
        {connections.map((connection) => {
          const colors = colorMap[connection.color] || colorMap.orange;

          return (
            <motion.div key={connection.id} variants={itemVariants}>
              <button
                onClick={() => setSelectedConnection(connection)}
                className="w-full glass rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all text-left group"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-1.5 h-14 rounded-full ${colors.bar}`} />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`font-medium ${colors.text}`}>
                        {connection.concept1}
                      </span>
                      <Link2 className={`w-4 h-4 ${colors.text} opacity-50`} />
                      <span className={`font-medium ${colors.text}`}>
                        {connection.concept2}
                      </span>
                    </div>
                    <p className="text-sm text-text-secondary line-clamp-2">
                      {connection.relationship}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-text-muted group-hover:text-text-secondary group-hover:translate-x-1 transition-all shrink-0" />
                </div>
              </button>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Visual Map Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 relative overflow-hidden rounded-2xl"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-sunrise/10 via-lavender/5 to-golden/10" />
        <div className="absolute inset-0 border border-sunrise/20 rounded-2xl" />

        <div className="relative p-8 text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-sunrise/10 border border-sunrise/20 rounded-2xl flex items-center justify-center">
            <Network className="w-8 h-8 text-sunrise" />
          </div>
          <h3 className="text-lg font-display font-semibold text-text-primary mb-2">
            Interactive Knowledge Graph
          </h3>
          <p className="text-text-secondary text-sm max-w-md mx-auto">
            A visual network diagram showing how all concepts connect will be
            available in a future update.
          </p>
        </div>
      </motion.div>

      {/* Connection Detail Modal */}
      <Modal
        isOpen={!!selectedConnection}
        onClose={() => setSelectedConnection(null)}
        title="Connection Detail"
        size="lg"
      >
        {selectedConnection && (
          <div className="space-y-6">
            {/* Concepts */}
            <div className="flex items-center justify-center gap-4">
              <div className="flex-1 glass p-4 rounded-xl text-center border border-white/10">
                <p className="font-display font-semibold text-text-primary">
                  {selectedConnection.concept1}
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-lavender/10 border border-lavender/20 flex items-center justify-center">
                <Link2 className="w-5 h-5 text-lavender" />
              </div>
              <div className="flex-1 glass p-4 rounded-xl text-center border border-white/10">
                <p className="font-display font-semibold text-text-primary">
                  {selectedConnection.concept2}
                </p>
              </div>
            </div>

            {/* Relationship */}
            <div>
              <h4 className="text-sm font-medium text-text-muted mb-2">
                The Connection
              </h4>
              <p className="text-text-secondary">{selectedConnection.relationship}</p>
            </div>

            {/* Insight */}
            <GlassCard className="border-sunrise/20">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-sunrise/10 border border-sunrise/20 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-sunrise" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-sunrise mb-1">
                    Key Insight
                  </h4>
                  <p className="text-text-secondary">{selectedConnection.insight}</p>
                </div>
              </div>
            </GlassCard>

            {/* Application prompt */}
            <div className="pt-4 border-t border-white/[0.06]">
              <h4 className="text-sm font-medium text-text-muted mb-2">
                Apply This Connection
              </h4>
              <p className="text-sm text-text-secondary mb-4">
                How can you use both of these concepts together in your own life?
                Consider writing a reflection in your journal.
              </p>
              <Button variant="glass" onClick={() => setSelectedConnection(null)}>
                Close
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </ModuleLayout>
  );
}

export default KnowledgeMap;
