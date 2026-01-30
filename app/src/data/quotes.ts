export interface Quote {
  text: string;
  author: string;
  source?: string;
}

export const quotes: Quote[] = [
  // Featured - Bruce Lee (index 0 - today's anchor)
  { text: "Absorb what is useful, discard what is useless, add what is uniquely your own.", author: "Bruce Lee" },

  // Atomic Habits - James Clear
  { text: "Habits are the compound interest of self-improvement.", author: "James Clear", source: "Atomic Habits" },
  { text: "You do not rise to the level of your goals. You fall to the level of your systems.", author: "James Clear", source: "Atomic Habits" },
  { text: "Every action you take is a vote for the type of person you wish to become.", author: "James Clear", source: "Atomic Habits" },
  { text: "The task of breaking a bad habit is like uprooting a powerful oak within us.", author: "James Clear", source: "Atomic Habits" },

  // Deep Work - Cal Newport
  { text: "Clarity about what matters provides clarity about what does not.", author: "Cal Newport", source: "Deep Work" },
  { text: "If you don't produce, you won't thrive—no matter how skilled or talented you are.", author: "Cal Newport", source: "Deep Work" },
  { text: "A deep life is a good life, any way you look at it.", author: "Cal Newport", source: "Deep Work" },

  // Thinking, Fast and Slow - Daniel Kahneman
  { text: "Nothing in life is as important as you think it is while you are thinking about it.", author: "Daniel Kahneman", source: "Thinking, Fast and Slow" },
  { text: "We are prone to overestimate how much we understand about the world.", author: "Daniel Kahneman", source: "Thinking, Fast and Slow" },
  { text: "The confidence we have in our beliefs is not a measure of the quality of evidence.", author: "Daniel Kahneman", source: "Thinking, Fast and Slow" },

  // Antifragile - Nassim Taleb
  { text: "Wind extinguishes a candle and energizes fire. You want to be the fire.", author: "Nassim Nicholas Taleb", source: "Antifragile" },
  { text: "The three most harmful addictions are heroin, carbohydrates, and a monthly salary.", author: "Nassim Nicholas Taleb", source: "Antifragile" },
  { text: "Difficulty is what wakes up the genius.", author: "Nassim Nicholas Taleb", source: "Antifragile" },

  // The Black Swan - Nassim Taleb
  { text: "Missing a train is only painful if you run after it.", author: "Nassim Nicholas Taleb", source: "The Black Swan" },
  { text: "The inability to predict outliers implies the inability to predict the course of history.", author: "Nassim Nicholas Taleb", source: "The Black Swan" },

  // The Intelligent Investor - Benjamin Graham
  { text: "The intelligent investor is a realist who sells to optimists and buys from pessimists.", author: "Benjamin Graham", source: "The Intelligent Investor" },
  { text: "In the short run, the market is a voting machine. In the long run, it is a weighing machine.", author: "Benjamin Graham", source: "The Intelligent Investor" },
  { text: "The investor's chief problem—and even his worst enemy—is likely to be himself.", author: "Benjamin Graham", source: "The Intelligent Investor" },

  // Never Split the Difference - Chris Voss
  { text: "He who has learned to disagree without being disagreeable has discovered the most valuable secret of negotiation.", author: "Chris Voss", source: "Never Split the Difference" },
  { text: "Tactical empathy is understanding the feelings and mindset of another in the moment.", author: "Chris Voss", source: "Never Split the Difference" },
  { text: "No deal is better than a bad deal.", author: "Chris Voss", source: "Never Split the Difference" },

  // Man's Search for Meaning - Viktor Frankl
  { text: "He who has a why to live can bear almost any how.", author: "Viktor Frankl", source: "Man's Search for Meaning" },
  { text: "When we are no longer able to change a situation, we are challenged to change ourselves.", author: "Viktor Frankl", source: "Man's Search for Meaning" },
  { text: "Everything can be taken from a man but one thing: the last of human freedoms.", author: "Viktor Frankl", source: "Man's Search for Meaning" },

  // The Subtle Art - Mark Manson
  { text: "The desire for more positive experience is itself a negative experience.", author: "Mark Manson", source: "The Subtle Art" },
  { text: "Who you are is defined by what you're willing to struggle for.", author: "Mark Manson", source: "The Subtle Art" },

  // Mindset - Carol Dweck
  { text: "Becoming is better than being.", author: "Carol Dweck", source: "Mindset" },
  { text: "The view you adopt for yourself profoundly affects the way you lead your life.", author: "Carol Dweck", source: "Mindset" },
  { text: "No matter what your ability is, effort is what ignites that ability and turns it into accomplishment.", author: "Carol Dweck", source: "Mindset" },

  // Bruce Lee
  { text: "Be water, my friend. Empty your mind, be formless, shapeless—like water.", author: "Bruce Lee" },
  { text: "Absorb what is useful, discard what is useless, add what is uniquely your own.", author: "Bruce Lee" },
  { text: "I fear not the man who has practiced 10,000 kicks once, but the man who has practiced one kick 10,000 times.", author: "Bruce Lee" },
  { text: "Knowing is not enough, we must apply. Willing is not enough, we must do.", author: "Bruce Lee" },

  // Influence - Robert Cialdini
  { text: "People prefer to say yes to those they know and like.", author: "Robert Cialdini", source: "Influence" },
  { text: "The way to love anything is to realize that it might be lost.", author: "Robert Cialdini", source: "Influence" },

  // Stoic Philosophy - Marcus Aurelius
  { text: "You have power over your mind—not outside events. Realize this, and you will find strength.", author: "Marcus Aurelius", source: "Meditations" },
  { text: "The happiness of your life depends upon the quality of your thoughts.", author: "Marcus Aurelius", source: "Meditations" },
  { text: "Waste no more time arguing about what a good man should be. Be one.", author: "Marcus Aurelius", source: "Meditations" },
  { text: "The best revenge is to be unlike him who performed the injury.", author: "Marcus Aurelius", source: "Meditations" },

  // Seneca
  { text: "We suffer more often in imagination than in reality.", author: "Seneca" },
  { text: "Luck is what happens when preparation meets opportunity.", author: "Seneca" },
  { text: "It is not that we have a short time to live, but that we waste a lot of it.", author: "Seneca" },

  // Epictetus
  { text: "It's not what happens to you, but how you react to it that matters.", author: "Epictetus" },
  { text: "First say to yourself what you would be; and then do what you have to do.", author: "Epictetus" },

  // Why We Sleep - Matthew Walker
  { text: "The best bridge between despair and hope is a good night's sleep.", author: "Matthew Walker", source: "Why We Sleep" },
  { text: "Sleep is the single most effective thing we can do to reset our brain and body health.", author: "Matthew Walker", source: "Why We Sleep" },

  // Outlive - Peter Attia
  { text: "The objective is to live longer and live better—to extend lifespan while also extending healthspan.", author: "Peter Attia", source: "Outlive" },
  { text: "Exercise is by far the most potent longevity drug.", author: "Peter Attia", source: "Outlive" },

  // Wim Hof
  { text: "If you can learn how to use your mind, anything is possible.", author: "Wim Hof", source: "The Wim Hof Method" },
  { text: "The cold is your warm friend and one of the greatest teachers.", author: "Wim Hof", source: "The Wim Hof Method" },

  // Andrew Huberman
  { text: "Your nervous system doesn't care about your goals. It responds to what you do, not what you want.", author: "Dr. Andrew Huberman" },
  { text: "Dopamine is not about reward. It's about motivation and pursuit.", author: "Dr. Andrew Huberman" },

  // Warren Buffett
  { text: "The most important investment you can make is in yourself.", author: "Warren Buffett" },
  { text: "Risk comes from not knowing what you're doing.", author: "Warren Buffett" },
  { text: "Someone is sitting in the shade today because someone planted a tree a long time ago.", author: "Warren Buffett" },

  // Charlie Munger
  { text: "Spend each day trying to be a little wiser than you were when you woke up.", author: "Charlie Munger" },
  { text: "The best thing a human being can do is to help another human being know more.", author: "Charlie Munger" },
  { text: "Invert, always invert: Turn a situation or problem upside down.", author: "Charlie Munger" },

  // Naval Ravikant
  { text: "Seek wealth, not money or status. Wealth is having assets that earn while you sleep.", author: "Naval Ravikant" },
  { text: "The most important skill for getting rich is becoming a perpetual learner.", author: "Naval Ravikant" },
  { text: "A fit body, a calm mind, a house full of love. These things cannot be bought—they must be earned.", author: "Naval Ravikant" },

  // Ray Dalio
  { text: "Pain plus reflection equals progress.", author: "Ray Dalio", source: "Principles" },
  { text: "If you're not failing, you're not pushing your limits.", author: "Ray Dalio", source: "Principles" },

  // Jeff Bezos
  { text: "In the long run, your decisions are the sum of your habits.", author: "Jeff Bezos" },
  { text: "I knew that if I failed I wouldn't regret that, but I knew the one thing I might regret is not trying.", author: "Jeff Bezos" },

  // Elon Musk
  { text: "When something is important enough, you do it even if the odds are not in your favor.", author: "Elon Musk" },
  { text: "It is possible for ordinary people to choose to be extraordinary.", author: "Elon Musk" },

  // Steve Jobs
  { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
  { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },

  // Albert Einstein
  { text: "Compound interest is the eighth wonder of the world.", author: "Albert Einstein" },
  { text: "The measure of intelligence is the ability to change.", author: "Albert Einstein" },
  { text: "Imagination is more important than knowledge.", author: "Albert Einstein" },

  // Richard Feynman
  { text: "The first principle is that you must not fool yourself—and you are the easiest person to fool.", author: "Richard Feynman" },
  { text: "I would rather have questions that can't be answered than answers that can't be questioned.", author: "Richard Feynman" },

  // Carl Sagan
  { text: "Somewhere, something incredible is waiting to be known.", author: "Carl Sagan" },

  // Lao Tzu
  { text: "The journey of a thousand miles begins with a single step.", author: "Lao Tzu", source: "Tao Te Ching" },
  { text: "Knowing others is intelligence; knowing yourself is true wisdom.", author: "Lao Tzu", source: "Tao Te Ching" },
  { text: "Nature does not hurry, yet everything is accomplished.", author: "Lao Tzu", source: "Tao Te Ching" },

  // Buddha
  { text: "What you think, you become. What you feel, you attract. What you imagine, you create.", author: "Buddha" },
  { text: "The mind is everything. What you think you become.", author: "Buddha" },

  // Confucius
  { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { text: "The man who moves a mountain begins by carrying away small stones.", author: "Confucius" },

  // Aristotle
  { text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Aristotle" },
  { text: "Knowing yourself is the beginning of all wisdom.", author: "Aristotle" },

  // Socrates
  { text: "The unexamined life is not worth living.", author: "Socrates" },
  { text: "I know that I know nothing.", author: "Socrates" },

  // Friedrich Nietzsche
  { text: "He who has a why to live for can bear almost any how.", author: "Friedrich Nietzsche" },
  { text: "That which does not kill us makes us stronger.", author: "Friedrich Nietzsche" },

  // Rumi
  { text: "Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.", author: "Rumi" },
  { text: "The wound is the place where the Light enters you.", author: "Rumi" },

  // Miyamoto Musashi
  { text: "There is nothing outside of yourself that can ever enable you to get better, stronger, richer, quicker, or smarter. Everything is within.", author: "Miyamoto Musashi", source: "The Book of Five Rings" },
  { text: "Think lightly of yourself and deeply of the world.", author: "Miyamoto Musashi", source: "The Book of Five Rings" },

  // Sun Tzu
  { text: "Victorious warriors win first and then go to war, while defeated warriors go to war first and then seek to win.", author: "Sun Tzu", source: "The Art of War" },
  { text: "Know yourself and you will win all battles.", author: "Sun Tzu", source: "The Art of War" },

  // Seth Godin
  { text: "The only thing worse than starting something and failing is not starting something.", author: "Seth Godin" },
  { text: "Instead of wondering when your next vacation is, set up a life you don't need to escape from.", author: "Seth Godin" },

  // Tim Ferriss
  { text: "Focus on being productive instead of busy.", author: "Tim Ferriss", source: "The 4-Hour Workweek" },
  { text: "What we fear doing most is usually what we most need to do.", author: "Tim Ferriss", source: "The 4-Hour Workweek" },

  // Ryan Holiday
  { text: "The obstacle is the way.", author: "Ryan Holiday", source: "The Obstacle Is the Way" },
  { text: "Ego is the enemy of what you want and of what you have.", author: "Ryan Holiday", source: "Ego Is the Enemy" },

  // Simon Sinek
  { text: "People don't buy what you do; they buy why you do it.", author: "Simon Sinek", source: "Start with Why" },
  { text: "Working hard for something we don't care about is called stress. Working hard for something we love is called passion.", author: "Simon Sinek" },

  // Brené Brown
  { text: "Vulnerability is not weakness. It's our greatest measure of courage.", author: "Brené Brown" },
  { text: "You can choose courage or you can choose comfort. You cannot have both.", author: "Brené Brown" },

  // Jordan Peterson
  { text: "Compare yourself to who you were yesterday, not to who someone else is today.", author: "Jordan Peterson", source: "12 Rules for Life" },
  { text: "Set your house in perfect order before you criticize the world.", author: "Jordan Peterson", source: "12 Rules for Life" },

  // David Goggins
  { text: "You are in danger of living a life so comfortable and soft that you will die without ever realizing your potential.", author: "David Goggins", source: "Can't Hurt Me" },
  { text: "The only way to grow is to suffer.", author: "David Goggins", source: "Can't Hurt Me" },

  // Jocko Willink
  { text: "Discipline equals freedom.", author: "Jocko Willink" },
  { text: "Don't expect to be motivated every day. You have to be driven.", author: "Jocko Willink" },

  // Marcus Tullius Cicero
  { text: "A room without books is like a body without a soul.", author: "Cicero" },

  // Leonardo da Vinci
  { text: "Learning never exhausts the mind.", author: "Leonardo da Vinci" },
  { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },

  // Benjamin Franklin
  { text: "An investment in knowledge pays the best interest.", author: "Benjamin Franklin" },
  { text: "By failing to prepare, you are preparing to fail.", author: "Benjamin Franklin" },

  // Theodore Roosevelt
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },

  // Winston Churchill
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "If you're going through hell, keep going.", author: "Winston Churchill" },

  // Mahatma Gandhi
  { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
  { text: "Live as if you were to die tomorrow. Learn as if you were to live forever.", author: "Mahatma Gandhi" },

  // Nelson Mandela
  { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
  { text: "Education is the most powerful weapon which you can use to change the world.", author: "Nelson Mandela" },

  // Martin Luther King Jr.
  { text: "The time is always right to do what is right.", author: "Martin Luther King Jr." },
  { text: "If you can't fly then run, if you can't run then walk, if you can't walk then crawl, but whatever you do, keep moving forward.", author: "Martin Luther King Jr." },
];

// Anchor date - the day we set as "day 0" for the Bruce Lee quote
// This ensures the first quote (Bruce Lee) shows on this date
const ANCHOR_DATE = new Date('2025-01-30');

// Get the number of days since anchor date
function getDaysSinceAnchor(date: Date = new Date()): number {
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const anchor = new Date(ANCHOR_DATE.getFullYear(), ANCHOR_DATE.getMonth(), ANCHOR_DATE.getDate());
  const diff = d.getTime() - anchor.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

// Get a quote based on the day (deterministic daily rotation)
export function getDailyQuote(date: Date = new Date()): Quote {
  const dayIndex = getDaysSinceAnchor(date);
  // Handle negative indices for dates before anchor
  const index = ((dayIndex % quotes.length) + quotes.length) % quotes.length;
  return quotes[index];
}

// Get quotes for the past N days (including today)
export function getPastQuotes(days: number = 30): { date: Date; quote: Quote }[] {
  const result: { date: Date; quote: Quote }[] = [];
  const today = new Date();

  for (let i = 0; i < days; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    result.push({
      date,
      quote: getDailyQuote(date),
    });
  }

  return result;
}

// Get a random quote
export function getRandomQuote(): Quote {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

// Format date for display
export function formatQuoteDate(date: Date): string {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  if (date.toDateString() === today.toDateString()) {
    return 'Today';
  } else if (date.toDateString() === yesterday.toDateString()) {
    return 'Yesterday';
  } else {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  }
}

export default quotes;
