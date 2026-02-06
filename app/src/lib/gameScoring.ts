// Generous scoring system — "Always Win" philosophy
// Score = max(rawScore, 60%). Wrong answers get 50% partial credit.

const SCORE_FLOOR = 60;
const PARTIAL_CREDIT = 0.5;

/**
 * Calculate game score with 60% floor and 50% partial credit for wrong answers.
 */
export function calculateGameScore(correct: number, total: number): number {
  if (total === 0) return 100;
  const rawScore = ((correct + (total - correct) * PARTIAL_CREDIT) / total) * 100;
  return Math.round(Math.max(rawScore, SCORE_FLOOR));
}

/**
 * Get positive messaging based on score — no negative words ever.
 */
export function getScoreMessage(score: number): { title: string; subtitle: string } {
  if (score >= 90) return { title: 'Perfect!', subtitle: 'Wisdom master!' };
  if (score >= 70) return { title: 'Great work!', subtitle: 'Well done!' };
  return { title: 'Good effort!', subtitle: "You're growing!" };
}

/**
 * Get feedback for a single answer — always positive.
 */
export function getAnswerFeedback(isCorrect: boolean): { text: string; color: string } {
  if (isCorrect) return { text: 'Correct!', color: 'sage' };
  return { text: 'Almost!', color: 'amber' };
}
