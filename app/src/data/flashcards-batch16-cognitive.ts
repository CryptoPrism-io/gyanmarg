import type { SpacedRepetitionCard } from '@/types';

export const cognitiveScienceFlashcards: SpacedRepetitionCard[] = [
  // Neuroplasticity and Brain Change
  {
    id: 'fc-cognitive-001',
    front: 'What is neuroplasticity and why does it matter for personal development?',
    back: 'Neuroplasticity is the brain\'s ability to reorganize itself by forming new neural connections throughout life. This means your brain is not fixed - skills, habits, and even personality traits can be changed through deliberate practice. Every time you learn something new, you physically rewire your brain. This discovery overturned the belief that adult brains are static.',
    category: 'Psychology',
    source: 'The Brain That Changes Itself - Norman Doidge',
    pathwayId: 'psychology',
    difficulty: 'beginner',
    tags: ['cognitive-science', 'neuroplasticity', 'brain-change']
  },
  {
    id: 'fc-cognitive-002',
    front: 'What is Hebb\'s Rule and how does it explain habit formation?',
    back: '"Neurons that fire together, wire together." When two neurons activate simultaneously, the connection between them strengthens. This explains why repeated behaviors become automatic habits - the neural pathways become increasingly efficient. Conversely, unused connections weaken ("use it or lose it"). To build new habits, consistently pair the trigger with the behavior to strengthen that neural circuit.',
    category: 'Psychology',
    source: 'The Brain That Changes Itself - Norman Doidge',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['cognitive-science', 'neuroplasticity', 'habits']
  },
  {
    id: 'fc-cognitive-003',
    front: 'What is the critical period hypothesis and can adults still learn effectively?',
    back: 'Critical periods are windows of heightened plasticity when the brain is especially receptive to certain types of learning (e.g., language acquisition in childhood). While these windows close, adult brains retain significant plasticity. Adults can still learn new skills but may require more repetition and focused attention. The key is engaging in deliberate practice with full concentration, which can partially reopen plasticity mechanisms.',
    category: 'Psychology',
    source: 'The Brain That Changes Itself - Norman Doidge',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['cognitive-science', 'neuroplasticity', 'learning']
  },
  {
    id: 'fc-cognitive-004',
    front: 'How does the brain\'s "competitive plasticity" affect skill development?',
    back: 'Brain maps are constantly competing for cortical real estate. When you practice a skill, the brain area devoted to it expands, taking territory from neighboring regions. This is why musicians have enlarged motor cortex areas for their instrument fingers. The implication: if you stop practicing a skill, that brain territory gets reallocated. Consistent practice is essential not just for improvement but for maintenance.',
    category: 'Psychology',
    source: 'The Brain That Changes Itself - Norman Doidge',
    pathwayId: 'psychology',
    difficulty: 'advanced',
    tags: ['cognitive-science', 'neuroplasticity', 'skill-development']
  },
  {
    id: 'fc-cognitive-005',
    front: 'What role does BDNF play in brain plasticity and how can you increase it?',
    back: 'Brain-Derived Neurotrophic Factor (BDNF) is a protein that supports neuron growth, survival, and plasticity. It acts like fertilizer for the brain. You can increase BDNF through: aerobic exercise (most powerful), learning new skills, social connection, adequate sleep, intermittent fasting, and reducing sugar intake. Low BDNF is linked to depression and cognitive decline.',
    category: 'Psychology',
    source: 'Spark: The Revolutionary New Science of Exercise and the Brain - John Ratey',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['cognitive-science', 'neuroplasticity', 'BDNF']
  },

  // Working Memory Capacity
  {
    id: 'fc-cognitive-006',
    front: 'What is working memory and what is its capacity limit?',
    back: 'Working memory is the cognitive system that temporarily holds and manipulates information for complex tasks like reasoning and learning. Miller\'s Law suggests we can hold about 7±2 items, but modern research shows it\'s closer to 4 chunks for novel information. Working memory is the bottleneck of cognition - nearly all complex thinking depends on it. Strategies to work within limits: chunking, external aids, and reducing cognitive load.',
    category: 'Psychology',
    source: 'Cognitive Psychology Research',
    pathwayId: 'psychology',
    difficulty: 'beginner',
    tags: ['cognitive-science', 'working-memory', 'cognitive-limits']
  },
  {
    id: 'fc-cognitive-007',
    front: 'What is the difference between working memory and short-term memory?',
    back: 'Short-term memory is passive storage (holding a phone number). Working memory actively manipulates information (doing mental math). Working memory has an executive component that directs attention and coordinates information. Think of short-term memory as a notepad and working memory as a notepad plus someone actively working with the notes. Working memory capacity better predicts academic and professional success.',
    category: 'Psychology',
    source: 'Baddeley\'s Working Memory Model',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['cognitive-science', 'working-memory', 'memory-systems']
  },
  {
    id: 'fc-cognitive-008',
    front: 'What is chunking and how does it expand effective memory capacity?',
    back: 'Chunking groups individual pieces of information into larger meaningful units. Instead of remembering 10 digits (4085551234), you remember 3 chunks (408-555-1234). Expert chess players chunk board positions into familiar patterns. Chunking leverages long-term memory to expand working memory\'s effective capacity. To chunk effectively: find patterns, create meaningful associations, and build on existing knowledge structures.',
    category: 'Psychology',
    source: 'Cognitive Psychology Research - George Miller',
    pathwayId: 'psychology',
    difficulty: 'beginner',
    tags: ['cognitive-science', 'working-memory', 'chunking']
  },
  {
    id: 'fc-cognitive-009',
    front: 'Can working memory capacity be trained and improved?',
    back: 'Research is mixed but cautiously optimistic. N-back training can improve performance on similar tasks, but transfer to general intelligence is limited. More effective strategies: improve domain knowledge (enables chunking), reduce interference through focused attention, use external memory aids strategically, and maintain physical health (exercise, sleep, stress management improve working memory function).',
    category: 'Psychology',
    source: 'Cognitive Training Research',
    pathwayId: 'psychology',
    difficulty: 'advanced',
    tags: ['cognitive-science', 'working-memory', 'cognitive-training']
  },
  {
    id: 'fc-cognitive-010',
    front: 'How does anxiety affect working memory performance?',
    back: 'Anxiety consumes working memory resources through intrusive thoughts and worry, leaving less capacity for the task at hand. This creates a vicious cycle: anxiety reduces performance, poor performance increases anxiety. High-pressure situations (tests, presentations) can cause "choking" even in experts. Countermeasures: expressive writing before stressful events, reframing anxiety as excitement, practicing under mild stress, and developing automaticity through repetition.',
    category: 'Psychology',
    source: 'Cognitive Psychology Research - Sian Beilock',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['cognitive-science', 'working-memory', 'anxiety']
  },

  // Cognitive Load Theory
  {
    id: 'fc-cognitive-011',
    front: 'What is Cognitive Load Theory and why does it matter for learning?',
    back: 'Cognitive Load Theory states that learning is impaired when working memory is overloaded. Three types of load: Intrinsic (inherent task complexity), Extraneous (poor instruction design), Germane (effort devoted to learning). Effective learning minimizes extraneous load, manages intrinsic load through scaffolding, and maximizes germane load. When cognitive load exceeds capacity, learning stops.',
    category: 'Psychology',
    source: 'Cognitive Load Theory - John Sweller',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['cognitive-science', 'cognitive-load', 'learning']
  },
  {
    id: 'fc-cognitive-012',
    front: 'What is the split-attention effect and how do you avoid it?',
    back: 'Split-attention effect occurs when learners must mentally integrate multiple sources of information that are physically or temporally separated (like a diagram on one page and explanations on another). This wastes working memory on integration rather than learning. Solution: physically integrate related information, use labels directly on diagrams, synchronize audio with visuals, and eliminate unnecessary separation of content.',
    category: 'Psychology',
    source: 'Cognitive Load Theory - John Sweller',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['cognitive-science', 'cognitive-load', 'instructional-design']
  },
  {
    id: 'fc-cognitive-013',
    front: 'What is the redundancy effect in learning?',
    back: 'The redundancy effect occurs when identical information is presented in multiple forms simultaneously (like reading text while someone reads the same text aloud). Instead of helping, this overloads working memory as the brain processes redundant information. Solution: present information in one optimal modality, remove duplicate content, and use complementary (not redundant) information across modalities.',
    category: 'Psychology',
    source: 'Cognitive Load Theory - John Sweller',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['cognitive-science', 'cognitive-load', 'learning-efficiency']
  },
  {
    id: 'fc-cognitive-014',
    front: 'How does expertise change the optimal approach to learning?',
    back: 'The expertise reversal effect: instructional techniques that help novices can actually hurt experts. Novices need scaffolding, worked examples, and guidance. Experts find these redundant and distracting - they learn better from problem-solving without guidance. As you develop expertise, gradually reduce scaffolding and increase challenge. This is why one-size-fits-all instruction often fails.',
    category: 'Psychology',
    source: 'Cognitive Load Theory Research',
    pathwayId: 'psychology',
    difficulty: 'advanced',
    tags: ['cognitive-science', 'cognitive-load', 'expertise']
  },
  {
    id: 'fc-cognitive-015',
    front: 'What is the worked example effect and when should you use it?',
    back: 'Studying worked examples (solved problems with step-by-step solutions) is more effective for novices than solving problems independently. Working through problems without guidance overloads working memory, leaving little capacity for learning. As expertise develops, transition from worked examples to problem-solving (fading). Optimal sequence: full worked examples → partially completed examples → independent problem-solving.',
    category: 'Psychology',
    source: 'Cognitive Load Theory - John Sweller',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['cognitive-science', 'cognitive-load', 'learning-strategies']
  },

  // Attention and Focus Mechanisms
  {
    id: 'fc-cognitive-016',
    front: 'What are the two main attention systems in the brain?',
    back: 'The brain has two attention networks: (1) Top-down (endogenous) attention - voluntary, goal-directed focus you consciously control. (2) Bottom-up (exogenous) attention - automatic capture by salient stimuli (loud noises, movement, your name). These systems compete. Distractions hijack bottom-up attention. To maintain focus: minimize environmental triggers, make goals vivid, and build sustained attention through practice.',
    category: 'Psychology',
    source: 'Attention and Cognitive Neuroscience Research',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['cognitive-science', 'attention', 'focus']
  },
  {
    id: 'fc-cognitive-017',
    front: 'What is inattentional blindness and what does it reveal about attention?',
    back: 'Inattentional blindness is failing to notice unexpected objects when attention is focused elsewhere (like missing a gorilla walking through a basketball game). This reveals that attention is a limited resource - we can\'t process everything in our visual field. We see what we attend to. Implications: important information can be missed, multi-tasking creates blind spots, and focused attention means necessarily missing other things.',
    category: 'Psychology',
    source: 'The Invisible Gorilla - Chabris and Simons',
    pathwayId: 'psychology',
    difficulty: 'beginner',
    tags: ['cognitive-science', 'attention', 'perception']
  },
  {
    id: 'fc-cognitive-018',
    front: 'Why is multitasking a myth and what actually happens when we try?',
    back: 'True multitasking (parallel processing of cognitive tasks) is impossible - we actually task-switch rapidly. Each switch incurs a cognitive cost: attention residue from the previous task, reorientation time, and increased error rates. Studies show multitasking can reduce productivity by up to 40% and lower IQ scores temporarily. Exception: automatic tasks (walking) can combine with cognitive tasks. For knowledge work, single-tasking is superior.',
    category: 'Psychology',
    source: 'Deep Work - Cal Newport',
    pathwayId: 'psychology',
    difficulty: 'beginner',
    tags: ['cognitive-science', 'attention', 'multitasking']
  },
  {
    id: 'fc-cognitive-019',
    front: 'What is attention residue and how does it affect productivity?',
    back: 'Attention residue is the cognitive phenomenon where thoughts about a previous task persist when switching to a new task. Research by Sophie Leroy shows we perform worse on Task B because part of our attention remains on Task A. Residue is worse when Task A was unfinished or time-pressured. Solutions: complete tasks before switching when possible, write down thoughts about incomplete tasks, create clear boundaries between work sessions.',
    category: 'Psychology',
    source: 'Research by Sophie Leroy',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['cognitive-science', 'attention', 'productivity']
  },
  {
    id: 'fc-cognitive-020',
    front: 'How long can humans sustain focused attention and what affects it?',
    back: 'Sustained attention follows an ultradian rhythm of approximately 90-120 minutes. Within sessions, attention naturally fluctuates in waves. Most people can maintain high-quality focus for 20-50 minutes before needing a break. Factors affecting duration: sleep quality, task interest, expertise level, time of day, and physical state. Strategic approach: work in focused blocks with regular breaks (Pomodoro technique), align difficult tasks with peak alertness times.',
    category: 'Psychology',
    source: 'Cognitive Psychology and Chronobiology Research',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['cognitive-science', 'attention', 'focus-duration']
  },

  // Pattern Recognition
  {
    id: 'fc-cognitive-021',
    front: 'How do experts recognize patterns differently than novices?',
    back: 'Experts store thousands of meaningful patterns (chunks) in long-term memory. When encountering a situation, experts rapidly match it against stored patterns, enabling instant recognition of relevant features and appropriate responses. Chess masters see board positions as familiar configurations; novices see individual pieces. Expertise development is largely about building this pattern library through deliberate practice and varied experience.',
    category: 'Psychology',
    source: 'Expert Performance Research - K. Anders Ericsson',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['cognitive-science', 'pattern-recognition', 'expertise']
  },
  {
    id: 'fc-cognitive-022',
    front: 'What is the recognition-primed decision model and how do experts use it?',
    back: 'Developed by Gary Klein, RPD explains how experts make rapid decisions under pressure. Instead of comparing options, experts recognize situations as similar to past experiences and immediately know what to do. They mentally simulate the action - if it works, they proceed; if not, they try another recognized pattern. This explains why experienced firefighters, surgeons, and pilots can make split-second decisions that appear intuitive but are actually pattern-based.',
    category: 'Psychology',
    source: 'Sources of Power - Gary Klein',
    pathwayId: 'psychology',
    difficulty: 'advanced',
    tags: ['cognitive-science', 'pattern-recognition', 'decision-making']
  },
  {
    id: 'fc-cognitive-023',
    front: 'What is apophenia and why do we see patterns where none exist?',
    back: 'Apophenia is perceiving meaningful connections in random information. The brain is a pattern-seeking machine optimized for survival - it\'s better to see a tiger that isn\'t there than miss one that is. This leads to false positives: seeing faces in clouds, finding correlations in noise, believing in streaks in random events. Awareness helps: question perceived patterns, seek disconfirming evidence, understand base rates and randomness.',
    category: 'Psychology',
    source: 'Cognitive Psychology and Decision-Making Research',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['cognitive-science', 'pattern-recognition', 'cognitive-bias']
  },
  {
    id: 'fc-cognitive-024',
    front: 'How does analogical reasoning work and why is it powerful?',
    back: 'Analogical reasoning transfers knowledge from a familiar domain (source) to a new domain (target) based on structural similarities. It\'s how we solve novel problems using past experience. Breakthrough innovations often come from cross-domain analogies (Velcro from burrs, airplane wings from bird observation). To improve: study diverse fields, practice finding deep structural similarities, and explicitly search for analogies when stuck on problems.',
    category: 'Psychology',
    source: 'Range - David Epstein',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['cognitive-science', 'pattern-recognition', 'analogical-thinking']
  },
  {
    id: 'fc-cognitive-025',
    front: 'What is the mere exposure effect and how does it relate to pattern recognition?',
    back: 'The mere exposure effect: we develop preference for things simply because they\'re familiar. Repeated exposure makes patterns easier to recognize, creating a feeling of fluency that we interpret as liking. This affects everything from music preferences to stock market behavior. Implication: familiarity feels good but isn\'t evidence of quality. Novel ideas may feel wrong simply because they\'re unfamiliar. Give new concepts exposure time before judging.',
    category: 'Psychology',
    source: 'Social Psychology Research - Robert Zajonc',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['cognitive-science', 'pattern-recognition', 'cognitive-bias']
  },

  // Default Mode Network
  {
    id: 'fc-cognitive-026',
    front: 'What is the Default Mode Network and what does it do?',
    back: 'The Default Mode Network (DMN) is a brain network active when not focused on external tasks - during daydreaming, self-reflection, and mind-wandering. It\'s involved in autobiographical memory, imagining the future, social cognition, and creative insight. The DMN deactivates during focused external tasks. Both focused attention and DMN activity are essential - they work in alternating rhythm. Constant busyness suppresses DMN benefits.',
    category: 'Psychology',
    source: 'Neuroscience Research - Marcus Raichle',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['cognitive-science', 'default-mode-network', 'brain-function']
  },
  {
    id: 'fc-cognitive-027',
    front: 'How does mind-wandering contribute to creativity and problem-solving?',
    back: 'Mind-wandering allows the DMN to make unexpected connections between distant ideas stored in memory. Incubation periods - stepping away from problems - often lead to insight because the DMN continues working unconsciously. Many breakthroughs occur during walks, showers, or upon waking. To leverage: alternate focused work with unstructured downtime, don\'t fill every moment with stimulation, and sleep on difficult problems.',
    category: 'Psychology',
    source: 'Creativity and Cognitive Neuroscience Research',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['cognitive-science', 'default-mode-network', 'creativity']
  },
  {
    id: 'fc-cognitive-028',
    front: 'What is the relationship between the DMN and rumination/depression?',
    back: 'While the DMN enables beneficial self-reflection, overactivity is linked to rumination - repetitive negative thinking about oneself. Depressed individuals show hyperactive DMN and difficulty disengaging from self-focused thoughts. Interventions that help: mindfulness meditation (trains attention away from DMN), behavioral activation (external focus), cognitive reframing, and physical exercise. The goal is flexible DMN engagement, not suppression.',
    category: 'Psychology',
    source: 'Clinical Neuroscience Research',
    pathwayId: 'psychology',
    difficulty: 'advanced',
    tags: ['cognitive-science', 'default-mode-network', 'mental-health']
  },
  {
    id: 'fc-cognitive-029',
    front: 'How does meditation affect the Default Mode Network?',
    back: 'Meditation training decreases DMN activity and increases connectivity between DMN and attentional control regions. Experienced meditators show reduced mind-wandering and quicker recovery when it occurs. Different meditation types have different effects: focused attention meditation quiets the DMN; open monitoring meditation changes how DMN content is processed. Regular practice builds the skill of recognizing and redirecting mind-wandering.',
    category: 'Psychology',
    source: 'Neuroscience of Meditation Research',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['cognitive-science', 'default-mode-network', 'meditation']
  },
  {
    id: 'fc-cognitive-030',
    front: 'Why is boredom important for the brain and creativity?',
    back: 'Boredom signals that current activity isn\'t meeting cognitive needs, prompting exploration. Crucially, boredom activates the DMN, enabling mind-wandering and creative connections. Research shows people generate more creative ideas after boring tasks than engaging ones. Modern constant stimulation (phones, social media) eliminates boredom, potentially reducing creativity. Strategic boredom - intentional unstimulating time - can enhance innovative thinking.',
    category: 'Psychology',
    source: 'Boredom and Creativity Research',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['cognitive-science', 'default-mode-network', 'creativity']
  },

  // Sleep and Memory Consolidation
  {
    id: 'fc-cognitive-031',
    front: 'How does sleep consolidate memories and learning?',
    back: 'During sleep, the brain replays and consolidates daily experiences, transferring memories from hippocampus to neocortex for long-term storage. Different sleep stages serve different functions: slow-wave sleep consolidates declarative memory (facts), REM sleep consolidates procedural memory (skills) and emotional processing. Sleep also prunes unnecessary connections, strengthening important ones. Learning without adequate sleep is largely wasted.',
    category: 'Psychology',
    source: 'Why We Sleep - Matthew Walker',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['cognitive-science', 'sleep', 'memory-consolidation']
  },
  {
    id: 'fc-cognitive-032',
    front: 'What happens to learning when you\'re sleep-deprived?',
    back: 'Sleep deprivation devastates learning: hippocampal activity drops 40% in sleep-deprived individuals, severely impairing new memory formation. Sleep loss also impairs attention, working memory, and creative problem-solving. A single night of poor sleep significantly reduces next-day cognitive performance. "Sleep to remember, sleep to forget" - without sleep, you can\'t properly encode new information or clear irrelevant memories.',
    category: 'Psychology',
    source: 'Why We Sleep - Matthew Walker',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['cognitive-science', 'sleep', 'sleep-deprivation']
  },
  {
    id: 'fc-cognitive-033',
    front: 'What is the optimal study-sleep strategy for learning?',
    back: 'Research supports: (1) Study before sleep rather than morning - sleep consolidates recent learning. (2) Space learning across days with sleep between sessions. (3) Naps (20-90 min) after learning boost retention. (4) Avoid all-nighters - you lose consolidation benefits and impair encoding. (5) Get full night\'s sleep before exams - both REM and slow-wave stages are needed. Sleep is not downtime; it\'s when learning happens.',
    category: 'Psychology',
    source: 'Sleep and Learning Research',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['cognitive-science', 'sleep', 'learning-strategies']
  },
  {
    id: 'fc-cognitive-034',
    front: 'How does REM sleep contribute to creativity and insight?',
    back: 'REM sleep promotes creative problem-solving by forming non-obvious connections between distantly related concepts. The prefrontal cortex (logical control) is suppressed while associative areas remain active. Studies show people are better at creative tasks after REM-rich sleep. Dreams often contain bizarre combinations that occasionally yield insights. To maximize: protect morning REM (it increases through the night), avoid early alarms, and pose problems before sleep.',
    category: 'Psychology',
    source: 'Why We Sleep - Matthew Walker',
    pathwayId: 'psychology',
    difficulty: 'advanced',
    tags: ['cognitive-science', 'sleep', 'creativity']
  },
  {
    id: 'fc-cognitive-035',
    front: 'What is the glymphatic system and why does it matter for brain health?',
    back: 'The glymphatic system is the brain\'s waste clearance mechanism, most active during deep sleep. It flushes out metabolic debris including beta-amyloid (associated with Alzheimer\'s). Sleep deprivation allows toxic buildup. This explains the link between chronic poor sleep and neurodegeneration. Deep slow-wave sleep is especially important. Prioritize sleep quality, not just duration, to maintain long-term brain health.',
    category: 'Psychology',
    source: 'Neuroscience Research',
    pathwayId: 'psychology',
    difficulty: 'advanced',
    tags: ['cognitive-science', 'sleep', 'brain-health']
  },

  // Flow State Neuroscience
  {
    id: 'fc-cognitive-036',
    front: 'What is flow state and what are its neurological signatures?',
    back: 'Flow is the state of complete absorption in an activity, characterized by: lost sense of time, effortless action, merged action and awareness, and intrinsic reward. Neurologically, flow involves transient hypofrontality (reduced prefrontal activity, quieting the inner critic), increased dopamine and norepinephrine, altered brainwave patterns (increased alpha and theta), and reduced activity in the DMN. The result: enhanced performance and deep satisfaction.',
    category: 'Psychology',
    source: 'Flow - Mihaly Csikszentmihalyi',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['cognitive-science', 'flow-state', 'peak-performance']
  },
  {
    id: 'fc-cognitive-037',
    front: 'What conditions trigger flow state?',
    back: 'Flow requires: (1) Clear goals - knowing exactly what to do. (2) Immediate feedback - knowing how you\'re doing. (3) Challenge-skill balance - task difficulty matches ability (not too easy, not too hard). (4) Concentration - freedom from distraction. (5) Sense of control. The sweet spot is 4% beyond current ability. Too easy causes boredom; too hard causes anxiety. Design your work environment and tasks to meet these conditions.',
    category: 'Psychology',
    source: 'Flow - Mihaly Csikszentmihalyi',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['cognitive-science', 'flow-state', 'productivity']
  },
  {
    id: 'fc-cognitive-038',
    front: 'Why is the flow state so productive and how much more effective is it?',
    back: 'McKinsey research suggests executives are 5x more productive in flow. This comes from: eliminated self-doubt and distraction, enhanced pattern recognition, improved creativity, and time distortion (hours feel like minutes). Flow also increases learning speed through heightened focus and neurochemical support for memory formation. The challenge: flow takes 15-45 minutes to achieve and is easily disrupted. Protect flow sessions fiercely.',
    category: 'Psychology',
    source: 'The Rise of Superman - Steven Kotler',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['cognitive-science', 'flow-state', 'productivity']
  },
  {
    id: 'fc-cognitive-039',
    front: 'What is transient hypofrontality and how does it enable peak performance?',
    back: 'Transient hypofrontality is the temporary deactivation of prefrontal cortex during flow. This reduces the inner critic, self-consciousness, and sense of self. Time distortion occurs because the time-tracking prefrontal areas go offline. Without constant self-monitoring, action becomes effortless and automatic. Athletes call it being "in the zone." This state can\'t be forced but emerges when flow conditions are met and maintained.',
    category: 'Psychology',
    source: 'Flow Neuroscience Research - Arne Dietrich',
    pathwayId: 'psychology',
    difficulty: 'advanced',
    tags: ['cognitive-science', 'flow-state', 'neuroscience']
  },
  {
    id: 'fc-cognitive-040',
    front: 'How can you recover more quickly after flow disruption?',
    back: 'When flow is disrupted, it can take 15-25 minutes to return. Speed recovery by: (1) Minimizing the disruption - handle it quickly and return. (2) Writing down your mental state before addressing interruption. (3) Using environmental cues that anchor flow (same music, location). (4) Not catastrophizing the disruption - frustration delays return. (5) Designing work blocks long enough for both warmup and flow. Prevention is best: eliminate interruption sources.',
    category: 'Psychology',
    source: 'The Rise of Superman - Steven Kotler',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['cognitive-science', 'flow-state', 'productivity']
  },

  // Dopamine and Motivation
  {
    id: 'fc-cognitive-041',
    front: 'What does dopamine actually do for motivation (contrary to popular belief)?',
    back: 'Dopamine is not the "pleasure chemical" - it\'s the anticipation and motivation chemical. Dopamine spikes before rewards, not during consumption. It signals expected value and drives seeking behavior. This is why the pursuit often feels better than attainment. Dopamine motivates effort toward goals. Understanding this shifts focus: design experiences with anticipation and progress markers, not just end rewards.',
    category: 'Psychology',
    source: 'The Molecule of More - Daniel Lieberman',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['cognitive-science', 'dopamine', 'motivation']
  },
  {
    id: 'fc-cognitive-042',
    front: 'What is dopamine tolerance and how does it affect motivation?',
    back: 'Repeated high-dopamine experiences cause receptor downregulation - you need more stimulation for the same effect. This explains addiction patterns and why constant high-stimulation entertainment makes ordinary activities feel boring. Recovery requires "dopamine fasting" - periods of reduced stimulation. Natural rewards (exercise, achievement, connection) maintain sensitivity better than artificial superstimuli (social media, drugs, processed food).',
    category: 'Psychology',
    source: 'Dopamine Nation - Anna Lembke',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['cognitive-science', 'dopamine', 'motivation']
  },
  {
    id: 'fc-cognitive-043',
    front: 'How do variable rewards hijack the dopamine system?',
    back: 'Unpredictable rewards produce larger dopamine spikes than predictable ones. This is why slot machines, social media, and email checking are so compelling - you never know when the reward will come. The uncertainty keeps you engaged. Casinos, tech companies, and game designers exploit this. To resist: make reward schedules predictable, batch-check notifications, and recognize when variable rewards are manipulating you.',
    category: 'Psychology',
    source: 'Hooked - Nir Eyal',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['cognitive-science', 'dopamine', 'behavior-design']
  },
  {
    id: 'fc-cognitive-044',
    front: 'How can you use dopamine strategically for sustained motivation?',
    back: 'Strategic dopamine management: (1) Break big goals into milestones with clear progress signals. (2) Celebrate small wins to get dopamine hits along the way. (3) Visualize the process, not just outcomes. (4) Add novelty to maintain engagement. (5) Protect against tolerance by varying rewards and taking low-stimulation breaks. (6) Connect tasks to larger meaningful purposes. The goal: consistent moderate dopamine, not spikes and crashes.',
    category: 'Psychology',
    source: 'Dopamine and Motivation Research',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['cognitive-science', 'dopamine', 'motivation-strategies']
  },
  {
    id: 'fc-cognitive-045',
    front: 'What is the relationship between dopamine and effort?',
    back: 'Dopamine regulates willingness to exert effort. Higher dopamine states make effort feel less costly and rewards more valuable. This is why motivation fluctuates - it reflects dopamine state, not weakness. Low dopamine makes everything feel effortful and unrewarding. To increase dopamine naturally: exercise, cold exposure, adequate sleep, tyrosine-rich foods, sunlight, and achieving small goals. Avoid depleting activities before important work.',
    category: 'Psychology',
    source: 'Neuroscience of Motivation Research',
    pathwayId: 'psychology',
    difficulty: 'advanced',
    tags: ['cognitive-science', 'dopamine', 'effort']
  },

  // Cognitive Enhancement Strategies
  {
    id: 'fc-cognitive-046',
    front: 'What is the most effective cognitive enhancer available to everyone?',
    back: 'Exercise is the most powerful cognitive enhancer with robust evidence. A single session improves attention, processing speed, and executive function for several hours. Regular exercise increases BDNF, promotes neurogenesis (new brain cell growth), enhances blood flow, and reduces inflammation. Even moderate walking improves cognition. 20-30 minutes of aerobic exercise produces measurable benefits. No pill comes close to exercise\'s cognitive effects.',
    category: 'Psychology',
    source: 'Spark - John Ratey',
    pathwayId: 'psychology',
    difficulty: 'beginner',
    tags: ['cognitive-science', 'cognitive-enhancement', 'exercise']
  },
  {
    id: 'fc-cognitive-047',
    front: 'How does learning a new skill benefit overall cognitive function?',
    back: 'Novel skill learning creates new neural pathways and strengthens cognitive reserve. Complex skills requiring coordination of multiple brain regions (music, languages, dance) provide the greatest benefit. The challenge must be appropriate - too easy doesn\'t drive adaptation. Learning protects against cognitive decline and may delay dementia. Lifelong learning isn\'t just enriching; it\'s neuroprotective. Continuously challenge yourself with new skills.',
    category: 'Psychology',
    source: 'Cognitive Reserve Research',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['cognitive-science', 'cognitive-enhancement', 'learning']
  },
  {
    id: 'fc-cognitive-048',
    front: 'What is cognitive offloading and when should you use it?',
    back: 'Cognitive offloading means using external tools to reduce mental load: writing things down, using calendars, setting reminders. This frees working memory for higher-level thinking. Effective offloading: capture everything (GTD), use reliable systems, trust your tools, review regularly. Warning: don\'t offload things you need to internalize for expertise. Strategic offloading amplifies cognitive capacity; over-reliance can prevent learning.',
    category: 'Psychology',
    source: 'Getting Things Done - David Allen',
    pathwayId: 'psychology',
    difficulty: 'beginner',
    tags: ['cognitive-science', 'cognitive-enhancement', 'productivity']
  },
  {
    id: 'fc-cognitive-049',
    front: 'How does social interaction enhance cognitive function?',
    back: 'Social interaction requires complex cognitive processing: theory of mind, language, emotional regulation, and rapid response. Regular social engagement is associated with better cognitive function and slower decline in aging. Loneliness impairs cognition through stress hormones and reduced stimulation. Quality matters more than quantity. Even brief positive interactions boost mood and cognitive performance. Humans evolved as social creatures; isolation starves the brain.',
    category: 'Psychology',
    source: 'Social Neuroscience Research',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['cognitive-science', 'cognitive-enhancement', 'social-connection']
  },
  {
    id: 'fc-cognitive-050',
    front: 'What is the optimal daily structure for peak cognitive performance?',
    back: 'Evidence-based optimal structure: (1) Protect sleep - 7-9 hours, consistent schedule. (2) Morning: tackle cognitively demanding tasks during peak alertness (most people: 2-4 hours after waking). (3) Exercise: ideally morning or early afternoon. (4) Afternoon dip: administrative tasks, meetings. (5) Late afternoon: second alertness peak for some. (6) Evening: reduce stimulation, prepare for sleep. (7) Regular breaks every 90 minutes. Personalize based on your chronotype.',
    category: 'Psychology',
    source: 'When - Daniel Pink',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['cognitive-science', 'cognitive-enhancement', 'productivity']
  }
];
