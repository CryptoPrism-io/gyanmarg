import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Copy, Check, Loader2, Download, ArrowLeft, AlertCircle } from 'lucide-react';
import { PolymindLogo, PolymindBrand } from '@/components/brand';

// ============================================
// BRAND DATA
// ============================================

const BRAND_COLORS = {
  primary: {
    name: 'Golden',
    colors: [
      { name: 'Golden 700', hex: '#B45309', usage: 'Hover states' },
      { name: 'Golden 500', hex: '#F59E0B', usage: 'Primary accent' },
      { name: 'Golden 400', hex: '#FBBF24', usage: 'Highlights' },
      { name: 'Golden 300', hex: '#FCD34D', usage: 'Light accent' },
      { name: 'Golden 100', hex: '#FEF3C7', usage: 'Background tint' },
    ],
  },
  secondary: {
    name: 'Sage',
    colors: [
      { name: 'Sage 700', hex: '#166534', usage: 'Success dark' },
      { name: 'Sage 500', hex: '#22C55E', usage: 'Success' },
      { name: 'Sage 400', hex: '#4ADE80', usage: 'Success light' },
      { name: 'Sage 100', hex: '#DCFCE7', usage: 'Success tint' },
    ],
  },
  accent: {
    name: 'Lavender',
    colors: [
      { name: 'Lavender 600', hex: '#7C3AED', usage: 'Accent dark' },
      { name: 'Lavender 500', hex: '#8B5CF6', usage: 'Accent' },
      { name: 'Lavender 400', hex: '#A78BFA', usage: 'Accent light' },
      { name: 'Lavender 100', hex: '#EDE9FE', usage: 'Accent tint' },
    ],
  },
  neutral: {
    name: 'Base',
    colors: [
      { name: 'Base 950', hex: '#0A0A0B', usage: 'Background' },
      { name: 'Base 900', hex: '#111113', usage: 'Surface' },
      { name: 'Base 800', hex: '#1C1C1F', usage: 'Elevated' },
      { name: 'Base 600', hex: '#52525B', usage: 'Muted text' },
      { name: 'Base 100', hex: '#FAFAFA', usage: 'Primary text' },
    ],
  },
};

const TYPOGRAPHY = [
  {
    name: 'Outfit',
    className: 'font-display',
    usage: 'Headlines, Logo, Display',
    weights: ['500 Medium', '600 Semibold', '700 Bold', '800 ExtraBold'],
  },
  {
    name: 'Inter',
    className: 'font-sans',
    usage: 'Body text, UI elements',
    weights: ['400 Regular', '500 Medium', '600 Semibold', '700 Bold'],
  },
  {
    name: 'DM Mono',
    className: 'font-mono',
    usage: 'Code, technical content',
    weights: ['400 Regular', '500 Medium'],
  },
];

const TAGLINES = [
  { type: 'Primary', text: 'Your Mind, Unlimited' },
  { type: 'Secondary', text: 'Read Everything Under the Sun' },
  { type: 'Descriptive', text: '1000+ authors. 76 domains. The world\'s knowledge in one beautiful reader.' },
  { type: 'Mission', text: 'Helping curious minds explore every domain of human knowledge.' },
];

const BANNER_SIZES = [
  { id: 'linkedin', name: 'LinkedIn Cover', width: 1584, height: 396, scale: 2, previewWidth: 792 },
  { id: 'twitter', name: 'Twitter/X Header', width: 1500, height: 500, scale: 2, previewWidth: 750 },
  { id: 'instagram', name: 'Instagram Post', width: 1080, height: 1080, scale: 2.7, previewWidth: 400 },
  { id: 'og', name: 'OG Image', width: 1200, height: 630, scale: 2, previewWidth: 600 },
];

// ============================================
// COMPONENTS
// ============================================

function SectionHeader({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <span className="text-5xl font-extralight text-white/20">{number}</span>
      <span className="text-sm font-medium tracking-[3px] uppercase text-white">{title}</span>
    </div>
  );
}

function ColorSwatch({ name, hex, usage }: { name: string; hex: string; usage: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copyToClipboard}
      className="group flex flex-col text-left"
      aria-label={`Copy ${name} color ${hex}`}
    >
      <div
        className="w-full h-16 rounded-lg mb-2 ring-1 ring-white/10 group-hover:ring-2 group-hover:ring-golden/50 transition-all flex items-center justify-center"
        style={{ backgroundColor: hex }}
      >
        {copied ? (
          <Check className="h-4 w-4 text-white drop-shadow-md" />
        ) : (
          <Copy className="h-3 w-3 text-white/0 group-hover:text-white/80 drop-shadow-md transition-all" />
        )}
      </div>
      <span className="text-xs font-medium text-white/90">{name}</span>
      <span className="text-[10px] text-white/50 font-mono">{hex}</span>
      <span className="text-[10px] text-white/40">{usage}</span>
    </button>
  );
}

