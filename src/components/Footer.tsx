const links = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Contact Us', href: '#contact' },
];

const handleNav = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function Footer() {
  return (
    <footer
      className="relative"
      style={{ background: '#3d0000' }}
    >
      {/* Top gold line */}
      <div
        className="h-0.5 w-full"
        style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <img
              src="/cake_logo.png"
              alt="Shri Devi Cake Palace"
              className="h-12 md:h-16 w-auto object-contain mb-3 md:mb-4 mx-auto sm:mx-0"
            />
            <h3
              className="text-base md:text-lg font-bold mb-1"
              style={{ color: '#D4AF37', fontFamily: 'Georgia, serif' }}
            >
              ಶ್ರೀ ದೇವಿ ಕೇಕ್ ಪ್ಯಾಲೆಸ್
            </h3>
            <p
              className="text-xs tracking-widest uppercase mb-2 md:mb-3"
              style={{ color: 'rgba(212,175,55,0.6)' }}
            >
              Cake &amp; Bakery
            </p>
            <p className="text-xs md:text-sm" style={{ color: 'rgba(255,253,208,0.6)', lineHeight: '1.7' }}>
              Fresh homemade cakes made with love for every special occasion.
            </p>
          </div>

          {/* Quick links */}
          <div className="text-center">
            <h4
              className="text-xs md:text-sm font-bold tracking-widest uppercase mb-3 md:mb-5"
              style={{ color: '#D4AF37' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-xs md:text-sm transition-all duration-200 hover:underline"
                    style={{ color: 'rgba(255,253,208,0.7)' }}
                    onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#D4AF37'; }}
                    onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'rgba(255,253,208,0.7)'; }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-right">
            <h4
              className="text-xs md:text-sm font-bold tracking-widest uppercase mb-3 md:mb-5"
              style={{ color: '#D4AF37' }}
            >
              Contact
            </h4>
            <div className="space-y-2 md:space-y-3">
              <p className="text-xs md:text-sm" style={{ color: 'rgba(255,253,208,0.7)' }}>
                Bettampady, Puttur Taluk
              </p>
              <a
                href="tel:9740449324"
                className="block text-xs md:text-sm font-semibold transition-colors duration-200 hover:underline"
                style={{ color: '#D4AF37' }}
              >
                +91 97404 49324
              </a>
              <a
                href="https://wa.me/919740449324?text=I%20need%20to%20order%20cake"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:scale-105 mt-2"
                style={{
                  background: 'linear-gradient(135deg, #25D366, #128C7E)',
                  color: '#fff',
                  boxShadow: '0 2px 10px rgba(37,211,102,0.3)',
                }}
              >
                <svg className="w-3 h-3 md:w-3.5 md:h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="hidden md:inline">Chat</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="mt-8 md:mt-10 pt-4 md:pt-6 text-center"
          style={{ borderTop: '1px solid rgba(212,175,55,0.15)' }}
        >
          <p className="text-xs tracking-wide" style={{ color: 'rgba(255,253,208,0.4)' }}>
            &copy; {new Date().getFullYear()} ಶ್ರೀ ದೇವಿ ಕೇಕ್ ಪ್ಯಾಲೆಸ್ — Shri Devi Cake Palace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
