import { useRef, useEffect } from 'react';

/**
 * GenerativeArt — Canvas-based animated geometric line art
 *
 * Each card index produces a completely different visual pattern.
 * Patterns are animated and fill the available space beautifully.
 * Think Sol LeWitt wall drawings meets creative coding.
 */

// Seeded PRNG
function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

// Pattern library — each draws differently
type DrawFn = (ctx: CanvasRenderingContext2D, W: number, H: number, t: number, color: string, rng: () => number) => void;

const patterns: DrawFn[] = [
  // 0: Concentric ripples
  (ctx, W, H, t, color) => {
    const cx = W / 2;
    const cy = H / 2;
    const maxR = Math.max(W, H) * 0.45;
    for (let i = 0; i < 12; i++) {
      const r = ((i * maxR / 12) + t * 30) % maxR;
      const alpha = 0.4 * (1 - r / maxR);
      ctx.globalAlpha = alpha;
      ctx.strokeStyle = color;
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.stroke();
    }
  },

  // 1: Flowing sine waves
  (ctx, W, H, t, color) => {
    for (let i = 0; i < 8; i++) {
      ctx.globalAlpha = 0.15 + (i / 8) * 0.2;
      ctx.strokeStyle = color;
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      for (let x = 0; x <= W; x += 2) {
        const freq = 0.008 + i * 0.003;
        const amp = 15 + i * 8;
        const phase = t * (0.5 + i * 0.15) + i * 0.7;
        const y = H / 2 + Math.sin(x * freq + phase) * amp + (i - 4) * 18;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
  },

  // 2: Sacred geometry — rotating hexagon layers
  (ctx, W, H, t, color) => {
    const cx = W / 2;
    const cy = H / 2;
    for (let layer = 0; layer < 5; layer++) {
      const r = 25 + layer * 28;
      const sides = 6;
      const rotation = t * (0.3 + layer * 0.1) * (layer % 2 === 0 ? 1 : -1);
      ctx.globalAlpha = 0.2 + layer * 0.06;
      ctx.strokeStyle = color;
      ctx.lineWidth = 0.7;
      ctx.beginPath();
      for (let i = 0; i <= sides; i++) {
        const angle = (i / sides) * Math.PI * 2 + rotation;
        const px = cx + Math.cos(angle) * r;
        const py = cy + Math.sin(angle) * r;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.stroke();

      // Inner star connections
      if (layer > 0) {
        ctx.globalAlpha = 0.08;
        for (let i = 0; i < sides; i++) {
          const a1 = (i / sides) * Math.PI * 2 + rotation;
          const a2 = ((i + 2) / sides) * Math.PI * 2 + rotation;
          ctx.beginPath();
          ctx.moveTo(cx + Math.cos(a1) * r, cy + Math.sin(a1) * r);
          ctx.lineTo(cx + Math.cos(a2) * r, cy + Math.sin(a2) * r);
          ctx.stroke();
        }
      }
    }
  },

  // 3: Growing fractal tree
  (ctx, W, H, t, color, rng) => {
    ctx.strokeStyle = color;
    ctx.lineWidth = 0.8;

    function branch(x: number, y: number, len: number, angle: number, depth: number) {
      if (depth <= 0 || len < 3) return;
      const endX = x + Math.cos(angle) * len;
      const endY = y + Math.sin(angle) * len;
      ctx.globalAlpha = 0.1 + (depth / 8) * 0.25;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(endX, endY);
      ctx.stroke();

      const spread = 0.4 + Math.sin(t * 0.5) * 0.15;
      const shrink = 0.65 + rng() * 0.1;
      branch(endX, endY, len * shrink, angle - spread, depth - 1);
      branch(endX, endY, len * shrink, angle + spread, depth - 1);
    }

    branch(W / 2, H * 0.9, H * 0.22, -Math.PI / 2, 8);
  },

  // 4: Golden spiral
  (ctx, W, H, t, color) => {
    const cx = W / 2;
    const cy = H / 2;
    ctx.strokeStyle = color;
    ctx.lineWidth = 0.8;

    // Fibonacci spiral
    ctx.beginPath();
    const turns = 6;
    const points = 300;
    for (let i = 0; i < points; i++) {
      const theta = (i / points) * turns * Math.PI * 2 + t * 0.3;
      const r = 2 * Math.pow(1.08, i / 10);
      if (r > Math.max(W, H) * 0.45) break;
      const x = cx + Math.cos(theta) * r;
      const y = cy + Math.sin(theta) * r;
      ctx.globalAlpha = 0.1 + (i / points) * 0.3;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Dot markers along spiral
    for (let i = 0; i < points; i += 20) {
      const theta = (i / points) * turns * Math.PI * 2 + t * 0.3;
      const r = 2 * Math.pow(1.08, i / 10);
      if (r > Math.max(W, H) * 0.45) break;
      ctx.globalAlpha = 0.25;
      ctx.beginPath();
      ctx.arc(cx + Math.cos(theta) * r, cy + Math.sin(theta) * r, 1.5, 0, Math.PI * 2);
      ctx.fill();
    }
  },

  // 5: Tessellating triangles
  (ctx, W, H, t, color) => {
    ctx.strokeStyle = color;
    ctx.lineWidth = 0.5;
    const size = 40;
    const cols = Math.ceil(W / size) + 1;
    const rows = Math.ceil(H / (size * 0.866)) + 1;
    const offsetX = Math.sin(t * 0.3) * 10;
    const offsetY = Math.cos(t * 0.2) * 8;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = col * size + (row % 2) * (size / 2) + offsetX;
        const y = row * size * 0.866 + offsetY;
        const dist = Math.sqrt(Math.pow(x - W / 2, 2) + Math.pow(y - H / 2, 2));
        const maxDist = Math.max(W, H) * 0.5;
        ctx.globalAlpha = Math.max(0, 0.25 * (1 - dist / maxDist));

        ctx.beginPath();
        ctx.moveTo(x, y - size * 0.33);
        ctx.lineTo(x - size * 0.5, y + size * 0.33);
        ctx.lineTo(x + size * 0.5, y + size * 0.33);
        ctx.closePath();
        ctx.stroke();
      }
    }
  },

  // 6: Orbiting rings
  (ctx, W, H, t, color) => {
    const cx = W / 2;
    const cy = H / 2;
    ctx.strokeStyle = color;

    for (let i = 0; i < 5; i++) {
      const r = 30 + i * 22;
      const tilt = 0.3 + i * 0.25;
      const rotation = t * (0.2 + i * 0.08);
      ctx.globalAlpha = 0.15 + i * 0.05;
      ctx.lineWidth = 0.7;
      ctx.beginPath();

      for (let a = 0; a <= Math.PI * 2; a += 0.05) {
        const px = cx + Math.cos(a + rotation) * r;
        const py = cy + Math.sin(a + rotation) * r * tilt;
        if (a === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.stroke();

      // Orbiting dot
      const dotAngle = t * (1 + i * 0.3);
      const dotX = cx + Math.cos(dotAngle) * r;
      const dotY = cy + Math.sin(dotAngle) * r * tilt;
      ctx.globalAlpha = 0.4;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(dotX, dotY, 2, 0, Math.PI * 2);
      ctx.fill();
    }
  },

  // 7: Dot matrix / halftone
  (ctx, W, H, t, color) => {
    ctx.fillStyle = color;
    const spacing = 16;
    const cols = Math.ceil(W / spacing);
    const rows = Math.ceil(H / spacing);

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = col * spacing + spacing / 2;
        const y = row * spacing + spacing / 2;

        const dx = x - W / 2;
        const dy = y - H / 2;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = Math.max(W, H) * 0.5;

        const wave = Math.sin(dist * 0.04 - t * 1.5) * 0.5 + 0.5;
        const size = wave * 3;
        const alpha = wave * 0.3 * (1 - dist / maxDist);

        if (alpha > 0.02) {
          ctx.globalAlpha = alpha;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
  },
];

interface GenerativeArtProps {
  cardIndex: number;
  totalCards: number;
  cardTitle?: string;
  cardContent?: string;
}

export function GenerativeArt({ cardIndex }: GenerativeArtProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  // Pick pattern based on card index — cycles through all patterns
  const patternIndex = cardIndex % patterns.length;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    const W = rect.width;
    const H = rect.height;

    const style = getComputedStyle(document.documentElement);
    const accent = style.getPropertyValue('--color-accent').trim() || '#C5A368';
    const rng = seededRandom(cardIndex * 7919 + 42);
    const draw = patterns[patternIndex];

    const startTime = performance.now();

    function animate(now: number) {
      const t = (now - startTime) / 1000;
      ctx!.clearRect(0, 0, W, H);
      draw(ctx!, W, H, t, accent, rng);
      ctx!.globalAlpha = 1;
      animRef.current = requestAnimationFrame(animate);
    }

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [cardIndex, patternIndex]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full pointer-events-none"
      style={{ opacity: 0.4 }}
    />
  );
}

export default GenerativeArt;
