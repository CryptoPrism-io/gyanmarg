import type { SpacedRepetitionCard } from '@/types';

export const timeManagementFlashcards: SpacedRepetitionCard[] = [
  // Eisenhower Matrix
  {
    id: 'fc-tm-001',
    front: 'What is the Eisenhower Matrix and what are its four quadrants?',
    back: 'A decision-making framework that categorizes tasks into four quadrants: Q1 (Urgent & Important) - Do immediately, Q2 (Important, Not Urgent) - Schedule for later, Q3 (Urgent, Not Important) - Delegate, Q4 (Neither) - Eliminate. Named after President Eisenhower who said "What is important is seldom urgent and what is urgent is seldom important."',
    category: 'Personal Development',
    source: 'Time Management',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['time-management', 'productivity', 'eisenhower-matrix', 'prioritization']
  },
  {
    id: 'fc-tm-002',
    front: 'In the Eisenhower Matrix, which quadrant should receive the MOST focus for long-term success and why?',
    back: 'Quadrant 2 (Important but Not Urgent). This quadrant contains activities like strategic planning, relationship building, exercise, learning, and prevention. Focusing here reduces Q1 crises over time, creates sustainable success, and prevents burnout. Most people neglect Q2 while constantly firefighting in Q1.',
    category: 'Personal Development',
    source: 'Time Management',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['time-management', 'productivity', 'eisenhower-matrix', 'prioritization']
  },
  {
    id: 'fc-tm-003',
    front: 'What is the danger of spending too much time in Quadrant 3 (Urgent but Not Important) of the Eisenhower Matrix?',
    back: 'Q3 tasks create an illusion of productivity while providing little real value. Examples include unnecessary meetings, most emails, and interruptions. The urgency of these tasks tricks us into thinking they matter. This leads to: feeling busy but unfulfilled, neglecting truly important work, becoming reactive rather than proactive, and eventual burnout from constant interruptions.',
    category: 'Personal Development',
    source: 'Time Management',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['time-management', 'productivity', 'eisenhower-matrix', 'prioritization']
  },
  {
    id: 'fc-tm-004',
    front: 'How do you distinguish between "urgent" and "important" when categorizing tasks?',
    back: 'URGENT tasks demand immediate attention and are often associated with someone else\'s priorities (ringing phone, most emails, pressing deadlines). IMPORTANT tasks contribute to your mission, values, and long-term goals. The key test: "If I don\'t do this today, what happens?" Urgent tasks have immediate consequences; important tasks have long-term impact but often no immediate penalty for delay.',
    category: 'Personal Development',
    source: 'Time Management',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['time-management', 'productivity', 'eisenhower-matrix', 'prioritization']
  },

  // Time Blocking and Calendar Management
  {
    id: 'fc-tm-005',
    front: 'What is time blocking and why is it more effective than a traditional to-do list?',
    back: 'Time blocking assigns specific time slots to specific tasks on your calendar, treating tasks as appointments with yourself. Unlike to-do lists which show WHAT but not WHEN, time blocking: forces realistic planning (reveals overcommitment), protects focused work time, reduces decision fatigue about what to work on, creates accountability through scheduled commitments, and helps track actual vs planned time.',
    category: 'Personal Development',
    source: 'Time Management',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['time-management', 'productivity', 'time-blocking', 'calendar-management']
  },
  {
    id: 'fc-tm-006',
    front: 'What is "defensive calendaring" and how should you implement it?',
    back: 'Defensive calendaring means proactively blocking time for your priorities before others fill your calendar. Implementation: 1) Block your most productive hours for deep work first, 2) Schedule recurring blocks for planning, exercise, and personal priorities, 3) Create buffer blocks between meetings, 4) Block "office hours" for availability rather than being always available, 5) Mark blocked time as "busy" so others cannot book over it.',
    category: 'Personal Development',
    source: 'Time Management',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['time-management', 'productivity', 'time-blocking', 'calendar-management']
  },
  {
    id: 'fc-tm-007',
    front: 'What is "task batching" in time blocking and what types of tasks benefit most?',
    back: 'Task batching groups similar tasks together in dedicated time blocks to minimize context switching. Best for: email (2-3 scheduled checks daily), phone calls (one block), administrative work, social media, errands, creative work of similar type. Benefits: reduces startup time, maintains relevant mental context, creates efficiency through momentum, and prevents small tasks from fragmenting the day.',
    category: 'Personal Development',
    source: 'Time Management',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['time-management', 'productivity', 'time-blocking', 'batching']
  },
  {
    id: 'fc-tm-008',
    front: 'How much buffer time should you build into your schedule and why?',
    back: 'Build 20-30% buffer time into your schedule. Research shows tasks consistently take longer than estimated (planning fallacy). Buffer time serves multiple purposes: absorbs unexpected interruptions, provides transition time between tasks, allows for biological needs, accommodates emergencies without derailing the whole day, and reduces stress from an overpacked schedule. Without buffers, one delay cascades through your entire day.',
    category: 'Personal Development',
    source: 'Time Management',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['time-management', 'productivity', 'time-blocking', 'planning']
  },

  // Pomodoro Technique
  {
    id: 'fc-tm-009',
    front: 'What is the Pomodoro Technique and what are its standard intervals?',
    back: 'The Pomodoro Technique is a time management method using focused work intervals with regular breaks. Standard intervals: 25 minutes work ("one pomodoro"), 5-minute short break, after 4 pomodoros take a 15-30 minute long break. Created by Francesco Cirillo in the 1980s, named after the tomato-shaped kitchen timer he used. The method combats procrastination and maintains mental freshness.',
    category: 'Personal Development',
    source: 'Time Management',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['time-management', 'productivity', 'pomodoro-technique', 'focus']
  },
  {
    id: 'fc-tm-010',
    front: 'What are the five core rules of the traditional Pomodoro Technique?',
    back: '1) A pomodoro is indivisible - complete the full 25 minutes or restart, 2) If interrupted, record it and restart the pomodoro, 3) If a task takes more than 5-7 pomodoros, break it down, 4) If a task takes less than one pomodoro, combine it with other small tasks, 5) Each completed pomodoro gets a checkmark for tracking. These rules create discipline and accurate time estimation over time.',
    category: 'Personal Development',
    source: 'Time Management',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['time-management', 'productivity', 'pomodoro-technique', 'focus']
  },
  {
    id: 'fc-tm-011',
    front: 'What are effective variations of the Pomodoro Technique for different work types?',
    back: '52/17 Method: 52 minutes work, 17-minute break (based on productivity research). 90-Minute Blocks: Aligned with ultradian rhythms for deep creative work. Flowmodoro: Work until natural focus ends, then take proportional break. 45/15 Method: Better for tasks requiring deeper immersion. The key is finding intervals matching your work type, energy patterns, and attention span rather than rigidly following 25/5.',
    category: 'Personal Development',
    source: 'Time Management',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['time-management', 'productivity', 'pomodoro-technique', 'focus']
  },
  {
    id: 'fc-tm-012',
    front: 'Why are breaks essential in the Pomodoro Technique and what should you do during them?',
    back: 'Breaks prevent mental fatigue, consolidate learning, and maintain sustainable productivity. During breaks: physically move (walk, stretch), look away from screens (20-20-20 rule), hydrate, do something enjoyable but not demanding. Avoid: checking email/social media (these are cognitively engaging, not restful), starting new tasks, or skipping breaks to "power through." The break IS part of the productivity system, not a reward.',
    category: 'Personal Development',
    source: 'Time Management',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['time-management', 'productivity', 'pomodoro-technique', 'breaks']
  },

  // GTD (Getting Things Done)
  {
    id: 'fc-tm-013',
    front: 'What are the five stages of the GTD (Getting Things Done) workflow?',
    back: '1) CAPTURE: Collect everything that has your attention into trusted inboxes. 2) CLARIFY: Process each item - determine what it is and what action is required. 3) ORGANIZE: Put items where they belong (calendar, project lists, waiting for, reference). 4) REFLECT: Review your system regularly (daily and weekly reviews). 5) ENGAGE: Take action with confidence knowing you\'re working on the right thing.',
    category: 'Personal Development',
    source: 'Time Management',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['time-management', 'productivity', 'gtd', 'organization']
  },
  {
    id: 'fc-tm-014',
    front: 'What is the "2-Minute Rule" in GTD and when should you apply it?',
    back: 'The 2-Minute Rule: If an action takes less than 2 minutes to complete, do it immediately rather than capturing it into your system. Rationale: The overhead of tracking, organizing, and retrieving the task would take longer than just doing it. Apply during the CLARIFY stage when processing your inbox. Important: This is for processing time, not general work - don\'t let 2-minute tasks derail focused work sessions.',
    category: 'Personal Development',
    source: 'Time Management',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['time-management', 'productivity', 'gtd', 'quick-wins']
  },
  {
    id: 'fc-tm-015',
    front: 'What is a "Next Action" in GTD and why is defining it crucial?',
    back: 'A Next Action is the very next physical, visible activity required to move a project forward. Not "plan vacation" but "search Google for flights to Hawaii." Defining next actions is crucial because: vague tasks cause procrastination, specific actions are easier to start, it reveals hidden complexity in projects, and it eliminates decision-making when you\'re ready to work. The question: "What\'s the VERY next thing I need to do?"',
    category: 'Personal Development',
    source: 'Time Management',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['time-management', 'productivity', 'gtd', 'action-items']
  },
  {
    id: 'fc-tm-016',
    front: 'What is the purpose of the Weekly Review in GTD and what does it include?',
    back: 'The Weekly Review is the critical success factor in GTD - it keeps your system trusted and complete. Components: 1) Clear all inboxes to zero, 2) Review completed actions, 3) Review all project lists and add next actions, 4) Review "Waiting For" list and follow up, 5) Review "Someday/Maybe" list, 6) Review calendar for upcoming commitments, 7) Capture new projects and ideas. Takes 1-2 hours; schedule it as a non-negotiable appointment.',
    category: 'Personal Development',
    source: 'Time Management',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['time-management', 'productivity', 'gtd', 'weekly-review']
  },

  // Energy Management
  {
    id: 'fc-tm-017',
    front: 'Why is energy management often more important than time management?',
    back: 'Time is fixed (24 hours daily) but energy is renewable and variable. One hour of high-energy work can accomplish more than three hours of depleted work. Energy management focuses on: matching task difficulty to energy levels, renewing energy through rest and recovery, eliminating energy drains, and creating sustainable performance. Time management without energy management leads to burnout and diminishing returns.',
    category: 'Personal Development',
    source: 'Time Management',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['time-management', 'productivity', 'energy-management', 'performance']
  },
  {
    id: 'fc-tm-018',
    front: 'What are the four types of energy to manage according to performance research?',
    back: '1) PHYSICAL: Foundation - sleep, nutrition, exercise, hydration. 2) EMOTIONAL: Quality - managing stress, cultivating positive emotions, resilience. 3) MENTAL: Focus - concentration, creativity, realistic optimism. 4) SPIRITUAL: Purpose - alignment with values, commitment to a purpose beyond self-interest. All four must be intentionally managed; deficits in one area drain the others. Full engagement requires drawing from all four sources.',
    category: 'Personal Development',
    source: 'Time Management',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['time-management', 'productivity', 'energy-management', 'holistic']
  },
  {
    id: 'fc-tm-019',
    front: 'What are "ultradian rhythms" and how should you use them for productivity?',
    back: 'Ultradian rhythms are 90-120 minute cycles of peak alertness followed by 20-minute troughs. During peaks: tackle complex, creative, or demanding work. During troughs: take breaks, do routine tasks, or rest. Signs of trough: yawning, hunger, daydreaming, difficulty concentrating. Working through troughs without rest depletes cognitive resources and reduces afternoon performance. Align your schedule to these natural cycles for sustainable high performance.',
    category: 'Personal Development',
    source: 'Time Management',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['time-management', 'productivity', 'energy-management', 'biological-rhythms']
  },
  {
    id: 'fc-tm-020',
    front: 'How do you identify your "biological prime time" and use it strategically?',
    back: 'Biological prime time is your period of peak mental alertness. To identify: track energy levels hourly for 2-3 weeks, noting when you feel most focused and alert. Most people peak mid-morning (9-11am) with a secondary peak in late afternoon (4-6pm). Strategic use: protect prime time for your most important, cognitively demanding work. Schedule meetings, email, and routine tasks during off-peak hours. Never waste prime time on low-value activities.',
    category: 'Personal Development',
    source: 'Time Management',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['time-management', 'productivity', 'energy-management', 'peak-performance']
  },

  // Batching Similar Tasks
  {
    id: 'fc-tm-021',
    front: 'What is the "context switching cost" and how does task batching reduce it?',
    back: 'Context switching cost is the time and mental energy lost when shifting between different types of tasks. Research shows it takes 23 minutes on average to fully refocus after an interruption. Each switch requires: closing mental loops, loading new context, rebuilding momentum. Task batching reduces this by grouping similar tasks (all emails, all calls, all writing) into dedicated blocks, minimizing switches and maintaining mental context throughout.',
    category: 'Personal Development',
    source: 'Time Management',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['time-management', 'productivity', 'batching', 'focus']
  },
  {
    id: 'fc-tm-022',
    front: 'What types of tasks are best suited for batching and why?',
    back: 'Best for batching: 1) Communication (email, messages, calls) - same mental mode, 2) Administrative tasks (expense reports, scheduling, filing), 3) Creative work of similar type (writing, design, coding), 4) Errands and physical tasks, 5) Research and reading. These share cognitive context and tools. NOT good for batching: tasks requiring different energy levels, tasks with time-sensitive dependencies, or mixing creative with administrative work.',
    category: 'Personal Development',
    source: 'Time Management',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['time-management', 'productivity', 'batching', 'task-management']
  },
  {
    id: 'fc-tm-023',
    front: 'How should you batch email processing for maximum efficiency?',
    back: 'Email batching strategy: 1) Check at scheduled times only (e.g., 9am, 1pm, 5pm), not continuously, 2) Turn off all notifications between checks, 3) Process to zero each session using the 4 D\'s: Delete, Do (if under 2 min), Delegate, or Defer (schedule for later), 4) Use templates for common responses, 5) Keep replies brief (5 sentences or less), 6) Never check email first thing - protect your morning energy for important work.',
    category: 'Personal Development',
    source: 'Time Management',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['time-management', 'productivity', 'batching', 'email-management']
  },
  {
    id: 'fc-tm-024',
    front: 'What is "theme days" batching and when is it most effective?',
    back: 'Theme days assign different focus areas to different days: Monday for meetings, Tuesday for creative work, Wednesday for administrative tasks, etc. Most effective for: entrepreneurs, leaders with varied responsibilities, and creative professionals. Benefits: deeper immersion in each area, reduced daily context switching, clearer expectations for others, easier scheduling. Requires: flexible work environment and ability to defer non-urgent requests to appropriate days.',
    category: 'Personal Development',
    source: 'Time Management',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['time-management', 'productivity', 'batching', 'scheduling']
  },

  // Eliminating Time Wasters
  {
    id: 'fc-tm-025',
    front: 'What are the most common "time wasters" and how much time do they consume?',
    back: 'Common time wasters: 1) Social media (average 2.5 hours/day), 2) Email (28% of workweek), 3) Unnecessary meetings (31 hours/month for professionals), 4) Multitasking (40% productivity loss), 5) Poor planning and disorganization, 6) Procrastination, 7) Perfectionism, 8) Inability to say no. Combined, these can waste 50% or more of available time. Most aren\'t inherently bad but become problematic through overuse or poor timing.',
    category: 'Personal Development',
    source: 'Time Management',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['time-management', 'productivity', 'time-wasters', 'efficiency']
  },
  {
    id: 'fc-tm-026',
    front: 'How do you conduct a "time audit" to identify your personal time wasters?',
    back: 'Time audit process: 1) Track all activities in 15-30 minute increments for 1-2 weeks, 2) Categorize each block (productive work, meetings, admin, breaks, distractions), 3) Calculate percentage of time in each category, 4) Identify your top 3-5 time drains, 5) Compare actual time use to your stated priorities and values, 6) Create specific strategies to reduce each time waster. Use apps like RescueTime for automatic tracking or manual logs for awareness.',
    category: 'Personal Development',
    source: 'Time Management',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['time-management', 'productivity', 'time-audit', 'self-awareness']
  },
  {
    id: 'fc-tm-027',
    front: 'What strategies effectively reduce time lost to unnecessary meetings?',
    back: 'Meeting reduction strategies: 1) Require agendas for all meetings - no agenda, no meeting, 2) Set default meeting length to 25 or 50 minutes, not 30/60, 3) Question necessity: "Could this be an email/document?", 4) Invite minimum required attendees, 5) Stand-up meetings for quick check-ins, 6) Implement "meeting-free" time blocks or days, 7) End meetings when objectives are achieved, 8) Review and cancel recurring meetings quarterly.',
    category: 'Personal Development',
    source: 'Time Management',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['time-management', 'productivity', 'meetings', 'efficiency']
  },
  {
    id: 'fc-tm-028',
    front: 'How do you say "no" effectively to protect your time without damaging relationships?',
    back: 'Effective "no" strategies: 1) "No, but..." offer alternatives (different time, person, or scope), 2) "Let me check my priorities" - buy time to evaluate, 3) Explain your current commitments briefly, 4) Be direct but kind - long explanations invite negotiation, 5) Use "I don\'t" instead of "I can\'t" (shows policy not inability), 6) Remember: every "yes" is a "no" to something else. Saying no to low-priority requests is saying yes to your priorities.',
    category: 'Personal Development',
    source: 'Time Management',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['time-management', 'productivity', 'boundaries', 'communication']
  },

  // Single-tasking vs Multitasking
  {
    id: 'fc-tm-029',
    front: 'Why is multitasking a myth and what actually happens in the brain when we attempt it?',
    back: 'True multitasking is neurologically impossible for cognitive tasks. The brain actually "task switches" rapidly between activities, incurring costs each time: attention residue from previous task, error rate increases 50%, tasks take 40% longer than sequential completion, cortisol and adrenaline increase causing stress. Only automatic tasks (walking while talking) can truly parallel process. "Multitasking" is really doing multiple things poorly simultaneously.',
    category: 'Personal Development',
    source: 'Time Management',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['time-management', 'productivity', 'single-tasking', 'focus']
  },
  {
    id: 'fc-tm-030',
    front: 'What is "attention residue" and how does it impact productivity?',
    back: 'Attention residue is the cognitive phenomenon where thoughts about a previous task persist and intrude on the current task. When you switch tasks before completing one, part of your attention remains "stuck" on the unfinished work. Effects: reduced cognitive capacity for new task, lower quality work, increased time to reach full engagement, mental fatigue. Minimize by: completing tasks before switching, creating clear stopping points, writing notes about where you left off.',
    category: 'Personal Development',
    source: 'Time Management',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['time-management', 'productivity', 'attention', 'focus']
  },
  {
    id: 'fc-tm-031',
    front: 'What are practical strategies for developing single-tasking habits?',
    back: 'Single-tasking strategies: 1) Close all unnecessary browser tabs and apps, 2) Put phone in another room or use app blockers, 3) Use full-screen mode for current work, 4) Set a timer for focused single-task sessions, 5) Write down intrusive thoughts to address later, 6) Turn off all notifications, 7) Create a "distraction list" for ideas that pop up, 8) Finish what you start before switching, 9) Practice mindfulness to strengthen focus muscles.',
    category: 'Personal Development',
    source: 'Time Management',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['time-management', 'productivity', 'single-tasking', 'focus']
  },
  {
    id: 'fc-tm-032',
    front: 'When (if ever) is multitasking or task-switching actually appropriate?',
    back: 'Task-switching is appropriate when: 1) Combining automatic tasks with cognitive ones (listening to podcasts while exercising), 2) You\'re genuinely stuck and need mental refresh before returning, 3) A truly urgent matter arises that cannot wait, 4) Tasks are so simple they require minimal cognitive load, 5) You\'re in a monitoring role requiring attention to multiple low-frequency inputs. Even then, minimize switches and batch similar interruptions when possible.',
    category: 'Personal Development',
    source: 'Time Management',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['time-management', 'productivity', 'multitasking', 'context-switching']
  },

  // Weekly Reviews and Planning
  {
    id: 'fc-tm-033',
    front: 'What are the essential components of an effective weekly planning session?',
    back: 'Weekly planning components: 1) Review previous week - wins, lessons, incomplete items, 2) Review upcoming calendar and commitments, 3) Identify 3-5 weekly priorities aligned with goals, 4) Schedule time blocks for priorities, 5) Anticipate obstacles and plan responses, 6) Review project lists and ensure each has a next action, 7) Check "Waiting For" items and follow up, 8) Schedule personal commitments (exercise, family, rest). Takes 30-60 minutes; best done Friday afternoon or Sunday evening.',
    category: 'Personal Development',
    source: 'Time Management',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['time-management', 'productivity', 'weekly-review', 'planning']
  },
  {
    id: 'fc-tm-034',
    front: 'What is the "Weekly Big 3" planning method?',
    back: 'The Weekly Big 3 identifies three major outcomes you want to achieve by week\'s end. Process: 1) Review your goals and projects, 2) Ask "If I could only accomplish three things this week, what would create the most value?", 3) Write them down and make them specific, 4) Break each into daily actions, 5) Protect time for these priorities. Benefits: forces prioritization, provides clear focus, makes progress visible, prevents overwhelm from endless task lists.',
    category: 'Personal Development',
    source: 'Time Management',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['time-management', 'productivity', 'weekly-planning', 'prioritization']
  },
  {
    id: 'fc-tm-035',
    front: 'How should you structure a daily planning routine for maximum effectiveness?',
    back: 'Effective daily planning: 1) Review calendar and commitments, 2) Identify your "Most Important Task" (MIT) - the one thing that must get done, 3) List 3-5 other priority tasks, 4) Time-block your day including breaks, 5) Anticipate and plan for potential disruptions, 6) Prepare materials needed for key tasks. Timing: best done evening before (reduces morning decision fatigue) or first thing (with fresh perspective). Keep it under 10 minutes.',
    category: 'Personal Development',
    source: 'Time Management',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['time-management', 'productivity', 'daily-planning', 'routines']
  },
  {
    id: 'fc-tm-036',
    front: 'What questions should you ask during a weekly review to improve future performance?',
    back: 'Weekly review questions: 1) What did I accomplish this week? (celebrate wins), 2) What didn\'t get done? Why?, 3) What unexpected challenges arose and how did I handle them?, 4) Where did I waste time?, 5) What would I do differently?, 6) Am I making progress on my larger goals?, 7) What am I avoiding that I need to address?, 8) What can I delegate or eliminate?, 9) What do I need to learn or who can help me?, 10) Am I taking care of myself?',
    category: 'Personal Development',
    source: 'Time Management',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['time-management', 'productivity', 'weekly-review', 'reflection']
  },

  // Deep Work
  {
    id: 'fc-tm-037',
    front: 'What is "Deep Work" and why is it increasingly valuable in the modern economy?',
    back: 'Deep Work (coined by Cal Newport) is professional activity performed in a state of distraction-free concentration that pushes cognitive capabilities to their limit. Creates new value, improves skills, and is hard to replicate. Increasingly valuable because: 1) It\'s rare - constant connectivity makes it uncommon, 2) It produces highest-quality output, 3) Complex problems require sustained focus, 4) AI can replicate shallow work but not deep thinking. Those who master deep work will thrive.',
    category: 'Personal Development',
    source: 'Time Management',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['time-management', 'productivity', 'deep-work', 'focus']
  },
  {
    id: 'fc-tm-038',
    front: 'What are the four philosophies of deep work scheduling?',
    back: '1) MONASTIC: Eliminate all shallow obligations (for researchers, writers with total control). 2) BIMODAL: Alternate between extended deep work periods and normal life (sabbaticals, dedicated seasons). 3) RHYTHMIC: Daily scheduled deep work blocks at consistent times (most practical for regular jobs). 4) JOURNALISTIC: Fit deep work wherever possible in the schedule (requires training, suits experienced practitioners). Choose based on your work demands, personality, and schedule flexibility.',
    category: 'Personal Development',
    source: 'Time Management',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['time-management', 'productivity', 'deep-work', 'scheduling']
  },
  {
    id: 'fc-tm-039',
    front: 'What rituals and environment factors support sustained deep work?',
    back: 'Deep work support structures: ENVIRONMENT: Dedicated workspace, removal of distractions (phone away, door closed), visual cues that signal focus mode. RITUALS: Consistent starting time, defined end time, clear goals for session, transition ritual to begin (same music, drink, routine). SUPPORT: Easy access to materials, food/water prepared, bathroom break before starting. RECOVERY: Defined breaks, end-of-day shutdown ritual to release work thoughts. Building routines reduces willpower needed to enter deep focus.',
    category: 'Personal Development',
    source: 'Time Management',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['time-management', 'productivity', 'deep-work', 'environment']
  },
  {
    id: 'fc-tm-040',
    front: 'What is the "shutdown ritual" and why is it essential for sustainable deep work?',
    back: 'A shutdown ritual is an end-of-workday routine that provides cognitive closure and enables true rest. Components: 1) Review task list and capture incomplete items, 2) Check calendar for tomorrow, 3) Create tomorrow\'s priority list, 4) Say a shutdown phrase ("Shutdown complete"). Benefits: reduces attention residue, prevents work thoughts from intruding on personal time, ensures nothing falls through cracks, enables guilt-free rest. Rest is essential - the brain consolidates learning and creativity during downtime.',
    category: 'Personal Development',
    source: 'Time Management',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['time-management', 'productivity', 'deep-work', 'work-life-balance']
  }
];
