import { useEffect, useRef } from 'react';

interface MenuItem {
  name: string;
  category: 'canteen' | 'chats';
  description: string;
  tag: string;
  image: string;
}

const canteenItems: MenuItem[] = [
  // ಶ್ರೀ ದೇವಿ ಕ್ಯಾಂಟೀನ್ ತಿಂಡಿಗಳು
  {
    name: 'ಗಂಜಿ ಊಟ',
    category: 'canteen',
    description: 'ಸಾಂಪ್ರದಾಯಿಕ ಬಿಸಿ ಗಂಜಿ, ಚಟ್ನಿ, ತುಪ್ಪ ಹಾಗೂ ಉಪ್ಪಿನಕಾಯಿಯೊಂದಿಗೆ.',
    tag: 'ಸಾಂಪ್ರದಾಯಿಕ',
    image: '/images/canteen/Ganji.jpg',
  },
  {
    name: 'ಮನೆ ಊಟ',
    category: 'canteen',
    description: 'ರುಚಿಕರ ಹಾಗೂ ಶುಚಿಯಾದ ಸಂಪೂರ್ಣ ಗೃಹ ಶೈಲಿಯ ಊಟ.',
    tag: 'ಶುದ್ಧ ರುಚಿ',
    image: '/images/canteen/mane_oota.jpg',
  },
  {
    name: 'ಆಮ್ಲೆಟ್',
    category: 'canteen',
    description: 'ಈರುಳ್ಳಿ, ಹಸಿಮೆಣಸಿನಕಾಯಿ ಹಾಗೂ ಮಸಾಲೆ ಸೇರಿಸಿದ ತಾಜಾ ಆಮ್ಲೆಟ್.',
    tag: 'ಬಿಸಿ ಬಿಸಿ',
    image: '/images/canteen/amlet.jpg',
  },
  {
    name: 'ಎಗ್ ಬುರ್ಜಿ',
    category: 'canteen',
    description: 'ವಿಶೇಷ ಮಸಾಲೆ ಭರಿತ ರುಚಿಕರ ಮೊಟ್ಟೆ ಬುರ್ಜಿ.',
    tag: 'ಮಸಾಲೆ ಧಮಾಕ',
    image: '/images/canteen/egg_burji.jpg',
  },
  {
    name: 'ದೋಸೆ',
    category: 'canteen',
    description: 'ಗರಿಗರಿಯಾದ ದೋಸೆ ಹಾಗೂ ರುಚಿಕರ ಚಟ್ನಿ.',
    tag: 'ಗರಿಗರಿ',
    image: '/images/canteen/dose.jpg',
  },

  // ಶ್ರೀ ದೇವಿ ಚಾಟ್ಸ್
  {
    name: 'ಮಸಾಲ ಪೂರಿ',
    category: 'chats',
    description: 'ಬಿಸಿ ಮಸಾಲೆ ಬಟಾಣಿ ಗ್ರೇವಿಯೊಂದಿಗೆ ಕುರುಕುಲು ಪೂರಿ.',
    tag: 'ಬೆಸ್ಟ್ ಚಾಟ್',
    image: '/images/canteen/masala_poori.jpg',
  },
  {
    name: 'ಪಾನಿ ಪೂರಿ',
    category: 'chats',
    description: 'ಖಾರ ಹಾಗೂ ಸಿಹಿ ಪಾನಿಯೊಂದಿಗೆ ಸವಿಯುವ ಪಾನಿ ಪೂರಿ.',
    tag: 'ಜನಪ್ರಿಯ',
    image: '/images/canteen/pani_puri.jpg',
  },
];

