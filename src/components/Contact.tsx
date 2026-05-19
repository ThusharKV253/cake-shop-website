import { useEffect, useRef } from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
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
      { threshold: 0.1 }
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
      id="contact"
      ref={sectionRef}
      className="py-20 md:py-28"
      style={{ background: 'linear-gradient(180deg, #FFFDD0 0%, #fff9f0 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-sm font-bold tracking-widest uppercase mb-3"
            style={{ color: '#D4AF37' }}
          >
            Get In Touch
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: '#8B0000', fontFamily: 'Georgia, serif' }}
          >
            Contact Us
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37)' }} />
            <div className="w-2 h-2 rotate-45" style={{ background: '#D4AF37' }} />
            <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, #D4AF37, transparent)' }} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-16 items-start">
          {/* Left: Contact info */}
          <div ref={leftRef} className="space-y-4 md:space-y-6">
            {/* Phone card */}
            <div
              className="p-6 rounded-2xl"
              style={{
                background: '#fff',
                boxShadow: '0 4px 20px rgba(139,0,0,0.08)',
                border: '1px solid rgba(212,175,55,0.2)',
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #8B0000, #c41414)' }}
                >
                  <Phone size={20} style={{ color: '#D4AF37' }} />
                </div>
                <div>
                  <h3 className="font-bold text-base mb-1" style={{ color: '#8B0000' }}>Phone / WhatsApp</h3>
                  <a
                    href="tel:9740449324"
                    className="text-lg font-semibold block mb-3 transition-colors duration-200 hover:text-red-700"
                    style={{ color: '#3d0000' }}
                  >
                    +91 97404 49324
                  </a>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://wa.me/919740449324?text=I%20need%20to%20order%20cake"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      style={{
                        background: 'linear-gradient(135deg, #25D366, #128C7E)',
                        color: '#fff',
                        boxShadow: '0 3px 12px rgba(37,211,102,0.35)',
                      }}
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      WhatsApp
                    </a>
                    <a
                      href="tel:9740449324"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:scale-105"
                      style={{
                        background: 'linear-gradient(135deg, #8B0000, #c41414)',
                        color: '#D4AF37',
                        boxShadow: '0 3px 12px rgba(139,0,0,0.3)',
                      }}
                    >
                      <Phone size={14} />
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Address card */}
            <div
              className="p-6 rounded-2xl"
              style={{
                background: '#fff',
                boxShadow: '0 4px 20px rgba(139,0,0,0.08)',
                border: '1px solid rgba(212,175,55,0.2)',
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #8B0000, #c41414)' }}
                >
                  <MapPin size={20} style={{ color: '#D4AF37' }} />
                </div>
                <div>
                  <h3 className="font-bold text-base mb-1" style={{ color: '#8B0000' }}>Our Address</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#4a3030', lineHeight: '1.7' }}>
                    "SHRI DEVI CAKE PALACE"<br />
                    Bettampady, Lakshmishreesha Nivasa,<br />
                    Kuvenja, Bettampady Post,<br />
                    Puttur Taluk
                  </p>
                </div>
              </div>
            </div>

            {/* Hours card */}
            <div
              className="p-6 rounded-2xl"
              style={{
                background: '#fff',
                boxShadow: '0 4px 20px rgba(139,0,0,0.08)',
                border: '1px solid rgba(212,175,55,0.2)',
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #8B0000, #c41414)' }}
                >
                  <Clock size={20} style={{ color: '#D4AF37' }} />
                </div>
                <div>
                  <h3 className="font-bold text-base mb-1" style={{ color: '#8B0000' }}>Working Hours</h3>
                  <p className="text-sm" style={{ color: '#4a3030' }}>
                    Monday – Sunday<br />
                    <span className="font-semibold">8:00 AM – 9:00 PM</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Map */}
          <div ref={rightRef}>
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                boxShadow: '0 8px 40px rgba(139,0,0,0.15)',
                border: '2px solid rgba(212,175,55,0.25)',
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.856307102828!2d75.20013469999999!3d12.6574249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba491b571b87723%3A0x34eac91d1a08f5db!2s%22SHRI%20DEVI%20CAKE%20PALACE%22.Bettampady%20%2CLAKSHMISHREESHA%20NIVASA%2C%20KUVENJA%20%2CBETTAMPADY%20POST%20%2CPUTTUR%20TALUK!5e0!3m2!1sen!2sin!4v1779120317491!5m2!1sen!2sin"
                width="100%"
                height="420"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shri Devi Cake Palace Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
