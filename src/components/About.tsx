import { useEffect, useRef } from 'react';
import { Heart, MapPin, Phone } from 'lucide-react';

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (leftRef.current) {
              leftRef.current.style.opacity = '1';
              leftRef.current.style.transform = 'translateX(0)';
            }
            setTimeout(() => {
              if (rightRef.current) {
                rightRef.current.style.opacity = '1';
                rightRef.current.style.transform = 'translateX(0)';
              }
            }, 200);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (leftRef.current) {
      leftRef.current.style.opacity = '0';
      leftRef.current.style.transform = 'translateX(-50px)';
      leftRef.current.style.transition = 'all 0.8s cubic-bezier(0.22,1,0.36,1)';
    }
    if (rightRef.current) {
      rightRef.current.style.opacity = '0';
      rightRef.current.style.transform = 'translateX(50px)';
      rightRef.current.style.transition = 'all 0.8s cubic-bezier(0.22,1,0.36,1)';
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: '#8B0000' }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Gold glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: '#D4AF37' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <div ref={leftRef} className="relative">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                boxShadow: '0 8px 40px rgba(0,0,0,0.4)',
                border: '2px solid rgba(212,175,55,0.3)',
              }}
            >
              <img
                src="/cake_logo.png"
                alt="Shri Devi Cake Palace"
                className="w-full h-64 md:h-80 object-contain"
                style={{ background: 'rgba(255,253,208,0.05)' }}
              />
            </div>

            {/* Decorative corner accents */}
            <div
              className="absolute -top-3 -left-3 w-12 h-12 rounded-tl-xl"
              style={{ borderTop: '3px solid #D4AF37', borderLeft: '3px solid #D4AF37' }}
            />
            <div
              className="absolute -bottom-3 -right-3 w-12 h-12 rounded-br-xl"
              style={{ borderBottom: '3px solid #D4AF37', borderRight: '3px solid #D4AF37' }}
            />

            {/* Stats badge */}
            <div
              className="absolute -bottom-6 -right-4 md:-right-8 px-6 py-4 rounded-2xl text-center"
              style={{
                background: 'linear-gradient(135deg, #D4AF37, #FFD700)',
                boxShadow: '0 8px 30px rgba(212,175,55,0.4)',
              }}
            >
              <p className="text-3xl font-bold" style={{ color: '#8B0000' }}>100%</p>
              <p className="text-xs font-bold tracking-wider uppercase" style={{ color: '#8B0000' }}>Fresh Daily</p>
            </div>
          </div>

          {/* Right: Text */}
          <div ref={rightRef}>
            <p
              className="text-sm font-bold tracking-widest uppercase mb-3"
              style={{ color: '#D4AF37' }}
            >
              About Us
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 leading-tight"
              style={{ color: '#FFFDD0', fontFamily: 'Georgia, serif' }}
            >
              Shri Devi
            </h2>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
              style={{ color: '#D4AF37', fontFamily: 'Georgia, serif' }}
            >
              Cake Palace
            </h2>

            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1" style={{ background: 'rgba(212,175,55,0.3)' }} />
              <Heart size={16} style={{ color: '#FF69B4' }} />
              <div className="h-px flex-1" style={{ background: 'rgba(212,175,55,0.3)' }} />
            </div>

            <p
              className="text-base md:text-lg leading-relaxed mb-8"
              style={{ color: 'rgba(255,253,208,0.85)', lineHeight: '1.8' }}
            >
              Shri Devi Cake Palace prepares fresh homemade cakes with love for birthdays, weddings
              and special occasions. We specialize in custom cakes, theme cakes and delicious bakery
              items with home delivery service.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mt-0.5"
                  style={{ background: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.3)' }}
                >
                  <MapPin size={16} style={{ color: '#D4AF37' }} />
                </div>
                <div>
                  <p className="font-semibold mb-0.5" style={{ color: '#D4AF37' }}>Our Location</p>
                  <p className="text-sm" style={{ color: 'rgba(255,253,208,0.75)' }}>
                    Lakshmishreesha Nivasa, Kuvenja, Bettampady Post, Puttur Taluk
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.3)' }}
                >
                  <Phone size={16} style={{ color: '#D4AF37' }} />
                </div>
                <div>
                  <p className="font-semibold mb-0.5" style={{ color: '#D4AF37' }}>Call Us</p>
                  <a
                    href="tel:9740449324"
                    className="text-sm transition-colors duration-200 hover:underline"
                    style={{ color: 'rgba(255,253,208,0.85)' }}
                  >
                    +91 97404 49324
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
