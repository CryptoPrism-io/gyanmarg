import { useCallback, useRef } from 'react';
import { useUserStore } from '@/store/userStore';

// Sound effect configuration
const soundConfig = {
  xpGain: { src: '/sounds/xp-gain.mp3', volume: 0.4 },
  levelUp: { src: '/sounds/level-up.mp3', volume: 0.6 },
  achievement: { src: '/sounds/achievement.mp3', volume: 0.5 },
  lessonComplete: { src: '/sounds/complete.mp3', volume: 0.5 },
  streakContinue: { src: '/sounds/streak.mp3', volume: 0.5 },
  cardFlip: { src: '/sounds/card-flip.mp3', volume: 0.3 },
  correct: { src: '/sounds/correct.mp3', volume: 0.4 },
  incorrect: { src: '/sounds/incorrect.mp3', volume: 0.3 },
  click: { src: '/sounds/click.mp3', volume: 0.2 },
  success: { src: '/sounds/success.mp3', volume: 0.5 },
} as const;

type SoundType = keyof typeof soundConfig;

interface UseSoundEffectsReturn {
  play: (sound: SoundType) => void;
  playXpGain: () => void;
  playLevelUp: () => void;
  playAchievement: () => void;
  playLessonComplete: () => void;
  playStreakContinue: () => void;
  playCardFlip: () => void;
  playCorrect: () => void;
  playIncorrect: () => void;
  playClick: () => void;
  playSuccess: () => void;
}

export function useSoundEffects(): UseSoundEffectsReturn {
  const soundEnabled = useUserStore((s) => s.settings.soundEnabled);
  const audioCache = useRef<Map<SoundType, HTMLAudioElement>>(new Map());

  const play = useCallback(
    (sound: SoundType) => {
      if (!soundEnabled) return;

      try {
        // Get or create audio element
        let audio = audioCache.current.get(sound);

        if (!audio) {
          const config = soundConfig[sound];
          audio = new Audio(config.src);
          audio.volume = config.volume;
          audioCache.current.set(sound, audio);
        }

        // Reset and play
        audio.currentTime = 0;
        audio.play().catch(() => {
          // Silently fail if sound can't be played (e.g., file not found, autoplay blocked)
        });
      } catch {
        // Silently fail if audio not supported
      }
    },
    [soundEnabled]
  );

  // Convenience methods for common sounds
  const playXpGain = useCallback(() => play('xpGain'), [play]);
  const playLevelUp = useCallback(() => play('levelUp'), [play]);
  const playAchievement = useCallback(() => play('achievement'), [play]);
  const playLessonComplete = useCallback(() => play('lessonComplete'), [play]);
  const playStreakContinue = useCallback(() => play('streakContinue'), [play]);
  const playCardFlip = useCallback(() => play('cardFlip'), [play]);
  const playCorrect = useCallback(() => play('correct'), [play]);
  const playIncorrect = useCallback(() => play('incorrect'), [play]);
  const playClick = useCallback(() => play('click'), [play]);
  const playSuccess = useCallback(() => play('success'), [play]);

  return {
    play,
    playXpGain,
    playLevelUp,
    playAchievement,
    playLessonComplete,
    playStreakContinue,
    playCardFlip,
    playCorrect,
    playIncorrect,
    playClick,
    playSuccess,
  };
}

// Generate placeholder sound files script (for development)
// Run: node -e "require('./generateSounds.js')"
export const generateSoundsScript = `
// This is a placeholder script to generate simple beep sounds
// In production, replace with proper sound files

const AudioContext = window.AudioContext || window.webkitAudioContext;

function generateBeep(frequency: number, duration: number, type: OscillatorType = 'sine'): Promise<Blob> {
  return new Promise((resolve) => {
    const ctx = new AudioContext();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.frequency.value = frequency;
    oscillator.type = type;

    gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);

    const dest = ctx.createMediaStreamDestination();
    gainNode.connect(dest);

    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + duration);

    // This would need to be recorded and saved as MP3
    // For now, this is just a placeholder
    resolve(new Blob());
  });
}
`;

export default useSoundEffects;
