import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

interface QuizOptionProps {
  option: string;
  index: number;
  selected: boolean;
  correct?: boolean;
  showResult?: boolean;
  isCorrectAnswer?: boolean;
  disabled?: boolean;
  onSelect: () => void;
}

export function QuizOption({
  option,
  index,
  selected,
  correct,
  showResult = false,
  isCorrectAnswer = false,
  disabled = false,
  onSelect,
}: QuizOptionProps) {
  const letters = ['A', 'B', 'C', 'D'];

  const getStyles = () => {
    if (!showResult) {
      return selected
        ? 'bg-accent/10 border-accent/50 text-accent'
        : 'bg-secondary border-border text-secondary hover:border-muted hover:bg-elevated';
    }

    if (selected) {
      return correct
        ? 'bg-success/10 border-success text-success'
        : 'bg-error/10 border-error text-error';
    }

    if (isCorrectAnswer) {
      return 'bg-success/5 border-success/30 text-success';
    }

    return 'bg-secondary border-border text-muted';
  };

  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.01 } : {}}
      whileTap={!disabled ? { scale: 0.99 } : {}}
      onClick={onSelect}
      disabled={disabled}
      className={`
        w-full p-4 rounded-xl text-left transition-all duration-200
        border-2 flex items-center gap-4
        ${getStyles()}
        ${disabled ? 'cursor-default' : 'cursor-pointer'}
      `}
    >
      <span
        className={`
          w-8 h-8 rounded-lg flex items-center justify-center font-semibold text-sm
          ${selected && showResult
            ? correct
              ? 'bg-success text-white'
              : 'bg-error text-white'
            : selected
            ? 'bg-accent text-white'
            : 'bg-border text-muted'
          }
        `}
      >
        {showResult && selected ? (
          correct ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />
        ) : (
          letters[index]
        )}
      </span>
      <span className="flex-1">{option}</span>
      {showResult && isCorrectAnswer && !selected && (
        <Check className="w-5 h-5 text-success" />
      )}
    </motion.button>
  );
}

// Quiz result feedback
interface QuizFeedbackProps {
  correct: boolean;
  explanation: string;
}

export function QuizFeedback({ correct, explanation }: QuizFeedbackProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`
        p-4 rounded-xl border
        ${correct
          ? 'bg-success/10 border-success/30'
          : 'bg-warning/10 border-warning/30'
        }
      `}
    >
      <p className={`font-medium mb-2 ${correct ? 'text-success' : 'text-warning'}`}>
        {correct ? 'Correct!' : 'Not quite!'}
      </p>
      <p className="text-sm text-secondary">{explanation}</p>
    </motion.div>
  );
}

export default QuizOption;
