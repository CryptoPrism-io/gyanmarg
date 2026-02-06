import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Body Language (Pease) - Mirroring builds rapport
export function MirroringRapport() {
  const [personAPosture, setPersonAPosture] = useState('neutral');
  const [personBPosture, setPersonBPosture] = useState('neutral');
  const [isMirroring, setIsMirroring] = useState(false);
  const [rapportLevel, setRapportLevel] = useState(20);

  const postures = ['neutral', 'leaning', 'crossed', 'open'];

  // When mirroring is on, B follows A
  useEffect(() => {
    if (isMirroring) {
      const timer = setTimeout(() => {
        setPersonBPosture(personAPosture);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [personAPosture, isMirroring]);

  // Update rapport based on matching
  useEffect(() => {
    if (personAPosture === personBPosture) {
      setRapportLevel(prev => Math.min(100, prev + 10));
    } else {
      setRapportLevel(prev => Math.max(0, prev - 5));
    }
  }, [personAPosture, personBPosture]);

  const getPostureEmoji = (posture: string) => {
    switch (posture) {
      case 'leaning': return '🙂';
      case 'crossed': return '🙁';
      case 'open': return '😊';
      default: return '😐';
    }
  };

  return (
    <div className="relative overflow-hidden rounded-2xl">
      {/* Dark Glassmorphism background - 88% transparent */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-purple-500/[0.02]" />
      <div className="absolute inset-0 border border-white/[0.1] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 p-5">
        <div className="flex flex-col items-center gap-4">
          {/* People visualization */}
          <div className="flex gap-8 items-center">
            {/* Person A */}
            <div className="text-center">
              <motion.div
                className="w-16 h-16 rounded-full bg-blue-500/20 border-2 border-blue-500/50 flex items-center justify-center text-2xl backdrop-blur-sm"
                animate={{
                  rotate: personAPosture === 'leaning' ? -10 : 0,
                  scale: personAPosture === 'open' ? 1.1 : 1,
                }}
              >
                {getPostureEmoji(personAPosture)}
              </motion.div>
              <p className="text-[10px] text-blue-400 mt-2">Person A</p>
            </div>

            {/* Connection line */}
            <motion.div
              className="h-1 w-16 rounded-full"
              animate={{
                backgroundColor: personAPosture === personBPosture
                  ? 'rgb(34, 197, 94)'
                  : 'rgb(75, 85, 99)',
              }}
            />

            {/* Person B */}
            <div className="text-center">
              <motion.div
                className="w-16 h-16 rounded-full bg-purple-500/20 border-2 border-purple-500/50 flex items-center justify-center text-2xl backdrop-blur-sm"
                animate={{
                  rotate: personBPosture === 'leaning' ? -10 : 0,
                  scale: personBPosture === 'open' ? 1.1 : 1,
                }}
              >
                {getPostureEmoji(personBPosture)}
              </motion.div>
              <p className="text-[10px] text-purple-400 mt-2">Person B</p>
            </div>
          </div>

          {/* Rapport meter */}
          <div className="w-full max-w-xs">
            <div className="flex justify-between text-[10px] text-gray-500 mb-1">
              <span>Rapport Level</span>
              <span>{rapportLevel}%</span>
            </div>
            <div className="h-2 bg-white/[0.05] backdrop-blur-sm rounded-full overflow-hidden border border-white/[0.08]">
              <motion.div
                className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"
                animate={{ width: `${rapportLevel}%` }}
              />
            </div>
          </div>

          {/* Controls */}
          <div className="w-full max-w-xs space-y-3">
            {/* Mirroring toggle */}
            <button
              onClick={() => setIsMirroring(!isMirroring)}
              className={`w-full py-2 rounded-lg text-xs border transition-all backdrop-blur-sm ${
                isMirroring
                  ? 'bg-green-500/20 border-green-500/50 text-green-400'
                  : 'bg-white/[0.03] border-white/[0.1] text-gray-400 hover:bg-white/[0.05]'
              }`}
            >
              {isMirroring ? '✓ Auto-Mirroring ON' : 'Enable Auto-Mirroring'}
            </button>

            {/* Person A posture selector */}
            <div>
              <p className="text-[10px] text-gray-500 mb-2">Change Person A's posture:</p>
              <div className="grid grid-cols-4 gap-2">
                {postures.map((p) => (
                  <button
                    key={p}
                    onClick={() => setPersonAPosture(p)}
                    className={`py-1.5 rounded text-[10px] border transition-all backdrop-blur-sm ${
                      personAPosture === p
                        ? 'bg-blue-500/20 border-blue-500/50 text-blue-400'
                        : 'border-white/[0.1] bg-white/[0.02] text-gray-500 hover:bg-white/[0.04]'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Insight */}
          <div className="relative w-full max-w-xs overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-green-500/5 to-transparent backdrop-blur-sm" />
            <div className="absolute inset-0 border border-green-500/30 rounded-lg" />
            <div className="relative z-10 p-3">
              <p className="text-[10px] text-green-400 text-center">
                💡 We naturally mirror people we like. Deliberately mirroring builds subconscious rapport.
              </p>
            </div>
          </div>

          <p className="text-[10px] text-gray-500 text-center">
            From "The Definitive Book of Body Language" by Allan Pease
          </p>
        </div>
      </div>
    </div>
  );
}

export default MirroringRapport;
