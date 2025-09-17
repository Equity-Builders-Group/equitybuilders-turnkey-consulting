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
              <span className="text-primary font-bold text-xl">OUR TARGET FOCUS</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-foreground drop-shadow-lg">
              THE GAP IN THE MARKET
              <span className="block text-primary drop-shadow-lg">
                MISSING MIDDLE HOUSING
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The missing middle is the gap in the market with the highest returns and lowest barrier to entry. There is no old boys club, no huge
              regulatory red tape, or huge capital requirements to get a significant return in a short amount of time. Municipalities all across the country and 
              new lending guidelines are changing at this very moment.Your level of risk
              goes down when you work with us. We have been where you want to go!
            </p>
          </div>

        </div>
      </div>

      {/* Centered graphic section */}
      <div className="container mx-auto px-4">
        <div 
          className={`flex justify-center transition-all duration-1200 delay-300 ease-out ${
            isVisible 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-95'
          }`}
        >
          <img 
            src="/images/missing-middle-graphic-new.png"
            alt="Missing Middle Density Housing Spectrum - showing progression from ADU, duplex, fourplex, courtyard complex, townhouse, multiplex, live-work housing types"
            className="max-w-4xl w-full h-auto object-contain"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
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
    </section>
  );
};

export default MissingMiddleSection;