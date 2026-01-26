import React, { useState } from 'react';
import { BookOpen, Link2, Lightbulb, ChevronDown, ChevronUp, Zap, Brain, ArrowRight } from 'lucide-react';

interface Connection {
  id: string;
  concept1: { book: string; concept: string; icon: string };
  concept2: { book: string; concept: string; icon: string };
  insight: string;
  type: 'reinforces' | 'contrasts' | 'extends' | 'applies';
}

interface BookNode {
  id: string;
  title: string;
  icon: string;
  color: string;
  keyConcepts: string[];
}

const books: BookNode[] = [
  {
    id: 'atomic',
    title: 'Atomic Habits',
    icon: '🔄',
    color: 'orange',
    keyConcepts: ['1% Improvement', '4 Laws', 'Identity Change', 'Habit Stacking', 'Environment Design']
  },
  {
    id: 'deep',
    title: 'Deep Work',
    icon: '🎯',
    color: 'blue',
    keyConcepts: ['Focus Blocks', 'Attention Residue', '4DX', 'Shutdown Ritual', 'Productive Meditation']
  },
  {
    id: 'future',
    title: 'Future Self',
    icon: '🚀',
    color: 'purple',
    keyConcepts: ['Future Self Connection', 'Gap vs Gain', '10X Thinking', 'Identity Transformation', 'Prospection']
  },
  {
    id: 'meaning',
    title: "Man's Search",
    icon: '💫',
    color: 'emerald',
    keyConcepts: ['Last Freedom', 'Will to Meaning', '3 Sources', 'Tragic Optimism', 'Existential Vacuum']
  },
  {
    id: 'subtle',
    title: 'Subtle Art',
    icon: '🎸',
    color: 'red',
    keyConcepts: ['F*ck Budget', 'Backwards Law', 'Fault vs Responsibility', 'Entitlement', 'Values Hierarchy']
  }
];

