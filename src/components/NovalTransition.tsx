import { ArrowRight } from "lucide-react";

const NovalTransition = () => {
  return (
    <section className="w-full bg-gradient-to-r from-slate-100 via-blue-50 to-slate-100 py-16 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          {/* Text Section */}
          <div className="flex items-center gap-4 text-center lg:text-left">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-slate-900">
              Looking For Something More Passive?
            </h2>
            <ArrowRight className="hidden lg:block text-blue-600 animate-pulse" size={48} />
          </div>
          
          {/* Arrow for mobile */}
          <ArrowRight className="lg:hidden text-blue-600 animate-pulse rotate-90 lg:rotate-0" size={48} />
          
          {/* Logo and Company Name Section */}
          <a 
            href="https://novalcapitalgroup.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-slate-800/90 backdrop-blur-sm rounded-2xl px-8 py-6 hover:bg-slate-800 transition-all duration-300 transform hover:scale-105"
          >
            {/* Logo Icon */}
            <img 
              src="/lovable-uploads/b840c248-e891-4529-bc14-29c4cf690268.png" 
              alt="Noval Capital Group Logo" 
              className="h-12 w-auto"
            />
            
            {/* Company Name */}
            <div className="text-white">
              <div className="text-2xl md:text-3xl font-bold tracking-wide">
                NOVAL
              </div>
              <div className="text-sm md:text-base font-light tracking-widest opacity-90">
                CAPITAL GROUP
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default NovalTransition;