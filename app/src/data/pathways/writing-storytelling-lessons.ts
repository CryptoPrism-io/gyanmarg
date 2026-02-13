import type { PathwayLesson } from "@/types";

export const wsLessonsLevel1: PathwayLesson[] = [
  {
    id: "ws-001",
    title: "The Power of Story",
    type: "intro",
    duration: 10,
    xpReward: 100,
    content: {
      overview: "Discover why storytelling is humanity's most powerful communication tool.",
      mainContent: `## Why Stories Rule the World

Stories have shaped human civilization for millennia. From Homer's epics to modern advertising campaigns, narratives move us to action in ways raw data never can. Neuroscience reveals that stories activate multiple brain regions simultaneously, creating emotional resonance and memory retention that facts alone cannot achieve.

Consider how **Martin Luther King Jr.'s "I Have a Dream" speech** used narrative imagery rather than policy details to inspire a movement. Or how **Apple's "Think Different" campaign** didn't list product specs—it told a story about rebels and innovators.

> "The human mind is a story processor, not a logic processor." — Jonathan Haidt

**The Core Elements of Effective Storytelling:**
- **Character**: Someone to care about
- **Conflict**: Obstacles that create tension
- **Change**: Transformation through struggle
- **Meaning**: The "why" that resonates

Whether you're writing a novel, crafting a pitch deck, or explaining your day to a friend, you're telling a story. Master this ancient art, and you master human connection itself.

The best storytellers understand that **people don't buy products—they buy better versions of themselves**. Every compelling narrative offers transformation: the hero who defeats the dragon, the startup that disrupts an industry, the person who finally finds love.

Your journey begins with understanding that stories aren't just entertainment—they're the operating system of human consciousness.`,
      keyTakeaway: "Stories activate emotion and memory more powerfully than facts, making them the ultimate tool for influence and connection.",
      actionItem: "Write down three moments from your life that felt like turning points. What made them meaningful?"
    }
  },
  {
    id: "ws-002",
    title: "The Hero's Journey Framework",
    type: "concept",
    duration: 12,
    xpReward: 100,
    content: {
      overview: "Learn Joseph Campbell's universal story structure that powers everything from Star Wars to your personal brand.",
      mainContent: `## The Monomyth That Never Gets Old

In 1949, mythologist **Joseph Campbell** published "The Hero with a Thousand Faces," revealing that cultures worldwide share the same basic story structure. This **Hero's Journey** has since become the secret weapon of screenwriters, novelists, and marketers.

**George Lucas** explicitly used Campbell's framework to create Star Wars. **Christopher Nolan** applied it to The Dark Knight trilogy. **Pixar** uses it in nearly every film. Why? Because it mirrors the psychological journey every human experiences.

**The 12 Stages (Simplified):**

**Act 1: Departure**
1. Ordinary World (Luke on Tatooine)
2. Call to Adventure (Princess Leia's message)
3. Refusal of the Call (fear, doubt)
4. Meeting the Mentor (Obi-Wan Kenobi)
5. Crossing the Threshold (leaving home)

**Act 2: Initiation**
6. Tests, Allies, Enemies (Death Star challenges)
7. Approach to the Inmost Cave (preparing for the big battle)
8. Ordeal (facing Darth Vader)
9. Reward (destroying Death Star)

**Act 3: Return**
10. The Road Back (returning changed)
11. Resurrection (final test)
12. Return with the Elixir (bringing wisdom home)

> "The cave you fear to enter holds the treasure you seek." — Joseph Campbell

This pattern works because **it reflects real psychological growth**. Every successful entrepreneur, artist, or leader has walked this path. When you understand the Hero's Journey, you can structure novels, brand stories, or even your LinkedIn profile with archetypal power.

**Modern Applications:**
- **Startup pitch**: Problem (ordinary world) → Solution (call to adventure) → Traction (crossing threshold)
- **Personal essay**: Struggle (ordeal) → Insight (reward) → Transformation (return)
- **Marketing campaign**: Customer pain point → Product as mentor → Better life as elixir`,
      keyTakeaway: "The Hero's Journey is a universal story structure that resonates because it mirrors the psychological pattern of growth and transformation.",
      actionItem: "Map your own life onto the Hero's Journey. What was your 'call to adventure' in your career or passion? What's your 'ordeal'?",
      quiz: {
        question: "According to Joseph Campbell, what does the 'cave you fear to enter' represent?",
        options: [
          "The source of your greatest growth and reward",
          "A literal dangerous place to avoid",
          "The ordinary world before adventure begins",
          "The final battle with the antagonist"
        ],
        correct: 0,
        explanation: "Campbell taught that the thing we fear most—our greatest challenge—often holds the treasure we seek, whether that's wisdom, strength, or transformation."
      }
    }
  },
  {
    id: "ws-003",
    title: "Character Development Fundamentals",
    type: "concept",
    duration: 11,
    xpReward: 100,
    content: {
      overview: "Create characters readers remember by understanding what makes people compelling.",
      mainContent: `## Building Humans, Not Cardboard Cutouts

**Kurt Vonnegut** once said, "Every character should want something, even if it's only a glass of water." This simple truth separates memorable characters from forgettable ones. Great characters aren't defined by what they look like—they're defined by what they want and what stands in their way.

**The Three-Dimensional Character:**

**1. Desire (External Goal)**
What do they want? Harry Potter wants to defeat Voldemort. Walter White wants financial security. Elizabeth Bennet wants genuine love and respect.

**2. Need (Internal Arc)**
What do they really need to grow? Harry needs to accept that love—not power—defeats evil. Walter needs to admit he loves the power. Elizabeth needs to overcome her prejudice.

> "Characters don't need to be likable—they need to be interesting." — David Mamet

**3. Contradiction (The Human Element)**
The best characters contain contradictions that feel real:
- **Tony Soprano**: Ruthless mob boss who has panic attacks
- **Hermione Granger**: Brilliant rule-follower who breaks rules for friends
- **Don Draper**: Confident creative genius hiding deep insecurity

**The Character Creation Method:**

Ask five questions:
1. What do they want more than anything?
2. What's stopping them from getting it?
3. What are they afraid people will discover about them?
4. What contradictory trait makes them surprising?
5. How will they be different by the end?

**Physical details matter least**. Stop starting with hair color and eye color. Start with psychological truth. **Raymond Chandler** rarely described Philip Marlowe's appearance, yet readers felt they knew him intimately through his cynical wisdom and stubborn honor.

The most powerful character development happens through **choices under pressure**. Don't tell us your character is brave—show them choosing courage when it costs them something precious.`,
      keyTakeaway: "Compelling characters are defined by their desires, internal contradictions, and the choices they make under pressure, not by their physical descriptions.",
      actionItem: "Create a character using the five questions. Then write a scene where they must choose between what they want and what they need."
    }
  },
  {
    id: "ws-004",
    title: "Conflict: The Engine of Story",
    type: "concept",
    duration: 10,
    xpReward: 100,
    content: {
      overview: "Learn why all compelling stories are built on conflict and how to create tension that hooks readers.",
      mainContent: `## No Conflict = No Story

**William Faulkner** wrote that the only thing worth writing about is "the human heart in conflict with itself." Every story, from Shakespearean tragedy to Pixar comedy, runs on conflict. Remove the obstacles, and you have a boring recitation of events.

**The Three Levels of Conflict:**

**1. External Conflict (Person vs. World)**
Physical obstacles, antagonists, environmental challenges. This is the surface-level struggle readers see first.
- Katniss vs. The Hunger Games
- Frodo vs. Sauron
- Startups vs. market competition

**2. Interpersonal Conflict (Person vs. Person)**
Relationship tension that reveals character through interaction.
- Holmes vs. Moriarty
- Jobs vs. Sculley
- Romeo vs. Juliet's family

**3. Internal Conflict (Person vs. Self)**
The deepest level—psychological struggles that create character arcs.
- Hamlet's indecision
- Scrooge's miserliness vs. suppressed compassion
- Your protagonist's fear of vulnerability

> "Write hard and clear about what hurts." — Ernest Hemingway

**The Conflict Escalation Formula:**

Great stories don't maintain steady tension—they **escalate stakes** through three acts:
- **Act 1**: Introduce the conflict (Luke's family killed)
- **Act 2**: Complicate it, raise stakes (friends captured, mentor dies)
- **Act 3**: Force ultimate choice (destroy Death Star or galaxy falls)

**A Common Mistake**: Writers often resolve conflicts too easily. Real transformation requires **meaningful obstacles**. If your character gets what they want in Chapter 2, you don't have a story—you have an anecdote.

**The Pixar Method**: "Once upon a time there was ___. Every day, ___. One day ___. Because of that, ___. Because of that, ___. Until finally ___."

Notice how each "because of that" escalates the conflict. This chain reaction creates narrative momentum that readers can't resist.

In copywriting and business storytelling, conflict equals **the problem your audience faces**. No problem? No reason to keep reading. Make them feel the pain before you offer the cure.`,
      keyTakeaway: "Conflict is the engine of storytelling—without meaningful obstacles and escalating stakes, there is no story worth telling.",
      actionItem: "Take a boring statement like 'She went to the store.' Add three levels of conflict to transform it into a compelling scene.",
      quiz: {
        question: "What did William Faulkner say was the only thing worth writing about?",
        options: [
          "The human heart in conflict with itself",
          "The triumph of good over evil",
          "The beauty of the natural world",
          "The corruption of modern society"
        ],
        correct: 0,
        explanation: "Faulkner believed the most compelling stories come from internal psychological conflict—the human heart at war with itself."
      }
    }
  },
  {
    id: "ws-005",
    title: "Show Don't Tell",
    type: "exercise",
    duration: 11,
    xpReward: 100,
    content: {
      overview: "Master the most important rule in writing by learning to reveal character and emotion through action, not description.",
      mainContent: `## The Golden Rule of Compelling Writing

"Show, don't tell" is the advice every writer hears repeatedly—and most misunderstand. It doesn't mean eliminating all exposition. It means **trusting your reader to infer emotion from sensory details and action** rather than stating feelings directly.

**Telling vs. Showing:**

**Bad (Telling)**: "Sarah was nervous about the interview."

**Good (Showing)**: "Sarah checked her phone for the third time in two minutes, smoothing invisible wrinkles from her skirt."

The second version lets readers **experience** Sarah's anxiety through observable behavior. This creates immersion rather than passive reception.

**Anton Chekhov's Rule**: "Don't tell me the moon is shining; show me the glint of light on broken glass."

**The Iceberg Principle:**

**Ernest Hemingway** famously wrote with seven-eighths of the story beneath the surface. His short story "Hills Like White Elephants" never mentions the word "abortion," yet the entire conflict revolves around it. He showed the tension through:
- Clipped dialogue
- Avoiding eye contact
- Looking at hills "like white elephants"
- Ordering drinks repeatedly

> "The dignity of movement of an iceberg is due to only one-eighth of it being above water." — Hemingway

**Three Techniques for Showing:**

**1. Body Language**: Instead of "he was angry," write "his jaw tightened" or "his knuckles went white."

**2. Dialogue Subtext**: What characters don't say matters more than what they do. "I'm fine" can mean "I'm devastated."

**3. Sensory Details**: Ground emotion in the five senses. Anxiety smells like stale coffee and sounds like a clock ticking too loud.

**When to Tell**: Sometimes efficiency demands telling. "Twenty years passed" beats describing every year. The key is **strategic balance**—show the moments that matter emotionally, tell the transitions.

**Stephen King's Test**: If you wrote "He was afraid," find three concrete details that prove it without using the word "afraid."`,
      keyTakeaway: "Show, don't tell means revealing emotion through sensory details, body language, and action rather than stating feelings directly.",
      actionItem: "Rewrite this sentence without the emotion word: 'Maria was excited about her first day.' Use only actions and sensory details.",
      quiz: {
        question: "What is Hemingway's 'Iceberg Principle' in writing?",
        options: [
          "Most of the story's meaning should be implied beneath the surface",
          "Stories should be cold and emotionless like ice",
          "Only the most important facts should be included",
          "Writing should be as clear as crystal"
        ],
        correct: 0,
        explanation: "Hemingway believed in omitting obvious emotions and letting readers infer deeper meaning from what's shown, like an iceberg with seven-eighths hidden underwater."
      }
    }
  },
  {
    id: "ws-006",
    title: "The Hook: Opening Lines That Grab",
    type: "concept",
    duration: 10,
    xpReward: 100,
    content: {
      overview: "Learn why the first sentence determines whether anyone reads the second, and how to craft irresistible openings.",
      mainContent: `## You Have One Sentence to Win

In an age of infinite content, your opening line is everything. Readers (and editors, and algorithms) decide in seconds whether to invest attention. Master the hook, or watch them scroll away.

**Legendary Opening Lines:**

**"It was a bright cold day in April, and the clocks were striking thirteen."** — George Orwell, *1984*

One sentence establishes an unsettling alternate reality. Why thirteen? Instant curiosity.

**"The man in black fled across the desert, and the gunslinger followed."** — Stephen King, *The Gunslinger*

Immediate action, clear conflict, mysterious characters. We must know more.

**"All happy families are alike; each unhappy family is unhappy in its own way."** — Leo Tolstoy, *Anna Karenina*

A universal truth that promises we're about to see a uniquely unhappy family.

**The Four Types of Hooks:**

**1. Action Hook**: Start mid-scene with movement or danger.
- "The building exploded at 6:42 AM."

**2. Mystery Hook**: Pose an intriguing question or contradiction.
- "The day I killed my father, it was raining."

**3. Voice Hook**: Establish a compelling narrative personality.
- "If you really want to hear about it, the first thing you'll probably want to know is where I was born..." — J.D. Salinger

**4. Stakes Hook**: Immediately establish what's at risk.
- "Everyone thinks they know how I died."

> "Start as close to the end as possible." — Kurt Vonnegut

**What NOT to Do:**

❌ Weather descriptions ("It was a dark and stormy night")
❌ Alarm clock scenes ("Jenny woke up to her alarm")
❌ Long backstory dumps
❌ Describing ordinary routine

**The Copywriting Connection**: Great headlines follow the same principles. **David Ogilvy's** "At 60 miles an hour, the loudest noise in this new Rolls-Royce comes from the electric clock" works because it's **specific, surprising, and promises luxury**.

**Your First Sentence Test**: Does it create curiosity? Does it promise something worth reading? Would you keep reading if someone else wrote it?`,
      keyTakeaway: "Your opening line must create immediate curiosity through action, mystery, compelling voice, or clear stakes—you have seconds to hook readers.",
      actionItem: "Write five different opening sentences for the same story. Which type of hook does each use? Which is most effective?",
      quiz: {
        question: "What did Kurt Vonnegut advise about where to start a story?",
        options: [
          "Start as close to the end as possible",
          "Start with detailed character descriptions",
          "Start with the protagonist's childhood",
          "Start with a dramatic weather description"
        ],
        correct: 0,
        explanation: "Vonnegut advocated starting stories late in the action, cutting unnecessary setup and jumping straight to the compelling conflict."
      }
    }
  },
  {
    id: "ws-007",
    title: "Dialogue That Sounds Real",
    type: "concept",
    duration: 12,
    xpReward: 100,
    content: {
      overview: "Write dialogue that reveals character, advances plot, and sounds like actual human speech.",
      mainContent: `## How People Actually Talk

Bad dialogue sounds like a Wikipedia entry read aloud. Good dialogue sounds like real conversation while actually being much tighter and more purposeful. This paradox—**naturalistic artifice**—is the key to writing dialogue readers believe.

**The Elmore Leonard Rules:**

The master of snappy dialogue gave us simple wisdom:
1. Never use a verb other than "said" for dialogue tags
2. Never use an adverb to modify "said"
3. If it sounds like writing, rewrite it

**Why these work**: They keep focus on the words themselves, not the mechanics of speech. Compare:

❌ **Bad**: "I can't believe you did that!" she exclaimed angrily.

✅ **Good**: "I can't believe you did that!" She threw the keys on the table.

The action beat conveys anger better than the adverb ever could.

**Real Dialogue Techniques:**

**1. Subtext**: People rarely say exactly what they mean.

*Surface*: "How was your day?"
"Fine."

*Subtext*: "Do you still love me?"
"I'm too tired to fight."

**2. Interruption and Overlap**: Real conversations aren't perfectly structured.

"I thought we could—"
"Not tonight."
"—maybe just for an hour?"

**3. Contractions and Fragments**: Nobody speaks in complete sentences.

❌ **Stiff**: "I am going to the store. Do you need anything?"
✅ **Natural**: "Going to the store. Need anything?"

**4. Distinct Voice**: Each character should sound different.

**Hemingway's** characters speak in clipped, direct statements. **Tarantino's** characters riff on pop culture and take circular conversational paths. **Aaron Sorkin's** characters speak in rapid-fire wit and parallel structure.

> "Dialogue is a skill best learned by reading it aloud." — Stephen King

**The Silence Principle**: What characters don't say is as important as what they do. A pause, an avoided question, a subject change—these reveal truth.

**Tag-Free Dialogue**: When only two characters speak, you can drop most tags entirely:

"You coming?"
"Maybe."
"That's not an answer."
"It's all you're getting."

The rhythm and content make speakers clear without "he said" / "she said" cluttering the page.`,
      keyTakeaway: "Great dialogue sounds natural while being more focused than real speech, uses subtext and action beats instead of adverbs, and gives each character a distinct voice.",
      actionItem: "Listen to a real conversation (or TV show) and transcribe it exactly. Then rewrite it for fiction, cutting 30% while keeping it natural.",
      quiz: {
        question: "According to Elmore Leonard, what dialogue tag should you almost always use?",
        options: [
          "'Said' without adverbs",
          "'Exclaimed' for emphasis",
          "'Shouted' and 'whispered' for variety",
          "No dialogue tags at all"
        ],
        correct: 0,
        explanation: "Leonard believed 'said' is invisible to readers and keeps focus on the dialogue itself, while fancier tags and adverbs distract from the words."
      }
    }
  },
  {
    id: "ws-008",
    title: "Story Structure: The Three-Act Framework",
    type: "challenge",
    duration: 13,
    xpReward: 100,
    content: {
      overview: "Apply the proven three-act structure to create narratives with satisfying arcs and proper pacing.",
      mainContent: `## The Architecture of Every Story

Whether you're writing a novel, screenplay, or brand story, the three-act structure provides the skeleton that keeps narratives from sagging in the middle or ending too abruptly. This framework isn't a formula—it's **architecture based on how humans psychologically process change**.

**The Three-Act Breakdown:**

**ACT ONE: SETUP (25%)**

Establish the ordinary world, introduce the protagonist, and trigger the inciting incident that launches the story.

**Key Beats:**
- Opening image (sets tone)
- Inciting incident (disrupts normal life)
- First plot point (protagonist commits to the journey)

*Example*: **The Matrix** — Neo's ordinary life as a programmer → meets Morpheus → takes the red pill (Act 1 ends)

**ACT TWO: CONFRONTATION (50%)**

The longest section, where the protagonist faces escalating obstacles, makes allies, and learns skills needed for the final confrontation.

**Key Beats:**
- Midpoint (false victory or false defeat that raises stakes)
- All is lost moment (darkest hour before the end)
- Second plot point (final piece falls into place)

*Example*: **The Matrix** — Training montage → believing he's The One → Morpheus captured (midpoint) → Trinity reveals she loves him (second plot point)

> "The first act gets your character stuck in a tree. The second act throws rocks at them. The third act gets them down." — Anonymous

**ACT THREE: RESOLUTION (25%)**

The protagonist uses everything learned to face the main conflict, achieves transformation, and shows the new normal.

**Key Beats:**
- Climax (final confrontation)
- Resolution (loose ends tied)
- Closing image (shows how world has changed)

*Example*: **The Matrix** — Neo fights Agent Smith → realizes he is The One → reborn with powers → closing phone call promising revolution

**The Midpoint Matters**: This is where amateur writers often lose momentum. The midpoint should **flip something major**—a revelation, a betrayal, a victory that creates new problems. In *The Empire Strikes Back*, Han and Leia kiss (high point), but immediately get captured (low point), raising stakes for Act 2B.

**Applying to Non-Fiction**: Business books, TED talks, and essays use this too:
- Act 1: Here's the problem
- Act 2: Here's why it's hard and why previous solutions failed
- Act 3: Here's my solution and how it changes everything

**Syd Field**, the screenwriting guru, called these act breaks **plot points**—moments of no return that spin the story in a new direction.`,
      keyTakeaway: "The three-act structure provides psychological pacing that mirrors how humans process change: setup, escalating confrontation, and resolution with transformation.",
      actionItem: "Outline a story from your life using three-act structure. What was your inciting incident? Your midpoint revelation? Your climax and resolution?",
      quiz: {
        question: "What should happen at the midpoint of a three-act story?",
        options: [
          "A major revelation, victory, or setback that raises stakes and spins the story in a new direction",
          "The final climactic battle between protagonist and antagonist",
          "The first time the protagonist and antagonist meet",
          "A quiet moment of reflection before the action resumes"
        ],
        correct: 0,
        explanation: "The midpoint should flip something significant—a false victory, major betrayal, or revelation—that raises stakes and prevents the middle from sagging."
      }
    }
  }
];
