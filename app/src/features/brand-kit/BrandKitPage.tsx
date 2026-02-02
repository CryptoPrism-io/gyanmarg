import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Download,
  Copy,
  Check,
  Package,
  AlertCircle,
} from 'lucide-react';
import html2canvas from 'html2canvas';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

// ============================================
// POLYMIND BRAND DATA
// ============================================

const brandData = {
  name: 'Polymind',
  tagline: 'Your Mind, Unlimited',
  secondaryTagline: 'Finally Retain the Ideas That Matter',
  industry: 'EdTech / Learning Platform',
  website: 'polymind.app',
  personality: {
    tone: 'Inspiring, Knowledgeable, Modern',
    values: ['Mastery', 'Retention', 'Growth', 'Curiosity'],
  },
};

const taglines = [
  { type: 'Primary', text: 'Your Mind, Unlimited' },
  { type: 'Secondary', text: 'Finally Retain the Ideas That Matter' },
  { type: 'Descriptive', text: '1000+ authors. 50+ domains. One system to make knowledge unforgettable.' },
  { type: 'Mission', text: 'Helping curious minds build permanent knowledge across every domain.' },
  { type: 'Action', text: 'Build Your Polymind - Free' },
  { type: 'Social Proof', text: 'Join 10,000+ Polyminds who never forget what they learn' },
];

const colorPalette = {
  primary: {
    name: 'Golden',
    colors: [
      { name: 'Dark', hex: '#B45309', usage: 'Hover states, pressed buttons' },
      { name: 'Base', hex: '#F59E0B', usage: 'Primary CTAs, accents' },
      { name: 'Light', hex: '#FCD34D', usage: 'Highlights, badges' },
      { name: 'Tint', hex: '#FEF3C7', usage: 'Light backgrounds' },
    ],
  },
  secondary: {
    name: 'Sage',
    colors: [
      { name: 'Dark', hex: '#166534', usage: 'Success states dark' },
      { name: 'Base', hex: '#22C55E', usage: 'Success, completed states' },
      { name: 'Light', hex: '#86EFAC', usage: 'Success highlights' },
      { name: 'Tint', hex: '#DCFCE7', usage: 'Success backgrounds' },
    ],
  },
  accent: {
    name: 'Lavender',
    colors: [
      { name: 'Dark', hex: '#6D28D9', usage: 'Accent dark' },
      { name: 'Base', hex: '#8B5CF6', usage: 'Secondary accent' },
      { name: 'Light', hex: '#C4B5FD', usage: 'Accent highlights' },
      { name: 'Tint', hex: '#EDE9FE', usage: 'Accent backgrounds' },
    ],
  },
  warning: {
    name: 'Coral',
    colors: [
      { name: 'Dark', hex: '#DC2626', usage: 'Error states' },
      { name: 'Base', hex: '#EF4444', usage: 'Warnings, alerts' },
      { name: 'Light', hex: '#FCA5A5', usage: 'Warning highlights' },
      { name: 'Tint', hex: '#FEE2E2', usage: 'Error backgrounds' },
    ],
  },
  neutral: {
    name: 'Base',
    colors: [
      { name: 'Background', hex: '#0A0A0B', usage: 'Page background' },
      { name: 'Surface', hex: '#111113', usage: 'Cards, elevated surfaces' },
      { name: 'Border', hex: '#27272A', usage: 'Borders, dividers' },
      { name: 'Muted', hex: '#71717A', usage: 'Secondary text' },
      { name: 'Text', hex: '#FAFAFA', usage: 'Primary text' },
    ],
  },
};

const typography = [
  {
    name: 'Outfit',
    usage: 'Display, Headlines, Logo',
    weights: ['400 Regular', '500 Medium', '600 Semibold', '700 Bold'],
    sample: 'Polymind',
    className: 'font-display',
  },
  {
    name: 'Inter',
    usage: 'Body text, UI elements',
    weights: ['400 Regular', '500 Medium', '600 Semibold', '700 Bold'],
    sample: 'The quick brown fox jumps over the lazy dog',
    className: 'font-sans',
  },
  {
    name: 'DM Mono',
    usage: 'Code, technical content',
    weights: ['400 Regular', '500 Medium'],
    sample: 'const polymind = true;',
    className: 'font-mono',
  },
];

