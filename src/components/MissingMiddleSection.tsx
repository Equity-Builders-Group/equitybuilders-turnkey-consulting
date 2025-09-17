import { useEffect, useRef, useState } from 'react';
import useScrollReveal from "@/hooks/useScrollReveal";

const MissingMiddleSection = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();
  const { elementRef: imageRef, isVisible: imageVisible } = useScrollReveal<HTMLDivElement>();
  const { elementRef: descriptionRef, isVisible: descriptionVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="w-full py-20 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={headerRef}
      className={`transition-all duration-1000 ${
        headerVisible ? 'reveal-fade-down animate' : 'reveal-fade-down'
      }`}
        >
          <div className="text-center mb-12">
            <div className="inline-block bg-primary/10 backdrop-blur-sm px-8 py-4 rounded-2xl border border-primary/20 mb-8">
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
          ref={imageRef}
          className={`flex justify-center transition-all duration-1200 ${
            imageVisible ? 'reveal-zoom-in animate' : 'reveal-zoom-in'
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
          ref={descriptionRef}
          className={`text-center mt-12 transition-all duration-1000 ${
            descriptionVisible ? 'reveal-fade-up animate' : 'reveal-fade-up'
          }`}
        >
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            The "missing middle" represents a crucial gap in housing options between single-family homes and large apartment buildings. 
            These housing types offer opportunities for increased density while maintaining neighborhood character and affordability.
          </p>
        </div>
      </div>

      {/* Green gradient dashed divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-green-500 to-transparent relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-60" 
               style={{
                 backgroundImage: 'repeating-linear-gradient(to right, transparent 0px, transparent 8px, currentColor 8px, currentColor 16px)',
                 color: 'rgb(34 197 94)'
               }}>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissingMiddleSection;