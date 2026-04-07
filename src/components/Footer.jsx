import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-cream-200">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-7 h-7 bg-cream-50 rounded-sm flex items-center justify-center">
                <span className="text-ink-900 text-xs font-mono font-bold">N</span>
              </div>
              <span className="font-display font-semibold text-cream-50 text-lg">Nexora</span>
            </div>
            <p className="text-ink-500 text-sm leading-relaxed max-w-xs">
              We design calm, conversion-ready websites and digital experiences for teams who value clarity, detail, and longevity.
            </p>
            <div className="flex gap-4 mt-6">
              {['Tw', 'Li', 'Ig', 'Dr'].map(s => (
                <button key={s} className="w-9 h-9 border border-ink-700 rounded-full flex items-center justify-center text-ink-500 text-xs hover:border-cream-300 hover:text-cream-300 transition-colors">
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-body font-semibold text-cream-100 text-sm mb-5 tracking-wide uppercase">Pages</h4>
            <ul className="space-y-3">
              {[['/', 'Home'], ['/services', 'Services'], ['/about', 'About'], ['/blog', 'Blog'], ['/contact', 'Contact']].map(([to, label]) => (
                <li key={to}><Link to={to} className="text-ink-500 text-sm hover:text-cream-300 transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body font-semibold text-cream-100 text-sm mb-5 tracking-wide uppercase">Contact</h4>
            <ul className="space-y-3 text-sm text-ink-500">
              <li className="flex items-center gap-2"><Mail size={14} /> hello@nexora.studio</li>
              <li className="flex items-center gap-2"><Phone size={14} /> +1 (415) 800-2240</li>
              <li className="flex items-center gap-2"><MapPin size={14} /> San Francisco, CA</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ink-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-ink-600">
          <span>© 2025 Nexora Studio. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-ink-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-ink-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
