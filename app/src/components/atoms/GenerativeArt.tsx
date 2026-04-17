import { useRef, useEffect, useMemo } from 'react';

/**
 * Generative Art — Canvas-based animated particle field
 *
 * Renders animated geometry that:
 * - Starts as scattered particles on early cards
 * - Organizes into geometric patterns as user progresses
 * - Forms a topic-relevant constellation on final card
 * - Animates smoothly on each card transition
 */

// Seed-based PRNG for deterministic randomness per card
function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

// Topic detection from content
function detectTopic(title: string, content: string): string {
  const text = (title + ' ' + content).toLowerCase();
  if (text.match(/chart|price|trading|market|candlestick|finance|invest|stock/)) return 'chart';
  if (text.match(/brain|neuro|mind|cognitive|mental|think|psychology/)) return 'mind';
  if (text.match(/stoic|philosophy|virtue|wisdom|plato|socrates|marcus|ethics/)) return 'philosophy';
  if (text.match(/science|atom|physics|quantum|molecule|research|experiment/)) return 'science';
  if (text.match(/meditat|spirit|chakra|yoga|breath|mindful|energy|soul/)) return 'spirit';
  if (text.match(/code|program|algorithm|function|data|software|web|api/)) return 'code';
  if (text.match(/book|read|learn|knowledge|library|study|write|story/)) return 'book';
  if (text.match(/strategy|game|decision|system|model|framework/)) return 'strategy';
  return 'default';
}

// Target constellation points per topic (normalized 0-1)
const CONSTELLATIONS: Record<string, [number, number][]> = {
  // Diamond
  default: [
    [0.5, 0.1], [0.8, 0.3], [0.9, 0.5], [0.8, 0.7], [0.5, 0.9],
    [0.2, 0.7], [0.1, 0.5], [0.2, 0.3], [0.5, 0.5],
  ],
  // Ascending chart bars
  chart: [
    [0.15, 0.85], [0.15, 0.7], [0.3, 0.85], [0.3, 0.55],
    [0.45, 0.85], [0.45, 0.4], [0.6, 0.85], [0.6, 0.25],
    [0.75, 0.85], [0.75, 0.15], [0.9, 0.85], [0.9, 0.3],
    [0.1, 0.88], [0.95, 0.88],
  ],
  // Brain/neural network
  mind: [
    [0.5, 0.15], [0.3, 0.25], [0.7, 0.25], [0.2, 0.4], [0.5, 0.35],
    [0.8, 0.4], [0.15, 0.55], [0.35, 0.55], [0.65, 0.55], [0.85, 0.55],
    [0.25, 0.7], [0.5, 0.65], [0.75, 0.7], [0.4, 0.8], [0.6, 0.8], [0.5, 0.9],
  ],
  // Greek column
  philosophy: [
    [0.3, 0.1], [0.7, 0.1], [0.25, 0.15], [0.75, 0.15],
    [0.35, 0.2], [0.65, 0.2], [0.35, 0.35], [0.65, 0.35],
    [0.35, 0.5], [0.65, 0.5], [0.35, 0.65], [0.65, 0.65],
    [0.35, 0.8], [0.65, 0.8], [0.25, 0.85], [0.75, 0.85],
    [0.2, 0.9], [0.8, 0.9],
  ],
  // Atom orbits
  science: [
    [0.5, 0.5], [0.5, 0.2], [0.5, 0.8], [0.2, 0.5], [0.8, 0.5],
    [0.3, 0.3], [0.7, 0.3], [0.3, 0.7], [0.7, 0.7],
    [0.5, 0.1], [0.9, 0.5], [0.5, 0.9], [0.1, 0.5],
    [0.35, 0.15], [0.65, 0.15], [0.85, 0.35], [0.85, 0.65],
    [0.65, 0.85], [0.35, 0.85], [0.15, 0.65], [0.15, 0.35],
  ],
  // Mandala/lotus
  spirit: [
    [0.5, 0.5], [0.5, 0.2], [0.5, 0.8], [0.2, 0.5], [0.8, 0.5],
    [0.32, 0.32], [0.68, 0.32], [0.32, 0.68], [0.68, 0.68],
    [0.5, 0.1], [0.5, 0.9], [0.1, 0.5], [0.9, 0.5],
    [0.25, 0.25], [0.75, 0.25], [0.25, 0.75], [0.75, 0.75],
  ],
  // Binary/circuit
  code: [
    [0.2, 0.2], [0.4, 0.2], [0.6, 0.2], [0.8, 0.2],
    [0.2, 0.4], [0.5, 0.35], [0.8, 0.4],
    [0.3, 0.5], [0.5, 0.5], [0.7, 0.5],
    [0.2, 0.6], [0.5, 0.65], [0.8, 0.6],
    [0.2, 0.8], [0.4, 0.8], [0.6, 0.8], [0.8, 0.8],
  ],
  // Open book
  book: [
    [0.5, 0.15], [0.5, 0.3], [0.5, 0.5], [0.5, 0.7], [0.5, 0.85],
    [0.3, 0.2], [0.25, 0.35], [0.2, 0.5], [0.25, 0.65], [0.3, 0.8],
    [0.7, 0.2], [0.75, 0.35], [0.8, 0.5], [0.75, 0.65], [0.7, 0.8],
  ],
  // Chess/grid
  strategy: [
    [0.2, 0.2], [0.4, 0.2], [0.6, 0.2], [0.8, 0.2],
    [0.2, 0.4], [0.4, 0.4], [0.6, 0.4], [0.8, 0.4],
    [0.2, 0.6], [0.4, 0.6], [0.6, 0.6], [0.8, 0.6],
    [0.2, 0.8], [0.4, 0.8], [0.6, 0.8], [0.8, 0.8],
  ],
};

