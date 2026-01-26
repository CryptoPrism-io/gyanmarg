import type { SpacedRepetitionCard } from '@/types';

export const criticalThinkingFlashcards: SpacedRepetitionCard[] = [
  // Logical Fallacies
  {
    id: 'fc-ct-001',
    front: 'What is the Ad Hominem fallacy?',
    back: 'Attacking the person making the argument rather than the argument itself. Example: "You can\'t trust his economic policy because he\'s never run a business." The person\'s background doesn\'t automatically invalidate their argument.',
    category: 'Master Synthesis',
    source: 'Critical Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'beginner',
    tags: ['critical-thinking', 'logic', 'fallacies']
  },
  {
    id: 'fc-ct-002',
    front: 'What is the Straw Man fallacy?',
    back: 'Misrepresenting someone\'s argument to make it easier to attack. Instead of addressing the actual position, you create a weaker, distorted version. Example: Person A says "We should have some regulations on X." Person B responds: "Why do you want to ban X entirely?"',
    category: 'Master Synthesis',
    source: 'Critical Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'beginner',
    tags: ['critical-thinking', 'logic', 'fallacies']
  },
  {
    id: 'fc-ct-003',
    front: 'What is a False Dichotomy (False Dilemma)?',
    back: 'Presenting only two options when more exist. "You\'re either with us or against us" ignores neutrality, partial agreement, or alternative positions. Real-world issues rarely have only two possible stances.',
    category: 'Master Synthesis',
    source: 'Critical Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'beginner',
    tags: ['critical-thinking', 'logic', 'fallacies']
  },
  {
    id: 'fc-ct-004',
    front: 'What is the Appeal to Authority fallacy?',
    back: 'Claiming something is true because an authority figure said it, especially when: (1) the authority isn\'t an expert in the relevant field, (2) experts disagree, or (3) no supporting evidence is provided. Expertise increases credibility but doesn\'t guarantee truth.',
    category: 'Master Synthesis',
    source: 'Critical Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['critical-thinking', 'logic', 'fallacies']
  },
  {
    id: 'fc-ct-005',
    front: 'What is the Slippery Slope fallacy?',
    back: 'Arguing that one action will inevitably lead to extreme consequences without demonstrating the causal chain. "If we allow X, then Y will happen, then Z." Valid only when each step is shown to be probable, not just possible.',
    category: 'Master Synthesis',
    source: 'Critical Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['critical-thinking', 'logic', 'fallacies']
  },
  {
    id: 'fc-ct-006',
    front: 'What is Confirmation Bias?',
    back: 'The tendency to search for, interpret, and remember information that confirms pre-existing beliefs while ignoring contradictory evidence. Combat it by actively seeking disconfirming evidence and asking "What would change my mind?"',
    category: 'Master Synthesis',
    source: 'Critical Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'beginner',
    tags: ['critical-thinking', 'bias', 'reasoning']
  },
  {
    id: 'fc-ct-007',
    front: 'What is the Bandwagon fallacy (Appeal to Popularity)?',
    back: 'Arguing something is true or good because many people believe it or do it. "Everyone is buying this product, so it must be the best." Popularity doesn\'t determine truth or quality - millions of people can be wrong.',
    category: 'Master Synthesis',
    source: 'Critical Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'beginner',
    tags: ['critical-thinking', 'logic', 'fallacies']
  },
  {
    id: 'fc-ct-008',
    front: 'What is the Tu Quoque (Whataboutism) fallacy?',
    back: 'Deflecting criticism by pointing to the critic\'s own behavior. "How can you tell me not to smoke when you used to smoke?" The critic\'s hypocrisy doesn\'t invalidate the argument itself - evaluate the argument on its own merits.',
    category: 'Master Synthesis',
    source: 'Critical Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['critical-thinking', 'logic', 'fallacies']
  },

  // Deductive vs Inductive Reasoning
  {
    id: 'fc-ct-009',
    front: 'What is the difference between deductive and inductive reasoning?',
    back: 'DEDUCTIVE: Moves from general premises to specific conclusions. If premises are true, conclusion must be true. "All mammals are warm-blooded. Dogs are mammals. Therefore, dogs are warm-blooded." INDUCTIVE: Moves from specific observations to general conclusions. Conclusion is probable, not certain. "Every swan I\'ve seen is white, so all swans are probably white."',
    category: 'Master Synthesis',
    source: 'Critical Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['critical-thinking', 'logic', 'reasoning']
  },
  {
    id: 'fc-ct-010',
    front: 'What makes a deductive argument valid vs sound?',
    back: 'VALID: The conclusion logically follows from the premises (structure is correct). SOUND: The argument is valid AND all premises are actually true. An argument can be valid but unsound: "All birds can fly. Penguins are birds. Therefore, penguins can fly." (Valid structure, false premise)',
    category: 'Master Synthesis',
    source: 'Critical Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['critical-thinking', 'logic', 'deduction']
  },
  {
    id: 'fc-ct-011',
    front: 'What is abductive reasoning?',
    back: 'Reasoning to the best explanation. Given observations, you infer the most likely explanation. "The grass is wet. It probably rained." Unlike deduction (certain) or induction (probable from patterns), abduction generates hypotheses. Scientists use it to form theories, doctors to diagnose.',
    category: 'Master Synthesis',
    source: 'Critical Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'advanced',
    tags: ['critical-thinking', 'logic', 'reasoning']
  },

  // Argument Analysis
  {
    id: 'fc-ct-012',
    front: 'What are the three essential components of an argument?',
    back: '1. CLAIM (Conclusion): The main point being argued. 2. EVIDENCE (Premises): Facts, data, or reasons supporting the claim. 3. WARRANT: The logical connection explaining how the evidence supports the claim. Strong arguments have clear claims, solid evidence, and valid warrants.',
    category: 'Master Synthesis',
    source: 'Critical Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'beginner',
    tags: ['critical-thinking', 'arguments', 'analysis']
  },
  {
    id: 'fc-ct-013',
    front: 'What is a hidden assumption in an argument?',
    back: 'An unstated premise that must be true for the argument to work. "She\'s a doctor, so she must be wealthy." Hidden assumption: All doctors are wealthy. Identifying hidden assumptions reveals where arguments may fail and opens them to challenge.',
    category: 'Master Synthesis',
    source: 'Critical Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['critical-thinking', 'arguments', 'assumptions']
  },
  {
    id: 'fc-ct-014',
    front: 'How do you evaluate the strength of an inductive argument?',
    back: 'Consider: (1) Sample size - larger is stronger, (2) Sample representativeness - does it reflect the population? (3) Absence of counterexamples, (4) Relevance of evidence to conclusion, (5) Degree of conclusion - "some" is easier to support than "all".',
    category: 'Master Synthesis',
    source: 'Critical Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'advanced',
    tags: ['critical-thinking', 'arguments', 'induction']
  },

  // Evidence Evaluation
  {
    id: 'fc-ct-015',
    front: 'What criteria should you use to evaluate source credibility?',
    back: '1. EXPERTISE: Does the source have relevant qualifications? 2. BIAS: What motivations might influence them? 3. TRACK RECORD: Have they been reliable before? 4. CORROBORATION: Do other credible sources agree? 5. TRANSPARENCY: Do they show their evidence and reasoning? 6. RECENCY: Is the information current?',
    category: 'Master Synthesis',
    source: 'Critical Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['critical-thinking', 'evidence', 'credibility']
  },
  {
    id: 'fc-ct-016',
    front: 'What is the difference between correlation and causation?',
    back: 'CORRELATION: Two things occur together or vary together. CAUSATION: One thing directly causes the other. Correlation doesn\'t prove causation because: (1) Coincidence, (2) Reverse causation (B causes A, not A causes B), (3) Common cause (C causes both A and B). Need controlled experiments or strong theoretical basis.',
    category: 'Master Synthesis',
    source: 'Critical Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['critical-thinking', 'evidence', 'causation']
  },
  {
    id: 'fc-ct-017',
    front: 'What is anecdotal evidence and why is it weak?',
    back: 'Evidence based on personal stories or isolated examples rather than systematic research. Weaknesses: (1) Small sample size, (2) Subject to memory bias, (3) Not representative, (4) Cherry-picked to support a conclusion, (5) No control for confounding variables. Useful for generating hypotheses, not proving them.',
    category: 'Master Synthesis',
    source: 'Critical Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'beginner',
    tags: ['critical-thinking', 'evidence', 'reasoning']
  },

  // Socratic Questioning
  {
    id: 'fc-ct-018',
    front: 'What are the six types of Socratic questions?',
    back: '1. CLARIFICATION: "What do you mean by...?" 2. ASSUMPTIONS: "What are you assuming?" 3. EVIDENCE: "How do you know this?" 4. PERSPECTIVES: "What would others say?" 5. IMPLICATIONS: "What follows from this?" 6. META-QUESTIONS: "Why is this question important?" Use these to probe depth of thinking.',
    category: 'Master Synthesis',
    source: 'Critical Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['critical-thinking', 'socratic-method', 'questioning']
  },
  {
    id: 'fc-ct-019',
    front: 'How do you use Socratic questioning on your own beliefs?',
    back: 'Ask yourself: "What evidence supports this belief?" "What would disprove it?" "Where did I get this belief?" "Have I considered alternatives?" "Am I being consistent?" "What are the implications if I\'m wrong?" This self-interrogation prevents intellectual complacency.',
    category: 'Master Synthesis',
    source: 'Critical Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['critical-thinking', 'socratic-method', 'self-reflection']
  },

  // Steel-Manning
  {
    id: 'fc-ct-020',
    front: 'What is steel-manning an argument?',
    back: 'Constructing the strongest possible version of an opposing argument before critiquing it - the opposite of straw-manning. Benefits: (1) Ensures you understand the position, (2) Shows intellectual honesty, (3) Makes your counter-arguments more robust, (4) May reveal valid points you hadn\'t considered.',
    category: 'Master Synthesis',
    source: 'Critical Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['critical-thinking', 'arguments', 'steel-man']
  },
  {
    id: 'fc-ct-021',
    front: 'How do you steel-man an argument effectively?',
    back: '1. Listen/read charitably - assume the best interpretation. 2. Identify the strongest evidence for their position. 3. Consider what a thoughtful advocate would say. 4. Remove weak points that distract from their core claim. 5. Present their argument back - can they agree you\'ve represented them fairly?',
    category: 'Master Synthesis',
    source: 'Critical Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'advanced',
    tags: ['critical-thinking', 'arguments', 'steel-man']
  },

  // Bayesian Thinking
  {
    id: 'fc-ct-022',
    front: 'What is Bayesian thinking in simple terms?',
    back: 'Updating your beliefs based on new evidence. Start with a prior probability (initial belief), then adjust when you get new information. Key insight: The strength of evidence depends on how much more likely it is if your hypothesis is true vs. false. Beliefs should be held with varying degrees of confidence.',
    category: 'Master Synthesis',
    source: 'Critical Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'advanced',
    tags: ['critical-thinking', 'bayesian', 'probability']
  },
  {
    id: 'fc-ct-023',
    front: 'What is the base rate fallacy?',
    back: 'Ignoring how common something is in the population (base rate) when evaluating specific cases. Example: A test is 99% accurate. If the disease affects 1 in 10,000 people, a positive result is still likely a false positive. Always consider: How likely was this BEFORE I got this evidence?',
    category: 'Master Synthesis',
    source: 'Critical Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'advanced',
    tags: ['critical-thinking', 'bayesian', 'fallacies']
  },
  {
    id: 'fc-ct-024',
    front: 'What does "updating on evidence" mean in Bayesian terms?',
    back: 'Revising your probability estimate when you learn new information. Strong evidence should cause large updates; weak evidence, small updates. The direction depends on whether evidence is more consistent with your hypothesis or alternatives. Refusing to update when evidence warrants it is a reasoning error.',
    category: 'Master Synthesis',
    source: 'Critical Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'advanced',
    tags: ['critical-thinking', 'bayesian', 'reasoning']
  },

  // First Principles Reasoning
  {
    id: 'fc-ct-025',
    front: 'What is First Principles thinking?',
    back: 'Breaking down problems to their fundamental truths and building up from there, rather than reasoning by analogy or convention. Ask: "What are we absolutely sure is true?" Strip away assumptions until you reach bedrock facts, then reconstruct solutions. Used by Aristotle, Musk, and many innovators.',
    category: 'Master Synthesis',
    source: 'Critical Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['critical-thinking', 'first-principles', 'reasoning']
  },
  {
    id: 'fc-ct-026',
    front: 'How do you apply First Principles thinking?',
    back: '1. Identify and question every assumption. 2. Ask "Why?" repeatedly until you hit fundamental truths. 3. Determine what you KNOW vs. what you ASSUME. 4. Create new solutions from the ground up. Example: Instead of "batteries are expensive," ask "What are batteries made of? What do those materials cost? Why?"',
    category: 'Master Synthesis',
    source: 'Critical Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'advanced',
    tags: ['critical-thinking', 'first-principles', 'problem-solving']
  },
  {
    id: 'fc-ct-027',
    front: 'What is reasoning by analogy and when does it fail?',
    back: 'Drawing conclusions based on similarities to other situations. "X worked there, so it will work here." Fails when: (1) The situations differ in relevant ways, (2) The analogy is superficial, (3) It prevents novel solutions, (4) It imports assumptions uncritically. Useful for quick decisions but not for innovation or unique problems.',
    category: 'Master Synthesis',
    source: 'Critical Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['critical-thinking', 'reasoning', 'analogy']
  },

  // Common Reasoning Errors
  {
    id: 'fc-ct-028',
    front: 'What is the Dunning-Kruger effect?',
    back: 'A cognitive bias where people with low ability at a task overestimate their ability, while experts may underestimate theirs. Those lacking knowledge don\'t know enough to recognize their deficits. Combat it: Seek feedback, embrace uncertainty, remember that confidence doesn\'t equal competence.',
    category: 'Master Synthesis',
    source: 'Critical Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['critical-thinking', 'bias', 'metacognition']
  },
  {
    id: 'fc-ct-029',
    front: 'What is the Halo Effect?',
    back: 'The tendency to let one positive trait influence judgment of unrelated traits. "She\'s attractive, so she must be intelligent and kind." Works negatively too (Horn Effect). Leads to biased evaluations. Combat by evaluating traits independently and seeking specific evidence for each.',
    category: 'Master Synthesis',
    source: 'Critical Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['critical-thinking', 'bias', 'reasoning']
  },
  {
    id: 'fc-ct-030',
    front: 'What is the Sunk Cost Fallacy?',
    back: 'Continuing a course of action because of past investments (time, money, effort) rather than future value. "I\'ve already spent $100 on this, so I should keep going." Rational decisions should only consider future costs and benefits - past costs are gone regardless.',
    category: 'Master Synthesis',
    source: 'Critical Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'beginner',
    tags: ['critical-thinking', 'fallacies', 'decision-making']
  },
  {
    id: 'fc-ct-031',
    front: 'What is Motivated Reasoning?',
    back: 'The tendency to arrive at conclusions we WANT to be true. We unconsciously: seek confirming evidence, apply more scrutiny to unwelcome findings, interpret ambiguous evidence favorably. Ask: "Would I accept this evidence if it supported the opposite conclusion?"',
    category: 'Master Synthesis',
    source: 'Critical Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['critical-thinking', 'bias', 'reasoning']
  },
  {
    id: 'fc-ct-032',
    front: 'What is the Availability Heuristic?',
    back: 'Judging probability based on how easily examples come to mind. Vivid, recent, or emotional events seem more likely. Example: After seeing news about plane crashes, people overestimate flight danger. Combat by seeking actual statistics rather than relying on memorable instances.',
    category: 'Master Synthesis',
    source: 'Critical Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['critical-thinking', 'bias', 'heuristics']
  },
  {
    id: 'fc-ct-033',
    front: 'What is the Anchoring Bias?',
    back: 'Over-relying on the first piece of information encountered (the anchor) when making decisions. Initial numbers, even random ones, influence subsequent estimates. Example: Seeing a high list price makes a discount seem better. Combat by generating your own estimates before seeing others.',
    category: 'Master Synthesis',
    source: 'Critical Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['critical-thinking', 'bias', 'decision-making']
  },

  // Advanced Reasoning
  {
    id: 'fc-ct-034',
    front: 'What is the Principle of Charity in argumentation?',
    back: 'Interpreting others\' arguments in their strongest, most reasonable form before responding. Assume good faith and intelligence. Benefits: Promotes productive dialogue, prevents straw-manning, reveals the actual points of disagreement, and models intellectual virtue.',
    category: 'Master Synthesis',
    source: 'Critical Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['critical-thinking', 'arguments', 'discourse']
  },
  {
    id: 'fc-ct-035',
    front: 'What is a necessary vs sufficient condition?',
    back: 'NECESSARY: Must be present for the outcome (oxygen is necessary for fire). SUFFICIENT: Guarantees the outcome (being a dog is sufficient for being an animal). Some things are both; many are neither. Confusing these causes logical errors. "Water is necessary for life" doesn\'t mean "Water guarantees life."',
    category: 'Master Synthesis',
    source: 'Critical Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'advanced',
    tags: ['critical-thinking', 'logic', 'reasoning']
  },
  {
    id: 'fc-ct-036',
    front: 'What is the Burden of Proof and who bears it?',
    back: 'The obligation to provide evidence for a claim. Generally borne by: (1) The one making the positive claim, (2) The one proposing change from status quo, (3) The one making the extraordinary claim. "I don\'t have to prove unicorns don\'t exist; you have to prove they do."',
    category: 'Master Synthesis',
    source: 'Critical Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['critical-thinking', 'arguments', 'logic']
  },
  {
    id: 'fc-ct-037',
    front: 'What is the difference between a valid criticism and a mere objection?',
    back: 'VALID CRITICISM: Identifies a genuine flaw that weakens the argument (false premise, logical error, missing evidence). MERE OBJECTION: Expresses disagreement without showing why the argument fails. "I don\'t like your conclusion" vs "Your premise X is false because Y." Effective critique requires specificity.',
    category: 'Master Synthesis',
    source: 'Critical Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'advanced',
    tags: ['critical-thinking', 'arguments', 'critique']
  },
  {
    id: 'fc-ct-038',
    front: 'What is Occam\'s Razor and when should you apply it?',
    back: 'The principle that simpler explanations are preferable to complex ones, all else being equal. Don\'t multiply entities beyond necessity. Apply when: Multiple explanations fit the evidence equally well. Caution: Simpler isn\'t always correct - use it as a tiebreaker, not an absolute rule.',
    category: 'Master Synthesis',
    source: 'Critical Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['critical-thinking', 'reasoning', 'principles']
  },
  {
    id: 'fc-ct-039',
    front: 'What is intellectual humility and why is it essential for good reasoning?',
    back: 'Recognizing the limits of your knowledge and being open to being wrong. Involves: (1) Acknowledging uncertainty, (2) Welcoming correction, (3) Separating ego from beliefs, (4) Treating knowledge as provisional. Essential because: No one knows everything, beliefs need updating, and certainty often signals overconfidence.',
    category: 'Master Synthesis',
    source: 'Critical Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['critical-thinking', 'metacognition', 'intellectual-virtues']
  },
  {
    id: 'fc-ct-040',
    front: 'What questions should you ask to test the quality of your own reasoning?',
    back: '1. "What evidence would change my mind?" 2. "Am I reasoning toward truth or defending a position?" 3. "Would I accept this argument from someone I disagree with?" 4. "What assumptions am I making?" 5. "Have I steel-manned the opposition?" 6. "Am I confusing what I want to be true with what is true?"',
    category: 'Master Synthesis',
    source: 'Critical Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'advanced',
    tags: ['critical-thinking', 'metacognition', 'self-reflection']
  }
];