// Logo SVG for banners (inline for html2canvas)
function LogoSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className} fill="none">
      <defs>
        <linearGradient id="goldBanner" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
      </defs>
      <g fill="none" strokeWidth="2" strokeLinecap="round">
        <ellipse cx="64" cy="64" rx="45" ry="15" stroke="url(#goldBanner)" transform="rotate(-20 64 64)" opacity="0.8" />
        <ellipse cx="64" cy="64" rx="45" ry="15" stroke="#F59E0B" transform="rotate(40 64 64)" opacity="0.8" />
        <ellipse cx="64" cy="64" rx="45" ry="15" stroke="url(#goldBanner)" transform="rotate(100 64 64)" opacity="0.8" />
      </g>
      <circle cx="64" cy="64" r="12" fill="#0A0A0B" stroke="#F59E0B" strokeWidth="2" />
      <circle cx="64" cy="64" r="5" fill="#FDE68A" />
      <circle cx="109" cy="64" r="4" fill="#FCD34D" transform="rotate(-20 64 64)" />
      <circle cx="109" cy="64" r="4" fill="#F59E0B" transform="rotate(40 64 64)" />
      <circle cx="109" cy="64" r="4" fill="#FCD34D" transform="rotate(100 64 64)" />
    </svg>
  );
}

function DownloadButton({ onClick, loading, label }: { onClick: () => void; loading?: boolean; label: string }) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      aria-label={label}
      className="mt-3 px-4 py-2 text-[10px] font-semibold tracking-wider uppercase border border-golden/50 text-golden rounded hover:bg-golden/10 hover:border-golden transition-all disabled:opacity-50 flex items-center gap-2"
    >
      {loading ? <Loader2 className="h-3 w-3 animate-spin" /> : <Download className="h-3 w-3" />}
      {loading ? 'Saving...' : 'Download'}
    </button>
  );
}

