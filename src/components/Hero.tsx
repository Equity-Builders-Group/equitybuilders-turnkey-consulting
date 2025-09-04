import { Button } from "@/components/ui/button";
import professionalHeadshot1 from "@/assets/professional-headshot-1.jpg";
import professionalHeadshot2 from "@/assets/professional-headshot-2.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-primary overflow-hidden">
      {/* Dominant background image */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 w-3/5 h-full opacity-60">
          <img 
            src={professionalHeadshot1} 
            alt="Business transformation expert" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-primary/80 via-primary/60 to-primary"></div>
        </div>
      </div>

      {/* Floating professional images */}
      <div className="absolute top-16 right-16 w-72 h-72 rounded-3xl overflow-hidden shadow-2xl border-8 border-white/40 rotate-3 transform hover:rotate-1 transition-all duration-700">
        <img 
          src={professionalHeadshot2} 
          alt="TurnKey Development consultant" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/30"></div>
      </div>

      {/* Additional floating image */}
      <div className="absolute bottom-32 right-8 w-48 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-accent/60 -rotate-6 transform hover:-rotate-3 transition-all duration-500">
        <img 
          src={professionalHeadshot1} 
          alt="Business growth specialist" 
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
        />
      </div>

      {/* Dynamic background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-16 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-16 left-32 w-80 h-80 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl">
          <div className="space-y-12">
            {/* Main headline with bold styling */}
            <div className="space-y-6">
              <div className="inline-block bg-accent/20 backdrop-blur-sm px-6 py-3 rounded-full border border-accent/30">
                <span className="text-accent font-bold text-lg">🚀 TRANSFORM YOUR BUSINESS</span>
              </div>
              
              <h1 className="text-6xl lg:text-8xl font-black leading-none text-white">
                DISCOVER THE
                <span className="block text-accent drop-shadow-2xl">
                  POWER OF
                </span>
                <span className="block bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
                  TURNKEY
                </span>
                <span className="block text-white">
                  DEVELOPMENT
                </span>
              </h1>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 max-w-2xl">
                <p className="text-2xl text-white font-semibold leading-relaxed">
                  FREE 15-Minute Strategy Call to 
                  <span className="text-accent"> Skyrocket Your Revenue 📈</span>
                </p>
              </div>
            </div>
            
            {/* Bold CTA section */}
            <div className="space-y-6">
              <Button 
                size="lg" 
                className="text-2xl px-12 py-8 bg-white text-primary hover:bg-accent hover:text-white shadow-2xl transform hover:scale-105 transition-all duration-300 font-bold"
              >
                🎯 GET FREE STRATEGY SESSION
              </Button>
              
              <div className="flex items-center gap-4 text-white/90">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-accent"></div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-secondary"></div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-primary"></div>
                </div>
                <span className="text-lg">Join 500+ successful businesses</span>
              </div>
            </div>
            
            {/* Results showcase */}
            <div className="bg-black/20 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center space-y-2">
                  <div className="text-4xl font-black text-accent">500+</div>
                  <div className="text-white/80 font-medium">Projects Delivered</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl font-black text-accent">98%</div>
                  <div className="text-white/80 font-medium">Success Rate</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl font-black text-accent">40%</div>
                  <div className="text-white/80 font-medium">Revenue Boost</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl font-black text-accent">15+</div>
                  <div className="text-white/80 font-medium">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;