import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import TestimonialCard from '../components/TestimonialCard';
import { services, testimonials, logos, stats } from '../data/index';

const benefits = [
  'Clarity-first design that builds trust instantly',
  'SEO and performance built-in from day one',
  'Data-driven advertising with full transparency',
  'Dedicated team, not outsourced handoffs',
  'Reporting and communication you can rely on',
  'Results-focused, not just deliverables-focused',
];

export default function Home() {
  return (
    <div className="font-body">
      {/* HERO */}
      <section className="min-h-screen bg-cream-50 flex flex-col justify-center pt-24 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sage-400/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-400/10 rounded-full blur-3xl -translate-x-1/4 translate-y-1/4 pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative">
          <AnimatedSection delay={0}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-ink-900/5 border border-ink-900/10 rounded-full text-xs text-ink-600 font-mono mb-8">
              <span className="w-1.5 h-1.5 bg-sage-500 rounded-full animate-pulse" />
              Accepting new clients for Q2 2025
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <AnimatedSection delay={100}>
                <h1 className="font-display text-5xl md:text-6xl xl:text-7xl font-semibold text-ink-900 leading-[1.08] tracking-tight mb-6">
                  Design better,<br />
                  <em className="not-italic text-ink-600">faster, smarter</em><br />
                  websites.
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <p className="text-ink-600 text-lg leading-relaxed mb-10 max-w-lg">
                  We design calm, conversion-ready websites and digital strategies for teams who value clarity, detail, and longevity.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 bg-ink-900 text-cream-50 rounded-full font-medium text-sm hover:bg-ink-700 transition-colors">
                    Get Free Consultation <ArrowRight size={16} />
                  </Link>
                  <Link to="/services" className="inline-flex items-center gap-2 px-6 py-3.5 border border-ink-900/20 text-ink-900 rounded-full font-medium text-sm hover:bg-ink-900/5 transition-colors">
                    View Services
                  </Link>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={200} className="hidden lg:block">
              <div className="relative">
                <div className="w-full aspect-square max-w-md ml-auto bg-gradient-to-br from-cream-200 to-cream-100 rounded-3xl p-8 flex items-center justify-center float-anim">
                  <div className="grid grid-cols-2 gap-4 w-full">
                    {stats.map((s, i) => (
                      <div key={i} className="bg-white rounded-2xl p-5 shadow-sm">
                        <div className="font-display text-2xl font-bold text-ink-900 mb-1">{s.value}</div>
                        <div className="text-ink-500 text-xs">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-ink-900 text-cream-50 rounded-2xl px-5 py-3 shadow-xl">
                  <div className="text-xs text-ink-400 mb-0.5">Avg. project timeline</div>
                  <div className="font-display font-semibold text-sm">3–4 weeks</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* LOGOS MARQUEE */}
      <section className="border-y border-ink-900/8 bg-white py-5 overflow-hidden">
        <div className="flex gap-0 whitespace-nowrap">
          <div className="marquee-track flex gap-0 shrink-0">
            {[...logos, ...logos].map((logo, i) => (
              <span key={i} className="inline-flex items-center gap-8 px-10 text-ink-400 font-mono text-sm font-medium">
                <span className="w-1 h-1 bg-ink-300 rounded-full" />
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-28 px-6 bg-cream-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <p className="text-ink-500 text-sm font-mono mb-3 uppercase tracking-widest">What we do</p>
                <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink-900 leading-tight">
                  Web projects that<br />create meaningful impact
                </h2>
              </div>
              <Link to="/services" className="inline-flex items-center gap-2 text-sm font-medium text-ink-600 hover:text-ink-900 transition-colors shrink-0">
                All services <ArrowRight size={14} />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((s, i) => (
              <AnimatedSection key={s.id} delay={i * 80}>
                <div className="group bg-white border border-ink-900/8 rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-3xl text-ink-400">{s.icon}</span>
                    <span className="text-xs font-mono text-ink-400 bg-cream-100 px-3 py-1 rounded-full">0{s.id}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-ink-900 mb-2">{s.title}</h3>
                  <p className="text-ink-500 text-sm italic mb-4">{s.short}</p>
                  <p className="text-ink-600 text-sm leading-relaxed mb-6">{s.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map(t => (
                      <span key={t} className="text-xs font-mono text-ink-600 border border-ink-900/10 px-3 py-1 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-28 px-6 bg-ink-900 text-cream-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="text-ink-400 text-sm font-mono mb-3 uppercase tracking-widest">Why Nexora</p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight mb-6">
                Built different,<br />
                <em className="not-italic text-ink-400">by design.</em>
              </h2>
              <p className="text-ink-400 text-base leading-relaxed">
                Most agencies overpromise and underdeliver. We keep it simple: clear process, honest timelines, measurable results. No fluff, no handoffs, no surprises.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div className="space-y-4">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 border border-ink-800 rounded-xl hover:border-ink-600 transition-colors">
                    <CheckCircle size={18} className="text-sage-400 shrink-0" />
                    <span className="text-cream-200 text-sm">{b}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-24 px-6 bg-cream-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="text-center py-8">
                  <div className="font-display text-4xl md:text-5xl font-bold text-ink-900 mb-2">{s.value}</div>
                  <div className="text-ink-500 text-sm">{s.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 px-6 bg-cream-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-ink-500 text-sm font-mono mb-3 uppercase tracking-widest">Client stories</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink-900">What our clients say</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <TestimonialCard {...t} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-ink-900">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-ink-400 font-mono text-sm mb-4 uppercase tracking-widest">Ready to grow?</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-cream-50 mb-6 leading-tight">
              Let's build something you're proud of.
            </h2>
            <p className="text-ink-400 text-base mb-10">
              Book a free 30-minute strategy call. No pressure, no pitch deck — just an honest conversation about your goals.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-cream-50 text-ink-900 rounded-full font-semibold text-sm hover:bg-white transition-colors">
              Get a Free Consultation <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
