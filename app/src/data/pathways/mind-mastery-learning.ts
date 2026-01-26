import type { PathwayLesson } from '@/types';

export const learningScienceLessons: PathwayLesson[] = [
  {
    id: 'mm-learn-001',
    title: 'How Memory Works - Encoding, Storage, Retrieval',
    type: 'concept',
    duration: 12,
    xpReward: 100,
    content: {
      overview: 'Understanding the three fundamental stages of memory formation is the foundation of effective learning.',
      mainContent: `**The Three Pillars of Memory**

Your brain doesn't work like a computer hard drive. Information doesn't simply get "saved" and retrieved intact. Memory is a dynamic, reconstructive process with three distinct phases that you can optimize.

**Stage 1: Encoding - Getting Information In**

Encoding is the process of converting sensory information into a form your brain can store. Think of it as translating experience into neural code.

*Types of Encoding:*
- **Visual encoding**: Processing images and spatial relationships
- **Acoustic encoding**: Processing sounds, especially language
- **Semantic encoding**: Processing meaning and concepts (most powerful for long-term retention)

The depth of processing matters enormously. Simply reading words (shallow processing) creates weaker memories than asking "What does this mean to me?" (deep processing).

**Stage 2: Storage - Keeping Information**

Storage involves maintaining encoded information over time. Your brain has multiple storage systems:

- **Sensory memory**: Lasts milliseconds to seconds (iconic and echoic memory)
- **Working memory**: Holds 4-7 items for about 20-30 seconds
- **Long-term memory**: Potentially unlimited capacity and duration

The transfer from working memory to long-term memory is where most learning fails. This transfer requires:
- Active rehearsal
- Meaningful connections
- Emotional significance
- Sleep consolidation

**Stage 3: Retrieval - Getting Information Out**

Retrieval is the process of accessing stored information. Here's the counterintuitive insight: **retrieval itself strengthens memory more than additional studying**.

*Retrieval cues matter:*
- Context-dependent memory: You remember better in the environment where you learned
- State-dependent memory: Your mental/physical state affects recall
- Mood-congruent memory: Emotional states influence what you remember

**The Memory Optimization Framework:**

1. **Encode deeply**: Ask "why" and "how" - connect new information to existing knowledge
2. **Store strategically**: Space your learning sessions, sleep well
3. **Retrieve frequently**: Test yourself rather than re-reading

Understanding this process reveals why passive reading is ineffective. You're optimizing encoding but neglecting retrieval - which is where the real memory strengthening happens.`,
      keyTakeaway: 'Memory has three stages: encoding (input), storage (maintenance), and retrieval (output). Retrieval practice strengthens memory more than repeated encoding.',
      actionItem: 'Take something you learned today and explain it aloud from memory. Notice the effort - that effort is building stronger neural pathways.',
    },
    quiz: {
      question: 'Which stage of memory is MOST important for strengthening long-term retention?',
      options: [
        'Encoding - getting information into the brain',
        'Storage - maintaining information over time',
        'Retrieval - actively recalling information',
        'All stages are equally important',
      ],
      correct: 2,
      explanation: 'Research shows that the act of retrieval (actively recalling information) strengthens memory traces more than additional encoding or passive review. This is known as the testing effect.',
    },
  },
  {
    id: 'mm-learn-002',
    title: 'The Forgetting Curve and Spaced Repetition',
    type: 'concept',
    duration: 10,
    xpReward: 100,
    content: {
      overview: 'Hermann Ebbinghaus discovered how rapidly we forget - and the solution that can make memories last a lifetime.',
      mainContent: `**The Brutal Truth About Forgetting**

In 1885, German psychologist Hermann Ebbinghaus memorized lists of nonsense syllables and tested himself at various intervals. His discovery was humbling:

- After 20 minutes: 42% forgotten
- After 1 hour: 56% forgotten
- After 1 day: 66% forgotten
- After 1 week: 75% forgotten
- After 1 month: 79% forgotten

This exponential decay is the **Forgetting Curve**. Without intervention, most of what you learn evaporates within days.

**Why We Forget**

Forgetting isn't a bug - it's a feature. Your brain constantly prunes unused neural connections to conserve energy and reduce noise. The principle: **use it or lose it**.

Memories fade because:
- **Decay**: Neural pathways weaken without activation
- **Interference**: New information disrupts old memories
- **Retrieval failure**: The memory exists but the pathway is inaccessible

**The Antidote: Spaced Repetition**

Here's the breakthrough: each time you successfully retrieve information, the forgetting curve flattens. The memory becomes more resistant to decay.

*Optimal spacing intervals (SM-2 algorithm):*
- First review: 1 day after learning
- Second review: 3 days after first review
- Third review: 7 days after second review
- Fourth review: 21 days after third review
- Fifth review: 2 months after fourth review

**The Spacing Effect in Practice**

Compare two students with equal study time:
- **Massed practice** (cramming): 4 hours the night before - quick learning, rapid forgetting
- **Spaced practice**: 1 hour across 4 days - slower learning, lasting retention

Research consistently shows spaced learners retain 200-400% more over time.

**Implementing Spaced Repetition**

1. **Use flashcard systems**: Anki, Quizlet, or paper cards with scheduled review
2. **Schedule review sessions**: Build review into your calendar
3. **Trust the process**: Early reviews feel "too easy" - that's correct
4. **Embrace the struggle**: Difficult retrieval (but successful) builds stronger memories

**The Sweet Spot**

Review at the moment just before you would forget. This creates "desirable difficulty" - the retrieval is challenging enough to strengthen the memory but not so delayed that the memory is lost entirely.`,
      keyTakeaway: 'We forget 75% of what we learn within a week. Spaced repetition - reviewing at increasing intervals - can make memories permanent.',
      actionItem: 'Set up a spaced repetition system (Anki, flashcards, or calendar reminders) for something you want to remember long-term.',
    },
    quiz: {
      question: 'According to the forgetting curve, approximately how much do we forget within ONE WEEK of learning?',
      options: [
        '25%',
        '50%',
        '75%',
        '90%',
      ],
      correct: 2,
      explanation: 'Ebbinghaus found that without review, we forget approximately 75% of learned material within one week. This makes spaced repetition essential for long-term retention.',
    },
  },
  {
    id: 'mm-learn-003',
    title: 'Active Recall vs Passive Review',
    type: 'concept',
    duration: 10,
    xpReward: 100,
    content: {
      overview: 'The difference between feeling like you know something and actually knowing it - and why most studying is a waste of time.',
      mainContent: `**The Illusion of Competence**

You read the chapter. You highlighted the key points. You feel confident. Then the test comes and... blank.

This is the **illusion of competence** - mistaking familiarity with mastery. Passive review creates recognition ("I've seen this before") but not recall ("I can reproduce this from memory").

**Passive Review: The Comfort Trap**

Common passive strategies:
- Re-reading notes or textbooks
- Highlighting and underlining
- Watching lecture videos repeatedly
- Looking at solved examples
- Copying notes in prettier formats

Why they feel effective:
- Low cognitive effort = pleasant experience
- Increased fluency = false confidence
- Exposure = sense of progress

Why they fail:
- No retrieval practice
- No feedback on actual knowledge
- No strengthening of memory pathways

**Active Recall: The Productive Struggle**

Active recall means generating answers from memory rather than recognizing them from a source.

*Active recall strategies:*
- **Self-testing**: Quiz yourself before checking answers
- **Blank page method**: Close the book and write everything you remember
- **Teach-back**: Explain concepts without notes
- **Flashcards**: Question on front, answer hidden on back
- **Cornell notes**: Cover the main column and recall from cues

**The Science is Clear**

In a landmark study, students were divided into groups:
- Group 1: Studied material 4 times (passive)
- Group 2: Studied once, tested 3 times (active recall)

Result: Group 2 remembered 50% more one week later - despite feeling less confident during study.

**Why Active Recall Works**

1. **Strengthens retrieval pathways**: The act of remembering builds the neural route to that memory
2. **Identifies knowledge gaps**: You discover what you don't know
3. **Improves organization**: You must structure knowledge to recall it
4. **Enhances transfer**: Actively recalled knowledge is more flexible

**Making the Switch**

The barrier is psychological. Active recall is harder and less pleasant. You feel stupid when you can't remember. But that struggle is the signal that learning is happening.

*Rule of thumb:* If studying feels comfortable, you're probably wasting time. Productive learning should feel like a workout - difficult but achievable.`,
      keyTakeaway: 'Passive review (re-reading, highlighting) creates an illusion of learning. Active recall (self-testing, explaining from memory) produces 50%+ better retention.',
      actionItem: 'Replace your next re-reading session with active recall: close the book and write down everything you remember, then check what you missed.',
    },
    quiz: {
      question: 'Why do passive study methods (re-reading, highlighting) feel effective even when they are not?',
      options: [
        'They actually ARE effective for most people',
        'They create familiarity that we mistake for true knowledge',
        'They require too much mental effort',
        'They work well for short-term but not long-term memory',
      ],
      correct: 1,
      explanation: 'Passive methods create an "illusion of competence" - increased familiarity and fluency that we mistake for actual learning. We recognize the material but cannot reproduce it from memory.',
    },
  },
  {
    id: 'mm-learn-004',
    title: 'Interleaving - Mixing Topics for Better Learning',
    type: 'concept',
    duration: 10,
    xpReward: 100,
    content: {
      overview: 'Counterintuitively, mixing different topics during practice leads to better learning than focusing on one topic at a time.',
      mainContent: `**The Counterintuitive Truth**

Traditional advice says: master one topic before moving to the next. Practice the same type of problem repeatedly until it's automatic. This feels right.

But it's wrong.

**Blocked vs Interleaved Practice**

- **Blocked practice**: AAAA BBBB CCCC (practice one skill, then move to the next)
- **Interleaved practice**: ABCABCABCA (mix different skills within the same session)

*Research example:*
Baseball players were divided into two groups:
- Group 1: 15 fastballs, then 15 curveballs, then 15 changeups (blocked)
- Group 2: Random mix of all three pitch types (interleaved)

During practice, Group 1 performed better. But in the actual game? Group 2 hit significantly more pitches.

**Why Blocked Practice Deceives Us**

Blocked practice feels more productive because:
- You quickly get "in the groove"
- Performance improves visibly within the session
- Less mental effort required once pattern is established
- Immediate feedback is positive

But this fluency is temporary. You're learning to repeat a pattern, not to identify and select the right approach.

**Why Interleaving Works**

1. **Discrimination learning**: You learn to tell problem types apart
2. **Strategy selection**: You practice choosing the right approach, not just executing it
3. **Deeper processing**: Each switch requires reloading the relevant knowledge
4. **Better transfer**: Skills become more flexible and context-independent

**The Interleaving Principle Applied**

*Math*: Don't do 20 problems of the same type. Mix addition, subtraction, multiplication in the same session.

*Language learning*: Don't drill one verb tense for an hour. Mix past, present, future within the same practice.

*Music*: Don't play the same piece 10 times. Practice segments of different pieces in rotation.

*Sports*: Don't practice one shot type. Randomly vary shots within the same session.

**The Performance-Learning Paradox**

Here's what makes this hard to accept: **interleaving hurts performance during practice but helps learning for the long term**.

You will feel slower, make more errors, and feel less competent during interleaved practice. But weeks later, you'll perform dramatically better than if you had blocked your practice.

Trust the process, not your feelings.`,
      keyTakeaway: 'Mixing different topics during practice (interleaving) feels harder but produces 43% better long-term retention than practicing one topic at a time (blocking).',
      actionItem: 'In your next study session, deliberately mix topics instead of finishing one before starting another. Notice how it feels harder - that difficulty is the learning.',
    },
    quiz: {
      question: 'During practice, interleaved learning typically:',
      options: [
        'Feels easier and produces better results',
        'Feels harder and produces worse results',
        'Feels harder but produces better long-term results',
        'Feels easier but produces worse long-term results',
      ],
      correct: 2,
      explanation: 'Interleaved practice creates a "desirable difficulty" - it feels harder and performance during practice is lower, but long-term retention and transfer are significantly better.',
    },
  },
  {
    id: 'mm-learn-005',
    title: 'Elaborative Interrogation - The Power of Asking Why',
    type: 'concept',
    duration: 10,
    xpReward: 100,
    content: {
      overview: 'Simply asking "why" and "how" transforms shallow memorization into deep understanding and lasting memory.',
      mainContent: `**The Question That Changes Everything**

Children instinctively understand something adults forget: the power of "why?"

Elaborative interrogation is the deliberate practice of asking explanatory questions about facts you're learning. It's deceptively simple and remarkably powerful.

**The Technique**

When you encounter a fact, don't just accept it. Ask:
- "Why is this true?"
- "How does this work?"
- "Why does this make sense?"
- "How does this connect to what I already know?"

*Example:*
Fact: "The heart pumps blood through the body."

Passive learner: "Okay, the heart pumps blood." (moves on)

Elaborative learner: "Why does the body need blood pumped? What would happen if it stopped? How does the heart create the pumping motion? Why is it located in the chest? How does it know how fast to pump?"

**Why This Works**

Elaborative interrogation forces **deep processing**:

1. **Activates prior knowledge**: You search your existing mental schemas for connections
2. **Creates meaningful associations**: Facts get linked to larger understanding
3. **Reveals knowledge gaps**: You discover what you don't understand
4. **Generates multiple retrieval routes**: More connections = more ways to access the memory

**The Research**

Studies show elaborative interrogation improves memory by 30-100% compared to simply reading or re-reading. The effect is strongest when:
- You generate your own explanations (not given to you)
- You have some relevant background knowledge to connect to
- You push beyond your first explanation to deeper understanding

**Applying Elaborative Interrogation**

*For reading*: Pause after each key fact and ask "Why is this true?" before continuing.

*For lectures*: Write "Why?" in the margin next to key points. Answer during review.

*For studying*: Transform statements into why-questions on flashcards.

*For meetings*: Ask "What's the reasoning behind this?" before accepting decisions.

**The Explanation Effect**

There's a related phenomenon: generating explanations (even wrong ones that you later correct) produces better learning than receiving correct explanations from others.

Your brain learns more from struggling to explain than from being told the answer. The effort of construction builds stronger neural pathways than the ease of reception.

**Making It Habitual**

The goal is to make "why?" and "how?" your default response to new information. This transforms every learning experience into active engagement rather than passive reception.`,
      keyTakeaway: 'Asking "why" and "how" about facts you learn forces deep processing and creates 30-100% better retention than passive reading.',
      actionItem: 'Read an article today and stop after every key claim to ask "Why is this true?" Generate your own explanation before continuing.',
    },
    quiz: {
      question: 'What makes elaborative interrogation effective for learning?',
      options: [
        'It helps you read faster',
        'It forces deep processing by connecting new facts to existing knowledge',
        'It reduces the amount of material you need to learn',
        'It replaces the need for practice',
      ],
      correct: 1,
      explanation: 'Elaborative interrogation works by forcing deep processing - asking "why" activates your existing knowledge and creates meaningful connections, making the new information much more memorable.',
    },
  },
  {
    id: 'mm-learn-006',
    title: 'The Testing Effect - Retrieval Practice',
    type: 'concept',
    duration: 12,
    xpReward: 100,
    content: {
      overview: 'Tests are not just assessments - they are the most powerful learning tool available. The act of retrieval transforms memory.',
      mainContent: `**Reframing Tests**

Most people see tests as measurement - a way to assess what you've learned. This misses the bigger picture.

Tests are not just assessments. They are interventions. The act of taking a test changes what you know.

**The Testing Effect Defined**

The testing effect (also called retrieval practice) is the finding that retrieving information from memory strengthens that memory more than additional study does.

*Landmark study (Roediger & Karpicke, 2006):*
- Group A: Study, Study, Study, Study (all study time)
- Group B: Study, Test, Test, Test (one study, three tests)

Results after one week:
- Group A: 40% retention
- Group B: 80% retention

Same total time. Dramatically different outcomes. Testing doubled retention.

**Why Retrieval Strengthens Memory**

1. **Reconsolidation**: Retrieving a memory returns it to a labile state where it can be strengthened
2. **Path strengthening**: Each successful retrieval reinforces the neural pathway to that memory
3. **Elaboration**: Retrieval often triggers related memories, enriching the network
4. **Metacognition**: Tests reveal what you actually know vs. think you know

**The Retrieval Effort Hypothesis**

Not all retrieval is equal. Harder retrieval produces stronger learning.

- Easy retrieval (immediately after learning): Small benefit
- Difficult retrieval (after delay, without cues): Large benefit

This means you should test yourself:
- After a delay (not immediately)
- Without hints or cues
- Even when it feels uncomfortably hard

**Practical Applications**

*Low-stakes testing:*
- Flashcards (physical or apps like Anki)
- Practice problems
- Writing summaries from memory
- Self-quizzing before opening notes

*Pre-testing:*
Surprisingly, testing yourself BEFORE learning material (and failing) improves later learning of that material. The failed retrieval primes your brain for the upcoming information.

*Test-enhanced learning:*
Take practice tests even when not required. Create your own test questions. Form study groups that quiz each other.

**Overcoming Test Anxiety**

Many avoid self-testing because it's uncomfortable to fail. Reframe this:
- Wrong answers during practice are valuable data, not failures
- The discomfort of struggling is the signal that learning is occurring
- Low-stakes testing (no consequences) builds skills for high-stakes testing

**The Ultimate Implication**

If you have limited time, testing yourself is more valuable than additional studying. This runs counter to intuition but is one of the most robust findings in learning science.`,
      keyTakeaway: 'Testing yourself retrieves and strengthens memories far more than restudying. Testing can double retention compared to equivalent study time.',
      actionItem: 'Before your next study session, quiz yourself on the previous material first. Track how much more you remember after adding retrieval practice to your routine.',
    },
    quiz: {
      question: 'In the Roediger & Karpicke study, students who spent 75% of their time testing (vs. studying) remembered how much more after one week?',
      options: [
        '10% more',
        '25% more',
        '50% more (doubled)',
        '100% more (doubled)',
      ],
      correct: 3,
      explanation: 'Students who spent most of their time on retrieval practice (testing) remembered approximately twice as much (80% vs 40%) after one week, despite spending the same total amount of time.',
    },
  },
  {
    id: 'mm-learn-007',
    title: 'Desirable Difficulties - Struggle Is Good',
    type: 'concept',
    duration: 10,
    xpReward: 100,
    content: {
      overview: 'Learning that feels easy is often ineffective. Deliberate difficulty during practice leads to stronger, more durable learning.',
      mainContent: `**The Paradox of Easy Learning**

We naturally seek the path of least resistance. Smooth, easy learning feels productive. Difficult, frustrating learning feels like failure.

But learning science reveals a paradox: **conditions that make learning harder often make it better**.

**Desirable Difficulties Defined**

Coined by psychologist Robert Bjork, "desirable difficulties" are obstacles that slow down learning in the short term but enhance long-term retention and transfer.

*The key word is "desirable":*
- The difficulty must be something the learner CAN overcome
- It must require effortful processing, not just confusion
- It must be appropriate to the learner's current level

**Types of Desirable Difficulties**

1. **Spacing** (vs. massing)
Distributed practice over time is harder than cramming but produces lasting learning.

2. **Interleaving** (vs. blocking)
Mixing topics creates confusion during practice but builds flexible knowledge.

3. **Testing** (vs. restudying)
Retrieval is harder than review but strengthens memory traces.

4. **Generation** (vs. reception)
Producing answers is harder than reading them but creates deeper encoding.

5. **Varying conditions** (vs. consistency)
Changing contexts during practice is disorienting but improves transfer.

**Why Difficulty Enhances Learning**

- **Deeper processing**: Struggle forces you to think more deeply
- **Multiple pathways**: Varied conditions create multiple memory routes
- **Discrimination**: Difficulty helps you distinguish what you know from what you don't
- **Consolidation**: Effort during learning triggers stronger memory formation

**The Performance-Learning Distinction**

This is crucial: **Performance during learning is NOT the same as learning itself**.

- High performance during practice often means low learning (too easy)
- Low performance during practice often means high learning (productive struggle)

Students and teachers consistently mistake good performance for good learning. This leads to choosing ineffective but comfortable strategies.

**Finding the Sweet Spot**

Not all difficulty is desirable. The difficulty must be:
- **Achievable**: You can succeed with effort
- **Relevant**: Related to the skill you're building
- **Appropriately sized**: Challenging but not overwhelming

*The 85% rule:* Research suggests optimal learning occurs when you succeed about 85% of the time - enough challenge to require effort, enough success to maintain motivation.

**Embracing the Struggle**

Reframe your relationship with difficulty:
- Confusion is the beginning of understanding
- Errors during practice are essential feedback
- The feeling of effort IS the feeling of learning
- Easy practice is often wasted practice`,
      keyTakeaway: 'Difficulty during learning is often a feature, not a bug. Spacing, interleaving, testing, and generation feel harder but produce stronger, more durable learning.',
      actionItem: 'Identify one way you currently make learning "easier" for yourself (e.g., studying in the same place, grouping similar problems). Deliberately add difficulty and observe the results.',
    },
    quiz: {
      question: 'What makes a difficulty "desirable" for learning?',
      options: [
        'It should be as hard as possible to maximize learning',
        'It should be easy enough to always succeed',
        'It should be achievable with effort and trigger deeper processing',
        'It should create frustration to build mental toughness',
      ],
      correct: 2,
      explanation: 'A desirable difficulty is one that can be overcome with effort and that triggers deeper cognitive processing. It must be appropriately challenging - neither too easy nor impossibly hard.',
    },
  },
  {
    id: 'mm-learn-008',
    title: 'Sleep and Memory Consolidation',
    type: 'concept',
    duration: 10,
    xpReward: 100,
    content: {
      overview: 'Sleep is not passive rest - it is an active memory-processing factory that makes learning permanent.',
      mainContent: `**Sleep: The Hidden Phase of Learning**

You might think learning stops when you close the book. It doesn't. The most critical phase of memory formation happens while you sleep.

**What Happens During Sleep**

Sleep has distinct stages, each serving learning:

*NREM (Non-Rapid Eye Movement) Sleep:*
- **Stage 1-2**: Light sleep, sleep spindles appear
- **Stage 3-4 (Slow-wave sleep)**: Deep sleep, memory consolidation peaks

*REM (Rapid Eye Movement) Sleep:*
- Dreaming occurs
- Procedural and emotional memories are processed
- Creative connections are formed

**The Consolidation Process**

During sleep, your brain:

1. **Replays**: Hippocampus reactivates the day's learning at 10-20x speed
2. **Transfers**: Memories move from hippocampus (temporary) to neocortex (permanent)
3. **Strengthens**: Important neural pathways are reinforced
4. **Prunes**: Weak or irrelevant connections are eliminated
5. **Integrates**: New memories are linked to existing knowledge structures

**Sleep Deprivation: A Learning Catastrophe**

Research shows sleep-deprived learners have:
- 40% reduction in ability to form new memories
- Impaired consolidation of the previous day's learning
- Decreased transfer of knowledge to new situations
- Reduced creative problem-solving ability

One study found that students who pulled an all-nighter before an exam remembered 40% less than those who slept normally - even after a recovery night.

**Sleep Timing and Learning**

*Learning before sleep:*
Material studied in the 1-2 hours before sleep shows enhanced consolidation. The brain seems to prioritize recent experiences.

*Sleep after learning:*
Even a 90-minute nap significantly improves retention compared to staying awake. Daytime naps that include REM sleep are particularly beneficial.

*The first night effect:*
The first night of sleep after learning is especially important. Miss it, and some consolidation benefits are lost permanently.

**Optimizing Sleep for Learning**

1. **Prioritize sleep quantity**: Aim for 7-9 hours for adults
2. **Study before bed**: Review important material in the evening
3. **Avoid all-nighters**: They destroy more learning than they create
4. **Use strategic naps**: 20-minute naps for alertness, 90-minute naps for memory
5. **Maintain consistency**: Regular sleep schedule supports regular consolidation

**The Sleep-Learning Connection**

Sleep is not optional for learners - it's a non-negotiable phase of the learning process. Cutting sleep to study more is like skipping practice to save time - it guarantees worse outcomes.`,
      keyTakeaway: 'Sleep is when memories are consolidated and made permanent. Sleep deprivation reduces learning by 40% - sleeping is not wasted study time.',
      actionItem: 'For the next week, prioritize 7-8 hours of sleep and review important material in the hour before bed. Notice the difference in retention.',
    },
    quiz: {
      question: 'During which phase of sleep does memory consolidation primarily occur?',
      options: [
        'Only during REM sleep (dreaming)',
        'Only during light sleep (Stage 1-2)',
        'Primarily during slow-wave deep sleep (Stage 3-4), with different processing in REM',
        'Consolidation does not occur during sleep',
      ],
      correct: 2,
      explanation: 'Memory consolidation primarily occurs during slow-wave (deep) sleep, where the hippocampus replays and transfers memories to the neocortex. REM sleep also contributes, especially for procedural and emotional memories.',
    },
  },
  {
    id: 'mm-learn-009',
    title: 'The Feynman Learning Method',
    type: 'concept',
    duration: 10,
    xpReward: 100,
    content: {
      overview: 'Nobel laureate Richard Feynman developed a deceptively simple technique: if you cannot explain something simply, you do not understand it.',
      mainContent: `**The Great Explainer's Secret**

Richard Feynman was a Nobel Prize-winning physicist known not just for his genius, but for his ability to explain complex concepts simply. His method has become a cornerstone of effective learning.

**The Feynman Technique: 4 Steps**

**Step 1: Choose a Concept**
Select something you want to understand deeply. Write the concept at the top of a blank page.

**Step 2: Teach It to a Child**
Explain the concept as if teaching a 12-year-old who has no prior knowledge. Use:
- Simple language (no jargon)
- Short sentences
- Concrete examples
- Analogies to familiar things

Write out your full explanation.

**Step 3: Identify Gaps**
Review your explanation. Where did you:
- Use vague terms?
- Skip steps?
- Rely on jargon?
- Feel uncertain?

These gaps reveal what you don't actually understand. Return to the source material and learn those specific areas.

**Step 4: Simplify and Use Analogies**
Refine your explanation. Make it simpler. Create analogies that connect the concept to everyday experience.

Repeat until you can explain the concept fluently and simply.

**Why This Works**

1. **Exposes illusion of knowledge**: You quickly discover the gaps between recognition and true understanding
2. **Forces active processing**: You must reconstruct knowledge, not just recognize it
3. **Creates multiple representations**: Simplification and analogy create diverse memory pathways
4. **Builds transferable understanding**: Simple explanations reveal core principles that apply elsewhere

**The Jargon Test**

Jargon is often a mask for lack of understanding. If you can only explain something using technical terms, you may not truly understand it.

*Feynman's principle:* "If you can't explain it simply, you don't understand it well enough."

**Practical Applications**

*For students:*
After each lecture or chapter, close your notes and explain the key concepts as if teaching a friend. Where you stumble = what to review.

*For professionals:*
Before presenting complex ideas, use the Feynman technique. If you can't explain it to a non-expert, you may not understand it well enough to convince experts.

*For problem-solving:*
When stuck, try explaining the problem and your understanding aloud. The gaps you discover often contain the solution.

**The Explanation Effect Bonus**

Research shows that simply preparing to teach (even without actually teaching) improves learning. Your brain processes information differently when you expect to explain it to others.

**Feynman's Legacy**

The Feynman technique works because it treats understanding as an active construction project rather than passive absorption. You haven't learned something until you can build it from scratch with simple materials.`,
      keyTakeaway: 'The Feynman Technique: explain concepts simply as if teaching a child. Where you struggle to simplify reveals what you don\'t truly understand.',
      actionItem: 'Choose one concept you think you understand well. Explain it in writing as if teaching a 12-year-old. Note where you stumble and return to learn those gaps.',
    },
    quiz: {
      question: 'According to the Feynman Technique, if you cannot explain a concept simply, what does that indicate?',
      options: [
        'The concept is too advanced for simple explanation',
        'You need more technical vocabulary',
        'You do not truly understand the concept',
        'Simple explanations are less accurate',
      ],
      correct: 2,
      explanation: 'Feynman believed that inability to explain something simply reveals gaps in understanding. True comprehension allows you to express ideas in accessible terms.',
    },
  },
  {
    id: 'mm-learn-010',
    title: 'Chunking - Breaking Down Complex Information',
    type: 'concept',
    duration: 10,
    xpReward: 100,
    content: {
      overview: 'Your working memory is severely limited, but chunking can dramatically expand what you can hold and manipulate mentally.',
      mainContent: `**The Magic Number**

In 1956, psychologist George Miller published "The Magical Number Seven, Plus or Minus Two." His finding: working memory can hold about 7 (now revised to 4-5) items at once.

But here's the key insight: **what counts as an "item" is flexible**.

**What Is Chunking?**

Chunking is the process of combining individual pieces of information into larger, meaningful units. Each chunk then counts as just one item in working memory.

*Example:*
Phone number: 8005551234
- Unchunked: 10 items (exceeds working memory)
- Chunked: 800-555-1234 (3 chunks, easily remembered)

**How Chunking Works**

Chunking leverages your existing knowledge to compress information:

1. **Pattern recognition**: You identify familiar patterns in new information
2. **Meaningful grouping**: You organize items by meaning, category, or relationship
3. **Hierarchical structure**: You nest smaller chunks within larger ones
4. **Schema activation**: You fit new information into existing mental frameworks

*Chess masters don't have better memory than novices - they have better chunks.* A master sees a board position as 5-6 meaningful chunks where a novice sees 20+ individual pieces.

**Building Chunks**

**Step 1: Focus**
Concentrated attention is required. Divided attention prevents chunk formation.

**Step 2: Understand**
You must grasp the meaning. Memorizing without understanding creates weak, isolated chunks.

**Step 3: Practice**
Repeated use strengthens chunks until they become automatic. This frees working memory for new learning.

**Step 4: Context**
Learn when and how to use each chunk. Chunks without context are less useful.

**Chunking Strategies**

*For learning:*
- Break complex material into meaningful sections
- Master each section before connecting them
- Look for patterns and structures
- Connect new chunks to existing knowledge

*For memory:*
- Group random items by category
- Create acronyms (ROY G BIV for colors)
- Use stories to link unrelated items
- Build hierarchies (topic > subtopic > details)

**The Expert Advantage**

Expertise is largely a matter of superior chunks. Experts have:
- More chunks in their domain
- Larger chunks (more information per unit)
- Better organized chunks
- More connections between chunks

This is why experts can hold and manipulate more information than novices - not because of better brains, but because of better chunking.

**Chunking for Learning**

When faced with complex material:
1. Identify the key components
2. Understand each component separately
3. Connect components into coherent chunks
4. Practice until chunks become automatic
5. Build higher-order chunks that combine lower-level ones`,
      keyTakeaway: 'Working memory holds only 4-5 items, but chunking - combining information into meaningful units - dramatically extends this capacity and forms the basis of expertise.',
      actionItem: 'Take something complex you are learning and consciously break it into chunks. Name each chunk and practice until they become automatic before combining them.',
    },
    quiz: {
      question: 'How do chess masters remember board positions better than novices?',
      options: [
        'They have naturally better memory',
        'They have organized pieces into meaningful chunks through expertise',
        'They use memory palace techniques',
        'They study more hours per day',
      ],
      correct: 1,
      explanation: 'Chess masters see meaningful patterns (chunks) where novices see individual pieces. This chunking, developed through practice, allows them to hold more information in working memory.',
    },
  },
  {
    id: 'mm-learn-011',
    title: 'Transfer of Learning - Applying Knowledge',
    type: 'concept',
    duration: 12,
    xpReward: 100,
    content: {
      overview: 'The ultimate test of learning is not remembering but transferring knowledge to new situations. This is both rare and trainable.',
      mainContent: `**The Transfer Problem**

You've learned something thoroughly in one context. Now you face a similar problem in a different context. Can you apply what you learned?

Often, the answer is no. This is the **transfer problem** - learning that stays locked to its original context.

**Types of Transfer**

*Near transfer:*
Applying learning to very similar situations.
- Learning to drive one car, driving another similar car
- Usually happens naturally

*Far transfer:*
Applying learning to superficially different situations.
- Learning physics and applying principles to architecture
- Much harder, often fails

**Why Transfer Fails**

1. **Context dependency**: Memory is tied to the context in which it was learned
2. **Surface focus**: Learners remember surface features, not underlying principles
3. **Inert knowledge**: Knowledge exists but isn't activated in relevant situations
4. **Pattern matching failure**: New problems don't "look like" old ones

**Enabling Transfer**

**Strategy 1: Learn underlying principles**
Focus on the "why" and "how," not just the "what." Principles transfer; procedures often don't.

*Example:* Don't just learn that a marketing campaign worked. Learn the psychological principle (scarcity, social proof) that made it work.

**Strategy 2: Multiple examples**
Study the same principle in diverse contexts. The brain extracts the common pattern.

*Research shows:* Three varied examples of a principle produce more transfer than ten examples from the same context.

**Strategy 3: Comparison and contrast**
Actively compare cases to identify what's similar (transferable) and what's different (context-specific).

Ask: "What does this problem have in common with problems I've solved before?"

**Strategy 4: Practice in varied conditions**
Train in multiple contexts, with multiple problem types. This builds flexible rather than rigid knowledge.

**Strategy 5: Metacognitive strategies**
Consciously ask: "Where else could this apply?" "What other problems share this structure?"

**The Analogical Reasoning Path**

Transfer often works through analogy:
1. Recognize that a new problem shares structure with an old one
2. Map the elements from old to new
3. Generate a solution based on the mapping
4. Verify that the solution works in the new context

Training analogical reasoning directly improves transfer.

**The Knowledge Integration Challenge**

Learning often stays compartmentalized. History knowledge doesn't connect to geography. Work skills don't apply at home.

Integration requires:
- Deliberately seeking connections across domains
- Building concept maps that cross subjects
- Teaching and explaining across contexts
- Looking for the same patterns in different clothing

**The Ultimate Goal**

True learning is not remembering what you learned in the context where you learned it. True learning is recognizing when past knowledge is relevant and applying it to new challenges.

This requires effort and intention - transfer doesn't happen automatically.`,
      keyTakeaway: 'Transfer - applying knowledge to new situations - is the true goal of learning but often fails. Enable it by learning principles, using varied examples, and actively seeking connections.',
      actionItem: 'Take a concept you learned in one domain and deliberately identify three situations in completely different areas where the same principle applies.',
    },
    quiz: {
      question: 'What is the most effective way to enable far transfer of learning?',
      options: [
        'Practice the same type of problem repeatedly until mastery',
        'Learn the underlying principle through multiple varied examples',
        'Focus on memorizing specific procedures',
        'Study in the same context where you will be tested',
      ],
      correct: 1,
      explanation: 'Far transfer is enabled by learning underlying principles (not just procedures) through multiple varied examples. This helps the brain extract what is transferable from what is context-specific.',
    },
  },
  {
    id: 'mm-learn-012',
    title: 'Metacognition - Learning How to Learn',
    type: 'concept',
    duration: 12,
    xpReward: 100,
    content: {
      overview: 'The highest skill in learning is thinking about your thinking. Metacognition is the master key that unlocks all other learning strategies.',
      mainContent: `**The Meta-Skill**

Metacognition is "thinking about thinking" - awareness and control of your own cognitive processes. It's what separates effective learners from ineffective ones.

Two components:
- **Metacognitive knowledge**: Understanding how learning works
- **Metacognitive regulation**: Controlling and adjusting your learning processes

**Why Metacognition Matters**

Research consistently shows that metacognitive skills predict learning success better than IQ. Students trained in metacognition outperform untrained students by 20-25%.

Poor learners:
- Overestimate what they know
- Use ineffective strategies (re-reading)
- Don't adapt when confused
- Can't identify what they don't know

Skilled learners:
- Accurately assess their knowledge
- Use effective strategies (testing, spacing)
- Notice and address confusion
- Know what they know and don't know

**The Three Phases of Metacognitive Regulation**

**Phase 1: Planning (Before Learning)**
- What are my goals?
- What do I already know about this?
- What strategy should I use?
- How much time do I need?
- What resources are available?

**Phase 2: Monitoring (During Learning)**
- Do I understand this?
- Am I making progress toward my goal?
- Should I slow down or speed up?
- Is this strategy working?
- Where am I confused?

**Phase 3: Evaluating (After Learning)**
- Did I achieve my goal?
- What worked and what didn't?
- What would I do differently next time?
- What do I still not understand?
- How well can I apply this?

**Calibration: The Critical Skill**

Calibration is the match between your confidence and your actual knowledge. Most people are overconfident - they think they know more than they do.

*Improving calibration:*
- Test yourself before checking answers
- Predict your test scores, then compare
- Seek feedback on your predictions
- Track your accuracy over time

**Metacognitive Strategies**

*Self-questioning:*
Pause regularly and ask: "Do I understand this? Could I explain it? What's still unclear?"

*Think-aloud:*
Verbalize your thinking process. This makes invisible cognition visible and identifiable.

*Concept mapping:*
Externalize your understanding in diagrams. Gaps become obvious.

*Error analysis:*
When you make mistakes, analyze them. What led to the error? How can you prevent it?

*Learning journals:*
Reflect on your learning process. What strategies worked? What was difficult?

**The Ultimate Metacognitive Question**

After any learning session, ask yourself: "How would I explain this to someone else? Where would I get stuck?"

Your answer reveals both what you know and what you need to learn next.

**Developing Metacognition**

Like any skill, metacognition improves with practice:
1. Slow down and reflect during learning (not just after)
2. Make predictions and check them
3. Track what strategies work for you
4. Ask "why" about your own mental processes
5. Teach others and notice where you struggle

Metacognition is the skill that improves all other skills. It is learning how to learn - the master key that unlocks your full potential.`,
      keyTakeaway: 'Metacognition - thinking about thinking - is the master skill of learning. It enables you to choose effective strategies, monitor progress, and accurately assess what you know.',
      actionItem: 'Before your next learning session, write down your goal, your strategy, and your prediction for how well you will do. After, evaluate how accurate you were and what you would change.',
    },
    quiz: {
      question: 'What is "calibration" in the context of metacognition?',
      options: [
        'Setting appropriate learning goals',
        'The match between your confidence and your actual knowledge',
        'Choosing the right learning strategy',
        'Scheduling study sessions appropriately',
      ],
      correct: 1,
      explanation: 'Calibration is how well your confidence matches your actual knowledge. Most people are overconfident. Good calibration - accurate self-assessment - is a key metacognitive skill.',
    },
  },
];

export default learningScienceLessons;
