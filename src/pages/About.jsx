import { Link } from 'react-router-dom';
import { ArrowRight, Award, Star, TrendingUp } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import TestimonialCard from '../components/TestimonialCard';
import { team, stats, testimonials } from '../data/index';

const awards = [
  { icon: <Award size={20} />, title: 'Awwwards HM', year: '2024' },
  { icon: <Star size={20} />, title: 'CSS Design Awards', year: '2024' },
  { icon: <TrendingUp size={20} />, title: 'Top Digital Agency', year: '2023' },
  { icon: <Award size={20} />, title: 'Clutch Top 50', year: '2023' },
];

const values = [
  { title: 'Clarity', description: 'We cut through noise. Every decision — in design, strategy, and communication — is made with clarity as the north star.' },
  { title: 'Longevity', description: 'We build for the long game. Trends fade; well-crafted systems compound. We design things that last.' },
  { title: 'Honesty', description: 'No vanity metrics, no inflated promises. We tell you what\'s working, what isn\'t, and what we\'re doing about it.' },
];

export default function About() {
  return (
    <div className="font-body pt-16">
      {/* Hero */}
      <section className="py-28 px-6 bg-cream-50 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-sage-400/8 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <AnimatedSection>
                <p className="text-ink-500 text-sm font-mono mb-3 uppercase tracking-widest">About Nexora</p>
                <h1 className="font-display text-5xl md:text-6xl font-semibold text-ink-900 leading-tight mb-6">
                  We believe the web<br />
                  <em className="not-italic text-ink-500">deserves better.</em>
                </h1>
                <p className="text-ink-600 text-lg leading-relaxed">
                  Nexora is a boutique digital studio founded on one idea: that great design and measurable results don't have to be mutually exclusive. We've built our practice around both.
                </p>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={150}>
              <div className="bg-cream-200 rounded-3xl p-10 relative">
                <div className="font-display text-6xl font-bold text-ink-900/10 absolute top-6 right-8">2019</div>
                <p className="text-ink-600 text-base leading-relaxed italic font-display">
                  "We started Nexora because we kept seeing the same mistake: agencies optimizing for deliverables instead of outcomes. We do things differently."
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-ink-900 flex items-center justify-center text-cream-50 text-xs font-mono">AS</div>
                  <div>
                    <p className="text-ink-900 font-semibold text-sm">Ariel Santos</p>
                    <p className="text-ink-500 text-xs">Co-founder & Creative Director</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Vision & Values */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-16">
            <p className="text-ink-500 text-sm font-mono mb-3 uppercase tracking-widest">Our values</p>
            <h2 className="font-display text-4xl font-semibold text-ink-900">What guides every decision</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="border border-ink-900/8 rounded-2xl p-8 hover:bg-cream-50 transition-colors">
                  <div className="w-10 h-10 bg-ink-900 rounded-xl mb-6 flex items-center justify-center">
                    <span className="text-cream-50 font-mono text-sm font-bold">0{i+1}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-ink-900 mb-3">{v.title}</h3>
                  <p className="text-ink-600 text-sm leading-relaxed">{v.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 bg-cream-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-16">
            <p className="text-ink-500 text-sm font-mono mb-3 uppercase tracking-widest">The team</p>
            <h2 className="font-display text-4xl font-semibold text-ink-900">Small team, big results</h2>
            <p className="text-ink-600 mt-3 max-w-lg">We stay intentionally small. Every client works directly with the senior people — no account managers, no handoffs to juniors.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((member, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="bg-white border border-ink-900/8 rounded-2xl p-7 text-center hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 rounded-full bg-ink-900 flex items-center justify-center text-cream-50 font-mono font-semibold text-lg mx-auto mb-5">
                    {member.initials}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-ink-900 mb-1">{member.name}</h3>
                  <p className="text-ink-500 text-sm mb-2">{member.role}</p>
                  <span className="text-xs font-mono text-ink-400 bg-cream-100 px-3 py-1 rounded-full">{member.specialty}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 px-6 bg-ink-900 text-cream-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <p className="text-ink-400 text-sm font-mono mb-3 uppercase tracking-widest">Recognition</p>
            <h2 className="font-display text-4xl font-semibold">Awards & Achievements</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {awards.map((a, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="border border-ink-700 rounded-2xl p-6 text-center hover:border-ink-500 transition-colors">
                  <div className="flex justify-center mb-3 text-sage-400">{a.icon}</div>
                  <p className="font-semibold text-cream-100 text-sm mb-1">{a.title}</p>
                  <p className="text-ink-500 text-xs font-mono">{a.year}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 bg-cream-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="py-6">
                  <div className="font-display text-4xl font-bold text-ink-900 mb-2">{s.value}</div>
                  <div className="text-ink-500 text-sm">{s.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-cream-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <h2 className="font-display text-4xl font-semibold text-ink-900">Voices from clients</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {testimonials.slice(0, 4).map((t, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <TestimonialCard {...t} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-ink-900 text-center">
        <AnimatedSection>
          <h2 className="font-display text-4xl font-semibold text-cream-50 mb-5">Want to work with us?</h2>
          <p className="text-ink-400 mb-8">We take on a limited number of projects each quarter. Let's see if we're a fit.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-cream-50 text-ink-900 rounded-full font-semibold text-sm hover:bg-white transition-colors">
            Start a conversation <ArrowRight size={15} />
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
