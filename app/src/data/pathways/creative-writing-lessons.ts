import type { PathwayLesson } from "@/types";

export const cwLessonsLevel1: PathwayLesson[] = [
  {
    id: "cw-001",
    title: "The Art and Craft of Fiction",
    type: "intro",
    duration: 10,
    xpReward: 100,
    content: {
      overview: "Discover what separates memorable fiction from forgettable prose and how to master both the art and craft.",
      mainContent: `## Writing Fiction That Resonates

Fiction is humanity's oldest technology for exploring consciousness. Before psychology existed, we had **Shakespeare's Hamlet** wrestling with existence. Before neuroscience, we had **Dostoyevsky's** characters battling their demons. Fiction doesn't just entertain—it **expands our capacity to understand other minds**.

**John Gardner** wrote in "The Art of Fiction" that the goal is to create a "vivid and continuous dream" in the reader's mind. Once the spell is broken—by clunky prose, inconsistent voice, or false notes—the reader wakes up and stops caring.

**The Dual Nature of Fiction Writing:**

**Art**: The ineffable quality that makes **Toni Morrison** sound like Morrison and **Haruki Murakami** sound like Murakami. This is voice, vision, the unique way you see the world.

**Craft**: The learnable techniques that make prose clear, scenes compelling, and characters believable. This is structure, pacing, dialogue mechanics, point of view control.

> "Half my life is an act of revision." — John Irving

**Why Most Fiction Fails**: Writers confuse the two. They have artistic vision but lack craft (resulting in beautiful but unreadable prose), or they master craft but have nothing original to say (resulting in technically perfect but soulless stories).

**The Greats Do Both**:

**Cormac McCarthy**: Poetic, biblical prose (art) + relentless pacing and stripped dialogue (craft)
**Margaret Atwood**: Speculative vision (art) + meticulous structure and worldbuilding (craft)
**Neil Gaiman**: Mythic imagination (art) + accessible storytelling and character development (craft)

**What Fiction Does That Non-Fiction Cannot:**

It creates **emotional truth** rather than factual truth. **Tim O'Brien's** "The Things They Carried" is partly fictional, but it conveys the psychological reality of war more powerfully than any memoir.

Fiction lets you:
- Inhabit minds radically different from your own
- Explore moral questions without providing answers
- Create heightened reality that reveals deeper truth
- Use metaphor and symbol to communicate the inexpressible

**The Contract with the Reader**:

When someone picks up your novel, they're giving you their most valuable resource: **attention**. In exchange, you must:
1. Make every sentence worth reading
2. Create characters they care about
3. Build a world they believe in
4. Take them somewhere they couldn't go alone

**Genre vs. Literary Fiction**: A false binary. **Ursula K. Le Guin** proved science fiction could be literary. **Gillian Flynn** proved thrillers could have complex character psychology. Great fiction transcends category.

Your job as a fiction writer isn't to follow rules—it's to **create an experience** so immersive, so emotionally resonant, that readers emerge changed.`,
      keyTakeaway: "Great fiction balances art (unique vision and voice) with craft (learnable techniques), creating vivid dreams that expand readers' consciousness.",
      actionItem: "Read the first page of three novels from different genres. What makes each voice distinct? How does the writer establish the 'dream' immediately?"
    }
  },
  {
    id: "cw-002",
    title: "Point of View: Choosing Your Lens",
    type: "concept",
    duration: 11,
    xpReward: 100,
    content: {
      overview: "Master the fundamental decision of narrative perspective and how it shapes every aspect of your story.",
      mainContent: `## Through Whose Eyes?

Point of view (POV) is the most consequential decision you'll make about your story. It determines not just who tells it, but **what can be known, felt, and revealed**. Switch POV, and the entire story transforms.

**First Person: "I"**

The narrator is a character in the story, limited to their knowledge and perspective.

**Strengths**:
- Intense intimacy and voice
- Immediate emotional access
- Natural for unreliable narrators

**Examples**:
- **"The Catcher in the Rye"** (J.D. Salinger): Holden's cynical teenage voice IS the novel
- **"Gone Girl"** (Gillian Flynn): Dueling first-person perspectives, both unreliable
- **"The Hunger Games"** (Suzanne Collins): Katniss's immediate survival perspective

**Limitations**: You can only show what the narrator knows, sees, or learns. Other characters' inner lives remain opaque unless they reveal them through dialogue or action.

**When to Use**: Stories driven by a unique voice or unreliable perspective, coming-of-age narratives, mysteries where limited knowledge creates suspense.

**Third Person Limited: "He/She"**

An outside narrator tells the story but remains inside one character's head at a time.

**Strengths**:
- Character intimacy with more flexibility than first person
- Can shift between characters (multiple POV)
- Allows prose more elegant than the character might use

**Examples**:
- **"Harry Potter"** (J.K. Rowling): Third person limited to Harry's perspective
- **"A Song of Ice and Fire"** (George R.R. Martin): Each chapter switches to a different character's POV
- **"The Handmaid's Tale"** (Margaret Atwood): Intimate access to Offred's thoughts

> "The first sentence of a book is a handshake, perhaps an embrace." — Toni Morrison

**Third Person Omniscient: The God View**

The narrator knows everything—all characters' thoughts, the past, the future, events happening simultaneously in different places.

**Strengths**:
- Total freedom and scope
- Can comment on action with wisdom
- Creates epic, sweeping narratives

**Examples**:
- **"Middlemarch"** (George Eliot): Wise narrator comments on provincial life
- **"One Hundred Years of Solitude"** (Gabriel García Márquez): Mythic scope across generations
- **"Dune"** (Frank Herbert): Multiple perspectives, future knowledge

**Limitations**: Can feel distant emotionally. The modern reader prefers intimacy. Hard to pull off without feeling old-fashioned.

**Second Person: "You" (Experimental)**

The narrator addresses the reader or another character as "you."

**Extremely rare** but powerful when done well:
- **"Bright Lights, Big City"** (Jay McInerney): Makes reader complicit in protagonist's cocaine-fueled decline
- **"If on a winter's night a traveler"** (Italo Calvino): Postmodern metafiction

**The Most Common Mistake**: **Head-hopping**—switching POV within a scene without clear transitions. This disorients readers and breaks immersion.

**Choose POV by asking**:
- Whose story is this emotionally?
- What needs to be hidden for suspense?
- What tone do I want—intimate or epic?
- How many perspectives do I need?

**Zadie Smith** rewrote **"White Teeth"** multiple times experimenting with POV before finding the right balance of omniscient narration and character intimacy.`,
      keyTakeaway: "Point of view determines what readers can know and feel—first person for voice and intimacy, third limited for flexibility, omniscient for scope.",
      actionItem: "Take a scene from your life. Write it in first person, then third person limited, then third person omniscient. How does the meaning change?",
      quiz: {
        question: "What is the primary advantage of third person limited POV over first person?",
        options: [
          "It allows character intimacy while giving more prose flexibility and the option to shift between multiple characters",
          "It provides complete knowledge of all characters' thoughts simultaneously",
          "It creates more distance between reader and character",
          "It works better for experimental postmodern fiction"
        ],
        correct: 0,
        explanation: "Third person limited offers the intimacy of first person while allowing more elegant prose than the character might use and the flexibility to shift POV between chapters."
      }
    }
  },
  {
    id: "cw-003",
    title: "Character Psychology and Motivation",
    type: "concept",
    duration: 12,
    xpReward: 100,
    content: {
      overview: "Create psychologically complex characters by understanding desire, need, and the internal contradictions that make people real.",
      mainContent: `## What Makes Characters Live

**E.M. Forster** distinguished between "flat" and "round" characters. Flat characters are cardboard cutouts defined by a single trait. Round characters contain **contradictions, depths, and the capacity to surprise us**—just like real people.

**The Desire-Need Gap**

The most compelling characters want something desperately (external desire) but need something different to grow (internal need). The tension between these drives creates the character arc.

**Walter White (Breaking Bad)**:
- **Desire**: Build a meth empire, provide for family
- **Need**: Admit he does it for ego, not family
- **Arc**: He gets his desire but fails to meet his need—tragic trajectory

**Elizabeth Bennet (Pride and Prejudice)**:
- **Desire**: Find love and respect in society
- **Need**: Overcome her prejudice and hasty judgments
- **Arc**: She gets both by addressing her internal flaw

**Rey (Star Wars sequels)**:
- **Desire**: Find belonging and identity
- **Need**: Accept her own power without relying on lineage
- **Arc**: (Debated—some feel she didn't have sufficient internal conflict)

> "I don't want likable characters. I want characters who are human." — Gillian Flynn

**The Psychology of Motivation**

Real humans act from **mixed motives**. Good characters do too.

**Snape (Harry Potter)**: Protects Harry from love of Lily (noble) but treats him terribly from resentment of James (petty). Both motives are simultaneously true—creating complexity.

**The Three Layers of Character**:

**1. Surface Behavior**: What they do and say publicly
**2. Conscious Motivation**: What they tell themselves they want
**3. Unconscious Drive**: The hidden wound or need driving everything

**Jay Gatsby** consciously wants Daisy back. Unconsciously, he wants to erase the past and prove his worth to the old money class that rejected him. **F. Scott Fitzgerald** shows the tragedy of someone who can't distinguish between these layers.

**Character Flaws That Feel Real**

**Hamlet**: Overthinks to the point of paralysis
**Katniss**: Self-sacrifice becomes self-destruction
**Sherlock Holmes**: Brilliant mind, emotional blindness

Flaws work when they're **integral to the character's psychology**, not just tacked on. **Jane Austen's** Emma is meddlesome because she's intelligent but bored—her flaw emerges organically from her situation and personality.

**The Internal Contradiction**

**Don Draper** (Mad Men): Sells authenticity while living a complete lie
**Tyrion Lannister**: Cynical wit masking deep need for love and respect
**Fleabag**: Performs confidence while drowning in grief and shame

When characters contain **opposing truths**, they feel three-dimensional. Humans are never just one thing.

**Building Backstory (Without Info-Dumping)**

The character's past shapes their present psychology, but readers don't need the whole biography. **Ernest Hemingway's** iceberg principle applies: Show the tip; the mass beneath gives it weight.

**Bad**: "John was afraid of dogs because when he was seven, his neighbor's pit bull attacked him."

**Good**: John crossed the street when he saw the dog. His hand went to the scar on his calf without conscious thought.

The second version **shows the psychological impact** without explaining it explicitly. The reader infers the trauma.

**Character Agency**: Passive characters who react rather than act bore readers. Even when trapped (literally, like in prison stories), compelling characters **make choices** that reveal who they are.`,
      keyTakeaway: "Complex characters contain contradictions, have desires that conflict with needs, and act from mixed motives that reflect real human psychology.",
      actionItem: "Create a character with an obvious desire. Now dig deeper: what unconscious need drives that desire? What childhood wound created this pattern?"
    }
  },
  {
    id: "cw-004",
    title: "Scene Construction: The Building Blocks",
    type: "concept",
    duration: 11,
    xpReward: 100,
    content: {
      overview: "Master the fundamental unit of fiction by learning how to construct scenes with purpose, tension, and change.",
      mainContent: `## Every Scene Must Earn Its Place

**Raymond Carver** was a master of the minimal scene—brief, focused moments where everything mattered. **Stephen King** writes sprawling, atmospheric scenes that build dread through accumulation. Different approaches, same principle: **Every scene must change something**.

**The Scene/Sequel Framework**

Developed by **Dwight Swain**, this pattern creates natural story rhythm:

**SCENE** (Action):
1. **Goal**: Character wants something specific in this moment
2. **Conflict**: Obstacles prevent them from getting it
3. **Disaster**: They fail, or succeed with complications

**SEQUEL** (Reaction):
1. **Reaction**: Emotional response to the disaster
2. **Dilemma**: Weighing limited options
3. **Decision**: Choosing the next goal (leads to next scene)

Example from **Harry Potter and the Sorcerer's Stone**:

**Scene**: Harry tries to retrieve the stone before Quirrell → Faces obstacles (mirror, Voldemort) → Succeeds but nearly dies

**Sequel**: Wakes in hospital wing → Realizes the danger isn't over → Decides to prepare for Voldemort's return

> "A scene is a unit of conflict lived through by character and reader." — Elizabeth Bowen

**The Four Essential Elements**

**1. Setting**: Where and when, established quickly
Not: "The coffee shop was located on the corner of Fifth and Main, with brick walls painted beige and fourteen small tables arranged in rows."
But: "The coffee shop smelled like burned espresso and broken dreams."

**2. Action**: What happens physically
Show characters **doing things** while they talk. Static talking-head scenes feel flat.

**3. Dialogue**: What characters say (and don't say)
Subtext, conflict, character revelation. Never just information exchange.

**4. Interiority**: What the POV character thinks and feels
This is what separates fiction from film. We can go **inside the character's head**.

**Scene Opening and Closing**

**Enter late, leave early**: Start the scene as close to the conflict as possible. End as soon as the disaster/decision happens.

❌ **Bad**: Show character driving to confrontation, parking, walking to the door, knocking, waiting...
✅ **Good**: Start with the door opening, tension already high.

**David Mamet's** advice for screenwriting applies to prose: "Start with the presumption that every scene is unnecessary until proven otherwise."

**The Dramatic Question**

Every scene should pose a question in the reader's mind:
- Will she confess?
- Will he find the weapon before they arrive?
- Will they kiss or fight?

The scene ends when the question is **answered in an unexpected way** that raises new questions.

**Common Scene Mistakes**:

**1. No Stakes**: Nothing important is at risk
**2. No Change**: Characters end where they started
**3. Talking Heads**: Dialogue with no action, setting, or interiority
**4. Info-Dumping**: Stopping action to explain backstory

**Elmore Leonard** said, "Try to leave out the part that readers tend to skip." Most readers skip:
- Long descriptions
- Unnecessary backstory
- Dialogue that's just information

**The Action-Reaction Beat**: Within scenes, create rhythm through beats—small units of action and reaction.

*She slammed the door.* (action)
*He flinched.* (reaction)
*"You don't get to walk away."* (action)
*His jaw tightened.* (reaction)

This micro-level structure keeps scenes **dynamic and grounded in the moment**.`,
      keyTakeaway: "Effective scenes have clear goals, conflict, and change, entering late and leaving early while balancing action, dialogue, and interiority.",
      actionItem: "Outline a scene using the Scene/Sequel framework. What specific goal does the character have? What disaster stops them? What decision follows?",
      quiz: {
        question: "What does 'enter late, leave early' mean in scene construction?",
        options: [
          "Start the scene as close to the conflict as possible and end as soon as the key moment resolves",
          "Make all scenes as short as possible for better pacing",
          "Arrive late to parties and leave before they end",
          "Begin scenes with backstory and end with foreshadowing"
        ],
        correct: 0,
        explanation: "This principle means cutting unnecessary setup and aftermath, starting scenes when tension begins and ending when the dramatic question is answered."
      }
    }
  },
  {
    id: "cw-005",
    title: "Plot Structure: From Setup to Payoff",
    type: "concept",
    duration: 12,
    xpReward: 100,
    content: {
      overview: "Learn how to structure compelling plots that balance setup, escalation, and satisfying resolution.",
      mainContent: `## Architecture of Story Events

**E.M. Forster** defined plot as "The king died, then the queen died of grief." The first part is chronology; the second part is causality. **Plot is events connected by cause and effect**, creating a chain reaction that feels inevitable yet surprising.

**The Seven-Point Story Structure**

More detailed than three-act, this framework (from **Dan Wells**) creates natural story progression:

**1. Hook**: Introduce protagonist in their ordinary world (but make it compelling)
**2. Plot Turn 1**: Inciting incident that disrupts normal (often external)
**3. Pinch 1**: First major setback; introduce antagonist force
**4. Midpoint**: Protagonist shifts from reactive to proactive
**5. Pinch 2**: Second major setback; all seems lost
**6. Plot Turn 2**: Final piece of puzzle falls into place
**7. Resolution**: Climax and denouement

**Breaking Bad's** first season follows this perfectly:

1. Hook: Walter White is dying, underpaid chemistry teacher
2. Turn 1: Cancer diagnosis → decides to cook meth
3. Pinch 1: First cook goes wrong, Krazy-8 tries to kill them
4. Midpoint: Kills Krazy-8; crosses moral line, becomes active villain
5. Pinch 2: Tuco beats up Jesse; operation nearly collapses
6. Turn 2: Fulminated mercury trick (uses chemistry = thematic payoff)
7. Resolution: Defeats Tuco, but deeper into darkness

> "Plot is characters under stress." — Henry James

**The Try-Fail Cycle**

Amateur plots: protagonist tries once, succeeds, story over.

Professional plots: protagonist tries, fails, tries harder, fails worse, tries desperately, barely succeeds with consequences.

**The Hunger Games**:
- Try 1: Survive the initial bloodbath → Succeeds but isolated
- Try 2: Find water and food → Succeeds but career tributes attack
- Try 3: Alliance with Rue → Succeeds but Rue dies (emotional cost)
- Try 4: Star-crossed lovers strategy → Succeeds but forced to final confrontation
- Try 5: Suicide berry trick → Succeeds but creates enemies in the Capitol

Each success creates new, bigger problems. This is **escalation**.

**Setup and Payoff (Chekhov's Gun)**

**Anton Chekhov**: "If you show a gun in Act One, it must go off by Act Three. If it's not going to go off, don't show it."

This means:
- **Setup**: Plant elements early
- **Payoff**: Use them later in surprising but logical ways

**Harry Potter** is masterful at this:
- **Setup**: Harry speaks Parseltongue (Book 2)
- **Payoff**: Communicates with Nagini (Books 5-7)

**The Sopranos** subverted this brilliantly—showing guns that never go off, creating anxiety about what will matter.

**Plot Types (Christopher Booker's Seven)**

**1. Overcoming the Monster**: Jaws, Alien, David vs. Goliath
**2. Rags to Riches**: Cinderella, Great Gatsby (inverted)
**3. The Quest**: Lord of the Rings, Indiana Jones
**4. Voyage and Return**: Alice in Wonderland, The Wizard of Oz
**5. Comedy**: Misunderstandings resolved (Shakespeare, rom-coms)
**6. Tragedy**: Macbeth, Breaking Bad
**7. Rebirth**: A Christmas Carol, Groundhog Day

Most stories combine multiple types. **The Matrix** is Quest + Rebirth + Overcoming the Monster.

**The Midpoint Shift**: The Most Important Beat**

The middle is where amateur writers lose momentum. The solution: **a revelation or reversal that flips the story's direction**.

**The Empire Strikes Back**: "I am your father" changes Luke from avenging son to conflicted child of evil.

**Gone Girl**: Midpoint reveals Amy is alive and orchestrating everything—flips from missing person story to psychological thriller.

Without a strong midpoint, the second act sags. With it, **the back half rockets toward the climax**.

**Subplot Integration**: Great novels weave multiple plot threads that **thematically resonate**:

**The Godfather**: Michael's mob rise (main plot) + family deterioration (subplot) + loss of innocence (thematic thread) all reinforce each other.`,
      keyTakeaway: "Effective plots connect events through causality, escalate through try-fail cycles, and use setup/payoff to create surprising but inevitable outcomes.",
      actionItem: "Map your favorite novel or film to the seven-point structure. What happens at each beat? How does the midpoint shift everything?",
      quiz: {
        question: "What is Chekhov's Gun principle in plotting?",
        options: [
          "If you introduce an element early, it must pay off later; don't include details that don't matter",
          "Every story needs a literal gun or weapon",
          "The protagonist should always be armed for the final confrontation",
          "Writers should eliminate all unnecessary descriptions"
        ],
        correct: 0,
        explanation: "Chekhov's Gun means every element you introduce should have narrative purpose—if you show a gun in Act One, it must be used by Act Three."
      }
    }
  },
  {
    id: "cw-006",
    title: "Worldbuilding: Creating Believable Universes",
    type: "exercise",
    duration: 11,
    xpReward: 100,
    content: {
      overview: "Master the art of building immersive fictional worlds that feel lived-in and real.",
      mainContent: `## More Than Just Setting

Every story takes place somewhere—but **worldbuilding** is the difference between a backdrop and an immersive reality. Whether you're writing contemporary realism or high fantasy, the world must feel **deeper than what's on the page**.

**Ursula K. Le Guin** said, "The story must be more important than the world, but the world must be important enough to have the story."

**The Iceberg Principle of Worldbuilding**

**What the reader sees**: 10%
**What you know but don't show**: 90%

**J.R.R. Tolkien** created entire languages, mythologies, and millennia of history for Middle-earth. Most of it never appears in *The Lord of the Rings*, but its **invisible presence** gives the world weight and authenticity.

Contrast with worldbuilding that feels thin—when every detail that exists is explicitly shown, the world feels like a stage set rather than a living place.

**The Five Layers of World**

**1. Physical**: Geography, climate, architecture
**2. Cultural**: Customs, religion, social norms, art
**3. Political**: Power structures, laws, conflicts
**4. Economic**: How people make a living, trade, resources
**5. Historical**: Past events that shaped the present

**George R.R. Martin's Westeros** excels because all five layers interact:
- Physical: The Wall creates North/South divide
- Cultural: Honor codes vary by region
- Political: Seven Kingdoms recently unified, barely stable
- Economic: Westeros depends on summer harvests before winter
- Historical: Targaryen conquest still shapes current conflicts

> "I've always said that I prefer history to fantasy, and maybe that's why I do it the way I do." — George R.R. Martin

**Show the World Through Character POV**

**Bad worldbuilding**: Stop the story to explain how the magic system works.

**Good worldbuilding**: Show a character using magic naturally, readers infer the rules.

**N.K. Jemisin's *The Fifth Season*** never pauses to explain orogeny (earth-bending power). We learn through Essun's perspective as she uses it, fears it, and deals with society's reaction to it.

**The Rule of Three Details**

When describing a place, **pick three specific details** that capture its essence rather than cataloging everything.

❌ Generic: "The tavern was old, with wooden tables and chairs, stone walls, a fireplace, candles, a bar, bottles on shelves, and patrons drinking."

✅ Specific: "The tavern reeked of sour ale and wet dog. Initials carved into every table surface testified to a hundred years of bored travelers. Behind the bar, a stuffed wyvern head with only one glass eye watched the room."

Three vivid details > ten generic ones.

**Cultural Worldbuilding**: Beyond Aesthetics**

Weak worldbuilding: Different clothes and names, same values as modern America.

Strong worldbuilding: Different fundamental assumptions about personhood, property, family, honor.

**Octavia Butler's *Xenogenesis*** trilogy features aliens with radically different biology and ethics—three genders, genetic trading as intimacy, no concept of hierarchical power. This **forces readers to question human assumptions**.

**The Worldbuilding Mistakes**:

**1. Info-Dumping**: Stopping story to explain world
**2. Exoticism for Its Own Sake**: Weird details that don't serve theme
**3. Inconsistency**: Rules that change to serve plot convenience
**4. Underbuilding**: World feels like a theme park, not a real place

**Contemporary/Realistic Fiction Needs Worldbuilding Too**

**Toni Morrison's** novels build the world of African American experience in different eras with the same depth Tolkien built Middle-earth. The historical, cultural, and social context is **essential to understanding character psychology**.

**Your Worldbuilding Checklist**:
- What are three specific sensory details that make this place unique?
- What do people value here? What's taboo?
- How does the world's history shape present conflicts?
- What do I know that I'm NOT showing?
- Does the world feel bigger than what's on the page?`,
      keyTakeaway: "Effective worldbuilding shows specific details through character POV, builds cultural depth beyond aesthetics, and knows far more than it explicitly tells.",
      actionItem: "Create a fictional location. Write three specific sensory details. Then write three cultural norms or values. Now write a scene set there WITHOUT explaining any of this directly.",
      quiz: {
        question: "What is the 'iceberg principle' of worldbuilding?",
        options: [
          "You should know 90% more about your world than you show, giving the visible 10% weight and depth",
          "Fantasy worlds should always be cold and icy like icebergs",
          "You should show all the worldbuilding details to prove you did research",
          "Only the top-level facts matter, everything else can be improvised"
        ],
        correct: 0,
        explanation: "Like an iceberg with most of its mass underwater, effective worldbuilding requires knowing far more than you show, giving the visible details weight and authenticity."
      }
    }
  },
  {
    id: "cw-007",
    title: "Prose Style: Finding Your Voice",
    type: "concept",
    duration: 12,
    xpReward: 100,
    content: {
      overview: "Develop distinctive prose style through sentence rhythm, word choice, and the elusive quality called voice.",
      mainContent: `## The Music of Language

**Voice** is the most mysterious element of writing. **Joan Didion** sounds like Didion. **Cormac McCarthy** sounds like McCarthy. **Toni Morrison** sounds like Morrison. You recognize them in a single sentence, but explaining why is difficult—it's the sum of ten thousand micro-decisions.

**The Elements of Prose Style:**

**1. Sentence Length and Rhythm**

**Hemingway**: Short, declarative sentences. Stripped-down precision.

"It was getting hot, the sun hot on the back of his neck. He went into the bar."

**Faulkner**: Long, flowing sentences that accumulate detail and digression.

"Memory believes before knowing remembers. Believes longer than recollects, longer than knowing even wonders."

**The Best Writers Vary Length**: Short sentences create impact. Long sentences create flow and build complexity, allowing ideas to develop and connect in ways that feel organic and musical. See?

**2. Word Choice (Diction)**

**McCarthy**: Anglo-Saxon words, biblical cadence, archaic flavor
"The man sat in the cold and the dark. Like something out of a tale."

**Morrison**: Lyrical, sensory, metaphorically rich
"Sweet, crazy conversations full of half sentences, daydreams and misunderstandings more thrilling than understanding could ever be."

**Precision vs. Poetry**: Choose words for:
- **Denotation**: Literal meaning
- **Connotation**: Emotional resonance
- **Sound**: How it feels in the mouth, ear

> "The difference between the right word and the almost right word is the difference between lightning and a lightning bug." — Mark Twain

**3. Syntax (Sentence Structure)**

**Subject-Verb-Object** (standard): "She opened the door."

**Inverted**: "The door she opened with trembling hands."

**Fragment**: "The door. Red. Peeling paint."

**Virginia Woolf** and **James Joyce** experimented with stream-of-consciousness syntax that mirrors how thoughts actually flow—fragmented, associative, without neat subject-verb agreement.

**4. Imagery and Metaphor**

**Good Metaphor**: Illuminates by comparing unlike things in surprising ways

**Raymond Chandler**: "The girl gave him a look which ought to have stuck at least four inches out of his back."

**Bad Metaphor**: Clichéd or confusing

"Her eyes were like pools of water" (overused)
"His anger was a garbage truck full of angry bees" (what?)

**5. Interiority vs. Exteriority**

**Exterior (Hemingway)**: Focus on observable action and dialogue
"He ordered a drink. She looked at the hills."

**Interior (Woolf)**: Focus on thoughts and perceptions
"She found herself thinking again of her mother, dead now five years, though it seemed both longer and shorter, time being such a peculiar measure of loss."

**Finding Your Natural Voice**

**The Mistake**: Trying to sound "literary" by using fancy words and complex sentences when that's not natural to you.

**The Solution**: Read your work aloud. If you wouldn't say it that way, revise.

**Elmore Leonard's Rules**:
- Never use a verb other than "said" for dialogue
- Never use an adverb to modify "said"
- Avoid detailed descriptions of characters
- Don't go into great detail describing places
- Try to leave out the part readers tend to skip

These are HIS rules for HIS voice—minimalist crime fiction. **Don't follow rules blindly, but understand why they exist.**

**The Influence Paradox**

**Austin Kleon**: "Steal like an artist." Study writers you love, consciously imitate them as practice, but **your voice emerges from the unique combination of your influences plus your own experience**.

No one else has read exactly what you've read or lived exactly what you've lived. Your voice is that irreproducible intersection.

**Style Emerges from Revision**

First drafts are often stylistically messy—getting the story down. **Voice crystallizes in revision** when you make deliberate choices about rhythm, word choice, and structure.

**Zadie Smith** says she rewrites her first chapters dozens of times to lock in the book's voice before proceeding.`,
      keyTakeaway: "Prose style emerges from sentence rhythm, precise word choice, syntax variety, and fresh imagery—voice is the unique combination of these choices.",
      actionItem: "Take a paragraph you wrote. Rewrite it as Hemingway (short sentences, simple words). Then as Faulkner (long, flowing). Notice how style changes meaning.",
      quiz: {
        question: "According to Mark Twain, what is the difference between the right word and the almost right word?",
        options: [
          "The difference between lightning and a lightning bug",
          "The difference between day and night",
          "The difference between a sentence and a paragraph",
          "The difference between poetry and prose"
        ],
        correct: 0,
        explanation: "Twain's famous quote emphasizes that precise word choice matters immensely—similar words are not interchangeable; the exact right word is transformative."
      }
    }
  },
  {
    id: "cw-008",
    title: "Revision: Where Writing Becomes Art",
    type: "challenge",
    duration: 13,
    xpReward: 100,
    content: {
      overview: "Master the revision process that transforms rough drafts into polished, publishable fiction.",
      mainContent: `## Writing is Rewriting

**Ernest Hemingway** rewrote the ending of *A Farewell to Arms* 39 times. **Toni Morrison** revised *Beloved* obsessively for years. **Neil Gaiman** says, "For me, the finished novel is the same as the first draft, except I've gone through it two hundred times."

First drafts are **discovery**—finding the story, characters, and voice. Revision is **craft**—shaping that raw material into art.

**The Three Types of Revision**

**1. Macro Revision (Structure & Story)**

Does the plot work? Do characters arc? Is pacing right? Do scenes earn their place?

**Questions to ask**:
- Does the opening hook immediately?
- Does the midpoint shift the story direction?
- Does the ending feel earned?
- Do subplots tie thematically to the main plot?
- Are there scenes that don't change anything?

**Raymond Carver's** editor, **Gordon Lish**, would often cut final paragraphs from stories entirely—endings that over-explained what the story had already shown. The cuts made the stories legendary.

**2. Meso Revision (Scene & Language)**

Scene by scene, does each one have goal-conflict-disaster? Is the prose clear? Are descriptions vivid?

**Questions to ask**:
- Does each scene start late and end early?
- Is dialogue sharp and subtext-rich?
- Are descriptions specific rather than generic?
- Do characters sound distinct from each other?
- Am I showing or telling?

**3. Micro Revision (Sentence & Word)**

Line-level polish. Word choice, rhythm, eliminating filter words, killing darlings.

**Questions to ask**:
- Can this sentence be tighter?
- Is every word necessary?
- Does the rhythm feel right read aloud?
- Are there clichés or weak verbs?
- Have I eliminated filter words (saw, felt, heard, thought)?

> "Kill your darlings, kill your darlings, even when it breaks your egocentric little scribbler's heart, kill your darlings." — Stephen King

**The Cold Read Method**

After finishing your draft, **wait at least two weeks** before revising. Distance lets you read with fresh eyes as if you didn't write it.

**Kurt Vonnegut** would put manuscripts in a drawer for months. When he returned, he could see what worked and what didn't without ego attachment.

**Read Aloud**

This is **the most powerful revision technique**. Clunky sentences reveal themselves. Pacing issues become obvious. If you stumble while reading, the reader will too.

**Toni Morrison** said she revised until the prose had the right **sound**—rhythm and musicality mattered as much as meaning.

**Common Things to Cut**

**Throat-Clearing**: Unnecessary setup before the real story starts
**Redundancy**: Saying the same thing twice in different words
**Filter Words**: "She saw the door open" → "The door opened"
**Adverbs**: "She said angrily" → show the anger through action
**Clichés**: "Quiet as a mouse," "busy as a bee"
**Exposition**: Backstory that stops forward motion

**The Beta Reader Test**

Give your revised draft to **trusted readers** (not just supportive friends—people who will tell the truth).

**Questions for them**:
- Where did you lose interest?
- Which characters felt real? Which didn't?
- What confused you?
- What did you want more of?

**Don't argue with their reactions**. If they're confused, something isn't clear enough, even if it makes sense to you.

**The Professional Standard**

**Traditional publishing** expects: zero typos, polished prose, tight structure. This requires **multiple revision passes**.

**Self-publishing** gives you control but demands the same standard if you want readers to take you seriously.

**George Saunders** revises a single short story hundreds of times, printing fresh copies to see it with new eyes each time. His stories win awards because **every word earns its place**.

**When to Stop Revising**

There's a point where you're no longer improving the work, just changing it. **Perfectionism is the enemy of completion**.

**Natalie Goldberg**: "You don't have to be perfect to be published. You have to be done."

Ship the work. Start the next one. Your craft improves through volume, not infinite polishing of a single piece.`,
      keyTakeaway: "Revision transforms drafts into art through three levels—macro (structure), meso (scenes), and micro (sentences)—with cold reads and beta feedback.",
      actionItem: "Take something you wrote a month ago. Read it aloud with fresh eyes. Mark three macro issues, three meso issues, and ten micro issues to revise.",
      quiz: {
        question: "Why did Stephen King say you must 'kill your darlings' in revision?",
        options: [
          "You must cut beloved but unnecessary passages that don't serve the story, even when it hurts",
          "You should eliminate all the characters readers love for shock value",
          "Writers should avoid emotional attachment to their work entirely",
          "The most beautiful prose is always the first thing that should be deleted"
        ],
        correct: 0,
        explanation: "King's famous advice means cutting passages you're personally attached to if they don't serve the story—loving a sentence isn't enough reason to keep it."
      }
    }
  }
];
