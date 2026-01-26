import type { Lesson } from '@/types';

export const emotionalIntelligenceLessons: Lesson[] = [
  {
    id: 'mm-eq-001',
    title: 'The Five Components of EQ (Goleman)',
    type: 'concept',
    duration: 12,
    xpReward: 100,
    content: {
      overview: 'Discover Daniel Goleman\'s groundbreaking framework that defines emotional intelligence through five essential components.',
      mainContent: `**The Architecture of Emotional Intelligence**

In 1995, psychologist Daniel Goleman revolutionized our understanding of human potential with his book "Emotional Intelligence." His research revealed a startling truth: IQ accounts for only about 20% of life success. The remaining 80% is largely determined by emotional intelligence (EQ).

**The Five Pillars of EQ**

Goleman identified five interconnected components that form the foundation of emotional intelligence:

**1. Self-Awareness**
This is the cornerstone of all emotional intelligence. Self-awareness means recognizing your emotions as they occur, understanding your strengths and weaknesses, and having a realistic assessment of your capabilities. People high in self-awareness can observe themselves without judgment and understand how their feelings affect their thoughts and behavior.

**2. Self-Regulation**
Once you're aware of your emotions, the next step is managing them effectively. Self-regulation involves controlling impulsive feelings, managing your emotions in healthy ways, taking initiative, following through on commitments, and adapting to changing circumstances. It's not about suppressing emotions but channeling them productively.

**3. Motivation**
Emotionally intelligent people are driven by internal rewards rather than external ones. They have a passion for work that goes beyond money and status. They possess optimism even in the face of failure, organizational commitment, and a drive to improve and achieve.

**4. Empathy**
Empathy is the ability to understand the emotional makeup of other people. It involves treating people according to their emotional reactions, sensing what others feel without them saying it, and understanding the dynamics of relationships and group interactions.

**5. Social Skills**
The culmination of the other four components, social skills involve managing relationships, building networks, finding common ground, and building rapport. Those with strong social skills excel at team leadership, persuasion, and collaboration.

**Why EQ Matters More Than You Think**

Research consistently shows that emotional intelligence predicts success in leadership, relationships, and overall life satisfaction more accurately than traditional intelligence. In the workplace, 90% of top performers have high EQ. In relationships, partners with higher emotional intelligence report greater satisfaction and fewer conflicts.

The most encouraging aspect of Goleman's work is that unlike IQ, which remains relatively fixed throughout life, emotional intelligence can be developed and strengthened at any age. This module will guide you through developing each of these five components.`,
      keyTakeaway: 'Emotional intelligence comprises five learnable skills: self-awareness, self-regulation, motivation, empathy, and social skills. Unlike IQ, EQ can be developed throughout your lifetime.',
      actionItem: 'Rate yourself from 1-10 on each of the five EQ components. Identify your weakest area and commit to focusing on it as you progress through this module.',
    },
    quiz: [
      {
        id: 'mm-eq-001-q1',
        question: 'According to Goleman, approximately what percentage of life success is determined by factors OTHER than IQ?',
        options: ['20%', '50%', '80%', '95%'],
        correctAnswer: 2,
        explanation: 'Goleman\'s research suggests IQ accounts for only about 20% of success, meaning roughly 80% is determined by other factors, primarily emotional intelligence.'
      },
      {
        id: 'mm-eq-001-q2',
        question: 'Which component of EQ is considered the foundation upon which all others are built?',
        options: ['Social Skills', 'Self-Awareness', 'Motivation', 'Empathy'],
        correctAnswer: 1,
        explanation: 'Self-awareness is the cornerstone of emotional intelligence. You cannot regulate emotions you don\'t recognize, and you cannot understand others without first understanding yourself.'
      }
    ]
  },
  {
    id: 'mm-eq-002',
    title: 'Self-Awareness - Knowing Your Emotions',
    type: 'concept',
    duration: 14,
    xpReward: 110,
    content: {
      overview: 'Learn to recognize and understand your emotional states as they happen, developing the foundational skill of emotional self-awareness.',
      mainContent: `**The Mirror Within**

Self-awareness is the ability to recognize and understand your own emotions, moods, and drives, as well as their effect on others. It sounds simple, yet most people operate on emotional autopilot, unaware of what they're truly feeling until the emotion has already driven their behavior.

**The Three Levels of Emotional Self-Awareness**

**Level 1: Noticing Emotions After the Fact**
At this basic level, you recognize emotions only in retrospect. "I was really angry during that meeting" or "I realize now I was anxious all week." While this is a starting point, it leaves you reactive rather than responsive.

**Level 2: Recognizing Emotions in Real-Time**
Here, you can identify your emotions as they occur. You notice your frustration rising during a difficult conversation or feel anxiety building before a presentation. This awareness creates a small but crucial gap between stimulus and response.

**Level 3: Understanding Emotional Patterns**
At the highest level, you understand your emotional tendencies, triggers, and patterns. You know that you tend toward irritability when tired, that certain topics make you defensive, or that you withdraw when hurt.

**The Body as Emotional Messenger**

Emotions manifest physically before we consciously recognize them. Learning to read your body's signals is essential:

- **Anger**: Tension in jaw, clenched fists, heat in face, rapid heartbeat
- **Fear/Anxiety**: Tight chest, shallow breathing, cold hands, stomach butterflies
- **Sadness**: Heavy feeling, fatigue, pressure behind eyes, slumped posture
- **Joy**: Lightness, relaxed muscles, warmth in chest, natural smile

**Developing Your Emotional Vocabulary**

Many people operate with a limited emotional vocabulary: "good," "bad," "fine," "stressed." This imprecision keeps emotions vague and unmanageable. Expanding your vocabulary from "angry" to recognizing frustration, irritation, resentment, fury, or annoyance allows for more precise understanding and response.

**The Check-In Practice**

Three times daily (morning, midday, evening), pause for 60 seconds and ask yourself:
- What am I feeling right now?
- Where do I feel it in my body?
- What might have triggered this feeling?

This simple practice dramatically increases emotional self-awareness within weeks.

**The Judgment Trap**

A crucial aspect of self-awareness is observing without judging. Thinking "I shouldn't feel this way" blocks genuine awareness. All emotions are valid signals; the goal is to understand them, not to immediately change or suppress them.`,
      keyTakeaway: 'Self-awareness develops through consistent practice of noticing emotions in real-time, reading physical body signals, and expanding your emotional vocabulary without self-judgment.',
      actionItem: 'Set three alarms on your phone for today (morning, midday, evening). At each alarm, take 60 seconds to identify what emotion you\'re experiencing and where you feel it in your body. Record your observations.',
    },
    quiz: [
      {
        id: 'mm-eq-002-q1',
        question: 'What is the highest level of emotional self-awareness?',
        options: ['Noticing emotions after they pass', 'Recognizing emotions in real-time', 'Understanding emotional patterns and triggers', 'Suppressing negative emotions'],
        correctAnswer: 2,
        explanation: 'Understanding your emotional patterns and triggers represents the deepest level of self-awareness, allowing you to anticipate and prepare for emotional responses rather than just react to them.'
      },
      {
        id: 'mm-eq-002-q2',
        question: 'Why is expanding your emotional vocabulary important?',
        options: ['It makes you sound more intelligent', 'It allows for more precise understanding and appropriate responses', 'It helps you avoid feeling emotions', 'It impresses others in conversations'],
        correctAnswer: 1,
        explanation: 'A rich emotional vocabulary helps you distinguish between similar but different emotions (like frustration vs. disappointment), leading to more accurate understanding and more appropriate responses.'
      }
    ]
  },
  {
    id: 'mm-eq-003',
    title: 'The Amygdala Hijack - Why We React',
    type: 'concept',
    duration: 12,
    xpReward: 100,
    content: {
      overview: 'Understand the neuroscience behind emotional reactions and why your brain sometimes bypasses rational thought.',
      mainContent: `**When Your Brain Takes a Shortcut**

Have you ever said something in anger you immediately regretted? Frozen in a moment that demanded action? Snapped at someone you love over something trivial? These moments happen because of a phenomenon Daniel Goleman called the "amygdala hijack."

**The Amygdala: Your Brain's Alarm System**

Deep within your brain sits a small, almond-shaped structure called the amygdala. It's your emotional processing center and serves as an early warning system, constantly scanning for threats. When it perceives danger, it can trigger a response before your rational mind even knows what's happening.

**The Hijack Mechanism**

Under normal circumstances, sensory information travels to the thalamus, then to the prefrontal cortex (your rational brain) for evaluation, and finally to the amygdala for emotional processing. This route allows you to respond thoughtfully.

But when the amygdala perceives a threat, it can bypass the prefrontal cortex entirely, triggering an immediate fight, flight, or freeze response. This shortcut evolved to save our ancestors from predators but now activates for modern "threats" like criticism, rejection, or embarrassment.

**Signs You're Being Hijacked**

- Sudden, intense emotional reaction
- Physical symptoms: racing heart, tunnel vision, flushed face
- Impulse to fight, flee, or freeze
- Temporary inability to think clearly
- Later regret about your response
- Reaction disproportionate to the actual situation

**Why Modern Brains Get Hijacked**

The amygdala can't distinguish between a physical threat and an emotional one. A harsh email triggers the same alarm system as a charging predator. Your body prepares for survival while you're sitting safely at your desk.

**The 6-Second Rule**

Here's the crucial fact: the initial chemical surge of an amygdala hijack lasts approximately 6 seconds. If you can pause for just 6 seconds without acting, the prefrontal cortex can regain some control. Techniques include:

- Taking a deep breath
- Counting to six slowly
- Pressing your feet firmly into the floor
- Squeezing and releasing your hands

**Building a Longer Fuse**

While you can't prevent the amygdala from firing, you can train it to be less reactive over time through:
- Regular mindfulness practice
- Adequate sleep (sleep deprivation increases amygdala reactivity by 60%)
- Physical exercise
- Reducing chronic stress

Understanding the amygdala hijack removes shame from reactive moments and gives you a framework for developing greater emotional control.`,
      keyTakeaway: 'The amygdala hijack is a neurological response where your emotional brain bypasses rational thought. The chemical surge lasts only 6 seconds, so a brief pause can restore executive function.',
      actionItem: 'Identify a recent moment when you were emotionally hijacked. Recognize the signs and choose one pause technique (breathing, counting, grounding) to practice this week when you feel triggered.',
    },
    quiz: [
      {
        id: 'mm-eq-003-q1',
        question: 'During an amygdala hijack, what brain region is bypassed?',
        options: ['The hippocampus', 'The cerebellum', 'The prefrontal cortex', 'The brain stem'],
        correctAnswer: 2,
        explanation: 'The amygdala hijack bypasses the prefrontal cortex, which is responsible for rational thinking and decision-making, leading to impulsive emotional reactions.'
      },
      {
        id: 'mm-eq-003-q2',
        question: 'Approximately how long does the initial chemical surge of an amygdala hijack last?',
        options: ['30 seconds', '6 seconds', '2 minutes', '10 minutes'],
        correctAnswer: 1,
        explanation: 'The initial chemical surge lasts approximately 6 seconds. This is why pausing briefly before reacting can be so effective in regaining emotional control.'
      }
    ]
  },
  {
    id: 'mm-eq-004',
    title: 'Emotional Labeling - Name It to Tame It',
    type: 'concept',
    duration: 11,
    xpReward: 100,
    content: {
      overview: 'Master the powerful technique of naming your emotions to reduce their intensity and gain greater emotional control.',
      mainContent: `**The Power of Putting Feelings into Words**

Neuroscientist Dr. Matthew Lieberman made a remarkable discovery: the simple act of labeling an emotion reduces its intensity. Brain imaging studies show that when people name their emotions, activity in the amygdala decreases while the prefrontal cortex becomes more active. This phenomenon, often called "Name It to Tame It," is one of the most accessible tools for emotional regulation.

**The Science Behind Labeling**

When you experience an emotion without labeling it, the amygdala drives your experience, keeping you in a reactive state. But the moment you put the feeling into words, you activate the right ventrolateral prefrontal cortex, which has an inhibitory effect on the amygdala.

In Lieberman's studies, participants who simply said "I feel angry" showed up to a 50% reduction in amygdala activity compared to those who didn't label their emotions. The effect worked even when people labeled emotions in photographs of others.

**How to Practice Emotional Labeling**

**Step 1: Notice the Emotion**
Pause and turn your attention inward. What are you experiencing? Don't rush past this step.

**Step 2: Name It Specifically**
Move beyond vague labels like "bad" or "upset." Get specific:
- Instead of "angry": frustrated, irritated, resentful, furious, annoyed
- Instead of "sad": disappointed, melancholic, grief-stricken, lonely, dejected
- Instead of "anxious": worried, nervous, apprehensive, fearful, overwhelmed
- Instead of "happy": content, excited, grateful, peaceful, elated

**Step 3: Use "I Notice" Language**
Frame your labeling with observational language: "I notice I'm feeling disappointed" rather than "I am disappointed." This creates psychological distance and reinforces that you have emotions but are not your emotions.

**Step 4: Allow Without Judgment**
After labeling, simply allow the feeling to exist. Don't try to immediately fix or change it. The labeling itself is doing the work.

**The Labeling Habit**

Make emotional labeling automatic by practicing during neutral moments, not just during emotional intensity. Throughout your day, periodically ask: "What am I feeling right now?" and give it a precise name.

**Common Mistakes to Avoid**

- Using thoughts instead of feelings ("I feel like he was wrong" is a thought, not a feeling)
- Labeling only negative emotions (positive emotions benefit from labeling too)
- Rushing to problem-solve instead of simply naming
- Using labels that blame others ("I feel attacked" puts focus externally)

The more you practice emotional labeling, the more automatic it becomes, creating a powerful buffer between stimulus and response.`,
      keyTakeaway: 'Naming your emotions precisely activates the prefrontal cortex and reduces amygdala activity by up to 50%, making emotional labeling one of the simplest and most effective regulation techniques.',
      actionItem: 'Keep an emotion log for one day. Every hour, write down the specific emotion you\'re experiencing using precise vocabulary. Notice if the act of labeling changes your relationship to the feeling.',
    },
    quiz: [
      {
        id: 'mm-eq-004-q1',
        question: 'What happens in the brain when you label an emotion?',
        options: ['Amygdala activity increases', 'The hippocampus shuts down', 'Prefrontal cortex activates and amygdala activity decreases', 'Nothing measurable occurs'],
        correctAnswer: 2,
        explanation: 'Labeling emotions activates the right ventrolateral prefrontal cortex, which has an inhibitory effect on the amygdala, reducing emotional intensity by up to 50%.'
      }
    ]
  },
  {
    id: 'mm-eq-005',
    title: 'Self-Regulation - The Pause Between Stimulus and Response',
    type: 'concept',
    duration: 14,
    xpReward: 120,
    content: {
      overview: 'Develop the crucial ability to manage your emotional responses and choose how you react to life\'s challenges.',
      mainContent: `**The Space Where Freedom Lives**

Viktor Frankl, psychiatrist and Holocaust survivor, wrote: "Between stimulus and response there is a space. In that space is our power to choose our response. In our response lies our growth and our freedom." Self-regulation is the art of widening that space.

**What Self-Regulation Is and Isn't**

Self-regulation is NOT:
- Suppressing or denying emotions
- Never feeling negative emotions
- Being emotionless or stoic
- Gritting your teeth through difficulty

Self-regulation IS:
- Choosing how to express emotions appropriately
- Managing impulses and urges
- Thinking before acting
- Adapting to changing circumstances
- Maintaining composure under pressure

**The Self-Regulation Toolkit**

**1. The Pause**
The simplest and most powerful technique. When triggered, deliberately pause before responding. Take a breath. Count to three. Create space.

**2. The STOP Technique**
- **S**top: Halt your automatic reaction
- **T**hink: What am I feeling? What are my options?
- **O**bserve: Notice sensations, thoughts, impulses without acting
- **P**roceed: Choose a response aligned with your values

**3. Temperature Check**
Rate your emotional intensity on a scale of 1-10. Anything above 7, wait before making important decisions or having crucial conversations.

**4. The 10-10-10 Rule**
Ask yourself: How will I feel about this response in 10 minutes? 10 months? 10 years? This creates temporal distance and perspective.

**5. Physiological Regulation**
Your body affects your emotions. Use these techniques to calm your nervous system:
- Slow, deep breathing (exhale longer than inhale)
- Progressive muscle relaxation
- Cold water on face or wrists
- Brief physical movement

**Building Self-Regulation Capacity**

Self-regulation is like a muscle that strengthens with use but fatigues with overuse. Factors that deplete it include:
- Sleep deprivation
- Hunger (low blood sugar)
- Decision fatigue
- Chronic stress
- Alcohol

Factors that strengthen it include:
- Regular practice with small frustrations
- Adequate sleep
- Meditation and mindfulness
- Physical exercise
- Clear values and goals

**The Values Anchor**

When emotional impulses pull you in one direction, your values can anchor you. Ask: "What would the best version of myself do right now?" This simple question often clarifies the right response.

Self-regulation doesn't mean you'll never lose your temper or feel overwhelmed. It means those instances become rarer, and recovery becomes faster.`,
      keyTakeaway: 'Self-regulation is about creating space between stimulus and response, allowing you to choose your reaction rather than being driven by impulse. It\'s a skill that strengthens with practice.',
      actionItem: 'Practice the STOP technique three times today with minor frustrations (traffic, a slow computer, a minor annoyance). Document what happens when you create space before responding.',
    },
    quiz: [
      {
        id: 'mm-eq-005-q1',
        question: 'According to Viktor Frankl, where does our freedom lie?',
        options: ['In avoiding all negative experiences', 'In the space between stimulus and response', 'In controlling other people', 'In suppressing emotions'],
        correctAnswer: 1,
        explanation: 'Frankl taught that between every stimulus and response, there is a space where we can choose our reaction. In that choice lies our growth and freedom.'
      },
      {
        id: 'mm-eq-005-q2',
        question: 'Which of the following depletes self-regulation capacity?',
        options: ['Regular meditation', 'Adequate sleep', 'Decision fatigue', 'Physical exercise'],
        correctAnswer: 2,
        explanation: 'Decision fatigue depletes self-regulation capacity. Making many decisions throughout the day uses up cognitive resources needed for emotional regulation.'
      }
    ]
  },
  {
    id: 'mm-eq-006',
    title: 'Motivation from Within - Intrinsic Drive',
    type: 'concept',
    duration: 13,
    xpReward: 110,
    content: {
      overview: 'Understand and cultivate intrinsic motivation, the internal drive that sustains effort and achievement over time.',
      mainContent: `**The Fire That Burns from Within**

Emotionally intelligent people possess a drive that goes beyond external rewards like money, status, or recognition. They're motivated by internal factors: the joy of mastery, the pursuit of meaning, and the satisfaction of growth. This intrinsic motivation is more sustainable and powerful than any external incentive.

**Intrinsic vs. Extrinsic Motivation**

**Extrinsic motivation** comes from outside: salary, bonuses, praise, grades, avoiding punishment. It works for simple, routine tasks but can actually decrease performance on complex, creative work.

**Intrinsic motivation** comes from within: curiosity, enjoyment, personal growth, meaning, and mastery. It's associated with greater persistence, creativity, and well-being.

Research by Edward Deci and Richard Ryan (Self-Determination Theory) shows that intrinsic motivation requires three elements:

**1. Autonomy**: Feeling in control of your choices
**2. Competence**: Feeling capable and effective
**3. Relatedness**: Feeling connected to others

**The Four Pillars of Intrinsic Motivation**

**Purpose**
Connect your actions to something larger than yourself. Why does this matter? Who benefits? How does this align with your values? People who see meaning in their work show 64% higher satisfaction and 50% higher engagement.

**Mastery**
The desire to improve and grow is a fundamental human drive. Set goals that stretch you, seek feedback, and celebrate progress. The process of getting better at something meaningful is inherently motivating.

**Curiosity**
Approach tasks with genuine interest. Ask questions. Explore. The brain releases dopamine when we encounter novelty and learn new things.

**Achievement**
Internal achievement means meeting your own standards, not just others' expectations. Define success for yourself. Track your progress against your own goals.

**Cultivating Intrinsic Motivation**

- **Reframe "have to" as "choose to"**: Even obligations involve choice. Recognizing your agency increases motivation.
- **Find the interesting angle**: Every task has aspects worth exploring. Look for what you can learn.
- **Connect to values**: Link tasks to what matters most to you.
- **Create optimal challenge**: Tasks that are too easy bore us; too hard overwhelms. Aim for just beyond your current ability.
- **Track internal wins**: Note moments of growth, insight, and progress independent of external validation.

**The Motivation Equation**

Motivation = (Value x Expectancy) / (Delay x Impulsivity)

- Value: How meaningful is this to me?
- Expectancy: Do I believe I can succeed?
- Delay: How far away is the reward?
- Impulsivity: How easily am I distracted?

To increase motivation: raise value and expectancy, decrease delay and impulsivity.`,
      keyTakeaway: 'Intrinsic motivation, driven by autonomy, competence, and relatedness, is more powerful and sustainable than external rewards. It can be cultivated through purpose, mastery, curiosity, and internal achievement.',
      actionItem: 'Choose one task you\'ve been procrastinating. Apply the intrinsic motivation pillars: Why does it matter (purpose)? What can you learn (mastery)? What\'s interesting about it (curiosity)? Notice how your motivation shifts.',
    },
    quiz: [
      {
        id: 'mm-eq-006-q1',
        question: 'According to Self-Determination Theory, which three elements are required for intrinsic motivation?',
        options: ['Money, status, praise', 'Autonomy, competence, relatedness', 'Fear, obligation, duty', 'Goals, deadlines, accountability'],
        correctAnswer: 1,
        explanation: 'Deci and Ryan\'s Self-Determination Theory identifies autonomy (feeling in control), competence (feeling capable), and relatedness (feeling connected) as the three essential elements for intrinsic motivation.'
      }
    ]
  },
  {
    id: 'mm-eq-007',
    title: 'Empathy - Understanding Others\' Emotions',
    type: 'concept',
    duration: 14,
    xpReward: 120,
    content: {
      overview: 'Develop the ability to understand and share the feelings of others, a cornerstone of meaningful relationships and effective leadership.',
      mainContent: `**Walking in Another's Shoes**

Empathy is the ability to understand and share the feelings of another person. It's the bridge between self-focused awareness and genuine connection with others. Without empathy, relationships remain superficial, leadership becomes manipulation, and communication fails to truly connect.

**The Three Types of Empathy**

**1. Cognitive Empathy (Perspective-Taking)**
Understanding what someone else is thinking or feeling from an intellectual standpoint. You can see their viewpoint without necessarily feeling it yourself. This is useful in negotiations, understanding different opinions, and predicting behavior.

**2. Emotional Empathy (Affective Empathy)**
Actually feeling what another person feels. When they're sad, you feel sadness. When they're excited, you feel excitement. This creates deep connection but can lead to empathy fatigue if not balanced.

**3. Compassionate Empathy**
Understanding someone's predicament, feeling with them, AND being moved to help. This is empathy in action, combining understanding with motivation to respond appropriately.

**The Empathy Skill Set**

**Active Listening**
- Give full attention (put away devices)
- Make appropriate eye contact
- Use encouraging non-verbal cues
- Avoid interrupting or planning your response
- Reflect back what you hear

**Perspective-Taking Questions**
- What might they be experiencing right now?
- What pressures or concerns might they have?
- How would I feel in their situation with their history?
- What do they need most in this moment?

**Emotional Validation**
Validation doesn't mean agreement. It means acknowledging that someone's emotional experience makes sense given their perspective. Phrases like: "That sounds really frustrating" or "I can understand why you'd feel that way" validate without necessarily agreeing.

**Barriers to Empathy**

- **Judgment**: Evaluating others' reactions as wrong or overblown
- **Advice-giving**: Jumping to solutions instead of understanding
- **Comparison**: "I know exactly how you feel because..."
- **Minimizing**: "It's not that bad" or "You'll be fine"
- **Distraction**: Being mentally elsewhere

**Empathy for Difficult People**

The true test of empathy is extending it to those we find challenging. Behind difficult behavior usually lies pain, fear, or unmet needs. This doesn't excuse behavior but helps you respond more effectively.

**The Empathy Paradox**

You cannot truly understand another's experience, yet the attempt to understand creates connection. Empathy isn't about perfect understanding; it's about the genuine effort to understand.

**Protecting Your Empathy**

Empathy without boundaries leads to burnout. Emotional empathy especially requires balance. Learn to understand and care without taking on others' emotional burdens as your own.`,
      keyTakeaway: 'Empathy involves three distinct skills: cognitive (understanding perspective), emotional (feeling with others), and compassionate (being moved to help). True empathy requires active listening and validation without judgment.',
      actionItem: 'In your next conversation, practice full active listening. Resist the urge to offer advice or share your experience. Instead, ask: "What was that like for you?" and validate their emotional experience.',
    },
    quiz: [
      {
        id: 'mm-eq-007-q1',
        question: 'What is compassionate empathy?',
        options: ['Understanding without feeling', 'Feeling what others feel', 'Understanding, feeling, AND being moved to help', 'Giving advice to solve problems'],
        correctAnswer: 2,
        explanation: 'Compassionate empathy combines cognitive empathy (understanding), emotional empathy (feeling with), and motivation to take helpful action. It\'s empathy translated into appropriate response.'
      },
      {
        id: 'mm-eq-007-q2',
        question: 'Which of the following is a barrier to empathy?',
        options: ['Active listening', 'Asking perspective-taking questions', 'Jumping to advice-giving', 'Validating emotions'],
        correctAnswer: 2,
        explanation: 'Jumping to advice-giving is a common barrier to empathy because it skips the essential step of truly understanding the other person\'s experience and feelings.'
      }
    ]
  },
  {
    id: 'mm-eq-008',
    title: 'Social Skills - Managing Relationships',
    type: 'concept',
    duration: 14,
    xpReward: 120,
    content: {
      overview: 'Master the interpersonal skills that enable you to build strong relationships, influence others positively, and navigate social complexities.',
      mainContent: `**The Art of Human Connection**

Social skills represent the application of emotional intelligence in relationships. They are the culmination of self-awareness, self-regulation, motivation, and empathy expressed through effective interaction with others. People with strong social skills build networks, find common ground, build rapport, and lead effectively.

**The Core Social Skills**

**1. Rapport Building**
Creating a connection that makes others feel comfortable and understood.
- Find common ground
- Use appropriate humor
- Mirror body language subtly
- Show genuine interest
- Remember details about people

**2. Clear Communication**
Expressing yourself so others understand, while ensuring you understand others.
- Speak with appropriate directness
- Check for understanding
- Adjust your style to your audience
- Listen more than you speak
- Be concise but complete

**3. Conflict Management**
Navigating disagreements productively.
- Address issues, not personalities
- Seek to understand before being understood
- Find win-win solutions
- Know when to compromise
- Keep emotions regulated during conflict

**4. Influence and Persuasion**
Ethically moving others toward mutually beneficial outcomes.
- Lead with empathy
- Find alignment with others' interests
- Use storytelling
- Build credibility through consistency
- Make requests, not demands

**5. Collaboration**
Working effectively with others toward shared goals.
- Share credit generously
- Contribute to others' success
- Communicate proactively
- Be reliable and follow through
- Adapt your working style

**The Social Skills Formula**

Effective social skills = Genuine Interest + Emotional Attunement + Clear Communication + Consistent Reliability

**Common Social Skills Mistakes**

- **Talking too much**: Conversations should flow, not be dominated
- **One-upmanship**: Responding to others' stories by topping them
- **Inattention**: Checking phones, looking around, being mentally absent
- **Over-familiarity**: Moving too fast in building relationships
- **Negativity**: Constant complaining or criticism

**Building Your Social Network**

Quality over quantity. Strong social skills aren't about having hundreds of connections but about having meaningful relationships. Focus on:
- Maintaining regular contact
- Being helpful without expecting return
- Being a bridge between people
- Following up and following through
- Celebrating others' wins

**The Platinum Rule**

Move beyond the Golden Rule (treat others as you want to be treated) to the Platinum Rule (treat others as they want to be treated). This requires knowing people well enough to understand their preferences, which brings us full circle to empathy.`,
      keyTakeaway: 'Social skills integrate all other EQ components into effective relationship management. They involve rapport building, clear communication, conflict management, influence, and collaboration, all grounded in genuine interest and reliability.',
      actionItem: 'Choose one relationship you want to strengthen. Apply the Platinum Rule: observe how this person prefers to communicate, be appreciated, and interact. Adjust your approach to match their preferences this week.',
    },
    quiz: [
      {
        id: 'mm-eq-008-q1',
        question: 'What is the Platinum Rule?',
        options: ['Treat others as you want to be treated', 'Treat others as they want to be treated', 'Always put others first', 'Be better than others'],
        correctAnswer: 1,
        explanation: 'The Platinum Rule goes beyond the Golden Rule by treating others as they want to be treated, not as you would want. This requires empathy and understanding of individual preferences.'
      }
    ]
  },
  {
    id: 'mm-eq-009',
    title: 'Emotional Triggers - Knowing Your Buttons',
    type: 'concept',
    duration: 13,
    xpReward: 110,
    content: {
      overview: 'Identify your emotional triggers and understand why certain situations provoke disproportionate reactions.',
      mainContent: `**Why Small Things Can Feel So Big**

We all have emotional triggers, those specific situations, words, or behaviors that provoke reactions stronger than the present situation warrants. Understanding your triggers is essential for emotional intelligence because until you know what sets you off, you remain at the mercy of your automatic reactions.

**What Are Emotional Triggers?**

Triggers are present-moment stimuli that activate past emotional experiences or deep-seated sensitivities. When triggered, you're not just reacting to what's happening now; you're reacting to accumulated experiences from your past.

Common triggers include:
- Feeling dismissed or ignored
- Being criticized or corrected
- Perceiving unfairness or injustice
- Loss of control or autonomy
- Feeling disrespected or undervalued
- Abandonment or rejection cues
- Being micromanaged or doubted
- Witnessing certain behaviors (that remind us of past pain)

**The Anatomy of a Trigger**

A trigger has three components:

**1. The Stimulus**: The external event (what someone said or did)
**2. The Interpretation**: The meaning you assign (often unconscious)
**3. The Response**: Your emotional and behavioral reaction

Between stimulus and response lies your personal history. Someone saying "you never listen" might trigger a mild annoyance in one person but a rage response in someone who grew up feeling unheard.

**Identifying Your Triggers**

Reflect on recent moments of disproportionate reaction:
- What was the situation?
- What emotion did you feel?
- What did you tell yourself about what happened?
- Where have you felt this before?
- What deeper fear or wound might this touch?

**Common Trigger Patterns**

**Authority Triggers**: Strong reactions to being told what to do, often rooted in early experiences with controlling figures.

**Comparison Triggers**: Feeling threatened when others succeed or receive praise, often linked to conditional acceptance in childhood.

**Abandonment Triggers**: Overreacting to perceived rejection, cancellation, or distance, often from early attachment experiences.

**Inadequacy Triggers**: Defensive reactions to feedback or perceived failure, often from experiences of harsh criticism.

**Managing Your Triggers**

1. **Know them**: Create a list of your top 5 triggers
2. **Prepare for them**: When entering situations where triggers might occur, prepare mentally
3. **Create space**: When triggered, use self-regulation techniques before responding
4. **Examine the narrative**: Ask "Is my reaction proportional to what actually happened?"
5. **Heal the wound**: Consider deeper work on the underlying pain that created the trigger

**The Gift of Triggers**

Triggers, while uncomfortable, are invitations to growth. They reveal where healing and development are needed. Each time you manage a triggered response differently, you weaken its power over you.`,
      keyTakeaway: 'Emotional triggers connect present stimuli to past wounds, causing disproportionate reactions. Identifying your specific triggers allows you to prepare for them and respond more appropriately.',
      actionItem: 'List your top three emotional triggers. For each, write: what happens, what you feel, and what past experience might be connected. Share with a trusted person if comfortable.',
    },
    quiz: [
      {
        id: 'mm-eq-009-q1',
        question: 'What is an emotional trigger?',
        options: ['A current problem requiring immediate solution', 'A present stimulus that activates past emotional experiences', 'A sign of emotional weakness', 'Something others do to manipulate you'],
        correctAnswer: 1,
        explanation: 'Emotional triggers are present-moment stimuli that activate accumulated experiences from the past, causing reactions that are disproportionate to the current situation.'
      },
      {
        id: 'mm-eq-009-q2',
        question: 'What lies between the stimulus (what happens) and your response (how you react)?',
        options: ['Nothing - reactions are automatic', 'Your personal history and interpretation', 'Other people\'s opinions', 'Logical analysis'],
        correctAnswer: 1,
        explanation: 'Your personal history shapes the interpretation you give to events, which is why the same stimulus can trigger vastly different responses in different people.'
      }
    ]
  },
  {
    id: 'mm-eq-010',
    title: 'The 90-Second Rule - Emotions as Temporary',
    type: 'concept',
    duration: 11,
    xpReward: 100,
    content: {
      overview: 'Learn that the physiological experience of an emotion lasts only 90 seconds and how to use this knowledge for better emotional management.',
      mainContent: `**The Neuroscience of Emotional Waves**

Dr. Jill Bolte Taylor, a Harvard-trained neuroscientist who observed her own stroke and recovery, made a fascinating discovery about emotions: the physiological lifespan of an emotion in the body is approximately 90 seconds.

**The 90-Second Phenomenon**

When you experience an emotion, a chemical process occurs in your body. Neurotransmitters and hormones flood your system, creating the physical sensations of emotion. This chemical surge naturally dissipates within 90 seconds. After that, any continuation of the emotion is because you're retriggering it through your thoughts.

**What This Means**

If you're feeling angry, sad, or anxious for longer than 90 seconds, it's because you're mentally replaying the triggering event, adding interpretations, or projecting into future scenarios. The initial chemical wave has passed; you're creating new waves with your thinking.

**The 90-Second Practice**

When a strong emotion arises:

**1. Notice and name the emotion** (engaging your prefrontal cortex)

**2. Set a mental timer** for 90 seconds

**3. Fully feel the emotion in your body** without fighting it:
- Where is it located?
- What are the physical sensations?
- Is it moving or static?
- Does it have a temperature, color, or texture?

**4. Breathe through it** naturally, without trying to change anything

**5. Observe as the intensity naturally decreases**

**6. After 90 seconds, notice** what remains and what has shifted

**Breaking the Retriggering Cycle**

The challenge is that most of us don't let emotions pass naturally. We:
- Ruminate on what happened
- Construct arguments in our heads
- Imagine future confrontations
- Build cases for why we're right to feel this way

Each thought retrigers the chemical cascade, extending the emotion indefinitely.

**The Wave Metaphor**

Think of emotions like ocean waves. They rise, peak, and fall. If you don't resist them, they pass relatively quickly. But if you fight the wave or add to it, you create turbulence that extends the experience.

**Important Nuances**

- The 90-second rule refers to the physiological component of emotion, not complex grief or processing of significant events
- This isn't about suppressing emotions but about allowing them to move through you
- Some emotions (like grief) require ongoing processing and won't resolve in 90 seconds
- The practice helps with acute emotional reactions, not chronic emotional states

**Freedom in Impermanence**

Understanding that emotions are inherently temporary changes your relationship with them. You can ride out difficult feelings knowing they will pass, rather than acting impulsively to escape them.`,
      keyTakeaway: 'The physiological component of an emotion lasts approximately 90 seconds. Emotions that persist longer are being retriggered by thought patterns. Allowing emotions to naturally pass without adding thought reduces their duration.',
      actionItem: 'Next time you feel a strong negative emotion, set a 90-second timer. Simply observe the physical sensations without adding thoughts. Notice if the intensity naturally decreases when you don\'t retrigger it mentally.',
    },
    quiz: [
      {
        id: 'mm-eq-010-q1',
        question: 'According to Dr. Jill Bolte Taylor, approximately how long does the physiological component of an emotion last?',
        options: ['5 seconds', '90 seconds', '10 minutes', '1 hour'],
        correctAnswer: 1,
        explanation: 'The chemical surge that creates the physical sensations of an emotion naturally dissipates within approximately 90 seconds if not retriggered by thought.'
      },
      {
        id: 'mm-eq-010-q2',
        question: 'What causes emotions to persist beyond 90 seconds?',
        options: ['Faulty brain chemistry', 'Retriggering through thoughts and mental replay', 'Other people\'s negative energy', 'Physical illness'],
        correctAnswer: 1,
        explanation: 'When emotions last longer than 90 seconds, it\'s because we retrigger them through rumination, mental replay, imagining future scenarios, or building mental arguments.'
      }
    ]
  },
  {
    id: 'mm-eq-011',
    title: 'Cognitive Reappraisal - Reframing Situations',
    type: 'concept',
    duration: 13,
    xpReward: 110,
    content: {
      overview: 'Master the technique of changing your emotional response by reinterpreting the meaning of situations.',
      mainContent: `**Changing Feelings by Changing Thoughts**

Cognitive reappraisal is a powerful emotion regulation strategy where you change your emotional response by reinterpreting the meaning of a situation. Research consistently shows it's one of the most effective techniques for managing negative emotions without the downsides of suppression.

**The Reappraisal Process**

Our emotional responses follow a sequence:
1. Event occurs
2. We interpret the event (consciously or unconsciously)
3. Emotion arises based on interpretation
4. We behave based on the emotion

Reappraisal intervenes at step 2, changing the interpretation before the emotion takes hold.

**Types of Reappraisal**

**1. Situation-Focused Reappraisal**
Reinterpreting the external situation itself.
- "They're not attacking me; they're stressed about their own deadline."
- "This isn't a crisis; it's a challenge I can learn from."
- "They didn't invite me because they assumed I was busy, not because they don't like me."

**2. Self-Focused Reappraisal**
Reinterpreting your ability to handle the situation.
- "I've handled difficult situations before; I can handle this."
- "This discomfort is temporary; I'm resilient."
- "I don't have to be perfect; I just have to do my best."

**3. Benefit Finding**
Identifying positive aspects or growth opportunities.
- "This failure taught me what doesn't work."
- "This challenge will make me stronger."
- "This disappointment is redirecting me toward something better."

**The Reappraisal Questions**

When facing a difficult situation, ask yourself:

- What's another way to look at this?
- What would a wise friend say about this situation?
- What might I think about this in a year?
- What can I learn from this?
- Is there any positive aspect I'm overlooking?
- What assumptions am I making that might not be true?
- How might the other person see this situation?

**Reappraisal vs. Denial**

Reappraisal is NOT:
- Pretending something doesn't hurt
- Making excuses for harmful behavior
- Toxic positivity ("Everything happens for a reason!")
- Denial of legitimate problems

Reappraisal IS:
- Finding accurate but less distressing interpretations
- Broadening perspective beyond the initial reaction
- Recognizing that your first interpretation isn't the only one
- Acknowledging difficulty while also seeing resources and possibilities

**Building the Reappraisal Habit**

Practice with minor frustrations first. Stuck in traffic? Reframe it as unexpected quiet time. Meeting postponed? An opportunity to prepare better. The more you practice with small things, the more automatic it becomes for big things.

**The Three-Frame Exercise**

For any challenging situation, generate three different interpretations: one negative, one neutral, one positive. Notice how each frame creates a different emotional response. Choose the most accurate AND most helpful frame.`,
      keyTakeaway: 'Cognitive reappraisal changes emotions by reinterpreting situations. It is about finding accurate but less distressing interpretations, not denial or toxic positivity.',
      actionItem: 'Take a current frustration or worry. Write down three different interpretations: negative, neutral, and positive. Notice how each interpretation creates a different emotional response. Which is both accurate AND helpful?',
    },
    quiz: [
      {
        id: 'mm-eq-011-q1',
        question: 'At which point in the emotional sequence does cognitive reappraisal intervene?',
        options: ['After the behavior', 'At the interpretation stage', 'After the emotion has peaked', 'It doesn\'t intervene - it suppresses'],
        correctAnswer: 1,
        explanation: 'Cognitive reappraisal intervenes at the interpretation stage, before the emotional response fully forms, making it more effective than strategies that try to suppress emotions after they\'ve arisen.'
      }
    ]
  },
  {
    id: 'mm-eq-012',
    title: 'Assertive Communication - Not Aggressive, Not Passive',
    type: 'concept',
    duration: 14,
    xpReward: 120,
    content: {
      overview: 'Learn to express your needs and boundaries clearly and respectfully, without aggression or passivity.',
      mainContent: `**Finding the Middle Path**

Assertive communication is expressing your thoughts, feelings, and needs clearly and respectfully while also respecting others' rights. It's the healthy middle ground between passive communication (not expressing yourself) and aggressive communication (expressing yourself at others' expense).

**The Three Communication Styles**

**Passive Communication**
- Fails to express honest feelings and needs
- Allows others to violate boundaries
- Often agrees to avoid conflict
- Leads to resentment, frustration, victimhood
- Body language: Avoiding eye contact, slouching, small voice

**Aggressive Communication**
- Expresses feelings at the expense of others
- Violates others' rights and boundaries
- Aims to win, dominate, or humiliate
- Damages relationships and creates defensiveness
- Body language: Intense staring, invading space, loud voice

**Assertive Communication**
- Clearly expresses thoughts, feelings, and needs
- Respects both own rights and others' rights
- Open to negotiation and compromise
- Builds mutual respect and understanding
- Body language: Relaxed but upright, steady eye contact, clear voice

**The Assertiveness Formula**

Use this structure for assertive statements:

**"When [situation], I feel [emotion] because [reason]. I would like [request]."**

Example: "When meetings start late, I feel frustrated because it affects my schedule. I would like us to start on time or notify me if there's a delay."

**Assertiveness Techniques**

**1. The Broken Record**
Calmly repeating your point without getting drawn into arguments or side issues.
"I understand, and I still need to leave by 5:00."

**2. Fogging**
Agreeing with part of what's said without changing your position.
"You may be right that I could be more flexible, and I still need to maintain this boundary."

**3. Negative Assertion**
Accepting criticism non-defensively.
"You're right, I did make that mistake. I'll correct it."

**4. Negative Inquiry**
Asking for more specific feedback when criticized.
"I hear that you're frustrated. Can you help me understand specifically what I could do differently?"

**Saying No Assertively**

- "No, I can't do that."
- "I'm not comfortable with that."
- "That doesn't work for me."
- "I have other commitments."
- "I appreciate you thinking of me, and I'll have to decline."

You don't owe lengthy explanations or excuses. A simple, clear no is complete.

**Common Assertiveness Challenges**

- **Fear of conflict**: Remember that unaddressed issues create larger conflicts later
- **Desire to be liked**: Healthy relationships include honest communication
- **Guilt**: You have a right to your needs; expressing them isn't selfish
- **Past conditioning**: If you learned to be passive or aggressive, change takes practice

**The 5:1 Rule**

Research shows healthy relationships have a ratio of 5 positive interactions to every 1 negative. Assertive communication about difficult topics is more sustainable when embedded in an overall positive relationship.`,
      keyTakeaway: 'Assertive communication clearly expresses your needs while respecting others. Use the formula: When [situation], I feel [emotion] because [reason], I would like [request].',
      actionItem: 'Identify one situation where you\'ve been passive or aggressive. Write an assertive statement using the formula. Practice saying it aloud. Use it in your next relevant conversation.',
    },
    quiz: [
      {
        id: 'mm-eq-012-q1',
        question: 'What distinguishes assertive communication from aggressive communication?',
        options: ['Assertive communication is weaker', 'Assertive communication respects both your rights and others\' rights', 'There is no difference', 'Assertive communication avoids conflict'],
        correctAnswer: 1,
        explanation: 'Assertive communication expresses your needs clearly while also respecting others\' rights and dignity. Aggressive communication expresses at others\' expense.'
      },
      {
        id: 'mm-eq-012-q2',
        question: 'What is the "broken record" technique?',
        options: ['Yelling until you get what you want', 'Calmly repeating your point without getting drawn into side arguments', 'Giving up after initial resistance', 'Criticizing the other person\'s argument'],
        correctAnswer: 1,
        explanation: 'The broken record technique involves calmly and persistently repeating your main point without being drawn into arguments, justifications, or side issues.'
      }
    ]
  },
  {
    id: 'mm-eq-013',
    title: 'Setting Emotional Boundaries',
    type: 'concept',
    duration: 13,
    xpReward: 110,
    content: {
      overview: 'Learn to protect your emotional well-being by setting and maintaining healthy boundaries in relationships.',
      mainContent: `**The Art of Protective Lines**

Emotional boundaries are the limits you set around your emotional space, defining what you will and won't accept in how others treat you and how much of others' emotions you take on. Without boundaries, you become emotionally depleted, resentful, and lose your sense of self.

**Types of Emotional Boundaries**

**1. Personal Space Boundaries**
Limits on physical proximity and touch that affect your emotional comfort.

**2. Conversational Boundaries**
Topics you will or won't discuss, and how you'll be spoken to.
"I'm not willing to discuss my weight."
"I need you to lower your voice."

**3. Energy Boundaries**
Limits on how much of yourself you give and how much of others' emotions you absorb.
"I care about your problem, and I can't solve it for you."

**4. Time Boundaries**
Protecting your time as an expression of self-respect.
"I'm available until 6, then I need to go."

**5. Emotional Labor Boundaries**
Limits on how much emotional support you provide.
"I'm not in a place to support you through this right now."

**Why Boundaries Are Hard**

- **Fear of rejection**: "They won't like me if I say no"
- **Guilt**: "I should be able to handle this"
- **Caretaker identity**: "I'm supposed to be there for everyone"
- **Conflict avoidance**: "It's easier to just go along"
- **Past conditioning**: Boundaries weren't modeled or were punished

**The Boundary-Setting Process**

**1. Identify the boundary needed**
What's causing discomfort, resentment, or depletion?

**2. Get clear internally**
Before communicating, know what you need and why.

**3. Communicate clearly**
State the boundary directly without over-explaining.
"I don't lend money to friends."
"I don't answer work calls after 7 PM."

**4. Prepare for pushback**
Some people won't like your boundaries. That's their issue, not yours.

**5. Hold the boundary**
A boundary you don't maintain isn't a boundary.

**Boundary Scripts**

- "I need some time to think about that before I respond."
- "That doesn't work for me."
- "I'm not comfortable discussing that."
- "I can't take that on right now."
- "When you speak to me that way, I'll end the conversation."
- "I care about you AND I can't be your only support."

**Boundaries vs. Walls**

Boundaries are flexible and allow for connection; walls block everything. Healthy boundaries:
- Can be adjusted based on context and trust
- Allow intimacy with safe people
- Protect without isolating
- Come from self-respect, not fear

**The Boundary Paradox**

Setting boundaries often improves relationships rather than damaging them. People respect those who respect themselves. Clear boundaries prevent the resentment that erodes relationships.

**Signs You Need Stronger Boundaries**

- Chronic resentment
- Feeling drained after interactions
- Saying yes when you want to say no
- Others' moods controlling your mood
- Taking responsibility for others' emotions
- Feeling like you've lost yourself in relationships`,
      keyTakeaway: 'Emotional boundaries protect your well-being and actually improve relationships. Set them clearly, prepare for pushback, and maintain them consistently. Boundaries come from self-respect, not selfishness.',
      actionItem: 'Identify one area where you need a stronger boundary. Write out what the boundary is and how you will communicate it. Practice saying it aloud. Implement it this week.',
    },
    quiz: [
      {
        id: 'mm-eq-013-q1',
        question: 'What is the difference between boundaries and walls?',
        options: ['They are the same thing', 'Boundaries are flexible and allow connection; walls block everything', 'Walls are healthier than boundaries', 'Boundaries hurt relationships; walls protect them'],
        correctAnswer: 1,
        explanation: 'Boundaries are flexible limits that protect you while still allowing for connection with safe people. Walls are rigid barriers that block both negative and positive interactions.'
      }
    ]
  },
  {
    id: 'mm-eq-014',
    title: 'Dealing with Difficult People',
    type: 'concept',
    duration: 14,
    xpReward: 120,
    content: {
      overview: 'Develop strategies for maintaining your emotional equilibrium when interacting with challenging personalities.',
      mainContent: `**Navigating Challenging Relationships**

Difficult people are inevitable in life. Whether it's a critical boss, a negative coworker, a manipulative family member, or an aggressive acquaintance, your emotional intelligence will be tested. The goal isn't to change them but to manage yourself and the interaction effectively.

**Types of Difficult People**

**The Critic**
Constantly finds fault and rarely offers praise. Nothing is ever good enough.
Strategy: Don't seek their approval. Thank them for specific useful feedback; ignore general negativity.

**The Victim**
Everything bad happens to them. They take no responsibility and constantly complain.
Strategy: Set time limits on listening. Redirect to solutions. Don't get pulled into their narrative.

**The Controller**
Must have things their way. Micromanages and dismisses others' input.
Strategy: Choose your battles. Maintain your boundaries. Document agreements.

**The Passive-Aggressive**
Expresses hostility indirectly through sarcasm, procrastination, or the silent treatment.
Strategy: Address behavior directly but calmly. Don't take the bait. Request clear communication.

**The Narcissist**
Self-centered, lacking empathy, needs constant admiration.
Strategy: Keep expectations realistic. Don't expect emotional support. Protect yourself from manipulation.

**The Drama Creator**
Thrives on conflict and chaos. Exaggerates and creates crises.
Strategy: Don't engage with drama. Stay calm and factual. Limit exposure.

**Core Strategies for All Difficult People**

**1. Don't Take It Personally**
Their behavior reflects their internal state, not your worth. When you stop taking it personally, their power over your emotions diminishes.

**2. Stay in Your Lane**
Focus on what you can control: your reactions, your boundaries, your choices. You cannot control their behavior.

**3. The Gray Rock Method**
Become emotionally uninteresting. Respond blandly without emotional charge. This works especially well with people who feed on your reactions.

**4. Empathy (Without Endorsement)**
Try to understand what pain or fear drives their behavior. This doesn't excuse it but helps you respond with less reactivity.

**5. Strategic Disengagement**
You don't have to attend every argument you're invited to. Sometimes the best response is no response.

**6. Document When Necessary**
In professional settings, keep records of problematic interactions. Facts protect you.

**When to Stay and When to Go**

Stay if:
- The relationship has genuine value
- The difficult behavior is occasional
- You can maintain your well-being with boundaries
- There's potential for change

Consider leaving if:
- The behavior is abusive
- Your mental health is significantly affected
- All attempts at boundaries fail
- The cost outweighs the benefit

**The Mirror Practice**

Difficult people often trigger our own unresolved issues. Ask yourself: What about this person bothers me so much? Is there something in myself this reflects? This isn't about blaming yourself but about using the trigger for self-knowledge.

**The Non-Negotiable**

Never sacrifice your self-respect or well-being trying to manage a difficult person. Your peace is more important than any relationship.`,
      keyTakeaway: 'Managing difficult people requires not taking behavior personally, maintaining boundaries, choosing strategic engagement or disengagement, and focusing on what you can control, your own responses.',
      actionItem: 'Think of a difficult person in your life. Identify which type they most resemble. Choose one specific strategy from this lesson and commit to applying it in your next interaction with them.',
    },
    quiz: [
      {
        id: 'mm-eq-014-q1',
        question: 'What is the "Gray Rock" method?',
        options: ['Throwing stones at difficult people', 'Becoming emotionally uninteresting to reduce others\' reactive behavior', 'Ignoring everyone completely', 'Responding aggressively to establish dominance'],
        correctAnswer: 1,
        explanation: 'The Gray Rock method involves becoming emotionally bland and uninteresting, which starves those who feed on emotional reactions and reduces conflict escalation.'
      },
      {
        id: 'mm-eq-014-q2',
        question: 'When dealing with difficult people, what should you focus on?',
        options: ['Changing their behavior', 'Getting revenge', 'What you can control: your reactions and boundaries', 'Making them understand they\'re wrong'],
        correctAnswer: 2,
        explanation: 'You cannot control others\' behavior. Focus on what you can control: your own reactions, your boundaries, and your choices about how much exposure to have.'
      }
    ]
  },
  {
    id: 'mm-eq-015',
    title: 'Building Emotional Resilience',
    type: 'concept',
    duration: 15,
    xpReward: 150,
    content: {
      overview: 'Develop the capacity to recover from setbacks, adapt to change, and maintain well-being in the face of adversity.',
      mainContent: `**The Bounce-Back Factor**

Emotional resilience is the ability to adapt to stressful situations, recover from setbacks, and grow through adversity. It's not about avoiding difficulty or being unaffected by pain; it's about how quickly and effectively you recover and what you learn in the process.

**The Resilience Mindset**

Resilient people share certain beliefs:

- **Adversity is temporary**: "This is hard now, but it won't last forever."
- **I have agency**: "I may not control what happens, but I control my response."
- **Challenges promote growth**: "Difficult experiences make me stronger."
- **Support is available**: "I don't have to face this alone."
- **I've survived before**: "I've gotten through hard times and I will again."

**The Five Pillars of Emotional Resilience**

**1. Self-Awareness**
Understanding your emotional patterns, triggers, and coping mechanisms. Knowing when you're approaching your limits and what restores you.

**2. Self-Care**
Physical well-being directly impacts emotional resilience:
- Sleep: 7-9 hours (sleep deprivation increases emotional reactivity by 60%)
- Exercise: Regular movement regulates mood and stress
- Nutrition: Stable blood sugar supports emotional stability
- Recovery: Regular rest and activities that restore you

**3. Social Connection**
Strong relationships are the number one predictor of resilience. People who weather adversity best have:
- At least one person they can confide in completely
- A broader network for practical and emotional support
- A sense of belonging to a community

**4. Meaning and Purpose**
Those who see meaning in their struggles recover faster. Connect challenges to:
- Personal growth
- Values being tested and strengthened
- Contributions you can make because of your experience
- Deeper appreciation for what matters

**5. Adaptive Coping**
Having multiple strategies for managing stress:
- Problem-focused: Taking action on what can be changed
- Emotion-focused: Processing and expressing feelings
- Meaning-focused: Reappraising situations
- Social: Seeking support
- Physical: Using the body to regulate stress

**Building Your Resilience Bank**

Resilience is built before you need it. Think of it as a bank account:

**Deposits**:
- Healthy routines and habits
- Nurturing relationships
- Accomplishments and mastery experiences
- Practicing with small stressors
- Self-compassion
- Gratitude practice

**Withdrawals**:
- Major life stressors
- Chronic stress without recovery
- Isolation
- Poor self-care
- Harsh self-criticism

**Post-Traumatic Growth**

Research shows that many people don't just return to baseline after adversity; they grow beyond it. Post-traumatic growth includes:
- Greater appreciation for life
- Improved relationships
- Recognition of personal strength
- Discovery of new possibilities
- Spiritual development

This isn't about toxic positivity or minimizing pain. It's about the genuine transformation that can emerge from navigating difficulty with awareness and support.

**The Resilience Promise**

Whatever you're facing, you have more strength than you know. Every challenge you've survived has prepared you for this one. Resilience isn't a fixed trait; it's a capacity that grows with practice. Your ability to recover and grow from adversity will increase with each application of the skills in this module.`,
      keyTakeaway: 'Emotional resilience is built through self-awareness, self-care, social connection, meaning-making, and adaptive coping. It is a capacity that grows with practice, and adversity can become a catalyst for growth.',
      actionItem: 'Assess your resilience pillars: Rate yourself 1-10 on self-awareness, self-care, social connection, meaning/purpose, and adaptive coping. Identify your weakest pillar and commit to one specific action to strengthen it this month.',
    },
    quiz: [
      {
        id: 'mm-eq-015-q1',
        question: 'What is the number one predictor of emotional resilience?',
        options: ['High intelligence', 'Wealth and resources', 'Strong social connections', 'Avoiding all stress'],
        correctAnswer: 2,
        explanation: 'Research consistently shows that strong relationships and social support are the number one predictor of resilience. People with solid connections weather adversity significantly better.'
      },
      {
        id: 'mm-eq-015-q2',
        question: 'What is post-traumatic growth?',
        options: ['Physical growth after injury', 'Growing beyond your previous baseline as a result of navigating adversity', 'Pretending nothing bad happened', 'Avoiding future challenges'],
        correctAnswer: 1,
        explanation: 'Post-traumatic growth refers to positive psychological change that can emerge from struggling with highly challenging circumstances, leading to growth beyond one\'s previous level of functioning.'
      }
    ]
  }
];