const bannerSizes = [
  { name: 'LinkedIn Cover', width: 1584, height: 396, scale: 2 },
  { name: 'Twitter/X Header', width: 1500, height: 500, scale: 2 },
  { name: 'Facebook Cover', width: 820, height: 312, scale: 1 },
  { name: 'Instagram Post', width: 1080, height: 1080, scale: 2.7 },
  { name: 'YouTube Banner', width: 2560, height: 423, scale: 4 },
  { name: 'OG Image', width: 1200, height: 630, scale: 2 },
];

const iconSizes = [512, 256, 192, 128, 64, 48, 32, 16];

// ============================================
// COMPONENTS
// ============================================

function SectionHeader({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-baseline gap-6 mb-8">
      <span className="text-5xl font-extralight text-white/20">{number}</span>
      <h2 className="text-xs uppercase tracking-[3px] text-white font-medium">{title}</h2>
    </div>
  );
}

function ColorSwatch({ color }: { color: { name: string; hex: string; usage: string } }) {
  const [copied, setCopied] = useState(false);

  const copyHex = () => {
    navigator.clipboard.writeText(color.hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group">
      <button
        type="button"
        className="h-20 w-full rounded-lg mb-3 cursor-pointer transition-transform hover:scale-105 flex items-center justify-center border-0"
        style={{ backgroundColor: color.hex }}
        onClick={copyHex}
        aria-label={`Copy ${color.name} color ${color.hex}`}
      >
        {copied ? (
          <Check className="w-5 h-5 text-white drop-shadow-lg" />
        ) : (
          <Copy className="w-4 h-4 text-white/0 group-hover:text-white/80 drop-shadow-lg transition-colors" />
        )}
      </button>
      <p className="text-xs font-medium text-white/90">{color.name}</p>
      <p className="text-[10px] font-mono text-white/50">{color.hex}</p>
      <p className="text-[10px] text-white/30 mt-1">{color.usage}</p>
    </div>
  );
}

function DownloadButton({ onClick, label = 'Download', ariaLabel }: { onClick: () => void; label?: string; ariaLabel?: string }) {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel || label}
      className="px-4 py-2 border border-golden/50 text-golden text-[10px] uppercase tracking-wider rounded hover:bg-golden/10 hover:border-golden transition-colors flex items-center gap-2"
    >
      <Download className="w-3 h-3" />
      {label}
    </button>
  );
}

