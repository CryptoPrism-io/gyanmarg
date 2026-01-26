import type { PathwayLesson } from '@/types';

/**
 * Advanced FBI Negotiation Tactics - Level 4
 * Deep dive into Chris Voss's "Never Split the Difference" techniques
 * Plus advanced psychological tactics for high-stakes negotiations
 */
export const fbiFAdvancedNegotiationLessons: PathwayLesson[] = [
  // SECTION 1: Advanced FBI Techniques (Lessons 1-5)
  {
    id: 'neg-fbi-001',
    title: 'The Accusation Audit',
    type: 'concept',
    duration: 12,
    xpReward: 120,
    content: {
      overview: 'Defuse negativity before it derails your negotiation by listing every terrible thing they could say about you.',
      mainContent: `
## The Accusation Audit: Preemptive Emotional Defusing

Chris Voss discovered that **negative dynamics don't disappear if you ignore them** - they fester and explode at the worst moment.

### What is an Accusation Audit?

An accusation audit is a list of every negative thing the other party might think or feel about you, delivered upfront before they can voice it.

### Why It Works

**The Psychology:**
- When you name their fears first, you diminish their power
- It shows self-awareness and empathy
- It prevents them from building emotional walls
- It creates trust through vulnerability

**The Neuroscience:**
- Labeling negative emotions activates the prefrontal cortex
- This reduces amygdala (fear center) activity
- The brain can't be in attack mode and rational mode simultaneously

### The Accusation Audit Formula

**Step 1: List Their Likely Accusations**
Before any negotiation, write down:
- What might they think is wrong with you/your offer?
- What are their worst-case fears?
- What negative experiences might they reference?

**Step 2: Lead With It**
Open with: "You're probably thinking..."
- "You're probably thinking I'm going to lowball you"
- "You might feel like I've been avoiding this conversation"
- "I know this seems like we're trying to take advantage"

**Step 3: Wait**
Let them respond. Often they'll say:
- "No, I wasn't thinking that at all"
- "Well, kind of, but I appreciate you saying it"
- "That's right, but hearing you acknowledge it helps"

### Real Examples

**Job Negotiation:**
"I know you've talked to a lot of candidates, and some probably have more traditional backgrounds. You might think I'm underqualified or that I'll need too much training..."

**Asking for a Raise:**
"I know you might be thinking 'here we go again' or that I'm not being realistic about our budget situation..."

**Business Partnership:**
"You're probably skeptical. A lot of people have approached you with partnership ideas that didn't work out. You might think this is just another one of those..."

### When to Use It

- Before difficult conversations
- When there's history of conflict
- When asking for something significant
- When you know they have objections
- After you've made a mistake

### The Key Insight

**By voicing their fears first, you take away their ammunition.** They can't attack you with accusations you've already acknowledged.
      `,
      keyTakeaway: 'List every negative thing they might think about you and voice it first. This defuses negativity and builds trust through demonstrated self-awareness.',
      actionItem: 'Before your next difficult conversation, write an accusation audit of 5-10 things the other person might be thinking negatively about you or your position.',
      quiz: {
        question: 'Why does leading with an accusation audit work psychologically?',
        options: [
          'It confuses the other party',
          'Labeling negative emotions reduces amygdala activity and defuses fear',
          'It shows you are smarter than them',
          'It wastes their time preparing objections',
        ],
        correct: 1,
        explanation: 'When you label negative emotions, it activates the rational prefrontal cortex and reduces fear-based amygdala responses, making the other party more receptive.',
      },
    },
  },
  {
    id: 'neg-fbi-002',
    title: 'The Late Night FM DJ Voice',
    type: 'concept',
    duration: 10,
    xpReward: 100,
    content: {
      overview: 'Master the vocal technique that calms anxiety and creates rapport instantly.',
      mainContent: `
## The Late Night FM DJ Voice

Chris Voss describes this as one of the most powerful tools in a negotiator's arsenal - yet it's entirely non-verbal.

### What Is It?

The Late Night FM DJ Voice is:
- **Slow** - Take your time
- **Downward inflecting** - Statements go down at the end
- **Calm** - Even when discussing difficult topics
- **Deep** - Use your diaphragm, not your throat
- **Soothing** - Think relaxing, not aggressive

### The Three Voice Types

**1. The Analyst Voice (Default)**
- Soft, measured
- Slightly downward inflecting
- Conveys control and calm
- Use 80% of the time

**2. The Positive/Playful Voice**
- Upbeat, encouraging
- Creates rapport
- Use for building relationships
- Includes genuine smiles (audible in voice)

**3. The Assertive Voice (Rare)**
- Direct, firm
- Use sparingly - only when necessary
- Creates pushback if overused
- Reserved for absolute boundaries

### Why the DJ Voice Works

**Mirror Neurons:**
When you speak calmly, others unconsciously mirror that calmness. You literally regulate their nervous system.

**Authority Signals:**
Slow, deep voices are associated with:
- Confidence
- Competence
- Trustworthiness
- Leadership

**De-escalation:**
In hostage situations, the DJ voice:
- Lowers heart rates
- Reduces aggression
- Creates space for rational thought

### How to Develop It

**Exercise 1: Record Yourself**
- Record a negotiation practice
- Listen back for speed and pitch
- Most people speak faster than they think

**Exercise 2: Breathe First**
- Before speaking, take one deep breath
- This naturally slows and deepens your voice
- Creates a pause that commands attention

**Exercise 3: Smile While Speaking**
- A genuine smile changes your voice tone
- People can "hear" a smile
- Creates warmth in the DJ voice

### The Application

**High Emotion Situations:**
When someone is upset, match your calm to their chaos. The calmer you remain, the more they'll settle.

**Delivering Bad News:**
"I understand this isn't what you wanted to hear..." (DJ voice)
vs.
"Look, this is the situation..." (assertive voice)

The DJ voice makes difficult messages easier to receive.
      `,
      keyTakeaway: 'Your voice tone can calm or escalate any situation. The late night FM DJ voice - slow, deep, downward inflecting - creates calm and trust.',
      actionItem: 'Record yourself having a conversation this week. Listen back and notice your pace and pitch. Practice slowing down and deepening your voice.',
    },
  },
  {
    id: 'neg-fbi-003',
    title: 'No-Oriented Questions',
    type: 'concept',
    duration: 12,
    xpReward: 120,
    content: {
      overview: 'Flip the script: Instead of pushing for "yes," make it easy to say "no" - and watch resistance melt away.',
      mainContent: `
## The Power of "No"

Chris Voss discovered something counterintuitive: **People feel safer saying "no" than "yes."**

### Why "Yes" Creates Resistance

**The Yes Trap:**
"Can I have just a moment of your time?"
"Would you be open to hearing about this opportunity?"

These create:
- Defensiveness ("What's the catch?")
- Commitment anxiety
- The feeling of being trapped

**Think about it:**
How many times have you said "yes" to something you didn't want, just to get rid of someone?

### Why "No" Creates Safety

When you ask a question that allows "no," you:
- Give them control
- Remove pressure
- Create psychological safety
- Invite honest responses

**"No" is:**
- Protecting
- Boundary-setting
- Clarifying
- Power-giving

### The No-Oriented Question Framework

**Instead of:** "Is this a good time?"
**Say:** "Is now a bad time to talk?"

**Instead of:** "Would you like to proceed?"
**Say:** "Have you given up on this project?"

**Instead of:** "Can you do this by Friday?"
**Say:** "Would it be ridiculous to ask for this by Friday?"

### The Magic Questions

**"Have you given up on this project?"**
If they say "no" - they've just committed to continuing.

**"Is it a ridiculous idea to..."**
If they say "no" - they've just validated your idea.

**"Would it be out of the question to..."**
If they say "no" - they've just opened the door.

### Real Applications

**Following Up:**
"Have you given up on finding a new solution?" (Not: "Are you still interested?")

**Negotiating Deadlines:**
"Is it impossible to get this done by Monday?" (Not: "Can you do it by Monday?")

**Requesting Meetings:**
"Would it be a bad idea to spend 15 minutes exploring this?" (Not: "Do you have time for a meeting?")

**Re-engaging Cold Leads:**
"Have you given up on X?" works remarkably well in emails

### The Psychology

**"No" answers:**
- Feel empowering to the speaker
- Don't create commitment anxiety
- Are more honest
- Lead to better conversations

**The secret:** Every "no" you get is actually a "yes" in disguise.
      `,
      keyTakeaway: 'Frame questions to invite "no" instead of "yes." People feel protected and empowered saying "no," which paradoxically opens them to your proposal.',
      actionItem: 'Rewrite three of your common requests as no-oriented questions. Notice how the dynamic changes.',
      quiz: {
        question: 'Why does Chris Voss recommend asking "Have you given up on this project?" instead of "Are you still interested?"',
        options: [
          'It\'s more aggressive',
          '"No" makes people feel safe and in control, leading to more honest engagement',
          'It confuses them into agreeing',
          'It\'s a manipulation technique',
        ],
        correct: 1,
        explanation: 'Saying "no" feels protective and empowering. When they say "no, I haven\'t given up," they\'ve committed to continuing the conversation.',
      },
    },
  },
  {
    id: 'neg-fbi-004',
    title: 'The Ackerman Bargaining Model',
    type: 'concept',
    duration: 15,
    xpReward: 150,
    content: {
      overview: 'The FBI\'s systematic approach to price negotiation that produces optimal outcomes every time.',
      mainContent: `
## The Ackerman Bargaining Model

Named after Mike Ackerman, a former CIA operative, this is the FBI's systematic approach to any price negotiation.

### The 6-Step Process

**Step 1: Set Your Target Price**
Determine your ideal outcome BEFORE the negotiation.

**Step 2: Set Your First Offer at 65%**
Start at 65% of your target price.
- Target: $100,000
- First offer: $65,000

**Step 3: Calculate Three Raises**
Plan exactly three increases:
- 1st raise: to 85% ($85,000)
- 2nd raise: to 95% ($95,000)
- 3rd raise: to 100% ($100,000)

**Step 4: Use Empathy Between Offers**
Before each raise, use labels and calibrated questions:
- "It seems like this is important to you..."
- "What would it take to make this work?"

**Step 5: Use Precise Numbers**
Your final offer should be odd and precise:
- Not $100,000 but $97,653
- Precise numbers signal calculation and credibility

**Step 6: Throw in a Non-Monetary Item**
At the end, add something of low cost to you:
- "I can also include the extended warranty..."
- This signals you're at your limit

### Why This Works

**Decreasing Increments:**
- 20% jump, then 10%, then 5%
- Signals you're reaching your limit
- Each smaller increment shows increasing resistance

**The Psychology:**
- 65% seems like a large gap to bridge (creates negotiation room)
- Precise numbers seem researched, not arbitrary
- The non-monetary item indicates you can't go higher on price

### Example: Buying a Used Car

**Listed at:** $15,000
**Your target:** $12,000

1. First offer: $7,800 (65% of target)
2. "It seems like you've priced it fairly for the market..."
3. Second offer: $10,200 (85% of target)
4. "What would make this work for both of us?"
5. Third offer: $11,400 (95% of target)
6. Final offer: $11,873 (precise number near target)
7. "And I can pick it up today, save you the hassle..."

### When to Use

- Buying/selling anything
- Salary negotiations (reverse the percentages)
- Contract negotiations
- Freelance pricing discussions
- Real estate transactions

### Important Notes

**Patience is key:** Don't rush through the steps
**Empathy between offers:** Not just number tennis
**Hold your final number:** The precise number signals finality
      `,
      keyTakeaway: 'The Ackerman model provides a systematic approach: offer at 65%, raise in decreasing increments (85%, 95%, 100%), use precise final numbers, and add a non-monetary item.',
      actionItem: 'Plan your next price negotiation using the Ackerman model. Write out your target, your three calculated offers, and what non-monetary items you could include.',
      quiz: {
        question: 'In the Ackerman model, why should your final offer be a precise number like $74,853 instead of $75,000?',
        options: [
          'It\'s easier to calculate',
          'It confuses the other party',
          'Precise numbers signal careful calculation and credibility, suggesting a firm limit',
          'Banks prefer odd numbers',
        ],
        correct: 2,
        explanation: 'Precise numbers signal that you\'ve carefully calculated what you can afford. Round numbers seem arbitrary and negotiable.',
      },
    },
  },
  {
    id: 'neg-fbi-005',
    title: 'Finding Black Swans',
    type: 'concept',
    duration: 14,
    xpReward: 140,
    content: {
      overview: 'Discover the unknown unknowns that transform negotiations - the hidden information that changes everything.',
      mainContent: `
## Black Swans: The Hidden Game Changers

Before 17th century Europeans saw black swans in Australia, they believed all swans were white. A "Black Swan" is **information so unexpected it changes everything.**

### What Are Negotiation Black Swans?

Black Swans are pieces of information that:
- Neither party realizes are important
- Completely change the negotiation dynamic
- Create unexpected leverage or solutions
- Are discovered, not assumed

### Types of Black Swans

**1. They Have Hidden Constraints**
- Budget limitations you didn't know about
- Deadlines pressure from their boss
- Regulatory requirements
- Personal circumstances affecting decisions

**2. They Have Hidden Desires**
- Goals beyond the obvious
- Emotional needs (respect, recognition)
- Legacy or reputation concerns
- What success really means to them

**3. They Have Hidden Knowledge**
- Information that changes valuation
- Market intelligence you lack
- Insider information about timing
- Relationships that affect the deal

### How to Find Black Swans

**Listen Intensively:**
- What are they NOT saying?
- What topics do they avoid?
- What emotional reactions seem disproportionate?
- What questions do they dodge?

**Ask Discovery Questions:**
- "What would it take for this to be a complete win for you?"
- "What concerns do you have that we haven't addressed?"
- "What does your team think about this?"
- "If you could wave a magic wand, what would change?"

**Look for Incongruities:**
- Their position doesn't match their behavior
- The numbers don't add up
- They're acting against their stated interest
- Their deadline seems arbitrary

### Black Swan Examples

**Example 1: The Salary Negotiation**
You're negotiating a job offer. The salary seems fixed.
Black Swan: The company is about to get acquired, and they need key people locked in. Suddenly, equity and retention bonuses are possible.

**Example 2: The Home Purchase**
The seller won't budge on price.
Black Swan: They're going through a divorce and need to close quickly. Now timing becomes leverage.

**Example 3: The Business Deal**
The vendor seems rigid on terms.
Black Swan: They lost a major client last month and desperately need revenue. Their position is weaker than they appear.

### The Black Swan Mindset

**Assume you're missing something.**
- You don't know what you don't know
- Stay curious throughout
- Never think you have the full picture
- The breakthrough often comes late

**Create conditions for discovery:**
- Build rapport (people share with those they trust)
- Ask open-ended questions
- Listen more than you talk
- Meet face-to-face when possible
      `,
      keyTakeaway: 'Black Swans are unknown pieces of information that transform negotiations. Find them by listening intensively, asking discovery questions, and looking for incongruities.',
      actionItem: 'In your next negotiation, identify 3 potential Black Swans - hidden constraints, desires, or knowledge the other party might have. Design questions to uncover them.',
    },
  },

  // SECTION 2: Psychological Tactics (Lessons 6-8)
  {
    id: 'neg-fbi-006',
    title: 'Bending Reality with Loss Aversion',
    type: 'concept',
    duration: 12,
    xpReward: 120,
    content: {
      overview: 'Leverage the most powerful force in decision-making: people fear loss twice as much as they value gain.',
      mainContent: `
## Bending Reality: Loss Aversion in Negotiation

Nobel Prize winner Daniel Kahneman discovered that **losses are felt 2-2.5x more intensely than equivalent gains.** Chris Voss calls this "bending reality."

### Understanding Loss Aversion

**The Math:**
Losing $100 feels as bad as gaining $200-250 feels good.

**The Implication:**
Frame your proposals in terms of what they'll LOSE by not acting, not what they'll GAIN by acting.

### Framing Techniques

**Don't Say:** "If you sign up today, you'll get a 20% discount."
**Do Say:** "After today, this price goes up 20%."

**Don't Say:** "This investment could return 15%."
**Do Say:** "Right now, your money is losing value to inflation."

**Don't Say:** "You could gain market share."
**Do Say:** "Your competitors are already doing this. You could lose your position."

### The Status Quo Bias

People prefer to keep what they have rather than risk it for something potentially better.

**Use This:**
Once they've mentally taken ownership of something (a proposal, a timeline, a price), they'll fight to keep it.

**Technique - Trial Close:**
"Let's say we could make this work at $X. Would that solve your problem?"

Once they imagine the solution, taking it away creates loss.

### Anchoring

**The first number mentioned becomes the anchor.** All subsequent numbers are judged relative to it.

**High Anchor (Selling):**
Start high. Even if they negotiate down, the anchor pulls the final number up.

**Low Anchor (Buying):**
Start low. Even if you negotiate up, you've pulled the final number down.

**Extreme Anchor:**
Sometimes an extreme anchor reframes the entire negotiation:
"Our premium service is $100,000. But let me show you our standard option at $30,000..."

### Deadline Pressure

Deadlines are often artificial but powerfully motivating because of loss aversion.

**Techniques:**
- "This offer is only available until Friday"
- "We have another interested party"
- "Our current pricing model changes next month"

**But be careful:** Fake deadlines destroy trust. Only use real ones.

### Creating Fear of Missing Out (FOMO)

- "We only have three spots left in this cohort"
- "I'm not sure this opportunity will come around again"
- "Your competitors have already signed on"

**The key:** Always be truthful. Loss aversion is powerful; abuse destroys credibility.
      `,
      keyTakeaway: 'People fear loss 2x more than they value equivalent gains. Frame your proposals around what they\'ll lose by not acting, not what they\'ll gain.',
      actionItem: 'Rewrite your next pitch or proposal to emphasize what the prospect will lose by not acting, rather than what they\'ll gain.',
      quiz: {
        question: 'According to loss aversion research, losing $100 feels emotionally equivalent to:',
        options: [
          'Gaining $100',
          'Gaining $50',
          'Gaining $200-250',
          'Gaining $500',
        ],
        correct: 2,
        explanation: 'Losses are felt 2-2.5x more intensely than equivalent gains. This is why framing around loss is so powerful.',
      },
    },
  },
  {
    id: 'neg-fbi-007',
    title: 'Handling Aggressive Negotiators',
    type: 'concept',
    duration: 14,
    xpReward: 140,
    content: {
      overview: 'Stay calm and in control when facing hardball tactics, anger, and intimidation.',
      mainContent: `
## Handling Aggressive Negotiators

Some negotiators use aggression as a tactic. Here's how to neutralize it without escalating.

### Recognizing Aggressive Tactics

**Intimidation:**
- Raised voice, aggressive tone
- Threats ("Take it or leave it")
- Personal attacks
- Physical dominance (standing, invading space)

**Good Cop/Bad Cop:**
- One person is unreasonable
- Another seems sympathetic
- Goal: make you grateful for any deal

**Artificial Deadlines:**
- "I need an answer NOW"
- Creates panic, limits thinking
- Usually fabricated

**Stonewalling:**
- Refusing to engage
- "That's just our policy"
- Designed to frustrate you into concessions

### The Core Principle: Never Meet Aggression with Aggression

Responding to aggression with aggression creates:
- Escalation spirals
- Destroyed relationships
- No deal or bad deals
- Regret

### The FBI Response Framework

**1. Stay Calm (DJ Voice)**
Lower and slow your voice. Their nervous system will mirror yours.

**2. Label the Emotion**
"It seems like you're frustrated with the pace of this..."
"It sounds like you're under a lot of pressure..."

**3. Ask Calibrated Questions**
"How am I supposed to do that?"
"What would you like me to do?"

This forces them to think rather than react.

**4. Use Strategic Silence**
After they make an aggressive demand, stay silent. Count to 10 in your head. Let them fill the space.

**5. Reframe**
"It sounds like we both want to find a solution that works..."

### Specific Counter-Tactics

**To "Take it or leave it":**
"It seems like this is really important to you. Help me understand what's driving this..."

**To Personal Attacks:**
"Wow. It seems like there's something more going on here..."
Then silence. Don't defend, don't attack back.

**To Artificial Deadlines:**
"What happens if we don't reach agreement today?"
(Forces them to reveal if deadline is real)

**To Stonewalling:**
"It seems like your hands are tied. Who else might be able to help us here?"

### When to Walk Away

Sometimes the best negotiation tactic is leaving:
- When they refuse to negotiate in good faith
- When the deal would be worse than your BATNA
- When you're being abused or disrespected
- When your values are being compromised

**Walk away script:**
"It seems like we're not able to reach an agreement that works for both of us right now. I appreciate your time, and if circumstances change, I'd welcome another conversation."
      `,
      keyTakeaway: 'Never meet aggression with aggression. Use the DJ voice, label their emotions, ask calibrated questions, and leverage strategic silence.',
      actionItem: 'Practice responding to aggressive statements with labels and calibrated questions. Write out 5 common aggressive tactics and your calm responses.',
    },
  },
  {
    id: 'neg-fbi-008',
    title: 'Guaranteeing Execution',
    type: 'concept',
    duration: 12,
    xpReward: 120,
    content: {
      overview: 'A "yes" is nothing without "how." Learn to ensure deals actually get implemented.',
      mainContent: `
## Guaranteeing Execution: "Yes" is Nothing Without "How"

Chris Voss emphasizes: **Getting to "yes" is only half the battle.** Without implementation, your agreement is worthless.

### The Problem with "Yes"

Three types of "Yes":
1. **Counterfeit Yes** - Saying yes to get rid of you
2. **Confirmation Yes** - Simple acknowledgment, no commitment
3. **Commitment Yes** - Actual agreement to act

Most "yes" responses are NOT commitment.

### The Implementation Questions

After any agreement, ask:

**"How will we know we're on track?"**
- Creates measurable milestones
- Both parties agree on success metrics
- Early warning for problems

**"What could derail this?"**
- Surfaces hidden concerns
- Identifies potential obstacles
- Creates contingency plans

**"How will you handle X if it happens?"**
- Tests their thinking
- Reveals if they've really committed
- Creates action plans for problems

### The Calibrated Question Sequence

**Step 1: Summarize the Agreement**
"So we've agreed that you'll deliver X by Y for Z price. Is that right?"

**Step 2: Ask About Implementation**
"How are you going to make this happen?"

**Step 3: Identify Obstacles**
"What's the biggest challenge you see in making this work?"

**Step 4: Name the Team**
"Who else needs to approve this on your end?"

**Step 5: Set Check-ins**
"When should we touch base to make sure we're on track?"

### Spotting Fake Commitment

**Red Flags:**
- Vague timelines ("soon," "ASAP")
- No specifics on who does what
- Reluctance to commit to check-ins
- They keep saying "yeah" or "sure" (too easy)

**The Rule of Three:**
Get them to agree to the same thing three different ways:
1. The initial agreement
2. Summarize and confirm
3. Ask how they'll implement

If they won't commit three times, they're not committed.

### Written Confirmation

For important agreements:
- Send a summary email
- Ask them to confirm receipt and accuracy
- This creates psychological and practical commitment

**Email Template:**
"Thank you for our conversation. Just to confirm, we agreed that:
[List specifics]
Please let me know if I've captured this correctly."

### The 7-38-55 Rule Follow-up

- 7% of message is words
- 38% is tone of voice
- 55% is body language

**For important deals:** Follow up in person or video call. Emails miss 93% of the message.
      `,
      keyTakeaway: '"Yes" is meaningless without implementation. Use calibrated questions to surface obstacles, identify stakeholders, and create accountability for execution.',
      actionItem: 'After your next agreement, ask the five implementation questions. Notice how it changes the quality of commitment you receive.',
      quiz: {
        question: 'What is the "Rule of Three" in guaranteeing execution?',
        options: [
          'Get the agreement signed by three people',
          'Wait three days before following up',
          'Get them to agree to the same thing three different ways to test real commitment',
          'Send three reminder emails',
        ],
        correct: 2,
        explanation: 'If someone won\'t commit to the same thing three different ways (initial agreement, summary confirmation, implementation details), they likely aren\'t truly committed.',
      },
    },
  },

  // SECTION 3: Advanced Applications (Lessons 9-12)
  {
    id: 'neg-fbi-009',
    title: 'Email and Text Negotiation',
    type: 'concept',
    duration: 12,
    xpReward: 120,
    content: {
      overview: 'Apply FBI techniques to digital communication where tone and body language are absent.',
      mainContent: `
## Email and Text Negotiation: FBI Tactics Go Digital

Without tone and body language, email is a minefield. Here's how to apply Voss's techniques digitally.

### The Challenges of Written Negotiation

**Missing:**
- Tone of voice (38% of communication)
- Body language (55% of communication)
- Real-time feedback
- Ability to read reactions

**Result:**
- Messages are misinterpreted
- Emotions escalate quickly
- Negotiations stall
- Relationships suffer

### Email-Adapted FBI Techniques

**1. The Email Accusation Audit**
Start emails with preemptive acknowledgment:

"I know this might seem forward, and you're probably busy with a hundred other priorities..."

"I realize you've probably received a lot of pitches like this..."

**2. No-Oriented Questions in Email**
The most effective email technique:

"Have you given up on [project/goal]?"

This simple question has remarkably high response rates because:
- It's easy to answer "no"
- It re-engages dormant conversations
- It doesn't feel salesy

**3. Labeling in Writing**
Acknowledge what they might be feeling:

"It seems like timing has been challenging..."
"It sounds like this might not be the right fit right now..."

**4. The 7-Word Revival Email**
When someone goes dark:
"Have you given up on this project?"
or
"Should I close your file?"

Short, no-oriented, high response rate.

### Email Structure That Works

**Subject Lines:**
- Specific, not clickbait
- Reference previous conversation if any
- Create curiosity or urgency

**Opening:**
- Acknowledgment/accusation audit
- Reference context

**Body:**
- ONE clear point
- Keep it short (under 5 sentences ideal)
- Make it easy to respond

**Close:**
- No-oriented question
- Clear next step
- Gratitude

### What to Avoid

**Don't:**
- Write long paragraphs
- Include multiple asks
- Use all caps or excessive punctuation
- Send when emotional
- Negotiate complex terms via email

**Do:**
- Move significant negotiations to calls
- Use email for confirmations
- Keep emotional topics for voice/face
- Read out loud before sending
- Wait 24 hours on sensitive emails

### The Phone Bridge

When emails stall:
"Would you be opposed to a brief call this week?"

Move important discussions off email as quickly as possible.
      `,
      keyTakeaway: 'Email strips away tone and body language. Use short messages, no-oriented questions, written labels, and move complex negotiations to calls.',
      actionItem: 'Review your last 5 negotiation emails. Rewrite one using no-oriented questions and an accusation audit.',
    },
  },
  {
    id: 'neg-fbi-010',
    title: 'Reading People: Behavioral Patterns',
    type: 'concept',
    duration: 14,
    xpReward: 140,
    content: {
      overview: 'Identify negotiator types and adapt your approach to their psychology.',
      mainContent: `
## Reading People: The Three Negotiator Types

Chris Voss identifies three primary negotiator types. Understanding which you face allows you to adapt your approach.

### The Three Types

**1. Analyst**
- Data-driven, methodical
- Dislikes surprises
- Needs time to think
- Skeptical of emotional appeals
- Wants proof and details

**Signs:**
- Asks lots of questions
- Takes notes
- References data and precedent
- Slow, deliberate speech
- Uncomfortable with silence (fills it with analysis)

**How to Handle:**
- Come prepared with data
- Give them time to process
- Don't rush decisions
- Use email follow-ups with details
- Be precise and accurate

**2. Accommodator**
- Relationship-focused
- Wants to be liked
- Avoids conflict
- May agree too easily
- Values the relationship over the deal

**Signs:**
- Friendly, warm demeanor
- Asks personal questions
- Quick to agree
- Uncomfortable with silence (fills it with talk)
- Says yes, then doesn't follow through

**How to Handle:**
- Build rapport before business
- Ask how they REALLY feel
- Use calibrated questions to surface concerns
- Don't mistake friendliness for commitment
- Pin down specifics kindly

**3. Assertive**
- Results-focused
- Time-conscious
- Direct communication
- Wants to win
- May steamroll

**Signs:**
- Gets to the point quickly
- Makes demands
- Uncomfortable with silence (uses it as pressure)
- Talks more than listens
- Confident, sometimes aggressive

**How to Handle:**
- Be direct and efficient
- Let them talk first
- Use mirrors to slow them down
- Stand your ground calmly
- Respect their time

### Identifying Your Own Type

Most people are one dominant type:
- **Analysts** think they're being reasonable
- **Accommodators** think they're being friendly
- **Assertives** think they're being efficient

**Your blind spots:**
- Analysts seem cold to others
- Accommodators seem weak to others
- Assertives seem aggressive to others

### Adapting Your Style

**If You're an Analyst:**
- With Analysts: Great natural fit
- With Accommodators: Warm up, build rapport
- With Assertives: Get to the point faster

**If You're an Accommodator:**
- With Analysts: Bring data, be patient
- With Accommodators: Great fit, but push for commitment
- With Assertives: Be more direct, don't take brusqueness personally

**If You're an Assertive:**
- With Analysts: Slow down, provide proof
- With Accommodators: Build relationship, soften approach
- With Assertives: Prepare for battle, stay calm
      `,
      keyTakeaway: 'Identify if you\'re facing an Analyst (data-driven), Accommodator (relationship-focused), or Assertive (results-focused), then adapt your approach accordingly.',
      actionItem: 'Identify your own negotiator type and your blind spots. Think of someone you negotiate with regularly - what type are they?',
      quiz: {
        question: 'If someone agrees quickly to everything but doesn\'t follow through, they\'re likely a(n):',
        options: [
          'Analyst',
          'Accommodator',
          'Assertive',
          'Bad faith negotiator',
        ],
        correct: 1,
        explanation: 'Accommodators value relationships and dislike conflict, so they often agree to avoid friction, even when they can\'t or won\'t deliver. Use calibrated questions to surface their real concerns.',
      },
    },
  },
  {
    id: 'neg-fbi-011',
    title: 'The Negotiation One-Sheet',
    type: 'exercise',
    duration: 15,
    xpReward: 150,
    content: {
      overview: 'Build your comprehensive preparation document that FBI negotiators create before every high-stakes conversation.',
      mainContent: `
## The Negotiation One-Sheet

FBI hostage negotiators never enter a negotiation without preparation. The One-Sheet is your battle plan.

### Section 1: The Goal

**Define Your Outcome:**
- What is the best possible outcome?
- What is an acceptable outcome?
- What is your walkaway point?
- What is your BATNA?

**Write it as a statement:**
"My goal is to [specific outcome] while maintaining [relationship/values]."

### Section 2: Understanding Them

**Their Situation:**
- What do they want?
- What are their constraints?
- What pressure are they under?
- What does success look like for them?

**Their Emotional State:**
- What might they be feeling?
- What fears do they have?
- What would make them feel understood?

**Potential Black Swans:**
- What don't I know that might change everything?
- What questions could reveal hidden information?

### Section 3: The Accusation Audit

List 5-10 negative things they might think:
1. "You probably think..."
2. "I know it might seem like..."
3. "You might be wondering if..."

### Section 4: Calibrated Questions

Prepare 5 calibrated questions:
1. "How am I supposed to do that?"
2. "What would it take to make this work?"
3. "How would you like to proceed?"
4. "What's the biggest challenge here?"
5. "How can I help?"

### Section 5: Labels

Prepare labels for likely emotions:
- "It seems like..."
- "It sounds like..."
- "It looks like..."

### Section 6: Non-Cash Items

What can you offer that has low cost to you but high value to them?
- Flexibility on timing
- Additional services
- Introductions
- Future commitments
- Recognition

### Section 7: Ackerman Plan (if price negotiation)

- Target price:
- First offer (65%):
- Second offer (85%):
- Third offer (95%):
- Final offer (precise number):
- Non-monetary item to include:

### Using the One-Sheet

**Before the negotiation:**
- Review the entire sheet
- Internalize, don't memorize
- Have it nearby for reference

**During the negotiation:**
- Stick to your calibrated questions
- Use your prepared labels
- Remember your accusation audit

**After the negotiation:**
- Review what worked
- Note new information discovered
- Update for next time
      `,
      keyTakeaway: 'Prepare a one-sheet before any important negotiation covering your goal, their situation, accusation audit, calibrated questions, and non-cash items.',
      actionItem: 'Create a one-sheet for an upcoming negotiation. Use all seven sections and keep it to one page.',
    },
  },
  {
    id: 'neg-fbi-012',
    title: 'The Complete FBI Negotiation Toolkit',
    type: 'concept',
    duration: 12,
    xpReward: 150,
    content: {
      overview: 'Integrate all FBI techniques into a cohesive system you can apply to any negotiation.',
      mainContent: `
## The Complete FBI Negotiation Toolkit

Here's how all the techniques fit together in a complete negotiation system.

### Phase 1: Preparation

**1. Create Your One-Sheet**
- Goals and walkaway point
- Understanding of their position
- Accusation audit
- Calibrated questions
- Labels and Ackerman plan

**2. Research**
- Their background and history
- Industry context
- Potential Black Swans
- Their negotiator type

### Phase 2: Opening

**1. Build Rapport**
- Small talk (for Accommodators)
- Efficient greeting (for Assertives)
- Professional respect (for Analysts)

**2. Deliver Accusation Audit**
"Before we get started, I know you probably think..."

**3. Establish DJ Voice**
Slow, calm, downward inflecting throughout

### Phase 3: Discovery

**1. Let Them Talk**
Use mirrors to encourage elaboration:
"Tell me more..."
"[Last three words]?"

**2. Label Emotions**
"It seems like..."
"It sounds like..."

**3. Ask Calibrated Questions**
"How can I help?"
"What would it take to make this work?"

**4. Hunt for Black Swans**
Listen for incongruities and hidden information

**5. Get "That's Right"**
Summarize their position until they say "That's right"

### Phase 4: Bargaining

**1. Anchor Appropriately**
High if selling, low if buying

**2. Use Ackerman Model**
65% → 85% → 95% → precise number

**3. Deploy No-Oriented Questions**
"Would it be ridiculous to..."

**4. Leverage Loss Aversion**
Frame around what they'll lose by not acting

### Phase 5: Closing

**1. Summarize Agreement**
"So we've agreed that..."

**2. Guarantee Execution**
"How will we know we're on track?"
"What could derail this?"
"Who else needs to approve?"

**3. Get Triple Commitment**
Agreement, confirmation, implementation plan

### The Master Checklist

Before any negotiation:
- [ ] One-sheet prepared
- [ ] Accusation audit ready
- [ ] 5+ calibrated questions memorized
- [ ] Labels prepared
- [ ] Ackerman numbers calculated
- [ ] Black Swan questions ready
- [ ] BATNA clearly defined

### The Voss Philosophy

**"Negotiation is not an act of battle; it's a process of discovery."**

The goal is not to defeat the other side but to understand them so completely that you can find a solution that works for everyone.

**The best negotiators:**
- Listen more than they talk
- Ask more than they tell
- Seek to understand before being understood
- Create value rather than claim it
- Leave relationships intact

This isn't manipulation - it's deep human connection applied to problem-solving.
      `,
      keyTakeaway: 'The FBI system flows from preparation (one-sheet) through opening (accusation audit), discovery (mirrors, labels, calibrated questions), bargaining (Ackerman), to closing (execution guarantee).',
      actionItem: 'Map out your next significant negotiation using all five phases. Practice the flow until it becomes natural.',
      quiz: {
        question: 'What\'s the key moment you\'re listening for during the discovery phase?',
        options: [
          'When they say "yes"',
          'When they make a concession',
          'When they say "that\'s right"',
          'When they reveal their budget',
        ],
        correct: 2,
        explanation: '"That\'s right" means they feel fully understood - you\'ve broken through. It\'s different from "you\'re right" (which is dismissive) and indicates real rapport.',
      },
    },
  },
];
