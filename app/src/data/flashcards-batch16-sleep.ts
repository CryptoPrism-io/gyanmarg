import type { SpacedRepetitionCard } from '@/types';

export const sleepScienceFlashcards: SpacedRepetitionCard[] = [
  {
    id: 'fc-sleep-001',
    front: 'What are the four stages of sleep and how long does a complete sleep cycle typically last?',
    back: 'Sleep consists of 4 stages: Stage 1 (light sleep, 1-5 min), Stage 2 (deeper sleep, 10-25 min), Stage 3 (deep/slow-wave sleep, 20-40 min), and REM (rapid eye movement, 10-60 min). A complete cycle lasts approximately 90 minutes, and we typically go through 4-6 cycles per night.',
    category: 'Health',
    source: 'Why We Sleep - Matthew Walker',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['sleep', 'sleep-stages', 'health']
  },
  {
    id: 'fc-sleep-002',
    front: 'What is the circadian rhythm and what is the primary external cue that regulates it?',
    back: 'The circadian rhythm is your internal 24-hour biological clock that regulates sleep-wake cycles, hormone release, body temperature, and other bodily functions. Light is the primary external cue (zeitgeber) that synchronizes this rhythm. The suprachiasmatic nucleus (SCN) in the hypothalamus acts as the master clock, receiving direct light input from the eyes.',
    category: 'Health',
    source: 'Why We Sleep - Matthew Walker',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['sleep', 'circadian-rhythm', 'biology']
  },
  {
    id: 'fc-sleep-003',
    front: 'What is sleep debt and can it truly be "repaid"?',
    back: 'Sleep debt is the cumulative effect of not getting enough sleep over time. Research shows that while you can partially recover from acute sleep deprivation with extra sleep, chronic sleep debt cannot be fully repaid. Lost deep sleep and REM sleep cannot be completely recovered. One night of poor sleep requires several nights of quality sleep to restore cognitive function. Prevention through consistent sleep schedules is far more effective than attempted recovery.',
    category: 'Health',
    source: 'Why We Sleep - Matthew Walker',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['sleep', 'sleep-debt', 'recovery']
  },
  {
    id: 'fc-sleep-004',
    front: 'What are the primary functions of REM sleep?',
    back: 'REM sleep serves critical functions: 1) Emotional processing and regulation - helps process difficult emotions and reduces anxiety, 2) Memory consolidation - integrates new information with existing knowledge, 3) Creativity and problem-solving - makes novel connections between ideas, 4) Brain development - essential for neural pruning and development (especially in young), 5) Dream generation - most vivid dreams occur during REM. REM sleep increases in later sleep cycles, making a full night\'s sleep essential.',
    category: 'Health',
    source: 'Why We Sleep - Matthew Walker',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['sleep', 'REM', 'memory', 'emotions']
  },
  {
    id: 'fc-sleep-005',
    front: 'What are the primary functions of NREM (Non-REM) deep sleep?',
    back: 'NREM deep sleep (Stage 3/4) serves vital functions: 1) Physical restoration - growth hormone release peaks during deep sleep, 2) Immune system strengthening - cytokine production increases, 3) Memory consolidation - transfers information from hippocampus to long-term cortical storage, 4) Brain detoxification - glymphatic system clears metabolic waste including beta-amyloid, 5) Cardiovascular health - blood pressure and heart rate drop significantly. Deep sleep dominates the first half of the night.',
    category: 'Health',
    source: 'Why We Sleep - Matthew Walker',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['sleep', 'NREM', 'deep-sleep', 'restoration']
  },
  {
    id: 'fc-sleep-006',
    front: 'How does blue light affect melatonin production and what is the recommended cutoff time for screen use?',
    back: 'Blue light (wavelength 450-495nm) suppresses melatonin production by signaling to the SCN that it is daytime. Even dim blue light can delay melatonin release by up to 3 hours. Recommendations: Stop screen use 2-3 hours before bed, use blue light filters or night mode after sunset, consider blue-blocking glasses if screens are unavoidable. LED screens emit significant blue light - even 8 lux of blue light can affect circadian timing.',
    category: 'Health',
    source: 'Why We Sleep - Matthew Walker',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['sleep', 'blue-light', 'melatonin', 'technology']
  },
  {
    id: 'fc-sleep-007',
    front: 'What is the half-life of caffeine and what is the optimal cutoff time to avoid sleep disruption?',
    back: 'Caffeine has a half-life of approximately 5-7 hours (varies by individual genetics and liver function). This means if you consume 200mg at 4pm, you still have 100mg in your system at 9-11pm. Even if you can fall asleep with caffeine in your system, it reduces deep sleep quality by up to 20%. Optimal cutoff: Avoid caffeine at least 8-10 hours before bed. For most people, this means no caffeine after noon or early afternoon.',
    category: 'Health',
    source: 'Why We Sleep - Matthew Walker',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['sleep', 'caffeine', 'timing', 'performance']
  },
  {
    id: 'fc-sleep-008',
    front: 'What is the ideal bedroom temperature for optimal sleep and why?',
    back: 'The ideal bedroom temperature is 65-68°F (18-20°C). Your body needs to drop its core temperature by 2-3°F to initiate sleep and maintain deep sleep stages. A cool room facilitates this natural temperature drop. Tips: Keep bedroom cool, use breathable bedding, take a warm bath 1-2 hours before bed (counterintuitively, this helps - the subsequent cooling triggers sleepiness), keep feet slightly warm (promotes vasodilation and heat loss).',
    category: 'Health',
    source: 'Why We Sleep - Matthew Walker',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['sleep', 'temperature', 'sleep-hygiene', 'environment']
  },
  {
    id: 'fc-sleep-009',
    front: 'What is sleep inertia and how long does it typically last?',
    back: 'Sleep inertia is the grogginess and impaired cognitive performance experienced immediately after waking, especially from deep sleep. It typically lasts 15-30 minutes but can extend to 2 hours in severe cases. Causes: Abrupt awakening from deep sleep, sleep deprivation, irregular sleep schedules. Mitigation strategies: Wake naturally when possible, use gradual light alarms, maintain consistent wake times, avoid hitting snooze (fragments sleep), get bright light exposure immediately upon waking.',
    category: 'Health',
    source: 'Sleep Research',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['sleep', 'sleep-inertia', 'waking', 'performance']
  },
  {
    id: 'fc-sleep-010',
    front: 'What is the optimal nap duration and timing for performance enhancement without sleep disruption?',
    back: 'Optimal nap parameters: Duration - 10-20 minutes (power nap) avoids deep sleep and sleep inertia, or 90 minutes (full cycle) if severely sleep deprived. Timing - Early afternoon (1-3pm) aligns with natural circadian dip and won\'t disrupt nighttime sleep. The "coffee nap": Drink coffee immediately before a 20-min nap - caffeine kicks in as you wake. Avoid napping after 3pm or for longer than 30 minutes (unless doing full 90-min cycle) as this can impair nighttime sleep.',
    category: 'Health',
    source: 'Sleep Research',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['sleep', 'napping', 'performance', 'energy']
  },
  {
    id: 'fc-sleep-011',
    front: 'How does alcohol affect sleep architecture even in moderate amounts?',
    back: 'Alcohol significantly disrupts sleep quality: 1) Suppresses REM sleep - even 1-2 drinks reduce REM by 20-40%, 2) Fragments sleep - causes multiple awakenings in the second half of the night as alcohol metabolizes, 3) Worsens sleep apnea - relaxes throat muscles, 4) Acts as a diuretic - increases nighttime urination, 5) Creates pseudo-sedation - while it helps you fall asleep faster, the sleep quality is poor. Alcohol should be avoided at least 3-4 hours before bed for minimal impact.',
    category: 'Health',
    source: 'Why We Sleep - Matthew Walker',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['sleep', 'alcohol', 'REM', 'sleep-quality']
  },
  {
    id: 'fc-sleep-012',
    front: 'What is adenosine and how does it create sleep pressure throughout the day?',
    back: 'Adenosine is a neurotransmitter that accumulates in the brain during waking hours, creating "sleep pressure." As adenosine levels rise, it binds to receptors in the brain, promoting drowsiness and inhibiting arousal. After approximately 12-16 hours of wakefulness, adenosine levels are high enough to trigger strong sleep drive. During sleep (especially deep sleep), adenosine is cleared from the brain. Caffeine works by blocking adenosine receptors, temporarily masking tiredness without eliminating the underlying sleep pressure.',
    category: 'Health',
    source: 'Why We Sleep - Matthew Walker',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['sleep', 'adenosine', 'caffeine', 'neuroscience']
  },
  {
    id: 'fc-sleep-013',
    front: 'What is the two-process model of sleep regulation?',
    back: 'The two-process model explains sleep timing through two independent mechanisms: Process S (Sleep Homeostasis) - Sleep pressure builds during wakefulness via adenosine accumulation, creating increasing drive to sleep. Process C (Circadian) - The 24-hour biological clock regulates alertness independent of sleep pressure, with alerting signals peaking in early evening and dropping at night. Sleep occurs when Process S (high sleep pressure) coincides with Process C (low circadian alerting). Understanding this helps explain second winds and jet lag.',
    category: 'Health',
    source: 'Sleep Science Research',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['sleep', 'sleep-regulation', 'circadian', 'adenosine']
  },
  {
    id: 'fc-sleep-014',
    front: 'How does sleep deprivation affect the immune system?',
    back: 'Sleep deprivation severely compromises immune function: 1) Natural killer cell activity drops by 70% after just one night of 4 hours sleep, 2) Vaccine effectiveness decreases - studies show 50% reduction in antibody response with sleep deprivation, 3) Inflammatory markers (IL-6, CRP) increase, 4) Infection susceptibility rises - people sleeping <7 hours are 3x more likely to catch a cold, 5) Cancer risk increases - WHO classifies night shift work as a probable carcinogen due to circadian disruption. Sleep is one of the most powerful immune boosters available.',
    category: 'Health',
    source: 'Why We Sleep - Matthew Walker',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['sleep', 'immune-system', 'health', 'disease']
  },
  {
    id: 'fc-sleep-015',
    front: 'What is the glymphatic system and why is it critical during sleep?',
    back: 'The glymphatic system is the brain\'s waste clearance mechanism, most active during deep sleep. During NREM sleep, brain cells shrink by ~60%, allowing cerebrospinal fluid to flush through and remove metabolic waste, including beta-amyloid (associated with Alzheimer\'s) and tau proteins. This system is 10x more active during sleep than wakefulness. Chronic sleep deprivation leads to toxic protein accumulation, potentially contributing to neurodegenerative diseases. This discovery highlights why deep sleep is non-negotiable for brain health.',
    category: 'Health',
    source: 'Why We Sleep - Matthew Walker',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['sleep', 'glymphatic', 'brain-health', 'Alzheimer']
  },
  {
    id: 'fc-sleep-016',
    front: 'What are chronotypes and how should you optimize your schedule based on yours?',
    back: 'Chronotypes are genetically-influenced sleep-wake preferences: Morning types (Lions/Larks) - ~25% of population, peak alertness early morning, prefer 6am-10pm schedule. Evening types (Wolves/Owls) - ~25% of population, peak alertness late evening, prefer 10am-2am schedule. Intermediate types (Bears) - ~50%, follow solar cycle. Optimization: Schedule demanding cognitive work during your peak alertness window, don\'t fight your natural tendency excessively, gradually shift sleep times if needed (15-30 min increments). Chronotype shifts with age - teens naturally become evening types, seniors become morning types.',
    category: 'Health',
    source: 'Sleep Research',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['sleep', 'chronotype', 'productivity', 'genetics']
  },
  {
    id: 'fc-sleep-017',
    front: 'How does sleep consolidate memories and what types of memory benefit from different sleep stages?',
    back: 'Sleep consolidates memories through stage-specific processes: NREM Deep Sleep - consolidates declarative/factual memories (what you studied), transfers information from hippocampus to cortex for long-term storage via sleep spindles and slow oscillations. REM Sleep - consolidates procedural memories (how to do things) and emotional memories, integrates new information with existing knowledge, makes creative connections. The sequence matters: Learning→Sleep→Testing shows 20-40% better retention than equivalent time awake. Sleeping after learning is crucial; sleeping before also prepares the brain to absorb new information.',
    category: 'Health',
    source: 'Why We Sleep - Matthew Walker',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['sleep', 'memory', 'learning', 'REM', 'NREM']
  },
  {
    id: 'fc-sleep-018',
    front: 'What is sleep apnea, what are its warning signs, and why is it dangerous?',
    back: 'Sleep apnea is repeated breathing interruptions during sleep (>5 events/hour). Types: Obstructive (most common - airway collapses), Central (brain fails to signal breathing). Warning signs: Loud snoring, witnessed breathing pauses, gasping/choking during sleep, excessive daytime sleepiness, morning headaches, high blood pressure. Dangers: 2-3x higher cardiovascular disease and stroke risk, increased diabetes risk, cognitive impairment, 2-7x higher accident risk due to fatigue. Risk factors: Obesity, large neck circumference, male sex, age. Treatment: CPAP therapy, weight loss, positional therapy, oral appliances.',
    category: 'Health',
    source: 'Sleep Medicine',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['sleep', 'sleep-apnea', 'disorders', 'health']
  },
  {
    id: 'fc-sleep-019',
    front: 'What is insomnia and what are evidence-based treatments beyond medication?',
    back: 'Insomnia is difficulty initiating or maintaining sleep despite adequate opportunity, causing daytime impairment. Types: Onset (can\'t fall asleep), Maintenance (can\'t stay asleep), Early awakening. First-line treatment: CBT-I (Cognitive Behavioral Therapy for Insomnia) - more effective long-term than medication. Components: Sleep restriction therapy, stimulus control (bed only for sleep), cognitive restructuring, relaxation training, sleep hygiene education. Key principle: Spend less time in bed to increase sleep pressure and efficiency. Avoid sleep medications for chronic insomnia - they don\'t produce natural sleep architecture.',
    category: 'Health',
    source: 'Sleep Medicine',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['sleep', 'insomnia', 'CBT-I', 'treatment']
  },
  {
    id: 'fc-sleep-020',
    front: 'What is the stimulus control technique for improving sleep onset?',
    back: 'Stimulus control strengthens the mental association between bed and sleep: 1) Use bed only for sleep and intimacy - no reading, TV, phones, or work, 2) Go to bed only when sleepy, not just tired, 3) If unable to sleep within 20 minutes, leave bed and do a relaxing activity in dim light until sleepy, 4) Wake at the same time daily regardless of sleep quality, 5) Avoid napping initially. Rationale: Many insomniacs have conditioned their brain to associate bed with wakefulness and anxiety. This technique reconditions the bed as a sleep trigger. Typically takes 2-4 weeks to see results.',
    category: 'Health',
    source: 'CBT-I Research',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['sleep', 'insomnia', 'stimulus-control', 'CBT-I']
  },
  {
    id: 'fc-sleep-021',
    front: 'How does exercise affect sleep quality and what is the optimal timing?',
    back: 'Exercise significantly improves sleep: Increases deep sleep duration by 25-30%, reduces sleep onset time, improves sleep efficiency, helps regulate circadian rhythm. Optimal timing: Morning or afternoon exercise is best - raises body temperature, then natural cooling promotes evening sleepiness. Evening exercise debate: While high-intensity exercise within 2-3 hours of bed can delay sleep onset (elevated body temperature and adrenaline), moderate exercise is generally fine. Individual variation matters - track your response. Consistency is key - regular exercisers have better sleep quality than occasional exercisers.',
    category: 'Health',
    source: 'Sleep Research',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['sleep', 'exercise', 'sleep-hygiene', 'timing']
  },
  {
    id: 'fc-sleep-022',
    front: 'What is sleep efficiency and what percentage indicates healthy sleep?',
    back: 'Sleep efficiency is the percentage of time spent asleep while in bed: (Total Sleep Time / Time in Bed) x 100. Healthy sleep efficiency: 85% or higher is considered good, 90%+ is excellent. Below 85% may indicate insomnia. Example: 8 hours in bed, 7 hours asleep = 87.5% efficiency. How to improve: Sleep restriction (counterintuitively, spend less time in bed), maintain consistent sleep-wake times, avoid lying awake in bed (get up after 20 min), eliminate sleep disruptors. Low sleep efficiency often reflects conditioned insomnia - the bed becomes associated with wakefulness.',
    category: 'Health',
    source: 'Sleep Medicine',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['sleep', 'sleep-efficiency', 'insomnia', 'metrics']
  },
  {
    id: 'fc-sleep-023',
    front: 'What role does melatonin play in sleep and when should supplementation be considered?',
    back: 'Melatonin is the "hormone of darkness" that signals sleep timing (not a sedative). Natural production begins 2-3 hours before typical bedtime as light decreases. Supplementation benefits: Jet lag (take at destination bedtime), shift work adaptation, delayed sleep phase syndrome, elderly with reduced natural melatonin. Dosing: Start low (0.3-0.5mg) - typical 3-10mg supplements are supraphysiological. Timing matters more than dose - take 1-3 hours before desired sleep time. Melatonin does not significantly improve sleep onset or duration in normal sleepers - it\'s a circadian shifter, not a sleeping pill.',
    category: 'Health',
    source: 'Sleep Research',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['sleep', 'melatonin', 'supplements', 'circadian']
  },
  {
    id: 'fc-sleep-024',
    front: 'What is the relationship between sleep and weight/metabolism?',
    back: 'Sleep deprivation significantly affects weight and metabolism: Hormonal changes - Ghrelin (hunger hormone) increases by 28%, Leptin (satiety hormone) decreases by 18%, creating 350-500 calorie/day surplus. Cravings - Sleep-deprived individuals crave high-carb, high-fat foods (prefrontal cortex impairment affects food choices). Insulin resistance - Just one week of 5-hour sleep creates pre-diabetic glucose levels in healthy adults. Muscle loss - Sleep deprivation during caloric deficit causes greater muscle loss vs fat loss. Getting adequate sleep is one of the most underrated weight management strategies.',
    category: 'Health',
    source: 'Why We Sleep - Matthew Walker',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['sleep', 'weight', 'metabolism', 'hormones']
  },
  {
    id: 'fc-sleep-025',
    front: 'How does consistent sleep timing affect health beyond just sleep quality?',
    back: 'Consistent sleep timing ("social jet lag" avoidance) affects multiple health dimensions: Cardiovascular - Irregular sleep times linked to 2x higher cardiovascular disease risk. Metabolic - Weekend sleep schedule shifts correlate with higher BMI and insulin resistance. Mental health - Irregular sleepers have higher depression and anxiety rates. Cognitive - Variable bedtimes impair memory consolidation and learning. Recommendation: Keep sleep and wake times within 30-60 minutes daily, including weekends. "Sleeping in" on weekends disrupts Monday adjustment and perpetuates the cycle. Consistency may be as important as duration.',
    category: 'Health',
    source: 'Sleep Research',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['sleep', 'consistency', 'social-jet-lag', 'health']
  },
  {
    id: 'fc-sleep-026',
    front: 'What is the "forbidden zone" for sleep and why does it exist?',
    back: 'The forbidden zone (also called "wake maintenance zone") is a 2-3 hour window in early evening (typically 7-9pm) when falling asleep is most difficult, despite accumulated sleep pressure. Cause: Circadian alerting signal peaks in the evening before melatonin release begins, overriding homeostatic sleep drive. Evolutionary purpose: Allows completion of evening tasks before nightfall. Practical implications: Don\'t try to sleep during this window (causes frustration), if you\'re drowsy before this time but push through, you may get a "second wind," ideal bedtime is after this zone passes.',
    category: 'Health',
    source: 'Sleep Science Research',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['sleep', 'circadian', 'forbidden-zone', 'timing']
  },
  {
    id: 'fc-sleep-027',
    front: 'What are sleep spindles and why are they important?',
    back: 'Sleep spindles are brief bursts of neural activity (11-15 Hz, lasting 0.5-2 seconds) occurring primarily during Stage 2 NREM sleep. Functions: Memory consolidation - act as a "save" signal, transferring memories from short to long-term storage. Sleep protection - block external stimuli from waking you. Learning indicator - people with more spindles show better learning capacity; spindles increase after learning tasks. Individual variation is largely genetic and stable. Spindles decrease with age, correlating with reduced memory consolidation in older adults. Quality sleep produces more spindles.',
    category: 'Health',
    source: 'Sleep Neuroscience',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['sleep', 'sleep-spindles', 'memory', 'neuroscience']
  },
  {
    id: 'fc-sleep-028',
    front: 'What is the impact of sleeping pills on actual sleep architecture?',
    back: 'Sleeping pills (benzodiazepines, Z-drugs like Ambien/Zolpidem) don\'t produce natural sleep: They increase sedation, not restorative sleep. They suppress both deep sleep and REM sleep significantly. Memory consolidation is impaired - these drugs cause anterograde amnesia. Rebound insomnia occurs upon discontinuation. Long-term use associated with higher mortality and dementia risk. They don\'t address underlying causes of insomnia. Alternative: CBT-I is more effective long-term without side effects. If medication is needed, work with a doctor on short-term use while implementing behavioral changes.',
    category: 'Health',
    source: 'Why We Sleep - Matthew Walker',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['sleep', 'medication', 'sleeping-pills', 'risks']
  },
  {
    id: 'fc-sleep-029',
    front: 'How should you structure a pre-sleep wind-down routine and why does it matter?',
    back: 'A wind-down routine signals the brain to prepare for sleep through consistent pre-sleep associations: Timing - Begin 30-60 minutes before bed. Components: Dim lights throughout home (promotes melatonin), cease stimulating activities (work, intense exercise, arguments), screen-free time or blue-light blocking, relaxing activities (reading physical books, gentle stretching, meditation), lower room temperature, consistent sequence of events (bathroom routine, etc.). Why it works: Creates conditioned associations, allows cortisol to decrease and melatonin to rise, gives the nervous system time to downshift from sympathetic to parasympathetic state.',
    category: 'Health',
    source: 'Sleep Hygiene Research',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['sleep', 'routine', 'sleep-hygiene', 'wind-down']
  },
  {
    id: 'fc-sleep-030',
    front: 'What is delayed sleep phase syndrome (DSPS) and how is it treated?',
    back: 'DSPS is a circadian rhythm disorder where the natural sleep-wake cycle is delayed by 2+ hours relative to conventional times. Sufferers can\'t fall asleep until 2-6am and naturally wake late morning/afternoon. Common in adolescents and young adults. Distinct from insomnia - sleep quality is normal, just delayed. Treatments: Chronotherapy - gradually shift bedtime later until reaching desired time. Light therapy - bright light exposure upon waking (10,000 lux, 30 min). Melatonin - low dose (0.5-3mg) 5-7 hours before desired bedtime. Consistent schedule - strict sleep-wake times even on weekends. Success requires maintaining the new schedule indefinitely.',
    category: 'Health',
    source: 'Sleep Medicine',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['sleep', 'DSPS', 'circadian', 'disorders']
  },
  {
    id: 'fc-sleep-031',
    front: 'What is the relationship between sleep and emotional regulation?',
    back: 'Sleep profoundly affects emotional regulation: REM sleep function - Processes emotional experiences, strips the emotional charge from memories while retaining the content (overnight therapy). Sleep deprivation effects - Amygdala reactivity increases 60% without adequate sleep, prefrontal cortex control weakens, creating emotional volatility. Depression link - REM sleep abnormalities are found in most depressed patients; sleep deprivation temporarily alleviates symptoms (but is not sustainable). Anxiety - Poor sleep increases anticipatory anxiety and reduces ability to regulate worry. Adequate REM sleep is like "emotional first aid" for daily psychological health.',
    category: 'Health',
    source: 'Why We Sleep - Matthew Walker',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['sleep', 'emotions', 'mental-health', 'REM']
  },
  {
    id: 'fc-sleep-032',
    front: 'What is the relationship between light exposure timing and circadian rhythm optimization?',
    back: 'Strategic light exposure is the most powerful circadian tool: Morning bright light (within 30-60 min of waking): 10,000+ lux for 20-30 minutes advances circadian rhythm, suppresses melatonin, increases alertness, treats winter depression. Best source: Natural sunlight, even on cloudy days (2,000-10,000 lux). Evening light avoidance: Dim lights 2-3 hours before bed, minimize blue light, use warm-colored bulbs (2700K or lower). Light sensitivity: Eyes are most sensitive to light\'s circadian effects in evening/night. Consistent daily light patterns entrain robust circadian rhythms, improving both sleep quality and daytime alertness.',
    category: 'Health',
    source: 'Circadian Research',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['sleep', 'light', 'circadian', 'morning-routine']
  },
  {
    id: 'fc-sleep-033',
    front: 'What happens to sleep architecture across the night and why is this important?',
    back: 'Sleep architecture shifts across the night in predictable patterns: Early night (first half): Dominated by deep NREM sleep (70-80% of total deep sleep) - critical for physical restoration, memory consolidation, immune function. Late night (second half): Dominated by REM sleep (most REM occurs in final cycles) - critical for emotional processing, creativity, procedural memory. Practical implication: Going to bed late sacrifices deep sleep; waking early sacrifices REM sleep. Both halves are essential but serve different functions. Consistently getting 7-9 hours ensures adequate amounts of both stages.',
    category: 'Health',
    source: 'Why We Sleep - Matthew Walker',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['sleep', 'sleep-architecture', 'REM', 'NREM']
  },
  {
    id: 'fc-sleep-034',
    front: 'How does jet lag affect the body and what are evidence-based strategies to minimize it?',
    back: 'Jet lag occurs when your circadian rhythm is misaligned with local time: Symptoms - Sleep disturbance, fatigue, cognitive impairment, digestive issues, mood changes. Adaptation rate: ~1 day per time zone crossed. Eastward travel is harder (requires advancing clock). Strategies: Pre-adjustment - Gradually shift sleep schedule toward destination (15-30 min/day). Light exposure - Seek morning light at destination to advance clock, evening light to delay. Melatonin - 0.5-3mg at destination bedtime for first few nights. Fasting - Some evidence that meal timing helps reset peripheral clocks. Hydration - Avoid alcohol/caffeine on flight. Short trips (<3 days): Consider staying on home time.',
    category: 'Health',
    source: 'Travel Medicine Research',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['sleep', 'jet-lag', 'travel', 'circadian']
  },
  {
    id: 'fc-sleep-035',
    front: 'What is sleep restriction therapy and how does it work for insomnia?',
    back: 'Sleep restriction therapy (SRT) is a counterintuitive but highly effective CBT-I technique: Method: Calculate average sleep time (e.g., 5 hours), set time in bed to match (minimum 5.5 hours). Maintain strict wake time regardless of sleep quality. When sleep efficiency reaches 85%+, increase time in bed by 15-30 minutes. Repeat until optimal duration is reached. Why it works: Builds sleep pressure, consolidates fragmented sleep, breaks negative bed associations, increases sleep drive. Initial phase is difficult - mild sleep deprivation occurs - but efficiency improves rapidly. Typically produces significant improvement within 2-4 weeks. Should be done under professional guidance.',
    category: 'Health',
    source: 'CBT-I Research',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['sleep', 'insomnia', 'sleep-restriction', 'CBT-I']
  },
  {
    id: 'fc-sleep-036',
    front: 'What are hypnagogic and hypnopompic states and how can they be utilized?',
    back: 'Hypnagogic state: The transitional period between wakefulness and sleep (falling asleep). Hypnopompic state: The transition from sleep to wakefulness (waking up). Characteristics: Dreamlike imagery, reduced critical thinking, creative insights, occasional hallucinations, sense of floating. Creative applications: Many artists and inventors (Salvador Dali, Thomas Edison) used the hypnagogic state for creative insights - holding objects that would drop and wake them as they dozed. Modern use: Brief "nap and wake" sessions can capture creative ideas. These states offer unique access to unconscious associations. Keep a notebook nearby to capture insights before full wakefulness erases them.',
    category: 'Health',
    source: 'Sleep Psychology',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['sleep', 'hypnagogic', 'creativity', 'consciousness']
  },
  {
    id: 'fc-sleep-037',
    front: 'How does age affect sleep needs and architecture throughout the lifespan?',
    back: 'Sleep changes dramatically across life: Infants (0-1): 14-17 hours, polyphasic, 50% REM (brain development). Toddlers/Children: 10-14 hours, high deep sleep percentage, critical for growth hormone release. Teenagers: 8-10 hours, circadian shift to later timing (not laziness - biology), high REM needs. Adults (26-64): 7-9 hours, stable architecture. Older adults (65+): 7-8 hours needed but harder to obtain, 70-80% reduction in deep sleep, more fragmented sleep, earlier circadian timing. Key insight: Elderly still need sleep but ability to generate it decreases - this is not normal aging to accept, but a problem to address.',
    category: 'Health',
    source: 'Why We Sleep - Matthew Walker',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['sleep', 'aging', 'development', 'lifespan']
  },
  {
    id: 'fc-sleep-038',
    front: 'What is the role of the suprachiasmatic nucleus (SCN) in sleep regulation?',
    back: 'The suprachiasmatic nucleus (SCN) is the master biological clock located in the hypothalamus: Size: ~20,000 neurons (grain of rice sized). Function: Coordinates 24-hour rhythms throughout the body, including sleep-wake cycles, hormone release, body temperature, and metabolism. Light input: Receives direct signals from specialized retinal cells (ipRGCs) sensitive to blue light, allowing environmental synchronization. Output: Signals to pineal gland (melatonin production), other brain regions, and peripheral tissues. Damage to SCN: Results in complete loss of circadian rhythms and fragmented sleep-wake patterns. Understanding the SCN explains why light exposure timing is so powerful for sleep optimization.',
    category: 'Health',
    source: 'Neuroscience Research',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['sleep', 'SCN', 'circadian', 'neuroscience']
  },
  {
    id: 'fc-sleep-039',
    front: 'What is the relationship between sleep and athletic performance?',
    back: 'Sleep is arguably the most powerful legal performance enhancer: Reaction time: 300ms slower with 6 hours vs 8 hours sleep. Injury risk: <8 hours sleep = 1.7x higher injury rate in athletes. Strength/Power: Testosterone peaks during sleep; deprivation reduces it by 10-15%. Endurance: Glycogen replenishment is sleep-dependent; sleep deprivation increases perceived exertion. Skill learning: Motor memory consolidation requires sleep after practice. Recovery: Growth hormone release (muscle repair) primarily occurs during deep sleep. Extension studies: Basketball players adding 2 hours sleep improved sprint times and shooting accuracy by 9%. Elite athletes often sleep 10-12 hours per night.',
    category: 'Health',
    source: 'Sports Science Research',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['sleep', 'performance', 'athletics', 'recovery']
  },
  {
    id: 'fc-sleep-040',
    front: 'What are the cognitive effects of sleep deprivation and how quickly do they occur?',
    back: 'Cognitive impairment from sleep deprivation is rapid and severe: After 17-19 hours awake: Cognitive impairment equivalent to 0.05% blood alcohol. After 24 hours: Equivalent to 0.10% blood alcohol (legally drunk). Specific deficits: Attention and vigilance decline first, followed by working memory, then executive function and decision-making. Microsleeps: Brief (1-10 second) involuntary sleep episodes occur, often without awareness. Cumulative effects: Sleeping 6 hours for 10 nights produces impairment equal to 24-hour total sleep deprivation. Dangerous insight: Sleep-deprived individuals consistently underestimate their impairment while objective performance plummets.',
    category: 'Health',
    source: 'Why We Sleep - Matthew Walker',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['sleep', 'cognition', 'impairment', 'performance']
  },
  {
    id: 'fc-sleep-041',
    front: 'What is paradoxical insomnia and how is it different from other sleep disorders?',
    back: 'Paradoxical insomnia (sleep state misperception) is a condition where individuals significantly underestimate their sleep duration: Characteristic: Patient reports severe insomnia (e.g., "I didn\'t sleep at all") but sleep studies show relatively normal sleep. Cause: May involve altered sleep perception, microarousals that feel like wakefulness, anxiety about sleep creating hypervigilance. The suffering is real - daytime distress and fatigue are genuine experiences. Treatment approach: Objective sleep data can be reassuring, but focus should be on reducing sleep-related anxiety and improving subjective sleep quality. CBT-I remains effective. Important to rule out other disorders first.',
    category: 'Health',
    source: 'Sleep Medicine',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['sleep', 'insomnia', 'disorders', 'perception']
  },
  {
    id: 'fc-sleep-042',
    front: 'What dietary factors affect sleep quality beyond caffeine and alcohol?',
    back: 'Diet significantly influences sleep through multiple mechanisms: Meal timing - Large meals within 3 hours of bed disrupt sleep (digestion, acid reflux). Heavy/fatty foods take longer to digest and can cause discomfort. Carbohydrates - High-glycemic foods 4 hours before bed may improve sleep onset (increase tryptophan availability). Protein - Adequate daily protein supports neurotransmitter production. Tryptophan-rich foods - Turkey, milk, nuts contain sleep-promoting amino acid. Magnesium - Deficiency linked to poor sleep; found in leafy greens, nuts, seeds. Fiber - Higher fiber intake associated with more deep sleep. Avoid: Spicy foods, excessive fluids before bed, heavy meals late at night.',
    category: 'Health',
    source: 'Nutrition and Sleep Research',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['sleep', 'diet', 'nutrition', 'food']
  },
  {
    id: 'fc-sleep-043',
    front: 'What is the relationship between sleep and creativity/problem-solving?',
    back: 'Sleep, especially REM, dramatically enhances creative thinking: Memory integration - Sleep connects disparate information in novel ways that waking thought cannot achieve. Studies show: 33% improvement in creative problem-solving after REM-rich sleep. "Sleeping on it" works: Complex decisions benefit from unconscious processing during sleep. Dream incubation - Intentionally thinking about a problem before sleep can guide dreaming mind toward solutions. Famous examples: Periodic table (Mendeleev), benzene ring structure (Kekule), songs (Paul McCartney\'s "Yesterday") all emerged from sleep. Mechanism: Prefrontal cortex is less active in REM, allowing unusual associations. Naps containing REM also boost creativity.',
    category: 'Health',
    source: 'Sleep and Cognition Research',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['sleep', 'creativity', 'problem-solving', 'REM']
  },
  {
    id: 'fc-sleep-044',
    front: 'What is sleep hygiene and what are the core principles?',
    back: 'Sleep hygiene refers to practices and environmental factors that promote consistent, quality sleep. Core principles: 1) Consistency - Same sleep/wake time daily (+/- 30 min), including weekends. 2) Environment - Cool (65-68°F), dark (blackout curtains), quiet (white noise if needed). 3) Light management - Bright light in morning, dim in evening, avoid screens before bed. 4) Substance timing - No caffeine 10+ hours before bed, no alcohol 3+ hours before bed. 5) Activity - Regular exercise (not late evening), wind-down routine before bed. 6) Bed association - Bed only for sleep/intimacy. 7) Avoid clock-watching - Remove visible clocks to reduce anxiety.',
    category: 'Health',
    source: 'Sleep Medicine',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['sleep', 'sleep-hygiene', 'habits', 'environment']
  },
  {
    id: 'fc-sleep-045',
    front: 'How does sleep position affect sleep quality and health?',
    back: 'Sleep position has various effects on health: Side sleeping (fetal or log): Most common, reduces snoring and sleep apnea, may improve glymphatic drainage, left side preferred for reflux. Back sleeping (supine): Good for spine alignment, may worsen snoring/apnea, best for preventing facial wrinkles. Stomach sleeping (prone): Generally not recommended - strains neck and lower back, may cause nerve compression. For specific conditions: Sleep apnea - side or elevated head; acid reflux - left side with head elevated; lower back pain - side with pillow between knees or back with pillow under knees. Experiment to find what provides the best subjective sleep quality for you.',
    category: 'Health',
    source: 'Sleep Research',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['sleep', 'sleep-position', 'health', 'posture']
  },
  {
    id: 'fc-sleep-046',
    front: 'What is the relationship between screen time and sleep in adolescents?',
    back: 'Screen time profoundly affects adolescent sleep: Blue light exposure delays melatonin release by up to 3 hours. Psychological stimulation keeps the mind active when it should be winding down. Social media/gaming create arousal states incompatible with sleep. FOMO (fear of missing out) drives late-night phone checking. Studies show: Each hour of screen time associated with 3-8 minutes less sleep. 50% of teens feel addicted to mobile devices. Recommendations: Device-free bedroom, charging station outside room, school-based later start times, family media agreements, blue light filters as minimum intervention. The combination of natural adolescent circadian delay plus screen use creates a "perfect storm" of sleep deprivation.',
    category: 'Health',
    source: 'Adolescent Sleep Research',
    pathwayId: 'personal-development',
    difficulty: 'intermediate',
    tags: ['sleep', 'screens', 'adolescents', 'technology']
  },
  {
    id: 'fc-sleep-047',
    front: 'What is polyphasic sleep and is it sustainable or healthy?',
    back: 'Polyphasic sleep involves multiple sleep periods per day instead of one consolidated block: Types - Biphasic (siesta cultures), Everyman (3-4 hour core + naps), Uberman (6 x 20-min naps only). Claimed benefits: More waking hours, entering REM quickly during naps. Reality check: Uberman and extreme variants are not sustainable long-term, deprive you of deep NREM sleep, cause cognitive impairment, and no one has been documented maintaining them for years. Moderate biphasic patterns (7 hours night + afternoon nap) can be healthy and are traditional in many cultures. Evolution designed humans for consolidated nighttime sleep with optional daytime nap, not fragmented patterns.',
    category: 'Health',
    source: 'Sleep Research',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['sleep', 'polyphasic', 'napping', 'myths']
  },
  {
    id: 'fc-sleep-048',
    front: 'What is REM sleep behavior disorder (RBD) and why is it medically significant?',
    back: 'REM Behavior Disorder (RBD) is a condition where normal REM muscle paralysis fails: Symptoms - Acting out dreams, often violent or defensive movements, may injure self or bed partner, no memory of events. Normal REM - Brainstem induces muscle atonia (paralysis) preventing dream enactment. In RBD this mechanism fails. Medical significance: 80-90% of RBD patients develop Parkinson\'s disease or related disorders within 10-15 years - it\'s one of the strongest predictors. RBD is a sign of neurodegeneration in brain regions controlling REM paralysis. Treatment: Safety measures first, clonazepam or melatonin can reduce episodes. Anyone with RBD should be monitored for neurodegenerative disease development.',
    category: 'Health',
    source: 'Sleep Medicine',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['sleep', 'RBD', 'disorders', 'Parkinson']
  },
  {
    id: 'fc-sleep-049',
    front: 'How can you assess your personal sleep needs and optimal sleep duration?',
    back: 'Determining individual sleep needs (which vary from 7-9 hours for most adults): Vacation test: After a week of vacation without alarms, note when you naturally wake feeling rested - this reveals your true need. Sleep diary: Track 2 weeks of sleep duration and rate daytime alertness, mood, and performance. Signs of adequate sleep: Wake without alarm feeling refreshed, alert throughout the day without caffeine, no overwhelming afternoon dip. Signs of insufficient sleep: Need alarm to wake, drowsy during low-stimulation activities, rely on caffeine, weekend "sleep rebound." Genetic factors: True "short sleepers" (<6 hours) are extremely rare (~1% of population) and have specific gene mutations. Most who claim this are simply sleep-deprived and adapted to functioning poorly.',
    category: 'Health',
    source: 'Sleep Research',
    pathwayId: 'personal-development',
    difficulty: 'beginner',
    tags: ['sleep', 'sleep-needs', 'self-assessment', 'duration']
  },
  {
    id: 'fc-sleep-050',
    front: 'What is the relationship between sleep, Alzheimer\'s disease, and brain health long-term?',
    back: 'Sleep and Alzheimer\'s disease have a bidirectional relationship with serious implications: Beta-amyloid clearance: The glymphatic system clears beta-amyloid (Alzheimer\'s-associated protein) during deep sleep. One night of sleep deprivation increases brain amyloid levels by 5%. Chronic poor sleep: Decades of insufficient sleep lead to cumulative amyloid accumulation. Studies show adults sleeping <6 hours have significantly higher dementia risk. Vicious cycle: Amyloid buildup in sleep-regulating brain regions impairs sleep ability, leading to more accumulation. Prevention implication: Prioritizing sleep in midlife may significantly reduce late-life dementia risk. Sleep may be one of the most modifiable Alzheimer\'s risk factors. The time to invest in sleep is now - decades before cognitive symptoms might appear.',
    category: 'Health',
    source: 'Why We Sleep - Matthew Walker',
    pathwayId: 'personal-development',
    difficulty: 'advanced',
    tags: ['sleep', 'Alzheimer', 'brain-health', 'aging']
  }
];
