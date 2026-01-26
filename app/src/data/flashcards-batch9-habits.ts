import type { SpacedRepetitionCard } from '@/types';

export const habitsFlashcards: SpacedRepetitionCard[] = [
  // BJ Fogg's Tiny Habits Model
  {
    id: 'fc-hab-001',
    front: 'What is BJ Fogg\'s Behavior Model formula and what does each component represent?',
    back: 'B = MAP (Behavior = Motivation + Ability + Prompt). Behavior occurs when Motivation, Ability, and a Prompt converge at the same moment. If any element is missing or insufficient, the behavior won\'t happen.',
    category: 'Personal Development',
    source: 'BJ Fogg - Tiny Habits',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['habits', 'behavior-change', 'tiny-habits', 'fogg-model']
  },
  {
    id: 'fc-hab-002',
    front: 'What is an "anchor" in the Tiny Habits method?',
    back: 'An anchor is an existing routine or event that serves as a reliable prompt for a new tiny behavior. The format is: "After I [ANCHOR], I will [TINY BEHAVIOR]." Anchors work because they leverage existing neural pathways and daily patterns.',
    category: 'Personal Development',
    source: 'BJ Fogg - Tiny Habits',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['habits', 'behavior-change', 'tiny-habits', 'anchoring']
  },
  {
    id: 'fc-hab-003',
    front: 'According to BJ Fogg, why is "celebration" crucial immediately after performing a tiny habit?',
    back: 'Celebration creates a positive emotion that wires the habit into the brain through dopamine release. Fogg calls this "Shine" - the feeling of success. This emotional response is what actually encodes the behavior as a habit, not repetition alone.',
    category: 'Personal Development',
    source: 'BJ Fogg - Tiny Habits',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['habits', 'behavior-change', 'tiny-habits', 'celebration']
  },
  {
    id: 'fc-hab-004',
    front: 'What is the "Ability Chain" in BJ Fogg\'s model, and how do you use it to increase ability?',
    back: 'The Ability Chain has 5 links: Time, Money, Physical Effort, Mental Effort, and Routine (fitting into existing patterns). To make behavior easier, identify which factor is making it hard and address that specific barrier. Make the behavior tiny enough that ability is never the limiting factor.',
    category: 'Personal Development',
    source: 'BJ Fogg - Tiny Habits',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['habits', 'behavior-change', 'tiny-habits', 'ability']
  },

  // Charles Duhigg - The Habit Loop
  {
    id: 'fc-hab-005',
    front: 'What are the three components of Charles Duhigg\'s Habit Loop?',
    back: 'Cue (trigger that initiates the behavior), Routine (the behavior itself), and Reward (the benefit you gain that reinforces the loop). This loop becomes increasingly automatic through repetition as it gets encoded in the basal ganglia.',
    category: 'Personal Development',
    source: 'Charles Duhigg - The Power of Habit',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['habits', 'behavior-change', 'habit-loop', 'duhigg']
  },
  {
    id: 'fc-hab-006',
    front: 'What is the "Golden Rule of Habit Change" according to Charles Duhigg?',
    back: 'You cannot extinguish a bad habit; you can only change it. Keep the same cue and reward, but change the routine. This works because the neural pathways for cue-reward remain intact while you substitute a new, healthier routine.',
    category: 'Personal Development',
    source: 'Charles Duhigg - The Power of Habit',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['habits', 'behavior-change', 'habit-loop', 'breaking-habits']
  },
  {
    id: 'fc-hab-007',
    front: 'What role does the basal ganglia play in habit formation?',
    back: 'The basal ganglia stores habits as automatic routines, freeing up the prefrontal cortex for other tasks. Once a behavior becomes habitual, it shifts from conscious decision-making areas to this more primitive brain region, making it automatic and requiring minimal mental energy.',
    category: 'Personal Development',
    source: 'Neuroscience of Habits',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['habits', 'behavior-change', 'neuroscience', 'basal-ganglia']
  },
  {
    id: 'fc-hab-008',
    front: 'What are the five categories of habit cues identified by researchers?',
    back: 'Location (where you are), Time (when it happens), Emotional State (how you feel), Other People (who is around), and Immediately Preceding Action (what just happened). Identifying which cue triggers an unwanted habit is essential for changing it.',
    category: 'Personal Development',
    source: 'Charles Duhigg - The Power of Habit',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['habits', 'behavior-change', 'cues', 'triggers']
  },

  // Keystone Habits
  {
    id: 'fc-hab-009',
    front: 'What are keystone habits and why are they strategically important?',
    back: 'Keystone habits are behaviors that trigger a cascade of other positive changes. They create "small wins" that build momentum and shift self-identity. Examples include exercise (improves eating, productivity, mood) and making your bed (increases sense of control and organization).',
    category: 'Personal Development',
    source: 'Charles Duhigg - The Power of Habit',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['habits', 'behavior-change', 'keystone-habits', 'leverage']
  },
  {
    id: 'fc-hab-010',
    front: 'How does the keystone habit of exercise create spillover effects into other areas of life?',
    back: 'Exercise increases self-efficacy, improves executive function, reduces stress hormones, and provides a "small win" that builds momentum. Research shows people who exercise regularly also tend to eat better, sleep better, be more productive, use credit cards less, and feel less stressed.',
    category: 'Personal Development',
    source: 'Behavior Science Research',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['habits', 'behavior-change', 'keystone-habits', 'exercise']
  },

  // Implementation Intentions
  {
    id: 'fc-hab-011',
    front: 'What are implementation intentions and what is their format?',
    back: 'Implementation intentions are specific plans that link a situational cue to a planned response using the format: "When [SITUATION X] occurs, I will perform [BEHAVIOR Y]." Research by Peter Gollwitzer shows they double or triple the likelihood of following through on goals.',
    category: 'Personal Development',
    source: 'Peter Gollwitzer Research',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['habits', 'behavior-change', 'implementation-intentions', 'planning']
  },
  {
    id: 'fc-hab-012',
    front: 'Why are implementation intentions more effective than simply setting goals?',
    back: 'Implementation intentions pre-decide when, where, and how to act, reducing reliance on willpower in the moment. They create automatic links between situations and responses, delegating control to environmental cues rather than requiring conscious deliberation.',
    category: 'Personal Development',
    source: 'Peter Gollwitzer Research',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['habits', 'behavior-change', 'implementation-intentions', 'automaticity']
  },
  {
    id: 'fc-hab-013',
    front: 'What is "action planning" vs "coping planning" in implementation intentions?',
    back: 'Action planning specifies when, where, and how to perform a desired behavior ("If it\'s 7am, I\'ll go to the gym"). Coping planning anticipates obstacles and specifies responses ("If I feel too tired, I\'ll do just 10 minutes"). Using both types together maximizes success.',
    category: 'Personal Development',
    source: 'Behavior Science Research',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['habits', 'behavior-change', 'implementation-intentions', 'coping']
  },

  // Temptation Bundling
  {
    id: 'fc-hab-014',
    front: 'What is temptation bundling and who developed this concept?',
    back: 'Temptation bundling, developed by Katherine Milkman, pairs an instantly gratifying activity (want) with a beneficial behavior (should). Example: only listening to addictive audiobooks while exercising. It leverages present bias by making virtuous behaviors immediately rewarding.',
    category: 'Personal Development',
    source: 'Katherine Milkman Research',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['habits', 'behavior-change', 'temptation-bundling', 'motivation']
  },
  {
    id: 'fc-hab-015',
    front: 'How does temptation bundling address the "want-should conflict" in decision-making?',
    back: 'We often choose immediate pleasures (wants) over long-term benefits (shoulds) due to present bias. Temptation bundling resolves this conflict by making the "should" behavior the only way to access the "want" reward, transforming delayed benefits into immediate gratification.',
    category: 'Personal Development',
    source: 'Katherine Milkman Research',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['habits', 'behavior-change', 'temptation-bundling', 'present-bias']
  },

  // Commitment Devices
  {
    id: 'fc-hab-016',
    front: 'What is a commitment device and why is it effective for behavior change?',
    back: 'A commitment device is a choice made in the present that locks in future behavior, often by creating costs for non-compliance. Examples: giving money to a friend (forfeit if you fail), website blockers, automatic savings. They work because they remove future decision points and leverage loss aversion.',
    category: 'Personal Development',
    source: 'Behavioral Economics',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['habits', 'behavior-change', 'commitment-devices', 'precommitment']
  },
  {
    id: 'fc-hab-017',
    front: 'What is the "Ulysses Contract" and how does it apply to behavior change?',
    back: 'Named after Odysseus tying himself to the mast to resist the Sirens, a Ulysses Contract is a commitment made when rational to bind future behavior when tempted. Modern examples: giving car keys to friends before drinking, using apps like StickK that donate to charities you oppose if you fail.',
    category: 'Personal Development',
    source: 'Behavioral Economics',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['habits', 'behavior-change', 'commitment-devices', 'ulysses-contract']
  },
  {
    id: 'fc-hab-018',
    front: 'What makes commitment devices most effective according to research?',
    back: 'Most effective commitment devices: (1) have meaningful stakes, (2) are difficult to escape, (3) have external accountability, (4) provide immediate consequences for violation. The emotional pain of loss should exceed the pleasure of the unwanted behavior.',
    category: 'Personal Development',
    source: 'Behavioral Economics Research',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['habits', 'behavior-change', 'commitment-devices', 'accountability']
  },

  // Identity-Based Habits
  {
    id: 'fc-hab-019',
    front: 'What is the difference between outcome-based habits and identity-based habits?',
    back: 'Outcome-based habits focus on what you want to achieve ("I want to lose weight"). Identity-based habits focus on who you want to become ("I am a healthy person"). Identity-based habits are more sustainable because they align behavior with self-concept rather than external goals.',
    category: 'Personal Development',
    source: 'James Clear - Atomic Habits',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['habits', 'behavior-change', 'identity', 'self-concept']
  },
  {
    id: 'fc-hab-020',
    front: 'How does identity drive behavior according to the self-consistency principle?',
    back: 'Humans have a deep need to act consistently with their self-image. Once you adopt an identity ("I am a runner"), behaviors that contradict it create cognitive dissonance. This makes aligned behaviors feel natural and misaligned ones feel wrong, reducing reliance on motivation.',
    category: 'Personal Development',
    source: 'Social Psychology',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['habits', 'behavior-change', 'identity', 'cognitive-dissonance']
  },
  {
    id: 'fc-hab-021',
    front: 'What is the "two-way relationship" between habits and identity?',
    back: 'Each behavior is a vote for the type of person you want to become. As you repeat a behavior, you accumulate evidence for a new identity. Conversely, as your identity strengthens, the behaviors become more natural. This creates a positive feedback loop of identity and behavior reinforcement.',
    category: 'Personal Development',
    source: 'James Clear - Atomic Habits',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['habits', 'behavior-change', 'identity', 'feedback-loop']
  },

  // Willpower and Ego Depletion
  {
    id: 'fc-hab-022',
    front: 'What is ego depletion and what did Roy Baumeister\'s original research suggest?',
    back: 'Ego depletion theory proposed that self-control draws from a limited mental resource that gets depleted with use, like a muscle getting tired. Baumeister\'s experiments showed that people who resisted temptation performed worse on subsequent self-control tasks.',
    category: 'Personal Development',
    source: 'Roy Baumeister Research',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['habits', 'behavior-change', 'willpower', 'ego-depletion']
  },
  {
    id: 'fc-hab-023',
    front: 'How has the ego depletion theory been challenged by recent research?',
    back: 'Large-scale replication studies found weak or no effects for ego depletion. Carol Dweck\'s research suggests that beliefs about willpower matter more than actual depletion. People who believe willpower is unlimited show no depletion effects. The original effect may be partly explained by motivation and beliefs.',
    category: 'Personal Development',
    source: 'Recent Willpower Research',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['habits', 'behavior-change', 'willpower', 'ego-depletion', 'mindset']
  },
  {
    id: 'fc-hab-024',
    front: 'What practical strategies help conserve willpower for important decisions?',
    back: 'Reduce decision fatigue by: (1) making important decisions early in the day, (2) automating routine choices (meal planning, wardrobe simplification), (3) designing environments that reduce temptations, (4) using habits to put recurring behaviors on autopilot, (5) maintaining blood glucose through regular meals.',
    category: 'Personal Development',
    source: 'Behavioral Science',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['habits', 'behavior-change', 'willpower', 'decision-fatigue']
  },

  // Environment Design
  {
    id: 'fc-hab-025',
    front: 'What is "choice architecture" and how does it influence behavior?',
    back: 'Choice architecture is how the environment presents options, which significantly influences decisions. Key principles: make good choices easy and visible, make bad choices hard and invisible. Example: putting healthy food at eye level, removing junk food from the house entirely.',
    category: 'Personal Development',
    source: 'Nudge Theory - Thaler & Sunstein',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['habits', 'behavior-change', 'environment-design', 'choice-architecture']
  },
  {
    id: 'fc-hab-026',
    front: 'What is the "Law of Least Effort" and how does it apply to habit formation?',
    back: 'Humans naturally gravitate toward behaviors requiring the least effort. To build good habits, reduce friction (put running shoes by the bed). To break bad habits, increase friction (keep phone in another room, remove social media apps). Even small friction changes have outsized effects.',
    category: 'Personal Development',
    source: 'Behavioral Science',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['habits', 'behavior-change', 'environment-design', 'friction']
  },
  {
    id: 'fc-hab-027',
    front: 'How did the "Hawthorne Works" cafeteria study demonstrate environmental influence on eating?',
    back: 'Google studied cafeteria design and found that placing water bottles at eye level and making candy less visible reduced candy consumption by 30% and increased water intake by 47%. People took the path of least resistance, showing that environment trumps willpower.',
    category: 'Personal Development',
    source: 'Google Food Study',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['habits', 'behavior-change', 'environment-design', 'nudge']
  },
  {
    id: 'fc-hab-028',
    front: 'What is "context-dependent memory" and why does it matter for habits?',
    back: 'Memory and behavior are strongly linked to environmental contexts. Habits formed in one location may not transfer to new environments. This explains why vacations can disrupt routines and why moving can be an opportunity to build new habits. Design your environment intentionally for each desired behavior.',
    category: 'Personal Development',
    source: 'Psychology Research',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['habits', 'behavior-change', 'environment-design', 'context']
  },

  // Breaking Bad Habits
  {
    id: 'fc-hab-029',
    front: 'What is "extinction" in behavioral psychology and why don\'t habits truly disappear?',
    back: 'Extinction occurs when a behavior decreases because the reward is removed. However, the neural pathways remain dormant, not erased. This is why old habits can resurface instantly when triggered, especially under stress. The key is to build new habits that compete with old ones.',
    category: 'Personal Development',
    source: 'Behavioral Psychology',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['habits', 'behavior-change', 'breaking-habits', 'extinction']
  },
  {
    id: 'fc-hab-030',
    front: 'What is "habit substitution" and why is it more effective than trying to stop a habit cold turkey?',
    back: 'Habit substitution replaces an unwanted routine with a healthier alternative while keeping the same cue and satisfying the same underlying craving. It\'s more effective because you\'re working with your brain\'s natural tendency to seek rewards rather than fighting against established neural pathways.',
    category: 'Personal Development',
    source: 'Behavior Change Science',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['habits', 'behavior-change', 'breaking-habits', 'substitution']
  },
  {
    id: 'fc-hab-031',
    front: 'How can you use the "awareness habit" technique to break automatic behaviors?',
    back: 'The awareness habit involves consciously noting each time you engage in an unwanted behavior, often using a tracking method. This interrupts automaticity by bringing the behavior into conscious awareness. Many people discover they engage in habits far more often than they realized.',
    category: 'Personal Development',
    source: 'Behavior Change Science',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['habits', 'behavior-change', 'breaking-habits', 'awareness']
  },
  {
    id: 'fc-hab-032',
    front: 'What is "surfing the urge" and how does it help with breaking habits?',
    back: 'Urge surfing, from mindfulness-based approaches, involves observing cravings without acting on them. You notice the urge, accept it without judgment, and observe it rise and fall like a wave. Most urges peak within 15-20 minutes. This weakens the cue-behavior connection over time.',
    category: 'Personal Development',
    source: 'Mindfulness-Based Cognitive Therapy',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['habits', 'behavior-change', 'breaking-habits', 'mindfulness']
  },

  // Habit Stacking
  {
    id: 'fc-hab-033',
    front: 'What is habit stacking and what is its formula?',
    back: 'Habit stacking links a new habit to an existing one using the formula: "After [CURRENT HABIT], I will [NEW HABIT]." It leverages the strong neural connections of established habits to create reliable cues for new behaviors. Example: "After I pour my morning coffee, I will write in my journal for 2 minutes."',
    category: 'Personal Development',
    source: 'James Clear - Atomic Habits',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['habits', 'behavior-change', 'habit-stacking', 'anchoring']
  },
  {
    id: 'fc-hab-034',
    front: 'What criteria make for an effective habit stack anchor?',
    back: 'Effective anchors are: (1) highly consistent - happen at the same frequency as your desired habit, (2) specific - clearly defined moment, not vague, (3) contextually appropriate - same location and mindset as new habit, (4) already automatic - requires no willpower. Example: "After I sit down with lunch" is better than "After I eat."',
    category: 'Personal Development',
    source: 'Behavior Science',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['habits', 'behavior-change', 'habit-stacking', 'anchoring']
  },

  // Dopamine and Reward Systems
  {
    id: 'fc-hab-035',
    front: 'How does dopamine function in habit formation - is it about pleasure or anticipation?',
    back: 'Dopamine is primarily about anticipation and motivation, not pleasure. It spikes in anticipation of reward, driving you to take action. This is why craving precedes the behavior. Over time, the dopamine spike shifts from the reward itself to the cue that predicts it, making habits feel automatic.',
    category: 'Personal Development',
    source: 'Neuroscience Research',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['habits', 'behavior-change', 'neuroscience', 'dopamine']
  },
  {
    id: 'fc-hab-036',
    front: 'What is "variable reward" and why is it so powerful for creating sticky habits?',
    back: 'Variable rewards are unpredictable in timing or magnitude. They trigger stronger dopamine responses than predictable rewards because the brain is wired to pay attention to uncertainty. This is why social media (unpredictable likes), gambling, and games are so addictive. Can be used ethically by adding variety to healthy habits.',
    category: 'Personal Development',
    source: 'B.F. Skinner / Nir Eyal - Hooked',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['habits', 'behavior-change', 'reward', 'variable-reward']
  },

  // Social Influence on Habits
  {
    id: 'fc-hab-037',
    front: 'How does social environment affect habit formation according to research?',
    back: 'We absorb habits from three key groups: the close (family, friends), the many (social norms), and the powerful (those with status). The Framingham Heart Study showed obesity spreads through social networks. Surrounding yourself with people who have your desired habits makes those behaviors feel normal and achievable.',
    category: 'Personal Development',
    source: 'Social Psychology Research',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['habits', 'behavior-change', 'social-influence', 'peer-effects']
  },
  {
    id: 'fc-hab-038',
    front: 'What is "social proof" and how can it be leveraged for habit change?',
    back: 'Social proof is the tendency to look to others\' behavior to determine correct action. Leverage it by: joining groups with desired habits, publicly committing to goals, finding accountability partners, displaying evidence of desired identity (gym bag visible at work). We unconsciously mirror the behavior of our tribe.',
    category: 'Personal Development',
    source: 'Robert Cialdini - Influence',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['habits', 'behavior-change', 'social-proof', 'accountability']
  },

  // Habit Timing and Consistency
  {
    id: 'fc-hab-039',
    front: 'How long does it really take to form a habit according to Phillippa Lally\'s research?',
    back: 'Lally\'s 2009 UCL study found habit formation takes an average of 66 days, with a range of 18-254 days depending on the behavior and person. The "21 days" myth is unfounded. More complex behaviors take longer. Consistency matters more than perfection - missing one day didn\'t significantly affect habit formation.',
    category: 'Personal Development',
    source: 'Phillippa Lally Research',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['habits', 'behavior-change', 'habit-formation', 'timing']
  },
  {
    id: 'fc-hab-040',
    front: 'What is the "fresh start effect" and how can it be used strategically for habit change?',
    back: 'The fresh start effect (Katherine Milkman) shows people are more likely to pursue goals after temporal landmarks: new year, birthdays, Mondays, first of the month, new semester. These create psychological "new chapters" that separate us from past failures. Strategic timing of habit launches can increase success rates.',
    category: 'Personal Development',
    source: 'Katherine Milkman Research',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['habits', 'behavior-change', 'timing', 'fresh-start']
  }
];
