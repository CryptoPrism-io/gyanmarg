import type { EnhancedDailyChallenge } from '@/types';

/**
 * Challenge pool for daily rotation
 * 155 challenges covering all 10 modules
 */
export const challengePool: EnhancedDailyChallenge[] = [
  // ============================================
  // PERSONAL DEVELOPMENT - Atomic Habits (15 challenges)
  // ============================================
  {
    id: 'ch-1',
    title: 'Identity Statement',
    description: 'Write "I am the type of person who..." and complete it with your desired identity.',
    category: 'habits',
    moduleId: 'personal-development',
    xpReward: 25,
    difficulty: 'easy',
  },
  {
    id: 'ch-2',
    title: 'Habit Stack Design',
    description: 'Create 3 habit stacks using the formula: "After I [CURRENT], I will [NEW]."',
    category: 'habits',
    moduleId: 'personal-development',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-3',
    title: 'Environment Audit',
    description: 'Identify 3 ways to redesign your environment to make good habits easier and bad habits harder.',
    category: 'habits',
    moduleId: 'personal-development',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-4',
    title: 'Two-Minute Rule',
    description: 'Take a habit you want to build and reduce it to a 2-minute version. Then do it.',
    category: 'habits',
    moduleId: 'personal-development',
    xpReward: 25,
    difficulty: 'easy',
  },
  {
    id: 'ch-5',
    title: 'Break a Bad Habit',
    description: 'Pick one bad habit and apply all 4 inversions: make it invisible, unattractive, difficult, unsatisfying.',
    category: 'habits',
    moduleId: 'personal-development',
    xpReward: 100,
    difficulty: 'hard',
  },
  {
    id: 'ch-6',
    title: 'Track Every Habit',
    description: 'Track every habit you do today using paper or an app. Count how many are intentional vs automatic.',
    category: 'habits',
    moduleId: 'personal-development',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-7',
    title: '1% Better Challenge',
    description: 'Identify one small improvement you can make today that is 1% better than yesterday.',
    category: 'habits',
    moduleId: 'personal-development',
    xpReward: 25,
    difficulty: 'easy',
  },
  {
    id: 'ch-8',
    title: 'Habit Scorecard',
    description: 'List all your daily habits from wake-up to bedtime. Mark each as positive (+), negative (-), or neutral (=).',
    category: 'habits',
    moduleId: 'personal-development',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-9',
    title: 'Implementation Intention',
    description: 'Write down: "I will [BEHAVIOR] at [TIME] in [LOCATION]" for a habit you want to start.',
    category: 'habits',
    moduleId: 'personal-development',
    xpReward: 25,
    difficulty: 'easy',
  },
  {
    id: 'ch-10',
    title: 'Temptation Bundling',
    description: 'Pair a habit you need to do with something you want to do. Example: Only listen to podcasts while exercising.',
    category: 'habits',
    moduleId: 'personal-development',
    xpReward: 50,
    difficulty: 'medium',
  },

  // ============================================
  // PERSONAL DEVELOPMENT - Deep Work (10 challenges)
  // ============================================
  {
    id: 'ch-11',
    title: 'Shutdown Ritual',
    description: 'Create a 5-step shutdown ritual for the end of your workday. Write it down and use it today.',
    category: 'focus',
    moduleId: 'personal-development',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-12',
    title: 'Schedule Deep Work',
    description: 'Block 90 minutes of deep work time on your calendar for tomorrow. Guard it ruthlessly.',
    category: 'focus',
    moduleId: 'personal-development',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-13',
    title: 'Attention Audit',
    description: 'Track how many times you switch tasks in the next hour. Note each attention residue moment.',
    category: 'focus',
    moduleId: 'personal-development',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-14',
    title: 'Productive Meditation',
    description: 'During your next walk or commute, focus on ONE professional problem. Bring attention back when it wanders.',
    category: 'focus',
    moduleId: 'personal-development',
    xpReward: 100,
    difficulty: 'hard',
  },
  {
    id: 'ch-15',
    title: '25-Minute Deep Focus',
    description: 'Do a 25-minute deep work session without distractions. Phone away, notifications off, single task.',
    category: 'focus',
    moduleId: 'personal-development',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-16',
    title: 'Email Batching',
    description: 'Check email only at 3 designated times today. Write down when you resisted the urge to check.',
    category: 'focus',
    moduleId: 'personal-development',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-17',
    title: 'Shallow Work Audit',
    description: 'List all shallow work you did today. Calculate what percentage of your day was deep vs shallow.',
    category: 'focus',
    moduleId: 'personal-development',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-18',
    title: 'Digital Declutter',
    description: 'Delete 5 apps or unsubscribe from 5 email lists that fragment your attention.',
    category: 'focus',
    moduleId: 'personal-development',
    xpReward: 25,
    difficulty: 'easy',
  },
  {
    id: 'ch-19',
    title: 'Grand Gesture',
    description: 'Make a significant change to commit to deep work: rent a workspace, lock away your phone, etc.',
    category: 'focus',
    moduleId: 'personal-development',
    xpReward: 100,
    difficulty: 'hard',
  },
  {
    id: 'ch-20',
    title: 'Fixed Schedule Productivity',
    description: 'Set a hard end time for work today and work backwards to prioritize ruthlessly.',
    category: 'focus',
    moduleId: 'personal-development',
    xpReward: 50,
    difficulty: 'medium',
  },

  // ============================================
  // PERSONAL DEVELOPMENT - Future Self & Meaning (10 challenges)
  // ============================================
  {
    id: 'ch-21',
    title: 'Letter from Future Self',
    description: 'Write a short letter from your Future Self (10 years from now) to current you. What would they say?',
    category: 'mindset',
    moduleId: 'personal-development',
    xpReward: 100,
    difficulty: 'hard',
  },
  {
    id: 'ch-22',
    title: 'Feel the Gain',
    description: 'List 10 ways you have grown in the last 3 years. Measure yourself against your past self, not others.',
    category: 'mindset',
    moduleId: 'personal-development',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-23',
    title: '3-Year Vision',
    description: 'Describe your ideal day 3 years from now in vivid detail. Where are you? What are you doing? Who is with you?',
    category: 'mindset',
    moduleId: 'personal-development',
    xpReward: 100,
    difficulty: 'hard',
  },
  {
    id: 'ch-24',
    title: 'Find Meaning',
    description: 'Viktor Frankl said meaning comes from: work, love, or attitude toward suffering. Write about one source of meaning in your life.',
    category: 'mindset',
    moduleId: 'personal-development',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-25',
    title: 'Choose Your Response',
    description: 'Recall a recent frustration. What was the space between stimulus and response? How could you have chosen differently?',
    category: 'mindset',
    moduleId: 'personal-development',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-26',
    title: 'Find Your Why',
    description: 'Complete: "My life has meaning because..." Write at least 3 sentences.',
    category: 'mindset',
    moduleId: 'personal-development',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-27',
    title: 'F*ck Budget Audit',
    description: 'List 5 things you give too many f*cks about. Are they worth it? What could you stop caring about?',
    category: 'mindset',
    moduleId: 'personal-development',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-28',
    title: 'Values Check',
    description: 'List your top 5 values. Are they good values (reality-based, controllable) or bad values?',
    category: 'mindset',
    moduleId: 'personal-development',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-29',
    title: 'Responsibility Shift',
    description: 'What are you blaming on others that you could take responsibility for? Write it out honestly.',
    category: 'mindset',
    moduleId: 'personal-development',
    xpReward: 100,
    difficulty: 'hard',
  },
  {
    id: 'ch-30',
    title: 'Memento Mori',
    description: 'Write down 3 things you would regret not doing if you only had 1 year left. Start one today.',
    category: 'mindset',
    moduleId: 'personal-development',
    xpReward: 100,
    difficulty: 'hard',
  },

  // ============================================
  // AI & MACHINE LEARNING (10 challenges)
  // ============================================
  {
    id: 'ch-31',
    title: 'Explain Like I\'m Five',
    description: 'Explain one AI concept (neural networks, training, GPT) to someone with no tech background.',
    category: 'tech',
    moduleId: 'ai-ml',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-32',
    title: 'AI Impact Analysis',
    description: 'List 5 tasks in your job. Which can AI do now? Which by 2030? Which will always require humans?',
    category: 'tech',
    moduleId: 'ai-ml',
    xpReward: 100,
    difficulty: 'hard',
  },
  {
    id: 'ch-33',
    title: 'Human + AI Collaboration',
    description: 'Identify one task where human + AI would be better than either alone. Design how they would work together.',
    category: 'tech',
    moduleId: 'ai-ml',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-34',
    title: 'Use AI Today',
    description: 'Use an AI tool (ChatGPT, Claude, Copilot) to help with a real task today. Reflect on what worked and what didn\'t.',
    category: 'tech',
    moduleId: 'ai-ml',
    xpReward: 25,
    difficulty: 'easy',
  },
  {
    id: 'ch-35',
    title: 'AI Ethics Dilemma',
    description: 'Find a news article about AI ethics. Write down your perspective on the dilemma it presents.',
    category: 'tech',
    moduleId: 'ai-ml',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-36',
    title: 'Intelligence Evolution',
    description: 'Name the 5 breakthroughs of intelligence evolution. Which ones does your smartphone demonstrate?',
    category: 'tech',
    moduleId: 'ai-ml',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-37',
    title: 'Prompt Engineering',
    description: 'Write 3 versions of the same prompt to an AI, from vague to specific. Compare the outputs.',
    category: 'tech',
    moduleId: 'ai-ml',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-38',
    title: 'Future Scenario',
    description: 'Write a 200-word scenario of what your industry might look like in 2040 with advanced AI.',
    category: 'tech',
    moduleId: 'ai-ml',
    xpReward: 100,
    difficulty: 'hard',
  },
  {
    id: 'ch-39',
    title: 'AI Limitations',
    description: 'List 5 things current AI cannot do well. Why do these tasks remain challenging?',
    category: 'tech',
    moduleId: 'ai-ml',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-40',
    title: 'Neural Network Analogy',
    description: 'Create an analogy explaining how a neural network learns. Make it understandable to a 10-year-old.',
    category: 'tech',
    moduleId: 'ai-ml',
    xpReward: 50,
    difficulty: 'medium',
  },

  // ============================================
  // WEALTH BUILDING (10 challenges)
  // ============================================
  {
    id: 'ch-41',
    title: 'Latte Factor Audit',
    description: 'Track every expense today. Find your "latte factor" - small daily leaks that add up over time.',
    category: 'wealth',
    moduleId: 'wealth-building',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-42',
    title: 'Automate One Thing',
    description: 'Set up one automatic transfer: to savings, investments, or retirement. Even $25/month counts.',
    category: 'wealth',
    moduleId: 'wealth-building',
    xpReward: 100,
    difficulty: 'hard',
  },
  {
    id: 'ch-43',
    title: 'Rule of 72 Exercise',
    description: 'Calculate how long it would take to double your money at 6%, 8%, 10%, and 12%. Feel the power of compound interest.',
    category: 'wealth',
    moduleId: 'wealth-building',
    xpReward: 25,
    difficulty: 'easy',
  },
  {
    id: 'ch-44',
    title: 'Margin of Safety',
    description: 'For one purchase you are considering, calculate: What is it worth? What is the price? Is there a margin of safety?',
    category: 'wealth',
    moduleId: 'wealth-building',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-45',
    title: 'Net Worth Snapshot',
    description: 'Calculate your current net worth (assets minus liabilities). No judgment, just awareness.',
    category: 'wealth',
    moduleId: 'wealth-building',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-46',
    title: 'Pay Yourself First',
    description: 'Move money to savings FIRST today, before spending on anything else. Even $10 counts.',
    category: 'wealth',
    moduleId: 'wealth-building',
    xpReward: 25,
    difficulty: 'easy',
  },
  {
    id: 'ch-47',
    title: 'Investment Research',
    description: 'Research one index fund or ETF. Write down its expense ratio, holdings, and 10-year return.',
    category: 'wealth',
    moduleId: 'wealth-building',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-48',
    title: 'Money Script Audit',
    description: 'Write down 3 beliefs about money you learned from your family. Are they helping or hurting you?',
    category: 'wealth',
    moduleId: 'wealth-building',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-49',
    title: 'Lead Magnet Brainstorm',
    description: 'Brainstorm 5 lead magnets you could create to attract your ideal customer or employer.',
    category: 'wealth',
    moduleId: 'wealth-building',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-50',
    title: 'Income Streams',
    description: 'List all your current income streams. Brainstorm 3 potential new ones you could develop.',
    category: 'wealth',
    moduleId: 'wealth-building',
    xpReward: 100,
    difficulty: 'hard',
  },

  // ============================================
  // NEGOTIATION & INFLUENCE (10 challenges)
  // ============================================
  {
    id: 'ch-51',
    title: 'Mirroring Practice',
    description: 'Use the mirroring technique in one conversation today (repeat last 1-3 words). Notice how it encourages elaboration.',
    category: 'negotiation',
    moduleId: 'negotiation',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-52',
    title: 'Calibrated Questions',
    description: 'Prepare 3 "How" or "What" questions for a difficult conversation you need to have. No "Why" questions.',
    category: 'negotiation',
    moduleId: 'negotiation',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-53',
    title: 'Tactical Empathy',
    description: 'Think of someone you disagree with. Write their perspective as THEY see it, not as you see it.',
    category: 'negotiation',
    moduleId: 'negotiation',
    xpReward: 100,
    difficulty: 'hard',
  },
  {
    id: 'ch-54',
    title: 'Label an Emotion',
    description: 'In a conversation today, use a label: "It seems like..." or "It sounds like..." and wait for their response.',
    category: 'negotiation',
    moduleId: 'negotiation',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-55',
    title: 'Get to "That\'s Right"',
    description: 'In a conversation, summarize someone\'s position so accurately that they say "That\'s right."',
    category: 'negotiation',
    moduleId: 'negotiation',
    xpReward: 100,
    difficulty: 'hard',
  },
  {
    id: 'ch-56',
    title: 'Accusation Audit',
    description: 'Before a tough conversation, list every negative thing they might think about you. Address it first.',
    category: 'negotiation',
    moduleId: 'negotiation',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-57',
    title: 'Spot the Technique',
    description: 'Watch a negotiation scene in a movie or TV show. Identify 3 techniques being used.',
    category: 'negotiation',
    moduleId: 'negotiation',
    xpReward: 25,
    difficulty: 'easy',
  },
  {
    id: 'ch-58',
    title: 'Word Choice Audit',
    description: 'Review an important email or message you sent. How could you reword it to be more persuasive?',
    category: 'negotiation',
    moduleId: 'negotiation',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-59',
    title: 'Manipulation Defense',
    description: 'Identify 3 manipulation techniques you have seen used on you recently. How will you defend against them?',
    category: 'negotiation',
    moduleId: 'negotiation',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-60',
    title: 'Late-Night FM DJ Voice',
    description: 'Practice using a calm, slow voice (late-night FM DJ) in a conversation today. Notice how it affects the interaction.',
    category: 'negotiation',
    moduleId: 'negotiation',
    xpReward: 25,
    difficulty: 'easy',
  },

  // ============================================
  // PSYCHOLOGY & DECISION SCIENCE (10 challenges)
  // ============================================
  {
    id: 'ch-61',
    title: 'Bias Hunting',
    description: 'Identify 3 cognitive biases you experienced today. What triggered them? How did they affect your decisions?',
    category: 'psychology',
    moduleId: 'psychology',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-62',
    title: 'Engage System 2',
    description: 'Before your next important decision, deliberately slow down and engage System 2. Write out your reasoning.',
    category: 'psychology',
    moduleId: 'psychology',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-63',
    title: 'Statistics Detective',
    description: 'Find a statistic in today\'s news. Apply the rules: What is the source? What is missing? Compared to what?',
    category: 'psychology',
    moduleId: 'psychology',
    xpReward: 100,
    difficulty: 'hard',
  },
  {
    id: 'ch-64',
    title: 'Pre-Mortem Analysis',
    description: 'For a goal or project: Imagine it failed completely. What went wrong? Use this to improve your plan.',
    category: 'psychology',
    moduleId: 'psychology',
    xpReward: 100,
    difficulty: 'hard',
  },
  {
    id: 'ch-65',
    title: 'System 1 vs System 2',
    description: 'List 5 decisions you made today. For each, identify whether System 1 or System 2 was in charge.',
    category: 'psychology',
    moduleId: 'psychology',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-66',
    title: 'Anchoring Awareness',
    description: 'Notice 3 times today when you were anchored by a number or first impression. How did it affect your judgment?',
    category: 'psychology',
    moduleId: 'psychology',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-67',
    title: 'Confirmation Bias Check',
    description: 'Find an article that disagrees with one of your beliefs. Read it completely with an open mind.',
    category: 'psychology',
    moduleId: 'psychology',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-68',
    title: 'Loss Aversion Test',
    description: 'Identify something you are holding onto because of sunk cost or loss aversion. Consider letting it go.',
    category: 'psychology',
    moduleId: 'psychology',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-69',
    title: 'Decision Journal Entry',
    description: 'Write down an important decision you made, your reasoning, and what you expect to happen. Review in 30 days.',
    category: 'psychology',
    moduleId: 'psychology',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-70',
    title: 'Outside View',
    description: 'For a current project, find base rates: How often do similar projects succeed? How long do they usually take?',
    category: 'psychology',
    moduleId: 'psychology',
    xpReward: 100,
    difficulty: 'hard',
  },

  // ============================================
  // BRUCE LEE PHILOSOPHY (10 challenges)
  // ============================================
  {
    id: 'ch-71',
    title: 'Be Water Challenge',
    description: 'Describe a situation where you need to be more adaptable. How would water approach it?',
    category: 'philosophy',
    moduleId: 'bruce-lee',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-72',
    title: 'Honest Self-Expression',
    description: 'Where are you conforming instead of expressing your true self? What would authentic you do differently?',
    category: 'philosophy',
    moduleId: 'bruce-lee',
    xpReward: 100,
    difficulty: 'hard',
  },
  {
    id: 'ch-73',
    title: 'Daily Movement',
    description: 'Do a 15-minute bodyweight workout. No equipment needed. Just move your body.',
    category: 'philosophy',
    moduleId: 'bruce-lee',
    xpReward: 25,
    difficulty: 'easy',
  },
  {
    id: 'ch-74',
    title: 'Empty Your Cup',
    description: 'Identify one belief or assumption you hold strongly. Question it completely. What if you were wrong?',
    category: 'philosophy',
    moduleId: 'bruce-lee',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-75',
    title: 'Simplify Something',
    description: 'Bruce Lee said "Hack away at the unessential." What can you remove or simplify today?',
    category: 'philosophy',
    moduleId: 'bruce-lee',
    xpReward: 25,
    difficulty: 'easy',
  },
  {
    id: 'ch-76',
    title: 'Mind-Body Connection',
    description: 'Do 10 minutes of mindful movement (yoga, tai chi, stretching). Focus on the connection between mind and body.',
    category: 'philosophy',
    moduleId: 'bruce-lee',
    xpReward: 25,
    difficulty: 'easy',
  },
  {
    id: 'ch-77',
    title: 'Absorb What Is Useful',
    description: 'From everything you learned this week, what is actually useful? Discard the rest.',
    category: 'philosophy',
    moduleId: 'bruce-lee',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-78',
    title: 'No Way as Way',
    description: 'Identify a "rule" you follow that might not apply to you. What if you created your own way?',
    category: 'philosophy',
    moduleId: 'bruce-lee',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-79',
    title: 'Flow State Practice',
    description: 'Engage in an activity where you can lose yourself completely. No interruptions. Just flow.',
    category: 'philosophy',
    moduleId: 'bruce-lee',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-80',
    title: 'Physical Limits',
    description: 'Push yourself physically beyond your comfort zone today. Run farther, lift more, stretch deeper.',
    category: 'philosophy',
    moduleId: 'bruce-lee',
    xpReward: 50,
    difficulty: 'medium',
  },

  // ============================================
  // BLOCKCHAIN & WEB3 (8 challenges)
  // ============================================
  {
    id: 'ch-81',
    title: 'Blockchain Explainer',
    description: 'Explain blockchain to someone who has never heard of it. No jargon allowed.',
    category: 'tech',
    moduleId: 'blockchain',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-82',
    title: 'Real Use Case',
    description: 'Identify one problem in your industry that blockchain could genuinely solve. Be specific about why.',
    category: 'tech',
    moduleId: 'blockchain',
    xpReward: 100,
    difficulty: 'hard',
  },
  {
    id: 'ch-83',
    title: 'DeFi Research',
    description: 'Learn about one DeFi protocol today. What problem does it solve? What are the risks?',
    category: 'tech',
    moduleId: 'blockchain',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-84',
    title: 'Smart Contract Logic',
    description: 'Write pseudocode for a simple smart contract. What inputs, logic, and outputs would it need?',
    category: 'tech',
    moduleId: 'blockchain',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-85',
    title: 'Crypto Security',
    description: 'Review best practices for crypto security. What is one thing you could do to improve your own security?',
    category: 'tech',
    moduleId: 'blockchain',
    xpReward: 25,
    difficulty: 'easy',
  },
  {
    id: 'ch-86',
    title: 'DAO Analysis',
    description: 'Research one DAO. How does it make decisions? What are its governance mechanisms?',
    category: 'tech',
    moduleId: 'blockchain',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-87',
    title: 'NFT Critique',
    description: 'Find an NFT project. Analyze it critically: What value does it actually provide? Is it sustainable?',
    category: 'tech',
    moduleId: 'blockchain',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-88',
    title: 'Consensus Comparison',
    description: 'Compare Proof of Work vs Proof of Stake. What are the tradeoffs of each approach?',
    category: 'tech',
    moduleId: 'blockchain',
    xpReward: 50,
    difficulty: 'medium',
  },

  // ============================================
  // PYTHON & DATA SCIENCE (7 challenges)
  // ============================================
  {
    id: 'ch-89',
    title: 'Automation Idea',
    description: 'Identify one repetitive task in your life that could be automated with code. Describe what it would do.',
    category: 'tech',
    moduleId: 'python-data',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-90',
    title: 'Data Question',
    description: 'What question would you love to answer with data? What data would you need to answer it?',
    category: 'tech',
    moduleId: 'python-data',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-91',
    title: 'Code for 15 Minutes',
    description: 'Spend 15 minutes coding. Any language, any project. Just write code.',
    category: 'tech',
    moduleId: 'python-data',
    xpReward: 25,
    difficulty: 'easy',
  },
  {
    id: 'ch-92',
    title: 'Algorithm Explanation',
    description: 'Explain one algorithm (sorting, searching, etc.) to someone who does not code.',
    category: 'tech',
    moduleId: 'python-data',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-93',
    title: 'Data Visualization',
    description: 'Find a dataset online and think about how you would visualize it. Sketch the chart.',
    category: 'tech',
    moduleId: 'python-data',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-94',
    title: 'Debug a Problem',
    description: 'Find a bug in code you wrote or are working with. Document the debugging process.',
    category: 'tech',
    moduleId: 'python-data',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-95',
    title: 'Learn a New Function',
    description: 'Learn one new Python function or library today. Write a small example using it.',
    category: 'tech',
    moduleId: 'python-data',
    xpReward: 25,
    difficulty: 'easy',
  },

  // ============================================
  // LIFE DESIGN & INDEPENDENCE (10 challenges)
  // ============================================
  {
    id: 'ch-96',
    title: 'Purpose Check',
    description: 'Which of the four purposes (self-discovery, growth, service, peace) needs more attention in your life?',
    category: 'general',
    moduleId: 'life-design',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-97',
    title: 'Happiness Inventory',
    description: 'Rate your life on: Pleasure (1-10), Engagement (1-10), Meaning (1-10). What is lowest? What would raise it?',
    category: 'general',
    moduleId: 'life-design',
    xpReward: 100,
    difficulty: 'hard',
  },
  {
    id: 'ch-98',
    title: 'Gratitude Practice',
    description: 'List 5 specific things you are grateful for today. Be specific, not generic.',
    category: 'general',
    moduleId: 'life-design',
    xpReward: 25,
    difficulty: 'easy',
  },
  {
    id: 'ch-99',
    title: 'Self-Sufficiency Skill',
    description: 'Learn one new practical skill today: cook a new dish, fix something, grow a plant.',
    category: 'general',
    moduleId: 'life-design',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-100',
    title: 'Business Canvas Sketch',
    description: 'Sketch a business model canvas for an idea you have. Who are the customers? What is the value proposition?',
    category: 'general',
    moduleId: 'life-design',
    xpReward: 100,
    difficulty: 'hard',
  },

  // ============================================
  // MASTER SYNTHESIS (5 challenges)
  // ============================================
  {
    id: 'ch-101',
    title: 'Cross-Book Connection',
    description: 'Find a connection between two books from different modules. How do their ideas complement each other?',
    category: 'general',
    moduleId: 'master-synthesis',
    xpReward: 100,
    difficulty: 'hard',
  },
  {
    id: 'ch-102',
    title: 'Multi-Framework Problem',
    description: 'Take a current challenge and analyze it using frameworks from 3 different modules.',
    category: 'general',
    moduleId: 'master-synthesis',
    xpReward: 100,
    difficulty: 'hard',
  },
  {
    id: 'ch-103',
    title: 'Teach Someone',
    description: 'Teach one concept from Polymind to someone else today. Teaching deepens your own understanding.',
    category: 'general',
    moduleId: 'master-synthesis',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-104',
    title: 'Concept Map',
    description: 'Draw a concept map connecting ideas from at least 3 different modules. Find the hidden connections.',
    category: 'general',
    moduleId: 'master-synthesis',
    xpReward: 100,
    difficulty: 'hard',
  },
  {
    id: 'ch-105',
    title: 'Weekly Review',
    description: 'Review everything you learned this week. What was most valuable? What will you apply?',
    category: 'general',
    moduleId: 'master-synthesis',
    xpReward: 50,
    difficulty: 'medium',
  },

  // ============================================
  // BATCH 2: PERSONAL DEVELOPMENT - Advanced (8 challenges)
  // ============================================
  {
    id: 'ch-106',
    title: 'The Stranger Compliment',
    description: 'Give genuine, specific compliments to 5 strangers today. Note their reactions and how it made you feel.',
    category: 'mindset',
    moduleId: 'personal-development',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-107',
    title: 'Failure Resume',
    description: 'Write a "failure resume" listing your biggest failures, rejections, and setbacks. Extract one lesson from each.',
    category: 'mindset',
    moduleId: 'personal-development',
    xpReward: 100,
    difficulty: 'hard',
  },
  {
    id: 'ch-108',
    title: 'Energy Audit',
    description: 'Track every activity today and rate each as energy-giving (+) or energy-draining (-). Identify your top 3 drains.',
    category: 'mindset',
    moduleId: 'personal-development',
    xpReward: 25,
    difficulty: 'easy',
  },
  {
    id: 'ch-109',
    title: 'The Opposite Day',
    description: 'Identify one strong opinion you hold. Spend 30 minutes arguing the opposite position as convincingly as possible.',
    category: 'mindset',
    moduleId: 'personal-development',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-110',
    title: 'Rejection Therapy',
    description: 'Make one request today that you expect to be rejected. The goal is to get a "no" and survive it.',
    category: 'mindset',
    moduleId: 'personal-development',
    xpReward: 100,
    difficulty: 'hard',
  },
  {
    id: 'ch-111',
    title: 'Mentor Mind-Meld',
    description: 'Choose someone you admire. Research them deeply and write out how they would solve your current biggest problem.',
    category: 'mindset',
    moduleId: 'personal-development',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-112',
    title: 'Skill Stack Audit',
    description: 'List your top 5 skills. Identify one unique combination that makes you rare. How can you double down on this?',
    category: 'mindset',
    moduleId: 'personal-development',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-113',
    title: 'The 10-Year Email',
    description: 'Write an email to yourself 10 years from now. Describe your current struggles, hopes, and what you want future-you to remember.',
    category: 'mindset',
    moduleId: 'personal-development',
    xpReward: 25,
    difficulty: 'easy',
  },

  // ============================================
  // BATCH 2: PSYCHOLOGY - Cognitive Bias Spotting (7 challenges)
  // ============================================
  {
    id: 'ch-114',
    title: 'Sunk Cost Spotter',
    description: 'Identify 3 things you are continuing only because of past investment (time, money, effort). Evaluate each objectively.',
    category: 'psychology',
    moduleId: 'psychology',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-115',
    title: 'Attribution Error Detective',
    description: "Catch yourself making fundamental attribution error 3 times today (blaming character vs. situation for others' behavior).",
    category: 'psychology',
    moduleId: 'psychology',
    xpReward: 100,
    difficulty: 'hard',
  },
  {
    id: 'ch-116',
    title: 'Peak-End Experiment',
    description: 'Design a routine task to have a better peak moment and ending. Notice if your memory of it improves.',
    category: 'psychology',
    moduleId: 'psychology',
    xpReward: 25,
    difficulty: 'easy',
  },
  {
    id: 'ch-117',
    title: 'Choice Architecture Audit',
    description: 'Identify 5 default settings in your life (apps, environment, routines) and change one to nudge better behavior.',
    category: 'psychology',
    moduleId: 'psychology',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-118',
    title: 'Availability Heuristic Check',
    description: 'Identify one fear or belief you hold that might be inflated by media exposure. Research the actual statistics.',
    category: 'psychology',
    moduleId: 'psychology',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-119',
    title: 'Contrast Effect Awareness',
    description: 'Notice 3 times today when your judgment was affected by what you compared something to, not its absolute value.',
    category: 'psychology',
    moduleId: 'psychology',
    xpReward: 25,
    difficulty: 'easy',
  },
  {
    id: 'ch-120',
    title: 'Narrative Fallacy Journal',
    description: 'Write about a past success. Now rewrite it highlighting the role of luck and randomness. Which feels more true?',
    category: 'psychology',
    moduleId: 'psychology',
    xpReward: 100,
    difficulty: 'hard',
  },

  // ============================================
  // BATCH 2: NEGOTIATION - Real-World Practice (7 challenges)
  // ============================================
  {
    id: 'ch-121',
    title: 'The Calibrated Question',
    description: 'Use "How" or "What" questions instead of "Why" in 5 conversations today. Notice the difference in responses.',
    category: 'negotiation',
    moduleId: 'negotiation',
    xpReward: 25,
    difficulty: 'easy',
  },
  {
    id: 'ch-122',
    title: 'Strategic Silence',
    description: 'In your next negotiation or difficult conversation, pause for 4 seconds after they finish speaking before responding.',
    category: 'negotiation',
    moduleId: 'negotiation',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-123',
    title: 'Anchor First',
    description: 'In any price-related discussion today, be the first to name a number. Set it aggressively in your favor.',
    category: 'negotiation',
    moduleId: 'negotiation',
    xpReward: 100,
    difficulty: 'hard',
  },
  {
    id: 'ch-124',
    title: 'The Label',
    description: 'Use labeling technique 3 times: "It seems like..." or "It sounds like..." to acknowledge emotions before responding.',
    category: 'negotiation',
    moduleId: 'negotiation',
    xpReward: 25,
    difficulty: 'easy',
  },
  {
    id: 'ch-125',
    title: 'BATNA Builder',
    description: 'For an upcoming negotiation, develop your BATNA (Best Alternative to Negotiated Agreement). Make it as strong as possible.',
    category: 'negotiation',
    moduleId: 'negotiation',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-126',
    title: 'No-Oriented Question',
    description: 'Reframe a request to invite "No" instead of "Yes". Example: "Would it be ridiculous if...?" instead of "Could you...?"',
    category: 'negotiation',
    moduleId: 'negotiation',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-127',
    title: 'Interest Mining',
    description: 'In a disagreement today, ask questions until you uncover the underlying interest behind their position.',
    category: 'negotiation',
    moduleId: 'negotiation',
    xpReward: 100,
    difficulty: 'hard',
  },

  // ============================================
  // BATCH 2: WEALTH BUILDING - Financial Exercises (6 challenges)
  // ============================================
  {
    id: 'ch-128',
    title: 'Subscription Purge',
    description: 'Audit every recurring charge. Cancel at least one subscription you have not used in 30 days.',
    category: 'wealth',
    moduleId: 'wealth-building',
    xpReward: 25,
    difficulty: 'easy',
  },
  {
    id: 'ch-129',
    title: 'Income Stream Brainstorm',
    description: 'Generate 10 ideas for additional income streams based on your skills. Research one for feasibility.',
    category: 'wealth',
    moduleId: 'wealth-building',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-130',
    title: 'Asset vs Liability Audit',
    description: 'List everything you own over $100. Classify each as asset (generates income) or liability (costs money). Calculate the ratio.',
    category: 'wealth',
    moduleId: 'wealth-building',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-131',
    title: 'Hourly Rate Reality Check',
    description: 'Calculate your true hourly rate including commute, preparation, and recovery time. Is it what you expected?',
    category: 'wealth',
    moduleId: 'wealth-building',
    xpReward: 25,
    difficulty: 'easy',
  },
  {
    id: 'ch-132',
    title: 'Negotiate One Bill',
    description: 'Call one service provider (phone, internet, insurance) and negotiate a lower rate or better terms.',
    category: 'wealth',
    moduleId: 'wealth-building',
    xpReward: 100,
    difficulty: 'hard',
  },
  {
    id: 'ch-133',
    title: 'Future Self Investment',
    description: 'Identify one skill that will be valuable in 5 years. Invest time or money today in learning it.',
    category: 'wealth',
    moduleId: 'wealth-building',
    xpReward: 50,
    difficulty: 'medium',
  },

  // ============================================
  // BATCH 2: AI/ML - Practical AI Exploration (6 challenges)
  // ============================================
  {
    id: 'ch-134',
    title: 'Prompt Engineering Lab',
    description: 'Take one task you do regularly. Write 5 different prompts for it and compare AI outputs. Document what works best.',
    category: 'tech',
    moduleId: 'ai-ml',
    xpReward: 25,
    difficulty: 'easy',
  },
  {
    id: 'ch-135',
    title: 'AI Limitation Explorer',
    description: 'Find 3 tasks where AI fails or gives poor results. Analyze why and document the failure modes.',
    category: 'tech',
    moduleId: 'ai-ml',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-136',
    title: 'AI Workflow Integration',
    description: 'Identify one repetitive task in your work. Build an AI-assisted workflow that cuts time by 50%.',
    category: 'tech',
    moduleId: 'ai-ml',
    xpReward: 100,
    difficulty: 'hard',
  },
  {
    id: 'ch-137',
    title: 'Model Comparison Study',
    description: 'Give the same complex task to 3 different AI models. Compare outputs for accuracy, style, and usefulness.',
    category: 'tech',
    moduleId: 'ai-ml',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-138',
    title: 'AI Ethics Scenario',
    description: 'Write out an ethical dilemma involving AI. Argue both sides. Where would you draw the line?',
    category: 'tech',
    moduleId: 'ai-ml',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-139',
    title: 'Local AI Setup',
    description: 'Install and run a local AI model on your machine. Compare its capabilities to cloud-based models.',
    category: 'tech',
    moduleId: 'ai-ml',
    xpReward: 100,
    difficulty: 'hard',
  },

  // ============================================
  // BATCH 2: BLOCKCHAIN - Crypto/Web3 Exploration (5 challenges)
  // ============================================
  {
    id: 'ch-140',
    title: 'Transaction Anatomy',
    description: 'Look up a recent Bitcoin or Ethereum transaction on a block explorer. Understand every field in the data.',
    category: 'tech',
    moduleId: 'blockchain',
    xpReward: 25,
    difficulty: 'easy',
  },
  {
    id: 'ch-141',
    title: 'DeFi Exploration',
    description: 'Research one DeFi protocol (Uniswap, Aave, etc.). Understand how it works without centralized intermediaries.',
    category: 'tech',
    moduleId: 'blockchain',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-142',
    title: 'Smart Contract Reading',
    description: 'Find a simple smart contract on Etherscan. Read through the code and understand what it does.',
    category: 'tech',
    moduleId: 'blockchain',
    xpReward: 100,
    difficulty: 'hard',
  },
  {
    id: 'ch-143',
    title: 'Gas Fee Tracker',
    description: 'Monitor Ethereum gas fees throughout the day. Identify patterns in when fees are lowest.',
    category: 'tech',
    moduleId: 'blockchain',
    xpReward: 25,
    difficulty: 'easy',
  },
  {
    id: 'ch-144',
    title: 'DAO Research',
    description: 'Research one active DAO. Understand its governance model, token, and what decisions it makes collectively.',
    category: 'tech',
    moduleId: 'blockchain',
    xpReward: 50,
    difficulty: 'medium',
  },

  // ============================================
  // BATCH 2: BRUCE LEE - Mindset and Movement (5 challenges)
  // ============================================
  {
    id: 'ch-145',
    title: 'The Daily Minimum',
    description: 'Set an absurdly small daily physical practice (5 punches, 10 squats). Do it no matter what. The habit matters more than the amount.',
    category: 'philosophy',
    moduleId: 'bruce-lee',
    xpReward: 25,
    difficulty: 'easy',
  },
  {
    id: 'ch-146',
    title: 'Flow State Hunt',
    description: 'Engage in one activity today where action and awareness merge. Document what triggered the flow state.',
    category: 'philosophy',
    moduleId: 'bruce-lee',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-147',
    title: 'Authentic Self-Expression',
    description: 'Express yourself honestly in a situation where you would normally hold back. Be authentic without being aggressive.',
    category: 'philosophy',
    moduleId: 'bruce-lee',
    xpReward: 100,
    difficulty: 'hard',
  },
  {
    id: 'ch-148',
    title: 'Simplicity Audit',
    description: 'Review one skill you are learning. Remove everything non-essential. What remains is the core.',
    category: 'philosophy',
    moduleId: 'bruce-lee',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-149',
    title: 'Water Mind Training',
    description: 'When faced with an obstacle today, adapt like water. Find the path of least resistance while maintaining your goal.',
    category: 'philosophy',
    moduleId: 'bruce-lee',
    xpReward: 50,
    difficulty: 'medium',
  },

  // ============================================
  // BATCH 2: LIFE DESIGN - Purpose and Skills (3 challenges)
  // ============================================
  {
    id: 'ch-150',
    title: 'Energy-Engagement-Expression Map',
    description: 'List activities that give you energy, engage you deeply, and allow authentic expression. Find the overlap.',
    category: 'general',
    moduleId: 'life-design',
    xpReward: 50,
    difficulty: 'medium',
  },
  {
    id: 'ch-151',
    title: 'Odyssey Plans',
    description: 'Design 3 different 5-year life paths: current trajectory, alternative career, and radical change. Which excites you most?',
    category: 'general',
    moduleId: 'life-design',
    xpReward: 100,
    difficulty: 'hard',
  },
  {
    id: 'ch-152',
    title: 'Time Audit Reality Check',
    description: 'Track exactly how you spend your time today in 30-minute blocks. Compare to how you thought you spent it.',
    category: 'general',
    moduleId: 'life-design',
    xpReward: 25,
    difficulty: 'easy',
  },

  // ============================================
  // BATCH 2: MASTER SYNTHESIS - Connecting Concepts (3 challenges)
  // ============================================
  {
    id: 'ch-153',
    title: 'Cross-Domain Problem Solving',
    description: 'Take a problem from one field and solve it using principles from a completely different field you have studied.',
    category: 'general',
    moduleId: 'master-synthesis',
    xpReward: 100,
    difficulty: 'hard',
  },
  {
    id: 'ch-154',
    title: 'Mental Model Stack',
    description: 'Choose a decision you need to make. Analyze it using at least 5 different mental models from different disciplines.',
    category: 'general',
    moduleId: 'master-synthesis',
    xpReward: 100,
    difficulty: 'hard',
  },
  {
    id: 'ch-155',
    title: 'Teaching to Learn',
    description: 'Explain a complex concept you have learned to someone unfamiliar with it. Note where you struggle - that is where your understanding is weak.',
    category: 'general',
    moduleId: 'master-synthesis',
    xpReward: 50,
    difficulty: 'medium',
  },
];