const connections: Connection[] = [
  // Atomic Habits + Deep Work
  {
    id: 'c1',
    concept1: { book: 'Atomic Habits', concept: 'Environment Design', icon: '🔄' },
    concept2: { book: 'Deep Work', concept: 'Distraction-Free Focus', icon: '🎯' },
    insight: 'Both emphasize designing your physical space for success. Clear removes friction for good habits; Newport eliminates friction for focus. Your environment is your first line of defense.',
    type: 'reinforces'
  },
  {
    id: 'c2',
    concept1: { book: 'Atomic Habits', concept: 'Habit Stacking', icon: '🔄' },
    concept2: { book: 'Deep Work', concept: 'Shutdown Ritual', icon: '🎯' },
    insight: 'Newport\'s shutdown ritual IS a habit stack. "After I review tomorrow\'s tasks, I will say \'shutdown complete.\'" Clear\'s framework explains WHY rituals work.',
    type: 'applies'
  },

  // Atomic Habits + Future Self
  {
    id: 'c3',
    concept1: { book: 'Atomic Habits', concept: 'Identity-Based Change', icon: '🔄' },
    concept2: { book: 'Future Self', concept: 'Future Self Connection', icon: '🚀' },
    insight: 'Clear says "become the person." Hardy says "connect to Future Self." SAME IDEA, different angles. Your identity pulls you forward. Design who you\'re becoming, not just what you\'re doing.',
    type: 'reinforces'
  },
  {
    id: 'c4',
    concept1: { book: 'Atomic Habits', concept: '1% Improvement', icon: '🔄' },
    concept2: { book: 'Future Self', concept: '10X Thinking', icon: '🚀' },
    insight: 'Apparent contradiction! 1% = incremental, 10X = quantum leap. Resolution: 1% applies to DAILY actions, 10X applies to VISION. Think 10X, act 1%.',
    type: 'contrasts'
  },

  // Atomic Habits + Meaning
  {
    id: 'c5',
    concept1: { book: 'Atomic Habits', concept: 'Identity Change', icon: '🔄' },
    concept2: { book: "Man's Search", concept: 'Will to Meaning', icon: '💫' },
    insight: 'Frankl: meaning drives behavior. Clear: identity drives behavior. Combined insight: Your identity should be rooted in MEANING. "I am someone who creates meaningful work" is more powerful than "I am productive."',
    type: 'extends'
  },

  // Atomic Habits + Subtle Art
  {
    id: 'c6',
    concept1: { book: 'Atomic Habits', concept: '4 Laws (Make it Satisfying)', icon: '🔄' },
    concept2: { book: 'Subtle Art', concept: 'Backwards Law', icon: '🎸' },
    insight: 'Tension! Clear says make it satisfying (positive reinforcement). Manson says pursuing pleasure backfires. Resolution: Find satisfaction in PROCESS and VALUES, not just dopamine hits.',
    type: 'contrasts'
  },

  // Deep Work + Future Self
  {
    id: 'c7',
    concept1: { book: 'Deep Work', concept: 'Wildly Important Goals', icon: '🎯' },
    concept2: { book: 'Future Self', concept: '10X Vision', icon: '🚀' },
    insight: 'Newport\'s "wildly important" = Hardy\'s "10X goal." Both reject mediocre ambitions. Your deep work should serve a Future Self vision that seems almost impossible.',
    type: 'reinforces'
  },
  {
    id: 'c8',
    concept1: { book: 'Deep Work', concept: 'Attention Residue', icon: '🎯' },
    concept2: { book: 'Future Self', concept: 'Present Self vs Future Self', icon: '🚀' },
    insight: 'Attention residue keeps you stuck in the PAST task. Hardy says we treat Future Self as stranger. Both point to same problem: we\'re not fully PRESENT or FUTURE-oriented. Mindful focus is the bridge.',
    type: 'extends'
  },

  // Deep Work + Meaning
  {
    id: 'c9',
    concept1: { book: 'Deep Work', concept: 'Craft vs Content', icon: '🎯' },
    concept2: { book: "Man's Search", concept: 'Meaning Through Work', icon: '💫' },
    insight: 'Newport: craftsman mindset creates meaning. Frankl: work is a source of meaning. Deep work isn\'t just productive—it\'s one of Frankl\'s paths to meaning.',
    type: 'reinforces'
  },

  // Deep Work + Subtle Art
  {
    id: 'c10',
    concept1: { book: 'Deep Work', concept: 'Embrace Boredom', icon: '🎯' },
    concept2: { book: 'Subtle Art', concept: 'Accepting Negative Experience', icon: '🎸' },
    insight: 'Newport: train yourself to embrace boredom. Manson: accept negative feelings. Same insight: discomfort is the price of depth. Stop running from it.',
    type: 'reinforces'
  },

  // Future Self + Meaning
  {
    id: 'c11',
    concept1: { book: 'Future Self', concept: 'Gap vs Gain', icon: '🚀' },
    concept2: { book: "Man's Search", concept: 'Tragic Optimism', icon: '💫' },
    insight: 'Hardy\'s "Gain" = measuring progress from past. Frankl\'s "Tragic Optimism" = finding growth in suffering. Both transform pain into progress by REFRAMING, not denying reality.',
    type: 'reinforces'
  },
  {
    id: 'c12',
    concept1: { book: 'Future Self', concept: 'Prospection', icon: '🚀' },
    concept2: { book: "Man's Search", concept: 'Will to Meaning', icon: '💫' },
    insight: 'Hardy: brain is a future-simulation machine. Frankl: we need meaning to live for. Combined: we need a MEANINGFUL FUTURE to simulate. Purpose-driven prospection is most powerful.',
    type: 'extends'
  },

  // Future Self + Subtle Art
  {
    id: 'c13',
    concept1: { book: 'Future Self', concept: 'Identity Transformation', icon: '🚀' },
    concept2: { book: 'Subtle Art', concept: 'You\'re Not Special', icon: '🎸' },
    insight: 'Tension! Hardy says become extraordinary Future Self. Manson says you\'re not special. Resolution: Your Future Self is extraordinary because of VALUES and CONTRIBUTION, not entitlement or comparison.',
    type: 'contrasts'
  },

  // Meaning + Subtle Art
  {
    id: 'c14',
    concept1: { book: "Man's Search", concept: 'Last Human Freedom', icon: '💫' },
    concept2: { book: 'Subtle Art', concept: 'Fault vs Responsibility', icon: '🎸' },
    insight: 'Frankl: you always choose your response. Manson: not your fault, but your responsibility. SAME CORE TRUTH from a Holocaust survivor and a blogger. You own your response.',
    type: 'reinforces'
  },
  {
    id: 'c15',
    concept1: { book: "Man's Search", concept: 'Suffering With Meaning', icon: '💫' },
    concept2: { book: 'Subtle Art', concept: 'Choose Your Problems', icon: '🎸' },
    insight: 'Frankl: suffering becomes bearable with meaning. Manson: life IS problems, choose good ones. Both accept suffering as inevitable but CHOOSEABLE. What problems are worth having?',
    type: 'reinforces'
  }
];

