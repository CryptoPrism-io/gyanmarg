// BetaAccessGate — collects name, email, age, gender and grants full beta access
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';
import { useUserStore } from '@/store/userStore';
import { useAuthContext } from '@/contexts/AuthContext';
import { saveBetaUser } from '@/lib/firebase/firestore';

interface BetaAccessGateProps {
  onClose: () => void;
}

const AGE_OPTIONS = ['Under 18', '18–24', '25–34', '35–44', '45–54', '55+'];
const GENDER_OPTIONS = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' },
  { value: 'prefer_not_to_say', label: 'Prefer not to say' },
];

export function BetaAccessGate({ onClose }: BetaAccessGateProps) {
  const profile = useUserStore(s => s.profile);
  const activateLifetime = useUserStore(s => s.activateLifetime);
  const { user } = useAuthContext();

  const [name, setName] = useState(profile?.name ?? '');
  const [email, setEmail] = useState(user?.email ?? '');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = 'Required';
    if (!email.trim()) e.email = 'Required';
    if (!age) e.age = 'Required';
    if (!gender) e.gender = 'Required';
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setIsSubmitting(true);
    try {
      if (user?.uid) {
        await saveBetaUser({ uid: user.uid, name: name.trim(), email: email.trim(), age, gender });
      }
      activateLifetime();
      onClose();
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        key="beta-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          key="beta-modal"
          initial={{ opacity: 0, scale: 0.95, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-md bg-neutral-900 border border-white/10 rounded-2xl p-6 shadow-2xl"
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition rounded-lg hover:bg-white/10"
          >
            <X size={18} />
          </button>

          {/* Header */}
          <div className="flex flex-col items-center text-center mb-6">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 mb-4">
              <Sparkles className="w-7 h-7 text-amber-400" />
            </div>
            <h2 className="text-xl font-semibold text-white mb-1">Get Free Beta Access</h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              You're one of the first. Tell us a little about yourself and we'll unlock everything — free.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">Name</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Your name"
                className="w-full px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-amber-500/50 transition"
              />
              {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-amber-500/50 transition"
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>

            {/* Age + Gender side by side */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">Age</label>
                <select
                  value={age}
                  onChange={e => setAge(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg bg-neutral-800 border border-white/10 text-white text-sm focus:outline-none focus:border-amber-500/50 transition appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select</option>
                  {AGE_OPTIONS.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                {errors.age && <p className="text-red-400 text-xs mt-1">{errors.age}</p>}
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">Gender</label>
                <select
                  value={gender}
                  onChange={e => setGender(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg bg-neutral-800 border border-white/10 text-white text-sm focus:outline-none focus:border-amber-500/50 transition appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select</option>
                  {GENDER_OPTIONS.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                {errors.gender && <p className="text-red-400 text-xs mt-1">{errors.gender}</p>}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-50 disabled:cursor-not-allowed text-black text-base font-semibold transition-colors mt-2"
            >
              {isSubmitting ? 'Activating...' : 'Get Free Beta Access →'}
            </button>
          </form>

          <p className="text-center text-[11px] text-gray-500 mt-3">
            No payment required · Full access · Help us build better
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default BetaAccessGate;
