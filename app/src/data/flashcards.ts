import type { SpacedRepetitionCard } from '@/types';

/**
 * Flashcard database for spaced repetition
 * Extracted from: pathway lessons, book concepts, quizzes, and key takeaways
 */
export const flashcards: SpacedRepetitionCard[] = [
  // ============================================
  // ATOMIC HABITS - James Clear
  // ============================================
  {
    id: 'ah-001',
    front: 'What is the "1% Rule" in Atomic Habits?',
    back: 'Small improvements compound. 1% better every day = 37x better in a year (1.01^365 = 37.78). Habits are the compound interest of self-improvement.',
    category: 'Personal Development',
    source: 'Atomic Habits',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['habits', 'compound-effect', 'atomic-habits']
  },
  {
    id: 'ah-002',
    front: 'What are the Four Laws of Behavior Change?',
    back: '1. Make it OBVIOUS (Cue)\n2. Make it ATTRACTIVE (Craving)\n3. Make it EASY (Response)\n4. Make it SATISFYING (Reward)\n\nTo break bad habits, invert these laws.',
    category: 'Personal Development',
    source: 'Atomic Habits',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['habits', 'behavior-change', 'four-laws']
  },
  {
    id: 'ah-003',
    front: 'What is identity-based habit change?',
    back: 'Focus on WHO you want to become, not WHAT you want to achieve. The goal is not to read a book, it\'s to BECOME a reader. Every action is a vote for the type of person you want to become.',
    category: 'Personal Development',
    source: 'Atomic Habits',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['habits', 'identity', 'behavior-change']
  },
  {
    id: 'ah-004',
    front: 'How does habit stacking work?',
    back: 'Link a new habit to an existing one using the formula: "After I [CURRENT HABIT], I will [NEW HABIT]."\n\nThis leverages existing neural pathways and uses the momentum of established routines.',
    category: 'Personal Development',
    source: 'Atomic Habits',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['habits', 'habit-stacking', 'implementation']
  },
  {
    id: 'ah-005',
    front: 'Why is environment design more important than motivation?',
    back: 'Motivation is overrated. Environment often matters more. Be the architect of your world, not just a consumer. Make good habits obvious and bad habits invisible by designing your space.',
    category: 'Personal Development',
    source: 'Atomic Habits',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['habits', 'environment', 'motivation']
  },
  {
    id: 'ah-006',
    front: 'What is the "Plateau of Latent Potential"?',
    back: 'Habits work like compound interest - effects multiply over time, not immediately. Like ice melting at 32°F after heating from 25°, the breakthrough happens because all previous degrees accumulated. The work isn\'t wasted - it\'s being stored.',
    category: 'Personal Development',
    source: 'Atomic Habits',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['habits', 'patience', 'compound-effect']
  },
  {
    id: 'ah-007',
    front: 'What percentage of daily actions are habits?',
    back: '40-45% of daily actions are habits, not conscious decisions. Every day, you make about 35,000 decisions, but almost half aren\'t decisions at all - they\'re automatic habits.',
    category: 'Personal Development',
    source: 'Atomic Habits',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['habits', 'automation', 'behavior']
  },
  {
    id: 'ah-008',
    front: 'What are the three layers of behavior change?',
    back: '1. Outcomes (What you get) - "I want to lose 20 pounds"\n2. Processes (What you do) - "I want to go to the gym"\n3. Identity (What you believe) - "I am a healthy person"\n\nMost people focus on outcomes. Winners focus on identity.',
    category: 'Personal Development',
    source: 'Atomic Habits',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['habits', 'identity', 'behavior-change']
  },

  // ============================================
  // DEEP WORK - Cal Newport
  // ============================================
  {
    id: 'dw-001',
    front: 'What is the Deep Work Hypothesis?',
    back: 'The ability to perform deep work is becoming increasingly RARE at exactly the same time it is becoming increasingly VALUABLE. The few who cultivate this skill will thrive.',
    category: 'Personal Development',
    source: 'Deep Work',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['deep-work', 'focus', 'productivity']
  },
  {
    id: 'dw-002',
    front: 'What is the formula for high-quality work?',
    back: 'High-Quality Work Produced = (Time Spent) × (Intensity of Focus)\n\nThis is why multitasking destroys productivity - it reduces intensity of focus.',
    category: 'Personal Development',
    source: 'Deep Work',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['deep-work', 'productivity', 'focus']
  },
  {
    id: 'dw-003',
    front: 'What is attention residue?',
    back: 'When you switch from Task A to Task B, your attention doesn\'t immediately follow - a residue remains stuck thinking about Task A. This fragments your attention and significantly reduces performance.',
    category: 'Personal Development',
    source: 'Deep Work',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['deep-work', 'attention', 'multitasking']
  },
  {
    id: 'dw-004',
    front: 'What are the 4 philosophies of deep work scheduling?',
    back: '1. Monastic: Eliminate all shallow work\n2. Bimodal: Dedicate stretches to deep work\n3. Rhythmic: Daily ritual at same time (most practical)\n4. Journalistic: Fit deep work wherever possible',
    category: 'Personal Development',
    source: 'Deep Work',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['deep-work', 'scheduling', 'productivity']
  },
  {
    id: 'dw-005',
    front: 'What is a "shutdown ritual" and why is it important?',
    back: 'A strict routine that marks the end of work and allows complete mental rest. Important because: downtime aids insights (unconscious processing), recharges energy for deep work, and enforces work-life boundaries.',
    category: 'Personal Development',
    source: 'Deep Work',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['deep-work', 'recovery', 'boundaries']
  },
  {
    id: 'dw-006',
    front: 'What is "productive meditation"?',
    back: 'Use physically occupied time (walking, showering, commuting) to focus on a single professional problem. This strengthens your ability to sustain focus and provides unexpected creative breakthroughs.',
    category: 'Personal Development',
    source: 'Deep Work',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['deep-work', 'meditation', 'focus']
  },
  {
    id: 'dw-007',
    front: 'What is a "lead measure" vs "lag measure" in deep work?',
    back: 'Lead measures track behaviors that LEAD to success (like hours of deep work scheduled). Lag measures track outcomes (goals achieved). Focus on lead measures because they\'re within your control.',
    category: 'Personal Development',
    source: 'Deep Work',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['deep-work', 'metrics', 'execution']
  },
  {
    id: 'dw-008',
    front: 'What is the ideal duration for a deep work session?',
    back: '90 minutes. Research suggests this is optimal because your brain naturally cycles in ~90-minute rhythms (ultradian rhythms). Most people should aim for 4+ hours of total deep work per day.',
    category: 'Personal Development',
    source: 'Deep Work',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['deep-work', 'timing', 'productivity']
  },

  // ============================================
  // ATOMIC HABITS - Extended Flashcards (40 cards)
  // Covers: 1% Rule, Four Laws, Habit Loop, Identity-Based Habits,
  // Environment Design, Habit Stacking, Implementation Intentions,
  // Two-Minute Rule, Habit Tracking, Plateau of Latent Potential,
  // Breaking Bad Habits, Goldilocks Rule
  // ============================================
  {
    id: 'fc-ah-001',
    front: 'What is the 1% Rule in Atomic Habits?',
    back: 'The 1% Rule states that getting 1% better every day compounds to remarkable results over time. If you improve by 1% daily, you will be 37 times better after one year. Conversely, getting 1% worse daily leads to decline to nearly zero. Small habits compound like interest.',
    category: 'Personal Development',
    source: 'Atomic Habits',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['habits', '1-percent-rule', 'compound-growth']
  },
  {
    id: 'fc-ah-002',
    front: 'What are the Four Laws of Behavior Change?',
    back: '1. Make it Obvious (Cue) 2. Make it Attractive (Craving) 3. Make it Easy (Response) 4. Make it Satisfying (Reward). These laws correspond to the four stages of the habit loop and provide a framework for building good habits.',
    category: 'Personal Development',
    source: 'Atomic Habits',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['habits', 'four-laws', 'behavior-change']
  },
  {
    id: 'fc-ah-003',
    front: 'What are the four stages of the Habit Loop?',
    back: 'The Habit Loop consists of: 1. Cue - the trigger that initiates the behavior 2. Craving - the motivational force behind the habit 3. Response - the actual habit you perform 4. Reward - the end goal that satisfies the craving and teaches the brain which actions are worth remembering.',
    category: 'Personal Development',
    source: 'Atomic Habits',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['habits', 'habit-loop', 'cue-craving-response-reward']
  },
  {
    id: 'fc-ah-004',
    front: 'What is Identity-Based Habit Change?',
    back: 'Identity-Based Habit Change focuses on WHO you wish to become rather than what you want to achieve. Instead of "I want to run a marathon," think "I am a runner." True behavior change is identity change. The goal is not to read a book but to become a reader. Habits are how you embody your identity.',
    category: 'Personal Development',
    source: 'Atomic Habits',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['habits', 'identity', 'mindset']
  },
  {
    id: 'fc-ah-005',
    front: 'What are the three layers of behavior change?',
    back: '1. Outcomes - changing your results (what you get) 2. Processes - changing your habits and systems (what you do) 3. Identity - changing your beliefs about yourself (what you believe). The most effective approach starts from the inside out, beginning with identity.',
    category: 'Personal Development',
    source: 'Atomic Habits',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['habits', 'behavior-change', 'identity']
  },
  {
    id: 'fc-ah-006',
    front: 'How does the compound effect apply to habits?',
    back: 'Small changes appear to make no difference until a critical threshold is crossed. Like bamboo that grows underground for years before sprouting, habits often show delayed results. The effects of your habits multiply as you repeat them. Time magnifies the margin between success and failure.',
    category: 'Personal Development',
    source: 'Atomic Habits',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['habits', 'compound-effect', 'patience']
  },
  {
    id: 'fc-ah-007',
    front: 'What is the difference between systems and goals?',
    back: 'Goals are about the results you want to achieve; systems are about the processes that lead to those results. Winners and losers have the same goals, but winners have better systems. Goals are good for setting direction, but systems are best for making progress.',
    category: 'Personal Development',
    source: 'Atomic Habits',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['habits', 'systems', 'goals']
  },
  {
    id: 'fc-ah-008',
    front: 'Why does James Clear say "You do not rise to the level of your goals, you fall to the level of your systems"?',
    back: 'This highlights that long-term success depends on the quality of your daily systems and habits, not your ambitions. When motivation fades, your systems determine your actions. Building effective systems ensures consistent progress regardless of how you feel on any given day.',
    category: 'Personal Development',
    source: 'Atomic Habits',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['habits', 'systems', 'motivation']
  },
  {
    id: 'fc-ah-009',
    front: 'What is the two-step process to change your identity?',
    back: '1. Decide the type of person you want to be 2. Prove it to yourself with small wins. Each action you take is a vote for the type of person you wish to become. No single instance will transform your beliefs, but as votes accumulate, so does evidence of your new identity.',
    category: 'Personal Development',
    source: 'Atomic Habits',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['habits', 'identity', 'small-wins']
  },
  {
    id: 'fc-ah-010',
    front: 'What role does the cue play in habit formation?',
    back: 'The cue triggers your brain to initiate a behavior. It is a bit of information that predicts a reward. Our ancestors paid attention to cues signaling primary rewards like food, water, and sex. Today, we spend time on cues predicting secondary rewards like money, fame, and approval.',
    category: 'Personal Development',
    source: 'Atomic Habits',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['habits', 'cue', 'habit-loop']
  },
  {
    id: 'fc-ah-011',
    front: 'What is Environment Design for habit building?',
    back: 'Environment Design involves structuring your surroundings to make cues for good habits obvious and cues for bad habits invisible. Your environment shapes behavior more than willpower. Make good choices the default by placing positive triggers in plain sight and removing negative ones.',
    category: 'Personal Development',
    source: 'Atomic Habits',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['habits', 'environment-design', 'cues']
  },
  {
    id: 'fc-ah-012',
    front: 'What is Habit Stacking?',
    back: 'Habit Stacking is linking a new habit to an existing one using the formula: "After I [CURRENT HABIT], I will [NEW HABIT]." Example: "After I pour my morning coffee, I will meditate for one minute." This leverages the momentum of existing behaviors to build new ones.',
    category: 'Personal Development',
    source: 'Atomic Habits',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['habits', 'habit-stacking', 'implementation']
  },
  {
    id: 'fc-ah-013',
    front: 'What is an Implementation Intention?',
    back: 'An Implementation Intention is a plan you make beforehand about when and where to act, using the format: "I will [BEHAVIOR] at [TIME] in [LOCATION]." Example: "I will exercise for 30 minutes at 7am in my living room." This strategy removes ambiguity and increases follow-through.',
    category: 'Personal Development',
    source: 'Atomic Habits',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['habits', 'implementation-intention', 'planning']
  },
  {
    id: 'fc-ah-014',
    front: 'What is Temptation Bundling?',
    back: 'Temptation Bundling links an action you want to do with an action you need to do. Formula: "After I [HABIT I NEED], I will [HABIT I WANT]." Example: Only listen to your favorite podcast while exercising. This makes difficult habits more attractive by pairing them with immediate pleasures.',
    category: 'Personal Development',
    source: 'Atomic Habits',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['habits', 'temptation-bundling', 'motivation']
  },
  {
    id: 'fc-ah-015',
    front: 'How can you make good habits more obvious?',
    back: 'Strategies include: 1. Fill out a Habits Scorecard to become aware of current habits 2. Use Implementation Intentions 3. Use Habit Stacking 4. Design your environment to expose cues 5. Create visual triggers like placing a book on your pillow if you want to read before bed.',
    category: 'Personal Development',
    source: 'Atomic Habits',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['habits', 'make-it-obvious', 'first-law']
  },
  {
    id: 'fc-ah-016',
    front: 'What is a Habits Scorecard?',
    back: 'A Habits Scorecard is an exercise where you list your daily habits and mark each as positive (+), negative (-), or neutral (=). This creates awareness of automatic behaviors. The goal is not to judge yourself but to observe what you are actually doing throughout the day.',
    category: 'Personal Development',
    source: 'Atomic Habits',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['habits', 'awareness', 'habits-scorecard']
  },
  {
    id: 'fc-ah-017',
    front: 'Why is context important for habit formation?',
    back: 'Context determines behavior more than we realize. We mentally assign habits to locations. Your couch becomes associated with relaxing, your desk with working. To build new habits, create new contexts or redesign existing spaces. It is easier to build habits in new environments where you are not fighting old cues.',
    category: 'Personal Development',
    source: 'Atomic Habits',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['habits', 'context', 'environment']
  },
  {
    id: 'fc-ah-018',
    front: 'How do social norms influence habits?',
    back: 'We imitate habits of three groups: 1. The close (family and friends) 2. The many (the tribe) 3. The powerful (those with status). Surrounding yourself with people who have the habits you want makes those behaviors normal and attractive. Join cultures where your desired behavior is the default.',
    category: 'Personal Development',
    source: 'Atomic Habits',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['habits', 'social-influence', 'environment']
  },
  {
    id: 'fc-ah-019',
    front: 'What makes a habit attractive according to dopamine?',
    back: 'Dopamine is released not only when you experience pleasure but also when you anticipate it. Anticipation of a reward, not its fulfillment, drives action. This is why the craving stage of the habit loop is so powerful. Making a habit attractive means amplifying the anticipation.',
    category: 'Personal Development',
    source: 'Atomic Habits',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['habits', 'dopamine', 'craving']
  },
  {
    id: 'fc-ah-020',
    front: 'How can you reframe habits to make them more attractive?',
    back: 'Motivation Ritual: Associate habits with positive feelings by reframing your mindset. Instead of "I have to exercise," say "I get to build strength." Focus on benefits rather than burdens. Highlight how the habit helps you live according to your values and identity.',
    category: 'Personal Development',
    source: 'Atomic Habits',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['habits', 'reframing', 'motivation']
  },
  {
    id: 'fc-ah-021',
    front: 'What is the Two-Minute Rule?',
    back: 'The Two-Minute Rule states that when you start a new habit, it should take less than two minutes to do. "Read before bed" becomes "Read one page." "Run three miles" becomes "Put on my running shoes." This makes habits so easy you cannot say no, establishing the ritual before optimizing.',
    category: 'Personal Development',
    source: 'Atomic Habits',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['habits', 'two-minute-rule', 'make-it-easy']
  },
  {
    id: 'fc-ah-022',
    front: 'What is Habit Shaping?',
    back: 'Habit Shaping is breaking down a habit into progressive phases. Phase 1: Show up (2 minutes). Phase 2: Do a bit more. Phase 3: Build the full habit. Example for exercise: Phase 1: Put on workout clothes. Phase 2: Drive to gym. Phase 3: Exercise for 5 minutes. Phase 4: Full workout. Master each phase before advancing.',
    category: 'Personal Development',
    source: 'Atomic Habits',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['habits', 'habit-shaping', 'progressive-mastery']
  },
  {
    id: 'fc-ah-023',
    front: 'What is the Law of Least Effort?',
    back: 'The Law of Least Effort states that we naturally gravitate toward options requiring the least work. To build good habits, reduce friction by decreasing steps between you and good behaviors. To break bad habits, increase friction by adding steps. Energy is precious and the brain conserves it.',
    category: 'Personal Development',
    source: 'Atomic Habits',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['habits', 'friction', 'make-it-easy']
  },
  {
    id: 'fc-ah-024',
    front: 'How does Habit Tracking work?',
    back: 'Habit Tracking involves recording each time you complete a habit. It creates a visual cue reminding you to act, provides motivation through seeing progress, and offers satisfaction from marking off completions. The most effective form is simple: use a calendar and mark X for each day completed.',
    category: 'Personal Development',
    source: 'Atomic Habits',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['habits', 'habit-tracking', 'measurement']
  },
  {
    id: 'fc-ah-025',
    front: 'What is the power of never breaking the chain?',
    back: 'Consistency matters more than perfection. When you see a chain of X marks on your calendar, it creates motivation to keep going. The first rule of habit tracking: never miss twice. Missing once is an accident; missing twice is the start of a new habit. Bad days still count when you show up.',
    category: 'Personal Development',
    source: 'Atomic Habits',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['habits', 'consistency', 'habit-tracking']
  },
  {
    id: 'fc-ah-026',
    front: 'How do variable rewards strengthen habits?',
    back: 'Variable rewards create more dopamine than predictable ones. This is why slot machines are addictive. The brain finds surprises more rewarding. For habits, occasional unexpected rewards can increase motivation. However, be cautious as variable rewards can also fuel bad habits like social media checking.',
    category: 'Personal Development',
    source: 'Atomic Habits',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['habits', 'variable-rewards', 'dopamine']
  },
  {
    id: 'fc-ah-027',
    front: 'What makes a reward satisfying enough to repeat?',
    back: 'Immediate rewards reinforce habits better than delayed ones. The human brain evolved to prioritize immediate rewards over future benefits. To make habits stick, add immediate satisfaction. Example: Transfer money to a vacation fund after each workout. The reward should align with your identity.',
    category: 'Personal Development',
    source: 'Atomic Habits',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['habits', 'rewards', 'make-it-satisfying']
  },
  {
    id: 'fc-ah-028',
    front: 'What is an accountability partner?',
    back: 'An accountability partner is someone who watches your behavior and holds you responsible. We care deeply about what others think and do not want to lose their respect. A habit contract signed with witnesses adds social cost to failing, making bad habits more unsatisfying to continue.',
    category: 'Personal Development',
    source: 'Atomic Habits',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['habits', 'accountability', 'social-support']
  },
  {
    id: 'fc-ah-029',
    front: 'What is a commitment device?',
    back: 'A commitment device is a choice you make in the present that locks in better behavior in the future. Examples: Buy food in small packages to eat less, delete social media apps from your phone, set up automatic savings. These increase friction for bad behaviors before temptation strikes.',
    category: 'Personal Development',
    source: 'Atomic Habits',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['habits', 'commitment-device', 'friction']
  },
  {
    id: 'fc-ah-030',
    front: 'What is priming your environment?',
    back: 'Priming means preparing your environment in advance for future use. Set out workout clothes the night before. Prepare healthy snacks in visible containers. Remove batteries from the TV remote. These small actions reduce friction for good habits and increase friction for bad ones.',
    category: 'Personal Development',
    source: 'Atomic Habits',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['habits', 'environment-design', 'priming']
  },
  {
    id: 'fc-ah-031',
    front: 'What is the Plateau of Latent Potential?',
    back: 'The Plateau of Latent Potential is the period when effort seems to produce no visible results. Like an ice cube melting at exactly 32 degrees after gradual warming, breakthroughs require crossing a critical threshold. Habits appear not to work until you break through. This valley is where most people give up.',
    category: 'Personal Development',
    source: 'Atomic Habits',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['habits', 'plateau-of-latent-potential', 'patience']
  },
  {
    id: 'fc-ah-032',
    front: 'How do you invert the Four Laws to break bad habits?',
    back: 'To break bad habits, invert each law: 1. Make it Invisible (remove cues) 2. Make it Unattractive (reframe the benefits) 3. Make it Difficult (increase friction) 4. Make it Unsatisfying (add immediate consequences). Breaking habits requires making the behavior as undesirable as possible.',
    category: 'Personal Development',
    source: 'Atomic Habits',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['habits', 'breaking-bad-habits', 'inversion']
  },
  {
    id: 'fc-ah-033',
    front: 'How can you make bad habits invisible?',
    back: 'Remove cues from your environment. If you want to stop snacking, do not keep junk food in the house. Want to watch less TV? Unplug it after each use. Out of sight, out of mind. Self-control is easier when you do not have to exercise it. Reduce exposure to cues that trigger unwanted behaviors.',
    category: 'Personal Development',
    source: 'Atomic Habits',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['habits', 'breaking-bad-habits', 'environment']
  },
  {
    id: 'fc-ah-034',
    front: 'How can you make bad habits unattractive?',
    back: 'Reframe your mindset to highlight the benefits of avoiding the habit. Instead of "I cannot smoke," think "I am a non-smoker who enjoys clean lungs." Associate the habit with its true costs: financial burden, health damage, wasted time. Join a community where the bad habit is not normal.',
    category: 'Personal Development',
    source: 'Atomic Habits',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['habits', 'breaking-bad-habits', 'reframing']
  },
  {
    id: 'fc-ah-035',
    front: 'What is the Goldilocks Rule?',
    back: 'The Goldilocks Rule states that humans experience peak motivation when working on tasks right on the edge of their current abilities. Not too hard, not too easy, but just right. A 4% challenge increase keeps habits engaging. Flow state occurs when challenge and skill are balanced.',
    category: 'Personal Development',
    source: 'Atomic Habits',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['habits', 'goldilocks-rule', 'flow-state']
  },
  {
    id: 'fc-ah-036',
    front: 'How do you maintain habits once formed?',
    back: 'The greatest threat to success is not failure but boredom. When habits become routine, we get bored and seek novelty. Professionals stick to their schedule even when the work is not exciting. The ability to keep going when boredom sets in is what separates professionals from amateurs.',
    category: 'Personal Development',
    source: 'Atomic Habits',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['habits', 'boredom', 'consistency']
  },
  {
    id: 'fc-ah-037',
    front: 'What is the downside of habits becoming automatic?',
    back: 'When habits become automatic, you may stop paying attention to small errors. Mastery requires deliberate practice plus habit. Use habits to get the fundamentals right, but periodically review and adjust. Reflection and review prevent complacency and enable continuous improvement.',
    category: 'Personal Development',
    source: 'Atomic Habits',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['habits', 'deliberate-practice', 'review']
  },
  {
    id: 'fc-ah-038',
    front: 'What is the Annual Review process for habits?',
    back: 'James Clear recommends an annual review asking: What went well this year? What did not go well? What did I learn? Additionally, an Integrity Report asks: What are my core values? Am I living according to them? How can I set a higher standard? This prevents identity from becoming rigid.',
    category: 'Personal Development',
    source: 'Atomic Habits',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['habits', 'annual-review', 'reflection']
  },
  {
    id: 'fc-ah-039',
    front: 'Why is it dangerous to let habits define your identity too rigidly?',
    back: 'When your identity is tied to one role ("I am an athlete"), losing that role can devastate you. Keep your identity flexible. Be "someone who loves to move" rather than "a runner." Redefine yourself to keep important aspects while staying adaptable. Progress requires unlearning.',
    category: 'Personal Development',
    source: 'Atomic Habits',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['habits', 'identity', 'flexibility']
  },
  {
    id: 'fc-ah-040',
    front: 'What is the ultimate form of intrinsic motivation according to Atomic Habits?',
    back: 'The ultimate form of intrinsic motivation is when a habit becomes part of your identity. You are not pursuing behavior change for external rewards but because this is who you are. A true behavior change is an identity change. You become your habits, and your habits express who you are.',
    category: 'Personal Development',
    source: 'Atomic Habits',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['habits', 'identity', 'intrinsic-motivation']
  },

  // ============================================
  // DEEP WORK - Extended Flashcards (40 cards)
  // Covers: Deep Work definition, hypothesis, shallow work, attention residue,
  // Four philosophies, grand gestures, embrace boredom, productive meditation,
  // Quit social media, scheduling methods, fixed-schedule productivity
  // ============================================
  {
    id: 'fc-dw-001',
    front: 'What is Cal Newport\'s definition of Deep Work?',
    back: 'Professional activities performed in a state of distraction-free concentration that push your cognitive capabilities to their limit. These efforts create new value, improve your skill, and are hard to replicate.',
    category: 'Personal Development',
    source: 'Deep Work',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['deep-work', 'focus', 'definition']
  },
  {
    id: 'fc-dw-002',
    front: 'What is Shallow Work according to Cal Newport?',
    back: 'Non-cognitively demanding, logistical-style tasks, often performed while distracted. These efforts tend not to create much new value in the world and are easy to replicate. Examples include email, meetings, and administrative tasks.',
    category: 'Personal Development',
    source: 'Deep Work',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['deep-work', 'shallow-work', 'definition']
  },
  {
    id: 'fc-dw-003',
    front: 'What is the Deep Work Hypothesis?',
    back: 'The ability to perform deep work is becoming increasingly rare at exactly the same time it is becoming increasingly valuable in our economy. As a consequence, the few who cultivate this skill, and then make it the core of their working life, will thrive.',
    category: 'Personal Development',
    source: 'Deep Work',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['deep-work', 'hypothesis', 'economy']
  },
  {
    id: 'fc-dw-004',
    front: 'What is Attention Residue and why does it harm productivity?',
    back: 'Attention residue occurs when you switch from Task A to Task B while still thinking about Task A. Research by Sophie Leroy shows that people experiencing attention residue perform significantly worse on the next task. Even brief email checks create residue that can last 10-20 minutes.',
    category: 'Personal Development',
    source: 'Deep Work',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['deep-work', 'attention-residue', 'focus', 'multitasking']
  },
  {
    id: 'fc-dw-005',
    front: 'What is the Craftsman Approach to tool selection?',
    back: 'Identify the core factors that determine success and happiness in your professional and personal life. Adopt a tool only if its positive impacts on these factors substantially outweigh its negative impacts. This contrasts with the "any-benefit" approach of adopting tools with any possible benefit.',
    category: 'Personal Development',
    source: 'Deep Work',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['deep-work', 'craftsman-mindset', 'tools', 'social-media']
  },
  {
    id: 'fc-dw-006',
    front: 'According to Newport, what three groups will thrive in the new economy?',
    back: '1) High-skilled workers who can work with intelligent machines, 2) Superstars who are the best at what they do in their field, and 3) Owners with capital to invest in the new technologies. Deep work is essential for the first two groups.',
    category: 'Personal Development',
    source: 'Deep Work',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['deep-work', 'economy', 'career']
  },
  {
    id: 'fc-dw-007',
    front: 'What are the two core abilities for thriving in the new economy?',
    back: '1) The ability to quickly master hard things, and 2) The ability to produce at an elite level, in terms of both quality and speed. Both abilities fundamentally depend on your capacity for deep work.',
    category: 'Personal Development',
    source: 'Deep Work',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['deep-work', 'skills', 'mastery', 'productivity']
  },
  {
    id: 'fc-dw-008',
    front: 'What is Newport\'s High-Quality Work Produced formula?',
    back: 'High-Quality Work Produced = (Time Spent) x (Intensity of Focus). This formula explains why deep workers outproduce shallow workers even with similar hours - their intense focus multiplies the value of each hour spent.',
    category: 'Personal Development',
    source: 'Deep Work',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['deep-work', 'productivity', 'focus', 'formula']
  },
  {
    id: 'fc-dw-009',
    front: 'Why is deep work rare in modern workplaces according to Newport?',
    back: 'Three main reasons: 1) The Metric Black Hole - it\'s hard to measure deep work\'s value, 2) The Principle of Least Resistance - shallow work is easier and provides immediate feedback, 3) Busyness as Proxy for Productivity - without clear indicators, people use visible activity as proof of value.',
    category: 'Personal Development',
    source: 'Deep Work',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['deep-work', 'workplace', 'shallow-work', 'busyness']
  },
  {
    id: 'fc-dw-010',
    front: 'What does Newport mean by the "Principle of Least Resistance" in workplace behavior?',
    back: 'In a business setting, without clear feedback on the impact of various behaviors on the bottom line, we will tend toward behaviors that are easiest in the moment. Constantly checking email or holding frequent meetings feels productive but avoids the harder work of deep thinking.',
    category: 'Personal Development',
    source: 'Deep Work',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['deep-work', 'workplace', 'email', 'meetings']
  },
  {
    id: 'fc-dw-011',
    front: 'What is the Monastic Philosophy of deep work scheduling?',
    back: 'Maximizing deep efforts by eliminating or radically minimizing shallow obligations. Practitioners often disappear from the world entirely to focus on their work. Example: Donald Knuth, who has no email and focuses solely on his writing and research.',
    category: 'Personal Development',
    source: 'Deep Work',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['deep-work', 'monastic', 'philosophy', 'scheduling']
  },
  {
    id: 'fc-dw-012',
    front: 'What is the Bimodal Philosophy of deep work scheduling?',
    back: 'Dividing your time into clearly defined stretches of deep work and periods for everything else. The minimum unit of deep time is one full day. Example: Carl Jung retreating to his tower in Bollingen for intense writing while maintaining his clinical practice in Zurich.',
    category: 'Personal Development',
    source: 'Deep Work',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['deep-work', 'bimodal', 'philosophy', 'scheduling']
  },
  {
    id: 'fc-dw-013',
    front: 'What is the Rhythmic Philosophy of deep work scheduling?',
    back: 'Creating a regular habit of deep work by building it into your daily schedule at set times. Often uses the chain method - marking each day of deep work on a calendar creates visual momentum. This is the most practical approach for most knowledge workers.',
    category: 'Personal Development',
    source: 'Deep Work',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['deep-work', 'rhythmic', 'philosophy', 'scheduling', 'habits']
  },
  {
    id: 'fc-dw-014',
    front: 'What is the Journalistic Philosophy of deep work scheduling?',
    back: 'Fitting deep work wherever you can into your schedule, switching into deep work mode at a moment\'s notice. Named after journalists who can write on deadline anywhere. This approach is not for beginners as it requires the ability to rapidly switch into deep work mode.',
    category: 'Personal Development',
    source: 'Deep Work',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['deep-work', 'journalistic', 'philosophy', 'scheduling']
  },
  {
    id: 'fc-dw-015',
    front: 'Which deep work philosophy does Newport recommend for most people starting out?',
    back: 'The Rhythmic Philosophy. It works well with the reality of human nature by using chain methods and habits to generate consistent deep work sessions. Unlike the journalistic approach, it doesn\'t require the ability to switch rapidly into deep work mode.',
    category: 'Personal Development',
    source: 'Deep Work',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['deep-work', 'rhythmic', 'philosophy', 'beginners']
  },
  {
    id: 'fc-dw-016',
    front: 'What is a "Grand Gesture" and how does it support deep work?',
    back: 'A radical change to your normal environment, involving significant investment of effort or money, to support a deep work task. Examples: J.K. Rowling checking into an expensive hotel to finish Harry Potter, Bill Gates\' "Think Weeks." The gesture increases perceived importance and reduces temptation to abandon the task.',
    category: 'Personal Development',
    source: 'Deep Work',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['deep-work', 'grand-gesture', 'environment', 'commitment']
  },
  {
    id: 'fc-dw-017',
    front: 'What is the 4DX Framework and how does Newport apply it to deep work?',
    back: 'The 4 Disciplines of Execution: 1) Focus on the Wildly Important - identify a small number of ambitious goals, 2) Act on Lead Measures - track hours spent in deep work, 3) Keep a Compelling Scoreboard - make deep work hours visible, 4) Create a Cadence of Accountability - review progress weekly.',
    category: 'Personal Development',
    source: 'Deep Work',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['deep-work', '4dx', 'execution', 'goals', 'metrics']
  },
  {
    id: 'fc-dw-018',
    front: 'What is the difference between lead measures and lag measures in deep work?',
    back: 'Lag measures describe what you\'re ultimately trying to improve (papers published, projects completed). Lead measures describe behaviors that drive success on lag measures (hours of deep work). Newport argues tracking lead measures (deep work hours) is more effective because you can directly influence them.',
    category: 'Personal Development',
    source: 'Deep Work',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['deep-work', 'metrics', 'lead-measures', 'productivity']
  },
  {
    id: 'fc-dw-019',
    front: 'Why does Newport recommend working with a collaborator for certain types of deep work?',
    back: 'The "whiteboard effect" - working with someone else on a problem can push you deeper than working alone. The presence of another person waiting for your contribution can short-circuit the natural instinct to avoid depth. This combines well with the hub-and-spoke model of office design.',
    category: 'Personal Development',
    source: 'Deep Work',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['deep-work', 'collaboration', 'whiteboard-effect']
  },
  {
    id: 'fc-dw-020',
    front: 'What role does downtime play in supporting deep work?',
    back: 'Downtime is essential for three reasons: 1) It aids insights through unconscious thought processing, 2) It helps recharge attention by allowing directed attention to rest, 3) Deep work capacity is limited (roughly 4 hours per day for experts). A clear shutdown ritual helps the mind truly rest.',
    category: 'Personal Development',
    source: 'Deep Work',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['deep-work', 'rest', 'downtime', 'recovery']
  },
  {
    id: 'fc-dw-021',
    front: 'What is the "Embrace Boredom" rule and why is it important?',
    back: 'You must train your mind to resist distraction, not just during work but all the time. If you constantly pull out your phone when bored, you\'re weakening your attention muscles. Schedule internet breaks and resist the urge to check during offline blocks - this rewires your brain to tolerate boredom.',
    category: 'Personal Development',
    source: 'Deep Work',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['deep-work', 'boredom', 'attention', 'distraction']
  },
  {
    id: 'fc-dw-022',
    front: 'What is Productive Meditation?',
    back: 'Taking a period where you\'re physically occupied but not mentally (walking, jogging, showering) and focusing attention on a single well-defined professional problem. The goal is to review relevant variables, define the next-step question, then consolidate gains by reviewing the answer clearly.',
    category: 'Personal Development',
    source: 'Deep Work',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['deep-work', 'productive-meditation', 'focus', 'problem-solving']
  },
  {
    id: 'fc-dw-023',
    front: 'What two obstacles does Newport identify in practicing Productive Meditation?',
    back: '1) Looping - your mind keeps reviewing what you already know instead of making progress. Combat by noticing and redirecting. 2) Distraction - unrelated thoughts intrude. Combat by gently returning focus to the problem, like in mindfulness meditation.',
    category: 'Personal Development',
    source: 'Deep Work',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['deep-work', 'productive-meditation', 'obstacles', 'focus']
  },
  {
    id: 'fc-dw-024',
    front: 'What is Newport\'s main argument against social media?',
    back: 'Social media fragments attention and reduces capacity for deep work. Most people use the "any-benefit" approach - adopting tools if they offer any possible benefit. Newport argues for the craftsman approach: only adopt a tool if its benefits substantially outweigh its harms to your core professional and personal goals.',
    category: 'Personal Development',
    source: 'Deep Work',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['deep-work', 'social-media', 'craftsman-mindset', 'tools']
  },
  {
    id: 'fc-dw-025',
    front: 'What is the "30-Day Social Media Experiment" that Newport proposes?',
    back: 'Quit social media for 30 days without announcing it. After 30 days, ask: 1) Would the last 30 days have been notably better with this service? 2) Did people care that I wasn\'t using it? If both answers are no, quit permanently. This counters the fear that quitting will harm your career or relationships.',
    category: 'Personal Development',
    source: 'Deep Work',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['deep-work', 'social-media', 'experiment', 'digital-minimalism']
  },
  {
    id: 'fc-dw-026',
    front: 'How does Newport suggest training attention using memorization?',
    back: 'Practice memorizing a deck of cards using a memory palace technique. This trains your ability to concentrate intensely - the same mental muscle used in deep work. The exercise forces sustained attention on a single task and strengthens the ability to maintain focus.',
    category: 'Personal Development',
    source: 'Deep Work',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['deep-work', 'attention-training', 'memory', 'focus']
  },
  {
    id: 'fc-dw-027',
    front: 'What does Newport mean by "Don\'t Take Breaks from Distraction, Take Breaks from Focus"?',
    back: 'Instead of scheduling occasional breaks from distraction to focus, schedule occasional breaks from focus to distraction. Schedule in advance when you\'ll use the internet, then avoid it completely outside those times. This trains your brain to resist switching to distraction at the first hint of boredom.',
    category: 'Personal Development',
    source: 'Deep Work',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['deep-work', 'distraction', 'internet', 'scheduling']
  },
  {
    id: 'fc-dw-028',
    front: 'What is the Law of the Vital Few (80/20 rule) as applied to deep work?',
    back: 'In many settings, 80% of a given effect is due to just 20% of possible causes. For deep work: focus on the vital few activities that generate the most value for your goals. Most time spent on social media, news sites, and infotainment contributes little to your most important outcomes.',
    category: 'Personal Development',
    source: 'Deep Work',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['deep-work', 'pareto-principle', 'priorities', 'focus']
  },
  {
    id: 'fc-dw-029',
    front: 'How does deep work relate to deliberate practice?',
    back: 'Deep work is essentially the same as deliberate practice - the systematic stretching of your abilities beyond your current comfort zone. Both require: 1) Focused attention on the skill to improve, 2) Feedback to correct approach, and 3) Staying in the discomfort zone where improvement happens.',
    category: 'Personal Development',
    source: 'Deep Work',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['deep-work', 'deliberate-practice', 'skill-development', 'mastery']
  },
  {
    id: 'fc-dw-030',
    front: 'What neurological evidence does Newport cite for the value of deep work?',
    back: 'Myelin - the white tissue that develops around neurons - grows when you fire circuits in isolation with intense focus. The more myelin around a neural circuit, the faster and more accurately it fires. Deep work, by demanding intense focus, optimizes the myelination process essential for skill development.',
    category: 'Personal Development',
    source: 'Deep Work',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['deep-work', 'neuroscience', 'myelin', 'learning']
  },
  {
    id: 'fc-dw-031',
    front: 'What is the "Shutdown Complete" ritual and why does Newport recommend it?',
    back: 'A strict shutdown ritual performed at the end of each workday: review incomplete tasks, make a plan for each, say "shutdown complete." This provides closure that allows your mind to fully release work thoughts. Without it, attention residue keeps you mentally engaged, preventing true rest.',
    category: 'Personal Development',
    source: 'Deep Work',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['deep-work', 'shutdown-ritual', 'work-life-balance', 'recovery']
  },
  {
    id: 'fc-dw-032',
    front: 'What is Fixed-Schedule Productivity?',
    back: 'Set a firm goal for when your workday ends, then work backward to find productivity strategies that allow you to meet that deadline. This constraint forces you to treat time as precious and make ruthless decisions about what earns access to your schedule, naturally limiting shallow work.',
    category: 'Personal Development',
    source: 'Deep Work',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['deep-work', 'fixed-schedule', 'productivity', 'time-management']
  },
  {
    id: 'fc-dw-033',
    front: 'How does Newport suggest quantifying the depth of every activity?',
    back: 'Ask: "How long would it take to train a smart recent college graduate with no specialized training in my field to complete this task?" Tasks requiring many months are deep; tasks requiring days or weeks are shallow. Use this metric to audit your schedule and identify shallow work to eliminate.',
    category: 'Personal Development',
    source: 'Deep Work',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['deep-work', 'shallow-work', 'evaluation', 'productivity']
  },
  {
    id: 'fc-dw-034',
    front: 'What is Newport\'s approach to scheduling every minute of your day?',
    back: 'At the start of each workday, create a time-block schedule dividing your day into blocks of at least 30 minutes each. Assign activities to each block. When disrupted, revise the schedule. The goal isn\'t rigid adherence but thoughtful time management - your schedule should be revised many times per day.',
    category: 'Personal Development',
    source: 'Deep Work',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['deep-work', 'time-blocking', 'scheduling', 'planning']
  },
  {
    id: 'fc-dw-035',
    front: 'What does Newport recommend asking your boss about shallow work?',
    back: '"What percentage of my time should be spent on shallow work?" This forces an explicit conversation about expectations. Most bosses will say 30-50%, which gives you cover to reduce shallow work. If they say higher, it reveals your job structurally does not support career advancement.',
    category: 'Personal Development',
    source: 'Deep Work',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['deep-work', 'shallow-work', 'workplace', 'negotiation']
  },
  {
    id: 'fc-dw-036',
    front: 'What are the key components of an effective deep work ritual?',
    back: '1) Where you\'ll work and for how long, 2) How you\'ll work once you start (rules like no internet), 3) How you\'ll support your work (coffee, food, light exercise). Rituals reduce the willpower needed to transition into deep work and maintain focus.',
    category: 'Personal Development',
    source: 'Deep Work',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['deep-work', 'rituals', 'habits', 'productivity']
  },
  {
    id: 'fc-dw-037',
    front: 'What is Newport\'s strategy for handling email more efficiently?',
    back: 'Three tactics: 1) Make people who send you email do more work (process-centric responses), 2) Don\'t respond to emails that are ambiguous, not interesting, or nothing good would happen if you did respond, 3) Set sender expectations about response times.',
    category: 'Personal Development',
    source: 'Deep Work',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['deep-work', 'email', 'communication', 'shallow-work']
  },
  {
    id: 'fc-dw-038',
    front: 'What is a "process-centric" email response?',
    back: 'An email that identifies the project, describes the process for completion, and specifies next steps - all in one message. Instead of "Let\'s meet sometime," write "Here\'s what needs to happen, here are dates that work, reply only if these don\'t work, otherwise I\'ll see you at X."',
    category: 'Personal Development',
    source: 'Deep Work',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['deep-work', 'email', 'communication', 'efficiency']
  },
  {
    id: 'fc-dw-039',
    front: 'What does Newport mean by "Drain the Shallows"?',
    back: 'Aggressively identify and minimize shallow work in your schedule. Steps: 1) Schedule every minute of your day, 2) Quantify the depth of each activity, 3) Ask your boss for a shallow work budget, 4) Finish work by 5:30, 5) Become hard to reach. Shallow work will expand to fill time if you let it.',
    category: 'Personal Development',
    source: 'Deep Work',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['deep-work', 'shallow-work', 'productivity', 'time-management']
  },
  {
    id: 'fc-dw-040',
    front: 'What is the relationship between meaning and deep work according to Newport?',
    back: 'Deep work generates a sense of meaning and satisfaction in two ways: 1) Neurologically - focusing on meaningful work creates a richer, more satisfying life than attention to shallow concerns, 2) Psychologically - the state of flow achieved in deep work is intrinsically rewarding. A deep life is a good life.',
    category: 'Personal Development',
    source: 'Deep Work',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['deep-work', 'meaning', 'flow', 'satisfaction', 'philosophy']
  },

  // ============================================
  // BE YOUR FUTURE SELF NOW - Benjamin Hardy
  // ============================================
  {
    id: 'fs-001',
    front: 'Why do we treat our Future Self as a stranger?',
    back: 'Brain scans show we think of our Future Self using the same regions we use for strangers. This disconnection leads to poor long-term decisions - we discount future rewards and burden our future selves.',
    category: 'Personal Development',
    source: 'Be Your Future Self Now',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['future-self', 'psychology', 'decision-making']
  },
  {
    id: 'fs-002',
    front: 'What is "prospection"?',
    back: 'Your brain is primarily a future-simulating machine, not a memory machine. Research shows humans spend most of their time thinking about the future. The quality of your life depends on the quality of your vision of the future.',
    category: 'Personal Development',
    source: 'Be Your Future Self Now',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['future-self', 'brain', 'vision']
  },
  {
    id: 'fs-003',
    front: 'What is "The Gap" vs "The Gain"?',
    back: 'The Gap: Comparing yourself to an ideal (creates unhappiness)\nThe Gain: Comparing yourself to your past self (creates confidence and momentum)\n\nAlways measure backward from where you started, not forward to an ideal.',
    category: 'Personal Development',
    source: 'Be Your Future Self Now',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['future-self', 'mindset', 'progress']
  },
  {
    id: 'fs-004',
    front: 'What are the 7 threats to your Future Self?',
    back: '1. Not having a clear Future Self\n2. Being stuck in your past\n3. Lacking commitment\n4. Not setting goals\n5. Being addicted to urgency\n6. Consuming over creating\n7. Living someone else\'s vision',
    category: 'Personal Development',
    source: 'Be Your Future Self Now',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['future-self', 'threats', 'growth']
  },
  {
    id: 'fs-005',
    front: 'Why is "10X easier than 2X"?',
    back: '10X goals force qualitative change and eliminate 80% of current activities. They force you to focus on what REALLY matters and find entirely new approaches. 2X just means doing more of the same with more effort.',
    category: 'Personal Development',
    source: 'Be Your Future Self Now',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['future-self', 'goals', '10x']
  },

  // ============================================
  // MAN'S SEARCH FOR MEANING - Viktor Frankl
  // ============================================
  {
    id: 'ms-001',
    front: 'What is "the last human freedom" according to Viktor Frankl?',
    back: 'The freedom to choose one\'s attitude in any given set of circumstances. "Everything can be taken from a man but one thing: the last of the human freedoms—to choose one\'s attitude."',
    category: 'Personal Development',
    source: "Man's Search for Meaning",
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['meaning', 'freedom', 'attitude']
  },
  {
    id: 'ms-002',
    front: 'What is the "will to meaning"?',
    back: 'According to Frankl, the primary human drive is not pleasure (Freud) or power (Adler), but MEANING. "Those who have a \'why\' to live can bear almost any \'how.\'" Meaning is found through work, love, or suffering.',
    category: 'Personal Development',
    source: "Man's Search for Meaning",
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['meaning', 'purpose', 'logotherapy']
  },
  {
    id: 'ms-003',
    front: 'What are the three sources of meaning?',
    back: '1. Creating - Work, art, contribution\n2. Experiencing - Love, beauty, nature\n3. Attitude toward unavoidable suffering\n\nEven when we can\'t change a situation, we can change ourselves.',
    category: 'Personal Development',
    source: "Man's Search for Meaning",
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['meaning', 'purpose', 'sources']
  },
  {
    id: 'ms-004',
    front: 'What is the "existential vacuum"?',
    back: 'A sense of meaninglessness and emptiness in modern society. Unlike animals (driven by instincts) or past generations (guided by traditions), modern humans must find their own meaning.',
    category: 'Personal Development',
    source: "Man's Search for Meaning",
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['meaning', 'existential', 'modern-life']
  },
  {
    id: 'ms-005',
    front: 'What is "tragic optimism"?',
    back: 'Saying yes to life despite pain, guilt, and death. It\'s the capacity to turn: suffering into achievement, guilt into change, mortality into meaningful action. Not naive happiness, but finding meaning through tragedy.',
    category: 'Personal Development',
    source: "Man's Search for Meaning",
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['meaning', 'optimism', 'suffering']
  },
  {
    id: 'ms-006',
    front: 'When does suffering cease to be suffering?',
    back: 'The moment it finds a meaning. Suffering without meaning is despair. Suffering with meaning becomes sacrifice, growth, or service.',
    category: 'Personal Development',
    source: "Man's Search for Meaning",
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['meaning', 'suffering', 'purpose']
  },

  // ============================================
  // THE SUBTLE ART - Mark Manson
  // ============================================
  {
    id: 'sa-001',
    front: 'What is the "feedback loop from hell"?',
    back: 'Feeling bad about feeling bad. Anxious about being anxious. This meta-negativity is often worse than the original problem. The desire for more positive experience is itself a negative experience.',
    category: 'Personal Development',
    source: 'The Subtle Art',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['mindset', 'emotions', 'awareness']
  },
  {
    id: 'sa-002',
    front: 'What is the "Backwards Law"?',
    back: 'The more you pursue feeling better, the less satisfied you become. Everything worthwhile is achieved through negative experience. The avoidance of suffering IS suffering.',
    category: 'Personal Development',
    source: 'The Subtle Art',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['mindset', 'paradox', 'satisfaction']
  },
  {
    id: 'sa-003',
    front: 'What does "not giving a f*ck" actually mean?',
    back: 'It doesn\'t mean being indifferent to everything. It means being comfortable with being different. It means choosing what matters to you and letting go of what doesn\'t. You have limited f*cks to give - reserve them for what truly aligns with your values.',
    category: 'Personal Development',
    source: 'The Subtle Art',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['mindset', 'values', 'priorities']
  },
  {
    id: 'sa-004',
    front: 'What is the difference between fault and responsibility?',
    back: 'Fault is past tense. Responsibility is present tense. Something might not be your fault, but it\'s always your responsibility to deal with it. Playing victim is comfortable but powerless.',
    category: 'Personal Development',
    source: 'The Subtle Art',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['mindset', 'responsibility', 'ownership']
  },
  {
    id: 'sa-005',
    front: 'What are the characteristics of good vs bad values?',
    back: 'Good values: Reality-based, socially constructive, immediate and controllable (e.g., honesty, curiosity, humility)\n\nBad values: Superstitious, socially destructive, not controllable (e.g., pleasure, material success, always being right)',
    category: 'Personal Development',
    source: 'The Subtle Art',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['values', 'mindset', 'priorities']
  },
  {
    id: 'sa-006',
    front: 'What is the "Do Something" Principle?',
    back: 'Action isn\'t just the effect of motivation; it\'s also the cause of it. Don\'t wait to feel motivated - act first, and motivation follows. The formula: Action → Inspiration → Motivation',
    category: 'Personal Development',
    source: 'The Subtle Art',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['motivation', 'action', 'productivity']
  },

  // ============================================
  // AI & MACHINE LEARNING
  // ============================================
  {
    id: 'ai-001',
    front: 'What are the Five Breakthroughs of Intelligence?',
    back: '1. Steering (600M years) - Move toward/away\n2. Reinforcement Learning (500M years) - Learn from rewards\n3. Simulation (300M years) - Imagine outcomes\n4. Mentalizing (70M years) - Theory of mind\n5. Language (100K years) - Symbolic thought',
    category: 'AI & Machine Learning',
    source: 'A Brief History of Intelligence',
    pathwayId: 'ai-ml',
    difficulty: 'intermediate',
    tags: ['ai', 'intelligence', 'evolution']
  },
  {
    id: 'ai-002',
    front: 'What is a neural network, simply explained?',
    back: 'A fancy function that: 1) Takes numbers in, 2) Does math (multiply by weights, add bias, apply activation), 3) Outputs numbers. Training = adjusting weights to minimize prediction errors. It\'s all just matrix multiplication + trial and error!',
    category: 'AI & Machine Learning',
    source: 'Deep Learning',
    pathwayId: 'ai-ml',
    difficulty: 'beginner',
    tags: ['ai', 'neural-networks', 'basics']
  },
  {
    id: 'ai-003',
    front: 'What does "training" a neural network mean?',
    back: 'Iteratively adjusting the weights to minimize prediction errors (loss). Process: 1) Make a prediction, 2) Compare to correct answer (calculate loss), 3) Adjust weights via backpropagation, 4) Repeat millions of times.',
    category: 'AI & Machine Learning',
    source: 'Deep Learning',
    pathwayId: 'ai-ml',
    difficulty: 'beginner',
    tags: ['ai', 'training', 'neural-networks']
  },
  {
    id: 'ai-004',
    front: 'What are the three types of machine learning?',
    back: '1. Supervised: Given inputs + correct answers → learns to predict\n2. Unsupervised: Just inputs → finds hidden patterns\n3. Reinforcement: Environment + rewards → learns optimal actions\n\nChatGPT uses Supervised + Reinforcement (RLHF).',
    category: 'AI & Machine Learning',
    source: 'AI 2041',
    pathwayId: 'ai-ml',
    difficulty: 'beginner',
    tags: ['ai', 'machine-learning', 'types']
  },
  {
    id: 'ai-005',
    front: 'What is the difference between Narrow AI and General AI (AGI)?',
    back: 'Narrow AI: Good at ONE specific task, can\'t transfer knowledge (what we have now - Siri, ChatGPT)\n\nAGI: Human-level reasoning across tasks, can learn anything (doesn\'t exist yet despite hype)',
    category: 'AI & Machine Learning',
    source: 'AI 2041',
    pathwayId: 'ai-ml',
    difficulty: 'beginner',
    tags: ['ai', 'agi', 'narrow-ai']
  },
  {
    id: 'ai-006',
    front: 'What are uniquely human skills that are hard to automate?',
    back: '1. Complex problem framing\n2. Ethical judgment\n3. Emotional intelligence\n4. Novel creativity\n5. Physical dexterity in unstructured environments\n\nDon\'t compete with AI - leverage it while developing these skills.',
    category: 'AI & Machine Learning',
    source: 'AI 2041',
    pathwayId: 'ai-ml',
    difficulty: 'intermediate',
    tags: ['ai', 'skills', 'career']
  },
  {
    id: 'ai-007',
    front: 'What are the main types of neural networks?',
    back: 'CNN (Convolutional): For images\nRNN/LSTM: For sequences (text, time)\nTransformer: For language (GPT, BERT)\nGAN: For generation (images, deepfakes)',
    category: 'AI & Machine Learning',
    source: 'Deep Learning',
    pathwayId: 'ai-ml',
    difficulty: 'intermediate',
    tags: ['ai', 'neural-networks', 'architectures']
  },

  // ============================================
  // WEALTH BUILDING
  // ============================================
  {
    id: 'wb-001',
    front: 'What is the "Margin of Safety" in investing?',
    back: 'Never pay full price. Always buy at a discount to intrinsic value. If a stock is worth $100, pay $70 or less. This protects against errors and bad luck. The bigger the margin, the safer the investment.',
    category: 'Wealth Building',
    source: 'The Intelligent Investor',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['investing', 'value', 'safety']
  },
  {
    id: 'wb-002',
    front: 'Who is "Mr. Market" and what does this metaphor teach?',
    back: 'Think of the market as an emotional partner. Some days he\'s euphoric (high prices), some days depressed (low prices). Key insights: You don\'t have to trade with him. His mood doesn\'t change the business value.',
    category: 'Wealth Building',
    source: 'The Intelligent Investor',
    pathwayId: 'wealth-building',
    difficulty: 'beginner',
    tags: ['investing', 'psychology', 'market']
  },
  {
    id: 'wb-003',
    front: 'What is the Rule of 72?',
    back: 'Years to double your money = 72 ÷ interest rate\n\nAt 6%: doubles in 12 years\nAt 8%: doubles in 9 years\nAt 10%: doubles in 7.2 years\nAt 12%: doubles in 6 years',
    category: 'Wealth Building',
    source: 'Start Late Finish Rich',
    pathwayId: 'wealth-building',
    difficulty: 'beginner',
    tags: ['investing', 'compound-interest', 'math']
  },
  {
    id: 'wb-004',
    front: 'What is the "Latte Factor"?',
    back: '$5/day = $150/month = $1,800/year\nInvested at 10% for 30 years = $339,000\n\nSmall daily choices have massive long-term impact. Track your daily leaks and redirect them to investments.',
    category: 'Wealth Building',
    source: 'Start Late Finish Rich',
    pathwayId: 'wealth-building',
    difficulty: 'beginner',
    tags: ['investing', 'savings', 'compound-interest']
  },
  {
    id: 'wb-005',
    front: 'What is the "Automatic Millionaire" system?',
    back: 'Pay yourself first, AUTOMATICALLY. On payday, before you see money:\n- 10% → Retirement\n- 5% → Emergency Fund\n- 5% → Investments\n\nYou won\'t miss what you never see. Remove willpower from the equation.',
    category: 'Wealth Building',
    source: 'Start Late Finish Rich',
    pathwayId: 'wealth-building',
    difficulty: 'beginner',
    tags: ['investing', 'automation', 'savings']
  },
  {
    id: 'wb-006',
    front: 'What is the Value Equation from $100M Leads?',
    back: 'Value = (Dream Outcome × Perceived Likelihood) ÷ (Time × Effort)\n\nTo increase value: Bigger dream, higher confidence, faster results, less effort required.',
    category: 'Wealth Building',
    source: '$100M Leads',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['business', 'value', 'leads']
  },
  {
    id: 'wb-007',
    front: 'What are the 4 core ways to get leads?',
    back: '1. Warm Outreach (Free) - Existing network\n2. Content (Free, Scalable) - Provide value first\n3. Cold Outreach (Free, Labor-Intensive) - Email, DMs, calls\n4. Paid Ads (Fastest, Costs Money) - Trade money for speed',
    category: 'Wealth Building',
    source: '$100M Leads',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['business', 'marketing', 'leads']
  },

  // ============================================
  // PSYCHOLOGY & DECISION SCIENCE
  // ============================================
  {
    id: 'ps-001',
    front: 'What are System 1 and System 2 thinking?',
    back: 'System 1: Fast, automatic, effortless, intuitive, always on\nSystem 2: Slow, deliberate, effortful, rational, easily depleted\n\nSystem 2 thinks it\'s in charge, but System 1 runs the show 95% of the time.',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'beginner',
    tags: ['psychology', 'thinking', 'decision-making']
  },
  {
    id: 'ps-002',
    front: 'What is anchoring bias?',
    back: 'First information disproportionately influences judgment. Examples: Real estate agents show overpriced house first. First salary number anchors negotiation. Even random numbers affect estimates.',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'beginner',
    tags: ['psychology', 'bias', 'anchoring']
  },
  {
    id: 'ps-003',
    front: 'What is confirmation bias?',
    back: 'You seek information that confirms existing beliefs. You notice evidence for your views and dismiss contradicting evidence. Social media creates echo chambers that amplify this bias.',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'beginner',
    tags: ['psychology', 'bias', 'confirmation']
  },
  {
    id: 'ps-004',
    front: 'What is the availability heuristic?',
    back: 'You judge probability by how easily examples come to mind. Plane crashes seem common (memorable). Car deaths seem rare (unmemorable). Reality: cars are far more dangerous. Dramatic events are overweighted.',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'beginner',
    tags: ['psychology', 'bias', 'availability']
  },
  {
    id: 'ps-005',
    front: 'What is loss aversion?',
    back: 'Losses hurt about twice as much as equivalent gains feel good. $100 loss feels like -$200. $100 gain feels like +$100. This explains why people hold losing stocks and avoid necessary risks.',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'beginner',
    tags: ['psychology', 'bias', 'loss-aversion']
  },
  {
    id: 'ps-006',
    front: 'What is the sunk cost fallacy?',
    back: 'You continue because of past investment rather than future value. "I\'ve already spent 3 hours on this bad movie." "I\'ve been in this relationship for years." Past costs shouldn\'t affect future decisions.',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'beginner',
    tags: ['psychology', 'bias', 'sunk-cost']
  },
  {
    id: 'ps-007',
    front: 'What is the Dunning-Kruger effect?',
    back: 'The less you know, the more confident you are. Beginners overestimate their skill. Experts underestimate theirs. Competence brings awareness of gaps. "The more I learn, the more I realize how much I don\'t know."',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['psychology', 'bias', 'dunning-kruger']
  },
  {
    id: 'ps-008',
    front: 'What is base rate neglect? Give an example.',
    back: 'Ignoring prior probability when evaluating evidence. Example: Test is 99% accurate, you test positive. If 1 in 1000 have the disease: 1 true positive + ~10 false positives = only ~9% chance you\'re actually sick (not 99%).',
    category: 'Psychology',
    source: 'The Data Detective',
    pathwayId: 'psychology',
    difficulty: 'advanced',
    tags: ['psychology', 'statistics', 'base-rate']
  },
  {
    id: 'ps-009',
    front: 'What are the 5 rules for evaluating statistics?',
    back: '1. Feel your emotions first (then analyze)\n2. Ask "Compared to what?" (demand baseline)\n3. Check the source (who and why)\n4. Beware selection effects (survivorship bias)\n5. Understand the measure (definitions matter)',
    category: 'Psychology',
    source: 'The Data Detective',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['psychology', 'statistics', 'critical-thinking']
  },

  // ============================================
  // NEGOTIATION & INFLUENCE
  // ============================================
  {
    id: 'ng-001',
    front: 'What is tactical empathy in negotiation?',
    back: 'Understanding the feelings and mindset of your counterpart AND demonstrating that understanding. It\'s not agreeing - it\'s showing you understand. This builds trust and opens the door to influence.',
    category: 'Negotiation',
    source: 'Never Split the Difference',
    pathwayId: 'negotiation',
    difficulty: 'intermediate',
    tags: ['negotiation', 'empathy', 'influence']
  },
  {
    id: 'ng-002',
    front: 'What is "mirroring" in negotiation?',
    back: 'Repeat the last 1-3 words of what someone said (or the most important words). This creates rapport and encourages them to elaborate. Simple but incredibly effective for gathering information.',
    category: 'Negotiation',
    source: 'Never Split the Difference',
    pathwayId: 'negotiation',
    difficulty: 'beginner',
    tags: ['negotiation', 'mirroring', 'technique']
  },
  {
    id: 'ng-003',
    front: 'What is a "calibrated question"?',
    back: 'Questions starting with "How" or "What" that give the illusion of control while guiding the conversation. Examples: "How am I supposed to do that?" "What makes this important to you?" Avoid "Why" - it sounds accusatory.',
    category: 'Negotiation',
    source: 'Never Split the Difference',
    pathwayId: 'negotiation',
    difficulty: 'intermediate',
    tags: ['negotiation', 'questions', 'technique']
  },
  {
    id: 'ng-004',
    front: 'Why is "That\'s right" better than "You\'re right" in negotiation?',
    back: '"You\'re right" often means "Go away, I want to end this." "That\'s right" indicates true understanding and agreement. When you get "That\'s right," you\'ve successfully labeled their position and built connection.',
    category: 'Negotiation',
    source: 'Never Split the Difference',
    pathwayId: 'negotiation',
    difficulty: 'intermediate',
    tags: ['negotiation', 'agreement', 'psychology']
  },

  // ============================================
  // BLOCKCHAIN & WEB3
  // ============================================
  {
    id: 'bc-001',
    front: 'What problem does blockchain solve?',
    back: 'The Byzantine Generals Problem - how to achieve consensus among untrusted parties. Blockchain creates a trustless, immutable, decentralized ledger where transactions are verified by the network, not a central authority.',
    category: 'Blockchain',
    source: 'Blockchain Illustrated Guide',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['blockchain', 'consensus', 'trust']
  },
  {
    id: 'bc-002',
    front: 'What is a smart contract?',
    back: 'Self-executing code stored on the blockchain that automatically enforces terms when conditions are met. "If X happens, do Y." No intermediary needed. Immutable once deployed (feature and bug).',
    category: 'Blockchain',
    source: 'Building Blockchain Apps',
    pathwayId: 'blockchain',
    difficulty: 'beginner',
    tags: ['blockchain', 'smart-contracts', 'automation']
  },
  {
    id: 'bc-003',
    front: 'What is the difference between Proof of Work and Proof of Stake?',
    back: 'Proof of Work: Miners compete to solve puzzles (uses energy, more secure)\nProof of Stake: Validators stake coins as collateral (energy efficient, potentially less decentralized)\n\nEthereum moved from PoW to PoS in 2022.',
    category: 'Blockchain',
    source: 'Blockchain for Dummies',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['blockchain', 'consensus', 'proof-of-stake']
  },

  // ============================================
  // BRUCE LEE PHILOSOPHY
  // ============================================
  {
    id: 'bl-001',
    front: 'What does "Be Water, My Friend" mean?',
    back: 'Adapt to any situation. Water is formless - it takes the shape of its container but can also crash through barriers. Empty your mind. Be flexible. Respond to what IS, not what you think should be.',
    category: 'Bruce Lee Philosophy',
    source: 'Be Water My Friend',
    pathwayId: 'bruce-lee',
    difficulty: 'beginner',
    tags: ['philosophy', 'adaptability', 'bruce-lee']
  },
  {
    id: 'bl-002',
    front: 'What is Jeet Kune Do philosophy?',
    back: '"The art of fighting without fighting." Using no way as way, having no limitation as limitation. Absorb what is useful, discard what is useless, add what is uniquely your own. Style without style.',
    category: 'Bruce Lee Philosophy',
    source: 'Striking Thoughts',
    pathwayId: 'bruce-lee',
    difficulty: 'intermediate',
    tags: ['philosophy', 'martial-arts', 'bruce-lee']
  },
  {
    id: 'bl-003',
    front: 'What did Bruce Lee say about self-expression?',
    back: '"Always be yourself, express yourself, have faith in yourself. Do not go out and look for a successful personality and duplicate it." Art is the expression of the self - honest self-expression is the goal.',
    category: 'Bruce Lee Philosophy',
    source: 'Striking Thoughts',
    pathwayId: 'bruce-lee',
    difficulty: 'beginner',
    tags: ['philosophy', 'authenticity', 'bruce-lee']
  },

  // ============================================
  // PYTHON & DATA SCIENCE
  // ============================================
  {
    id: 'py-001',
    front: 'What are Python\'s key features that make it popular for data science?',
    back: '1. Simple, readable syntax\n2. Rich ecosystem (NumPy, Pandas, Scikit-learn)\n3. Great for prototyping\n4. Large community\n5. Integrates well with other languages\n6. Jupyter notebooks for exploration',
    category: 'Python & Data Science',
    source: 'Learn Python',
    pathwayId: 'python-data',
    difficulty: 'beginner',
    tags: ['python', 'data-science', 'programming']
  },
  {
    id: 'py-002',
    front: 'What is the difference between a list and a tuple in Python?',
    back: 'List: Mutable (can be changed), uses [], slower\nTuple: Immutable (cannot be changed), uses (), faster\n\nUse tuples for fixed data, lists for collections that change.',
    category: 'Python & Data Science',
    source: 'Learn Python',
    pathwayId: 'python-data',
    difficulty: 'beginner',
    tags: ['python', 'data-structures', 'programming']
  },
  {
    id: 'py-003',
    front: 'What is a Pandas DataFrame?',
    back: 'A 2D labeled data structure (like an Excel spreadsheet). Columns can be different types. Primary data manipulation tool in Python data science. Key operations: filter, group, merge, pivot.',
    category: 'Python & Data Science',
    source: 'Python & ML',
    pathwayId: 'python-data',
    difficulty: 'beginner',
    tags: ['python', 'pandas', 'data-science']
  },

  // ============================================
  // LIFE DESIGN
  // ============================================
  {
    id: 'ld-001',
    front: 'What are the Four Purposes of Life?',
    back: '1. Self-discovery - Know yourself deeply\n2. Personal development - Continuous growth\n3. Service to others - Contribute beyond yourself\n4. Inner peace - Live in harmony with your values\n\nAll four work together.',
    category: 'Life Design',
    source: 'Four Purposes of Life',
    pathwayId: 'life-design',
    difficulty: 'intermediate',
    tags: ['life-design', 'purpose', 'fulfillment']
  },
  {
    id: 'ld-002',
    front: 'What are the three components of happiness research?',
    back: '1. Pleasure - Hedonic happiness (short-term)\n2. Engagement - Flow states, using strengths\n3. Meaning - Contributing to something larger\n\nLasting happiness comes from engagement and meaning, not just pleasure.',
    category: 'Life Design',
    source: 'Happiest You Ever',
    pathwayId: 'life-design',
    difficulty: 'intermediate',
    tags: ['life-design', 'happiness', 'well-being']
  },

  // ============================================
  // QUIZ-DERIVED FLASHCARDS
  // ============================================
  {
    id: 'quiz-pd-001',
    front: 'Quiz: To BUILD a good habit, you should make it:',
    back: 'ANSWER: Obvious, Attractive, Easy, Satisfying\n\nThe Four Laws of Behavior Change from Atomic Habits. To BREAK a bad habit, invert these laws.',
    category: 'Personal Development',
    source: 'Atomic Habits',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['quiz', 'habits', 'four-laws']
  },
  {
    id: 'quiz-pd-002',
    front: 'Quiz: Which is an identity-based approach to exercise?',
    back: 'ANSWER: "I am an athlete"\n\nNot "I want to lose 10 pounds" (outcome) or "I will go to the gym 3x/week" (process). Identity-based habits focus on WHO you want to become.',
    category: 'Personal Development',
    source: 'Atomic Habits',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['quiz', 'habits', 'identity']
  },
  {
    id: 'quiz-pd-003',
    front: 'Quiz: What is "attention residue"?',
    back: 'ANSWER: Leftover attention from previous tasks that impairs current focus\n\nWhen you switch tasks, part of your attention remains "stuck" on the previous task, reducing performance on the current one.',
    category: 'Personal Development',
    source: 'Deep Work',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['quiz', 'deep-work', 'focus']
  },
  {
    id: 'quiz-pd-004',
    front: 'Quiz: According to Frankl, suffering becomes bearable when:',
    back: 'ANSWER: It finds a meaning or purpose\n\nFrankl discovered that suffering ceases to be suffering the moment it finds meaning. Suffering without meaning is despair.',
    category: 'Personal Development',
    source: "Man's Search for Meaning",
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['quiz', 'meaning', 'suffering']
  },
  {
    id: 'quiz-pd-005',
    front: 'Quiz: Which is a "good value" according to Mark Manson?',
    back: 'ANSWER: Honesty (even when painful)\n\nGood values are reality-based, socially constructive, and within your control. Bad values include pleasure, material success, and always being right.',
    category: 'Personal Development',
    source: 'The Subtle Art',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['quiz', 'values', 'mindset']
  },
  {
    id: 'quiz-ai-001',
    front: 'Quiz: What does "training" a neural network actually mean?',
    back: 'ANSWER: Adjusting weights based on prediction errors\n\nTraining means iteratively adjusting the weights to minimize prediction errors (loss) through backpropagation.',
    category: 'AI & Machine Learning',
    source: 'Deep Learning',
    pathwayId: 'ai-ml',
    difficulty: 'beginner',
    tags: ['quiz', 'ai', 'neural-networks']
  },
  {
    id: 'quiz-ai-002',
    front: 'Quiz: What type of learning does ChatGPT primarily use?',
    back: 'ANSWER: Supervised + Reinforcement (RLHF)\n\nLLMs like ChatGPT use supervised pre-training followed by Reinforcement Learning from Human Feedback (RLHF) to align with human preferences.',
    category: 'AI & Machine Learning',
    source: 'AI 2041',
    pathwayId: 'ai-ml',
    difficulty: 'intermediate',
    tags: ['quiz', 'ai', 'chatgpt']
  },
  {
    id: 'quiz-wb-001',
    front: 'Quiz: Using the Rule of 72, how long to double money at 9%?',
    back: 'ANSWER: 8 years\n\n72 ÷ 9 = 8 years. This quick mental math helps you evaluate investments and understand compound growth.',
    category: 'Wealth Building',
    source: 'Start Late Finish Rich',
    pathwayId: 'wealth-building',
    difficulty: 'beginner',
    tags: ['quiz', 'investing', 'compound-interest']
  },
  {
    id: 'quiz-ps-001',
    front: 'Quiz: Why do plane crashes seem more common than they are?',
    back: 'ANSWER: Availability heuristic - they\'re memorable\n\nDramatic events are easily recalled, making us overestimate their frequency. Car accidents kill far more people but seem less dangerous.',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'beginner',
    tags: ['quiz', 'psychology', 'bias']
  },

  // ============================================
  // PSYCHOLOGY & DECISION SCIENCE - EXTENDED (150 cards)
  // Thinking Fast and Slow, Cognitive Biases, Dark Psychology
  // ============================================

  // --- SYSTEM 1 vs SYSTEM 2 THINKING (25 cards) ---
  {
    id: 'fc-psy-1',
    front: 'What is System 1 thinking?',
    back: 'Fast, automatic, intuitive, effortless thinking that operates constantly. It\'s responsible for quick judgments, pattern recognition, and emotional reactions. System 1 makes most of our daily decisions without conscious awareness.',
    category: 'system-thinking',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'easy',
    tags: ['system1', 'kahneman', 'cognition']
  },
  {
    id: 'fc-psy-2',
    front: 'What is System 2 thinking?',
    back: 'Slow, deliberate, analytical, effortful thinking that requires attention and concentration. It\'s used for complex calculations, logical reasoning, and careful decision-making. System 2 is easily depleted and requires energy.',
    category: 'system-thinking',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'easy',
    tags: ['system2', 'kahneman', 'cognition']
  },
  {
    id: 'fc-psy-3',
    front: 'What is "cognitive ease" and how does it affect judgment?',
    back: 'Cognitive ease is the feeling when things are easy to process mentally. When we experience cognitive ease, we feel good, trust our intuitions, and believe statements are true. Danger: repetition creates familiarity, which creates false truth.',
    category: 'system-thinking',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['cognitive-ease', 'system1', 'judgment']
  },
  {
    id: 'fc-psy-4',
    front: 'What is "cognitive strain" and when is it beneficial?',
    back: 'Cognitive strain occurs when mental processing is difficult. While uncomfortable, it activates System 2 thinking, leading to more careful analysis and reduced susceptibility to biases. Hard-to-read fonts can actually improve test performance.',
    category: 'system-thinking',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['cognitive-strain', 'system2', 'analysis']
  },
  {
    id: 'fc-psy-5',
    front: 'What is WYSIATI in decision-making?',
    back: 'What You See Is All There Is - System 1 builds the best possible story from available information without considering what information might be missing. This leads to overconfidence and jumping to conclusions based on incomplete data.',
    category: 'system-thinking',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['wysiati', 'system1', 'overconfidence']
  },
  {
    id: 'fc-psy-6',
    front: 'What is the "lazy controller" problem with System 2?',
    back: 'System 2 is inherently lazy and will accept System 1 suggestions without much scrutiny when cognitive resources are depleted. This means we\'re more susceptible to biases when tired, stressed, or mentally occupied.',
    category: 'system-thinking',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['system2', 'depletion', 'bias']
  },
  {
    id: 'fc-psy-7',
    front: 'How does ego depletion affect decision-making?',
    back: 'Mental effort depletes a limited resource (like a muscle). After prolonged System 2 use, willpower weakens and we default to System 1 impulses. Judges grant parole more often after meals. Decision fatigue leads to poor choices or avoidance.',
    category: 'system-thinking',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['ego-depletion', 'willpower', 'decision-fatigue']
  },
  {
    id: 'fc-psy-8',
    front: 'What is the "bat and ball" problem and what does it reveal?',
    back: 'A bat and ball cost $1.10. The bat costs $1 more than the ball. What does the ball cost? Intuitive answer: 10 cents (wrong). Correct: 5 cents. This reveals how System 1 substitutes an easier question and System 2 often fails to check.',
    category: 'system-thinking',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'easy',
    tags: ['system1', 'intuition', 'reasoning']
  },
  {
    id: 'fc-psy-9',
    front: 'What is associative coherence in System 1?',
    back: 'System 1 creates coherent stories by linking ideas, memories, and emotions automatically. When one concept activates, related concepts become more accessible. This explains priming effects and why first impressions are so powerful.',
    category: 'system-thinking',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'hard',
    tags: ['association', 'priming', 'system1']
  },
  {
    id: 'fc-psy-10',
    front: 'What is priming and how does it influence behavior?',
    back: 'Priming is when exposure to one stimulus influences response to subsequent stimuli. Reading words about elderly people makes you walk slower. Money primes make people more selfish. Much of this happens unconsciously through System 1.',
    category: 'system-thinking',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['priming', 'unconscious', 'behavior']
  },
  {
    id: 'fc-psy-11',
    front: 'What is the halo effect?',
    back: 'The tendency to like (or dislike) everything about a person based on one trait. If someone is attractive, we assume they\'re also smart and kind. First impressions create a "halo" that colors all subsequent perceptions.',
    category: 'cognitive-bias',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'easy',
    tags: ['halo-effect', 'first-impression', 'bias']
  },
  {
    id: 'fc-psy-12',
    front: 'What is attribute substitution?',
    back: 'When faced with a difficult question, System 1 substitutes an easier one without us noticing. Asked "How happy are you with life?" you might answer "How do I feel right now?" This leads to systematic errors in judgment.',
    category: 'system-thinking',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'hard',
    tags: ['substitution', 'system1', 'heuristic']
  },
  {
    id: 'fc-psy-13',
    front: 'How does mood affect System 1 and System 2?',
    back: 'Good mood loosens System 2 control, making us more creative but also more gullible. Bad mood activates more careful System 2 processing. Happy people are more intuitive; unhappy people are more analytical.',
    category: 'system-thinking',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['mood', 'creativity', 'analysis']
  },
  {
    id: 'fc-psy-14',
    front: 'What is the "affect heuristic"?',
    back: 'We make judgments based on current emotions rather than objective analysis. If we like something, we minimize its risks and maximize its benefits. If we dislike something, we do the opposite. Feelings substitute for thinking.',
    category: 'system-thinking',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['affect-heuristic', 'emotion', 'judgment']
  },
  {
    id: 'fc-psy-15',
    front: 'What percentage of our thinking is System 1 vs System 2?',
    back: 'System 1 handles approximately 95% of our thinking. System 2 is engaged only when System 1 encounters difficulty or when deliberate attention is required. We vastly overestimate how rational we are.',
    category: 'system-thinking',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'easy',
    tags: ['statistics', 'system1', 'system2']
  },
  {
    id: 'fc-psy-16',
    front: 'What is the "focusing illusion"?',
    back: '"Nothing in life is as important as you think it is while you are thinking about it." Whatever captures your attention seems more significant than it actually is. Paraplegics aren\'t as unhappy as people think, lottery winners aren\'t as happy.',
    category: 'system-thinking',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['focusing-illusion', 'attention', 'happiness']
  },
  {
    id: 'fc-psy-17',
    front: 'What is the "peak-end rule" in memory?',
    back: 'We judge experiences based on the peak (most intense moment) and the end, ignoring duration. A colonoscopy with a less painful ending is remembered as less unpleasant overall, even if it lasted longer. Memory ≠ Experience.',
    category: 'system-thinking',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['memory', 'peak-end', 'experience']
  },
  {
    id: 'fc-psy-18',
    front: 'What is "duration neglect"?',
    back: 'We largely ignore how long an experience lasted when evaluating it in memory. A 30-minute pleasant experience and a 2-hour equally pleasant experience are remembered similarly. System 1 doesn\'t track duration well.',
    category: 'system-thinking',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['duration', 'memory', 'experience']
  },
  {
    id: 'fc-psy-19',
    front: 'What is the difference between the "experiencing self" and "remembering self"?',
    back: 'The experiencing self lives in the present moment. The remembering self constructs stories about the past. We make decisions based on our remembering self, but actually live through our experiencing self. They often disagree.',
    category: 'system-thinking',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'hard',
    tags: ['self', 'memory', 'experience']
  },
  {
    id: 'fc-psy-20',
    front: 'Why is System 1 so confident despite being often wrong?',
    back: 'System 1 suppresses ambiguity and creates coherent stories from whatever information is available. Confidence comes from the coherence of the story, not the quality or quantity of supporting evidence. WYSIATI ensures we don\'t know what we don\'t know.',
    category: 'system-thinking',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'hard',
    tags: ['confidence', 'coherence', 'wysiati']
  },
  {
    id: 'fc-psy-21',
    front: 'What triggers System 2 to take over from System 1?',
    back: 'System 2 activates when: (1) A problem is clearly too complex, (2) Something violates System 1\'s expectations (surprise), (3) Explicit instructions require attention, (4) Self-monitoring detects a potential error. But often System 2 remains lazy.',
    category: 'system-thinking',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['activation', 'system2', 'attention']
  },
  {
    id: 'fc-psy-22',
    front: 'What is "thinking slow" in practice?',
    back: 'Deliberately engaging System 2: Write out problems, consider alternatives, check your intuitions, use checklists, sleep on important decisions, seek disconfirming evidence. Make the implicit explicit. Ask "What am I missing?"',
    category: 'system-thinking',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'easy',
    tags: ['deliberate', 'practice', 'decision-making']
  },
  {
    id: 'fc-psy-23',
    front: 'Why do experts sometimes perform worse than simple algorithms?',
    back: 'Expert intuition is System 1 pattern-matching that works well in predictable environments but fails in noisy ones. Algorithms consistently apply rules without ego, mood, or fatigue. In many domains, simple formulas beat expert judgment.',
    category: 'system-thinking',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'hard',
    tags: ['expertise', 'algorithms', 'prediction']
  },
  {
    id: 'fc-psy-24',
    front: 'What conditions are necessary for valid expert intuition?',
    back: 'Valid intuitions develop when: (1) The environment is regular/predictable, (2) There\'s opportunity for prolonged practice, (3) Immediate feedback is available. Chess, medicine, firefighting: yes. Stock picking, political forecasting: no.',
    category: 'system-thinking',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'hard',
    tags: ['expertise', 'intuition', 'validity']
  },
  {
    id: 'fc-psy-25',
    front: 'How can you leverage System 1 positively?',
    back: 'Use System 1 for: rapid pattern recognition, creative brainstorming, emotional intelligence, well-practiced skills. Design environments that prime good behavior. Make desired actions feel easy and automatic. Build good habits.',
    category: 'system-thinking',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['system1', 'leverage', 'design']
  },

  // --- COGNITIVE BIASES (50 cards) ---
  {
    id: 'fc-psy-26',
    front: 'What is anchoring bias and how does it work?',
    back: 'The first piece of information disproportionately influences subsequent judgments. Real estate agents show overpriced houses first. Salary negotiations are won by whoever states a number first. Even obviously random anchors affect estimates.',
    category: 'cognitive-bias',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'easy',
    tags: ['anchoring', 'negotiation', 'judgment']
  },
  {
    id: 'fc-psy-27',
    front: 'How can you defend against anchoring bias?',
    back: 'Be aware it exists. Consider the opposite. Generate your own anchor before seeing others\'. Focus on target value, not starting offers. In negotiations, make the first reasonable offer. Question any number presented as a starting point.',
    category: 'cognitive-bias',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['anchoring', 'defense', 'negotiation']
  },
  {
    id: 'fc-psy-28',
    front: 'What is confirmation bias?',
    back: 'The tendency to search for, interpret, and remember information that confirms existing beliefs while ignoring contradicting evidence. We ask questions that confirm rather than challenge. Social media algorithms amplify this.',
    category: 'cognitive-bias',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'easy',
    tags: ['confirmation', 'belief', 'evidence']
  },
  {
    id: 'fc-psy-29',
    front: 'How can you combat confirmation bias?',
    back: 'Actively seek disconfirming evidence. Steel-man opposing arguments. Ask "What would change my mind?" Assign someone to play devil\'s advocate. Read sources you disagree with. Track predictions to see where you\'re wrong.',
    category: 'cognitive-bias',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['confirmation', 'defense', 'critical-thinking']
  },
  {
    id: 'fc-psy-30',
    front: 'What is the availability heuristic?',
    back: 'Judging probability by how easily examples come to mind. Dramatic, recent, or emotionally charged events seem more common. Plane crashes seem frequent (memorable), car deaths seem rare (unmemorable). Media distorts our reality map.',
    category: 'cognitive-bias',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'easy',
    tags: ['availability', 'probability', 'memory']
  },
  {
    id: 'fc-psy-31',
    front: 'What is loss aversion and how strong is it?',
    back: 'Losses hurt about 2x as much as equivalent gains feel good. Losing $100 feels like -$200, while gaining $100 feels like +$100. This explains why people hold losing stocks, avoid necessary risks, and overvalue what they own (endowment effect).',
    category: 'cognitive-bias',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'easy',
    tags: ['loss-aversion', 'risk', 'decision']
  },
  {
    id: 'fc-psy-32',
    front: 'What is the endowment effect?',
    back: 'We value things more simply because we own them. Mug experiment: owners wanted $7 to sell; buyers would only pay $3. This creates irrational attachment to possessions, jobs, and beliefs. "If I owned it, it must be valuable."',
    category: 'cognitive-bias',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['endowment', 'ownership', 'value']
  },
  {
    id: 'fc-psy-33',
    front: 'What is the sunk cost fallacy?',
    back: 'Continuing to invest in something because of what you\'ve already spent, rather than future value. "I\'ve already watched 2 hours of this bad movie." "We\'ve invested too much to quit now." Past costs are irrelevant to future decisions.',
    category: 'cognitive-bias',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'easy',
    tags: ['sunk-cost', 'investment', 'decision']
  },
  {
    id: 'fc-psy-34',
    front: 'What is the status quo bias?',
    back: 'Preference for the current state of affairs. Defaults are powerful: organ donation rates vary from 12% to 99% based on opt-in vs opt-out. We overweight the risks of change and underweight the costs of inaction.',
    category: 'cognitive-bias',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['status-quo', 'default', 'change']
  },
  {
    id: 'fc-psy-35',
    front: 'What is the Dunning-Kruger effect?',
    back: 'The less you know, the more confident you are. Beginners lack the knowledge to recognize their incompetence. Experts underestimate their skill because they assume others share their knowledge. Peak confidence comes at minimum competence.',
    category: 'cognitive-bias',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'easy',
    tags: ['dunning-kruger', 'confidence', 'competence']
  },
  {
    id: 'fc-psy-36',
    front: 'What is hindsight bias?',
    back: '"I knew it all along" - after learning an outcome, we believe we would have predicted it. This makes us overconfident about future predictions and unable to learn from surprises. We rewrite our memory to seem more prescient.',
    category: 'cognitive-bias',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'easy',
    tags: ['hindsight', 'memory', 'prediction']
  },
  {
    id: 'fc-psy-37',
    front: 'What is the planning fallacy?',
    back: 'We underestimate time, costs, and risks while overestimating benefits of planned actions. 90% of construction projects run over budget. Best counter: use "outside view" - look at base rates of similar projects by others.',
    category: 'cognitive-bias',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['planning', 'optimism', 'estimation']
  },
  {
    id: 'fc-psy-38',
    front: 'What is base rate neglect?',
    back: 'Ignoring prior probability when evaluating evidence. If a test is 99% accurate but only 1 in 1000 have the disease, a positive result still means only ~9% chance of disease. We focus on the specific case, not the statistical context.',
    category: 'cognitive-bias',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'hard',
    tags: ['base-rate', 'probability', 'statistics']
  },
  {
    id: 'fc-psy-39',
    front: 'What is the representativeness heuristic?',
    back: 'Judging probability based on how well something matches a prototype, ignoring base rates. "Steve is shy and organized - is he a librarian or farmer?" Most guess librarian, but there are 20x more farmers, making farmer statistically more likely.',
    category: 'cognitive-bias',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'hard',
    tags: ['representativeness', 'stereotype', 'probability']
  },
  {
    id: 'fc-psy-40',
    front: 'What is the conjunction fallacy?',
    back: 'Believing specific conditions are more likely than general ones. "Linda is a bank teller" vs "Linda is a bank teller and active in feminism" - people rate the specific as more likely, which is mathematically impossible.',
    category: 'cognitive-bias',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'hard',
    tags: ['conjunction', 'probability', 'logic']
  },
  {
    id: 'fc-psy-41',
    front: 'What is the overconfidence bias?',
    back: 'We\'re systematically more confident than accurate. When people say they\'re "90% sure," they\'re right only 70% of the time. Experts show this too. The cure: calibration training and tracking your predictions.',
    category: 'cognitive-bias',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['overconfidence', 'calibration', 'prediction']
  },
  {
    id: 'fc-psy-42',
    front: 'What is the fundamental attribution error?',
    back: 'When judging others, we overweight personality and underweight situation. "He failed because he\'s lazy" (not because of circumstances). When judging ourselves, we do the opposite. Others are bad; we were unlucky.',
    category: 'cognitive-bias',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['attribution', 'judgment', 'personality']
  },
  {
    id: 'fc-psy-43',
    front: 'What is the self-serving bias?',
    back: 'Taking credit for success, blaming others for failure. "I won because I\'m skilled; I lost because of bad luck/unfair conditions." This protects ego but prevents learning and damages relationships.',
    category: 'cognitive-bias',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'easy',
    tags: ['self-serving', 'attribution', 'ego']
  },
  {
    id: 'fc-psy-44',
    front: 'What is the optimism bias?',
    back: 'We overestimate the likelihood of positive events and underestimate negative ones. "It won\'t happen to me." Smokers underestimate cancer risk. Newlyweds underestimate divorce odds. Useful for motivation, dangerous for planning.',
    category: 'cognitive-bias',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'easy',
    tags: ['optimism', 'risk', 'prediction']
  },
  {
    id: 'fc-psy-45',
    front: 'What is the negativity bias?',
    back: 'Negative information weighs more heavily than positive. One criticism outweighs five compliments. Bad news dominates headlines because our brains evolved to prioritize threats. This affects relationships, investing, and happiness.',
    category: 'cognitive-bias',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'easy',
    tags: ['negativity', 'attention', 'evolution']
  },
  {
    id: 'fc-psy-46',
    front: 'What is the bandwagon effect?',
    back: 'The tendency to adopt beliefs and behaviors because many others have. Social proof drives trends, bubbles, and mob behavior. "Everyone else is doing it, so it must be right." Dangerous when combined with groupthink.',
    category: 'cognitive-bias',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'easy',
    tags: ['bandwagon', 'social-proof', 'conformity']
  },
  {
    id: 'fc-psy-47',
    front: 'What is groupthink?',
    back: 'The desire for harmony in a group causes irrational decisions. Dissenters stay silent. Evidence is ignored. Alternatives aren\'t considered. Bay of Pigs, Challenger disaster. Counter: assign devil\'s advocate, anonymous input.',
    category: 'cognitive-bias',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['groupthink', 'conformity', 'decision']
  },
  {
    id: 'fc-psy-48',
    front: 'What is the authority bias?',
    back: 'Tendency to attribute more accuracy to authority figures. Milgram experiment: 65% delivered "lethal" shocks when ordered by authority. We defer to titles, uniforms, and credentials even when they\'re irrelevant or wrong.',
    category: 'cognitive-bias',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['authority', 'obedience', 'milgram']
  },
  {
    id: 'fc-psy-49',
    front: 'What is the in-group/out-group bias?',
    back: 'Favoring members of our own group and being suspicious of others. Even trivially defined groups (shirt color) create bias. We see our group as diverse individuals, other groups as homogeneous stereotypes.',
    category: 'cognitive-bias',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['in-group', 'tribalism', 'bias']
  },
  {
    id: 'fc-psy-50',
    front: 'What is the mere exposure effect?',
    back: 'We develop preference for things simply because we\'re familiar with them. Repeated exposure breeds liking. This is why advertising works through repetition. Also explains attraction to people we see often.',
    category: 'cognitive-bias',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'easy',
    tags: ['exposure', 'familiarity', 'preference']
  },
  {
    id: 'fc-psy-51',
    front: 'What is the framing effect?',
    back: 'How information is presented affects decisions. "90% survival rate" sounds better than "10% death rate" (same fact). "Lean meat" vs "25% fat." Politicians and marketers exploit this constantly. Same data, different decisions.',
    category: 'cognitive-bias',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['framing', 'presentation', 'manipulation']
  },
  {
    id: 'fc-psy-52',
    front: 'What is the spotlight effect?',
    back: 'We overestimate how much others notice us. The embarrassing stain you\'re worried about? Others barely see it. We\'re the center of our own universe but barely background characters in others\'. Reduces social anxiety to know this.',
    category: 'cognitive-bias',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'easy',
    tags: ['spotlight', 'self-consciousness', 'perception']
  },
  {
    id: 'fc-psy-53',
    front: 'What is the curse of knowledge?',
    back: 'Once you know something, it\'s hard to imagine not knowing it. Experts struggle to explain simply. Teachers forget what confused beginners. This causes communication failures and unrealistic expectations of others.',
    category: 'cognitive-bias',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['knowledge', 'communication', 'expertise']
  },
  {
    id: 'fc-psy-54',
    front: 'What is the illusion of control?',
    back: 'Believing we can influence random outcomes. People bet more on dice they throw themselves. Lottery players pick "lucky" numbers. This drives gambling addiction and unrealistic business confidence.',
    category: 'cognitive-bias',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['control', 'randomness', 'gambling']
  },
  {
    id: 'fc-psy-55',
    front: 'What is the gambler\'s fallacy?',
    back: 'Believing past random events affect future ones. "Heads came up 5 times, tails is due!" Each flip is independent. Roulette wheel has no memory. This leads to terrible betting strategies and irrational decision-making.',
    category: 'cognitive-bias',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'easy',
    tags: ['gambler', 'probability', 'randomness']
  },
  {
    id: 'fc-psy-56',
    front: 'What is survivorship bias?',
    back: 'Focusing on successes while ignoring failures. "College dropouts become billionaires!" (ignoring millions who failed). Only successful WWII planes returned, so only their damage was studied. Failed planes had the real answer.',
    category: 'cognitive-bias',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['survivorship', 'selection', 'success']
  },
  {
    id: 'fc-psy-57',
    front: 'What is the narrative fallacy?',
    back: 'Our need to create coherent stories from random events. We can\'t accept that things "just happened." We invent causes for stock market movements, attribute success to specific traits. The world is more random than our stories suggest.',
    category: 'cognitive-bias',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['narrative', 'story', 'randomness']
  },
  {
    id: 'fc-psy-58',
    front: 'What is the outcome bias?',
    back: 'Judging decisions by their outcomes rather than the quality of the decision process. A good decision can have bad results (and vice versa). A poker player who loses with pocket aces didn\'t make a bad decision.',
    category: 'cognitive-bias',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['outcome', 'decision', 'process']
  },
  {
    id: 'fc-psy-59',
    front: 'What is the hot-hand fallacy?',
    back: 'Believing someone who has experienced success has a greater chance of further success. Basketball players on a "hot streak" are statistically no more likely to make the next shot. We see patterns in randomness.',
    category: 'cognitive-bias',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['hot-hand', 'streak', 'randomness']
  },
  {
    id: 'fc-psy-60',
    front: 'What is the peak-end rule?',
    back: 'We judge experiences by their most intense point (peak) and ending, not by the total sum or average. A vacation with great moments and good ending is remembered fondly even if mostly mediocre. Design endings carefully.',
    category: 'cognitive-bias',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['peak-end', 'memory', 'experience']
  },
  {
    id: 'fc-psy-61',
    front: 'What is recency bias?',
    back: 'Weighting recent events more heavily than earlier ones. Recent market performance shapes expectations. Recent news shapes worldview. Our memory naturally fades, making now seem most important.',
    category: 'cognitive-bias',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'easy',
    tags: ['recency', 'memory', 'judgment']
  },
  {
    id: 'fc-psy-62',
    front: 'What is primacy bias?',
    back: 'First information has outsized impact. First impressions stick. Order of resume viewing affects hiring. In interviews, go first or last (recency) to be remembered. Middle positions are forgotten.',
    category: 'cognitive-bias',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['primacy', 'first-impression', 'order']
  },
  {
    id: 'fc-psy-63',
    front: 'What is choice overload (paradox of choice)?',
    back: 'Too many options paralyze decision-making and reduce satisfaction. 24 jams: 3% bought. 6 jams: 30% bought. More choice = more regret, more what-ifs. Limit options to increase action and satisfaction.',
    category: 'cognitive-bias',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['choice', 'paradox', 'decision']
  },
  {
    id: 'fc-psy-64',
    front: 'What is the decoy effect?',
    back: 'An inferior option makes another option look better. Subscription: digital $59, print $125, digital+print $125. The useless print-only option makes the combo look amazing. Used in pricing everywhere.',
    category: 'cognitive-bias',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['decoy', 'pricing', 'comparison']
  },
  {
    id: 'fc-psy-65',
    front: 'What is the IKEA effect?',
    back: 'We value things more when we\'ve put effort into creating them. IKEA furniture you assembled is more valuable (to you) than identical pre-made furniture. This extends to ideas - we overvalue our own creations.',
    category: 'cognitive-bias',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'easy',
    tags: ['ikea', 'effort', 'value']
  },
  {
    id: 'fc-psy-66',
    front: 'What is the zero-risk bias?',
    back: 'Preferring to eliminate a small risk entirely rather than greatly reducing a larger risk. People pay extra to eliminate 1% risk rather than reduce 10% to 5%. "Zero risk" feels emotionally complete even when suboptimal.',
    category: 'cognitive-bias',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'hard',
    tags: ['zero-risk', 'emotion', 'decision']
  },
  {
    id: 'fc-psy-67',
    front: 'What is the distinction bias?',
    back: 'When comparing options side-by-side, we overweight small differences that wouldn\'t matter in isolation. 52" vs 50" TV seems important when comparing, but once home, you won\'t notice. Joint vs separate evaluation changes choices.',
    category: 'cognitive-bias',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'hard',
    tags: ['distinction', 'comparison', 'evaluation']
  },
  {
    id: 'fc-psy-68',
    front: 'What is action bias?',
    back: 'Preference for action over inaction, even when doing nothing is optimal. Soccer goalkeepers dive left/right but staying center catches more penalties. Investors trade too much. Sometimes the best action is no action.',
    category: 'cognitive-bias',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['action', 'inaction', 'decision']
  },
  {
    id: 'fc-psy-69',
    front: 'What is the omission bias?',
    back: 'Judging harmful actions as worse than equally harmful inactions. Not vaccinating feels less wrong than vaccinating (even if statistically more dangerous). We feel more responsible for direct action than indirect consequences.',
    category: 'cognitive-bias',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['omission', 'action', 'responsibility']
  },
  {
    id: 'fc-psy-70',
    front: 'What is normalcy bias?',
    back: 'The refusal to plan for disasters that have never happened. "It\'s always been fine." People in burning buildings wait for permission to leave. 70% of people need extra time to process disasters before acting.',
    category: 'cognitive-bias',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['normalcy', 'disaster', 'preparation']
  },
  {
    id: 'fc-psy-71',
    front: 'What is the backfire effect?',
    back: 'When challenged, people can become MORE committed to their beliefs. Presenting facts that contradict beliefs can strengthen those beliefs. Emotional identity > logical evidence. Persuasion requires rapport first.',
    category: 'cognitive-bias',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['backfire', 'persuasion', 'belief']
  },
  {
    id: 'fc-psy-72',
    front: 'What is the Ben Franklin effect?',
    back: 'We like people more after doing them a favor (not receiving one). Franklin asked a rival to lend him a rare book - the rival became friendlier. Our brains rationalize: "I helped him, so I must like him."',
    category: 'cognitive-bias',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['franklin', 'favor', 'liking']
  },
  {
    id: 'fc-psy-73',
    front: 'What is the bystander effect?',
    back: 'The more people present, the less likely anyone is to help. Responsibility diffuses. "Someone else will handle it." Kitty Genovese case: 38 witnesses, no one called police. To get help, point to specific person: "You, call 911."',
    category: 'cognitive-bias',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'easy',
    tags: ['bystander', 'responsibility', 'diffusion']
  },
  {
    id: 'fc-psy-74',
    front: 'What is the false consensus effect?',
    back: 'Overestimating how much others share our beliefs and behaviors. "Everyone thinks this way." We surround ourselves with like-minded people, creating illusion of consensus. Dangerous for prediction and empathy.',
    category: 'cognitive-bias',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['consensus', 'projection', 'belief']
  },
  {
    id: 'fc-psy-75',
    front: 'What is the illusion of transparency?',
    back: 'We overestimate how well others can read our internal states. You think your nervousness is obvious; others barely notice. You think your sarcasm is clear; others take you literally. Communicate more explicitly.',
    category: 'cognitive-bias',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['transparency', 'communication', 'perception']
  },

  // --- DARK PSYCHOLOGY & MANIPULATION (50 cards) ---
  {
    id: 'fc-psy-76',
    front: 'What are the 6 principles of persuasion (Cialdini)?',
    back: '1. Reciprocity (give to receive)\n2. Commitment/Consistency (small yes → big yes)\n3. Social Proof (others are doing it)\n4. Authority (expert endorsement)\n5. Liking (we say yes to people we like)\n6. Scarcity (limited availability)',
    category: 'dark-psychology',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'easy',
    tags: ['cialdini', 'persuasion', 'influence']
  },
  {
    id: 'fc-psy-77',
    front: 'How does the reciprocity principle work in manipulation?',
    back: 'We feel obligated to return favors. Free samples create buying pressure. Concessions trigger counter-concessions (door-in-face technique). Defense: Recognize uninvited gifts/favors as manipulation tactics.',
    category: 'dark-psychology',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['reciprocity', 'manipulation', 'defense']
  },
  {
    id: 'fc-psy-78',
    front: 'What is the foot-in-the-door technique?',
    back: 'Get a small commitment first, then escalate to larger requests. Sign a petition → donate money → volunteer time. Each "yes" creates consistency pressure for the next. Defense: Evaluate each request independently.',
    category: 'dark-psychology',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'easy',
    tags: ['foot-in-door', 'commitment', 'escalation']
  },
  {
    id: 'fc-psy-79',
    front: 'What is the door-in-the-face technique?',
    back: 'Start with a large request (expect rejection), then "retreat" to smaller one. "Can you donate $500? No? How about $20?" The retreat feels like a concession you should reciprocate. The small ask was the real goal.',
    category: 'dark-psychology',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['door-in-face', 'concession', 'negotiation']
  },
  {
    id: 'fc-psy-80',
    front: 'What is love bombing?',
    back: 'Overwhelming someone with affection, attention, and praise early in a relationship to create dependency. Common in cults and abusive relationships. Warning signs: Too intense too fast, isolation from others, creating obligation.',
    category: 'dark-psychology',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['love-bombing', 'abuse', 'manipulation']
  },
  {
    id: 'fc-psy-81',
    front: 'What is gaslighting?',
    back: 'Making someone question their own reality, memory, and perceptions. "That never happened." "You\'re too sensitive." "You\'re imagining things." Creates self-doubt and dependency on the manipulator. Trust your perceptions, keep records.',
    category: 'dark-psychology',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['gaslighting', 'abuse', 'reality']
  },
  {
    id: 'fc-psy-82',
    front: 'What are the dark triad personality traits?',
    back: '1. Narcissism: Grandiosity, entitlement, need for admiration\n2. Machiavellianism: Manipulation, cynicism, self-interest\n3. Psychopathy: Low empathy, impulsivity, antisocial behavior\n\nThese overlap and predict manipulative behavior.',
    category: 'dark-psychology',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['dark-triad', 'personality', 'narcissism']
  },
  {
    id: 'fc-psy-83',
    front: 'How do narcissists manipulate?',
    back: 'Idealize → Devalue → Discard cycle. First you\'re special, then you can\'t do anything right, then you\'re discarded (or hoovered back). Triangulation (using third parties), blame-shifting, playing victim, silent treatment.',
    category: 'dark-psychology',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['narcissism', 'cycle', 'manipulation']
  },
  {
    id: 'fc-psy-84',
    front: 'What is triangulation in manipulation?',
    back: 'Bringing a third person into a two-person dynamic to manipulate. "My ex used to do this so much better." "Everyone else thinks you\'re wrong." Creates jealousy, insecurity, and competition for the manipulator\'s approval.',
    category: 'dark-psychology',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['triangulation', 'jealousy', 'manipulation']
  },
  {
    id: 'fc-psy-85',
    front: 'What is DARVO?',
    back: 'Deny, Attack, Reverse Victim and Offender. When confronted, abusers: Deny the behavior, Attack the confronter, Reverse roles so the abuser appears as victim. "I never did that, you\'re crazy for accusing me, you\'re the abusive one."',
    category: 'dark-psychology',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['darvo', 'abuse', 'deflection']
  },
  {
    id: 'fc-psy-86',
    front: 'What is the contrast principle in manipulation?',
    back: 'Perception is relative to what came before. Real estate agents show bad houses first. After $500 jacket, $100 tie seems cheap. Salespeople create unfavorable contrasts to make their offer look better.',
    category: 'dark-psychology',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'easy',
    tags: ['contrast', 'perception', 'sales']
  },
  {
    id: 'fc-psy-87',
    front: 'How do cults recruit members (BITE model)?',
    back: 'B: Behavior control (rigid rules, isolation)\nI: Information control (restrict outside sources)\nT: Thought control (black/white thinking)\nE: Emotional control (fear, guilt, shame)\n\nGradual escalation of commitment.',
    category: 'dark-psychology',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'hard',
    tags: ['cult', 'control', 'recruitment']
  },
  {
    id: 'fc-psy-88',
    front: 'What is "negging"?',
    back: 'Backhanded compliments designed to lower confidence and increase desire for approval. "You\'re pretty for a [category]." "I don\'t usually like [type] but you\'re okay." Creates insecurity and seeking of validation.',
    category: 'dark-psychology',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'easy',
    tags: ['negging', 'manipulation', 'dating']
  },
  {
    id: 'fc-psy-89',
    front: 'What is intermittent reinforcement and why is it powerful?',
    back: 'Unpredictable rewards create stronger attachment than consistent ones. Slot machines, abusive relationships, social media likes. The uncertainty creates dopamine spikes and compulsive behavior. Harder to break than consistent patterns.',
    category: 'dark-psychology',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['intermittent', 'addiction', 'dopamine']
  },
  {
    id: 'fc-psy-90',
    front: 'What body language signals deception?',
    back: 'Increased blinking, avoiding eye contact OR excessive staring, touching face/nose, fidgeting, speech hesitations, story inconsistencies, micro-expressions. Note: No single sign proves lying. Look for clusters and changes from baseline.',
    category: 'dark-psychology',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['deception', 'body-language', 'detection']
  },
  {
    id: 'fc-psy-91',
    front: 'What is the "scarcity" manipulation tactic?',
    back: '"Only 3 left!" "Sale ends midnight!" "Exclusive offer!" Creates urgency and FOMO. We value things more when they\'re scarce. Defense: Would you want this if it were abundant? Sleep on decisions.',
    category: 'dark-psychology',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'easy',
    tags: ['scarcity', 'urgency', 'sales']
  },
  {
    id: 'fc-psy-92',
    front: 'What is social proof manipulation?',
    back: '"Millions of customers!" "Best-selling!" Fake reviews, paid testimonials, manufactured consensus. We follow the crowd. Defense: Check independent reviews, consider incentives of "social proof" sources.',
    category: 'dark-psychology',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'easy',
    tags: ['social-proof', 'crowd', 'manipulation']
  },
  {
    id: 'fc-psy-93',
    front: 'What is the "false dichotomy" manipulation?',
    back: 'Presenting only two options when more exist. "You\'re either with us or against us." "Buy now or miss out forever." Creates artificial pressure. Defense: Ask "What other options exist?"',
    category: 'dark-psychology',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'easy',
    tags: ['false-dichotomy', 'logic', 'pressure']
  },
  {
    id: 'fc-psy-94',
    front: 'What is "appeal to emotion" fallacy?',
    back: 'Bypassing logic by triggering emotional reactions. Fear-mongering, guilt-tripping, anger-stoking. "Think of the children!" Politicians and marketers exploit emotions because feelings override analysis.',
    category: 'dark-psychology',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'easy',
    tags: ['emotion', 'fallacy', 'logic']
  },
  {
    id: 'fc-psy-95',
    front: 'What is the "moving goalposts" tactic?',
    back: 'When you meet a standard, the standard changes. "If you could just do X... okay, now do Y." Never-ending requirements. Used by manipulative bosses, partners, and negotiators to maintain power.',
    category: 'dark-psychology',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['goalposts', 'manipulation', 'control']
  },
  {
    id: 'fc-psy-96',
    front: 'What is "future faking"?',
    back: 'Making promises about the future to get compliance now. "Once we\'re married, things will change." "This project will lead to promotion." Creates hope that prevents addressing current problems. Judge people by actions, not promises.',
    category: 'dark-psychology',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['future-faking', 'promises', 'manipulation']
  },
  {
    id: 'fc-psy-97',
    front: 'What are signs of coercive control?',
    back: 'Isolation from support, monitoring communications, controlling finances, making rules, creating fear of consequences, gaslighting, intermittent reinforcement. Often gradual - each step seems small.',
    category: 'dark-psychology',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['coercive-control', 'abuse', 'signs']
  },
  {
    id: 'fc-psy-98',
    front: 'What is the "silent treatment" as manipulation?',
    back: 'Withdrawing communication to punish and control. Creates anxiety, forces apologizing for unknown offenses, shifts power. Different from healthy space-taking. Defense: Don\'t chase; address the behavior pattern.',
    category: 'dark-psychology',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['silent-treatment', 'punishment', 'control']
  },
  {
    id: 'fc-psy-99',
    front: 'How does "playing victim" work as manipulation?',
    back: 'Manipulators cast themselves as victims to avoid accountability and gain sympathy. "After all I\'ve done for you..." "You don\'t understand how hard my life is." Deflects attention from their behavior to your guilt.',
    category: 'dark-psychology',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['victim', 'guilt', 'deflection']
  },
  {
    id: 'fc-psy-100',
    front: 'What is "word salad" in manipulation?',
    back: 'Circular, confusing communication that distracts from the issue. Long explanations that don\'t address the point. You end the conversation more confused than when you started. Used to avoid accountability.',
    category: 'dark-psychology',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['word-salad', 'confusion', 'avoidance']
  },
  {
    id: 'fc-psy-101',
    front: 'What is "projection" as a defense mechanism?',
    back: 'Attributing your own unacceptable qualities to others. A liar accuses others of lying. A cheater suspects cheating. What someone frequently accuses you of often reveals their own behavior.',
    category: 'dark-psychology',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['projection', 'defense', 'accusation']
  },
  {
    id: 'fc-psy-102',
    front: 'How do you recognize manipulation attempts?',
    back: 'Trust your feelings (confusion, guilt, obligation, fear). Notice patterns (repeated cycles). Track objective facts. Seek outside perspective. Notice boundary violations. If you feel "off," investigate why.',
    category: 'dark-psychology',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'easy',
    tags: ['recognition', 'defense', 'intuition']
  },
  {
    id: 'fc-psy-103',
    front: 'What is "hoovering" in abusive relationships?',
    back: 'Named after the vacuum - sucking you back in after leaving. Apologies, promises to change, gifts, reminders of good times. Part of the abuse cycle. Without genuine sustained change, the pattern repeats.',
    category: 'dark-psychology',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['hoovering', 'abuse', 'cycle']
  },
  {
    id: 'fc-psy-104',
    front: 'What is "splitting" (black-and-white thinking)?',
    back: 'Seeing people as all good or all bad with no nuance. "You\'re either perfect or worthless." People with personality disorders may shift you from idealized to devalued suddenly. Reality exists in gray areas.',
    category: 'dark-psychology',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['splitting', 'thinking', 'personality']
  },
  {
    id: 'fc-psy-105',
    front: 'What are "flying monkeys" in manipulation?',
    back: 'People manipulated to do a manipulator\'s bidding. Named from Wizard of Oz. Abusers recruit friends, family, even strangers to pressure, spy on, or attack their target. May be deceived themselves.',
    category: 'dark-psychology',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['flying-monkeys', 'triangulation', 'abuse']
  },

  // --- DECISION-MAKING FRAMEWORKS (25 cards) ---
  {
    id: 'fc-psy-106',
    front: 'What is Prospect Theory?',
    back: 'How people actually make decisions under uncertainty (vs. expected utility theory). Key findings: Loss aversion, reference point dependency, diminishing sensitivity to gains/losses, probability weighting (overweight rare events).',
    category: 'decision-making',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'hard',
    tags: ['prospect-theory', 'kahneman', 'economics']
  },
  {
    id: 'fc-psy-107',
    front: 'What is the "pre-mortem" technique?',
    back: 'Imagine the project has failed completely. Now explain why. This overcomes optimism bias by making failure feel real. Surfaces risks that groupthink suppresses. Do this BEFORE committing, not after.',
    category: 'decision-making',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['pre-mortem', 'planning', 'risk']
  },
  {
    id: 'fc-psy-108',
    front: 'What is the "10-10-10" decision framework?',
    back: 'Ask: How will I feel about this decision in 10 minutes? 10 months? 10 years? Creates temporal distance from immediate emotions. Usually reveals that short-term discomfort is worth long-term gain.',
    category: 'decision-making',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'easy',
    tags: ['10-10-10', 'time', 'framework']
  },
  {
    id: 'fc-psy-109',
    front: 'What is "satisficing" vs "maximizing"?',
    back: 'Satisficing: Choose first option that meets criteria. Maximizing: Seek the best possible option. Maximizers are often less satisfied despite better outcomes. Set clear criteria, pick first adequate option, stop searching.',
    category: 'decision-making',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['satisficing', 'maximizing', 'choice']
  },
  {
    id: 'fc-psy-110',
    front: 'What is the "outside view" in decision-making?',
    back: 'Instead of focusing on unique details (inside view), look at base rates of similar situations. "What usually happens when...?" This counteracts the planning fallacy and overconfidence. Use statistics over stories.',
    category: 'decision-making',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'hard',
    tags: ['outside-view', 'base-rate', 'planning']
  },
  {
    id: 'fc-psy-111',
    front: 'What is "reference class forecasting"?',
    back: 'Estimating outcomes by comparing to similar past cases, not intuition about the specific case. For project duration: ignore specific details, look at how long similar projects actually took. Dramatically improves accuracy.',
    category: 'decision-making',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'hard',
    tags: ['reference-class', 'forecasting', 'planning']
  },
  {
    id: 'fc-psy-112',
    front: 'What is the "regret minimization" framework (Bezos)?',
    back: 'Project yourself to age 80 looking back on your life. Which choice will you regret NOT trying? This reduces fear of failure by emphasizing regret of inaction. Great for irreversible opportunities.',
    category: 'decision-making',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'easy',
    tags: ['regret', 'bezos', 'framework']
  },
  {
    id: 'fc-psy-113',
    front: 'What is a "reversible vs irreversible" decision framework?',
    back: 'Type 1 (irreversible): Slow down, gather data, consult others. Type 2 (reversible): Decide fast, test, iterate. Most decisions are Type 2 but we treat them as Type 1. Speed up reversible decisions.',
    category: 'decision-making',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['reversible', 'speed', 'framework']
  },
  {
    id: 'fc-psy-114',
    front: 'What is the "Eisenhower Matrix"?',
    back: 'Organize tasks by Urgency × Importance:\n- Urgent & Important: Do now\n- Important, not Urgent: Schedule\n- Urgent, not Important: Delegate\n- Neither: Eliminate\n\nMost people live in Urgent; success lives in Important.',
    category: 'decision-making',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'easy',
    tags: ['eisenhower', 'priorities', 'time']
  },
  {
    id: 'fc-psy-115',
    front: 'What is the "inversion" mental model?',
    back: 'Instead of asking how to succeed, ask how to fail, then avoid that. "How would I guarantee failure?" reveals non-obvious obstacles. Avoid stupidity rather than seeking brilliance. Subtraction over addition.',
    category: 'decision-making',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['inversion', 'mental-model', 'failure']
  },
  {
    id: 'fc-psy-116',
    front: 'What is "second-order thinking"?',
    back: 'Consider consequences of consequences. First order: "If I do X, Y happens." Second order: "If Y happens, then Z follows." Most people stop at first-order. Chess players think many moves ahead.',
    category: 'decision-making',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['second-order', 'consequences', 'thinking']
  },
  {
    id: 'fc-psy-117',
    front: 'What is "expected value" thinking?',
    back: 'Outcome value × Probability = Expected value. Even low-probability high-reward decisions can be positive EV. Poker players think in EV, not individual outcomes. Requires many iterations to see results.',
    category: 'decision-making',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'hard',
    tags: ['expected-value', 'probability', 'risk']
  },
  {
    id: 'fc-psy-118',
    front: 'What is the "confidence calibration" technique?',
    back: 'Track predictions with confidence levels. "80% sure X will happen." Compare accuracy to confidence. Well-calibrated: 80% confidence should be right 80% of the time. Most people are overconfident.',
    category: 'decision-making',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'hard',
    tags: ['calibration', 'prediction', 'accuracy']
  },
  {
    id: 'fc-psy-119',
    front: 'What is the "disagree and commit" principle?',
    back: 'Voice disagreement during discussion, but once a decision is made, commit fully. Prevents endless debate AND sabotage. Requires psychological safety to disagree and discipline to commit.',
    category: 'decision-making',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['disagree-commit', 'team', 'decision']
  },
  {
    id: 'fc-psy-120',
    front: 'What is "steel-manning" an argument?',
    back: 'Present the strongest version of the opposing view, then address that. Opposite of straw-manning. Forces genuine engagement with objections. If you can\'t steel-man, you don\'t understand the issue.',
    category: 'decision-making',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['steel-man', 'argument', 'debate']
  },
  {
    id: 'fc-psy-121',
    front: 'What is the "5 Whys" technique?',
    back: 'Ask "Why?" five times to get to root cause. Problem: Server crashed. Why? High traffic. Why? Marketing push. Why? No coordination. Why? No process. Root cause: process failure, not technical.',
    category: 'decision-making',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'easy',
    tags: ['5-whys', 'root-cause', 'analysis']
  },
  {
    id: 'fc-psy-122',
    front: 'What is "circle of competence"?',
    back: 'Know what you know and what you don\'t. Operate within your competence; edge with great caution. Buffett stays in businesses he understands. The boundary of your knowledge matters more than its center.',
    category: 'decision-making',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['competence', 'knowledge', 'limits']
  },
  {
    id: 'fc-psy-123',
    front: 'What is "probabilistic thinking"?',
    back: 'Viewing the world in terms of probabilities rather than certainties. "70% chance of rain" is more useful than "might rain." Enables better decisions, learning from outcomes, and reduced overconfidence.',
    category: 'decision-making',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['probability', 'uncertainty', 'thinking']
  },
  {
    id: 'fc-psy-124',
    front: 'What is "optionality" in decision-making?',
    back: 'Creating choices for the future without committing now. Options have value even if never exercised. Keep doors open. Avoid irreversible commitments when uncertain. Small bets with big upside.',
    category: 'decision-making',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['optionality', 'flexibility', 'strategy']
  },
  {
    id: 'fc-psy-125',
    front: 'What is the "via negativa" approach?',
    back: 'Improvement through subtraction, not addition. What should you STOP doing? What beliefs should you abandon? Often more powerful than adding new practices. Simplify before optimizing.',
    category: 'decision-making',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['via-negativa', 'subtraction', 'simplify']
  },
  {
    id: 'fc-psy-126',
    front: 'How does "skin in the game" improve decisions?',
    back: 'When you bear the consequences of your decisions, you decide better. Advisors without skin give different advice than those who share risk. Align incentives. Be wary of those with asymmetric risk.',
    category: 'decision-making',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['skin-in-game', 'incentives', 'risk']
  },
  {
    id: 'fc-psy-127',
    front: 'What is the "Lindy Effect"?',
    back: 'The longer something has existed, the longer it will likely continue. Books that survived 100 years will likely last another 100. New ideas are less proven than old ones. Trust time-tested over trendy.',
    category: 'decision-making',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['lindy', 'time', 'durability']
  },
  {
    id: 'fc-psy-128',
    front: 'What is "negative visualization" (premeditatio malorum)?',
    back: 'Stoic practice of imagining loss. What if you lost this job, relationship, possession? Reduces anxiety about loss, increases gratitude, and prepares you mentally. Inoculation against suffering.',
    category: 'decision-making',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['stoic', 'visualization', 'preparation']
  },
  {
    id: 'fc-psy-129',
    front: 'What are "decision journals" and why use them?',
    back: 'Record decisions with context, options considered, reasoning, expected outcomes. Review later. Reveals patterns in your errors. Prevents hindsight bias. Improves calibration over time.',
    category: 'decision-making',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'easy',
    tags: ['journal', 'tracking', 'improvement']
  },
  {
    id: 'fc-psy-130',
    front: 'What is the "asymmetry of outcomes" principle?',
    back: 'Some decisions have capped downside but unlimited upside (positive asymmetry). Others have capped upside but unlimited downside (negative asymmetry). Seek the former, avoid the latter. Think about tail risks.',
    category: 'decision-making',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'hard',
    tags: ['asymmetry', 'risk', 'outcomes']
  },
  {
    id: 'fc-psy-131',
    front: 'What is body language "clustering"?',
    back: 'Never read a single gesture in isolation. Look for clusters of signals pointing to the same emotion. Arms crossed + avoiding eye contact + turned away = potential discomfort. One signal alone means little.',
    category: 'dark-psychology',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['body-language', 'clustering', 'reading']
  },
  {
    id: 'fc-psy-132',
    front: 'What does crossed arms body language mean?',
    back: 'Often defensive or self-comforting, but context matters. Could mean cold, comfortable, or habitual. Look for clusters. Crossed arms + frown + leaning back = defensive. Crossed arms + smile + leaning in = comfortable.',
    category: 'dark-psychology',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'easy',
    tags: ['body-language', 'arms', 'defense']
  },
  {
    id: 'fc-psy-133',
    front: 'What are "micro-expressions"?',
    back: 'Brief (1/25 second) involuntary facial expressions revealing true emotions. Flash before controlled expression. Universal across cultures. Hard to fake. Contempt, disgust, fear, anger, surprise, happiness, sadness.',
    category: 'dark-psychology',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'hard',
    tags: ['micro-expressions', 'face', 'emotion']
  },
  {
    id: 'fc-psy-134',
    front: 'What does eye direction indicate (NLP eye accessing)?',
    back: 'Looking up-right: visual construction (imagining). Up-left: visual memory (remembering). Side-right: auditory construction. Side-left: auditory memory. Down-right: feelings. Down-left: internal dialogue. Note: varies by handedness.',
    category: 'dark-psychology',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'hard',
    tags: ['eyes', 'nlp', 'thinking']
  },
  {
    id: 'fc-psy-135',
    front: 'What is "mirroring" in body language?',
    back: 'Unconsciously mimicking another\'s posture, gestures, expressions. Indicates rapport and agreement. Can be used consciously to build connection. Subtle mirroring builds trust; obvious mirroring annoys.',
    category: 'dark-psychology',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'easy',
    tags: ['mirroring', 'rapport', 'body-language']
  },
  {
    id: 'fc-psy-136',
    front: 'What body language shows genuine vs fake smiles?',
    back: 'Genuine (Duchenne) smile: Crow\'s feet wrinkles around eyes, cheeks push up. Fake smile: Only mouth moves, eyes unchanged. Watch the eyes - they reveal the truth.',
    category: 'dark-psychology',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['smile', 'authenticity', 'face']
  },
  {
    id: 'fc-psy-137',
    front: 'What is "baselining" in reading people?',
    back: 'Observe normal behavior patterns before looking for deviations. Everyone has unique baseline: some fidget normally, some are naturally still. Deception signals = changes from baseline, not absolute behaviors.',
    category: 'dark-psychology',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['baseline', 'reading', 'observation']
  },
  {
    id: 'fc-psy-138',
    front: 'What does "feet direction" reveal?',
    back: 'Feet point where we want to go. Feet toward exit = wants to leave. Feet toward person = interested. Feet away while body faces you = discomfort. Feet are honest because we rarely consciously control them.',
    category: 'dark-psychology',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['feet', 'direction', 'interest']
  },
  {
    id: 'fc-psy-139',
    front: 'What are "pacifying behaviors"?',
    back: 'Self-soothing gestures that reveal stress: touching neck, rubbing hands, playing with hair, lip biting. These appear when someone feels threatened or uncomfortable. More reliable than facial expressions.',
    category: 'dark-psychology',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['pacifying', 'stress', 'self-soothing']
  },
  {
    id: 'fc-psy-140',
    front: 'What body language shows confidence?',
    back: 'Taking up space (expansive posture), slow deliberate movements, steady eye contact, steepled fingers, chin up, relaxed shoulders. Contrast with nervousness: making smaller, faster movements, looking around.',
    category: 'dark-psychology',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'easy',
    tags: ['confidence', 'power', 'posture']
  },
  {
    id: 'fc-psy-141',
    front: 'What is "cognitive load" in detecting lies?',
    back: 'Lying requires mental effort - maintaining false story while suppressing truth. Ask unexpected questions. Make them tell story backward. Added cognitive load makes deception harder to maintain.',
    category: 'dark-psychology',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'hard',
    tags: ['cognitive-load', 'deception', 'interview']
  },
  {
    id: 'fc-psy-142',
    front: 'What are verbal signs of deception?',
    back: 'Qualifying language ("To be honest...", "Truthfully..."), distancing ("That woman" vs "Sarah"), past tense for current states, excessive detail or lack of detail, answering questions with questions.',
    category: 'dark-psychology',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['verbal', 'deception', 'language']
  },
  {
    id: 'fc-psy-143',
    front: 'What is "emotional intelligence" (EQ)?',
    back: 'The ability to: perceive emotions accurately, use emotions to facilitate thinking, understand emotional meanings, and manage emotions. Four branches: perception, facilitation, understanding, management.',
    category: 'dark-psychology',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['eq', 'emotions', 'intelligence']
  },
  {
    id: 'fc-psy-144',
    front: 'How do you develop emotional intelligence?',
    back: 'Label your emotions precisely. Pause before reacting. Consider others\' perspectives. Track patterns in your emotional reactions. Practice empathetic listening. Reflect on emotional situations daily.',
    category: 'dark-psychology',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['eq', 'development', 'practice']
  },
  {
    id: 'fc-psy-145',
    front: 'What is "cold reading"?',
    back: 'Technique used by psychics/mentalists to appear insightful. Uses general statements (Barnum effect), observational clues, fishing for reactions, probability, and personality tells. Impressive but not supernatural.',
    category: 'dark-psychology',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['cold-reading', 'technique', 'psychology']
  },
  {
    id: 'fc-psy-146',
    front: 'What is the Barnum/Forer effect?',
    back: 'Tendency to accept vague, general personality descriptions as uniquely applicable to oneself. "You have a need for others to like you." Explains belief in horoscopes, cold reading, personality tests.',
    category: 'cognitive-bias',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['barnum', 'forer', 'personality']
  },
  {
    id: 'fc-psy-147',
    front: 'How do you protect yourself from manipulation?',
    back: 'Set clear boundaries. Trust actions over words. Maintain outside relationships. Keep decision-making slow under pressure. Question excessive guilt/obligation. Verify information independently. Trust your discomfort.',
    category: 'dark-psychology',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'easy',
    tags: ['protection', 'boundaries', 'defense']
  },
  {
    id: 'fc-psy-148',
    front: 'What is "gray rock" technique?',
    back: 'Become as boring as a gray rock to manipulators. Give minimal emotional reactions, short answers, no personal information. Manipulators seek drama and engagement - remove the reward and they often move on.',
    category: 'dark-psychology',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['gray-rock', 'defense', 'narcissism']
  },
  {
    id: 'fc-psy-149',
    front: 'What is "radical acceptance" as a psychological tool?',
    back: 'Fully accepting reality as it is, not as you wish it were. Not approval or giving up - just acknowledging truth. Reduces suffering from fighting unchangeable facts. Enables effective action from reality.',
    category: 'decision-making',
    source: 'Dark Psychology',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['acceptance', 'reality', 'mindset']
  },
  {
    id: 'fc-psy-150',
    front: 'What is the ultimate defense against cognitive biases?',
    back: 'Awareness + Systems + Feedback. Know biases exist (awareness). Create decision processes that compensate (systems). Track outcomes to learn (feedback). You can\'t eliminate biases, but you can design around them.',
    category: 'decision-making',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'medium',
    tags: ['defense', 'systems', 'improvement']
  },

  // ============================================
  // KEY TAKEAWAY FLASHCARDS
  // ============================================
  {
    id: 'kt-001',
    front: 'Key Insight: What determines your outcomes in life?',
    back: '"You don\'t rise to the level of your goals. You fall to the level of your systems (habits)."\n\n- James Clear, Atomic Habits',
    category: 'Personal Development',
    source: 'Atomic Habits',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['key-takeaway', 'habits', 'systems']
  },
  {
    id: 'kt-002',
    front: 'Key Insight: What is true behavior change?',
    back: '"True behavior change is identity change. Focus on who you wish to become, not what you want to achieve."\n\nEvery action is a vote for the type of person you want to become.',
    category: 'Personal Development',
    source: 'Atomic Habits',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['key-takeaway', 'habits', 'identity']
  },
  {
    id: 'kt-003',
    front: 'Key Insight: Why is focus rare and valuable?',
    back: '"In a world of constant distraction, the ability to focus deeply is both rare and immensely valuable."\n\n- Cal Newport, Deep Work',
    category: 'Personal Development',
    source: 'Deep Work',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['key-takeaway', 'deep-work', 'focus']
  },
  {
    id: 'kt-004',
    front: 'Key Insight: How should you view your future self?',
    back: '"Your future self is counting on your present self. Stop thinking of them as a stranger."\n\nBrain scans show we treat our future selves like strangers, leading to poor long-term decisions.',
    category: 'Personal Development',
    source: 'Be Your Future Self Now',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['key-takeaway', 'future-self', 'decisions']
  },
  {
    id: 'kt-005',
    front: 'Key Insight: How do you find meaning?',
    back: '"Meaning is not found but created. Even suffering becomes bearable when it serves a purpose."\n\nDon\'t ask what you want from life - ask what life is asking of you.',
    category: 'Personal Development',
    source: "Man's Search for Meaning",
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['key-takeaway', 'meaning', 'purpose']
  },
  {
    id: 'kt-006',
    front: 'Key Insight: What is the key to a good life?',
    back: '"The key to a good life is not giving a f*ck about more things, but rather giving a f*ck about only what is true and important."\n\n- Mark Manson, The Subtle Art',
    category: 'Personal Development',
    source: 'The Subtle Art',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['key-takeaway', 'values', 'priorities']
  },
  {
    id: 'kt-007',
    front: 'Key Insight: What is intelligence fundamentally?',
    back: '"Intelligence is not magic - it evolved through specific capabilities (steering, learning, simulation, mentalizing, language) that we can understand and replicate."\n\nEvery AI system mimics one or more evolutionary breakthroughs.',
    category: 'AI & Machine Learning',
    source: 'A Brief History of Intelligence',
    pathwayId: 'ai-ml',
    difficulty: 'intermediate',
    tags: ['key-takeaway', 'ai', 'intelligence']
  },
  {
    id: 'kt-008',
    front: 'Key Insight: What beats timing the market?',
    back: '"Time in the market beats timing the market. Start now, even with small amounts."\n\nCompound interest is the 8th wonder of the world. Starting early matters more than starting big.',
    category: 'Wealth Building',
    source: 'Start Late Finish Rich',
    pathwayId: 'wealth-building',
    difficulty: 'beginner',
    tags: ['key-takeaway', 'investing', 'compound-interest']
  },
  {
    id: 'kt-009',
    front: 'Key Insight: When should you slow down thinking?',
    back: '"Most thinking happens fast and automatically. Knowing when to slow down is a superpower."\n\nSystem 1 runs the show 95% of the time. Important decisions need deliberate System 2 engagement.',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['key-takeaway', 'psychology', 'thinking']
  },
  {
    id: 'kt-010',
    front: 'Key Insight: How should you evaluate statistics?',
    back: '"Numbers lie through omission. Always ask what\'s missing and what\'s being compared."\n\nWho produced this data? What\'s the baseline? What\'s not being shown?',
    category: 'Psychology',
    source: 'The Data Detective',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['key-takeaway', 'statistics', 'critical-thinking']
  },
];

// Helper function to get flashcards by category
export const getFlashcardsByCategory = (category: string): SpacedRepetitionCard[] => {
  return flashcards.filter(card => card.category === category);
};

// Helper function to get flashcards by difficulty
export const getFlashcardsByDifficulty = (difficulty: 'beginner' | 'intermediate' | 'advanced'): SpacedRepetitionCard[] => {
  return flashcards.filter(card => card.difficulty === difficulty);
};

// Helper function to get flashcards by pathway
export const getFlashcardsByPathway = (pathwayId: string): SpacedRepetitionCard[] => {
  return flashcards.filter(card => card.pathwayId === pathwayId);
};

// Helper function to get random flashcards
export const getRandomFlashcards = (count: number): SpacedRepetitionCard[] => {
  const shuffled = [...flashcards].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

// Get all unique categories
export const getCategories = (): string[] => {
  return [...new Set(flashcards.map(card => card.category))];
};

// Get flashcard count by category
export const getFlashcardCountByCategory = (): Record<string, number> => {
  return flashcards.reduce((acc, card) => {
    acc[card.category] = (acc[card.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
};

export default flashcards;