interface Particle {
  // Current position
  x: number;
  y: number;
  // Random starting position
  startX: number;
  startY: number;
  // Target constellation position
  targetX: number;
  targetY: number;
  // Visual
  radius: number;
  opacity: number;
  speed: number;
}

interface GenerativeArtProps {
  cardIndex: number;
  totalCards: number;
  cardTitle?: string;
  cardContent?: string;
}

export function GenerativeArt({ cardIndex, totalCards, cardTitle = '', cardContent = '' }: GenerativeArtProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const progressRef = useRef(0);
  const targetProgressRef = useRef(0);

  const topic = useMemo(() => detectTopic(cardTitle, cardContent), [cardTitle, cardContent]);

  // How far through the lesson we are (0 = scattered, 1 = formed)
  const formationProgress = totalCards > 1 ? cardIndex / (totalCards - 1) : 0;
  targetProgressRef.current = formationProgress;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Handle DPI
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    const W = rect.width;
    const H = rect.height;

    // Generate particles
    const constellation = CONSTELLATIONS[topic] || CONSTELLATIONS.default;
    const numParticles = constellation.length + 12; // extra ambient particles
    const rng = seededRandom(42 + cardIndex);

    if (particlesRef.current.length !== numParticles) {
      const particles: Particle[] = [];
      for (let i = 0; i < numParticles; i++) {
        const target = constellation[i % constellation.length];
        particles.push({
          x: rng() * W,
          y: rng() * H,
          startX: rng() * W,
          startY: rng() * H,
          targetX: target[0] * W,
          targetY: target[1] * H,
          radius: 1 + rng() * 2,
          opacity: 0.15 + rng() * 0.35,
          speed: 0.3 + rng() * 0.7,
        });
      }
      particlesRef.current = particles;
    } else {
      // Update targets for new card
      const particles = particlesRef.current;
      const newRng = seededRandom(42 + cardIndex);
      for (let i = 0; i < particles.length; i++) {
        const target = constellation[i % constellation.length];
        particles[i].targetX = target[0] * W;
        particles[i].targetY = target[1] * H;
        // Slightly randomize start positions for scatter
        particles[i].startX = newRng() * W;
        particles[i].startY = newRng() * H;
      }
    }

    // Get CSS variable colors
    const style = getComputedStyle(document.documentElement);
    const accentColor = style.getPropertyValue('--color-accent').trim() || '#C5A368';
    const mutedColor = style.getPropertyValue('--color-text-muted').trim() || '#9A8F81';

    let startTime = performance.now();

    function animate(time: number) {
      if (!ctx) return;
      const elapsed = (time - startTime) / 1000;

      // Smooth progress interpolation
      progressRef.current += (targetProgressRef.current - progressRef.current) * 0.03;
      const p = progressRef.current;

      ctx.clearRect(0, 0, W, H);

      const particles = particlesRef.current;

      // Draw connection lines between nearby particles (more visible as they form)
      const lineOpacity = p * 0.12;
      if (lineOpacity > 0.01) {
        ctx.strokeStyle = accentColor;
        ctx.lineWidth = 0.5;
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const maxDist = 60 + p * 40; // Lines reach further as formation progresses
            if (dist < maxDist) {
              ctx.globalAlpha = lineOpacity * (1 - dist / maxDist);
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[j].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
      }

      // Draw and move particles
      for (let i = 0; i < particles.length; i++) {
        const part = particles[i];

        // Lerp between scattered and formed positions
        const tx = part.startX + (part.targetX - part.startX) * p;
        const ty = part.startY + (part.targetY - part.startY) * p;

        // Gentle floating motion when scattered
        const floatX = Math.sin(elapsed * part.speed + i) * (1 - p) * 15;
        const floatY = Math.cos(elapsed * part.speed * 0.7 + i * 1.3) * (1 - p) * 12;

        // Smooth movement toward target
        part.x += (tx + floatX - part.x) * 0.04;
        part.y += (ty + floatY - part.y) * 0.04;

        // Draw particle
        const isConstellation = i < (CONSTELLATIONS[topic] || CONSTELLATIONS.default).length;
        const color = isConstellation ? accentColor : mutedColor;
        const size = part.radius * (0.8 + p * 0.6);

        ctx.globalAlpha = part.opacity * (0.3 + p * 0.5);
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(part.x, part.y, size, 0, Math.PI * 2);
        ctx.fill();

        // Glow for constellation particles when mostly formed
        if (isConstellation && p > 0.6) {
          ctx.globalAlpha = (p - 0.6) * 0.15;
          ctx.beginPath();
          ctx.arc(part.x, part.y, size * 4, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;
      animFrameRef.current = requestAnimationFrame(animate);
    }

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [cardIndex, topic, totalCards]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full pointer-events-none"
      style={{ opacity: 0.5 }}
    />
  );
}

export default GenerativeArt;
