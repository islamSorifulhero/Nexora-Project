import { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, CheckCircle } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const inquiryTypes = ['Web Development', 'SEO & Growth', 'Online Advertising', 'Online Booking', 'Full Package', 'Just exploring'];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', type: '', budget: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="font-body pt-16">
      {/* Header */}
      <section className="py-24 px-6 bg-cream-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="text-ink-500 text-sm font-mono mb-3 uppercase tracking-widest">Let's talk</p>
            <h1 className="font-display text-5xl md:text-6xl font-semibold text-ink-900 leading-tight">
              Tell us about<br />
              <em className="not-italic text-ink-500">your project.</em>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Info panel */}
          <div className="lg:col-span-2 space-y-10">
            <AnimatedSection>
              <h2 className="font-display text-2xl font-semibold text-ink-900 mb-4">How we work with new clients</h2>
              <div className="space-y-5">
                {[
                  { step: '01', label: 'Discovery Call', desc: '30-minute conversation about your goals, timeline, and budget. No pressure.' },
                  { step: '02', label: 'Strategy Proposal', desc: 'We put together a clear plan and pricing tailored to your situation.' },
                  { step: '03', label: 'Kickoff', desc: 'Once aligned, we move fast. Most projects start within a week.' },
                ].map(s => (
                  <div key={s.step} className="flex gap-4">
                    <div className="w-8 h-8 bg-ink-900 rounded-lg flex items-center justify-center text-cream-50 text-xs font-mono shrink-0">{s.step}</div>
                    <div>
                      <p className="font-semibold text-ink-900 text-sm mb-1">{s.label}</p>
                      <p className="text-ink-500 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="bg-cream-50 border border-ink-900/8 rounded-2xl p-7 space-y-4">
                <h3 className="font-display text-lg font-semibold text-ink-900">Reach us directly</h3>
                <div className="flex items-center gap-3 text-sm text-ink-600">
                  <Mail size={16} className="text-ink-400 shrink-0" />
                  <a href="mailto:hello@nexora.studio" className="hover:text-ink-900 transition-colors">hello@nexora.studio</a>
                </div>
                <div className="flex items-center gap-3 text-sm text-ink-600">
                  <Phone size={16} className="text-ink-400 shrink-0" />
                  <a href="tel:+14158002240" className="hover:text-ink-900 transition-colors">+1 (415) 800-2240</a>
                </div>
                <div className="flex items-center gap-3 text-sm text-ink-600">
                  <MapPin size={16} className="text-ink-400 shrink-0" />
                  <span>340 Pine St, San Francisco, CA 94104</span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div className="bg-ink-900 text-cream-50 rounded-2xl p-7">
                <p className="text-ink-400 text-xs font-mono uppercase tracking-wide mb-2">Current availability</p>
                <p className="font-display text-lg font-semibold mb-1">Q2 2025 — 2 spots open</p>
                <p className="text-ink-400 text-sm">We limit our intake to deliver exceptional quality to every client.</p>
              </div>
            </AnimatedSection>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <AnimatedSection delay={100}>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-24 text-center">
                  <CheckCircle size={52} className="text-sage-500 mb-5" />
                  <h2 className="font-display text-3xl font-semibold text-ink-900 mb-3">Message received!</h2>
                  <p className="text-ink-600 max-w-sm leading-relaxed">We'll review your project and get back to you within 1 business day. Looking forward to it.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono text-ink-500 uppercase tracking-wide mb-2">Full Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} required placeholder="Alex Johnson"
                        className="w-full px-5 py-3.5 border border-ink-900/15 rounded-xl bg-cream-50 text-sm text-ink-900 placeholder-ink-400 focus:outline-none focus:border-ink-900/40 transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-ink-500 uppercase tracking-wide mb-2">Email *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="alex@company.com"
                        className="w-full px-5 py-3.5 border border-ink-900/15 rounded-xl bg-cream-50 text-sm text-ink-900 placeholder-ink-400 focus:outline-none focus:border-ink-900/40 transition-colors" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-ink-500 uppercase tracking-wide mb-2">Company / Website</label>
                    <input name="company" value={form.company} onChange={handleChange} placeholder="Acme Inc."
                      className="w-full px-5 py-3.5 border border-ink-900/15 rounded-xl bg-cream-50 text-sm text-ink-900 placeholder-ink-400 focus:outline-none focus:border-ink-900/40 transition-colors" />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-ink-500 uppercase tracking-wide mb-3">What do you need help with?</label>
                    <div className="flex flex-wrap gap-2">
                      {inquiryTypes.map(t => (
                        <button type="button" key={t} onClick={() => setForm(f => ({ ...f, type: t }))}
                          className={`text-sm px-4 py-2 rounded-full border transition-all duration-200 ${form.type === t ? 'bg-ink-900 text-cream-50 border-ink-900' : 'bg-cream-50 text-ink-600 border-ink-900/15 hover:border-ink-900/30'}`}>
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-ink-500 uppercase tracking-wide mb-2">Monthly Budget Range</label>
                    <select name="budget" value={form.budget} onChange={handleChange}
                      className="w-full px-5 py-3.5 border border-ink-900/15 rounded-xl bg-cream-50 text-sm text-ink-900 focus:outline-none focus:border-ink-900/40 transition-colors appearance-none">
                      <option value="">Select a range</option>
                      <option>Under $1,000</option>
                      <option>$1,000 – $3,000</option>
                      <option>$3,000 – $6,000</option>
                      <option>$6,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-ink-500 uppercase tracking-wide mb-2">Tell us about your project *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                      placeholder="What are you trying to achieve? What's your timeline? Any context that would help us understand your situation..."
                      className="w-full px-5 py-3.5 border border-ink-900/15 rounded-xl bg-cream-50 text-sm text-ink-900 placeholder-ink-400 focus:outline-none focus:border-ink-900/40 transition-colors resize-none" />
                  </div>

                  <button type="submit"
                    className="w-full py-4 bg-ink-900 text-cream-50 rounded-full font-semibold text-sm hover:bg-ink-700 transition-colors flex items-center justify-center gap-2">
                    Send Message <ArrowRight size={16} />
                  </button>

                  <p className="text-xs text-ink-400 text-center">We respond within 1 business day. Your information is never shared.</p>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-72 bg-cream-200 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin size={32} className="text-ink-400 mx-auto mb-3" />
            <p className="text-ink-500 font-mono text-sm">340 Pine St, San Francisco, CA 94104</p>
            <a href="https://maps.google.com" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-1.5 mt-3 text-sm text-ink-700 underline underline-offset-2 hover:text-ink-900 transition-colors">
              Open in Google Maps <ArrowRight size={13} />
            </a>
          </div>
        </div>
        {/* Decorative grid */}
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'linear-gradient(#0F0E0C 1px, transparent 1px), linear-gradient(90deg, #0F0E0C 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </section>
    </div>
  );
}
