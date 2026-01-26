import type { SpacedRepetitionCard } from '@/types';

export const focusFlashcards: SpacedRepetitionCard[] = [
  // Attention Residue
  {
    id: 'fc-foc-001',
    front: 'What is attention residue and why does it harm productivity?',
    back: 'Attention residue is the cognitive phenomenon where part of your attention remains stuck on a previous task when you switch to a new one. It harms productivity because your brain cannot fully engage with the new task, reducing cognitive performance by up to 40%.',
    category: 'Personal Development',
    source: 'Deep Work & Focus',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['focus', 'attention-residue', 'task-switching']
  },
  {
    id: 'fc-foc-002',
    front: 'How long does attention residue typically last after switching tasks?',
    back: 'Research by Sophie Leroy shows attention residue can last 15-25 minutes after switching tasks. This is why frequent task-switching creates a persistent state of diminished cognitive capacity throughout the day.',
    category: 'Personal Development',
    source: 'Deep Work & Focus',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['focus', 'attention-residue', 'cognitive-science']
  },
  {
    id: 'fc-foc-003',
    front: 'What strategies reduce attention residue when you must switch tasks?',
    back: '1) Complete tasks to a clear stopping point before switching. 2) Write down where you left off and next steps. 3) Use a brief transition ritual (short walk, breathing exercise). 4) Batch similar tasks together. 5) Schedule buffer time between different types of work.',
    category: 'Personal Development',
    source: 'Deep Work & Focus',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['focus', 'attention-residue', 'productivity']
  },
  {
    id: 'fc-foc-004',
    front: 'Why do incomplete tasks create stronger attention residue than completed ones?',
    back: 'The Zeigarnik Effect explains that incomplete tasks occupy more mental bandwidth because the brain keeps them active in working memory. Completing a task or writing down a concrete plan for completion creates psychological closure that releases this mental hold.',
    category: 'Personal Development',
    source: 'Deep Work & Focus',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['focus', 'attention-residue', 'zeigarnik-effect']
  },

  // Flow Triggers
  {
    id: 'fc-foc-005',
    front: 'What are the three internal flow triggers for achieving deep focus?',
    back: '1) Clear goals - knowing exactly what you are trying to accomplish. 2) Immediate feedback - receiving real-time information about progress. 3) Challenge-skill balance - the task difficulty slightly exceeds current ability (about 4% harder than your skill level).',
    category: 'Personal Development',
    source: 'Deep Work & Focus',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['focus', 'flow-state', 'deep-work']
  },
  {
    id: 'fc-foc-006',
    front: 'How does the challenge-skill balance affect flow state entry?',
    back: 'When challenge exceeds skill too much, you feel anxiety. When skill exceeds challenge, you feel boredom. Flow occurs in the sweet spot where the task is about 4% more difficult than your current abilities - enough to stretch you without overwhelming.',
    category: 'Personal Development',
    source: 'Deep Work & Focus',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['focus', 'flow-state', 'challenge-skill']
  },
  {
    id: 'fc-foc-007',
    front: 'What environmental flow triggers enhance the ability to enter deep focus?',
    back: '1) High consequences or stakes (real or perceived). 2) Rich environment with novelty, complexity, and unpredictability. 3) Deep embodiment through physical engagement. 4) Reduction of external interruptions and distractions.',
    category: 'Personal Development',
    source: 'Deep Work & Focus',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['focus', 'flow-state', 'environment']
  },
  {
    id: 'fc-foc-008',
    front: 'How long does it typically take to enter a flow state, and why does this matter for scheduling?',
    back: 'It takes approximately 15-25 minutes of uninterrupted focus to enter flow state. This means work sessions should be scheduled for at least 90 minutes to allow entry into flow plus meaningful time working within it. Short fragmented time blocks prevent flow entirely.',
    category: 'Personal Development',
    source: 'Deep Work & Focus',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['focus', 'flow-state', 'time-management']
  },

  // Distraction Management
  {
    id: 'fc-foc-009',
    front: 'What is the difference between internal and external distractions?',
    back: 'External distractions come from the environment: notifications, noise, interruptions from others. Internal distractions originate within: wandering thoughts, emotional states, physical discomfort, urges to check devices. Both require different management strategies.',
    category: 'Personal Development',
    source: 'Deep Work & Focus',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['focus', 'distraction', 'self-awareness']
  },
  {
    id: 'fc-foc-010',
    front: 'What is the 10-minute rule for managing internal distractions?',
    back: 'When you feel an urge to check your phone or switch tasks, tell yourself you can do it in 10 minutes. Often the urge passes. This builds distraction tolerance without complete denial, training your brain that urges do not require immediate action.',
    category: 'Personal Development',
    source: 'Deep Work & Focus',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['focus', 'distraction', 'self-control']
  },
  {
    id: 'fc-foc-011',
    front: 'How does the distraction notepad technique work?',
    back: 'Keep a notepad beside you during focused work. When a distracting thought arises (email to send, thing to look up), write it down and immediately return to your task. This acknowledges the thought without acting on it, knowing you can address it later.',
    category: 'Personal Development',
    source: 'Deep Work & Focus',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['focus', 'distraction', 'productivity-technique']
  },
  {
    id: 'fc-foc-012',
    front: 'What is proactive distraction prevention versus reactive distraction management?',
    back: 'Proactive prevention involves removing distractions before they occur: turning off notifications, using website blockers, communicating unavailability. Reactive management is handling distractions as they arise. Proactive is more effective because it requires no willpower during focused work.',
    category: 'Personal Development',
    source: 'Deep Work & Focus',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['focus', 'distraction', 'prevention']
  },

  // Attention Training
  {
    id: 'fc-foc-013',
    front: 'How does meditation specifically train the attention muscle?',
    back: 'Meditation practices attention in its purest form: noticing when attention wanders, then gently returning it to the focus object (breath, mantra, body). Each cycle of wandering and returning is like a repetition in attention training, strengthening the neural pathways for focus.',
    category: 'Personal Development',
    source: 'Deep Work & Focus',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['focus', 'attention-training', 'meditation']
  },
  {
    id: 'fc-foc-014',
    front: 'What is productive meditation and how do you practice it?',
    back: 'Productive meditation uses physical activity (walking, commuting) to focus on a single professional problem. When your mind wanders, return to the problem. This trains attention while making use of otherwise unfocused time, building deep thinking capacity.',
    category: 'Personal Development',
    source: 'Deep Work & Focus',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['focus', 'attention-training', 'deep-work']
  },
  {
    id: 'fc-foc-015',
    front: 'How does attention training differ from willpower-based focus?',
    back: 'Willpower-based focus relies on effortful self-control that depletes quickly. Attention training builds the underlying capacity to focus, making sustained attention more automatic and less effortful. Trained attention is sustainable; willpower alone is not.',
    category: 'Personal Development',
    source: 'Deep Work & Focus',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['focus', 'attention-training', 'willpower']
  },
  {
    id: 'fc-foc-016',
    front: 'What is the attention restoration theory and how can you apply it?',
    back: 'Attention Restoration Theory states that natural environments restore directed attention capacity because they engage involuntary attention (soft fascination) while resting directed attention. Apply it by spending time in nature between focus sessions or even looking at nature images.',
    category: 'Personal Development',
    source: 'Deep Work & Focus',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['focus', 'attention-training', 'restoration']
  },

  // Cognitive Load
  {
    id: 'fc-foc-017',
    front: 'What are the three types of cognitive load and how do they affect focus?',
    back: 'Intrinsic load: inherent complexity of the task itself. Extraneous load: unnecessary cognitive burden from poor design or environment. Germane load: mental effort used for learning and schema building. Reduce extraneous load to maximize capacity for intrinsic and germane load.',
    category: 'Personal Development',
    source: 'Deep Work & Focus',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['focus', 'cognitive-load', 'learning']
  },
  {
    id: 'fc-foc-018',
    front: 'How does working memory limitation affect focus strategies?',
    back: 'Working memory holds only 4 plus or minus 1 items at once. Trying to hold too much information creates cognitive overload. Effective focus strategies externalize information through notes, lists, and documentation, freeing working memory for active thinking.',
    category: 'Personal Development',
    source: 'Deep Work & Focus',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['focus', 'cognitive-load', 'working-memory']
  },
  {
    id: 'fc-foc-019',
    front: 'What is decision fatigue and how does it impact focus throughout the day?',
    back: 'Decision fatigue is the deterioration of decision quality after making many decisions. Each decision depletes the same mental resource used for focus. Combat it by making important decisions early, routinizing trivial choices, and batching decisions together.',
    category: 'Personal Development',
    source: 'Deep Work & Focus',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['focus', 'cognitive-load', 'decision-making']
  },
  {
    id: 'fc-foc-020',
    front: 'How does chunking reduce cognitive load during complex tasks?',
    back: 'Chunking groups individual pieces of information into meaningful units, effectively expanding working memory capacity. Experts in any field have developed sophisticated chunks. Break complex tasks into familiar patterns and build mental models to chunk information efficiently.',
    category: 'Personal Development',
    source: 'Deep Work & Focus',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['focus', 'cognitive-load', 'chunking']
  },

  // Monotasking
  {
    id: 'fc-foc-021',
    front: 'Why is multitasking a myth for cognitively demanding work?',
    back: 'The brain cannot truly multitask on cognitive tasks - it rapidly switches between tasks, incurring switching costs each time. Studies show multitasking reduces productivity by up to 40% and increases errors. What feels like multitasking is actually degraded serial processing.',
    category: 'Personal Development',
    source: 'Deep Work & Focus',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['focus', 'monotasking', 'productivity']
  },
  {
    id: 'fc-foc-022',
    front: 'What is single-tasking and how do you implement it effectively?',
    back: 'Single-tasking means working on one task with full attention until completion or a predetermined stopping point. Implement by: 1) Choosing one task. 2) Setting a time commitment. 3) Removing all other work from view. 4) Closing unrelated tabs and applications. 5) Committing to not switch.',
    category: 'Personal Development',
    source: 'Deep Work & Focus',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['focus', 'monotasking', 'single-tasking']
  },
  {
    id: 'fc-foc-023',
    front: 'How does task batching support monotasking?',
    back: 'Task batching groups similar activities together in dedicated time blocks: all emails at once, all calls together, all writing in one session. This minimizes context switching, allows deeper engagement with each type of work, and protects other time blocks for different work.',
    category: 'Personal Development',
    source: 'Deep Work & Focus',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['focus', 'monotasking', 'batching']
  },
  {
    id: 'fc-foc-024',
    front: 'What is the "one tab" rule for digital monotasking?',
    back: 'The one tab rule means having only one active browser tab or application window for your current task. Other tabs create visual distraction and temptation to switch. Close or hide everything not directly relevant. Use separate browser windows for different projects if needed.',
    category: 'Personal Development',
    source: 'Deep Work & Focus',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['focus', 'monotasking', 'digital-focus']
  },

  // Digital Minimalism
  {
    id: 'fc-foc-025',
    front: 'What is digital minimalism and its core philosophy?',
    back: 'Digital minimalism is a philosophy where you focus online time on a small number of carefully selected activities that strongly support your values, then happily miss out on everything else. It is intentional technology use versus passive consumption.',
    category: 'Personal Development',
    source: 'Deep Work & Focus',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['focus', 'digital-minimalism', 'technology']
  },
  {
    id: 'fc-foc-026',
    front: 'How does the attention economy exploit focus and what can you do about it?',
    back: 'Tech companies profit from capturing and holding attention through variable rewards, social validation, and infinite scroll. Combat this by: using grayscale mode, disabling notifications, setting app time limits, using website blockers, and scheduling specific times for optional digital activities.',
    category: 'Personal Development',
    source: 'Deep Work & Focus',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['focus', 'digital-minimalism', 'attention-economy']
  },
  {
    id: 'fc-foc-027',
    front: 'What is a digital declutter and how do you conduct one?',
    back: 'A digital declutter is a 30-day break from optional technologies. Steps: 1) Define which technologies are optional. 2) Remove them for 30 days. 3) Explore offline activities you value. 4) After 30 days, reintroduce only technologies that serve your values and define how you will use them.',
    category: 'Personal Development',
    source: 'Deep Work & Focus',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['focus', 'digital-minimalism', 'digital-detox']
  },
  {
    id: 'fc-foc-028',
    front: 'How do you audit your digital tools for focus impact?',
    back: 'For each app or platform ask: 1) What value does it provide? 2) Is it the best way to get that value? 3) What is the attention cost? 4) Can I set constraints (time, frequency) for use? Keep only tools where benefits clearly outweigh attention costs and you have clear usage rules.',
    category: 'Personal Development',
    source: 'Deep Work & Focus',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['focus', 'digital-minimalism', 'audit']
  },

  // Environment for Focus
  {
    id: 'fc-foc-029',
    front: 'What are the key environmental factors that enhance focus?',
    back: 'Key factors include: 1) Clutter-free workspace (visual simplicity). 2) Appropriate lighting (natural light preferred). 3) Comfortable temperature (slightly cool is optimal). 4) Noise management (silence or consistent background). 5) Ergonomic setup reducing physical discomfort.',
    category: 'Personal Development',
    source: 'Deep Work & Focus',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['focus', 'environment', 'workspace']
  },
  {
    id: 'fc-foc-030',
    front: 'How does context-dependent memory affect workspace design for focus?',
    back: 'The brain associates environments with activities through context-dependent memory. Using the same space for work and leisure creates conflicting associations. Designate specific spaces exclusively for focused work so the environment itself triggers focus mode when you enter it.',
    category: 'Personal Development',
    source: 'Deep Work & Focus',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['focus', 'environment', 'context-memory']
  },
  {
    id: 'fc-foc-031',
    front: 'What is the role of music and sound in creating focus environments?',
    back: 'Music with lyrics impairs focus on language-based tasks. Silence works best for complex cognitive work. Consistent background noise (white noise, nature sounds) can mask distracting variable sounds. Familiar instrumental music may aid routine tasks but hinders learning and creative work.',
    category: 'Personal Development',
    source: 'Deep Work & Focus',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['focus', 'environment', 'music']
  },
  {
    id: 'fc-foc-032',
    front: 'How do you design a "focus cave" in an open office or shared space?',
    back: 'Create portable focus cues: noise-canceling headphones, a specific lamp or object that signals "do not disturb," a physical barrier like a small screen. Establish social contracts with others about interruption protocols. Book meeting rooms for solo deep work when possible.',
    category: 'Personal Development',
    source: 'Deep Work & Focus',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['focus', 'environment', 'open-office']
  },

  // Focus Rituals
  {
    id: 'fc-foc-033',
    front: 'What is a focus ritual and why is it powerful?',
    back: 'A focus ritual is a consistent sequence of actions performed before deep work. It signals the brain to transition into focus mode, reducing the activation energy needed to start. Over time, the ritual becomes a trigger that automatically initiates the focused state.',
    category: 'Personal Development',
    source: 'Deep Work & Focus',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['focus', 'rituals', 'habit']
  },
  {
    id: 'fc-foc-034',
    front: 'What elements should a pre-focus ritual include?',
    back: 'Effective elements: 1) Physical preparation (clearing desk, gathering materials). 2) Digital preparation (closing apps, enabling blockers). 3) Mental preparation (reviewing goals, brief meditation). 4) Environmental cue (specific music, lighting, drink). Keep it short (2-5 minutes) and consistent.',
    category: 'Personal Development',
    source: 'Deep Work & Focus',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['focus', 'rituals', 'preparation']
  },
  {
    id: 'fc-foc-035',
    front: 'What is a shutdown ritual and why does it protect focus?',
    back: 'A shutdown ritual is a consistent end-of-work sequence that creates psychological closure. Include: reviewing tasks completed, capturing loose ends, planning tomorrow, saying a closing phrase. This prevents work thoughts from invading rest time and ensures full recovery for next day focus.',
    category: 'Personal Development',
    source: 'Deep Work & Focus',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['focus', 'rituals', 'shutdown']
  },
  {
    id: 'fc-foc-036',
    front: 'How do you use implementation intentions to strengthen focus rituals?',
    back: 'Implementation intentions use the format "When X happens, I will do Y." For focus: "When I sit at my desk at 9am, I will put my phone in the drawer and open my current project." This pre-decides behavior, reducing decision-making and reliance on motivation in the moment.',
    category: 'Personal Development',
    source: 'Deep Work & Focus',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['focus', 'rituals', 'implementation-intentions']
  },

  // Recovery and Breaks
  {
    id: 'fc-foc-037',
    front: 'Why are breaks essential for sustained focus rather than a sign of weakness?',
    back: 'The brain has limited capacity for sustained attention (ultradian rhythms of approximately 90 minutes). Breaks allow neural networks to consolidate, the prefrontal cortex to recover, and attention resources to replenish. Skipping breaks leads to diminishing returns and eventual burnout.',
    category: 'Personal Development',
    source: 'Deep Work & Focus',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['focus', 'recovery', 'breaks']
  },
  {
    id: 'fc-foc-038',
    front: 'What makes a break restorative versus depleting?',
    back: 'Restorative breaks: nature exposure, physical movement, social connection, mindfulness, or complete mental disengagement. Depleting breaks: checking email, social media scrolling, or activities requiring decisions. The key is giving directed attention a rest, not just changing tasks.',
    category: 'Personal Development',
    source: 'Deep Work & Focus',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['focus', 'recovery', 'restorative-breaks']
  },
  {
    id: 'fc-foc-039',
    front: 'What is the Pomodoro Technique and how does it structure focus and recovery?',
    back: 'Pomodoro uses 25-minute focused work periods followed by 5-minute breaks, with a longer 15-30 minute break after four cycles. It creates urgency, makes starting easier (only 25 minutes), and ensures regular recovery. Adjust intervals to match your natural focus capacity.',
    category: 'Personal Development',
    source: 'Deep Work & Focus',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['focus', 'recovery', 'pomodoro']
  },
  {
    id: 'fc-foc-040',
    front: 'How does sleep affect focus capacity and what is the minimum for optimal performance?',
    back: 'Sleep deprivation severely impairs prefrontal cortex function, reducing focus, decision-making, and emotional regulation. Most adults need 7-9 hours for optimal cognitive performance. Even small sleep deficits accumulate into significant focus impairment. Prioritize sleep as a focus-enhancement strategy.',
    category: 'Personal Development',
    source: 'Deep Work & Focus',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['focus', 'recovery', 'sleep']
  }
];
