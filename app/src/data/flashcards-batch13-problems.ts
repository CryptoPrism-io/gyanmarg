import type { SpacedRepetitionCard } from '@/types';

export const problemSolvingFlashcards: SpacedRepetitionCard[] = [
  {
    id: 'fc-prob-001',
    front: 'What is the 5 Whys technique and when should you use it?',
    back: 'The 5 Whys is an iterative interrogative technique where you ask "Why?" five times (or more) to drill down to the root cause of a problem. Use it when facing symptoms that keep recurring, to move beyond surface-level fixes to fundamental solutions.',
    category: 'Master Synthesis',
    source: 'Problem Solving',
    pathwayId: 'master-synthesis',
    difficulty: 'beginner',
    tags: ['problem-solving', 'frameworks', 'root-cause-analysis', '5-whys']
  },
  {
    id: 'fc-prob-002',
    front: 'What is the MECE principle and why is it fundamental to structured problem solving?',
    back: 'MECE stands for Mutually Exclusive, Collectively Exhaustive. It means categories should not overlap (mutually exclusive) and together should cover all possibilities (collectively exhaustive). It ensures complete analysis without redundancy, forming the backbone of consulting frameworks.',
    category: 'Master Synthesis',
    source: 'Problem Solving',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['problem-solving', 'frameworks', 'mece', 'mckinsey']
  },
  {
    id: 'fc-prob-003',
    front: 'What is a Fishbone (Ishikawa) diagram and what are its main categories?',
    back: 'A Fishbone diagram visualizes cause-and-effect relationships with the problem as the "head" and causes as "bones." The 6M categories are: Man (people), Machine (equipment), Method (process), Material (inputs), Measurement (data), and Mother Nature (environment).',
    category: 'Master Synthesis',
    source: 'Problem Solving',
    pathwayId: 'master-synthesis',
    difficulty: 'beginner',
    tags: ['problem-solving', 'frameworks', 'fishbone', 'root-cause-analysis']
  },
  {
    id: 'fc-prob-004',
    front: 'What is hypothesis-driven thinking and how does it differ from analysis-first approaches?',
    back: 'Hypothesis-driven thinking starts with a potential answer (hypothesis) then tests it with targeted analysis. Unlike analysis-first approaches that gather all data before concluding, it focuses effort on proving or disproving specific assertions, saving time and resources.',
    category: 'Master Synthesis',
    source: 'Problem Solving',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['problem-solving', 'frameworks', 'hypothesis-driven', 'mckinsey']
  },
  {
    id: 'fc-prob-005',
    front: 'What is problem decomposition and what are the key principles for effective decomposition?',
    back: 'Problem decomposition breaks complex problems into smaller, manageable sub-problems. Key principles: 1) Break down until pieces are solvable, 2) Maintain MECE structure, 3) Identify dependencies between parts, 4) Prioritize high-impact components, 5) Ensure parts can be reassembled into a coherent solution.',
    category: 'Master Synthesis',
    source: 'Problem Solving',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['problem-solving', 'frameworks', 'decomposition', 'thinking']
  },
  {
    id: 'fc-prob-006',
    front: 'What is the McKinsey 7-Step Problem Solving Process?',
    back: '1) Define the problem, 2) Structure the problem (issue tree), 3) Prioritize issues, 4) Develop work plan, 5) Conduct analyses, 6) Synthesize findings, 7) Communicate recommendations. This structured approach ensures rigorous, client-focused solutions.',
    category: 'Master Synthesis',
    source: 'Problem Solving',
    pathwayId: 'master-synthesis',
    difficulty: 'advanced',
    tags: ['problem-solving', 'frameworks', 'mckinsey', 'structured-thinking']
  },
  {
    id: 'fc-prob-007',
    front: 'What is an Issue Tree and how do you construct one?',
    back: 'An Issue Tree breaks a key question into sub-questions in a hierarchical, MECE structure. Construction: 1) State core question at top, 2) Break into 2-5 major branches, 3) Continue subdividing until actionable/analyzable, 4) Ensure each level is MECE, 5) Test for logical flow from question to sub-questions.',
    category: 'Master Synthesis',
    source: 'Problem Solving',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['problem-solving', 'frameworks', 'issue-tree', 'mckinsey']
  },
  {
    id: 'fc-prob-008',
    front: 'What is the difference between a Hypothesis Tree and an Issue Tree?',
    back: 'An Issue Tree breaks down questions into sub-questions (what do we need to know?). A Hypothesis Tree breaks down a hypothesis into supporting arguments (why do we believe this?). Issue trees explore; hypothesis trees prove. Both use MECE structures but serve different phases of problem solving.',
    category: 'Master Synthesis',
    source: 'Problem Solving',
    pathwayId: 'master-synthesis',
    difficulty: 'advanced',
    tags: ['problem-solving', 'frameworks', 'hypothesis-tree', 'issue-tree']
  },
  {
    id: 'fc-prob-009',
    front: 'What is scenario planning and what are its key components?',
    back: 'Scenario planning develops multiple plausible future states to stress-test strategies. Key components: 1) Identify driving forces (trends, uncertainties), 2) Select critical uncertainties as axes, 3) Build 3-4 distinct scenarios, 4) Develop narratives for each, 5) Test strategies against all scenarios, 6) Identify robust options and warning signals.',
    category: 'Master Synthesis',
    source: 'Problem Solving',
    pathwayId: 'master-synthesis',
    difficulty: 'advanced',
    tags: ['problem-solving', 'frameworks', 'scenario-planning', 'strategy']
  },
  {
    id: 'fc-prob-010',
    front: 'What is a Decision Tree and when is it most useful?',
    back: 'A Decision Tree maps choices, chance events, and outcomes in a branching structure. Each node represents a decision (square) or chance event (circle), with branches showing options and probabilities. Most useful for: sequential decisions, quantifiable outcomes, comparing expected values, and visualizing decision logic.',
    category: 'Master Synthesis',
    source: 'Problem Solving',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['problem-solving', 'frameworks', 'decision-trees', 'analysis']
  },
  {
    id: 'fc-prob-011',
    front: 'What is root cause analysis and what distinguishes a root cause from a contributing factor?',
    back: 'Root cause analysis (RCA) identifies the fundamental reason a problem occurred. A root cause is the deepest underlying factor that, if eliminated, prevents recurrence. Contributing factors influence the problem but alone would not cause it. Test: if you remove it, does the problem disappear? If yes, it is a root cause.',
    category: 'Master Synthesis',
    source: 'Problem Solving',
    pathwayId: 'master-synthesis',
    difficulty: 'beginner',
    tags: ['problem-solving', 'frameworks', 'root-cause-analysis', 'thinking']
  },
  {
    id: 'fc-prob-012',
    front: 'What are the three types of problem statements and when should each be used?',
    back: '1) Deviation problems: Something changed from normal (use when performance dropped). 2) Improvement problems: Current state is acceptable but could be better (use for optimization). 3) Innovation problems: Creating something new (use for new products/processes). Each type requires different analytical approaches.',
    category: 'Master Synthesis',
    source: 'Problem Solving',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['problem-solving', 'frameworks', 'problem-definition', 'thinking']
  },
  {
    id: 'fc-prob-013',
    front: 'What is the Pyramid Principle and how does it apply to problem solving?',
    back: 'Barbara Minto\'s Pyramid Principle structures communication with the answer first, supported by grouped arguments. In problem solving: 1) Lead with recommendation, 2) Support with 3-5 key arguments, 3) Back each argument with data. It forces MECE thinking and enables efficient executive communication.',
    category: 'Master Synthesis',
    source: 'Problem Solving',
    pathwayId: 'master-synthesis',
    difficulty: 'advanced',
    tags: ['problem-solving', 'frameworks', 'pyramid-principle', 'communication']
  },
  {
    id: 'fc-prob-014',
    front: 'What is the 80/20 rule (Pareto Principle) in problem solving?',
    back: 'The Pareto Principle states that roughly 80% of effects come from 20% of causes. In problem solving: focus on the vital few issues that drive most impact. Prioritize analysis on high-leverage areas. Avoid exhaustive analysis of low-impact factors. It guides resource allocation for maximum efficiency.',
    category: 'Master Synthesis',
    source: 'Problem Solving',
    pathwayId: 'master-synthesis',
    difficulty: 'beginner',
    tags: ['problem-solving', 'frameworks', 'pareto', 'prioritization']
  },
  {
    id: 'fc-prob-015',
    front: 'What is the difference between correlation and causation in root cause analysis?',
    back: 'Correlation means two variables move together; causation means one actually causes the other. Common errors: assuming correlation implies causation, missing confounding variables, reversing cause and effect. To establish causation: show temporal precedence, mechanism, and rule out alternatives through controlled analysis.',
    category: 'Master Synthesis',
    source: 'Problem Solving',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['problem-solving', 'frameworks', 'root-cause-analysis', 'critical-thinking']
  },
  {
    id: 'fc-prob-016',
    front: 'What is the Kepner-Tregoe Problem Analysis method?',
    back: 'Kepner-Tregoe separates problem analysis into four phases: 1) Situation Appraisal (identify and prioritize concerns), 2) Problem Analysis (find root cause using IS/IS NOT comparisons), 3) Decision Analysis (evaluate alternatives against objectives), 4) Potential Problem Analysis (anticipate future issues). It provides systematic rigor for complex problems.',
    category: 'Master Synthesis',
    source: 'Problem Solving',
    pathwayId: 'master-synthesis',
    difficulty: 'advanced',
    tags: ['problem-solving', 'frameworks', 'kepner-tregoe', 'structured-thinking']
  },
  {
    id: 'fc-prob-017',
    front: 'How do you write a good problem statement?',
    back: 'A good problem statement includes: 1) Specific gap between current and desired state, 2) Measurable impact (quantified if possible), 3) Scope boundaries (what is in/out), 4) Timeframe, 5) Neutral framing (no implied solution). Example: "Customer churn increased from 5% to 12% over 6 months, costing $2M annually."',
    category: 'Master Synthesis',
    source: 'Problem Solving',
    pathwayId: 'master-synthesis',
    difficulty: 'beginner',
    tags: ['problem-solving', 'frameworks', 'problem-definition', 'communication']
  },
  {
    id: 'fc-prob-018',
    front: 'What is the difference between divergent and convergent thinking in problem solving?',
    back: 'Divergent thinking generates many possibilities (brainstorming, exploration, creativity). Convergent thinking narrows to the best solution (analysis, evaluation, selection). Effective problem solving alternates between both: diverge to explore options, converge to decide. Premature convergence misses solutions; endless divergence prevents action.',
    category: 'Master Synthesis',
    source: 'Problem Solving',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['problem-solving', 'frameworks', 'thinking', 'creativity']
  },
  {
    id: 'fc-prob-019',
    front: 'What is a logic tree and what are the two main types?',
    back: 'A logic tree visually organizes thinking in hierarchical branches. Two main types: 1) Why trees (diagnostic): break down causes of a problem, asking "why" at each level. 2) How trees (solution): break down ways to achieve a goal, asking "how" at each level. Both should maintain MECE structure throughout.',
    category: 'Master Synthesis',
    source: 'Problem Solving',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['problem-solving', 'frameworks', 'logic-trees', 'structured-thinking']
  },
  {
    id: 'fc-prob-020',
    front: 'What is the difference between symptomatic and systemic solutions?',
    back: 'Symptomatic solutions address visible effects (quick fixes that may recur). Systemic solutions address root causes within the broader system (lasting change). Example: Treating frequent equipment failures (symptomatic) vs. improving maintenance processes and operator training (systemic). Systemic solutions require deeper analysis but prevent recurrence.',
    category: 'Master Synthesis',
    source: 'Problem Solving',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['problem-solving', 'frameworks', 'root-cause-analysis', 'systems-thinking']
  },
  {
    id: 'fc-prob-021',
    front: 'What is the A3 problem-solving methodology from Toyota?',
    back: 'A3 is a structured problem-solving approach fitting on one A3-sized paper. Sections: 1) Background, 2) Current condition, 3) Goal/Target, 4) Root cause analysis, 5) Countermeasures, 6) Implementation plan, 7) Follow-up. It enforces concise thinking, visual communication, and PDCA (Plan-Do-Check-Act) discipline.',
    category: 'Master Synthesis',
    source: 'Problem Solving',
    pathwayId: 'master-synthesis',
    difficulty: 'advanced',
    tags: ['problem-solving', 'frameworks', 'a3', 'lean']
  },
  {
    id: 'fc-prob-022',
    front: 'What are the key questions to ask when scoping a problem?',
    back: '1) What is the specific problem (not symptoms)? 2) Who is affected and how? 3) What is the impact (quantified)? 4) What is in/out of scope? 5) What constraints exist (time, budget, authority)? 6) What does success look like? 7) What has already been tried? Proper scoping prevents wasted effort and scope creep.',
    category: 'Master Synthesis',
    source: 'Problem Solving',
    pathwayId: 'master-synthesis',
    difficulty: 'beginner',
    tags: ['problem-solving', 'frameworks', 'problem-definition', 'scoping']
  },
  {
    id: 'fc-prob-023',
    front: 'What is the difference between problem solving and decision making?',
    back: 'Problem solving identifies what is causing an undesired situation and how to fix it (diagnostic + prescriptive). Decision making chooses between alternatives to achieve a goal (evaluative + selective). They often overlap: problem solving generates options, decision making selects among them. Different tools suit each phase.',
    category: 'Master Synthesis',
    source: 'Problem Solving',
    pathwayId: 'master-synthesis',
    difficulty: 'beginner',
    tags: ['problem-solving', 'frameworks', 'decision-making', 'thinking']
  },
  {
    id: 'fc-prob-024',
    front: 'What is the "So What?" test in structured problem solving?',
    back: 'The "So What?" test challenges every finding or conclusion to ensure relevance and actionability. Ask: "So what? Why does this matter? What should we do about it?" Findings that cannot answer these questions may be interesting but not useful. It drives toward actionable insights rather than mere data presentation.',
    category: 'Master Synthesis',
    source: 'Problem Solving',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['problem-solving', 'frameworks', 'mckinsey', 'communication']
  },
  {
    id: 'fc-prob-025',
    front: 'What is sensitivity analysis in decision trees and scenario planning?',
    back: 'Sensitivity analysis tests how outcomes change when assumptions vary. Identify key variables, vary them across plausible ranges, observe impact on conclusions. It reveals which assumptions matter most, where more data is needed, and how robust recommendations are. Essential for decisions under uncertainty.',
    category: 'Master Synthesis',
    source: 'Problem Solving',
    pathwayId: 'master-synthesis',
    difficulty: 'advanced',
    tags: ['problem-solving', 'frameworks', 'decision-trees', 'scenario-planning']
  },
  {
    id: 'fc-prob-026',
    front: 'What are common failure modes when using the 5 Whys technique?',
    back: '1) Stopping too early (accepting proximate causes), 2) Following only one causal chain (missing parallel causes), 3) Blame-focused answers ("human error" without asking why it occurred), 4) Unsupported leaps in logic, 5) Not verifying each link with evidence. Counter by: asking "Why else?", requiring evidence, and focusing on systems not people.',
    category: 'Master Synthesis',
    source: 'Problem Solving',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['problem-solving', 'frameworks', '5-whys', 'root-cause-analysis']
  },
  {
    id: 'fc-prob-027',
    front: 'What is the difference between forward and backward reasoning in problem solving?',
    back: 'Forward reasoning starts from known information and works toward the goal (data-driven, exploratory). Backward reasoning starts from the goal and works back to what is needed (goal-driven, focused). Consulting often uses backward reasoning: start with hypothesis, identify what would prove/disprove it, then gather that specific data.',
    category: 'Master Synthesis',
    source: 'Problem Solving',
    pathwayId: 'master-synthesis',
    difficulty: 'advanced',
    tags: ['problem-solving', 'frameworks', 'reasoning', 'hypothesis-driven']
  },
  {
    id: 'fc-prob-028',
    front: 'What is the SCQA framework for problem structuring?',
    back: 'SCQA (Situation, Complication, Question, Answer) structures problem narratives: Situation - stable background context. Complication - what changed or went wrong. Question - the key question this raises. Answer - your recommendation. It creates a compelling story arc that leads logically to your solution.',
    category: 'Master Synthesis',
    source: 'Problem Solving',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['problem-solving', 'frameworks', 'scqa', 'communication']
  },
  {
    id: 'fc-prob-029',
    front: 'What is the difference between a profitability framework and a market entry framework?',
    back: 'Profitability framework diagnoses why profits are low: Revenue (Price x Volume) vs. Costs (Fixed + Variable). Market entry framework evaluates whether to enter a market: Market attractiveness, Competitive dynamics, Company capabilities, Entry strategy. Different problems require different frameworks - never force-fit.',
    category: 'Master Synthesis',
    source: 'Problem Solving',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['problem-solving', 'frameworks', 'mckinsey', 'business-analysis']
  },
  {
    id: 'fc-prob-030',
    front: 'What is the role of "working hypotheses" in structured problem solving?',
    back: 'Working hypotheses are provisional answers that guide investigation. They are not conclusions but starting points to test. Benefits: focus data gathering, enable parallel workstreams, force explicit assumptions. Rules: state clearly, test rigorously, revise based on evidence, be willing to reject if disproven.',
    category: 'Master Synthesis',
    source: 'Problem Solving',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['problem-solving', 'frameworks', 'hypothesis-driven', 'mckinsey']
  },
  {
    id: 'fc-prob-031',
    front: 'What is the "Day 1 Answer" concept in consulting problem solving?',
    back: 'The Day 1 Answer is your best hypothesis on the solution at project start, based on pattern recognition and experience. It is not a final answer but a starting point. Purpose: guide initial analysis, test against data, refine iteratively. Having a Day 1 Answer prevents aimless data gathering and accelerates insight development.',
    category: 'Master Synthesis',
    source: 'Problem Solving',
    pathwayId: 'master-synthesis',
    difficulty: 'advanced',
    tags: ['problem-solving', 'frameworks', 'mckinsey', 'hypothesis-driven']
  },
  {
    id: 'fc-prob-032',
    front: 'How do you prioritize issues in a complex problem using an Impact-Effort matrix?',
    back: 'Plot issues on a 2x2 matrix: Impact (high/low) vs. Effort (high/low). Priority order: 1) High Impact, Low Effort (quick wins - do first), 2) High Impact, High Effort (major projects - plan carefully), 3) Low Impact, Low Effort (fill-ins - if time permits), 4) Low Impact, High Effort (avoid - deprioritize).',
    category: 'Master Synthesis',
    source: 'Problem Solving',
    pathwayId: 'master-synthesis',
    difficulty: 'beginner',
    tags: ['problem-solving', 'frameworks', 'prioritization', 'decision-making']
  },
  {
    id: 'fc-prob-033',
    front: 'What is the DMAIC framework and when is it used?',
    back: 'DMAIC is Six Sigma\'s problem-solving methodology: Define (problem and goals), Measure (current performance), Analyze (root causes), Improve (implement solutions), Control (sustain gains). Used for process improvement when: problem is measurable, process exists but underperforms, data-driven approach is feasible.',
    category: 'Master Synthesis',
    source: 'Problem Solving',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['problem-solving', 'frameworks', 'dmaic', 'six-sigma']
  },
  {
    id: 'fc-prob-034',
    front: 'What is the difference between necessary and sufficient conditions in causal analysis?',
    back: 'Necessary condition: must be present for effect to occur (but alone may not cause it). Sufficient condition: if present, effect will occur (but may not be the only cause). Example: Oxygen is necessary for fire (but not sufficient). A lit match in dry grass is sufficient (but not necessary - other ignition sources exist).',
    category: 'Master Synthesis',
    source: 'Problem Solving',
    pathwayId: 'master-synthesis',
    difficulty: 'advanced',
    tags: ['problem-solving', 'frameworks', 'root-cause-analysis', 'critical-thinking']
  },
  {
    id: 'fc-prob-035',
    front: 'What is driver analysis and how does it support root cause investigation?',
    back: 'Driver analysis identifies factors that most strongly influence an outcome through statistical correlation, regression, or structured comparison. It complements root cause analysis by: quantifying factor importance, revealing unexpected relationships, prioritizing investigation areas. Combine with causal reasoning to distinguish correlation from causation.',
    category: 'Master Synthesis',
    source: 'Problem Solving',
    pathwayId: 'master-synthesis',
    difficulty: 'advanced',
    tags: ['problem-solving', 'frameworks', 'root-cause-analysis', 'analysis']
  },
  {
    id: 'fc-prob-036',
    front: 'What is the distinction between adaptive and technical problems?',
    back: 'Technical problems have known solutions requiring expertise (fix with existing knowledge). Adaptive problems require changes in values, beliefs, or behavior (no known solution, must be learned). Example: Implementing new software is technical; changing organizational culture is adaptive. Misapplying technical fixes to adaptive problems causes failure.',
    category: 'Master Synthesis',
    source: 'Problem Solving',
    pathwayId: 'master-synthesis',
    difficulty: 'advanced',
    tags: ['problem-solving', 'frameworks', 'adaptive-leadership', 'thinking']
  },
  {
    id: 'fc-prob-037',
    front: 'What is the "Mutually Exclusive" test for MECE structures?',
    back: 'To test mutual exclusivity: 1) Can any item fit in more than one category? (If yes, not ME) 2) Is there overlap in definitions? 3) If you moved an item, would it clearly belong elsewhere? Good ME categories have clear, unambiguous boundaries. When items seem to fit multiple categories, redefine boundaries or restructure.',
    category: 'Master Synthesis',
    source: 'Problem Solving',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['problem-solving', 'frameworks', 'mece', 'structured-thinking']
  },
  {
    id: 'fc-prob-038',
    front: 'What is the "Collectively Exhaustive" test for MECE structures?',
    back: 'To test collective exhaustiveness: 1) Can you think of anything that does not fit in any category? 2) Have you covered all possibilities, including edge cases? 3) If the answer must be somewhere, is it definitely in your structure? Use "other" categories sparingly - they often indicate incomplete thinking.',
    category: 'Master Synthesis',
    source: 'Problem Solving',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['problem-solving', 'frameworks', 'mece', 'structured-thinking']
  },
  {
    id: 'fc-prob-039',
    front: 'What is pre-mortem analysis and how does it differ from post-mortem?',
    back: 'Pre-mortem imagines a project has failed and asks "Why did it fail?" before starting. Post-mortem examines actual failure after it occurs. Pre-mortem benefits: surfaces risks while they can be prevented, overcomes optimism bias, encourages dissent safely, identifies blind spots. Conduct early in planning with diverse participants.',
    category: 'Master Synthesis',
    source: 'Problem Solving',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['problem-solving', 'frameworks', 'scenario-planning', 'risk-analysis']
  },
  {
    id: 'fc-prob-040',
    front: 'How do you know when you have reached the true root cause?',
    back: 'Root cause indicators: 1) Removing it prevents recurrence, 2) It is within your control to change, 3) Further "why" questions lead to circular reasoning or truisms, 4) It explains all symptoms, 5) Evidence supports the causal chain, 6) Solutions at this level are actionable and sustainable. Test by asking: "If we fix this, will the problem stay fixed?"',
    category: 'Master Synthesis',
    source: 'Problem Solving',
    pathwayId: 'master-synthesis',
    difficulty: 'advanced',
    tags: ['problem-solving', 'frameworks', 'root-cause-analysis', 'critical-thinking']
  }
];
