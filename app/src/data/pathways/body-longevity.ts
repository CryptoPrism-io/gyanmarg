import type { PathwayLesson } from '@/types';

/**
 * Body & Longevity Mastery Module
 *
 * Science-backed lessons on physical optimization, longevity science,
 * biohacking protocols from Peter Attia, Bryan Johnson, and cutting-edge research.
 */

export const bodyLongevityLessons: PathwayLesson[] = [
  // LEVEL 1: FOUNDATIONS (Lessons 1-8)
  {
    id: 'body-001',
    title: 'The Longevity Mindset: Healthspan vs Lifespan',
    type: 'intro',
    duration: 12,
    xpReward: 100,
    content: {
      overview: 'Understand the difference between living longer and living better—the foundation of modern longevity science.',
      mainContent: `
## Beyond Just Living Longer

**Lifespan:** How long you live
**Healthspan:** How long you live in good health

The goal isn't just more years—it's more **healthy** years.

### The Four Horsemen of Chronic Disease

Peter Attia identifies the four diseases that kill most people:

| Horseman | % of Deaths | Preventable? |
|----------|-------------|--------------|
| Heart Disease | 30% | Largely yes |
| Cancer | 25% | Partially |
| Neurodegenerative | 10% | Partially |
| Metabolic (Diabetes) | 15% | Largely yes |

**Most chronic disease is lifestyle-driven and preventable.**

### The Marginal Decade Problem

Most people's final decade:
- Chronic pain
- Cognitive decline
- Loss of independence
- Multiple medications

**The goal:** Compress morbidity into the shortest possible period at the end of life.

### Medicine 2.0 vs Medicine 3.0

**Medicine 2.0 (Current):**
- Reactive: Wait for disease
- Treat symptoms
- One-size-fits-all
- Focus on lifespan

**Medicine 3.0 (Emerging):**
- Proactive: Prevent disease
- Address root causes
- Personalized protocols
- Focus on healthspan

### The Five Pillars of Longevity

1. **Exercise** - The most powerful intervention
2. **Nutrition** - Fuel for cellular health
3. **Sleep** - Recovery and repair
4. **Emotional Health** - Stress and purpose
5. **Medications/Supplements** - Strategic support
      `,
      keyTakeaway: 'Longevity isn\'t about living longer in decline—it\'s about extending your healthspan so you maintain vitality, strength, and cognitive function until the very end.',
      actionItem: 'Imagine yourself at 90. What activities do you want to still be doing? (Playing with grandkids, traveling, hiking, being independent) These become your "Centenarian Olympics" training goals.'
    }
  },
  {
    id: 'body-002',
    title: 'VO2 Max: The Best Predictor of Longevity',
    type: 'concept',
    duration: 14,
    xpReward: 120,
    content: {
      overview: 'Discover why VO2 max is the single best biomarker for predicting how long you\'ll live—and how to improve it.',
      mainContent: `
## The King of Longevity Metrics

**VO2 max:** Maximum oxygen your body can use during intense exercise (mL/kg/min)

### Why VO2 Max Matters So Much

Research shows VO2 max is the **strongest predictor of all-cause mortality**:

| VO2 Max Percentile | Relative Risk of Death |
|-------------------|------------------------|
| Bottom 25% | 4x higher risk |
| 25-50% | 2x higher risk |
| 50-75% | Baseline |
| Top 2.5% (elite) | 5x LOWER risk |

**Moving from bottom 25% to top 25% = same as quitting smoking.**

### VO2 Max by Age (mL/kg/min)

| Age | Poor | Average | Good | Elite |
|-----|------|---------|------|-------|
| 30 | <35 | 35-45 | 45-55 | >55 |
| 50 | <30 | 30-40 | 40-50 | >50 |
| 70 | <25 | 25-35 | 35-45 | >45 |

### How to Measure VO2 Max

**Gold standard:** Lab test with metabolic cart
**Estimate:** Apple Watch, Garmin (reasonably accurate)
**Field test:** Cooper 12-minute run test

### How to Improve VO2 Max

**Protocol 1: Norwegian 4x4**
- 4 minutes at 90-95% max heart rate
- 3 minutes active recovery
- Repeat 4 times
- 1-2x per week

**Protocol 2: Zone 2 + HIIT Combination**
- 3-4 hours Zone 2 weekly (base)
- 1-2 HIIT sessions weekly (VO2 max)
- Recovery between hard sessions

### Expected Improvements

With consistent training:
- 10-15% improvement in 3-6 months
- 20-25% improvement in 1 year
- Elite levels achievable with years of training

**VO2 max is trainable at ANY age.**
      `,
      keyTakeaway: 'VO2 max is the strongest predictor of lifespan we have. Improving from the bottom 25% to top 25% is equivalent in mortality reduction to quitting smoking. It\'s trainable at any age.',
      actionItem: 'Get a baseline VO2 max measurement (Apple Watch, Garmin, or fitness tracker estimate). Set a goal to improve by 10% over the next 3 months through Zone 2 training and weekly high-intensity intervals.',
      quiz: {
        question: 'Why is VO2 max considered the best predictor of longevity?',
        options: [
          'It measures flexibility',
          'It reflects overall cardiovascular and metabolic health',
          'It shows how fast you can run',
          'It predicts cancer risk only'
        ],
        correct: 1,
        explanation: 'VO2 max integrates cardiovascular health, mitochondrial function, and metabolic efficiency—making it the strongest single biomarker for predicting all-cause mortality.'
      }
    }
  },
  {
    id: 'body-003',
    title: 'Zone 2 Training: The Foundation of Fitness',
    type: 'concept',
    duration: 13,
    xpReward: 115,
    content: {
      overview: 'Learn why low-intensity Zone 2 training is the most important exercise modality for longevity and metabolic health.',
      mainContent: `
## The Most Underrated Exercise

Zone 2 training is steady-state cardio at an intensity where you can hold a conversation but it's slightly uncomfortable.

### The Zones

| Zone | % Max HR | Feel | Fuel Source |
|------|----------|------|-------------|
| 1 | 50-60% | Very easy | Fat |
| **2** | **60-70%** | **Conversational** | **Fat (primary)** |
| 3 | 70-80% | Moderate | Fat + Carbs |
| 4 | 80-90% | Hard | Carbs (primary) |
| 5 | 90-100% | Max effort | Carbs |

### Why Zone 2 Is Special

**Mitochondrial biogenesis:** Zone 2 is the sweet spot for creating new mitochondria (cellular power plants).

Benefits:
- Improves fat oxidation
- Builds aerobic base
- Enhances metabolic flexibility
- Supports recovery
- Low injury risk
- Sustainable for life

### How to Find Your Zone 2

**Method 1: Talk Test**
- Can speak in sentences
- Slightly challenging to do so
- Not gasping between words

**Method 2: Heart Rate**
- 180 - age = approximate Zone 2 ceiling
- Or 60-70% of max heart rate

**Method 3: Lactate Testing**
- 2 mmol/L blood lactate
- Most accurate but requires testing

### Optimal Zone 2 Protocol

**Volume:** 3-4 hours per week minimum
**Frequency:** 4-5 sessions
**Duration:** 45-90 minutes per session
**Modalities:** Walking, cycling, swimming, rowing

**Peter Attia's recommendation:**
- 3-4 hours Zone 2 weekly
- Most important single exercise habit

### Common Mistakes

1. **Going too hard** - Most people train Zone 3 when trying Zone 2
2. **Not enough volume** - Benefits need 150+ min/week
3. **Inconsistency** - Regularity matters more than intensity
4. **Ego** - Zone 2 feels "too easy" but that's the point
      `,
      keyTakeaway: 'Zone 2 training builds your aerobic foundation, creates new mitochondria, and improves metabolic health. It should comprise the majority of your training volume—aim for 3-4 hours weekly.',
      actionItem: 'Schedule 4 Zone 2 sessions this week: 45-60 min each of walking, cycling, or swimming where you can hold a conversation. Track heart rate to ensure you\'re in the right zone.'
    }
  },
  {
    id: 'body-004',
    title: 'Strength Training for Longevity',
    type: 'concept',
    duration: 14,
    xpReward: 120,
    content: {
      overview: 'Understand why maintaining muscle mass and strength is crucial for healthy aging—and the optimal approach.',
      mainContent: `
## The Muscle-Longevity Connection

After age 30, you lose 3-8% of muscle mass per decade. After 60, this accelerates.

**Sarcopenia** (muscle loss) leads to:
- Frailty and falls
- Metabolic dysfunction
- Cognitive decline
- Loss of independence
- Increased mortality

### Muscle as a Longevity Organ

Muscle isn't just for movement—it's metabolically active tissue:

- **Glucose sink:** Muscles store blood sugar
- **Protein reserve:** Emergency amino acid storage
- **Hormone factory:** Produces beneficial myokines
- **Fall prevention:** Protects bones and joints

### The Centenarian Olympics

Peter Attia asks: What do you want to be able to do at 90?

| Activity | Requires |
|----------|----------|
| Get up from floor | Leg strength, mobility |
| Carry groceries | Grip, back strength |
| Play with grandkids | Full body fitness |
| Walk independently | Balance, cardio |
| Travel | Stamina, strength |

**Train now for the activities you want at 90.**

### Optimal Strength Protocol

**Frequency:** 3-4 sessions per week
**Focus areas:**
- Hip hinge (deadlift, RDL)
- Squat pattern
- Push (bench, overhead press)
- Pull (rows, pullups)
- Carry (farmer walks)
- Core stability

**Weekly structure example:**
\`\`\`
Mon: Lower body (squat focus)
Wed: Upper body (push focus)
Fri: Lower body (hinge focus)
Sat: Upper body (pull focus) + carry
\`\`\`

### Key Metrics to Track

| Metric | Why It Matters |
|--------|----------------|
| Grip strength | Predicts mortality |
| Leg press | Lower body function |
| Farmer carry | Real-world strength |
| Dead hang | Shoulder health |

### Progressive Overload

To build muscle at any age:
- Gradually increase weight OR reps
- Train close to failure (1-3 reps in reserve)
- Prioritize compound movements
- Ensure adequate protein (1.6-2.2g/kg)
- Recovery between sessions
      `,
      keyTakeaway: 'Muscle mass is a longevity organ that protects against metabolic disease, falls, and frailty. Strength training 3-4x weekly with progressive overload is non-negotiable for healthy aging.',
      actionItem: 'Assess your current strength: Can you get off the floor without using hands? Do 10 pushups? Carry heavy groceries? Identify your weakest area and commit to training it this month.'
    }
  },
  {
    id: 'body-005',
    title: 'Sleep Architecture: Your Recovery System',
    type: 'concept',
    duration: 13,
    xpReward: 115,
    content: {
      overview: 'Understand the stages of sleep and why sleep quality—not just quantity—is essential for longevity.',
      mainContent: `
## Sleep: The Performance Enhancer

Bryan Johnson calls himself a "professional sleeper." Here's why.

### Sleep Stages

\`\`\`
Full Sleep Cycle (~90 minutes):
N1 → N2 → N3 (Deep) → N2 → REM → repeat

Per Night (7-8 hours):
- Light Sleep (N1+N2): 50-60%
- Deep Sleep (N3): 15-20%
- REM Sleep: 20-25%
\`\`\`

### What Each Stage Does

| Stage | Function | Deficit Effect |
|-------|----------|----------------|
| **Deep (N3)** | Physical repair, growth hormone, memory consolidation | Weak immune, poor recovery |
| **REM** | Emotional processing, creativity, learning | Mood issues, cognitive decline |
| **Light (N2)** | Transition, memory | Less harmful if adequate |

### Sleep Deprivation Effects

**After 1 night of poor sleep:**
- Insulin sensitivity drops 30%
- Testosterone drops 15%
- Cortisol increases
- Willpower impaired
- Reaction time slowed

**Chronic sleep debt:**
- 4x cardiovascular risk
- Higher cancer incidence
- Accelerated aging
- Cognitive decline

### Sleep Optimization Protocol

**Environment:**
- Temperature: 65-68°F (18-20°C)
- Darkness: Complete (blackout curtains)
- Sound: Quiet or white noise
- Mattress/pillow: Quality investment

**Timing:**
- Same time daily (±30 min)
- 7-9 hours in bed
- Align with natural chronotype

**Pre-sleep:**
- No caffeine 10+ hours before
- No alcohol 3+ hours before
- No food 2-3 hours before
- Screen off 1 hour before
- Cool shower/bath

### Bryan Johnson's Sleep Protocol

- Strict 8:30 PM bedtime
- No food after 11 AM
- Blue blockers after sunset
- Complete darkness
- Temperature controlled
- Sleep tracking (Oura, WHOOP)

**His metric:** Deep sleep minutes, sleep efficiency
      `,
      keyTakeaway: 'Sleep is when your body repairs, consolidates memory, and regulates hormones. Poor sleep accelerates aging and disease. Optimize your sleep environment and timing as seriously as you would your diet or exercise.',
      actionItem: 'Audit your sleep environment: Is it dark enough? Cool enough? Quiet enough? Fix one issue this week. Track sleep quality (subjective or with a device) for 7 days.'
    }
  },
  {
    id: 'body-006',
    title: 'Metabolic Health: Blood Sugar Mastery',
    type: 'concept',
    duration: 14,
    xpReward: 120,
    content: {
      overview: 'Learn why stable blood sugar is foundational to longevity and how to achieve metabolic flexibility.',
      mainContent: `
## The Metabolic Crisis

88% of Americans are metabolically unhealthy. Signs:
- Fasting glucose > 100 mg/dL
- HbA1c > 5.7%
- High triglycerides
- Large waist circumference
- Elevated blood pressure

### Why Blood Sugar Matters

Chronically elevated blood sugar causes:
- Glycation (protein damage)
- Inflammation
- Insulin resistance
- Accelerated aging
- Increased disease risk

### Key Metabolic Markers

| Marker | Optimal | Concerning |
|--------|---------|------------|
| Fasting glucose | <90 mg/dL | >100 |
| HbA1c | <5.4% | >5.7% |
| Fasting insulin | <5 μIU/mL | >10 |
| Triglycerides | <100 mg/dL | >150 |
| HOMA-IR | <1.0 | >2.0 |

### Continuous Glucose Monitoring (CGM)

CGMs reveal your personal glucose response:
- Same food affects people differently
- Discover your trigger foods
- Learn optimal meal timing
- See exercise impact in real-time

### Strategies for Stable Blood Sugar

**1. Food order matters**
- Vegetables first
- Protein/fat second
- Carbs last
- Reduces glucose spike 30-40%

**2. Post-meal movement**
- 10-15 min walk after eating
- Muscles absorb glucose
- Dramatically flattens spike

**3. Protein at every meal**
- Slows digestion
- Increases satiety
- Supports muscle

**4. Limit liquid sugar**
- No soda/juice
- Fastest spike possible
- Zero redeeming value

**5. Sleep and stress**
- Poor sleep raises glucose
- Stress elevates cortisol → glucose
- Non-food factors matter

### Metabolic Flexibility

The goal: Easily switch between burning carbs and fat

**Signs of flexibility:**
- Stable energy (no crashes)
- Can skip meals without irritability
- Efficient fat burning
- Stable mood

**How to build it:**
- Time-restricted eating
- Regular exercise
- Reduce refined carbs
- Build muscle mass
      `,
      keyTakeaway: 'Metabolic health—maintaining stable blood sugar and insulin sensitivity—is foundational to longevity. Simple habits like walking after meals, eating protein first, and monitoring glucose can dramatically improve your metabolic trajectory.',
      actionItem: 'Try this for 1 week: Eat your vegetables first, protein second, carbs last at every meal. Take a 10-minute walk after your largest meal. Note energy levels—most people report significant improvement.'
    }
  },
  {
    id: 'body-007',
    title: 'The Nutrition Fundamentals',
    type: 'concept',
    duration: 15,
    xpReward: 130,
    content: {
      overview: 'Cut through nutrition confusion with evidence-based principles that promote longevity and performance.',
      mainContent: `
## What Actually Matters in Nutrition

Despite endless debate, longevity researchers agree on fundamentals:

### Universal Principles

**1. Sufficient protein**
- 1.6-2.2g per kg body weight
- Higher as you age
- Distributed across meals (30-50g per meal)
- Supports muscle maintenance

**2. Whole, unprocessed foods**
- Vegetables, fruits, legumes
- Quality meats, fish, eggs
- Nuts, seeds
- Minimal processing

**3. Adequate fiber**
- 30-50g daily
- Feeds gut microbiome
- Slows glucose absorption
- Most people get <15g

**4. Healthy fats**
- Olive oil, avocado, nuts
- Fatty fish (omega-3)
- Limit seed oils
- Avoid trans fats

**5. Limit sugar and refined carbs**
- Minimal added sugar
- Whole grains over refined
- Avoid liquid calories

### Bryan Johnson's Blueprint Nutrition

His protocol (~2000 calories/day):
- 70+ pounds of vegetables yearly
- No added sugar
- No processed food
- Consistent meal timing
- Strict caloric control

**Key supplements:**
- Collagen peptides
- Creatine
- Omega-3
- Vitamin D
- Various longevity compounds

### Peter Attia's Approach

More flexible, personalized:
- High protein emphasis
- Metabolic health focused
- CGM-informed choices
- Periodic fasting
- Quality over restriction

### Practical Meal Framework

**Plate composition:**
\`\`\`
┌─────────────────────────────────┐
│     Vegetables (50%)            │
│     Fiber, micronutrients       │
├────────────────┬────────────────┤
│  Protein (30%) │   Carbs (20%) │
│  Palm-sized    │   Fist-sized  │
├────────────────┴────────────────┤
│     + Healthy fats (olive oil,  │
│       avocado, nuts)            │
└─────────────────────────────────┘
\`\`\`

### What to Minimize

| Food | Issue | Alternative |
|------|-------|-------------|
| Sugar | Metabolic damage | Fruit, dark chocolate |
| Seed oils | Inflammatory | Olive oil, butter |
| Ultra-processed | Empty calories | Whole foods |
| Alcohol | Toxic, disrupts sleep | Minimize or eliminate |
      `,
      keyTakeaway: 'Nutrition fundamentals are simple: sufficient protein, whole foods, fiber, healthy fats, and minimal sugar/processed foods. Debates about specific diets matter less than consistently applying these basics.',
      actionItem: 'Track your protein intake for 3 days. Are you hitting 1.6g per kg body weight? If not, add a protein source to each meal. This single change has outsized benefits for muscle and metabolism.'
    }
  },
  {
    id: 'body-008',
    title: 'Fasting and Time-Restricted Eating',
    type: 'concept',
    duration: 13,
    xpReward: 115,
    content: {
      overview: 'Understand the science of fasting and time-restricted eating for metabolic health and longevity.',
      mainContent: `
## The Case for Not Eating

Fasting triggers cellular repair mechanisms that don't activate when constantly fed.

### Metabolic Switch

After ~12 hours without food:
- Glycogen depleted
- Body shifts to fat burning
- Ketones produced
- Autophagy activates

### Types of Fasting

| Type | Protocol | Benefits |
|------|----------|----------|
| **TRE** | Eat within 8-10 hour window | Metabolic health, sustainable |
| **16:8** | 16 hours fast, 8 eat | Fat loss, insulin sensitivity |
| **24-hour** | Full day fast weekly | Deeper autophagy |
| **36-72 hour** | Extended fasts quarterly | Significant autophagy, stem cell renewal |

### Autophagy: Cellular Cleanup

Autophagy = cells recycling damaged components

**Triggers:**
- Fasting (primary)
- Exercise
- Low protein intake (temporarily)

**Benefits:**
- Removes damaged proteins
- Clears dysfunctional mitochondria
- May reduce cancer risk
- Supports brain health

### Practical Time-Restricted Eating

**Beginner (12:12):**
- Eat: 7 AM - 7 PM
- Easy starting point

**Intermediate (16:8):**
- Eat: 12 PM - 8 PM
- Skip breakfast or early dinner

**Advanced (18:6):**
- Eat: 1 PM - 7 PM
- Two larger meals

### What Breaks a Fast?

**Definitely breaks:**
- Any calories (food, drinks)
- Cream/sugar in coffee
- BCAAs/protein

**Doesn't break:**
- Water
- Black coffee
- Plain tea
- Electrolytes (no calories)

### Considerations

**Who should be careful:**
- Pregnant/nursing women
- Those with eating disorder history
- Type 1 diabetics
- Underweight individuals

**Pairing with training:**
- Protein around workouts
- Don't fast on heavy lifting days
- Listen to your body
      `,
      keyTakeaway: 'Time-restricted eating and periodic fasting trigger autophagy and metabolic benefits that don\'t occur when constantly fed. Start with a simple 12-hour eating window and gradually compress if beneficial.',
      actionItem: 'Try a 12-hour eating window for 1 week (e.g., 8 AM - 8 PM). If you handle it well, try 14:10 the following week. Track energy, hunger, and sleep quality.',
      quiz: {
        question: 'What is autophagy and why is it important?',
        options: [
          'A type of exercise for flexibility',
          'Cellular recycling process that removes damaged components',
          'A meditation technique',
          'A type of protein supplement'
        ],
        correct: 1,
        explanation: 'Autophagy is the body\'s cellular recycling system, removing damaged proteins and organelles. Fasting is the primary trigger for autophagy, which may reduce disease risk and support healthy aging.'
      }
    }
  },

  // LEVEL 2: INTERMEDIATE (Lessons 9-16)
  {
    id: 'body-009',
    title: 'Bryan Johnson\'s Blueprint Protocol',
    type: 'concept',
    duration: 15,
    xpReward: 130,
    content: {
      overview: 'Explore the comprehensive anti-aging protocol of tech entrepreneur Bryan Johnson and what\'s applicable for everyone.',
      mainContent: `
## The Most Measured Human

Bryan Johnson spends $2M+ yearly on his Blueprint protocol with a team of 30+ doctors.

### His Reported Results

- Biological age reversal (epigenetic clocks)
- VO2 max of a teenager
- Inflammation markers of optimal
- Cognition and sleep optimized
- 160% increase in follistatin (gene therapy)

### The Core Protocol

**Sleep (Non-negotiable):**
- 8:30 PM bedtime
- Complete darkness
- Temperature controlled
- 8+ hours

**Nutrition:**
- 1,977 calories daily
- Plant-heavy, precise
- No added sugar
- Eating window: 6 AM - 11 AM

**Exercise:**
- 1 hour daily
- High-intensity 3x/week
- Strength training
- Flexibility work

**Supplements (100+ daily):**
- Collagen peptides
- Creatine
- Cocoa flavanols
- Omega-3
- Vitamin D
- And many more...

### What's Accessible to Everyone

**Free/cheap interventions:**
\`\`\`
1. Sleep 8+ hours consistently     - Free
2. Walk 10,000 steps daily         - Free
3. Eat whole foods                 - Moderate cost
4. Strength train 3x/week          - Gym membership
5. Manage stress                   - Free
6. Morning sunlight                - Free
7. Limit alcohol                   - Saves money
\`\`\`

**Moderate cost interventions:**
- Quality protein sources
- Basic supplements (D, omega-3, creatine)
- Fitness tracker
- CGM (temporary for learning)

### Peter Attia's Critique

Attia argues the fundamentals matter most:
- Sleep, exercise, nutrition
- Don't need expensive interventions
- Focus on the basics first
- Personalization over protocols

### The 80/20 of Longevity

**80% of results from:**
1. Not smoking
2. Regular exercise
3. Healthy body weight
4. Quality sleep
5. Whole food diet
6. Stress management
7. Social connection

**The remaining 20% (optimizations):**
- Supplements
- Tracking/testing
- Advanced protocols
- Biohacking
      `,
      keyTakeaway: 'While Bryan Johnson\'s $2M protocol is extreme, the fundamentals driving his results are accessible: sleep consistency, whole food nutrition, daily exercise, and stress management. Master basics before optimizations.',
      actionItem: 'Rate yourself 1-10 on the seven 80/20 fundamentals. Identify your lowest score. Commit to improving that single factor for the next 30 days before adding any "optimization."'
    }
  },
  {
    id: 'body-010',
    title: 'Cold Exposure: The Hormetic Stressor',
    type: 'concept',
    duration: 12,
    xpReward: 110,
    content: {
      overview: 'Understand the science of cold exposure and how deliberate cold can boost metabolism, mood, and resilience.',
      mainContent: `
## Cold as Medicine

Deliberate cold exposure triggers beneficial stress responses:

### The Science

**Cold triggers:**
- Norepinephrine release (200-300% increase)
- Brown fat activation
- Dopamine increase (250% lasting hours)
- Reduced inflammation
- Improved insulin sensitivity

### Documented Benefits

| Benefit | Mechanism | Evidence |
|---------|-----------|----------|
| Mood boost | Dopamine + norepinephrine | Strong |
| Fat loss | Brown fat activation | Moderate |
| Recovery | Reduced inflammation | Strong |
| Immune function | Stress adaptation | Moderate |
| Mental resilience | Stress inoculation | Anecdotal |

### Cold Exposure Protocols

**Beginner: Cold shower finish**
- Normal shower
- Last 30-60 seconds cold
- Build to 2-3 minutes

**Intermediate: Full cold shower**
- Start cold
- 3-5 minutes
- Work on calm breathing

**Advanced: Ice bath/cold plunge**
- Water 50-59°F (10-15°C)
- 2-5 minutes
- 11 minutes total per week (Huberman)

### Best Practices

**Timing:**
- Morning for energy boost
- Not immediately after strength training (blunts adaptation)
- 4+ hours before bed

**Safety:**
- Never alone in ice bath
- Build gradually
- Exit if shivering uncontrollably
- Contraindicated with heart conditions

**The suck is the point:**
- Discomfort triggers benefits
- Don't distract yourself
- Practice staying calm under stress

### Practical Implementation

**Week 1-2:** 30-second cold at end of shower
**Week 3-4:** 1 minute cold
**Week 5-6:** 2 minutes cold
**Week 7+:** Full cold showers or progress to cold plunge
      `,
      keyTakeaway: 'Cold exposure is a hormetic stressor that boosts dopamine, norepinephrine, and metabolic function. Start small with cold shower finishes and build gradually—the discomfort is part of the benefit.',
      actionItem: 'End your next 5 showers with 30 seconds of cold water. Notice the immediate alertness and mood boost. If you tolerate it, extend to 1 minute the following week.'
    }
  },
  {
    id: 'body-011',
    title: 'Heat Exposure and Sauna Benefits',
    type: 'concept',
    duration: 12,
    xpReward: 110,
    content: {
      overview: 'Discover the research-backed benefits of heat exposure and sauna use for cardiovascular health and longevity.',
      mainContent: `
## Heat as Longevity Intervention

Finnish sauna research shows remarkable benefits:

### The Finnish Sauna Studies

20+ years of data on 2,300+ men:

| Sauna Frequency | Cardiovascular Death Risk |
|-----------------|---------------------------|
| 1x/week | Baseline |
| 2-3x/week | -27% |
| 4-7x/week | -50% |

**More sauna = substantially lower mortality.**

### Mechanisms

**Heat triggers:**
- Heat shock proteins (cellular protection)
- Growth hormone release
- Improved cardiovascular function
- Reduced inflammation
- Enhanced detoxification (sweating)

### Heat Shock Proteins (HSPs)

HSPs are protective molecules that:
- Repair damaged proteins
- Prevent protein aggregation
- Support cellular stress response
- May protect against neurodegeneration

### Optimal Protocol

**Traditional sauna:**
- Temperature: 170-200°F (77-93°C)
- Duration: 15-20 minutes
- Frequency: 3-7x per week
- Stay until uncomfortable but not distressed

**Infrared sauna:**
- Lower temperature: 120-150°F (49-65°C)
- Longer duration: 30-45 minutes
- Different heating mechanism
- Also effective

### Sauna Best Practices

**Hydration:**
- Drink water before and after
- Replace electrolytes
- Expected: 1 pint sweat loss

**Timing:**
- Evening use may aid sleep
- Not immediately after hard training
- Wait 20+ min after eating

**Combinations:**
- Sauna + cold plunge (contrast therapy)
- Enhanced cardiovascular benefits
- Strong mood/energy boost
      `,
      keyTakeaway: 'Regular sauna use (3+ times weekly) reduces cardiovascular mortality by 27-50% and triggers protective heat shock proteins. It\'s one of the most impactful longevity interventions available.',
      actionItem: 'If you have sauna access, commit to 2-3 sessions per week for a month. No sauna? Hot baths or hot yoga provide some similar benefits. Track how you feel afterward.'
    }
  },
  {
    id: 'body-012',
    title: 'Hormones and Aging',
    type: 'concept',
    duration: 14,
    xpReward: 120,
    content: {
      overview: 'Understand how hormones change with age and evidence-based strategies to maintain optimal hormonal health.',
      mainContent: `
## The Hormonal Decline

After 30, key hormones decline:
- Testosterone: ~1% per year in men
- Estrogen: Drops sharply at menopause
- Growth hormone: Declines steadily
- DHEA: Declines 2% per year
- Thyroid: Often slows

### Why Hormones Matter

| Hormone | Functions | Decline Effects |
|---------|-----------|-----------------|
| **Testosterone** | Muscle, mood, libido, energy | Fatigue, muscle loss, depression |
| **Estrogen** | Bone, heart, brain protection | Hot flashes, bone loss, cognitive |
| **Growth Hormone** | Repair, body composition | Increased fat, decreased muscle |
| **Thyroid** | Metabolism, energy | Fatigue, weight gain |

### Natural Hormone Optimization

**For Testosterone:**
- Resistance training (compound lifts)
- Quality sleep (7-9 hours)
- Maintain healthy weight
- Minimize alcohol
- Manage stress (cortisol opposes T)
- Vitamin D, zinc sufficiency

**For Growth Hormone:**
- Deep sleep (primary release time)
- Fasting
- High-intensity exercise
- Sauna use

**For Thyroid:**
- Adequate iodine, selenium
- Manage stress
- Avoid over-training
- Quality sleep

### Key Tests to Consider

**Basic panel:**
- Total and free testosterone
- Estradiol
- Thyroid panel (TSH, T3, T4)
- DHEA-S
- Fasting insulin

**When to test:**
- Baseline in 30s
- If symptoms present
- Annually after 40

### Hormone Replacement Therapy (HRT)

**Considerations:**
- Work with knowledgeable physician
- Test first, optimize naturally
- Risks and benefits vary by hormone
- Individualized approach needed

**Not covered here in detail—requires medical supervision.**
      `,
      keyTakeaway: 'Hormones decline with age but can be optimized through lifestyle: sleep, exercise, stress management, and nutrition. Testing provides baseline; natural optimization should precede any replacement therapy.',
      actionItem: 'If over 35, consider getting a baseline hormone panel (testosterone, thyroid, DHEA at minimum). This establishes your personal baseline and can guide optimization strategies.'
    }
  },
  {
    id: 'body-013',
    title: 'Longevity Supplements: Evidence Review',
    type: 'concept',
    duration: 15,
    xpReward: 130,
    content: {
      overview: 'Evaluate the evidence for popular longevity supplements—what works, what\'s uncertain, and what\'s hype.',
      mainContent: `
## Supplement Reality Check

Most supplements have limited evidence. Here's an honest assessment:

### Tier 1: Strong Evidence

| Supplement | Benefits | Dose |
|------------|----------|------|
| **Vitamin D** | Bone, immune, mood | 2000-5000 IU (test levels) |
| **Omega-3** | Heart, brain, inflammation | 1-2g EPA+DHA |
| **Magnesium** | 300+ reactions, sleep | 300-400mg |
| **Creatine** | Muscle, brain, energy | 5g daily |

### Tier 2: Moderate Evidence

| Supplement | Proposed Benefits | Notes |
|------------|-------------------|-------|
| **NMN/NR** | NAD+ precursors | Theory sound, human data emerging |
| **Resveratrol** | SIRT1 activation | Mixed results, bioavailability issues |
| **Collagen** | Skin, joints | Some positive data |
| **Berberine** | Glucose management | Works, but caution needed |

### Tier 3: Limited/Emerging Evidence

| Supplement | Status |
|------------|--------|
| Rapamycin | Promising but prescription |
| Metformin | Mixed longevity data |
| Spermidine | Interesting early research |
| Fisetin | Senolytic potential |

### What Bryan Johnson Takes (Selection)

- Acarbose (prescription - glucose)
- Rapamycin (prescription - mTOR)
- Metformin (prescription - glucose)
- NMN (NAD+ precursor)
- Lithium (low dose - neuroprotection)
- 100+ other compounds

**Note: Many are prescription, unproven, or risky without supervision.**

### Peter Attia's Simpler Stack

- Vitamin D
- Omega-3
- Magnesium
- Creatine
- Minimal other supplements
- Focus on fundamentals

### The Hierarchy

\`\`\`
IMPACT (highest to lowest):

1. Sleep optimization      ████████████████████
2. Exercise consistency    ████████████████████
3. Nutrition quality       █████████████████
4. Stress management       ████████████████
5. Basic supplements       ████████
6. Advanced supplements    ████
\`\`\`

**Fix 1-4 before worrying about 5-6.**
      `,
      keyTakeaway: 'Most longevity supplements have limited human evidence. A few basics (D, omega-3, magnesium, creatine) have strong support. Advanced supplements should only be considered after mastering lifestyle fundamentals.',
      actionItem: 'Review your current supplements. Are you taking basics with strong evidence (D, omega-3)? Are you taking anything with weak evidence that you should drop? Simplify to what\'s proven.'
    }
  },
  {
    id: 'body-014',
    title: 'Testing and Tracking for Longevity',
    type: 'concept',
    duration: 13,
    xpReward: 115,
    content: {
      overview: 'Learn which biomarkers to track, how often to test, and how to use data to optimize your health trajectory.',
      mainContent: `
## What Gets Measured Gets Managed

Strategic testing reveals what's actually happening inside your body.

### Essential Annual Tests

| Test | What It Shows | Target |
|------|---------------|--------|
| **Lipid panel (advanced)** | ApoB, LDL-P, HDL | ApoB <80 mg/dL |
| **Metabolic panel** | Glucose, HbA1c, insulin | HbA1c <5.4% |
| **Inflammation** | hsCRP | <1.0 mg/L |
| **Liver function** | ALT, AST | Normal range |
| **Kidney function** | Creatinine, GFR | Normal range |
| **Hormones** | Testosterone, thyroid | Optimal range |

### Advanced Testing (Optional)

| Test | Purpose | Frequency |
|------|---------|-----------|
| **DEXA scan** | Body composition, bone density | Annually |
| **Coronary calcium score** | Heart disease risk | Every 5 years after 40 |
| **Epigenetic clock** | Biological age | Annually if tracking interventions |
| **CGM** | Real-time glucose | 2-4 week periods |

### Wearable Tracking

**What to track:**
- Sleep (duration, stages, HRV)
- Resting heart rate
- HRV (heart rate variability)
- Activity/steps
- Recovery metrics

**Devices:**
- Oura Ring (sleep, HRV)
- WHOOP (recovery, strain)
- Apple Watch (general)
- Garmin (fitness focused)

### Key Metrics Over Time

**Fitness markers:**
- VO2 max (estimate)
- Resting heart rate (lower = fitter)
- HRV (higher = better recovery)

**Body composition:**
- Weight trend
- Muscle mass (DEXA)
- Body fat percentage

**Blood markers:**
- ApoB trajectory
- HbA1c stability
- Inflammation trends

### Using Data Wisely

**Do:**
- Look at trends over time
- Make one change, measure impact
- Share data with physician
- Act on significant deviations

**Don't:**
- Obsess over daily fluctuations
- Self-diagnose
- Make changes without understanding why
- Let tracking become stressful
      `,
      keyTakeaway: 'Strategic testing (annual blood work, periodic DEXA, wearable tracking) provides objective data to guide your longevity strategy. Focus on trends over time rather than single data points.',
      actionItem: 'Schedule comprehensive blood work if you haven\'t had it in the past year. Prioritize: lipid panel, metabolic markers, and inflammatory markers. Establish your baseline.'
    }
  },
  {
    id: 'body-015',
    title: 'Mobility and Flexibility for Life',
    type: 'concept',
    duration: 12,
    xpReward: 110,
    content: {
      overview: 'Understand why maintaining mobility is essential for independence and quality of life as you age.',
      mainContent: `
## The Mobility Crisis

Most people lose mobility gradually, then suddenly:
- Can't get off floor
- Can't reach overhead
- Can't squat down
- Daily activities become struggles

### Why Mobility Matters

| Movement | Daily Need | Consequence of Loss |
|----------|------------|---------------------|
| Hip flexion | Getting in/out of car | Need assistance |
| Shoulder mobility | Reaching shelves | Can't dress self |
| Ankle mobility | Walking, stairs | Falls, shuffling |
| Spine mobility | Turning, bending | Chronic pain |

### The Minimum Standards

Can you:
- Touch your toes?
- Squat all the way down?
- Put hands overhead with straight arms?
- Get off floor without using hands?
- Turn your head 80° each direction?

**If no to any: priority area identified.**

### Daily Mobility Practice

**Morning routine (5-10 minutes):**
\`\`\`
1. Cat-Cow (spine)           - 10 reps
2. World's Greatest Stretch  - 5 each side
3. Shoulder circles          - 10 each direction
4. Hip circles               - 10 each direction
5. Deep squat hold           - 60 seconds
6. Neck rotations            - 5 each direction
\`\`\`

### Key Areas to Prioritize

**Hips:**
- Most people sit all day
- Hip flexors tighten
- Hip extension decreases
- Focus: Hip flexor stretches, glute activation

**Thoracic spine:**
- Rounds forward (desk posture)
- Affects breathing, shoulders
- Focus: Extensions, rotations

**Ankles:**
- Limited dorsiflexion = falls
- Affects squat depth
- Focus: Calf stretches, mobilizations

### Stretching vs Mobility Work

**Static stretching:**
- Lengthens muscle
- Hold 30-60 seconds
- Best post-workout or evening

**Mobility work:**
- Active movement through range
- Builds usable flexibility
- Best before activity

**Both matter—prioritize mobility.**
      `,
      keyTakeaway: 'Mobility is use-it-or-lose-it. Daily movement through full range of motion preserves the ability to perform basic activities independently. Spend 5-10 minutes daily on mobility work.',
      actionItem: 'Test your mobility: Can you touch toes? Full squat? Hands overhead? Identify your tightest area and commit to 5 minutes of daily mobility work targeting it for the next 30 days.'
    }
  },
  {
    id: 'body-016',
    title: 'Injury Prevention and Recovery',
    type: 'concept',
    duration: 13,
    xpReward: 115,
    content: {
      overview: 'Learn how to train consistently for decades by preventing injuries and optimizing recovery.',
      mainContent: `
## The Long Game

The best athletes aren't always the most talented—they're the ones who stayed healthy.

### Injury Prevention Principles

**1. Progressive overload (not sudden)**
- Increase volume/intensity 10% max per week
- Build base before intensity
- Listen to warning signs

**2. Balance push/pull, anterior/posterior**
- Push : Pull = 1:1 or 1:1.5
- Don't neglect back, posterior chain
- Address imbalances

**3. Warm up properly**
- 5-10 minutes general (heart rate up)
- Movement-specific preparation
- Activate muscles you'll use

**4. Prioritize recovery**
- Sleep 7-9 hours
- Deload weeks every 4-6 weeks
- Active recovery days

### Common Injury Patterns

| Injury | Typical Cause | Prevention |
|--------|---------------|------------|
| Shoulder impingement | Too much pressing, poor posture | More pulling, rotator cuff work |
| Low back pain | Weak core, poor hinge | Deadlift properly, core work |
| Knee pain | Weak glutes, tight quads | Glute strengthening, mobility |
| Elbow tendinitis | Overuse, grip issues | Progress slowly, manage volume |

### Recovery Optimization

**Sleep (most important):**
- Growth hormone during deep sleep
- Tissue repair happens overnight
- 7-9 hours non-negotiable

**Nutrition:**
- Protein: 1.6-2.2g/kg
- Anti-inflammatory foods
- Adequate calories for recovery

**Active recovery:**
- Light movement on rest days
- Blood flow without stress
- Walking, swimming, yoga

**Recovery modalities:**
- Massage/foam rolling
- Contrast therapy (hot/cold)
- Compression
- Sleep and nutrition trump all

### When to Push vs Back Off

**Push through:**
- General tiredness (not exhaustion)
- Minor muscle soreness
- Lack of motivation (sometimes)

**Back off:**
- Sharp or acute pain
- Pain that changes movement pattern
- Exhaustion affecting form
- Sleep/stress significantly compromised
- Same area sore for 72+ hours
      `,
      keyTakeaway: 'Longevity in fitness requires injury prevention: progressive overload, balanced training, proper warm-up, and prioritized recovery. The goal is training consistently for decades, not maximum intensity today.',
      actionItem: 'Review your training: Do you warm up adequately? Is push/pull balanced? Are you progressing gradually? Identify one injury prevention habit to improve this week.'
    }
  },

  // LEVEL 3: ADVANCED (Lessons 17-25)
  {
    id: 'body-017',
    title: 'Advanced: Periodization for Long-Term Progress',
    type: 'concept',
    duration: 14,
    xpReward: 120,
    content: {
      overview: 'Learn how elite athletes structure training over months and years for continuous improvement without burnout.',
      mainContent: `
## Training Like a Pro

Periodization = planned variation in training to optimize adaptation and prevent overtraining.

### Why Periodization Matters

**Without periodization:**
- Plateaus occur
- Overtraining develops
- Injuries increase
- Motivation declines

**With periodization:**
- Continuous progress
- Peak performance when needed
- Sustainable for decades
- Balanced development

### Types of Periodization

**Linear (Traditional):**
\`\`\`
Phase 1: High volume, low intensity
Phase 2: Moderate volume, moderate intensity
Phase 3: Low volume, high intensity
Phase 4: Peak/Competition
Phase 5: Recovery
\`\`\`

**Undulating (Daily/Weekly):**
- Vary intensity within week
- Heavy/Light/Medium days
- More variety, similar results

**Block:**
- Focus on one quality per block
- 3-4 week blocks
- Build on previous blocks

### Annual Structure (For General Fitness)

**Quarter 1: Base Building**
- High volume, lower intensity
- Aerobic development (Zone 2)
- Movement quality focus
- Build work capacity

**Quarter 2: Strength Focus**
- Moderate volume, higher intensity
- Progressive overload
- Compound movements
- Maintain cardio base

**Quarter 3: Performance**
- Lower volume, high intensity
- Express strength/fitness
- Sport-specific if applicable
- Peak performance window

**Quarter 4: Active Recovery**
- Reduced training
- Address weak points
- Mobility focus
- Mental break

### Deload Weeks

Every 4-6 weeks:
- Reduce volume 40-50%
- Maintain intensity
- Allow accumulated fatigue to clear
- Come back stronger

### Listening to Your Body

**Track:**
- Morning heart rate
- Sleep quality
- Motivation level
- Performance trends

**Signs to back off:**
- Elevated resting HR
- Poor sleep despite fatigue
- Decreased performance
- Persistent soreness
- Illness frequency
      `,
      keyTakeaway: 'Periodization structures training variation across weeks, months, and years to optimize progress while preventing burnout. Plan phases of building, intensifying, peaking, and recovering.',
      actionItem: 'Look at your next 3 months of training. Identify: (1) A building phase (volume focus), (2) A strength phase (intensity focus), (3) Recovery weeks. Create a basic periodization plan.'
    }
  },
  {
    id: 'body-018',
    title: 'Advanced: Optimizing Body Composition',
    type: 'concept',
    duration: 14,
    xpReward: 120,
    content: {
      overview: 'Master the science of building muscle while losing fat—the key to metabolic health and physical performance.',
      mainContent: `
## Beyond the Scale

Body composition (muscle:fat ratio) matters more than weight.

### The Metabolic Math

**Muscle:**
- Metabolically active
- Burns calories at rest
- Stores glucose (blood sugar sink)
- Protects against disease

**Fat:**
- Energy storage
- Excess = metabolic dysfunction
- Visceral fat especially problematic
- Some essential

### Body Composition Targets

| Metric | Men | Women |
|--------|-----|-------|
| Essential fat | 2-5% | 10-13% |
| Athlete | 6-13% | 14-20% |
| Fitness | 14-17% | 21-24% |
| Acceptable | 18-24% | 25-31% |
| Obese | 25%+ | 32%+ |

### Building Muscle (Hypertrophy)

**Requirements:**
1. **Sufficient protein** (1.6-2.2g/kg)
2. **Progressive overload** (increase weight/reps)
3. **Adequate volume** (10-20 sets/muscle/week)
4. **Recovery** (sleep, manage stress)
5. **Slight caloric surplus** (200-500 cal)

**Training principles:**
- 6-20 rep range effective
- Train close to failure (1-3 reps in reserve)
- Compound + isolation movements
- 48-72 hours between training same muscle

### Losing Fat (Cutting)

**Requirements:**
1. **Caloric deficit** (300-500 cal below maintenance)
2. **High protein** (preserve muscle)
3. **Resistance training** (maintain stimulus)
4. **Patience** (0.5-1% body weight/week max)

**Avoid:**
- Extreme deficits (muscle loss)
- Cardio only (muscle loss)
- Rapid weight loss (rebound)

### Body Recomposition

Building muscle while losing fat simultaneously:

**Who can do it:**
- Beginners (newbie gains)
- Returning after break
- Those with significant fat to lose
- On optimal nutrition/training

**Protocol:**
- Maintenance calories or slight deficit
- Very high protein (2.2g/kg)
- Intense resistance training
- Patience (slower than cut or bulk)

### DEXA: The Gold Standard

DEXA scans provide:
- Total body fat %
- Lean mass by region
- Visceral fat estimate
- Bone density

**Get baseline, retest every 6-12 months.**
      `,
      keyTakeaway: 'Body composition—the ratio of muscle to fat—determines metabolic health more than weight alone. Build muscle through progressive resistance training and adequate protein; lose fat through moderate caloric deficit while preserving muscle.',
      actionItem: 'If you don\'t know your body composition, get a DEXA scan or use a reliable estimate method. Set a specific target: either building muscle (track lean mass) or losing fat (track body fat %).'
    }
  },
  {
    id: 'body-019',
    title: 'Advanced: Cardiovascular Protocols',
    type: 'concept',
    duration: 15,
    xpReward: 130,
    content: {
      overview: 'Implement a complete cardiovascular training system that builds base, develops VO2 max, and supports longevity.',
      mainContent: `
## The Complete Cardio System

Different intensities serve different purposes:

### The Polarized Model

Elite endurance athletes use ~80/20 distribution:
- 80% easy (Zone 1-2)
- 20% hard (Zone 4-5)
- Very little Zone 3 (too hard to recover, too easy to adapt)

### Weekly Structure

**For longevity (general fitness):**
\`\`\`
Total: 4-6 hours cardio/week

Zone 2 (3-4 hours):
- 4x 45-60 min sessions
- Conversational pace
- Walking, cycling, swimming

VO2 Max (30-60 min):
- 1-2 sessions/week
- Intervals or tempo
- Hard effort

Sprint/Power (optional):
- 1 session/week
- Very short, very hard
- Maintains fast-twitch
\`\`\`

### VO2 Max Protocols

**Norwegian 4x4:**
- 4 min at 90-95% max HR
- 3 min recovery
- 4 rounds
- 1-2x/week

**Tabata (original):**
- 20 sec all-out
- 10 sec rest
- 8 rounds (4 min total)
- 3-4x/week

**Tempo runs:**
- 20-40 min at lactate threshold
- "Comfortably hard"
- Good for runners

### Zone Training Summary

| Zone | % Max HR | Feel | Purpose | Weekly Time |
|------|----------|------|---------|-------------|
| 1 | 50-60% | Very easy | Recovery | As needed |
| 2 | 60-70% | Easy conversation | Mitochondria, fat burning | 3-4 hours |
| 3 | 70-80% | Moderate | Avoid (too hard to recover) | Minimal |
| 4 | 80-90% | Hard | VO2 max, lactate | 30-60 min |
| 5 | 90-100% | Max | Power, speed | 10-20 min |

### Heart Rate Zones Calculation

**Method 1: Max HR estimate**
- Max HR = 220 - age (rough)
- Calculate zones from there

**Method 2: Heart rate reserve (more accurate)**
- Max HR - Resting HR = HR Reserve
- Zone 2 = Resting + (0.6-0.7 × Reserve)

**Method 3: Lactate testing**
- Most accurate
- Test at sports medicine facility
      `,
      keyTakeaway: 'Complete cardiovascular training follows the polarized model: 80% easy Zone 2 work for base building, 20% hard intervals for VO2 max development. Avoid the middle zone that\'s too hard to recover from but not hard enough to drive adaptation.',
      actionItem: 'Calculate your heart rate zones using the HRR method. Plan a week with 3-4 hours of Zone 2 and 1-2 high-intensity sessions. Track actual heart rate during sessions to ensure correct zones.'
    }
  },
  {
    id: 'body-020',
    title: 'Advanced: Gut Health and the Microbiome',
    type: 'concept',
    duration: 13,
    xpReward: 115,
    content: {
      overview: 'Understand the gut-brain axis and how your microbiome influences everything from mood to longevity.',
      mainContent: `
## Your Second Brain

Your gut contains:
- 100 trillion bacteria (microbiome)
- More neurons than spinal cord
- Produces 90% of serotonin
- Communicates directly with brain

### The Gut-Health Connection

| Gut Health | Body-Wide Effect |
|------------|------------------|
| Diverse microbiome | Strong immunity |
| Healthy gut lining | Reduced inflammation |
| Good bacteria balance | Better mood, cognition |
| Short-chain fatty acids | Metabolic health |

### Signs of Poor Gut Health

- Digestive issues (bloating, gas, constipation)
- Food sensitivities
- Brain fog
- Mood disorders
- Skin problems
- Frequent illness
- Autoimmune markers

### Feeding Your Microbiome

**Prebiotics (fiber that feeds good bacteria):**
- Vegetables, especially cruciferous
- Legumes
- Whole grains
- Garlic, onions, leeks
- Asparagus, artichokes

**Probiotics (beneficial bacteria):**
- Yogurt with live cultures
- Kefir
- Sauerkraut
- Kimchi
- Kombucha

**Polyphenols:**
- Berries
- Dark chocolate
- Green tea
- Olive oil

### What Harms the Microbiome

- Antibiotics (necessary sometimes, but disruptive)
- Ultra-processed foods
- Artificial sweeteners
- Excessive sugar
- Chronic stress
- Lack of fiber
- Poor sleep

### Gut Health Protocol

**Daily targets:**
- 30+ different plant foods per week
- 30-50g fiber
- Fermented foods with meals
- Adequate hydration

**Avoid:**
- Unnecessary antibiotics
- Excessive alcohol
- Processed food
- Eating when stressed

**Support:**
- Quality probiotic supplement (optional)
- Manage stress (gut-brain axis)
- Prioritize sleep
      `,
      keyTakeaway: 'Your gut microbiome influences mood, immunity, metabolism, and even longevity. Feed it with diverse plant foods, fiber, and fermented foods while avoiding processed foods and managing stress.',
      actionItem: 'Count the number of different plant foods you eat this week. The goal is 30+ varieties. Add variety: different vegetables, fruits, nuts, seeds, legumes, and whole grains.'
    }
  },
  {
    id: 'body-021',
    title: 'Advanced: Circadian Rhythm Optimization',
    type: 'concept',
    duration: 13,
    xpReward: 115,
    content: {
      overview: 'Master your body\'s master clock to optimize sleep, metabolism, and performance.',
      mainContent: `
## Your Internal Clock

Every cell in your body has a clock synchronized to the 24-hour cycle.

### The Master Clock

The **suprachiasmatic nucleus (SCN)** in your brain:
- Sets the rhythm for all other clocks
- Synchronized by light exposure
- Controls hormone release timing
- Affects metabolism, alertness, performance

### Circadian-Controlled Functions

| Time | Body Process |
|------|--------------|
| 6-8 AM | Cortisol peaks, alertness rises |
| 10 AM-12 PM | Peak cognitive performance |
| 2-3 PM | Post-lunch dip (normal) |
| 4-6 PM | Peak physical performance |
| 9-11 PM | Melatonin rises, sleep prep |
| 2-4 AM | Deepest sleep, growth hormone |

### Light as the Primary Zeitgeber

**Morning light (most important):**
- Get bright light within 30 min of waking
- 10-30 min outside (overcast counts)
- Sets circadian clock for the day
- Suppresses melatonin

**Evening light (manage carefully):**
- Dim lights 2-3 hours before bed
- Avoid blue light (screens)
- Simulate sunset

### Meal Timing and Metabolism

**Chrononutrition findings:**
- Same calories, different timing = different metabolic effects
- Earlier eating = better glucose control
- Late eating = disrupted sleep, weight gain

**Optimal:**
- Largest meal earlier in day
- Finish eating 3+ hours before bed
- Consistent meal times daily

### Aligning Exercise with Circadian Rhythm

**Morning exercise:**
- May enhance morning alertness
- Some studies show better consistency
- Consider light exposure benefit

**Afternoon/evening (4-7 PM):**
- Peak physical performance (strength, power)
- Core body temperature highest
- Lower injury risk

**Avoid:**
- Intense exercise within 2-3 hours of bed

### Shift Work and Travel

**If you must fight the clock:**
- Prioritize sleep quantity
- Use light strategically
- Melatonin for circadian shifting
- Minimize disruption duration
      `,
      keyTakeaway: 'Your circadian rhythm influences every aspect of health—sleep, metabolism, cognition, and performance. Sync it with consistent light exposure (bright morning, dim evening), meal timing, and sleep schedule.',
      actionItem: 'For 1 week: Get outside within 30 minutes of waking for 10+ minutes. Dim lights 2 hours before bed. Note sleep quality and energy levels—most people notice significant improvement.'
    }
  },
  {
    id: 'body-022',
    title: 'Advanced: Stress Resilience and HRV',
    type: 'concept',
    duration: 14,
    xpReward: 120,
    content: {
      overview: 'Build stress resilience using heart rate variability as your guide to recovery and adaptation.',
      mainContent: `
## HRV: Window Into Your Nervous System

**Heart Rate Variability (HRV):** Variation in time between heartbeats.

Higher HRV generally indicates:
- Better recovery
- Lower stress
- Greater adaptability
- Improved health

### The Autonomic Nervous System

**Sympathetic (fight-or-flight):**
- Increases heart rate
- Decreases HRV
- Stress response
- Necessary but not chronic

**Parasympathetic (rest-and-digest):**
- Decreases heart rate
- Increases HRV
- Recovery mode
- Should dominate at rest

### What Affects HRV

**Decreases HRV (stress signals):**
- Poor sleep
- Alcohol
- Illness
- Overtraining
- Psychological stress
- Dehydration

**Increases HRV (recovery signals):**
- Quality sleep
- Exercise (chronic effect)
- Meditation
- Proper nutrition
- Positive relationships
- Nature exposure

### Measuring HRV

**Devices:**
- Oura Ring
- WHOOP
- Garmin watches
- Apple Watch
- Chest straps (most accurate)

**When to measure:**
- Morning upon waking
- Before getting out of bed
- Same conditions daily
- Track trend, not single readings

### Using HRV Data

**HRV high (green):**
- Body is recovered
- Good day for hard training
- Push performance

**HRV low (amber/red):**
- Body is stressed
- Prioritize recovery
- Light activity only

### Building Stress Resilience

**Physical:**
- Consistent exercise (builds tolerance)
- Cold exposure (hormetic stress)
- Proper recovery

**Mental:**
- Meditation (parasympathetic activation)
- Breathing practices
- Sleep prioritization

**Lifestyle:**
- Manage obligations
- Social connection
- Purpose and meaning
- Time in nature
      `,
      keyTakeaway: 'HRV provides real-time feedback on your stress-recovery balance. Track it consistently to guide training intensity and recovery. Higher HRV indicates better resilience and health.',
      actionItem: 'If you have an HRV-capable device, commit to measuring every morning for 2 weeks. Notice patterns: what raises HRV (good)? What lowers it (stress signal)? Use this data to guide your training.'
    }
  },
  {
    id: 'body-023',
    title: 'Advanced: The Longevity Mindset',
    type: 'reflection',
    duration: 12,
    xpReward: 110,
    content: {
      overview: 'Develop the psychological framework for sustainable health practices over a lifetime.',
      mainContent: `
## Playing the Long Game

Longevity isn't a sprint—it's a multi-decade marathon.

### The Mindset Shifts

**From:** Quick fixes → **To:** Sustainable systems
**From:** All-or-nothing → **To:** Consistent imperfect
**From:** Punishment → **To:** Self-care
**From:** Willpower → **To:** Environment design
**From:** Optimal → **To:** Good enough consistently

### The 1% Philosophy

- 1% better daily = 37x improvement in a year
- Small, consistent actions compound
- Massive results from boring basics
- Don't optimize; systemize

### Identity-Based Change

**Don't:** "I'm trying to lose weight"
**Do:** "I'm the type of person who prioritizes health"

Your behaviors follow your identity:
- Adopt the identity first
- Behaviors follow naturally
- Each action reinforces identity

### Dealing with Setbacks

**Expect them:**
- Life happens (travel, illness, stress)
- Perfect adherence is impossible
- Setbacks are normal, not failure

**Respond wisely:**
- One bad day doesn't undo progress
- Return to baseline immediately
- Don't catastrophize
- Learn and adjust

### The Centenarian Vision

**Visualize yourself at 100:**
- What do you want to be doing?
- Who do you want to be with?
- What capability do you need?

**Work backward:**
- What do you need at 80 to reach that?
- What do you need at 60?
- What do you need now?

### Sustainable Motivation

**Intrinsic motivators:**
- How you feel (energy, mood, sleep)
- What you can do (performance, activities)
- Who you're becoming (identity)

**Extrinsic motivators (less sustainable):**
- Appearance
- Others' opinions
- Arbitrary numbers

### The Keystone Habits

Habits that trigger other positive behaviors:
1. **Sleep** - Everything easier when rested
2. **Exercise** - Triggers better food choices, sleep
3. **Morning routine** - Sets tone for day
      `,
      keyTakeaway: 'Longevity requires a sustainable mindset: identity-based change, systems over goals, embracing good enough consistency over perfect adherence. Focus on keystone habits that create positive cascades.',
      actionItem: 'Write your "Centenarian Vision": What do you want to be able to do at 90-100? Describe it vividly. Then identify one keystone habit that would most support reaching that vision. Commit to it.'
    }
  },
  {
    id: 'body-024',
    title: 'Advanced: Biological Age Testing',
    type: 'concept',
    duration: 13,
    xpReward: 115,
    content: {
      overview: 'Understand epigenetic clocks and other methods for measuring your biological age versus chronological age.',
      mainContent: `
## How Old Are You Really?

**Chronological age:** Years since birth
**Biological age:** How old your body functions

These can differ by decades.

### Epigenetic Clocks

DNA methylation patterns correlate with aging:
- Certain genes get "methylated" over time
- Patterns predict health outcomes
- Can be measured via blood or saliva test

**Major clocks:**
- Horvath Clock (first generation)
- GrimAge (predicts mortality)
- DunedinPACE (rate of aging)

### What Accelerates Biological Aging

| Factor | Impact |
|--------|--------|
| Smoking | +5-10 years |
| Obesity | +3-10 years |
| Chronic stress | +3-5 years |
| Poor sleep | +2-5 years |
| Sedentary lifestyle | +3-5 years |
| Poor diet | +2-5 years |

### What Slows Biological Aging

| Intervention | Impact |
|--------------|--------|
| Regular exercise | -3-5 years |
| Healthy weight | -3-5 years |
| Quality sleep | -2-4 years |
| Mediterranean diet | -2-4 years |
| Stress management | -2-4 years |
| Social connection | -2-3 years |

### Getting Tested

**Available tests:**
- TruAge (Tru Diagnostic)
- myDNAge
- Elysium Index
- Various research options

**Costs:** $300-500 typically
**Frequency:** Annually if tracking interventions

### Interpreting Results

**Younger than chronological:**
- Good news - continue what you're doing
- May have room for optimization

**Older than chronological:**
- Call to action
- Focus on fundamentals
- Retest after 6-12 months of changes

### Beyond Epigenetics

**Other biological age markers:**
- VO2 max relative to age
- Grip strength norms
- Balance and reaction time
- Cognitive testing
- Inflammatory markers
      `,
      keyTakeaway: 'Biological age can differ significantly from chronological age and is modifiable through lifestyle. Epigenetic testing provides a measurable target for longevity interventions.',
      actionItem: 'Consider getting an epigenetic age test to establish your biological baseline. If not ready for that investment, assess biological age proxies: VO2 max, grip strength, and balance relative to age norms.'
    }
  },
  {
    id: 'body-025',
    title: 'Your Longevity Protocol: Integration',
    type: 'reflection',
    duration: 15,
    xpReward: 150,
    content: {
      overview: 'Synthesize everything into your personalized longevity protocol that you can sustain for life.',
      mainContent: `
## Building Your Longevity Stack

You've learned the science. Now create your system.

### The Non-Negotiables (Daily)

\`\`\`
SLEEP
□ 7-9 hours in bed
□ Consistent timing (±30 min)
□ Dark, cool environment

MOVEMENT
□ 10,000+ steps
□ Strength training 3-4x/week
□ Zone 2 cardio 3+ hours/week

NUTRITION
□ Protein at every meal (1.6-2.2g/kg total)
□ Vegetables with most meals
□ Limit ultra-processed foods
\`\`\`

### The High-Impact Additions (Weekly)

\`\`\`
□ 1-2 VO2 max sessions
□ 3+ sauna sessions (if available)
□ Cold exposure 2-3x
□ Time in nature
□ Social connection
□ Stress management practice
\`\`\`

### Annual Check-ins

\`\`\`
□ Comprehensive blood work
□ DEXA scan (body composition)
□ VO2 max test or estimate
□ Review and adjust protocol
□ Set new longevity goals
\`\`\`

### Your Personal Protocol Template

**Morning routine:**
_________________________________
_________________________________

**Exercise schedule:**
_________________________________
_________________________________

**Nutrition framework:**
_________________________________
_________________________________

**Evening routine:**
_________________________________
_________________________________

**Weekly practices:**
_________________________________
_________________________________

### The Integration Principle

Don't try to implement everything at once:

**Month 1:** Nail sleep
**Month 2:** Add exercise consistency
**Month 3:** Optimize nutrition
**Month 4:** Add recovery practices
**Month 5:** Fine-tune and track
**Month 6:** Assess and adjust

### Your Centenarian Decathlon

List 10 physical activities you want to be able to do at 90:

1. _________________________________
2. _________________________________
3. _________________________________
4. _________________________________
5. _________________________________
6. _________________________________
7. _________________________________
8. _________________________________
9. _________________________________
10. ________________________________

**Now train for them.**

### Final Thought

> "The best time to plant a tree was 20 years ago. The second best time is now."

Every day you invest in longevity compounds. Start today.
      `,
      keyTakeaway: 'Longevity is built through systems, not heroic efforts. Create a sustainable protocol addressing sleep, movement, and nutrition as non-negotiables, then layer in high-impact additions. Review and adjust annually.',
      actionItem: 'Complete the Personal Protocol Template above. Post it somewhere visible. Commit to implementing one section at a time over the next 6 months. Schedule your first annual longevity review in your calendar.'
    }
  }
];

export default bodyLongevityLessons;
