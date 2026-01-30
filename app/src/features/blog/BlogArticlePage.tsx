import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, User, Calendar, Share2, BookmarkPlus, ArrowRight } from 'lucide-react';

// AI Images
import imgPolymind from '@/assets/ai-images/onboarding/onboarding-03-polymind.png';
import imgSpacedRepetition from '@/assets/ai-images/landing/feature-spaced-repetition.png';
import imgVisualLearning from '@/assets/ai-images/landing/feature-visual-learning.png';
import imgGamification from '@/assets/ai-images/landing/feature-gamification.png';
import imgBooksTransform from '@/assets/ai-images/landing/hero-books-transform.png';

// Article content database
const articles: Record<string, {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: string;
}> = {
  'why-you-forget': {
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
  },
  'spaced-repetition-guide': {
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
  },
  'active-recall-vs-passive': {
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
  },
  'building-polymind-guide': {
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
  },
  '10-books-change-thinking': {
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
  },
};

export function BlogArticlePage() {
  const { articleId } = useParams<{ articleId: string }>();
  const article = articleId ? articles[articleId] : null;

  if (!article) {
    return (
      <div className="min-h-screen bg-[#0A0A0B] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">Article Not Found</h1>
          <Link to="/blog" className="text-amber-500 hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white relative">
      {/* Animated Background */}
      <div className="animated-gradient-bg">
        <div className="wave-orb wave-orb-1" />
        <div className="wave-orb wave-orb-2" />
        <div className="wave-orb wave-orb-3" />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/blog" className="flex items-center gap-2 text-gray-400 hover:text-white transition">
            <ArrowLeft size={20} />
            <span className="text-sm">Back to Blog</span>
          </Link>
          <Link to="/" className="flex items-center gap-2">
            <span className="font-mono text-lg font-semibold tracking-wider">POLYMIND</span>
            <span className="w-2 h-2 rounded-full bg-amber-500" />
          </Link>
          <div className="flex items-center gap-2">
            <button className="p-2 text-gray-400 hover:text-white transition">
              <Share2 size={20} />
            </button>
            <button className="p-2 text-gray-400 hover:text-amber-500 transition">
              <BookmarkPlus size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="pt-24 pb-20 px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Category & Meta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="px-3 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full text-xs text-amber-500 font-normal tracking-wide">
              {article.category}
            </span>
            <span className="text-gray-500 text-sm font-light">{article.date}</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal mb-6 leading-tight tracking-tight"
          >
            {article.title}
          </motion.h1>

          {/* Author & Read Time */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-6 mb-8 pb-8 border-b border-white/5"
          >
            <div className="flex items-center gap-2 text-gray-500 text-sm font-light">
              <User size={14} strokeWidth={1.5} />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm font-light">
              <Clock size={14} strokeWidth={1.5} />
              <span>{article.readTime}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm font-light">
              <Calendar size={14} strokeWidth={1.5} />
              <span>{article.date}</span>
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-2xl overflow-hidden mb-12"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-64 md:h-80 object-cover"
            />
          </motion.div>

          {/* Article Body */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="prose prose-invert prose-lg max-w-none font-light"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            {(() => {
              const lines = article.content.split('\n');
              const elements: React.ReactNode[] = [];
              let listItems: { text: string; key: number }[] = [];

              const flushList = () => {
                if (listItems.length > 0) {
                  elements.push(
                    <ol
                      key={`list-${listItems[0].key}`}
                      className="ml-8 mb-6 space-y-3"
                      style={{ listStyleType: 'decimal', listStylePosition: 'outside' }}
                    >
                      {listItems.map((item) => (
                        <li
                          key={item.key}
                          className="text-gray-400 leading-relaxed font-light pl-2"
                          style={{ display: 'list-item' }}
                        >
                          {item.text.split('**').map((part, j) =>
                            j % 2 === 1 ? <span key={j} className="text-white/90 font-normal">{part}</span> : part
                          )}
                        </li>
                      ))}
                    </ol>
                  );
                  listItems = [];
                }
              };

              lines.forEach((paragraph, i) => {
                const trimmed = paragraph.trim();
                if (!trimmed) return;

                // Check if it's a list item (bullet or numbered)
                const isBullet = trimmed.startsWith('- ');
                const isNumbered = /^\d+\. /.test(trimmed);

                if (isBullet || isNumbered) {
                  const text = isBullet
                    ? trimmed.replace('- ', '')
                    : trimmed.replace(/^\d+\. /, '');
                  listItems.push({ text, key: i });
                  return;
                }

                // Flush any pending list items before other content
                flushList();

                if (trimmed.startsWith('## ')) {
                  elements.push(
                    <h2 key={i} className="text-2xl font-medium mt-12 mb-5 text-white/95 tracking-tight">
                      {trimmed.replace('## ', '')}
                    </h2>
                  );
                  return;
                }
                if (trimmed.startsWith('### ')) {
                  elements.push(
                    <h3 key={i} className="text-xl font-medium mt-10 mb-4 text-white/90 tracking-tight">
                      {trimmed.replace('### ', '')}
                    </h3>
                  );
                  return;
                }

                // Parse bold text for paragraphs
                const parts = trimmed.split('**');
                elements.push(
                  <p key={i} className="text-gray-400 leading-loose mb-5 text-lg font-light tracking-wide">
                    {parts.map((part, j) =>
                      j % 2 === 1 ? <span key={j} className="text-white/90 font-normal">{part}</span> : part
                    )}
                  </p>
                );
              });

              // Flush any remaining list items
              flushList();

              return elements;
            })()}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 p-10 glass-accent rounded-2xl text-center"
          >
            <h3 className="text-2xl font-medium mb-4 tracking-tight">Ready to Build Your Polymind?</h3>
            <p className="text-gray-500 mb-8 font-light text-lg">
              Stop forgetting what you read. Start building knowledge that lasts.
            </p>
            <Link
              to="/onboarding"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-400 text-black font-medium rounded-xl hover:opacity-90 transition"
              style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), 0 8px 32px rgba(245,158,11,0.3)' }}
            >
              Get Started Free
              <ArrowRight size={20} strokeWidth={2} />
            </Link>
          </motion.div>
        </div>
      </article>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-mono text-lg font-semibold tracking-wider">POLYMIND</span>
            <span className="w-2 h-2 rounded-full bg-amber-500" />
          </Link>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link to="/blog" className="hover:text-white transition">Blog</Link>
            <Link to="/science" className="hover:text-white transition">Learning Science</Link>
            <Link to="/books" className="hover:text-white transition">Book List</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default BlogArticlePage;
