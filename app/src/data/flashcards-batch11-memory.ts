import type { SpacedRepetitionCard } from '@/types';

export const memoryLearningFlashcards: SpacedRepetitionCard[] = [
  // How Memory Works - Encoding
  {
    id: 'fc-mem-001',
    front: 'What are the three stages of memory processing?',
    back: 'Encoding (converting information into a form the brain can store), Storage (maintaining information over time), and Retrieval (accessing stored information when needed). Each stage is crucial - failure at any point leads to forgetting.',
    category: 'Master Synthesis',
    source: 'Learning Science',
    pathwayId: 'master-synthesis',
    difficulty: 'beginner',
    tags: ['memory', 'encoding', 'cognitive-science']
  },
  {
    id: 'fc-mem-002',
    front: 'What is the difference between shallow and deep encoding?',
    back: 'Shallow encoding processes surface features (how words look or sound), while deep encoding processes meaning and connections. The Levels of Processing theory (Craik & Lockhart) shows deep, semantic encoding creates stronger, more durable memories than shallow structural or phonemic processing.',
    category: 'Master Synthesis',
    source: 'Learning Science',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['memory', 'encoding', 'levels-of-processing']
  },
  {
    id: 'fc-mem-003',
    front: 'What is the encoding specificity principle?',
    back: 'Memory retrieval is most effective when the conditions at retrieval match the conditions at encoding. This includes physical context (location), mental state, and cues present during learning. It explains why studying in conditions similar to testing improves recall.',
    category: 'Master Synthesis',
    source: 'Learning Science',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['memory', 'encoding', 'retrieval']
  },
  {
    id: 'fc-mem-004',
    front: 'What role does attention play in memory encoding?',
    back: 'Attention acts as a gateway to memory - information not attended to is rarely encoded into long-term memory. Divided attention during encoding significantly impairs memory formation, while focused attention enables deep processing and strong memory traces.',
    category: 'Master Synthesis',
    source: 'Learning Science',
    pathwayId: 'master-synthesis',
    difficulty: 'beginner',
    tags: ['memory', 'attention', 'encoding']
  },
  {
    id: 'fc-mem-005',
    front: 'What is elaborative encoding and why is it effective?',
    back: 'Elaborative encoding involves connecting new information to existing knowledge through meaningful associations, examples, and explanations. It creates multiple retrieval pathways and embeds new information within rich semantic networks, making it more accessible and resistant to forgetting.',
    category: 'Master Synthesis',
    source: 'Learning Science',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['memory', 'encoding', 'elaboration']
  },

  // How Memory Works - Storage
  {
    id: 'fc-mem-006',
    front: 'What is memory consolidation and when does it primarily occur?',
    back: 'Memory consolidation is the process of stabilizing memory traces after initial encoding, transforming fragile short-term memories into stable long-term memories. It primarily occurs during sleep, especially during slow-wave sleep (for declarative memories) and REM sleep (for procedural memories).',
    category: 'Master Synthesis',
    source: 'Learning Science',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['memory', 'consolidation', 'sleep']
  },
  {
    id: 'fc-mem-007',
    front: 'What is the difference between declarative and procedural memory?',
    back: 'Declarative (explicit) memory stores facts and events that can be consciously recalled - divided into semantic (general knowledge) and episodic (personal experiences). Procedural (implicit) memory stores skills and habits, operating unconsciously (like riding a bike). They rely on different brain systems.',
    category: 'Master Synthesis',
    source: 'Learning Science',
    pathwayId: 'master-synthesis',
    difficulty: 'beginner',
    tags: ['memory', 'memory-systems', 'cognitive-science']
  },
  {
    id: 'fc-mem-008',
    front: 'How does the hippocampus contribute to memory storage?',
    back: 'The hippocampus acts as a temporary holding area and indexer for new memories. It binds together distributed cortical representations during encoding and replays them during sleep for consolidation. Over time, memories become independent of the hippocampus and stored in the neocortex.',
    category: 'Master Synthesis',
    source: 'Learning Science',
    pathwayId: 'master-synthesis',
    difficulty: 'advanced',
    tags: ['memory', 'neuroscience', 'hippocampus']
  },
  {
    id: 'fc-mem-009',
    front: 'What is Ebbinghaus\'s forgetting curve?',
    back: 'Hermann Ebbinghaus discovered that forgetting follows a predictable exponential decay pattern - we lose about 50% of new information within an hour, 70% within 24 hours, and 90% within a week without review. This curve forms the scientific basis for spaced repetition systems.',
    category: 'Master Synthesis',
    source: 'Learning Science',
    pathwayId: 'master-synthesis',
    difficulty: 'beginner',
    tags: ['memory', 'forgetting', 'ebbinghaus']
  },
  {
    id: 'fc-mem-010',
    front: 'What causes interference in memory storage?',
    back: 'Proactive interference occurs when old memories disrupt recall of new information. Retroactive interference occurs when new learning disrupts old memories. Both happen when similar information competes for retrieval. Distinctiveness and spacing help reduce interference effects.',
    category: 'Master Synthesis',
    source: 'Learning Science',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['memory', 'interference', 'forgetting']
  },

  // How Memory Works - Retrieval
  {
    id: 'fc-mem-011',
    front: 'What is the testing effect (retrieval practice effect)?',
    back: 'The testing effect demonstrates that actively retrieving information from memory strengthens that memory more than passively restudying it. Each successful retrieval modifies the memory trace, making it more accessible. Failed retrieval attempts followed by feedback also enhance learning.',
    category: 'Master Synthesis',
    source: 'Learning Science',
    pathwayId: 'master-synthesis',
    difficulty: 'beginner',
    tags: ['memory', 'retrieval', 'testing-effect']
  },
  {
    id: 'fc-mem-012',
    front: 'What is the difference between recall and recognition?',
    back: 'Recall requires generating information from memory with minimal cues (essay questions, free recall). Recognition involves identifying previously encountered information among options (multiple choice). Recall is more effortful but produces stronger learning effects; recognition is easier but less diagnostic of true learning.',
    category: 'Master Synthesis',
    source: 'Learning Science',
    pathwayId: 'master-synthesis',
    difficulty: 'beginner',
    tags: ['memory', 'retrieval', 'assessment']
  },
  {
    id: 'fc-mem-013',
    front: 'What are retrieval cues and how do they work?',
    back: 'Retrieval cues are stimuli that help access stored memories - they work by activating associated memory networks. Effective cues were encoded alongside the target memory. The more overlap between encoding context and retrieval cues, the better the recall (encoding specificity).',
    category: 'Master Synthesis',
    source: 'Learning Science',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['memory', 'retrieval', 'cues']
  },
  {
    id: 'fc-mem-014',
    front: 'What is retrieval-induced forgetting?',
    back: 'Practicing retrieval of some information can inhibit recall of related but unpracticed information. When you repeatedly retrieve certain items from a category, competing items become temporarily suppressed. This has implications for studying - review all related material, not just favorites.',
    category: 'Master Synthesis',
    source: 'Learning Science',
    pathwayId: 'master-synthesis',
    difficulty: 'advanced',
    tags: ['memory', 'retrieval', 'forgetting']
  },
  {
    id: 'fc-mem-015',
    front: 'How does reconstructive memory affect retrieval accuracy?',
    back: 'Memory retrieval is not like playing a recording - it\'s a reconstructive process. Each retrieval rebuilds the memory using stored fragments, schemas, and current knowledge. This makes memories malleable and susceptible to distortion, false memories, and post-event information effects.',
    category: 'Master Synthesis',
    source: 'Learning Science',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['memory', 'retrieval', 'reconstruction']
  },

  // Spaced Repetition Science
  {
    id: 'fc-mem-016',
    front: 'What is the spacing effect and why does it work?',
    back: 'The spacing effect shows that distributed practice (spaced over time) produces better long-term retention than massed practice (crammed together). It works because spacing allows forgetting between sessions, making each retrieval more effortful and strengthening the memory trace more effectively.',
    category: 'Master Synthesis',
    source: 'Learning Science',
    pathwayId: 'master-synthesis',
    difficulty: 'beginner',
    tags: ['spaced-repetition', 'spacing-effect', 'learning']
  },
  {
    id: 'fc-mem-017',
    front: 'What is the optimal spacing interval for learning?',
    back: 'Optimal spacing depends on desired retention interval. Research suggests spacing gaps should be 10-30% of the desired retention period. For a test in 10 days, space reviews 1-3 days apart. For long-term retention, progressively expanding intervals (1 day, 3 days, 7 days, etc.) are most efficient.',
    category: 'Master Synthesis',
    source: 'Learning Science',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['spaced-repetition', 'intervals', 'optimization']
  },
  {
    id: 'fc-mem-018',
    front: 'How does spaced repetition combat the forgetting curve?',
    back: 'Each spaced review resets and flattens the forgetting curve. With each successful retrieval at increasing intervals, the memory becomes more stable and forgetting slows dramatically. Over time, items require increasingly rare reviews to maintain near-permanent accessibility.',
    category: 'Master Synthesis',
    source: 'Learning Science',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['spaced-repetition', 'forgetting-curve', 'retention']
  },
  {
    id: 'fc-mem-019',
    front: 'What is the difference between fixed and expanding retrieval schedules?',
    back: 'Fixed schedules maintain constant intervals (e.g., every 3 days). Expanding schedules progressively increase intervals (1, 3, 7, 14 days). Research shows expanding schedules are generally more efficient for long-term retention, though fixed schedules can be better for difficult material or shorter retention needs.',
    category: 'Master Synthesis',
    source: 'Learning Science',
    pathwayId: 'master-synthesis',
    difficulty: 'advanced',
    tags: ['spaced-repetition', 'schedules', 'algorithms']
  },
  {
    id: 'fc-mem-020',
    front: 'What is the role of difficulty in spaced repetition algorithms?',
    back: 'Modern SRS algorithms (like SM-2, FSRS) adjust intervals based on item difficulty. Easy items get longer intervals, hard items get shorter ones. This optimizes review time by focusing effort where needed. Performance feedback (recall success/failure) continuously calibrates difficulty estimates.',
    category: 'Master Synthesis',
    source: 'Learning Science',
    pathwayId: 'master-synthesis',
    difficulty: 'advanced',
    tags: ['spaced-repetition', 'algorithms', 'difficulty']
  },

  // Active Recall vs Passive Review
  {
    id: 'fc-mem-021',
    front: 'Why is active recall superior to passive review for learning?',
    back: 'Active recall forces mental effort to generate answers, strengthening neural pathways. Passive review (re-reading, highlighting) creates illusions of fluency without durable learning. Active recall also reveals knowledge gaps, improves organization of knowledge, and transfers better to new situations.',
    category: 'Master Synthesis',
    source: 'Learning Science',
    pathwayId: 'master-synthesis',
    difficulty: 'beginner',
    tags: ['active-recall', 'learning-strategies', 'retrieval']
  },
  {
    id: 'fc-mem-022',
    front: 'What is the generation effect in learning?',
    back: 'Information that learners generate themselves is remembered better than information they passively receive. Completing "The capital of France is P___" produces better memory than reading "The capital of France is Paris." Generation requires deeper processing and creates stronger retrieval routes.',
    category: 'Master Synthesis',
    source: 'Learning Science',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['active-recall', 'generation-effect', 'encoding']
  },
  {
    id: 'fc-mem-023',
    front: 'How should you structure practice tests for maximum benefit?',
    back: 'Use free recall before cued recall, test soon after initial learning, space tests over time, include feedback after attempts, mix question types, and test on both main concepts and details. Even failed retrieval attempts enhance subsequent learning when followed by feedback.',
    category: 'Master Synthesis',
    source: 'Learning Science',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['active-recall', 'practice-testing', 'study-strategies']
  },
  {
    id: 'fc-mem-024',
    front: 'What is the pretesting effect?',
    back: 'Taking a test on material before studying it improves subsequent learning, even when pretest answers are wrong. Pretesting activates relevant knowledge, highlights gaps, directs attention during study, and creates curiosity that enhances encoding of correct answers.',
    category: 'Master Synthesis',
    source: 'Learning Science',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['active-recall', 'pretesting', 'learning']
  },
  {
    id: 'fc-mem-025',
    front: 'Why does highlighting and re-reading feel effective but produce poor learning?',
    back: 'These strategies create fluency illusions - the material feels familiar, mistaken for understanding. Processing fluency from repetition doesn\'t equal memory strength. Without retrieval effort, no testing of comprehension occurs, knowledge gaps remain hidden, and minimal durable memory traces form.',
    category: 'Master Synthesis',
    source: 'Learning Science',
    pathwayId: 'master-synthesis',
    difficulty: 'beginner',
    tags: ['passive-review', 'metacognition', 'illusions-of-learning']
  },

  // Elaborative Interrogation
  {
    id: 'fc-mem-026',
    front: 'What is elaborative interrogation and how is it applied?',
    back: 'Elaborative interrogation involves generating explanations for facts by asking "why" and "how" questions. Instead of just memorizing "copper conducts electricity," ask "Why does copper conduct electricity well?" This connects new facts to existing knowledge and creates richer memory representations.',
    category: 'Master Synthesis',
    source: 'Learning Science',
    pathwayId: 'master-synthesis',
    difficulty: 'beginner',
    tags: ['elaboration', 'deep-processing', 'learning-strategies']
  },
  {
    id: 'fc-mem-027',
    front: 'Why does elaborative interrogation enhance memory?',
    back: 'It activates relevant prior knowledge, creates multiple connections between new and existing information, ensures deeper semantic processing, reveals gaps in understanding, and generates distinctive memory traces. The self-generated explanations become retrieval cues for the target information.',
    category: 'Master Synthesis',
    source: 'Learning Science',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['elaboration', 'memory-mechanisms', 'encoding']
  },
  {
    id: 'fc-mem-028',
    front: 'How does prior knowledge affect elaborative interrogation effectiveness?',
    back: 'Learners with more domain knowledge benefit more from elaborative interrogation because they can generate richer, more accurate explanations. Novices may need scaffolding or may generate incorrect explanations. For novices, providing explanations initially, then transitioning to self-generation, works well.',
    category: 'Master Synthesis',
    source: 'Learning Science',
    pathwayId: 'master-synthesis',
    difficulty: 'advanced',
    tags: ['elaboration', 'prior-knowledge', 'expertise']
  },
  {
    id: 'fc-mem-029',
    front: 'What is self-explanation and how does it differ from elaborative interrogation?',
    back: 'Self-explanation involves explaining material to oneself while learning (how a solution works, why a step follows). Elaborative interrogation specifically asks why facts are true. Both generate connections, but self-explanation is broader - applicable to procedures, worked examples, and complex texts, not just factual learning.',
    category: 'Master Synthesis',
    source: 'Learning Science',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['elaboration', 'self-explanation', 'learning-strategies']
  },
  {
    id: 'fc-mem-030',
    front: 'How can you combine elaborative interrogation with other learning strategies?',
    back: 'After elaborating on why something is true, use retrieval practice to test your explanations. Space your elaborative sessions. Interleave elaboration across topics to build connections. Teach your elaborations to others. Create visual representations of your causal explanations.',
    category: 'Master Synthesis',
    source: 'Learning Science',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['elaboration', 'combined-strategies', 'study-skills']
  },

  // Memory Palace Technique
  {
    id: 'fc-mem-031',
    front: 'What is the memory palace (method of loci) technique?',
    back: 'A mnemonic strategy where you mentally place items to remember at specific locations along a familiar route or within a familiar space. To recall, you mentally walk through the space, "seeing" each item at its location. Ancient technique used by Greek and Roman orators.',
    category: 'Master Synthesis',
    source: 'Learning Science',
    pathwayId: 'master-synthesis',
    difficulty: 'beginner',
    tags: ['mnemonics', 'memory-palace', 'visualization']
  },
  {
    id: 'fc-mem-032',
    front: 'Why is the memory palace technique so effective?',
    back: 'It leverages spatial memory (evolutionarily ancient and robust), creates vivid visual associations, provides a structured retrieval route, uses the familiar to encode the unfamiliar, and transforms abstract information into concrete, locationized imagery. The structure prevents omissions.',
    category: 'Master Synthesis',
    source: 'Learning Science',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['mnemonics', 'memory-palace', 'spatial-memory']
  },
  {
    id: 'fc-mem-033',
    front: 'How should you construct effective memory palace images?',
    back: 'Make images vivid, bizarre, interactive, and emotionally engaging. Exaggerate size, add motion, include sensory details. Have images interact with the location (not just placed there). The stranger and more distinctive the image, the more memorable - our brains remember unusual things.',
    category: 'Master Synthesis',
    source: 'Learning Science',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['mnemonics', 'memory-palace', 'imagery']
  },
  {
    id: 'fc-mem-034',
    front: 'What are the limitations of the memory palace technique?',
    back: 'Time-intensive to create, better for ordered lists than conceptual understanding, requires practice to master, limited locations available (though you can create fictional ones), can be confused if overused with similar content, and doesn\'t inherently build deep comprehension.',
    category: 'Master Synthesis',
    source: 'Learning Science',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['mnemonics', 'memory-palace', 'limitations']
  },
  {
    id: 'fc-mem-035',
    front: 'How do memory champions use memory palaces in competition?',
    back: 'Champions maintain hundreds of pre-prepared palace routes, assign 2-3 images per location to increase density, use standardized image systems (PAO - Person-Action-Object), practice daily, and develop extraordinary visualization skills. They don\'t have better natural memory - they use technique.',
    category: 'Master Synthesis',
    source: 'Learning Science',
    pathwayId: 'master-synthesis',
    difficulty: 'advanced',
    tags: ['mnemonics', 'memory-palace', 'expertise']
  },

  // Chunking Information
  {
    id: 'fc-mem-036',
    front: 'What is chunking and why does it expand working memory capacity?',
    back: 'Chunking combines individual items into meaningful units, treating multiple elements as one "chunk." Since working memory holds about 4 chunks, organizing information into chunks effectively increases capacity. "FBI-CIA-IRS" (3 chunks) is easier than "FBICIAIRS" (9 letters).',
    category: 'Master Synthesis',
    source: 'Learning Science',
    pathwayId: 'master-synthesis',
    difficulty: 'beginner',
    tags: ['chunking', 'working-memory', 'cognitive-load']
  },
  {
    id: 'fc-mem-037',
    front: 'How does expertise relate to chunking ability?',
    back: 'Experts chunk more effectively in their domain because their knowledge provides meaningful patterns. Chess masters see board positions as familiar configurations, not individual pieces. This expertise-based chunking is why experts can remember more domain-specific information than novices.',
    category: 'Master Synthesis',
    source: 'Learning Science',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['chunking', 'expertise', 'pattern-recognition']
  },
  {
    id: 'fc-mem-038',
    front: 'What strategies help create effective chunks when learning new material?',
    back: 'Find meaningful patterns or relationships, connect to prior knowledge, use acronyms or mnemonics, group by category or function, identify hierarchical structures, practice until patterns become automatic. The goal is transforming arbitrary information into meaningful units.',
    category: 'Master Synthesis',
    source: 'Learning Science',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['chunking', 'learning-strategies', 'organization']
  },
  {
    id: 'fc-mem-039',
    front: 'How does chunking relate to skill acquisition?',
    back: 'Skills develop through chunking of component actions into fluid sequences. Initially, each step requires attention. With practice, steps chain together into automated chunks (subroutines), freeing working memory for higher-level thinking. This is why experts perform complex tasks effortlessly.',
    category: 'Master Synthesis',
    source: 'Learning Science',
    pathwayId: 'master-synthesis',
    difficulty: 'advanced',
    tags: ['chunking', 'skill-learning', 'automaticity']
  },
  {
    id: 'fc-mem-040',
    front: 'What is the difference between natural and artificial chunks?',
    back: 'Natural chunks have inherent meaning (words, familiar patterns, concepts). Artificial chunks are created through deliberate association (acronyms, mnemonics). Natural chunks are stronger and more automatic; artificial chunks require initial effort to create but can be powerful learning tools.',
    category: 'Master Synthesis',
    source: 'Learning Science',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['chunking', 'memory-organization', 'learning']
  },

  // Interleaving Practice
  {
    id: 'fc-mem-041',
    front: 'What is interleaved practice and how does it differ from blocked practice?',
    back: 'Interleaved practice mixes different topics, skills, or problem types in a single session (ABCABCABC). Blocked practice focuses on one type at a time (AAABBBCCC). Interleaving feels harder and produces slower initial performance, but leads to better long-term retention and transfer.',
    category: 'Master Synthesis',
    source: 'Learning Science',
    pathwayId: 'master-synthesis',
    difficulty: 'beginner',
    tags: ['interleaving', 'practice', 'learning-strategies']
  },
  {
    id: 'fc-mem-042',
    front: 'Why does interleaving improve learning despite feeling less effective?',
    back: 'Interleaving forces discrimination between problem types (what strategy applies when?), strengthens retrieval by requiring selection, spaces practice of each type, prevents false fluency from repetition, and develops flexible, adaptable knowledge. The difficulty is what makes it effective.',
    category: 'Master Synthesis',
    source: 'Learning Science',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['interleaving', 'desirable-difficulties', 'learning-mechanisms']
  },
  {
    id: 'fc-mem-043',
    front: 'When is blocked practice preferable to interleaved practice?',
    back: 'Blocked practice is better for complete beginners who haven\'t learned basic procedures yet, for initial skill acquisition where fundamentals need establishing, for very different skills with no discrimination benefit, and when building confidence is the priority.',
    category: 'Master Synthesis',
    source: 'Learning Science',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['interleaving', 'blocked-practice', 'learning-design']
  },
  {
    id: 'fc-mem-044',
    front: 'How should you implement interleaving in a study session?',
    back: 'Mix problem types or subjects within sessions, ensure enough time on each topic to encode (not random switching), include recently learned and older material, interleave similar concepts that benefit from discrimination practice, and resist the urge to return to blocking when it feels hard.',
    category: 'Master Synthesis',
    source: 'Learning Science',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['interleaving', 'study-strategies', 'implementation']
  },

  // Desirable Difficulties
  {
    id: 'fc-mem-045',
    front: 'What are desirable difficulties in learning?',
    back: 'Desirable difficulties are challenges that slow initial learning but enhance long-term retention and transfer. Examples include spacing, interleaving, testing, generation, and varied practice. They work because the cognitive effort required strengthens encoding and retrieval processes.',
    category: 'Master Synthesis',
    source: 'Learning Science',
    pathwayId: 'master-synthesis',
    difficulty: 'beginner',
    tags: ['desirable-difficulties', 'learning-science', 'effort']
  },
  {
    id: 'fc-mem-046',
    front: 'When does a difficulty become undesirable rather than desirable?',
    back: 'A difficulty is undesirable when it prevents successful learning - when the learner lacks prerequisite knowledge, when the task is too hard to complete meaningfully, or when difficulty doesn\'t engage relevant learning processes. Desirable difficulties must be achievable with effort.',
    category: 'Master Synthesis',
    source: 'Learning Science',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['desirable-difficulties', 'learning-design', 'prerequisites']
  },
  {
    id: 'fc-mem-047',
    front: 'Why do students and teachers often avoid desirable difficulties?',
    back: 'Desirable difficulties reduce immediate performance and feel frustrating. Easy fluency during massed/blocked practice is mistaken for learning. People conflate performance (current display of skill) with learning (durable change). Without understanding the science, difficult conditions seem counterproductive.',
    category: 'Master Synthesis',
    source: 'Learning Science',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['desirable-difficulties', 'metacognition', 'learning-beliefs']
  },

  // Transfer of Learning
  {
    id: 'fc-mem-048',
    front: 'What is transfer of learning and why is it often difficult to achieve?',
    back: 'Transfer is applying knowledge or skills learned in one context to new situations. It\'s difficult because learning is often context-bound - encoded with specific features that don\'t match new situations. Surface similarities distract from deep structure. Without explicit abstraction, knowledge stays inert.',
    category: 'Master Synthesis',
    source: 'Learning Science',
    pathwayId: 'master-synthesis',
    difficulty: 'intermediate',
    tags: ['transfer', 'learning', 'application']
  },
  {
    id: 'fc-mem-049',
    front: 'What conditions promote far transfer of learning?',
    back: 'Varied practice across contexts, explicit instruction on underlying principles, comparison of multiple examples, practice retrieving and applying in new situations, interleaved practice that builds discrimination, metacognitive reflection on when knowledge applies, and learning why not just how.',
    category: 'Master Synthesis',
    source: 'Learning Science',
    pathwayId: 'master-synthesis',
    difficulty: 'advanced',
    tags: ['transfer', 'learning-design', 'application']
  },

  // Metacognition and Learning Strategies
  {
    id: 'fc-mem-050',
    front: 'What is metacognition and why is it crucial for effective learning?',
    back: 'Metacognition is thinking about thinking - awareness and regulation of your own cognitive processes. It includes knowing what you know (monitoring) and adjusting strategies accordingly (control). Good metacognition lets learners allocate effort wisely, choose effective strategies, and avoid illusions of learning.',
    category: 'Master Synthesis',
    source: 'Learning Science',
    pathwayId: 'master-synthesis',
    difficulty: 'beginner',
    tags: ['metacognition', 'self-regulation', 'learning-strategies']
  }
];
