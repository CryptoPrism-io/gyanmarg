import { useState } from 'react';
import { Copy, Check, Image } from 'lucide-react';

interface ImagePlaceholderProps {
  filename: string;
  prompt: string;
  dimensions?: string;
  className?: string;
  aspectRatio?: 'video' | 'square' | 'wide';
}

export function ImagePlaceholder({
  filename,
  prompt,
  dimensions = '800x600',
  className = '',
  aspectRatio = 'video',
}: ImagePlaceholderProps) {
  const [copied, setCopied] = useState<'filename' | 'prompt' | null>(null);

  const handleCopy = async (text: string, type: 'filename' | 'prompt') => {
    await navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const aspectClasses = {
    video: 'aspect-video',
    square: 'aspect-square',
    wide: 'aspect-[21/9]',
  };

  return (
    <div
      className={`
        relative overflow-hidden rounded-2xl border-2 border-dashed border-amber-500/30
        bg-gradient-to-br from-amber-500/5 to-purple-500/5
        ${aspectClasses[aspectRatio]} ${className}
      `}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #F59E0B 1px, transparent 0)`,
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 gap-3">
        {/* Icon */}
        <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center">
          <Image className="w-6 h-6 text-amber-500" />
        </div>

        {/* Filename */}
        <button
          onClick={() => handleCopy(filename, 'filename')}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/50 border border-amber-500/30 hover:border-amber-500/60 transition-colors group"
        >
          <span className="text-sm font-mono text-amber-400">{filename}</span>
          {copied === 'filename' ? (
            <Check className="w-4 h-4 text-green-400" />
          ) : (
            <Copy className="w-4 h-4 text-amber-500/50 group-hover:text-amber-500" />
          )}
        </button>

        {/* Dimensions */}
        <span className="text-xs text-white/40">{dimensions}</span>

        {/* Copy Prompt Button */}
        <button
          onClick={() => handleCopy(prompt, 'prompt')}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 transition-colors text-sm text-amber-300"
        >
          {copied === 'prompt' ? (
            <>
              <Check className="w-4 h-4" />
              Prompt Copied!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              Copy AI Prompt
            </>
          )}
        </button>
      </div>

      {/* Prompt Preview (collapsed) */}
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
        <p className="text-[10px] text-white/40 line-clamp-2 font-mono">
          {prompt.slice(0, 150)}...
        </p>
      </div>
    </div>
  );
}

export default ImagePlaceholder;
