import { useEffect, useRef, useState } from 'react';

const cakes = [
  { name: 'Black Forest Cake', image: '/images/cakes/black_forest.jpg', tag: 'Classic' },
  { name: 'Cartoon Cake', image: '/images/cakes/cartoon_cake.jpg', tag: 'Kids' },
  { name: 'Chocolate Cake', image: '/images/cakes/chocolate_cake.jpg', tag: 'Bestseller' },
  { name: 'Cream Cake', image: '/images/cakes/cream_cake.jpg', tag: 'Light' },
  { name: 'Cup Cake', image: '/images/cakes/cup_cake.jpg', tag: 'Snack' },
  { name: 'Doll Cake', image: '/images/cakes/doll_cake.jpg', tag: 'Special' },
  { name: 'Fondant Cake', image: '/images/cakes/fondant_cake.jpeg', tag: 'Premium' },
  { name: 'Jar Cake', image: '/images/cakes/jar_cake.jpg', tag: 'Trending' },
  { name: 'Pastry Cake', image: '/images/cakes/pastry_cake.jpg', tag: 'Fresh' },
  { name: 'Red Velvet Cake', image: '/images/cakes/redvalet_cake.jpg', tag: 'Favourite' },
  { name: 'Theme Cake', image: '/images/cakes/theme_cake.jpg', tag: 'Custom' },
];

function CakeCard({ cake, index }: { cake: (typeof cakes)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (cardRef.current) {
                cardRef.current.style.opacity = '1';
                cardRef.current.style.transform = 'translateY(0) scale(1)';
              }
            }, (index % 4) * 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      cardRef.current.style.opacity = '0';
      cardRef.current.style.transform = 'translateY(40px) scale(0.95)';
      cardRef.current.style.transition = 'all 0.6s cubic-bezier(0.22,1,0.36,1)';
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  const whatsappUrl = `https://wa.me/919740449324?text=I%20need%20to%20order%20${encodeURIComponent(cake.name)}`;

  return (
    <div
      ref={cardRef}
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
      style={{
        background: '#fff',
        boxShadow: hovered
          ? '0 20px 50px rgba(139,0,0,0.2), 0 4px 15px rgba(0,0,0,0.1)'
          : '0 4px 20px rgba(0,0,0,0.08)',
        border: `1px solid ${hovered ? 'rgba(212,175,55,0.5)' : 'rgba(0,0,0,0.06)'}`,
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        transition: 'all 0.35s cubic-bezier(0.22,1,0.36,1)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tag badge */}
      <div
        className="absolute top-3 left-3 z-20 px-2.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase"
        style={{
          background: 'linear-gradient(135deg, #8B0000, #c41414)',
          color: '#D4AF37',
          boxShadow: '0 2px 8px rgba(139,0,0,0.3)',
        }}
      >
        {cake.tag}
      </div>

      {/* Image container */}
      <div className="relative overflow-hidden" style={{ height: '240px', background: '#f9f9f9' }}>
        <img
          src={cake.image}
          alt={cake.name}
          className="w-full h-full transition-transform duration-500"
          style={{
            objectFit: 'contain',
            objectPosition: 'center',
            padding: '8px',
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
          }}
          loading="lazy"
        />
        {/* Image overlay on hover */}
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background: 'linear-gradient(180deg, transparent 50%, rgba(139,0,0,0.5) 100%)',
            opacity: hovered ? 1 : 0,
          }}
        />
      </div>

      {/* Card body */}
      <div className="p-4 md:p-5 flex flex-col gap-3">
        <h3
          className="text-sm md:text-base font-bold text-center flex-1 line-clamp-2"
          style={{ color: '#8B0000', fontFamily: 'Georgia, serif' }}
        >
          {cake.name}
        </h3>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-2.5 md:py-3 rounded-lg md:rounded-xl font-bold text-xs md:text-sm tracking-wider uppercase transition-all duration-300"
          style={{
            background: hovered
              ? 'linear-gradient(135deg, #8B0000, #c41414)'
              : 'linear-gradient(135deg, rgba(139,0,0,0.06), rgba(139,0,0,0.1))',
            color: hovered ? '#D4AF37' : '#8B0000',
            border: `1.5px solid ${hovered ? 'transparent' : 'rgba(139,0,0,0.15)'}`,
            boxShadow: hovered ? '0 4px 15px rgba(139,0,0,0.3)' : 'none',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Order
        </a>
      </div>
    </div>
  );
}

export default function Menu() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (headerRef.current) {
              headerRef.current.style.opacity = '1';
              headerRef.current.style.transform = 'translateY(0)';
            }
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (headerRef.current) {
      headerRef.current.style.opacity = '0';
      headerRef.current.style.transform = 'translateY(30px)';
      headerRef.current.style.transition = 'all 0.7s cubic-bezier(0.22,1,0.36,1)';
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="menu"
      className="py-20 md:py-28"
      style={{ background: 'linear-gradient(180deg, #fff9f0 0%, #FFFDD0 50%, #fff9f0 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-14">
          <p
            className="text-sm font-bold tracking-widest uppercase mb-3"
            style={{ color: '#D4AF37' }}
          >
            Our Specialties
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: '#8B0000', fontFamily: 'Georgia, serif' }}
          >
            Our Menu
          </h2>
          <p className="text-base max-w-xl mx-auto mb-6" style={{ color: '#6b4c4c' }}>
            Handcrafted with the finest ingredients — each cake is a celebration in itself.
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37)' }} />
            <div className="w-2 h-2 rotate-45" style={{ background: '#D4AF37' }} />
            <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, #D4AF37, transparent)' }} />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
          {cakes.map((cake, i) => (
            <CakeCard key={cake.name} cake={cake} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <p className="mb-4 text-base" style={{ color: '#6b4c4c' }}>
            Can't find what you're looking for? We create fully custom cakes!
          </p>
          <a
            href="https://wa.me/919740449324?text=I%20need%20to%20order%20a%20custom%20cake"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-base tracking-wider uppercase transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{
              background: 'linear-gradient(135deg, #8B0000, #c41414)',
              color: '#D4AF37',
              boxShadow: '0 4px 20px rgba(139,0,0,0.3)',
            }}
          >
            Order Custom Cake
          </a>
        </div>
      </div>
    </section>
  );
}
