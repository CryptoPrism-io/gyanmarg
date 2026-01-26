import type { SpacedRepetitionCard } from '@/types';

export const systemsThinkingFlashcards: SpacedRepetitionCard[] = [
  // Feedback Loops
  {
    id: 'fc-sys-001',
    front: 'What is a feedback loop in systems thinking?',
    back: 'A feedback loop is a circular chain of cause and effect where the output of a system eventually influences its own input. The output "feeds back" to affect the system\'s behavior, creating either stability or amplification.',
    category: 'Master Synthesis',
    source: 'Systems Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'beginner',
    tags: ['systems-thinking', 'feedback-loops']
  },
  {
    id: 'fc-sys-002',
    front: 'What is the difference between reinforcing and balancing feedback loops?',
    back: 'Reinforcing (positive) loops amplify change - they create exponential growth or collapse (e.g., compound interest, viral spread). Balancing (negative) loops resist change and seek equilibrium - they maintain stability (e.g., thermostat, body temperature regulation).',
    category: 'Master Synthesis',
    source: 'Systems Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'beginner',
    tags: ['systems-thinking', 'feedback-loops']
  },
  {
    id: 'fc-sys-003',
    front: 'Why are reinforcing feedback loops sometimes called "vicious" or "virtuous" cycles?',
    back: 'The same reinforcing structure can be virtuous (beneficial spiral) or vicious (harmful spiral) depending on direction. Success breeds success (virtuous) or failure breeds failure (vicious). The loop mechanism is identical - only the outcome differs based on whether the amplified variable is desirable.',
    category: 'Master Synthesis',
    source: 'Systems Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['systems-thinking', 'feedback-loops', 'complexity']
  },
  {
    id: 'fc-sys-004',
    front: 'What is "loop dominance" in systems with multiple feedback loops?',
    back: 'Loop dominance refers to which feedback loop is currently controlling system behavior. In complex systems with multiple loops, different loops may dominate at different times. System behavior shifts dramatically when dominance shifts from one loop to another (e.g., from growth to constraint).',
    category: 'Master Synthesis',
    source: 'Systems Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'advanced',
    tags: ['systems-thinking', 'feedback-loops', 'complexity']
  },

  // Stocks and Flows
  {
    id: 'fc-sys-005',
    front: 'What are stocks and flows in systems thinking?',
    back: 'Stocks are accumulations - quantities that can be measured at any moment (water in a bathtub, money in an account, population). Flows are rates of change - quantities measured over time that fill or drain stocks (water flow rate, income/expenses, births/deaths).',
    category: 'Master Synthesis',
    source: 'Systems Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'beginner',
    tags: ['systems-thinking', 'stocks-flows']
  },
  {
    id: 'fc-sys-006',
    front: 'Why do stocks provide stability and inertia in systems?',
    back: 'Stocks change slowly because they can only change through their flows, which take time. This creates a buffer between inflows and outflows, providing time for adjustment. A lake doesn\'t empty instantly when rain stops; a reputation persists despite recent behavior. This inertia creates both stability and resistance to change.',
    category: 'Master Synthesis',
    source: 'Systems Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['systems-thinking', 'stocks-flows']
  },
  {
    id: 'fc-sys-007',
    front: 'What is the "bathtub analogy" and why is it fundamental to systems thinking?',
    back: 'The bathtub analogy illustrates stocks and flows: the water level (stock) changes based on faucet inflow and drain outflow. Key insight: the stock rises when inflow exceeds outflow, regardless of absolute rates. This simple principle underlies all accumulation dynamics - from debt to carbon emissions to skill building.',
    category: 'Master Synthesis',
    source: 'Systems Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'beginner',
    tags: ['systems-thinking', 'stocks-flows']
  },
  {
    id: 'fc-sys-008',
    front: 'How do stock-and-flow structures create nonlinear system behavior?',
    back: 'Stocks accumulate the effects of flows over time, creating memory and momentum. When stocks feed back to affect flows (stock of customers affects word-of-mouth flow), nonlinear dynamics emerge. Small changes can accumulate into large effects, and system behavior depends on history, not just current conditions.',
    category: 'Master Synthesis',
    source: 'Systems Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'advanced',
    tags: ['systems-thinking', 'stocks-flows', 'complexity']
  },

  // Delays in Systems
  {
    id: 'fc-sys-009',
    front: 'Why are delays a critical source of system problems?',
    back: 'Delays create gaps between actions and their consequences. When feedback is delayed, people continue actions long after problems begin, causing overshoot. We keep showering after water heats, economies keep growing after bubbles form, policies continue after goals are met. Delayed feedback breeds oscillation and instability.',
    category: 'Master Synthesis',
    source: 'Systems Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['systems-thinking', 'delays', 'complexity']
  },
  {
    id: 'fc-sys-010',
    front: 'What is oscillation in systems and how do delays cause it?',
    back: 'Oscillation is repeated overshooting and undershooting of a goal. Delays cause it by preventing timely correction. By the time you see results and adjust, conditions have changed. The longer the delay relative to adjustment time, the more severe oscillations become - from mild fluctuations to wild swings.',
    category: 'Master Synthesis',
    source: 'Systems Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['systems-thinking', 'delays']
  },
  {
    id: 'fc-sys-011',
    front: 'How should decision-makers adapt their behavior when facing system delays?',
    back: 'Key adaptations: 1) Anticipate - act before feedback arrives, not after. 2) Slow down - reduce rate of adjustment to match delay length. 3) Use leading indicators - find faster feedback signals. 4) Build in buffers - extra capacity absorbs oscillation. The maxim: "In systems with delays, patience is not just a virtue - it\'s a survival skill."',
    category: 'Master Synthesis',
    source: 'Systems Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'advanced',
    tags: ['systems-thinking', 'delays', 'decision-making']
  },

  // Emergence
  {
    id: 'fc-sys-012',
    front: 'What is emergence in complex systems?',
    back: 'Emergence is when system-level properties arise from component interactions that cannot be predicted from or reduced to individual parts. Consciousness emerges from neurons, traffic jams from drivers, market prices from traders. The whole exhibits behaviors and capabilities that no part possesses alone.',
    category: 'Master Synthesis',
    source: 'Systems Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'beginner',
    tags: ['systems-thinking', 'emergence', 'complexity']
  },
  {
    id: 'fc-sys-013',
    front: 'Why does emergence challenge traditional reductionist analysis?',
    back: 'Reductionism assumes understanding parts reveals the whole. But emergent properties exist only at the system level - they disappear when you dissect the system. You cannot find "wetness" in H2O molecules, "life" in cells examined separately, or "meaning" in individual neurons. Emergence requires studying relationships, not just components.',
    category: 'Master Synthesis',
    source: 'Systems Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['systems-thinking', 'emergence', 'complexity']
  },
  {
    id: 'fc-sys-014',
    front: 'What is the distinction between weak and strong emergence?',
    back: 'Weak emergence: system properties that are surprising but theoretically derivable from components (weather patterns, flocking behavior). Strong emergence: properties that are fundamentally irreducible and may require new causal laws (consciousness, perhaps). Most scientists accept weak emergence; strong emergence remains philosophically contested.',
    category: 'Master Synthesis',
    source: 'Systems Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'advanced',
    tags: ['systems-thinking', 'emergence', 'philosophy']
  },

  // Leverage Points
  {
    id: 'fc-sys-015',
    front: 'What are leverage points in systems thinking?',
    back: 'Leverage points are places in a system where small interventions can produce large changes. Donella Meadows identified them as places to intervene ranging from weak (parameters, subsidies) to powerful (goals, paradigms). Finding leverage points means identifying where minimal effort yields maximum systemic effect.',
    category: 'Master Synthesis',
    source: 'Systems Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'beginner',
    tags: ['systems-thinking', 'leverage-points', 'donella-meadows']
  },
  {
    id: 'fc-sys-016',
    front: 'According to Donella Meadows, what are the most powerful leverage points in a system?',
    back: 'From most to least powerful: 1) Power to transcend paradigms, 2) Mindset/paradigm from which the system arises, 3) Goals of the system, 4) Power of self-organization, 5) Rules of the system, 6) Information flows, 7) Reinforcing feedback loops, 8) Balancing feedback loops, 9) Delays, 10) Stock-flow structures, 11) Buffer sizes, 12) Parameters/numbers.',
    category: 'Master Synthesis',
    source: 'Systems Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['systems-thinking', 'leverage-points', 'donella-meadows']
  },
  {
    id: 'fc-sys-017',
    front: 'Why do people often push leverage points in the wrong direction?',
    back: 'Intuition often fails in complex systems. We naturally push in directions that worsen problems: subsidizing rather than taxing pollution, restricting rather than freeing information, strengthening rather than loosening central control. Counter-intuitive leverage often means doing the opposite of what seems obvious.',
    category: 'Master Synthesis',
    source: 'Systems Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'advanced',
    tags: ['systems-thinking', 'leverage-points', 'complexity']
  },
  {
    id: 'fc-sys-018',
    front: 'Why is changing system goals more powerful than optimizing parameters?',
    back: 'Parameters (taxes, standards, quotas) operate within the existing system structure. Changing goals redefines what the system is trying to achieve, which restructures everything beneath it. A healthcare system optimizing for "profit" behaves entirely differently than one optimizing for "health" - same structure, radically different outcomes.',
    category: 'Master Synthesis',
    source: 'Systems Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['systems-thinking', 'leverage-points', 'donella-meadows']
  },

  // System Archetypes
  {
    id: 'fc-sys-019',
    front: 'What are system archetypes and why are they useful?',
    back: 'System archetypes are common patterns of behavior that recur across different systems and domains. Recognizing archetypes helps diagnose problems quickly and apply proven solutions. Rather than treating each situation as unique, archetypes reveal the underlying structure producing familiar problematic dynamics.',
    category: 'Master Synthesis',
    source: 'Systems Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'beginner',
    tags: ['systems-thinking', 'system-archetypes']
  },
  {
    id: 'fc-sys-020',
    front: 'Describe the "Limits to Growth" archetype.',
    back: 'A reinforcing growth process encounters a balancing constraint. Initially growth appears unlimited, but eventually slows and stops as it hits resource or capacity limits. Examples: market saturation, population hitting food supply, personal burnout. Solution: identify and address limits proactively rather than pushing harder on growth.',
    category: 'Master Synthesis',
    source: 'Systems Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['systems-thinking', 'system-archetypes']
  },
  {
    id: 'fc-sys-021',
    front: 'Describe the "Shifting the Burden" archetype.',
    back: 'A symptomatic solution provides quick relief but undermines fundamental solutions. Dependency on the quick fix grows while capability for real solutions atrophies. Examples: painkillers instead of addressing injury cause, bailouts instead of fixing business model. Intervention: strengthen fundamental solution while weaning off symptomatic one.',
    category: 'Master Synthesis',
    source: 'Systems Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['systems-thinking', 'system-archetypes']
  },
  {
    id: 'fc-sys-022',
    front: 'Describe the "Tragedy of the Commons" archetype.',
    back: 'Individuals using a shared resource for personal gain eventually deplete it, harming everyone including themselves. Each actor\'s rational self-interest produces collective irrationality. Examples: overfishing, overgrazing, pollution. Solutions: regulate access, privatize resource, or educate to change mental models from individual to system perspective.',
    category: 'Master Synthesis',
    source: 'Systems Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['systems-thinking', 'system-archetypes', 'complexity']
  },
  {
    id: 'fc-sys-023',
    front: 'Describe the "Fixes that Fail" archetype.',
    back: 'A solution that alleviates problem symptoms in the short term creates unintended consequences that worsen the problem in the long term. Examples: antibiotics creating resistant bacteria, pesticides killing natural predators. The fix becomes the problem. Solution: consider long-term systemic effects before implementing quick fixes.',
    category: 'Master Synthesis',
    source: 'Systems Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['systems-thinking', 'system-archetypes', 'unintended-consequences']
  },
  {
    id: 'fc-sys-024',
    front: 'Describe the "Escalation" archetype.',
    back: 'Two parties respond to each other\'s actions with increasingly aggressive counter-actions, spiraling upward. Each sees their action as defensive response to the other\'s aggression. Examples: arms races, price wars, hostile negotiations. Solution: one party must unilaterally de-escalate or both must negotiate new rules.',
    category: 'Master Synthesis',
    source: 'Systems Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['systems-thinking', 'system-archetypes']
  },
  {
    id: 'fc-sys-025',
    front: 'Describe the "Success to the Successful" archetype.',
    back: 'When two activities compete for limited resources, initial advantage leads to more resources, creating more advantage in a reinforcing loop. The winner keeps winning, the loser keeps losing. Examples: wealth inequality, monopolies, academic citation patterns. Solution: balance the competition through redistribution or separate the competitors.',
    category: 'Master Synthesis',
    source: 'Systems Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['systems-thinking', 'system-archetypes']
  },

  // Unintended Consequences
  {
    id: 'fc-sys-026',
    front: 'Why do interventions in complex systems frequently produce unintended consequences?',
    back: 'Complex systems have: 1) Nonlinear relationships - small causes can have large effects, 2) Time delays - effects appear long after causes, 3) Multiple feedback loops - interventions ripple through the system, 4) Counterintuitive behavior - systems resist and compensate. Interveners typically see only part of the system and ignore these dynamics.',
    category: 'Master Synthesis',
    source: 'Systems Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['systems-thinking', 'unintended-consequences', 'complexity']
  },
  {
    id: 'fc-sys-027',
    front: 'What is "policy resistance" in systems?',
    back: 'Policy resistance occurs when various actors in a system each pull toward their own goals, often unconsciously neutralizing interventions. The system has its own agenda and pushes back. Examples: crackdowns increasing drug prices (making dealing more profitable), welfare programs creating dependency. The system defeats the policy.',
    category: 'Master Synthesis',
    source: 'Systems Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'advanced',
    tags: ['systems-thinking', 'unintended-consequences', 'donella-meadows']
  },
  {
    id: 'fc-sys-028',
    front: 'What is the Cobra Effect and what does it illustrate?',
    back: 'Colonial India offered bounties for dead cobras to reduce their population. People bred cobras for bounty income. When the program ended, breeders released worthless cobras, increasing the population. This illustrates how incentive-based interventions can backfire when people optimize for the incentive rather than the underlying goal.',
    category: 'Master Synthesis',
    source: 'Systems Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['systems-thinking', 'unintended-consequences']
  },

  // Complex Adaptive Systems
  {
    id: 'fc-sys-029',
    front: 'What defines a complex adaptive system (CAS)?',
    back: 'A CAS consists of many interacting agents that: 1) Follow local rules without central control, 2) Adapt their behavior based on experience, 3) Self-organize into emergent patterns, 4) Exist between order and chaos ("edge of chaos"), 5) Evolve over time. Examples: ecosystems, immune systems, economies, cities, the brain.',
    category: 'Master Synthesis',
    source: 'Systems Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['systems-thinking', 'complex-adaptive-systems', 'complexity']
  },
  {
    id: 'fc-sys-030',
    front: 'What does "self-organization" mean in complex systems?',
    back: 'Self-organization is the spontaneous emergence of order from local interactions without external direction or central control. Flocking birds, market prices, neural patterns, and social norms all self-organize. No one plans them; they arise from simple rules followed by many agents. The order is created by the system itself.',
    category: 'Master Synthesis',
    source: 'Systems Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['systems-thinking', 'complex-adaptive-systems', 'emergence']
  },
  {
    id: 'fc-sys-031',
    front: 'Why is the "edge of chaos" significant in complex adaptive systems?',
    back: 'The edge of chaos is the zone between rigid order and random chaos where complex systems are most adaptive. Too ordered - system is frozen, cannot adapt. Too chaotic - system cannot maintain patterns. At the edge, systems are stable enough to maintain structure but flexible enough to adapt and evolve. Life exists at this edge.',
    category: 'Master Synthesis',
    source: 'Systems Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'advanced',
    tags: ['systems-thinking', 'complex-adaptive-systems', 'complexity']
  },
  {
    id: 'fc-sys-032',
    front: 'How do complex adaptive systems learn and evolve?',
    back: 'CAS learn through: 1) Variation - agents try different strategies, 2) Selection - successful strategies survive and spread, 3) Retention - successful patterns are remembered/replicated. This evolutionary process operates at multiple levels simultaneously. The system accumulates "knowledge" in its structure without any central intelligence.',
    category: 'Master Synthesis',
    source: 'Systems Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'advanced',
    tags: ['systems-thinking', 'complex-adaptive-systems', 'evolution']
  },

  // Donella Meadows Principles
  {
    id: 'fc-sys-033',
    front: 'What did Donella Meadows mean by "dancing with systems"?',
    back: 'Rather than trying to control systems (impossible for complex ones), we should learn to dance with them - observe their behavior, understand their rhythm, and move with them while gently influencing direction. This requires humility, patience, responsiveness, and willingness to be surprised. We are part of the systems we seek to change.',
    category: 'Master Synthesis',
    source: 'Systems Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['systems-thinking', 'donella-meadows', 'complexity']
  },
  {
    id: 'fc-sys-034',
    front: 'Why did Meadows say "we can\'t control systems but we can design them"?',
    back: 'Control implies predicting and directing specific outcomes - impossible in complex systems. But we can design system structures that make desired behaviors more likely: information flows, incentives, feedback mechanisms, boundaries. Good design creates conditions for emergence rather than trying to dictate outcomes.',
    category: 'Master Synthesis',
    source: 'Systems Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['systems-thinking', 'donella-meadows', 'complexity']
  },
  {
    id: 'fc-sys-035',
    front: 'What is Meadows\' principle about exposing mental models?',
    back: 'Mental models - our assumptions about how the world works - drive system behavior but usually remain hidden. Exposing them to examination is crucial because wrong models produce wrong interventions. "Remember that everything you know, and everything everyone knows, is only a model" - staying aware of model limitations enables learning.',
    category: 'Master Synthesis',
    source: 'Systems Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['systems-thinking', 'donella-meadows', 'mental-models']
  },
  {
    id: 'fc-sys-036',
    front: 'Why is "getting the beat of the system" Meadows\' first guideline?',
    back: 'Before intervening, observe the system long enough to understand its rhythms, oscillations, and patterns. Too often we act on first impressions or short time windows. Systems have their own dynamics; learning them takes patience. Watch history, track behavior over time, understand what drives the observable patterns.',
    category: 'Master Synthesis',
    source: 'Systems Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'beginner',
    tags: ['systems-thinking', 'donella-meadows']
  },
  {
    id: 'fc-sys-037',
    front: 'What does Meadows mean by "expand the boundary of caring"?',
    back: 'Systems problems often arise from narrow boundaries of concern - optimizing for my department, my country, my generation while ignoring effects on others. Expanding boundaries - caring about other parts of the system, other stakeholders, future generations - naturally leads to wiser interventions because it encompasses more of the system\'s reality.',
    category: 'Master Synthesis',
    source: 'Systems Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['systems-thinking', 'donella-meadows', 'ethics']
  },
  {
    id: 'fc-sys-038',
    front: 'How does "honoring information" serve as a systems principle?',
    back: 'Information is the lifeblood of systems - it drives feedback loops and enables adaptation. Blocking, distorting, or ignoring information cripples system function. Principles: Don\'t distort information. Don\'t delay it. Don\'t withhold it. Spread it. The more freely and accurately information flows, the better systems self-correct.',
    category: 'Master Synthesis',
    source: 'Systems Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['systems-thinking', 'donella-meadows', 'feedback-loops']
  },
  {
    id: 'fc-sys-039',
    front: 'What is the systems thinking approach to responsibility?',
    back: 'Locate responsibility in the system, not just in individuals. System structure often determines behavior more than individual character. Blaming people ignores how the system pressures them to act. Effective change requires redesigning structures that produce unwanted behavior, not just punishing individuals caught in them.',
    category: 'Master Synthesis',
    source: 'Systems Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['systems-thinking', 'donella-meadows', 'ethics']
  },
  {
    id: 'fc-sys-040',
    front: 'Why must systems thinkers "stay humble and continue learning"?',
    back: 'Complex systems constantly surprise us. Our mental models are always incomplete. What worked before may not work again. Systems evolve. New patterns emerge. Certainty is the enemy of good systems thinking. The best systems thinkers maintain humility, treat every intervention as an experiment, and remain perpetually ready to update their understanding.',
    category: 'Master Synthesis',
    source: 'Systems Thinking',
    pathwayId: 'master-synthesis',
    difficulty: 'beginner',
    tags: ['systems-thinking', 'donella-meadows', 'complexity']
  }
];
