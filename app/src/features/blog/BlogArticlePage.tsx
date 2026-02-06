import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, User, Calendar, Share2, BookmarkPlus, ArrowRight } from 'lucide-react';
import { getArticleById, type BlogArticle, type BlogEmbed as BlogEmbedType } from '@/data/blogArticles';
import { BlogEmbed } from '@/components/molecules';
import { PolymindLogo } from '@/components/brand';

export function BlogArticlePage() {
  const { articleId } = useParams<{ articleId: string }>();
  const article = articleId ? getArticleById(articleId) : null;

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
          <Link to="/" className="flex items-center gap-2.5">
            <PolymindLogo size="xs" variant="simple" />
            <span className="polymind-brand-text font-display text-lg font-bold tracking-wider">POLYMIND</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
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

          {/* Article Body with Embeds */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="prose prose-invert prose-lg max-w-none font-light"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            <ArticleContent article={article} />
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
              to="/dashboard"
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
          <Link to="/" className="flex items-center gap-2.5">
            <PolymindLogo size="xs" variant="simple" />
            <span className="polymind-brand-text font-display text-lg font-bold tracking-wider">POLYMIND</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
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

// Article Content Component with Embed Support
function ArticleContent({ article }: { article: BlogArticle }) {
  const { content, embeds = [] } = article;
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let paragraphCount = 0;
  let listItems: { text: string; key: number }[] = [];

  // Create a map of paragraph number to embeds
  const embedMap = new Map<number, BlogEmbedType[]>();
  embeds.forEach(embed => {
    const existing = embedMap.get(embed.afterParagraph) || [];
    embedMap.set(embed.afterParagraph, [...existing, embed]);
  });

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
              {parseInlineFormatting(item.text)}
            </li>
          ))}
        </ol>
      );
      listItems = [];
    }
  };

  const checkAndInsertEmbeds = (afterParagraph: number) => {
    const embedsToInsert = embedMap.get(afterParagraph);
    if (embedsToInsert) {
      embedsToInsert.forEach(embed => {
        elements.push(
          <BlogEmbed
            key={embed.id}
            type={embed.type}
            props={embed.props}
          />
        );
      });
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

    // Regular paragraph
    paragraphCount++;
    elements.push(
      <p key={i} className="text-gray-400 leading-loose mb-5 text-lg font-light tracking-wide">
        {parseInlineFormatting(trimmed)}
      </p>
    );

    // Check for embeds after this paragraph
    checkAndInsertEmbeds(paragraphCount);
  });

  // Flush any remaining list items
  flushList();

  return <>{elements}</>;
}

// Parse inline formatting (bold text)
function parseInlineFormatting(text: string): React.ReactNode[] {
  const parts = text.split('**');
  return parts.map((part, j) =>
    j % 2 === 1 ? (
      <span key={j} className="text-white/90 font-normal">
        {part}
      </span>
    ) : (
      part
    )
  );
}

export default BlogArticlePage;
