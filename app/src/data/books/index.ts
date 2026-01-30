import type { BookContent } from '@/types';

export const bookContent: Record<string, BookContent> = {
  atomicHabits: {
    title: "Atomic Habits",
    author: "James Clear",
    color: "orange",
    icon: "repeat",
    coreConcepts: [
      {
        id: "ah1",
        title: "The 1% Rule",
        summary: "Small improvements compound. 1% better every day = 37x better in a year.",
        insight: "Habits are the compound interest of self-improvement. The same way money multiplies through compound interest, the effects of your habits multiply as you repeat them.",
        exercise: "Identify ONE thing you can improve by just 1% today. Not a complete overhaul - just 1%.",
        quiz: {
          question: "If you get 1% better every day for one year, how much better will you be?",
          options: ["3.65x better", "12x better", "37x better", "100x better"],
          correct: 2,
          explanation: "1.01^365 = 37.78. Small gains compound into remarkable results!"
        }
      },
      {
        id: "ah2",
        title: "The 4 Laws of Behavior Change",
        summary: "Make it Obvious, Attractive, Easy, and Satisfying.",
        insight: "Every habit follows: Cue > Craving > Response > Reward. To build good habits, optimize each step. To break bad ones, invert the laws.",
        exercise: "Pick a habit you want to build. Design it using all 4 laws.",
        quiz: {
          question: "To BREAK a bad habit, you should make it:",
          options: ["Obvious, Attractive, Easy, Satisfying", "Invisible, Unattractive, Difficult, Unsatisfying", "Just use willpower", "Replace it immediately"],
          correct: 1,
          explanation: "Invert the 4 laws: Make it invisible, unattractive, difficult, and unsatisfying."
        }
      },
      {
        id: "ah3",
        title: "Identity-Based Habits",
        summary: "Focus on WHO you want to become, not WHAT you want to achieve.",
        insight: "The goal is not to read a book, it's to BECOME a reader. Every action is a vote for the type of person you want to become.",
        exercise: "Complete: 'I am the type of person who ___________'",
        quiz: {
          question: "What's more effective for lasting change?",
          options: ["Setting outcome goals", "Focusing on identity", "Using rewards", "Tracking progress"],
          correct: 1,
          explanation: "Identity change is the North Star of habit change. Behavior that is incongruent with the self will not last."
        }
      },
      {
        id: "ah4",
        title: "Habit Stacking",
        summary: "Link new habits to existing ones using: 'After I [CURRENT HABIT], I will [NEW HABIT].'",
        insight: "You don't need motivation if you have a system. Habit stacking uses the momentum of existing routines.",
        exercise: "Create 3 habit stacks for your morning routine.",
        quiz: {
          question: "The habit stacking formula is:",
          options: ["When I feel motivated, I will...", "After I [CURRENT], I will [NEW]", "Every day at [TIME], I will...", "If [TRIGGER], then [HABIT]"],
          correct: 1,
          explanation: "Habit stacking ties new behaviors to established ones, using existing neural pathways."
        }
      },
      {
        id: "ah5",
        title: "Environment Design",
        summary: "Make good habits obvious and bad habits invisible by designing your environment.",
        insight: "Motivation is overrated. Environment often matters more. Be the architect of your world, not just a consumer.",
        exercise: "Redesign ONE space to make a good habit easier and a bad habit harder.",
        quiz: {
          question: "According to James Clear, what matters more than motivation?",
          options: ["Willpower", "Discipline", "Environment", "Goals"],
          correct: 2,
          explanation: "Environment is the invisible hand that shapes human behavior. Design for laziness."
        }
      }
    ]
  },
  deepWork: {
    title: "Deep Work",
    author: "Cal Newport",
    color: "blue",
    icon: "target",
    coreConcepts: [
      {
        id: "dw1",
        title: "Deep Work Definition",
        summary: "Professional activities performed in distraction-free concentration that push cognitive capabilities.",
        insight: "Deep work is becoming increasingly RARE at exactly the same time it is becoming increasingly VALUABLE. If you cultivate this skill, you'll thrive.",
        exercise: "Calculate: How many hours of TRUE deep work did you do last week?",
        quiz: {
          question: "Deep work is valuable because:",
          options: ["It feels productive", "It's rare AND valuable in the economy", "Bosses like it", "It's easy once you start"],
          correct: 1,
          explanation: "The Deep Work Hypothesis: The ability to perform deep work is becoming increasingly rare AND increasingly valuable."
        }
      },
      {
        id: "dw2",
        title: "The 4 Disciplines of Execution",
        summary: "Focus on the Wildly Important, Act on Lead Measures, Keep a Scoreboard, Create Cadence of Accountability.",
        insight: "Execution is more difficult than strategizing. These disciplines create a framework for consistent deep work.",
        exercise: "Define your ONE wildly important goal for this month.",
        quiz: {
          question: "A 'lead measure' in deep work is:",
          options: ["Hours of deep work scheduled", "Goals achieved", "Tasks completed", "Emails answered"],
          correct: 0,
          explanation: "Lead measures track behaviors that LEAD to success (like hours of deep work), not lag measures (outcomes)."
        }
      },
      {
        id: "dw3",
        title: "Attention Residue",
        summary: "When you switch tasks, your attention doesn't immediately follow - a residue remains stuck on the previous task.",
        insight: "Every time you glance at your inbox or phone, you leave attention residue that reduces your cognitive capacity for the main task.",
        exercise: "Try: Work on ONE thing for 90 minutes with zero task switching. Notice the difference.",
        quiz: {
          question: "Attention residue means:",
          options: ["You're tired from focusing", "Part of your mind stays on the previous task", "You can't multitask", "Deep work is exhausting"],
          correct: 1,
          explanation: "When you switch tasks, part of your attention remains 'stuck' on the previous task, reducing performance."
        }
      },
      {
        id: "dw4",
        title: "Productive Meditation",
        summary: "Use physically occupied time (walking, showering) to focus on a single professional problem.",
        insight: "This practice strengthens your ability to sustain focus and provides unexpected creative breakthroughs.",
        exercise: "During your next walk, focus on ONE problem. Every time your mind wanders, bring it back.",
        quiz: {
          question: "Productive meditation should be done:",
          options: ["While sitting quietly", "During physical but not mental activities", "Only in the morning", "With background music"],
          correct: 1,
          explanation: "Use time when you're physically occupied but mentally free to focus deeply on one problem."
        }
      },
      {
        id: "dw5",
        title: "Shutdown Ritual",
        summary: "A strict routine that marks the end of work and allows complete mental rest.",
        insight: "Idleness is not laziness. Downtime aids insights, recharges deep work energy, and the work you skip is usually not that important.",
        exercise: "Create a 5-step shutdown ritual for the end of your workday.",
        quiz: {
          question: "Why is a shutdown ritual important?",
          options: ["It saves time", "It allows complete mental rest which aids performance", "It impresses colleagues", "It's not really important"],
          correct: 1,
          explanation: "Downtime aids insights (unconscious mind), helps recharge energy needed for deep work, and enforces work-life boundaries."
        }
      }
    ]
  },
  futureSelf: {
    title: "Be Your Future Self Now",
    author: "Benjamin Hardy",
    color: "purple",
    icon: "rocket",
    coreConcepts: [
      {
        id: "fs1",
        title: "Future Self Disconnection",
        summary: "Most people view their Future Self as a stranger, leading to poor decisions.",
        insight: "Research shows we treat our Future Self like a different person. We discount their wellbeing. The more connected you are, the better decisions you make.",
        exercise: "Write a letter FROM your Future Self (10 years from now) to current you.",
        quiz: {
          question: "Why do people make poor long-term decisions?",
          options: ["Lack of information", "They view Future Self as a stranger", "Not enough planning", "Too many options"],
          correct: 1,
          explanation: "Brain scans show we think of our Future Self using the same regions we use for strangers."
        }
      },
      {
        id: "fs2",
        title: "Prospection",
        summary: "Your brain is primarily a prospection (future-simulating) machine, not a memory machine.",
        insight: "The quality of your life depends on the quality of your vision of the future. Without a compelling Future Self, you'll be driven by your past.",
        exercise: "Describe your ideal day 5 years from now in vivid detail.",
        quiz: {
          question: "According to Hardy, your brain is primarily:",
          options: ["A memory storage device", "A future-simulating machine", "A problem-solving tool", "A reaction system"],
          correct: 1,
          explanation: "Research shows humans spend most of their time thinking about the future. We're built for prospection."
        }
      },
      {
        id: "fs3",
        title: "The Gap vs The Gain",
        summary: "Measure progress backward from where you started, not forward to an ideal.",
        insight: "The Gap (comparing to ideal) creates unhappiness. The Gain (comparing to past self) creates confidence and momentum.",
        exercise: "List 10 ways you've grown in the last 3 years. Feel the gain.",
        quiz: {
          question: "To feel motivated and confident, measure yourself against:",
          options: ["Your ideal future", "Other people", "Your past self", "External standards"],
          correct: 2,
          explanation: "Being in 'The Gain' (measuring backward) creates happiness and confidence."
        }
      },
      {
        id: "fs4",
        title: "Identity Drives Behavior",
        summary: "Your current identity is based on your past. Your Future Self requires a NEW identity.",
        insight: "You can't become your Future Self while clinging to your current identity. Transformation requires identity death and rebirth.",
        exercise: "What identity must you release to become your Future Self?",
        quiz: {
          question: "To become your Future Self, you must:",
          options: ["Just work harder", "Let go of your current identity", "Find better mentors", "Create better goals"],
          correct: 1,
          explanation: "Your current self is the product of your former self. Becoming your Future Self requires letting go."
        }
      },
      {
        id: "fs5",
        title: "10X Easier Than 2X",
        summary: "Going 10x bigger forces qualitative changes. 2x just means doing more of the same.",
        insight: "10x goals eliminate 80% of your current activities. They force you to focus on what REALLY matters and find entirely new approaches.",
        exercise: "If you had to 10x your income/impact, what would you STOP doing?",
        quiz: {
          question: "Why is 10X easier than 2X?",
          options: ["It's not, it's just motivational talk", "10X forces qualitative change, 2X is just more effort", "10X takes less time", "10X is more realistic"],
          correct: 1,
          explanation: "2X keeps you playing the same game harder. 10X forces you to change the game entirely."
        }
      }
    ]
  },
  mansSearch: {
    title: "Man's Search for Meaning",
    author: "Viktor Frankl",
    color: "emerald",
    icon: "sparkle",
    coreConcepts: [
      {
        id: "ms1",
        title: "The Last Human Freedom",
        summary: "Between stimulus and response, there is a space. In that space lies our freedom to choose.",
        insight: "Everything can be taken from a person but one thing: the last of human freedoms - to choose one's attitude in any circumstance.",
        exercise: "Recall a recent frustration. What was the space between stimulus and response?",
        quiz: {
          question: "What is the 'last human freedom' according to Frankl?",
          options: ["Freedom of speech", "Freedom of movement", "Freedom to choose your attitude", "Freedom from suffering"],
          correct: 2,
          explanation: "Even in concentration camps, Frankl observed that humans retain the freedom to choose their inner response."
        }
      },
      {
        id: "ms2",
        title: "The Will to Meaning",
        summary: "The primary human drive is not pleasure (Freud) or power (Adler), but MEANING.",
        insight: "Those who have a 'why' to live can bear almost any 'how.' Meaning is found through work, love, or suffering.",
        exercise: "What is your 'why'? Write it in one sentence.",
        quiz: {
          question: "Frankl's logotherapy is based on the idea that humans primarily seek:",
          options: ["Pleasure", "Power", "Meaning", "Security"],
          correct: 2,
          explanation: "Logotherapy (logos = meaning) posits that the search for meaning is the primary motivational force."
        }
      },
      {
        id: "ms3",
        title: "Three Sources of Meaning",
        summary: "Meaning comes from: (1) Creating work/deeds, (2) Experiencing love/beauty, (3) Attitude toward unavoidable suffering.",
        insight: "Even when we can't change a situation, we can change ourselves. Suffering ceases to be suffering when it finds meaning.",
        exercise: "Which of the three sources of meaning is most active in your life right now?",
        quiz: {
          question: "According to Frankl, suffering becomes meaningful when:",
          options: ["It ends", "We understand its cause", "We find meaning in it", "We avoid it"],
          correct: 2,
          explanation: "Suffering without meaning is despair. But suffering with meaning becomes sacrifice, growth, or witness."
        }
      },
      {
        id: "ms4",
        title: "The Existential Vacuum",
        summary: "Modern people suffer from a sense of meaninglessness - an 'existential vacuum.'",
        insight: "Unlike animals, humans aren't told by instincts what to do. Unlike past generations, we aren't told by traditions. We must find our own meaning.",
        exercise: "When do you feel most empty or bored? What is the 'vacuum' seeking?",
        quiz: {
          question: "The 'existential vacuum' describes:",
          options: ["Physical emptiness", "A sense of meaninglessness", "Lack of social connection", "Financial poverty"],
          correct: 1,
          explanation: "The existential vacuum is a widespread feeling of meaninglessness and emptiness in modern society."
        }
      },
      {
        id: "ms5",
        title: "Tragic Optimism",
        summary: "Saying yes to life in spite of pain, guilt, and death. Finding meaning despite tragedy.",
        insight: "Optimism is not naive happiness. It's the capacity to turn suffering into achievement, guilt into change, mortality into meaningful action.",
        exercise: "What pain or difficulty in your life might contain hidden meaning or growth?",
        quiz: {
          question: "'Tragic optimism' means:",
          options: ["Being happy despite problems", "Ignoring difficulties", "Finding meaning through suffering", "Expecting things to get worse"],
          correct: 2,
          explanation: "Tragic optimism isn't denial - it's the ability to say 'yes' to life despite its tragic aspects."
        }
      }
    ]
  },
  subtleArt: {
    title: "The Subtle Art",
    author: "Mark Manson",
    color: "rose",
    icon: "guitar",
    coreConcepts: [
      {
        id: "sa1",
        title: "The Feedback Loop from Hell",
        summary: "Feeling bad about feeling bad. Anxious about being anxious. This meta-negativity is the real problem.",
        insight: "The desire for more positive experience is itself a negative experience. Accepting negative experience is itself a positive experience.",
        exercise: "Notice: When do you beat yourself up for feeling bad? Can you just feel the original feeling?",
        quiz: {
          question: "The 'feedback loop from hell' is:",
          options: ["External criticism", "Feeling bad about feeling bad", "Social media comparison", "Work stress"],
          correct: 1,
          explanation: "We feel guilty for feeling guilty. Anxious about being anxious. This meta-layer is often worse than the original problem."
        }
      },
      {
        id: "sa2",
        title: "The Backwards Law",
        summary: "The more you pursue feeling better, the less satisfied you become.",
        insight: "Everything worthwhile is achieved through negative experience. The avoidance of suffering IS suffering.",
        exercise: "What are you chasing that's actually making you more anxious/unhappy?",
        quiz: {
          question: "According to the 'Backwards Law':",
          options: ["Hard work leads to success", "Pursuing happiness makes you unhappy", "You should set goals", "Positive thinking works"],
          correct: 1,
          explanation: "Alan Watts' insight: The more you try to feel better, the less satisfied you become."
        }
      },
      {
        id: "sa3",
        title: "You're Always Choosing",
        summary: "You're not special. You're always choosing what to give a f*ck about. Choose wisely.",
        insight: "Not giving a f*ck doesn't mean being indifferent. It means being comfortable with being different. Choose your struggles.",
        exercise: "List 5 things you currently give too many f*cks about. Which will you drop?",
        quiz: {
          question: "Not giving a f*ck means:",
          options: ["Being indifferent to everything", "Choosing what matters and ignoring the rest", "Not caring about anyone", "Being selfish"],
          correct: 1,
          explanation: "You have limited f*cks to give. Reserve them for what truly aligns with your values."
        }
      },
      {
        id: "sa4",
        title: "The Responsibility/Fault Fallacy",
        summary: "Fault is past tense. Responsibility is present tense. You're always responsible for your response.",
        insight: "Something might not be your fault, but it's always your responsibility to deal with it. Playing victim is comfortable but powerless.",
        exercise: "What are you blaming on others that you could take responsibility for?",
        quiz: {
          question: "The difference between fault and responsibility is:",
          options: ["There is no difference", "Fault is past, responsibility is present", "Fault is worse", "Responsibility means you caused it"],
          correct: 1,
          explanation: "Something may not be your fault, but it's your responsibility to deal with it."
        }
      },
      {
        id: "sa5",
        title: "The Entitlement Myth",
        summary: "You are not special. And that's okay. The rare, extraordinary life is earned, not owed.",
        insight: "Entitlement comes in two flavors: 'I'm awesome and the world should recognize it' or 'I'm uniquely broken and deserve sympathy.' Both are delusions.",
        exercise: "Where do you feel entitled? What would change if you accepted you're ordinary?",
        quiz: {
          question: "Manson argues that believing you're special:",
          options: ["Is healthy self-esteem", "Leads to entitlement and frustration", "Helps achieve goals", "Is necessary for success"],
          correct: 1,
          explanation: "The belief that you're special leads to entitlement and inability to accept reality."
        }
      }
    ]
  },
  thinkingFastSlow: {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    color: "blue",
    icon: "brain",
    coreConcepts: [
      {
        id: "tfs1",
        title: "System 1 vs System 2",
        summary: "Your brain has two modes: fast intuition (System 1) and slow analysis (System 2).",
        insight: "System 1 is automatic, fast, and often wrong. System 2 is deliberate, slow, and lazy. Most errors come from System 1 acting when System 2 should engage.",
        exercise: "Notice today: When did you react on autopilot when you should have thought carefully?",
        quiz: {
          question: "System 1 thinking is:",
          options: ["Slow and deliberate", "Fast and automatic", "Always accurate", "Used for complex math"],
          correct: 1,
          explanation: "System 1 operates automatically and quickly with little effort and no sense of voluntary control."
        }
      },
      {
        id: "tfs2",
        title: "Loss Aversion",
        summary: "Losses hurt roughly 2x more than equivalent gains feel good.",
        insight: "This explains why we hold losing investments, stay in bad relationships, and fear change more than we desire improvement.",
        exercise: "What loss are you avoiding that's costing you potential gains?",
        quiz: {
          question: "How much more do losses hurt compared to equivalent gains?",
          options: ["50% more", "About the same", "2x more", "10x more"],
          correct: 2,
          explanation: "Research shows losses are felt about twice as intensely as gains of the same magnitude."
        }
      },
      {
        id: "tfs3",
        title: "Anchoring Effect",
        summary: "The first number you encounter influences all subsequent judgments.",
        insight: "Even random anchors affect estimates. In negotiations, whoever anchors first gains an advantage.",
        exercise: "In your next negotiation, set the anchor first. Notice its effect.",
        quiz: {
          question: "Anchoring works because:",
          options: ["People are logical", "The first number influences subsequent estimates", "Numbers are objective", "People do research"],
          correct: 1,
          explanation: "Our brains use anchors as starting points and adjust insufficiently from them."
        }
      },
      {
        id: "tfs4",
        title: "Availability Heuristic",
        summary: "We judge probability by how easily examples come to mind.",
        insight: "Vivid, recent, or emotional events seem more common than mundane ones. This is why we fear plane crashes more than car accidents.",
        exercise: "What risks are you overestimating because they're vivid? Underestimating because they're boring?",
        quiz: {
          question: "We think plane crashes are more common than they are because:",
          options: ["Statistics are wrong", "They're vivid and memorable (availability)", "We fly too much", "Media is accurate"],
          correct: 1,
          explanation: "The availability heuristic makes memorable events seem more probable than they actually are."
        }
      },
      {
        id: "tfs5",
        title: "The Planning Fallacy",
        summary: "We systematically underestimate time, costs, and risks while overestimating benefits.",
        insight: "Even experts fall prey. The cure: Use reference class forecasting - look at how long similar projects actually took.",
        exercise: "Take your next time estimate and multiply by 1.5. Was that more accurate?",
        quiz: {
          question: "To combat the planning fallacy, you should:",
          options: ["Be more optimistic", "Look at how long similar projects took", "Trust your intuition", "Add 10% buffer"],
          correct: 1,
          explanation: "Reference class forecasting - looking at actual outcomes of similar projects - combats the planning fallacy."
        }
      }
    ]
  },
  antifragile: {
    title: "Antifragile",
    author: "Nassim Nicholas Taleb",
    color: "green",
    icon: "shield",
    coreConcepts: [
      {
        id: "af1",
        title: "The Antifragile Triad",
        summary: "Fragile breaks under stress. Robust resists it. Antifragile GAINS from it.",
        insight: "Most of what we call 'resilience' is just robustness. True antifragility means getting stronger from chaos and disorder.",
        exercise: "Classify three things in your life: fragile, robust, or antifragile?",
        quiz: {
          question: "Antifragile systems:",
          options: ["Resist stress", "Break under stress", "Gain from stress", "Avoid stress"],
          correct: 2,
          explanation: "Unlike robust (which just resists), antifragile actually improves when exposed to volatility."
        }
      },
      {
        id: "af2",
        title: "The Barbell Strategy",
        summary: "Combine extreme safety with extreme risk. Avoid the vulnerable middle.",
        insight: "Put 90% in ultra-safe assets, 10% in high-risk/high-reward. The middle ground is actually the most dangerous.",
        exercise: "Apply barbell thinking: Where are you stuck in the risky middle?",
        quiz: {
          question: "The barbell strategy means:",
          options: ["Take moderate risks", "Extreme safety + extreme risk, avoid the middle", "All in on one bet", "Diversify equally"],
          correct: 1,
          explanation: "The barbell combines extremes while avoiding the deceptively dangerous middle ground."
        }
      },
      {
        id: "af3",
        title: "Via Negativa",
        summary: "Improvement through subtraction. Remove the bad instead of adding the good.",
        insight: "What you don't do often matters more than what you do. Avoid ruin first; success can come later.",
        exercise: "List 3 things to STOP doing that would improve your life more than adding anything new.",
        quiz: {
          question: "Via Negativa means:",
          options: ["Being negative", "Removing bad things rather than adding good", "Saying no to opportunities", "Pessimistic thinking"],
          correct: 1,
          explanation: "Often the best intervention is removing harmful things rather than adding beneficial ones."
        }
      },
      {
        id: "af4",
        title: "Hormesis",
        summary: "Small doses of stress make you stronger. What doesn't kill you makes you antifragile.",
        insight: "Exercise, fasting, and cold exposure work because the stress triggers adaptation. Comfort leads to fragility.",
        exercise: "Add one small stressor today: cold shower, skipped meal, or harder workout.",
        quiz: {
          question: "Hormesis demonstrates that:",
          options: ["All stress is bad", "Small stressors trigger strengthening", "Comfort builds resilience", "Avoid all discomfort"],
          correct: 1,
          explanation: "Hormesis shows that small doses of stressors trigger adaptation and strengthening."
        }
      },
      {
        id: "af5",
        title: "The Lindy Effect",
        summary: "For non-perishable things, every day of survival increases expected future lifespan.",
        insight: "Books that have lasted 100 years will likely last another 100. New trends fade; old ideas survive because they work.",
        exercise: "In your learning, prioritize ideas that have survived 100+ years over this year's bestsellers.",
        quiz: {
          question: "The Lindy Effect predicts that:",
          options: ["New is always better", "Old ideas that survived will likely keep surviving", "Everything expires equally", "Technology always wins"],
          correct: 1,
          explanation: "Lindy: The longer something non-perishable has survived, the longer its remaining life expectancy."
        }
      }
    ]
  },
  intelligentInvestor: {
    title: "The Intelligent Investor",
    author: "Benjamin Graham",
    color: "green",
    icon: "piggy-bank",
    coreConcepts: [
      {
        id: "ii1",
        title: "Margin of Safety",
        summary: "Only buy assets when price is significantly below intrinsic value.",
        insight: "The margin protects against errors in judgment and bad luck. It's the secret to value investing.",
        exercise: "In your next major purchase, what's your margin of safety?",
        quiz: {
          question: "Margin of safety means:",
          options: ["Diversifying widely", "Buying below intrinsic value", "Setting stop losses", "Following the market"],
          correct: 1,
          explanation: "Buying at a significant discount to intrinsic value provides a buffer against errors."
        }
      },
      {
        id: "ii2",
        title: "Mr. Market",
        summary: "The market is like an emotional neighbor who offers to buy/sell at different prices daily.",
        insight: "You don't have to trade with Mr. Market. Wait for his pessimistic days to buy, euphoric days to sell.",
        exercise: "When was the last time you let Mr. Market's mood affect your decisions?",
        quiz: {
          question: "Mr. Market represents:",
          options: ["Rational pricing", "Emotional market swings you can exploit", "Government intervention", "Insider trading"],
          correct: 1,
          explanation: "Mr. Market's mood swings create opportunities for patient investors."
        }
      },
      {
        id: "ii3",
        title: "Investor vs Speculator",
        summary: "Investors analyze businesses. Speculators bet on price movements.",
        insight: "An investment operation promises safety of principal and adequate return through analysis. Anything else is speculation.",
        exercise: "Honestly assess: Are your recent 'investments' actually speculations?",
        quiz: {
          question: "The key difference between investing and speculating is:",
          options: ["The amount of money", "Analysis of intrinsic value vs betting on price", "The holding period", "Using leverage"],
          correct: 1,
          explanation: "Investing involves thorough analysis; speculation hopes for favorable price changes."
        }
      },
      {
        id: "ii4",
        title: "The Rule of 72",
        summary: "Divide 72 by your interest rate to find how many years to double your money.",
        insight: "At 7% return, money doubles every ~10 years. At 10%, every 7 years. Time + compound interest = wealth.",
        exercise: "Calculate: At your current savings rate, when will your money double?",
        quiz: {
          question: "At 8% return, money doubles in approximately:",
          options: ["6 years", "9 years", "12 years", "15 years"],
          correct: 1,
          explanation: "72 ÷ 8 = 9 years to double."
        }
      },
      {
        id: "ii5",
        title: "Dollar Cost Averaging",
        summary: "Invest a fixed amount regularly, regardless of market price.",
        insight: "You automatically buy more shares when prices are low, fewer when high. Removes emotion from investing.",
        exercise: "Set up an automatic monthly investment, even if small.",
        quiz: {
          question: "Dollar cost averaging works because:",
          options: ["You time the market", "You buy more when cheap, less when expensive", "You invest only at lows", "You follow market trends"],
          correct: 1,
          explanation: "Regular fixed investments automatically give you a better average price over time."
        }
      }
    ]
  },
  neverSplit: {
    title: "Never Split the Difference",
    author: "Chris Voss",
    color: "red",
    icon: "handshake",
    coreConcepts: [
      {
        id: "ns1",
        title: "Tactical Empathy",
        summary: "Understand and verbalize the feelings and worldview of your counterpart.",
        insight: "This isn't sympathy or agreement—it's demonstrating understanding to build rapport and influence.",
        exercise: "In your next difficult conversation, start by labeling their emotion.",
        quiz: {
          question: "Tactical empathy is:",
          options: ["Agreeing with the other side", "Understanding and verbalizing their perspective", "Being sympathetic", "Giving in to demands"],
          correct: 1,
          explanation: "Tactical empathy is about understanding, not agreeing. It builds rapport and influence."
        }
      },
      {
        id: "ns2",
        title: "Mirroring",
        summary: "Repeat the last 1-3 words they said as a question.",
        insight: "Mirroring makes people elaborate and feel heard. It buys time and reveals information.",
        exercise: "Use mirroring in 3 conversations today. Notice how people open up.",
        quiz: {
          question: "In negotiation, mirroring means:",
          options: ["Copying body language", "Repeating their last 1-3 words as a question", "Agreeing with them", "Taking notes"],
          correct: 1,
          explanation: "Mirroring (isopraxism) triggers people to elaborate and reveals hidden information."
        }
      },
      {
        id: "ns3",
        title: "Labeling",
        summary: "Identify and verbalize emotions: 'It seems like...' or 'It sounds like...'",
        insight: "Labeling negative emotions diminishes them; labeling positive ones reinforces them. Validates without agreeing.",
        exercise: "Practice: 'It seems like you're frustrated about...' Watch the reaction.",
        quiz: {
          question: "Labeling emotions in negotiation:",
          options: ["Makes things worse", "Shows weakness", "Diminishes negative emotions", "Is manipulative"],
          correct: 2,
          explanation: "Labeling negative emotions diffuses them; it's therapeutic and builds trust."
        }
      },
      {
        id: "ns4",
        title: "The Ackerman Model",
        summary: "Bargaining system: Start at 65%, then 85%, 95%, and your target with precise numbers.",
        insight: "The decreasing increments signal you're reaching your limit. Precise numbers feel researched and final.",
        exercise: "Before your next negotiation, calculate your Ackerman progression.",
        quiz: {
          question: "The Ackerman model uses:",
          options: ["Round numbers", "Decreasing increments ending in precise numbers", "Splitting the difference", "Starting high and dropping fast"],
          correct: 1,
          explanation: "65% → 85% → 95% → precise final number signals authenticity and finality."
        }
      },
      {
        id: "ns5",
        title: "Getting to 'That's Right'",
        summary: "Summarize their position until they say 'That's right' (not 'You're right').",
        insight: "'You're right' is dismissive. 'That's right' means genuine agreement and breakthrough.",
        exercise: "In a disagreement, summarize their view until they say 'That's right.'",
        quiz: {
          question: "'That's right' vs 'You're right' - which indicates true agreement?",
          options: ["They're the same", "'You're right' is better", "'That's right' signals genuine agreement", "Neither means anything"],
          correct: 2,
          explanation: "'That's right' means they feel understood. 'You're right' often means 'please stop talking.'"
        }
      }
    ]
  },
  outlive: {
    title: "Outlive",
    author: "Peter Attia",
    color: "teal",
    icon: "heart-pulse",
    coreConcepts: [
      {
        id: "ol1",
        title: "The Four Horsemen",
        summary: "Most deaths come from: heart disease, cancer, neurodegenerative disease, and metabolic disease.",
        insight: "Medicine 2.0 treats these after they appear. Medicine 3.0 prevents them decades before symptoms.",
        exercise: "Which of the four horsemen are you most at risk for? What can you do now?",
        quiz: {
          question: "The 'Four Horsemen' of chronic disease are:",
          options: ["Infections, trauma, genetics, aging", "Heart, cancer, neuro, metabolic disease", "Stress, sleep, diet, exercise", "Mental, physical, social, spiritual"],
          correct: 1,
          explanation: "Heart disease, cancer, neurodegenerative disease, and type 2 diabetes/metabolic syndrome."
        }
      },
      {
        id: "ol2",
        title: "VO2 Max & Longevity",
        summary: "Cardiorespiratory fitness is the single strongest predictor of longevity.",
        insight: "Moving from low to above-average fitness reduces all-cause mortality by 60%. It's more predictive than smoking.",
        exercise: "Test or estimate your VO2 max. Make a plan to improve it.",
        quiz: {
          question: "VO2 max matters for longevity because:",
          options: ["It measures muscle mass", "It's the strongest predictor of all-cause mortality", "Doctors like measuring it", "It's easy to improve"],
          correct: 1,
          explanation: "High VO2 max has a greater mortality benefit than almost any other factor we can measure."
        }
      },
      {
        id: "ol3",
        title: "Stability Training",
        summary: "The ability to transmit force safely through your body without injury.",
        insight: "Most injuries happen at transitions: lifting, twisting, reaching. Stability prevents the falls that end healthspans.",
        exercise: "Add 10 minutes of stability work (balance, core, joint prep) to your routine.",
        quiz: {
          question: "Stability training prevents:",
          options: ["Weight gain", "The injuries that accelerate aging", "Cardiovascular disease", "Cancer"],
          correct: 1,
          explanation: "Falls and injuries cascade into loss of function. Stability training prevents the first domino."
        }
      },
      {
        id: "ol4",
        title: "Continuous Glucose Monitoring",
        summary: "Track your glucose to understand how food, sleep, and stress affect your metabolism.",
        insight: "CGM reveals which foods spike YOUR glucose. The same food affects everyone differently.",
        exercise: "If possible, try CGM for 2 weeks. Note what spikes your glucose.",
        quiz: {
          question: "CGM is valuable because:",
          options: ["Everyone should avoid carbs", "It shows YOUR personal glucose response", "It's required for diabetics only", "Doctors recommend it"],
          correct: 1,
          explanation: "Individual variation is huge. CGM shows what affects YOUR metabolism specifically."
        }
      },
      {
        id: "ol5",
        title: "The Centenarian Decathlon",
        summary: "Define 10 physical activities you want to do at 100. Train now to ensure you can.",
        insight: "Work backward from the end. What strength, mobility, and endurance do you need at 100 to remain independent?",
        exercise: "Write your Centenarian Decathlon: 10 activities you want to do at 100.",
        quiz: {
          question: "The Centenarian Decathlon approach means:",
          options: ["Training for competitions", "Defining physical goals for age 100 and training backward", "Doing 10 exercises daily", "Running marathons"],
          correct: 1,
          explanation: "Define what you want to physically DO at 100, then build the capacity now."
        }
      }
    ]
  },
  whyWeSleep: {
    title: "Why We Sleep",
    author: "Matthew Walker",
    color: "indigo",
    icon: "moon",
    coreConcepts: [
      {
        id: "wws1",
        title: "Sleep Architecture",
        summary: "Sleep cycles through stages: light, deep, and REM, each serving irreplaceable functions.",
        insight: "Deep sleep cleans the brain. REM processes emotions and creativity. You can't skip stages and stay healthy.",
        exercise: "Track your sleep stages for a week. Are you getting enough deep sleep and REM?",
        quiz: {
          question: "Why can't you replace sleep with something else?",
          options: ["You'll feel tired", "Each stage serves unique biological functions", "It's just a habit", "You need dreams"],
          correct: 1,
          explanation: "Deep sleep, REM, and other stages perform distinct, irreplaceable functions."
        }
      },
      {
        id: "wws2",
        title: "Sleep and Learning",
        summary: "Sleep before learning prepares the brain. Sleep after learning consolidates memory.",
        insight: "One night of poor sleep reduces ability to make new memories by 40%. All-nighters are self-defeating.",
        exercise: "Never study and skip sleep. Sleep is PART of learning, not opposite to it.",
        quiz: {
          question: "How does sleep deprivation affect learning?",
          options: ["No effect", "Reduces new memory formation by 40%", "Improves focus", "Only affects physical skills"],
          correct: 1,
          explanation: "Sleep-deprived brains can't form new memories effectively—40% reduction in learning capacity."
        }
      },
      {
        id: "wws3",
        title: "Circadian Rhythm",
        summary: "Your 24-hour body clock controls alertness, hunger, hormones, and optimal performance times.",
        insight: "Fighting your chronotype is fighting biology. Night owls forced to wake early have chronic jet lag.",
        exercise: "Identify your chronotype. Align your most important work with your peak hours.",
        quiz: {
          question: "Your circadian rhythm:",
          options: ["Is easily changed", "Is genetically influenced and hard to shift", "Only affects sleep", "Can be ignored with caffeine"],
          correct: 1,
          explanation: "Chronotype is largely genetic. Working against it has significant health consequences."
        }
      },
      {
        id: "wws4",
        title: "Sleep and Health",
        summary: "Short sleep increases risk of cancer, heart disease, diabetes, depression, and early death.",
        insight: "Even one night of 4 hours reduces natural killer cells by 70%. Sleep is the foundation of health.",
        exercise: "For one month, prioritize 8 hours of sleep above all else. Notice changes.",
        quiz: {
          question: "Sleeping less than 6 hours is linked to:",
          options: ["Greater productivity", "Higher cancer, heart disease, and mortality risk", "Better focus", "More muscle growth"],
          correct: 1,
          explanation: "Chronic sleep restriction is linked to virtually every major disease and early death."
        }
      },
      {
        id: "wws5",
        title: "Sleep Hygiene",
        summary: "Regularity, darkness, cool temperature, and no screens optimize sleep quality.",
        insight: "The most important factor is consistency—same sleep and wake time every day, including weekends.",
        exercise: "Set a fixed wake time for 2 weeks, even weekends. Protect it absolutely.",
        quiz: {
          question: "The most important sleep hygiene factor is:",
          options: ["A comfortable mattress", "Consistent sleep/wake times", "Complete darkness", "White noise"],
          correct: 1,
          explanation: "Regular timing is the #1 factor. Same time to bed and wake, every day including weekends."
        }
      }
    ]
  },
  mindset: {
    title: "Mindset",
    author: "Carol Dweck",
    color: "yellow",
    icon: "brain",
    coreConcepts: [
      {
        id: "ms1",
        title: "Fixed vs Growth Mindset",
        summary: "Fixed mindset believes abilities are static. Growth mindset believes they can be developed.",
        insight: "The view you adopt for yourself profoundly affects the way you lead your life.",
        exercise: "Notice today: When do you think 'I can't do this' vs 'I can't do this YET'?",
        quiz: {
          question: "A fixed mindset believes:",
          options: ["Effort leads to mastery", "Abilities are unchangeable", "Failure is learning", "Challenges are growth opportunities"],
          correct: 1,
          explanation: "Fixed mindset sees intelligence and talent as static traits that can't be developed."
        }
      },
      {
        id: "ms2",
        title: "The Power of 'Yet'",
        summary: "Adding 'yet' to 'I can't' transforms fixed thinking into growth thinking.",
        insight: "'I can't do this' is final. 'I can't do this yet' opens a path forward.",
        exercise: "Replace 'I can't' with 'I can't yet' three times today.",
        quiz: {
          question: "Adding 'yet' to failures:",
          options: ["Is just wordplay", "Transforms fixed statements into growth paths", "Is denial", "Doesn't help adults"],
          correct: 1,
          explanation: "'Yet' implies a future state of mastery that's achievable through effort."
        }
      },
      {
        id: "ms3",
        title: "Praising Process, Not Talent",
        summary: "Praising effort and strategy builds growth mindset. Praising talent builds fixed mindset.",
        insight: "'You're so smart' makes children avoid challenges. 'You worked so hard' makes them embrace them.",
        exercise: "Praise someone's effort and strategy today instead of their natural ability.",
        quiz: {
          question: "Praising children's intelligence:",
          options: ["Builds confidence", "Makes them avoid challenges to protect the label", "Is always good", "Has no effect"],
          correct: 1,
          explanation: "Talent-based praise creates fear of failure and avoidance of challenges."
        }
      },
      {
        id: "ms4",
        title: "Embracing Challenges",
        summary: "Growth mindset sees challenges as opportunities. Fixed mindset avoids them to protect ego.",
        insight: "The moment you feel challenged is the moment you're learning. Discomfort is growth.",
        exercise: "Deliberately choose a harder option today. Notice the growth opportunity.",
        quiz: {
          question: "When facing a challenge, growth mindset thinks:",
          options: ["This proves I'm not good enough", "I should try something easier", "This is an opportunity to learn", "Natural talent will save me"],
          correct: 2,
          explanation: "Growth mindset sees challenge as the path to improvement, not a threat to self-image."
        }
      },
      {
        id: "ms5",
        title: "Learning from Criticism",
        summary: "Growth mindset treats feedback as information. Fixed mindset treats it as personal attack.",
        insight: "Feedback is data about your current approach, not judgment of your worth.",
        exercise: "Seek critical feedback on something you're working on. Use it as data.",
        quiz: {
          question: "Growth mindset responds to criticism by:",
          options: ["Defending their ego", "Using it as information to improve", "Dismissing the source", "Avoiding the critic"],
          correct: 1,
          explanation: "Criticism contains useful information about where and how to improve."
        }
      }
    ]
  },
  bruceLee: {
    title: "Be Water, My Friend",
    author: "Shannon Lee",
    color: "cyan",
    icon: "droplet",
    coreConcepts: [
      {
        id: "bl1",
        title: "Be Water",
        summary: "Be formless, shapeless, like water. Adapt to circumstances, don't fight them.",
        insight: "Water can flow or crash. It takes the shape of its container but can also wear away stone.",
        exercise: "Today, when you meet resistance, find a way to flow around it instead of fighting.",
        quiz: {
          question: "'Be water' means:",
          options: ["Be weak and passive", "Adapt to circumstances while remaining powerful", "Always give in", "Avoid all conflict"],
          correct: 1,
          explanation: "Water adapts to any container but can also crash and wear away mountains."
        }
      },
      {
        id: "bl2",
        title: "Jeet Kune Do Philosophy",
        summary: "Absorb what is useful, discard what is useless, add what is uniquely your own.",
        insight: "Don't blindly follow any system. Test everything, keep what works, develop your personal way.",
        exercise: "What practice have you been following blindly? Test if it actually works for you.",
        quiz: {
          question: "Bruce Lee's approach to learning was:",
          options: ["Master one tradition completely", "Take what works from anywhere", "Reject all traditions", "Follow the latest trends"],
          correct: 1,
          explanation: "Absorb useful elements from any source, reject what doesn't work, develop your own way."
        }
      },
      {
        id: "bl3",
        title: "Self-Actualization",
        summary: "The ultimate goal is to honestly express yourself, not to imitate.",
        insight: "It's not about being the best copy of someone else—it's about being the best version of YOU.",
        exercise: "Where are you imitating someone else instead of expressing your authentic self?",
        quiz: {
          question: "Bruce Lee valued:",
          options: ["Perfect technique", "Authentic self-expression", "Following tradition", "Winning competitions"],
          correct: 1,
          explanation: "Self-expression was his ultimate goal. Technique serves expression, not vice versa."
        }
      },
      {
        id: "bl4",
        title: "No Way as Way",
        summary: "Having no fixed pattern becomes the pattern. Formlessness is the highest form.",
        insight: "The moment you adopt a fixed style, you limit yourself. Remain open, adaptable, responsive.",
        exercise: "Where are you too attached to 'the right way'? What if you let go of that?",
        quiz: {
          question: "'No way as way' means:",
          options: ["Be aimless", "Don't be limited by any fixed approach", "Reject all learning", "Give up on mastery"],
          correct: 1,
          explanation: "Avoid becoming rigid. Remain adaptable to whatever each moment requires."
        }
      },
      {
        id: "bl5",
        title: "Using No Way as Way",
        summary: "The highest art is no art. The highest form is no form.",
        insight: "Mastery looks effortless because it responds naturally, without forced technique.",
        exercise: "In your area of expertise, can you act without thinking? Where do you still have to try?",
        quiz: {
          question: "The highest level of mastery appears:",
          options: ["Complex and impressive", "Effortless and natural", "Rigid and perfect", "Showy and dramatic"],
          correct: 1,
          explanation: "True mastery is so natural it becomes invisible—like water flowing downhill."
        }
      }
    ]
  },
  influence: {
    title: "Influence",
    author: "Robert Cialdini",
    color: "pink",
    icon: "users",
    coreConcepts: [
      {
        id: "inf1",
        title: "Reciprocity",
        summary: "We feel obligated to return favors. Give first to receive.",
        insight: "Even uninvited favors create obligation. Free samples, small gifts, and favors all trigger reciprocity.",
        exercise: "Give something of value with no expectation. Notice how people want to give back.",
        quiz: {
          question: "Reciprocity works because:",
          options: ["People are generous", "We feel obligated to return favors", "Free things are valuable", "It's polite"],
          correct: 1,
          explanation: "Receiving creates an obligation to give back, even when the original gift was unsolicited."
        }
      },
      {
        id: "inf2",
        title: "Commitment & Consistency",
        summary: "Once we commit, we act consistently with that commitment.",
        insight: "Start with small commitments. People will escalate to remain consistent with their self-image.",
        exercise: "Get a small 'yes' before asking for the bigger commitment you really want.",
        quiz: {
          question: "The foot-in-the-door technique uses:",
          options: ["Large initial requests", "Small commitments that escalate", "Fear of missing out", "Social proof"],
          correct: 1,
          explanation: "Small initial commitments create consistency pressure to agree to larger related requests."
        }
      },
      {
        id: "inf3",
        title: "Social Proof",
        summary: "We look to others to determine correct behavior, especially in uncertainty.",
        insight: "Reviews, testimonials, and 'most popular' labels all leverage social proof.",
        exercise: "Notice where you're following the crowd. Is it because you chose to, or just social proof?",
        quiz: {
          question: "Social proof is most powerful when:",
          options: ["You're confident", "You're uncertain and others are similar to you", "You're an expert", "You're alone"],
          correct: 1,
          explanation: "Uncertainty + similarity = maximum social proof influence."
        }
      },
      {
        id: "inf4",
        title: "Authority",
        summary: "We defer to experts and authority figures, often automatically.",
        insight: "Titles, uniforms, and credentials trigger automatic compliance—even fake ones.",
        exercise: "Question an 'authority' today. Are their credentials relevant to this specific claim?",
        quiz: {
          question: "Authority influence can be triggered by:",
          options: ["Only real expertise", "Symbols like titles, uniforms, and credentials", "Moral standing", "Physical size"],
          correct: 1,
          explanation: "We respond to SYMBOLS of authority, which can be easily faked or irrelevant."
        }
      },
      {
        id: "inf5",
        title: "Scarcity",
        summary: "Things seem more valuable when they're rare or becoming unavailable.",
        insight: "'Limited time offer' and 'only 3 left' trigger loss aversion and desire.",
        exercise: "Next time you feel urgency from scarcity, pause. Is this real scarcity or manufactured?",
        quiz: {
          question: "Scarcity works because:",
          options: ["Rare things are always better", "Potential loss feels more urgent than gain", "Limited things are premium", "Supply equals quality"],
          correct: 1,
          explanation: "Scarcity triggers loss aversion—the fear of missing out on something."
        }
      }
    ]
  },
  blackSwan: {
    title: "The Black Swan",
    author: "Nassim Nicholas Taleb",
    color: "gray",
    icon: "bird",
    coreConcepts: [
      {
        id: "bs1",
        title: "Black Swan Events",
        summary: "High-impact, rare, unpredictable events that seem obvious in hindsight.",
        insight: "History is dominated by Black Swans, but we pretend it's predictable. Our models fail at extremes.",
        exercise: "What Black Swan could disrupt your life/industry? How would you position for it?",
        quiz: {
          question: "A Black Swan event is:",
          options: ["Any bad event", "Rare, high-impact, and obvious only in hindsight", "Predictable crises", "Economic recessions"],
          correct: 1,
          explanation: "Black Swans are rare, have extreme impact, and seem predictable only after they occur."
        }
      },
      {
        id: "bs2",
        title: "The Narrative Fallacy",
        summary: "We create stories to explain random events, giving illusion of understanding.",
        insight: "After something happens, we can always construct a compelling story. This feels like but isn't prediction.",
        exercise: "For a recent event, notice how easy it is to explain WHY it happened—after the fact.",
        quiz: {
          question: "The narrative fallacy is:",
          options: ["Lying about events", "Creating stories that make random events seem predictable", "Bad storytelling", "Historical revisionism"],
          correct: 1,
          explanation: "We construct explanatory narratives that make past events seem inevitable."
        }
      },
      {
        id: "bs3",
        title: "Mediocristan vs Extremistan",
        summary: "Some domains have bounded variation (Mediocristan). Others are dominated by extremes (Extremistan).",
        insight: "Height and weight live in Mediocristan. Wealth, book sales, and viral content live in Extremistan.",
        exercise: "Is your career in Mediocristan or Extremistan? How does this change your strategy?",
        quiz: {
          question: "Extremistan is characterized by:",
          options: ["Normal distributions", "Winner-take-all outcomes", "Predictable averages", "Bounded variation"],
          correct: 1,
          explanation: "In Extremistan, single observations can dramatically affect the total (like one billionaire)."
        }
      },
      {
        id: "bs4",
        title: "The Ludic Fallacy",
        summary: "Confusing the model with reality. Real life is messier than games or models.",
        insight: "Casinos can calculate odds. Life can't. Don't mistake the map for the territory.",
        exercise: "Where are you using a model that doesn't capture real-world complexity?",
        quiz: {
          question: "The ludic fallacy is:",
          options: ["Taking games too seriously", "Applying game-like models to messy reality", "Bad math", "Gambling addiction"],
          correct: 1,
          explanation: "Real life has unknown unknowns that neat models and games can't capture."
        }
      },
      {
        id: "bs5",
        title: "Positive Black Swans",
        summary: "Position yourself where positive Black Swans can help you with limited downside.",
        insight: "Asymmetric bets: limited downside, unlimited upside. Seek exposure to positive extremes.",
        exercise: "What could you do that has limited cost but unlimited potential upside?",
        quiz: {
          question: "To benefit from Black Swans:",
          options: ["Predict them accurately", "Position for asymmetric upside with limited downside", "Avoid all risk", "Diversify equally"],
          correct: 1,
          explanation: "You can't predict Black Swans, but you can position to benefit from positive ones."
        }
      }
    ]
  },
  stoicPhilosophy: {
    title: "Meditations",
    author: "Marcus Aurelius",
    color: "stone",
    icon: "pillar",
    coreConcepts: [
      {
        id: "st1",
        title: "The Dichotomy of Control",
        summary: "Focus only on what you can control: your judgments, intentions, desires, and actions.",
        insight: "You can't control events, others' actions, or outcomes—only your response to them.",
        exercise: "List what's bothering you. Separate into 'can control' and 'cannot control.' Act only on the first.",
        quiz: {
          question: "According to the Stoics, you control:",
          options: ["Outcomes of your efforts", "Other people's opinions", "Your own judgments and responses", "External events"],
          correct: 2,
          explanation: "Only your own thoughts, judgments, and chosen responses are truly under your control."
        }
      },
      {
        id: "st2",
        title: "Amor Fati",
        summary: "Love your fate. Embrace everything that happens as necessary and good.",
        insight: "Don't just accept what happens—love it. Everything is fuel for your growth.",
        exercise: "Take something 'bad' that happened today. How could it be exactly what you needed?",
        quiz: {
          question: "Amor fati means:",
          options: ["Accepting fate passively", "Loving and embracing your fate", "Fighting against fate", "Predestination"],
          correct: 1,
          explanation: "Not just acceptance but enthusiastic embrace of everything that happens."
        }
      },
      {
        id: "st3",
        title: "Memento Mori",
        summary: "Remember you will die. This awareness makes life more vivid and choices clearer.",
        insight: "Death isn't morbid—it's clarifying. It helps you focus on what truly matters.",
        exercise: "If you had one year left, what would you change about today?",
        quiz: {
          question: "Memento mori helps us by:",
          options: ["Making us depressed", "Clarifying what truly matters", "Encouraging risk-taking", "Promoting hedonism"],
          correct: 1,
          explanation: "Awareness of death cuts through trivialities and focuses us on what's important."
        }
      },
      {
        id: "st4",
        title: "Premeditatio Malorum",
        summary: "Visualize potential setbacks in advance. Prepare mentally for what could go wrong.",
        insight: "Imagining adversity reduces its impact and helps you prepare real responses.",
        exercise: "Before an important event, spend 5 minutes imagining everything that could go wrong.",
        quiz: {
          question: "Negative visualization (premeditatio malorum):",
          options: ["Creates anxiety", "Prepares you mentally for setbacks", "Is pessimistic", "Should be avoided"],
          correct: 1,
          explanation: "Imagining setbacks in advance reduces their psychological impact and aids preparation."
        }
      },
      {
        id: "st5",
        title: "Virtue as the Highest Good",
        summary: "Virtue—wisdom, justice, courage, temperance—is the only true good.",
        insight: "External goods (wealth, fame, pleasure) are 'preferred indifferents.' Only virtue is under your control and inherently good.",
        exercise: "How did you practice virtue today? Wisdom? Justice? Courage? Temperance?",
        quiz: {
          question: "For Stoics, the only true good is:",
          options: ["Wealth", "Pleasure", "Fame", "Virtue"],
          correct: 3,
          explanation: "Virtue is the only thing fully in our control and good in itself."
        }
      }
    ]
  },
  wimHof: {
    title: "The Wim Hof Method",
    author: "Wim Hof",
    color: "sky",
    icon: "snowflake",
    coreConcepts: [
      {
        id: "wh1",
        title: "The Breathing Technique",
        summary: "30 deep breaths, then hold. This changes blood chemistry and unlocks the body's potential.",
        insight: "Controlled hyperventilation followed by breath retention creates physiological changes that reduce inflammation.",
        exercise: "Try 3 rounds: 30 breaths, hold until gasp, recovery breath. Notice how you feel.",
        quiz: {
          question: "Wim Hof breathing creates:",
          options: ["Just relaxation", "Physiological changes that reduce inflammation", "Oxygen deprivation", "Hyperventilation only"],
          correct: 1,
          explanation: "The breathing technique changes blood pH and triggers anti-inflammatory responses."
        }
      },
      {
        id: "wh2",
        title: "Cold Exposure",
        summary: "Cold showers or ice baths train the vascular system and build stress resilience.",
        insight: "Cold activates brown fat, improves circulation, and trains the mind to remain calm under stress.",
        exercise: "End your shower with 30 seconds cold. Add time each day.",
        quiz: {
          question: "Regular cold exposure:",
          options: ["Is just uncomfortable", "Trains cardiovascular and stress response systems", "Weakens immunity", "Is dangerous for everyone"],
          correct: 1,
          explanation: "Cold exposure improves vascular health, activates brown fat, and builds mental resilience."
        }
      },
      {
        id: "wh3",
        title: "Mindset & Commitment",
        summary: "The mind leads, the body follows. Mental commitment enables physical feats.",
        insight: "Your mind has tremendous influence over physiology when you commit fully.",
        exercise: "Before cold exposure, set your intention. Notice how commitment changes the experience.",
        quiz: {
          question: "In the Wim Hof Method, mindset:",
          options: ["Doesn't matter much", "Is the foundation that enables physical practice", "Is separate from physical benefits", "Is just motivation"],
          correct: 1,
          explanation: "Mental commitment and focus are what allow the body to adapt to extreme stress."
        }
      },
      {
        id: "wh4",
        title: "Controlling the Autonomic",
        summary: "Through practice, you can influence systems previously thought automatic.",
        insight: "Scientific studies show Wim Hof practitioners can consciously influence immune response and body temperature.",
        exercise: "During cold exposure, focus on generating internal warmth. With practice, it's possible.",
        quiz: {
          question: "Wim Hof Method research showed practitioners could:",
          options: ["Only feel better subjectively", "Actually influence immune response consciously", "Just tolerate cold better", "Nothing scientifically verified"],
          correct: 1,
          explanation: "Studies showed practitioners could voluntarily influence their innate immune response."
        }
      },
      {
        id: "wh5",
        title: "Building Resilience",
        summary: "Consistent practice builds physical and mental resilience that transfers to all of life.",
        insight: "The cold and breath work are training grounds. The real benefit is stress resilience in daily life.",
        exercise: "Apply the same calm focus from cold exposure to a stressful situation today.",
        quiz: {
          question: "The ultimate goal of Wim Hof practice is:",
          options: ["Surviving cold water", "Building life resilience through controlled stress", "Setting world records", "Reducing shower time"],
          correct: 1,
          explanation: "Cold and breath are tools to build resilience that transfers to handling all life stress."
        }
      }
    ]
  },
  hubermanLab: {
    title: "Huberman Lab Protocols",
    author: "Dr. Andrew Huberman",
    color: "orange",
    icon: "microscope",
    coreConcepts: [
      {
        id: "hl1",
        title: "Morning Sunlight",
        summary: "Get bright light in your eyes within 30-60 minutes of waking to set circadian rhythm.",
        insight: "Early light exposure triggers cortisol rise, sets your body clock, and improves nighttime sleep.",
        exercise: "Tomorrow, get outside within an hour of waking for 10+ minutes. No sunglasses.",
        quiz: {
          question: "Morning sunlight helps sleep because:",
          options: ["It wakes you up", "It sets your circadian clock for proper melatonin release later", "Vitamin D helps sleep", "It reduces stress"],
          correct: 1,
          explanation: "Morning light exposure times your circadian rhythm for proper melatonin release at night."
        }
      },
      {
        id: "hl2",
        title: "Dopamine Baseline",
        summary: "High-spike activities crash your baseline. Protect your baseline for sustainable motivation.",
        insight: "Social media, drugs, and processed food spike dopamine, then crash baseline. Low baseline = no motivation.",
        exercise: "Identify your biggest dopamine spikes. Can you reduce frequency to protect your baseline?",
        quiz: {
          question: "Protecting dopamine baseline means:",
          options: ["Maximizing dopamine spikes", "Avoiding all pleasure", "Reducing frequency of high-spike activities", "Taking supplements"],
          correct: 2,
          explanation: "Frequent high spikes crash baseline, leading to low motivation and craving."
        }
      },
      {
        id: "hl3",
        title: "NSDR (Non-Sleep Deep Rest)",
        summary: "Yoga Nidra and NSDR protocols restore dopamine and accelerate learning.",
        insight: "20-minute NSDR after learning increases retention by 50%. It also restores dopamine without sleep.",
        exercise: "Try a 10-minute NSDR protocol after your next learning session.",
        quiz: {
          question: "NSDR (Non-Sleep Deep Rest):",
          options: ["Is just napping", "Restores dopamine and enhances learning retention", "Only helps sleep", "Is meditation"],
          correct: 1,
          explanation: "NSDR protocols boost dopamine, accelerate learning, and help recovery without sleep."
        }
      },
      {
        id: "hl4",
        title: "Neuroplasticity Protocol",
        summary: "Focus + urgency + rest = rewiring. You need intense focus, then deep rest to consolidate.",
        insight: "Learning happens in focused bouts. Rewiring happens during rest (especially sleep) afterward.",
        exercise: "For deep learning: 90min focused work, then deliberate rest. Don't skip the rest.",
        quiz: {
          question: "Neuroplasticity requires:",
          options: ["Only focused practice", "Focus plus rest for consolidation", "Natural talent", "Long study sessions"],
          correct: 1,
          explanation: "Focus creates the conditions for change; rest (especially sleep) consolidates the rewiring."
        }
      },
      {
        id: "hl5",
        title: "Cold Exposure Timing",
        summary: "Cold exposure early increases dopamine for 5+ hours. Late exposure disrupts sleep.",
        insight: "Cold triggers massive, sustained dopamine increase. Time it for when you want alertness.",
        exercise: "Try cold exposure in the morning. Notice sustained energy without the crash of caffeine.",
        quiz: {
          question: "Cold exposure increases dopamine for:",
          options: ["A few minutes", "5+ hours", "Only during exposure", "24 hours"],
          correct: 1,
          explanation: "Cold exposure causes a 2.5x increase in dopamine that lasts for hours."
        }
      }
    ]
  },
  tokenEconomy: {
    title: "Token Economy & DeFi",
    author: "Various Authors",
    color: "amber",
    icon: "coins",
    coreConcepts: [
      {
        id: "te1",
        title: "Blockchain Basics",
        summary: "A distributed ledger where every transaction is verified by network consensus.",
        insight: "No central authority. Trust comes from cryptography and game theory, not institutions.",
        exercise: "Explain blockchain to someone without using the word 'blockchain.'",
        quiz: {
          question: "Blockchain achieves trust through:",
          options: ["Government regulation", "Cryptography and network consensus", "Central banks", "Corporate oversight"],
          correct: 1,
          explanation: "Decentralized verification through cryptography replaces institutional trust."
        }
      },
      {
        id: "te2",
        title: "Smart Contracts",
        summary: "Self-executing code that runs when conditions are met. Code is law.",
        insight: "No intermediaries needed. The contract executes automatically and transparently.",
        exercise: "Think of a contract in your life. How would it work as a smart contract?",
        quiz: {
          question: "Smart contracts are:",
          options: ["Traditional legal contracts", "Self-executing code on blockchain", "AI lawyers", "Digital signatures only"],
          correct: 1,
          explanation: "Smart contracts automatically execute when predetermined conditions are met."
        }
      },
      {
        id: "te3",
        title: "DeFi Fundamentals",
        summary: "Financial services without banks: lending, borrowing, trading via protocols.",
        insight: "DeFi rebuilds traditional finance with code. More accessible, transparent, but higher risk.",
        exercise: "Research one DeFi protocol. What traditional service does it replace?",
        quiz: {
          question: "DeFi aims to:",
          options: ["Replace all money", "Recreate financial services without intermediaries", "Make banks digital", "Just trade crypto"],
          correct: 1,
          explanation: "DeFi provides financial services (lending, trading, etc.) through code, not institutions."
        }
      },
      {
        id: "te4",
        title: "Token Economics",
        summary: "Designing token incentives that align user behavior with protocol goals.",
        insight: "Good tokenomics creates flywheel effects. Bad tokenomics leads to extraction and collapse.",
        exercise: "For any token you hold, analyze: What behavior does the tokenomics incentivize?",
        quiz: {
          question: "Tokenomics is about:",
          options: ["Token price prediction", "Designing incentives that align users with protocol goals", "Marketing tokens", "Technical blockchain specs"],
          correct: 1,
          explanation: "Tokenomics uses economic incentives to encourage desired network behavior."
        }
      },
      {
        id: "te5",
        title: "Yield and Risk",
        summary: "DeFi yields come from somewhere. Higher yield = higher risk. Always ask: where does yield come from?",
        insight: "If you can't identify the source of yield, YOU are probably the yield (to someone else).",
        exercise: "For any investment promising high yields, trace exactly where the yield comes from.",
        quiz: {
          question: "In DeFi, high yields usually indicate:",
          options: ["Great opportunity", "Higher risk or unsustainable economics", "Better protocols", "More security"],
          correct: 1,
          explanation: "Yield comes from somewhere. Unsustainably high yields often signal hidden risks."
        }
      }
    ]
  }
};

  // ============================================
  // POWER & INFLUENCE BOOKS
  // ============================================

  talkLikeTed: {
    title: "Talk Like TED",
    author: "Carmine Gallo",
    color: "red",
    icon: "mic",
    coreConcepts: [
      {
        id: "tlt1",
        title: "Passion is Contagious",
        summary: "The most inspiring TED speakers are genuinely passionate about their topic.",
        insight: "Passion fuels emotional connection. Neuroscience shows emotion makes ideas memorable.",
        exercise: "Identify the one thing about your topic that truly excites you. Lead with that.",
        quiz: {
          question: "The foundation of a great TED talk is:",
          options: ["Perfect slides", "Genuine passion for the topic", "Memorized script", "Impressive credentials"],
          correct: 1,
          explanation: "Passion is contagious and creates emotional resonance that makes ideas stick."
        }
      },
      {
        id: "tlt2",
        title: "The 18-Minute Rule",
        summary: "TED talks are capped at 18 minutes—the ideal length for sustained attention.",
        insight: "Cognitive load is real. Longer presentations exhaust listeners. Constraint breeds creativity.",
        exercise: "Take your next presentation and ruthlessly cut it to 18 minutes. What survives?",
        quiz: {
          question: "Why are TED talks limited to 18 minutes?",
          options: ["Arbitrary tradition", "TV format requirement", "Optimal attention span window", "Budget constraints"],
          correct: 2,
          explanation: "18 minutes is long enough to be serious but short enough to hold attention."
        }
      },
      {
        id: "tlt3",
        title: "Master the Art of Storytelling",
        summary: "Stories are 22 times more memorable than facts alone.",
        insight: "Our brains are wired for narrative. Stories activate neural coupling—listeners experience what speakers describe.",
        exercise: "Convert one data point in your presentation into a personal story.",
        quiz: {
          question: "Stories are effective because:",
          options: ["People like entertainment", "They activate shared brain patterns between speaker and listener", "They're easier to tell", "Data is boring"],
          correct: 1,
          explanation: "Neural coupling means listeners' brains mirror the speaker's during storytelling."
        }
      },
      {
        id: "tlt4",
        title: "Deliver Jaw-Dropping Moments",
        summary: "Create emotionally charged events that audiences remember and share.",
        insight: "Bill Gates releasing mosquitoes. Steve Jobs revealing the MacBook Air from an envelope. These moments go viral.",
        exercise: "Design one unexpected, emotionally charged moment for your next presentation.",
        quiz: {
          question: "A 'jaw-dropping moment' is designed to:",
          options: ["Show off", "Create an emotionally charged, memorable event", "Fill time", "Demonstrate expertise"],
          correct: 1,
          explanation: "Emotional peaks create lasting memories and make content shareable."
        }
      },
      {
        id: "tlt5",
        title: "The Rule of Three",
        summary: "The human mind can hold 3-4 chunks of information in working memory.",
        insight: "Three supporting points, three stories, three steps. More than three overwhelms; fewer feels incomplete.",
        exercise: "Structure your message into exactly three main points.",
        quiz: {
          question: "Why is 'three' the optimal number of key points?",
          options: ["It's traditional", "It matches working memory capacity", "It fills the time", "Audiences prefer odd numbers"],
          correct: 1,
          explanation: "Working memory holds 3-4 items. Three points are digestible and memorable."
        }
      }
    ]
  },
  whatEveryBodySays: {
    title: "What Every BODY is Saying",
    author: "Joe Navarro",
    color: "blue",
    icon: "eye",
    coreConcepts: [
      {
        id: "webs1",
        title: "The Honest Limbic System",
        summary: "The limbic brain reacts honestly before the thinking brain can deceive.",
        insight: "Body language is controlled by the limbic system, which responds faster than conscious thought can mask.",
        exercise: "Watch for limbic responses: freezing, fleeing (leaning away), or fighting (aggressive posture).",
        quiz: {
          question: "Why is body language more honest than words?",
          options: ["People are bad liars", "The limbic system reacts before conscious control", "Body language is universal", "We forget to control it"],
          correct: 1,
          explanation: "The limbic brain responds automatically before the neocortex can craft a deception."
        }
      },
      {
        id: "webs2",
        title: "Pacifying Behaviors",
        summary: "When stressed, we self-soothe: touching neck, rubbing arms, playing with hair.",
        insight: "These behaviors release calming endorphins. Notice them to detect discomfort others are hiding.",
        exercise: "Notice when you pacify yourself. What triggered the stress response?",
        quiz: {
          question: "Pacifying behaviors (touching face/neck) indicate:",
          options: ["Deception", "Stress or discomfort", "Confidence", "Boredom"],
          correct: 1,
          explanation: "Pacifying behaviors soothe the limbic system when stressed—not necessarily lying."
        }
      },
      {
        id: "webs3",
        title: "Feet Don't Lie",
        summary: "Feet are the most honest part of the body—they reveal true intentions.",
        insight: "Feet point where we want to go. Feet bouncing shows excitement. Feet wrapped shows insecurity.",
        exercise: "In your next meeting, observe where people's feet are pointing.",
        quiz: {
          question: "Feet are reliable indicators because:",
          options: ["They're farthest from the brain", "We rarely consciously control them", "They're visible", "They move often"],
          correct: 1,
          explanation: "We focus on controlling our face and hands, forgetting our feet reveal true feelings."
        }
      },
      {
        id: "webs4",
        title: "Baseline First",
        summary: "You must know someone's normal behavior to detect changes.",
        insight: "A nervous behavior in one person is normal in another. Compare to their baseline, not universal norms.",
        exercise: "Spend 5 minutes observing someone's normal mannerisms before looking for deception.",
        quiz: {
          question: "Before reading body language, you must:",
          options: ["Learn all the signals", "Establish the person's baseline behavior", "Make them comfortable", "Ask direct questions"],
          correct: 1,
          explanation: "Changes from baseline reveal discomfort. Without baseline, you're just guessing."
        }
      },
      {
        id: "webs5",
        title: "Clusters and Context",
        summary: "Never rely on a single cue. Look for clusters of behaviors in context.",
        insight: "Crossed arms might mean cold, not closed off. Multiple signals pointing the same direction matter.",
        exercise: "When you notice one cue, look for 2-3 more that confirm or contradict.",
        quiz: {
          question: "A single body language cue should:",
          options: ["Be trusted if clear", "Never be interpreted alone—look for clusters", "Override words", "Indicate deception"],
          correct: 1,
          explanation: "Single cues are unreliable. Clusters of congruent behaviors are meaningful."
        }
      }
    ]
  },
  bodyLanguagePease: {
    title: "The Definitive Book of Body Language",
    author: "Allan & Barbara Pease",
    color: "purple",
    icon: "hand",
    coreConcepts: [
      {
        id: "blp1",
        title: "The Power of Open Palms",
        summary: "Visible palms signal honesty and openness; hidden palms suggest concealment.",
        insight: "Historically, open palms showed you held no weapons. This signal persists in modern trust.",
        exercise: "In important conversations, keep your palms visible. Notice the response.",
        quiz: {
          question: "Open, visible palms typically signal:",
          options: ["Submission", "Honesty and openness", "Nervousness", "Aggression"],
          correct: 1,
          explanation: "Visible palms are an ancient signal of having nothing to hide."
        }
      },
      {
        id: "blp2",
        title: "Power Poses vs Submissive Poses",
        summary: "Taking up space projects power; shrinking projects submission.",
        insight: "Power poses: hands on hips, leaning back, spreading out. Submissive: arms crossed, hunched, small.",
        exercise: "Before an important meeting, strike a power pose for 2 minutes. Notice confidence change.",
        quiz: {
          question: "Power poses involve:",
          options: ["Crossing arms protectively", "Taking up more physical space", "Staying still", "Avoiding eye contact"],
          correct: 1,
          explanation: "Expansive postures project confidence and can actually increase testosterone."
        }
      },
      {
        id: "blp3",
        title: "The Science of Smiling",
        summary: "Genuine smiles (Duchenne) involve eye crinkles; fake smiles don't.",
        insight: "A real smile engages the orbicularis oculi (eye muscles). Fake smiles use only the mouth.",
        exercise: "Practice identifying Duchenne vs social smiles in photos and conversation.",
        quiz: {
          question: "A genuine smile is identified by:",
          options: ["Wide mouth", "Showing teeth", "Crinkles around the eyes", "Duration"],
          correct: 2,
          explanation: "The orbicularis oculi creates 'crow's feet'—involuntary in genuine smiles."
        }
      },
      {
        id: "blp4",
        title: "Mirroring and Rapport",
        summary: "We unconsciously mirror people we like and agree with.",
        insight: "Mirroring builds rapport because it signals 'I'm like you.' Deliberately mirror to build connection.",
        exercise: "Subtly mirror someone's posture in your next conversation. Notice how rapport develops.",
        quiz: {
          question: "Mirroring someone's body language:",
          options: ["Is manipulation", "Builds subconscious rapport", "Shows submission", "Is always obvious"],
          correct: 1,
          explanation: "Mirroring signals similarity and builds trust at a subconscious level."
        }
      },
      {
        id: "blp5",
        title: "Territorial Markers",
        summary: "Humans mark and defend territory with objects and body positioning.",
        insight: "Spreading belongings, sitting at the head of a table, and space invasion are territorial signals.",
        exercise: "Notice how people mark their territory in meetings. What does seating position signal?",
        quiz: {
          question: "Spreading belongings on a table signals:",
          options: ["Messiness", "Territorial claim and confidence", "Nervousness", "Rudeness"],
          correct: 1,
          explanation: "Taking up space with objects is a territorial display of confidence and ownership."
        }
      }
    ]
  },
  gettingToYes: {
    title: "Getting to Yes",
    author: "Roger Fisher & William Ury",
    color: "green",
    icon: "handshake",
    coreConcepts: [
      {
        id: "gty1",
        title: "Separate People from Problems",
        summary: "Attack the problem, not the person. Be hard on issues, soft on people.",
        insight: "Relationships and substance get entangled. Disentangle them to negotiate effectively.",
        exercise: "In your next disagreement, explicitly separate: 'I value our relationship AND we need to solve X.'",
        quiz: {
          question: "Separating people from problems means:",
          options: ["Ignoring emotions", "Being hard on issues while maintaining relationships", "Not caring about people", "Delegating negotiations"],
          correct: 1,
          explanation: "Address substance (the problem) firmly while treating the person with respect."
        }
      },
      {
        id: "gty2",
        title: "Focus on Interests, Not Positions",
        summary: "Positions are what you say you want. Interests are WHY you want it.",
        insight: "Behind opposed positions often lie shared or compatible interests. Dig deeper.",
        exercise: "When someone states a position, ask 'Why?' and 'Why not?' to uncover interests.",
        quiz: {
          question: "The difference between interests and positions is:",
          options: ["Interests are stronger", "Positions are WHAT; interests are WHY", "They're the same thing", "Interests are negotiable"],
          correct: 1,
          explanation: "Positions are stated demands. Interests are the underlying needs and concerns."
        }
      },
      {
        id: "gty3",
        title: "Invent Options for Mutual Gain",
        summary: "Brainstorm multiple possibilities before deciding. Expand the pie.",
        insight: "Most negotiations aren't zero-sum. Creative options can satisfy both parties better than compromise.",
        exercise: "In your next negotiation, brainstorm 5+ options before evaluating any.",
        quiz: {
          question: "Inventing options means:",
          options: ["Giving in", "Creating multiple possibilities before deciding", "Compromising", "Delaying decisions"],
          correct: 1,
          explanation: "Separate inventing from deciding. Generate many options, then evaluate."
        }
      },
      {
        id: "gty4",
        title: "Use Objective Criteria",
        summary: "Base decisions on fair standards, not willpower or pressure.",
        insight: "Market value, precedent, expert opinion—objective criteria resolve disputes without winner/loser.",
        exercise: "Before negotiating price, research 3 objective benchmarks you can reference.",
        quiz: {
          question: "Objective criteria in negotiation refers to:",
          options: ["Your goals", "Fair, external standards both parties can accept", "The other party's limits", "Legal requirements only"],
          correct: 1,
          explanation: "Objective criteria are independent standards—market rates, precedents, expert judgments."
        }
      },
      {
        id: "gty5",
        title: "Know Your BATNA",
        summary: "Best Alternative To Negotiated Agreement—your walkaway power.",
        insight: "Your BATNA is your true leverage. The better your alternative, the stronger your position.",
        exercise: "Before any negotiation, clarify: What will you do if this fails? Improve that alternative.",
        quiz: {
          question: "BATNA is:",
          options: ["Your bottom line", "What you'll do if negotiation fails", "Your first offer", "The other side's weakness"],
          correct: 1,
          explanation: "BATNA is your best option outside this negotiation. It defines your real power."
        }
      }
    ]
  },
  neverEatAlone: {
    title: "Never Eat Alone",
    author: "Keith Ferrazzi",
    color: "orange",
    icon: "users",
    coreConcepts: [
      {
        id: "nea1",
        title: "Relationship Currency",
        summary: "Your network is your net worth. Relationships are the ultimate career currency.",
        insight: "Success rarely comes from what you know alone—it comes from who knows and trusts you.",
        exercise: "List 50 people who could help your goals. How many would take your call right now?",
        quiz: {
          question: "The most valuable professional asset is:",
          options: ["Technical skills", "Credentials", "Genuine relationships", "Experience"],
          correct: 2,
          explanation: "Skills matter, but relationships open doors and create opportunities."
        }
      },
      {
        id: "nea2",
        title: "Generosity First",
        summary: "Give before you need. Help others succeed without keeping score.",
        insight: "The most connected people are the most generous. Give value first; returns come later.",
        exercise: "Make 3 introductions today that could help others—expect nothing in return.",
        quiz: {
          question: "The key to building a network is:",
          options: ["Collecting contacts", "Attending events", "Generously helping others first", "Following up regularly"],
          correct: 2,
          explanation: "Generosity builds trust and goodwill that eventually returns to you."
        }
      },
      {
        id: "nea3",
        title: "The Follow-Up",
        summary: "The fortune is in the follow-up. One meeting means nothing without reinforcement.",
        insight: "Most people fail here. Following up within 24 hours, then regularly, turns contacts into connections.",
        exercise: "After every meeting, send a personalized follow-up within 24 hours.",
        quiz: {
          question: "Following up after meeting someone is:",
          options: ["Optional", "Annoying", "Where most people fail, losing potential relationships", "Only for sales"],
          correct: 2,
          explanation: "Consistent follow-up is rare and distinguishes relationship builders from collectors."
        }
      },
      {
        id: "nea4",
        title: "Become the Connector",
        summary: "The person who connects others becomes central to every network.",
        insight: "When you connect two people who should know each other, both remember you. Be the hub.",
        exercise: "Think of two people in your network who would benefit from knowing each other. Introduce them.",
        quiz: {
          question: "Being a 'connector' means:",
          options: ["Having the most contacts", "Introducing people who can help each other", "Attending many events", "Being an extrovert"],
          correct: 1,
          explanation: "Connectors create value by linking people with complementary needs and abilities."
        }
      },
      {
        id: "nea5",
        title: "Find the Super-Connectors",
        summary: "Some people know everyone. Befriend them and their network becomes accessible.",
        insight: "Identify and genuinely help super-connectors. One relationship unlocks hundreds.",
        exercise: "Identify 3 super-connectors in your industry. How can you add value to them?",
        quiz: {
          question: "Super-connectors are valuable because:",
          options: ["They're famous", "They provide access to vast networks", "They're rich", "They attend events"],
          correct: 1,
          explanation: "Super-connectors are hubs. One genuine relationship opens many doors."
        }
      }
    ]
  },

  // ============================================
  // WEALTH & BUSINESS BOOKS
  // ============================================

  richestManBabylon: {
    title: "The Richest Man in Babylon",
    author: "George S. Clason",
    color: "amber",
    icon: "landmark",
    coreConcepts: [
      {
        id: "rmb1",
        title: "Pay Yourself First",
        summary: "Save at least 10% of everything you earn before paying anyone else.",
        insight: "What you keep is what makes you wealthy, not what you earn. Pay yourself first, always.",
        exercise: "Set up automatic transfer: 10% of every paycheck goes to savings before you see it.",
        quiz: {
          question: "The foundation of wealth building is:",
          options: ["High income", "Saving at least 10% before spending", "Smart investments", "Cutting expenses"],
          correct: 1,
          explanation: "Pay yourself first. What remains after bills won't build wealth."
        }
      },
      {
        id: "rmb2",
        title: "Make Your Money Work for You",
        summary: "Every coin saved should labor for you, earning more coins.",
        insight: "Saved money must be invested to grow. Compound interest is the path to wealth.",
        exercise: "Calculate how much your current savings will grow with compound interest over 20 years.",
        quiz: {
          question: "Saved money should:",
          options: ["Stay safe in cash", "Be invested to earn more", "Be spent on experiences", "Fund emergencies only"],
          correct: 1,
          explanation: "Money sitting idle earns nothing. Invested money multiplies."
        }
      },
      {
        id: "rmb3",
        title: "Guard Your Treasure",
        summary: "Protect your principal. Don't invest in schemes you don't understand.",
        insight: "The first rule is don't lose money. Verify expertise before trusting with your wealth.",
        exercise: "Review your investments. Are any in things you don't fully understand?",
        quiz: {
          question: "Before investing, you must:",
          options: ["Take calculated risks", "Understand what you're investing in", "Trust experts completely", "Diversify blindly"],
          correct: 1,
          explanation: "Consult those with proven expertise. Avoid romantic or emotional investments."
        }
      },
      {
        id: "rmb4",
        title: "Increase Your Ability to Earn",
        summary: "Your greatest asset is your earning power. Invest in skills continuously.",
        insight: "A man's wealth is in his ability to earn. Cultivate skills that command premium payment.",
        exercise: "What skill, if mastered, would most increase your earning potential? Start learning it.",
        quiz: {
          question: "The most valuable investment is:",
          options: ["Real estate", "Stocks", "Your own skills and earning ability", "Gold"],
          correct: 2,
          explanation: "Skills generate income for life. Other investments can be lost."
        }
      },
      {
        id: "rmb5",
        title: "Ensure a Future Income",
        summary: "Plan for when you cannot work. Build income streams that don't require your labor.",
        insight: "The wise man builds for old age and protection of family. Passive income is true wealth.",
        exercise: "What income sources will you have when you stop working? Start building at least one.",
        quiz: {
          question: "True wealth means:",
          options: ["Having lots of cash", "Income that flows without your active work", "High salary", "Low expenses"],
          correct: 1,
          explanation: "Passive income continues when you can't. That's real financial security."
        }
      }
    ]
  },
  richDadPoorDad: {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    color: "green",
    icon: "piggy-bank",
    coreConcepts: [
      {
        id: "rdpd1",
        title: "Assets vs Liabilities",
        summary: "Assets put money in your pocket. Liabilities take money out.",
        insight: "The rich buy assets. The poor and middle class buy liabilities they think are assets.",
        exercise: "List everything you own. Does it put money IN or TAKE money OUT?",
        quiz: {
          question: "An asset is something that:",
          options: ["Has value", "Puts money in your pocket", "You own", "Appreciates over time"],
          correct: 1,
          explanation: "Simple definition: Assets put money in your pocket. Period."
        }
      },
      {
        id: "rdpd2",
        title: "The Rat Race",
        summary: "Working for money to pay bills creates a cycle with no exit.",
        insight: "More income leads to more lifestyle expenses leads to needing more income. It's a trap.",
        exercise: "If your income doubled, what would change? If 'spending more'—you're in the rat race.",
        quiz: {
          question: "The 'rat race' describes:",
          options: ["Competitive careers", "Working for money that goes to expenses in an endless cycle", "Fast-paced lifestyles", "Corporate politics"],
          correct: 1,
          explanation: "Earn-spend-earn-more-spend-more keeps you dependent on your job forever."
        }
      },
      {
        id: "rdpd3",
        title: "Mind Your Own Business",
        summary: "Keep your day job, but build your asset column on the side.",
        insight: "Your profession is how you make money. Your business is your asset portfolio.",
        exercise: "What asset can you start building outside your job? Real estate? Stocks? A side business?",
        quiz: {
          question: "'Mind your own business' means:",
          options: ["Don't gossip", "Focus on building assets alongside your job", "Start a company", "Ignore others"],
          correct: 1,
          explanation: "Your business is your personal balance sheet—especially the asset column."
        }
      },
      {
        id: "rdpd4",
        title: "Work to Learn, Not to Earn",
        summary: "Early in life, prioritize learning over earning. Skills compound.",
        insight: "Take jobs that teach skills: sales, marketing, management. Short-term sacrifice for long-term gain.",
        exercise: "What job would teach you the most, regardless of pay? Consider it.",
        quiz: {
          question: "Young people should prioritize:",
          options: ["Highest paying job", "Learning valuable skills", "Job security", "Work-life balance"],
          correct: 1,
          explanation: "Skills acquired young compound for decades. Optimize for learning early."
        }
      },
      {
        id: "rdpd5",
        title: "The Power of Corporations",
        summary: "The rich use corporations to earn, spend, then pay taxes. Others pay taxes first.",
        insight: "Understanding tax law and corporate structures legally keeps more money working for you.",
        exercise: "Consult about whether your situation warrants incorporating. Understand the math.",
        quiz: {
          question: "Corporations are advantageous because:",
          options: ["They're prestigious", "They enable legal tax optimization", "They're required for business", "They're easy to manage"],
          correct: 1,
          explanation: "Corporations earn and spend before taxes. Employees pay taxes before spending."
        }
      }
    ]
  },
  taxFreeWealth: {
    title: "Tax-Free Wealth",
    author: "Tom Wheelwright",
    color: "emerald",
    icon: "receipt",
    coreConcepts: [
      {
        id: "tfw1",
        title: "Taxes Are Your Biggest Expense",
        summary: "Most people pay 30-50% in taxes. Reducing taxes is the biggest lever.",
        insight: "Every dollar saved in taxes is a dollar earned. Tax planning is wealth building.",
        exercise: "Calculate your total tax rate (income, payroll, property, sales). It's likely higher than you think.",
        quiz: {
          question: "The average person's biggest expense is:",
          options: ["Housing", "Food", "Taxes", "Transportation"],
          correct: 2,
          explanation: "Combined taxes often exceed 30-50% of income. It's the biggest expense."
        }
      },
      {
        id: "tfw2",
        title: "Tax Law Rewards Behavior",
        summary: "Governments use taxes to encourage certain activities. Do what they want, pay less.",
        insight: "Tax incentives exist for: creating jobs, providing housing, producing energy, growing food.",
        exercise: "Research one tax incentive that aligns with your financial goals.",
        quiz: {
          question: "Tax incentives exist because:",
          options: ["Loopholes in the law", "Government wants to encourage specific economic activities", "Rich people lobbied", "Random historical reasons"],
          correct: 1,
          explanation: "Tax law is a toolbox for economic policy. Incentives encourage desired behaviors."
        }
      },
      {
        id: "tfw3",
        title: "Business Owners Have More Deductions",
        summary: "Employees pay taxes, then live. Business owners live, then pay taxes on what's left.",
        insight: "Legitimate business expenses reduce taxable income. The tax code favors business owners.",
        exercise: "List expenses that could become business deductions if you started a side business.",
        quiz: {
          question: "Business owners pay less tax because:",
          options: ["They cheat", "Business expenses reduce taxable income before taxes are calculated", "They earn less", "They work harder"],
          correct: 1,
          explanation: "Business owners deduct legitimate expenses first, paying taxes only on profit."
        }
      },
      {
        id: "tfw4",
        title: "Real Estate Tax Advantages",
        summary: "Depreciation, 1031 exchanges, and deductions make real estate powerfully tax-efficient.",
        insight: "You can own property, benefit from appreciation, and show paper losses through depreciation.",
        exercise: "Learn what depreciation is and how it reduces taxes on real estate income.",
        quiz: {
          question: "Real estate depreciation allows you to:",
          options: ["Pay less property tax", "Show paper losses while making real income", "Avoid capital gains", "Deduct repairs"],
          correct: 1,
          explanation: "Depreciation is a non-cash deduction that reduces taxable income on paper."
        }
      },
      {
        id: "tfw5",
        title: "Build Your Tax Team",
        summary: "A good CPA and tax attorney often save more than they cost.",
        insight: "Tax planning is complex. Professionals find savings you'd miss and avoid costly mistakes.",
        exercise: "If you don't have a proactive tax advisor, interview three this month.",
        quiz: {
          question: "A tax advisor's value comes from:",
          options: ["Filing returns", "Proactively finding legal ways to reduce taxes", "Audit protection", "Bookkeeping"],
          correct: 1,
          explanation: "Proactive planning finds opportunities. Reactive filing misses them."
        }
      }
    ]
  },
  buyThenBuild: {
    title: "Buy Then Build",
    author: "Walker Deibel",
    color: "blue",
    icon: "building",
    coreConcepts: [
      {
        id: "btb1",
        title: "Acquisition vs Startup",
        summary: "Buying an existing business has a 95% success rate vs. 25% for startups.",
        insight: "Startups fail mostly. Acquisitions come with customers, cash flow, and proven models.",
        exercise: "Instead of your next startup idea, research businesses for sale in that industry.",
        quiz: {
          question: "Acquiring a business vs starting one has:",
          options: ["Similar success rates", "Much higher success rate", "Lower returns", "More risk"],
          correct: 1,
          explanation: "Acquisitions have 95%+ success rate vs ~25% for startups."
        }
      },
      {
        id: "btb2",
        title: "Search Fund Model",
        summary: "Raise money to search, then more money to buy. Earn massive equity for finding the deal.",
        insight: "Search funds let you acquire a business with little of your own capital and gain 25%+ equity.",
        exercise: "Research the search fund model. Who funds searchers and why?",
        quiz: {
          question: "A search fund allows you to:",
          options: ["Start a business cheaply", "Acquire a business and earn major equity with limited capital", "Find a job", "Raise startup money"],
          correct: 1,
          explanation: "Search funds finance the search, then the acquisition, giving the searcher significant equity."
        }
      },
      {
        id: "btb3",
        title: "SBA Loans for Acquisition",
        summary: "SBA 7(a) loans can finance up to 90% of a business acquisition.",
        insight: "You can buy a $1M business with ~$100K down. The business pays the loan.",
        exercise: "Learn SBA 7(a) requirements. How much business could you buy with your capital?",
        quiz: {
          question: "SBA loans for acquisition can cover:",
          options: ["Up to 50%", "Up to 70%", "Up to 90%", "100%"],
          correct: 2,
          explanation: "SBA 7(a) loans can finance up to 90% of an acquisition for qualified buyers."
        }
      },
      {
        id: "btb4",
        title: "Due Diligence Essentials",
        summary: "Verify financials, customers, operations, and reason for sale before buying.",
        insight: "Quality of earnings analysis reveals if profits are real and sustainable.",
        exercise: "Create a due diligence checklist for your target acquisition type.",
        quiz: {
          question: "Due diligence primarily aims to:",
          options: ["Negotiate price down", "Verify that stated financials and operations are real", "Meet the owner", "Understand the industry"],
          correct: 1,
          explanation: "Due diligence confirms that what you're buying matches what's represented."
        }
      },
      {
        id: "btb5",
        title: "Post-Acquisition Value Creation",
        summary: "Most value comes AFTER acquisition through operational improvements.",
        insight: "Small improvements in sales, margins, or efficiency compound into massive value gains.",
        exercise: "For any business you evaluate, list 3 improvements you could make post-acquisition.",
        quiz: {
          question: "Post-acquisition value creation comes from:",
          options: ["Waiting for growth", "Operational improvements by the new owner", "Market conditions", "Better branding"],
          correct: 1,
          explanation: "Active management improvements—not passive holding—drive returns."
        }
      }
    ]
  },
  storyBrand: {
    title: "Building a StoryBrand",
    author: "Donald Miller",
    color: "rose",
    icon: "scroll",
    coreConcepts: [
      {
        id: "sb1",
        title: "The Customer is the Hero",
        summary: "Your customer is the hero of the story. Your brand is the guide.",
        insight: "Most businesses position themselves as the hero. Wrong. You're Yoda, not Luke.",
        exercise: "Rewrite your marketing. Make the customer the hero; your brand the guide who helps them win.",
        quiz: {
          question: "In your brand's story, the customer should be:",
          options: ["The audience", "The hero of the story", "The sidekick", "The villain"],
          correct: 1,
          explanation: "Customers care about their story. Be the guide who helps them succeed."
        }
      },
      {
        id: "sb2",
        title: "The SB7 Framework",
        summary: "Hero has a problem, meets a guide, gets a plan, takes action, avoids failure, achieves success.",
        insight: "This is every great story. Use it as your marketing framework.",
        exercise: "Map your customer's journey through all 7 elements of the StoryBrand framework.",
        quiz: {
          question: "The StoryBrand framework follows:",
          options: ["5 steps", "Hero, problem, guide, plan, action, failure, success", "3 acts", "AIDA model"],
          correct: 1,
          explanation: "Seven elements that mirror classic storytelling structure."
        }
      },
      {
        id: "sb3",
        title: "Clarify Your Message",
        summary: "If you confuse, you lose. Simplify until a caveman could understand.",
        insight: "Customers don't buy the best product. They buy the one they understand fastest.",
        exercise: "Explain your offering in one sentence that a 10-year-old would understand.",
        quiz: {
          question: "The main reason marketing fails is:",
          options: ["Wrong audience", "The message is too complicated", "Bad timing", "Low budget"],
          correct: 1,
          explanation: "Confusion kills sales. Clarity sells."
        }
      },
      {
        id: "sb4",
        title: "Address External, Internal, and Philosophical Problems",
        summary: "Customers have surface problems (external), feelings (internal), and beliefs (philosophical).",
        insight: "External: 'My house is dirty.' Internal: 'I'm embarrassed.' Philosophical: 'I deserve a clean home.'",
        exercise: "Identify all three problem levels for your customer. Address all of them.",
        quiz: {
          question: "A customer's 'internal problem' is:",
          options: ["The surface-level issue", "How the problem makes them feel", "Why it's wrong", "The solution"],
          correct: 1,
          explanation: "Internal problems are the emotions created by external problems."
        }
      },
      {
        id: "sb5",
        title: "Call to Action",
        summary: "Be direct: 'Buy Now.' 'Schedule a Call.' Vague CTAs lose sales.",
        insight: "Customers need clear direction. One primary CTA, prominent and direct.",
        exercise: "Review your website. Is there ONE clear primary call to action?",
        quiz: {
          question: "An effective call to action is:",
          options: ["Subtle and soft", "Direct and clear: 'Buy Now'", "Multiple options", "At the bottom only"],
          correct: 1,
          explanation: "Direct CTAs convert better. Don't make customers guess what to do."
        }
      }
    ]
  },
  crushIt: {
    title: "Crush It!",
    author: "Gary Vaynerchuk",
    color: "violet",
    icon: "flame",
    coreConcepts: [
      {
        id: "ci1",
        title: "Passion + Hustle = Success",
        summary: "Do what you love AND outwork everyone. Passion alone isn't enough.",
        insight: "Passion gives you energy. Hustle turns that energy into results.",
        exercise: "What are you passionate about that you could discuss for 50 hours without notes?",
        quiz: {
          question: "According to Gary Vee, success requires:",
          options: ["Just passion", "Just hard work", "Passion PLUS extreme hustle", "Talent"],
          correct: 2,
          explanation: "Passion without execution is a hobby. Combine them."
        }
      },
      {
        id: "ci2",
        title: "Personal Brand is Everything",
        summary: "YOU are the brand. Build your name, not just your company's.",
        insight: "Companies come and go. Your personal brand follows you everywhere, forever.",
        exercise: "Google yourself. What comes up? Is that the brand you want?",
        quiz: {
          question: "Why is personal brand crucial?",
          options: ["Fame is fun", "Your reputation is your most portable and lasting asset", "Social media popularity", "Job hunting"],
          correct: 1,
          explanation: "Personal brand = long-term reputation that opens doors everywhere."
        }
      },
      {
        id: "ci3",
        title: "Document, Don't Create",
        summary: "Don't overthink content. Document your journey; that IS the content.",
        insight: "You don't need to be an expert. Sharing your learning process provides value.",
        exercise: "Record yourself learning or working for a week. That's your content.",
        quiz: {
          question: "'Document, don't create' means:",
          options: ["Write more documents", "Share your journey instead of crafting perfect content", "Be a journalist", "Avoid creativity"],
          correct: 1,
          explanation: "Authentic documentation beats polished content that never ships."
        }
      },
      {
        id: "ci4",
        title: "Platform Agility",
        summary: "Master the current platform. When it shifts, shift with it.",
        insight: "Gary went from email to YouTube to Twitter to Facebook. Platform-agnostic principles win.",
        exercise: "Where does YOUR audience spend time right now? Are you there?",
        quiz: {
          question: "Platform agility means:",
          options: ["Being on every platform", "Going where your audience is, even when platforms change", "Ignoring social media", "Focusing on one platform forever"],
          correct: 1,
          explanation: "Follow attention. Platforms change; the audience's attention is what matters."
        }
      },
      {
        id: "ci5",
        title: "Patience and Speed",
        summary: "Be patient for results, but urgent in your daily work.",
        insight: "Macro patience (think years), micro speed (act today). Both simultaneously.",
        exercise: "Set a 5-year vision. Now list what you'll do in the next 24 hours toward it.",
        quiz: {
          question: "The success timeline is:",
          options: ["Quick results expected", "Patient long-term, aggressive short-term execution", "Slow and steady only", "Depends on luck"],
          correct: 1,
          explanation: "Years of daily hustle. Patient about outcomes, relentless about effort."
        }
      }
    ]
  },

  // ============================================
  // MIND & PERFORMANCE BOOKS
  // ============================================

  dailyStoic: {
    title: "The Daily Stoic",
    author: "Ryan Holiday",
    color: "stone",
    icon: "book",
    coreConcepts: [
      {
        id: "ds1",
        title: "Control What You Can",
        summary: "Energy spent on things outside your control is wasted. Focus only on your actions.",
        insight: "Most anxiety comes from trying to control the uncontrollable. Let it go.",
        exercise: "List current worries. Separate into 'can control' and 'cannot control.' Drop the second list.",
        quiz: {
          question: "Stoic practice begins with:",
          options: ["Positive thinking", "Distinguishing what you control from what you don't", "Meditation", "Reading philosophy"],
          correct: 1,
          explanation: "The dichotomy of control is the foundation of Stoic practice."
        }
      },
      {
        id: "ds2",
        title: "Morning Preparation",
        summary: "Before each day, prepare for difficult people and situations you'll encounter.",
        insight: "Marcus Aurelius started each morning expecting obstacles. Nothing then surprised him.",
        exercise: "Each morning, list 3 challenges you might face and how you'll respond well.",
        quiz: {
          question: "Morning preparation helps by:",
          options: ["Reducing positive thinking", "Pre-planning responses so nothing catches you off-guard", "Creating stress", "Predicting the future"],
          correct: 1,
          explanation: "Pre-thinking challenges means responding thoughtfully, not reactively."
        }
      },
      {
        id: "ds3",
        title: "Evening Reflection",
        summary: "Review your day: What went well? What could improve? Did you live by your values?",
        insight: "Seneca reviewed every evening. This habit builds self-awareness and continuous improvement.",
        exercise: "Before sleep, ask: What did I do well? What could I do better? Was I wise?",
        quiz: {
          question: "Daily evening reflection builds:",
          options: ["Guilt", "Self-awareness and continuous improvement", "Perfection", "Regret"],
          correct: 1,
          explanation: "Reflection without judgment identifies patterns and opportunities for growth."
        }
      },
      {
        id: "ds4",
        title: "The View from Above",
        summary: "Zoom out. See your problems from cosmic perspective. Most worries are trivial.",
        insight: "From space, your drama is invisible. This perspective frees you from petty concerns.",
        exercise: "Imagine viewing your current problem from 10,000 feet, then from space. How does it change?",
        quiz: {
          question: "The 'view from above' technique:",
          options: ["Is escapism", "Provides perspective by imagining problems from distance", "Ignores reality", "Is meditation"],
          correct: 1,
          explanation: "Distance reveals how small most problems are in the grand scheme."
        }
      },
      {
        id: "ds5",
        title: "Voluntary Discomfort",
        summary: "Periodically practice hardship: cold, fasting, sleeping rough. Build resilience.",
        insight: "We suffer more in imagination than reality. Practice hardship and fears shrink.",
        exercise: "Skip a meal. Take a cold shower. Sleep on the floor. Practice what you fear.",
        quiz: {
          question: "Voluntary discomfort helps by:",
          options: ["Building physical toughness", "Proving fears are less terrible than imagined", "Punishing yourself", "Showing off"],
          correct: 1,
          explanation: "Practicing hardship reveals it's manageable. Fear loses its power."
        }
      }
    ]
  },
  thinkingInBets: {
    title: "Thinking in Bets",
    author: "Annie Duke",
    color: "red",
    icon: "dice",
    coreConcepts: [
      {
        id: "tib1",
        title: "Resulting",
        summary: "We judge decisions by outcomes, not process. This is backwards.",
        insight: "Good decisions can have bad outcomes (bad luck). Bad decisions can have good outcomes (good luck).",
        exercise: "Recall a bad outcome. Was the process actually flawed, or did you get unlucky?",
        quiz: {
          question: "Judging decision quality by outcomes is wrong because:",
          options: ["Outcomes are what matter", "Good decisions can still have bad luck", "Bad decisions are rare", "Hindsight is perfect"],
          correct: 1,
          explanation: "Resulting confuses luck with skill. Judge the process, not the result."
        }
      },
      {
        id: "tib2",
        title: "All Decisions Are Bets",
        summary: "Every decision is a bet under uncertainty. Act accordingly.",
        insight: "You're betting time, money, and opportunities. Think in probabilities, not certainties.",
        exercise: "For your next decision, assign probability percentages to possible outcomes.",
        quiz: {
          question: "Treating decisions as bets helps because:",
          options: ["Life is gambling", "It forces explicit probability thinking", "It's fun", "You might win"],
          correct: 1,
          explanation: "Bet thinking makes uncertainties explicit and decisions more rational."
        }
      },
      {
        id: "tib3",
        title: "Motivated Reasoning",
        summary: "We believe what we want to believe and find evidence to support it.",
        insight: "Winning creates 'I'm skilled' narrative. Losing creates 'bad luck' narrative. Both may be wrong.",
        exercise: "Find the argument against your current belief. Steelman it.",
        quiz: {
          question: "Motivated reasoning means:",
          options: ["Being motivated", "Finding evidence that supports what we want to believe", "Logical thinking", "Being reasonable"],
          correct: 1,
          explanation: "We unconsciously filter evidence to confirm our preferences."
        }
      },
      {
        id: "tib4",
        title: "The Buddy System",
        summary: "Find people who will honestly challenge your thinking.",
        insight: "Group with others committed to truth-seeking, not agreement. Diverse views improve decisions.",
        exercise: "Identify 2-3 people who will honestly tell you when you're wrong. Engage them.",
        quiz: {
          question: "A truth-seeking group should:",
          options: ["Always agree with you", "Challenge your thinking and call out biases", "Support your views", "Avoid conflict"],
          correct: 1,
          explanation: "The value is in honest challenge, not validation."
        }
      },
      {
        id: "tib5",
        title: "10-10-10",
        summary: "How will you feel about this decision in 10 minutes, 10 months, 10 years?",
        insight: "Time perspective defuses emotional decisions and clarifies long-term consequences.",
        exercise: "Apply 10-10-10 to a current decision you're struggling with.",
        quiz: {
          question: "The 10-10-10 framework helps by:",
          options: ["Counting to 30", "Providing time perspective to overcome emotional decision-making", "Delaying decisions", "Multiplying outcomes"],
          correct: 1,
          explanation: "Multiple time horizons reveal what really matters long-term."
        }
      }
    ]
  },
  powerOfFullEngagement: {
    title: "The Power of Full Engagement",
    author: "Jim Loehr & Tony Schwartz",
    color: "orange",
    icon: "battery-full",
    coreConcepts: [
      {
        id: "pofe1",
        title: "Energy, Not Time",
        summary: "Time is fixed; energy is expandable. Manage energy, not time.",
        insight: "High performers manage physical, emotional, mental, and spiritual energy—not just hours.",
        exercise: "Track your energy levels throughout a day. When are you at peak? When drained?",
        quiz: {
          question: "The key to performance is managing:",
          options: ["Time", "Energy across four dimensions", "Tasks", "Goals"],
          correct: 1,
          explanation: "More time without energy is useless. Energy makes time productive."
        }
      },
      {
        id: "pofe2",
        title: "The Four Energy Sources",
        summary: "Physical, emotional, mental, and spiritual energy each need attention.",
        insight: "Neglecting any dimension eventually drains the others. Balance all four.",
        exercise: "Rate yourself 1-10 in each energy dimension. Which needs immediate attention?",
        quiz: {
          question: "The four energy sources are:",
          options: ["Work, rest, play, sleep", "Physical, emotional, mental, spiritual", "Morning, afternoon, evening, night", "Mind, body, soul, spirit"],
          correct: 1,
          explanation: "Full engagement requires managing all four energy sources."
        }
      },
      {
        id: "pofe3",
        title: "Pulse and Pause",
        summary: "Oscillate between stress and recovery. Both are essential.",
        insight: "Athletes train in intervals, not continuous effort. Apply this to work and life.",
        exercise: "Work in 90-minute focused blocks with deliberate 15-minute recovery breaks.",
        quiz: {
          question: "The oscillation principle means:",
          options: ["Work harder", "Alternate between stress and recovery", "Take more vacation", "Exercise more"],
          correct: 1,
          explanation: "Continuous stress depletes. Recovery is where growth happens."
        }
      },
      {
        id: "pofe4",
        title: "Rituals Over Willpower",
        summary: "Willpower depletes; rituals conserve energy. Build automatic routines.",
        insight: "Top performers rely on rituals, not discipline. Make good behaviors automatic.",
        exercise: "Convert one daily decision into an automatic ritual that requires no willpower.",
        quiz: {
          question: "Rituals are better than willpower because:",
          options: ["They're spiritual", "They automate behavior, conserving decision energy", "They're more fun", "Everyone does them"],
          correct: 1,
          explanation: "Rituals run on autopilot, freeing energy for decisions that matter."
        }
      },
      {
        id: "pofe5",
        title: "Purpose Fuels Energy",
        summary: "Connected to meaningful purpose, energy expands. Without purpose, energy depletes.",
        insight: "Purpose is the ultimate source of sustainable energy. Why > how much.",
        exercise: "Connect your daily tasks to your deepest values. How does today serve your purpose?",
        quiz: {
          question: "Purpose affects energy by:",
          options: ["It doesn't", "Providing unlimited motivation that sustains effort", "Causing burnout", "Being separate from work"],
          correct: 1,
          explanation: "Meaningful work generates energy. Meaningless work drains it."
        }
      }
    ]
  },
  peakPerformance: {
    title: "Peak Performance",
    author: "Brad Stulberg & Steve Magness",
    color: "sky",
    icon: "mountain",
    coreConcepts: [
      {
        id: "pp1",
        title: "Stress + Rest = Growth",
        summary: "Growth requires challenging stress followed by quality recovery.",
        insight: "Muscles grow during rest, not during lifting. Same for mental performance.",
        exercise: "After your next intense work block, take an equal recovery period. No screens.",
        quiz: {
          question: "The growth equation is:",
          options: ["More stress = more growth", "Stress + Rest = Growth", "Less stress = less problems", "Work harder"],
          correct: 1,
          explanation: "Without rest, stress leads to injury and burnout, not growth."
        }
      },
      {
        id: "pp2",
        title: "Just-Manageable Challenges",
        summary: "Optimal growth happens at the edge: not too easy, not impossible.",
        insight: "4% beyond your current ability is the sweet spot for flow and development.",
        exercise: "Is your current challenge too easy or impossible? Adjust to just-manageable.",
        quiz: {
          question: "Just-manageable challenges are:",
          options: ["Comfortable", "Slightly beyond current ability—not too easy, not impossible", "Impossible", "Stressful"],
          correct: 1,
          explanation: "Challenge that stretches but doesn't break promotes optimal growth."
        }
      },
      {
        id: "pp3",
        title: "Minimize Distractions",
        summary: "Deep work requires eliminating distraction, not managing it.",
        insight: "Multitasking is a myth. Single-tasking on hard problems drives breakthroughs.",
        exercise: "For your most important task today, eliminate ALL distractions. Phone off. Door closed.",
        quiz: {
          question: "During peak performance work, distractions should be:",
          options: ["Managed", "Completely eliminated", "Ignored", "Scheduled"],
          correct: 1,
          explanation: "Any distraction breaks deep focus. Elimination beats management."
        }
      },
      {
        id: "pp4",
        title: "Purpose as Performance Enhancer",
        summary: "Purpose-driven effort sustains longer and achieves more than ego-driven effort.",
        insight: "When the 'why' is strong enough, you'll figure out the 'how.' Purpose provides grit.",
        exercise: "Connect your hardest task to a purpose beyond yourself. Why does it matter to others?",
        quiz: {
          question: "Purpose enhances performance by:",
          options: ["Making work easier", "Providing deeper motivation that sustains effort through difficulty", "Reducing stress", "Improving technique"],
          correct: 1,
          explanation: "Self-transcending purpose enables endurance that ego cannot."
        }
      },
      {
        id: "pp5",
        title: "Design Your Environment",
        summary: "Environment shapes behavior more than willpower. Design for success.",
        insight: "Don't rely on motivation. Make the desired behavior the easy default.",
        exercise: "Redesign one space to make the right behavior automatic and the wrong behavior hard.",
        quiz: {
          question: "Environment design works because:",
          options: ["It's trendy", "External cues influence behavior more than internal motivation", "Offices are inefficient", "People are lazy"],
          correct: 1,
          explanation: "Designing environment removes the need for constant willpower."
        }
      }
    ]
  },
  cantHurtMe: {
    title: "Can't Hurt Me",
    author: "David Goggins",
    color: "gray",
    icon: "medal",
    coreConcepts: [
      {
        id: "chm1",
        title: "The 40% Rule",
        summary: "When your mind says you're done, you're only at 40% of your capacity.",
        insight: "The brain protects you with quitting signals. You have massive untapped reserves.",
        exercise: "Next time you want to quit, push 5% further. Repeat. Discover your real limits.",
        quiz: {
          question: "The 40% rule states that when you feel done:",
          options: ["You should stop", "You're only at 40% of true capacity", "You've reached your limit", "It's time for a break"],
          correct: 1,
          explanation: "The mind quits before the body. You have vast reserves beyond the quit signal."
        }
      },
      {
        id: "chm2",
        title: "Accountability Mirror",
        summary: "Face brutal truths about yourself. Post goals on your mirror. No excuses.",
        insight: "Write Post-Its on your mirror with your flaws and goals. Face them daily.",
        exercise: "Put 3 Post-Its on your bathroom mirror: 1 truth you're avoiding, 2 goals you'll achieve.",
        quiz: {
          question: "The accountability mirror forces you to:",
          options: ["Look at yourself", "Confront uncomfortable truths and commitments daily", "Feel bad", "Wake up earlier"],
          correct: 1,
          explanation: "Daily confrontation with truth prevents comfortable self-deception."
        }
      },
      {
        id: "chm3",
        title: "Callous Your Mind",
        summary: "Repeatedly do hard things to build mental calluses against suffering.",
        insight: "Physical and mental calluses form the same way: friction and recovery. Seek discomfort.",
        exercise: "Choose something you hate doing. Do it every day for 30 days. Build the callus.",
        quiz: {
          question: "Callusing the mind means:",
          options: ["Becoming insensitive", "Building tolerance to discomfort through repeated exposure", "Ignoring pain", "Meditation"],
          correct: 1,
          explanation: "Repeated exposure to discomfort builds mental toughness."
        }
      },
      {
        id: "chm4",
        title: "Taking Souls",
        summary: "When competing, use others' doubt and underestimation as fuel.",
        insight: "When people doubt you, let it fuel you. Prove them wrong. Take their souls.",
        exercise: "Think of someone who doubted you. Use that memory as motivation for your hardest workout.",
        quiz: {
          question: "'Taking souls' means:",
          options: ["Being aggressive", "Using others' doubt as motivation to exceed their expectations", "Competing unfairly", "Intimidation"],
          correct: 1,
          explanation: "Transform others' underestimation into fuel for proving them wrong."
        }
      },
      {
        id: "chm5",
        title: "The Cookie Jar",
        summary: "Keep a mental jar of past victories to draw strength from in hard moments.",
        insight: "When suffering, remember what you've already survived. You have evidence of strength.",
        exercise: "List 10 hard things you've overcome. That's your cookie jar. Access it when struggling.",
        quiz: {
          question: "The cookie jar is:",
          options: ["Rewards for hard work", "A mental bank of past achievements to access during struggles", "Comfort food", "A goal tracker"],
          correct: 1,
          explanation: "Past victories prove your capability. Remember them when doubting yourself."
        }
      }
    ]
  },

  // ============================================
  // SOCIAL & RELATIONSHIPS BOOKS
  // ============================================

  statusGame: {
    title: "The Status Game",
    author: "Will Storr",
    color: "purple",
    icon: "crown",
    coreConcepts: [
      {
        id: "sg1",
        title: "Status is a Fundamental Drive",
        summary: "Humans are hardwired to seek status. It affects health, happiness, and longevity.",
        insight: "Low status feels like pain. High status feels like drugs. This drive is ancient and powerful.",
        exercise: "Notice when you're seeking status today. What games are you playing?",
        quiz: {
          question: "Status seeking is:",
          options: ["A modern problem", "A fundamental human drive that affects wellbeing", "Vanity", "Optional"],
          correct: 1,
          explanation: "Status pursuit is evolutionarily hardwired and affects physical and mental health."
        }
      },
      {
        id: "sg2",
        title: "Three Status Games",
        summary: "Dominance (fear), Virtue (morality), and Success (achievement) games.",
        insight: "Different arenas play different games. Know which game you're in and how to win it.",
        exercise: "Identify which status game dominates your workplace, friend group, and online spaces.",
        quiz: {
          question: "The three types of status games are:",
          options: ["Rich, famous, powerful", "Dominance, virtue, and success", "Physical, social, economic", "Online, offline, professional"],
          correct: 1,
          explanation: "Status can come from intimidation, moral standing, or achievement."
        }
      },
      {
        id: "sg3",
        title: "Status and Belonging",
        summary: "We seek status within groups we belong to. Identity and status are linked.",
        insight: "Changing groups changes status criteria. Find groups where your strengths are valued.",
        exercise: "Are you in groups that value what you're good at? If not, why?",
        quiz: {
          question: "Group identity matters for status because:",
          options: ["Groups are powerful", "Different groups value different things—find where you're valued", "Safety in numbers", "Status is relative"],
          correct: 1,
          explanation: "Your status depends on the game being played. Choose your arena wisely."
        }
      },
      {
        id: "sg4",
        title: "Status and Conflict",
        summary: "Most human conflict is fundamentally about status.",
        insight: "Arguments that seem about ideas are often about status. Recognize this dynamic.",
        exercise: "In your next disagreement, ask: Is this really about ideas or about status?",
        quiz: {
          question: "Much human conflict is actually about:",
          options: ["Resources", "Ideas", "Status and feeling respected", "Survival"],
          correct: 2,
          explanation: "Beneath many surface conflicts lies the deeper issue of status and recognition."
        }
      },
      {
        id: "sg5",
        title: "Healthy Status Games",
        summary: "Play games with clear rules, positive-sum outcomes, and genuine merit.",
        insight: "Not all games are equal. Some build, some destroy. Choose games wisely.",
        exercise: "Evaluate your status games. Are they positive-sum or zero-sum? Healthy or toxic?",
        quiz: {
          question: "Healthy status games feature:",
          options: ["High stakes", "Clear rules, positive-sum outcomes, genuine contribution", "Competition", "Winners and losers"],
          correct: 1,
          explanation: "Good games elevate everyone. Bad games require others to lose for you to win."
        }
      }
    ]
  },
  impro: {
    title: "Impro",
    author: "Keith Johnstone",
    color: "yellow",
    icon: "theater",
    coreConcepts: [
      {
        id: "imp1",
        title: "Status Transactions",
        summary: "Every interaction involves status exchanges. Notice who raises and lowers.",
        insight: "Status isn't fixed—it's negotiated moment by moment through tiny behaviors.",
        exercise: "Watch any conversation. Who's raising status? Who's lowering? Through what behaviors?",
        quiz: {
          question: "Status in interactions is:",
          options: ["Fixed by position", "Constantly negotiated through behavior", "Based on wealth", "Unimportant"],
          correct: 1,
          explanation: "Status is fluid and expressed through eye contact, posture, speech patterns, etc."
        }
      },
      {
        id: "imp2",
        title: "High Status vs Low Status Behavior",
        summary: "High: stillness, slow speech, eye contact. Low: fidgeting, fast speech, looking away.",
        insight: "Status is readable in body language before a word is spoken.",
        exercise: "Practice high-status behaviors: stillness, measured speech, relaxed eye contact.",
        quiz: {
          question: "High status behavior typically includes:",
          options: ["Fast movement and speech", "Stillness, slow speech, and steady eye contact", "Loud voice", "Dominant posture only"],
          correct: 1,
          explanation: "Stillness and control signal confidence. Nervous energy signals low status."
        }
      },
      {
        id: "imp3",
        title: "Status Flexibility",
        summary: "Masters can play any status. Being stuck in one status is limiting.",
        insight: "Sometimes low status is strategic. Sometimes high status alienates. Flexibility wins.",
        exercise: "Deliberately play low status in one interaction today, high in another. Notice effects.",
        quiz: {
          question: "Status flexibility is valuable because:",
          options: ["It's manipulative", "Different situations call for different status approaches", "Low status is always bad", "High status always wins"],
          correct: 1,
          explanation: "Matching status to context creates better outcomes than rigid status."
        }
      },
      {
        id: "imp4",
        title: "Yes, And...",
        summary: "Accept offers and build on them. Blocking kills scenes and conversations.",
        insight: "'Yes, and...' creates forward momentum. 'No, but...' stops everything cold.",
        exercise: "For one day, respond to every offer with 'Yes, and...' Never block.",
        quiz: {
          question: "The 'Yes, and...' principle means:",
          options: ["Always agree", "Accept what's offered and build on it", "Never say no", "Being passive"],
          correct: 1,
          explanation: "Accept reality as presented, then add to it. Don't negate or block."
        }
      },
      {
        id: "imp5",
        title: "Spontaneity and Censorship",
        summary: "Our first impulse is usually right. Self-censorship kills creativity.",
        insight: "We're trained to censor obvious answers. But obvious is often brilliant. Trust first instincts.",
        exercise: "When asked a question, say your first thought without censoring. Notice what emerges.",
        quiz: {
          question: "Self-censorship blocks creativity because:",
          options: ["First thoughts are always best", "We filter out obvious ideas that might actually be good", "Thinking is overrated", "Spontaneity is superior"],
          correct: 1,
          explanation: "The internal censor blocks obvious (often brilliant) ideas before they emerge."
        }
      }
    ]
  },
  extremeOwnership: {
    title: "Extreme Ownership",
    author: "Jocko Willink & Leif Babin",
    color: "slate",
    icon: "shield",
    coreConcepts: [
      {
        id: "eo1",
        title: "Extreme Ownership",
        summary: "Leaders take complete ownership. No excuses, no blaming, no bad teams—only bad leaders.",
        insight: "When you own everything in your world, you can change everything in your world.",
        exercise: "For every failure this week, ask: What could I have done to prevent this?",
        quiz: {
          question: "Extreme ownership means:",
          options: ["Micromanaging", "Taking complete responsibility for all outcomes", "Doing everything yourself", "Never delegating"],
          correct: 1,
          explanation: "Own everything. Your team's failure is your failure. Period."
        }
      },
      {
        id: "eo2",
        title: "No Bad Teams, Only Bad Leaders",
        summary: "Team performance reflects leadership. A leader change transforms team results.",
        insight: "The same team under different leadership performs differently. Leadership is the variable.",
        exercise: "Where is your team underperforming? What leadership change could you make?",
        quiz: {
          question: "When teams underperform, the cause is usually:",
          options: ["Bad team members", "Poor leadership", "Lack of resources", "External factors"],
          correct: 1,
          explanation: "Leadership is the X-factor. Different leaders get different results from the same team."
        }
      },
      {
        id: "eo3",
        title: "Decentralized Command",
        summary: "Give junior leaders ownership. They can't execute if they need approval for everything.",
        insight: "Leaders must enable teams to make decisions. This requires clear intent and trust.",
        exercise: "Identify one decision you make that your team could make. Delegate it fully.",
        quiz: {
          question: "Decentralized command requires:",
          options: ["Letting go of control", "Clear intent + trusting teams to execute", "Removing leaders", "Democracy"],
          correct: 1,
          explanation: "Teams need commander's intent, then freedom to act. Not micromanagement."
        }
      },
      {
        id: "eo4",
        title: "Prioritize and Execute",
        summary: "When overwhelmed, identify highest priority, execute, move to next. Don't multitask chaos.",
        insight: "In crisis, the team that can prioritize and methodically execute wins.",
        exercise: "When overwhelmed, stop. List priorities 1-3. Execute #1 completely before touching #2.",
        quiz: {
          question: "In chaotic situations, leaders should:",
          options: ["Handle everything simultaneously", "Prioritize, then execute one thing at a time", "Delegate everything", "Wait for clarity"],
          correct: 1,
          explanation: "Chaos demands ruthless prioritization and sequential execution."
        }
      },
      {
        id: "eo5",
        title: "Leading Up and Down",
        summary: "Leadership isn't just downward. You must influence up and sideways too.",
        insight: "If your boss doesn't support your mission, you haven't done your job leading up.",
        exercise: "What does your boss need to know or hear to support your initiative? Provide it.",
        quiz: {
          question: "Leading up means:",
          options: ["Insubordination", "Influencing your superiors to support the mission", "Going over heads", "Complaining"],
          correct: 1,
          explanation: "Leaders take responsibility for getting support from above, not just directing below."
        }
      }
    ]
  },
  leadersEatLast: {
    title: "Leaders Eat Last",
    author: "Simon Sinek",
    color: "navy",
    icon: "users",
    coreConcepts: [
      {
        id: "lel1",
        title: "The Circle of Safety",
        summary: "Great leaders create safety for their teams. Safety enables risk-taking and innovation.",
        insight: "When people feel safe, they focus energy outward. When threatened, energy goes to self-protection.",
        exercise: "Does your team feel safe enough to admit mistakes? If not, what creates the threat?",
        quiz: {
          question: "The 'circle of safety' means:",
          options: ["Physical security", "Leaders protecting team from external and internal threats", "Risk avoidance", "Job security"],
          correct: 1,
          explanation: "When leaders provide safety, teams can focus on the mission, not politics."
        }
      },
      {
        id: "lel2",
        title: "Biology of Leadership",
        summary: "Leadership triggers chemical responses: endorphins, dopamine, serotonin, oxytocin.",
        insight: "Selfish behaviors trigger cortisol. Trusting environments trigger oxytocin. Chemistry matters.",
        exercise: "What in your leadership triggers trust (oxytocin) vs stress (cortisol) in your team?",
        quiz: {
          question: "Trusting team environments increase:",
          options: ["Cortisol", "Dopamine only", "Oxytocin", "Adrenaline"],
          correct: 2,
          explanation: "Oxytocin is the trust and belonging chemical. Leadership can trigger it."
        }
      },
      {
        id: "lel3",
        title: "Leaders Sacrifice",
        summary: "True leaders eat last. They sacrifice for their people, not the other way around.",
        insight: "Marine officers eat after their troops. This symbolizes leadership: service, not privilege.",
        exercise: "What are you asking your team to sacrifice that you haven't sacrificed first?",
        quiz: {
          question: "The title 'Leaders Eat Last' refers to:",
          options: ["A weight loss strategy", "Leaders prioritizing their team's needs before their own", "Late working hours", "Executive dining"],
          correct: 1,
          explanation: "Leaders serve those they lead. Privilege comes with responsibility to sacrifice."
        }
      },
      {
        id: "lel4",
        title: "The Danger of Abstraction",
        summary: "Distance from consequences enables harmful decisions. Keep leaders close to impact.",
        insight: "When people become numbers, ethical behavior erodes. Maintain human connection.",
        exercise: "Who is affected by your decisions that you never interact with? Change that.",
        quiz: {
          question: "Abstraction in leadership is dangerous because:",
          options: ["It's inefficient", "Distance from consequences reduces ethical decision-making", "People prefer face-to-face", "Meetings are important"],
          correct: 1,
          explanation: "When affected people become abstractions, harmful decisions become easier."
        }
      },
      {
        id: "lel5",
        title: "Long-Term vs Short-Term",
        summary: "Short-term thinking destroys teams. Great leaders sacrifice quarterly gains for lasting strength.",
        insight: "Layoffs during a bad quarter destroy trust forever. Protect people to earn loyalty.",
        exercise: "What short-term pressure is threatening your team's long-term health? Resist it.",
        quiz: {
          question: "Leaders prioritizing short-term results over people:",
          options: ["Are business-savvy", "Destroy trust and long-term performance", "Are sometimes necessary", "Are efficient"],
          correct: 1,
          explanation: "Short-term sacrifice of people creates long-term organizational damage."
        }
      }
    ]
  },
  emotionalIntelligence2: {
    title: "Emotional Intelligence 2.0",
    author: "Travis Bradberry",
    color: "teal",
    icon: "heart",
    coreConcepts: [
      {
        id: "ei1",
        title: "Four EQ Skills",
        summary: "Self-awareness, self-management, social awareness, relationship management.",
        insight: "EQ matters more than IQ for success. And unlike IQ, EQ can be developed.",
        exercise: "Rate yourself 1-10 in each quadrant. Which is your weakest?",
        quiz: {
          question: "The four components of emotional intelligence are:",
          options: ["Think, feel, act, reflect", "Self-awareness, self-management, social awareness, relationship management", "Happy, sad, angry, calm", "Mind, body, spirit, soul"],
          correct: 1,
          explanation: "Two personal skills (self) and two social skills (others) form EQ."
        }
      },
      {
        id: "ei2",
        title: "Self-Awareness",
        summary: "Know your emotions as they happen. Understand your patterns and triggers.",
        insight: "You can't manage what you don't notice. Awareness is the foundation of all EQ.",
        exercise: "Set 3 daily alarms. At each, note: What emotion am I feeling? What triggered it?",
        quiz: {
          question: "Self-awareness in EQ means:",
          options: ["Being confident", "Recognizing your emotions and patterns in real-time", "Knowing your strengths", "Understanding yourself deeply"],
          correct: 1,
          explanation: "Awareness of emotions as they occur is the foundation of emotional intelligence."
        }
      },
      {
        id: "ei3",
        title: "Self-Management",
        summary: "Once aware, choose your response. Don't let emotions dictate behavior.",
        insight: "There's a gap between stimulus and response. Self-management expands that gap.",
        exercise: "When triggered, pause 6 seconds before responding. Let the emotional spike pass.",
        quiz: {
          question: "Self-management involves:",
          options: ["Suppressing emotions", "Choosing responses rather than reacting automatically", "Being emotionless", "Always staying calm"],
          correct: 1,
          explanation: "Not suppression—choice. Feel the emotion, then choose your response."
        }
      },
      {
        id: "ei4",
        title: "Social Awareness",
        summary: "Read others' emotions accurately. Notice what's not said.",
        insight: "Most communication is nonverbal. The ability to read people is a superpower.",
        exercise: "In your next meeting, focus entirely on observing others. What emotions do you notice?",
        quiz: {
          question: "Social awareness is the ability to:",
          options: ["Be popular", "Accurately read others' emotional states", "Make small talk", "Network effectively"],
          correct: 1,
          explanation: "Perceiving what others feel—even when they don't say it—is social awareness."
        }
      },
      {
        id: "ei5",
        title: "Relationship Management",
        summary: "Use awareness to manage interactions. Influence outcomes through emotional skill.",
        insight: "Combining all three skills lets you navigate complex human dynamics effectively.",
        exercise: "Identify a difficult relationship. Apply self-awareness + social awareness. What changes?",
        quiz: {
          question: "Relationship management requires:",
          options: ["Manipulation", "Self-awareness + social awareness applied to interactions", "Being liked", "Conflict avoidance"],
          correct: 1,
          explanation: "Relationship management builds on the other three skills to handle interpersonal dynamics."
        }
      }
    ]
  },
  nonviolentCommunication: {
    title: "Nonviolent Communication",
    author: "Marshall Rosenberg",
    color: "green",
    icon: "message-circle",
    coreConcepts: [
      {
        id: "nvc1",
        title: "The Four Components",
        summary: "Observation, Feeling, Need, Request. Express all four for clear communication.",
        insight: "Most conflict comes from mixing these up: adding judgment to observation, demands instead of requests.",
        exercise: "Reframe a complaint using: 'When I see/hear ___, I feel ___, because I need ___. Would you ___?'",
        quiz: {
          question: "The four NVC components are:",
          options: ["Think, feel, say, do", "Observation, feeling, need, request", "Problem, cause, solution, action", "Listen, understand, respond, resolve"],
          correct: 1,
          explanation: "Separating these four elements creates clarity without triggering defensiveness."
        }
      },
      {
        id: "nvc2",
        title: "Observation vs Evaluation",
        summary: "Observe without evaluating. 'You're late' vs 'The meeting started at 2:00 and you arrived at 2:15.'",
        insight: "Evaluations trigger defensiveness. Pure observations are indisputable.",
        exercise: "For every judgment you make today, restate it as pure observation without evaluation.",
        quiz: {
          question: "Separating observation from evaluation is important because:",
          options: ["Evaluations are wrong", "Pure observations don't trigger defensiveness", "Being factual is nicer", "Facts are better than opinions"],
          correct: 1,
          explanation: "Observations are hard to argue with. Evaluations invite resistance."
        }
      },
      {
        id: "nvc3",
        title: "Feelings vs Thoughts",
        summary: "'I feel that you...' is a thought, not a feeling. 'I feel hurt' is a feeling.",
        insight: "Actual feelings connect us. 'I feel you don't respect me' blames. 'I feel hurt' opens dialogue.",
        exercise: "List 10 actual feelings (not 'I feel that...' thoughts). Use them in conversation.",
        quiz: {
          question: "'I feel that you don't care' is:",
          options: ["A feeling", "An evaluation disguised as a feeling", "An observation", "A need"],
          correct: 1,
          explanation: "'I feel that...' expresses a thought or judgment, not a genuine feeling."
        }
      },
      {
        id: "nvc4",
        title: "Universal Human Needs",
        summary: "Beneath every feeling is a need. Identify the need to find solutions.",
        insight: "We fight about strategies but share needs. Find the need to find common ground.",
        exercise: "Beneath your current frustration, what need isn't being met? Name it.",
        quiz: {
          question: "Identifying needs helps because:",
          options: ["Needs are more valid than wants", "Conflicts are about strategies, not needs—needs create common ground", "People should meet our needs", "It's more honest"],
          correct: 1,
          explanation: "We disagree about strategies but share needs for respect, autonomy, connection, etc."
        }
      },
      {
        id: "nvc5",
        title: "Request vs Demand",
        summary: "Requests are open to 'no.' Demands punish 'no' with guilt or consequence.",
        insight: "When 'no' isn't acceptable, it's a demand. True requests accept either answer.",
        exercise: "Make a request today where you can genuinely accept 'no' as an answer.",
        quiz: {
          question: "The difference between a request and a demand is:",
          options: ["Politeness", "Whether 'no' is genuinely acceptable without consequence", "The words used", "Who has power"],
          correct: 1,
          explanation: "If 'no' brings punishment or guilt, it was a demand disguised as a request."
        }
      }
    ]
  },
  crucialConversations: {
    title: "Crucial Conversations",
    author: "Kerry Patterson et al",
    color: "red",
    icon: "message-square",
    coreConcepts: [
      {
        id: "cc1",
        title: "What Makes Conversations Crucial",
        summary: "High stakes + opposing opinions + strong emotions = crucial conversation.",
        insight: "We handle these worst—exactly when it matters most. Most people avoid or bungle them.",
        exercise: "Identify one crucial conversation you've been avoiding. Why?",
        quiz: {
          question: "A conversation is 'crucial' when it has:",
          options: ["Important topics", "High stakes, differing views, and strong emotions", "Authority figures", "Time pressure"],
          correct: 1,
          explanation: "The combination of importance, disagreement, and emotion makes conversations crucial."
        }
      },
      {
        id: "cc2",
        title: "Start with Heart",
        summary: "Before the conversation, clarify what you really want—for you, them, and the relationship.",
        insight: "When you lose sight of goals, you fall into ego battles. Keep the real goal visible.",
        exercise: "Before a hard conversation, write: What do I want for me? For them? For us?",
        quiz: {
          question: "'Start with heart' means:",
          options: ["Being emotional", "Clarifying your true goals before engaging", "Being kind", "Showing vulnerability"],
          correct: 1,
          explanation: "Know what you really want to avoid getting derailed into winning arguments."
        }
      },
      {
        id: "cc3",
        title: "Make It Safe",
        summary: "When safety is at risk, people either go silent or violent. Restore safety first.",
        insight: "People can hear almost anything if they feel safe. Safety comes before content.",
        exercise: "When someone gets defensive, stop content. Ask: 'What would help you feel safe here?'",
        quiz: {
          question: "When someone goes silent or aggressive in conversation:",
          options: ["Push harder", "They don't care", "Safety has been threatened—restore it first", "You're winning"],
          correct: 2,
          explanation: "Silence and violence signal threatened safety. Restore safety before continuing."
        }
      },
      {
        id: "cc4",
        title: "STATE Your Path",
        summary: "Share facts, Tell your story, Ask for their path, Talk tentatively, Encourage testing.",
        insight: "Start with facts (hard to argue), share your interpretation tentatively, then genuinely invite their view.",
        exercise: "Prepare for a crucial conversation using STATE. Write out each step.",
        quiz: {
          question: "The STATE framework begins with sharing:",
          options: ["Your feelings", "Facts that are hard to dispute", "Your conclusions", "Your requests"],
          correct: 1,
          explanation: "Facts are least controversial. Lead with them, then share your interpretation."
        }
      },
      {
        id: "cc5",
        title: "Move to Action",
        summary: "Decide how decisions get made: command, consult, vote, or consensus.",
        insight: "Conversations without clear next steps waste everyone's time. Commit to action.",
        exercise: "End every crucial conversation with: Who does what by when? How will we follow up?",
        quiz: {
          question: "Crucial conversations should end with:",
          options: ["Agreement on feelings", "Clear decisions about who does what by when", "Mutual understanding", "Compromise"],
          correct: 1,
          explanation: "Without action commitments, conversations don't produce change."
        }
      }
    ]
  },
  difficultConversations: {
    title: "Difficult Conversations",
    author: "Douglas Stone et al",
    color: "orange",
    icon: "alert-circle",
    coreConcepts: [
      {
        id: "dc1",
        title: "Three Conversations in One",
        summary: "Every difficult conversation involves 'What Happened,' 'Feelings,' and 'Identity.'",
        insight: "We focus on 'what happened' but feelings and identity threats drive difficulty.",
        exercise: "In your next difficult conversation, identify all three layers. Which is the real issue?",
        quiz: {
          question: "The three layers of difficult conversations are:",
          options: ["Past, present, future", "What happened, feelings, and identity", "Facts, opinions, requests", "Problem, cause, solution"],
          correct: 1,
          explanation: "Surface issues often mask deeper emotional and identity concerns."
        }
      },
      {
        id: "dc2",
        title: "Disentangle Intent from Impact",
        summary: "Impact doesn't prove intent. People hurt us unintentionally; we hurt others unintentionally.",
        insight: "We judge ourselves by intent, others by impact. Neither is the full story.",
        exercise: "Recall when someone hurt you. Consider: What might their intent have actually been?",
        quiz: {
          question: "Why is separating intent from impact important?",
          options: ["Intent doesn't matter", "Impact doesn't matter", "We often assume bad intent from bad impact, but we're usually wrong", "It's just semantics"],
          correct: 2,
          explanation: "Bad impact ≠ bad intent. Most hurt is unintentional. Assuming bad intent poisons dialogue."
        }
      },
      {
        id: "dc3",
        title: "Contribution vs Blame",
        summary: "Blame looks backward. Contribution asks: How did we both contribute to this?",
        insight: "In almost every conflict, both parties contributed. Acknowledging yours opens the door.",
        exercise: "In a current conflict, list how you might have contributed—even 10%. Share that.",
        quiz: {
          question: "Shifting from blame to contribution means:",
          options: ["Accepting fault", "Exploring how both parties contributed to the situation", "Avoiding accountability", "Being weak"],
          correct: 1,
          explanation: "Contribution is forward-looking and shared. Blame is backward and one-sided."
        }
      },
      {
        id: "dc4",
        title: "The Identity Conversation",
        summary: "Difficult conversations threaten our self-image: Am I competent? Good? Worthy of love?",
        insight: "Identity threats trigger fight-or-flight. Recognize when identity is the real issue.",
        exercise: "In a recent difficult conversation, what identity was threatened? For you? For them?",
        quiz: {
          question: "Identity threats in difficult conversations involve fears about:",
          options: ["Reputation", "Whether we're competent, good, and worthy of love", "Being wrong", "Losing arguments"],
          correct: 1,
          explanation: "Core identity questions trigger disproportionate defensive reactions."
        }
      },
      {
        id: "dc5",
        title: "Learning Conversation",
        summary: "Shift from 'I'm right, you're wrong' to 'Help me understand how you see this.'",
        insight: "Curiosity beats certainty. You probably don't know their full story.",
        exercise: "In your next disagreement, lead with: 'Help me understand how you see this.'",
        quiz: {
          question: "A learning stance in difficult conversations means:",
          options: ["Giving in", "Approaching with genuine curiosity about their perspective", "Gathering evidence", "Teaching them"],
          correct: 1,
          explanation: "Genuine curiosity defuses defensiveness and reveals new information."
        }
      }
    ]
  }
};

export const bookKeys = Object.keys(bookContent) as (keyof typeof bookContent)[];

export const getBookByKey = (key: string) => bookContent[key as keyof typeof bookContent];

export default bookContent;