export default function KnowledgeMap() {
  const [selectedBook, setSelectedBook] = useState<string | null>(null);
  const [expandedConnection, setExpandedConnection] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'map' | 'list'>('map');

  const getBookColor = (bookId: string) => {
    const book = books.find(b => b.id === bookId);
    return book?.color || 'slate';
  };

  const filteredConnections = selectedBook
    ? connections.filter(c =>
        c.concept1.book.toLowerCase().includes(selectedBook) ||
        c.concept2.book.toLowerCase().includes(selectedBook)
      )
    : connections;

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'reinforces': return { label: 'Reinforces', color: 'bg-green-500/20 text-green-400' };
      case 'contrasts': return { label: 'Contrasts', color: 'bg-orange-500/20 text-orange-400' };
      case 'extends': return { label: 'Extends', color: 'bg-blue-500/20 text-blue-400' };
      case 'applies': return { label: 'Applies', color: 'bg-purple-500/20 text-purple-400' };
      default: return { label: 'Related', color: 'bg-slate-500/20 text-slate-400' };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-white p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-xl font-bold flex items-center gap-2 mb-2">
            <Link2 className="w-5 h-5 text-purple-400" />
            Knowledge Connection Map
          </h1>
          <p className="text-sm text-slate-400">
            Discover how concepts from all 5 books connect and reinforce each other
          </p>
        </div>

        {/* Book Filter */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setSelectedBook(null)}
            className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
              !selectedBook ? 'bg-purple-500 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            All Books
          </button>
          {books.map(book => (
            <button
              key={book.id}
              onClick={() => setSelectedBook(selectedBook === book.id ? null : book.id)}
              className={`px-3 py-1.5 rounded-lg text-sm transition-all flex items-center gap-1 ${
                selectedBook === book.id
                  ? `bg-${book.color}-500 text-white`
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {book.icon} {book.title}
            </button>
          ))}
        </div>

        {/* Visual Map */}
        <div className="bg-slate-800/50 rounded-xl p-4 mb-6">
          <h2 className="text-sm font-semibold text-slate-400 mb-4">📊 Connection Overview</h2>

          {/* Simple visual representation */}
          <div className="relative">
            {/* Center node */}
            <div className="flex justify-center mb-4">
              <div className="bg-purple-500/30 border border-purple-500 rounded-xl px-4 py-2 text-center">
                <Brain className="w-6 h-6 text-purple-400 mx-auto mb-1" />
                <span className="text-sm font-semibold">Your Growth</span>
              </div>
            </div>

            {/* Book nodes in circle */}
            <div className="flex justify-around flex-wrap gap-4">
              {books.map(book => {
                const connectionCount = connections.filter(c =>
                  c.concept1.book.toLowerCase().includes(book.id) ||
                  c.concept2.book.toLowerCase().includes(book.id)
                ).length;

                return (
                  <div
                    key={book.id}
                    onClick={() => setSelectedBook(selectedBook === book.id ? null : book.id)}
                    className={`
                      bg-slate-700/50 rounded-xl p-3 text-center cursor-pointer transition-all
                      hover:scale-105 border-2
                      ${selectedBook === book.id ? `border-${book.color}-500` : 'border-transparent'}
                    `}
                  >
                    <span className="text-2xl block mb-1">{book.icon}</span>
                    <span className="text-xs font-medium">{book.title}</span>
                    <div className="text-xs text-slate-500 mt-1">
                      {connectionCount} links
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Connections List */}
        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-400 flex items-center gap-2">
            <Lightbulb className="w-4 h-4" />
            {filteredConnections.length} Connections Found
          </h2>

          {filteredConnections.map(connection => {
            const typeInfo = getTypeLabel(connection.type);
            const isExpanded = expandedConnection === connection.id;

            return (
              <div
                key={connection.id}
                className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700"
              >
                <button
                  onClick={() => setExpandedConnection(isExpanded ? null : connection.id)}
                  className="w-full p-4 text-left hover:bg-slate-700/30 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-lg">{connection.concept1.icon}</span>
                      <span className="text-sm font-medium text-slate-300">
                        {connection.concept1.concept}
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-500" />
                      <span className="text-lg">{connection.concept2.icon}</span>
                      <span className="text-sm font-medium text-slate-300">
                        {connection.concept2.concept}
                      </span>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    )}
                  </div>

                  <div className="flex items-center gap-2 mt-2">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${typeInfo.color}`}>
                      {typeInfo.label}
                    </span>
                    <span className="text-xs text-slate-500">
                      {connection.concept1.book} ↔ {connection.concept2.book}
                    </span>
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-4 pb-4 border-t border-slate-700">
                    <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg p-4 mt-3">
                      <div className="flex items-start gap-2">
                        <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                        <p className="text-slate-200 text-sm leading-relaxed">
                          {connection.insight}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Synthesis Tips */}
        <div className="mt-6 bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
          <h3 className="font-semibold text-yellow-400 mb-2">🧠 Why Connections Matter</h3>
          <p className="text-slate-300 text-sm mb-3">
            Learning research shows that connecting new information to existing knowledge creates
            stronger, more accessible memories. When you see how concepts relate across books,
            you understand them more deeply.
          </p>
          <div className="text-xs text-slate-400">
            <strong>The Feynman Technique:</strong> If you can explain how two concepts relate,
            you truly understand both.
          </div>
        </div>

        {/* Key Synthesis */}
        <div className="mt-4 bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
          <h3 className="font-semibold text-purple-400 mb-3">✨ Master Synthesis</h3>
          <p className="text-slate-300 text-sm">
            All 5 books converge on ONE meta-insight:
          </p>
          <p className="text-white font-medium mt-2 text-center py-3 bg-slate-800/50 rounded-lg">
            "Design your environment, identity, and attention around what truly matters—<br/>
            and accept the struggle that comes with it."
          </p>
        </div>
      </div>
    </div>
  );
}
