import { useMemo } from 'react';

/**
 * GenerativeArt — Static SVG geometric line art
 *
 * No animation. No Canvas. No requestAnimationFrame. Zero CPU.
 * 100+ unique seeded patterns rendered as pure SVG paths.
 * Each card index produces a deterministic, beautiful geometric design.
 */

// Seeded PRNG for deterministic randomness
function seededRandom(seed: number) {
  let s = Math.abs(seed) || 1;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

type PatternFn = (rng: () => number, W: number, H: number) => string;

// --- Pattern generators (each returns SVG path data) ---

const concentricCircles: PatternFn = (rng, W, H) => {
  const cx = W / 2 + (rng() - 0.5) * 40;
  const cy = H / 2 + (rng() - 0.5) * 30;
  const count = 5 + Math.floor(rng() * 8);
  const maxR = Math.min(W, H) * 0.4;
  return Array.from({ length: count }, (_, i) => {
    const r = (i + 1) * (maxR / count);
    return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="currentColor" stroke-width="0.6" opacity="${0.15 + (i / count) * 0.2}"/>`;
  }).join('');
};

const crosshatch: PatternFn = (rng, W, H) => {
  const lines: string[] = [];
  const spacing = 12 + Math.floor(rng() * 16);
  const angle = rng() * 30 - 15;
  const rad = (angle * Math.PI) / 180;
  for (let i = -W; i < W + H; i += spacing) {
    const x1 = i;
    const y1 = 0;
    const x2 = i + Math.cos(rad) * H;
    const y2 = H;
    lines.push(`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="0.4" opacity="${0.1 + rng() * 0.12}"/>`);
  }
  // Second direction
  const angle2 = 90 + rng() * 30 - 15;
  const rad2 = (angle2 * Math.PI) / 180;
  for (let i = -H; i < W + H; i += spacing) {
    lines.push(`<line x1="0" y1="${i}" x2="${W}" y2="${i + Math.sin(rad2) * W}" stroke="currentColor" stroke-width="0.4" opacity="${0.08 + rng() * 0.1}"/>`);
  }
  return lines.join('');
};

const nestedPolygons: PatternFn = (rng, W, H) => {
  const cx = W / 2;
  const cy = H / 2;
  const sides = 3 + Math.floor(rng() * 5); // 3 to 7
  const layers = 4 + Math.floor(rng() * 5);
  const maxR = Math.min(W, H) * 0.38;
  const baseRotation = rng() * Math.PI;

  return Array.from({ length: layers }, (_, layer) => {
    const r = (layer + 1) * (maxR / layers);
    const rotation = baseRotation + layer * 0.15;
    const points = Array.from({ length: sides }, (_, i) => {
      const a = (i / sides) * Math.PI * 2 + rotation;
      return `${cx + Math.cos(a) * r},${cy + Math.sin(a) * r}`;
    }).join(' ');
    return `<polygon points="${points}" fill="none" stroke="currentColor" stroke-width="0.6" opacity="${0.12 + layer * 0.04}"/>`;
  }).join('');
};

const radialLines: PatternFn = (rng, W, H) => {
  const cx = W / 2 + (rng() - 0.5) * 60;
  const cy = H / 2 + (rng() - 0.5) * 40;
  const count = 12 + Math.floor(rng() * 24);
  const innerR = 10 + rng() * 20;
  const outerR = Math.min(W, H) * (0.3 + rng() * 0.15);

  return Array.from({ length: count }, (_, i) => {
    const a = (i / count) * Math.PI * 2;
    const x1 = cx + Math.cos(a) * innerR;
    const y1 = cy + Math.sin(a) * innerR;
    const x2 = cx + Math.cos(a) * outerR;
    const y2 = cy + Math.sin(a) * outerR;
    return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="0.5" opacity="${0.1 + rng() * 0.15}"/>`;
  }).join('');
};

const dotGrid: PatternFn = (rng, W, H) => {
  const spacing = 14 + Math.floor(rng() * 10);
  const dots: string[] = [];
  const cx = W / 2;
  const cy = H / 2;
  const maxDist = Math.max(W, H) * 0.5;

  for (let x = spacing / 2; x < W; x += spacing) {
    for (let y = spacing / 2; y < H; y += spacing) {
      const dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
      const size = 0.8 + (1 - dist / maxDist) * 1.5;
      const opacity = Math.max(0.05, 0.25 * (1 - dist / maxDist));
      if (size > 0.3) {
        dots.push(`<circle cx="${x}" cy="${y}" r="${size}" fill="currentColor" opacity="${opacity}"/>`);
      }
    }
  }
  return dots.join('');
};

const wavyLines: PatternFn = (rng, W, H) => {
  const count = 5 + Math.floor(rng() * 6);
  const lines: string[] = [];

  for (let i = 0; i < count; i++) {
    const yBase = ((i + 1) / (count + 1)) * H;
    const amp = 8 + rng() * 20;
    const freq = 0.01 + rng() * 0.02;
    const phase = rng() * Math.PI * 2;
    let d = '';
    for (let x = 0; x <= W; x += 3) {
      const y = yBase + Math.sin(x * freq + phase) * amp;
      d += x === 0 ? `M${x},${y}` : ` L${x},${y}`;
    }
    lines.push(`<path d="${d}" fill="none" stroke="currentColor" stroke-width="0.6" opacity="${0.12 + rng() * 0.12}"/>`);
  }
  return lines.join('');
};

const spirograph: PatternFn = (rng, W, H) => {
  const cx = W / 2;
  const cy = H / 2;
  const R = Math.min(W, H) * 0.3;
  const r = R * (0.3 + rng() * 0.4);
  const d = r * (0.5 + rng() * 0.8);
  const steps = 500;
  let path = '';

  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * Math.PI * 2 * (3 + Math.floor(rng() * 5));
    const x = cx + (R - r) * Math.cos(t) + d * Math.cos(((R - r) / r) * t);
    const y = cy + (R - r) * Math.sin(t) - d * Math.sin(((R - r) / r) * t);
    path += i === 0 ? `M${x},${y}` : ` L${x},${y}`;
  }

  return `<path d="${path}" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.2"/>`;
};

