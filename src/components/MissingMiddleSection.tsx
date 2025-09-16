import { useEffect, useRef, useState } from 'react';

const MissingMiddleSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="w-full py-20 bg-background relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div 
          className={`transition-all duration-1000 ease-out ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <div className="inline-block bg-primary/10 backdrop-blur-sm px-8 py-4 rounded-full border border-primary/20 mb-8">
              <span className="text-primary font-bold text-xl">🏢 HOUSING DENSITY SPECTRUM</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-foreground">
              UNDERSTANDING THE
              <span className="block text-primary drop-shadow-lg">
                MISSING MIDDLE
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Exploring the housing density spectrum from single family homes to mid-rise developments, 
              and identifying opportunities in the often overlooked "missing middle" housing types.
            </p>
          </div>

          <div 
            className={`w-full max-w-7xl mx-auto transition-all duration-1200 delay-300 ease-out ${
              isVisible 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-95'
            }`}
          >
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-8 shadow-2xl">
              <img 
                src="/images/missing-middle-graphic.png"
                alt="Missing Middle Density Housing Spectrum - showing progression from single family homes through ADU, duplex, fourplex, courtyard complex, townhouse, multiplex, live-work to mid-rise developments"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>

          <div 
            className={`text-center mt-12 transition-all duration-1000 delay-600 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-5'
            }`}
          >
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              The "missing middle" represents a crucial gap in housing options between single-family homes and large apartment buildings. 
              These housing types offer opportunities for increased density while maintaining neighborhood character and affordability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissingMiddleSection;