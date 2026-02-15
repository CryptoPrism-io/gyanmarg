import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import html2canvas from 'html2canvas';
import {
  Download,
  Twitter,
  Linkedin,
  Copy,
  CheckCircle,
} from 'lucide-react';
import { Button } from '@/components/atoms';

interface ShareableAchievementCardProps {
  achievementName: string;
  achievementDescription: string;
  userName: string;
  unlockedDate: string;
  xpReward: number;
  badgeColor: string; // e.g., 'from-golden to-sunrise'
  textColor: string;  // e.g., 'text-golden'
}

export function ShareableAchievementCard({
  achievementName,
  achievementDescription,
  userName,
  unlockedDate,
  xpReward,
  badgeColor,
  textColor,
}: ShareableAchievementCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied'>('idle');

  // Format date
  const formattedDate = new Date(unlockedDate).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  // Download card as image
  const handleDownload = async () => {
    if (!cardRef.current) return;
    setIsDownloading(true);

    try {
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: '#0A0A0B',
        scale: 2,
        logging: false,
      });

      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = `${achievementName}-badge.png`;
      link.click();
    } catch (error) {
      console.error('Failed to download image:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  // Copy shareable text
  const handleCopyText = () => {
    const text = `I just unlocked "${achievementName}" on Gyanmarg! 🎓\n\n+${xpReward} XP earned\n\nJoin me in mastering knowledge: https://gyanmarg.com`;
    navigator.clipboard.writeText(text);
    setCopyStatus('copied');
    setTimeout(() => setCopyStatus('idle'), 2000);
  };

  // Share to Twitter
  const handleShareTwitter = () => {
    const text = `I just unlocked "${achievementName}" on Gyanmarg! 🎓 +${xpReward} XP earned. Join me in mastering knowledge!`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=https://gyanmarg.com`;
    window.open(url, '_blank', 'width=550,height=420');
  };

  // Share to LinkedIn
  const handleShareLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=https://gyanmarg.com`;
    window.open(url, '_blank', 'width=550,height=420');
  };

  return (
    <div className="space-y-3">
      {/* Shareable Card Preview */}
      <div
        ref={cardRef}
        className="relative overflow-hidden rounded-2xl p-6 w-full aspect-square sm:aspect-auto sm:h-80"
        style={{
          background: `linear-gradient(135deg, rgba(6, 13, 28, 0.95) 0%, rgba(10, 10, 11, 0.98) 100%)`,
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-b from-golden to-transparent rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-t from-lavender to-transparent rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-between">
          {/* Header */}
          <div>
            <p className="text-[10px] sm:text-xs font-semibold text-text-muted uppercase tracking-widest mb-2">
              ACHIEVEMENT UNLOCKED
            </p>

            {/* Badge Circle */}
            <div className="mb-6">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br ${badgeColor} flex items-center justify-center text-3xl sm:text-4xl shadow-2xl border-2 border-white/10 mx-auto`}
              >
                ⭐
              </motion.div>
            </div>

            {/* Achievement Name */}
            <h2 className={`text-2xl sm:text-3xl font-bold ${textColor} text-center mb-2`}>
              {achievementName}
            </h2>
            <p className="text-xs sm:text-sm text-text-secondary text-center">
              {achievementDescription}
            </p>
          </div>

          {/* Footer */}
          <div className="space-y-4">
            {/* Stats Row */}
            <div className="flex items-center justify-between gap-4 px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06]">
              <div className="text-left">
                <p className="text-[10px] text-text-muted uppercase tracking-wider">User</p>
                <p className="text-sm sm:text-base font-semibold text-text-primary">
                  {userName}
                </p>
              </div>
              <div className="h-8 w-px bg-white/[0.1]" />
              <div className="text-center">
                <p className="text-[10px] text-text-muted uppercase tracking-wider">Date</p>
                <p className="text-xs sm:text-sm font-semibold text-text-primary">
                  {formattedDate}
                </p>
              </div>
              <div className="h-8 w-px bg-white/[0.1]" />
              <div className="text-right">
                <p className="text-[10px] text-text-muted uppercase tracking-wider">
                  Reward
                </p>
                <p className={`text-sm sm:text-base font-bold ${textColor}`}>
                  +{xpReward} XP
                </p>
              </div>
            </div>

            {/* Branding Footer */}
            <div className="text-center pt-2 border-t border-white/[0.06]">
              <p className="text-[10px] text-text-muted">
                Earned on{' '}
                <span className="font-semibold text-golden">Gyanmarg.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Share Actions */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <Button
          variant={isDownloading ? 'primary' : 'glass'}
          size="sm"
          onClick={handleDownload}
          disabled={isDownloading}
          className="gap-1.5 text-xs justify-center"
        >
          <Download className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Download</span>
          <span className="sm:hidden">Save</span>
        </Button>

        <Button
          variant="glass"
          size="sm"
          onClick={handleShareTwitter}
          className="gap-1.5 text-xs justify-center hover:border-blue-400/30 hover:text-blue-300"
        >
          <Twitter className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Twitter</span>
          <span className="sm:hidden">X</span>
        </Button>

        <Button
          variant="glass"
          size="sm"
          onClick={handleShareLinkedIn}
          className="gap-1.5 text-xs justify-center hover:border-blue-500/30 hover:text-blue-300"
        >
          <Linkedin className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">LinkedIn</span>
          <span className="sm:hidden">In</span>
        </Button>

        <Button
          variant={copyStatus === 'copied' ? 'primary' : 'glass'}
          size="sm"
          onClick={handleCopyText}
          className="gap-1.5 text-xs justify-center"
        >
          {copyStatus === 'copied' ? (
            <>
              <CheckCircle className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Copy</span>
              <span className="sm:hidden">Text</span>
            </>
          )}
        </Button>
      </div>

      {/* Help Text */}
      <p className="text-[10px] text-text-muted text-center">
        Download, share, and inspire your friends! 🚀
      </p>
    </div>
  );
}
