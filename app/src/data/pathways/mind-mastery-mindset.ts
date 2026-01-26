import type { Lesson } from '@/types';

export const mindsetLessons: Lesson[] = [
  {
    id: 'mm-mindset-001',
    title: 'Fixed vs Growth Mindset',
    type: 'concept',
    duration: 12,
    xpReward: 100,
    content: {
      overview: 'Discover Carol Dweck\'s groundbreaking research on how your beliefs about ability shape your potential for growth and success.',
      mainContent: `**The Two Mindsets That Shape Your Life**

Stanford psychologist Carol Dweck spent decades studying why some people reach their potential while others don't. Her discovery was revolutionary: the difference often comes down to a single belief about the nature of ability.

**The Fixed Mindset**

People with a fixed mindset believe their qualities are carved in stone. Intelligence, talent, and ability are fixed traits that you either have or don't. This creates an urgency to prove yourself over and over.

Characteristics of a fixed mindset:
- Avoiding challenges that might expose inadequacy
- Giving up easily when obstacles appear
- Viewing effort as pointless if you lack natural talent
- Ignoring useful criticism or feedback
- Feeling threatened by others' success

The fixed mindset creates a constant need for validation. Every situation becomes a test: Will I look smart or dumb? Will I be accepted or rejected? Will I win or lose?

**The Growth Mindset**

People with a growth mindset believe abilities can be developed through dedication and hard work. Brains and talent are just starting points. This view creates a love of learning and resilience essential for accomplishment.

Characteristics of a growth mindset:
- Embracing challenges as opportunities to grow
- Persisting through setbacks and obstacles
- Seeing effort as the path to mastery
- Learning from criticism and feedback
- Finding inspiration in others' success

**The Neuroscience Behind It**

Brain research supports the growth mindset. Neuroplasticity shows that the brain forms new neural connections throughout life. When you learn something new, your brain literally changes. Intelligence isn't fixed - it's like a muscle that grows with exercise.

**Why This Matters**

Your mindset isn't just a personality trait - it's a choice you make moment to moment. In any situation, you can choose to see failure as evidence of inadequacy or as information for growth. The growth mindset doesn't mean everyone is the same or can achieve anything. It means that a person's true potential is unknown and unknowable.

**The Power of "Not Yet"**

Dweck found that replacing "I failed" with "I haven't succeeded yet" fundamentally changes how people approach challenges. "Not yet" acknowledges the current state while leaving room for future growth.`,
      keyTakeaway: 'Your beliefs about whether abilities are fixed or developable profoundly shape your motivation, effort, and ultimate success.',
      actionItem: 'Identify one area where you\'ve had a fixed mindset. Reframe it with "I\'m not good at this yet" and list three specific actions to improve.',
    },
    quiz: [
      {
        id: 'mm-mindset-001-q1',
        question: 'According to Carol Dweck, what is the primary difference between fixed and growth mindsets?',
        options: [
          'Fixed mindset people are less intelligent than growth mindset people',
          'Fixed mindset believes abilities are unchangeable; growth mindset believes abilities can be developed',
          'Growth mindset people never experience failure',
          'Fixed mindset is better for simple tasks while growth mindset is better for complex ones'
        ],
        correctAnswer: 1,
        explanation: 'The core distinction is the belief about whether abilities are fixed traits or can be developed through effort and learning.'
      },
      {
        id: 'mm-mindset-001-q2',
        question: 'How does a person with a growth mindset typically respond to failure?',
        options: [
          'They blame external circumstances',
          'They give up and try something easier',
          'They see it as information for learning and growth',
          'They hide the failure from others'
        ],
        correctAnswer: 2,
        explanation: 'Growth mindset individuals view failures as learning opportunities rather than as evidence of inadequacy.'
      }
    ]
  },
  {
    id: 'mm-mindset-002',
    title: 'The Power of "Yet" - Reframing Failure',
    type: 'concept',
    duration: 10,
    xpReward: 100,
    content: {
      overview: 'Learn how a single three-letter word can transform your relationship with failure and unlock persistent effort.',
      mainContent: `**The Tyranny of Now vs. The Power of Yet**

Carol Dweck discovered something remarkable while studying how students cope with difficulty. When faced with problems slightly too hard for them, some students had deeply troubling reactions. They felt their intelligence was being judged and they had failed. They were gripped by the "tyranny of now."

But other students had a surprisingly different reaction. They said things like "I love a challenge" or "I was hoping this would be informative." They understood that their abilities could be developed. They had what Dweck calls "the power of yet."

**The Science of Reframing**

Research shows that how we interpret events fundamentally changes our brain's response. When we view a setback as "I failed," the brain triggers a threat response - stress hormones flood our system, narrowing our thinking and making us defensive.

When we reframe the same setback as "I haven't succeeded yet," the brain stays in learning mode. We remain curious, open, and able to process information more effectively.

**The "Yet" Framework in Practice**

Transform fixed statements into growth statements:

- "I can't do math" becomes "I can't do this math yet"
- "I'm not a leader" becomes "I'm not leading effectively yet"
- "I don't understand" becomes "I don't understand yet"
- "This is too hard" becomes "This is too hard for me right now"
- "I made a mistake" becomes "I learned something valuable"

**Failure as Feedback**

The most successful people in history share a common trait: they viewed failure as feedback, not as an identity. Thomas Edison reportedly said about his lightbulb experiments: "I have not failed. I've just found 10,000 ways that won't work."

This isn't naive optimism. It's a realistic assessment that failure contains information. Every "no" narrows down what might work. Every mistake reveals something about the problem you didn't see before.

**Building Your "Yet" Muscle**

Reframing takes practice because our brains naturally gravitate toward fixed interpretations. They're faster and require less cognitive effort. But with deliberate practice, growth-oriented thinking becomes automatic.

Start by catching yourself when you make fixed statements. Pause. Add "yet" or reframe the statement entirely. Over time, this becomes your default mode of processing setbacks.

**The Compound Effect of "Yet"**

Each time you reframe a failure, you're not just changing that moment - you're building a mental habit. People who consistently use growth framing attempt more challenges, persist longer, and ultimately achieve more. The word "yet" is a promise to yourself that the story isn't over.`,
      keyTakeaway: 'Adding "yet" to statements of inability transforms them from verdicts into pathways, keeping the door open for growth and learning.',
      actionItem: 'For one week, keep a "Yet Journal." Each time you catch yourself thinking "I can\'t do X," write down the reframed version: "I can\'t do X yet, and here\'s my next step to learn."',
    },
    quiz: [
      {
        id: 'mm-mindset-002-q1',
        question: 'What is the "tyranny of now" that Carol Dweck describes?',
        options: [
          'The pressure to complete tasks immediately',
          'Being gripped by the feeling that current failure is permanent and defining',
          'The modern addiction to instant gratification',
          'Having too many tasks to complete at once'
        ],
        correctAnswer: 1,
        explanation: 'The tyranny of now refers to the fixed mindset trap of viewing current inability or failure as a permanent verdict on one\'s capabilities.'
      }
    ]
  },
  {
    id: 'mm-mindset-003',
    title: 'First Principles Thinking',
    type: 'concept',
    duration: 14,
    xpReward: 120,
    content: {
      overview: 'Master the ancient philosophical technique used by Aristotle and modern innovators like Elon Musk to solve problems from the ground up.',
      mainContent: `**Reasoning from Foundations, Not Analogy**

First principles thinking is a method of reasoning that strips a problem down to its most fundamental truths and builds up from there. Instead of reasoning by analogy (doing what's always been done), you identify the core elements and construct new solutions.

Aristotle defined a first principle as "the first basis from which a thing is known." It's the foundational proposition that cannot be deduced from any other proposition.

**The Problem with Analogical Thinking**

Most of us reason by analogy most of the time. We look at how something has been done before and make incremental modifications. This is efficient for everyday decisions but severely limits innovation.

When someone says "That's just how it's done" or "No one has ever done it that way," they're reasoning by analogy. They're letting past patterns constrain future possibilities.

**The First Principles Process**

Step 1: Identify and define your current assumptions
What do you believe about the problem? Where did these beliefs come from?

Step 2: Break down the problem into fundamental elements
What are the basic components? What must be true at the most fundamental level?

Step 3: Create new solutions from scratch
With only the fundamental truths as constraints, what solutions become possible?

**Case Study: SpaceX and Rocket Costs**

When Elon Musk wanted to send people to Mars, rockets seemed prohibitively expensive. Conventional wisdom said rockets cost what they cost.

Using first principles: A rocket is made of aerospace-grade aluminum alloys, titanium, copper, and carbon fiber. What are those materials worth on the commodity market? About 2% of the typical rocket price.

This revealed that the high cost wasn't inherent to rockets - it was inherent to how the industry operated. SpaceX was built on this insight, eventually reducing launch costs by a factor of 10.

**First Principles in Daily Life**

You don't need to build rockets to use first principles. Apply it to:

- Career decisions: What does success actually require vs. what's traditionally done?
- Learning: What must I truly understand vs. what's just convention?
- Relationships: What makes relationships work at a fundamental level?
- Health: What does my body actually need vs. what's marketed to me?

**The Cost of First Principles Thinking**

This approach requires more mental energy than analogical thinking. You can't use it for every decision - you'd be exhausted. Reserve it for important problems where conventional approaches have failed or where innovation could create significant value.

**Combining with Analogical Thinking**

The best thinkers use both methods. They use analogy for routine decisions and first principles when analogy fails or when they need breakthrough solutions.`,
      keyTakeaway: 'First principles thinking breaks problems into fundamental truths and rebuilds solutions from scratch, enabling innovations impossible through incremental improvement.',
      actionItem: 'Choose a problem you\'ve been stuck on. List all your assumptions about it. Then identify which assumptions are truly fundamental versus which are just conventions you\'ve accepted.',
    },
    quiz: [
      {
        id: 'mm-mindset-003-q1',
        question: 'What distinguishes first principles thinking from reasoning by analogy?',
        options: [
          'First principles is faster and more efficient',
          'Analogy uses fundamental truths while first principles uses patterns',
          'First principles breaks problems into basic truths and builds up; analogy copies existing patterns',
          'There is no real difference between the two approaches'
        ],
        correctAnswer: 2,
        explanation: 'First principles reasoning identifies fundamental truths and builds solutions from scratch, while analogical reasoning follows existing patterns and makes incremental changes.'
      },
      {
        id: 'mm-mindset-003-q2',
        question: 'Why shouldn\'t you use first principles thinking for every decision?',
        options: [
          'It only works for business problems',
          'It requires significantly more mental energy than analogical thinking',
          'It always produces worse results than analogy',
          'It can only be used by experts in philosophy'
        ],
        correctAnswer: 1,
        explanation: 'First principles thinking is mentally demanding and time-consuming, making it best reserved for important problems where conventional approaches have failed.'
      }
    ]
  },
  {
    id: 'mm-mindset-004',
    title: 'Inversion - Thinking Backwards',
    type: 'concept',
    duration: 11,
    xpReward: 100,
    content: {
      overview: 'Learn the mental model favored by Charlie Munger: instead of asking how to succeed, ask how to fail - then avoid those paths.',
      mainContent: `**The Power of Backward Thinking**

"Invert, always invert," said the mathematician Carl Jacobi. This principle became a cornerstone of Charlie Munger's mental toolkit. Instead of thinking forward about how to achieve something, think backward about how to fail at it.

The human mind is often better at identifying what's wrong than what's right. Inversion harnesses this natural tendency by flipping problems on their head.

**Why Inversion Works**

Our brains evolved to detect threats and problems - it's a survival mechanism. This makes us naturally skilled at spotting what could go wrong. Inversion leverages this evolutionary advantage.

Additionally, inversion helps overcome blind spots. When we think only about success, we may miss obvious failure modes. When we think about failure, we often discover overlooked obstacles.

**The Inversion Process**

Start with your goal, then ask:
- What would guarantee failure?
- What are all the ways this could go wrong?
- What would I need to do to achieve the opposite outcome?
- What mistakes have others made pursuing this goal?

Once you have your list of failure modes, invert them into success strategies by avoiding those paths.

**Inversion in Practice: Building a Successful Business**

Forward thinking: What makes a business successful?
- Great product, good marketing, strong team, sufficient capital...

Inverted thinking: What guarantees business failure?
- Running out of cash
- Ignoring customer feedback
- Hiring the wrong people
- Not adapting to market changes
- Legal or ethical violations

The inverted list often reveals more actionable insights. "Don't run out of cash" is clearer than "have sufficient capital."

**Inversion in Personal Life**

Want a happy marriage? First ask: What would destroy a marriage?
- Taking your partner for granted
- Poor communication
- Dishonesty
- Keeping score
- Letting resentment build

Now you have a clear list of things to avoid.

**The Premortem Technique**

Psychologist Gary Klein developed a specific application of inversion called the "premortem." Before starting a project, imagine it has failed spectacularly. Write a detailed story of why it failed. This exercise surfaces risks that optimistic forward planning misses.

**Combining Forward and Backward Thinking**

The most robust plans come from both approaches. First, develop your forward strategy. Then, use inversion to stress-test it. What you find in the inverted view often improves the original plan dramatically.

**Inversion's Limitation**

Inversion tells you what to avoid but doesn't always reveal what to do. You need both - a positive vision to move toward and a clear understanding of the pitfalls to avoid.`,
      keyTakeaway: 'Inversion flips problems around, revealing failure modes and obstacles that forward thinking often misses, leading to more robust solutions.',
      actionItem: 'Take your most important current goal. Write down ten ways you could guarantee failure. Then commit to avoiding at least the top three failure modes.',
    },
    quiz: [
      {
        id: 'mm-mindset-004-q1',
        question: 'What is the core principle behind inversion as a mental model?',
        options: [
          'Always do the opposite of what others recommend',
          'Think about how to fail at something, then avoid those paths',
          'Reverse the order of steps in any process',
          'Focus only on negative outcomes'
        ],
        correctAnswer: 1,
        explanation: 'Inversion involves identifying what would cause failure and then deliberately avoiding those failure modes, rather than only thinking about what would cause success.'
      }
    ]
  },
  {
    id: 'mm-mindset-005',
    title: 'Circle of Competence - Know Your Limits',
    type: 'concept',
    duration: 10,
    xpReward: 100,
    content: {
      overview: 'Understand Warren Buffett and Charlie Munger\'s concept of staying within your circle of competence and how to expand it wisely.',
      mainContent: `**The Wisdom of Knowing What You Don't Know**

Warren Buffett credits much of his success to a simple concept: staying within his circle of competence. "Know your circle of competence, and stick within it. The size of that circle is not very important; knowing its boundaries, however, is vital."

Your circle of competence is the subject area that matches your skills and expertise. Within this circle, you have a deep understanding that others lack. Outside it, you're essentially guessing - no matter how smart you are.

**Why Smart People Make Dumb Mistakes**

Intelligence doesn't protect you outside your circle. In fact, it can hurt. Smart people often overestimate their ability to understand new domains quickly. They mistake general intelligence for domain expertise.

The Dunning-Kruger effect compounds this problem. The less you know about a domain, the less equipped you are to recognize your own ignorance in that domain.

**Defining Your Circle**

Your circle of competence includes areas where you have:
- Years of relevant experience
- Deep knowledge of the fundamentals
- Understanding of what you don't know
- Track record of good decisions
- Ability to recognize patterns others miss

Be honest with yourself. True expertise is narrower than most people admit.

**Operating Inside Your Circle**

Within your circle, you have real advantages:
- You can act decisively because you understand the situation
- You can identify opportunities others miss
- You can spot mistakes before they become costly
- You can make predictions with reasonable accuracy

Buffett made billions by investing only in businesses he understood deeply - consumer brands, insurance, railroads. He famously avoided technology stocks because they were outside his circle.

**Operating Outside Your Circle**

Outside your circle, you have two good options:

1. Stay out entirely. There's no shame in saying "I don't know enough about this." Avoiding areas of incompetence is often more valuable than maximizing areas of strength.

2. Seek expert help. Find someone whose circle of competence covers your blind spot. Pay for their expertise rather than pretending you don't need it.

**Expanding Your Circle**

Your circle isn't fixed - you can expand it through deliberate effort. But expansion is slow. True competence requires:
- Years of study and practice
- Learning from mistakes (ideally others')
- Finding mentors who are already competent
- Honest assessment of your progress

Don't pretend your circle has expanded before it actually has.`,
      keyTakeaway: 'Knowing the boundaries of your expertise is more important than the size of that expertise; staying within your circle prevents costly mistakes.',
      actionItem: 'Map your circle of competence. List 3-5 areas where you have genuine expertise. Then identify one area where you\'ve been operating outside your circle and decide whether to stay out or invest in expanding your knowledge.',
    },
    quiz: [
      {
        id: 'mm-mindset-005-q1',
        question: 'According to Warren Buffett, what is most important about your circle of competence?',
        options: [
          'Making it as large as possible',
          'Knowing its boundaries',
          'Never trying to expand it',
          'Keeping it a secret from competitors'
        ],
        correctAnswer: 1,
        explanation: 'Buffett emphasizes that the size of your circle isn\'t as important as knowing where its edges are - where your competence ends and incompetence begins.'
      }
    ]
  },
  {
    id: 'mm-mindset-006',
    title: 'Second-Order Thinking - Consequences of Consequences',
    type: 'concept',
    duration: 12,
    xpReward: 110,
    content: {
      overview: 'Learn to think beyond immediate effects to anticipate the ripple effects of decisions - the key to long-term success.',
      mainContent: `**Beyond the Obvious**

First-order thinking looks at the immediate, direct consequences of a decision. Second-order thinking asks: "And then what?" It explores the consequences of the consequences.

Most people stop at first-order effects. This is why most people get average results. Those who master second-order thinking can see around corners that others miss.

**The Structure of Second-Order Thinking**

First-order: What are the immediate, obvious consequences?
Second-order: What are the consequences of those consequences?
Third-order: What happens after that?

Each level requires more thought and is harder to predict, but often contains the most important information.

**Example: The Cobra Effect**

During British rule in India, Delhi had a cobra problem. The government offered a bounty for dead cobras. First-order thinking: People will kill cobras for money. The cobra population will decrease.

What actually happened: Entrepreneurs began breeding cobras for the bounty. When the government caught on and canceled the program, breeders released their now-worthless snakes. The cobra population increased beyond the original level.

This pattern - where a solution makes the original problem worse - appears throughout history. It's visible only through second-order thinking.

**Second-Order Thinking in Business**

A company lowers prices to gain market share.

First-order: More customers, more revenue.

Second-order: Competitors lower prices too. Price war ensues. Industry profits shrink. Weaker competitors fail. Surviving companies might gain market power but have trained customers to expect low prices.

The second-order effects might be positive or negative - but you can't know without thinking through them.

**Second-Order Thinking in Personal Life**

You decide to work overtime to earn more money.

First-order: More income, more savings.

Second-order: Less time for exercise, relationships, and sleep. Health may decline. Relationships may suffer. The stress might reduce your effectiveness, requiring even more overtime. The additional money might go to convenience foods and stress relief.

**Applying Second-Order Thinking**

For important decisions, create a decision tree:
1. Write down the immediate consequences
2. For each consequence, write down its likely consequences
3. Continue for at least one more level
4. Look for unintended effects, feedback loops, and perverse incentives

**The Time Horizon**

Second-order effects often take time to emerge. Something that looks good in the short term can be terrible in the long term, and vice versa. Extending your time horizon naturally encourages second-order thinking.

Howard Marks of Oaktree Capital says: "First-level thinking is simplistic and superficial... Second-level thinking is deep, complex, and convoluted."`,
      keyTakeaway: 'Second-order thinking reveals the hidden consequences of decisions - the ripple effects that often matter more than the immediate impact.',
      actionItem: 'For your next significant decision, create a simple decision tree. Map out at least two levels of consequences for each major option before deciding.',
    },
    quiz: [
      {
        id: 'mm-mindset-006-q1',
        question: 'What does the "Cobra Effect" illustrate about decision-making?',
        options: [
          'Simple problems require simple solutions',
          'Incentives always work as intended',
          'Solutions can make problems worse when second-order effects are ignored',
          'Government intervention is always ineffective'
        ],
        correctAnswer: 2,
        explanation: 'The Cobra Effect shows how first-order thinking (bounty = fewer cobras) missed the second-order effect (people breeding cobras), ultimately worsening the problem.'
      },
      {
        id: 'mm-mindset-006-q2',
        question: 'What question best characterizes second-order thinking?',
        options: [
          'What is the immediate result?',
          'What will happen first?',
          'And then what?',
          'Who will be affected?'
        ],
        correctAnswer: 2,
        explanation: '"And then what?" is the defining question of second-order thinking - it pushes beyond immediate effects to explore consequences of consequences.'
      }
    ]
  },
  {
    id: 'mm-mindset-007',
    title: 'The Map Is Not the Territory',
    type: 'concept',
    duration: 10,
    xpReward: 100,
    content: {
      overview: 'Understand Alfred Korzybski\'s crucial insight that our mental models are simplifications of reality, not reality itself.',
      mainContent: `**The Fundamental Confusion**

In 1931, Alfred Korzybski made a profound observation: "The map is not the territory." A map of London is not London. A menu is not the meal. A model of the economy is not the economy. This seems obvious, yet we constantly confuse our representations of reality with reality itself.

Maps are useful precisely because they simplify. A map that included every detail would be as large and complex as the territory itself - useless. But every simplification leaves something out.

**Why This Matters**

We navigate the world using mental maps: beliefs, theories, models, and assumptions about how things work. These maps are essential - we couldn't function without them. But problems arise when we forget they're maps.

The more successful a map, the more likely we are to confuse it with reality. A financial model that worked for years feels like truth. A personal belief that has served us well feels like fact. But conditions change, and maps that once worked can become dangerous.

**The Dangers of Map-Territory Confusion**

Overconfidence: When we mistake our map for the territory, we become overconfident in our predictions and decisions.

Blindness: Maps filter our perception. We see what our maps tell us to look for and miss what they leave out.

Fragility: When reality changes but our maps don't, we're caught off guard.

Conflict: Most arguments stem from people treating their maps as the only valid representation of reality.

**All Models Are Wrong, Some Are Useful**

Statistician George Box said: "All models are wrong, but some are useful." This captures the map-territory relationship perfectly. Our maps can be useful without being true. The key is remembering their limitations.

**Updating Your Maps**

The most successful navigators constantly update their maps:
- Seek disconfirming evidence
- Notice when predictions fail
- Consider alternative maps
- Hold maps loosely, ready to revise

Scientists excel at this. A scientific theory is explicitly understood to be a map - a useful model that will eventually be superseded by a better one.

**Practical Applications**

In relationships: Your perception of someone is a map, not the person. Leave room for them to be different from your image of them.

In business: Your business plan is a map. Reality will differ. Build in flexibility.

In learning: What you "know" is a map. Stay curious about what the map might be missing.

**The Meta-Lesson**

Even this concept - "the map is not the territory" - is itself a map. It's a useful model, not the complete truth about truth. Hold even your meta-models lightly.`,
      keyTakeaway: 'Our mental models, theories, and beliefs are useful simplifications of reality, not reality itself - and confusing the two leads to errors.',
      actionItem: 'Identify one belief you hold strongly. Ask yourself: "What might this map be leaving out? What evidence would show this map is incomplete?"',
    },
    quiz: [
      {
        id: 'mm-mindset-007-q1',
        question: 'Why do maps (mental models) necessarily differ from the territory (reality)?',
        options: [
          'Map-makers are always biased',
          'Maps are simplifications that must leave out details to be useful',
          'Reality is impossible to understand',
          'Maps are created by unreliable sources'
        ],
        correctAnswer: 1,
        explanation: 'Maps must simplify to be useful - a perfectly detailed map would be as complex as reality itself. This necessary simplification means something is always left out.'
      }
    ]
  },
  {
    id: 'mm-mindset-008',
    title: 'Occam\'s Razor in Decision Making',
    type: 'concept',
    duration: 10,
    xpReward: 100,
    content: {
      overview: 'Apply the ancient principle of parsimony to cut through complexity and make better decisions with simpler explanations.',
      mainContent: `**The Principle of Parsimony**

William of Ockham, a 14th-century friar, proposed a principle that has guided thinkers for centuries: "Entities should not be multiplied beyond necessity." In modern terms: the simplest explanation is usually the best.

This doesn't mean simple explanations are always right. It means that when comparing explanations with equal predictive power, prefer the simpler one. Complexity should be added only when necessary.

**Why Simplicity Wins**

Simpler explanations have fewer failure points. Each additional assumption is another place where you could be wrong. A complex theory with ten assumptions is wrong if any one is wrong. A simple theory with two assumptions is more robust.

Simpler explanations are more testable. You can check their predictions more easily. Complex theories often explain everything and predict nothing - they can be twisted to fit any outcome.

Simpler explanations are more useful. They're easier to remember, communicate, and apply. A model you can't use is worthless regardless of its accuracy.

**Occam's Razor in Practice**

In debugging: When software breaks, check the simple causes first. Is it plugged in? Is it turned on? Before hunting for exotic bugs, verify the basics.

In diagnosis: When you hear hoofbeats, think horses, not zebras. Common problems are common; rare problems are rare.

In analysis: If a simple model explains the data, don't add complexity. That complexity might just be fitting noise.

**The Limits of Occam's Razor**

Sometimes reality is complex. Occam's Razor is a heuristic, not a law of nature. Use it to guide investigation, not to end it.

The razor applies when explanations have equal explanatory power. If a complex theory explains significantly more than a simple one, the complex theory might be right.

Don't confuse simple explanations with easy problems. Gravity is a simple concept, but calculating orbital mechanics is hard.

**Common Misapplications**

Dismissing complexity too quickly: "The simple answer must be right" is itself an oversimplification.

Using it to avoid hard thinking: Occam's Razor should help you think more clearly, not give you an excuse to think less.

Forgetting that simplicity is relative: What's simple depends on your framework and knowledge.

**The Meta-Point**

Occam's Razor itself is a simple heuristic. It doesn't always apply, but it usually does. That's the beauty of it - a simple rule that mostly works.

In decision making, when you're choosing between explanations or strategies, ask: "What's the simplest version that could work?" Start there. Add complexity only as the evidence demands it.`,
      keyTakeaway: 'When multiple explanations work equally well, prefer the simpler one - fewer assumptions mean fewer opportunities for error.',
      actionItem: 'Review a complex problem you\'re facing. Write down your current explanation. Then ask: "What\'s the simplest explanation that fits the facts?" Compare the two.',
    },
    quiz: [
      {
        id: 'mm-mindset-008-q1',
        question: 'What does Occam\'s Razor actually state?',
        options: [
          'The simplest explanation is always correct',
          'Complex problems require complex solutions',
          'Among explanations with equal predictive power, prefer the simpler one',
          'Always choose the fastest solution'
        ],
        correctAnswer: 2,
        explanation: 'Occam\'s Razor is about choosing between competing explanations of equal power - prefer simplicity because it\'s more robust and testable, not because simple is always right.'
      }
    ]
  },
  {
    id: 'mm-mindset-009',
    title: 'Confirmation Bias - Seeking Disconfirming Evidence',
    type: 'concept',
    duration: 12,
    xpReward: 110,
    content: {
      overview: 'Understand the most pervasive cognitive bias and learn strategies to actively seek out information that challenges your beliefs.',
      mainContent: `**The Mind's Yes-Man**

Confirmation bias is the tendency to search for, interpret, and remember information that confirms our existing beliefs. It's not that we're dishonest - our brains genuinely filter information this way, often without our awareness.

This bias helped our ancestors. In a dangerous world, quickly categorizing friend from foe was survival-critical. But in a complex modern world, confirmation bias leads us astray.

**How Confirmation Bias Works**

Selective search: We seek information that supports what we already believe. If you think a colleague is incompetent, you'll notice their mistakes and overlook their successes.

Selective interpretation: Ambiguous information gets interpreted to fit existing beliefs. The same political speech sounds reasonable to supporters and outrageous to opponents.

Selective memory: We remember evidence that confirms our views better than evidence that challenges them.

**The Wason Selection Task**

Psychologist Peter Wason demonstrated confirmation bias experimentally. People were given a rule like "if there's a vowel on one side, there's an even number on the other" and asked to test it using cards.

Most people tried to confirm the rule by looking for vowels with even numbers. Few thought to disconfirm it by looking for vowels with odd numbers - which would actually test the rule more effectively.

**Why Disconfirmation Is Hard**

Disconfirming evidence is uncomfortable. It threatens our self-image, our worldview, and our sense of being right. We're motivated to avoid this discomfort.

Disconfirming evidence is often harder to find. Confirming evidence is everywhere because we're looking for it. Disconfirming evidence requires actively seeking out opposition.

**Strategies for Fighting Confirmation Bias**

Steelman, don't strawman: Before arguing against an opposing view, make it as strong as possible. Understand why smart people might hold it.

Actively seek disconfirmation: Ask "What would prove me wrong?" Then look for that evidence.

Consider the opposite: Before finalizing a decision, argue the opposite case. What are the best reasons to choose differently?

Surround yourself with disagreement: Deliberately include people in your circle who challenge your views.

Pre-commit to updating: Before investigating a question, commit to what evidence would change your mind.

**The Scientific Method as a Cure**

Science works because it institutionalizes disconfirmation. Peer review exists to find flaws. Replication tries to disconfirm. The whole system is designed to overcome the individual scientist's confirmation bias.

You can apply this method to your own thinking. Treat your beliefs as hypotheses to be tested, not truths to be defended.`,
      keyTakeaway: 'We naturally seek confirming evidence; actively seeking disconfirmation is unnatural but essential for accurate beliefs.',
      actionItem: 'Choose one strongly held belief. Spend 30 minutes actively searching for the best arguments against it. Note what you learn.',
    },
    quiz: [
      {
        id: 'mm-mindset-009-q1',
        question: 'What is the most effective way to test a hypothesis according to the Wason Selection Task?',
        options: [
          'Find as many confirming examples as possible',
          'Look for evidence that would disconfirm the hypothesis',
          'Ask experts who agree with you',
          'Trust your intuition about whether it\'s true'
        ],
        correctAnswer: 1,
        explanation: 'The Wason task showed that trying to disconfirm a hypothesis is more logically rigorous than seeking confirmation, though people naturally prefer confirmation.'
      },
      {
        id: 'mm-mindset-009-q2',
        question: 'What does it mean to "steelman" an opposing argument?',
        options: [
          'Attack its weakest points',
          'Ignore it completely',
          'Make it as strong as possible before arguing against it',
          'Find a steel worker to explain it'
        ],
        correctAnswer: 2,
        explanation: 'Steelmanning means constructing the strongest version of an opposing argument, ensuring you engage with the best version of ideas you disagree with.'
      }
    ]
  },
  {
    id: 'mm-mindset-010',
    title: 'The Dunning-Kruger Effect',
    type: 'concept',
    duration: 11,
    xpReward: 100,
    content: {
      overview: 'Explore why incompetence breeds overconfidence and expertise breeds doubt - and how to calibrate your actual abilities.',
      mainContent: `**The Confidence-Competence Gap**

In 1999, psychologists David Dunning and Justin Kruger published a landmark study. They found that people with low ability at a task tend to overestimate their ability, while people with high ability tend to underestimate theirs.

This wasn't just about arrogance. The incompetent literally lack the skill to recognize their incompetence. The same knowledge that would help them perform well would help them recognize their poor performance - and they don't have it.

**The Four Stages of Competence**

Stage 1: Unconscious Incompetence - You don't know what you don't know. Confidence is high because you can't see the gaps.

Stage 2: Conscious Incompetence - You begin to see how much you don't know. Confidence crashes. This is the "valley of despair."

Stage 3: Conscious Competence - You develop real skill but have to think about it. Confidence slowly rebuilds.

Stage 4: Unconscious Competence - Skill becomes automatic. But awareness of the field's full complexity keeps you humble.

**Why Experts Doubt Themselves**

Experts have a map of the full territory. They see all the complexity, all the exceptions, all the areas where knowledge is uncertain. They know what they don't know.

Novices have a small, neat map. Everything looks simple because they can't see what they're missing. Their map is wrong, but it feels complete.

**The Confidence of Gurus**

Be wary of anyone who speaks with absolute certainty about complex topics. True experts hedge, qualify, and acknowledge uncertainty. False experts project unwarranted confidence.

As Bertrand Russell said: "The fundamental cause of trouble in the world today is that the stupid are cocksure while the intelligent are full of doubt."

**Calibrating Your Confidence**

Get feedback: Objective performance data cuts through the illusion. Test your knowledge, measure your results, seek honest assessment.

Study the field deeply: As you learn more, you'll discover more of what you don't know. This is progress, even though it feels like regression.

Find experts: Watch how true experts in your field talk about it. Notice their humility, their qualifications, their uncertainty.

Track predictions: Write down what you expect to happen. Later, check accuracy. This builds calibration over time.

**The Paradox of Learning**

The more you learn, the more you realize how much you don't know. This can be discouraging, but it's actually a sign of growth. If you feel increasingly uncertain about a topic you've been studying, you're probably learning.

Embrace the uncertainty. Trade false confidence for calibrated doubt. You'll be more accurate, more open to learning, and ultimately more competent.`,
      keyTakeaway: 'Incompetence prevents people from recognizing their incompetence; true expertise brings awareness of vast unknowns.',
      actionItem: 'Rate your confidence in a skill from 1-10. Then take an objective assessment (test, peer review, measurable performance). Compare your rating to reality.',
    },
    quiz: [
      {
        id: 'mm-mindset-010-q1',
        question: 'Why do people with low ability often overestimate their competence?',
        options: [
          'They are more confident by nature',
          'They deliberately inflate their abilities',
          'They lack the knowledge needed to recognize their own incompetence',
          'Low ability people are more optimistic'
        ],
        correctAnswer: 2,
        explanation: 'The Dunning-Kruger effect shows that the same skills needed to perform well are needed to recognize poor performance - incompetent people lack both.'
      }
    ]
  },
  {
    id: 'mm-mindset-011',
    title: 'Sunk Cost Fallacy - Knowing When to Quit',
    type: 'concept',
    duration: 11,
    xpReward: 100,
    content: {
      overview: 'Learn why past investments shouldn\'t influence future decisions and how to escape the trap of throwing good money after bad.',
      mainContent: `**The Weight of the Past**

The sunk cost fallacy is our tendency to continue an endeavor because of previously invested resources (time, money, effort) rather than future value. We feel that quitting would "waste" the investment, so we keep going even when stopping is the rational choice.

The fallacy is this: past costs are gone regardless of what you do next. Only future costs and benefits should affect future decisions.

**Why We Fall for It**

Loss aversion: We hate losing more than we enjoy winning. Quitting feels like accepting a loss.

Commitment and consistency: Once we commit, we want our future actions to be consistent. Quitting feels like admitting our original commitment was wrong.

Ego protection: Quitting can feel like personal failure. Continuing maintains the illusion that we might succeed.

**Classic Examples**

The terrible movie: You paid for a ticket, the movie is awful, but you stay because "I already paid." Staying doesn't get your money back - it just wastes your time too.

The failing project: A company has invested millions in a project clearly headed for failure. They invest more because "we've come too far to stop now."

The bad relationship: "We've been together for five years" is not a reason to stay in a relationship. Only whether the future looks good is relevant.

**The Kill Criterion**

Smart decision-makers establish kill criteria in advance. Before starting, define conditions under which you'll quit. This removes emotion from the later decision.

Amazon reportedly has a "two-pizza team" rule and kills projects that aren't working. Jeff Bezos calls Amazon "the best place in the world to fail" because they quit failing projects quickly.

**How to Escape Sunk Costs**

The clean slate test: Imagine you hadn't invested anything. Would you start this project today with your current knowledge? If not, why continue?

Focus on opportunity cost: Resources spent on a failing project can't be spent on better opportunities. What else could you do with this time/money?

Separate decision-making from ego: A good decision that leads to a bad outcome is still a good decision. Quitting something that isn't working is smart, not weak.

Pre-commit to evaluation: Schedule regular checkpoints where you assess whether to continue. Make it normal, not exceptional.

**The Flip Side**

Sometimes persistence is valuable. The skill is distinguishing between valuable persistence and sunk cost fallacy. Ask: "Am I continuing because the future looks good, or just because I've already invested?"

True grit is continuing despite difficulty when the path is right. Sunk cost fallacy is continuing despite difficulty when the path is wrong.`,
      keyTakeaway: 'Past investments cannot be recovered - only future value should guide future decisions. The courage to quit is often wisdom.',
      actionItem: 'Identify something you\'re continuing primarily because of past investment. Apply the clean slate test: would you start it today? If not, what would it take to quit?',
    },
    quiz: [
      {
        id: 'mm-mindset-011-q1',
        question: 'What makes something a "sunk cost"?',
        options: [
          'It was a bad investment from the start',
          'It cannot be recovered regardless of future decisions',
          'It was an underwater investment',
          'It was spent too slowly'
        ],
        correctAnswer: 1,
        explanation: 'A sunk cost is any past cost that cannot be recovered no matter what you do next - which is why it should not influence future decisions.'
      },
      {
        id: 'mm-mindset-011-q2',
        question: 'What is the "clean slate test" for sunk cost decisions?',
        options: [
          'Start with a blank piece of paper',
          'Ask if you would begin this project today with current knowledge',
          'Clear your mind through meditation',
          'Ignore all past information'
        ],
        correctAnswer: 1,
        explanation: 'The clean slate test asks whether you would start the project now if you hadn\'t already invested - removing the bias of sunk costs from the decision.'
      }
    ]
  },
  {
    id: 'mm-mindset-012',
    title: 'Survivorship Bias - The Hidden Data',
    type: 'concept',
    duration: 11,
    xpReward: 100,
    content: {
      overview: 'Discover why we only see the winners and miss the crucial lessons from the invisible failures.',
      mainContent: `**The Visible Successes and Invisible Failures**

During World War II, researchers analyzed bullet holes in returning aircraft to determine where to add armor. The logical approach seemed to be: add armor where the bullet holes are.

Statistician Abraham Wald saw the flaw. The planes they were studying had survived. The bullet holes showed where planes could be hit and still return. The missing data - planes that didn't return - would show where hits were fatal. His recommendation: armor the places without bullet holes.

This is survivorship bias: drawing conclusions from visible survivors while ignoring invisible failures.

**Where Survivorship Bias Hides**

Success stories: We study successful entrepreneurs, but not the many who tried the same things and failed. Their failures are invisible, so success looks easier and more predictable than it is.

Investment funds: We see funds with great track records. We don't see the funds with the same strategy that failed and closed. The survivors look skillful; the full picture might show luck.

Career advice: Successful people say "follow your passion." But countless people followed their passion and failed. The advice might be wrong; we just don't hear from the failures.

Self-help: Books by success stories sell. Books titled "I Tried Everything And Still Failed" don't. So we get a distorted view of what works.

**The Graveyard of Forgotten Failures**

For every visible success, there's a graveyard of similar attempts that failed. The graveyard is invisible, so we systematically underestimate risk and overestimate the link between actions and success.

**Countering Survivorship Bias**

Seek out failure data: Actively look for stories of failure. Post-mortems, failed company analyses, honest accounts of what didn't work.

Ask "where are the graves?": When you see a success pattern, ask how many others tried the same thing and failed.

Be skeptical of success advice: Someone who succeeded can't know if their methods caused success or if they got lucky while using those methods.

Study base rates: What's the overall success rate for this type of endeavor? The survivors are the exceptions, not the rule.

**The Reverse: Looking at Failures**

Sometimes the best learning comes from studying failures directly. Instead of asking what successful companies did, ask what unsuccessful ones had in common. Charlie Munger inverts this way constantly.

**The Humility Lesson**

Survivorship bias should make us humble. Much of what we call wisdom might be luck, visible only because the advisor survived to share it. Hold advice loosely, including this advice.`,
      keyTakeaway: 'We see winners who used certain strategies but not the losers who used the same strategies - making success look more achievable and predictable than it is.',
      actionItem: 'Think of a successful person whose methods you admire. Research how many others tried similar approaches and failed. Adjust your expectations accordingly.',
    },
    quiz: [
      {
        id: 'mm-mindset-012-q1',
        question: 'In the WWII aircraft example, why did Abraham Wald recommend armoring the places WITHOUT bullet holes?',
        options: [
          'Those areas were weaker structurally',
          'The planes they studied survived; bullet holes showed non-fatal hit locations',
          'Bullet holes indicated areas that needed to be light for flight',
          'It was a random recommendation'
        ],
        correctAnswer: 1,
        explanation: 'The surviving planes showed where planes could be hit and survive. The planes that didn\'t survive (invisible data) were likely hit in the areas without holes.'
      }
    ]
  },
  {
    id: 'mm-mindset-013',
    title: 'Antifragility - Gaining from Disorder',
    type: 'concept',
    duration: 13,
    xpReward: 120,
    content: {
      overview: 'Learn Nassim Taleb\'s revolutionary concept of systems that don\'t just survive stress but actually improve from it.',
      mainContent: `**Beyond Resilience**

Nassim Taleb identified a gap in our vocabulary. We have a word for things that break under stress (fragile) and things that resist stress (robust/resilient). But what about things that actually benefit from stress?

Taleb coined the term "antifragile" for this missing category. Antifragile systems get stronger from volatility, disorder, and stressors - up to a point.

**The Triad**

Fragile: Harmed by volatility. A glass. A complex system with tight coupling. Wants tranquility.

Robust: Indifferent to volatility. A rock. Survives stress but doesn't improve.

Antifragile: Benefits from volatility. The immune system. Muscles after exercise. Evolution itself. Wants moderate stress.

**Examples of Antifragility**

The human body: Bones get stronger under stress. Muscles grow after being torn. The immune system needs exposure to pathogens to develop.

Evolution: Species improve through environmental pressures. Without stress, there's no selection.

Small businesses: Unlike large corporations, they can adapt quickly to changes and learn from small failures.

Knowledge: "That which does not kill us makes us smarter" - but only if we pay attention and learn.

**How to Become Antifragile**

Barbell strategy: Combine extreme safety with extreme risk-taking. Keep most resources in ultra-safe positions while taking small speculative bets. Never be in the middle where you get neither safety nor upside.

Optionality: Create situations with limited downside and unlimited upside. When wrong, you lose small. When right, you win big.

Small failures: Embrace small, survivable failures that provide learning. They're the tuition for wisdom.

Redundancy: Have backups. Efficiency removes slack; antifragility requires slack.

Via negativa: Gain by removing negatives rather than adding positives (more on this next lesson).

**Fragility in Modern Life**

Modern optimization creates fragility. Just-in-time supply chains, highly leveraged financial positions, overbooked schedules - all are efficient but break under stress.

Antifragility requires deliberate inefficiency. Extra inventory. Financial reserves. Margin in your schedule. These seem wasteful until you need them.

**The Lindy Effect**

For non-perishable things (ideas, technologies, institutions), expected future life equals past life. Something that has survived 100 years is expected to survive another 100. Fragile things don't last; what's old is antifragile (or at least robust).

**Personal Antifragility**

Build your life so that ordinary stressors make you stronger. This means:
- Exposure to moderate challenges
- Rapid feedback loops
- Ability to survive failures
- Avoiding single points of failure`,
      keyTakeaway: 'Antifragile systems actually benefit from volatility and stress - design your life and decisions to gain from disorder rather than just survive it.',
      actionItem: 'Identify one area of your life that is fragile (would break under stress). Design a modification that would make it at least robust, ideally antifragile.',
    },
    quiz: [
      {
        id: 'mm-mindset-013-q1',
        question: 'What distinguishes antifragility from robustness?',
        options: [
          'Antifragile things are harder to break',
          'Robust things get stronger from stress; antifragile things just survive',
          'Antifragile things benefit from stress; robust things merely survive it',
          'There is no real difference'
        ],
        correctAnswer: 2,
        explanation: 'Robust systems survive stress unchanged, while antifragile systems actually improve from stress and volatility.'
      },
      {
        id: 'mm-mindset-013-q2',
        question: 'What is the "barbell strategy" for antifragility?',
        options: [
          'Working out at the gym regularly',
          'Taking moderate risks consistently',
          'Combining extreme safety with extreme risk-taking, avoiding the middle',
          'Balancing work and life equally'
        ],
        correctAnswer: 2,
        explanation: 'The barbell strategy combines ultra-safe positions with small speculative bets, avoiding the middle ground that offers neither security nor upside.'
      }
    ]
  },
  {
    id: 'mm-mindset-014',
    title: 'Via Negativa - Improvement by Subtraction',
    type: 'concept',
    duration: 10,
    xpReward: 100,
    content: {
      overview: 'Discover the ancient wisdom that improvement often comes from removing negatives rather than adding positives.',
      mainContent: `**The Power of Subtraction**

Via negativa is the approach of defining what something is by what it is not - or improving something by removing negatives rather than adding positives.

In theology, it means describing God by what God is not (not limited, not temporal, not material). In practical life, it means achieving goals by removing obstacles rather than adding interventions.

**Why Subtraction Works**

Addition has hidden costs: Every addition brings complexity, maintenance, and potential for interaction effects. A new habit requires willpower. A new project requires attention. A new possession requires storage and care.

Subtraction simplifies: Removing something eliminates its direct problems and all its hidden costs. Life becomes simpler, not more complex.

We know harm better than improvement: It's often easier to identify what's hurting us than what would help. We know junk food is bad before we know what the optimal diet is.

**Via Negativa in Health**

Medicine often works better via negativa. Instead of finding the perfect diet, avoid the foods known to be harmful. Instead of optimizing exercise, eliminate sedentary behavior. Instead of adding supplements, remove toxins.

The iatrogenics problem (harm from treatment) shows that intervention often hurts. Sometimes the best medical advice is "do less."

**Via Negativa in Productivity**

Instead of adding productivity hacks, eliminate distractions. Instead of optimizing your schedule, remove unnecessary commitments. Instead of finding more energy, eliminate energy drains.

Warren Buffett: "The difference between successful people and really successful people is that really successful people say no to almost everything."

**Via Negativa in Happiness**

The direct pursuit of happiness often fails. But removing sources of unhappiness works. Instead of seeking joy, eliminate misery. Instead of finding meaning, remove meaningless activities.

Nassim Taleb: "The first step towards a happy life is the removal of the unhappy elements."

**Practical Application**

The Stop Doing List: Instead of (only) a to-do list, keep a stop-doing list. What should you eliminate?

The Pre-Mortem: What would cause this project to fail? Remove those elements.

The Audit: Review your life for activities, possessions, and relationships that drain without adding value. Subtract them.

**The Resistance to Subtraction**

We're biased toward addition. Studies show that people prefer to add features rather than remove them, even when removal would be better. Subtraction feels like loss; addition feels like progress.

Overcome this bias by explicitly considering subtraction for every problem. Ask "What could I remove?" before asking "What could I add?"`,
      keyTakeaway: 'Often the best way to improve is not to add something new but to remove what is causing harm - subtraction is underrated.',
      actionItem: 'Create a "Stop Doing" list. Identify three activities, commitments, or habits that drain your energy without adding value. Eliminate at least one this week.',
    },
    quiz: [
      {
        id: 'mm-mindset-014-q1',
        question: 'Why does via negativa often work better than adding solutions?',
        options: [
          'Negative thinking is more realistic',
          'Subtraction is simpler and we understand harm better than optimal improvement',
          'Addition is always bad',
          'Negative emotions are more powerful'
        ],
        correctAnswer: 1,
        explanation: 'Via negativa works because subtraction eliminates complexity and hidden costs, and we often know what harms us better than what the optimal positive solution would be.'
      }
    ]
  },
  {
    id: 'mm-mindset-015',
    title: 'The Feynman Technique - Learning by Teaching',
    type: 'concept',
    duration: 12,
    xpReward: 110,
    content: {
      overview: 'Master Richard Feynman\'s legendary learning method that uses teaching as the ultimate test and tool for understanding.',
      mainContent: `**The Nobel Laureate's Secret**

Richard Feynman was one of the most brilliant physicists of the 20th century, but his real genius was in learning and explaining. His method for mastering any subject has become legendary: explain it as if teaching a child.

This isn't just a test of understanding - it's a method for achieving understanding. The act of simplifying forces deep processing that passive studying cannot match.

**The Four-Step Technique**

Step 1: Choose and Study
Pick a concept you want to understand. Study it from various sources until you think you understand it.

Step 2: Teach It Simply
Explain the concept as if teaching it to a 12-year-old. Use simple words. Avoid jargon. Create analogies from everyday life. Write it down or speak it aloud.

Step 3: Identify Gaps
When you get stuck, can't explain something simply, or resort to jargon, you've found a gap in your understanding. Note these gaps.

Step 4: Fill Gaps and Simplify
Go back to your sources. Study specifically what you couldn't explain. Then try explaining again. Simplify further. Create better analogies.

Repeat until you can explain the entire concept simply and clearly.

**Why This Works**

Teaching requires active processing. You can't teach on autopilot. Every sentence requires you to verify your understanding.

Simple explanation requires deep understanding. Jargon hides confusion. When you must explain without jargon, you must actually understand the relationships.

Gaps become obvious. In passive studying, you can slide over confusion. In teaching, confusion is immediately apparent - you simply can't explain what you don't understand.

It's memorable. The process of simplifying, finding analogies, and organizing for teaching creates multiple memory hooks.

**Feynman's Own Example**

Feynman famously said he could explain anything he truly understood to a first-year student. If he couldn't, it meant he didn't really understand it himself.

He would regularly take complex physics concepts and work on explaining them simply. His physics lectures became legendary precisely because of this commitment to clarity.

**Practical Applications**

Before exams: Instead of rereading notes, explain the material as if teaching someone.

In meetings: If you can't explain a project simply, you might not understand it well enough to execute it.

For decisions: If you can't explain your reasoning simply, the reasoning might be flawed.

For creativity: Simplifying concepts often reveals new connections and possibilities.

**The Two Types of Knowledge**

There's knowing the name of something versus knowing the thing itself. Many people collect names and jargon without real understanding. The Feynman Technique strips away the names and tests whether you know the thing itself.

As Feynman said: "The first principle is that you must not fool yourself - and you are the easiest person to fool."`,
      keyTakeaway: 'If you cannot explain something simply, you do not understand it - teaching forces the deep processing that creates genuine comprehension.',
      actionItem: 'Choose a concept from this module. Explain it in writing as if teaching a smart 12-year-old. Where you struggle to explain simply, you\'ve found your learning edge.',
    },
    quiz: [
      {
        id: 'mm-mindset-015-q1',
        question: 'What happens when you can\'t explain a concept simply during the Feynman Technique?',
        options: [
          'The concept is too complex to simplify',
          'You\'ve identified a gap in your understanding that needs work',
          'You should use more technical language',
          'You should move on to another topic'
        ],
        correctAnswer: 1,
        explanation: 'Struggling to explain simply reveals gaps in understanding - the technique uses this difficulty as a diagnostic tool to identify what needs more study.'
      },
      {
        id: 'mm-mindset-015-q2',
        question: 'Why does the Feynman Technique require explaining without jargon?',
        options: [
          'Jargon is always wrong',
          'Simple words sound better',
          'Jargon can hide confusion - simple explanation requires real understanding',
          'Children don\'t like jargon'
        ],
        correctAnswer: 2,
        explanation: 'Jargon lets you describe something without understanding it. Forcing simple language forces you to actually understand the underlying concepts and relationships.'
      }
    ]
  }
];

export default mindsetLessons;
