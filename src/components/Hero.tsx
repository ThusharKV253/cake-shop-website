import { useEffect, useRef } from 'react';

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [titleRef.current, subtitleRef.current, taglineRef.current, buttonsRef.current];
    elements.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(40px)';
      setTimeout(() => {
        if (!el) return;
        el.style.transition = 'all 0.8s cubic-bezier(0.22,1,0.36,1)';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 300 + i * 200);
    });
  }, []);

  const scrollToMenu = () => {
    const el = document.querySelector('#menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/cake_hero.png')" }}
      />

      {/* Gradient overlays */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(139,0,0,0.82) 0%, rgba(80,0,0,0.75) 40%, rgba(0,0,0,0.65) 100%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(212,175,55,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Decorative top/bottom borders */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-1"
        style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-16 md:w-24" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37)' }} />
          <div
            className="w-2 h-2 rotate-45"
            style={{ background: '#D4AF37' }}
          />
          <div className="h-px w-16 md:w-24" style={{ background: 'linear-gradient(90deg, #D4AF37, transparent)' }} />
        </div>

        <h1
          ref={titleRef}
          className="font-bold leading-tight mb-3"
          style={{
            fontSize: 'clamp(2rem, 6vw, 4.5rem)',
            color: '#FFFDD0',
            textShadow: '0 0 30px rgba(212,175,55,0.4), 0 2px 8px rgba(0,0,0,0.6)',
            fontFamily: 'Georgia, serif',
          }}
        >
          ಶ್ರೀ ದೇವಿ ಕೇಕ್ ಪ್ಯಾಲೆಸ್
        </h1>

        <p
          ref={subtitleRef}
          className="font-bold tracking-widest uppercase mb-5"
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.6rem)',
            color: '#D4AF37',
            letterSpacing: '0.35em',
            textShadow: '0 0 20px rgba(212,175,55,0.5)',
          }}
        >
          CAKE &amp; BAKERY
        </p>

        {/* Gold divider */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-20 md:w-32" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37)' }} />
          <div
            className="w-3 h-3 rounded-full border-2"
            style={{ borderColor: '#D4AF37', boxShadow: '0 0 10px rgba(212,175,55,0.6)' }}
          />
          <div className="h-px w-20 md:w-32" style={{ background: 'linear-gradient(90deg, #D4AF37, transparent)' }} />
        </div>

        <p
          ref={taglineRef}
          className="mb-10 font-medium italic"
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.3rem)',
            color: '#FFC0CB',
            textShadow: '0 1px 8px rgba(0,0,0,0.4)',
          }}
        >
          Fresh Cakes Made With Love
        </p>

        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://wa.me/919740449324?text=I%20need%20to%20order%20cake"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 rounded-full font-bold text-base tracking-wider uppercase transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #25D366, #128C7E)',
              color: '#fff',
              boxShadow: '0 4px 20px rgba(37,211,102,0.4)',
            }}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Order on WhatsApp
          </a>

          <button
            onClick={scrollToMenu}
            className="group px-8 py-4 rounded-full font-bold text-base tracking-wider uppercase transition-all duration-300 hover:scale-105"
            style={{
              background: 'transparent',
              color: '#D4AF37',
              border: '2px solid #D4AF37',
              boxShadow: '0 0 15px rgba(212,175,55,0.2)',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = 'rgba(212,175,55,0.12)';
              el.style.boxShadow = '0 0 25px rgba(212,175,55,0.4)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = 'transparent';
              el.style.boxShadow = '0 0 15px rgba(212,175,55,0.2)';
            }}
          >
            View Menu
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(212,175,55,0.7)' }}>
          Scroll
        </span>
        <div
          className="w-0.5 h-8 rounded-full"
          style={{ background: 'linear-gradient(180deg, #D4AF37, transparent)' }}
        />
      </div>
    </section>
  );
}
