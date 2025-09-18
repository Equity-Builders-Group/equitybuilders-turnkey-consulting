import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";
const About = () => {
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollReveal();
  const { elementRef: imageRef, isVisible: imageVisible } = useScrollReveal();
  
  return <section className="py-20 bg-gradient-to-br from-accent/20 via-background to-primary/10 relative overflow-hidden">
      {/* Background with architectural drawing */}
      <div className="absolute inset-0">
        {/* Architectural drawing background */}
        <div className="absolute inset-0 opacity-90">
          <img src="/lovable-uploads/5df938db-8063-4672-9fdb-4bb75420dbc7.png" alt="Construction site plan and architectural drawing" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-br from-background/20 via-transparent to-background/20"></div>
        </div>
      </div>

      {/* Enhanced textured background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Architectural texture overlays */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
          backgroundImage: `
              linear-gradient(45deg, rgba(120, 100, 25, 0.1) 25%, transparent 25%),
              linear-gradient(-45deg, rgba(120, 100, 25, 0.1) 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, rgba(120, 100, 25, 0.1) 75%),
              linear-gradient(-45deg, transparent 75%, rgba(120, 100, 25, 0.1) 75%)
            `,
          backgroundSize: '30px 30px',
          backgroundPosition: '0 0, 0 15px, 15px -15px, -15px 0px'
        }}></div>
        </div>
        
        {/* Wood grain texture */}
        <div className="absolute inset-0 opacity-8">
          <div className="w-full h-full bg-gradient-to-br from-amber-900/10 via-amber-700/5 to-amber-800/10"></div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
            This section has been moved to the "Why Work With Us" section above.
          </p>
          
          <Button
            onClick={() => {
              window.dispatchEvent(new Event('openConsultation'));
            }}
            className="text-lg sm:text-2xl px-8 sm:px-12 py-6 sm:py-8 bg-[#ff4800] text-white hover:bg-accent hover:text-white shadow-2xl transform hover:scale-105 transition-all duration-300 font-bold"
          >
            Get Started Today
            <ArrowRight className="ml-2" size={24} />
          </Button>
        </div>
      </div>
    </section>;
};
export default About;