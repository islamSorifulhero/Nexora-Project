import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { blogPosts } from '../data/index';

const categories = ['All', 'Web Design', 'SEO', 'Advertising', 'Case Study'];

export default function Blog() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? blogPosts : blogPosts.filter(p => p.category === active);

  return (
    <div className="font-body pt-16">
      {/* Header */}
      <section className="py-28 px-6 bg-cream-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="text-ink-500 text-sm font-mono mb-3 uppercase tracking-widest">Insights</p>
            <h1 className="font-display text-5xl md:text-6xl font-semibold text-ink-900 leading-tight mb-5">
              Thoughts on the<br />
              <em className="not-italic text-ink-500">digital craft.</em>
            </h1>
            <p className="text-ink-600 text-lg max-w-lg leading-relaxed">
              Practical insights on web design, SEO, advertising, and digital growth — written for founders and operators who want real answers.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 pb-4 bg-cream-50 border-b border-ink-900/8 sticky top-16 z-30 bg-cream-50/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex gap-3 overflow-x-auto py-3 scroll-hide">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`shrink-0 text-sm px-5 py-2 rounded-full border font-medium transition-all duration-200 ${
                active === c
                  ? 'bg-ink-900 text-cream-50 border-ink-900'
                  : 'bg-white text-ink-600 border-ink-900/12 hover:border-ink-900/30'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, i) => (
              <AnimatedSection key={post.id} delay={i * 60}>
                <article className="group bg-cream-50 border border-ink-900/8 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  {/* Card visual */}
                  <div className="bg-gradient-to-br from-cream-200 to-cream-100 h-44 flex items-center justify-center text-5xl border-b border-ink-900/8">
                    {post.image}
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono text-ink-500 bg-white border border-ink-900/10 px-3 py-1 rounded-full">{post.category}</span>
                      <span className="text-xs text-ink-400">{post.readTime}</span>
                    </div>
                    <h2 className="font-display text-lg font-semibold text-ink-900 leading-snug mb-3 group-hover:text-ink-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-ink-600 text-sm leading-relaxed flex-1 mb-5">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-xs text-ink-400 font-mono">{post.date}</span>
                      <button className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-900 group-hover:gap-2.5 transition-all">
                        Read more <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-ink-400 font-body">
              No posts in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-6 bg-cream-100">
        <div className="max-w-xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-semibold text-ink-900 mb-3">Stay in the loop</h2>
            <p className="text-ink-600 text-sm mb-8">One email per week. Practical tactics, no noise.</p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-5 py-3 rounded-full border border-ink-900/15 bg-white text-sm focus:outline-none focus:border-ink-900/40 text-ink-900 placeholder-ink-400"
              />
              <button className="px-6 py-3 bg-ink-900 text-cream-50 rounded-full text-sm font-medium hover:bg-ink-700 transition-colors shrink-0">
                Subscribe
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
