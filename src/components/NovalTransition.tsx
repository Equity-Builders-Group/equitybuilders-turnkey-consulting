import { ArrowRight } from "lucide-react";

const NovalTransition = () => {
  return (
    <section className="w-full bg-emerald-800 py-8 border-t border-emerald-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          {/* Text and Arrow */}
          <div className="flex items-center gap-6">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
              Looking For Something More Passive?
            </h2>
            <ArrowRight className="text-emerald-300" size={32} />
          </div>
          
          {/* Logo and Company Name */}
          <a 
            href="https://novalcapitalgroup.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-300"
          >
            <img 
              src="/lovable-uploads/b840c248-e891-4529-bc14-29c4cf690268.png" 
              alt="Noval Capital Group Logo" 
              className="h-8 w-auto"
            />
            <div className="text-white">
              <div className="text-lg font-bold tracking-wide">NOVAL</div>
              <div className="text-xs font-light tracking-widest opacity-90">CAPITAL GROUP</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default NovalTransition;