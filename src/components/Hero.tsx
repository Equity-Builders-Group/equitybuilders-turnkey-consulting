import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import { Play } from "lucide-react";

const Hero = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="relative min-h-screen bg-gradient-primary overflow-hidden">
      {/* Background image overlays with your real photos */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large background professional image */}
        <div className="absolute right-0 top-0 w-3/5 h-full opacity-40">
          <img 
            src="/lovable-uploads/099d43ed-30ee-447a-8302-8f31d970c7b5.png" 
            alt="TurnKey Development founder and consultant" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-primary/80 via-primary/60 to-primary"></div>
        </div>

        {/* Construction project background for texture */}
        <div className="absolute left-0 bottom-0 w-2/5 h-2/3 opacity-20">
          <img 
            src="/lovable-uploads/f48a2dc0-af37-42d8-824b-fc482c4ceb7f.png" 
            alt="Construction project by TurnKey Development" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent"></div>
        </div>
      </div>

      {/* Left side floating construction images - hidden on mobile */}
      <div className="hidden lg:block absolute top-20 left-8 w-64 h-64 rounded-2xl overflow-hidden shadow-xl border-4 border-accent/60 rotate-6 transform hover:rotate-3 transition-all duration-500">
        <img 
          src="/lovable-uploads/f48a2dc0-af37-42d8-824b-fc482c4ceb7f.png" 
          alt="Construction project by TurnKey Development" 
          className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
        />
      </div>

      <div className="hidden lg:block absolute bottom-40 left-16 w-72 h-48 rounded-3xl overflow-hidden shadow-2xl border-6 border-white/40 -rotate-3 transform hover:-rotate-1 transition-all duration-700">
        <img 
          src="/lovable-uploads/4a2cd88c-1e89-4f93-a9e5-ccb59cbce7a6.png" 
          alt="Architectural project showcase" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-accent/30"></div>
      </div>

      {/* Right side floating professional images - hidden on mobile */}
      <div className="hidden lg:block absolute top-16 right-16 w-80 h-80 rounded-3xl overflow-hidden shadow-2xl border-8 border-white/40 rotate-3 transform hover:rotate-1 transition-all duration-700">
        <img 
          src="/lovable-uploads/993aef6a-33f5-465f-8eba-159acc3d0dd8.png" 
          alt="TurnKey Development business consultant" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/30"></div>
      </div>

      {/* Additional right side floating construction project image */}
      <div className="hidden lg:block absolute bottom-32 right-8 w-56 h-56 rounded-2xl overflow-hidden shadow-xl border-4 border-accent/60 -rotate-6 transform hover:-rotate-3 transition-all duration-500">
        <img 
          src="/lovable-uploads/4a2cd88c-1e89-4f93-a9e5-ccb59cbce7a6.png" 
          alt="Architectural project showcase" 
          className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
        />
      </div>

      {/* Textured background elements with construction theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-16 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-16 left-32 w-80 h-80 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-3xl"></div>
        
        {/* Wood grain texture overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-gradient-to-br from-amber-800/30 via-amber-600/20 to-amber-900/30"></div>
        </div>
        
        {/* Construction grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(0deg, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Mobile floating images - before content */}
        <div className="lg:hidden mb-8 flex justify-center gap-4">
          <div className="w-32 h-32 rounded-xl overflow-hidden shadow-lg border-2 border-accent/60 rotate-3">
            <img 
              src="/lovable-uploads/f48a2dc0-af37-42d8-824b-fc482c4ceb7f.png" 
              alt="Construction project by TurnKey Development" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-32 h-32 rounded-xl overflow-hidden shadow-lg border-2 border-white/40 -rotate-3">
            <img 
              src="/lovable-uploads/993aef6a-33f5-465f-8eba-159acc3d0dd8.png" 
              alt="TurnKey Development business consultant" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-2 items-center max-w-7xl">
          {/* Left content */}
          <div className="space-y-12 order-2 lg:order-1">
            {/* Main headline with bold styling */}
            <div className="space-y-6">
              <div className="inline-block bg-accent/20 backdrop-blur-sm px-6 py-3 rounded-full border border-accent/30">
                <span className="text-accent font-bold text-lg">🏗️ DONE-FOR-YOU CONSTRUCTION DEVELOPMENT</span>
              </div>
              
              <h1 className="text-6xl lg:text-8xl font-black leading-none text-white">
                FROM EMPTY
                <span className="block text-accent drop-shadow-2xl">
                  LOT TO
                </span>
                <span className="block bg-gradient-to-r from-white to-highlight bg-clip-text text-transparent">
                  COMPLETED
                </span>
                <span className="block text-white">
                  PROJECT
                </span>
              </h1>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 max-w-2xl">
                <p className="text-2xl text-white font-semibold leading-relaxed">
                  We guide investors, developers, and first-time builders through every step of the 
                  <span className="text-accent"> pre-construction and construction process 🏗️</span>
                  — from land search to permits to builder selection.
                </p>
              </div>
            </div>
            
            {/* Bold CTA section */}
            <div className="space-y-6">
              <Button 
                size="lg" 
                className="text-2xl px-12 py-8 bg-white text-primary hover:bg-accent hover:text-white shadow-2xl transform hover:scale-105 transition-all duration-300 font-bold"
              >
                📞 Book Your Consultation Today
              </Button>
              
              <div className="flex items-center gap-4 text-white/90">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-accent"></div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-secondary"></div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-primary"></div>
                </div>
                <span className="text-lg">Join 100+ successful developers</span>
              </div>
            </div>
            
            {/* Results showcase */}
            <div className="bg-black/20 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center space-y-2">
                  <div className="text-4xl font-black text-highlight">500+</div>
                  <div className="text-white/80 font-medium">Projects Delivered</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl font-black text-highlight">98%</div>
                  <div className="text-white/80 font-medium">Success Rate</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl font-black text-highlight">40%</div>
                  <div className="text-white/80 font-medium">Revenue Boost</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl font-black text-highlight">15+</div>
                  <div className="text-white/80 font-medium">Years Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - iPhone frame with your image */}
          <div className="relative flex justify-center lg:justify-start lg:pl-24">
            <div className="relative w-64 h-[500px] sm:w-80 sm:h-[600px] lg:w-96 lg:h-[800px]">
              {/* iPhone frame */}
              <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900 rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
                  {/* Notch */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-6 sm:w-24 sm:h-6 lg:w-32 lg:h-8 bg-black rounded-full z-20"></div>
                  
                  {/* Content area */}
                  <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative">
                    {!isVideoPlaying ? (
                      <>
                        {/* Your image */}
                        <img 
                          src="/lovable-uploads/969dc144-8ea0-45cc-8375-b4bc44dc44c5.png" 
                          alt="Business transformation expert introduction" 
                          className="w-full h-full object-cover"
                        />
                        
                        {/* Play button overlay */}
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <button
                            onClick={() => setIsVideoPlaying(true)}
                            className="w-28 h-28 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110 shadow-2xl"
                          >
                            <Play className="w-12 h-12 text-primary ml-1" fill="currentColor" />
                          </button>
                        </div>
                        
                        {/* Introduction overlay */}
                        <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-sm rounded-2xl p-6">
                          <p className="text-white font-semibold text-center text-lg">
                            👋 Your Construction Partner
                          </p>
                          <p className="text-white/80 text-base text-center mt-2">
                            Tap to see how we build together
                          </p>
                        </div>
                      </>
                    ) : (
                      <div className="w-full h-full bg-black">
                        {/* Video player */}
                        <video 
                          ref={videoRef}
                          src="https://www.dropbox.com/scl/fi/tpjlx539ucrc6xupunzr9/IMG_5896.mov?rlkey=dkftvfl3my0xmfsuegfu0xv0k&dl=1"
                          className="w-full h-full object-cover"
                          controls
                          autoPlay
                          muted
                          playsInline
                          onVolumeChange={() => {
                            if (videoRef.current) {
                              setIsVideoMuted(videoRef.current.muted);
                            }
                          }}
                        >
                          Your browser does not support the video tag.
                        </video>

                        {/* Close button */}
                        <button
                          onClick={() => setIsVideoPlaying(false)}
                          className="absolute top-4 right-4 px-4 py-2 bg-black/60 text-white rounded-lg hover:bg-black/80 transition-colors backdrop-blur-sm"
                        >
                          ✕ Close
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {/* iPhone frame shadow */}
              <div className="absolute inset-0 bg-gradient-to-b from-slate-600/50 to-slate-900/50 rounded-[3rem] blur-xl scale-105 -z-10"></div>
            </div>
            
            {/* Floating arrow with unmute text - only show when video is playing and muted */}
            {isVideoPlaying && isVideoMuted && (
              <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 animate-pulse">
                <div className="relative">
                  {/* Curved arrow pointing up */}
                  <svg 
                    width="120" 
                    height="60" 
                    viewBox="0 0 120 60" 
                    className="text-white drop-shadow-lg"
                  >
                    <path 
                      d="M20 50 Q 60 20 100 30 L 90 35 M 100 30 L 95 20" 
                      stroke="currentColor" 
                      strokeWidth="3" 
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {/* Text */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white font-bold text-lg drop-shadow-lg whitespace-nowrap">
                    Turn On Your Sound
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile floating images - after content */}
        <div className="lg:hidden mt-20 flex justify-center">
          <div className="w-40 h-24 rounded-xl overflow-hidden shadow-lg border-2 border-accent/60 rotate-2">
            <img 
              src="/lovable-uploads/4a2cd88c-1e89-4f93-a9e5-ccb59cbce7a6.png" 
              alt="Architectural project showcase" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;