const diagonalStripes: PatternFn = (rng, W, H) => {
  const spacing = 8 + Math.floor(rng() * 14);
  const direction = rng() > 0.5 ? 1 : -1;
  const lines: string[] = [];

  for (let i = -(W + H); i < W + H; i += spacing) {
    const x1 = direction > 0 ? i : W - i;
    const y1 = 0;
    const x2 = direction > 0 ? i + H : W - i - H;
    const y2 = H;
    lines.push(`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="0.4" opacity="${0.06 + rng() * 0.08}"/>`);
  }
  return lines.join('');
};

const concentricSquares: PatternFn = (rng, W, H) => {
  const cx = W / 2;
  const cy = H / 2;
  const layers = 5 + Math.floor(rng() * 6);
  const maxS = Math.min(W, H) * 0.4;
  const rotation = rng() * 15;

  return Array.from({ length: layers }, (_, i) => {
    const s = (i + 1) * (maxS / layers);
    const rot = rotation + i * (rng() * 8);
    return `<rect x="${cx - s}" y="${cy - s}" width="${s * 2}" height="${s * 2}" fill="none" stroke="currentColor" stroke-width="0.5" opacity="${0.1 + i * 0.03}" transform="rotate(${rot} ${cx} ${cy})"/>`;
  }).join('');
};

const scatterTriangles: PatternFn = (rng, W, H) => {
  const count = 8 + Math.floor(rng() * 15);
  return Array.from({ length: count }, () => {
    const x = rng() * W;
    const y = rng() * H;
    const size = 8 + rng() * 25;
    const rot = rng() * 360;
    const points = `${x},${y - size * 0.6} ${x - size * 0.5},${y + size * 0.4} ${x + size * 0.5},${y + size * 0.4}`;
    return `<polygon points="${points}" fill="none" stroke="currentColor" stroke-width="0.5" opacity="${0.08 + rng() * 0.12}" transform="rotate(${rot} ${x} ${y})"/>`;
  }).join('');
};

const flowField: PatternFn = (rng, W, H) => {
  const lines: string[] = [];
  const count = 30 + Math.floor(rng() * 30);
  const seed = rng() * 1000;

  for (let i = 0; i < count; i++) {
    let x = rng() * W;
    let y = rng() * H;
    let d = `M${x},${y}`;
    for (let s = 0; s < 20; s++) {
      const angle = Math.sin(x * 0.01 + seed) * Math.cos(y * 0.01 + seed) * Math.PI * 2;
      x += Math.cos(angle) * 5;
      y += Math.sin(angle) * 5;
      if (x < 0 || x > W || y < 0 || y > H) break;
      d += ` L${x},${y}`;
    }
    lines.push(`<path d="${d}" fill="none" stroke="currentColor" stroke-width="0.5" opacity="${0.1 + rng() * 0.1}"/>`);
  }
  return lines.join('');
};

const moire: PatternFn = (rng, W, H) => {
  const cx1 = W * 0.4 + rng() * W * 0.2;
  const cy1 = H * 0.4 + rng() * H * 0.2;
  const cx2 = W * 0.5 + rng() * W * 0.15;
  const cy2 = H * 0.5 + rng() * H * 0.15;
  const count = 10 + Math.floor(rng() * 8);
  const maxR = Math.min(W, H) * 0.4;

  const set1 = Array.from({ length: count }, (_, i) => {
    const r = (i + 1) * (maxR / count);
    return `<circle cx="${cx1}" cy="${cy1}" r="${r}" fill="none" stroke="currentColor" stroke-width="0.4" opacity="0.1"/>`;
  });
  const set2 = Array.from({ length: count }, (_, i) => {
    const r = (i + 1) * (maxR / count);
    return `<circle cx="${cx2}" cy="${cy2}" r="${r}" fill="none" stroke="currentColor" stroke-width="0.4" opacity="0.1"/>`;
  });
  return [...set1, ...set2].join('');
};

// All pattern generators
const allPatterns: PatternFn[] = [
  concentricCircles, crosshatch, nestedPolygons, radialLines,
  dotGrid, wavyLines, spirograph, diagonalStripes,
  concentricSquares, scatterTriangles, flowField, moire,
];

interface GenerativeArtProps {
  cardIndex: number;
  totalCards: number;
  cardTitle?: string;
  cardContent?: string;
}

export function GenerativeArt({ cardIndex }: GenerativeArtProps) {
  const svg = useMemo(() => {
    const W = 300;
    const H = 200;
    // Each card gets a unique seed → unique pattern + unique parameters
    const seed = cardIndex * 7919 + 42;
    const rng = seededRandom(seed);
    const patternIdx = cardIndex % allPatterns.length;
    const pattern = allPatterns[patternIdx];
    const content = pattern(rng, W, H);

    return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">${content}</svg>`;
  }, [cardIndex]);

  return (
    <div
      className="w-full h-full text-[var(--color-text-muted)]"
      style={{ opacity: 0.35 }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

export default GenerativeArt;
