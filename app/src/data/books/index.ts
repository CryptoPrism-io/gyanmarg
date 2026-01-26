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
  }
};

export const bookKeys = Object.keys(bookContent) as (keyof typeof bookContent)[];

export const getBookByKey = (key: string) => bookContent[key as keyof typeof bookContent];

export default bookContent;
