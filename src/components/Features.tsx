import { useEffect, useRef } from 'react';
import { Cake, Truck, Star, Award } from 'lucide-react';

const features = [
  {
    icon: Cake,
    title: 'Fresh Cakes',
    description: 'Baked fresh every day using the finest ingredients for an unforgettable taste.',
  },
  {
    icon: Truck,
    title: 'Home Delivery',
    description: 'Get your favourite cakes delivered right to your doorstep, on time.',
  },
  {
    icon: Star,
    title: 'Custom Cakes',
    description: 'Theme cakes, photo cakes and fully customised designs for every occasion.',
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'We use only premium ingredients to ensure every bite is pure perfection.',
  },
];

export default function Features() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = parseInt(el.dataset.delay || '0');
            setTimeout(() => {
              el.style.opacity = '1';
              el.style.transform = 'translateY(0)';
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    cardsRef.current.forEach((card) => {
      if (card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'all 0.7s cubic-bezier(0.22,1,0.36,1)';
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="py-20 md:py-28"
      style={{ background: 'linear-gradient(180deg, #FFFDD0 0%, #fff9f0 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p
            className="text-sm font-bold tracking-widest uppercase mb-3"
            style={{ color: '#D4AF37' }}
          >
            Why Choose Us
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: '#8B0000', fontFamily: 'Georgia, serif' }}
          >
            Made With Love
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37)' }} />
            <div className="w-2 h-2 rotate-45" style={{ background: '#D4AF37' }} />
            <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, #D4AF37, transparent)' }} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                ref={(el) => { cardsRef.current[i] = el; }}
                data-delay={String(i * 120)}
                className="group relative text-center p-5 md:p-8 rounded-2xl cursor-default transition-all duration-400"
                style={{
                  background: '#fff',
                  boxShadow: '0 4px 20px rgba(139,0,0,0.07)',
                  border: '1px solid rgba(212,175,55,0.2)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = 'translateY(-8px)';
                  el.style.boxShadow = '0 12px 40px rgba(139,0,0,0.15)';
                  el.style.borderColor = 'rgba(212,175,55,0.5)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = 'translateY(0)';
                  el.style.boxShadow = '0 4px 20px rgba(139,0,0,0.07)';
                  el.style.borderColor = 'rgba(212,175,55,0.2)';
                }}
              >
                {/* Icon container */}
                <div
                  className="inline-flex items-center justify-center w-14 md:w-16 h-14 md:h-16 rounded-full mb-3 md:mb-5 mx-auto"
                  style={{
                    background: 'linear-gradient(135deg, rgba(139,0,0,0.08), rgba(212,175,55,0.12))',
                    border: '1.5px solid rgba(212,175,55,0.3)',
                  }}
                >
                  <Icon size={24} className="md:block hidden" strokeWidth={1.5} style={{ color: '#8B0000' }} />
                  <Icon size={20} className="md:hidden" strokeWidth={1.5} style={{ color: '#8B0000' }} />
                </div>

                <h3
                  className="text-base md:text-lg font-bold mb-2 md:mb-3"
                  style={{ color: '#8B0000', fontFamily: 'Georgia, serif' }}
                >
                  {feature.title}
                </h3>
                <p className="text-xs md:text-sm leading-relaxed" style={{ color: '#6b4c4c' }}>
                  {feature.description}
                </p>

                {/* Bottom accent */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-300"
                  style={{
                    width: '0',
                    background: 'linear-gradient(90deg, #8B0000, #D4AF37)',
                  }}
                  ref={(el) => {
                    if (el) {
                      const parent = el.parentElement;
                      if (parent) {
                        parent.addEventListener('mouseenter', () => { el.style.width = '60%'; });
                        parent.addEventListener('mouseleave', () => { el.style.width = '0'; });
                      }
                    }
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