function CardItem({ item, index }: { item: MenuItem; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (cardRef.current) {
                cardRef.current.style.opacity = '1';
                cardRef.current.style.transform = 'translateY(0)';
              }
            }, (index % 4) * 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      cardRef.current.style.opacity = '0';
      cardRef.current.style.transform = 'translateY(25px)';
      cardRef.current.style.transition = 'all 0.5s cubic-bezier(0.22,1,0.36,1)';
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  const whatsappMessage = `ನಮಸ್ಕಾರ, ನನಗೆ ಶ್ರೀ ದೇವಿ ${item.category === 'chats' ? 'ಚಾಟ್ಸ್' : 'ಕ್ಯಾಂಟೀನ್'} ನಿಂದ "${item.name}" ಬೇಕಾಗಿದೆ.`;
  const whatsappUrl = `https://wa.me/919740449324?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div
      ref={cardRef}
      className="group relative rounded-2xl overflow-hidden bg-white flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl border"
      style={{
        borderColor: 'rgba(139,0,0,0.12)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
      }}
    >
      {/* Badge in Kannada */}
      <div
        className="absolute top-3 left-3 z-20 px-3 py-1 rounded-full text-xs font-bold tracking-wider kannada-text shadow-md"
        style={{
          background: item.category === 'chats'
            ? 'linear-gradient(135deg, #c41414, #e65100)'
            : 'linear-gradient(135deg, #8B0000, #580000)',
          color: '#FFD700',
        }}
      >
        {item.tag}
      </div>

      {/* Image container - responsive aspect ratio fitting properly for mobile and desktop */}
      <div className="relative w-full aspect-[4/3] sm:h-52 md:h-56 lg:h-60 overflow-hidden bg-amber-50/50">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, transparent 40%, rgba(139,0,0,0.4) 100%)',
          }}
        />
      </div>

      {/* Card Content in Kannada only */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between gap-3">
        <div>
          <h4
            className="text-lg sm:text-xl font-bold kannada-text mb-1.5"
            style={{ color: '#8B0000' }}
          >
            {item.name}
          </h4>
          <p
            className="text-xs sm:text-sm kannada-text leading-relaxed"
            style={{ color: '#554444' }}
          >
            {item.description}
          </p>
        </div>

        {/* WhatsApp Order Button in Kannada only */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl font-bold text-xs sm:text-sm kannada-text transition-all duration-300 shadow-sm hover:shadow-md"
          style={{
            background: 'linear-gradient(135deg, #8B0000, #c41414)',
            color: '#FFD700',
          }}
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          ಆರ್ಡರ್ ಮಾಡಿ
        </a>
      </div>
    </div>
  );
}

export default function Canteen() {
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
      { threshold: 0.15 }
    );

    if (headerRef.current) {
      headerRef.current.style.opacity = '0';
      headerRef.current.style.transform = 'translateY(30px)';
      headerRef.current.style.transition = 'all 0.7s cubic-bezier(0.22,1,0.36,1)';
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const canteenOnly = canteenItems.filter((item) => item.category === 'canteen');
  const chatsOnly = canteenItems.filter((item) => item.category === 'chats');

  return (
    <section
      id="canteen"
      className="py-16 sm:py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #fff9f0 0%, #FFFDD0 50%, #fff9f0 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header in Kannada only */}
        <div ref={headerRef} className="text-center mb-12 sm:mb-16">
          <p
            className="text-xs sm:text-sm font-bold tracking-widest uppercase mb-2 kannada-text"
            style={{ color: '#D4AF37' }}
          >
            ರುಚಿಕರ ಸಾಂಪ್ರದಾಯಿಕ ತಿಂಡಿಗಳು
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 kannada-text"
            style={{ color: '#8B0000' }}
          >
            ಶ್ರೀ ದೇವಿ ಕ್ಯಾಂಟೀನ್
          </h2>
          <p
            className="text-sm sm:text-base max-w-xl mx-auto mb-6 kannada-text leading-relaxed"
            style={{ color: '#6b4c4c' }}
          >
            ತಾಜಾ ಹಾಗೂ ಸುಚಿ-ರುಚಿಯಾದ ಸಾಂಪ್ರದಾಯಿಕ ಊಟ ಮತ್ತು ಚಾಟ್ಸ್ ತಿಂಡಿಗಳು
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37)' }} />
            <div className="w-2.5 h-2.5 rotate-45" style={{ background: '#D4AF37' }} />
            <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, #D4AF37, transparent)' }} />
          </div>
        </div>

        {/* 1. ಶ್ರೀ ದೇವಿ ಕ್ಯಾಂಟೀನ್ section */}
        <div className="mb-14">
          <div className="flex items-center gap-3 border-b-2 pb-3 mb-6" style={{ borderColor: 'rgba(139,0,0,0.15)' }}>
            <div className="w-3 h-6 rounded-full" style={{ background: '#8B0000' }} />
            <h3
              className="text-xl sm:text-2xl md:text-3xl font-bold kannada-text"
              style={{ color: '#8B0000' }}
            >
              ಶ್ರೀ ದೇವಿ ಕ್ಯಾಂಟೀನ್ ಊಟ &amp; ತಿಂಡಿಗಳು
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {canteenOnly.map((item, i) => (
              <CardItem key={item.name} item={item} index={i} />
            ))}
          </div>
        </div>

        {/* 2. ಶ್ರೀ ದೇವಿ ಚಾಟ್ಸ್ section */}
        <div>
          <div className="flex items-center gap-3 border-b-2 pb-3 mb-6" style={{ borderColor: 'rgba(196,20,20,0.15)' }}>
            <div className="w-3 h-6 rounded-full" style={{ background: '#c41414' }} />
            <h3
              className="text-xl sm:text-2xl md:text-3xl font-bold kannada-text"
              style={{ color: '#8B0000' }}
            >
              ಶ್ರೀ ದೇವಿ ಚಾಟ್ಸ್
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {chatsOnly.map((item, i) => (
              <CardItem key={item.name} item={item} index={i + canteenOnly.length} />
            ))}
          </div>
        </div>

        {/* Bottom Banner in Kannada only */}
        <div
          className="mt-14 sm:mt-16 p-6 sm:p-10 rounded-2xl sm:rounded-3xl text-center relative overflow-hidden shadow-xl"
          style={{
            background: 'linear-gradient(135deg, #8B0000 0%, #580000 100%)',
            border: '1.5px solid rgba(212,175,55,0.4)',
          }}
        >
          <h3
            className="text-lg sm:text-2xl md:text-3xl font-bold mb-2 kannada-text"
            style={{ color: '#FFD700' }}
          >
            ತಾಜಾ ಹಾಗೂ ಬಿಸಿ ಬಿಸಿ ಆಹಾರಕ್ಕಾಗಿ ಸಂಪರ್ಕಿಸಿ!
          </h3>
          <p className="text-xs sm:text-sm max-w-lg mx-auto mb-5 kannada-text text-amber-100/90">
            ಶ್ರೀ ದೇವಿ ಕ್ಯಾಂಟೀನ್ ಮತ್ತು ಚಾಟ್ಸ್ - ಬೆಟ್ಟಂಪಾಡಿ. ವಾಟ್ಸಾಪ್ ಮೂಲಕ ನೇರವಾಗಿ ಆರ್ಡರ್ ಮಾಡಿ.
          </p>
          <a
            href="https://wa.me/919740449324?text=ನಮಸ್ಕಾರ%2C%20ನನಗೆ%20ಕ್ಯಾಂಟೀನ್%20ಮತ್ತು%20ಚಾಟ್ಸ್%20ಆರ್ಡರ್%20ಮಾಡಬೇಕು"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 hover:scale-105 kannada-text shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #D4AF37, #FFD700)',
              color: '#8B0000',
            }}
          >
            ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಆರ್ಡರ್ ಮಾಡಿ
          </a>
        </div>
      </div>
    </section>
  );
}
