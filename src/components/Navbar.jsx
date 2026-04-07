import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-cream-50/95 backdrop-blur-sm border-b border-ink-900/8 shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-7 h-7 bg-ink-900 rounded-sm flex items-center justify-center">
            <span className="text-cream-50 text-xs font-mono font-bold">N</span>
          </div>
          <span className="font-display font-semibold text-ink-900 text-lg tracking-tight">Nexora</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link key={l.to} to={l.to}
              className={`nav-link text-sm font-body font-medium transition-colors ${location.pathname === l.to ? 'text-ink-900' : 'text-ink-600 hover:text-ink-900'}`}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/contact" className="text-sm font-medium px-5 py-2.5 bg-ink-900 text-cream-50 rounded-full hover:bg-ink-700 transition-colors">
            Free Consultation
          </Link>
        </div>

        <button className="md:hidden text-ink-900" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-cream-50 border-t border-ink-900/10 px-6 py-6 space-y-4">
          {links.map(l => (
            <Link key={l.to} to={l.to} className="block text-base font-medium text-ink-800 hover:text-ink-600 transition-colors">
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="inline-block mt-2 text-sm font-medium px-5 py-2.5 bg-ink-900 text-cream-50 rounded-full">
            Free Consultation
          </Link>
        </div>
      )}
    </header>
  );
}
