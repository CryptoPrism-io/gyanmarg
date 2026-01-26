import type { PathwayLevel } from '@/types';

export const bruceLeeExpandedPathway: PathwayLevel[] = [
  {
    id: 'bruce-level1',
    title: 'Level 1: Be Water Philosophy',
    description: 'Embrace adaptability as your greatest strength',
    icon: '💧',
    color: 'amber',
    unlockRequirement: 0,
    lessons: [
      {
        id: 'bruce-intro',
        title: 'Empty Your Cup',
        type: 'intro',
        duration: 8,
        xpReward: 50,
        content: {
          overview: 'Bruce Lee\'s most famous teaching begins with letting go.',
          mainContent: `**The Philosophy of Bruce Lee**

Bruce Lee was more than a martial artist - he was a philosopher who revolutionized how we think about adaptability, growth, and self-expression.

**The Famous Water Teaching:**

"Empty your mind, be formless, shapeless — like water. Now you put water in a cup, it becomes the cup; You put water into a bottle it becomes the bottle; You put it in a teapot it becomes the teapot. Now water can flow or it can crash. Be water, my friend."

**What This Really Means:**

**1. Adaptability Over Rigidity**
Don't cling to one way of doing things. The rigid tree breaks in the storm; the flexible reed survives.

**2. No Wasted Resistance**
Water doesn't fight obstacles - it flows around them. Save your energy for what matters.

**3. Take the Shape Needed**
In different situations, become what's required. A leader in one context, a learner in another.

**4. Power Through Persistence**
Water carved the Grand Canyon - not through force, but through consistency over time.

**The Empty Cup Parable:**
A scholar visited a Zen master. While serving tea, the master kept pouring until the cup overflowed.
"It's full! No more will go in!"
"Like this cup, you are full of your own opinions. How can I teach you unless you first empty your cup?"

**Application to Life:**
- Unlearn to relearn
- Drop ego to grow
- Release fixed identity
- Embrace constant evolution`,
          keyTakeaway: 'True strength comes from adaptability, not rigidity. Empty your cup to receive new wisdom.',
          actionItem: 'Identify one belief or habit you\'re holding onto that may be limiting your growth.',
        },
      },
      {
        id: 'bl-1',
        title: 'Be Water, My Friend',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'Discover Bruce Lee\'s most iconic philosophy about adaptability and formlessness.',
          mainContent: `**The Water Philosophy**

Bruce Lee's most famous teaching comes from a simple yet profound observation: "Be water, my friend." This wasn't merely poetic language—it was a complete philosophy of life distilled into four words.

**The Original Teaching**

In a 1971 interview, Lee explained: "Empty your mind, be formless, shapeless—like water. Now you put water in a cup, it becomes the cup; you put water in a bottle, it becomes the bottle; you put it in a teapot, it becomes the teapot. Now water can flow or it can crash. Be water, my friend."

This teaching emerged from Lee's years of martial arts study, particularly his frustration with rigid systems that couldn't adapt to real combat situations.

**The Deeper Meaning**

Water represents several key qualities Lee believed essential for mastery:

1. **Adaptability**: Water changes shape based on its container without losing its essential nature. Similarly, we must adapt to circumstances while maintaining our core identity.

2. **Persistence**: Water can wear away the hardest stone given enough time. Lee wrote in *Striking Thoughts*: "Running water never grows stale."

3. **Power in Softness**: Water appears soft but can destroy mountains. True strength often appears gentle.

4. **Naturalness**: Water doesn't try to flow—it simply flows. Lee sought this effortless action in all things.

**Practical Application**

The water philosophy applies beyond martial arts:

- In relationships, adapt your communication style to different people
- In career challenges, find ways around obstacles rather than forcing through them
- In learning, remain open to new approaches rather than clinging to one method
- In conflict, redirect energy rather than meeting force with force

**The Paradox of Form**

Being formless doesn't mean having no skill or structure. Water still has properties—it's still water. Similarly, mastery requires deep skill that becomes so natural it appears formless. The goal is transcending rigid form, not avoiding form entirely.`,
          keyTakeaway: 'True adaptability means maintaining your essential nature while adjusting to any situation—like water taking the shape of its container without ceasing to be water.',
          quiz: {
            question: 'According to Bruce Lee\'s water philosophy, what is the relationship between softness and power?',
            options: [
              'Softness contains the potential for immense power, like water wearing away stone',
              'Softness is weakness and should be avoided',
              'Power and softness are completely separate qualities',
              'Softness is only useful in defense, not offense'
            ],
            correct: 0,
            explanation: 'Lee taught that water appears soft but can destroy mountains over time. True power often manifests through apparent softness and adaptability rather than rigid force.'
          }
        }
      },
      {
        id: 'bl-2',
        title: 'Empty Your Cup',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'Learn why emptying preconceptions is essential for genuine learning and growth.',
          mainContent: `**The Overflowing Cup**

Bruce Lee often shared a Zen story that became central to his teaching philosophy. A scholar visited a Zen master to learn about Zen. The master served tea, pouring until the cup overflowed. "Stop! The cup is full!" cried the scholar. The master replied: "Like this cup, you are full of your own opinions. How can I show you Zen unless you first empty your cup?"

**Lee's Interpretation**

In *Striking Thoughts*, Lee wrote: "A wise man can learn more from a foolish question than a fool can learn from a wise answer." This reflects his belief that the obstacle to learning isn't lack of information—it's our own mental clutter.

Lee experienced this firsthand. Despite mastering Wing Chun under the legendary Ip Man, he realized his knowledge was limiting him. He wrote: "The usefulness of a cup is in its emptiness."

**The Three Obstacles**

Lee identified three things that fill our cups unnecessarily:

1. **Pride in Past Knowledge**: "The more we value things, the less we value ourselves." Our achievements can become prisons.

2. **Fixed Beliefs**: "If you always put limits on everything you do, physical or anything else, it will spread into your work and into your life."

3. **Fear of Looking Foolish**: Many refuse to be beginners again, missing opportunities for genuine growth.

**The Practice of Emptying**

Emptying your cup isn't about becoming ignorant—it's about approaching each moment fresh. Lee advised:

- Question your assumptions regularly
- Listen more than you speak
- Treat familiar situations as if encountering them for the first time
- Welcome correction as a gift

**Constant Emptying**

This isn't a one-time act. Lee noted: "Absorb what is useful, discard what is useless." This requires continuously emptying and refilling—a dynamic process rather than a static state.`,
          keyTakeaway: 'Genuine learning requires releasing what you think you know—your preconceptions, pride, and fixed beliefs—to make room for new understanding.',
          quiz: {
            question: 'What does "emptying your cup" primarily require according to Bruce Lee?',
            options: [
              'Forgetting everything you\'ve learned',
              'Releasing preconceptions and approaching situations with fresh curiosity',
              'Avoiding all formal education',
              'Becoming passive and accepting everything without question'
            ],
            correct: 1,
            explanation: 'Emptying your cup means releasing preconceptions and fixed beliefs to approach learning with genuine openness—not forgetting knowledge, but not letting it limit new understanding.'
          }
        }
      },
      {
        id: 'bl-3',
        title: 'The Art of Dying',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'Explore how accepting mortality leads to authentic, fearless living.',
          mainContent: `**Death as Teacher**

Bruce Lee wrote extensively about death—not morbidly, but as a gateway to authentic living. In *Striking Thoughts*, he stated: "The medicine for my suffering I had within me from the very beginning, but I did not take it. My ailment came from within myself, but I did not observe it."

For Lee, contemplating death cured the ailment of living unconsciously.

**The Samurai Influence**

Lee drew from Bushido, the samurai code. Samurai meditated on death daily, believing this freed them from fear and hesitation. Lee adapted this: "Because one does not want to be disturbed, to be made uncertain, he establishes a pattern of conduct, of thought, a pattern of relationships to man. He then becomes a slave to the pattern and takes the pattern to be the real thing."

Death disrupts all patterns. Accepting this dissolves our attachment to false security.

**Dying to the Old Self**

Lee's "art of dying" wasn't only about physical death. He wrote: "To become different from what we are, we must have some awareness of what we are." This awareness often requires letting parts of ourselves die.

Lee experienced this personally. He had to let his identity as a traditional martial artist die to create Jeet Kune Do.

**The Fear Behind Fear**

"What is it that you fear?" Lee asked. Behind every fear—failure, rejection, pain—lies the ultimate fear of death. By facing death directly, lesser fears lose power.

**Living Fully**

Paradoxically, accepting death leads to fuller living. Lee wrote: "The key to immortality is first living a life worth remembering." When we stop running from death, we start truly living.`,
          keyTakeaway: 'Accepting mortality dissolves the fears and attachments that prevent authentic living—death awareness is the ultimate teacher of how to truly live.',
          quiz: {
            question: 'How did Bruce Lee believe death contemplation affects daily living?',
            options: [
              'It creates depression and hopelessness',
              'It frees us from lesser fears and enables authentic action',
              'It has no practical value for everyday life',
              'It should be avoided as it leads to recklessness'
            ],
            correct: 1,
            explanation: 'Lee believed that accepting mortality dissolves attachment to patterns, fear, and ego concerns. This freedom enables authentic living because we\'re no longer paralyzed by lesser fears.'
          }
        }
      },
      {
        id: 'bl-4',
        title: 'Absorb What Is Useful',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'Master Bruce Lee\'s principle of selective learning and personal filtration.',
          mainContent: `**The Complete Maxim**

Bruce Lee's approach to learning is captured in one of his most quoted statements: "Absorb what is useful, discard what is useless, and add what is specifically your own." This three-part formula became the foundation of Jeet Kune Do and his entire philosophy.

**Part One: Absorb What Is Useful**

Lee studied everything—Western boxing, fencing, wrestling, Wing Chun, Judo, philosophy, psychology. He wrote: "Research your own experience. Absorb what is useful, reject what is useless, add what is essentially your own."

The key word is "useful"—not traditional, popular, or impressive. Lee asked: Does this work? Does this help me express myself more fully?

**Part Two: Discard What Is Useless**

This proved harder for Lee's students than absorbing. We become attached to what we've learned. Lee challenged: "Man, the living creature, the creating individual, is always more important than any established style or system."

What makes something useless? Lee offered these tests:
- Does it work under pressure?
- Does it require circumstances that rarely occur?
- Does it express who you truly are?
- Is it kept only because of tradition?

**Part Three: Add What Is Your Own**

This separates Lee's approach from mere eclecticism. He wasn't just mixing styles—he was creating personal expression. "Always be yourself, express yourself, have faith in yourself," he wrote.

**The Continuous Process**

This isn't done once. Lee emphasized: "To me, the extraordinary aspect of martial arts lies in its simplicity. The easy way is also the right way."

What's useful today may be useless tomorrow. What you add now may need discarding later. The formula is a process, not a destination.`,
          keyTakeaway: 'True learning requires actively filtering experiences through practical testing—absorbing what works, discarding what doesn\'t, and contributing your unique expression.',
          quiz: {
            question: 'What is the third component of Lee\'s learning formula, and why is it essential?',
            options: [
              'Practice daily—it ensures skill development',
              'Add what is specifically your own—it transforms learning into personal expression',
              'Teach others—it solidifies understanding',
              'Compare with masters—it ensures quality'
            ],
            correct: 1,
            explanation: 'Adding what is specifically your own transforms learning from mere accumulation or imitation into genuine personal expression. This makes the knowledge truly yours.'
          }
        }
      },
      {
        id: 'bl-5',
        title: 'Jeet Kune Do Origins',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'Understand how Bruce Lee\'s personal evolution gave birth to the Way of the Intercepting Fist.',
          mainContent: `**The Birth of JKD**

Jeet Kune Do—"The Way of the Intercepting Fist"—emerged from Bruce Lee's frustration with traditional martial arts' limitations. But it was never meant to be just another style. Lee wrote: "I have not invented a 'new style,' composite, modified or otherwise... On the contrary, I hope to free my followers from clinging to styles, patterns, or molds."

**The Catalyzing Fight**

In 1964, Lee faced Wong Jack Man in a now-legendary match. Though Lee won, he was dissatisfied—the fight lasted too long and exhausted him. This forced deep self-examination.

Lee realized his Wing Chun training, while excellent, had gaps. He wrote: "I began to change from self-consciousness to self-expression, from blindly following tradition to questioning and personal research."

**Core Principles Emerge**

JKD wasn't built by adding techniques but by stripping away. Lee studied boxing's footwork, fencing's timing, wrestling's grappling—taking only what proved useful.

The name itself reveals the philosophy: intercepting means stopping attacks at their origin, not after they've developed. This requires reading intentions, not reactions.

Lee articulated key principles:
- **Economy of motion**: No wasted movement
- **Directness**: The shortest distance between two points
- **Non-classical**: No rigid forms or techniques
- **Alive and adaptable**: Responsive to the moment

**The Anti-Style Style**

Lee faced a paradox: teaching JKD might turn it into another rigid system. He warned: "If you follow the classical pattern, you are understanding the routine, the tradition, the shadow—you are not understanding yourself."

**Personal Liberation**

JKD's ultimate purpose isn't combat effectiveness—it's self-knowledge. Lee wrote: "The art of JKD is simply to simplify." By stripping away accumulated techniques and beliefs, practitioners discover their authentic selves.`,
          keyTakeaway: 'Jeet Kune Do emerged not as a new style but as a process of liberation—stripping away rigid patterns to reveal authentic, efficient self-expression.',
          quiz: {
            question: 'Why did Bruce Lee resist calling Jeet Kune Do a "style"?',
            options: [
              'He hadn\'t developed it fully enough',
              'He feared it would become another rigid system people followed blindly',
              'He wanted to avoid legal complications',
              'Traditional masters pressured him not to'
            ],
            correct: 1,
            explanation: 'Lee created JKD to free people from rigid patterns, not create new ones. He feared calling it a style would lead followers to cling to its forms rather than pursuing their own self-expression.'
          }
        }
      },
    ],
  },
  {
    id: 'bruce-level2',
    title: 'Level 2: The Way of No Way',
    description: 'Master the philosophy of limitless potential',
    icon: '☯️',
    color: 'amber',
    unlockRequirement: 5,
    lessons: [
      {
        id: 'bruce-jkd',
        title: 'Jeet Kune Do: The Way of No Way',
        type: 'concept',
        duration: 12,
        xpReward: 100,
        content: {
          overview: 'Bruce Lee\'s martial art was actually a philosophy of liberation.',
          mainContent: `**Jeet Kune Do: Beyond Martial Arts**

JKD translates to "The Way of the Intercepting Fist" - but its deeper meaning is about freedom from limitation.

**The Core Principles:**

**1. Absorb What Is Useful**
Study everything. Keep only what works FOR YOU.
- Don't follow systems blindly
- Test ideas through practice
- Personalize your approach

**2. Discard What Is Useless**
If it doesn't serve you, let it go.
- Tradition for tradition's sake is dead weight
- Methods that don't fit YOU are useless
- Constantly prune what no longer serves

**3. Add What Is Specifically Your Own**
Create, don't just imitate.
- Your expression is unique
- No one can fight/live exactly like you
- Personal style emerges from honest self-expression

**"Using No Way As Way"**
The moment you have a fixed method, you're limited. JKD has no fixed patterns because:
- Every opponent is different
- Every situation is unique
- Preset patterns create predictability

**"Having No Limitation As Limitation"**
The only limit is the one you accept. Remove mental barriers:
- "I can't" becomes "I haven't yet"
- "That's impossible" becomes "Let me test it"
- Fixed identity becomes fluid growth

**Applied to Life:**
- Career: Don't limit yourself to one path
- Learning: Mix methods, find YOUR way
- Relationships: Adapt to each person
- Problems: No single solution fits all`,
          keyTakeaway: 'True mastery comes from creating your own path by absorbing, discarding, and adding.',
          quiz: {
            question: 'What does "Using No Way As Way" mean?',
            options: [
              'Having no method at all',
              'Being lazy about technique',
              'Not being limited by any single fixed method',
              'Avoiding all martial arts training',
            ],
            correct: 2,
            explanation: 'It means staying adaptable and not being trapped by any rigid system or style.',
          },
        },
      },
      {
        id: 'bl-6',
        title: 'No Way as Way',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'Discover the paradoxical principle of having no fixed method as your method.',
          mainContent: `**The Ultimate Principle**

"Using no way as way, having no limitation as limitation"—this phrase captures the essence of Bruce Lee's philosophy. It sounds paradoxical, even contradictory. How can having no method be a method? Lee spent years living this question.

**Beyond Technique**

Lee wrote in *Striking Thoughts*: "I hope to free my comrades from bondage to styles, patterns and doctrines." Traditional martial arts prescribed exact responses to specific attacks. Lee saw the flaw: real situations never match textbook scenarios.

"Using no way as way" means responding authentically to each unique moment rather than applying predetermined formulas.

**The Zen Influence**

Lee drew heavily from Zen Buddhism, particularly the concept of mushin—"no mind." He explained: "When there is no thought of good and no thought of evil, tell me, what is your original face?"

The original face exists before we overlay learned responses. "No way" means returning to this original responsiveness.

**Method Without Method**

This isn't chaos or randomness. Lee clarified: "It is not a matter of petty technique but of highly developed personal spirituality and physique." Years of training create such deep skill that technique becomes invisible—present but not conscious.

Lee used the analogy of speaking: fluent speakers don't think about grammar rules while talking. Similarly, the master martial artist doesn't think about techniques while fighting.

**The Danger of Ways**

Why abandon fixed methods? Lee observed: "Set patterns, incapable of adaptability, of pliability, only offer a better cage." Any fixed way:
- Becomes outdated as situations change
- Limits perception to expected scenarios
- Prevents natural response
- Creates false confidence

**The Practice Paradox**

Achieving "no way" requires intensive practice. Lee trained constantly. The goal: practice until methods dissolve into pure responsiveness. "True refinement seeks simplicity," he wrote.`,
          keyTakeaway: 'Having no fixed method means training so deeply that technique becomes invisible, allowing authentic response to each unique moment without predetermined formulas.',
          quiz: {
            question: 'What does "using no way as way" require according to Bruce Lee?',
            options: [
              'Avoiding all training and practice',
              'Randomly choosing different techniques',
              'Intensive practice until methods dissolve into natural responsiveness',
              'Studying many different martial arts styles simultaneously'
            ],
            correct: 2,
            explanation: 'Lee emphasized that "no way" requires deep practice—training until techniques become so internalized they\'re invisible, enabling authentic response without conscious method-selection.'
          }
        }
      },
      {
        id: 'bl-7',
        title: 'Having No Limitation as Limitation',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'Learn how refusing to accept limitations becomes the only acceptable boundary.',
          mainContent: `**The Second Half**

"Using no way as way, having no limitation as limitation." The second phrase completes Lee's paradoxical principle. What does it mean to have limitlessness as your only limit?

**Self-Imposed Prisons**

Lee observed that most limitations are self-created. In *Striking Thoughts*, he wrote: "If you always put limits on everything you do, physical or anything else, it will spread into your work and into your life. There are no limits. There are only plateaus, and you must not stay there, you must go beyond them."

The limitations we accept—"I'm not creative," "I'm too old," "That's not how it's done"—become the walls of our prison.

**Breaking Through**

Lee's physical achievements demonstrated his philosophy. Doctors told him he'd never practice martial arts again after a severe back injury. He refused that limitation, rehabilitating himself and becoming more powerful than before.

He wrote: "Don't fear failure. Not failure, but low aim, is the crime. In great attempts it is glorious even to fail."

**The Nature of Plateaus**

Lee distinguished plateaus from limitations. Plateaus are temporary—places where progress pauses. Limitations are accepted endpoints. "A goal is not always meant to be reached, it often serves simply as something to aim at."

When you hit a plateau:
- Recognize it as temporary
- Examine what's actually stopping you
- Question if the limitation is real or assumed
- Find new approaches

**The Infinite Game**

Making limitlessness your only limit creates an infinite game. There's always further to go, deeper to understand, more to express. Lee wrote: "A martial artist who drills exclusively to a set pattern of combat is losing his freedom."`,
          keyTakeaway: 'Most limitations are self-imposed mental barriers—making limitlessness your only limit means continuously questioning and transcending assumed boundaries.',
          quiz: {
            question: 'How did Bruce Lee distinguish plateaus from limitations?',
            options: [
              'Plateaus are physical, limitations are mental',
              'Plateaus are temporary pauses; limitations are accepted endpoints',
              'There is no difference between them',
              'Plateaus are good, limitations are always bad'
            ],
            correct: 1,
            explanation: 'Lee saw plateaus as temporary places where progress pauses, while limitations are endpoints we accept as permanent. The key is recognizing that most "limitations" are actually just plateaus we\'ve mistaken for walls.'
          }
        }
      },
      {
        id: 'bl-8',
        title: 'Simplicity is Key',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'Understand why Bruce Lee considered simplicity the ultimate sophistication.',
          mainContent: `**The Pursuit of Simplicity**

Bruce Lee wrote: "Simplicity is the key to brilliance." In a world that often equates complexity with sophistication, Lee argued the opposite. True mastery manifests as simplicity.

**Three Stages of Cultivation**

Lee described the martial artist's journey in three stages:

1. **Primitive Stage**: The untrained person punches simply because they know no better.

2. **Sophisticated Stage**: After training, the person knows many techniques, theories, and applications. Their punch carries years of study.

3. **Return to Simplicity**: The master punches simply again—but this simplicity contains everything learned. "Before I learned the art, a punch was just a punch. After I learned the art, a punch was no longer a punch. Now that I understand the art, a punch is just a punch."

**Simplicity Through Mastery**

Lee emphasized: "It is not daily increase but daily decrease—hack away the unessential." Simplicity isn't a starting point but an achievement. It requires removing everything that doesn't serve the essential purpose.

In *Striking Thoughts*: "The height of cultivation runs to simplicity. Halfway cultivation runs to ornamentation."

**Complexity as Confusion**

Why do we complicate things? Lee identified several causes:
- Insecurity masked by showing off
- Incomplete understanding
- Fear of directness
- Attachment to accumulated knowledge

"Complexity destroys," Lee observed. In combat, complexity creates hesitation. In life, it creates confusion.

**Applying Simplicity**

Lee's simplicity principle applies universally:

- **Communication**: Say what you mean directly
- **Problem-solving**: Find the simplest effective solution
- **Design**: Remove everything unnecessary
- **Goals**: Focus on what truly matters
- **Relationships**: Be honest rather than strategic`,
          keyTakeaway: 'True simplicity is not primitive ignorance but the achievement of mastery—removing everything unnecessary to reveal the essential truth.',
          quiz: {
            question: 'What is the third stage of cultivation in Lee\'s model?',
            options: [
              'Complete complexity with maximum techniques',
              'Return to simplicity that contains all learning',
              'Teaching others what you\'ve learned',
              'Abandoning all martial arts training'
            ],
            correct: 1,
            explanation: 'The third stage is returning to simplicity—a punch becomes just a punch again, but this simplicity now contains everything learned. It\'s sophistication that appears simple.'
          }
        }
      },
      {
        id: 'bl-9',
        title: 'Honest Self-Expression',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'Learn why Bruce Lee considered martial arts—and all of life—as honest self-expression.',
          mainContent: `**The Ultimate Purpose**

Bruce Lee declared: "To me, ultimately, martial art means honestly expressing yourself." This statement transforms martial arts from fighting technique into a path of self-discovery and authentic living.

**Beyond Fighting**

Lee expanded: "It is easy for me to put on a show and be cocky, and be flooded with a cocky feeling and then feel like pretty cool... But to express oneself honestly, not lying to oneself, now that, my friend, is very hard to do."

Most people spend their lives performing—projecting images rather than expressing truth. Lee saw martial arts training as a laboratory for discovering authentic self-expression.

**The Mirror Effect**

In *Striking Thoughts*, Lee wrote: "To know oneself is to study oneself in action with another person." Combat reveals who we truly are. Under pressure, pretenses fall away. Fear, aggression, pride—all become visible.

Lee used this mirror: "Knowing is not enough; we must apply. Willing is not enough; we must do." Action reveals truth that thought conceals.

**Obstacles to Honesty**

Lee identified what prevents honest expression:

1. **Fear of judgment**: We hide parts of ourselves we fear others will reject
2. **Imitation**: We copy others instead of finding our own voice
3. **Seeking approval**: We express what we think others want
4. **Self-deception**: We lie to ourselves about who we are

"I'm not in this world to live up to your expectations and you're not in this world to live up to mine," Lee famously stated.

**Living Authentically**

This principle extends beyond martial arts:
- In work: pursue what genuinely interests you
- In relationships: speak your truth kindly
- In creativity: create what moves you, not what's popular
- In choices: decide based on your values, not others' expectations`,
          keyTakeaway: 'Martial arts and life are fundamentally about honestly expressing yourself—not performing, imitating, or seeking approval, but discovering and sharing your authentic nature.',
          quiz: {
            question: 'According to Lee, what is the primary obstacle to honest self-expression?',
            options: [
              'Lack of technical skill',
              'Physical limitations',
              'Fear, imitation, and self-deception',
              'Insufficient training time'
            ],
            correct: 2,
            explanation: 'Lee identified psychological obstacles—fear of judgment, imitation of others, seeking approval, and self-deception—as what prevents honest self-expression, not technical or physical limitations.'
          }
        }
      },
      {
        id: 'bl-10',
        title: 'The Uncarved Block',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'Explore the Taoist concept of original nature that influenced Lee\'s philosophy.',
          mainContent: `**Pu: The Uncarved Block**

Bruce Lee drew deeply from Taoism, particularly the concept of "pu"—often translated as "the uncarved block." In *Striking Thoughts*, he wrote: "Man, the living creature, the creating individual, is always more important than any established style or system."

The uncarved block represents our original nature before society shapes us—pure potential before conditioning.

**Before Carving**

A block of wood contains infinite possibilities. Once carved into a specific shape, those possibilities narrow. Similarly, before we're taught how to think, feel, and behave, we possess original wholeness.

Lee observed: "A child does not learn to cry, learn to feel angry, or learn to love. He simply cries, gets angry, loves."

**What Carves Us**

Lee identified forces that carve away our original nature:
- Educational systems with rigid methods
- Cultural expectations and traditions
- Fear of difference or failure
- The need for others' approval
- Fixed self-concepts ("I am this type of person")

"Style is a crystallization," Lee wrote. "You cannot express yourself when you are crystalized."

**Returning to Simplicity**

The goal isn't remaining uncarved—we need skills and knowledge. Rather, it's returning to original simplicity after learning. Lee explained: "The usefulness of a cup is in its emptiness."

This mirrors his three stages: primitive simplicity, sophisticated complexity, then return to simplicity that contains sophistication.

**The Creative Potential**

Lee saw the uncarved block as creative potential. In *Striking Thoughts*: "Art is the expression of the self. The more complicated and restricted the method, the less the opportunity for expression of one's original sense of freedom."

Preserving contact with our uncarved nature keeps creative possibilities alive.`,
          keyTakeaway: 'The uncarved block represents our original nature before conditioning—the goal is not avoiding learning but returning to natural simplicity after acquiring skill.',
          quiz: {
            question: 'What is the relationship between the uncarved block and learning?',
            options: [
              'We should remain uncarved and avoid all learning',
              'Learning destroys the uncarved block permanently',
              'After learning, we should return to the simplicity of the uncarved block',
              'The uncarved block is irrelevant to adult life'
            ],
            correct: 2,
            explanation: 'Lee didn\'t advocate avoiding learning. Instead, after acquiring skills and knowledge, we should return to original simplicity—sophisticated learning that manifests as natural, unforced action.'
          }
        }
      },
    ],
  },
  {
    id: 'bruce-level3',
    title: 'Level 3: Mind-Body Mastery',
    description: 'Integrate physical and mental cultivation',
    icon: '🧘',
    color: 'amber',
    unlockRequirement: 10,
    lessons: [
      {
        id: 'bruce-striking',
        title: 'Striking Thoughts for Daily Living',
        type: 'reflection',
        duration: 10,
        xpReward: 75,
        content: {
          overview: 'Bruce Lee\'s personal notes reveal profound wisdom for everyday life.',
          mainContent: `**Wisdom from Striking Thoughts**

Bruce Lee kept notebooks throughout his life. These "striking thoughts" guide daily living:

**On Self-Knowledge:**
"To know oneself is to study oneself in action with another person."
- You discover who you are through relationships and challenges
- Isolation reveals nothing; interaction reveals everything

**On Simplicity:**
"It is not daily increase but daily decrease — hack away the unessential."
- More is not better
- Subtract to find the core
- Complexity is often hiding confusion

**On Fear:**
"The doubters said, 'Man cannot fly.' The doers said, 'Maybe, but we'll try.'"
- Fear of failure stops more people than actual failure
- Action cures fear; inaction breeds it

**On Goals:**
"A goal is not always meant to be reached, it often serves simply as something to aim at."
- The journey matters more than the destination
- Goals direct energy, not just measure success

**On Time:**
"If you spend too much time thinking about a thing, you'll never get it done."
- Analysis paralysis is real
- At some point, you must act

**On Learning:**
"A wise man can learn more from a foolish question than a fool can learn from a wise answer."
- Stay curious, stay humble
- Every interaction teaches something

**Daily Practice:**
Each morning, choose one thought to embody for the day.`,
          keyTakeaway: 'Bruce Lee\'s philosophy wasn\'t about fighting - it was about living with awareness and authenticity.',
          actionItem: 'Pick one striking thought and apply it consciously for the next 24 hours.',
        },
      },
      {
        id: 'bl-11',
        title: 'Body-Mind Unity',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'Discover Bruce Lee\'s integration of physical and mental cultivation.',
          mainContent: `**The Whole Person**

Bruce Lee rejected the Western split between body and mind. In *Striking Thoughts*, he wrote: "A good martial artist is one who is self-conscious of what he is doing. A conscious, alert state of mind is not being narrow or excluding. It is an awareness, a freedom."

For Lee, physical training was inseparable from psychological development.

**Training the Whole**

Lee's training regimen was legendary—but it wasn't just physical conditioning. He wrote: "The individual is more important than the system. The individual is the one that has life; the system grows out of it."

His approach included:
- Physical conditioning (strength, flexibility, endurance)
- Technical skill development
- Psychological self-examination
- Philosophical study
- Emotional awareness

**The Body Knows**

Lee understood that wisdom lives in the body, not just the mind. "Don't think, feel," he famously advised. "It is like a finger pointing a way to the moon. Don't concentrate on the finger or you will miss all that heavenly glory."

The body responds faster than thought. Training instills wisdom that operates below conscious awareness.

**Psychological Fitness**

Lee gave equal attention to mental training: "As you think, so shall you become." He studied psychology extensively, writing: "A self-willed man obeys a different law, the one law I, too, hold absolutely sacred—the human being's own law in himself, his own individual will."

Mental obstacles—fear, doubt, anger—undermined physical ability. Physical weakness affected mental clarity. Neither could be trained in isolation.

**Integration Practices**

Lee recommended:
- Notice how emotions manifest physically
- Observe how physical states affect thinking
- Train both consistently
- Rest and recover both body and mind
- Study your reactions under stress`,
          keyTakeaway: 'Body and mind are not separate—true mastery requires training both simultaneously, recognizing that wisdom lives in physical sensation as much as thought.',
          quiz: {
            question: 'Why did Bruce Lee reject the separation of body and mind in training?',
            options: [
              'Western philosophy convinced him',
              'Physical and mental states deeply influence each other; neither can be trained in isolation',
              'It was traditional in Chinese martial arts',
              'Mental training is unnecessary for fighters'
            ],
            correct: 1,
            explanation: 'Lee observed that mental obstacles undermine physical ability while physical weakness affects mental clarity. True mastery requires training body and mind together as an integrated whole.'
          }
        }
      },
      {
        id: 'bl-12',
        title: 'Action vs Passive Observation',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'Learn why Bruce Lee insisted that knowing must lead to doing.',
          mainContent: `**The Demand for Action**

Bruce Lee's philosophy consistently demanded action. In *Striking Thoughts*, he wrote: "Knowing is not enough, we must apply. Willing is not enough, we must do." This wasn't mere motivation—it was a fundamental principle.

**The Danger of Intellectualization**

Lee warned against turning philosophy into passive speculation: "If you spend too much time thinking about a thing, you'll never get it done." He observed students who could discuss martial arts brilliantly but couldn't perform under pressure.

"Learning is never cumulative, it is a movement of knowing which has no beginning and no end," he wrote. Learning happens through action, not accumulation of information.

**Knowledge Without Action**

Lee identified what happens when knowledge remains theoretical:
- It creates false confidence
- It separates us from direct experience
- It becomes another form of imprisonment
- It substitutes thinking for living

"Those who are unaware they are walking in darkness will never seek the light," he observed.

**The Laboratory of Action**

Lee treated combat as a laboratory: "To know oneself is to study oneself in action with another person." Direct experience reveals truths that theory conceals.

He encouraged:
- Test every idea through practice
- Trust experience over theory when they conflict
- Learn through mistakes, not just success
- Make action the final judge of value

**Active Learning**

Lee's approach to learning was intensely active: "Research your own experience. Absorb what is useful, reject what is useless, add what is essentially your own."

**Living Philosophy**

"I cannot teach you; I can only help you to explore yourself," Lee told students. Philosophy must be lived to have meaning.`,
          keyTakeaway: 'Knowledge without action is self-deception—true understanding only comes through direct experience, and philosophy must be lived to have meaning.',
          quiz: {
            question: 'According to Lee, what is the relationship between knowledge and action?',
            options: [
              'Knowledge should always precede action',
              'Action is more important than knowledge',
              'Knowledge without action is incomplete; understanding requires doing',
              'They are completely separate domains'
            ],
            correct: 2,
            explanation: 'Lee insisted that knowing must lead to doing. Knowledge without action creates false confidence and separates us from direct experience. True understanding emerges through action.'
          }
        }
      },
      {
        id: 'bl-13',
        title: 'Quality vs Quantity',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'Understand why Bruce Lee valued mastery of essentials over accumulation of techniques.',
          mainContent: `**The Accumulation Trap**

Bruce Lee observed martial artists who knew hundreds of techniques but couldn't apply any effectively. In *Striking Thoughts*, he wrote: "I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times."

This captures his philosophy of quality over quantity.

**Depth Over Breadth**

Lee explained: "It is not a daily increase but a daily decrease. Hack away at the unessential." While others added techniques, Lee removed them. His goal was mastery of fundamentals.

"Simplicity is the key to brilliance," he noted. A few tools understood deeply serve better than many tools understood superficially.

**The Problem with Accumulation**

Why is more sometimes less?

- Scattered attention prevents mastery
- More options create hesitation
- Untested techniques create false confidence
- Complexity obscures what works
- Accumulation substitutes for understanding

**What Quality Requires**

Mastery demands:
- Repetition beyond boredom
- Attention to subtle details
- Honest assessment of ability
- Patience with slow progress
- Willingness to stay with basics

Lee trained his straight lead punch obsessively. It became devastatingly effective because of thousands of hours of refinement.

**Applied to Life**

This principle extends beyond martial arts:

- **Learning**: Master fundamentals before adding complexity
- **Relationships**: Deep connection with few versus shallow connection with many
- **Work**: Excellence in core competencies over mediocrity in many
- **Possessions**: Quality items used well over accumulated clutter
- **Time**: Focused hours over scattered days`,
          keyTakeaway: 'Mastery of few essentials serves better than superficial knowledge of many—depth creates genuine capability while accumulation often creates only the illusion of skill.',
          quiz: {
            question: 'Why did Lee say he feared the man who practiced one kick 10,000 times?',
            options: [
              'That person would be exhausted and easy to defeat',
              'Repetition creates deep mastery that scattered practice cannot match',
              'One technique is easier to defend against',
              'It demonstrates stubbornness, not skill'
            ],
            correct: 1,
            explanation: 'Practicing one technique 10,000 times creates deep mastery—the ability to execute perfectly under pressure. Practicing 10,000 techniques once creates only superficial familiarity.'
          }
        }
      },
      {
        id: 'bl-14',
        title: 'Process vs Goal',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'Explore Bruce Lee\'s understanding of the relationship between journey and destination.',
          mainContent: `**Beyond Destination**

Bruce Lee wrote in *Striking Thoughts*: "A goal is not always meant to be reached, it often serves simply as something to aim at." This reveals his nuanced view of goals—useful for direction but dangerous when obsessed over.

**The Present Moment**

Lee emphasized presence: "If you love life, don't waste time, for time is what life is made up of." Each moment of practice matters, not just the final achievement.

"Long-term consistency trumps short-term intensity," he observed. The master isn't made in moments of dramatic achievement but in countless ordinary practice sessions.

**Goals as Guides**

Lee didn't reject goals—he used them properly. Goals provide:
- Direction for effort
- Motivation through difficulty
- Measurement of progress
- Framework for decision-making

But Lee warned: "Don't fear failure. Not failure, but low aim, is the crime. In great attempts it is glorious even to fail."

**The Danger of Goal Fixation**

What happens when we fixate on goals?
- We miss the value of the present
- We stop when goals are reached
- We suffer when goals aren't reached
- We rush through valuable experience
- We judge ourselves by external measures

**Process as Reward**

Lee found fulfillment in the work itself: "Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it."

The process of self-discovery and expression was the reward—outcomes were secondary.

**The Complete View**

Goals and process form a complete picture:
- Use goals for direction
- Find meaning in process
- Release attachment to specific outcomes
- Continue regardless of results

Lee concluded: "Be happy, but never satisfied." Happiness comes from the journey; dissatisfaction ensures continuous growth.`,
          keyTakeaway: 'Goals provide direction but the real value lies in the process—fulfillment comes from daily practice and growth, not just achieving destinations.',
          quiz: {
            question: 'What did Bruce Lee mean by "A goal is not always meant to be reached"?',
            options: [
              'Setting goals is pointless',
              'We should set low, achievable goals',
              'Goals serve as direction for effort; the process matters more than the outcome',
              'Only unrealistic goals are valuable'
            ],
            correct: 2,
            explanation: 'Lee valued goals for the direction they provide, but emphasized that fulfillment comes from the journey, not just the destination. The process of growth is the real reward.'
          }
        }
      },
      {
        id: 'bl-15',
        title: 'Walking On',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'Learn Bruce Lee\'s philosophy of continuous forward movement and non-attachment.',
          mainContent: `**The Unceasing Flow**

Bruce Lee wrote: "Walk on." This simple phrase captures his philosophy of continuous movement forward, never getting stuck in success, failure, or any fixed position.

**No Dwelling**

In *Striking Thoughts*, Lee explained: "Not being tense but ready. Not thinking but not dreaming. Not being set but flexible. Liberation from the uneasy sense of confinement. It is being wholly and quietly alive, aware and alert, ready for whatever may come."

Walking on means not dwelling—on achievements, defeats, or the past.

**Beyond Success**

Lee achieved remarkable success but warned against becoming trapped by it: "Ever since I was a child I have had this instinctive urge for expansion and growth. To me, the function and duty of a quality human being is the sincere and honest development of one's potential."

Success can become a prison:
- We protect it rather than growing
- We repeat what worked before
- We define ourselves by past achievements
- We fear losing what we've gained

Walking on means using success as a platform, not a destination.

**Beyond Failure**

Equally, Lee refused to be trapped by failure: "Don't fear failure. Not failure, but low aim, is the crime." Failure provides information, not identity.

"Defeat is a state of mind; no one is ever defeated until defeat has been accepted as a reality," he wrote.

**Non-Attachment**

Walking on requires non-attachment. Lee explained: "Attachment is the greatest fabricator of illusions; reality can be attained only by someone who is detached."

This isn't indifference—Lee was intensely engaged. But he didn't cling to outcomes or experiences.

**Continuous Renewal**

Walking on enables continuous renewal: "Running water never grows stale." By continuously moving forward, we stay fresh, responsive, alive.`,
          keyTakeaway: 'Walking on means continuous forward movement without attachment to success, failure, or any fixed position—staying fluid and responsive rather than stuck.',
          quiz: {
            question: 'Why did Lee emphasize "walking on" after both success and failure?',
            options: [
              'To avoid all emotions',
              'Because dwelling on either creates stagnation; continuous movement maintains growth',
              'To appear indifferent to results',
              'Because both success and failure are illusions'
            ],
            correct: 1,
            explanation: 'Lee recognized that dwelling on success or failure creates stagnation. Walking on—extracting lessons and continuing forward—maintains the flow necessary for continuous growth and responsiveness.'
          }
        }
      },
    ],
  },
  {
    id: 'bruce-level4',
    title: 'Level 4: Self-Actualization',
    description: 'Realize your full human potential',
    icon: '🌟',
    color: 'amber',
    unlockRequirement: 15,
    lessons: [
      {
        id: 'bl-16',
        title: 'Self-Actualization',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'Discover Bruce Lee\'s vision of realizing your full human potential.',
          mainContent: `**The Ultimate Goal**

Bruce Lee studied Abraham Maslow's concept of self-actualization—becoming everything you're capable of becoming. In *Striking Thoughts*, he wrote: "Ever since I was a child I have had this instinctive urge for expansion and growth. To me, the function and duty of a quality human being is the sincere and honest development of one's potential."

**Defining Self-Actualization**

For Lee, self-actualization meant:
- Expressing your unique nature fully
- Developing all capacities, not just some
- Aligning outer life with inner truth
- Continuous growth without fixed endpoint
- Contributing your gifts to the world

"Real living is living for others," he wrote, noting that self-actualization serves more than the self.

**Obstacles to Actualization**

Lee identified what prevents us from realizing potential:

1. **Conformity**: "Obey the principles without being bound by them." Social pressure to fit in suppresses unique expression.

2. **Fear**: "Don't fear failure. In great attempts it is glorious even to fail." Fear keeps us in safe, small spaces.

3. **Fixed Self-Concept**: "To become different from what we are, we must have some awareness of what we are." Believing we're fixed prevents growth.

4. **Fragmentation**: Developing only parts of ourselves—physical but not mental, intellectual but not emotional.

**The Path to Actualization**

Lee offered guidance:
- Know yourself through self-examination
- Accept yourself, including shadows and weaknesses
- Develop yourself through disciplined practice
- Express yourself honestly in action
- Transcend yourself by serving others

**The Continuous Journey**

Lee saw self-actualization as ongoing: "There is no limit to what one can achieve." The actualized person isn't finished—they're fully engaged in becoming.`,
          keyTakeaway: 'Self-actualization means sincerely developing your full potential—expressing your unique nature, integrating all aspects of yourself, and contributing to others.',
          quiz: {
            question: 'What did Bruce Lee identify as a major obstacle to self-actualization?',
            options: [
              'Lack of physical talent',
              'Conformity and fixed self-concept that suppress unique expression',
              'Insufficient education',
              'Living in the wrong location'
            ],
            correct: 1,
            explanation: 'Lee saw conformity to social expectations and rigid self-concepts as major barriers. These prevent the honest self-expression and continuous growth that self-actualization requires.'
          }
        }
      },
      {
        id: 'bl-17',
        title: 'Fear and Courage',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'Examine Bruce Lee\'s understanding of fear and how courage emerges through it.',
          mainContent: `**Understanding Fear**

Bruce Lee didn't advocate eliminating fear—he studied it. In *Striking Thoughts*, he wrote: "The enemy of development is this pain phobia—the unwillingness to do a tiny bit of suffering."

Fear, properly understood, becomes a teacher.

**The Nature of Fear**

Lee observed that fear takes many forms:
- Fear of failure
- Fear of rejection
- Fear of the unknown
- Fear of success
- Fear of our own power

"Many people dedicate their lives to actualizing a concept of what they should be like, rather than actualizing themselves," he noted. This flight from authentic self is fear-based.

**Fear as Information**

Rather than avoiding fear, Lee used it: "What is it you're afraid of? Fear is only as deep as the mind allows."

Fear signals:
- Where we haven't developed
- What we haven't faced
- Where growth opportunity lies
- What matters to us

**Courage Through Fear**

Lee understood that courage isn't fearlessness—it's acting despite fear: "Don't fear failure. Not failure, but low aim, is the crime. In great attempts it is glorious even to fail."

Courage develops by:
- Facing what we fear repeatedly
- Starting with small fears
- Accepting fear without acting on it
- Using fear energy for action

**Transforming Fear**

Lee taught transformation: "Defeat is a state of mind; no one is ever defeated until defeat has been accepted as a reality."

Transform fear by:
- Feeling it fully without resistance
- Examining its actual content
- Acting anyway
- Using its energy

**Practical Courage**

Lee advised: Face one fear daily. Start small. Build capacity. Recognize that fear rarely reflects actual danger.`,
          keyTakeaway: 'Courage is not the absence of fear but action despite fear—fear becomes a teacher pointing toward growth opportunities when faced directly.',
          quiz: {
            question: 'How did Bruce Lee suggest we develop courage?',
            options: [
              'Eliminate all fear through meditation',
              'Avoid situations that cause fear',
              'Face fears repeatedly, starting small and using fear energy for action',
              'Pretend fear doesn\'t exist'
            ],
            correct: 2,
            explanation: 'Lee understood courage develops through action, not avoidance. By facing fears repeatedly—starting with small ones—and using fear\'s energy for action, we build genuine courage.'
          }
        }
      },
      {
        id: 'bl-18',
        title: 'Time and Priorities',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'Learn Bruce Lee\'s approach to using time wisely and focusing on what matters.',
          mainContent: `**The Value of Time**

Bruce Lee wrote one of his most quoted lines: "If you love life, don't waste time, for time is what life is made up of." This wasn't casual advice—it was core philosophy.

**Finite Resource**

Lee recognized time's unique nature. In *Striking Thoughts*: "The person who says he has no time is the laziest person." We all have the same hours; the difference is how we use them.

Time cannot be:
- Saved for later
- Borrowed from others
- Recovered once spent
- Increased by wishing

**Priority Clarity**

Lee achieved extraordinary things in 32 years because he prioritized ruthlessly. He focused on:
- Martial arts mastery
- Physical development
- Philosophical study
- Family
- Film expression

He eliminated distractions and said no constantly.

**Present Focus**

"A goal is not always meant to be reached, it often serves simply as something to aim at," Lee wrote. While working toward future goals, he remained present.

"Long-term consistency trumps short-term intensity." Daily practice compounds; sporadic bursts don't.

**Eliminating Waste**

Lee identified time wasters:
- Excessive deliberation: "If you spend too much time thinking about a thing, you'll never get it done."
- Seeking approval: "I'm not in this world to live up to your expectations."
- Unnecessary complexity: "Simplicity is the key to brilliance."
- Dwelling on past: "Walk on."

**Practical Application**

Lee's approach:
1. Clarify what truly matters
2. Eliminate what doesn't
3. Focus completely on what does
4. Accept that saying yes to one thing means saying no to others
5. Review regularly whether actions match priorities`,
          keyTakeaway: 'Time is the substance of life itself—loving life means using time wisely by prioritizing ruthlessly, eliminating waste, and staying fully present.',
          quiz: {
            question: 'What did Lee identify as a major form of time waste?',
            options: [
              'Physical training',
              'Excessive deliberation and thinking without action',
              'Philosophical study',
              'Spending time with family'
            ],
            correct: 1,
            explanation: 'Lee warned: "If you spend too much time thinking about a thing, you\'ll never get it done." Excessive deliberation substitutes thought for action and wastes precious time.'
          }
        }
      },
      {
        id: 'bl-19',
        title: 'Persistence',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'Explore Bruce Lee\'s philosophy of continuous effort and never giving up.',
          mainContent: `**The Principle of Persistence**

Bruce Lee wrote: "Do not pray for an easy life, pray for the strength to endure a difficult one." This captures his understanding that achievement requires sustained effort through difficulty.

**Beyond Motivation**

Lee distinguished persistence from mere motivation. In *Striking Thoughts*: "Long-term consistency trumps short-term intensity." Motivation fluctuates; persistence continues regardless.

"Defeat is a state of mind; no one is ever defeated until defeat has been accepted as a reality."

**Lee's Personal Persistence**

Lee's life demonstrated his principle:
- Rejected repeatedly by Hollywood, he created his own path
- After a severe back injury doctors said would end his career, he returned stronger
- Faced racism and exclusion, persisted in teaching all races
- Built film success despite industry resistance

"To hell with circumstances; I create opportunities."

**The Nature of Obstacles**

Lee reframed obstacles: "Circumstances? I make circumstances!" Rather than seeing difficulties as reasons to stop, he saw them as tests to pass.

"Don't fear failure. Not failure, but low aim, is the crime. In great attempts it is glorious even to fail."

**Intelligent Persistence**

Lee's persistence was intelligent, not blind. He adapted approaches while maintaining direction:
- Changed methods when they didn't work
- Learned from failures
- Adjusted tactics without abandoning goals
- Used obstacles as feedback

**Daily Discipline**

Persistence manifests daily: "I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times."

Daily practice compounds. Sporadic intensity doesn't. Lee trained constantly, studying constantly, improving constantly.`,
          keyTakeaway: 'True persistence is intelligent, continuous effort through difficulty—adapting methods while maintaining direction, and distinguishing what deserves sustained effort.',
          quiz: {
            question: 'How did Lee distinguish intelligent persistence from blind stubbornness?',
            options: [
              'He didn\'t—all persistence is the same',
              'By adapting approaches while maintaining direction, using obstacles as feedback',
              'By never changing anything regardless of results',
              'By giving up quickly when things got difficult'
            ],
            correct: 1,
            explanation: 'Lee practiced intelligent persistence—maintaining direction while adapting methods based on feedback. He changed approaches that didn\'t work while persisting toward goals that mattered.'
          }
        }
      },
      {
        id: 'bl-20',
        title: 'Adaptability',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'Master Bruce Lee\'s principle of responding effectively to changing circumstances.',
          mainContent: `**The Adaptive Imperative**

Bruce Lee's water philosophy culminates in adaptability. In *Striking Thoughts*, he wrote: "Notice that the stiffest tree is most easily cracked, while the bamboo or willow survives by bending with the wind."

Survival and success require adapting to reality.

**Beyond Flexibility**

Adaptability goes deeper than flexibility. Lee explained: "Set patterns, incapable of adaptability, of pliability, only offer a better cage." Flexibility bends; adaptability transforms.

True adaptability:
- Changes approach based on circumstances
- Maintains core identity while adjusting expression
- Responds to what is, not what should be
- Uses difficulty as development opportunity

**The Adaptation Process**

Lee taught a three-step process:

1. **Perceive Accurately**: "Many people dedicate their lives to actualizing a concept of what they should be like, rather than actualizing themselves." First, see reality clearly.

2. **Release Fixed Response**: "All fixed set patterns are incapable of adaptability or pliability." Don't force prepared responses onto new situations.

3. **Respond Appropriately**: "Take things as they are. Punch when you have to punch. Kick when you have to kick." Match response to circumstance.

**Life Application**

Beyond combat, adaptability determines success:
- Career changes require adapting skills
- Relationships require adapting communication
- Problems require adapting approaches
- Circumstances require adapting plans

**Maintaining Identity**

Adaptability doesn't mean becoming whatever circumstances demand. Lee maintained core values while adapting expression: "Always be yourself, express yourself, have faith in yourself."

Water adapts to every container but remains water.`,
          keyTakeaway: 'True adaptability means transforming response based on circumstances while maintaining core identity—like water taking the shape of any container while remaining water.',
          quiz: {
            question: 'What is the relationship between adaptability and identity in Lee\'s philosophy?',
            options: [
              'Adaptability requires giving up all identity',
              'Identity prevents adaptability',
              'Core identity remains while expression adapts, like water remaining water in any container',
              'They are completely unrelated concepts'
            ],
            correct: 2,
            explanation: 'Lee taught that true adaptability maintains core identity while adjusting expression—just as water takes any shape while remaining water. We adapt how we express ourselves, not who we are.'
          }
        }
      },
    ],
  },
  {
    id: 'bruce-level5',
    title: 'Level 5: Legacy of Water',
    description: 'Live fully and leave a lasting impact',
    icon: '🌊',
    color: 'amber',
    unlockRequirement: 20,
    lessons: [
      {
        id: 'bl-21',
        title: 'Personal Liberation',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'Discover Bruce Lee\'s path to freedom from external and internal constraints.',
          mainContent: `**The Goal of Liberation**

Bruce Lee saw personal liberation as the highest goal. In *Striking Thoughts*, he wrote: "Jeet Kune Do is not to hurt, but is one of the avenues through which life opens its secrets to us. We can see through others only when we can see through ourselves."

Liberation means freedom—but from what?

**External Constraints**

Lee fought against external limitations:
- Racial discrimination in Hollywood
- Traditional martial arts orthodoxy
- Social expectations about what he should be
- Industry conventions about what was possible

"I'm not in this world to live up to your expectations and you're not in this world to live up to mine."

**Internal Constraints**

But Lee knew the deeper prisons are internal: "Many people dedicate their lives to actualizing a concept of what they should be like, rather than actualizing themselves."

Internal constraints include:
- Self-limiting beliefs
- Fear of expression
- Attachment to identity
- Conditioned responses
- Ego protection

**The Liberation Process**

Lee taught liberation through:

1. **Self-Knowledge**: "Knowing is not enough, we must apply." First, understand what imprisons you.

2. **Questioning**: "Set patterns, incapable of adaptability, of pliability, only offer a better cage." Question every assumption.

3. **Release**: "It is not a daily increase but a daily decrease. Hack away the unessential." Let go of what doesn't serve.

4. **Expression**: "Honestly expressing yourself... that, my friend, is very hard to do." Express what remains after release.

**Responsibility of Freedom**

Liberation brings responsibility. Lee wrote: "A self-willed man obeys a different law, the one law I too hold absolutely sacred—the human being's own law in himself."

Free people must:
- Create their own meaning
- Take responsibility for choices
- Face uncertainty without the comfort of rules
- Continuously renew freedom through action`,
          keyTakeaway: 'Personal liberation requires freeing ourselves from both external constraints and internal prisons—self-limiting beliefs, fear, and attachment—to express our authentic nature.',
          quiz: {
            question: 'According to Lee, what are the deeper prisons we must escape?',
            options: [
              'External circumstances like poverty or location',
              'Physical limitations',
              'Internal constraints like self-limiting beliefs, fear, and attachment',
              'The opinions of critics'
            ],
            correct: 2,
            explanation: 'While Lee fought external constraints, he knew the deeper prisons are internal—self-limiting beliefs, fear of expression, attachment to identity, and conditioned responses. These require inner work to escape.'
          }
        }
      },
      {
        id: 'bl-22',
        title: 'Beyond Systems',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'Learn why Bruce Lee encouraged transcending all fixed systems and methods.',
          mainContent: `**The System Trap**

Bruce Lee devoted his life to martial arts yet warned against martial arts systems. In *Striking Thoughts*, he wrote: "Man, the living creature, the creating individual, is always more important than any established style or system."

This paradox contains deep wisdom.

**Why Systems Fail**

Lee identified problems with all systems:

1. **Crystallization**: "Style is a crystallization. You cannot express yourself when you are crystallized." Systems freeze living knowledge into dead patterns.

2. **Partiality**: "Truth is a pathless land." Every system captures only part of truth, then claims the whole.

3. **Security Illusion**: "Because one does not want to be disturbed, to be made uncertain, he establishes a pattern of conduct." Systems offer false security.

4. **Limitation**: "If you follow the classical pattern, you are understanding the routine, the tradition, the shadow—you are not understanding yourself."

**The JKD Paradox**

Even JKD faced this danger. Lee said: "I have not invented a 'new style,' composite, modified or otherwise. On the contrary, I hope to free my followers from clinging to styles, patterns, or molds."

JKD was meant to transcend systems—including itself.

**Using Without Being Trapped**

The goal isn't avoiding all systems but transcending them. Lee advised:
- Learn from systems without being defined by them
- Use techniques without becoming attached
- Study traditions without being bound by them
- Extract principles, release rigid forms

**The Individual Path**

Lee concluded: "Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it."

Your path will be unique. Systems are maps; the territory is your life.`,
          keyTakeaway: 'All systems capture only partial truth and can become prisons—use them as tools without being defined by them, always prioritizing direct experience over any framework.',
          quiz: {
            question: 'How should we relate to systems according to Lee?',
            options: [
              'Avoid all systems completely',
              'Follow one system strictly',
              'Use systems as tools without being defined by them, extracting what\'s useful',
              'Create our own rigid system'
            ],
            correct: 2,
            explanation: 'Lee advised using systems helpfully while transcending them—extracting what\'s useful, discarding what isn\'t, and never confusing the map for the territory. Systems are tools, not prisons.'
          }
        }
      },
      {
        id: 'bl-23',
        title: 'The Inner Enemy',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'Confront the internal obstacles that Bruce Lee identified as our true opponents.',
          mainContent: `**The Real Opponent**

Bruce Lee wrote: "The enemy of development is this pain phobia—the unwillingness to do a tiny bit of suffering." The greatest obstacles aren't external—they're within us.

**Identifying the Inner Enemy**

In *Striking Thoughts*, Lee catalogued inner enemies:

1. **Ego**: "Showing off is the fool's idea of glory." Ego distorts perception, prevents learning, creates enemies.

2. **Fear**: "What is it that you fear?" Fear paralyzes action and distorts decision-making.

3. **Self-Deception**: "The medicine for my suffering I had within me from the very beginning, but I did not take it." We know our problems but refuse to face them.

4. **Attachment**: "The consciousness of self is the greatest hindrance to the proper execution of all physical action." Attachment to outcome undermines performance.

5. **Complacency**: "If you always put limits on everything you do, it will spread into your work and into your life." Comfort is the enemy of growth.

**The Pain Phobia**

Lee returned often to "pain phobia"—our unwillingness to suffer. Growth requires discomfort. We avoid:
- The pain of honest self-examination
- The pain of rigorous training
- The pain of confronting fears
- The pain of releasing what's familiar

**Confronting Inner Enemies**

Lee's approach:
- Face uncomfortable truths directly
- Use difficulty as a mirror
- Question comfortable self-images
- Accept responsibility for results
- Welcome feedback, especially critical

**The Internal Battle**

Real combat happens within: "Knowledge will give you power, but character respect." Developing character means defeating inner enemies repeatedly.`,
          keyTakeaway: 'Our true opponents are internal—ego, fear, self-deception, attachment, and complacency. Defeating these inner enemies is the essential battle.',
          quiz: {
            question: 'What did Lee identify as "the enemy of development"?',
            options: [
              'External critics and opponents',
              'Lack of natural talent',
              'Pain phobia—the unwillingness to suffer even slightly',
              'Insufficient resources'
            ],
            correct: 2,
            explanation: 'Lee identified "pain phobia"—our unwillingness to experience discomfort—as development\'s enemy. Growth requires facing the pain of honest self-examination, rigorous training, and confronting fears.'
          }
        }
      },
      {
        id: 'bl-24',
        title: 'Living Fully',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'Embrace Bruce Lee\'s philosophy of complete engagement with life in every moment.',
          mainContent: `**Total Engagement**

Bruce Lee wrote: "The key to immortality is first living a life worth remembering." This wasn't about fame—it was about complete engagement with life itself.

**What Living Fully Means**

For Lee, full living meant:
- Complete presence in each moment
- Full expression of one's nature
- Maximum development of potential
- Deep connection with others
- Contribution to the world

"If you love life, don't waste time, for time is what life is made up of."

**The Obstacles to Full Living**

In *Striking Thoughts*, Lee identified what prevents full living:

1. **Half-Heartedness**: "If you spend too much time thinking about a thing, you'll never get it done." Hesitation divides energy.

2. **Fear**: "Don't fear failure. In great attempts it is glorious even to fail." Fear prevents full commitment.

3. **Self-Consciousness**: "The consciousness of self is the greatest hindrance to the proper execution of all physical action." Watching ourselves prevents losing ourselves.

4. **Living for Others**: "I'm not in this world to live up to your expectations." Performing for approval isn't living.

**Present Moment Intensity**

Lee lived with remarkable intensity: "Take things as they are. Punch when you have to punch. Kick when you have to kick."

Full living requires:
- Complete attention to what's happening now
- Release of past regret
- Release of future anxiety
- Engagement with reality, not concepts

**Your Full Life**

Lee challenged: "Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it."

Full living is unique to each person. What does your full life look like?`,
          keyTakeaway: 'Living fully means complete engagement with each moment—full presence, authentic expression, maximum development of potential, and contribution to others.',
          quiz: {
            question: 'What did Lee identify as a major obstacle to living fully?',
            options: [
              'Lack of opportunity',
              'Self-consciousness that prevents complete engagement',
              'Physical limitations',
              'Living too long'
            ],
            correct: 1,
            explanation: 'Lee saw self-consciousness—watching ourselves rather than losing ourselves in action—as a major obstacle. Full living requires complete presence, which self-consciousness prevents.'
          }
        }
      },
      {
        id: 'bl-25',
        title: 'Legacy of Water',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'Reflect on Bruce Lee\'s enduring teachings and how to embody them in your life.',
          mainContent: `**The Living Teaching**

Bruce Lee wrote: "I hope to free my comrades from bondage to styles, patterns, or molds." He didn't want followers—he wanted free people. His legacy isn't a system to copy but principles to embody.

**The Core Teachings**

Lee's philosophy condenses to essential principles:

**Be Water**: Adapt to circumstances without losing essence. "Empty your mind, be formless, shapeless—like water."

**Express Yourself Honestly**: "To me, ultimately, martial art means honestly expressing yourself." Life is self-expression, not imitation.

**Absorb and Discard**: "Research your own experience. Absorb what is useful, reject what is useless, add what is essentially your own."

**Use No Way as Way**: "Having no limitation as limitation." Transcend all fixed methods while mastering fundamentals.

**Live Fully**: "The key to immortality is first living a life worth remembering."

**Beyond Martial Arts**

Lee's teaching extends to all life. In *Striking Thoughts*, he wrote: "Jeet Kune Do is just a name used, a mirror in which to see ourselves."

Apply water philosophy to:
- Career: Adapt while maintaining core purpose
- Relationships: Respond to each person uniquely
- Creativity: Express yourself without copying
- Challenges: Flow around obstacles
- Growth: Continuously evolve

**The Anti-Dogma Dogma**

Lee warned against making his teaching another cage: "I cannot teach you; I can only help you to explore yourself."

Don't memorize his words—live his principles. Don't follow his path—find your own.

**Walking On**

Lee's final teaching: "Walk on." Keep moving. Keep growing. Keep expressing. Keep adapting.

"Be happy, but never satisfied."

The journey continues—not in studying Bruce Lee, but in becoming more fully yourself.

Be water, my friend.`,
          keyTakeaway: 'Bruce Lee\'s legacy is not a system to follow but principles to embody—adaptability, honest self-expression, continuous growth, and the freedom to find your own path.',
          quiz: {
            question: 'What is the best way to honor Bruce Lee\'s legacy?',
            options: [
              'Memorize all his quotes',
              'Copy his martial arts style exactly',
              'Embody his principles while finding your own unique path of expression',
              'Build a shrine to his memory'
            ],
            correct: 2,
            explanation: 'Lee wanted free people, not followers. The best way to honor his legacy is to embody principles like adaptability and honest self-expression while finding your own unique path—just as he did.'
          }
        }
      },
    ],
  },
];

export default bruceLeeExpandedPathway;
