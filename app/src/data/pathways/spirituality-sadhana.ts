import type { PathwayLesson } from '@/types';

/**
 * Spirituality & Sadhana Module
 *
 * Science-backed lessons on meditation, breathwork, yoga, and daily spiritual practice.
 * Integrating neuroscience research with ancient wisdom traditions.
 */

export const spiritualitySadhanaLessons: PathwayLesson[] = [
  // LEVEL 1: FOUNDATIONS (Lessons 1-8)
  {
    id: 'spirit-001',
    title: 'What Is Sadhana? The Path of Daily Practice',
    type: 'intro',
    duration: 12,
    xpReward: 100,
    content: {
      overview: 'Discover the ancient concept of sadhana—daily spiritual practice—and its transformative power backed by modern neuroscience.',
      mainContent: `
## Sadhana: The Bridge to Your Higher Self

**Sadhana** (Sanskrit: साधना) means "a means of accomplishing something" or "spiritual practice."

It refers to the daily disciplines that cultivate self-awareness, discipline, and connection to higher consciousness.

### The Universal Pattern

Every wisdom tradition emphasizes daily practice:

| Tradition | Practice | Goal |
|-----------|----------|------|
| **Yoga** | Asana, pranayama, meditation | Self-realization |
| **Buddhism** | Meditation, mindfulness | Enlightenment |
| **Sufism** | Dhikr, prayer | Divine union |
| **Christian Mysticism** | Contemplative prayer | Union with God |
| **Stoicism** | Morning/evening reflection | Virtue |

### The Science Validates the Ancients

Neuroscience now confirms what practitioners knew for millennia:

> "Regular meditation and breathwork enhance neuroplasticity, strengthen emotional regulation, and reduce activity in stress-related brain regions." — Harvard Medical School

**8 weeks of meditation practice produces measurable brain changes:**
- Increased gray matter in learning/memory regions
- Decreased gray matter in the amygdala (stress center)
- Enhanced connectivity between brain regions

### Why Daily Practice Matters

**Sporadic practice:** Temporary benefits, no lasting change
**Daily practice:** Cumulative transformation, neural rewiring

The brain is plastic—it literally reshapes based on what you repeatedly do.

### The Three Pillars of Sadhana

**1. Body (Sharira)**
- Asana (yoga postures)
- Physical purification
- Health as foundation

**2. Energy (Prana)**
- Pranayama (breathwork)
- Managing life force
- Vitality cultivation

**3. Mind (Manas)**
- Meditation
- Concentration
- Self-inquiry

### Starting Your Sadhana

**The minimum effective dose:**
- 10-20 minutes daily
- Same time each day (ideally morning)
- Dedicated space
- Consistent practice

**Better than long, sporadic sessions is short, daily commitment.**
      `,
      keyTakeaway: 'Sadhana is daily spiritual practice that transforms consciousness through consistent effort. Neuroscience validates what ancient traditions knew: regular practice physically rewires the brain for peace, focus, and well-being.',
      actionItem: 'Commit to a 10-minute morning practice for 7 days: 2 min gentle movement, 3 min breath awareness, 5 min sitting meditation. Track completion—consistency matters more than duration.'
    }
  },
  {
    id: 'spirit-002',
    title: 'The Neuroscience of Meditation',
    type: 'concept',
    duration: 14,
    xpReward: 120,
    content: {
      overview: 'Understand exactly what happens in your brain during meditation and why it produces lasting benefits.',
      mainContent: `
## Your Brain on Meditation

Meditation isn't mystical—it's measurable.

### Brain Regions Affected

**Prefrontal Cortex (PFC):**
- Executive function, focus, decisions
- Meditation strengthens PFC
- Better emotional regulation

**Amygdala:**
- Fear and stress response center
- Meditation shrinks amygdala
- Reduced reactivity to triggers

**Hippocampus:**
- Learning and memory
- Meditation increases gray matter
- Better memory consolidation

**Default Mode Network (DMN):**
- Mind wandering, self-referential thinking
- Meditation quiets DMN
- Reduced rumination

### The Research Evidence

**Sara Lazar's Harvard Study:**
- 8 weeks of MBSR (Mindfulness-Based Stress Reduction)
- ~27 minutes daily meditation
- Measurable brain changes on MRI

| Region | Change | Function |
|--------|--------|----------|
| Hippocampus | ↑ Gray matter | Learning, memory |
| Posterior cingulate | ↑ Gray matter | Self-awareness |
| Amygdala | ↓ Gray matter | Less stress reactivity |

**Long-term meditators show:**
- More gamma wave activity (high-level cognition)
- Greater cortical thickness
- Slower age-related brain atrophy

### Types of Meditation, Different Effects

**Focused Attention (Shamatha):**
- Single point focus
- Trains: Concentration
- Changes: Attention networks

**Open Monitoring (Vipassana):**
- Awareness of all experience
- Trains: Meta-awareness
- Changes: Default mode network

**Loving-Kindness (Metta):**
- Cultivating compassion
- Trains: Positive emotions
- Changes: Emotional processing regions

### What Happens During Meditation

\`\`\`
Minutes 1-5:   Mind wanders, notice, return
               (This IS the practice)

Minutes 5-10:  Settling, some stability
               Alpha waves increase

Minutes 10-20: Deeper absorption
               Theta waves may emerge

Minutes 20+:   Potential for profound states
               Gamma bursts possible
\`\`\`

**The moment you notice your mind wandered is the moment of practice—not failure.**
      `,
      keyTakeaway: 'Meditation produces measurable brain changes: increased gray matter in regions for learning and emotional regulation, decreased reactivity in stress centers. These changes require consistent practice over weeks.',
      actionItem: 'Practice breath-focused meditation for 10 minutes. Count breaths 1-10, restart when you lose count. The goal isn\'t to prevent mind-wandering but to notice it and return. Track how many times you restart—this number typically decreases over weeks.',
      quiz: {
        question: 'What happens to the amygdala with regular meditation practice?',
        options: [
          'It grows larger to handle more emotions',
          'It shrinks, reducing stress reactivity',
          'It remains unchanged',
          'It moves to a different brain location'
        ],
        correct: 1,
        explanation: 'Research shows regular meditation practice reduces gray matter in the amygdala, the brain\'s fear and stress response center, resulting in decreased reactivity to stressors.'
      }
    }
  },
  {
    id: 'spirit-003',
    title: 'Pranayama: The Science of Breath',
    type: 'concept',
    duration: 15,
    xpReward: 130,
    content: {
      overview: 'Master the yogic science of breath control and understand how breathing patterns directly affect your nervous system.',
      mainContent: `
## Breath: The Bridge Between Body and Mind

**Pranayama** = Prana (life force) + Ayama (extension/control)

Breath is unique: it's both automatic AND consciously controllable, giving you direct access to the autonomic nervous system.

### The Nervous System Connection

**Inhale:** Activates sympathetic (arousal)
**Exhale:** Activates parasympathetic (calm)

**Longer exhale = Calmer state**

### Core Pranayama Techniques

**1. Diaphragmatic Breathing (Foundation)**
- Breathe into belly, not chest
- Diaphragm descends on inhale
- Most people breathe shallowly

**2. Box Breathing (Sama Vritti)**
\`\`\`
Inhale:  4 counts
Hold:    4 counts
Exhale:  4 counts
Hold:    4 counts
Repeat
\`\`\`
**Effect:** Balance, focus, stress reduction
**Used by:** Navy SEALs, first responders

**3. 4-7-8 Breathing (Relaxation)**
\`\`\`
Inhale:  4 counts
Hold:    7 counts
Exhale:  8 counts
Repeat 3-4 times
\`\`\`
**Effect:** Deep relaxation, sleep aid

**4. Physiological Sigh (Fastest Reset)**
\`\`\`
Double inhale through nose
(Fill lungs completely)
Long exhale through mouth
1-3 repetitions
\`\`\`
**Effect:** Immediate calm (under 60 seconds)
**Research:** Stanford, most effective real-time stress reducer

**5. Kapalabhati (Skull Shining Breath)**
\`\`\`
Sharp exhale through nose (belly pumps)
Passive inhale
20-50 repetitions
\`\`\`
**Effect:** Energizing, mental clarity

**6. Nadi Shodhana (Alternate Nostril)**
\`\`\`
Close right nostril, inhale left
Close both, hold
Close left nostril, exhale right
Inhale right
Close both, hold
Exhale left
Repeat
\`\`\`
**Effect:** Balance left/right brain, calm focus

### The Science of Heart Rate Variability

Slow breathing increases HRV (heart rate variability):
- Higher HRV = better stress resilience
- Optimal rate: 5-6 breaths per minute
- Creates "coherence" between heart and brain

### Contraindications

**Be cautious with intense pranayama if:**
- Pregnant
- Heart conditions
- High blood pressure
- Anxiety disorders (start gentle)
- Recent surgery
      `,
      keyTakeaway: 'Breath is a direct lever to your nervous system. Long exhales activate parasympathetic calm; vigorous breathing energizes. Mastering breath control gives you real-time access to your physiological state.',
      actionItem: 'Practice box breathing (4-4-4-4) for 5 minutes. Notice the calming effect. Then try the physiological sigh when you feel stressed today. Compare effectiveness—find what works for your nervous system.'
    }
  },
  {
    id: 'spirit-004',
    title: 'Asana: Yoga Postures for Mind-Body Unity',
    type: 'concept',
    duration: 14,
    xpReward: 120,
    content: {
      overview: 'Understand how yoga postures affect the nervous system, hormones, and mental states beyond just flexibility.',
      mainContent: `
## Asana: More Than Physical Exercise

In classical yoga, asana (posture) is the third limb, designed to prepare the body for meditation.

### The Mind-Body Research

**UCLA Study (2017):**
- Women at risk for Alzheimer's
- 12 weeks Kundalini yoga vs. memory training
- Yoga group: Better memory AND brain plasticity

**Broad research findings:**
- Yoga reduces cortisol
- Increases GABA (calming neurotransmitter)
- Improves HRV
- Reduces inflammatory markers

### How Asana Affects the Nervous System

**Forward Folds:**
- Activate parasympathetic
- Calming, introspective
- Good for: Anxiety, overstimulation

**Backbends:**
- Activate sympathetic
- Energizing, uplifting
- Good for: Depression, lethargy

**Twists:**
- Balance both sides
- Detoxifying effect
- Good for: Mental clarity

**Inversions:**
- Fresh blood to brain
- Shift perspective
- Good for: New viewpoints, energy

### Core Asanas for Daily Practice

**Sun Salutation (Surya Namaskar):**
- Complete sequence hitting all movements
- 5-10 rounds = full body practice
- Builds heat, flexibility, strength

**Essential Holds:**
| Pose | Duration | Benefit |
|------|----------|---------|
| Child's Pose | 2-3 min | Calm, surrender |
| Downward Dog | 1-2 min | Strength, stretch |
| Pigeon | 2-3 min each side | Hip release, emotions |
| Legs Up Wall | 5-10 min | Deep relaxation |
| Corpse (Savasana) | 5-10 min | Integration |

### The Subtle Body

Yoga traditions describe energy channels (nadis) and centers (chakras):

While not scientifically proven, practitioners report:
- Energy sensations during practice
- Emotional releases in hip openers
- Mental clarity after inversions

**Modern interpretation:** Yoga affects the fascial network, nervous system, and interoception (body awareness).

### Practice Principles

1. **Breath leads movement** - Never sacrifice breath
2. **Edge, not pain** - Sensation yes, injury no
3. **Presence over performance** - It's not gymnastics
4. **Consistency over intensity** - Daily gentle > weekly intense
      `,
      keyTakeaway: 'Yoga asanas are tools for nervous system regulation, not just flexibility. Different posture categories have different effects: forward folds calm, backbends energize. Use postures strategically based on your state.',
      actionItem: 'Learn a basic Sun Salutation sequence. Practice 5 rounds each morning this week. Notice how your energy and mental state shift before and after practice.'
    }
  },
  {
    id: 'spirit-005',
    title: 'Creating Your Morning Sadhana Routine',
    type: 'exercise',
    duration: 12,
    xpReward: 110,
    content: {
      overview: 'Design a practical morning spiritual practice that fits your life and builds the foundation for transformation.',
      mainContent: `
## The Power of Morning Practice

Why morning?
- Mind is fresh, less cluttered
- Sets tone for entire day
- Fewer interruptions
- Builds discipline

### The Traditional Brahma Muhurta

Yogic texts recommend practice during "Brahma Muhurta" (approximately 4-6 AM):
- Sattvic (pure) energy
- World is quiet
- Mind naturally settled

**Practical:** Practice before checking phone or engaging with the world.

### Building Your Sadhana

**Minimum Viable Practice (10-15 min):**
\`\`\`
1. Wake, splash water on face
2. 2 min: Gentle stretching
3. 3 min: Pranayama (box breathing)
4. 5-10 min: Meditation
5. Set intention for day
\`\`\`

**Moderate Practice (30 min):**
\`\`\`
1. Wake, cleanse
2. 5 min: Joint rotations
3. 10 min: Sun salutations
4. 5 min: Pranayama
5. 10 min: Meditation
6. Intention/gratitude
\`\`\`

**Full Practice (60-90 min):**
\`\`\`
1. Wake 4:30-5 AM
2. Cleanse, cold water
3. 20-30 min: Asana practice
4. 10 min: Pranayama (multiple techniques)
5. 30 min: Meditation
6. Reading/study
7. Intention/journaling
\`\`\`

### Keys to Consistency

**1. Same time daily**
- Circadian rhythm locks in
- Becomes automatic
- No decision fatigue

**2. Same place**
- Create sacred space
- Brain associates place with practice
- Minimal setup needed

**3. Start small**
- 10 minutes is enough to start
- Build slowly over months
- Consistency > duration

**4. Never zero**
- Missed long practice? Do 5 min
- Something is infinitely better than nothing
- Maintain the streak

### Obstacles and Solutions

| Obstacle | Solution |
|----------|----------|
| "No time" | Wake 15 min earlier, practice 10 min |
| "Too tired" | Start with gentle movement to wake up |
| "Mind races" | Normal—this is why you practice |
| "Can't sit still" | Start with more asana, build to sitting |
| "Inconsistent" | Accountability partner, tracking |
      `,
      keyTakeaway: 'A morning sadhana practice, even just 10 minutes, sets the tone for your entire day. Start small, be consistent, and gradually build. The key is daily commitment, not lengthy sessions.',
      actionItem: 'Design your personal morning sadhana for this week. Write it down with specific times and activities. Commit to the minimum viable practice (10 min) for 7 consecutive days. Track completion.'
    }
  },
  {
    id: 'spirit-006',
    title: 'Mantra: The Power of Sacred Sound',
    type: 'concept',
    duration: 13,
    xpReward: 115,
    content: {
      overview: 'Understand how mantra repetition affects the brain and learn foundational mantras for meditation.',
      mainContent: `
## Mantra: Protecting the Mind

**Mantra** = Manas (mind) + Tra (protect/instrument)

A mantra is a sound, word, or phrase repeated to focus the mind and invoke specific states.

### The Science of Sound Repetition

**Neurological effects:**
- Rhythmic repetition induces meditative states
- Vagus nerve stimulation (humming, chanting)
- Reduced activity in default mode network
- Increased focus network activation

**Research findings:**
- Sanskrit mantras produce specific brainwave patterns
- Repetition reduces anxiety and depression markers
- Kirtan (chanting) increases oxytocin

### Categories of Mantras

**1. Bija (Seed) Mantras:**
Single-syllable sounds representing primal energies
- **OM** (AUM) - Universal consciousness
- **RAM** - Fire, transformation
- **YAM** - Air, heart center
- **HAM** - Space, throat center

**2. Deity Mantras:**
Invoke specific qualities
- **Om Namah Shivaya** - Transformation, consciousness
- **Om Namo Narayanaya** - Preservation, protection
- **Om Aim Saraswatyai Namah** - Wisdom, creativity

**3. Affirmation Mantras:**
Positive statements
- **So Hum** - "I am that" (breath-linked)
- **Aham Brahmasmi** - "I am the infinite"

### How to Practice Japa (Mantra Repetition)

**Tools:**
- Mala (108 beads) for counting
- Or simply repeat without counting

**Methods:**
- **Vaikhari** (audible) - Out loud, good for beginners
- **Upamshu** (whispered) - Lips move, no sound
- **Manasika** (mental) - Silent, most powerful

**Practice:**
\`\`\`
1. Sit comfortably, spine straight
2. Set intention or invoke the mantra's energy
3. Begin repeating (108 times traditional)
4. Let the mantra lead, mind follows
5. Notice the silence after
\`\`\`

### OM: The Universal Mantra

**AUM** represents the three states of consciousness:
- **A** - Waking state (creation)
- **U** - Dream state (preservation)
- **M** - Deep sleep (dissolution)
- **Silence after** - The fourth state (Turiya)

**How to chant OM:**
\`\`\`
Inhale deeply
A - From belly, mouth open
U - Rises through chest
M - Lips close, humming
... - Silence, absorption
\`\`\`
      `,
      keyTakeaway: 'Mantra repetition is a powerful focus technique that produces measurable neurological changes. The rhythmic repetition gives the mind something to hold, creating concentrated states that quiet mental chatter.',
      actionItem: 'Practice chanting OM for 5 minutes. Take a deep breath, chant AUM slowly, feel each part vibrate in body (A-belly, U-chest, M-head). Rest in silence after. Notice your state before and after.',
      quiz: {
        question: 'What does the word "mantra" literally mean?',
        options: [
          'Sacred prayer',
          'Mind protection/instrument',
          'Holy chant',
          'Spiritual song'
        ],
        correct: 1,
        explanation: 'Mantra comes from "manas" (mind) and "tra" (protection or instrument), meaning an instrument for protecting or focusing the mind through repetition of sound.'
      }
    }
  },
  {
    id: 'spirit-007',
    title: 'The Yoga Sutras: Psychology of Liberation',
    type: 'concept',
    duration: 14,
    xpReward: 120,
    content: {
      overview: 'Explore Patanjali\'s Yoga Sutras—the foundational text of yoga psychology and the systematic path to mental mastery.',
      mainContent: `
## The Yoga Sutras of Patanjali

Written approximately 400 CE, the 196 sutras (threads) systematize the philosophy and practice of yoga.

### The Definition of Yoga

**Sutra 1.2:** "Yogas chitta vritti nirodha"
*Yoga is the cessation of the fluctuations of the mind.*

Your natural state is peace. The fluctuations (vrittis) obscure it.

### The Five Vrittis (Mental Fluctuations)

1. **Pramana** - Valid knowledge (perception, inference, testimony)
2. **Viparyaya** - Misconception, error
3. **Vikalpa** - Imagination, fantasy
4. **Nidra** - Sleep
5. **Smriti** - Memory

All thought falls into these categories. Yoga is mastering them.

### The Eight Limbs (Ashtanga)

Patanjali's systematic path:

| Limb | Sanskrit | Practice |
|------|----------|----------|
| 1 | **Yama** | Ethical restraints (non-violence, truth, etc.) |
| 2 | **Niyama** | Personal observances (purity, contentment, etc.) |
| 3 | **Asana** | Posture (steady, comfortable seat) |
| 4 | **Pranayama** | Breath control |
| 5 | **Pratyahara** | Sense withdrawal |
| 6 | **Dharana** | Concentration (single point focus) |
| 7 | **Dhyana** | Meditation (sustained focus) |
| 8 | **Samadhi** | Absorption (union) |

### The Kleshas (Obstacles)

Five root causes of suffering:

1. **Avidya** - Ignorance (root of all others)
2. **Asmita** - Ego (false identification)
3. **Raga** - Attachment (clinging to pleasure)
4. **Dvesha** - Aversion (avoiding pain)
5. **Abhinivesha** - Fear of death (clinging to life)

### Practice and Non-Attachment

**Sutra 1.12:** "Abhyasa vairagyabhyam tan nirodha"
*The cessation of mental fluctuations is achieved through practice and non-attachment.*

**Abhyasa (Practice):**
- Consistent effort
- Long-term commitment
- Uninterrupted
- With devotion

**Vairagya (Non-attachment):**
- Dispassion toward results
- Non-clinging
- Inner freedom
- Peace regardless of outcome

### Practical Application

The Yoga Sutras offer a complete psychology:
- Diagnosis of suffering (kleshas)
- Path to freedom (eight limbs)
- Method (practice + non-attachment)
- Goal (chitta vritti nirodha)
      `,
      keyTakeaway: 'The Yoga Sutras provide a systematic map of the mind and path to mental mastery. Yoga is defined as stilling mental fluctuations through consistent practice (abhyasa) and non-attachment (vairagya).',
      actionItem: 'Reflect on the five kleshas in your own life. Which is strongest for you: ignorance, ego, attachment, aversion, or fear? Journal about how this klesha manifests in your daily experience.'
    }
  },
  {
    id: 'spirit-008',
    title: 'Meditation Techniques: A Complete Toolkit',
    type: 'exercise',
    duration: 15,
    xpReward: 130,
    content: {
      overview: 'Learn multiple meditation techniques so you can choose the right practice for your state and goals.',
      mainContent: `
## Your Meditation Toolkit

Different techniques serve different purposes. Build your repertoire.

### 1. Breath Awareness (Anapanasati)

**Method:**
- Focus on natural breath
- Notice inhale, exhale
- Don't control, just observe
- Return when distracted

**Best for:** Beginners, daily practice, calming
**Duration:** 10-30 minutes

### 2. Body Scan

**Method:**
- Move attention through body systematically
- Notice sensations without judgment
- Relax each area
- Head to toe or toe to head

**Best for:** Stress, body tension, sleep preparation
**Duration:** 15-45 minutes

### 3. Loving-Kindness (Metta)

**Method:**
\`\`\`
Repeat phrases while visualizing:
"May I be happy. May I be healthy.
May I be safe. May I live with ease."

Expand to: loved one → neutral person → difficult person → all beings
\`\`\`

**Best for:** Compassion, difficult relationships, self-criticism
**Duration:** 10-30 minutes

### 4. Visualization

**Method:**
- Create detailed mental image
- Sacred place, light, deity, etc.
- Engage all senses
- Deepen with breath

**Best for:** Creativity, positive states, preparation
**Duration:** 10-20 minutes

### 5. Mantra Meditation

**Method:**
- Choose a mantra (OM, So Hum, etc.)
- Repeat silently or aloud
- Let it become automatic
- Rest in the silence between

**Best for:** Focus, devotion, overcoming mental noise
**Duration:** 10-30 minutes

### 6. Self-Inquiry (Atma Vichara)

**Method:**
- Ask "Who am I?"
- Trace the sense of "I" to its source
- Don't answer conceptually—feel directly
- Rest in awareness itself

**Best for:** Advanced practitioners, direct insight
**Duration:** 20+ minutes

### 7. Open Awareness (Shikantaza/Choiceless Awareness)

**Method:**
- No object of focus
- Be aware of awareness itself
- Allow everything, cling to nothing
- Rest as the witness

**Best for:** Advanced, integration, naturalness
**Duration:** 20+ minutes

### Matching Technique to State

| Your State | Recommended Technique |
|------------|----------------------|
| Anxious, racing mind | Breath counting, body scan |
| Angry, frustrated | Loving-kindness |
| Dull, tired | Energizing pranayama first, then breath focus |
| Scattered | Mantra |
| Seeking insight | Self-inquiry |
| Generally balanced | Open awareness |
      `,
      keyTakeaway: 'Different meditation techniques serve different purposes. Having a toolkit allows you to match the practice to your current state and needs rather than forcing one approach.',
      actionItem: 'This week, try three different techniques from the list: breath awareness, loving-kindness, and mantra meditation. Spend 10 minutes on each. Note which feels most natural and effective for you.'
    }
  },

  // LEVEL 2: INTERMEDIATE (Lessons 9-16)
  {
    id: 'spirit-009',
    title: 'The Chakra System: Energy Map of Consciousness',
    type: 'concept',
    duration: 14,
    xpReward: 120,
    content: {
      overview: 'Explore the yogic chakra system as a map of psychological development and energy distribution in the body.',
      mainContent: `
## Chakras: Wheels of Energy

The **chakra system** describes seven main energy centers along the spine, each associated with different psychological functions.

### The Seven Major Chakras

| # | Name | Location | Theme | Element |
|---|------|----------|-------|---------|
| 1 | **Muladhara** | Base of spine | Survival, security | Earth |
| 2 | **Svadhisthana** | Below navel | Pleasure, creativity | Water |
| 3 | **Manipura** | Solar plexus | Will, power | Fire |
| 4 | **Anahata** | Heart | Love, connection | Air |
| 5 | **Vishuddha** | Throat | Expression, truth | Ether |
| 6 | **Ajna** | Third eye | Intuition, insight | Light |
| 7 | **Sahasrara** | Crown | Unity, transcendence | Consciousness |

### Psychological Interpretation

Each chakra represents a developmental stage:

**Muladhara (Root):**
- Basic needs met?
- Do you feel safe?
- Grounded or anxious?

**Svadhisthana (Sacral):**
- Healthy relationship with pleasure?
- Creative expression flowing?
- Emotional fluidity?

**Manipura (Solar Plexus):**
- Personal power intact?
- Healthy boundaries?
- Confident in action?

**Anahata (Heart):**
- Capacity for love?
- Self-compassion?
- Forgiveness and openness?

**Vishuddha (Throat):**
- Speaking your truth?
- Authentic expression?
- Listening well?

**Ajna (Third Eye):**
- Trusting intuition?
- Clear perception?
- Beyond duality?

**Sahasrara (Crown):**
- Spiritual connection?
- Sense of unity?
- Ego transcendence?

### Signs of Imbalance

| Chakra | Deficient | Excessive |
|--------|-----------|-----------|
| Root | Fearful, ungrounded | Rigid, materialistic |
| Sacral | Repressed, numb | Addictive, overly emotional |
| Solar | Passive, weak | Controlling, angry |
| Heart | Cold, isolated | Codependent, no boundaries |
| Throat | Silent, lies | Talks too much, doesn't listen |
| Third Eye | Confused, denial | Delusion, over-intellectualizing |
| Crown | Disconnected | Spiritual bypassing |

### Working with Chakras

**Practices for each:**
- Root: Grounding poses, nature, security practices
- Sacral: Hip openers, creativity, emotional expression
- Solar: Core work, confidence building, action
- Heart: Heart openers, love meditation, forgiveness
- Throat: Chanting, journaling, speaking practice
- Third Eye: Meditation, intuition exercises, visualization
- Crown: Silent meditation, surrender, devotion
      `,
      keyTakeaway: 'The chakra system is a map of psychological and spiritual development. Understanding it helps identify where your energy is blocked or excessive, guiding targeted practice for balanced growth.',
      actionItem: 'Self-assess using the chakra framework. Where do you feel most blocked or deficient? Where excessive? Choose one chakra to focus on this month with specific practices.'
    }
  },
  {
    id: 'spirit-010',
    title: 'Kundalini: The Serpent Power',
    type: 'concept',
    duration: 15,
    xpReward: 130,
    content: {
      overview: 'Understand the yogic concept of kundalini energy—the dormant spiritual potential said to lie at the base of the spine.',
      mainContent: `
## Kundalini: Coiled Energy

**Kundalini** (Sanskrit: "coiled one") refers to a dormant energy at the base of the spine, often depicted as a serpent.

### The Traditional View

According to tantric yoga:
- Kundalini is Shakti (divine feminine energy) resting at Muladhara
- Through practice, it awakens and rises through the chakras
- Union with Shiva (consciousness) at crown = enlightenment

### Stages of Kundalini Awakening

**1. Dormant State:**
- Energy sleeps at base of spine
- Normal consciousness
- Worldly focus

**2. Awakening:**
- Practices stimulate energy
- May feel heat, tingling, vibration
- Beginning of ascent

**3. Rising:**
- Energy moves up sushumna (central channel)
- Pierces each chakra
- Psychological and spiritual changes

**4. Full Awakening:**
- Reaches crown chakra
- Samadhi states
- Transformation of consciousness

### Kundalini Experiences

**Physical sensations:**
- Heat or cold along spine
- Tingling or electricity
- Spontaneous movements (kriyas)
- Changes in breathing

**Psychological effects:**
- Heightened emotions
- Vivid dreams
- Altered states
- Insights and visions

**Cautions:**
- Premature awakening can be destabilizing
- Should be gradual and integrated
- Need stable foundation (yamas, niyamas)
- Qualified guidance recommended

### Safe Kundalini Practices

**Kundalini Yoga (as taught by Yogi Bhajan):**
- Combines asana, pranayama, mantra
- Specific kriyas (sets) for awakening
- Emphasis on nervous system strengthening

**Traditional Approach:**
- Ethical foundation first
- Asana and pranayama mastery
- Meditation deepening
- Gradual, natural awakening

### Modern Understanding

Kundalini experiences may relate to:
- Nervous system activation
- Bioelectric phenomena
- Psychological integration
- States of heightened awareness

**Whether literal energy or metaphor, the experiences are real and the transformation genuine.**
      `,
      keyTakeaway: 'Kundalini represents the dormant spiritual potential within. While dramatic awakenings can occur, the safest path is gradual development through ethical living, consistent practice, and proper guidance.',
      actionItem: 'Practice Sat Kriya (a basic Kundalini yoga exercise): Sit on heels, arms overhead with fingers interlaced, chant "Sat" (navel pulls in) "Nam" (release). 3 minutes, then rest. Notice the energy in your spine.'
    }
  },
  {
    id: 'spirit-011',
    title: 'Yoga Nidra: The Sleep of the Yogis',
    type: 'concept',
    duration: 13,
    xpReward: 115,
    content: {
      overview: 'Learn Yoga Nidra—a powerful guided meditation that induces profound relaxation while maintaining awareness.',
      mainContent: `
## Yoga Nidra: Conscious Sleep

**Yoga Nidra** = Yogic sleep

A state of consciousness between waking and sleeping, where the body sleeps but the mind remains aware.

### The Research

**Stanford and other studies show:**
- Reduces stress and anxiety
- Improves sleep quality
- Helps with PTSD
- Comparable to hours of regular sleep

**30 minutes of Yoga Nidra ≈ 2-4 hours of regular sleep** (in terms of restoration)

### The States of Consciousness

| State | Brainwaves | Characteristics |
|-------|------------|-----------------|
| Waking | Beta | Active thinking |
| Relaxed | Alpha | Calm, present |
| **Yoga Nidra** | **Theta** | **Deep relaxation, aware** |
| Sleep | Delta | Unconscious |

Yoga Nidra keeps you in Theta—the hypnagogic state between waking and sleeping.

### The Traditional Structure

**1. Preparation**
- Lie in Savasana
- Set up comfort
- Settle the body

**2. Sankalpa (Intention)**
- Plant a positive seed
- Short, present-tense statement
- Repeated 3 times

**3. Rotation of Consciousness**
- Awareness through body parts
- Right side, left side, back, front
- Rapid but thorough

**4. Breath Awareness**
- Natural breath observation
- May count breaths

**5. Opposite Sensations**
- Heavy/light
- Hot/cold
- Expands consciousness

**6. Visualization**
- Images, scenes, symbols
- Access subconscious

**7. Sankalpa Repetition**
- Reinforces intention
- Plants deeper

**8. Return**
- Gradual awakening
- Movement, awareness

### The Power of Sankalpa

Your intention, repeated in the Yoga Nidra state, plants deeply in the subconscious.

**Examples:**
- "I am calm and confident"
- "My health improves daily"
- "I am at peace with myself"

**Guidelines:**
- Positive (what you want, not what you don't)
- Present tense (as if already true)
- Short and simple
- Emotionally meaningful
      `,
      keyTakeaway: 'Yoga Nidra is a systematic method to enter the state between waking and sleeping while maintaining awareness. It offers profound relaxation and is a powerful tool for stress reduction and intention-setting.',
      actionItem: 'Do a guided Yoga Nidra practice (many free on YouTube/apps, 20-45 min). Before starting, choose your sankalpa (positive intention). Practice at least 3 times this week, ideally before sleep.'
    }
  },
  {
    id: 'spirit-012',
    title: 'Dharana and Dhyana: Concentration to Meditation',
    type: 'concept',
    duration: 14,
    xpReward: 120,
    content: {
      overview: 'Understand the progression from concentration (Dharana) to meditation (Dhyana)—the crucial middle stages of the eight limbs.',
      mainContent: `
## From Effort to Effortlessness

**Dharana** (concentration) → **Dhyana** (meditation) → **Samadhi** (absorption)

These three inner limbs form the progressive deepening of practice.

### Dharana: Focused Concentration

**Definition:** Binding the mind to one place, object, or idea.

**Characteristics:**
- Single-pointed focus
- Effort required
- Mind wanders, returns
- Object of concentration chosen

**Objects for Dharana:**
- Breath
- Mantra
- Visual object (candle, image)
- Body sensation
- Sound
- Concept

### Dhyana: Effortless Flow

**Definition:** Uninterrupted flow of attention toward the object.

**Characteristics:**
- Sustained attention
- Less effort than Dharana
- Subject-object distinction begins to dissolve
- Flow state quality

**The transition:**
\`\`\`
Dharana: Focus... wander... return... focus... wander... return
         (gaps between moments of focus)

Dhyana:  Focus~~~~continuous~~~~unbroken~~~~flow~~~~
         (no gaps, stream of awareness)
\`\`\`

### Practical Progression

**Stage 1: Building Concentration (weeks 1-8)**
- Short sessions (10-15 min)
- Expect many distractions
- Success = noticing distraction and returning
- Build the "concentration muscle"

**Stage 2: Stabilizing (weeks 8-24)**
- Longer sessions (20-30 min)
- Fewer distractions
- Periods of sustained focus
- Glimpses of Dhyana

**Stage 3: Deepening (months 6+)**
- Extended sessions (30-60 min)
- Longer absorption periods
- Less effort needed
- Dhyana becomes accessible

### Trataka: Candle Gazing

A powerful Dharana practice:

**Method:**
\`\`\`
1. Place candle at eye level, arm's length away
2. Gaze at flame without blinking (1-3 min)
3. Close eyes, visualize flame at third eye
4. When image fades, open eyes and repeat
5. 15-20 minutes total
\`\`\`

**Benefits:**
- Strengthens concentration rapidly
- Cleanses eyes (traditionally)
- Develops visualization ability
- Calms the mind

### Signs of Progress

**In concentration:**
- Longer periods before distraction
- Quicker return when distracted
- Less emotional resistance
- Physical stillness easier

**Approaching meditation:**
- Time passes unnoticed
- Sense of spaciousness
- Subject-object boundary softens
- Profound peace
      `,
      keyTakeaway: 'Dharana (concentration) is the effortful focusing of mind that, through practice, becomes Dhyana (meditation)—an effortless, unbroken flow of attention. The transition happens naturally with consistent practice.',
      actionItem: 'Practice Trataka (candle gazing) for 10-15 minutes daily this week. Notice how your ability to sustain focus improves even within a single session. This rapidly builds the concentration needed for deeper meditation.'
    }
  },
  {
    id: 'spirit-013',
    title: 'Samadhi: States of Absorption',
    type: 'concept',
    duration: 15,
    xpReward: 130,
    content: {
      overview: 'Explore the peak states of meditative absorption described in yoga—the culmination of the spiritual path.',
      mainContent: `
## Samadhi: Union

**Samadhi** = Sam (together) + A (toward) + Dha (to hold)
"Bringing together" or "complete absorption"

The eighth and final limb of Patanjali's yoga.

### The Progression to Samadhi

\`\`\`
Dharana:  Meditator → aware of → Object
          (three-part relationship)

Dhyana:   Meditator ↔ Object
          (flowing connection)

Samadhi:  [Meditator-Object]
          (unified experience)
\`\`\`

### Types of Samadhi

**Savikalpa Samadhi (with seed):**
- Absorption with object
- Still subtle duality
- Blissful, profound
- Temporary

**Nirvikalpa Samadhi (without seed):**
- Complete absorption
- No subject-object distinction
- Pure consciousness
- Transformative

**Sahaja Samadhi (natural):**
- Samadhi becomes natural state
- Maintained in daily life
- Liberation (moksha)
- Rare, represents full realization

### Characteristics of Samadhi States

**During absorption:**
- Complete stillness
- Breath may become very subtle
- Time disappears
- Profound peace
- No sense of separate self

**After emerging:**
- Deep peace lingers
- Sense of unreality about the world
- Difficult to describe
- Lasting changes in consciousness

### The Neuroscience of Samadhi

Advanced meditators in deep states show:
- High gamma wave activity
- Global brain synchronization
- Decreased parietal lobe activity (sense of self)
- Unusual EEG patterns

### Preparing for Samadhi

**Prerequisites:**
- Ethical foundation (yama, niyama)
- Physical purification (asana)
- Energy management (pranayama)
- Sense withdrawal (pratyahara)
- Concentration mastery (dharana)
- Meditation depth (dhyana)

**Cannot be forced:**
- Grace element involved
- Comes when conditions are right
- Not a goal to grasp
- Effort AND surrender required

### Common Misconceptions

**Not:**
- Mere relaxation
- Unconsciousness
- Trance or hypnosis
- Something to achieve
- Escapism

**Actually:**
- Heightened awareness
- Super-consciousness
- Complete presence
- Natural state revealed
- Full engagement with reality
      `,
      keyTakeaway: 'Samadhi represents the natural culmination of meditative practice—a state of absorption where the sense of separate self temporarily dissolves. It cannot be forced but arises when conditions of practice and grace align.',
      actionItem: 'Don\'t aim for samadhi directly—that creates grasping. Instead, deepen your current practice. Extend your meditation by 5-10 minutes this week. Allow whatever arises without expectation. Let go of goals during practice.'
    }
  },
  {
    id: 'spirit-014',
    title: 'Karma Yoga: Action as Spiritual Practice',
    type: 'concept',
    duration: 13,
    xpReward: 115,
    content: {
      overview: 'Learn how to transform everyday actions into spiritual practice through the yoga of selfless service.',
      mainContent: `
## Karma Yoga: The Path of Action

**Karma Yoga** is one of the main spiritual paths described in the Bhagavad Gita.

### The Problem with Ordinary Action

Normal actions bind us because:
- We act from desire (raga)
- We avoid what we dislike (dvesha)
- We attach to results
- Ego claims ownership ("I did this")

This creates karma—the cycle of action and reaction.

### The Karma Yoga Solution

From the Bhagavad Gita:

> "You have the right to action alone, never to its fruits. Let not the fruits of action be your motive, nor let your attachment be to inaction." (2.47)

**Key principles:**

**1. Right to action, not results**
- Do your best
- Release attachment to outcome
- Process over product

**2. No selfish motivation**
- Act for the good, not personal gain
- Service orientation
- Offering to the divine/whole

**3. Equanimity in success and failure**
- Same response to praise or blame
- Win or lose with grace
- Emotional stability

### Practical Application

**Transform ANY action into Karma Yoga:**

| Ordinary Action | Karma Yoga Approach |
|-----------------|---------------------|
| Work for paycheck | Offer your best as service |
| Exercise for vanity | Care for body as temple |
| Helping for recognition | Help without expectation |
| Parenting for control | Guide with detachment |

### The Three Gunas in Action

Actions come from three qualities:

**Sattvic action:**
- Done without attachment
- Without like or dislike
- Pure, for right reasons

**Rajasic action:**
- Done with desire for results
- With ego and effort
- Agitated

**Tamasic action:**
- Done in delusion
- Careless, harmful
- Unconscious

**Karma Yoga cultivates sattvic action.**

### Practice in Daily Life

**Morning intention:**
"Today I offer all my actions as service. I will do my best and release the results."

**Throughout day:**
- Catch attachment to outcomes
- Notice ego claiming credit
- Offer each action
- Stay present in the doing

**Evening reflection:**
- Where was I attached to results?
- Where did I act from ego?
- Where did I practice true karma yoga?
      `,
      keyTakeaway: 'Karma Yoga transforms ordinary actions into spiritual practice by acting without attachment to results, serving without selfish motivation, and maintaining equanimity in success and failure.',
      actionItem: 'Choose one regular activity this week (work task, household chore, etc.). Practice Karma Yoga: do your absolute best while completely releasing attachment to the outcome. Notice how this changes the experience.'
    }
  },
  {
    id: 'spirit-015',
    title: 'Bhakti: The Path of Devotion',
    type: 'concept',
    duration: 14,
    xpReward: 120,
    content: {
      overview: 'Explore bhakti yoga—the path of love and devotion that transforms emotion into a vehicle for spiritual awakening.',
      mainContent: `
## Bhakti: Love as Liberation

**Bhakti Yoga** is the path of devotion—directing love toward the divine.

### Why Bhakti?

- Most natural for emotional temperaments
- Accessible to everyone (no intellectual requirements)
- Uses the heart's natural capacity for love
- Transforms attachment into devotion

### The Nine Forms of Bhakti

Traditional forms of devotional practice:

1. **Shravana** - Hearing about the divine
2. **Kirtana** - Chanting/singing praises
3. **Smarana** - Remembering constantly
4. **Padasevana** - Service at the feet
5. **Archana** - Ritual worship
6. **Vandana** - Prostration, humility
7. **Dasya** - Servant attitude
8. **Sakhya** - Friendship with divine
9. **Atmanivedana** - Complete self-surrender

### Levels of Bhakti

**Vaidhi Bhakti (Rule-following):**
- Following practices and rituals
- External devotion
- Building discipline
- Entry level

**Raganuga Bhakti (Spontaneous):**
- Natural longing arises
- Devotion flows without effort
- Internal transformation
- Mature bhakti

### The Psychology of Devotion

Bhakti transforms emotions:
- Love → Divine love
- Attachment → Surrender
- Fear → Reverence
- Anger → Passion for truth

**All emotions become fuel for devotion.**

### Practical Bhakti Practices

**Japa (Mantra repetition):**
- Malas, continuous remembrance
- Names of the divine
- Invokes presence

**Kirtan (Devotional chanting):**
- Call and response singing
- Community practice
- Heart-opening

**Puja (Worship):**
- Altar, offerings
- Daily ritual
- Externalizes devotion

**Seva (Selfless service):**
- Serving others as divine
- Karma yoga + bhakti
- Love in action

### Ishta Devata: Personal Deity

Bhakti allows choosing a personal form of the divine:
- Whatever form resonates
- Relationship becomes intimate
- Form as doorway to formless

**Common Ishta Devatas:**
- Krishna, Rama (preservation)
- Shiva (transformation)
- Durga, Kali (divine mother)
- Ganesha (remover of obstacles)
- Christ, Buddha, etc.
      `,
      keyTakeaway: 'Bhakti Yoga uses the heart\'s natural capacity for love as a spiritual path. By directing love toward the divine (in whatever form resonates), all emotions become fuel for awakening.',
      actionItem: 'Find a kirtan (devotional chanting) recording and listen/chant along for 15 minutes. Notice how the repetition and melody affect your emotional state. Bhakti works through feeling, not thinking.',
      quiz: {
        question: 'What makes Bhakti Yoga unique among spiritual paths?',
        options: [
          'It requires the most intellectual study',
          'It uses love and emotion as the vehicle for spiritual growth',
          'It focuses only on physical postures',
          'It requires complete renunciation of the world'
        ],
        correct: 1,
        explanation: 'Bhakti Yoga is the path of devotion that transforms the heart\'s natural capacity for love into a spiritual practice. It uses emotion—rather than intellect or action—as the primary vehicle for awakening.'
      }
    }
  },
  {
    id: 'spirit-016',
    title: 'Jnana Yoga: The Path of Knowledge',
    type: 'concept',
    duration: 15,
    xpReward: 130,
    content: {
      overview: 'Explore Jnana Yoga—the path of wisdom and self-inquiry that uses the intellect to transcend the intellect.',
      mainContent: `
## Jnana: Knowledge that Liberates

**Jnana Yoga** is the path of discriminative wisdom—using inquiry to realize the true nature of Self.

### The Core Question

**"Who am I?"**

Not the body (it changes)
Not the mind (it changes)
Not the emotions (they change)
Not the roles (they change)

**What remains unchanged?**

### Viveka: Discrimination

The fundamental practice of Jnana Yoga:

**Neti Neti:** "Not this, not this"

Systematically discern:
- What is permanent (sat) vs. impermanent (asat)
- What is Self (Atman) vs. not-Self (anatman)
- What is real vs. appearance

### The Mahavakyas (Great Sayings)

Four statements from the Upanishads:

| Saying | Translation | Upanishad |
|--------|-------------|-----------|
| **Tat Tvam Asi** | "You are That" | Chandogya |
| **Aham Brahmasmi** | "I am Brahman" | Brihadaranyaka |
| **Ayam Atma Brahma** | "This Self is Brahman" | Mandukya |
| **Prajnanam Brahma** | "Consciousness is Brahman" | Aitareya |

These point to the ultimate identity of individual Self and universal Consciousness.

### The Three Bodies Teaching

Jnana Yoga analyzes experience through three bodies:

**Sthula Sharira (Gross body):**
- Physical form
- Waking state experience
- Material elements

**Sukshma Sharira (Subtle body):**
- Mind, intellect, emotions
- Dream state
- Energy

**Karana Sharira (Causal body):**
- Deep sleep state
- Seeds of karma
- Ignorance

**The witness (Sakshi) observes all three.**

### Self-Inquiry Practice (Atma Vichara)

Ramana Maharshi's direct method:

**Practice:**
\`\`\`
1. Thought arises
2. Ask: "To whom does this thought arise?"
3. Answer: "To me"
4. Ask: "Who am I?"
5. Don't answer conceptually—feel the source
6. Rest in the "I" sense
7. Trace it to its source
\`\`\`

**The goal is not an answer but dissolution of the questioner.**

### Prerequisites for Jnana Yoga

**The "Four Qualifications" (Sadhana Chatushtaya):**

1. **Viveka** - Discrimination between real and unreal
2. **Vairagya** - Dispassion toward worldly objects
3. **Shad-Sampat** - Six virtues (calm, control, withdrawal, endurance, faith, concentration)
4. **Mumukshutva** - Burning desire for liberation
      `,
      keyTakeaway: 'Jnana Yoga uses discriminative inquiry to realize that you are not the body, mind, or ego, but the unchanging awareness in which all experience arises. The question "Who am I?" points beyond concepts to direct recognition.',
      actionItem: 'Practice self-inquiry for 10 minutes: When a thought arises, ask "To whom does this thought come?" then "Who am I?" Don\'t seek an intellectual answer—feel the sense of "I" and rest there. Notice what remains when thought stops.'
    }
  },

  // LEVEL 3: ADVANCED (Lessons 17-25)
  {
    id: 'spirit-017',
    title: 'Integrating Paths: The Four Yogas',
    type: 'concept',
    duration: 14,
    xpReward: 120,
    content: {
      overview: 'Understand how the four main yoga paths (Karma, Bhakti, Jnana, Raja) work together for complete spiritual development.',
      mainContent: `
## The Four Paths

Each yoga addresses a different aspect of human nature:

| Path | Faculty | Approach | Best For |
|------|---------|----------|----------|
| **Karma** | Will/Action | Selfless service | Active temperament |
| **Bhakti** | Emotion | Devotion | Emotional temperament |
| **Jnana** | Intellect | Self-inquiry | Intellectual temperament |
| **Raja** | Mind | Meditation | Balanced/scientific temperament |

### Integration, Not Separation

No one is purely one type. Swami Vivekananda taught that complete development requires all four:

**A balanced practice might include:**
- Morning meditation (Raja)
- Selfless work during day (Karma)
- Devotional practice (Bhakti)
- Self-inquiry (Jnana)

### How They Support Each Other

**Karma supports all:**
- Purifies the ego
- Creates conditions for other practices
- Keeps practice grounded

**Bhakti fuels all:**
- Provides motivation
- Softens intellectual aridity
- Sustains through difficulties

**Jnana clarifies all:**
- Prevents superstition
- Deepens understanding
- Points to truth

**Raja integrates all:**
- Practical methodology
- Direct experience
- Systematic approach

### Finding Your Emphasis

**Assessment questions:**

*Karma tendency:*
- Do you need to be doing something?
- Is service your natural expression?
- Do you feel spirituality should be practical?

*Bhakti tendency:*
- Are you emotionally moved by the divine?
- Does devotional music/practice attract you?
- Do you prefer relationship to abstraction?

*Jnana tendency:*
- Do you need intellectual understanding?
- Are you drawn to philosophy?
- Do you question until you understand?

*Raja tendency:*
- Are you systematic and methodical?
- Do you prefer experimentation to belief?
- Is meditation your core practice?

### Practical Integration Example

**Morning (30-60 min):**
- Pranayama (Raja)
- Meditation (Raja)
- Self-inquiry (Jnana)

**Throughout day:**
- Selfless action (Karma)
- Remembrance of divine (Bhakti)
- Witnessing practice (Jnana)

**Evening:**
- Devotional practice (Bhakti)
- Gratitude (Bhakti)
- Reflection (Jnana)
      `,
      keyTakeaway: 'The four yogas address different human faculties: action, emotion, intellect, and mind. Complete development integrates all four, with emphasis based on your temperament.',
      actionItem: 'Honestly assess your temperament. Which path calls you most strongly? Which do you resist or neglect? This week, deliberately include practice from your neglected path.'
    }
  },
  {
    id: 'spirit-018',
    title: 'The Witness: Cultivating Sakshi Bhava',
    type: 'concept',
    duration: 13,
    xpReward: 115,
    content: {
      overview: 'Develop the witness consciousness (Sakshi) that observes experience without identification—the key to spiritual freedom.',
      mainContent: `
## The Witness Consciousness

**Sakshi** = The witness

The unchanging awareness that observes all experience but is not affected by it.

### The Observer vs. The Observed

| Observed (Changes) | Observer (Unchanging) |
|-------------------|----------------------|
| Body | Awareness |
| Thoughts | That which knows thoughts |
| Emotions | That which witnesses emotions |
| Sensations | Pure perceiving |
| States (wake/dream/sleep) | Presence throughout |

**You have thoughts. You are not thoughts.**
**You have a body. You are not the body.**

### Developing Witness Consciousness

**Practice 1: Noticing Noticing**
\`\`\`
Notice a thought → Who notices?
Notice a sensation → Who notices?
Notice an emotion → Who notices?
Rest as the noticer
\`\`\`

**Practice 2: Third-Person Observation**
- Watch yourself as if watching another
- "The body is tired"
- "Anxiety is arising"
- Creates distance, reduces identification

**Practice 3: "I am not this"**
- Whatever arises, note: "I am not this"
- Thoughts: "I am not this"
- Emotions: "I am not this"
- Rest in what remains

### Benefits of Witness Consciousness

**Emotional regulation:**
- Emotions arise but don't overwhelm
- Space between stimulus and response
- Less reactivity

**Mental clarity:**
- Thoughts observed, not believed
- Less caught in stories
- Clearer perception

**Spiritual insight:**
- Recognition of true nature
- Freedom from identification
- Peace regardless of circumstances

### The Witness in Daily Life

**Morning:**
Set intention to observe today

**During experiences:**
- Pleasant: "Pleasure is being witnessed"
- Unpleasant: "Discomfort is being witnessed"
- Neutral: "This is being witnessed"

**Key insight:**
The witness is always already here. You don't create it—you recognize it.

### Common Mistakes

**Dissociation vs. Witnessing:**
- Dissociation: Disconnected, numb, avoidant
- Witnessing: Fully present, clear, engaged

**New identity:**
- Creating "the witness" as new ego identity
- The witness isn't a thing—it's awareness itself

**Bypassing:**
- Using witnessing to avoid feeling
- True witnessing includes feeling fully
      `,
      keyTakeaway: 'The witness (Sakshi) is the unchanging awareness that observes all experience. Developing witness consciousness creates freedom from identification with thoughts, emotions, and circumstances while remaining fully present.',
      actionItem: 'Practice the witness throughout today. Whatever arises—thought, emotion, sensation—simply note "This is being witnessed." Don\'t suppress experience; watch it fully. Notice how this creates space.'
    }
  },
  {
    id: 'spirit-019',
    title: 'Working with the Shadow',
    type: 'concept',
    duration: 14,
    xpReward: 120,
    content: {
      overview: 'Integrate shadow work with spiritual practice—addressing the unconscious material that can sabotage awakening.',
      mainContent: `
## The Shadow in Spiritual Life

Carl Jung's "shadow" refers to unconscious parts of ourselves—often rejected or repressed.

### Spiritual Bypassing

**Danger:** Using spirituality to avoid psychological work.

**Signs:**
- "I'm above anger" (actually suppressing it)
- Extreme niceness (hidden resentment)
- "Everything is love" (denying legitimate hurt)
- Premature transcendence

**Result:** Shadow grows stronger, eventually erupts.

### What Goes Into Shadow

Parts we learned were unacceptable:
- Anger (in some families)
- Sexuality (in some religions)
- Vulnerability (in some cultures)
- Power (for some genders)
- Sadness, fear, selfishness...

**Whatever is rejected becomes shadow.**

### Shadow in Eastern Traditions

Yoga traditions describe this as:
- **Vasanas** - Deep impressions, tendencies
- **Samskaras** - Karmic imprints
- **Kleshas** - Afflictions (ignorance, ego, attachment, aversion, fear)

**These are the shadow in Sanskrit terminology.**

### Integration Practices

**1. Honest Self-Observation**
- Notice what triggers strong reactions
- What do you judge in others?
- What do you deny in yourself?
- Triggers point to shadow

**2. Working with Emotion**
- Don't suppress in meditation
- Feel fully, witness clearly
- Let emotions complete their cycle
- Emotions are information

**3. Dream Work**
- Dreams reveal shadow material
- Record and reflect on dreams
- Recurring themes show what's unintegrated

**4. Active Imagination**
- Dialogue with shadow figures
- Give voice to rejected parts
- Move toward integration

### Shadow and Chakras

Shadow material often stored in lower chakras:
- Root: Survival fears
- Sacral: Repressed sexuality/creativity
- Solar plexus: Power issues, shame

**Hip openers, emotional release work can surface shadow.**

### Integration, Not Elimination

The goal isn't to destroy shadow but integrate it:
- Anger becomes healthy assertion
- Fear becomes appropriate caution
- Sexuality becomes creative energy
- Power becomes responsible leadership

**"One does not become enlightened by imagining figures of light, but by making the darkness conscious." — Carl Jung**
      `,
      keyTakeaway: 'Shadow work is essential for authentic spirituality. Repressed material doesn\'t disappear through meditation—it requires conscious integration. True transcendence includes, rather than bypasses, our full humanity.',
      actionItem: 'Identify one quality you judge strongly in others (this often indicates shadow). Honestly ask: "Where might this quality exist in me?" Journal about how you might unconsciously express this trait.'
    }
  },
  {
    id: 'spirit-020',
    title: 'Retreat and Intensive Practice',
    type: 'concept',
    duration: 13,
    xpReward: 115,
    content: {
      overview: 'Understand the role of retreat practice in deepening realization and how to prepare for and integrate intensive experiences.',
      mainContent: `
## The Power of Retreat

Daily practice is essential. Retreat accelerates transformation.

### Why Retreat?

**Removal of distractions:**
- No work, responsibilities
- No social media, news
- Minimal decisions
- Full focus on practice

**Accumulated practice time:**
- Daily: 30-60 min
- Retreat: 8-12+ hours/day
- Concentration deepens dramatically
- Breakthroughs more likely

**Container for transformation:**
- Safe space for shadow material
- Support for difficult experiences
- Community of practitioners

### Types of Retreat

| Type | Duration | Intensity |
|------|----------|-----------|
| Weekend | 2-3 days | Introduction |
| Week | 5-7 days | Substantial depth |
| Extended | 10-30 days | Transformation |
| Long-term | Months-years | Traditional training |

### What to Expect

**Day 1-2:**
- Settling in
- Mind still racing
- Body adjusting
- Restlessness common

**Day 3-4:**
- Deeper settling
- Emotions may surface
- Old memories arise
- Resistance possible

**Day 5-7:**
- Concentration stabilizes
- Insights emerge
- Deep peace possible
- Meditation becomes natural

**Extended retreats:**
- Profound states accessible
- Complete rewiring possible
- Integration crucial afterward

### Retreat Challenges

**Physical:**
- Pain from sitting
- Fatigue, sleepiness
- Digestive changes

**Mental:**
- Intense boredom
- Racing thoughts
- Fantasy and planning

**Emotional:**
- Buried material surfaces
- Grief, fear, anger arising
- Overwhelming states

**These are signs of progress, not problems.**

### Preparation

**Before:**
- Establish daily practice
- Reduce stimulation gradually
- Inform family/work
- Set clear intention

**During:**
- Follow schedule
- Trust the process
- Don't compare to others
- Bring difficulties to teachers

**After:**
- Integrate slowly
- Reduce stimulation
- Maintain practice
- Allow time to adjust
      `,
      keyTakeaway: 'Retreats provide concentrated practice time that can produce breakthroughs not possible with daily practice alone. Proper preparation and integration are essential for lasting benefit.',
      actionItem: 'Research retreat options that fit your path (Vipassana, yoga, etc.). Plan to attend a weekend or longer retreat within the next 6 months. Start preparing by deepening your daily practice.'
    }
  },
  {
    id: 'spirit-021',
    title: 'The Role of the Guru',
    type: 'concept',
    duration: 14,
    xpReward: 120,
    content: {
      overview: 'Understand the traditional guru-disciple relationship, its benefits, its risks, and how to navigate modern spirituality wisely.',
      mainContent: `
## Guru: Remover of Darkness

**Guru** = Gu (darkness) + Ru (remover)
One who leads from darkness to light.

### The Traditional View

In classical Indian spirituality:
- Guru is essential for liberation
- Transmits teachings and energy (shaktipat)
- Represents the divine
- Guides through obstacles
- Earned through lifetimes of seeking

### Functions of a Teacher

**1. Transmission of Teaching**
- Correct interpretation of texts
- Practical instruction
- Answers to questions
- Clearing doubts

**2. Modeling the Path**
- Living example
- Shows what's possible
- Inspires by embodiment

**3. Pointing Out**
- Direct introduction to true nature
- Cuts through concepts
- Transmission beyond words

**4. Support Through Process**
- Navigating difficult states
- Avoiding pitfalls
- Encouragement

### Modern Cautions

**Red flags:**
- Claims of exclusive truth
- Discourages questioning
- Isolates students from others
- Financial exploitation
- Sexual impropriety
- Personality cult

**The guru scandal history teaches discernment is essential.**

### Types of Teachers

**Scholarly teacher:**
- Transmits knowledge
- Explains tradition
- May not be realized

**Practice instructor:**
- Guides technique
- Corrects errors
- Supports practice

**Spiritual mentor:**
- Deeper guidance
- Personal relationship
- Ongoing support

**Satguru (True Guru):**
- Fully realized being
- Direct transmission
- Rare and precious

### Finding a Teacher

**Qualities to seek:**
- Integrity (life matches teaching)
- Lineage (connected to tradition)
- Fruits (students benefit)
- Humility (no inflation)
- Freedom (doesn't create dependency)

**Approach:**
- Study teachings first
- Observe over time
- Trust your discernment
- Commitment develops gradually

### The Inner Guru

Ultimately, the guru points to the inner teacher:
- Your own deepest wisdom
- The Self recognizing itself
- The outer guru activates the inner

**"The guru is not different from the Self." — Ramana Maharshi**
      `,
      keyTakeaway: 'A qualified teacher can accelerate spiritual development significantly, but discernment is essential. The best teachers empower students rather than create dependency, pointing ultimately to the inner guru.',
      actionItem: 'Reflect on teachers who have influenced your spiritual path (directly or through books/recordings). What qualities made them effective? What would you look for in a future teacher?'
    }
  },
  {
    id: 'spirit-022',
    title: 'Death Meditation: The Great Motivator',
    type: 'concept',
    duration: 13,
    xpReward: 115,
    content: {
      overview: 'Use contemplation of death as a powerful tool for spiritual motivation and living fully present.',
      mainContent: `
## Maranasati: Mindfulness of Death

Every spiritual tradition includes death contemplation:
- Buddhist: Maranasati
- Hindu: Death as guru
- Stoic: Memento mori
- Christian: Ars moriendi

### Why Contemplate Death?

**1. Urgency**
- Life is finite
- Practice becomes priority
- No time to waste

**2. Perspective**
- What really matters?
- Petty concerns dissolve
- Essential comes into focus

**3. Letting Go**
- Everything will be lost
- Practice non-attachment now
- Release gripping

**4. Presence**
- Only this moment is guaranteed
- Fully here, now
- Appreciation intensifies

### The Five Remembrances (Buddhist)

Daily contemplation:

> 1. I am of the nature to grow old. There is no way to escape growing old.
> 2. I am of the nature to have ill health. There is no way to escape having ill health.
> 3. I am of the nature to die. There is no way to escape death.
> 4. All that is dear to me and everyone I love are of the nature to change. There is no way to escape being separated from them.
> 5. I am the owner of my actions, heir of my actions. Whatever actions I do, good or evil, of that I shall become the heir.

### Death Meditation Practice

**Practice 1: Impermanence**
\`\`\`
Contemplate:
- This body will die
- Everyone I see will die
- All I'm attached to will be lost
- How shall I live knowing this?
\`\`\`

**Practice 2: Life Review (Imagined)**
- Imagine being at death
- Review your life
- What matters? What doesn't?
- What would you change now?

**Practice 3: Memento Mori**
- Visual reminder of death
- Skull image, wilting flower
- Prompts remembrance

### Integration, Not Morbidity

Death contemplation should:
- Enhance appreciation for life
- Increase compassion
- Motivate practice
- Free from fear

**Not:**
- Depression or nihilism
- Avoidance of life
- Obsession with death
- Escapism

### The Gift of Mortality

Mortality isn't a problem to solve but a teacher:
- Preciousness of each moment
- Motivation for awakening
- Perspective on problems
- Freedom from fear of loss
      `,
      keyTakeaway: 'Contemplating death is a powerful spiritual practice that creates urgency, perspective, and freedom. Regular death meditation motivates practice and helps us live more fully in the present.',
      actionItem: 'Practice the Five Remembrances each morning this week. Read them slowly, feeling the truth of each. Notice how this affects your priorities and presence throughout the day.'
    }
  },
  {
    id: 'spirit-023',
    title: 'Service and Compassion: Seva',
    type: 'concept',
    duration: 12,
    xpReward: 110,
    content: {
      overview: 'Understand how selfless service (seva) functions as spiritual practice and transforms the practitioner.',
      mainContent: `
## Seva: Selfless Service

**Seva** = Service without expectation of return

### Service as Spiritual Practice

How seva transforms:

**1. Dissolves ego**
- Not about "me"
- Identity loosens
- Self-importance diminishes

**2. Cultivates compassion**
- Sees others' suffering
- Heart opens naturally
- Connection deepens

**3. Practice in action**
- Takes meditation off cushion
- Real-world application
- Tests realization

**4. Creates good karma**
- Purifies negative tendencies
- Accumulates merit
- Serves others genuinely

### The Attitude of Seva

**Key principles:**
- No expectation of recognition
- No attachment to outcomes
- See divine in those served
- Offer action to the whole

**The Bhagavad Gita teaching:**
> "Whatever you do, whatever you eat, whatever you offer in sacrifice, whatever you give, whatever austerity you practice—do that as an offering to Me." (9.27)

### Practical Seva

**Formal:**
- Volunteering at spiritual centers
- Humanitarian organizations
- Teaching, mentoring
- Care for environment

**Informal:**
- Helping neighbors
- Anonymous generosity
- Small kindnesses
- Presence with those suffering

### The Bodhisattva Ideal

In Mahayana Buddhism:
- Vow to help all beings awaken
- Personal liberation includes others
- Compassion and wisdom together

**Bodhisattva prayer:**
> "May I be a guard for those who are protectionless,
> A guide for those who journey on the road,
> For those who wish to cross the water,
> May I be a boat, a raft, a bridge."
> — Shantideva

### Compassion and Wisdom

Compassion without wisdom:
- Burnout
- Enabling
- Codependency

Wisdom without compassion:
- Cold detachment
- Spiritual arrogance
- Incompleteness

**True practice: Both together**
- Respond to suffering with skill
- Maintain equanimity while caring
- Serve effectively without attachment
      `,
      keyTakeaway: 'Selfless service (seva) is a direct spiritual practice that dissolves ego, cultivates compassion, and applies realization in daily life. It combines action with non-attachment.',
      actionItem: 'Commit to one regular act of seva—something you do weekly without recognition or reward. It could be volunteering, anonymous helping, or dedicated service to family. Approach it as spiritual practice.'
    }
  },
  {
    id: 'spirit-024',
    title: 'Living Spirituality: Integration in Daily Life',
    type: 'concept',
    duration: 14,
    xpReward: 120,
    content: {
      overview: 'Bridge the gap between formal practice and daily life—making every moment an opportunity for spiritual growth.',
      mainContent: `
## Beyond the Cushion

True spirituality transforms all of life, not just meditation time.

### The Integration Challenge

**Common pattern:**
- Peaceful on cushion
- Reactive in traffic
- Calm in retreat
- Stressed at work

**This gap indicates incomplete integration.**

### Practices for Daily Life

**1. Mindfulness in Activities**
- Full presence with whatever you're doing
- Eating, walking, working—all practice
- "When eating, just eat"

**2. Transitions as Portals**
- Doorways: Pause, breathe, reset
- Starting car: Moment of presence
- Before phone: One conscious breath
- Use natural breaks as mindfulness bells

**3. STOP Practice**
\`\`\`
S - Stop what you're doing
T - Take a breath
O - Observe (body, thoughts, emotions)
P - Proceed with awareness
\`\`\`

**4. Trigger as Teacher**
- When triggered, don't react
- Pause, observe the reaction
- Ask: "What is this teaching me?"
- Respond from awareness

### Spiritual Practice at Work

- See work as service (Karma Yoga)
- Practice patience with colleagues
- Maintain witness awareness
- Use challenges as growth opportunities

### Spiritual Practice in Relationships

- Practice presence with loved ones
- Listen fully (rare gift)
- See the divine in others
- Work with triggers as practice

### The Householder Path

**Traditional view:**
- Monastery: Ideal environment
- Worldly life: Obstacle

**Modern understanding:**
- Daily life IS the practice
- Relationships are teachers
- Work is seva
- Family is sangha

### Moment-to-Moment Remembrance

The goal: Continuous practice

**Not just:** Formal sitting
**But:** Awareness permeating everything

**Indicators of integration:**
- Less reactive in difficulty
- More present in ordinary moments
- Spontaneous compassion
- Peace not dependent on circumstances
      `,
      keyTakeaway: 'Authentic spiritual development integrates practice into every aspect of daily life. The goal is continuous awareness—not just peaceful meditation sessions, but peace and presence permeating all activities and relationships.',
      actionItem: 'Choose one daily activity to make a formal practice (eating one meal mindfully, commute as meditation, etc.). Do this consistently for 30 days. Notice how attention transforms the ordinary into sacred.'
    }
  },
  {
    id: 'spirit-025',
    title: 'Designing Your Lifelong Sadhana',
    type: 'reflection',
    duration: 15,
    xpReward: 150,
    content: {
      overview: 'Create your personalized spiritual practice plan—a sustainable path for lifelong development.',
      mainContent: `
## Your Personal Path

You've learned many practices. Now design YOUR sadhana.

### Assessment

**Your temperament:**
- More intellectual, emotional, active, or balanced?
- Which path resonates: Jnana, Bhakti, Karma, Raja?

**Your life circumstances:**
- Available time (realistically)?
- Family/work obligations?
- Community/teacher access?

**Your current level:**
- Beginner: Building foundation
- Intermediate: Deepening practice
- Advanced: Refinement and integration

### Daily Sadhana Template

**Minimum (15-20 min):**
\`\`\`
Morning:
□ 5 min movement/breath
□ 10-15 min meditation

Throughout day:
□ Mindfulness moments
□ One act of seva
\`\`\`

**Moderate (45-60 min):**
\`\`\`
Morning:
□ 10 min pranayama
□ 15 min asana
□ 20-30 min meditation
□ Reading/study

Throughout day:
□ Regular mindfulness
□ Seva practice
□ Witness awareness
\`\`\`

**Full (90+ min):**
\`\`\`
Morning (60-90 min):
□ 15 min pranayama
□ 30 min asana
□ 30-45 min meditation
□ Study/reading

Evening (30 min):
□ Practice/reflection
□ Gratitude
□ Light meditation

Throughout day:
□ Continuous practice
□ Service
□ Shadow work
\`\`\`

### Weekly Rhythm

- **Daily:** Core sadhana (non-negotiable)
- **Weekly:** Extended practice, study group, sangha
- **Monthly:** Half-day retreat, assessment
- **Quarterly:** Weekend retreat, teacher guidance
- **Yearly:** Extended retreat, course, pilgrimage

### Your Sadhana Plan

**My temperament/path:**
_________________________________

**My daily minimum practice:**
_________________________________
_________________________________

**My moderate/full practice:**
_________________________________
_________________________________

**My weekly addition:**
_________________________________

**My teacher/sangha:**
_________________________________

**My next retreat:**
_________________________________

### The Long View

**Spiritual development is measured in decades, not days.**

Principles:
- Consistency over intensity
- Patience with process
- Trust the path
- Celebrate small progress
- Course correct as needed

### The Final Instruction

**Just practice.**

Not perfectly. Not dramatically.
Just daily. Just sincerely.
The path unfolds.

> "Practice and all is coming." — Sri K. Pattabhi Jois
      `,
      keyTakeaway: 'A sustainable sadhana is personalized to your temperament, circumstances, and level. Design a realistic daily practice, support it with weekly and periodic intensification, and trust the gradual unfolding of the path.',
      actionItem: 'Complete the Sadhana Plan template above. Make it realistic and sustainable. Commit to your daily minimum practice for the next 90 days. Post it somewhere visible. Begin tomorrow morning.'
    }
  }
];

export default spiritualitySadhanaLessons;
