import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Sri Devi Canteen', href: '#canteen' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? 'rgba(139,0,0,0.97)'
          : 'linear-gradient(180deg, rgba(139,0,0,0.92) 0%, rgba(139,0,0,0.6) 100%)',
        backdropFilter: 'blur(12px)',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.4)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(212,175,55,0.3)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-20">
          {/* Logo */}
          <button onClick={() => handleNav('#home')} className="flex items-center gap-2 md:gap-3 group flex-shrink-0">
            <img
              src="/cake_logo.png"
              alt="Shri Devi Cake Palace"
              className="h-10 md:h-14 w-auto object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-xs lg:text-sm font-semibold tracking-widest uppercase transition-all duration-300 hover:scale-105"
                style={{ color: '#D4AF37', letterSpacing: '0.12em' }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = '#FFD700';
                  (e.target as HTMLElement).style.textShadow = '0 0 12px rgba(255,215,0,0.6)';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = '#D4AF37';
                  (e.target as HTMLElement).style.textShadow = 'none';
                }}
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://wa.me/919740449324?text=I%20need%20to%20order%20cake"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 md:px-5 py-2 rounded-full text-xs lg:text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #D4AF37, #FFD700)',
                color: '#8B0000',
                boxShadow: '0 2px 12px rgba(212,175,55,0.4)',
              }}
            >
              Order Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors duration-200 flex-shrink-0"
            style={{ color: '#D4AF37' }}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? '320px' : '0',
          background: 'rgba(139,0,0,0.98)',
          borderTop: open ? '1px solid rgba(212,175,55,0.2)' : 'none',
        }}
      >
        <div className="px-4 sm:px-6 py-4 flex flex-col gap-3">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-left text-sm font-semibold tracking-widest uppercase py-2 border-b transition-all duration-200"
              style={{
                color: '#D4AF37',
                borderColor: 'rgba(212,175,55,0.15)',
              }}
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://wa.me/919740449324?text=I%20need%20to%20order%20cake"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-5 py-3 rounded-full text-xs font-bold tracking-wider uppercase text-center"
            style={{
              background: 'linear-gradient(135deg, #D4AF37, #FFD700)',
              color: '#8B0000',
            }}
          >
            Order Now
          </a>
        </div>
      </div>
    </nav>
  );
}
