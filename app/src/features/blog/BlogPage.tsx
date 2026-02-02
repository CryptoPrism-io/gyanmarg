import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Clock, User, Tag, Sparkles, Brain, BookOpen, TrendingUp, Zap, Lightbulb, Flame } from 'lucide-react';
import { PolymindLogo } from '@/components/brand';

// Import articles from data file
import { getFeaturedArticle, getAllArticles } from '@/data/blogArticles';

// Get featured article
const featuredPost = getFeaturedArticle();

// Category icons and colors
const categoryConfig: Record<string, { icon: typeof Brain; color: string }> = {
  'Learning Science': { icon: Brain, color: 'amber' },
  'Getting Started': { icon: Zap, color: 'lavender' },
  'How It Works': { icon: Lightbulb, color: 'sage' },
  'Research': { icon: TrendingUp, color: 'sage' },
  'Habits': { icon: Flame, color: 'coral' },
  'Book Lists': { icon: BookOpen, color: 'coral' },
};

// Get unique categories with counts
const categories = [
  { name: 'All Posts', count: getAllArticles().length },
  ...Object.entries(
    getAllArticles().reduce((acc, article) => {
      acc[article.category] = (acc[article.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>)
  ).map(([name, count]) => ({ name, count })),
];

const colorClasses: Record<string, { bg: string; border: string; text: string }> = {
  amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/30', text: 'text-amber-500' },
  sage: { bg: 'bg-sage/10', border: 'border-sage/30', text: 'text-sage' },
  lavender: { bg: 'bg-lavender/10', border: 'border-lavender/30', text: 'text-lavender' },
  coral: { bg: 'bg-coral/10', border: 'border-coral/30', text: 'text-coral' },
};

export function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Posts');

  // Filter posts based on selected category
  const allPosts = getAllArticles();
  const filteredPosts = selectedCategory === 'All Posts'
    ? allPosts
    : allPosts.filter(post => post.category === selectedCategory);

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
          <Link to="/" className="flex items-center gap-2.5">
            <PolymindLogo size="xs" variant="simple" />
            <span className="polymind-brand-text font-display text-lg font-bold tracking-wider">POLYMIND</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
          </Link>
          <Link
            to="/how-to"
            className="text-sm text-amber-500 hover:text-amber-400 transition font-medium"
          >
            How It Works
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-12 px-6 relative overflow-hidden z-10">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-8"
          >
            <Sparkles size={16} className="text-amber-500" />
            <span className="text-xs text-amber-500 font-medium tracking-wider">THE BLOG</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif mb-6"
          >
            <span className="block text-white/90">Insights on Learning,</span>
            <span className="block bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Memory & Knowledge
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-xl mx-auto"
          >
            Research-backed articles on learning science, book recommendations,
            and stories from the Polymind community.
          </motion.p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-8 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20 rounded-2xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Featured Image */}
              <Link to={`/blog/${featuredPost.id}`} className="h-64 md:h-auto overflow-hidden block">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </Link>

              {/* Content */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-amber-500/20 border border-amber-500/30 rounded-full text-xs text-amber-500">
                    {featuredPost.category}
                  </span>
                  <span className="text-xs text-gray-500">{featuredPost.date}</span>
                </div>

                <Link to={`/blog/${featuredPost.id}`}>
                  <h2 className="text-2xl md:text-3xl font-serif text-white mb-4 hover:text-amber-500 transition cursor-pointer">
                    {featuredPost.title}
                  </h2>
                </Link>

                <p className="text-gray-400 mb-6 line-clamp-3">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>

                  <Link to={`/blog/${featuredPost.id}`} className="flex items-center gap-2 text-amber-500 text-sm font-medium hover:gap-3 transition-all">
                    Read Article
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-12 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-serif">
              {selectedCategory === 'All Posts' ? 'Recent Articles' : selectedCategory}
            </h2>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Tag size={16} />
              <span>{filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filteredPosts.map((post, i) => {
              const config = categoryConfig[post.category] || { icon: Brain, color: 'amber' };
              const Icon = config.icon;
              const colors = colorClasses[config.color];

              return (
                <Link to={`/blog/${post.id}`} key={post.id}>
                  <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group glass border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition cursor-pointer hover:shadow-lg hover:shadow-amber-500/5"
                  >
                    {/* Article Image */}
                    <div className="h-40 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center flex-shrink-0 -mt-8 relative z-10 border-2 border-[#111113]`}>
                        <Icon className={`w-5 h-5 ${colors.text}`} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`text-xs ${colors.text}`}>{post.category}</span>
                          <span className="text-gray-600">•</span>
                          <span className="text-xs text-gray-500">{post.date}</span>
                        </div>

                        <h3 className="font-medium text-white group-hover:text-amber-500 transition mb-2 line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-sm text-gray-400 line-clamp-2 mb-4">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Clock size={12} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    </div>
                  </motion.article>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-serif mb-6">Browse by Category</h2>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-4 py-2 glass-light border rounded-lg text-sm transition flex items-center gap-2 ${
                  selectedCategory === category.name
                    ? 'border-amber-500/50 text-amber-500 bg-amber-500/10'
                    : 'border-white/10 text-gray-300 hover:border-amber-500/30 hover:text-amber-500'
                }`}
              >
                {category.name}
                <span className={`text-xs ${selectedCategory === category.name ? 'text-amber-500/70' : 'text-gray-500'}`}>
                  ({category.count})
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-xl mx-auto text-center">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-amber-500 to-amber-400 flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-black" />
          </div>

          <h2 className="text-2xl md:text-3xl font-serif mb-4">
            Get Learning Insights Weekly
          </h2>

          <p className="text-gray-400 mb-8">
            Join 5,000+ readers. One email per week with actionable tips on
            learning, memory, and building your Polymind.
          </p>

          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-4 glass-light border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-amber-500/50 focus:outline-none transition"
            />
            <button
              type="submit"
              className="px-6 py-4 bg-gradient-to-r from-amber-500 to-amber-400 text-black font-semibold rounded-xl hover:opacity-90 transition"
            >
              Subscribe
            </button>
          </form>

          <p className="text-xs text-gray-500 mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
            <div>
              <Link to="/" className="flex items-center gap-2.5 mb-3">
                <PolymindLogo size="sm" variant="simple" />
                <span className="polymind-brand-text font-display text-lg font-bold tracking-wider">POLYMIND</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
              </Link>
              <p className="text-sm text-gray-500">Your mind, unlimited.</p>
            </div>
            <div className="flex gap-12">
              <div>
                <h4 className="font-medium text-sm mb-3 text-gray-300">Product</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li><Link to="/" className="hover:text-white transition">Home</Link></li>
                  <li><Link to="/how-to" className="hover:text-white transition">How It Works</Link></li>
                  <li><Link to="/onboarding" className="hover:text-white transition">Get Started</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-sm mb-3 text-gray-300">Resources</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li><Link to="/science" className="hover:text-white transition">Learning Science</Link></li>
                  <li><Link to="/books" className="hover:text-white transition">Book List</Link></li>
                  <li><Link to="/blog" className="hover:text-amber-500 transition text-amber-500/70">Blog</Link></li>
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

export default BlogPage;
