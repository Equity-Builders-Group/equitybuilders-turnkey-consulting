import { ArrowRight } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const NovalTransition = () => {
  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollReveal();
  
  return (
    <section 
      ref={sectionRef}
      className={`w-full bg-emerald-800 py-8 border-t border-emerald-700 transition-all duration-800 ${
        sectionVisible ? 'animate-reveal-fade-up' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          {/* Text and Arrow */}
          <div className="flex items-center gap-3 sm:gap-6">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white text-center sm:text-left">
              Looking For Something More Passive?
            </h2>
            <ArrowRight className="text-emerald-300 flex-shrink-0" size={24} />
          </div>
          
          {/* Logo and Company Name */}
          <a 
            href="https://novalcapitalgroup.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-4 hover:opacity-80 transition-opacity duration-300 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 sm:px-4 sm:py-3"
          >
            <img 
              src="/lovable-uploads/Noval-Capital-Final_Horizontal.png" 
              alt="Noval Capital Group Logo" 
              className="h-10 sm:h-12 md:h-16 w-auto brightness-0 invert"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default NovalTransition;