function BannerPreview({ banner }: { banner: typeof bannerSizes[0] }) {
  const bannerRef = useRef<HTMLDivElement>(null);
  const [downloading, setDownloading] = useState(false);

  const downloadBanner = async () => {
    if (!bannerRef.current) return;
    setDownloading(true);

    try {
      const canvas = await html2canvas(bannerRef.current, {
        scale: banner.scale,
        backgroundColor: null,
        useCORS: true,
      });

      canvas.toBlob((blob) => {
        if (blob) {
          saveAs(blob, `polymind-${banner.name.toLowerCase().replace(/\s+/g, '-')}.png`);
        }
        setDownloading(false);
      });
    } catch {
      setDownloading(false);
    }
  };

  // Calculate preview scale to fit in container
  const maxPreviewWidth = 400;
  const previewScale = Math.min(1, maxPreviewWidth / banner.width);

  return (
    <div className="bg-white/[0.02] border border-white/10 rounded-lg p-5">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-sm font-medium text-white/90">{banner.name}</p>
          <p className="text-[10px] text-golden">{banner.width} × {banner.height}px</p>
        </div>
        <DownloadButton onClick={downloadBanner} label={downloading ? 'Saving...' : 'Download'} ariaLabel={`Download ${banner.name} banner`} />
      </div>

      {/* Banner Preview */}
      <div className="overflow-hidden rounded-lg" style={{ maxWidth: maxPreviewWidth }}>
        <div
          ref={bannerRef}
          className="relative bg-gradient-to-br from-[#0A0A0B] via-[#111113] to-[#0A0A0B] overflow-hidden"
          style={{
            width: banner.width,
            height: banner.height,
            transform: `scale(${previewScale})`,
            transformOrigin: 'top left',
          }}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.03)_1px,transparent_0)] bg-[size:32px_32px]" />

          {/* Gradient accent */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-golden via-sage to-lavender" />

          {/* Content */}
          <div className="relative h-full flex items-center justify-between px-12">
            <div className="flex items-center gap-6">
              {/* Logo */}
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-golden to-golden/60 flex items-center justify-center">
                <span className="text-2xl font-bold text-black">P</span>
              </div>
              <div>
                <h3 className="text-3xl font-display font-bold text-white tracking-wider">POLYMIND</h3>
                <p className="text-sm text-white/60 mt-1">{brandData.tagline}</p>
              </div>
            </div>

            {/* Features */}
            <div className="flex gap-8 text-white/50 text-xs">
              <span>1000+ Authors</span>
              <span>50+ Domains</span>
              <span>Unforgettable</span>
            </div>
          </div>

          {/* Watermark */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
            <span className="text-[200px] font-display font-bold text-white">P</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconPreview({ size, variant }: { size: number; variant: 'light' | 'dark' }) {
  const iconRef = useRef<HTMLButtonElement>(null);

  const downloadIcon = async () => {
    if (!iconRef.current) return;

    const canvas = await html2canvas(iconRef.current, {
      scale: size / 64, // Scale to actual size
      backgroundColor: null,
    });

    canvas.toBlob((blob) => {
      if (blob) {
        saveAs(blob, `polymind-icon-${size}px-${variant}.png`);
      }
    });
  };

  const bgClass = variant === 'light'
    ? 'bg-gradient-to-br from-stone-100 to-stone-200'
    : 'bg-gradient-to-br from-stone-800 to-stone-900';

  const textClass = variant === 'light' ? 'text-golden' : 'text-golden';

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        type="button"
        ref={iconRef}
        className={`w-16 h-16 rounded-xl ${bgClass} flex items-center justify-center cursor-pointer hover:scale-105 transition-transform border-0`}
        onClick={downloadIcon}
        aria-label={`Download ${size}px ${variant} icon`}
      >
        <span className={`text-2xl font-display font-bold ${textClass}`}>P</span>
      </button>
      <span className="text-[10px] text-white/40">{size}px</span>
    </div>
  );
}

// ============================================
// MAIN PAGE
// ============================================

export function BrandKitPage() {
  const [downloadingAll, setDownloadingAll] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);

  const downloadAllAssets = async () => {
    setDownloadingAll(true);
    setDownloadProgress(0);

    const zip = new JSZip();
    const totalItems = bannerSizes.length + iconSizes.length * 2 + 6; // banners + icons + profile pics
    let completed = 0;

    const updateProgress = () => {
      completed++;
      setDownloadProgress(Math.round((completed / totalItems) * 100));
    };

    // Note: In production, you'd capture each element properly
    // This is a simplified version that creates placeholder files

    // Add README
    zip.file('README.txt', `Polymind Brand Kit\n==================\n\nContents:\n- /Banners - Social media banners\n- /Icons - App icons (light & dark)\n- /Profiles - Profile pictures\n\nBrand Colors:\n- Primary (Golden): #F59E0B\n- Secondary (Sage): #22C55E\n- Accent (Lavender): #8B5CF6\n\nFonts:\n- Display: Outfit\n- Body: Inter\n- Mono: DM Mono\n\nWebsite: ${brandData.website}\nTagline: ${brandData.tagline}`);

    // Create folders
    const bannersFolder = zip.folder('Banners');
    const iconsLightFolder = zip.folder('Icons/Light');
    const iconsDarkFolder = zip.folder('Icons/Dark');
    const profilesFolder = zip.folder('Profiles');

    // Add placeholder files (in production, capture actual elements)
    for (const banner of bannerSizes) {
      bannersFolder?.file(`${banner.name.toLowerCase().replace(/\s+/g, '-')}.txt`, `Banner: ${banner.name}\nSize: ${banner.width}x${banner.height}px`);
      updateProgress();
    }

    for (const size of iconSizes) {
      iconsLightFolder?.file(`icon-${size}px.txt`, `Icon ${size}px - Light variant`);
      iconsDarkFolder?.file(`icon-${size}px.txt`, `Icon ${size}px - Dark variant`);
      updateProgress();
      updateProgress();
    }

    // Profile pics
    profilesFolder?.file('linkedin-400px.txt', 'LinkedIn profile 400x400px');
    profilesFolder?.file('twitter-180px.txt', 'Twitter profile 180x180px');
    profilesFolder?.file('whatsapp-110px.txt', 'WhatsApp profile 110x110px');
    updateProgress();
    updateProgress();
    updateProgress();

    // Generate and download
    const content = await zip.generateAsync({ type: 'blob' });
    saveAs(content, 'polymind-brand-kit.zip');

    setDownloadingAll(false);
    setDownloadProgress(0);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0A0A0B]/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Home</span>
          </Link>
          <button
            onClick={downloadAllAssets}
            disabled={downloadingAll}
            aria-label="Download all brand kit assets as ZIP"
            className="px-6 py-2.5 bg-gradient-to-r from-golden to-golden/80 text-black font-semibold text-sm rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center gap-2"
          >
            <Package className="w-4 h-4" />
            {downloadingAll ? `Generating... ${downloadProgress}%` : 'Download All Assets'}
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 px-6 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              <span className="text-golden">Polymind</span> Brand Kit
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Complete digital identity assets for consistent brand representation across all platforms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-20">

        {/* 01. Brand Foundation */}
        <section>
          <SectionHeader number="01" title="Brand Foundation" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/[0.02] border border-white/10 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-golden to-golden/60 flex items-center justify-center">
                  <span className="text-3xl font-display font-bold text-black">P</span>
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold tracking-wider">{brandData.name}</h3>
                  <p className="text-white/50 text-sm">{brandData.tagline}</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <p><span className="text-white/40">Industry:</span> <span className="text-white/80">{brandData.industry}</span></p>
                <p><span className="text-white/40">Website:</span> <span className="text-golden">{brandData.website}</span></p>
                <p><span className="text-white/40">Tone:</span> <span className="text-white/80">{brandData.personality.tone}</span></p>
              </div>
            </div>
            <div className="bg-white/[0.02] border border-white/10 rounded-lg p-6">
              <h3 className="text-[10px] uppercase tracking-wider text-white/40 mb-4">Brand Values</h3>
              <div className="flex flex-wrap gap-2">
                {brandData.personality.values.map((value) => (
                  <span key={value} className="px-3 py-1.5 bg-golden/10 border border-golden/30 rounded-full text-sm text-golden">
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 02. Color Palette */}
        <section>
          <SectionHeader number="02" title="Color Palette" />
          <div className="space-y-8">
            {Object.entries(colorPalette).map(([key, group]) => (
              <div key={key} className="bg-white/[0.02] border border-white/10 rounded-lg p-6">
                <h3 className="text-[10px] uppercase tracking-wider text-white/40 mb-4">{group.name}</h3>
                <div className="grid grid-cols-4 md:grid-cols-5 gap-4">
                  {group.colors.map((color) => (
                    <ColorSwatch key={color.hex} color={color} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 03. Typography */}
        <section>
          <SectionHeader number="03" title="Typography" />
          <div className="space-y-4">
            {typography.map((font) => (
              <div key={font.name} className="bg-white/[0.02] border border-white/10 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-medium text-white/90">{font.name}</h3>
                    <p className="text-[10px] uppercase tracking-wider text-white/40">{font.usage}</p>
                  </div>
                  <div className="flex gap-2">
                    {font.weights.map((weight) => (
                      <span key={weight} className="px-2 py-1 bg-white/5 rounded text-[10px] text-white/50">{weight}</span>
                    ))}
                  </div>
                </div>
                <p className={`text-3xl ${font.className} text-white/80`}>{font.sample}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 04. Social Media Banners */}
        <section>
          <SectionHeader number="04" title="Social Media Banners" />
          <div className="grid md:grid-cols-2 gap-6">
            {bannerSizes.map((banner) => (
              <BannerPreview key={banner.name} banner={banner} />
            ))}
          </div>
        </section>

        {/* 05. App Icons */}
        <section>
          <SectionHeader number="05" title="App Icons" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/[0.02] border border-white/10 rounded-lg p-6">
              <h3 className="text-[10px] uppercase tracking-wider text-white/40 mb-6">Light Variant</h3>
              <div className="flex flex-wrap gap-4">
                {iconSizes.slice(0, 4).map((size) => (
                  <IconPreview key={size} size={size} variant="light" />
                ))}
              </div>
            </div>
            <div className="bg-white/[0.02] border border-white/10 rounded-lg p-6">
              <h3 className="text-[10px] uppercase tracking-wider text-white/40 mb-6">Dark Variant</h3>
              <div className="flex flex-wrap gap-4">
                {iconSizes.slice(0, 4).map((size) => (
                  <IconPreview key={size} size={size} variant="dark" />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 06. Taglines */}
        <section>
          <SectionHeader number="06" title="Taglines" />
          <div className="grid md:grid-cols-2 gap-4">
            {taglines.map((tagline) => (
              <div key={tagline.type} className="bg-white/[0.02] border border-white/10 rounded-lg p-5">
                <p className="text-[10px] uppercase tracking-wider text-golden mb-2">{tagline.type}</p>
                <p className="text-white/90">{tagline.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 07. Usage Guidelines */}
        <section>
          <SectionHeader number="07" title="Usage Guidelines" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/[0.02] border border-white/10 rounded-lg p-6">
              <h3 className="text-[10px] uppercase tracking-wider text-coral mb-4 flex items-center gap-2">
                <AlertCircle className="w-3 h-3" />
                Don&apos;ts
              </h3>
              <ul className="space-y-2 text-sm text-white/60">
                <li>• Don&apos;t rotate or skew the logo</li>
                <li>• Don&apos;t stretch or distort proportions</li>
                <li>• Don&apos;t change the brand colors</li>
                <li>• Don&apos;t add effects, shadows, or gradients</li>
                <li>• Don&apos;t place on busy backgrounds</li>
                <li>• Don&apos;t use low contrast combinations</li>
              </ul>
            </div>
            <div className="bg-white/[0.02] border border-white/10 rounded-lg p-6">
              <h3 className="text-[10px] uppercase tracking-wider text-sage mb-4 flex items-center gap-2">
                <Check className="w-3 h-3" />
                Minimum Sizes
              </h3>
              <ul className="space-y-2 text-sm text-white/60">
                <li>• Digital: 24px minimum width</li>
                <li>• Print: 0.5 inch / 12mm minimum</li>
                <li>• Favicon: 16×16px (simplified)</li>
                <li>• Clear space: 1× logo height on all sides</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="text-center py-12">
          <button
            onClick={downloadAllAssets}
            disabled={downloadingAll}
            aria-label="Download complete brand kit with all assets"
            className="px-10 py-4 bg-gradient-to-r from-golden to-sage text-black font-semibold text-lg rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 inline-flex items-center gap-3 shadow-lg shadow-golden/20"
          >
            <Package className="w-5 h-5" />
            {downloadingAll ? `Generating... ${downloadProgress}%` : 'Download Complete Brand Kit'}
          </button>
          <p className="text-white/40 text-sm mt-4">Includes all banners, icons, and guidelines</p>
        </section>

      </div>
    </div>
  );
}

export default BrandKitPage;
