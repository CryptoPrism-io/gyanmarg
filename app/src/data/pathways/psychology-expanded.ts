import type { PathwayLevel } from '@/types';

export const psychologyExpandedPathway: PathwayLevel[] = [
  {
    id: 'psych-level1',
    title: 'Level 1: Two Systems of Thinking',
    description: 'Understand your fast and slow brain',
    icon: '🧠',
    color: 'rose',
    unlockRequirement: 0,
    lessons: [
      {
        id: 'psych-intro',
        title: 'Meet Your Two Minds',
        type: 'intro',
        duration: 10,
        xpReward: 50,
        content: {
          overview: 'Daniel Kahneman won a Nobel Prize for showing we have two thinking systems.',
          mainContent: `**Thinking, Fast and Slow: The Two Systems**

Daniel Kahneman's research revealed something profound: you don't have one mind - you have two.

**System 1: Fast Thinking**
- Automatic and effortless
- Runs constantly in background
- Makes instant judgments
- Driven by intuition and emotion
- Can't be turned off

Examples:
- Recognizing a friend's face
- Knowing 2+2=4 instantly
- Sensing danger
- Reading facial expressions

**System 2: Slow Thinking**
- Deliberate and effortful
- Requires concentration
- Follows logical steps
- Rational but lazy
- Easily depleted

Examples:
- Calculating 17 x 24
- Filling out a tax form
- Comparing products carefully
- Learning something new

**The Key Insight:**
System 2 thinks it's in charge, but System 1 runs the show 95% of the time. Most of your "decisions" are System 1 snap judgments that System 2 then rationalizes.

**Why This Matters:**
- Your first impression often sticks (System 1)
- You're more biased than you think
- Fatigue makes you rely more on System 1
- Important decisions need System 2, but it's hard to engage`,
          keyTakeaway: 'Most thinking happens fast and automatically. Knowing when to slow down is a superpower.',
          actionItem: 'Notice 3 decisions you make today. Which system made them?',
        },
      },
      {
        id: 'psych-biases',
        title: 'The Bias Encyclopedia',
        type: 'concept',
        duration: 15,
        xpReward: 100,
        content: {
          overview: 'Your brain has predictable bugs. Learn the most important ones.',
          mainContent: `**Cognitive Biases: Your Brain's Shortcuts**

Biases are mental shortcuts that usually help but sometimes mislead.

**Anchoring Bias**
First information disproportionately influences judgment.
- Real estate agents show overpriced house first
- Salary negotiation: first number anchors discussion
- Even random numbers affect estimates

**Confirmation Bias**
You seek info that confirms existing beliefs.
- You notice evidence for your views
- You dismiss contradicting evidence
- Social media creates echo chambers

**Availability Heuristic**
You judge probability by how easily examples come to mind.
- Plane crashes seem common (memorable)
- Car deaths seem rare (unmemorable)
- Reality: cars are far more dangerous

**Loss Aversion**
Losses hurt twice as much as gains feel good.
- $100 loss feels like -$200
- $100 gain feels like +$100
- Explains why people hold losing stocks

**Sunk Cost Fallacy**
You continue because of past investment.
- "I've already spent 3 hours on this bad movie"
- "I've been in this relationship for years"
- Past costs shouldn't affect future decisions

**Dunning-Kruger Effect**
The less you know, the more confident you are.
- Beginners overestimate their skill
- Experts underestimate theirs
- Competence brings awareness of gaps

**How to Fight Biases:**
1. Know they exist (you're doing this now)
2. Slow down important decisions
3. Seek disconfirming evidence
4. Use checklists and processes
5. Get outside perspectives`,
          keyTakeaway: 'You can\'t eliminate biases, but knowing them helps you catch yourself.',
          quiz: {
            question: 'Why do plane crashes seem more common than they are?',
            options: [
              'Media conspiracy',
              'Availability heuristic - they\'re memorable',
              'Planes really are dangerous',
              'Anchoring bias',
            ],
            correct: 1,
            explanation: 'Dramatic events are easily recalled, making us overestimate their frequency.',
          },
        },
      },
      {
        id: 'psych-stats',
        title: 'Statistical Thinking for Life',
        type: 'concept',
        duration: 12,
        xpReward: 100,
        content: {
          overview: 'From "The Data Detective" - 10 rules to not be fooled by numbers.',
          mainContent: `**Data Detective: How to Think About Statistics**

Tim Harford's rules for navigating a world full of misleading numbers:

**Rule 1: Feel Your Emotions First**
Statistics can trigger strong reactions. Notice them before analyzing.
- Acknowledge your gut response
- Then engage your critical mind
- Don't let emotion override logic (or vice versa)

**Rule 2: Ask "Compared to What?"**
Numbers without context are meaningless.
- "Crime is up 50%" - from what base?
- "This drug reduces risk by 33%" - of what?
- Always demand the baseline

**Rule 3: Check the Source**
Who produced this data and why?
- What's their incentive?
- How was it collected?
- Who funded the study?

**Rule 4: Beware of Selection Effects**
Data often comes from biased samples.
- Survivors tell success stories (survivorship bias)
- Complainers answer surveys
- Visible data isn't representative

**Rule 5: Understand the Measure**
What exactly is being measured?
- "Unemployment" has multiple definitions
- "Average" can be mean, median, or mode
- The definition shapes the conclusion

**Rule 6: Look for Missing Data**
What's NOT being shown?
- Cherry-picked time periods
- Excluded categories
- Unreported failures

**The Base Rate Neglect Problem:**
Test is 99% accurate. You test positive.
What's the probability you have the disease?

If 1 in 1000 people have it:
- 1 true positive (you, if sick)
- ~10 false positives (healthy people who test positive)
- Probability you're actually sick: ~9%

Most people guess 99%. This error has real consequences.`,
          keyTakeaway: 'Numbers lie through omission. Always ask what\'s missing and what\'s being compared.',
          actionItem: 'Find a statistic in today\'s news. Apply these rules to evaluate it.',
        },
      },
    ],
  },
  {
    id: 'psych-level2',
    title: 'Level 2: Thinking, Fast and Slow Deep Dive',
    description: 'Master Kahneman\'s insights on decision-making',
    icon: '🎯',
    color: 'violet',
    unlockRequirement: 150,
    lessons: [
      {
        id: 'tfs-1',
        title: 'System 1 vs System 2: The Two Minds Within',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'Understanding the fundamental distinction between fast, intuitive thinking and slow, deliberate reasoning that governs all human cognition.',
          mainContent: `**The Dual-Process Mind**

Daniel Kahneman's most influential contribution to psychology is the concept of two distinct systems that drive our thinking. System 1 operates automatically and quickly, with little or no effort and no sense of voluntary control. System 2 allocates attention to effortful mental activities, including complex computations and conscious reasoning.

**System 1: The Intuitive Autopilot**

System 1 is always running in the background. It's responsible for:
- Detecting that one object is farther than another
- Orienting toward the source of a sudden sound
- Completing the phrase "bread and..."
- Reading words on billboards
- Driving a car on an empty road

These operations happen effortlessly. You don't decide to read the words on a sign - you simply do. System 1 generates impressions, feelings, and inclinations that often become the beliefs and choices endorsed by System 2.

**System 2: The Deliberate Thinker**

System 2 is engaged when you:
- Focus attention on a specific person in a crowd
- Count the occurrences of the letter 'a' on a page
- Compare two appliances for overall value
- Fill out a tax form
- Check the validity of a complex logical argument

System 2 requires effort and concentration. It's easily disrupted by other demanding tasks.

**The Division of Labor**

The relationship between these systems is remarkably efficient. System 1 continuously generates suggestions for System 2: impressions, intuitions, intentions, and feelings. If endorsed by System 2, impressions and intuitions turn into beliefs, and impulses turn into voluntary actions.

Most of the time, this works beautifully. System 1 is generally accurate, and System 2 adopts its suggestions with little modification. However, System 1 has systematic biases and cannot be turned off. Knowing your own biases doesn't automatically correct them - you still need System 2 to catch errors.

**Real-World Example**

Imagine driving on a familiar route. System 1 handles steering, speed adjustments, and staying in your lane. But if a child suddenly runs into the street, System 2 takes over, focusing all attention on the emergency. After the danger passes, you might not remember the last few miles - System 1 was driving while System 2 was daydreaming.`,
          keyTakeaway: 'Your mind operates through two systems: fast, automatic intuition (System 1) and slow, effortful reasoning (System 2). Most thinking is System 1, with System 2 called upon only when necessary.',
          quiz: {
            question: 'Which mental task would primarily engage System 2?',
            options: [
              'Calculating 17 x 24 in your head',
              'Recognizing a friend\'s face in a photo',
              'Detecting hostility in a voice',
              'Understanding simple sentences'
            ],
            correct: 0,
            explanation: 'Calculating 17 x 24 requires deliberate, effortful mental work - a classic System 2 task. The other options are automatic System 1 processes that happen without conscious effort.'
          }
        }
      },
      {
        id: 'tfs-2',
        title: 'The Lazy Controller: Why System 2 Conserves Energy',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'Exploring why our deliberate thinking system avoids work whenever possible and defaults to easier intuitive responses.',
          mainContent: `**The Economy of Mental Effort**

System 2 is fundamentally lazy. It will not invest more effort than is strictly necessary. This isn't a character flaw - it's an evolutionary adaptation. Thinking hard burns glucose, requires attention, and temporarily reduces your ability to handle other challenges. The brain optimizes by defaulting to System 1 whenever possible.

**Cognitive Load and Self-Control**

Kahneman describes a revealing experiment: participants asked to remember a seven-digit number while walking to another room were significantly more likely to choose chocolate cake over fruit salad than those remembering only two digits. Why? The cognitive load of holding seven digits consumed System 2's capacity, leaving less willpower for resisting temptation.

This principle has profound implications. When you're mentally exhausted - after a long day of complex work, difficult decisions, or emotional stress - System 2 becomes even lazier. You're more likely to:
- Make impulsive purchases
- Say things you'll regret
- Accept default options without questioning them
- Eat unhealthy food

**The Bat and Ball Problem**

Consider this puzzle: A bat and ball cost $1.10 together. The bat costs $1.00 more than the ball. How much does the ball cost?

Your System 1 immediately suggests: 10 cents. This answer is wrong. If the ball costs 10 cents and the bat costs $1.00 more, the bat costs $1.10, making the total $1.20.

The correct answer is 5 cents (ball) + $1.05 (bat) = $1.10.

Over 50% of students at Harvard, MIT, and Princeton gave the intuitive but incorrect answer. They trusted System 1's quick response without engaging System 2 to check it. The remarkable finding isn't that people make mistakes - it's that intelligent people with ample time still fail to engage System 2.

**Ego Depletion and Decision Fatigue**

Judges have been shown to grant parole significantly more often after meal breaks than before them. By late morning, approval rates drop from 65% to nearly 0%, then spike back up after lunch. This isn't callousness - it's the brain conserving energy by defaulting to the easier decision (deny) when depleted.

**Practical Implications**

Understanding the lazy controller helps you structure better decisions. Schedule important choices for when you're fresh. Simplify complex decisions by breaking them into smaller parts. Recognize when you're too depleted to trust your judgment.`,
          keyTakeaway: 'System 2 is inherently lazy and will avoid effortful thinking when possible. Mental fatigue further weakens self-control and analytical thinking, making us more susceptible to biases.',
          quiz: {
            question: 'Why did participants remembering seven digits choose chocolate cake more often than those remembering two digits?',
            options: [
              'The seven-digit task made them hungrier',
              'Chocolate cake is objectively more appealing',
              'Cognitive load depleted their self-control resources',
              'They wanted a reward for the harder task'
            ],
            correct: 2,
            explanation: 'The cognitive load of remembering seven digits consumed System 2\'s limited capacity, leaving fewer mental resources available for the self-control needed to resist the tempting but less healthy choice.'
          }
        }
      },
      {
        id: 'tfs-3',
        title: 'Cognitive Ease: The Comfort of Familiarity',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'Understanding how the brain\'s sense of ease or strain influences our judgments about truth, beauty, and safety.',
          mainContent: `**The Feeling of Knowing**

Cognitive ease refers to the subjective experience of how smoothly our mental processes are operating. When things feel easy - familiar, clear, repeatedly encountered - we experience cognitive ease. When they feel difficult - novel, unclear, hard to read - we experience cognitive strain.

Critically, this feeling affects our judgments in ways we don't recognize. Things that feel easy also feel:
- More true
- More likeable
- More safe
- More beautiful

**The Mere Exposure Effect**

Psychologist Robert Zajonc demonstrated that mere repeated exposure to a stimulus increases liking for it. In one study, meaningless words (like "sarika" or "kadirga") shown more frequently were rated as more pleasant - even when participants didn't consciously remember seeing them.

This effect extends to faces, shapes, sounds, and ideas. Familiarity breeds not contempt, but comfort. Advertisers understand this instinctively: repeat a message enough, and it starts to feel true.

**Font Effects on Truth**

In a striking experiment, people judged statements as more credible when printed in clear, high-contrast fonts versus fuzzy, low-contrast ones. "Ants sleep" seemed more plausible in bold black than in pale gray - despite the logic having nothing to do with typography.

The brain conflates processing fluency (how easy something is to read) with truth. If it flows smoothly, it must be right.

**The Rhyme-as-Reason Effect**

Aphorisms that rhyme are judged as more accurate than their non-rhyming equivalents:
- "Woes unite foes" seems truer than "Woes unite enemies"
- "What sobriety conceals, alcohol reveals" beats "What sobriety conceals, alcohol unmasks"

Rhyme creates cognitive ease, and cognitive ease creates credibility.

**Mood and Ease**

Your current mood affects cognitive ease. When you're happy, System 1 runs more smoothly. You're more creative, intuitive, and likely to trust your first impressions. When you're sad or anxious, cognitive strain increases. You become more critical, analytical, and less prone to errors of intuition - but also less creative.

**Strategic Applications**

Presenters, writers, and marketers can leverage cognitive ease ethically:
- Use clear fonts and high contrast
- Repeat key messages
- Choose memorable names and phrases
- Present information when audiences are in good moods

But beware: the same principles can be used to make false claims feel true.`,
          keyTakeaway: 'Cognitive ease makes ideas feel true, pleasant, and safe. Our brains confuse the fluency of processing with the validity of the content, making familiar and easily processed information seem more credible.',
          quiz: {
            question: 'Why do rhyming aphorisms seem more truthful than non-rhyming equivalents?',
            options: [
              'Rhymes contain more wisdom by tradition',
              'Rhyming requires more thought to create',
              'The processing ease of rhyme is mistaken for truth',
              'People pay more attention to rhymes'
            ],
            correct: 2,
            explanation: 'Rhymes create cognitive ease - they\'re processed more fluently. The brain misinterprets this processing fluency as a signal of truth, making rhyming statements feel more credible regardless of their actual validity.'
          }
        }
      },
      {
        id: 'tfs-4',
        title: 'Priming Effects: The Hidden Influencers',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'Discovering how exposure to words, ideas, and experiences unconsciously shapes our subsequent thoughts, behaviors, and judgments.',
          mainContent: `**The Invisible Hand of Priming**

Priming is the phenomenon where exposure to one stimulus influences the response to a subsequent stimulus, without conscious guidance or intention. If you recently encountered the word "EAT," you're more likely to complete the word fragment "SO_P" as "SOUP" rather than "SOAP." The prior exposure primed your mind along a particular path.

**The Florida Effect**

In a famous experiment by John Bargh, college students unscrambled sentences containing words associated with elderly stereotypes (Florida, gray, wrinkle, bingo). Afterward, these students walked more slowly down the hallway than a control group. They had no conscious awareness that the words had affected them - when told about the hypothesis, they were incredulous.

This wasn't just word association. The elderly words activated the concept of old age, which included the behavior of moving slowly. Ideas prime related ideas, and ideas prime related behaviors.

**Bidirectional Priming**

Priming works both ways. In a follow-up study, participants asked to walk slowly around the room subsequently became faster at recognizing words related to old age. Acting in a certain way primes concepts associated with that behavior.

This creates feedback loops. Environments, behaviors, and thoughts continuously prime each other in ways we rarely notice.

**Money Primes Individualism**

When participants are exposed to money-related images or words - even just a screensaver of floating dollar bills - they become more self-reliant but also more selfish. They work longer before asking for help, but they're also less likely to help others. Money primes an individualistic mindset without conscious awareness.

**Physical Primes and Judgment**

In one study, people holding a warm cup of coffee rated others as having "warmer" personalities than those holding iced coffee. Physical warmth primed the concept of interpersonal warmth, bleeding into social judgments.

Similarly, people at clean desks made harsher moral judgments than those at messy desks - cleanliness primed moral purity.

**Practical Implications**

Your environment constantly primes you. A cluttered workspace might prime scattered thinking. Images of eyes near an honesty box increased contributions. Exposed to words like "aggressive" before a negotiation, you might behave more competitively.

Being aware of priming doesn't eliminate its effects, but you can design environments that prime desired states: productivity, creativity, calm, or focus.`,
          keyTakeaway: 'Exposure to words, images, and experiences unconsciously primes related thoughts and behaviors. Your environment is constantly shaping your mental state in ways you don\'t perceive.',
          quiz: {
            question: 'In the "Florida effect" experiment, why did students walk more slowly after unscrambling sentences with elderly-related words?',
            options: [
              'They consciously decided to imitate elderly behavior',
              'The words activated the elderly concept, which included slow movement',
              'They were tired from the mental effort of unscrambling',
              'The experimenters asked them to walk slowly'
            ],
            correct: 1,
            explanation: 'The elderly-related words unconsciously activated the concept of old age in participants\' minds. This concept included associated behaviors like moving slowly, which then influenced their actual walking speed without any conscious awareness.'
          }
        }
      },
      {
        id: 'tfs-5',
        title: 'The Halo Effect: When One Trait Colors Everything',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'Understanding how a single positive or negative impression creates a biased overall evaluation that distorts perception of unrelated qualities.',
          mainContent: `**The Glow of First Impressions**

The halo effect is the tendency for an impression created in one area to influence opinion in another area. If you find someone attractive, you're more likely to also assume they're intelligent, kind, and competent - even without evidence. The positive "halo" from their appearance extends to cover other traits.

Psychologist Edward Thorndike first identified this phenomenon in 1920 when he noticed that military officers who rated soldiers as physically attractive also rated them higher on intelligence, leadership, and character. The correlations were implausibly high - as if one golden trait illuminated everything.

**How Halos Form**

System 1 creates coherent stories. When you encounter limited information about someone, System 1 fills in the gaps with consistent traits. This feels effortless and right, but it's fundamentally based on assumptions rather than evidence.

Consider two descriptions:
- Alan: intelligent, industrious, impulsive, critical, stubborn, envious
- Ben: envious, stubborn, critical, impulsive, industrious, intelligent

Alan seems like a capable person with some minor flaws. Ben seems like a problematic person with some redeeming qualities. The identical traits are interpreted through the lens of the first impression.

**The Order Effect**

This demonstrates primacy - the first traits encountered create a halo that shapes interpretation of later traits. "Intelligent" at the start makes "stubborn" seem like principled determination. "Envious" at the start makes "intelligent" seem calculating and dangerous.

In evaluations, the sequence of information matters enormously. Teachers who read a student's best essay first rate subsequent mediocre work more favorably than teachers who read the same essays in reverse order.

**Breaking the Halo in Practice**

Kahneman learned to grade exams by reading each student's first answer, then grading all first answers before moving to question two. This prevented the halo from a strong first answer from inflating grades on weaker subsequent answers.

Similarly, job interviews should be structured with standardized questions evaluated independently. Unstructured interviews allow interviewers to form early impressions that contaminate assessment of all later responses.

**Political and Commercial Halos**

Politicians who seem likeable are rated as having better policies. Products from companies with good reputations are assumed to be higher quality. One positive attribute extends its glow across the entire entity, often unjustifiably.`,
          keyTakeaway: 'A single positive or negative trait creates a halo that distorts perception of all other qualities. First impressions are particularly powerful because they color the interpretation of everything that follows.',
          quiz: {
            question: 'Why does Kahneman recommend grading all students\' first essay questions before moving to question two?',
            options: [
              'It\'s faster and more efficient',
              'It prevents the halo from one answer affecting grades on other answers',
              'Students perform better on first questions',
              'It reduces the total number of essays to grade'
            ],
            correct: 1,
            explanation: 'By grading each question separately across all students, the evaluator prevents a halo effect from forming. A strong first answer won\'t create a glow that inflates grades on weaker subsequent answers for the same student.'
          }
        }
      },
    ],
  },
  {
    id: 'psych-level3',
    title: 'Level 3: Heuristics and Biases',
    description: 'Understand the mental shortcuts that lead us astray',
    icon: '🎲',
    color: 'amber',
    unlockRequirement: 400,
    lessons: [
      {
        id: 'tfs-6',
        title: 'WYSIATI: What You See Is All There Is',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'Exploring the mind\'s tendency to construct complete stories from incomplete information while ignoring what it doesn\'t know.',
          mainContent: `**The Coherence-Seeking Mind**

WYSIATI (What You See Is All There Is) is Kahneman's term for System 1's remarkable ability to construct the best possible story from available information - and its equally remarkable blindness to what's missing. System 1 doesn't flag the absence of evidence. It works only with what's in front of it.

**Building Stories from Fragments**

Consider this introduction: "Will Sarah be a good leader? She is intelligent and strong."

Your mind immediately begins forming an impression. Sarah seems like leadership material. But notice what you didn't ask: Is she corrupt? Does she have experience? Can she work with others? Is she mentally stable?

System 1 doesn't generate these questions. It takes the provided information - intelligent, strong - and builds the most coherent story possible. Missing information doesn't trigger uncertainty; it simply doesn't exist in the constructed narrative.

**The Confidence of Ignorance**

This explains a paradoxical finding: confidence is often inversely related to actual knowledge. People with limited information can feel very confident because their small dataset tells a coherent story. People with more information encounter contradictions and complexity, which reduces confidence.

An investor who knows only that a company has a charismatic CEO and a growing market might feel highly confident. An analyst who also knows about debt levels, competitive threats, and regulatory risks will be appropriately less certain.

**One-Sided Evidence**

WYSIATI explains why one-sided presentations are so persuasive. A prosecutor presents only incriminating evidence. System 1 builds a story of guilt. The defense presents only exculpatory evidence. System 1 builds a story of innocence. Whichever story you hear last - or most vividly - feels compelling.

This is why adversarial legal systems exist: humans are naturally incapable of seeking out missing evidence. We need institutional structures that force contrary evidence into view.

**Suppressing Doubt**

System 1 is designed to believe and confirm, not to doubt. Doubt requires System 2, which must actively generate alternative possibilities and search for missing information. This takes effort, and the lazy controller would rather not bother.

**Practical Defense**

The antidote to WYSIATI is deliberately asking: "What am I not seeing? What information is missing? What would change my conclusion?" These questions must be consciously generated - they won't arise naturally.`,
          keyTakeaway: 'System 1 builds coherent stories from whatever information is available, without flagging what\'s missing. Confidence comes from story coherence, not from the completeness of evidence.',
          quiz: {
            question: 'Why might someone with less information about a situation feel more confident than an expert?',
            options: [
              'Less information is easier to remember accurately',
              'Experts are trained to express uncertainty',
              'Limited information allows for a more coherent story with fewer contradictions',
              'Novices are naturally more optimistic'
            ],
            correct: 2,
            explanation: 'WYSIATI means the mind builds stories from available information. Limited information often forms a simpler, more coherent story without the contradictions and complexity that additional evidence introduces. Confidence stems from coherence, not completeness.'
          }
        }
      },
      {
        id: 'tfs-9',
        title: 'The Law of Small Numbers: Trusting Tiny Samples',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'Understanding why human intuition fails to appreciate that small samples are unreliable and produce extreme results by chance.',
          mainContent: `**The Illusion of Validity**

Humans have a fundamental misunderstanding of randomness. We believe that small samples should resemble the larger population from which they're drawn. Kahneman calls this the "law of small numbers" - our mistaken belief that small samples are as reliable as large ones.

In reality, small samples are highly variable. A coin flipped 10 times might yield 8 heads - not because the coin is biased, but because 10 flips isn't enough to reveal the true probability. Flip it 10,000 times, and you'll approach 50%.

**The Kidney Cancer Puzzle**

Consider this finding: The counties with the lowest rates of kidney cancer in the United States are rural, sparsely populated, and located in the Midwest and South.

What explains this? Perhaps clean living, fresh air, and access to fresh food in rural areas promote health?

Now consider this: The counties with the highest rates of kidney cancer are also rural, sparsely populated, and located in the Midwest and South.

The explanation for both findings is the same: small populations produce extreme outcomes by chance. A county with 1,000 people might have 0 cases one year (lowest rate) and 5 cases another year (very high rate). A county with 1,000,000 people will consistently show rates near the national average because random variation cancels out.

**Why Intuition Fails**

System 1 looks for causes. When it sees that rural counties have low cancer rates, it immediately constructs an explanation involving rural lifestyle factors. It doesn't naturally think about sample size and statistical variation.

This is why lottery winners are always asked about their "system" - System 1 assumes skill or strategy rather than pure chance. Streaks in sports are interpreted as "hot hands" when they're often within the range of random variation.

**Research Implications**

Small studies in medicine and psychology frequently produce dramatic findings that fail to replicate. A study with 20 participants showing a 30% improvement might be celebrated, only to show a 2% effect when replicated with 2,000 participants. The first result was sampling error masquerading as truth.

**Practical Wisdom**

Distrust small samples. Demand large datasets before believing claims. When evaluating someone's performance, remember that a few observations contain substantial noise. Don't over-interpret streaks or slumps - they often reflect randomness, not real changes.`,
          keyTakeaway: 'Small samples produce extreme results by chance, not because of meaningful causes. Human intuition seeks explanations for patterns that are actually random variation.',
          quiz: {
            question: 'Why do the smallest counties show both the highest and lowest kidney cancer rates?',
            options: [
              'Rural areas have extreme environmental conditions',
              'Small populations produce extreme results through random variation',
              'Data collection is less reliable in small counties',
              'Rural populations have more variable genetics'
            ],
            correct: 1,
            explanation: 'Small populations produce extreme statistics by chance. A county with few people might have zero cases (lowest rate) or a few cases (very high rate per capita) purely through random variation, while large populations consistently average out to typical rates.'
          }
        }
      },
      {
        id: 'tfs-10',
        title: 'Anchoring: The Power of First Numbers',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'Exploring how arbitrary initial values powerfully influence subsequent estimates, even when people know the anchor is irrelevant.',
          mainContent: `**The Magnetic Pull of Numbers**

Anchoring is the phenomenon where exposure to a number - any number - influences subsequent numerical estimates. The anchor pulls judgment toward itself, even when people know the anchor is random or irrelevant.

Kahneman and Tversky demonstrated this with a rigged wheel of fortune that stopped only on 10 or 65. Participants spun the wheel, then estimated what percentage of African countries belong to the United Nations. Those who saw 10 estimated about 25%. Those who saw 65 estimated about 45%. A random number had shifted their estimates by 20 percentage points.

**Why Anchoring Works**

Two mechanisms explain anchoring:

1. **Adjustment and stopping**: People start from the anchor and adjust up or down until they reach a plausible value, then stop. Crucially, adjustment is insufficient - people stop too early, staying closer to the anchor than they should.

2. **Selective accessibility**: The anchor activates information consistent with it. If asked whether Gandhi died before or after age 144, and then asked to estimate his age at death, the high anchor brings to mind people who lived to extreme ages, biasing estimates upward.

**Professional Resistance - Or Lack Thereof**

You might think experts would resist anchoring in their domains. They don't. Real estate agents shown asking prices gave valuations 8% higher for houses with high asking prices than identical houses with low asking prices - while insisting the asking price didn't influence them.

Judges given random sentencing suggestions (generated by loading dice) gave sentences that varied with the random number. High anchors produced sentences averaging 8 months; low anchors produced 5 months.

**Negotiation Implications**

The first number mentioned in a negotiation becomes an anchor. Whoever names the first price establishes the psychological center point around which bargaining revolves. This is why experienced negotiators often want to make the first offer - to set the anchor.

When selling, start high. When buying, start low. The opposing party will adjust from your anchor, but insufficiently.

**Defending Against Anchors**

Knowing about anchoring doesn't eliminate it, but helps. When you encounter a potentially arbitrary number before making a judgment, actively think of reasons the anchor might be wrong. Generate counter-anchors: deliberately consider what extreme values in the opposite direction might look like.`,
          keyTakeaway: 'Initial numbers create powerful anchors that pull subsequent estimates toward them, even when the anchor is arbitrary and known to be irrelevant. Adjustment from anchors is typically insufficient.',
          quiz: {
            question: 'In negotiations, why is making the first offer often advantageous?',
            options: [
              'It demonstrates confidence and expertise',
              'It establishes an anchor that pulls the final agreement toward it',
              'It allows you to ask for more than you expect',
              'It forces the other party to respond'
            ],
            correct: 1,
            explanation: 'The first number named becomes an anchor. Subsequent negotiations revolve around this anchor, and adjustments away from it are typically insufficient. The party that sets the anchor often gets a final agreement closer to their preferred outcome.'
          }
        }
      },
      {
        id: 'tfs-11',
        title: 'The Availability Heuristic: Ease of Recall Shapes Reality',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'Understanding how the ease with which examples come to mind distorts our perception of frequency, probability, and importance.',
          mainContent: `**Thinking by Example**

The availability heuristic operates when people estimate frequency or probability by the ease with which instances come to mind. Events that are vivid, recent, or emotionally charged are more "available" to memory - and therefore judged as more common or likely than they actually are.

**The Classic Demonstration**

Kahneman and Tversky asked participants: Are there more English words beginning with 'K' or having 'K' as the third letter? Most people guess that 'K' at the beginning is more common. In reality, there are about twice as many words with 'K' in the third position. But words beginning with 'K' are easier to retrieve (king, kitchen, kangaroo), so they seem more numerous.

**Media and Fear**

This heuristic explains why we fear dramatic but rare events while ignoring common but mundane ones. Plane crashes make headlines; car accidents rarely do. After extensive coverage of a plane crash, people overestimate the risk of flying and underestimate the far greater risk of driving.

After 9/11, many Americans avoided flying and drove instead. In the year following the attacks, an estimated 1,600 additional people died in car accidents due to increased driving - more than six times the number killed in the planes themselves. Availability-driven fear proved more deadly than the threat it was avoiding.

**Personal Experience Bias**

Your own experience weighs heavily in availability judgments. If you personally know someone who had a severe reaction to a medication, you'll overestimate its risks even if statistics show it's extremely safe. Personal anecdotes are vivid and memorable; base rates are abstract and forgettable.

**The Availability Cascade**

Media coverage can create self-reinforcing cycles. An event gets covered because it's dramatic. Coverage makes it available in public consciousness. People discuss it, share it, worry about it. This attention generates more coverage. Soon a rare event looms as a major threat, commanding policy responses disproportionate to the actual risk.

**Correcting for Availability**

When making frequency or risk judgments, explicitly ask: "Am I estimating based on ease of recall or actual data?" For important decisions, look up statistics rather than relying on intuition. The most available examples in your mind may be systematically unrepresentative.`,
          keyTakeaway: 'We estimate frequency and probability by how easily examples come to mind. Vivid, recent, and personal experiences loom larger than they should, distorting our perception of reality.',
          quiz: {
            question: 'Why did more Americans die in car accidents in the year after 9/11?',
            options: [
              'Terrorists targeted highways',
              'Safety regulations were temporarily relaxed',
              'People drove instead of flying due to availability-driven fear of planes',
              'Economic stress caused more reckless driving'
            ],
            correct: 2,
            explanation: 'The vivid, extensively covered plane attacks made flying feel dangerous due to the availability heuristic. Many people chose to drive instead, but driving is statistically much more dangerous. The shift in transportation choices, driven by availability-biased fear, led to approximately 1,600 additional traffic deaths.'
          }
        }
      },
      {
        id: 'tfs-13',
        title: 'The Linda Problem: When More Is Less Likely',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'Examining the conjunction fallacy - our tendency to judge specific combinations as more probable than their components, violating basic logic.',
          mainContent: `**Meet Linda**

Linda is 31 years old, single, outspoken and very bright. She majored in philosophy. As a student, she was deeply concerned with issues of discrimination and social justice, and also participated in anti-nuclear demonstrations.

Which is more probable?
A) Linda is a bank teller.
B) Linda is a bank teller and is active in the feminist movement.

**The Conjunction Fallacy**

More than 80% of respondents - including statistically sophisticated graduate students - choose option B. This is logically impossible. The probability of two events occurring together (bank teller AND feminist) can never exceed the probability of either event occurring alone (bank teller).

Think of it with Venn diagrams: the set of "feminist bank tellers" is entirely contained within the set of "bank tellers." The subset cannot be larger than the set that contains it.

Yet B feels more probable because the description of Linda is representative of feminists. Adding "feminist" makes the story more coherent, more plausible - even though it makes it mathematically less probable.

**Representativeness Overwhelms Logic**

This is representativeness hijacking probability judgment. System 1 assesses that Linda seems like a feminist. This strong match creates coherence, and coherent stories feel true. The conjunction "bank teller and feminist" tells a better story than the bare "bank teller."

When asked about plausibility rather than probability, people's intuitions are appropriate - B is more plausible as a story about Linda. The error comes from confusing narrative plausibility with statistical probability.

**Real-World Consequences**

This fallacy affects consequential judgments:
- Medical diagnoses with multiple specific features seem more likely than simpler diagnoses
- Conspiracy theories with elaborate details feel more credible than simpler explanations
- Specific disaster scenarios seem more probable than the category of disaster they belong to

After each terrorist attack, security agencies become focused on preventing the specific type of attack that occurred - even though the probability of any other type of attack is higher.

**Defense Against the Fallacy**

When evaluating probabilities, be suspicious of detailed scenarios. Ask: "Would this be less likely if I removed one detail?" If yes, then the simpler version is more probable. Specificity creates plausibility but reduces probability.`,
          keyTakeaway: 'Adding specific details to a scenario makes it more coherent and plausible but mathematically less probable. Our sense of story quality overrides basic probability logic.',
          quiz: {
            question: 'Why do detailed conspiracy theories often feel more believable than simpler explanations?',
            options: [
              'Details provide more evidence',
              'Conspiracy theorists are better writers',
              'Detailed stories create coherence that feels like probability',
              'Simpler explanations are usually wrong'
            ],
            correct: 2,
            explanation: 'The conjunction fallacy means detailed, coherent stories feel more plausible even when they\'re mathematically less probable. Each additional detail that "fits" increases narrative coherence while actually reducing statistical probability.'
          }
        }
      },
    ],
  },
  {
    id: 'psych-level4',
    title: 'Level 4: Prediction and Decision Making',
    description: 'Master the science of better predictions',
    icon: '🔮',
    color: 'emerald',
    unlockRequirement: 650,
    lessons: [
      {
        id: 'tfs-14',
        title: 'Regression to the Mean: The Invisible Force',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'Understanding the statistical phenomenon that extreme performance tends to be followed by more moderate performance, and why we consistently misinterpret it.',
          mainContent: `**The Discovery That Changed Statistics**

Francis Galton discovered regression to the mean while studying heredity. He noticed that exceptionally tall parents tended to have children who were tall - but not as exceptionally tall as the parents. Similarly, very short parents tended to have children who were short - but not as extremely short. Performance regresses toward the average.

This isn't a genetic tendency or a force of nature - it's a statistical necessity arising from the role of luck in any outcome.

**The Flight Instructor's Error**

Kahneman recalls a pivotal conversation with flight instructors in Israel. One instructor insisted that praise was counterproductive: "When I praise cadets for executing a clean maneuver, they almost always do worse the next time." Another agreed that criticism worked: "When I scream at a cadet for a bad landing, he usually improves."

Both observations were accurate - but the conclusion was wrong. After an exceptionally good performance (which likely involved some luck), regression means the next performance will probably be closer to average: worse. After an exceptionally bad performance, the next will probably be better - regardless of whether praise or criticism followed.

The instructors weren't observing the effects of feedback. They were observing regression to the mean and attributing it to their teaching methods.

**Why We Miss Regression**

System 1 sees: exceptional performance followed by criticism followed by improvement, and concludes that criticism causes improvement. The causal story feels right. But the improvement would have happened anyway due to regression.

We construct causal explanations for what is actually statistical inevitability. This leads to:
- Sports curses and jinxes (exceptional performance followed by regression)
- Belief in the effectiveness of punitive management
- Overvaluation of success formulas (successful companies regress toward average performance)

**The Sports Illustrated Jinx**

Athletes who appear on the cover of Sports Illustrated often perform worse afterward. Fans attribute this to a "jinx." But athletes appear on the cover after exceptional performances - performances that likely involved some luck. Regression explains the subsequent decline without invoking curses.

**Practical Application**

When someone performs exceptionally well or poorly, expect their next performance to be closer to their average. Don't over-attribute the change to whatever intervention occurred in between. And don't abandon successful strategies just because results regress after initial success.`,
          keyTakeaway: 'Extreme performances involve luck and tend to be followed by more moderate performances regardless of any intervention. We consistently misattribute regression to the mean as causal effects.',
          quiz: {
            question: 'Why might a manager incorrectly conclude that criticism is more effective than praise?',
            options: [
              'Employees respond better to criticism',
              'Criticism provides clearer feedback',
              'After poor performance (prompting criticism), regression naturally leads to improvement anyway',
              'Praise creates complacency'
            ],
            correct: 2,
            explanation: 'After exceptionally poor performance, regression to the mean predicts improvement regardless of what happens. If criticism follows poor performance, the manager sees improvement and incorrectly attributes it to the criticism rather than to natural statistical regression.'
          }
        }
      },
      {
        id: 'tfs-17',
        title: 'The Planning Fallacy: Why Projects Run Late',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'Understanding why plans are systematically optimistic and how to create more realistic forecasts using outside view thinking.',
          mainContent: `**Chronic Optimism in Planning**

The planning fallacy describes our tendency to underestimate the time, costs, and risks of future actions while overestimating their benefits. This isn't occasional error - it's systematic and predictable. Projects routinely exceed budgets and timelines, yet planners are surprised each time.

The Sydney Opera House was estimated at $7 million and 6 years. It took 16 years and $102 million. The Scottish Parliament building was estimated at 40 million pounds and delivered at 431 million pounds. The pattern is universal: from kitchen renovations to software projects to business ventures.

**Inside View vs. Outside View**

Kahneman distinguishes two approaches to forecasting:

The **inside view** focuses on the specific case. What are our plans? What resources do we have? What problems might we face? This is natural planning - and it's where optimism creeps in. We imagine our project succeeding and work backward to the timeline.

The **outside view** asks: What happened to similar projects? If renovations like mine typically take 14 months and go 30% over budget, that's the rational starting point for my estimate - regardless of how well-planned I think my specific project is.

**Why the Inside View Fails**

The inside view is WYSIATI applied to the future. We focus on specific plans and foreseeable obstacles while ignoring the unknown unknowns that derail most projects. We don't know what we don't know.

When planners are asked to imagine everything that could go wrong, their estimates barely change. They've already imagined the obstacles they can think of. The problems that cause delays are typically ones that weren't anticipated at all.

**Reference Class Forecasting**

The antidote is reference class forecasting: identify a relevant reference class of similar past projects, determine the base rate of success/failure in that class, and then adjust only slightly for the specifics of your case.

When Kahneman's own curriculum project team was asked to estimate completion time, they guessed around 2 years. When asked about the base rate - how long similar projects typically took - the expert admitted that 40% of similar projects were never completed, and successful ones averaged 7 years. They finished in 8 years.

**Using Outside View**

For any significant project:
1. Identify the reference class (similar projects)
2. Learn the base rates (typical outcomes)
3. Make that your starting estimate
4. Adjust only for genuine, provable differences from typical cases`,
          keyTakeaway: 'Plans are systematically optimistic because we focus on our specific case rather than base rates of similar projects. Reference class forecasting - using outside view statistics - produces more accurate predictions.',
          quiz: {
            question: 'Why did Kahneman\'s curriculum project take 8 years despite the team initially estimating 2 years?',
            options: [
              'The team was unusually slow',
              'The project was unusually difficult',
              'They used inside view planning, ignoring that similar projects typically took 7 years',
              'Funding was delayed'
            ],
            correct: 2,
            explanation: 'The team focused on their specific plans and resources (inside view) rather than the base rate of similar projects (outside view). When they finally checked, similar curriculum projects averaged 7 years - making their 8-year outcome typical, not surprising.'
          }
        }
      },
      {
        id: 'tfs-19',
        title: 'Loss Aversion: Losses Loom Larger Than Gains',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'Understanding the fundamental asymmetry in how we experience gains and losses, and its profound implications for decision-making.',
          mainContent: `**The Core Asymmetry**

Loss aversion is one of Kahneman's most important discoveries: the psychological impact of losing something is roughly twice as powerful as the pleasure of gaining the same thing. A loss of $100 hurts about twice as much as a $100 gain feels good.

This asymmetry is not learned - it appears innate. Even other primates display loss aversion. And it's not about money specifically; we're loss averse about time, relationships, health, and status.

**The Coefficient of Loss Aversion**

Research suggests the loss aversion coefficient is typically between 1.5 and 2.5. For most people, it's around 2: losses hurt twice as much as equivalent gains please. This means:
- To accept a coin flip that loses $100 on tails, most people need at least $200 on heads
- A 50-50 bet must offer disproportionate upside to be attractive

**Why Rejecting Gambles Is Often Irrational**

Consider an offer: flip a coin. Heads, you win $150. Tails, you lose $100. Expected value: +$25.

Most people reject this gamble. The fear of losing $100 outweighs the prospect of winning $150. But if you were offered this gamble 100 times, rejecting every time would be irrational - you'd expect to gain around $2,500 with minimal risk of being down overall.

Loss aversion makes us reject individually acceptable risks that are obviously beneficial in aggregate.

**Everyday Implications**

Loss aversion shapes countless decisions:
- Investors hold losing stocks too long (selling realizes the loss)
- People won't trade items they own for objectively superior options
- Negotiators make excessive concessions to avoid failed deals
- Organizations avoid changes that might cause losses, even when changes offer net gains

**Reference Points Matter**

Loss aversion operates relative to a reference point - usually the status quo. Whether something is experienced as a gain or loss depends on what you compare it to. A salary of $60,000 feels like a loss to someone who expected $70,000 but a gain to someone who expected $50,000.

This means framing dramatically affects decisions. The same outcome can be positioned as a gain from one reference point or a loss from another.

**Organizational Paralysis**

Loss aversion makes organizations risk-averse beyond what's rational. Managers who might be blamed for visible losses but receive little credit for gains sensibly (from their perspective) avoid risks - even when the expected value is positive. This produces collective underperformance.`,
          keyTakeaway: 'The pain of losses is roughly twice as powerful as the pleasure of equivalent gains. This asymmetry drives risk aversion, status quo bias, and resistance to change.',
          quiz: {
            question: 'If someone has a loss aversion coefficient of 2, what would the potential gain need to be for them to accept a 50-50 bet risking $50?',
            options: [
              'At least $25',
              'At least $50',
              'At least $100',
              'At least $150'
            ],
            correct: 2,
            explanation: 'With a loss aversion coefficient of 2, losses hurt twice as much as gains please. To offset the psychological impact of potentially losing $50, the gain must be at least $100 - twice the potential loss - to make the bet psychologically acceptable.'
          }
        }
      },
      {
        id: 'tfs-22',
        title: 'Framing Effects: How Presentation Shapes Choice',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'Discovering how logically equivalent options can lead to different decisions based purely on how they are described or presented.',
          mainContent: `**Same Outcome, Different Choice**

Framing effects occur when logically equivalent descriptions lead to different decisions. The way a choice is presented - not the choice itself - determines what people prefer. This violates a fundamental assumption of rational choice theory: that decisions should depend only on outcomes, not descriptions.

**The Asian Disease Problem**

Kahneman and Tversky presented participants with this scenario:

A disease threatens 600 lives. Two programs are proposed:
- Program A: 200 people will be saved.
- Program B: 1/3 probability all 600 saved; 2/3 probability no one saved.

Most people chose Program A (the certain option).

But when reframed:
- Program C: 400 people will die.
- Program D: 1/3 probability no one dies; 2/3 probability all 600 die.

Most people now chose Program D (the gamble).

Programs A and C are identical. Programs B and D are identical. Yet the choice flipped based purely on whether outcomes were framed as gains (lives saved) or losses (deaths).

**Loss Aversion Explains the Pattern**

In the "saved" frame, people are in the domain of gains. They prefer the certainty of 200 saved over the gamble - risk aversion in the gain domain.

In the "die" frame, people are in the domain of losses. The certain loss of 400 is painful, so they gamble for a chance to avoid any losses - risk seeking in the loss domain.

Loss aversion makes us risk-averse for gains but risk-seeking for losses.

**Medical Decision Framing**

Patients make different medical choices depending on framing:
- "90% of patients survive this surgery" leads to more surgery acceptance than "10% of patients die from this surgery" - despite describing the identical outcome.

Physicians, despite training, show similar framing effects in their recommendations.

**Commercial and Political Framing**

Marketers and politicians exploit framing constantly:
- "95% lean" beef outsells "5% fat" beef
- Tax "relief" frames taxes as a burden requiring remedy
- "Pro-choice" versus "pro-life" each frame the debate favorably

**Defending Against Framing**

Reframe options both ways before deciding. If your choice changes based on framing, you're being manipulated by presentation rather than evaluating outcomes. The option that seems best under both framings is likely the better choice.`,
          keyTakeaway: 'Logically identical options lead to different choices depending on whether they\'re framed as gains or losses. We\'re risk-averse in the domain of gains and risk-seeking in the domain of losses.',
          quiz: {
            question: 'Why did more people choose the risky option when the Asian Disease problem was framed in terms of deaths rather than lives saved?',
            options: [
              'Death is more motivating than survival',
              'People wanted to prevent more deaths',
              'Loss framing triggered risk-seeking to avoid the certain loss',
              'The probabilities seemed different'
            ],
            correct: 2,
            explanation: 'When framed as "400 will die," the certain option felt like a definite loss. Loss aversion made this painful, so people preferred the gamble for a chance to avoid any deaths. In the gain frame ("200 saved"), they preferred the certain gain over the gamble.'
          }
        }
      },
      {
        id: 'tfs-25',
        title: 'The Focusing Illusion: Nothing Is As Important As You Think',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'Understanding how focusing attention on any aspect of life causes us to exaggerate its importance, distorting predictions about happiness and life decisions.',
          mainContent: `**The Illusion of Focus**

"Nothing in life is as important as you think it is while you are thinking about it."

This is the focusing illusion: when attention is directed to any aspect of life, its importance is exaggerated. This seemingly simple observation has profound implications for how we predict happiness and make life decisions.

**The California Question**

Are Californians happier than Midwesterners? When asked, most people - including those living in both regions - say yes. California has better weather, beaches, and outdoor activities.

But life satisfaction surveys show virtually no difference. Why the mismatch?

When thinking about the question, people focus on climate - the salient difference between regions. This focus inflates climate's apparent importance. But Californians don't spend their days thinking about weather. They think about jobs, relationships, traffic, and bills - just like everyone else. Climate rarely enters consciousness and therefore contributes little to moment-to-moment experience.

**Paraplegics and Lottery Winners**

Studies find that after adjustment periods, paraplegics are not as unhappy as predicted, and lottery winners are not as happy as expected. Both groups largely return toward their baseline levels of happiness.

People contemplating these outcomes focus intensely on disability or wealth, imagining they'd think about it constantly. But lottery winners eventually stop thinking about their wealth. Paraplegics find other things to occupy their minds. Whatever isn't in attention doesn't affect moment-to-moment experience.

**Miswanting**

The focusing illusion causes "miswanting" - wanting things that won't actually make us happy because we overestimate their impact while focused on them. We imagine the car, the promotion, the house will transform our lives - but once acquired, they fade from attention.

We adapt to both positive and negative changes faster than we predict because adaptation means reduced focus.

**Marriage and Income**

Being married or earning more income improves life satisfaction - but the effects are smaller than people expect. Both matter more when you're thinking about them (on surveys, in focused contemplation) than in the flow of daily experience.

**The Attention Economy**

The focusing illusion also explains why problems that capture media attention seem enormous while statistically larger problems remain invisible. Whatever occupies our attention seems important - whether it deserves that importance or not.

**Decision Implications**

Before major decisions, ask: "Once I'm used to this, how often will I actually think about it?" Things that fade from attention won't contribute much to ongoing experience, no matter how compelling they seem while you're focused on them.`,
          keyTakeaway: 'Whatever you focus on seems more important than it is. We overestimate the lasting impact of changes because we imagine we\'ll keep thinking about them, when in reality attention shifts and we adapt.',
          quiz: {
            question: 'Why don\'t lottery winners stay as happy as people expect them to be?',
            options: [
              'Money causes problems',
              'They focus on new problems the money creates',
              'After initial excitement, wealth fades from attention and doesn\'t affect moment-to-moment experience',
              'Winners were unhappy people to begin with'
            ],
            correct: 2,
            explanation: 'The focusing illusion means people imagining winning the lottery focus intensely on wealth, overestimating its importance. But actual winners stop thinking about money constantly - it fades from attention. Since it\'s not in focus, it doesn\'t elevate moment-to-moment experience as much as predicted.'
          }
        }
      },
    ],
  },
  {
    id: 'psych-level5',
    title: 'Level 5: Dark Psychology Defense',
    description: 'Recognize and defend against manipulation',
    icon: '🛡️',
    color: 'slate',
    unlockRequirement: 900,
    lessons: [
      {
        id: 'dp-1',
        title: 'What is Dark Psychology',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'Understanding the fundamentals of dark psychology and why learning about it protects you from manipulation.',
          mainContent: `**Defining Dark Psychology**

Dark psychology refers to the study of psychological tactics used to manipulate, persuade, and coerce others for personal gain, often without regard for the target's well-being. Unlike ethical influence, dark psychology operates through deception, exploitation of vulnerabilities, and psychological pressure.

**The Dark Triad**

At the core of dark psychology are three personality traits known as the Dark Triad:

1. **Narcissism**: An inflated sense of self-importance coupled with a deep need for admiration and lack of empathy
2. **Machiavellianism**: A manipulative approach to social interactions, focusing on self-interest and deception
3. **Psychopathy**: Characterized by impulsivity, lack of remorse, and antisocial behavior

Individuals high in these traits are more likely to employ dark psychological tactics against others.

**Why Learn About Dark Psychology?**

Knowledge is your first line of defense. When you understand how manipulation works, you can:

- Recognize manipulation attempts early, before emotional damage occurs
- Protect your decision-making from covert influence
- Maintain healthier relationships by identifying toxic patterns
- Help vulnerable people in your life avoid exploitation
- Distinguish between ethical persuasion and harmful manipulation

**The Ethical Approach**

This course focuses exclusively on recognition and defense. Understanding these tactics is not about using them against others - it's about building psychological immunity. Think of it like learning about viruses to develop vaccines, not to create biological weapons.

**Common Misconceptions**

Many people believe they're "too smart" to be manipulated. This is dangerous thinking. Manipulation targets emotions, not intelligence. Highly educated, successful people fall victim to manipulation every day because they underestimate its sophistication.

**Your Mental Armor**

Throughout this course, you'll develop what psychologists call "manipulation literacy" - the ability to decode hidden agendas, recognize emotional exploitation, and maintain your psychological boundaries even under pressure.`,
          keyTakeaway: 'Dark psychology is the study of manipulation tactics; understanding it is essential for self-protection, not exploitation of others.',
          quiz: {
            question: 'What is the primary purpose of learning about dark psychology?',
            options: [
              'To recognize and defend against manipulation',
              'To manipulate others more effectively',
              'To diagnose personality disorders',
              'To win arguments'
            ],
            correct: 0,
            explanation: 'Learning about dark psychology is fundamentally about self-protection - recognizing manipulation tactics so you can defend yourself and others against them.'
          }
        }
      },
      {
        id: 'dp-3',
        title: 'Red Flags in Relationships',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'Identify early warning signs that indicate a relationship may become or already is manipulative.',
          mainContent: `**Why Early Detection Matters**

Manipulation in relationships rarely starts overtly. It builds gradually, making it difficult to recognize when you're already emotionally invested. Learning red flags helps you identify problems before they escalate.

**Early-Stage Red Flags**

Watch for these warning signs in new relationships:

- **Moving too fast**: Declarations of love within weeks, pressure to commit quickly
- **Excessive flattery**: Praise that seems disproportionate to how well they know you
- **Boundary testing**: Small violations to see what you'll tolerate
- **Isolation attempts**: Subtle criticism of friends and family
- **Inconsistent stories**: Details that don't add up or change over time

**Communication Red Flags**

How someone communicates reveals their character:

- **Dismissing your feelings**: "You're too sensitive" or "You're overreacting"
- **Never apologizing**: Unable to take responsibility for mistakes
- **Conversation control**: Interrupting, changing subjects, or monopolizing discussions
- **Weaponized honesty**: Cruelty disguised as "just being honest"
- **Silent treatment**: Withdrawing communication as punishment

**Behavioral Red Flags**

Actions speak louder than words:

- **Jekyll and Hyde behavior**: Drastically different in public vs. private
- **Checking your phone/location**: Excessive monitoring disguised as care
- **Financial control attempts**: Wanting access to your money or criticizing your spending
- **Blame shifting**: Everything is somehow your fault
- **Threats disguised as jokes**: "I'd die if you left me" or "I don't know what I'd do"

**The Gut Check**

Your intuition often recognizes danger before your conscious mind. If you frequently feel:

- Anxious before seeing them
- Like you're walking on eggshells
- Confused about what's real
- Isolated from support systems

Trust these feelings - they're data, not weakness.

**What To Do**

Document concerning behavior. Talk to trusted friends. Consider professional guidance. Remember: healthy relationships should feel safe and supportive, not confusing and draining.`,
          keyTakeaway: 'Trust early warning signs like excessive flattery, boundary violations, and isolation attempts - healthy relationships feel safe, not confusing.',
          quiz: {
            question: 'Which behavior is a red flag for potential manipulation in a relationship?',
            options: [
              'Moving very fast and pressuring quick commitment',
              'Respecting your need for personal space',
              'Encouraging your friendships',
              'Taking responsibility for mistakes'
            ],
            correct: 0,
            explanation: 'Moving too fast and pressuring quick commitment is a classic manipulation tactic called "love bombing" that creates artificial intimacy before you can evaluate the relationship clearly.'
          }
        }
      },
      {
        id: 'dp-6',
        title: 'Gaslighting Recognition',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'Learn to identify gaslighting tactics designed to make you question your own reality and perception.',
          mainContent: `**What Is Gaslighting?**

Gaslighting is a form of psychological manipulation where the abuser attempts to make you doubt your own memory, perception, and sanity. The term comes from the 1944 film "Gaslight" where a husband manipulates his wife into believing she's going insane.

**Common Gaslighting Tactics**

**Denial and Contradiction**
- "That never happened."
- "You're imagining things."
- "I never said that."
- Flat denial despite clear evidence

**Trivializing**
- "You're overreacting."
- "Why are you so sensitive?"
- "It was just a joke."
- Making your valid concerns seem unreasonable

**Diverting**
- "You got that idea from your mother."
- "Your friends are putting thoughts in your head."
- Blaming outside influences for your observations

**Countering**
- "You remember wrong."
- "That's not how it happened."
- Questioning your memory constantly

**Forgetting/Denial of Evidence**
- "I don't remember that."
- "You're making things up."
- Pretending conversations never occurred

**Warning Signs You're Being Gaslighted**

- You constantly second-guess yourself
- You feel confused or "crazy" frequently
- You make excuses for your partner's behavior
- You feel like everything is your fault
- You have trouble making simple decisions
- You feel less confident than you used to
- You wonder if you're being too sensitive

**Defending Against Gaslighting**

1. **Document everything**: Keep a journal, save texts, note dates
2. **Trust your initial reaction**: Write it down before they can reframe it
3. **Maintain outside connections**: Reality checks with trusted people
4. **Recognize the pattern**: Once you see it, it loses power
5. **Don't argue reality**: State your truth and disengage

**The Truth**

If you consistently feel confused about reality after interactions with someone, that's not a personal failing - it's data about their behavior.`,
          keyTakeaway: 'Gaslighting makes you doubt your reality; combat it by documenting experiences, trusting your perceptions, and maintaining outside connections.',
          quiz: {
            question: 'Which of the following is a clear sign you may be experiencing gaslighting?',
            options: [
              'You constantly second-guess yourself and feel confused about what really happened',
              'You feel confident in your perceptions',
              'Your partner validates your feelings',
              'You have clear memories of events'
            ],
            correct: 0,
            explanation: 'Consistently second-guessing yourself and feeling confused about reality are hallmark signs of gaslighting - the manipulator is successfully making you doubt your own perceptions.'
          }
        }
      },
      {
        id: 'dp-11',
        title: 'Emotional Blackmail',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'Identify emotional blackmail tactics that use fear, obligation, and guilt to control your decisions.',
          mainContent: `**What Is Emotional Blackmail?**

Emotional blackmail, a term coined by therapist Susan Forward, is manipulation that uses fear, obligation, and guilt (FOG) to control your behavior. The blackmailer threatens negative consequences if you don't comply with their demands.

**The FOG of Emotional Blackmail**

**Fear**: Creating anxiety about what will happen if you don't comply
- "If you leave, I'll hurt myself."
- "I'll tell everyone your secrets."
- "You'll never see the kids again."

**Obligation**: Exploiting your sense of duty
- "After everything I've done for you."
- "A good partner/child/friend would..."
- "You owe me this."

**Guilt**: Making you feel responsible for their emotions
- "I'm so disappointed in you."
- "You're breaking my heart."
- "How could you do this to me?"

**Types of Emotional Blackmailers**

**Punishers**: Threaten to harm you or themselves
**Self-punishers**: Threaten self-harm to manipulate
**Sufferers**: Use their pain to create guilt
**Tantalizers**: Dangle rewards that may never come

**The Blackmail Transaction**

1. **Demand**: What they want from you
2. **Resistance**: You say no or hesitate
3. **Pressure**: FOG tactics applied
4. **Threat**: Explicit or implied consequences
5. **Compliance**: You give in to stop the pressure
6. **Repetition**: The pattern reinforces itself

**Defending Against Emotional Blackmail**

1. **Recognize the FOG**: Name the tactic being used
2. **Buy time**: "I need to think about this"
3. **Don't reward threats**: Compliance teaches them it works
4. **Separate feelings from decisions**: You can feel guilty and still say no
5. **Set limits**: "I won't respond to threats"
6. **Get support**: Trusted people can help you see clearly

**Remember**

You are not responsible for managing someone else's emotions. Threats of self-harm require professional intervention, not your compliance.`,
          keyTakeaway: 'Emotional blackmail uses fear, obligation, and guilt (FOG) to control you - recognize these tactics and refuse to let threats dictate your decisions.',
          quiz: {
            question: 'What does FOG stand for in emotional blackmail?',
            options: [
              'Fear, Obligation, and Guilt',
              'Frustration, Outrage, and Grief',
              'False, Outlandish, and Generous',
              'Feeling, Overthinking, and Guessing'
            ],
            correct: 0,
            explanation: 'FOG stands for Fear, Obligation, and Guilt - the three emotional levers that blackmailers pull to control your behavior and decisions.'
          }
        }
      },
      {
        id: 'dp-26',
        title: 'Building Psychological Immunity',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'Develop mental resilience and habits that protect you from manipulation attempts.',
          mainContent: `**What Is Psychological Immunity?**

Psychological immunity is the mental resilience that makes you naturally resistant to manipulation. Like physical immunity, it can be developed and strengthened through awareness, practice, and healthy habits.

**Core Components of Immunity**

**Self-Awareness**
- Knowing your vulnerabilities (loneliness, need for approval, etc.)
- Recognizing your emotional triggers
- Understanding your cognitive biases
- Honest self-assessment without self-criticism

**Emotional Regulation**
- Ability to pause before reacting
- Processing emotions without being controlled by them
- Recognizing when emotions are being triggered deliberately
- Maintaining composure under pressure

**Critical Thinking**
- Questioning claims automatically
- Seeking evidence before believing
- Considering alternative explanations
- Evaluating sources and motivations

**Strong Sense of Identity**
- Clear personal values
- Stable self-worth not dependent on others
- Knowing your boundaries
- Resistance to external definition

**Building Your Immunity**

**Daily Practices**
- Reflect on interactions: What did I feel and why?
- Practice saying "I need time to think"
- Maintain diverse relationships
- Regular reality checks with trusted people

**Strengthen Weak Points**
- If lonely: Build community before seeking romance
- If approval-seeking: Work on internal validation
- If conflict-avoidant: Practice small confrontations
- If trusting: Develop healthy skepticism

**Develop Pattern Recognition**
- Study manipulation tactics (this course!)
- Review past manipulation experiences
- Notice red flags earlier each time
- Trust your pattern recognition

**Maintain Protective Factors**
- Financial independence
- Strong support network
- Physical and mental health
- Regular professional development
- Hobbies and interests outside relationships

**The Inoculation Effect**

Research shows that exposure to weak forms of manipulation arguments, along with refutations, makes you more resistant to full-strength manipulation later - like a psychological vaccine. Learning about tactics inoculates you against them.`,
          keyTakeaway: 'Psychological immunity is built through self-awareness, emotional regulation, critical thinking, and strong identity - develop these and maintain protective factors.',
          quiz: {
            question: 'How does learning about manipulation tactics function like a psychological vaccine?',
            options: [
              'Exposure to weak forms of manipulation with refutations builds resistance to future attempts',
              'It prevents all manipulation permanently',
              'It only works for physical threats',
              'It makes you paranoid about everyone'
            ],
            correct: 0,
            explanation: 'The inoculation effect in psychology shows that exposure to weakened forms of manipulative arguments, along with their refutations, builds mental resistance to those tactics in the future - similar to how vaccines work.'
          }
        }
      },
    ],
  },
  {
    id: 'psych-level6',
    title: 'Level 6: Advanced Protection',
    description: 'Master boundary setting and ethical influence',
    icon: '⚔️',
    color: 'red',
    unlockRequirement: 1200,
    lessons: [
      {
        id: 'dp-4',
        title: 'Protecting Your Boundaries',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'Learn practical strategies for establishing and maintaining psychological boundaries against manipulation.',
          mainContent: `**What Are Psychological Boundaries?**

Boundaries are the limits you set to protect your mental, emotional, and physical well-being. They define what treatment you will and won't accept. Strong boundaries are your primary defense against manipulation.

**Types of Boundaries**

- **Emotional**: Protecting your feelings from others' negativity or demands
- **Physical**: Control over your personal space and body
- **Time**: How you allocate your hours and energy
- **Mental**: Your right to your own thoughts and opinions
- **Material**: How your possessions and money are used
- **Digital**: Privacy of your devices, accounts, and online presence

**Why Manipulators Target Boundaries**

Manipulators systematically erode boundaries because:

1. Weak boundaries mean easier access to exploit you
2. Each boundary violation normalizes the next
3. People without boundaries are more dependent
4. Boundary erosion creates confusion about what's acceptable

**How to Set Effective Boundaries**

Use the CLEAR framework:

- **C**ommunicate directly: State your boundary without excessive explanation
- **L**imit justification: You don't need to defend your limits
- **E**xpect resistance: Manipulators will push back - prepare for it
- **A**ct consistently: Enforce consequences every time
- **R**emember your worth: You deserve to have limits respected

**Boundary-Setting Scripts**

Practice these phrases:

- "That doesn't work for me."
- "I'm not comfortable with that."
- "I need time to think about this."
- "No." (A complete sentence)
- "I've made my decision."

**Handling Pushback**

When boundaries are challenged:

1. Repeat your boundary calmly (broken record technique)
2. Don't engage with guilt trips or arguments
3. End the conversation if disrespect continues
4. Follow through with stated consequences

**The Boundary Paradox**

People who respect you will respect your boundaries. Those who don't were never safe relationships. Boundaries don't damage healthy relationships - they reveal unhealthy ones.`,
          keyTakeaway: 'Strong boundaries are your primary defense against manipulation; people who respect you will respect your limits.',
          quiz: {
            question: 'What is the most effective response when someone repeatedly challenges your boundary?',
            options: [
              'Calmly repeat your boundary and follow through with consequences',
              'Explain your reasoning in more detail',
              'Compromise to keep the peace',
              'Apologize for being difficult'
            ],
            correct: 0,
            explanation: 'The "broken record" technique of calmly repeating your boundary, combined with consistent enforcement of consequences, is most effective against manipulation attempts.'
          }
        }
      },
      {
        id: 'dp-9',
        title: 'The DARVO Technique',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'Recognize DARVO - Deny, Attack, Reverse Victim and Offender - a common manipulation response to accountability.',
          mainContent: `**What Is DARVO?**

DARVO is an acronym describing a manipulation technique used by abusers when confronted with their behavior. It stands for:

- **D**eny
- **A**ttack
- **R**everse **V**ictim and **O**ffender

This pattern is so common among manipulators that psychologist Jennifer Freyd coined the term to help people recognize it.

**The DARVO Sequence**

**Stage 1: Deny**
When confronted with wrongdoing, the manipulator flatly denies:
- "I never did that."
- "That's not what happened."
- "You're misremembering."
- Complete refusal to acknowledge the behavior

**Stage 2: Attack**
When denial fails, they attack your credibility:
- "You're crazy/unstable/paranoid."
- "You always twist things."
- "No one believes you."
- Attacking your character, motives, or mental state

**Stage 3: Reverse Victim and Offender**
Finally, they flip the script entirely:
- "I'm the victim here."
- "Look what you're putting me through."
- "You're the abusive one for accusing me."
- "I'm being persecuted."

**Real-World Examples**

*You confront a partner about lying:*
- **Deny**: "I never lied to you."
- **Attack**: "You're so paranoid, you need help."
- **Reverse**: "I can't believe you'd accuse me. Do you know how much that hurts me?"

**Why DARVO Works**

1. It creates confusion and self-doubt
2. You end up defending yourself instead of addressing the issue
3. It manipulates your empathy (now you feel bad for them)
4. It discourages future confrontations

**Defending Against DARVO**

1. **Know the pattern**: Once you see it, you can name it
2. **Stay on topic**: Don't get derailed by attacks or victim-flipping
3. **Document incidents**: Hard evidence counters denial
4. **Trust your experience**: Don't let attacks make you doubt yourself
5. **Don't JADE**: Don't Justify, Argue, Defend, or Explain - it fuels the cycle
6. **Seek support**: Validate your reality with trusted others`,
          keyTakeaway: 'DARVO (Deny, Attack, Reverse Victim and Offender) is a manipulation technique to avoid accountability - recognize the pattern to avoid getting derailed.',
          quiz: {
            question: 'In the DARVO technique, what does the "RVO" stand for?',
            options: [
              'Reverse Victim and Offender',
              'Respond Very Openly',
              'Resist Valid Observations',
              'Redirect Verbal Opposition'
            ],
            correct: 0,
            explanation: 'RVO stands for "Reverse Victim and Offender" - the final stage where the manipulator flips the script to portray themselves as the victim of your accusation.'
          }
        }
      },
      {
        id: 'dp-27',
        title: 'Setting Healthy Boundaries',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'Master the practical skills of establishing, communicating, and maintaining healthy boundaries.',
          mainContent: `**Boundaries as Self-Definition**

Boundaries are not walls to keep others out - they're clear definitions of where you end and others begin. They communicate your values, protect your wellbeing, and create the conditions for healthy relationships.

**Types of Boundaries to Set**

**Emotional Boundaries**
- "I'm not comfortable discussing my trauma casually."
- "I won't take responsibility for your feelings."
- "I need you to speak to me respectfully."

**Physical Boundaries**
- "I need personal space when I'm stressed."
- "I'm not comfortable with that level of physical contact."
- "Please knock before entering my room."

**Time Boundaries**
- "I don't respond to work emails after 7 PM."
- "I need advance notice for plans."
- "Sunday is my rest day."

**Digital Boundaries**
- "I need privacy for my phone and accounts."
- "I don't share passwords."
- "I respond to messages on my own schedule."

**The Boundary-Setting Framework**

**Step 1: Identify Your Needs**
What do you need to feel safe, respected, and healthy?

**Step 2: Communicate Clearly**
Use "I" statements without over-explaining:
- "I need..."
- "I feel uncomfortable when..."
- "I'm not willing to..."

**Step 3: State Consequences**
What happens if the boundary is violated?
- "If you continue, I'll need to leave."
- "I won't engage in conversations that include yelling."

**Step 4: Follow Through**
Boundaries without consequences are just suggestions.

**Handling Pushback**

Expect it. Respond with:
- **Broken record**: Calmly repeat the boundary
- **Fogging**: "You might be right, and I still need this"
- **Deflection**: "I understand you disagree. My boundary stands."
- **Exit**: Leave if boundary continues to be violated

**Common Boundary Myths**

- "Boundaries are selfish" (No, they're self-respect)
- "If they loved me, I wouldn't need them" (Love requires boundaries)
- "Boundaries push people away" (They clarify healthy relationships)
- "I can't set boundaries with family" (You can with anyone)

**Remember**

The people who respect your boundaries are your people. Those who don't reveal themselves.`,
          keyTakeaway: 'Healthy boundaries are communicated clearly with consequences and enforced consistently - those who respect them are your people.',
          quiz: {
            question: 'What makes a boundary effective versus just a suggestion?',
            options: [
              'Clearly stated consequences that are consistently enforced',
              'Long explanations of why you need the boundary',
              'Hoping the other person will understand',
              'Apologizing for having the boundary'
            ],
            correct: 0,
            explanation: 'Boundaries are only effective when they include clear consequences and those consequences are consistently enforced. Without follow-through, boundaries become mere suggestions that manipulators learn to ignore.'
          }
        }
      },
      {
        id: 'dp-28',
        title: 'Recovery from Manipulation',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'Learn the process of healing and recovery after experiencing manipulation or psychological abuse.',
          mainContent: `**Understanding the Impact**

Manipulation and psychological abuse cause real harm. Common effects include:

- Confusion about reality (from gaslighting)
- Damaged self-esteem and self-trust
- Anxiety, depression, PTSD symptoms
- Difficulty trusting others
- Shame and self-blame
- Trauma bonding that makes moving on difficult

Acknowledging the impact is the first step to healing.

**The Recovery Process**

**Phase 1: Recognition and Separation**
- Accepting that manipulation occurred
- Creating distance from the manipulator
- Going no-contact when possible
- Securing physical and financial safety

**Phase 2: Understanding**
- Learning about manipulation tactics (this course)
- Recognizing patterns in the relationship
- Understanding it wasn't your fault
- Seeing the manipulation clearly in hindsight

**Phase 3: Processing**
- Working through emotions: anger, grief, shame
- Professional therapy support
- Journaling and reflection
- Allowing yourself to feel without judgment

**Phase 4: Rebuilding**
- Reconstructing self-trust
- Rebuilding self-esteem
- Reconnecting with your identity
- Establishing healthy boundaries

**Phase 5: Integration**
- Learning from the experience
- Using knowledge to protect yourself
- Helping others when ready
- Finding meaning and growth

**Healing Practices**

- **Therapy**: Trauma-informed professional support
- **Support groups**: Connecting with others who understand
- **Self-compassion**: Treating yourself with kindness
- **Body work**: Exercise, yoga, somatic therapy
- **Journaling**: Processing through writing
- **Reclaiming activities**: Returning to interests you abandoned

**Important Reminders**

- Healing is not linear - expect setbacks
- There's no timeline for recovery
- Self-blame is part of the manipulation, not the truth
- You are not damaged; you are healing
- Professional help is strength, not weakness

**Moving Forward**

Recovery isn't about becoming who you were before - it's about becoming who you're meant to be with new wisdom and strength.`,
          keyTakeaway: 'Recovery from manipulation takes time and follows stages - recognition, understanding, processing, rebuilding, and integration - be patient and seek support.',
          quiz: {
            question: 'Why is self-blame common after experiencing manipulation?',
            options: [
              'It is often part of the manipulation itself and not an accurate reflection of reality',
              'Because victims are always partially responsible',
              'It helps with the healing process',
              'Manipulators are not responsible for their actions'
            ],
            correct: 0,
            explanation: 'Self-blame is often part of the manipulation itself - manipulators deliberately make targets feel responsible for the abuse. This self-blame is a symptom to heal from, not an accurate reflection of fault.'
          }
        }
      },
      {
        id: 'dp-30',
        title: 'Ethical Influence',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'Understand the principles of ethical influence that respects others while achieving positive outcomes.',
          mainContent: `**The Ethical Alternative**

Having learned about manipulation, it's important to understand ethical influence - persuasion that achieves goals while respecting others' autonomy, wellbeing, and informed consent.

**Core Principles of Ethical Influence**

**Transparency**
- Your intentions are clear
- You present accurate information
- You acknowledge your perspective and biases
- No hidden agendas or deception

**Respect for Autonomy**
- Others have the right to decide differently
- "No" is accepted gracefully
- No punishment for disagreement
- Supporting informed decision-making

**Mutual Benefit**
- Both parties can gain from the interaction
- Not exploiting the other's vulnerabilities
- Considering their interests genuinely
- Win-win orientation

**Truthfulness**
- Facts are accurate
- Context is provided
- Counterarguments are acknowledged
- Not cherry-picking information

**Ethical Influence Techniques**

**Building Genuine Rapport**
- Real interest in others
- Active listening
- Finding authentic common ground
- Respect and warmth

**Logical Persuasion**
- Sound arguments
- Good evidence
- Addressing counterpoints
- Letting reason prevail

**Inspiring Through Values**
- Connecting to shared values
- Leading by example
- Appealing to best instincts
- Vision-casting for positive outcomes

**Creating Real Value**
- Offering genuine help
- Providing useful information
- Solving real problems
- Building trust through delivery

**The Ethics Test**

Before attempting to influence, ask:
1. Am I being honest about my intentions?
2. Would I want this used on me?
3. Does this respect their ability to choose?
4. Am I providing accurate information?
5. Is this in their genuine interest as well as mine?

**Why Ethics Matter**

Beyond morality, ethical influence is sustainable. Manipulation may achieve short-term gains but destroys trust. Ethical influence builds relationships that last and influence that compounds over time.

**Your Commitment**

Use your knowledge of manipulation for defense only. Be the kind of person who influences through honesty, competence, and genuine care - not through exploitation.`,
          keyTakeaway: 'Ethical influence achieves goals through transparency, respect for autonomy, truthfulness, and mutual benefit - use your knowledge of manipulation only for defense.',
          quiz: {
            question: 'What is the fundamental difference between ethical influence and manipulation?',
            options: [
              'Ethical influence respects autonomy and operates transparently; manipulation exploits and deceives',
              'They are essentially the same thing with different names',
              'Ethical influence is less effective than manipulation',
              'Manipulation is always obvious while influence is subtle'
            ],
            correct: 0,
            explanation: 'The fundamental difference is that ethical influence respects the other person\'s autonomy and right to make informed decisions, while manipulation uses deception and exploits vulnerabilities for one-sided gain.'
          }
        }
      },
    ],
  },
];

export default psychologyExpandedPathway;
