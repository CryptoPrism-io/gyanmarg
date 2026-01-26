import type { SpacedRepetitionCard } from '@/types';

export const learningStrategiesFlashcards: SpacedRepetitionCard[] = [
  {
    id: 'fc-learning-001',
    front: 'What is spaced repetition and why is it more effective than massed practice?',
    back: 'Spaced repetition is a learning technique where you review material at increasing intervals over time. It exploits the "spacing effect" - our brains retain information better when learning sessions are spread out rather than crammed together. Each retrieval strengthens memory traces and the optimal spacing allows some forgetting, which paradoxically makes subsequent retrieval more effortful and thus more effective for long-term retention.',
    category: 'Personal Development',
    source: 'Make It Stick / Ultralearning',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['learning', 'spaced-repetition', 'memory']
  },
  {
    id: 'fc-learning-002',
    front: 'What is the forgetting curve and how does spaced repetition counteract it?',
    back: 'The forgetting curve, discovered by Hermann Ebbinghaus, shows that memory retention decays exponentially over time without reinforcement - we forget approximately 70% of new information within 24 hours. Spaced repetition counteracts this by strategically timing reviews just before you would forget, each time flattening the curve and extending retention. The optimal intervals typically follow patterns like 1 day, 3 days, 7 days, 14 days, 30 days, etc.',
    category: 'Personal Development',
    source: 'Make It Stick / Ebbinghaus Research',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['learning', 'memory', 'forgetting-curve']
  },
  {
    id: 'fc-learning-003',
    front: 'What is active recall and why is it superior to passive review?',
    back: 'Active recall is the practice of actively stimulating memory during learning by attempting to retrieve information without looking at the source. Unlike passive review (re-reading, highlighting), active recall strengthens neural pathways through effortful retrieval. Research shows active recall can improve retention by 50-150% compared to passive methods. The act of struggling to remember, even if unsuccessful, primes the brain to better encode the information when subsequently reviewed.',
    category: 'Personal Development',
    source: 'Make It Stick / Ultralearning',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['learning', 'active-recall', 'memory']
  },
  {
    id: 'fc-learning-004',
    front: 'What is the testing effect and how can you leverage it for learning?',
    back: 'The testing effect (or retrieval practice effect) demonstrates that the act of retrieving information from memory strengthens that memory more than additional study time. Taking practice tests, even without feedback, produces better long-term retention than spending equivalent time re-reading. To leverage this: use flashcards, practice tests, write summaries from memory, teach concepts to others, or use the "blank page" method where you write everything you remember about a topic before reviewing.',
    category: 'Personal Development',
    source: 'Make It Stick / Cognitive Psychology Research',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['learning', 'testing-effect', 'retrieval-practice']
  },
  {
    id: 'fc-learning-005',
    front: 'What is elaborative interrogation and how do you practice it?',
    back: 'Elaborative interrogation is asking "why" and "how" questions about facts you are learning, then generating explanations. Instead of memorizing "The mitochondria is the powerhouse of the cell," ask "Why is the mitochondria called the powerhouse?" This forces deeper processing by connecting new information to existing knowledge. Practice by: 1) Converting facts into why/how questions, 2) Generating your own explanations before checking sources, 3) Connecting new concepts to personal experiences or prior knowledge.',
    category: 'Personal Development',
    source: 'Make It Stick / Learning Research',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['learning', 'elaboration', 'deep-processing']
  },
  {
    id: 'fc-learning-006',
    front: 'What is interleaving and why does it outperform blocked practice?',
    back: 'Interleaving is mixing different topics, skills, or problem types during practice rather than focusing on one type at a time (blocked practice). While blocked practice feels easier and produces faster initial learning, interleaving leads to better long-term retention and transfer. This happens because interleaving forces your brain to continually retrieve different strategies and discriminate between problem types. Example: Instead of practicing 20 addition problems then 20 subtraction, alternate between them randomly.',
    category: 'Personal Development',
    source: 'Make It Stick / Ultralearning',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['learning', 'interleaving', 'practice']
  },
  {
    id: 'fc-learning-007',
    front: 'What are "desirable difficulties" in learning?',
    back: 'Desirable difficulties are learning conditions that make acquisition slower and more challenging but enhance long-term retention and transfer. They include: spacing (vs. massing), interleaving (vs. blocking), retrieval practice (vs. re-reading), varying practice conditions, and reducing feedback frequency. The key insight is that easy learning often produces poor retention, while struggle during learning strengthens memory. The difficulty must be "desirable" - challenging but achievable, not overwhelming.',
    category: 'Personal Development',
    source: 'Make It Stick / Robert Bjork Research',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['learning', 'desirable-difficulties', 'memory']
  },
  {
    id: 'fc-learning-008',
    front: 'What is the difference between deep and shallow processing in learning?',
    back: 'Shallow processing involves focusing on surface features like appearance, sound, or rote repetition - leading to weak, quickly forgotten memories. Deep processing involves engaging with meaning, making connections, and elaborating on concepts - creating durable, well-integrated memories. Example: Reading a word and noting it has 7 letters (shallow) vs. relating its meaning to your life (deep). The Levels of Processing theory (Craik & Lockhart) shows that deeper processing creates stronger memory traces.',
    category: 'Personal Development',
    source: 'Make It Stick / Cognitive Psychology',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['learning', 'deep-processing', 'memory']
  },
  {
    id: 'fc-learning-009',
    front: 'What is the Cornell Note-Taking System and how does it enhance learning?',
    back: 'The Cornell System divides your page into three sections: 1) Notes column (right, largest) - record main ideas during lecture/reading, 2) Cue column (left, narrow) - add questions and keywords after class, 3) Summary section (bottom) - write a brief summary. This system enhances learning by: forcing active processing during note-taking, creating built-in review prompts, enabling self-testing by covering the notes column and answering cue questions, and consolidating understanding through summarization.',
    category: 'Personal Development',
    source: 'Learning How to Learn / Study Skills Research',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['learning', 'note-taking', 'cornell-method']
  },
  {
    id: 'fc-learning-010',
    front: 'What is mind mapping and when is it most effective?',
    back: 'Mind mapping is a visual note-taking method where you place a central concept in the middle and branch out with related ideas, using colors, images, and spatial organization. Most effective for: brainstorming, planning essays, reviewing conceptual relationships, and creative thinking. Benefits include engaging visual-spatial memory, showing connections between ideas, and being memorable due to unique visual patterns. Less effective for: sequential information, detailed factual content, or when precision matters more than relationships.',
    category: 'Personal Development',
    source: 'Tony Buzan / Learning Research',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['learning', 'note-taking', 'mind-mapping']
  },
  {
    id: 'fc-learning-011',
    front: 'What is the Feynman Technique for learning complex concepts?',
    back: 'The Feynman Technique has four steps: 1) Choose a concept and write it at the top of a blank page, 2) Explain it in simple language as if teaching a child - use plain words, analogies, and examples, 3) Identify gaps - where you struggle or use jargon, return to source material, 4) Simplify and use analogies until the explanation is clear. This technique works because teaching forces deep understanding, and simplification reveals hidden gaps in knowledge.',
    category: 'Personal Development',
    source: 'Ultralearning / Feynman Method',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['learning', 'feynman-technique', 'understanding']
  },
  {
    id: 'fc-learning-012',
    front: 'What is transfer of learning and what factors enhance it?',
    back: 'Transfer of learning is the ability to apply knowledge or skills learned in one context to new situations. Factors that enhance transfer: 1) Varied practice - learning in multiple contexts, 2) Deep understanding of underlying principles rather than surface procedures, 3) Explicit focus on identifying when knowledge applies, 4) Practice with diverse problem types, 5) Making abstract principles concrete through multiple examples, 6) Self-explanation of why solutions work. Transfer is the ultimate goal of learning - without it, knowledge remains inert.',
    category: 'Personal Development',
    source: 'Make It Stick / Learning Research',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['learning', 'transfer', 'application']
  },
  {
    id: 'fc-learning-013',
    front: 'What is the generation effect and how can you use it?',
    back: 'The generation effect shows that information you generate yourself is remembered better than information you simply read. Even generating partial information or guessing before being shown the answer improves retention. Applications: 1) Try to solve problems before being shown solutions, 2) Predict what comes next while reading, 3) Generate your own examples of concepts, 4) Write summaries before reviewing, 5) Attempt to recall before looking up. The effort of generation creates stronger memory traces than passive reception.',
    category: 'Personal Development',
    source: 'Make It Stick / Cognitive Research',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['learning', 'generation-effect', 'active-learning']
  },
  {
    id: 'fc-learning-014',
    front: 'What is metacognition and why is it crucial for effective learning?',
    back: 'Metacognition is "thinking about thinking" - awareness and control of your own learning processes. It includes: monitoring comprehension, recognizing when you do not understand, evaluating learning strategies, and adjusting approaches. Crucial because: most learners have poor intuitions about effective strategies (favoring easy but ineffective methods like re-reading), and accurate self-assessment prevents illusions of competence. Improve metacognition by: testing yourself, seeking feedback, comparing predictions to performance, and reflecting on what works.',
    category: 'Personal Development',
    source: 'Make It Stick / Ultralearning',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['learning', 'metacognition', 'self-awareness']
  },
  {
    id: 'fc-learning-015',
    front: 'What is the illusion of competence and how do you avoid it?',
    back: 'The illusion of competence occurs when familiarity with material is mistaken for actual understanding or ability to recall. Common causes: re-reading (information seems familiar), highlighting (feels productive but is passive), looking at solutions (understanding them differs from generating them). Avoid by: testing yourself without notes, explaining concepts from memory, solving problems before checking answers, spacing your study, and using practice conditions that match real performance conditions.',
    category: 'Personal Development',
    source: 'Make It Stick / A Mind for Numbers',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['learning', 'illusion-of-competence', 'self-assessment']
  },
  {
    id: 'fc-learning-016',
    front: 'What is the SQ3R reading method?',
    back: 'SQ3R is a structured reading method: Survey - skim headings, summaries, and structure before reading; Question - convert headings into questions to answer while reading; Read - actively read to answer your questions; Recite - after each section, look away and summarize key points from memory; Review - after finishing, review notes and test recall. This method is effective because it provides purpose for reading, engages active processing, and incorporates retrieval practice throughout.',
    category: 'Personal Development',
    source: 'Study Skills Research / Francis Robinson',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['learning', 'reading', 'sq3r']
  },
  {
    id: 'fc-learning-017',
    front: 'What is chunking in learning and memory?',
    back: 'Chunking is grouping individual pieces of information into larger, meaningful units to overcome working memory limitations (typically 4 plus or minus 1 items). Examples: remembering a phone number as 3 chunks (555-867-5309) rather than 10 digits, or learning chess patterns as meaningful positions. Expert knowledge largely consists of rich chunks built over time. To chunk effectively: find patterns, create acronyms, connect to existing knowledge, group by meaning, and practice until chunks become automatic.',
    category: 'Personal Development',
    source: 'A Mind for Numbers / Cognitive Psychology',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['learning', 'chunking', 'memory']
  },
  {
    id: 'fc-learning-018',
    front: 'What is the difference between recognition and recall, and why does it matter for studying?',
    back: 'Recognition is identifying previously encountered information when you see it (multiple choice tests); recall is retrieving information from memory without cues (essay questions). Recognition is easier and creates illusions of competence - you recognize answers without being able to produce them. This matters because: most real-world applications require recall, not recognition. Study strategies should emphasize recall practice (flashcards, blank page summaries) over recognition-based review (re-reading, highlighting).',
    category: 'Personal Development',
    source: 'Make It Stick / Memory Research',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['learning', 'recall', 'recognition']
  },
  {
    id: 'fc-learning-019',
    front: 'What is the Pomodoro Technique and how does it support learning?',
    back: 'The Pomodoro Technique involves working in focused 25-minute intervals (pomodoros) followed by 5-minute breaks, with longer breaks every 4 pomodoros. It supports learning by: 1) Making starting easier through time-boxing, 2) Maintaining focus by creating urgency, 3) Preventing burnout through regular breaks, 4) Building awareness of distraction patterns, 5) Allowing diffuse-mode processing during breaks. Customize timing based on task complexity - some find 50/10 or 90/20 more effective for deep work.',
    category: 'Personal Development',
    source: 'A Mind for Numbers / Productivity Research',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['learning', 'pomodoro', 'focus']
  },
  {
    id: 'fc-learning-020',
    front: 'What are focused and diffuse modes of thinking, and how should you use both?',
    back: 'Focused mode is concentrated, analytical thinking using familiar patterns - essential for working through problems step-by-step. Diffuse mode is relaxed, big-picture thinking that makes unexpected connections - active during rest, walks, or sleep. Effective learning requires both: use focused mode to work on problems, then switch to diffuse mode (take breaks, sleep on it) to allow insights to emerge. If stuck, step away - your brain continues processing subconsciously. Alternate between modes throughout your study sessions.',
    category: 'Personal Development',
    source: 'A Mind for Numbers / Barbara Oakley',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['learning', 'focused-mode', 'diffuse-mode']
  },
  {
    id: 'fc-learning-021',
    front: 'What is the protege effect and how can you use it for learning?',
    back: 'The protege effect demonstrates that teaching or preparing to teach material enhances your own learning and retention. When you expect to teach, you organize information more effectively, identify gaps in understanding, and process material more deeply. Use this by: explaining concepts to real or imaginary students, writing as if teaching someone else, joining study groups where you teach each other, creating tutorials or explanations, or using the Feynman Technique. Even without an actual student, the mindset of teaching improves learning.',
    category: 'Personal Development',
    source: 'Learning Research / Make It Stick',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['learning', 'protege-effect', 'teaching']
  },
  {
    id: 'fc-learning-022',
    front: 'What is semantic encoding and how does it improve memory?',
    back: 'Semantic encoding processes information based on its meaning rather than surface features like sound or appearance. Information encoded semantically is remembered far better because it connects to existing knowledge networks. Strategies for semantic encoding: relate new information to what you already know, create meaningful associations, ask how concepts relate to your life, generate examples, explain why facts are true, and organize information into meaningful categories. Avoid rote repetition without understanding.',
    category: 'Personal Development',
    source: 'Cognitive Psychology / Memory Research',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['learning', 'semantic-encoding', 'memory']
  },
  {
    id: 'fc-learning-023',
    front: 'What is the spacing effect and what are optimal intervals for review?',
    back: 'The spacing effect shows that learning is more effective when spread over time rather than concentrated in one session. Optimal intervals depend on how long you need to retain information: for a test in one week, space reviews 1-2 days apart; for long-term retention, use expanding intervals (1 day, 3 days, 7 days, 14 days, 30 days, 60 days). The key principle: review just before you would forget. Spaced repetition software (Anki, SuperMemo) automates optimal scheduling based on your performance.',
    category: 'Personal Development',
    source: 'Make It Stick / Pimsleur Research',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['learning', 'spacing-effect', 'spaced-repetition']
  },
  {
    id: 'fc-learning-024',
    front: 'Why is re-reading one of the least effective study strategies?',
    back: 'Re-reading is ineffective because: 1) It creates illusions of competence through familiarity without real learning, 2) It is passive - no effortful retrieval or processing, 3) Time spent re-reading could be used for more effective strategies, 4) It does not identify gaps in knowledge, 5) Recognition during re-reading differs from ability to recall. Studies show re-reading produces minimal improvements compared to retrieval practice. Replace re-reading with: self-testing, summarizing from memory, teaching concepts, or elaborative interrogation.',
    category: 'Personal Development',
    source: 'Make It Stick / Learning Research',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['learning', 're-reading', 'study-strategies']
  },
  {
    id: 'fc-learning-025',
    front: 'What is the method of loci (memory palace) and how do you create one?',
    back: 'The method of loci uses spatial memory to organize and recall information by associating items with locations in a familiar place. To create: 1) Choose a well-known location (your home, commute route), 2) Identify distinct spots in order, 3) Create vivid, unusual images connecting each item to each location, 4) Mentally walk through the space to retrieve items. Effective because spatial and visual memory are powerful, and the technique provides retrieval cues. Best for ordered lists, speeches, and sequential information.',
    category: 'Personal Development',
    source: 'Moonwalking with Einstein / Memory Research',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['learning', 'memory-palace', 'mnemonics']
  },
  {
    id: 'fc-learning-026',
    front: 'What is deliberate practice and how does it differ from regular practice?',
    back: 'Deliberate practice is purposeful, systematic practice designed for improvement with: 1) Specific goals targeting weaknesses, 2) Full concentration and effort, 3) Immediate feedback, 4) Practice at the edge of current ability, 5) Expert-designed training methods. Regular practice often involves mindless repetition of comfortable skills. Deliberate practice is mentally demanding and not inherently enjoyable but produces rapid improvement. Key insight: 10,000 hours only matter if they involve deliberate practice, not just repetition.',
    category: 'Personal Development',
    source: 'Peak / Anders Ericsson',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['learning', 'deliberate-practice', 'skill-development']
  },
  {
    id: 'fc-learning-027',
    front: 'What is the pre-test effect and how should you use it?',
    back: 'The pre-test effect shows that attempting to answer questions before learning material improves subsequent learning, even when pre-test answers are wrong. This works because: pre-testing activates prior knowledge, identifies gaps, creates curiosity, and primes the brain to encode relevant information. Use by: previewing test questions before studying, attempting problems before learning solutions, predicting content before reading, or taking diagnostic tests before courses. The struggle of the pre-test enhances learning of the correct answers.',
    category: 'Personal Development',
    source: 'Make It Stick / Learning Research',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['learning', 'pre-testing', 'retrieval-practice']
  },
  {
    id: 'fc-learning-028',
    front: 'What is the principle of encoding specificity?',
    back: 'Encoding specificity states that memory is best when the retrieval context matches the learning context. This includes physical environment, mental state, and the way information is processed. Implications: 1) Study in conditions similar to testing conditions, 2) Practice retrieving in varied contexts to improve transfer, 3) If you learned something when calm, you may struggle to recall when stressed, 4) State-dependent learning means caffeine or mood affects retrieval. For robust learning, deliberately vary contexts during study.',
    category: 'Personal Development',
    source: 'Cognitive Psychology / Tulving Research',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['learning', 'encoding-specificity', 'memory']
  },
  {
    id: 'fc-learning-029',
    front: 'What is the dual coding theory and how can it improve learning?',
    back: 'Dual coding theory proposes that information encoded both verbally and visually creates two independent memory traces, increasing retention and recall. Applications: combine words with images, diagrams, or mental imagery. When reading about a process, visualize it. When solving math, draw diagrams. Create visual representations of abstract concepts. Use graphic organizers, flowcharts, and sketches alongside notes. This works because the two codes provide independent retrieval routes - if one fails, the other may succeed.',
    category: 'Personal Development',
    source: 'Cognitive Psychology / Allan Paivio',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['learning', 'dual-coding', 'visual-learning']
  },
  {
    id: 'fc-learning-030',
    front: 'What is productive failure and why can it enhance learning?',
    back: 'Productive failure involves attempting challenging problems before receiving instruction, allowing learners to struggle and fail. Paradoxically, this "failure" leads to better learning than direct instruction first. It works by: activating prior knowledge, revealing gaps, creating cognitive structures for new information, building problem-solving skills, and increasing motivation through challenge. Key: the failure must be followed by instruction. Use by: attempting problems before solutions, making predictions before explanations, trying before tutorials.',
    category: 'Personal Development',
    source: 'Learning Research / Kapur Studies',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['learning', 'productive-failure', 'struggle']
  },
  {
    id: 'fc-learning-031',
    front: 'What is the difference between massed practice and distributed practice?',
    back: 'Massed practice (cramming) concentrates all learning into one session; distributed practice spreads it over multiple sessions with gaps between. Although massed practice feels more productive (rapid initial progress), distributed practice produces significantly better long-term retention. The spacing between sessions allows some forgetting, which makes subsequent retrieval more effortful and strengthening. For optimal retention: distribute study across days rather than hours, and resist the urge to cram before tests.',
    category: 'Personal Development',
    source: 'Make It Stick / Learning Research',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['learning', 'distributed-practice', 'spacing']
  },
  {
    id: 'fc-learning-032',
    front: 'How does sleep affect learning and memory consolidation?',
    back: 'Sleep is crucial for memory consolidation - the process of stabilizing and integrating new memories. During sleep: 1) The hippocampus replays learning experiences, 2) Memories transfer to long-term storage in the cortex, 3) Neural connections strengthen, 4) Unnecessary information is pruned. Sleep deprivation impairs learning by 40%. For optimal learning: study before sleep, get 7-9 hours nightly, take naps after learning sessions, and avoid all-night cramming which prevents consolidation.',
    category: 'Personal Development',
    source: 'Why We Sleep / A Mind for Numbers',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['learning', 'sleep', 'memory-consolidation']
  },
  {
    id: 'fc-learning-033',
    front: 'What is the self-explanation effect?',
    back: 'The self-explanation effect shows that explaining material to yourself during learning significantly improves understanding and retention. This involves: pausing to explain what you just read, connecting new information to prior knowledge, generating reasons for steps in a procedure, and predicting what comes next. Effective because it forces deeper processing, identifies confusion, and creates connections. Practice by: stopping after each paragraph to explain the main point, verbally reasoning through worked examples, and questioning why procedures work.',
    category: 'Personal Development',
    source: 'Learning Research / Chi Studies',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['learning', 'self-explanation', 'deep-processing']
  },
  {
    id: 'fc-learning-034',
    front: 'What is the concept of a "desirable difficulty" and what makes a difficulty "undesirable"?',
    back: 'Desirable difficulties are challenges that slow initial learning but enhance long-term retention and transfer (spacing, testing, interleaving, generation). Undesirable difficulties are obstacles that impede learning without benefit: confusing explanations, irrelevant complexity, anxiety-inducing conditions, or tasks far beyond current ability. The distinction: desirable difficulties require effortful but successful processing of relevant material; undesirable difficulties prevent successful processing or waste effort on irrelevant challenges.',
    category: 'Personal Development',
    source: 'Make It Stick / Bjork Research',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['learning', 'desirable-difficulties', 'difficulty']
  },
  {
    id: 'fc-learning-035',
    front: 'What is the testing effect and why is low-stakes testing powerful for learning?',
    back: 'The testing effect demonstrates that retrieving information strengthens memory more than additional study. Low-stakes testing (no grades, low anxiety) is powerful because it: provides retrieval practice benefits, gives feedback on actual knowledge, identifies gaps before high-stakes tests, builds retrieval fluency, and calibrates confidence. Use low-stakes testing through: flashcards, practice quizzes, study group questioning, self-testing before checking notes, and spaced retrieval practice.',
    category: 'Personal Development',
    source: 'Make It Stick / Educational Research',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['learning', 'testing-effect', 'low-stakes-testing']
  },
  {
    id: 'fc-learning-036',
    front: 'What is the difference between blocked and interleaved practice, with examples?',
    back: 'Blocked practice groups similar items together (AAABBBCCC); interleaved practice mixes them (ABCABCABC). Examples: Blocked - practicing all addition problems, then all subtraction. Interleaved - mixing addition and subtraction randomly. Blocked - hitting only forehands, then only backhands. Interleaved - alternating shot types randomly. Blocked feels easier and shows faster initial progress, but interleaved produces superior long-term retention and transfer because it requires identifying problem types and retrieving different strategies.',
    category: 'Personal Development',
    source: 'Make It Stick / Motor Learning Research',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['learning', 'interleaving', 'blocked-practice']
  },
  {
    id: 'fc-learning-037',
    front: 'What is ultralearning and what are its core principles?',
    back: 'Ultralearning is an aggressive, self-directed learning strategy for rapidly acquiring skills and knowledge. Core principles: 1) Metalearning - research how to learn the subject efficiently, 2) Focus - cultivate concentration ability, 3) Directness - learn by doing the target skill, 4) Drill - isolate and strengthen weaknesses, 5) Retrieval - test yourself rather than review, 6) Feedback - get honest feedback and learn from it, 7) Retention - space practice to prevent forgetting, 8) Intuition - develop deep understanding through exploration, 9) Experimentation - push beyond comfort zones.',
    category: 'Personal Development',
    source: 'Ultralearning / Scott Young',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['learning', 'ultralearning', 'self-directed']
  },
  {
    id: 'fc-learning-038',
    front: 'What is the concept of "directness" in learning and why is it important?',
    back: 'Directness means learning by directly doing the thing you want to become good at, rather than through proxies. Example: learning a language by speaking with native speakers vs. studying grammar rules in isolation. Directness matters because: transfer is limited (skills learned one way may not transfer to another context), real practice develops applicable skills, and it reveals actual gaps. Apply by: identifying the actual skill context, practicing as close to real conditions as possible, and minimizing indirect study activities.',
    category: 'Personal Development',
    source: 'Ultralearning / Scott Young',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['learning', 'directness', 'practical-learning']
  },
  {
    id: 'fc-learning-039',
    front: 'What is cognitive load theory and how does it inform learning design?',
    back: 'Cognitive load theory recognizes that working memory has limited capacity. Three types of load: 1) Intrinsic - inherent complexity of material, 2) Extraneous - poor instruction adding unnecessary burden, 3) Germane - mental effort spent on schema construction. Design implications: break complex material into chunks, eliminate irrelevant information, use worked examples before practice problems, integrate related information spatially, and scaffold learning progressively. Overloaded working memory prevents learning.',
    category: 'Personal Development',
    source: 'Learning Design Research / Sweller',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['learning', 'cognitive-load', 'instructional-design']
  },
  {
    id: 'fc-learning-040',
    front: 'What is the role of prior knowledge in learning and how can you leverage it?',
    back: 'Prior knowledge is the foundation for new learning - we understand new information by connecting it to what we already know. More prior knowledge means: faster learning, better retention, easier problem-solving, and richer understanding. Leverage by: explicitly activating relevant prior knowledge before learning, using analogies to familiar concepts, building prerequisite knowledge first, filling gaps that hinder understanding, and creating advance organizers that connect new material to existing frameworks.',
    category: 'Personal Development',
    source: 'Learning Science Research',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['learning', 'prior-knowledge', 'schema']
  },
  {
    id: 'fc-learning-041',
    front: 'What is speed reading and what are its limitations?',
    back: 'Speed reading techniques claim to increase reading speed dramatically through methods like reducing subvocalization, wider eye fixations, or skimming. Limitations: 1) Comprehension drops significantly at very high speeds, 2) Eye physiology limits how much can be processed per fixation, 3) Subvocalization aids comprehension of complex material, 4) True understanding requires time for processing. Better approach: vary speed based on material difficulty and purpose - skim familiar/simple content, slow down for complex/important content. Strategic reading beats uniform speed reading.',
    category: 'Personal Development',
    source: 'Reading Research / Learning Science',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['learning', 'speed-reading', 'reading-comprehension']
  },
  {
    id: 'fc-learning-042',
    front: 'What is the Leitner System for flashcard review?',
    back: 'The Leitner System organizes flashcards into boxes based on performance. Correctly answered cards move to higher boxes reviewed less frequently; incorrect cards return to the first box for frequent review. Example setup: Box 1 (daily), Box 2 (every 2 days), Box 3 (weekly), Box 4 (biweekly), Box 5 (monthly). This implements spaced repetition physically - cards you know well are reviewed less often, while difficult cards get more practice. The system is simple, requires no technology, and is highly effective.',
    category: 'Personal Development',
    source: 'Spaced Repetition Methods',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['learning', 'leitner-system', 'flashcards']
  },
  {
    id: 'fc-learning-043',
    front: 'What is the role of emotions in learning and memory?',
    back: 'Emotions significantly impact learning: emotional arousal enhances memory consolidation (the amygdala signals importance to the hippocampus), positive emotions promote engagement and creative thinking, negative emotions can narrow focus helpfully or create anxiety that impairs performance, and moderate stress enhances memory while chronic stress damages it. Implications: create positive learning associations, manage test anxiety, use curiosity and interest as motivators, and make material personally relevant to engage emotional processing.',
    category: 'Personal Development',
    source: 'Learning Neuroscience Research',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['learning', 'emotions', 'memory']
  },
  {
    id: 'fc-learning-044',
    front: 'What is the difference between performance and learning?',
    back: 'Performance is how well you do during a learning session; learning is the lasting change in knowledge or skill. They often diverge: conditions that boost performance may hurt learning (like looking at answers), while conditions that reduce performance may enhance learning (like spacing and testing). Cramming produces good short-term performance but poor long-term learning. This distinction matters because we often judge learning by performance during practice, leading to ineffective study choices that feel productive but are not.',
    category: 'Personal Development',
    source: 'Make It Stick / Bjork Research',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['learning', 'performance', 'assessment']
  },
  {
    id: 'fc-learning-045',
    front: 'What is worked example effect and when should you transition to problem-solving?',
    back: 'The worked example effect shows that studying solved examples is more effective for novices than solving problems, because it reduces cognitive load while building schemas. Transition to problem-solving as expertise grows - eventually, worked examples become redundant and problem-solving becomes more beneficial. This crossover is called the "expertise reversal effect." Strategy: begin with worked examples, fade scaffolding gradually (completion problems), then progress to full problem-solving as competence develops.',
    category: 'Personal Development',
    source: 'Cognitive Load Theory / Sweller',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['learning', 'worked-examples', 'problem-solving']
  },
  {
    id: 'fc-learning-046',
    front: 'What is the Zeigarnik effect and how can it help with learning?',
    back: 'The Zeigarnik effect shows that uncompleted tasks are remembered better than completed ones - the brain keeps incomplete items active in memory. Applications for learning: intentionally stop studying mid-task to maintain engagement, begin difficult problems before breaks so your mind continues processing (incubation), leave writing mid-sentence to ease resumption, and use curiosity about incomplete understanding as motivation. The tension of incompleteness drives continued mental engagement.',
    category: 'Personal Development',
    source: 'Psychology Research / Bluma Zeigarnik',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['learning', 'zeigarnik-effect', 'motivation']
  },
  {
    id: 'fc-learning-047',
    front: 'What are the most effective highlighting and annotation strategies?',
    back: 'Basic highlighting is ineffective because it is passive and does not require processing. Effective alternatives: 1) Highlight sparingly and add marginal notes explaining why the passage matters, 2) Transform highlights into questions, 3) Connect highlighted ideas to other concepts, 4) Use highlights as retrieval cues - try to recall highlighted content before looking, 5) Create hierarchical annotations showing relationships. The goal is active processing, not marking text. If you cannot explain why something is highlighted, the highlighting is useless.',
    category: 'Personal Development',
    source: 'Study Skills Research',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['learning', 'highlighting', 'annotation']
  },
  {
    id: 'fc-learning-048',
    front: 'What is the testing effect and what types of tests maximize learning?',
    back: 'The testing effect shows retrieval practice strengthens memory. Tests that maximize learning: 1) Free recall (blank page summaries) - most effortful, most effective, 2) Short answer - requires production, not recognition, 3) Application problems - test transfer, 4) Elaborative questions - "why" and "how" questions, 5) Mixed/interleaved practice tests. Less effective: multiple choice (recognition only), matching (less effortful), or open-book tests. The key is making retrieval effortful while achievable. Feedback after testing enhances the benefit.',
    category: 'Personal Development',
    source: 'Make It Stick / Testing Research',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['learning', 'testing-effect', 'assessment']
  },
  {
    id: 'fc-learning-049',
    front: 'What is calibration in learning and how do you improve it?',
    back: 'Calibration is the accuracy of your judgments about your own learning - knowing what you know and what you do not. Poor calibration leads to overconfidence (thinking you know material you do not) or underconfidence (unnecessary extra study). Improve calibration by: frequent low-stakes testing to reveal actual knowledge, seeking feedback, comparing predictions to performance, reviewing errors carefully, practicing retrieval before consulting materials, and being suspicious of familiarity as evidence of knowledge.',
    category: 'Personal Development',
    source: 'Make It Stick / Metacognition Research',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['learning', 'calibration', 'metacognition']
  },
  {
    id: 'fc-learning-050',
    front: 'What is the principle of variability in practice and why does it help?',
    back: 'Variability means practicing skills under varied conditions - different contexts, examples, problem types, and settings. This feels harder than consistent practice but produces better learning because: 1) It builds flexible, adaptable knowledge, 2) It prevents overfitting to specific conditions, 3) It forces abstraction of underlying principles, 4) It improves transfer to new situations. Apply by: varying practice location, changing problem formats, using diverse examples, adjusting conditions, and mixing related skills. Consistency in practice leads to inflexibility in performance.',
    category: 'Personal Development',
    source: 'Make It Stick / Motor Learning Research',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['learning', 'variability', 'transfer']
  }
];
