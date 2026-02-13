import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';
import { modules } from '@/data/modules';
import { useProgressStore } from '@/store/progressStore';

/**
 * Mind Map Explorer - Spatial Visual Learning
 *
 * Features:
 * - Interactive node-based exploration
 * - Radial layout with force-directed positioning
 * - Pan and zoom controls
 * - Node states (unexplored, active, completed)
 * - Animated connection paths
 * - Quiz nodes with special styling
 * - Particle effects on connections
 */

interface Node {
  id: string;
  label: string;
  type: 'central' | 'concept' | 'quiz' | 'takeaway' | 'action';
  content: string;
  x: number;
  y: number;
  explored: boolean;
  quizData?: {
    question: string;
    options: string[];
    correct: number;
    explanation: string;
  };
}

interface Connection {
  from: string;
  to: string;
}

export default function MindMapExplorer() {
  const { moduleId, lessonId } = useParams<{ moduleId: string; lessonId: string }>();
  const navigate = useNavigate();
  const svgRef = useRef<SVGSVGElement>(null);

  const [nodes, setNodes] = useState<Node[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [selectedQuizAnswer, setSelectedQuizAnswer] = useState<number | null>(null);
  const [showQuizExplanation, setShowQuizExplanation] = useState(false);

  const completeLesson = useProgressStore((s) => s.completeLesson);
  const isLessonCompleted = useProgressStore((s) => s.isLessonCompleted);

  // Find module and lesson
  const module = modules.find(m => m.id === moduleId);
  const pathway = module?.pathway;
  const lesson = pathway?.flatMap(level => level.lessons).find(l => l.id === lessonId);

  // Initialize mind map from lesson content
  useEffect(() => {
    if (!lesson) return;

    const centerX = 500;
    const centerY = 400;
    const radius = 300;

    const newNodes: Node[] = [];
    const newConnections: Connection[] = [];

    // Central node (lesson title)
    newNodes.push({
      id: 'central',
      label: lesson.title,
      type: 'central',
      content: lesson.content.overview,
      x: centerX,
      y: centerY,
      explored: false,
    });

    // Split main content into concept nodes (circular layout)
    const paragraphs = lesson.content.mainContent.split('\n\n').filter(p => p.trim());
    const angleStep = (2 * Math.PI) / (paragraphs.length + 2); // +2 for quiz and takeaway

    paragraphs.forEach((para, i) => {
      const angle = i * angleStep;
      const sentences = para.split('. ');
      const nodeId = `concept-${i}`;

      newNodes.push({
        id: nodeId,
        label: sentences[0].substring(0, 40) + '...',
        type: 'concept',
        content: para,
        x: centerX + Math.cos(angle) * radius,
        y: centerY + Math.sin(angle) * radius,
        explored: false,
      });

      newConnections.push({ from: 'central', to: nodeId });
    });

    // Quiz node
    if (lesson.content.quiz) {
      const angle = paragraphs.length * angleStep;
      newNodes.push({
        id: 'quiz',
        label: 'Test Knowledge',
        type: 'quiz',
        content: lesson.content.quiz.question,
        x: centerX + Math.cos(angle) * radius,
        y: centerY + Math.sin(angle) * radius,
        explored: false,
        quizData: lesson.content.quiz,
      });

      newConnections.push({ from: 'central', to: 'quiz' });
    }

    // Takeaway node
    const takeawayAngle = (paragraphs.length + (lesson.content.quiz ? 1 : 0)) * angleStep;
    newNodes.push({
      id: 'takeaway',
      label: 'Key Takeaway',
      type: 'takeaway',
      content: lesson.content.keyTakeaway,
      x: centerX + Math.cos(takeawayAngle) * radius,
      y: centerY + Math.sin(takeawayAngle) * radius,
      explored: false,
    });

    newConnections.push({ from: 'central', to: 'takeaway' });

    // Action node (if exists)
    if (lesson.content.actionItem) {
      const actionAngle = (paragraphs.length + (lesson.content.quiz ? 2 : 1)) * angleStep;
      newNodes.push({
        id: 'action',
        label: 'Take Action',
        type: 'action',
        content: lesson.content.actionItem,
        x: centerX + Math.cos(actionAngle) * radius,
        y: centerY + Math.sin(actionAngle) * radius,
        explored: false,
      });

      newConnections.push({ from: 'central', to: 'action' });
    }

    setNodes(newNodes);
    setConnections(newConnections);
  }, [lesson]);

  const handleNodeClick = (node: Node) => {
    setSelectedNode(node);
    setSelectedQuizAnswer(null);
    setShowQuizExplanation(false);

    // Mark as explored
    setNodes(prev =>
      prev.map(n => (n.id === node.id ? { ...n, explored: true } : n))
    );
  };

  const handleQuizAnswer = (index: number) => {
    setSelectedQuizAnswer(index);
    setShowQuizExplanation(true);
  };

  const handleComplete = () => {
    if (!lesson || isLessonCompleted(lesson.id)) {
      navigate('/pathway');
      return;
    }
    completeLesson(lesson.id, lesson.xpReward);
    navigate('/pathway');
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    setZoom(prev => Math.max(0.5, Math.min(2, prev * delta)));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.target === svgRef.current) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPan({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const exploredCount = nodes.filter(n => n.explored).length;
  const totalNodes = nodes.length;
  const allExplored = exploredCount === totalNodes;

  if (!lesson || !module) {
    return (
      <div className="min-h-screen bg-base flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-text-primary mb-2">Lesson not found</h2>
          <button
            onClick={() => navigate('/pathway')}
            className="text-golden hover:underline"
          >
            Return to Pathway
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base text-text-primary flex flex-col overflow-hidden">
      {/* Top Bar */}
      <div className="bg-surface border-b border-border z-50">
        <div className="px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/pathway')}
            className="flex items-center gap-2 text-text-muted hover:text-golden transition"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Back to Pathway</span>
          </button>

          <div className="flex items-center gap-6">
            <div className="text-sm text-text-muted">
              {exploredCount} / {totalNodes} nodes explored
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setZoom(prev => Math.max(0.5, prev - 0.1))}
                className="p-2 hover:bg-surface-hover rounded-lg transition"
              >
                <ZoomOut className="w-5 h-5" />
              </button>
              <button
                onClick={() => setZoom(prev => Math.min(2, prev + 0.1))}
                className="p-2 hover:bg-surface-hover rounded-lg transition"
              >
                <ZoomIn className="w-5 h-5" />
              </button>
              <button
                onClick={() => {
                  setZoom(1);
                  setPan({ x: 0, y: 0 });
                }}
                className="p-2 hover:bg-surface-hover rounded-lg transition"
              >
                <Maximize2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-1 bg-border">
          <motion.div
            className="h-full bg-golden"
            initial={{ width: 0 }}
            animate={{ width: `${(exploredCount / totalNodes) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Mind Map Canvas */}
      <div className="flex-1 flex relative">
        <div
          className="flex-1 overflow-hidden relative"
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          <svg
            ref={svgRef}
            className="w-full h-full"
            style={{
              transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
              transformOrigin: 'center',
            }}
          >
            {/* Connection Lines with Particle Effects */}
            {connections.map((conn, i) => {
              const fromNode = nodes.find(n => n.id === conn.from);
              const toNode = nodes.find(n => n.id === conn.to);
              if (!fromNode || !toNode) return null;

              const isActive = toNode.explored;

              return (
                <g key={i}>
                  <motion.line
                    x1={fromNode.x}
                    y1={fromNode.y}
                    x2={toNode.x}
                    y2={toNode.y}
                    stroke={isActive ? '#F59E0B' : '#333'}
                    strokeWidth={isActive ? 3 : 2}
                    strokeDasharray={isActive ? '0' : '5,5'}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                  />

                  {/* Animated particle on active connections */}
                  {isActive && (
                    <motion.circle
                      r="4"
                      fill="#F59E0B"
                      initial={{ offsetDistance: '0%' }}
                      animate={{ offsetDistance: '100%' }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    >
                      <animateMotion dur="2s" repeatCount="indefinite">
                        <mpath href={`#path-${i}`} />
                      </animateMotion>
                    </motion.circle>
                  )}

                  <path
                    id={`path-${i}`}
                    d={`M ${fromNode.x} ${fromNode.y} L ${toNode.x} ${toNode.y}`}
                    fill="none"
                    stroke="none"
                  />
                </g>
              );
            })}

            {/* Nodes */}
            {nodes.map((node, i) => {
              const nodeColor =
                node.type === 'central' ? '#F59E0B' :
                node.type === 'quiz' ? '#8B5CF6' :
                node.type === 'takeaway' ? '#22C55E' :
                node.type === 'action' ? '#F97316' :
                '#6366F1';

              return (
                <g
                  key={node.id}
                  onClick={() => handleNodeClick(node)}
                  className="cursor-pointer"
                >
                  {/* Node Glow */}
                  {!node.explored && (
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r={node.type === 'central' ? 65 : 45}
                      fill={nodeColor}
                      opacity={0.2}
                      animate={{ r: [40, 50, 40], opacity: [0.2, 0.4, 0.2] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}

                  {/* Node Circle */}
                  <motion.circle
                    cx={node.x}
                    cy={node.y}
                    r={node.type === 'central' ? 60 : 40}
                    fill={node.explored ? nodeColor : '#1A1A1C'}
                    stroke={nodeColor}
                    strokeWidth={3}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.1, type: 'spring' }}
                    whileHover={{ scale: 1.1 }}
                  />

                  {/* Node Icon */}
                  <text
                    x={node.x}
                    y={node.y + 8}
                    textAnchor="middle"
                    fontSize={node.type === 'central' ? 32 : 24}
                    className="pointer-events-none"
                  >
                    {node.type === 'central' ? '🎯' :
                     node.type === 'quiz' ? '❓' :
                     node.type === 'takeaway' ? '💎' :
                     node.type === 'action' ? '🚀' :
                     node.explored ? '✓' : '○'}
                  </text>

                  {/* Node Label */}
                  <text
                    x={node.x}
                    y={node.y + (node.type === 'central' ? 85 : 65)}
                    textAnchor="middle"
                    fill="#94A3B8"
                    fontSize={node.type === 'central' ? 16 : 14}
                    fontWeight={node.type === 'central' ? 'bold' : 'normal'}
                    className="pointer-events-none"
                  >
                    {node.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Node Detail Panel */}
        <AnimatePresence>
          {selectedNode && (
            <motion.div
              initial={{ x: 400 }}
              animate={{ x: 0 }}
              exit={{ x: 400 }}
              className="w-96 bg-surface border-l border-border p-6 overflow-y-auto"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className={`px-3 py-1 rounded-full text-sm font-bold ${
                  selectedNode.type === 'central' ? 'bg-golden/20 text-golden' :
                  selectedNode.type === 'quiz' ? 'bg-purple-500/20 text-purple-400' :
                  selectedNode.type === 'takeaway' ? 'bg-sage/20 text-sage' :
                  selectedNode.type === 'action' ? 'bg-amber-500/20 text-amber-500' :
                  'bg-indigo-500/20 text-indigo-400'
                }`}>
                  {selectedNode.type === 'quiz' ? 'Quiz' :
                   selectedNode.type === 'takeaway' ? 'Key Takeaway' :
                   selectedNode.type === 'action' ? 'Action Item' :
                   selectedNode.type === 'central' ? 'Overview' :
                   'Concept'}
                </div>

                <button
                  onClick={() => setSelectedNode(null)}
                  className="text-text-muted hover:text-text-primary"
                >
                  ✕
                </button>
              </div>

              <h3 className="text-xl font-bold mb-4 text-text-primary">
                {selectedNode.type === 'central' ? selectedNode.label : selectedNode.label}
              </h3>

              <div className="text-text-secondary leading-relaxed space-y-4">
                <p>{selectedNode.content}</p>

                {/* Quiz Interface */}
                {selectedNode.type === 'quiz' && selectedNode.quizData && (
                  <div className="space-y-3 mt-6">
                    {selectedNode.quizData.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuizAnswer(index)}
                        disabled={selectedQuizAnswer !== null}
                        className={`w-full p-3 rounded-lg text-left transition border-2 ${
                          selectedQuizAnswer === null
                            ? 'bg-surface-hover hover:bg-border border-border'
                            : selectedQuizAnswer === index
                            ? index === selectedNode.quizData!.correct
                              ? 'bg-sage/20 border-sage'
                              : 'bg-red-500/20 border-red-500'
                            : index === selectedNode.quizData!.correct
                            ? 'bg-sage/20 border-sage'
                            : 'bg-surface-hover border-border opacity-50'
                        }`}
                      >
                        {option}
                      </button>
                    ))}

                    {showQuizExplanation && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-golden/10 rounded-lg border border-golden/30 mt-4"
                      >
                        <p className="text-sm text-text-secondary">
                          {selectedNode.quizData.explanation}
                        </p>
                      </motion.div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Complete Button (when all explored) */}
      <AnimatePresence>
        {allExplored && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50"
          >
            <button
              onClick={handleComplete}
              className="px-12 py-4 bg-golden hover:bg-amber-500 text-base font-bold rounded-xl transition shadow-2xl"
            >
              {isLessonCompleted(lesson.id) ? 'Continue' : `Complete Lesson (+${lesson.xpReward} XP)`}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
