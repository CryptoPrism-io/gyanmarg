import type { SpacedRepetitionCard } from '@/types';

/**
 * Flashcard Batch 10 - Communication & Persuasion
 *
 * 50 high-quality flashcards covering:
 * - Cialdini's Six Principles of Persuasion
 * - Effective Storytelling Techniques
 * - Active Listening Skills
 * - Nonverbal Communication
 * - Public Speaking Fundamentals
 * - Written Communication Clarity
 * - Handling Objections
 * - Building Rapport Quickly
 * - Asking Powerful Questions
 * - Framing and Reframing
 *
 * Sources: Influence (Cialdini), Never Split the Difference (Voss),
 * Made to Stick (Heath Brothers), Talk Like TED (Gallo), and others
 */

export const persuasionFlashcards: SpacedRepetitionCard[] = [
  // ============================================
  // CIALDINI'S SIX PRINCIPLES OF PERSUASION
  // ============================================
  {
    id: 'fc-pers-001',
    front: 'What are Cialdini\'s Six Principles of Persuasion?',
    back: '1. Reciprocity - We feel obligated to return favors\n2. Commitment & Consistency - We align actions with prior commitments\n3. Social Proof - We follow what others do\n4. Authority - We trust experts and credible sources\n5. Liking - We say yes to people we like\n6. Scarcity - We value what is rare or diminishing\n\nThese are psychological shortcuts that influence decision-making.',
    category: 'Negotiation',
    source: 'Influence - Robert Cialdini',
    pathwayId: 'negotiation',
    difficulty: 'beginner',
    tags: ['persuasion', 'cialdini', 'influence', 'psychology']
  },
  {
    id: 'fc-pers-002',
    front: 'How does the Reciprocity Principle work in persuasion?',
    back: 'Reciprocity triggers an automatic urge to repay what another person has given us. It works because:\n\n1. We feel indebted even for uninvited favors\n2. The initial gift can be smaller than what we return\n3. It operates subconsciously\n\nApplication: Give value first (information, help, samples) before making requests. The "gift" creates psychological pressure to reciprocate.',
    category: 'Negotiation',
    source: 'Influence - Robert Cialdini',
    pathwayId: 'negotiation',
    difficulty: 'intermediate',
    tags: ['persuasion', 'reciprocity', 'cialdini', 'influence']
  },
  {
    id: 'fc-pers-003',
    front: 'What is the Commitment and Consistency Principle?',
    back: 'Once we make a choice or take a stand, we experience internal pressure to behave consistently with that commitment.\n\nKey factors:\n- Written commitments are stronger than verbal\n- Public commitments are stronger than private\n- Commitments require effort are most binding\n\nApplication: Get small "yes" answers first. Ask for small initial commitments that align with your ultimate request (foot-in-the-door technique).',
    category: 'Negotiation',
    source: 'Influence - Robert Cialdini',
    pathwayId: 'negotiation',
    difficulty: 'intermediate',
    tags: ['persuasion', 'commitment', 'consistency', 'cialdini']
  },
  {
    id: 'fc-pers-004',
    front: 'How does Social Proof influence behavior?',
    back: 'We determine what is correct by observing what others are doing, especially when:\n\n1. We are uncertain about what to do\n2. We see people similar to ourselves\n3. Many people are doing it\n\nExamples: Testimonials, "bestseller" labels, showing "1000+ customers served"\n\nDark side: Pluralistic ignorance - when everyone assumes others know what is right, leading to inaction (bystander effect).',
    category: 'Negotiation',
    source: 'Influence - Robert Cialdini',
    pathwayId: 'negotiation',
    difficulty: 'intermediate',
    tags: ['persuasion', 'social-proof', 'cialdini', 'behavior']
  },
  {
    id: 'fc-pers-005',
    front: 'What makes Authority so powerful in persuasion?',
    back: 'We are trained from birth to comply with authority figures. Authority cues include:\n\n1. Titles (Dr., Professor, CEO)\n2. Clothing (uniforms, suits)\n3. Trappings (expensive cars, offices)\n\nTo ethically leverage: Establish expertise before persuading. Have others introduce your credentials. Display relevant certifications.\n\nDefense: Ask "Is this authority truly an expert?" and "Is this expert being truthful?"',
    category: 'Negotiation',
    source: 'Influence - Robert Cialdini',
    pathwayId: 'negotiation',
    difficulty: 'intermediate',
    tags: ['persuasion', 'authority', 'cialdini', 'credibility']
  },
  {
    id: 'fc-pers-006',
    front: 'What factors make us like someone (Liking Principle)?',
    back: 'Five key factors increase liking:\n\n1. Physical Attractiveness - "Halo effect" extends to other traits\n2. Similarity - We like people who are like us\n3. Compliments - We are suckers for flattery\n4. Contact & Cooperation - Familiarity breeds liking\n5. Association - We like messengers of good news\n\nApplication: Find genuine similarities, give sincere compliments, work together toward shared goals.',
    category: 'Negotiation',
    source: 'Influence - Robert Cialdini',
    pathwayId: 'negotiation',
    difficulty: 'intermediate',
    tags: ['persuasion', 'liking', 'rapport', 'cialdini']
  },
  {
    id: 'fc-pers-007',
    front: 'How does Scarcity drive decision-making?',
    back: 'Opportunities seem more valuable when they are less available. Scarcity works because:\n\n1. We hate losing freedom of choice (psychological reactance)\n2. We use availability as a shortcut for quality\n3. Competition for scarce resources intensifies desire\n\nMost powerful when: Something has recently become scarce (vs. always rare) and we compete with others for it.\n\nExample: "Only 3 left in stock" or "Offer ends midnight."',
    category: 'Negotiation',
    source: 'Influence - Robert Cialdini',
    pathwayId: 'negotiation',
    difficulty: 'intermediate',
    tags: ['persuasion', 'scarcity', 'cialdini', 'urgency']
  },
  {
    id: 'fc-pers-008',
    front: 'What is the "Door-in-the-Face" technique?',
    back: 'Start with a large request that will likely be refused, then follow with a smaller, more reasonable request (your actual target).\n\nWhy it works:\n1. Reciprocal concessions - You "gave" by reducing your request\n2. Perceptual contrast - The second request seems smaller by comparison\n\nExample: "Can you volunteer 2 hours weekly for 2 years?" (No) "How about helping at one event?" (Yes)\n\nRequirements: Requests must be from the same person and close in time.',
    category: 'Negotiation',
    source: 'Influence - Robert Cialdini',
    pathwayId: 'negotiation',
    difficulty: 'advanced',
    tags: ['persuasion', 'negotiation', 'techniques', 'cialdini']
  },

  // ============================================
  // EFFECTIVE STORYTELLING TECHNIQUES
  // ============================================
  {
    id: 'fc-pers-009',
    front: 'What is the SUCCESs model for making ideas stick?',
    back: 'From "Made to Stick" by Chip and Dan Heath:\n\nS - Simple: Find the core message\nU - Unexpected: Break patterns, create curiosity gaps\nC - Concrete: Use sensory language, specific details\nC - Credible: Use authorities, statistics, testable credentials\nE - Emotional: Make people feel something\nS - Stories: Use narratives to simulate and inspire\n\nAll sticky ideas share these traits. The "Curse of Knowledge" is the enemy.',
    category: 'Negotiation',
    source: 'Made to Stick - Heath Brothers',
    pathwayId: 'negotiation',
    difficulty: 'intermediate',
    tags: ['storytelling', 'communication', 'sticky-ideas', 'messaging']
  },
  {
    id: 'fc-pers-010',
    front: 'What is the "Curse of Knowledge" in communication?',
    back: 'The Curse of Knowledge is the difficulty in imagining what it is like to NOT know something once you know it.\n\nSymptons:\n- Using jargon without realizing\n- Skipping "obvious" steps in explanations\n- Providing too much context or too little\n\nCure:\n- Use concrete language instead of abstract\n- Tell stories with specific details\n- Test your message with someone unfamiliar with the topic\n- Use the "Mom Test" - would your mother understand?',
    category: 'Negotiation',
    source: 'Made to Stick - Heath Brothers',
    pathwayId: 'negotiation',
    difficulty: 'intermediate',
    tags: ['communication', 'knowledge', 'clarity', 'messaging']
  },
  {
    id: 'fc-pers-011',
    front: 'What is the "Three-Act Structure" for storytelling?',
    back: 'Act 1 - Setup (25%): Establish the world, introduce characters, present the inciting incident that disrupts the status quo.\n\nAct 2 - Confrontation (50%): Rising action, obstacles, complications. The protagonist struggles toward their goal.\n\nAct 3 - Resolution (25%): Climax and resolution. The protagonist transforms, lessons are learned.\n\nKey: Every story is about change. No transformation = no story.',
    category: 'Negotiation',
    source: 'Communication & Persuasion',
    pathwayId: 'negotiation',
    difficulty: 'beginner',
    tags: ['storytelling', 'structure', 'narrative', 'presentation']
  },
  {
    id: 'fc-pers-012',
    front: 'What makes a story emotionally engaging?',
    back: 'Four elements for emotional engagement:\n\n1. Relatable protagonist - Flaws make characters human\n2. Clear stakes - What will be lost if they fail?\n3. Conflict and tension - Internal and external obstacles\n4. Sensory details - Show, do not tell\n\nKey insight: The brain processes stories differently than facts. Stories activate the same brain regions as if experiencing the events ourselves (neural coupling).',
    category: 'Negotiation',
    source: 'Communication & Persuasion',
    pathwayId: 'negotiation',
    difficulty: 'intermediate',
    tags: ['storytelling', 'emotion', 'engagement', 'narrative']
  },
  {
    id: 'fc-pers-013',
    front: 'What is the "Hero\'s Journey" framework?',
    back: 'Joseph Campbell\'s monomyth structure:\n\n1. Ordinary World - Hero\'s normal life\n2. Call to Adventure - Challenge appears\n3. Refusal of the Call - Initial hesitation\n4. Meeting the Mentor - Guidance received\n5. Crossing the Threshold - Commitment to journey\n6. Tests, Allies, Enemies - Challenges faced\n7. Ordeal - Major crisis\n8. Reward - Victory achieved\n9. Return - Hero comes back changed\n\nFound in Star Wars, Harry Potter, The Matrix, and countless others.',
    category: 'Negotiation',
    source: 'Communication & Persuasion',
    pathwayId: 'negotiation',
    difficulty: 'intermediate',
    tags: ['storytelling', 'heros-journey', 'narrative', 'structure']
  },

  // ============================================
  // ACTIVE LISTENING SKILLS
  // ============================================
  {
    id: 'fc-pers-014',
    front: 'What are the five levels of listening?',
    back: '1. Ignoring - Not listening at all\n2. Pretending - "Uh-huh, yeah..."\n3. Selective - Hearing only certain parts\n4. Attentive - Paying attention to words\n5. Empathic - Listening to understand feelings and meaning\n\nMost people listen to reply, not to understand. Empathic listening seeks first to understand the speaker\'s frame of reference and emotional state.',
    category: 'Negotiation',
    source: 'Communication & Persuasion',
    pathwayId: 'negotiation',
    difficulty: 'beginner',
    tags: ['listening', 'communication', 'empathy', 'skills']
  },
  {
    id: 'fc-pers-015',
    front: 'What is "Mirroring" in active listening?',
    back: 'Mirroring (also called isopraxism) means repeating the last 1-3 critical words someone said, using an upward inflection.\n\nExample:\nThem: "I\'m frustrated with this project deadline."\nYou: "The deadline?"\n\nWhy it works:\n- Encourages elaboration without leading\n- Shows you are listening\n- Creates rapport through vocal mimicry\n- Buys thinking time\n\nFrom Chris Voss\'s FBI negotiation techniques.',
    category: 'Negotiation',
    source: 'Never Split the Difference - Chris Voss',
    pathwayId: 'negotiation',
    difficulty: 'beginner',
    tags: ['listening', 'mirroring', 'negotiation', 'rapport']
  },
  {
    id: 'fc-pers-016',
    front: 'What is "Labeling" in tactical empathy?',
    back: 'Labeling is identifying and verbalizing someone\'s emotions. Format: "It seems like..." / "It sounds like..." / "It looks like..."\n\nExample: "It sounds like you\'re worried about meeting the deadline."\n\nBenefits:\n- Validates emotions (diffuses negatives, reinforces positives)\n- Demonstrates understanding without agreeing\n- Creates psychological safety\n- Slows down reactive emotions\n\nCritical: Never use "I" statements ("I think you feel...")—it makes it about you.',
    category: 'Negotiation',
    source: 'Never Split the Difference - Chris Voss',
    pathwayId: 'negotiation',
    difficulty: 'intermediate',
    tags: ['listening', 'labeling', 'empathy', 'negotiation']
  },
  {
    id: 'fc-pers-017',
    front: 'What is the difference between paraphrasing and summarizing?',
    back: 'Paraphrasing: Restating specific content in your own words.\n"So what you\'re saying is..."\n\nSummarizing: Capturing the overall message including emotions.\n"Let me make sure I understand—you\'re feeling X because of Y, and you need Z."\n\nUse paraphrasing for: Clarifying details, checking understanding\nUse summarizing for: Wrapping up, transitioning, showing complete understanding\n\nBoth trigger the response: "That\'s right"—the two most powerful words in negotiation.',
    category: 'Negotiation',
    source: 'Communication & Persuasion',
    pathwayId: 'negotiation',
    difficulty: 'intermediate',
    tags: ['listening', 'paraphrasing', 'summarizing', 'communication']
  },
  {
    id: 'fc-pers-018',
    front: 'How do you listen for what is NOT being said?',
    back: 'Pay attention to:\n\n1. Omissions - What topics are avoided?\n2. Hesitations - Where do they pause or stumble?\n3. Qualifiers - "Usually," "probably," "I think"\n4. Tone shifts - Changes in energy, pitch, speed\n5. Body language mismatches - Saying "fine" while tense\n\nUseful prompts:\n- "What else?"\n- "Tell me more about that..."\n- Strategic silence (let discomfort prompt disclosure)\n\nThe real message is often in what people struggle to say.',
    category: 'Negotiation',
    source: 'Communication & Persuasion',
    pathwayId: 'negotiation',
    difficulty: 'advanced',
    tags: ['listening', 'observation', 'subtext', 'communication']
  },

  // ============================================
  // NONVERBAL COMMUNICATION
  // ============================================
  {
    id: 'fc-pers-019',
    front: 'What percentage of communication is nonverbal?',
    back: 'The "7-38-55 Rule" (Albert Mehrabian):\n- 7% Words (verbal)\n- 38% Tone of voice (vocal)\n- 55% Body language (visual)\n\nIMPORTANT caveat: This applies specifically to expressing feelings and attitudes, especially when there is incongruence. For factual information, words matter most.\n\nKey insight: When verbal and nonverbal conflict, people believe the nonverbal message.',
    category: 'Negotiation',
    source: 'Communication & Persuasion',
    pathwayId: 'negotiation',
    difficulty: 'beginner',
    tags: ['nonverbal', 'body-language', 'communication', 'tone']
  },
  {
    id: 'fc-pers-020',
    front: 'What are the key elements of confident body language?',
    back: 'Power poses and confident nonverbals:\n\n1. Open posture - Uncrossed arms/legs, expansive stance\n2. Eye contact - Comfortable, direct (60-70% of time)\n3. Stillness - Minimal fidgeting, purposeful gestures\n4. Space - Taking up appropriate space\n5. Pace - Unhurried movements and speech\n6. Grounding - Feet planted, balanced stance\n\nAmy Cuddy research: Power poses for 2 minutes before high-stakes situations can increase testosterone and decrease cortisol.',
    category: 'Negotiation',
    source: 'Communication & Persuasion',
    pathwayId: 'negotiation',
    difficulty: 'beginner',
    tags: ['nonverbal', 'body-language', 'confidence', 'presence']
  },
  {
    id: 'fc-pers-021',
    front: 'What is "Mirroring" in body language?',
    back: 'Subtly matching another person\'s posture, gestures, and expressions to build rapport.\n\nHow to mirror effectively:\n- Wait 2-4 seconds before matching\n- Mirror general posture, not every movement\n- Match energy level and speaking pace\n- Cross-mirror (they touch face, you touch neck)\n\nWhy it works: Creates unconscious sense of similarity and connection. We naturally mirror people we like.\n\nCaution: Obvious mimicking breaks rapport.',
    category: 'Negotiation',
    source: 'Communication & Persuasion',
    pathwayId: 'negotiation',
    difficulty: 'intermediate',
    tags: ['nonverbal', 'mirroring', 'rapport', 'body-language']
  },
  {
    id: 'fc-pers-022',
    front: 'How do you read microexpressions?',
    back: 'Microexpressions are involuntary facial expressions lasting 1/25 to 1/5 of a second. Paul Ekman identified 7 universal emotions:\n\n1. Happiness - Crow\'s feet, raised cheeks\n2. Sadness - Inner eyebrows raised, lip corners down\n3. Fear - Eyebrows raised and together, wide eyes\n4. Anger - Eyebrows lowered, lips pressed\n5. Surprise - Eyebrows raised, jaw dropped\n6. Disgust - Nose wrinkled, upper lip raised\n7. Contempt - One-sided lip raise (asymmetrical)\n\nContempt is the most dangerous in relationships—predicts divorce.',
    category: 'Negotiation',
    source: 'Communication & Persuasion',
    pathwayId: 'negotiation',
    difficulty: 'advanced',
    tags: ['nonverbal', 'microexpressions', 'emotions', 'observation']
  },
  {
    id: 'fc-pers-023',
    front: 'What are vocal elements of communication beyond words?',
    back: 'Paralinguistics—how you say it:\n\n1. Pitch - Higher when stressed/excited, lower for authority\n2. Pace - Faster = excitement/nervousness, slower = emphasis\n3. Volume - Louder = confidence/aggression, softer = intimacy\n4. Tone - Warm vs. cold, playful vs. serious\n5. Pauses - Strategic silence for emphasis or reflection\n6. Filler words - "Um," "uh," "like" signal uncertainty\n\nTip: Record yourself. Most people have no idea how they actually sound.',
    category: 'Negotiation',
    source: 'Communication & Persuasion',
    pathwayId: 'negotiation',
    difficulty: 'intermediate',
    tags: ['nonverbal', 'voice', 'paralinguistics', 'communication']
  },

  // ============================================
  // PUBLIC SPEAKING FUNDAMENTALS
  // ============================================
  {
    id: 'fc-pers-024',
    front: 'What is the "Rule of Three" in presentations?',
    back: 'The brain easily remembers three items. Structure your message in threes:\n\n- Three main points\n- Three examples per point\n- Three-part phrases ("Life, liberty, and the pursuit of happiness")\n\nWhy it works:\n1. Pattern recognition - Three creates a complete pattern\n2. Cognitive ease - Easy to follow and remember\n3. Rhetorical power - Satisfying rhythm\n\nSteve Jobs used threes consistently: "Thinner. Lighter. Faster."',
    category: 'Negotiation',
    source: 'Talk Like TED - Carmine Gallo',
    pathwayId: 'negotiation',
    difficulty: 'beginner',
    tags: ['public-speaking', 'presentation', 'structure', 'memory']
  },
  {
    id: 'fc-pers-025',
    front: 'What is the optimal length for a presentation?',
    back: 'TED\'s 18-minute rule is backed by science:\n\n- Cognitive backlog: Listening is exhausting; attention declines after 10-18 minutes\n- Memory consolidation: Brain needs processing time\n- The "forgetting curve": After 20 minutes, retention drops sharply\n\nPractical application:\n- If you must go longer, break every 10-15 minutes with stories, videos, or activities\n- "If you can\'t explain it in 18 minutes, you don\'t understand it well enough"',
    category: 'Negotiation',
    source: 'Talk Like TED - Carmine Gallo',
    pathwayId: 'negotiation',
    difficulty: 'beginner',
    tags: ['public-speaking', 'presentation', 'attention', 'TED']
  },
  {
    id: 'fc-pers-026',
    front: 'How do you open a presentation with impact?',
    back: 'Powerful opening techniques:\n\n1. Startling statistic - "Every 7 seconds, someone dies of hunger"\n2. Provocative question - "What would you attempt if you knew you could not fail?"\n3. Story/anecdote - Personal, specific, emotional\n4. Bold statement - Challenge conventional wisdom\n5. "What if" scenario - Engage imagination\n\nNEVER start with: "Today I\'m going to talk about..." or apologies ("I\'m not really a public speaker...")\n\nYou have 7-10 seconds to hook attention.',
    category: 'Negotiation',
    source: 'Talk Like TED - Carmine Gallo',
    pathwayId: 'negotiation',
    difficulty: 'intermediate',
    tags: ['public-speaking', 'opening', 'hook', 'presentation']
  },
  {
    id: 'fc-pers-027',
    front: 'What is the "10-20-30 Rule" for slide presentations?',
    back: 'Guy Kawasaki\'s rule:\n\n- 10 slides maximum\n- 20 minutes maximum\n- 30 point font minimum\n\nWhy:\n- 10 slides force you to distill your message\n- 20 minutes leaves time for discussion\n- 30-point font prevents cramming text (if you can\'t fit it in 30pt, you\'re putting too much)\n\nSlides should support your talk, not BE your talk. If people can read your slides and get the full message, you are unnecessary.',
    category: 'Negotiation',
    source: 'Communication & Persuasion',
    pathwayId: 'negotiation',
    difficulty: 'beginner',
    tags: ['public-speaking', 'slides', 'presentation', 'design']
  },
  {
    id: 'fc-pers-028',
    front: 'How do you manage speaking anxiety?',
    back: 'Reframe and prepare:\n\n1. Reframe anxiety as excitement - Same physiological response. Say "I\'m excited" not "I\'m nervous"\n2. Practice extensively - Rehearse out loud 10+ times\n3. Arrive early - Familiarize with space\n4. Power pose - 2 minutes beforehand\n5. Breathe - 4-7-8 technique (inhale 4, hold 7, exhale 8)\n6. Focus on giving - Shift from "How do I look?" to "How can I help them?"\n\nRemember: Audience wants you to succeed. They are on your side.',
    category: 'Negotiation',
    source: 'Communication & Persuasion',
    pathwayId: 'negotiation',
    difficulty: 'intermediate',
    tags: ['public-speaking', 'anxiety', 'confidence', 'preparation']
  },

  // ============================================
  // WRITTEN COMMUNICATION CLARITY
  // ============================================
  {
    id: 'fc-pers-029',
    front: 'What is the "Pyramid Principle" for structured writing?',
    back: 'Barbara Minto\'s McKinsey framework:\n\n1. Start with the answer/conclusion FIRST\n2. Group supporting arguments beneath\n3. Logically order the supporting points\n\nStructure:\n- Lead with "So what?" (your key message)\n- Support with "Why?" (3-5 reasons)\n- Back up with "How do we know?" (evidence)\n\nThis is the opposite of academic writing (build up to conclusion). Executives want the bottom line up front (BLUF).',
    category: 'Negotiation',
    source: 'The Pyramid Principle - Barbara Minto',
    pathwayId: 'negotiation',
    difficulty: 'intermediate',
    tags: ['writing', 'structure', 'clarity', 'business-communication']
  },
  {
    id: 'fc-pers-030',
    front: 'What is the Flesch Reading Ease score?',
    back: 'A readability formula measuring how easy text is to read:\n\n- 90-100: Very easy (5th grade)\n- 60-70: Standard (8th-9th grade)\n- 30-50: Difficult (college level)\n- 0-30: Very difficult (professional)\n\nMost business writing should target 60-70.\n\nHow to improve score:\n- Shorter sentences (aim for 15-20 words average)\n- Shorter words (prefer 1-2 syllable words)\n- Active voice over passive\n- Concrete over abstract',
    category: 'Negotiation',
    source: 'Communication & Persuasion',
    pathwayId: 'negotiation',
    difficulty: 'intermediate',
    tags: ['writing', 'readability', 'clarity', 'communication']
  },
  {
    id: 'fc-pers-031',
    front: 'What is the difference between active and passive voice?',
    back: 'Active voice: Subject performs the action\n"The team completed the project."\n\nPassive voice: Subject receives the action\n"The project was completed by the team."\n\nUse active voice for:\n- Clarity and directness\n- Stronger, more engaging writing\n- Taking responsibility\n\nUse passive voice when:\n- The doer is unknown or unimportant\n- Softening criticism ("Mistakes were made")\n- Scientific/technical writing conventions',
    category: 'Negotiation',
    source: 'Communication & Persuasion',
    pathwayId: 'negotiation',
    difficulty: 'beginner',
    tags: ['writing', 'grammar', 'clarity', 'active-voice']
  },
  {
    id: 'fc-pers-032',
    front: 'How do you write effective emails?',
    back: 'The BRIEF framework:\n\nB - Background: One sentence of context\nR - Reason: Why you\'re writing\nI - Information: Key details (bullets if multiple)\nE - End: Clear call to action\nF - Follow-up: Next steps and timeline\n\nOther tips:\n- Subject line = summary + required action\n- One email, one topic\n- Front-load the ask\n- Bold or highlight the CTA\n- Keep under 5 sentences when possible',
    category: 'Negotiation',
    source: 'Communication & Persuasion',
    pathwayId: 'negotiation',
    difficulty: 'beginner',
    tags: ['writing', 'email', 'business-communication', 'clarity']
  },

  // ============================================
  // HANDLING OBJECTIONS
  // ============================================
  {
    id: 'fc-pers-033',
    front: 'What is the "Feel, Felt, Found" technique for handling objections?',
    back: 'A three-step empathy framework:\n\n1. FEEL: "I understand how you feel..."\n2. FELT: "Others have felt the same way..."\n3. FOUND: "What they found was..."\n\nExample:\n"I understand you feel the price is high. Many of our best customers felt the same way initially. What they found was that the ROI paid for itself within 3 months."\n\nWhy it works: Validates emotion, provides social proof, reframes with evidence.',
    category: 'Negotiation',
    source: 'Communication & Persuasion',
    pathwayId: 'negotiation',
    difficulty: 'beginner',
    tags: ['objections', 'sales', 'empathy', 'persuasion']
  },
  {
    id: 'fc-pers-034',
    front: 'How do you use the "Accusation Audit" to preempt objections?',
    back: 'From Chris Voss: List all the negative things the other party might think about you or your proposal, then voice them first.\n\nExample: "You\'re probably thinking this sounds too good to be true, that I\'m just trying to make a sale, and that there must be a catch..."\n\nWhy it works:\n1. Defuses the negativity before it builds\n2. Shows you understand their perspective\n3. Makes objections seem less powerful when voiced\n4. Creates psychological safety',
    category: 'Negotiation',
    source: 'Never Split the Difference - Chris Voss',
    pathwayId: 'negotiation',
    difficulty: 'intermediate',
    tags: ['objections', 'negotiation', 'preemption', 'strategy']
  },
  {
    id: 'fc-pers-035',
    front: 'What are the four types of objections?',
    back: '1. Price objection - "It\'s too expensive"\n   Response: Focus on value, not cost\n\n2. Time objection - "I need to think about it"\n   Response: Uncover the real concern\n\n3. Authority objection - "I need to check with..."\n   Response: Offer to help present to decision maker\n\n4. Need objection - "I don\'t need this"\n   Response: Ask questions to reveal latent needs\n\nKey insight: The stated objection is rarely the real objection. Ask "What else is concerning you?" to uncover hidden issues.',
    category: 'Negotiation',
    source: 'Communication & Persuasion',
    pathwayId: 'negotiation',
    difficulty: 'intermediate',
    tags: ['objections', 'sales', 'negotiation', 'types']
  },
  {
    id: 'fc-pers-036',
    front: 'How do you turn "No" into an advantage?',
    back: 'Chris Voss insight: "No" is the start of negotiation, not the end.\n\n"No" provides:\n1. Protection - People feel safe saying no\n2. Information - Reveals what they are protecting\n3. Engagement - They are still in conversation\n\nAfter a "No," ask:\n- "What about this doesn\'t work for you?"\n- "What would you need to make this work?"\n- "What would you say yes to?"\n\nDesign questions that allow "No" answers to get commitment:\n"Would it be a bad idea if...?" "No" = agreement',
    category: 'Negotiation',
    source: 'Never Split the Difference - Chris Voss',
    pathwayId: 'negotiation',
    difficulty: 'advanced',
    tags: ['objections', 'negotiation', 'no', 'strategy']
  },

  // ============================================
  // BUILDING RAPPORT QUICKLY
  // ============================================
  {
    id: 'fc-pers-037',
    front: 'What are the first 7 seconds of meeting someone?',
    back: 'Research shows first impressions form in 7 seconds and are hard to change:\n\nOptimize for:\n1. Eye contact - Look into eyes while shaking hands\n2. Genuine smile - Engages eye muscles (Duchenne smile)\n3. Firm handshake - Match their pressure\n4. Open body language - Uncrossed arms, facing them\n5. Full attention - Phone away, present focus\n6. Their name - Use it immediately after hearing\n\n"You never get a second chance to make a first impression."',
    category: 'Negotiation',
    source: 'Communication & Persuasion',
    pathwayId: 'negotiation',
    difficulty: 'beginner',
    tags: ['rapport', 'first-impressions', 'networking', 'body-language']
  },
  {
    id: 'fc-pers-038',
    front: 'What is the "F.O.R.D." technique for building rapport?',
    back: 'F.O.R.D. = Safe topics that build connection:\n\nF - Family: "Do you have kids?" "Where are you from originally?"\nO - Occupation: "What do you do?" "How did you get into that?"\nR - Recreation: "What do you do for fun?" "Seen any good shows lately?"\nD - Dreams: "What\'s next for you?" "If you could do anything...?"\n\nProgression: Start with F or O (safe), move to R (personal), build to D (deeper connection).\n\nAsk follow-up questions and share reciprocally.',
    category: 'Negotiation',
    source: 'Communication & Persuasion',
    pathwayId: 'negotiation',
    difficulty: 'beginner',
    tags: ['rapport', 'conversation', 'networking', 'small-talk']
  },
  {
    id: 'fc-pers-039',
    front: 'How do you quickly find common ground?',
    back: 'The "Similarity-Attraction Effect": We like people who are like us.\n\nStrategies:\n1. Listen for shared experiences - Same hometown, school, hobby\n2. Match communication style - Fast/slow, formal/casual\n3. Find shared values - "I also believe that..."\n4. Shared challenges - "I struggle with that too"\n5. Shared contacts - Mutual connections\n\nBe genuine. Fake similarity backfires.\n\nEven small similarities matter: Same first name, birthday month, or sports team.',
    category: 'Negotiation',
    source: 'Communication & Persuasion',
    pathwayId: 'negotiation',
    difficulty: 'intermediate',
    tags: ['rapport', 'similarity', 'connection', 'networking']
  },
  {
    id: 'fc-pers-040',
    front: 'What is "Tactical Empathy"?',
    back: 'Chris Voss\'s FBI-developed approach: Understanding the feelings and mindset of another while hearing the meaning behind what they say.\n\nComponents:\n1. Active listening - Full attention, no interrupting\n2. Labeling emotions - "It sounds like you\'re frustrated"\n3. Mirroring - Repeat last few words\n4. Minimal encouragers - "Yes," "I see," "Go on"\n5. Effective pauses - Silence after labeling\n\nGoal: Make them feel understood, not necessarily agreed with. Empathy is not sympathy.',
    category: 'Negotiation',
    source: 'Never Split the Difference - Chris Voss',
    pathwayId: 'negotiation',
    difficulty: 'intermediate',
    tags: ['rapport', 'empathy', 'negotiation', 'listening']
  },

  // ============================================
  // ASKING POWERFUL QUESTIONS
  // ============================================
  {
    id: 'fc-pers-041',
    front: 'What are "Calibrated Questions" in negotiation?',
    back: 'Open-ended questions starting with "How" or "What" that give the other side the illusion of control.\n\nExamples:\n- "How am I supposed to do that?"\n- "What is the biggest challenge you face?"\n- "How does this fit into your objectives?"\n- "What happens if you do nothing?"\n\nAvoid "Why" questions—they trigger defensiveness.\n\nPower: Forces them to solve your problem while feeling in control. The answer gives you information and buys time.',
    category: 'Negotiation',
    source: 'Never Split the Difference - Chris Voss',
    pathwayId: 'negotiation',
    difficulty: 'intermediate',
    tags: ['questions', 'negotiation', 'calibrated', 'influence']
  },
  {
    id: 'fc-pers-042',
    front: 'What is the Socratic Method of questioning?',
    back: 'Named after Socrates: Leading someone to insights through strategic questions rather than telling them the answer.\n\nQuestion types:\n1. Clarifying - "What do you mean by...?"\n2. Probing assumptions - "What are you assuming here?"\n3. Probing reasons - "How do you know that?"\n4. Exploring alternatives - "What might be another way?"\n5. Exploring implications - "If that were true, what would happen?"\n\nPower: People accept conclusions they reach themselves more than conclusions imposed on them.',
    category: 'Negotiation',
    source: 'Communication & Persuasion',
    pathwayId: 'negotiation',
    difficulty: 'advanced',
    tags: ['questions', 'socratic', 'teaching', 'influence']
  },
  {
    id: 'fc-pers-043',
    front: 'What is the difference between open and closed questions?',
    back: 'Closed questions: Can be answered with "yes," "no," or a specific fact.\n"Did you finish the report?" "What time is it?"\n\nOpen questions: Require elaboration and explanation.\n"How did the project go?" "What challenges did you face?"\n\nWhen to use each:\n- Open: Building rapport, gathering information, exploring\n- Closed: Confirming facts, getting commitment, closing\n\nRatio for good conversations: 3:1 open to closed questions.',
    category: 'Negotiation',
    source: 'Communication & Persuasion',
    pathwayId: 'negotiation',
    difficulty: 'beginner',
    tags: ['questions', 'communication', 'open-ended', 'closed']
  },
  {
    id: 'fc-pers-044',
    front: 'What are "Scale Questions" and when do you use them?',
    back: 'Scale questions ask for a numerical rating to quantify subjective experiences.\n\n"On a scale of 1-10, how confident are you in this plan?"\n\nFollow-up questions unlock the power:\n- "What would make it a 10?"\n- "Why isn\'t it lower?" (reveals what is working)\n- "What would need to change to move from 6 to 8?"\n\nUses:\n- Coaching and feedback\n- Sales (gauging interest)\n- Problem-solving\n- Progress tracking',
    category: 'Negotiation',
    source: 'Communication & Persuasion',
    pathwayId: 'negotiation',
    difficulty: 'intermediate',
    tags: ['questions', 'scale', 'coaching', 'feedback']
  },

  // ============================================
  // FRAMING AND REFRAMING
  // ============================================
  {
    id: 'fc-pers-045',
    front: 'What is "Framing" in communication?',
    back: 'Framing is how you present information to influence perception. Same facts, different emphasis = different decisions.\n\nClassic example:\n- "90% survival rate" (positive frame)\n- "10% mortality rate" (negative frame)\n\nPatients choose surgery more often with survival frame.\n\nTypes of frames:\n1. Gain vs. loss frame\n2. Problem vs. opportunity frame\n3. Past vs. future frame\n4. Individual vs. collective frame\n\nThe frame you choose directs attention and shapes meaning.',
    category: 'Negotiation',
    source: 'Communication & Persuasion',
    pathwayId: 'negotiation',
    difficulty: 'intermediate',
    tags: ['framing', 'persuasion', 'psychology', 'communication']
  },
  {
    id: 'fc-pers-046',
    front: 'What is Loss Aversion and how does it affect framing?',
    back: 'Kahneman & Tversky: Losses feel roughly 2x more powerful than equivalent gains.\n\nImplication for persuasion:\n- Frame choices in terms of what they could LOSE\n- "You\'ll save $100" is less powerful than "You\'ll lose $100 if you don\'t act"\n\nEthical application:\n- Highlight real risks of inaction\n- Show cost of the status quo\n- "What this will cost you if you wait..."\n\nUsed everywhere: Insurance, deadlines, limited-time offers.',
    category: 'Negotiation',
    source: 'Communication & Persuasion',
    pathwayId: 'negotiation',
    difficulty: 'intermediate',
    tags: ['framing', 'loss-aversion', 'psychology', 'persuasion']
  },
  {
    id: 'fc-pers-047',
    front: 'How do you reframe objections?',
    back: 'Reframing shifts the meaning of a statement by changing its context.\n\nTechniques:\n1. Context reframe: "That\'s expensive" -> "Compared to the cost of not solving this problem..."\n2. Meaning reframe: "I\'m too old to learn this" -> "Your experience makes you learn faster"\n3. Outcome reframe: "This is risky" -> "The bigger risk is doing nothing"\n4. Time reframe: "It takes too long" -> "Think about where you\'ll be in 5 years if you start now vs. don\'t"\n\nKey: Accept their frame first, then offer an alternative perspective.',
    category: 'Negotiation',
    source: 'Communication & Persuasion',
    pathwayId: 'negotiation',
    difficulty: 'advanced',
    tags: ['framing', 'reframing', 'objections', 'persuasion']
  },
  {
    id: 'fc-pers-048',
    front: 'What is the "Pre-suasion" concept?',
    back: 'Robert Cialdini\'s concept: What you do BEFORE you deliver a message dramatically affects its impact.\n\nPrinciple: "What is focal is causal"—what people are paying attention to becomes most important.\n\nTechniques:\n1. Privileged moments: Create receptive states before the ask\n2. Attention channeling: Direct focus to favorable attributes\n3. Association: Prime with positive concepts\n4. Unity: Establish shared identity first\n\nExample: Asking "Are you an adventurous person?" before pitching something new increases yes rates.',
    category: 'Negotiation',
    source: 'Pre-Suasion - Robert Cialdini',
    pathwayId: 'negotiation',
    difficulty: 'advanced',
    tags: ['persuasion', 'pre-suasion', 'cialdini', 'priming']
  },
  {
    id: 'fc-pers-049',
    front: 'What is the "Contrast Principle" in persuasion?',
    back: 'Perception is relative. Things seem different depending on what is presented before them.\n\nApplications:\n- Show expensive option first, then mid-range seems reasonable\n- Present worst-case scenario first, then your proposal seems mild\n- Describe the problem fully before the solution\n\nReal estate trick: Show a bad house first, then the house you want to sell looks much better.\n\nIn negotiation: Anchor high first. Even if rejected, subsequent requests seem smaller.',
    category: 'Negotiation',
    source: 'Influence - Robert Cialdini',
    pathwayId: 'negotiation',
    difficulty: 'intermediate',
    tags: ['persuasion', 'contrast', 'perception', 'anchoring']
  },
  {
    id: 'fc-pers-050',
    front: 'What is "Anchoring" in negotiation and communication?',
    back: 'Anchoring is the cognitive bias where the first piece of information (the anchor) heavily influences subsequent judgments.\n\nIn negotiation:\n- Set the first number to anchor the range\n- Use extreme anchors to shift expectations\n- Precise numbers ($87,000) anchor more strongly than round ($90,000)\n\nDefense against anchoring:\n1. Recognize when you are being anchored\n2. Ignore their anchor, set your own\n3. Challenge the anchor directly: "How did you arrive at that number?"\n\nPower: Even obviously arbitrary anchors affect estimates.',
    category: 'Negotiation',
    source: 'Communication & Persuasion',
    pathwayId: 'negotiation',
    difficulty: 'intermediate',
    tags: ['persuasion', 'anchoring', 'negotiation', 'psychology']
  }
];
