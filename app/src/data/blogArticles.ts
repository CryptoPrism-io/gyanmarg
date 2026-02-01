import type { EmbedType } from '@/components/molecules';

// AI Images
import imgPolymind from '@/assets/ai-images/onboarding/onboarding-03-polymind.png';
import imgSpacedRepetition from '@/assets/ai-images/landing/feature-spaced-repetition.png';
import imgVisualLearning from '@/assets/ai-images/landing/feature-visual-learning.png';
import imgGamification from '@/assets/ai-images/landing/feature-gamification.png';
import imgBooksTransform from '@/assets/ai-images/landing/hero-books-transform.png';
import imgHeroMain from '@/assets/ai-images/landing/hero-main.png';

export interface BlogEmbed {
  id: string;
  type: EmbedType;
  afterParagraph: number; // Insert after this paragraph number (1-indexed)
  props?: Record<string, unknown>;
}

export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: string;
  embeds?: BlogEmbed[];
}

export const blogArticles: Record<string, BlogArticle> = {
  // Article 1: Visual Tour of Polymind
  'how-polymind-works': {
    id: 'how-polymind-works',
    title: 'How Polymind Works: A Visual Tour',
    excerpt: 'Take an interactive tour of Polymind\'s features. See exactly how lessons, flashcards, and gamification work together.',
    author: 'Polymind Team',
    date: 'Jan 30, 2025',
    readTime: '5 min read',
    category: 'Getting Started',
    image: imgHeroMain,
    content: `
## Welcome to Polymind

Polymind transforms 45+ ebooks into interactive learning experiences. But what does that actually mean? Let's take a visual tour.

## Your Learning Dashboard

When you log in, you'll see your personalized dashboard. It shows your progress, current streak, and XP earned. Here's what your progress looks like in action:

## Swipe-Based Lessons

The heart of Polymind is the swipe-based lesson system. Each lesson is broken into digestible cards that you swipe through. Try it yourself:

## Flashcard Review

After completing lessons, concepts become flashcards for spaced repetition review. The SM-2 algorithm schedules reviews at optimal intervals. Here's how a flashcard works:

## Gamification That Motivates

Every action earns XP. Complete lessons, review flashcards, maintain streaks — it all adds up. Watch your level grow:

## Daily Challenges

Each day brings new challenges to keep you engaged. Completing them earns bonus XP and helps build consistent habits.

## Ready to Start?

Now that you've seen how Polymind works, it's time to experience it yourself. The knowledge from those books on your shelf is waiting to become part of your permanent memory.
    `,
    embeds: [
      { id: 'xp-display', type: 'XPDisplay', afterParagraph: 3, props: { xp: 1250, level: 3 } },
      { id: 'tinder-demo', type: 'TinderStack', afterParagraph: 5 },
      { id: 'flashcard-demo', type: 'FlashCard', afterParagraph: 7 },
      { id: 'progress-demo', type: 'ProgressBar', afterParagraph: 9, props: { xp: 2100, level: 5, nextLevelXp: 500 } },
      { id: 'challenge-demo', type: 'Challenge', afterParagraph: 11, props: { title: 'Daily Learner', description: 'Complete 3 lessons today', xpReward: 75, progress: 2, total: 3 } },
    ],
  },

  // Article 2: The Science of Forgetting
  'science-of-forgetting': {
    id: 'science-of-forgetting',
    title: 'The Science of Forgetting (And How We Fight It)',
    excerpt: 'Why you forget 90% of what you read — and the scientifically-proven technique to retain knowledge forever.',
    author: 'Polymind Team',
    date: 'Jan 29, 2025',
    readTime: '10 min read',
    category: 'Learning Science',
    image: imgSpacedRepetition,
    content: `
## The Uncomfortable Truth

You've read dozens of books. Maybe hundreds. You've highlighted passages, taken notes, told yourself you'd remember the key insights forever.

But here's the uncomfortable truth: you've probably forgotten 90% of what you read within a few weeks. This isn't a personal failing. It's how human memory works.

## The Ebbinghaus Forgetting Curve

In 1885, German psychologist Hermann Ebbinghaus conducted groundbreaking experiments on memory. What he discovered changed our understanding of how we learn — and forget.

Ebbinghaus found that memory decay follows a predictable pattern. After just 20 minutes, we forget 42% of what we learned. After a day, 67%. After a week, 75%. This exponential decay is the Forgetting Curve.

## Visualizing Memory Decay

Here's what the forgetting curve looks like — and how spaced repetition changes everything:

## Why Passive Reading Fails

When you read a book passively, you're essentially watching information flow past you. Your brain encodes it temporarily, but without reinforcement, those neural connections fade.

The process looks like this: You read a powerful insight. You feel enlightened in the moment. You continue to the next chapter. Days pass. The insight is gone. This is why people can read the same book multiple times and still discover "new" insights.

## The Solution: Active Recall + Spaced Repetition

The good news? The Forgetting Curve can be beaten. Research shows that strategic review at specific intervals can boost retention from 20% to over 90%. Here's a concept from spaced repetition for you to try:

## How Spaced Repetition Works

The technique involves reviewing information at gradually increasing intervals. Each review strengthens the memory and extends how long you'll remember it.

First review after 1 day. Second after 3 days. Third after 7 days. Then 14, then 30. Each review doesn't just restore the memory — it makes it stronger and more durable.

## The SM-2 Algorithm

Polymind uses the SM-2 algorithm, developed by Piotr Wozniak in 1987. It calculates optimal review intervals based on how easily you recall each card.

Rate a card as "Hard" and you'll see it again soon. Rate it "Easy" and the interval extends. The algorithm adapts to your actual memory performance.

## Building Your Unforgettable Mind

Every day you wait is another book you'll forget. The concepts are slipping away right now. But it doesn't have to be this way.

With the right system — active recall combined with spaced repetition — you can build a mind that remembers everything worth knowing.
    `,
    embeds: [
      { id: 'forgetting-curve', type: 'ForgettingCurve', afterParagraph: 5 },
      { id: 'flashcard-demo', type: 'FlashCard', afterParagraph: 10, props: { front: 'What is the spacing effect?', back: 'Information is better retained when learning sessions are spaced out over time rather than massed together (cramming).', category: 'Learning Science' } },
    ],
  },

  // Article 3: Mastering Lessons with Swipe Learning
  'swipe-learning-guide': {
    id: 'swipe-learning-guide',
    title: 'Mastering Lessons with Swipe Learning',
    excerpt: 'How our card-based lesson system makes learning intuitive, engaging, and effective.',
    author: 'Polymind Team',
    date: 'Jan 27, 2025',
    readTime: '6 min read',
    category: 'How It Works',
    image: imgVisualLearning,
    content: `
## Why Swipe-Based Learning?

Traditional learning interfaces present walls of text. Your eyes glaze over. You scroll past content without truly engaging. Swipe-based learning changes this dynamic entirely.

By breaking lessons into discrete cards, we create natural pause points. Each card demands attention. Each swipe is a micro-commitment to continue learning.

## The Anatomy of a Lesson

Every Polymind lesson follows a structured flow designed for optimal retention:

**Overview cards** introduce what you'll learn. They prime your brain for the concepts ahead.

**Content cards** deliver the core material in digestible chunks. Complex ideas are broken into their atomic components.

**Quiz cards** test your understanding immediately. This active recall dramatically improves retention.

**Takeaway cards** summarize the key insights. These become your flashcards for future review.

## Try It Yourself

Here's a mini-lesson demonstrating how the swipe system works. Go ahead — swipe through:

## The Psychology of Swiping

The swipe gesture is powerful for several reasons. It's familiar from dating apps and social media. It creates a sense of progress and momentum. Most importantly, it requires active participation.

You can't passively absorb a swipe-based lesson. You must engage. This engagement is exactly what builds lasting memories.

## Swipe Directions Matter

In Polymind, swiping right means "I understand, continue." Swiping left means "I need to revisit this." This simple binary creates valuable feedback for the learning system.

Cards you swipe left on get flagged for review. The system adapts to your actual understanding, not just your completion.

## Building the Habit

The swipe interface is designed to be addictive in a healthy way. Quick sessions. Clear progress. Immediate feedback. These elements combine to make daily learning feel effortless.

Most users find that what starts as a 5-minute habit naturally expands. When learning is enjoyable, you want to do more of it.
    `,
    embeds: [
      { id: 'tinder-demo', type: 'TinderStack', afterParagraph: 8 },
    ],
  },

  // Article 4: Flashcards That Actually Work
  'flashcards-that-work': {
    id: 'flashcards-that-work',
    title: 'Flashcards That Actually Work',
    excerpt: 'The SM-2 algorithm explained, plus how Polymind makes flashcard review effortless.',
    author: 'Polymind Team',
    date: 'Jan 25, 2025',
    readTime: '8 min read',
    category: 'Learning Science',
    image: imgSpacedRepetition,
    content: `
## Not All Flashcards Are Equal

You've probably tried flashcards before. Maybe you made them by hand. Maybe you used an app. And maybe... you stopped after a week.

The problem isn't flashcards themselves. It's how they're implemented. Random review is inefficient. Without scheduling, you either waste time on easy cards or forget the hard ones.

## The SM-2 Revolution

In 1987, Piotr Wozniak developed the SuperMemo 2 algorithm. It was revolutionary: a mathematical model for optimal memory retention.

The key insight? Different memories decay at different rates. A card you recall easily needs fewer reviews than one you struggle with. SM-2 calculates the optimal interval for each card individually.

## How Rating Works

After revealing a flashcard's answer, you rate your recall. Here's what each rating means:

**Hard:** You struggled to remember. The card resets to a short interval.

**Good:** You remembered with some effort. The interval extends moderately.

**Easy:** Instant recall. The interval extends significantly.

## Try a Real Flashcard

Experience the rating system yourself. Flip this card and choose your rating:

## The Power of Consistency

SM-2's effectiveness compounds with consistency. Miss a day, and overdue cards pile up. Maintain your streak, and reviews stay manageable.

This is why Polymind tracks streaks and provides daily reminders. Consistency isn't optional — it's the foundation of the entire system.

## Your streak drives retention:

## Quality Over Quantity

Effective flashcards follow the "atomic" principle. Each card tests one concept. This precision allows SM-2 to identify exactly which concepts need more review.

Complex cards with multiple facts are harder to rate. Did you forget fact A or fact B? The algorithm can't tell. Keep cards simple, and the system works better.

## From Passive to Active

The magic of flashcards is active recall. You're not re-reading information — you're retrieving it from memory. This retrieval strengthens the neural pathway.

Each successful recall makes the next one easier. Each failed recall identifies gaps to fill. It's a feedback loop that passive reading simply cannot match.
    `,
    embeds: [
      { id: 'flashcard-demo', type: 'FlashCard', afterParagraph: 10, props: { front: 'What does SM-2 stand for?', back: 'SuperMemo Algorithm 2 — the algorithm that calculates optimal review intervals based on your performance rating (Hard, Good, Easy).', category: 'Algorithms' } },
      { id: 'streak-demo', type: 'StreakDisplay', afterParagraph: 13, props: { streak: 14 } },
    ],
  },

  // Article 5: Gamification: XP, Levels, and Achievements
  'gamification-guide': {
    id: 'gamification-guide',
    title: 'Gamification: XP, Levels, and Achievements',
    excerpt: 'How game mechanics make learning addictive — in the best possible way.',
    author: 'Polymind Team',
    date: 'Jan 23, 2025',
    readTime: '7 min read',
    category: 'How It Works',
    image: imgGamification,
    content: `
## Why Gamification Works

Games have figured out something powerful: how to make repetitive tasks feel rewarding. The same mechanics that make you "just one more level" in a video game can make you "just one more lesson" in your learning.

Polymind applies these principles thoughtfully. Every action earns XP. XP accumulates into levels. Achievements mark milestones. It's a system designed to celebrate progress.

## The XP System

Experience points (XP) are the currency of learning. You earn them by completing lessons, reviewing flashcards, and maintaining streaks. Here's what your XP progress looks like:

## How XP Adds Up

Every completed lesson: +15-30 XP depending on complexity.

Every flashcard reviewed: +1-5 XP depending on performance.

Daily streak bonus: +10 XP per day maintained.

Achievement unlocks: +25-100 XP depending on difficulty.

## Leveling Up

Every 500 XP advances you to the next level. But levels aren't just numbers — they're proof of genuine learning progress.

A Level 10 learner has demonstrated commitment. They've reviewed hundreds of flashcards. They've built real knowledge structures. The level is a side effect of actual learning.

## Achievements

Achievements mark specific milestones. Some are easy — complete your first lesson. Others require dedication — maintain a 30-day streak. Here's an example:

## The Psychology of Rewards

These aren't arbitrary gamification tricks. They tap into fundamental psychology.

**Variable rewards** keep you engaged. You never know exactly which action will trigger the next achievement.

**Progress visualization** makes abstract learning feel concrete. You can see your knowledge growing.

**Social proof** (if you choose to share) creates accountability. Your streak becomes something to protect.

## Healthy Competition

Gamification in Polymind is primarily self-competitive. You're trying to beat your past self, not other users.

This design choice is intentional. Learning isn't a race. Comparing yourself to others can be demotivating. Your journey is unique.

## When Games Help Learning

Gamification works best when the rewards align with genuine progress. In Polymind, you can't game the system. You can't earn XP without actually learning.

The XP you see represents real cognitive work. The achievements mark real milestones. The level reflects real knowledge growth.
    `,
    embeds: [
      { id: 'xp-progress', type: 'ProgressBar', afterParagraph: 4, props: { xp: 1850, level: 4, nextLevelXp: 500 } },
      { id: 'achievement-demo', type: 'AchievementBadge', afterParagraph: 10, props: { name: 'Week Warrior', description: 'Maintain a 7-day learning streak', xpReward: 75 } },
    ],
  },

  // Article 6: Building Cross-Domain Connections
  'cross-domain-connections': {
    id: 'cross-domain-connections',
    title: 'Building Cross-Domain Connections',
    excerpt: 'Why learning across domains creates exponential knowledge growth.',
    author: 'Polymind Team',
    date: 'Jan 21, 2025',
    readTime: '9 min read',
    category: 'Learning Science',
    image: imgVisualLearning,
    content: `
## The Polymath Advantage

A specialist knows more and more about less and less. A polymath knows less about more — but understands how everything connects.

In an age of AI, polymathic thinking is a superpower. Machines can master single domains. Humans excel at synthesis across domains. This is the Polymind advantage.

## Why Cross-Domain Learning Works

When you learn a concept in isolation, it has one connection: to the domain it came from. But when you learn across domains, that concept gains multiple connections.

**Compound interest** from finance connects to **habit stacking** from psychology. **Neural networks** from AI connect to **brain plasticity** from neuroscience. These connections create a web of understanding.

## The Interleaving Effect

Research shows that mixing topics during study (interleaving) outperforms blocking (studying one topic at a time). It feels harder, but it produces better long-term retention.

Polymind is designed for interleaving. Your daily review might include cards from AI, psychology, and philosophy. This variety strengthens the connections between domains.

## Making Connections Visible

Here's a concept that bridges multiple domains:

## Building Your Connection Map

As you learn, Polymind tracks connections between concepts. Two cards that share a theme get linked. Over time, your personal knowledge map emerges.

This map isn't just visualization — it's a learning tool. Seeing connections helps you make new ones. Gaps in the map show areas to explore.

## The Synthesis Advantage

True understanding isn't memorizing facts. It's synthesizing them into wisdom. When you can explain how a psychology concept applies to investing, you've achieved synthesis.

This synthesis is where creativity lives. Innovation happens at the intersection of domains. The more domains you understand, the more intersections you can explore.

## Practical Application

Start with two domains you're curious about. As you learn, actively look for connections. Ask yourself: "How does this concept apply elsewhere?"

Document these connections. Share them. Teaching across domains deepens your own understanding.

## The Polymind Goal

Polymind isn't about becoming a trivia expert. It's about building a connected, synthesis-capable mind. A mind that sees patterns others miss. A mind that creates by combining.

This is the polymind: not a collection of facts, but a network of understanding.
    `,
    embeds: [
      { id: 'flashcard-demo', type: 'FlashCard', afterParagraph: 8, props: { front: 'What is mental model stacking?', back: 'Applying multiple mental models from different domains to understand a single problem, creating richer and more robust insights.', category: 'Meta-Learning' } },
    ],
  },

  // Article 7: Daily Habits & Challenges
  'daily-habits-challenges': {
    id: 'daily-habits-challenges',
    title: 'Daily Habits & Challenges',
    excerpt: 'How daily learning habits and challenges compound into remarkable results.',
    author: 'Polymind Team',
    date: 'Jan 19, 2025',
    readTime: '6 min read',
    category: 'Habits',
    image: imgGamification,
    content: `
## The Power of Daily Practice

James Clear writes about the 1% rule: small improvements, compounded daily, lead to remarkable results. Learning follows the same principle.

10 minutes of daily review outperforms 2 hours once a week. It's not about total time — it's about frequency and consistency.

## Streaks: Your Consistency Tracker

Polymind tracks your learning streak. Every day you complete at least one lesson or review session, your streak grows.

The streak is powerful psychology. Once you've built a 7-day streak, you don't want to break it. The streak becomes something to protect.

## Your current streak matters:

## Daily Challenges

Each day, Polymind presents fresh challenges. Complete specific lessons. Review a certain number of cards. Achieve a quiz score. These challenges add variety to your routine.

Here's an example of a daily challenge:

## The Habit Loop

Every habit has three components: cue, routine, reward.

**Cue:** Polymind sends a daily reminder (you can set the time).

**Routine:** Open the app, complete your challenge, review your cards.

**Reward:** XP earned, streak extended, progress visible.

This loop, repeated daily, builds automatic behavior. Learning becomes something you do, not something you force.

## Starting Small

The biggest mistake new learners make is starting too big. They commit to an hour daily, miss a day, and quit entirely.

Start with 5 minutes. Make it so easy you can't say no. Once the habit is established, it naturally expands.

## Keystone Habits

Daily learning often becomes a keystone habit — one that triggers other positive behaviors. People who learn daily report reading more, sleeping better, and feeling more productive.

The discipline of daily practice spills over. You're not just building knowledge — you're building character.

## Consistency Compounds

A daily learner who studies 10 minutes over a year accumulates 60 hours of practice. That's more than most people spend in a lifetime on deliberate learning.

Consistency beats intensity. Every time.
    `,
    embeds: [
      { id: 'streak-demo', type: 'StreakDisplay', afterParagraph: 5, props: { streak: 21 } },
      { id: 'challenge-demo', type: 'Challenge', afterParagraph: 7, props: { title: 'Review Champion', description: 'Review 15 flashcards today', xpReward: 40, progress: 8, total: 15 } },
    ],
  },

  // Article 8: Your First 7 Days with Polymind
  'first-seven-days': {
    id: 'first-seven-days',
    title: 'Your First 7 Days with Polymind',
    excerpt: 'A day-by-day guide to building your learning habit and getting the most out of Polymind.',
    author: 'Polymind Team',
    date: 'Jan 17, 2025',
    readTime: '8 min read',
    category: 'Getting Started',
    image: imgBooksTransform,
    content: `
## Your Learning Journey Begins

The first week with Polymind sets the foundation for everything that follows. Here's a day-by-day guide to building momentum.

## Day 1: Choose Your Domains

Start by selecting 2-3 domains that genuinely interest you. Don't try to learn everything. Focus creates depth.

Browse the available domains. Read the descriptions. Pick what excites you. Curiosity is the best motivator.

## Day 2: Complete Your First Lesson

Today, finish one complete lesson. Don't rush through it — engage with each card. Answer the quiz honestly. This is how the swipe system works:

## Day 3: Review Your First Flashcards

Cards from your completed lesson are now in your review queue. Today, review them all. Get familiar with the rating system.

## Day 4: Build the Daily Habit

By day 4, you should feel the routine forming. Open Polymind at the same time each day. Consistency starts here.

Check your streak. It should say "4 days." That number is now something to protect.

## Day 5: Complete a Challenge

Today, tackle a daily challenge. The variety keeps things interesting and earns bonus XP.

## Day 6: Explore Connections

As you learn more, start noticing connections between concepts. How does a principle from one domain apply to another?

This synthesis is where real learning happens. Here's a cross-domain concept:

## Day 7: Celebrate & Plan

You've completed your first week! Check your progress:

## Week 1 Milestones

By now, you should have:

- Completed 3-5 lessons
- Reviewed 30+ flashcards
- Maintained a 7-day streak
- Earned your first achievement

If you've done this, you're on track. The foundation is set. Now it's about maintaining momentum.

## What Comes Next

Week 2 is about depth. Go deeper into your chosen domains. Start a second module. Let the reviews pile up naturally — SM-2 will schedule them optimally.

Week 3 is about expansion. Consider adding another domain. Look for connections between what you're learning.

Week 4 is about habit solidification. By now, daily learning should feel automatic. If it does, you've won. The rest is just consistency.

## The Long Game

Remember: Polymind is about building a mind that remembers everything worth knowing. That's not a week-long project. It's a lifetime practice.

But every lifetime practice begins with a single week. You've taken the first step. Keep going.
    `,
    embeds: [
      { id: 'tinder-demo', type: 'TinderStack', afterParagraph: 5 },
      { id: 'flashcard-demo', type: 'FlashCard', afterParagraph: 14, props: { front: 'What is transfer learning?', back: 'Applying knowledge or skills learned in one context to a different but related context — the foundation of polymathic thinking.', category: 'Meta-Learning' } },
      { id: 'progress-demo', type: 'ProgressBar', afterParagraph: 17, props: { xp: 350, level: 1, nextLevelXp: 500 } },
    ],
  },

  // Original articles (preserved from BlogArticlePage.tsx)
  'why-you-forget': {
    id: 'why-you-forget',
    title: 'The Science Behind Why You Forget 90% of Books',
    excerpt: 'You\'ve read dozens of books. Maybe hundreds. But how much do you actually remember?',
    author: 'Polymind Team',
    date: 'Jan 28, 2025',
    readTime: '8 min read',
    category: 'Learning Science',
    image: imgPolymind,
    content: `
## The Uncomfortable Truth About Reading

You've read dozens of books. Maybe hundreds. You've highlighted passages, taken notes, told yourself you'd remember the key insights forever.

But here's the uncomfortable truth: **you've probably forgotten 90% of what you read within a few weeks.**

This isn't a personal failing. It's how human memory works.

## The Ebbinghaus Forgetting Curve

In 1885, German psychologist Hermann Ebbinghaus conducted groundbreaking experiments on memory. What he discovered changed our understanding of how we learn — and forget.

Ebbinghaus found that memory decay follows a predictable pattern:

- **After 20 minutes:** We forget 42% of what we learned
- **After 1 hour:** We forget 56%
- **After 1 day:** We forget 67%
- **After 1 week:** We forget 75%
- **After 1 month:** We forget 79%

This exponential decay is what's known as the **Forgetting Curve**. And it applies to everything we learn — including the books we read.

## Why Traditional Reading Fails

When you read a book passively, you're essentially watching information flow past you. Your brain encodes it temporarily, but without reinforcement, those neural connections fade.

Think about it:

1. You read a powerful insight
2. You feel enlightened in the moment
3. You continue to the next chapter
4. Days pass
5. The insight is gone

This is why people can read the same book multiple times and still discover "new" insights. They're not new — they were just forgotten.

## The Solution: Active Learning + Spaced Repetition

The good news? The Forgetting Curve can be beaten.

Research shows that **strategic review at specific intervals** can boost retention from 20% to over 90%. This technique is called **Spaced Repetition**.

Here's how it works:

1. **Initial learning:** You encounter a concept
2. **First review (1 day later):** The memory is strengthened
3. **Second review (3 days later):** Neural pathways deepen
4. **Third review (7 days later):** Long-term storage begins
5. **Subsequent reviews:** Intervals increase exponentially

Each review doesn't just restore the memory — it makes it stronger and more durable.

## Combine This With Active Recall

Spaced repetition becomes even more powerful when combined with **Active Recall** — the practice of testing yourself rather than passively re-reading.

Instead of highlighting a passage, ask yourself: "What did this passage teach me?"

The struggle to retrieve information strengthens the memory far more than passively reviewing it.

## How Polymind Uses These Principles

Polymind is built on these scientific foundations:

- **Concept extraction:** We distill books into their core ideas
- **Flashcard creation:** Each concept becomes a testable unit
- **SM-2 algorithm:** Scientifically-timed review intervals
- **Active recall:** Quiz-style learning that strengthens memory

The result? You can finally retain what you read — not for days, but for years.

## Start Building Your Polymind

Every day you wait is another book you'll forget. The concepts are slipping away right now.

But it doesn't have to be this way. With the right system, you can build a mind that remembers everything worth knowing.

Ready to never forget?
    `,
    embeds: [
      { id: 'forgetting-curve', type: 'ForgettingCurve', afterParagraph: 6 },
    ],
  },

  'spaced-repetition-guide': {
    id: 'spaced-repetition-guide',
    title: 'Spaced Repetition: The Complete Guide',
    excerpt: 'The same technique used by medical students to memorize thousands of terms.',
    author: 'Polymind Team',
    date: 'Jan 25, 2025',
    readTime: '12 min read',
    category: 'Learning Science',
    image: imgSpacedRepetition,
    content: `
## What is Spaced Repetition?

Spaced repetition is a learning technique that involves reviewing information at gradually increasing intervals. Instead of cramming everything at once, you spread your study sessions over time.

## The Science Behind It

The technique is based on the **spacing effect**, first identified by Hermann Ebbinghaus in the 1880s. His research showed that information is better retained when learning sessions are spaced out rather than massed together.

## How the SM-2 Algorithm Works

The SuperMemo 2 (SM-2) algorithm, developed by Piotr Wozniak in 1987, is one of the most popular implementations:

1. **Initial interval:** 1 day
2. **If recalled correctly:** Interval increases (1 → 3 → 7 → 14 → 30 days)
3. **If recalled incorrectly:** Interval resets to 1 day
4. **Ease factor:** Adjusts based on difficulty ratings

## Why Medical Students Swear By It

Medical students must memorize thousands of terms, drug interactions, and anatomical structures. Many rely on spaced repetition apps like Anki to pass their exams.

Studies show that medical students using spaced repetition:
- Score 15-20% higher on exams
- Retain information for years after graduation
- Spend less total time studying

## Implementing Spaced Repetition in Your Life

1. **Choose your tool:** Polymind, Anki, or physical flashcards
2. **Create quality cards:** One concept per card
3. **Be consistent:** Review daily, even if just for 10 minutes
4. **Trust the algorithm:** Don't second-guess the intervals

## Common Mistakes to Avoid

- **Making cards too complex:** Keep them atomic
- **Skipping reviews:** Consistency beats intensity
- **Not using images:** Visual memory is powerful
- **Passive review:** Always test yourself actively

## The Compound Effect

The magic of spaced repetition is its compound effect. A 10-minute daily habit, maintained over a year, can help you master thousands of concepts with minimal effort.

Start small. Stay consistent. Watch your knowledge compound.
    `,
    embeds: [
      { id: 'flashcard-demo', type: 'FlashCard', afterParagraph: 4, props: { front: 'What is the spacing effect?', back: 'The phenomenon where information is better retained when learning sessions are spaced out over time rather than massed together (cramming).', category: 'Learning Science' } },
    ],
  },

  'active-recall-vs-passive': {
    id: 'active-recall-vs-passive',
    title: 'Active Recall vs Passive Reading: The Data',
    excerpt: 'We analyzed 50+ studies comparing active recall to passive reading.',
    author: 'Polymind Team',
    date: 'Jan 22, 2025',
    readTime: '10 min read',
    category: 'Research',
    image: imgVisualLearning,
    content: `
## The Great Learning Debate

For decades, students have highlighted textbooks, re-read notes, and hoped the information would stick. But what does the research actually say about the most effective study methods?

## What is Active Recall?

Active recall is the practice of stimulating memory during the learning process. Instead of passively reviewing information, you actively try to retrieve it from memory.

Examples:
- Closing the book and summarizing what you learned
- Using flashcards
- Practice tests
- Teaching the material to someone else

## What the Research Shows

A meta-analysis of 50+ studies reveals striking differences:

### Retention After 1 Week
- **Passive re-reading:** 20-30% retention
- **Active recall:** 60-80% retention

### Time Efficiency
- Active recall learners achieve the same results in **40% less time**

### Transfer to New Situations
- Active recall leads to **3x better** application of knowledge to novel problems

## The Testing Effect

One of the most robust findings in cognitive psychology is the **testing effect**: taking a test on material leads to better retention than additional study time.

This seems counterintuitive. How can testing help more than studying?

The answer lies in how memory works. When you struggle to retrieve information, you're actually strengthening the neural pathways. The effort is what builds the memory.

## Why Highlighting Doesn't Work

Studies consistently show that highlighting is one of the least effective study strategies:

1. It creates an **illusion of competence** — you think you know it because you recognize it
2. It requires **no cognitive effort** — easy in, easy out
3. It doesn't create **retrieval pathways** — you can't recall what you never retrieved

## Practical Implementation

1. **After reading a chapter:** Close the book and write down everything you remember
2. **When studying notes:** Cover them and quiz yourself
3. **Use the Feynman Technique:** Explain concepts as if teaching a child
4. **Embrace difficulty:** The harder the retrieval, the stronger the memory

## The Bottom Line

If you want to remember what you learn, passive re-reading is a waste of time. Active recall is harder, but it's the only method that actually works.

Stop highlighting. Start testing yourself.
    `,
    embeds: [
      { id: 'flashcard-demo', type: 'FlashCard', afterParagraph: 8, props: { front: 'What is the testing effect?', back: 'The cognitive phenomenon where taking a test on material improves long-term retention more than an equivalent amount of additional study time.', category: 'Cognitive Psychology' } },
    ],
  },

  'building-polymind-guide': {
    id: 'building-polymind-guide',
    title: 'How to Build Your Polymind: A Beginner\'s Guide',
    excerpt: 'A step-by-step walkthrough for new users.',
    author: 'Polymind Team',
    date: 'Jan 18, 2025',
    readTime: '6 min read',
    category: 'Getting Started',
    image: imgGamification,
    content: `
## Welcome to Polymind

Congratulations on taking the first step toward building an unforgettable mind. This guide will walk you through everything you need to know to get started.

## Step 1: Choose Your Domains

Polymind organizes knowledge into domains — broad areas of expertise like Psychology, AI, Wealth Building, and Philosophy.

**Tips for choosing domains:**
- Start with 2-3 domains you're genuinely curious about
- Don't try to learn everything at once
- You can always add more domains later

## Step 2: Complete Your First Module

Each domain contains multiple modules, and each module contains lessons and flashcards.

**Your first module should:**
- Be something you're excited about
- Have practical applications in your life
- Build a foundation for deeper learning

## Step 3: Establish Your Daily Habit

Consistency beats intensity. A 10-minute daily habit will outperform sporadic hour-long sessions.

**Build your streak:**
- Review at the same time each day
- Start with just 5 cards
- Gradually increase as it becomes habitual

## Step 4: Trust the Algorithm

The SM-2 algorithm knows when you need to review each card. Trust it.

**Don't:**
- Cram all your cards at once
- Skip days because you "already know" the material
- Override the scheduling

**Do:**
- Review whatever comes up each day
- Be honest about your confidence level
- Let the system do its job

## Step 5: Connect the Dots

The real power of a Polymind comes from connections between domains.

**Look for:**
- Psychology concepts that explain leadership
- Philosophy ideas that inform wealth building
- AI principles that mirror human cognition

## Step 6: Level Up

As you learn, you'll earn XP and unlock achievements. This isn't just gamification — it's a way to track your growth.

**Milestones to aim for:**
- 7-day streak
- First domain mastered
- 100 cards reviewed
- First cross-domain connection made

## Common Beginner Mistakes

1. **Starting too big:** Pick fewer domains, go deeper
2. **Skipping reviews:** The magic is in the repetition
3. **Passive learning:** Always test yourself
4. **Ignoring connections:** The synthesis is where genius lives

## Your Polymind Awaits

Every expert was once a beginner. The difference is they started — and they didn't stop.

Your journey begins now. What will you learn first?
    `,
    embeds: [
      { id: 'tinder-demo', type: 'TinderStack', afterParagraph: 5 },
      { id: 'streak-demo', type: 'StreakDisplay', afterParagraph: 9, props: { streak: 7 } },
    ],
  },

  '10-books-change-thinking': {
    id: '10-books-change-thinking',
    title: '10 Books That Will Change How You Think',
    excerpt: 'Our curated list of books with the highest impact per concept.',
    author: 'Polymind Team',
    date: 'Jan 15, 2025',
    readTime: '7 min read',
    category: 'Book Lists',
    image: imgBooksTransform,
    content: `
## The Books That Build Polyminds

Not all books are created equal. Some entertain, some inform, but a rare few fundamentally change how you see the world.

Here are 10 books that our community rates highest for "impact per concept" — books where every chapter delivers insights you'll use for the rest of your life.

## 1. Thinking, Fast and Slow — Daniel Kahneman

**Why it matters:** Nobel laureate Kahneman reveals the two systems that drive how we think — and how they lead us astray.

**Key concepts:** System 1 vs System 2, cognitive biases, prospect theory, anchoring effect

## 2. Atomic Habits — James Clear

**Why it matters:** Clear shows that massive results come from tiny changes, compounded over time.

**Key concepts:** Habit stacking, the 1% rule, identity-based habits, environment design

## 3. The Psychology of Money — Morgan Housel

**Why it matters:** Wealth isn't about what you know — it's about how you behave.

**Key concepts:** Compounding, luck vs skill, reasonable vs rational, enough

## 4. Influence — Robert Cialdini

**Why it matters:** Understanding persuasion helps you both influence others and protect yourself.

**Key concepts:** Reciprocity, commitment, social proof, authority, liking, scarcity

## 5. Deep Work — Cal Newport

**Why it matters:** In a distracted world, the ability to focus deeply is a superpower.

**Key concepts:** Deep work vs shallow work, attention residue, productive meditation

## 6. Meditations — Marcus Aurelius

**Why it matters:** A Roman emperor's private journal on living a good life, written 2,000 years ago — still relevant today.

**Key concepts:** Stoicism, memento mori, the dichotomy of control, virtue ethics

## 7. Sapiens — Yuval Noah Harari

**Why it matters:** Understanding where we came from illuminates where we're going.

**Key concepts:** Cognitive revolution, imagined realities, agricultural trap, unification of humankind

## 8. The Almanack of Naval Ravikant — Eric Jorgenson

**Why it matters:** Naval's wisdom on wealth and happiness, distilled into actionable insights.

**Key concepts:** Specific knowledge, leverage, judgment, happiness as a skill

## 9. Man's Search for Meaning — Viktor Frankl

**Why it matters:** A Holocaust survivor's insights on finding purpose in suffering.

**Key concepts:** Logotherapy, the last human freedom, meaning as motivation

## 10. Superintelligence — Nick Bostrom

**Why it matters:** As AI advances, understanding its potential trajectories becomes crucial.

**Key concepts:** Intelligence explosion, control problem, instrumental convergence

## How to Actually Retain These Books

Reading these books is step one. Retaining them is where Polymind comes in.

Each of these books is available in Polymind, broken down into:
- Core concepts
- Flashcards for spaced repetition
- Connections to other domains

Don't just read these books. **Learn** them. **Remember** them. **Apply** them.

That's what separates a reader from a Polymind.
    `,
    embeds: [],
  },
};

// Helper function to get all articles as an array
export function getAllArticles(): BlogArticle[] {
  return Object.values(blogArticles);
}

// Helper function to get article by ID
export function getArticleById(id: string): BlogArticle | undefined {
  return blogArticles[id];
}

// Helper function to get featured article
export function getFeaturedArticle(): BlogArticle {
  return blogArticles['how-polymind-works'];
}

// Helper function to get recent articles (excluding featured)
export function getRecentArticles(count: number = 4): BlogArticle[] {
  const featured = getFeaturedArticle();
  return getAllArticles()
    .filter(article => article.id !== featured.id)
    .slice(0, count);
}

// Article list for BlogPage
export const featuredPost = getFeaturedArticle();
export const recentPosts = getRecentArticles(8);

export default blogArticles;
