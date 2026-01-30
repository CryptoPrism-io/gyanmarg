import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Search, BookOpen, ChevronDown, Sparkles, Brain } from 'lucide-react';

// AI Images
import imgHeroBooksTransform from '@/assets/ai-images/landing/hero-books-transform.png';
import imgDomainPsychology from '@/assets/ai-images/domains/domain-psychology.png';
import imgDomainProductivity from '@/assets/ai-images/domains/domain-productivity.png';
import imgDomainAI from '@/assets/ai-images/domains/domain-ai.png';
import imgDomainWealth from '@/assets/ai-images/domains/domain-wealth.png';
import imgDomainPhilosophy from '@/assets/ai-images/domains/domain-philosophy.png';
import imgDomainLeadership from '@/assets/ai-images/domains/domain-leadership.png';

// Domain images map
const domainImages: Record<string, string> = {
  psychology: imgDomainPsychology,
  productivity: imgDomainProductivity,
  ai: imgDomainAI,
  wealth: imgDomainWealth,
  philosophy: imgDomainPhilosophy,
  leadership: imgDomainLeadership,
};

// Book data organized by domain
const booksByDomain = {
  psychology: {
    name: 'Psychology',
    color: 'lavender',
    books: [
      { title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman', concepts: 28, flashcards: 89 },
      { title: 'Influence', author: 'Robert Cialdini', concepts: 18, flashcards: 54 },
      { title: 'Predictably Irrational', author: 'Dan Ariely', concepts: 15, flashcards: 42 },
      { title: 'The Psychology of Money', author: 'Morgan Housel', concepts: 20, flashcards: 60 },
      { title: 'Stumbling on Happiness', author: 'Daniel Gilbert', concepts: 14, flashcards: 38 },
    ],
  },
  productivity: {
    name: 'Productivity',
    color: 'sage',
    books: [
      { title: 'Atomic Habits', author: 'James Clear', concepts: 24, flashcards: 72 },
      { title: 'Deep Work', author: 'Cal Newport', concepts: 16, flashcards: 48 },
      { title: 'The 4-Hour Workweek', author: 'Tim Ferriss', concepts: 20, flashcards: 55 },
      { title: 'Getting Things Done', author: 'David Allen', concepts: 18, flashcards: 50 },
      { title: 'Essentialism', author: 'Greg McKeown', concepts: 14, flashcards: 40 },
    ],
  },
  ai: {
    name: 'AI & Technology',
    color: 'amber',
    books: [
      { title: 'AI 2041', author: 'Kai-Fu Lee', concepts: 22, flashcards: 65 },
      { title: 'Life 3.0', author: 'Max Tegmark', concepts: 18, flashcards: 52 },
      { title: 'The Alignment Problem', author: 'Brian Christian', concepts: 20, flashcards: 58 },
      { title: 'Superintelligence', author: 'Nick Bostrom', concepts: 16, flashcards: 45 },
      { title: 'Human Compatible', author: 'Stuart Russell', concepts: 15, flashcards: 42 },
    ],
  },
  wealth: {
    name: 'Wealth Building',
    color: 'golden',
    books: [
      { title: 'The Intelligent Investor', author: 'Benjamin Graham', concepts: 25, flashcards: 78 },
      { title: 'Rich Dad Poor Dad', author: 'Robert Kiyosaki', concepts: 18, flashcards: 52 },
      { title: 'The Millionaire Next Door', author: 'Thomas Stanley', concepts: 16, flashcards: 45 },
      { title: 'A Random Walk Down Wall Street', author: 'Burton Malkiel', concepts: 20, flashcards: 58 },
      { title: 'The Little Book of Common Sense Investing', author: 'John Bogle', concepts: 14, flashcards: 40 },
    ],
  },
  philosophy: {
    name: 'Philosophy',
    color: 'coral',
    books: [
      { title: 'Meditations', author: 'Marcus Aurelius', concepts: 22, flashcards: 68 },
      { title: 'Man\'s Search for Meaning', author: 'Viktor Frankl', concepts: 16, flashcards: 48 },
      { title: 'The Daily Stoic', author: 'Ryan Holiday', concepts: 30, flashcards: 90 },
      { title: 'Letters from a Stoic', author: 'Seneca', concepts: 24, flashcards: 72 },
      { title: 'The Tao of Pooh', author: 'Benjamin Hoff', concepts: 12, flashcards: 35 },
    ],
  },
  leadership: {
    name: 'Leadership',
    color: 'sunrise',
    books: [
      { title: 'Start with Why', author: 'Simon Sinek', concepts: 14, flashcards: 42 },
      { title: 'Good to Great', author: 'Jim Collins', concepts: 18, flashcards: 55 },
      { title: 'The 7 Habits of Highly Effective People', author: 'Stephen Covey', concepts: 22, flashcards: 68 },
      { title: 'Leaders Eat Last', author: 'Simon Sinek', concepts: 16, flashcards: 48 },
      { title: 'Extreme Ownership', author: 'Jocko Willink', concepts: 15, flashcards: 45 },
    ],
  },
};

const domains = Object.entries(booksByDomain);

const colorClasses: Record<string, { bg: string; border: string; text: string }> = {
  lavender: { bg: 'bg-lavender/10', border: 'border-lavender/30', text: 'text-lavender' },
  sage: { bg: 'bg-sage/10', border: 'border-sage/30', text: 'text-sage' },
  amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/30', text: 'text-amber-500' },
  golden: { bg: 'bg-golden/10', border: 'border-golden/30', text: 'text-golden' },
  coral: { bg: 'bg-coral/10', border: 'border-coral/30', text: 'text-coral' },
  sunrise: { bg: 'bg-sunrise/10', border: 'border-sunrise/30', text: 'text-sunrise' },
};

// Calculate totals
const totalBooks = domains.reduce((acc, [_, domain]) => acc + domain.books.length, 0);
const totalConcepts = domains.reduce(
  (acc, [_, domain]) => acc + domain.books.reduce((a, b) => a + b.concepts, 0),
  0
);
const totalFlashcards = domains.reduce(
  (acc, [_, domain]) => acc + domain.books.reduce((a, b) => a + b.flashcards, 0),
  0
);

export function BookListPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);

  const filteredDomains = domains.filter(([key, domain]) => {
    if (selectedDomain && key !== selectedDomain) return false;
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        domain.name.toLowerCase().includes(query) ||
        domain.books.some(
          (book) =>
            book.title.toLowerCase().includes(query) ||
            book.author.toLowerCase().includes(query)
        )
      );
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white relative">
      {/* ===== ANIMATED GRADIENT BACKGROUND ===== */}
      <div className="animated-gradient-bg">
        <div className="wave-orb wave-orb-1" />
        <div className="wave-orb wave-orb-2" />
        <div className="wave-orb wave-orb-3" />
        <div className="wave-orb wave-orb-4" />
        {/* Particle dots */}
        <div className="particles-container">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 25}s`,
                animationDuration: `${20 + Math.random() * 15}s`,
              }}
            />
          ))}
        </div>
        {/* Wave lines */}
        <div className="wave-lines">
          <div className="wave-line wave-line-1" />
          <div className="wave-line wave-line-2" />
          <div className="wave-line wave-line-3" />
        </div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition">
            <ArrowLeft size={20} />
            <span className="text-sm">Back</span>
          </Link>
          <Link to="/" className="flex items-center gap-2">
            <span className="font-mono text-lg font-semibold tracking-wider">POLYMIND</span>
            <span className="w-2 h-2 rounded-full bg-amber-500" />
          </Link>
          <div className="w-16" />
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-12 px-6 relative overflow-hidden z-10">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img src={imgHeroBooksTransform} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B] via-transparent to-[#0A0A0B]" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-8"
          >
            <BookOpen size={16} className="text-amber-500" />
            <span className="text-xs text-amber-500 font-medium tracking-wider">THE LIBRARY</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif mb-6"
          >
            <span className="text-6xl md:text-7xl font-bold text-amber-500/20 block -mb-4">1000+</span>
            <span className="block text-white/90">World-Class Authors</span>
            <span className="block text-gray-500 font-light text-2xl md:text-3xl mt-2">One Unforgettable System</span>
          </motion.h1>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-8 mt-8"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-500">{totalBooks}+</div>
              <div className="text-xs text-gray-500">Books</div>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="text-center">
              <div className="text-2xl font-bold text-sage">{totalConcepts}+</div>
              <div className="text-xs text-gray-500">Concepts</div>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="text-center">
              <div className="text-2xl font-bold text-lavender">{totalFlashcards}+</div>
              <div className="text-xs text-gray-500">Flashcards</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-6 px-6 sticky top-16 z-40 glass-nav border-b border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search books or authors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 glass-light border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-amber-500/50 focus:outline-none transition"
            />
          </div>

          {/* Domain Filter */}
          <div className="relative">
            <select
              value={selectedDomain || ''}
              onChange={(e) => setSelectedDomain(e.target.value || null)}
              className="appearance-none px-4 py-3 pr-10 glass-light border border-white/10 rounded-xl text-white focus:border-amber-500/50 focus:outline-none transition cursor-pointer"
            >
              <option value="">All Domains</option>
              {domains.map(([key, domain]) => (
                <option key={key} value={key}>{domain.name}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Book List by Domain */}
      <section className="py-12 px-6 relative z-10">
        <div className="max-w-6xl mx-auto space-y-12">
          {filteredDomains.map(([key, domain]) => {
            const colors = colorClasses[domain.color];
            const filteredBooks = searchQuery
              ? domain.books.filter(
                  (book) =>
                    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    book.author.toLowerCase().includes(searchQuery.toLowerCase())
                )
              : domain.books;

            if (filteredBooks.length === 0) return null;

            const domainImage = domainImages[key];

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {/* Domain Header with Image */}
                <div className={`${colors.bg} border ${colors.border} rounded-2xl overflow-hidden mb-6`}>
                  <div className="flex items-center">
                    {/* Domain Image */}
                    {domainImage && (
                      <div className="w-32 h-24 flex-shrink-0 overflow-hidden hidden md:block">
                        <img src={domainImage} alt={domain.name} className="w-full h-full object-cover" />
                      </div>
                    )}
                    <div className="p-4 flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colors.bg} border ${colors.border} flex items-center justify-center md:hidden`}>
                        <BookOpen className={`w-5 h-5 ${colors.text}`} />
                      </div>
                      <div>
                        <h2 className={`text-xl font-semibold ${colors.text}`}>{domain.name}</h2>
                        <p className="text-sm text-gray-500">{domain.books.length} books</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Books Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredBooks.map((book, i) => (
                    <motion.div
                      key={book.title}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="group glass-light border border-white/10 rounded-xl p-5 hover:border-white/20 transition cursor-pointer hover:shadow-lg hover:shadow-amber-500/5"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-medium text-white group-hover:text-amber-500 transition line-clamp-1">
                            {book.title}
                          </h3>
                          <p className="text-sm text-gray-500">{book.author}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-xs text-gray-400">
                        <div className="flex items-center gap-1">
                          <Brain className="w-3 h-3" />
                          <span>{book.concepts} concepts</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          <span>{book.flashcards} cards</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="py-12 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-lavender/10 border border-lavender/20 rounded-full mb-4">
            <Sparkles size={16} className="text-lavender" />
            <span className="text-xs text-lavender font-medium">GROWING DAILY</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">More Books Being Added</h3>
          <p className="text-gray-400 max-w-md mx-auto">
            Our team is constantly extracting concepts and creating flashcards from
            new bestsellers. Check back regularly for updates.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif mb-4">
            Ready to Master These Books?
          </h2>
          <p className="text-gray-400 mb-8">
            Start building your Polymind and never forget what you read.
          </p>
          <Link
            to="/onboarding"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-400 text-black font-semibold rounded-xl hover:opacity-90 transition"
          >
            Build Your Polymind — Free
            <Sparkles size={20} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
            <div>
              <Link to="/" className="flex items-center gap-2 mb-3">
                <span className="font-mono text-lg font-semibold tracking-wider">POLYMIND</span>
                <span className="w-2 h-2 rounded-full bg-amber-500" />
              </Link>
              <p className="text-sm text-gray-500">Your mind, unlimited.</p>
            </div>
            <div className="flex gap-12">
              <div>
                <h4 className="font-medium text-sm mb-3 text-gray-300">Product</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li><Link to="/" className="hover:text-white transition">Home</Link></li>
                  <li><Link to="/onboarding" className="hover:text-white transition">Get Started</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-sm mb-3 text-gray-300">Resources</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li><Link to="/science" className="hover:text-white transition">Learning Science</Link></li>
                  <li><Link to="/books" className="hover:text-amber-500 transition text-amber-500/70">Book List</Link></li>
                  <li><Link to="/blog" className="hover:text-white transition">Blog</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-6 border-t border-white/5 flex items-center justify-between">
            <p className="text-sm text-gray-600">© 2025 Polymind</p>
            <div className="flex gap-4 text-sm text-gray-500">
              <a href="https://twitter.com/polymind" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Twitter</a>
              <a href="https://github.com/polymind-app" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default BookListPage;