function BannerPreview({ banner }: { banner: typeof BANNER_SIZES[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    if (!ref.current) return;
    setLoading(true);
    try {
      const html2canvas = (await import('html2canvas')).default;
      const canvas = await html2canvas(ref.current, {
        scale: banner.scale,
        useCORS: true,
        backgroundColor: null,
      });
      const link = document.createElement('a');
      link.download = `polymind-${banner.id}-banner.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (e) {
      console.error('Download failed:', e);
    } finally {
      setLoading(false);
    }
  };

  const aspectRatio = banner.height / banner.width;
  const previewHeight = banner.previewWidth * aspectRatio;

  return (
    <div className="mb-8">
      <div className="text-white/50 text-[11px] tracking-wider uppercase mb-3 flex items-center gap-2">
        {banner.name} <span className="text-golden text-[10px]">{banner.width} × {banner.height}px</span>
      </div>
      <div className="bg-white/[0.02] border border-white/10 rounded-lg p-5 inline-block">
        <div
          ref={ref}
          className="bg-gradient-to-br from-[#0A0A0B] via-[#111113] to-[#0A0A0B] flex items-center justify-center relative overflow-hidden"
          style={{ width: banner.previewWidth, height: previewHeight }}
        >
          {/* Gradient accent bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-golden via-sage to-lavender" />

          {/* Content */}
          <div className="flex items-center gap-6 z-10">
            <LogoSVG className="w-16 h-16" />
            <div>
              <div className="font-display text-2xl font-bold text-white tracking-wider">
                POLYMIND
              </div>
              <div className="text-sm text-white/60 mt-1">
                Your Mind, Unlimited
              </div>
            </div>
          </div>

          {/* Background watermark */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-[0.03]">
            <LogoSVG className="w-32 h-32" />
          </div>
        </div>
      </div>
      <DownloadButton onClick={handleDownload} loading={loading} label={`Download ${banner.name}`} />
    </div>
  );
}

function IconPreview({ size, variant }: { size: number; variant: 'light' | 'dark' }) {
  const ref = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!ref.current) return;
    const html2canvas = (await import('html2canvas')).default;
    const canvas = await html2canvas(ref.current, {
      scale: size / 64,
      backgroundColor: null,
    });
    const link = document.createElement('a');
    link.download = `polymind-icon-${size}px-${variant}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  const displaySize = Math.max(size / 4, 16);
  const bgClass = variant === 'light'
    ? 'bg-gradient-to-br from-stone-50 to-stone-100'
    : 'bg-gradient-to-br from-stone-800 to-stone-900';

  return (
    <div className="text-center">
      <div className="text-white/40 text-[10px] mb-2">{size}px</div>
      <button
        onClick={handleDownload}
        className="bg-white/[0.02] border border-white/10 rounded-lg p-3 hover:bg-white/[0.04] transition-colors"
        aria-label={`Download ${size}px ${variant} icon`}
      >
        <div
          ref={ref}
          className={`flex items-center justify-center ${bgClass} shadow-lg`}
          style={{ width: displaySize, height: displaySize, borderRadius: displaySize * 0.22 }}
        >
          <PolymindLogo size="xs" variant="simple" />
        </div>
      </button>
    </div>
  );
}

function DownloadAllButton() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleDownloadAll = async () => {
    setLoading(true);
    setProgress(0);
    try {
      const [JSZip, { saveAs }] = await Promise.all([
        import('jszip').then(m => m.default),
        import('file-saver'),
      ]);
      const zip = new JSZip();

      // Add README
      zip.file('README.txt', `Polymind Brand Kit
==================

Brand: Polymind
Tagline: Your Mind, Unlimited
Website: polymind.app

Colors:
- Golden (Primary): #F59E0B
- Sage (Success): #22C55E
- Lavender (Accent): #8B5CF6

Fonts:
- Display: Outfit
- Body: Inter
- Mono: DM Mono

For usage guidelines, visit polymind.app/brand-kit`);

      setProgress(100);
      const content = await zip.generateAsync({ type: 'blob' });
      saveAs(content, 'polymind-brand-kit.zip');
    } catch (e) {
      console.error('ZIP creation failed:', e);
    } finally {
      setLoading(false);
      setProgress(0);
    }
  };

  return (
    <button
      onClick={handleDownloadAll}
      disabled={loading}
      aria-label="Download all brand assets as ZIP"
      className="px-8 py-3.5 text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-golden to-golden/80 text-black rounded-md hover:from-golden/90 hover:to-golden/70 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-golden/30 transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2"
    >
      {loading ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          Generating... {progress}%
        </>
      ) : (
        <>
          <Download className="h-4 w-4" />
          Download All as ZIP
        </>
      )}
    </button>
  );
}

// ============================================
// MAIN PAGE
// ============================================

export function BrandKitPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0B]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0A0A0B]/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Home</span>
          </Link>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-white font-display text-3xl font-light tracking-[6px] uppercase opacity-90 mb-2">
            Digital Identity Kit
          </h1>
          <p className="text-white/40 text-xs tracking-[3px] uppercase mb-8">
            Polymind - Brand Assets & Guidelines
          </p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <PolymindBrand size="lg" />
          </div>
          <DownloadAllButton />
        </div>

        {/* Section 01: Social Media Banners */}
        <section className="mb-20 pb-16 border-b border-white/10">
          <SectionHeader number="01" title="Social Media Banners" />
          <div className="space-y-6">
            {BANNER_SIZES.map((banner) => (
              <BannerPreview key={banner.id} banner={banner} />
            ))}
          </div>
        </section>

        {/* Section 02: App Icons */}
        <section className="mb-20 pb-16 border-b border-white/10">
          <SectionHeader number="02" title="App Icons" />

          <div className="text-white/40 text-[11px] tracking-wider mb-5">LIGHT VARIANT</div>
          <div className="flex flex-wrap gap-6 items-end mb-10">
            {[512, 256, 192, 128, 64, 32].map((size) => (
              <IconPreview key={`light-${size}`} size={size} variant="light" />
            ))}
          </div>

          <div className="text-white/40 text-[11px] tracking-wider mb-5 mt-10">DARK VARIANT</div>
          <div className="flex flex-wrap gap-6 items-end">
            {[512, 256, 192, 128, 64, 32].map((size) => (
              <IconPreview key={`dark-${size}`} size={size} variant="dark" />
            ))}
          </div>
        </section>

        {/* Section 03: Logo Usage */}
        <section className="mb-20 pb-16 border-b border-white/10">
          <SectionHeader number="03" title="Logo & Wordmark" />

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="rounded-xl bg-white p-8 flex flex-col items-center justify-center gap-4 ring-1 ring-white/10">
              <PolymindLogo size="xl" />
              <span className="text-xs text-stone-500">On Light</span>
            </div>
            <div className="rounded-xl bg-stone-900 p-8 flex flex-col items-center justify-center gap-4">
              <PolymindLogo size="xl" />
              <span className="text-xs text-stone-400">On Dark</span>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-golden/80 to-golden p-8 flex flex-col items-center justify-center gap-4">
              <PolymindLogo size="xl" />
              <span className="text-xs text-black/70">On Brand</span>
            </div>
          </div>

          <h3 className="text-sm font-medium text-white/70 mb-4">Logo Variants</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-xl bg-white/[0.02] border border-white/10 p-8 text-center">
              <span className="text-[10px] text-white/50 mb-4 block uppercase tracking-wider">Full</span>
              <div className="flex justify-center">
                <PolymindLogo size="xl" variant="full" />
              </div>
            </div>
            <div className="rounded-xl bg-white/[0.02] border border-white/10 p-8 text-center">
              <span className="text-[10px] text-white/50 mb-4 block uppercase tracking-wider">Simple</span>
              <div className="flex justify-center">
                <PolymindLogo size="xl" variant="simple" />
              </div>
            </div>
            <div className="rounded-xl bg-white/[0.02] border border-white/10 p-8 text-center">
              <span className="text-[10px] text-white/50 mb-4 block uppercase tracking-wider">Flat</span>
              <div className="flex justify-center">
                <PolymindLogo size="xl" variant="flat" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 04: Colors */}
        <section className="mb-20 pb-16 border-b border-white/10">
          <SectionHeader number="04" title="Color Palette" />

          {Object.entries(BRAND_COLORS).map(([key, palette]) => (
            <div key={key} className="mb-8">
              <h3 className="text-sm font-medium text-white/70 mb-4">{palette.name}</h3>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
                {palette.colors.map((color) => (
                  <ColorSwatch key={color.hex} {...color} />
                ))}
              </div>
            </div>
          ))}

          <h3 className="text-sm font-medium text-white/70 mt-10 mb-4">Brand Gradients</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 bg-gradient-to-r from-golden via-golden/80 to-sage text-black">
              <span className="text-sm font-medium">Primary Gradient</span>
              <p className="text-xs opacity-80 mt-1">Golden → Sage (horizontal)</p>
            </div>
            <div className="rounded-xl p-6 bg-gradient-to-br from-golden to-lavender text-black">
              <span className="text-sm font-medium">Accent Gradient</span>
              <p className="text-xs opacity-80 mt-1">Golden → Lavender (diagonal)</p>
            </div>
          </div>
        </section>

        {/* Section 05: Typography */}
        <section className="mb-20 pb-16 border-b border-white/10">
          <SectionHeader number="05" title="Typography" />

          <div className="space-y-6">
            {TYPOGRAPHY.map((font) => (
              <div key={font.name} className="rounded-xl bg-white/[0.02] border border-white/10 p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-4 mb-4">
                  <h3 className={`text-2xl text-white ${font.className}`}>{font.name}</h3>
                  <span className="text-xs text-white/50">{font.usage}</span>
                </div>
                <p className={`text-lg text-white/80 ${font.className} mb-2`}>
                  The quick brown fox jumps over the lazy dog.
                </p>
                <p className={`text-sm ${font.className} text-white/50 mb-2`}>
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {font.weights.map((weight) => (
                    <span key={weight} className="text-[10px] px-2 py-1 rounded bg-white/5 text-white/60">
                      {weight}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 06: Taglines */}
        <section className="mb-20 pb-16 border-b border-white/10">
          <SectionHeader number="06" title="Taglines" />

          <div className="grid md:grid-cols-2 gap-6">
            {TAGLINES.map((tagline) => (
              <div key={tagline.type} className="rounded-xl bg-white/[0.02] border border-white/10 p-6">
                <span className="text-[10px] text-golden mb-2 block uppercase tracking-wider">{tagline.type}</span>
                <p className="text-lg font-display text-white">{tagline.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 07: Guidelines */}
        <section className="mb-12">
          <SectionHeader number="07" title="Usage Guidelines" />

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {[
              "Don't rotate the logo",
              "Don't stretch or distort",
              "Don't change orbital colors",
              "Don't add effects/shadows",
              "Don't place on busy backgrounds",
              "Don't use low contrast",
            ].map((rule, i) => (
              <div
                key={i}
                className="rounded-lg bg-red-500/10 border border-red-500/20 p-4 text-center flex items-center gap-2 justify-center"
              >
                <AlertCircle className="w-4 h-4 text-red-400" />
                <span className="text-sm text-red-400">{rule}</span>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl bg-white/[0.02] border border-white/10 p-8">
              <div className="relative inline-block p-8 border-2 border-dashed border-golden/30">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 text-[10px] text-golden bg-[#0A0A0B] px-1">
                  1x height
                </div>
                <PolymindLogo size="xl" />
              </div>
              <p className="text-xs text-white/50 mt-4">
                Clear space = 1x the height of the core
              </p>
            </div>
            <div className="rounded-xl bg-white/[0.02] border border-white/10 p-8">
              <h3 className="font-semibold text-white/80 mb-4">Minimum Sizes</h3>
              <ul className="space-y-2 text-sm text-white/50">
                <li>• Digital: 24px minimum width</li>
                <li>• Print: 0.5 inch / 12mm minimum</li>
                <li>• Favicon: 16×16px (simplified)</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default BrandKitPage;
