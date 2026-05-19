import { useState } from 'react';
import { Phone } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [hoveredWhatsApp, setHoveredWhatsApp] = useState(false);
  const [hoveredCall, setHoveredCall] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col-reverse md:flex-row items-center gap-3 md:gap-2">
      {/* Call tooltip */}
      <span
        className="text-xs md:text-sm font-semibold rounded-full px-3 md:px-4 py-1.5 md:py-2 shadow-lg transition-all duration-300"
        style={{
          background: '#fff',
          color: '#E74C3C',
          boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
          opacity: hoveredCall ? 1 : 0,
          transform: hoveredCall ? 'translateX(0)' : 'translateX(12px)',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        Call Now
      </span>

      {/* Call button */}
      <a
        href="tel:9740449324"
        aria-label="Call Us"
        className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full transition-all duration-300"
        style={{
          background: 'linear-gradient(135deg, #E74C3C, #C0392B)',
          boxShadow: hoveredCall
            ? '0 8px 30px rgba(231,76,60,0.6), 0 0 0 4px rgba(231,76,60,0.15)'
            : '0 4px 20px rgba(231,76,60,0.4)',
          transform: hoveredCall ? 'scale(1.12)' : 'scale(1)',
        }}
        onMouseEnter={() => setHoveredCall(true)}
        onMouseLeave={() => setHoveredCall(false)}
      >
        <Phone size={20} className="md:hidden" style={{ color: '#fff' }} />
        <Phone size={24} className="hidden md:block" style={{ color: '#fff' }} />
      </a>

      {/* WhatsApp tooltip */}
      <span
        className="text-xs md:text-sm font-semibold rounded-full px-3 md:px-4 py-1.5 md:py-2 shadow-lg transition-all duration-300"
        style={{
          background: '#fff',
          color: '#128C7E',
          boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
          opacity: hoveredWhatsApp ? 1 : 0,
          transform: hoveredWhatsApp ? 'translateX(0)' : 'translateX(10px)',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        Order on WhatsApp
      </span>

      {/* WhatsApp button */}
      <a
        href="https://wa.me/919740449324?text=I%20need%20to%20order%20cake"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order on WhatsApp"
        className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full transition-all duration-300"
        style={{
          background: 'linear-gradient(135deg, #25D366, #128C7E)',
          boxShadow: hoveredWhatsApp
            ? '0 8px 30px rgba(37,211,102,0.6), 0 0 0 4px rgba(37,211,102,0.15)'
            : '0 4px 20px rgba(37,211,102,0.4)',
          transform: hoveredWhatsApp ? 'scale(1.12)' : 'scale(1)',
        }}
        onMouseEnter={() => setHoveredWhatsApp(true)}
        onMouseLeave={() => setHoveredWhatsApp(false)}
      >
        <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>

        {/* Pulse ring */}
        <span
          className="absolute rounded-full animate-ping"
          style={{
            width: '3rem',
            height: '3rem',
            background: 'rgba(37,211,102,0.3)',
            display: hoveredWhatsApp ? 'none' : 'block',
          }}
        />
      </a>
    </div>
  );
}
