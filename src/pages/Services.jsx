import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { services, packages } from '../data/index';

export default function Services() {
  return (
    <div className="font-body pt-16">
      {/* Header */}
      <section className="py-28 px-6 bg-cream-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="text-ink-500 text-sm font-mono mb-3 uppercase tracking-widest">Our services</p>
            <h1 className="font-display text-5xl md:text-6xl font-semibold text-ink-900 leading-tight mb-6">
              Growth solutions<br />
              <em className="not-italic text-ink-500">built to compound.</em>
            </h1>
            <p className="text-ink-600 text-lg max-w-xl leading-relaxed">
              Every service we offer is designed to work together. Web design fuels SEO. SEO fuels ads. Ads fuel growth. It's a system, not a service menu.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Service blocks */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-6">
          {services.map((s, i) => (
            <AnimatedSection key={s.id} delay={i * 80}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-ink-900/8 rounded-2xl overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="bg-cream-100 p-10 flex flex-col justify-between">
                  <span className="text-5xl text-ink-300">{s.icon}</span>
                  <div>
                    <span className="text-xs font-mono text-ink-400 block mb-2">0{s.id}</span>
                    <h3 className="font-display text-2xl font-semibold text-ink-900">{s.title}</h3>
                  </div>
                </div>
                <div className="lg:col-span-2 bg-white p-10">
                  <p className="text-ink-500 text-sm italic mb-4">{s.short}</p>
                  <p className="text-ink-600 text-base leading-relaxed mb-6">{s.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map(t => (
                      <span key={t} className="text-xs font-mono text-ink-700 bg-cream-100 px-4 py-1.5 rounded-full border border-ink-900/8">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section className="py-28 px-6 bg-cream-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-ink-500 text-sm font-mono mb-3 uppercase tracking-widest">Packages & Pricing</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink-900">Simple, transparent pricing</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <AnimatedSection key={pkg.name} delay={i * 100}>
                <div className={`rounded-2xl p-8 h-full flex flex-col ${pkg.highlight ? 'bg-ink-900 text-cream-50' : 'bg-white border border-ink-900/8'}`}>
                  <div className="mb-8">
                    {pkg.highlight && <span className="text-xs font-mono bg-sage-500 text-white px-3 py-1 rounded-full mb-4 inline-block">Most Popular</span>}
                    <p className={`text-sm mb-2 ${pkg.highlight ? 'text-ink-400' : 'text-ink-500'}`}>{pkg.tagline}</p>
                    <h3 className={`font-display text-2xl font-semibold mb-1 ${pkg.highlight ? 'text-cream-50' : 'text-ink-900'}`}>{pkg.name}</h3>
                    <div className="flex items-end gap-1 mt-4">
                      <span className={`font-display text-4xl font-bold ${pkg.highlight ? 'text-cream-50' : 'text-ink-900'}`}>{pkg.price}</span>
                      <span className={`text-sm mb-1 ${pkg.highlight ? 'text-ink-400' : 'text-ink-500'}`}>{pkg.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 flex-1 mb-8">
                    {pkg.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-3">
                        <Check size={15} className={`mt-0.5 shrink-0 ${pkg.highlight ? 'text-sage-400' : 'text-sage-500'}`} />
                        <span className={`text-sm leading-relaxed ${pkg.highlight ? 'text-ink-300' : 'text-ink-600'}`}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact" className={`w-full text-center py-3.5 rounded-full font-medium text-sm transition-colors ${pkg.highlight ? 'bg-cream-50 text-ink-900 hover:bg-white' : 'bg-ink-900 text-cream-50 hover:bg-ink-700'}`}>
                    {pkg.cta}
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-cream-200">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink-900 mb-4">Not sure which plan fits?</h2>
            <p className="text-ink-600 mb-8">Let's have a quick call. We'll figure out exactly what you need — and what you don't.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-ink-900 text-cream-50 rounded-full font-medium text-sm hover:bg-ink-700 transition-colors">
              Talk to us <ArrowRight size={15} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
