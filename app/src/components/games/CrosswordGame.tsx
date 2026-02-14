import { useState, useCallback, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, HelpCircle } from 'lucide-react';
import { HINT_COST } from '@/types/game';
import type { GameComponentProps } from '@/types/game';
import { calculateGameScore } from '@/lib/gameScoring';

interface CellData {
  letter: string;
  wordIndices: number[];
  number?: number;
}

export function CrosswordGame({ content, quickPlay, onComplete, onUseHint, hintsRemaining }: GameComponentProps) {
  const allWords = content.crossword ?? [];
  const words = useMemo(() => {
    const count = quickPlay ? Math.min(4, allWords.length) : Math.min(8, allWords.length);
    return allWords.slice(0, count);
  }, [allWords, quickPlay]);

  const { grid, gridSize } = useMemo(() => {
    const cells = new Map<string, CellData>();
    let maxRow = 0;
    let maxCol = 0;
    words.forEach((word, wi) => {
      for (let i = 0; i < word.word.length; i++) {
        const r = word.direction === 'across' ? word.row : word.row + i;
        const c = word.direction === 'across' ? word.col + i : word.col;
        const key = `${r},${c}`;
        maxRow = Math.max(maxRow, r);
        maxCol = Math.max(maxCol, c);
        const existing = cells.get(key);
        if (existing) {
          existing.wordIndices.push(wi);
        } else {
          cells.set(key, { letter: word.word[i], wordIndices: [wi], number: i === 0 ? wi + 1 : undefined });
        }
      }
    });
    return { grid: cells, gridSize: { rows: maxRow + 1, cols: maxCol + 1 } };
  }, [words]);

  // Pre-fill 55% of cells (read-only)
  const preFilled = useMemo(() => {
    const allKeys = Array.from(grid.keys());
    const preFillCount = Math.ceil(allKeys.length * 0.55);
    const shuffled = [...allKeys].sort(() => Math.random() - 0.5);
    const preFilledMap = new Map<string, string>();
    for (const key of shuffled.slice(0, preFillCount)) {
      const cell = grid.get(key);
      if (cell) preFilledMap.set(key, cell.letter);
    }
    return preFilledMap;
  }, [grid]);

  const [userInput, setUserInput] = useState<Map<string, string>>(new Map(preFilled));
  const [selectedWord, setSelectedWord] = useState<number>(0);
  const [submitted, setSubmitted] = useState(false);
  const inputRefs = useRef<Map<string, HTMLInputElement>>(new Map());

  const handleCellInput = useCallback((key: string, value: string, r: number, c: number) => {
    if (submitted || preFilled.has(key)) return;
    const newInput = new Map(userInput);
    const letter = value.toUpperCase().slice(-1);
    newInput.set(key, letter);
    setUserInput(newInput);

    if (letter && words[selectedWord]) {
      const w = words[selectedWord];
      const nextR = w.direction === 'across' ? r : r + 1;
      const nextC = w.direction === 'across' ? c + 1 : c;
      const nextKey = `${nextR},${nextC}`;
      const nextInput = inputRefs.current.get(nextKey);
      if (nextInput) nextInput.focus();
    }
  }, [userInput, submitted, words, selectedWord, preFilled]);

  const handleSubmit = useCallback(() => {
    setSubmitted(true);
    let correctWords = 0;
    for (const word of words) {
      let wordCorrect = true;
      for (let i = 0; i < word.word.length; i++) {
        const r = word.direction === 'across' ? word.row : word.row + i;
        const c = word.direction === 'across' ? word.col + i : word.col;
        if ((userInput.get(`${r},${c}`) ?? '') !== word.word[i]) {
          wordCorrect = false;
          break;
        }
      }
      if (wordCorrect) correctWords++;
    }
    const score = calculateGameScore(correctWords, words.length);
    setTimeout(() => onComplete(score, correctWords, words.length), 2000);
  }, [words, userInput, onComplete]);

  const handleHint = useCallback(() => {
    if (!onUseHint) return;
    const success = onUseHint();
    if (!success) return;

    // Fill one empty cell with the correct letter
    const emptyKeys = Array.from(grid.keys()).filter((key) => !userInput.get(key) && !preFilled.has(key));
    if (emptyKeys.length > 0) {
      const key = emptyKeys[Math.floor(Math.random() * emptyKeys.length)];
      const cell = grid.get(key);
      if (cell) {
        const newInput = new Map(userInput);
        newInput.set(key, cell.letter);
        setUserInput(newInput);
      }
    }
  }, [onUseHint, grid, userInput, preFilled]);

  const filledCount = useMemo(() => {
    let count = 0;
    grid.forEach((_, key) => { if (userInput.get(key)) count++; });
    return count;
  }, [userInput, grid]);

  const selectedCells = useMemo(() => {
    if (!words[selectedWord]) return new Set<string>();
    const w = words[selectedWord];
    const cells = new Set<string>();
    for (let i = 0; i < w.word.length; i++) {
      const r = w.direction === 'across' ? w.row : w.row + i;
      const c = w.direction === 'across' ? w.col + i : w.col;
      cells.add(`${r},${c}`);
    }
    return cells;
  }, [words, selectedWord]);

  const cellSize = Math.min(36, Math.floor((window.innerWidth - 64) / gridSize.cols));

  return (
    <div className="flex flex-col h-full">
      {/* Minimal counter + hint */}
      <div className="flex items-center justify-between mb-3">
        <div className="px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/[0.08]">
          <span className="text-xs font-medium text-text-muted">{filledCount}/{grid.size}</span>
        </div>
        <div className="flex items-center gap-2">
          {onUseHint && (hintsRemaining ?? 0) > 0 && !submitted && (
            <motion.button
              onClick={handleHint}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-lavender/10 border border-lavender/20 text-xs text-lavender hover:bg-lavender/15 transition-colors"
            >
              <HelpCircle className="w-3 h-3" />
              Hint ({HINT_COST} XP)
            </motion.button>
          )}
        </div>
      </div>

      {/* Grid */}
      <div className="flex-shrink-0 overflow-auto flex justify-center mb-3 py-2">
        <div
          className="inline-grid gap-[2px] p-2 rounded-xl bg-elevated/40 border border-white/[0.04]"
          style={{
            gridTemplateColumns: `repeat(${gridSize.cols}, ${cellSize}px)`,
            gridTemplateRows: `repeat(${gridSize.rows}, ${cellSize}px)`,
          }}
        >
          {Array.from({ length: gridSize.rows }, (_, r) =>
            Array.from({ length: gridSize.cols }, (_, c) => {
              const key = `${r},${c}`;
              const cell = grid.get(key);
              if (!cell) return <div key={key} />;

              const isSelected = selectedCells.has(key);
              const userLetter = userInput.get(key) ?? '';
              const isCorrect = submitted && userLetter === cell.letter;
              const isWrong = submitted && userLetter !== '' && userLetter !== cell.letter;
              const isEmpty = submitted && userLetter === '';
              const isPreFilled = preFilled.has(key);

              return (
                <div
                  key={key}
                  className={`relative border rounded flex items-center justify-center cursor-pointer transition-all duration-150 ${
                    submitted
                      ? isCorrect
                        ? 'bg-sage/12 border-sage/25'
                        : isWrong
                        ? 'bg-amber-500/10 border-amber-500/20'
                        : isEmpty
                        ? 'bg-amber-500/5 border-amber-500/10'
                        : 'bg-elevated/60 border-white/[0.06]'
                      : isPreFilled
                      ? 'bg-lavender/8 border-lavender/15'
                      : isSelected
                      ? 'bg-golden/8 border-golden/25 shadow-sm shadow-golden/10'
                      : 'bg-elevated/70 border-white/[0.06] hover:border-white/10'
                  }`}
                  style={{ width: cellSize, height: cellSize }}
                  onClick={() => {
                    if (!submitted && cell.wordIndices.length > 0) setSelectedWord(cell.wordIndices[0]);
                  }}
                >
                  {cell.number && (
                    <span className="absolute top-0 left-0.5 text-[7px] text-text-muted/60 leading-none font-medium">
                      {cell.number}
                    </span>
                  )}
                  {submitted ? (
                    <span className={`text-xs font-display font-bold ${
                      isCorrect ? 'text-sage' : 'text-amber-400'
                    }`}>
                      {isWrong || isEmpty ? cell.letter : userLetter}
                    </span>
                  ) : isPreFilled ? (
                    <span className="text-xs font-display font-bold text-lavender/80">{userLetter}</span>
                  ) : (
                    <input
                      ref={(el) => { if (el) inputRefs.current.set(key, el); }}
                      type="text"
                      maxLength={1}
                      value={userLetter}
                      onChange={(e) => handleCellInput(key, e.target.value, r, c)}
                      onFocus={() => { if (cell.wordIndices.length > 0) setSelectedWord(cell.wordIndices[0]); }}
                      className="w-full h-full bg-transparent text-center text-xs font-display font-bold text-text-primary focus:outline-none focus:bg-golden/8 rounded"
                    />
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Clues */}
      <div className="flex-1 overflow-y-auto min-h-0 mb-3 space-y-0.5">
        {words.map((word, i) => (
          <button
            key={i}
            onClick={() => setSelectedWord(i)}
            className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-all duration-150 ${
              selectedWord === i
                ? 'bg-golden/8 text-golden border border-golden/15'
                : 'text-text-secondary hover:text-text-primary hover:bg-white/[0.02] border border-transparent'
            }`}
          >
            <span className="font-display font-bold text-text-muted mr-1.5">{i + 1}{word.direction === 'across' ? 'A' : 'D'}.</span>
            {word.clue}
            <span className="text-text-muted/50 ml-1">({word.word.length})</span>
          </button>
        ))}
      </div>

      {/* Submit */}
      {!submitted ? (
        <motion.button
          onClick={handleSubmit}
          whileHover={{ scale: 1.02, y: -1 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-sunrise to-golden text-base font-semibold font-display shadow-sunrise border border-sunrise/20 text-white"
        >
          Check Answers <ArrowRight className="w-4 h-4" />
        </motion.button>
      ) : (
        <AnimatePresence>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-golden/10 border border-golden/20">
              <Sparkles className="w-4 h-4 text-golden" />
              <span className="text-sm font-display font-bold text-golden">Done!</span>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}

export default CrosswordGame;
