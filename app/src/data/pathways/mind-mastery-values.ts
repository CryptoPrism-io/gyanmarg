import type { Lesson } from '@/types';

export const valuesLessons: Lesson[] = [
  {
    id: 'mm-values-001',
    title: 'The Feedback Loop from Hell',
    type: 'concept',
    duration: 10,
    xpReward: 100,
    content: {
      overview: 'Discover the destructive cycle of anxiety about anxiety, and how modern society amplifies our negative emotions by making us feel bad about feeling bad.',
      mainContent: `**The Feedback Loop from Hell**

Mark Manson opens "The Subtle Art of Not Giving a F*ck" with a powerful observation about modern suffering: we don't just feel bad - we feel bad about feeling bad. This creates what he calls "The Feedback Loop from Hell."

**How the Loop Works:**

You feel anxious about something. Then you feel anxious about being anxious. "Why am I so anxious? What's wrong with me?" This meta-anxiety makes the original anxiety worse, which makes you more anxious about being anxious, and the cycle spirals.

The same happens with anger, sadness, and frustration. We live in a society that tells us we should always be happy, positive, and successful. So when we experience normal negative emotions, we feel like failures for having them.

**The Social Media Amplification:**

Every day you scroll through curated highlight reels of other people's lives. Everyone seems happy, successful, rich, and fulfilled. Meanwhile, you're just... you. Struggling. Feeling inadequate. And now you feel inadequate about feeling inadequate.

**The Counterintuitive Truth:**

Manson's central insight is this: The desire for more positive experience is itself a negative experience. And, paradoxically, the acceptance of one's negative experience is itself a positive experience.

The more you desperately want to feel okay, the less okay you'll feel. The more you pursue being stress-free, the more stressed you become about being stressed.

**Breaking the Loop:**

The solution isn't to "think positive" or "just be happy." That's precisely what feeds the loop. Instead, acknowledge: "I feel anxious. That's okay. Anxiety is a normal human experience." This acceptance stops the secondary suffering - the suffering about suffering.

**The Buddha's Insight:**

Buddhism recognized this 2,500 years ago. There's the pain of life (first arrow) and then there's the suffering we create by resisting that pain (second arrow). We can't always avoid the first arrow, but we can choose not to shoot ourselves with the second.

Stop giving a f*ck about feeling bad. Sometimes life is hard. That's not a bug - it's a feature.`,
      keyTakeaway: 'Suffering often comes not from the negative emotion itself, but from our negative reaction to that emotion. Accept that feeling bad sometimes is part of being human.',
      actionItem: 'This week, when you notice a negative emotion, practice saying to yourself: "I feel [emotion]. That is okay. I am human."',
    },
    quiz: [
      {
        id: 'mm-values-001-q1',
        question: 'What is "The Feedback Loop from Hell" according to Mark Manson?',
        options: [
          'A business strategy that leads to burnout',
          'Feeling bad about feeling bad, creating a spiral of negativity',
          'A social media algorithm that shows negative content',
          'A pattern of procrastination and guilt'
        ],
        correctAnswer: 1,
        explanation: 'The Feedback Loop from Hell is when we feel anxious about being anxious, or sad about being sad. This meta-suffering about our suffering amplifies our negative emotions into a destructive spiral.'
      },
      {
        id: 'mm-values-001-q2',
        question: 'According to Manson, what breaks the Feedback Loop from Hell?',
        options: [
          'Positive affirmations and visualization',
          'Avoiding all negative situations',
          'Accepting that negative emotions are normal and okay',
          'Distracting yourself with entertainment'
        ],
        correctAnswer: 2,
        explanation: 'The loop breaks when we stop adding secondary suffering to primary pain. Accepting that negative emotions are a normal part of human experience stops the spiral.'
      }
    ]
  },
  {
    id: 'mm-values-002',
    title: 'Choosing What to Give a F*ck About',
    type: 'concept',
    duration: 12,
    xpReward: 100,
    content: {
      overview: 'Learn why not giving a f*ck doesn\'t mean being indifferent to everything - it means being selective about what truly deserves your emotional energy.',
      mainContent: `**The F*ck Budget**

Here's Manson's crucial clarification: "Not giving a f*ck" doesn't mean being indifferent. It doesn't mean you don't care about anything. It means you're selective about what you care about.

Think of it like a budget. You have limited emotional energy, limited time, limited mental bandwidth. You can't care deeply about everything. So the question becomes: What deserves your f*cks?

**The Three Subtleties:**

1. **Not giving a f*ck doesn't mean being indifferent. It means being comfortable with being different.**

You'll always give a f*ck about something. The person who claims to care about nothing is lying - they care about appearing not to care. True "not giving a f*ck" means being okay with standing out, with being judged, with not pleasing everyone.

2. **To not give a f*ck about adversity, you must first give a f*ck about something more important.**

If you want to be an entrepreneur, you must give a bigger f*ck about your vision than you give about the fear of failure. If you want great relationships, you must care more about honesty than about avoiding conflict. Your higher f*ck trumps your lower f*ck.

3. **Whether you realize it or not, you are always choosing what to give a f*ck about.**

Even not choosing is a choice. Every moment, you're allocating your limited f*cks. Most people do this unconsciously, giving f*cks to social media opinions, celebrity gossip, and minor inconveniences while neglecting their health, relationships, and purpose.

**The Maturity Arc:**

- **Stage 1 (Youth):** Give a f*ck about everything. Everything is dramatic and important.
- **Stage 2 (Adulthood):** Give a f*ck only about what aligns with your values. Filter out the noise.
- **Stage 3 (Wisdom):** Give a f*ck about only a few chosen things. Maximum impact, minimum noise.

**The Selection Criteria:**

Ask yourself:
- Will this matter in 5 years?
- Is this within my control?
- Does this align with my core values?
- Am I giving this f*ck to please myself or others?

If it won't matter, isn't controllable, doesn't align with your values, or is about others' approval - consider withdrawing your f*ck.`,
      keyTakeaway: 'You have a limited budget of f*cks to give. Spend them wisely on what truly matters to you, not on what society says should matter.',
      actionItem: 'Make a "F*ck Budget" audit. List 10 things you currently care about, then rate each 1-10 on how much it actually matters to your life goals.',
    },
    quiz: [
      {
        id: 'mm-values-002-q1',
        question: 'According to Manson, what does "not giving a f*ck" actually mean?',
        options: [
          'Being apathetic and indifferent to everything',
          'Never experiencing negative emotions',
          'Being comfortable with being different and selective about what matters',
          'Not caring what anyone thinks, ever'
        ],
        correctAnswer: 2,
        explanation: 'Not giving a f*ck means being selective and comfortable with being different - not indifference. It\'s about consciously choosing what deserves your emotional energy.'
      }
    ]
  },
  {
    id: 'mm-values-003',
    title: 'The Subtle Art of Not Trying',
    type: 'concept',
    duration: 10,
    xpReward: 100,
    content: {
      overview: 'Explore the "Backwards Law" - why desperately chasing happiness makes you miserable, and how acceptance creates the space for genuine contentment.',
      mainContent: `**The Backwards Law**

The philosopher Alan Watts articulated what Manson calls "The Backwards Law": The more you pursue feeling better, the less satisfied you become.

This isn't mystical nonsense. It's psychological reality:

- The more you want to be confident, the more you focus on your insecurity
- The more you chase wealth, the more you feel poor
- The more you try to be happy, the more you notice your unhappiness
- The more you seek approval, the more you feel rejected

**Why Trying Backfires:**

When you chase something, you implicitly reinforce that you don't have it. The desperate pursuit of happiness is itself an unhappy activity. It reminds your brain, constantly, that you are lacking.

Consider: Have you ever noticed that the best nights out weren't the ones you meticulously planned and desperately wanted to be amazing? They were the random Tuesday nights where you had zero expectations.

**The Wanting Mind:**

Buddhist psychology calls this the "wanting mind" - the mental state of constantly reaching for something other than what is. It's exhausting. And ironically, it pushes away the very thing you want.

**The Alternative: Acceptance**

Manson proposes something counterintuitive: Accept the negative. Instead of "I must be happy," try "It's okay to be unhappy sometimes." Instead of "I must succeed," try "It's okay if I fail."

This acceptance doesn't mean giving up. It means releasing the desperate grip. And paradoxically, this creates space for genuine change.

**The Swimmer's Paradox:**

A drowning person who panics and flails will sink. But if you relax and accept the water, you float. Stop fighting what is. Work with it.

**Practical Application:**

When you notice yourself chasing an emotional state:
1. Pause and observe the chasing
2. Ask: "What am I implicitly telling myself I lack?"
3. Practice accepting the current state: "Right now, I feel [X]. That is okay."
4. Let the wanting dissolve

The irony: Often, the state you were chasing arrives once you stop chasing it.`,
      keyTakeaway: 'The desperate pursuit of positivity is itself a negative experience. Acceptance of what is - including the negative - paradoxically creates space for genuine contentment.',
      actionItem: 'Identify one thing you\'re desperately trying to achieve or feel. Practice accepting: "It\'s okay if I never [achieve this thing]." Notice how this changes your relationship to it.',
    },
    quiz: [
      {
        id: 'mm-values-003-q1',
        question: 'What is the "Backwards Law" as described by Manson?',
        options: [
          'Looking backward helps you move forward',
          'The more you pursue feeling better, the less satisfied you become',
          'You should do the opposite of what everyone else does',
          'Success comes from learning from past failures'
        ],
        correctAnswer: 1,
        explanation: 'The Backwards Law states that desperately pursuing happiness or success actually reinforces the feeling of lacking them, making you less satisfied rather than more.'
      },
      {
        id: 'mm-values-003-q2',
        question: 'According to Manson, what is the alternative to desperately chasing happiness?',
        options: [
          'Lower your expectations to zero',
          'Pursue more realistic goals',
          'Accept negative emotions as okay and normal',
          'Distract yourself from negative feelings'
        ],
        correctAnswer: 2,
        explanation: 'Instead of chasing happiness, Manson suggests accepting that negative emotions are okay. This acceptance paradoxically creates space for genuine contentment.'
      }
    ]
  },
  {
    id: 'mm-values-004',
    title: 'Happiness as a Problem to Solve',
    type: 'concept',
    duration: 12,
    xpReward: 100,
    content: {
      overview: 'Reframe your relationship with happiness: it\'s not a destination but a process, and problems are not obstacles to happiness but the raw material from which it\'s built.',
      mainContent: `**The Happiness Delusion**

Most people think happiness is something you arrive at. Graduate, and you'll be happy. Get the job, the relationship, the house - then happiness. But ask anyone who has achieved these things: the happiness fades. Then there's a new goal, a new "if only," a new horizon that keeps receding.

Manson's insight: Happiness is not a solvable equation. It's not a destination. It's an activity.

**Problems Are the Point**

Here's the radical reframe: Problems never stop. Even after you solve your current problems, new ones arise. The millionaire has millionaire problems. The celebrity has celebrity problems. The monk has monk problems.

The question isn't "How do I eliminate problems?" (you can't) but "What kind of problems do I want to have?"

**The Happiness Equation:**

Happiness = Solving Problems

Not "Happiness = No Problems." That's a fantasy. You will always have problems. Happiness comes from the continuous process of solving them.

**Two Ways to Be Miserable:**

1. **Denial:** Pretending you don't have problems, or numbing yourself to them (substances, distraction, delusion)
2. **Victimhood:** Believing your problems are unsolvable, that you're uniquely cursed, that nothing can be done

Both avoid the work of actually solving problems.

**Choosing Your Problems:**

Since problems are inevitable, the empowering question becomes: Which problems do you want?

- Want a great body? Your problems are diet, discipline, soreness, time management.
- Want a successful business? Your problems are stress, uncertainty, rejection, long hours.
- Want deep relationships? Your problems are vulnerability, conflict, compromise, emotional labor.

You don't get to choose a problem-free life. You get to choose which problems are worth having.

**The Process IS the Happiness:**

The climber who reaches the summit isn't happy because they have no more problems. They're happy because they solved the problems of the climb. Now they'll find a new mountain. The happiness wasn't waiting at the top - it was embedded in the struggle up.

Stop asking "How can I be happy?" Start asking "What problems am I willing to solve?"`,
      keyTakeaway: 'Happiness is not the absence of problems but the process of solving them. Choose problems worth solving, and you choose a life worth living.',
      actionItem: 'Write down three things you want in life. For each, list the problems that come with it. Ask yourself: Am I willing to embrace these problems?',
    },
    quiz: [
      {
        id: 'mm-values-004-q1',
        question: 'According to Manson, what is the relationship between happiness and problems?',
        options: [
          'Happiness means having no problems',
          'Happiness comes from solving problems',
          'Problems prevent happiness entirely',
          'You should ignore problems to be happy'
        ],
        correctAnswer: 1,
        explanation: 'Manson argues that happiness equals solving problems. Since problems never end, happiness isn\'t a destination but an ongoing process of engaging with meaningful challenges.'
      }
    ]
  },
  {
    id: 'mm-values-005',
    title: 'The Value of Suffering - Choosing Your Struggle',
    type: 'concept',
    duration: 12,
    xpReward: 100,
    content: {
      overview: 'Learn why the question "What do you want out of life?" is less important than "What are you willing to suffer for?" - because the pain you\'re willing to sustain defines your life.',
      mainContent: `**The Better Question**

Everyone wants a great body, a successful business, amazing relationships, freedom, and fulfillment. These aren't useful distinctions because everyone wants them. The differentiating question is:

**What pain are you willing to sustain?**

Everyone wants the result. Not everyone wants the process. The process involves suffering. And what you're willing to suffer for determines who you become.

**The Starving Artist Fallacy:**

Many people say they want to be successful artists, writers, or entrepreneurs. But do they want the decades of rejection? The financial uncertainty? The lonely hours of practice when everyone else is socializing? The repeated failures?

Most people want the fantasy of being successful. They don't want the struggle of becoming successful. And the difference is everything.

**Your Struggle Defines You:**

You can't avoid suffering. Even inaction involves the suffering of stagnation and regret. So the question isn't whether you'll suffer, but what you'll suffer for.

- The athlete suffers through training for the feeling of competition and victory
- The entrepreneur suffers through uncertainty for the possibility of creating something meaningful
- The parent suffers through exhaustion for the depth of family love

**Comfort Is a Dead End:**

The comfortable life avoids problems. But avoiding problems is itself a problem - one that grows larger with time. The person who avoids all discomfort develops no tolerance for it. Small challenges become catastrophic.

**Finding Your Worthy Struggle:**

Ask yourself:
1. What challenges make me feel alive, even when they're hard?
2. What would I do even if I knew I'd never get famous or rich from it?
3. What pain have I consistently been willing to bear?
4. What sacrifices feel meaningful rather than depleting?

Your answers reveal your values. And your values should determine your life direction.

**The Masochist's Edge:**

Manson writes: "Who you are is defined by what you're willing to struggle for." The successful person isn't someone who found a way to avoid struggle. They're someone who found a struggle worth having.`,
      keyTakeaway: 'Everyone wants the reward; the question is who\'s willing to endure the suffering. What you\'re willing to struggle for defines who you become.',
      actionItem: 'Complete this sentence 5 times: "I am willing to suffer [specific pain] for [specific outcome]." Then assess: Are you actually doing this?',
    },
    quiz: [
      {
        id: 'mm-values-005-q1',
        question: 'According to Manson, what question better reveals your true values than "What do you want?"',
        options: [
          'What makes you happy?',
          'What are your goals?',
          'What are you willing to suffer for?',
          'What would your ideal life look like?'
        ],
        correctAnswer: 2,
        explanation: 'Everyone wants success and happiness. The differentiating question is what pain you\'re willing to sustain, because what you\'ll struggle for reveals what you truly value.'
      },
      {
        id: 'mm-values-005-q2',
        question: 'Why does Manson say that comfort is a "dead end"?',
        options: [
          'Comfortable people are lazy and unproductive',
          'Avoiding discomfort reduces your tolerance for it and leads to stagnation',
          'Comfort is always an illusion',
          'You cannot be comfortable and successful simultaneously'
        ],
        correctAnswer: 1,
        explanation: 'Avoiding all discomfort doesn\'t eliminate problems - it creates new ones (stagnation, fragility). The person who avoids challenge develops no resilience, making small problems feel catastrophic.'
      }
    ]
  },
  {
    id: 'mm-values-006',
    title: 'You Are Not Special (And That\'s Okay)',
    type: 'concept',
    duration: 10,
    xpReward: 100,
    content: {
      overview: 'Challenge the self-esteem myth: excessive specialness breeds entitlement and fragility, while accepting your ordinariness liberates you to live an extraordinary life.',
      mainContent: `**The Participation Trophy Generation**

Beginning in the 1970s, educators and parents decided that self-esteem was the key to success. Every child was told they were special. Every child got a trophy. No one could lose.

The intention was good. The results were catastrophic.

Research shows that high self-esteem correlates with being a better student only when it's EARNED through achievement. Unearned self-esteem - telling kids they're special regardless of accomplishment - actually correlates with worse performance, narcissism, and fragility.

**The Entitlement Trap:**

When you believe you're special just for existing, two things happen:

1. **Entitlement to Success:** "I deserve success without the work"
2. **Entitlement to Victimhood:** "I deserve sympathy for my suffering"

Both are escapes from responsibility. Both are lies.

**You're Probably Not Special:**

Statistically, you're almost certainly average at most things. There are 8 billion people on Earth. The math is not in your favor for being exceptional across the board.

And here's the liberating truth: That's completely okay.

**The Freedom of Ordinariness:**

When you accept that you're not special, you stop expecting special treatment. You stop feeling like the world owes you something. You can get to work.

The desperate need to be extraordinary is itself a symptom of insecurity. The truly confident person doesn't need to be special. They're okay being ordinary - and ironically, this acceptance often leads to extraordinary results.

**Redefining Success:**

The goal isn't to become exceptional. The goal is to have meaningful experiences, honest relationships, and to contribute something. A "regular" life, fully lived, is a remarkable achievement.

- The parent who raises good kids: not famous, deeply important
- The worker who does their job with integrity: not celebrated, genuinely valuable
- The friend who shows up consistently: not special, absolutely essential

**The Paradox:**

Only by accepting your ordinariness can you do the ordinary things - daily practice, consistent effort, humble learning - that lead to extraordinary outcomes.`,
      keyTakeaway: 'You don\'t need to be special to have a valuable, meaningful life. Accepting your ordinariness frees you from entitlement and lets you do the real work.',
      actionItem: 'List 5 things you\'re average or below average at. Practice saying: "That\'s okay. I don\'t need to be special at everything to have a good life."',
    },
    quiz: [
      {
        id: 'mm-values-006-q1',
        question: 'According to Manson, what is the problem with the "everyone is special" mentality?',
        options: [
          'It makes people too competitive',
          'It creates entitlement and fragility when unearned',
          'It is factually incorrect',
          'It leads to too much self-reflection'
        ],
        correctAnswer: 1,
        explanation: 'Unearned feelings of specialness breed entitlement (expecting success without work or sympathy without effort) and fragility (inability to handle not being exceptional).'
      }
    ]
  },
  {
    id: 'mm-values-007',
    title: 'The Responsibility/Fault Fallacy',
    type: 'concept',
    duration: 12,
    xpReward: 100,
    content: {
      overview: 'Understand the crucial difference between fault and responsibility: you may not be at fault for your problems, but you are always responsible for how you respond to them.',
      mainContent: `**Fault vs. Responsibility**

This is one of Manson's most important distinctions: Fault and responsibility are not the same thing.

- **Fault** is about the past: Who caused this?
- **Responsibility** is about the present: Who is going to deal with this?

You can be responsible for a situation that is not your fault.

**The Poker Analogy:**

You don't choose the cards you're dealt. The hand is not your fault. But how you play the hand is absolutely your responsibility. You can fold, bluff, bet wisely, or throw your cards at the dealer. Whatever you do, you own the outcome.

**Why This Matters:**

Many people conflate fault and responsibility. They think: "This isn't my fault, so it's not my responsibility." But this thinking leads to victimhood and powerlessness.

- Your abusive childhood wasn't your fault. Healing from it is your responsibility.
- The economic recession wasn't your fault. Finding a job anyway is your responsibility.
- Your partner cheating wasn't your fault. How you respond is your responsibility.

**The Liberating Truth:**

Taking responsibility isn't about self-blame. It's about empowerment. When you say "This is my responsibility," you're saying "I have agency here. I can do something about this."

Blaming others might feel good temporarily, but it makes you a passenger in your own life. Taking responsibility makes you the driver.

**The Victim's Choice:**

Victimhood is always a choice. Bad things happen to everyone. Some people use their trauma as an excuse; others use it as fuel. The difference isn't in the circumstances but in the interpretation.

**Common Responsibility Dodges:**

1. "It's not my fault, so I don't have to deal with it"
2. "I'll deal with it after they apologize"
3. "Why should I have to fix what I didn't break?"
4. "That's just how I am" (using personality as an excuse)

All of these feel justified. All of these are disempowering.

**The Responsibility Flip:**

Instead of "Why did this happen to me?" try "What can I do about this?" Instead of "Who's to blame?" try "What's the next step?"

Accepting responsibility doesn't mean accepting fault. It means accepting your power.`,
      keyTakeaway: 'Fault is about the past; responsibility is about the present. You may not be at fault for your problems, but you\'re always responsible for how you respond to them.',
      actionItem: 'Identify a problem in your life you\'ve been blaming others for. Ask: "Regardless of fault, what is my response-ability here? What can I do?"',
    },
    quiz: [
      {
        id: 'mm-values-007-q1',
        question: 'What is the key difference between fault and responsibility according to Manson?',
        options: [
          'Fault is serious; responsibility is minor',
          'Fault is about the past; responsibility is about the present',
          'Fault requires punishment; responsibility requires apology',
          'There is no difference; they are the same thing'
        ],
        correctAnswer: 1,
        explanation: 'Fault looks backward at who caused something. Responsibility looks at the present: who will deal with it. You can be responsible for things that aren\'t your fault.'
      },
      {
        id: 'mm-values-007-q2',
        question: 'Why does Manson say taking responsibility is "liberating" rather than burdensome?',
        options: [
          'Because it shifts blame to others',
          'Because it means you have agency and can do something about your situation',
          'Because it reduces your workload',
          'Because society rewards responsible people'
        ],
        correctAnswer: 1,
        explanation: 'Taking responsibility is empowering because it means you have agency. Blaming others feels good but makes you a passenger in your life; responsibility makes you the driver.'
      }
    ]
  },
  {
    id: 'mm-values-008',
    title: 'Certainty Is the Enemy of Growth',
    type: 'concept',
    duration: 10,
    xpReward: 100,
    content: {
      overview: 'Discover why being wrong is valuable, certainty is dangerous, and the willingness to doubt yourself is the foundation of all growth.',
      mainContent: `**The Danger of Certainty**

Manson argues that we should be wary of certainty. Not just wrong beliefs, but the feeling of certainty itself.

Why? Because certainty closes your mind. The person who is certain stops learning, stops questioning, stops growing. They've already "arrived" at the answer, so why explore further?

**Manson's Law of Avoidance:**

"The more something threatens your identity, the more you will avoid it."

If you're certain you're smart, you'll avoid situations that might prove otherwise. If you're certain you're a good person, you'll avoid examining your bad behaviors. Certainty protects the ego at the cost of truth.

**The Value of Being Wrong:**

Growth requires being wrong. Every improvement implies: "I was doing/thinking something sub-optimally." If you can't be wrong, you can't grow.

The scientist celebrates when a hypothesis is disproven - it means progress. The wise person celebrates when their beliefs are challenged - it means an opportunity to refine them.

**Identity Narrowing:**

The more you define yourself ("I am X type of person"), the more you limit yourself. If your identity is "I'm not a math person," you'll never try. If your identity is "I'm always right," you'll never learn.

Manson suggests: Define yourself less. Say "I'm someone who is trying to figure things out" instead of "I am X."

**Healthy Doubt:**

The goal isn't to be uncertain about everything (that's paralyzing). The goal is to hold your beliefs lightly, remaining open to evidence that could change them.

Ask yourself regularly:
- What if I'm wrong about this?
- What would it take to change my mind?
- Am I avoiding evidence that contradicts my beliefs?

**The Dunning-Kruger Twist:**

Research shows the most confident people are often the least competent. Expertise brings awareness of how much you don't know. The more you learn, the more you realize there is to learn.

True confidence isn't "I know everything." It's "I don't know everything, and I'm comfortable with that."`,
      keyTakeaway: 'Certainty closes your mind and stops growth. Hold your beliefs lightly, stay open to being wrong, and define yourself by your willingness to learn, not your fixed conclusions.',
      actionItem: 'Identify one strong belief you hold. Spend 10 minutes genuinely considering: "What if I\'m wrong about this? What evidence might challenge this belief?"',
    },
    quiz: [
      {
        id: 'mm-values-008-q1',
        question: 'Why does Manson say certainty is "the enemy of growth"?',
        options: [
          'Certain people are always wrong',
          'Certainty closes your mind, preventing learning and adaptation',
          'Uncertainty is more socially acceptable',
          'Being certain makes you arrogant'
        ],
        correctAnswer: 1,
        explanation: 'Certainty stops exploration and questioning. If you\'re certain you already have the answer, you won\'t seek better answers. Growth requires openness to being wrong.'
      }
    ]
  },
  {
    id: 'mm-values-009',
    title: 'Failure Is the Way Forward',
    type: 'concept',
    duration: 12,
    xpReward: 100,
    content: {
      overview: 'Reframe failure from something to avoid into the essential mechanism of success. Learn why massive failure is often prerequisite to massive success.',
      mainContent: `**Failure as Teacher**

Our culture treats failure as something shameful to be hidden. But Manson argues the opposite: failure is not only acceptable, it's necessary. It's the primary mechanism by which we improve.

**The Failure Paradox:**

The person who fails the most is usually the person who achieves the most. Why? Because:

1. Failure provides information that success doesn't
2. Failure builds resilience that success doesn't
3. Attempting many things (and failing at some) beats attempting few things (and succeeding at most)

**The Failure/Success Correlation:**

- J.K. Rowling: Rejected by 12 publishers before Harry Potter
- Michael Jordan: Cut from his high school basketball team
- Walt Disney: Fired for "lacking imagination"
- Steve Jobs: Fired from the company he founded

These stories aren't despite failure; they're because of the response to failure.

**The Two Types of Fear:**

1. **Fear of trying:** "What if I fail?"
2. **Fear of not trying:** "What if I waste my life playing it safe?"

Most people are controlled by Fear #1. Successful people are controlled by Fear #2.

**Manson's Failure Framework:**

When you fail, ask:
1. What went wrong? (Diagnosis)
2. What can I learn? (Lesson)
3. What will I do differently? (Iteration)

Then try again. Each failure is data. Each attempt is practice.

**The 10,000 Experiments:**

Thomas Edison reportedly failed 10,000 times before inventing the light bulb. His response: "I have not failed. I've just found 10,000 ways that won't work."

This isn't motivational fluff. It's an accurate description of how progress works.

**The Action Creates Clarity:**

You can't think your way to a successful strategy. You have to act, fail, adjust, repeat. The person sitting on the sidelines "planning" never generates the feedback necessary to find what works.

**Permission to Fail:**

Give yourself permission to fail. Not permission to be reckless, but permission to be imperfect. The alternative - demanding perfection before acting - guarantees stagnation.`,
      keyTakeaway: 'Failure is not the opposite of success but the path to it. The willingness to fail repeatedly is what separates those who achieve from those who merely dream.',
      actionItem: 'Identify something you\'ve been avoiding due to fear of failure. Commit to attempting it this week, with the explicit understanding that failure is acceptable and expected.',
    },
    quiz: [
      {
        id: 'mm-values-009-q1',
        question: 'According to Manson, what is the relationship between failure and success?',
        options: [
          'Failure prevents success',
          'Failure and success are unrelated',
          'Failure is the mechanism through which success is achieved',
          'Success erases previous failures'
        ],
        correctAnswer: 2,
        explanation: 'Failure provides information, builds resilience, and is a necessary part of the iteration process. Those who fail most (productively) often achieve most.'
      },
      {
        id: 'mm-values-009-q2',
        question: 'What does Manson say happens when you demand perfection before acting?',
        options: [
          'You eventually achieve perfection',
          'You guarantee stagnation',
          'You reduce your failure rate',
          'You build confidence'
        ],
        correctAnswer: 1,
        explanation: 'Demanding perfection before acting prevents the feedback loop that creates improvement. Without action, there\'s no data. Without data, there\'s no progress.'
      }
    ]
  },
  {
    id: 'mm-values-010',
    title: 'The Importance of Saying No',
    type: 'concept',
    duration: 10,
    xpReward: 100,
    content: {
      overview: 'Understand why the ability to say no is the foundation of meaning, and why boundaries in relationships and life create depth rather than limitation.',
      mainContent: `**The Power of No**

Every yes is a no to something else. When you say yes to a project, you're saying no to the other projects you could be doing. When you say yes to a relationship, you're saying no to complete freedom. When you say yes to a value, you're saying no to opposing values.

Most people want to say yes to everything. Manson argues this creates a life of shallow breadth rather than meaningful depth.

**Rejection Creates Meaning:**

Think about it: If you said yes to every romantic partner who showed interest, would any relationship feel meaningful? If you said yes to every opportunity, would any achievement feel significant?

Rejection - saying no to alternatives - is what makes our choices matter. The value of something is proportional to what we reject to have it.

**Healthy Relationships Require No:**

Manson argues that healthy relationships have clear boundaries. The couple that can't say no to each other has no individuals - just a codependent blob.

Boundary examples:
- "No, I won't tolerate being spoken to that way"
- "No, I need time alone sometimes"
- "No, I disagree with that decision"

These "nos" create respect. They define where one person ends and another begins.

**The Yes-Man Trap:**

The person who can't say no becomes:
- Overcommitted and resentful
- Boundary-less and disrespected
- Unfocused and ineffective
- Inauthentic and lost

Saying yes to everything isn't generosity; it's self-abandonment.

**Strategic No:**

Warren Buffett says the difference between successful people and really successful people is that really successful people say no to almost everything.

When considering a commitment, ask:
- Is this a "hell yes"? (If not, it's a no)
- What will I have to say no to if I say yes to this?
- Does this align with my core values and priorities?

**The Freedom in Constraint:**

Paradoxically, saying no to things creates freedom. By eliminating options, you create focus. By establishing boundaries, you create safety. By rejecting alternatives, you create commitment.`,
      keyTakeaway: 'Saying no is not negative - it\'s the foundation of meaning. What you reject defines what you value. Boundaries create depth, not limitation.',
      actionItem: 'Identify three things in your life you should say no to. Practice saying no this week, noticing how it feels and what it creates space for.',
    },
    quiz: [
      {
        id: 'mm-values-010-q1',
        question: 'According to Manson, why does rejection create meaning?',
        options: [
          'Rejection builds character through suffering',
          'Saying no to alternatives is what makes choices valuable',
          'Being rejected motivates you to try harder',
          'Rejection eliminates competition'
        ],
        correctAnswer: 1,
        explanation: 'The value of something is proportional to what you reject to have it. If you said yes to everything, nothing would feel meaningful. Rejection creates commitment.'
      }
    ]
  },
  {
    id: 'mm-values-011',
    title: 'Rejecting Alternatives - Commitment',
    type: 'concept',
    duration: 12,
    xpReward: 100,
    content: {
      overview: 'Explore why modern unlimited choice creates anxiety and shallowness, and how committed constraint - willingly limiting options - leads to greater depth and satisfaction.',
      mainContent: `**The Paradox of Choice**

Modern life offers unprecedented options. You can date thousands of people on apps. You can pursue any career. You can live anywhere. This sounds like freedom. Often, it feels like paralysis.

Psychologist Barry Schwartz calls this "The Paradox of Choice" - more options often lead to less satisfaction. Why?

1. More options create more FOMO (fear of missing out)
2. More options make decisions harder and more draining
3. More options make us second-guess our choices

**Breadth vs. Depth:**

There's a fundamental trade-off: breadth or depth. You can sample many things superficially, or commit to few things deeply. You cannot do both.

The person who has dated 100 people casually doesn't know what the person who has been married 30 years knows. The person who has tried 10 careers doesn't have the mastery of someone who committed to one for decades.

**Commitment as Freedom:**

This sounds backwards, but commitment creates freedom. The married person is free from the endless search. The committed professional is free from starting over. The person with clear values is free from constant deliberation.

Freedom from choice can be more liberating than freedom of choice.

**The Consumer Mindset:**

Modern culture treats life like a buffet: sample everything, commit to nothing, keep your options open. But this consumer mindset applied to relationships, careers, and values creates shallow, anxious lives.

Some things in life are not consumables. They're investments that only pay off with commitment over time.

**Rejecting Alternatives Intentionally:**

Manson argues we should actively, consciously reject alternatives - not because we must, but because we choose to.

"I could pursue other relationships, but I choose this one."
"I could chase other careers, but I commit to this path."
"I could hold other values, but I stand for these."

**The Narrowing Path:**

Youth is about expanding options - trying things, exploring possibilities. Maturity is about narrowing options - choosing a path, going deep, accepting trade-offs.

This narrowing isn't giving up; it's focusing. It's trading shallow breadth for meaningful depth.`,
      keyTakeaway: 'Unlimited options create anxiety and shallowness. Commitment - willingly rejecting alternatives - creates depth, meaning, and paradoxically, greater freedom.',
      actionItem: 'Identify an area of life where you\'ve been keeping options open. What would it look like to fully commit? What alternatives would you need to consciously reject?',
    },
    quiz: [
      {
        id: 'mm-values-011-q1',
        question: 'What is "The Paradox of Choice" as it relates to Manson\'s argument?',
        options: [
          'Having no choices makes people happier',
          'More options often lead to less satisfaction, not more',
          'People always make wrong choices',
          'Choice is an illusion'
        ],
        correctAnswer: 1,
        explanation: 'More options create FOMO, decision fatigue, and second-guessing. Commitment, by limiting options, creates depth and satisfaction that endless choice cannot.'
      },
      {
        id: 'mm-values-011-q2',
        question: 'According to Manson, what is the relationship between commitment and freedom?',
        options: [
          'Commitment restricts freedom',
          'Freedom and commitment are opposites',
          'Commitment creates a different kind of freedom - freedom from endless searching',
          'You should never commit to maximize freedom'
        ],
        correctAnswer: 2,
        explanation: 'Commitment frees you from the endless search, constant deliberation, and the anxiety of keeping options open. Freedom from choice can be more liberating than freedom of choice.'
      }
    ]
  },
  {
    id: 'mm-values-012',
    title: 'Death - The Great Motivator',
    type: 'concept',
    duration: 12,
    xpReward: 100,
    content: {
      overview: 'Confront the ultimate truth: you are going to die. Learn why death awareness is not morbid but clarifying - the ultimate filter for what actually matters.',
      mainContent: `**Memento Mori - Remember You Will Die**

In ancient Rome, victorious generals parading through the streets would have a slave whisper in their ear: "Memento mori" - remember, you will die. This wasn't meant to be depressing but grounding.

Manson dedicates his final chapter to death because, he argues, confronting mortality is essential for living well.

**Death as Clarifier:**

The thought of death strips away the trivial. Ask yourself: "If I had one year to live, would I care about this?" Suddenly, petty conflicts, social media drama, and status competitions seem absurd.

Death reminds us:
- Time is limited
- Every day is a choice
- Most worries are trivial
- Relationships matter more than achievements
- Being is more important than having

**The Denial Problem:**

Modern culture denies death. We hide aging, medicalize dying, and treat mortality as a problem to solve rather than a reality to accept. This denial creates:

1. Obsession with youth and appearance
2. Endless accumulation of stuff
3. Postponement of meaning ("I'll do that someday")
4. Existential anxiety that can't be named

**Manson's Death Exercise:**

He describes visiting his friend's grave regularly - not out of grief, but out of perspective. Standing at a gravestone reminds you: this is where you're headed. What matters between now and then?

**The Death Test:**

When facing a decision, ask: "On my deathbed, will I regret this choice?"

Usually, the deathbed version of you wants:
- More time with loved ones, not more promotions
- More adventures, not more security
- More authentic self-expression, not more approval
- More creation, not more consumption

**Death as Gift:**

Manson argues that death is what gives life meaning. If you lived forever, nothing would matter - you could always do it later. Death creates urgency, priority, and meaning.

The Stoics called this "premeditatio malorum" - pre-meditating on bad things, including death. Not to be anxious, but to be alive. Not to fear, but to appreciate.

**Living as if Already Dead:**

What if you acted as if each day could be your last? Not recklessly, but appreciatively. With courage. Without wasting time on the trivial.`,
      keyTakeaway: 'Confronting death clarifies life. Mortality is not morbid but motivating - it reveals what truly matters and creates the urgency to pursue it.',
      actionItem: 'Write your own eulogy. What do you want to be remembered for? Now assess: Is your current life pointed toward that legacy?',
    },
    quiz: [
      {
        id: 'mm-values-012-q1',
        question: 'Why does Manson argue that contemplating death is valuable rather than morbid?',
        options: [
          'It helps you prepare for the afterlife',
          'It clarifies what truly matters and creates urgency',
          'It reduces fear of dying',
          'It makes you appreciate material possessions more'
        ],
        correctAnswer: 1,
        explanation: 'Death awareness strips away the trivial and reveals what actually matters. It creates urgency to pursue meaningful things rather than postponing them.'
      },
      {
        id: 'mm-values-012-q2',
        question: 'According to Manson, what does modern culture\'s denial of death create?',
        options: [
          'Healthier, longer lives',
          'Better mental health',
          'Obsession with youth, endless accumulation, and postponed meaning',
          'More spiritual awareness'
        ],
        correctAnswer: 2,
        explanation: 'Denying death leads to obsession with appearance, accumulating stuff, postponing meaningful action, and unnamed existential anxiety. Accepting death clarifies priorities.'
      }
    ]
  },
  {
    id: 'mm-values-013',
    title: 'Good Values vs Bad Values',
    type: 'concept',
    duration: 12,
    xpReward: 100,
    content: {
      overview: 'Master the distinction between good and bad values: learn the criteria that separate values worth holding from values that will make you miserable.',
      mainContent: `**The Value Problem**

Your values determine your problems. Your problems determine your quality of life. So: Choose good values.

But what makes a value "good" or "bad"? Manson provides clear criteria.

**Good Values Are:**

1. **Reality-based** - Connected to facts, not fantasies
2. **Socially constructive** - Help others as well as yourself
3. **Immediate and controllable** - You can act on them now, regardless of external circumstances

**Bad Values Are:**

1. **Superstitious** - Based on magical thinking or delusion
2. **Socially destructive** - Help you at others' expense
3. **Not immediate or controllable** - Dependent on external events or other people

**Bad Value Examples:**

- **Pleasure:** Feels good but provides no lasting satisfaction. Chasing highs leads to addiction and emptiness.
- **Material Success:** The hedonic treadmill - you adapt to each achievement and need more. Fulfillment is always around the next corner.
- **Always Being Right:** Closes you to learning. Makes you defensive. Damages relationships.
- **Staying Positive:** Denies reality. Creates toxic positivity. Avoids necessary negative emotions.

**Good Value Examples:**

- **Honesty:** You control it. It serves relationships. It's based in reality.
- **Creativity:** You control it. It adds to the world. You can do it now.
- **Humility:** You control it. It opens you to learning. It doesn't depend on others.
- **Vulnerability:** You control it. It deepens connections. It requires no external validation.
- **Curiosity:** You control it. It leads to growth. It engages with reality.

**The Control Test:**

For any value, ask: "Can I pursue this value regardless of what happens externally?"

If yes, it's potentially a good value. If no, you've outsourced your wellbeing to things you can't control.

**Values Shape Problems:**

Different values create different problems:

- Value: Popularity → Problems: Anxiety, inauthenticity, exhaustion
- Value: Honesty → Problems: Difficult conversations, temporary conflict, growth

Both create problems. But honesty's problems are better problems.

**The Upgrade:**

Don't try to eliminate values. Upgrade them. Instead of "being liked" (bad value), try "being honest" (good value). Instead of "being rich" (bad value), try "being creative" (good value).`,
      keyTakeaway: 'Good values are reality-based, socially constructive, and within your control. Bad values are superstitious, destructive, or dependent on external circumstances.',
      actionItem: 'List your top 5 current values. Evaluate each: Is it reality-based? Socially constructive? Controllable? Identify upgrades for any bad values.',
    },
    quiz: [
      {
        id: 'mm-values-013-q1',
        question: 'Which of these is a "good value" according to Manson\'s criteria?',
        options: [
          'Being popular with everyone',
          'Having more money than your peers',
          'Honesty even when difficult',
          'Always feeling positive'
        ],
        correctAnswer: 2,
        explanation: 'Honesty is reality-based, socially constructive, and within your control. The other options are either uncontrollable (popularity, wealth) or deny reality (toxic positivity).'
      },
      {
        id: 'mm-values-013-q2',
        question: 'What are the three characteristics of a "bad value" according to Manson?',
        options: [
          'Difficult, unpopular, and old-fashioned',
          'Superstitious, socially destructive, and not controllable',
          'Emotional, subjective, and personal',
          'Traditional, religious, and conservative'
        ],
        correctAnswer: 1,
        explanation: 'Bad values are based on magical thinking (superstitious), harm others (socially destructive), and depend on external circumstances you can\'t control.'
      }
    ]
  },
  {
    id: 'mm-values-014',
    title: 'The Do Something Principle',
    type: 'concept',
    duration: 10,
    xpReward: 100,
    content: {
      overview: 'Reverse the motivation equation: learn why action creates motivation (not the other way around), and how doing something - anything - breaks the paralysis of waiting to feel ready.',
      mainContent: `**The Motivation Myth**

Most people think the chain goes: Inspiration → Motivation → Action

"When I feel inspired, I'll be motivated, and then I'll act."

But waiting for inspiration is a trap. Inspiration is unreliable. If you wait for motivation, you'll wait forever.

**The Do Something Principle:**

Manson flips the chain: Action → Inspiration → Motivation

Action creates motivation. Doing something - anything - generates momentum. Momentum generates motivation. Motivation generates more action.

**Why This Works:**

1. **Action creates feedback:** You can't know what works until you try
2. **Action creates momentum:** Objects in motion stay in motion
3. **Action creates identity:** You become what you do
4. **Action defeats overthinking:** Analysis paralysis ends when you move

**The Writer's Secret:**

Every successful writer knows: You don't wait for inspiration to write. You sit down and write. Inspiration shows up mid-sentence, if it shows up at all. The act of writing creates the state required for writing.

**Minimum Viable Action:**

When you don't know what to do, do anything. The smallest possible action.

- Can't write a book? Write one sentence.
- Can't exercise for an hour? Do one pushup.
- Can't solve the whole problem? Address one small piece.

The action doesn't have to be perfect or even good. It just has to exist. Something beats nothing.

**The Motivation Loop:**

Action → Results → Motivation → More Action → Better Results → More Motivation...

The loop is self-sustaining once started. But it requires that initial action.

**Overcoming Inertia:**

The hardest part is starting. Once you're moving, momentum takes over. So make starting as easy as possible.

- Don't commit to write a chapter; commit to opening the document
- Don't commit to a full workout; commit to putting on your shoes
- Don't commit to solving everything; commit to taking one step

**The Anti-Procrastination Trick:**

When procrastinating, ask: "What is the smallest possible action I can take right now?" Then do it. Just that. Often, that's enough to trigger the loop.`,
      keyTakeaway: 'Action creates motivation, not the other way around. Don\'t wait to feel ready - do something, anything, and let momentum build.',
      actionItem: 'Identify something you\'ve been waiting to feel motivated about. Take the smallest possible action on it today - right now if possible.',
    },
    quiz: [
      {
        id: 'mm-values-014-q1',
        question: 'What is the "Do Something Principle"?',
        options: [
          'Wait for inspiration before acting',
          'Action creates motivation, not the other way around',
          'Do as many things as possible',
          'Something is better than everything'
        ],
        correctAnswer: 1,
        explanation: 'Instead of waiting for motivation to act, the Do Something Principle says that taking action generates the motivation for more action. The chain is Action → Motivation, not Motivation → Action.'
      },
      {
        id: 'mm-values-014-q2',
        question: 'According to Manson, what should you do when you don\'t know what action to take?',
        options: [
          'Wait for clarity before acting',
          'Consult an expert',
          'Take the smallest possible action - anything',
          'Make a detailed plan first'
        ],
        correctAnswer: 2,
        explanation: 'When stuck, do anything. The action doesn\'t need to be perfect or even good. Minimum viable action creates momentum, which creates motivation, which creates better action.'
      }
    ]
  },
  {
    id: 'mm-values-015',
    title: 'And Then You Die - Legacy Thinking',
    type: 'concept',
    duration: 12,
    xpReward: 100,
    content: {
      overview: 'Integrate the book\'s lessons into a philosophy of legacy: how to live now with awareness of your mortality, creating a life of meaning that extends beyond your death.',
      mainContent: `**The Final Integration**

Manson ends his book by bringing everything together through the lens of mortality. The question isn't just "How do I feel good?" but "How do I create something that matters?"

**Two Types of Meaning:**

1. **Temporary Meaning:** Pleasures, achievements, experiences that feel good but fade
2. **Legacy Meaning:** Contributions, creations, and relationships that outlast you

Both matter. But most people focus exclusively on temporary meaning and wonder why they feel empty.

**The Immortality Project:**

Psychologist Ernest Becker argued that humans are driven by "immortality projects" - attempts to leave something behind that death can't touch. These can be healthy (creating art, building institutions, raising children) or unhealthy (pursuing fame, accumulating wealth, demanding worship).

What's your immortality project? Is it worthy of your limited time?

**Legacy Questions:**

1. What will remain after you're gone?
2. Whose lives are better because you existed?
3. What did you create that didn't exist before?
4. What problems did you solve?
5. What truth did you stand for?

**The Values-Legacy Connection:**

Your values determine your legacy. If you value honesty, your legacy is relationships built on trust. If you value creativity, your legacy is the things you made. If you value courage, your legacy is the changes you championed.

Bad values create bad legacies (or none at all). The person who valued only wealth leaves behind money - which others fight over. The person who valued only pleasure leaves behind nothing.

**Living the Eulogy:**

What do you want said at your funeral? Now reverse-engineer: What must you do today to earn those words?

**The Subtle Art, Summarized:**

1. Life has problems. Choose good ones.
2. You're not special. That's liberating.
3. You're responsible for your life, regardless of fault.
4. Certainty kills growth. Stay humble.
5. Failure is how you learn. Embrace it.
6. Say no to create meaning.
7. Commit deeply rather than sampling broadly.
8. Death gives life meaning. Use it.
9. Choose good values. Avoid bad ones.
10. Action creates motivation. Move.

**The Final F*ck:**

In the end, give a f*ck about what will matter when you're dying. Give a f*ck about relationships, contribution, growth, truth, and courage. These are f*cks well-spent.

Everything else? Let it go.`,
      keyTakeaway: 'Live with your legacy in mind. Choose values that create something lasting, give f*cks only to what will matter at the end, and let everything else go.',
      actionItem: 'Write a letter to yourself from your 90-year-old self. What does that person wish you had given more f*cks about? Less? Start making changes today.',
    },
    quiz: [
      {
        id: 'mm-values-015-q1',
        question: 'What is the difference between "temporary meaning" and "legacy meaning"?',
        options: [
          'Temporary meaning is fake; legacy meaning is real',
          'Temporary meaning fades; legacy meaning outlasts you',
          'Temporary meaning is selfish; legacy meaning is selfless',
          'There is no real difference'
        ],
        correctAnswer: 1,
        explanation: 'Temporary meaning comes from pleasures and achievements that fade. Legacy meaning comes from contributions, creations, and relationships that outlast your death. Both matter, but legacy creates lasting significance.'
      },
      {
        id: 'mm-values-015-q2',
        question: 'According to Manson\'s final integration, what should determine what you "give a f*ck about"?',
        options: [
          'What makes you feel good in the moment',
          'What others expect of you',
          'What will matter when you\'re dying',
          'What is easiest to accomplish'
        ],
        correctAnswer: 2,
        explanation: 'The death test: Give f*cks to what will matter at the end - relationships, contribution, growth, truth, courage. These create meaningful legacy. Everything else? Let it go.'
      }
    ]
  },
];

export default valuesLessons;
