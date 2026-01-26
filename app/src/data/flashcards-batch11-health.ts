import type { SpacedRepetitionCard } from '@/types';

export const healthWellnessFlashcards: SpacedRepetitionCard[] = [
  // Sleep Science and Optimization
  {
    id: 'fc-hw-001',
    front: 'What are the four main stages of sleep, and what is their significance?',
    back: 'The four stages are: N1 (light sleep, transition), N2 (deeper sleep, memory consolidation begins), N3 (deep/slow-wave sleep, physical restoration and growth hormone release), and REM (dreaming, emotional processing, and memory consolidation). A complete cycle takes 90-110 minutes.',
    category: 'Life Design',
    source: 'Health & Wellness',
    pathwayId: 'life-design',
    difficulty: 'intermediate',
    tags: ['health', 'wellness', 'sleep', 'sleep-stages']
  },
  {
    id: 'fc-hw-002',
    front: 'What is sleep debt and can it be fully repaid?',
    back: 'Sleep debt is the cumulative effect of not getting enough sleep. While short-term sleep debt can be partially recovered with extra sleep, chronic sleep debt causes lasting cognitive impairment, metabolic dysfunction, and increased disease risk that cannot be fully reversed. Prevention through consistent adequate sleep is essential.',
    category: 'Life Design',
    source: 'Health & Wellness',
    pathwayId: 'life-design',
    difficulty: 'intermediate',
    tags: ['health', 'wellness', 'sleep', 'sleep-debt']
  },
  {
    id: 'fc-hw-003',
    front: 'What is the ideal bedroom temperature for optimal sleep?',
    back: 'Research suggests 65-68°F (18-20°C) is optimal for most adults. Cooler temperatures facilitate the natural drop in core body temperature that signals sleep onset. The body needs to cool down by about 2-3°F to initiate and maintain sleep effectively.',
    category: 'Life Design',
    source: 'Health & Wellness',
    pathwayId: 'life-design',
    difficulty: 'beginner',
    tags: ['health', 'wellness', 'sleep', 'environment']
  },
  {
    id: 'fc-hw-004',
    front: 'How does blue light affect sleep and what can be done about it?',
    back: 'Blue light (450-495nm wavelength) suppresses melatonin production by up to 50%, delays circadian rhythm, and reduces REM sleep. Mitigation strategies: avoid screens 1-2 hours before bed, use blue light filtering apps/glasses after sunset, and increase exposure to natural light during the day.',
    category: 'Life Design',
    source: 'Health & Wellness',
    pathwayId: 'life-design',
    difficulty: 'beginner',
    tags: ['health', 'wellness', 'sleep', 'blue-light']
  },
  {
    id: 'fc-hw-005',
    front: 'What is sleep inertia and how long does it typically last?',
    back: 'Sleep inertia is the groggy, disoriented feeling upon waking, caused by residual adenosine and incomplete transition from sleep to wakefulness. It typically lasts 15-30 minutes but can extend to 2-4 hours after sleep deprivation. Light exposure, movement, and caffeine can help reduce its duration.',
    category: 'Life Design',
    source: 'Health & Wellness',
    pathwayId: 'life-design',
    difficulty: 'intermediate',
    tags: ['health', 'wellness', 'sleep', 'waking']
  },

  // Exercise Fundamentals
  {
    id: 'fc-hw-006',
    front: 'What is the difference between muscular strength and muscular endurance?',
    back: 'Muscular strength is the maximum force a muscle can produce in a single effort (trained with heavy weights, low reps: 1-6). Muscular endurance is the ability to sustain repeated contractions over time (trained with lighter weights, high reps: 15-25+). Both are important for functional fitness.',
    category: 'Life Design',
    source: 'Health & Wellness',
    pathwayId: 'life-design',
    difficulty: 'beginner',
    tags: ['health', 'wellness', 'exercise', 'strength-training']
  },
  {
    id: 'fc-hw-007',
    front: 'What is progressive overload and why is it essential for fitness gains?',
    back: 'Progressive overload is the gradual increase of stress placed on the body during exercise. It is essential because the body adapts to consistent stimuli. Without progressively increasing weight, reps, sets, or intensity, muscles have no reason to grow stronger. This principle applies to all training modalities.',
    category: 'Life Design',
    source: 'Health & Wellness',
    pathwayId: 'life-design',
    difficulty: 'intermediate',
    tags: ['health', 'wellness', 'exercise', 'training-principles']
  },
  {
    id: 'fc-hw-008',
    front: 'What are the three energy systems the body uses during exercise?',
    back: 'ATP-PC (phosphocreatine) system: immediate energy for 0-10 seconds of max effort. Glycolytic (anaerobic) system: 10 seconds to 2 minutes, uses glucose without oxygen. Oxidative (aerobic) system: sustained activity beyond 2 minutes, uses oxygen to metabolize carbs and fats. All systems work together but dominate at different intensities.',
    category: 'Life Design',
    source: 'Health & Wellness',
    pathwayId: 'life-design',
    difficulty: 'advanced',
    tags: ['health', 'wellness', 'exercise', 'energy-systems']
  },
  {
    id: 'fc-hw-009',
    front: 'What is Zone 2 cardio and why is it important for metabolic health?',
    back: 'Zone 2 is aerobic exercise at 60-70% max heart rate where you can still hold a conversation. It builds mitochondrial density, improves fat oxidation, enhances cardiac efficiency, and forms the aerobic base for all other training. Experts recommend 3-4 hours weekly for optimal metabolic health and longevity.',
    category: 'Life Design',
    source: 'Health & Wellness',
    pathwayId: 'life-design',
    difficulty: 'intermediate',
    tags: ['health', 'wellness', 'exercise', 'cardio', 'zone-2']
  },
  {
    id: 'fc-hw-010',
    front: 'What are the key components of flexibility and how do static vs dynamic stretching differ?',
    back: 'Flexibility depends on muscle elasticity, joint structure, and neural tension. Static stretching (holding positions 30-60 seconds) is best post-workout for increasing range of motion. Dynamic stretching (controlled movements through range) is ideal pre-workout to prepare muscles without reducing power output.',
    category: 'Life Design',
    source: 'Health & Wellness',
    pathwayId: 'life-design',
    difficulty: 'beginner',
    tags: ['health', 'wellness', 'exercise', 'flexibility', 'stretching']
  },

  // Nutrition Basics
  {
    id: 'fc-hw-011',
    front: 'What are the three macronutrients and their caloric values per gram?',
    back: 'Protein: 4 calories/gram - builds and repairs tissue, enzymes, hormones. Carbohydrates: 4 calories/gram - primary energy source, especially for brain and high-intensity exercise. Fat: 9 calories/gram - hormone production, vitamin absorption, cell membranes, sustained energy.',
    category: 'Life Design',
    source: 'Health & Wellness',
    pathwayId: 'life-design',
    difficulty: 'beginner',
    tags: ['health', 'wellness', 'nutrition', 'macronutrients']
  },
  {
    id: 'fc-hw-012',
    front: 'How much protein does the average person need daily for muscle maintenance and growth?',
    back: 'General health: 0.8g per kg body weight. Active individuals: 1.2-1.6g per kg. Athletes/muscle building: 1.6-2.2g per kg. Older adults may need higher amounts (1.2-1.5g/kg) to combat muscle loss. Distribute intake across 3-4 meals for optimal muscle protein synthesis (20-40g per meal).',
    category: 'Life Design',
    source: 'Health & Wellness',
    pathwayId: 'life-design',
    difficulty: 'intermediate',
    tags: ['health', 'wellness', 'nutrition', 'protein']
  },
  {
    id: 'fc-hw-013',
    front: 'What is the glycemic index and why does it matter for energy management?',
    back: 'The glycemic index (GI) measures how quickly foods raise blood sugar on a scale of 0-100. High-GI foods (>70) cause rapid spikes and crashes, affecting energy and hunger. Low-GI foods (<55) provide sustained energy. Glycemic load (GI × carb grams ÷ 100) is more practical as it considers portion size.',
    category: 'Life Design',
    source: 'Health & Wellness',
    pathwayId: 'life-design',
    difficulty: 'intermediate',
    tags: ['health', 'wellness', 'nutrition', 'blood-sugar', 'glycemic-index']
  },
  {
    id: 'fc-hw-014',
    front: 'What are the essential micronutrients most commonly deficient in modern diets?',
    back: 'Vitamin D (immune function, bone health), Magnesium (300+ enzymatic reactions, sleep, stress), Omega-3 fatty acids (brain health, inflammation), Iron (especially in women), Vitamin B12 (energy, nervous system), and Zinc (immune function, wound healing). Whole foods are preferred over supplements when possible.',
    category: 'Life Design',
    source: 'Health & Wellness',
    pathwayId: 'life-design',
    difficulty: 'intermediate',
    tags: ['health', 'wellness', 'nutrition', 'micronutrients', 'vitamins']
  },
  {
    id: 'fc-hw-015',
    front: 'What is nutrient timing and when does it actually matter?',
    back: 'Nutrient timing refers to strategically eating around workouts. For most people, total daily intake matters more than timing. However, timing becomes important for: athletes training multiple times daily, those training fasted for long sessions, and optimizing post-workout recovery (protein within 2-3 hours). Pre-workout carbs help performance for intense sessions.',
    category: 'Life Design',
    source: 'Health & Wellness',
    pathwayId: 'life-design',
    difficulty: 'advanced',
    tags: ['health', 'wellness', 'nutrition', 'nutrient-timing']
  },

  // Stress Management
  {
    id: 'fc-hw-016',
    front: 'What is the difference between acute and chronic stress, and their effects on health?',
    back: 'Acute stress is short-term and can be beneficial (hormesis) - sharpening focus and mobilizing energy. Chronic stress causes sustained cortisol elevation leading to: immune suppression, muscle breakdown, fat storage, impaired memory, anxiety, and increased disease risk. The key is recovery between stressors.',
    category: 'Life Design',
    source: 'Health & Wellness',
    pathwayId: 'life-design',
    difficulty: 'beginner',
    tags: ['health', 'wellness', 'stress', 'cortisol']
  },
  {
    id: 'fc-hw-017',
    front: 'How does the physiological sigh technique work for rapid stress relief?',
    back: 'The physiological sigh consists of a double inhale through the nose (one full breath, then a second short inhale to fully expand lungs) followed by a long exhale through the mouth. This activates the parasympathetic nervous system by stimulating the vagus nerve and quickly reduces heart rate and stress response in 1-3 breaths.',
    category: 'Life Design',
    source: 'Health & Wellness',
    pathwayId: 'life-design',
    difficulty: 'beginner',
    tags: ['health', 'wellness', 'stress', 'breathing', 'relaxation']
  },
  {
    id: 'fc-hw-018',
    front: 'What is Heart Rate Variability (HRV) and why is it a key stress metric?',
    back: 'HRV measures the variation in time between heartbeats. Higher HRV indicates better parasympathetic tone and stress resilience - the body can flexibly respond to demands. Lower HRV suggests chronic stress, overtraining, or poor recovery. It is improved through sleep, exercise, meditation, and stress management.',
    category: 'Life Design',
    source: 'Health & Wellness',
    pathwayId: 'life-design',
    difficulty: 'intermediate',
    tags: ['health', 'wellness', 'stress', 'hrv', 'recovery']
  },
  {
    id: 'fc-hw-019',
    front: 'What is the box breathing technique and when should it be used?',
    back: 'Box breathing involves: 4 seconds inhale, 4 seconds hold, 4 seconds exhale, 4 seconds hold (repeat). It balances the autonomic nervous system and is used by Navy SEALs and athletes. Best for: pre-performance anxiety, anger management, general stress reduction. Practice 4-5 cycles for immediate calming effect.',
    category: 'Life Design',
    source: 'Health & Wellness',
    pathwayId: 'life-design',
    difficulty: 'beginner',
    tags: ['health', 'wellness', 'stress', 'breathing', 'box-breathing']
  },
  {
    id: 'fc-hw-020',
    front: 'How does chronic stress affect the brain structurally and functionally?',
    back: 'Chronic stress shrinks the prefrontal cortex (decision-making, impulse control) and hippocampus (memory), while enlarging the amygdala (fear response). It impairs neurogenesis, reduces BDNF (brain-derived neurotrophic factor), and creates negative thought loops. These changes are partially reversible with stress reduction and exercise.',
    category: 'Life Design',
    source: 'Health & Wellness',
    pathwayId: 'life-design',
    difficulty: 'advanced',
    tags: ['health', 'wellness', 'stress', 'brain', 'neuroscience']
  },

  // Energy Management
  {
    id: 'fc-hw-021',
    front: 'What is the ultradian rhythm and how can it be used to optimize productivity?',
    back: 'Ultradian rhythms are 90-120 minute cycles of higher and lower alertness throughout the day. Peak performance occurs in 90-minute focused blocks followed by 15-20 minute recovery periods. Working with these natural rhythms instead of pushing through fatigue leads to better sustained energy and output quality.',
    category: 'Life Design',
    source: 'Health & Wellness',
    pathwayId: 'life-design',
    difficulty: 'intermediate',
    tags: ['health', 'wellness', 'energy', 'productivity', 'ultradian']
  },
  {
    id: 'fc-hw-022',
    front: 'What is adenosine and how does caffeine interact with it?',
    back: 'Adenosine is a neurotransmitter that accumulates during waking hours and creates sleep pressure. Caffeine blocks adenosine receptors without clearing adenosine, temporarily masking fatigue. When caffeine wears off, accumulated adenosine floods receptors, causing a crash. Half-life is 5-6 hours, so avoid caffeine after early afternoon.',
    category: 'Life Design',
    source: 'Health & Wellness',
    pathwayId: 'life-design',
    difficulty: 'intermediate',
    tags: ['health', 'wellness', 'energy', 'caffeine', 'sleep']
  },
  {
    id: 'fc-hw-023',
    front: 'What is the post-lunch dip and how can it be managed?',
    back: 'The post-lunch dip (typically 1-3 PM) is a natural circadian low point, not just caused by eating. Management strategies: time demanding tasks for morning peak, take a brief walk after lunch, expose yourself to bright light, consider a 10-20 minute power nap (not longer to avoid sleep inertia), and eat a protein-rich, lower-carb lunch.',
    category: 'Life Design',
    source: 'Health & Wellness',
    pathwayId: 'life-design',
    difficulty: 'beginner',
    tags: ['health', 'wellness', 'energy', 'circadian', 'productivity']
  },
  {
    id: 'fc-hw-024',
    front: 'How does hydration affect cognitive performance and energy levels?',
    back: 'Even mild dehydration (1-2% body weight loss) impairs concentration, short-term memory, and mood. The brain is 75% water and highly sensitive to fluid balance. Symptoms include fatigue, headaches, and reduced alertness. Aim for pale yellow urine and approximately 2-3 liters daily, more with exercise or heat.',
    category: 'Life Design',
    source: 'Health & Wellness',
    pathwayId: 'life-design',
    difficulty: 'beginner',
    tags: ['health', 'wellness', 'energy', 'hydration']
  },
  {
    id: 'fc-hw-025',
    front: 'What is the optimal morning routine for maximizing daily energy?',
    back: 'Evidence-based morning energy optimization: 1) Get bright light exposure within 30 minutes of waking (resets circadian rhythm), 2) Delay caffeine 90-120 minutes (clears adenosine first), 3) Light movement or exercise, 4) Cold water exposure (activates norepinephrine), 5) Protein-rich breakfast to stabilize blood sugar.',
    category: 'Life Design',
    source: 'Health & Wellness',
    pathwayId: 'life-design',
    difficulty: 'intermediate',
    tags: ['health', 'wellness', 'energy', 'morning-routine']
  },

  // Habits for Longevity
  {
    id: 'fc-hw-026',
    front: 'What are the Blue Zones and what lifestyle factors do centenarians share?',
    back: 'Blue Zones are five regions with exceptional longevity (Okinawa, Sardinia, Nicoya, Ikaria, Loma Linda). Shared factors: natural daily movement, plant-rich diet (80% plants), moderate caloric intake, strong social connections, sense of purpose, stress-reduction rituals, moderate alcohol (except Adventists), and belonging to a faith community.',
    category: 'Life Design',
    source: 'Health & Wellness',
    pathwayId: 'life-design',
    difficulty: 'intermediate',
    tags: ['health', 'wellness', 'longevity', 'blue-zones']
  },
  {
    id: 'fc-hw-027',
    front: 'What is the relationship between muscle mass and longevity?',
    back: 'Muscle mass is a strong predictor of longevity. Sarcopenia (age-related muscle loss) begins around age 30 at 3-5% per decade. Low muscle mass correlates with higher mortality, metabolic dysfunction, falls, and reduced quality of life. Resistance training 2-3x weekly and adequate protein intake are essential for maintaining muscle throughout life.',
    category: 'Life Design',
    source: 'Health & Wellness',
    pathwayId: 'life-design',
    difficulty: 'intermediate',
    tags: ['health', 'wellness', 'longevity', 'muscle', 'strength']
  },
  {
    id: 'fc-hw-028',
    front: 'What is hormesis and how does it relate to longevity practices?',
    back: 'Hormesis is the beneficial response to mild stressors that would be harmful at higher doses. Examples: exercise (muscle damage triggers growth), fasting (activates autophagy), cold exposure (increases brown fat, norepinephrine), heat stress (heat shock proteins). These controlled stressors activate repair mechanisms and cellular resilience pathways.',
    category: 'Life Design',
    source: 'Health & Wellness',
    pathwayId: 'life-design',
    difficulty: 'advanced',
    tags: ['health', 'wellness', 'longevity', 'hormesis', 'stress']
  },
  {
    id: 'fc-hw-029',
    front: 'What is VO2 max and why is it considered one of the best predictors of lifespan?',
    back: 'VO2 max measures the maximum oxygen your body can use during exercise - an indicator of cardiorespiratory fitness. Studies show those in the top 25% of VO2 max for their age have 5x lower mortality risk than the bottom 25%. It is improvable at any age through consistent aerobic training, especially high-intensity intervals.',
    category: 'Life Design',
    source: 'Health & Wellness',
    pathwayId: 'life-design',
    difficulty: 'intermediate',
    tags: ['health', 'wellness', 'longevity', 'vo2-max', 'cardio']
  },
  {
    id: 'fc-hw-030',
    front: 'What role does social connection play in health and longevity?',
    back: 'Loneliness increases mortality risk by 26% - comparable to smoking 15 cigarettes daily. Strong social ties reduce inflammation, improve immune function, lower blood pressure, and decrease dementia risk. Quality matters over quantity: a few deep relationships are more protective than many superficial ones. Regular social engagement is a core longevity practice.',
    category: 'Life Design',
    source: 'Health & Wellness',
    pathwayId: 'life-design',
    difficulty: 'beginner',
    tags: ['health', 'wellness', 'longevity', 'social-connection']
  },

  // Mental Health Fundamentals
  {
    id: 'fc-hw-031',
    front: 'What is neuroplasticity and how can it be leveraged for mental health?',
    back: 'Neuroplasticity is the brain\'s ability to reorganize and form new neural connections throughout life. It can be leveraged through: learning new skills, meditation (increases gray matter), physical exercise (boosts BDNF), cognitive behavioral techniques (rewires thought patterns), and sleep (consolidates new pathways). Negative patterns can also be unlearned through consistent practice.',
    category: 'Life Design',
    source: 'Health & Wellness',
    pathwayId: 'life-design',
    difficulty: 'intermediate',
    tags: ['health', 'wellness', 'mental-health', 'neuroplasticity', 'brain']
  },
  {
    id: 'fc-hw-032',
    front: 'What is the gut-brain axis and how does it affect mental health?',
    back: 'The gut-brain axis is the bidirectional communication between gut microbiome and brain via the vagus nerve, immune system, and neurotransmitters. 90% of serotonin is produced in the gut. Dysbiosis (microbial imbalance) is linked to anxiety and depression. Support through: diverse fiber, fermented foods, limiting processed foods, and stress reduction.',
    category: 'Life Design',
    source: 'Health & Wellness',
    pathwayId: 'life-design',
    difficulty: 'advanced',
    tags: ['health', 'wellness', 'mental-health', 'gut-brain', 'microbiome']
  },
  {
    id: 'fc-hw-033',
    front: 'What is the difference between clinical depression and normal sadness?',
    back: 'Clinical depression involves persistent symptoms for 2+ weeks: depressed mood most of the day, loss of interest/pleasure (anhedonia), sleep changes, fatigue, concentration problems, appetite changes, worthlessness, and/or suicidal thoughts. Normal sadness is typically linked to specific events, fluctuates, and doesn\'t significantly impair daily functioning for extended periods.',
    category: 'Life Design',
    source: 'Health & Wellness',
    pathwayId: 'life-design',
    difficulty: 'intermediate',
    tags: ['health', 'wellness', 'mental-health', 'depression']
  },
  {
    id: 'fc-hw-034',
    front: 'What is cognitive behavioral therapy (CBT) and how does it work?',
    back: 'CBT is an evidence-based therapy targeting the connection between thoughts, feelings, and behaviors. Core principle: distorted thinking patterns cause emotional distress. Techniques include identifying cognitive distortions (catastrophizing, black-and-white thinking), challenging negative thoughts, behavioral experiments, and gradual exposure. Effective for anxiety, depression, and many other conditions.',
    category: 'Life Design',
    source: 'Health & Wellness',
    pathwayId: 'life-design',
    difficulty: 'intermediate',
    tags: ['health', 'wellness', 'mental-health', 'cbt', 'therapy']
  },
  {
    id: 'fc-hw-035',
    front: 'What is the Window of Tolerance and how does it relate to emotional regulation?',
    back: 'The Window of Tolerance (Dan Siegel) is the optimal zone where we can experience and integrate emotions without becoming dysregulated. Hyperarousal (above window): anxiety, panic, overwhelm. Hypoarousal (below window): numbness, disconnection, depression. Trauma narrows the window. Therapy, mindfulness, and gradual exposure help widen it.',
    category: 'Life Design',
    source: 'Health & Wellness',
    pathwayId: 'life-design',
    difficulty: 'advanced',
    tags: ['health', 'wellness', 'mental-health', 'emotional-regulation', 'trauma']
  },

  // Recovery and Rest
  {
    id: 'fc-hw-036',
    front: 'What is the difference between active and passive recovery?',
    back: 'Passive recovery involves complete rest (sleep, relaxation). Active recovery involves low-intensity movement (walking, light swimming, yoga) that increases blood flow without adding training stress. Active recovery often speeds healing by delivering nutrients to tissues and clearing metabolic waste. Optimal recovery uses both strategically.',
    category: 'Life Design',
    source: 'Health & Wellness',
    pathwayId: 'life-design',
    difficulty: 'beginner',
    tags: ['health', 'wellness', 'recovery', 'rest', 'exercise']
  },
  {
    id: 'fc-hw-037',
    front: 'What are the signs of overtraining syndrome and how is it prevented?',
    back: 'Signs: persistent fatigue, decreased performance, elevated resting heart rate, sleep disturbances, mood changes, frequent illness, and loss of motivation. Prevention: progressive training (10% weekly increase max), adequate sleep, proper nutrition, planned deload weeks (reduced volume every 4-6 weeks), and monitoring recovery metrics like HRV.',
    category: 'Life Design',
    source: 'Health & Wellness',
    pathwayId: 'life-design',
    difficulty: 'intermediate',
    tags: ['health', 'wellness', 'recovery', 'overtraining', 'exercise']
  },
  {
    id: 'fc-hw-038',
    front: 'How does sleep affect muscle recovery and athletic performance?',
    back: 'During deep sleep, growth hormone peaks (up to 70% of daily secretion), stimulating muscle repair and protein synthesis. REM sleep restores cognitive function crucial for skill learning. Sleep deprivation impairs muscle glycogen restoration, increases injury risk by 1.7x, reduces reaction time, and elevates cortisol. Athletes should aim for 8-10 hours.',
    category: 'Life Design',
    source: 'Health & Wellness',
    pathwayId: 'life-design',
    difficulty: 'intermediate',
    tags: ['health', 'wellness', 'recovery', 'sleep', 'performance']
  },
  {
    id: 'fc-hw-039',
    front: 'What is a deload week and why is it important for training progress?',
    back: 'A deload week involves reducing training volume (typically by 40-60%) while maintaining intensity. It allows accumulated fatigue to dissipate, tendons/joints to heal, and central nervous system to recover. Scheduled every 4-8 weeks depending on training intensity. After deloading, strength and performance often surge (supercompensation).',
    category: 'Life Design',
    source: 'Health & Wellness',
    pathwayId: 'life-design',
    difficulty: 'intermediate',
    tags: ['health', 'wellness', 'recovery', 'training', 'deload']
  },
  {
    id: 'fc-hw-040',
    front: 'What is the science behind cold exposure for recovery?',
    back: 'Cold exposure (ice baths, cold showers) causes vasoconstriction, reducing inflammation and swelling. It activates norepinephrine (3-5x increase), improving mood and alertness. However, immediately after strength training, it may blunt hypertrophy adaptations by reducing inflammation needed for muscle growth. Best used strategically - great for recovery between competitions, not post-strength training.',
    category: 'Life Design',
    source: 'Health & Wellness',
    pathwayId: 'life-design',
    difficulty: 'advanced',
    tags: ['health', 'wellness', 'recovery', 'cold-exposure']
  },

  // Circadian Rhythms
  {
    id: 'fc-hw-041',
    front: 'What is the circadian rhythm and how is it regulated?',
    back: 'Circadian rhythm is the ~24-hour internal clock governing sleep-wake cycles, hormone release, and metabolism. It is primarily regulated by the suprachiasmatic nucleus (SCN) in the hypothalamus, which responds to light signals from the eyes. Key hormones: melatonin (darkness promotes sleep) and cortisol (morning alertness). Light is the most powerful zeitgeber (time-giver).',
    category: 'Life Design',
    source: 'Health & Wellness',
    pathwayId: 'life-design',
    difficulty: 'intermediate',
    tags: ['health', 'wellness', 'circadian', 'sleep', 'hormones']
  },
  {
    id: 'fc-hw-042',
    front: 'What is the best time of day for different types of exercise based on circadian biology?',
    back: 'Morning exercise: lower injury risk, boosts alertness, supports circadian rhythm. Afternoon/early evening (2-6 PM): body temperature peaks, reaction time and strength are optimal, flexibility is greatest. Late exercise (within 2-3 hours of bed) can delay sleep onset. Consistency matters most - train when you can maintain the habit.',
    category: 'Life Design',
    source: 'Health & Wellness',
    pathwayId: 'life-design',
    difficulty: 'intermediate',
    tags: ['health', 'wellness', 'circadian', 'exercise', 'timing']
  },
  {
    id: 'fc-hw-043',
    front: 'How does shift work affect health and what can mitigate the damage?',
    back: 'Shift work disrupts circadian rhythm, increasing risks of: cardiovascular disease (40%), metabolic syndrome, obesity, depression, and cancer. Mitigation strategies: maintain consistent sleep schedule even on days off, use blackout curtains for daytime sleep, bright light during work shifts, strategic caffeine use, and prioritize sleep as non-negotiable.',
    category: 'Life Design',
    source: 'Health & Wellness',
    pathwayId: 'life-design',
    difficulty: 'advanced',
    tags: ['health', 'wellness', 'circadian', 'shift-work', 'sleep']
  },
  {
    id: 'fc-hw-044',
    front: 'What is chronotype and how should daily activities be aligned with it?',
    back: 'Chronotype is your genetic predisposition for sleep-wake timing: early birds (lions), night owls (wolves), or in-between (bears, dolphins). Schedule cognitively demanding work during your peak alertness, exercise when body temperature rises, and sleep/wake times aligned with natural tendencies. Forcing against chronotype reduces performance and wellbeing.',
    category: 'Life Design',
    source: 'Health & Wellness',
    pathwayId: 'life-design',
    difficulty: 'intermediate',
    tags: ['health', 'wellness', 'circadian', 'chronotype', 'productivity']
  },
  {
    id: 'fc-hw-045',
    front: 'What is social jet lag and how does it impact health?',
    back: 'Social jet lag is the discrepancy between biological clock and social schedule - often seen when people sleep late on weekends versus weekdays. A 2+ hour difference disrupts circadian rhythm similarly to crossing time zones. It is linked to increased obesity, metabolic problems, and mood disorders. Consistent sleep/wake times (within 1 hour) minimize this effect.',
    category: 'Life Design',
    source: 'Health & Wellness',
    pathwayId: 'life-design',
    difficulty: 'intermediate',
    tags: ['health', 'wellness', 'circadian', 'social-jet-lag', 'sleep']
  },

  // Mind-Body Connection
  {
    id: 'fc-hw-046',
    front: 'What is the parasympathetic nervous system and how can it be activated?',
    back: 'The parasympathetic nervous system (rest-and-digest) counterbalances the stress response by slowing heart rate, promoting digestion, and enabling recovery. Activation methods: slow diaphragmatic breathing (especially longer exhales), cold water on face, gargling, singing/humming (vagus nerve stimulation), meditation, social connection, and physical touch.',
    category: 'Life Design',
    source: 'Health & Wellness',
    pathwayId: 'life-design',
    difficulty: 'intermediate',
    tags: ['health', 'wellness', 'mind-body', 'nervous-system', 'relaxation']
  },
  {
    id: 'fc-hw-047',
    front: 'What is interoception and why is it important for health?',
    back: 'Interoception is the sense of the internal state of the body - feeling hunger, thirst, heartbeat, breath, temperature, and emotions as body sensations. Strong interoceptive awareness improves emotional regulation, decision-making, and early detection of health issues. It is developed through mindfulness, body scanning, and attention to physical sensations.',
    category: 'Life Design',
    source: 'Health & Wellness',
    pathwayId: 'life-design',
    difficulty: 'advanced',
    tags: ['health', 'wellness', 'mind-body', 'interoception', 'awareness']
  },
  {
    id: 'fc-hw-048',
    front: 'How does regular meditation physically change the brain?',
    back: 'Studies show meditation increases gray matter density in areas related to learning, memory, emotional regulation, and self-awareness (hippocampus, prefrontal cortex). It decreases amygdala size (fear/stress center). 8 weeks of MBSR shows measurable changes. Long-term meditators show preserved brain volume with age and increased cortical thickness.',
    category: 'Life Design',
    source: 'Health & Wellness',
    pathwayId: 'life-design',
    difficulty: 'intermediate',
    tags: ['health', 'wellness', 'mind-body', 'meditation', 'neuroplasticity']
  },
  {
    id: 'fc-hw-049',
    front: 'What is the relaxation response and how is it different from simply resting?',
    back: 'The relaxation response (coined by Dr. Herbert Benson) is a physiological state of deep rest that actively counteracts the stress response. Unlike passive rest, it involves specific techniques (meditation, deep breathing, progressive muscle relaxation) that reduce metabolism, heart rate, blood pressure, and muscle tension more effectively than just sitting quietly.',
    category: 'Life Design',
    source: 'Health & Wellness',
    pathwayId: 'life-design',
    difficulty: 'beginner',
    tags: ['health', 'wellness', 'mind-body', 'relaxation', 'stress']
  },
  {
    id: 'fc-hw-050',
    front: 'What is the biopsychosocial model of health?',
    back: 'The biopsychosocial model views health as the interaction of biological factors (genetics, physiology), psychological factors (thoughts, emotions, behaviors), and social factors (relationships, culture, socioeconomic status). Unlike the biomedical model, it recognizes that physical health cannot be separated from mental and social wellbeing - all three must be addressed for optimal health outcomes.',
    category: 'Life Design',
    source: 'Health & Wellness',
    pathwayId: 'life-design',
    difficulty: 'intermediate',
    tags: ['health', 'wellness', 'mind-body', 'holistic-health', 'biopsychosocial']
  }
];
