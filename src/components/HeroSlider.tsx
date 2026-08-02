import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideItem {
  id: number;
  src: string;
  fallback: string;
  title: string;
  subtitle: string;
}

const SLIDES: SlideItem[] = [
  {
    id: 1,
    src: '/slider1.jpg',
    fallback: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=1000',
    title: 'Empowering Communities',
    subtitle: 'Through sustainable healthcare, education, and legal support.'
  },
  {
    id: 2,
    src: '/slider2.jpg',
    fallback: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000',
    title: 'Healthcare & Clinical Camps',
    subtitle: 'Bringing free medical assistance and health screenings directly to local villages.'
  },
  {
    id: 3,
    src: '/slider3.jpg',
    fallback: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1000',
    title: 'Legal Aid & Social Justice',
    subtitle: 'Protecting rights and providing dedicated legal guidance for marginalized groups.'
  },
  {
    id: 4,
    src: '/slider4.jpg',
    fallback: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1000',
    title: 'Skill & Youth Empowerment',
    subtitle: 'Fostering self-reliance through vocational computer training and scholarship programs.'
  },
  {
    id: 5,
    src: '/slider5.jpg',
    fallback: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1000',
    title: 'Senior Citizen Dignity',
    subtitle: 'Holistic welfare, medical support, and companionship for our elders.'
  }
];

export function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto slide every 2000ms unless touched/hovered
  useEffect(() => {
    if (!isInteracting) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % SLIDES.length);
      }, 2000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isInteracting]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  };

  return (
    <div className="w-full lg:w-2/5 p-4 lg:p-6 flex items-center justify-center">
      {/* Rounded Container Div holding the Slider */}
      <div
        className="relative w-full max-w-lg h-[460px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-200/20 select-none group"
        onTouchStart={() => setIsInteracting(true)}
        onTouchEnd={() => setIsInteracting(false)}
        onMouseEnter={() => setIsInteracting(true)}
        onMouseLeave={() => setIsInteracting(false)}
        onMouseDown={() => setIsInteracting(true)}
        onMouseUp={() => setIsInteracting(false)}
      >
        {/* Smooth horizontal sliding track (No flashing) */}
        <div
          className="flex w-full h-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {SLIDES.map((slide, index) => {
            const isActive = index === currentIndex;
            return (
              <div key={slide.id} className="w-full h-full shrink-0 relative overflow-hidden">
                <img
                  src={slide.src}
                  alt={slide.title}
                  className={`w-full h-full object-cover transition-transform duration-500 ease-out ${
                    isInteracting && isActive ? 'scale-110' : 'scale-100'
                  }`}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== slide.fallback) {
                      target.src = slide.fallback;
                    }
                  }}
                  referrerPolicy="no-referrer"
                />
                {/* Gradient Overlay for Readable Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2C6C]/95 via-[#163E96]/40 to-transparent pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* Fixed Position Navigation Arrows (Centered vertically on left & right) */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/75 backdrop-blur-md text-white flex items-center justify-center transition-all border border-white/20 active:scale-95 shadow-lg"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/75 backdrop-blur-md text-white flex items-center justify-center transition-all border border-white/20 active:scale-95 shadow-lg"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Slide Counter Badge (Top Right) */}
        <div className="absolute top-4 right-4 z-20 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-white/90 text-xs font-bold tracking-wider">
          0{currentIndex + 1} / 0{SLIDES.length}
        </div>

        {/* Bottom Content Area */}
        <div className="absolute bottom-0 inset-x-0 z-20 p-6 md:p-8 flex flex-col justify-end pointer-events-none">
          <div className="mb-4">
            <h3 className="text-xl md:text-2xl font-black text-white mb-1.5 leading-tight drop-shadow-md">
              {SLIDES[currentIndex].title}
            </h3>
            <p className="text-blue-100 text-xs md:text-sm leading-relaxed max-w-sm drop-shadow">
              {SLIDES[currentIndex].subtitle}
            </p>
          </div>

          {/* Dot Indicators */}
          <div className="flex items-center gap-2 pointer-events-auto">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'w-7 bg-[#F5A623]'
                    : 'w-2 bg-white/40 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
