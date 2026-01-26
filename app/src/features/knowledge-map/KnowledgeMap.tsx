import { useState } from 'react';
import { motion } from 'framer-motion';
import { Network, ChevronRight, Lightbulb } from 'lucide-react';
import { ModuleLayout } from '@/components/templates';
import { Card } from '@/components/molecules';
import { Modal } from '@/components/organisms';

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

export function KnowledgeMap() {
  const [selectedConnection, setSelectedConnection] = useState<typeof connections[0] | null>(null);

  return (
    <ModuleLayout
      title="Knowledge Connections"
      subtitle="See how ideas link across books"
      icon={<Network className="w-5 h-5" />}
    >
      {/* Intro Card */}
      <Card className="mb-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
            <Lightbulb className="w-5 h-5 text-accent" />
          </div>
          <div>
            <h3 className="font-semibold text-primary mb-1">Why Connections Matter</h3>
            <p className="text-sm text-secondary">
              The 5 books in this module aren't separate ideas—they reinforce each other.
              Understanding these connections creates deeper insight and retention.
            </p>
          </div>
        </div>
      </Card>

      {/* Connections Grid */}
      <div className="space-y-3">
        {connections.map((connection, i) => (
          <motion.div
            key={connection.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <button
              onClick={() => setSelectedConnection(connection)}
              className="w-full bg-secondary rounded-xl p-4 border border-border hover:border-muted hover:bg-elevated transition-all text-left group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-3 h-12 rounded-full bg-${connection.color}-500`}
                  />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-primary">
                        {connection.concept1}
                      </span>
                      <span className="text-muted">↔</span>
                      <span className="font-medium text-primary">
                        {connection.concept2}
                      </span>
                    </div>
                    <p className="text-sm text-secondary line-clamp-2">
                      {connection.relationship}
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-muted group-hover:text-secondary transition-colors shrink-0" />
              </div>
            </button>
          </motion.div>
        ))}
      </div>

      {/* Visual Map Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 bg-gradient-to-br from-accent/5 to-purple-500/5 rounded-2xl p-8 border border-accent/20"
      >
        <div className="text-center">
          <Network className="w-12 h-12 text-accent mx-auto mb-4 opacity-50" />
          <h3 className="text-lg font-semibold text-primary mb-2">
            Interactive Knowledge Graph
          </h3>
          <p className="text-secondary text-sm max-w-md mx-auto">
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
              <div className="flex-1 p-4 bg-secondary rounded-xl text-center">
                <p className="font-semibold text-primary">
                  {selectedConnection.concept1}
                </p>
              </div>
              <div className="text-2xl text-muted">↔</div>
              <div className="flex-1 p-4 bg-secondary rounded-xl text-center">
                <p className="font-semibold text-primary">
                  {selectedConnection.concept2}
                </p>
              </div>
            </div>

            {/* Relationship */}
            <div>
              <h4 className="text-sm font-medium text-muted mb-2">
                The Connection
              </h4>
              <p className="text-secondary">{selectedConnection.relationship}</p>
            </div>

            {/* Insight */}
            <div className="bg-accent/10 border border-accent/20 rounded-xl p-4">
              <h4 className="text-sm font-medium text-accent mb-2">
                Key Insight
              </h4>
              <p className="text-secondary">{selectedConnection.insight}</p>
            </div>

            {/* Application prompt */}
            <div className="pt-4 border-t border-border">
              <h4 className="text-sm font-medium text-muted mb-2">
                Apply This Connection
              </h4>
              <p className="text-sm text-secondary">
                How can you use both of these concepts together in your own life?
                Consider writing a reflection in your journal.
              </p>
            </div>
          </div>
        )}
      </Modal>
    </ModuleLayout>
  );
}

export default KnowledgeMap;