/**
 * Seeded random number generator for consistent daily selection
 */
function seededRandom(seed: number): () => number {
  return function() {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff;
    return seed / 0x7fffffff;
  };
}

/**
 * Get today's challenges with date-seeded rotation
 * Ensures same challenges appear for everyone on the same day
 */
export function getTodaysChallenges(count: number = 5): EnhancedDailyChallenge[] {
  const today = new Date();
  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  const random = seededRandom(seed);

  // Create a copy and shuffle with seeded random
  const shuffled = [...challengePool].sort(() => random() - 0.5);

  // Select challenges ensuring variety across modules
  const selected: EnhancedDailyChallenge[] = [];
  const usedModules = new Set<string>();

  // First pass: try to get diverse modules
  for (const challenge of shuffled) {
    if (selected.length >= count) break;
    if (!usedModules.has(challenge.moduleId)) {
      selected.push(challenge);
      usedModules.add(challenge.moduleId);
    }
  }

  // Second pass: fill remaining with any challenges
  for (const challenge of shuffled) {
    if (selected.length >= count) break;
    if (!selected.includes(challenge)) {
      selected.push(challenge);
    }
  }

  return selected;
}

/**
 * Get challenges by module
 */
export function getChallengesByModule(moduleId: string): EnhancedDailyChallenge[] {
  return challengePool.filter(c => c.moduleId === moduleId);
}

/**
 * Get challenges by difficulty
 */
export function getChallengesByDifficulty(difficulty: 'easy' | 'medium' | 'hard'): EnhancedDailyChallenge[] {
  return challengePool.filter(c => c.difficulty === difficulty);
}

/**
 * Get random challenges (for custom selections)
 */
export function getRandomChallenges(count: number): EnhancedDailyChallenge[] {
  const shuffled = [...challengePool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

/**
 * Get all modules represented in challenge pool
 */
export function getChallengeModules(): string[] {
  return [...new Set(challengePool.map(c => c.moduleId))];
}

/**
 * Get challenge count by module
 */
export function getChallengeCountByModule(): Record<string, number> {
  return challengePool.reduce((acc, c) => {
    acc[c.moduleId] = (acc[c.moduleId] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
}

/**
 * Check if a challenge is available based on user's streak
 */
export function isChallengeAvailable(challenge: EnhancedDailyChallenge, userStreak: number): boolean {
  if (challenge.minStreak && userStreak < challenge.minStreak) {
    return false;
  }
  return true;
}

export default challengePool;
