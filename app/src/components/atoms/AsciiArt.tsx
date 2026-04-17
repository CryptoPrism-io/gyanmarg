import { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Unicode block characters for generative patterns
const CHARS = {
  dots: ['·', '•', '◦', '○', '●', '◉'],
  blocks: ['░', '▒', '▓', '█', '▐', '▌'],
  lines: ['╱', '╲', '│', '─', '┼', '╳'],
  shapes: ['◆', '◇', '△', '▲', '▽', '▼', '◁', '▷'],
  stars: ['✦', '✧', '⟡', '⊹', '⋆', '∗'],
  waves: ['∿', '∼', '≈', '～', '⌇', '⌒'],
};

// Topic-based final art patterns (simplified ASCII representations)
const TOPIC_ARTS: Record<string, string[]> = {
  // Default — abstract diamond
  default: [
    '        ◆        ',
    '      ◆ ◇ ◆      ',
    '    ◆ ◇   ◇ ◆    ',
    '  ◆ ◇       ◇ ◆  ',
    '◆ ◇           ◇ ◆',
    '  ◆ ◇       ◇ ◆  ',
    '    ◆ ◇   ◇ ◆    ',
    '      ◆ ◇ ◆      ',
    '        ◆        ',
  ],
  // Mind/Brain
  mind: [
    '      ▄████▄      ',
    '    ▄██░░░░██▄    ',
    '   ██░░▒▒▒░░██   ',
    '  ██░▒▓▓▓▓▒░██  ',
    '  ██░▒▓██▓▒░██  ',
    '  ██░▒▓▓▓▓▒░██  ',
    '   ██░░▒▒▒░░██   ',
    '    ▀██░░░░██▀    ',
    '      ▀████▀      ',
  ],
  // Chart/Finance
  chart: [
    '              ▓   ',
    '           ▓  ▓   ',
    '        ▓  ▓  ▓   ',
    '     ▓  ▓  ▓  ▓   ',
    '  ▓  ▓  ▓  ▓  ▓   ',
    '  ▓  ▓  ▓  ▓  ▓   ',
    '──▓──▓──▓──▓──▓───',
    '  1  2  3  4  5   ',
  ],
  // Book/Knowledge
  book: [
    '   ┌─────┬─────┐  ',
    '   │░░░░░│░░░░░│  ',
    '   │░░░░░│░░░░░│  ',
    '   │░░░░░│░░░░░│  ',
    '   │░░░░░│░░░░░│  ',
    '   │░░░░░│░░░░░│  ',
    '   └─────┴─────┘  ',
    '    ╲ POLYMIND ╱   ',
  ],
  // Stoic/Philosophy
  philosophy: [
    '       ╱╲         ',
    '      ╱  ╲        ',
    '     ╱ ◆  ╲       ',
    '    ╱      ╲      ',
    '   ╱   ✦    ╲     ',
    '  ╱__________╲    ',
    '  ╲__________╱    ',
    '       ││         ',
    '       ││         ',
  ],
  // Science
  science: [
    '     ○─────○      ',
    '    ╱       ╲     ',
    '   ○    ●    ○    ',
    '    ╲       ╱     ',
    '     ○─────○      ',
    '    ╱       ╲     ',
    '   ○    ●    ○    ',
    '    ╲       ╱     ',
    '     ○─────○      ',
  ],
  // Meditation/Spirit
  spirit: [
    '        ●         ',
    '       ╱ ╲        ',
    '      ╱   ╲       ',
    '     ╱  ◉  ╲      ',
    '    ╱   │   ╲     ',
    '   ╱    │    ╲    ',
    '  ◆─────┼─────◆  ',
    '        │         ',
    '        ▼         ',
  ],
};

// Generate random particle field
function generateParticles(seed: number, density: number = 0.15): string[] {
  const width = 20;
  const height = 8;
  const lines: string[] = [];
  const charSet = Object.values(CHARS).flat();

  for (let y = 0; y < height; y++) {
    let line = '';
    for (let x = 0; x < width; x++) {
      const hash = Math.sin(seed * 9301 + x * 7919 + y * 4813) * 10000;
      const rand = hash - Math.floor(hash);
      if (rand < density) {
        const charIdx = Math.floor(rand * charSet.length * 6.5) % charSet.length;
        line += charSet[charIdx];
      } else {
        line += ' ';
      }
    }
    lines.push(line);
  }
  return lines;
}

// Detect topic from card content
function detectTopic(title: string, content: string): string {
  const text = (title + ' ' + content).toLowerCase();
  if (text.match(/chart|price|trading|market|candlestick|finance|invest/)) return 'chart';
  if (text.match(/brain|neuro|mind|cognitive|mental|think/)) return 'mind';
  if (text.match(/stoic|philosophy|virtue|wisdom|plato|socrates|marcus/)) return 'philosophy';
  if (text.match(/science|atom|physics|quantum|molecule|research/)) return 'science';
  if (text.match(/meditat|spirit|chakra|yoga|breath|mindful|energy/)) return 'spirit';
  if (text.match(/book|read|learn|knowledge|library|study/)) return 'book';
  return 'default';
}

interface AsciiArtProps {
  cardIndex: number;
  totalCards: number;
  isComplete?: boolean;
  cardTitle?: string;
  cardContent?: string;
}

export function AsciiArt({ cardIndex, totalCards, isComplete = false, cardTitle = '', cardContent = '' }: AsciiArtProps) {
  const topic = useMemo(() => detectTopic(cardTitle, cardContent), [cardTitle, cardContent]);
  const finalArt = TOPIC_ARTS[topic] || TOPIC_ARTS.default;
  const particles = useMemo(() => generateParticles(cardIndex + 1, 0.08 + (cardIndex / totalCards) * 0.15), [cardIndex, totalCards]);

  // On completion, show the final assembled art
  const displayLines = isComplete ? finalArt : particles;

  return (
    <div className="flex flex-col items-center justify-center select-none pointer-events-none opacity-[0.15]">
      <AnimatePresence mode="wait">
        <motion.pre
          key={`${cardIndex}-${isComplete ? 'final' : 'particle'}`}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-[10px] md:text-xs leading-[1.4] text-[var(--color-text-muted)] whitespace-pre"
        >
          {displayLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -8 : 8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.04, duration: 0.3 }}
            >
              {line}
            </motion.div>
          ))}
        </motion.pre>
      </AnimatePresence>
    </div>
  );
}

export default AsciiArt;
