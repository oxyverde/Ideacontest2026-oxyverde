import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Categories', href: '#categories' },
  { label: 'Submit', href: '#submit' },
  { label: 'Prizes', href: '#prizes' },
  { label: 'Rules', href: '#rules' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
        style={{
          borderBottom: scrolled ? '1px solid rgba(0,212,255,0.08)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18">
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-2 group">
              <img
                src="https://i.postimg.cc/y6ycB0Tr/Team_OxyVerde_logo.png"
                alt="Team OxyVerde"
                className="h-9 w-9 sm:h-10 sm:w-10 rounded-lg object-contain transition-transform group-hover:scale-110"
              />
              <span
                className="text-sm sm:text-base font-bold text-cyan-glow hidden sm:block"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                OxyVerde
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-cyan-glow transition-colors rounded-lg hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://forms.gle/ezrsZgEAPEdAzkyH6"
                target="_blank"
                rel="noopener noreferrer"
                className="glow-btn glow-btn-primary ml-3 !py-2 !px-5 !text-sm"
              >
                Submit Idea
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-slate-300 hover:text-cyan-glow hover:bg-white/5 transition-all"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-md"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 bottom-0 w-72 glass transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ borderLeft: '1px solid rgba(0,212,255,0.1)' }}
        >
          <div className="pt-20 px-6 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="px-4 py-3 text-base font-medium text-slate-300 hover:text-cyan-glow transition-colors rounded-lg hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-white/5">
              <a
                href="https://forms.gle/ezrsZgEAPEdAzkyH6"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="glow-btn glow-btn-primary w-full text-center"
              >
                Submit Your Idea
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
