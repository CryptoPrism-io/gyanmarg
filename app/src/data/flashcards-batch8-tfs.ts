import type { SpacedRepetitionCard } from '@/types';

export const thinkingFastSlowFlashcards: SpacedRepetitionCard[] = [
  // System 1 vs System 2
  {
    id: 'fc-tfs-001',
    front: 'What is System 1 thinking according to Kahneman?',
    back: 'System 1 is fast, automatic, intuitive, and effortless thinking. It operates unconsciously, uses heuristics, and is responsible for quick judgments, emotional reactions, and routine decisions.',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'beginner',
    tags: ['kahneman', 'cognitive-psychology', 'system-1', 'dual-process-theory']
  },
  {
    id: 'fc-tfs-002',
    front: 'What is System 2 thinking according to Kahneman?',
    back: 'System 2 is slow, deliberate, analytical, and effortful thinking. It requires conscious attention, handles complex computations, and is responsible for logical reasoning, self-control, and careful decision-making.',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'beginner',
    tags: ['kahneman', 'cognitive-psychology', 'system-2', 'dual-process-theory']
  },
  {
    id: 'fc-tfs-003',
    front: 'Why does System 2 often accept the suggestions of System 1?',
    back: 'System 2 is inherently lazy and conserves mental energy. It tends to endorse the intuitive impressions of System 1 without rigorous scrutiny, especially when we are busy, tired, or cognitively depleted.',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['kahneman', 'cognitive-psychology', 'mental-effort', 'cognitive-ease']
  },
  {
    id: 'fc-tfs-004',
    front: 'What is "cognitive ease" and how does it affect our judgments?',
    back: 'Cognitive ease is the subjective experience of mental fluency. When something feels easy to process (familiar, clear, repeated), we tend to believe it is true, good, and safe. This can lead to accepting false information that is presented fluently.',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['kahneman', 'cognitive-psychology', 'cognitive-ease', 'fluency']
  },

  // WYSIATI
  {
    id: 'fc-tfs-005',
    front: 'What does WYSIATI stand for and what does it mean?',
    back: 'WYSIATI stands for "What You See Is All There Is." It describes System 1\'s tendency to construct coherent stories from available information, ignoring what we don\'t know. We jump to conclusions based on limited evidence without considering missing information.',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['kahneman', 'cognitive-psychology', 'wysiati', 'decision-making']
  },
  {
    id: 'fc-tfs-006',
    front: 'How does WYSIATI contribute to overconfidence?',
    back: 'WYSIATI makes us overconfident because we focus only on evidence we have, constructing the best possible story from it. The consistency of the story matters more than completeness. Since we don\'t consider what we don\'t know, our confidence far exceeds the actual quality of our evidence.',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'advanced',
    tags: ['kahneman', 'cognitive-psychology', 'wysiati', 'overconfidence']
  },

  // Anchoring
  {
    id: 'fc-tfs-007',
    front: 'What is the anchoring effect?',
    back: 'Anchoring is a cognitive bias where people rely too heavily on the first piece of information they encounter (the "anchor") when making decisions. Subsequent judgments are made by adjusting away from this anchor, but adjustments are typically insufficient.',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'beginner',
    tags: ['kahneman', 'cognitive-bias', 'anchoring', 'heuristics']
  },
  {
    id: 'fc-tfs-008',
    front: 'In Kahneman\'s wheel-of-fortune experiment, how did arbitrary numbers affect estimates of African UN membership?',
    back: 'Participants who saw the wheel stop at 10 estimated 25% African countries in the UN; those who saw 65 estimated 45%. Even clearly random, irrelevant numbers serve as anchors that significantly influence subsequent numerical estimates.',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['kahneman', 'cognitive-bias', 'anchoring', 'research']
  },

  // Availability Heuristic
  {
    id: 'fc-tfs-009',
    front: 'What is the availability heuristic?',
    back: 'The availability heuristic is a mental shortcut where we estimate the frequency or probability of events based on how easily examples come to mind. Dramatic, recent, or emotionally charged events are overestimated because they are more mentally available.',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'beginner',
    tags: ['kahneman', 'cognitive-bias', 'availability-heuristic', 'heuristics']
  },
  {
    id: 'fc-tfs-010',
    front: 'Why do people overestimate risks from plane crashes compared to car accidents?',
    back: 'Plane crashes are vivid, heavily covered by media, and emotionally memorable, making them highly "available" in memory. Car accidents, though statistically far more dangerous, are routine and less memorable. The availability heuristic leads us to judge risk by mental ease of recall rather than actual statistics.',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['kahneman', 'cognitive-bias', 'availability-heuristic', 'risk-perception']
  },

  // Representativeness Heuristic
  {
    id: 'fc-tfs-011',
    front: 'What is the representativeness heuristic?',
    back: 'The representativeness heuristic is judging probability by how well something matches a prototype or stereotype. We assume things that look similar share deep properties, often ignoring base rates and statistical information.',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'beginner',
    tags: ['kahneman', 'cognitive-bias', 'representativeness', 'heuristics']
  },
  {
    id: 'fc-tfs-012',
    front: 'What is the "Linda Problem" and what does it demonstrate?',
    back: 'Linda is described as a philosophy graduate concerned with social justice. People judge "Linda is a bank teller and feminist" as MORE probable than "Linda is a bank teller" alone. This demonstrates the conjunction fallacy—the illogical belief that a specific condition is more probable than a general one—caused by representativeness overriding logic.',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['kahneman', 'cognitive-bias', 'representativeness', 'conjunction-fallacy']
  },
  {
    id: 'fc-tfs-013',
    front: 'What is base rate neglect?',
    back: 'Base rate neglect is the tendency to ignore general statistical information (base rates) in favor of specific descriptive information. When judging probability, we focus on how representative something seems rather than how common it actually is in the population.',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['kahneman', 'cognitive-bias', 'base-rate-neglect', 'statistics']
  },

  // Prospect Theory
  {
    id: 'fc-tfs-014',
    front: 'What is Prospect Theory?',
    back: 'Prospect Theory, developed by Kahneman and Tversky, describes how people make decisions under risk. Unlike expected utility theory, it accounts for reference points, loss aversion, and diminishing sensitivity. Choices are evaluated as gains or losses from a reference point, not as final states.',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['kahneman', 'prospect-theory', 'decision-making', 'behavioral-economics']
  },
  {
    id: 'fc-tfs-015',
    front: 'What is loss aversion and how strong is the effect?',
    back: 'Loss aversion is the finding that losses hurt approximately twice as much as equivalent gains feel good. A loss of $100 causes more psychological pain than the pleasure from gaining $100. This asymmetry profoundly influences decision-making, risk-taking, and negotiations.',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'beginner',
    tags: ['kahneman', 'prospect-theory', 'loss-aversion', 'behavioral-economics']
  },
  {
    id: 'fc-tfs-016',
    front: 'What is diminishing sensitivity in Prospect Theory?',
    back: 'Diminishing sensitivity means the subjective difference between $100 and $200 feels larger than between $1,100 and $1,200. Our psychological response to changes diminishes as we move further from the reference point. This applies to both gains and losses.',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['kahneman', 'prospect-theory', 'diminishing-sensitivity', 'value-function']
  },
  {
    id: 'fc-tfs-017',
    front: 'How does the reference point affect our perception of outcomes?',
    back: 'The same objective outcome can be perceived as a gain or loss depending on our reference point. A salary of $60,000 feels like a gain if you expected $50,000, but a loss if you expected $70,000. We evaluate outcomes relative to expectations and status quo, not in absolute terms.',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['kahneman', 'prospect-theory', 'reference-point', 'framing']
  },

  // Framing Effects
  {
    id: 'fc-tfs-018',
    front: 'What are framing effects?',
    back: 'Framing effects occur when the way information is presented influences decisions, even when the underlying facts are identical. "90% survival rate" sounds better than "10% mortality rate" though they mean the same thing. Framing triggers different emotional responses and alters choices.',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'beginner',
    tags: ['kahneman', 'framing-effects', 'decision-making', 'cognitive-bias']
  },
  {
    id: 'fc-tfs-019',
    front: 'How does framing affect medical decisions in the Asian disease problem?',
    back: 'When a program is framed as "saving 200 of 600 people," most prefer it. When framed as "400 people will die," most prefer a risky alternative. The outcomes are identical, but gain framing promotes risk aversion while loss framing promotes risk seeking.',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'advanced',
    tags: ['kahneman', 'framing-effects', 'risk-aversion', 'medical-decisions']
  },

  // Overconfidence
  {
    id: 'fc-tfs-020',
    front: 'What is the overconfidence bias?',
    back: 'Overconfidence bias is our excessive confidence in our own answers, judgments, and predictions. We overestimate our knowledge, underestimate uncertainty, and believe our predictions are more accurate than they actually are. It\'s one of the most robust and damaging cognitive biases.',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'beginner',
    tags: ['kahneman', 'cognitive-bias', 'overconfidence', 'decision-making']
  },
  {
    id: 'fc-tfs-021',
    front: 'What is the planning fallacy?',
    back: 'The planning fallacy is the tendency to underestimate the time, costs, and risks of future actions while overestimating their benefits. We focus on our specific plan, ignoring base rates of similar projects. Most projects run over budget and over time due to this optimistic bias.',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['kahneman', 'planning-fallacy', 'overconfidence', 'project-management']
  },
  {
    id: 'fc-tfs-022',
    front: 'What is the "inside view" vs "outside view" in decision-making?',
    back: 'The inside view focuses on the specific case, its unique features, and our detailed plans. The outside view considers the base rate—how similar projects typically turn out. Kahneman recommends taking the outside view (reference class forecasting) to counter the planning fallacy and overconfidence.',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'advanced',
    tags: ['kahneman', 'planning-fallacy', 'reference-class-forecasting', 'decision-making']
  },

  // Peak-End Rule and Memory
  {
    id: 'fc-tfs-023',
    front: 'What is the peak-end rule?',
    back: 'The peak-end rule states that we judge past experiences based on the emotional peak (most intense moment) and the ending, not the total sum or average of the experience. A painful medical procedure with a less painful ending is remembered more favorably than a shorter but abruptly ending one.',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['kahneman', 'peak-end-rule', 'memory', 'experienced-utility']
  },
  {
    id: 'fc-tfs-024',
    front: 'What is duration neglect?',
    back: 'Duration neglect is our tendency to ignore how long an experience lasted when evaluating it. A 30-minute painful experience and a 60-minute one with the same peak and end are remembered similarly. The "remembering self" cares about peaks and endings, not total duration.',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['kahneman', 'duration-neglect', 'memory', 'peak-end-rule']
  },

  // Experiencing Self vs Remembering Self
  {
    id: 'fc-tfs-025',
    front: 'What is the difference between the experiencing self and the remembering self?',
    back: 'The experiencing self lives in the present and knows only the current moment. The remembering self creates stories about the past to inform future decisions. These two selves often disagree—what makes us happy moment-to-moment differs from what creates satisfying memories.',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['kahneman', 'experiencing-self', 'remembering-self', 'well-being']
  },
  {
    id: 'fc-tfs-026',
    front: 'Why might a wonderful vacation be poorly remembered?',
    back: 'If a vacation ends badly (lost luggage, flight delays, argument), the remembering self will judge the entire experience negatively despite days of enjoyment. The peak-end rule means the ending disproportionately shapes our memory, potentially ruining recollection of an objectively good experience.',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['kahneman', 'remembering-self', 'peak-end-rule', 'memory']
  },

  // Heuristics and Substitution
  {
    id: 'fc-tfs-027',
    front: 'What is attribute substitution?',
    back: 'Attribute substitution occurs when we face a difficult question and unconsciously answer an easier one instead. Asked "How happy are you with life?" we might answer "How do I feel right now?" The substitution happens automatically and without awareness.',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'advanced',
    tags: ['kahneman', 'heuristics', 'attribute-substitution', 'system-1']
  },
  {
    id: 'fc-tfs-028',
    front: 'What is the affect heuristic?',
    back: 'The affect heuristic is using our emotional response to something as a shortcut for judgments about it. If we like something, we judge it as having more benefits and fewer risks. Our feelings substitute for careful analysis of actual probabilities and outcomes.',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['kahneman', 'affect-heuristic', 'emotions', 'risk-perception']
  },

  // Regression to the Mean
  {
    id: 'fc-tfs-029',
    front: 'What is regression to the mean?',
    back: 'Regression to the mean is the statistical phenomenon where extreme observations tend to be followed by more moderate ones. An unusually good performance is likely followed by a worse one, and vice versa—not due to causation but because extreme events are partly due to chance.',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['kahneman', 'statistics', 'regression-to-mean', 'probability']
  },
  {
    id: 'fc-tfs-030',
    front: 'Why do we fail to recognize regression to the mean and create false causal stories?',
    back: 'System 1 compulsively seeks causal explanations. When performance declines after praise or improves after criticism, we credit the feedback rather than recognizing statistical regression. This leads to the false belief that punishment works better than reward.',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'advanced',
    tags: ['kahneman', 'regression-to-mean', 'causation', 'feedback']
  },

  // Hindsight and Outcome Bias
  {
    id: 'fc-tfs-031',
    front: 'What is hindsight bias?',
    back: 'Hindsight bias is the "I-knew-it-all-along" effect—our tendency to see past events as having been predictable, even when they weren\'t. Once we know an outcome, we can\'t accurately remember our prior uncertainty, leading us to judge past decisions unfairly.',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'beginner',
    tags: ['kahneman', 'hindsight-bias', 'memory', 'decision-making']
  },
  {
    id: 'fc-tfs-032',
    front: 'What is outcome bias?',
    back: 'Outcome bias is judging the quality of a decision by its outcome rather than by the quality of the decision-making process at the time. A doctor who made a reasonable decision that led to a bad outcome is judged more harshly than one whose poor decision happened to work out.',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['kahneman', 'outcome-bias', 'decision-making', 'hindsight']
  },

  // The Illusion of Skill
  {
    id: 'fc-tfs-033',
    front: 'What is the illusion of skill in stock picking?',
    back: 'Kahneman found that year-to-year correlation of returns for individual investment advisors was essentially zero—pure chance. Despite this, professionals maintained complete confidence in their abilities. The industry rewards luck while creating persistent illusions of skill.',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'advanced',
    tags: ['kahneman', 'illusion-of-skill', 'investing', 'overconfidence']
  },
  {
    id: 'fc-tfs-034',
    front: 'Why do experts often perform worse than simple algorithms?',
    back: 'Experts are inconsistent—their judgments vary based on mood, fatigue, and recent cases. They overweight vivid information and their intuitions. Simple algorithms, using just a few predictive variables weighted equally, often outperform experts because they are perfectly consistent and immune to noise.',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'advanced',
    tags: ['kahneman', 'expert-judgment', 'algorithms', 'prediction']
  },

  // Priming
  {
    id: 'fc-tfs-035',
    front: 'What is priming and how does it affect behavior?',
    back: 'Priming is when exposure to a stimulus influences response to subsequent stimuli, without conscious awareness. Reading words related to old age makes people walk slower. Money primes make people more selfish. Our behavior is constantly influenced by environmental cues we don\'t notice.',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['kahneman', 'priming', 'unconscious-influence', 'system-1']
  },

  // Sunk Cost Fallacy
  {
    id: 'fc-tfs-036',
    front: 'How does loss aversion relate to the sunk cost fallacy?',
    back: 'The sunk cost fallacy—continuing to invest in something because of past investments—stems from loss aversion. Abandoning a project means accepting that past investments are losses. We irrationally continue failing ventures to avoid the pain of acknowledging wasted resources.',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['kahneman', 'sunk-cost-fallacy', 'loss-aversion', 'decision-making']
  },

  // Narrow Framing
  {
    id: 'fc-tfs-037',
    front: 'What is narrow framing and why is it problematic?',
    back: 'Narrow framing is evaluating each decision in isolation rather than considering the aggregate of all decisions. This leads to excessive risk aversion for small gambles. If you face many small positive-expected-value bets, you should accept them all, but narrow framing makes each feel too risky.',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'advanced',
    tags: ['kahneman', 'narrow-framing', 'risk-aversion', 'decision-making']
  },

  // Practical Applications
  {
    id: 'fc-tfs-038',
    front: 'What is a "premortem" and how does it counter overconfidence?',
    back: 'A premortem imagines a project has failed and asks the team to explain why. This legitimizes doubt, overcomes groupthink, and surfaces risks the planning process ignored. It counters overconfidence by making failure scenarios mentally available and concrete.',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['kahneman', 'premortem', 'planning-fallacy', 'decision-making']
  },
  {
    id: 'fc-tfs-039',
    front: 'How can understanding System 1 and System 2 improve decision-making?',
    back: 'Recognize when System 1 is operating and might lead you astray. For important decisions: slow down, engage System 2, seek disconfirming evidence, consider base rates, use reference class forecasting, and create environments that support better choices. Perfect rationality is impossible, but we can create "choice architecture" to reduce errors.',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'advanced',
    tags: ['kahneman', 'decision-making', 'debiasing', 'practical-applications']
  },
  {
    id: 'fc-tfs-040',
    front: 'What is the "halo effect" and how does it distort our judgments?',
    back: 'The halo effect is the tendency for an impression in one area to influence opinion in another. If someone is attractive, we assume they are also intelligent and kind. If a company succeeds, we attribute it to brilliant leadership. Initial impressions create a coherent story that colors all subsequent judgments.',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'beginner',
    tags: ['kahneman', 'halo-effect', 'cognitive-bias', 'first-impressions']
  }
];
