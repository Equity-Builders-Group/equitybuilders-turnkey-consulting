import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import { Play } from "lucide-react";
import HLSVideoPlayer, { HLSVideoPlayerRef } from "@/components/shared/HLSVideoPlayer";
import ConsultationModal from "./ConsultationModal";
import ExitIntentModal from "./ExitIntentModal";
import useExitIntent from "@/hooks/useExitIntent";

const Hero = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true); // Auto-start video
  const [showConsultationModal, setShowConsultationModal] = useState(false);
  const videoPlayerRef = useRef<HLSVideoPlayerRef>(null);
  
  // Exit intent functionality
  const { showExitIntent, closeExitIntent } = useExitIntent();

  // Listen for custom consultation event from exit intent modal
  useEffect(() => {
    const handleOpenConsultation = () => {
      setShowConsultationModal(true);
    };

    window.addEventListener('openConsultation', handleOpenConsultation);
    return () => window.removeEventListener('openConsultation', handleOpenConsultation);
  }, []);

  const handleVideoStart = () => {
    setIsVideoPlaying(true);
  };

  const handleVideoClose = () => {
    setIsVideoPlaying(false);
    videoPlayerRef.current?.reset();
  };

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

      {/* Pederson Exterior (Floating Left Bottom) */}
      <div className="hidden lg:block absolute bottom-40 left-16 w-72 h-48 rounded-3xl overflow-hidden shadow-2xl border-6 border-white/40 -rotate-3 transform hover:-rotate-1 transition-all duration-700">
        <img 
          src="/lovable-uploads/PedersonExterior.jpg" 
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
      
      <div className="container mx-auto px-6 sm:px-8 py-20 relative z-10">
        {/* Mobile-only top heading */}
        <div className="lg:hidden mb-12">
          <h2 className="text-5xl sm:text-6xl font-black leading-none text-white text-center drop-shadow-lg">
            TURN KEY DEVELOPMENT
            <span className="block text-accent drop-shadow-2xl">
              WE WILL DO
            </span>
            <span className="block bg-gradient-to-r from-white to-highlight bg-clip-text text-transparent drop-shadow-lg">
              ALL THE WORK!
            </span>
          </h2>
        </div>

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
          <div className="space-y-12 order-2 lg:order-1 text-center lg:text-left px-2 sm:px-0">
            {/* Main headline with bold styling */}
            <div className="space-y-6">
              {/* Desktop-only top heading */}
              <div className="hidden lg:block">
                <h3 className="text-3xl font-black leading-none text-white text-left mb-4 drop-shadow-lg">
                  TURN KEY DEVELOPMENT
                  <span className="block text-accent drop-shadow-2xl">
                    DONE-FOR-YOU.
                  </span>
                  <span className="block bg-gradient-to-r from-white to-highlight bg-clip-text text-transparent drop-shadow-lg">
                    WE WILL DO ALL THE WORK!
                  </span>
                </h3>
              </div>
              
              <div className="inline-block bg-accent/20 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white/60">
                <span className="text-white drop-shadow-lg font-bold text-sm sm:text-lg">Do You Have Over $100K & NO TIME? This is for you!</span>
              </div>
              
              <h1 className="text-6xl sm:text-5xl lg:text-8xl font-black leading-none text-white drop-shadow-lg">
                GO FROM 
                <span className="block text-accent-gold drop-shadow-2xl text-5xl sm:text-4xl lg:text-8xl">
                  UNDEVELOPED LAND TO
                </span>
                <span className="block bg-gradient-to-r from-white to-highlight bg-clip-text text-transparent drop-shadow-lg">
                  SIX FIGURE
                </span>
                <span className="block text-white drop-shadow-lg">
                  PROFITS
                </span>
              </h1>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 max-w-2xl mx-auto lg:mx-0 mx-8 sm:mx-auto">
                <p className="text-lg sm:text-2xl text-white font-semibold leading-relaxed">
                  Are you a busy professional looking to accelerate your retirement goals? <span className="font-normal text-white/80">You need the benefits of Real Estate and the tax write-offs that come with it to keep more of your money every year.</span>
                  <br /><br />
                  Lets work together. We will handle every step of the  complex<span className="text-highlight"> new construction development process</span>
                  — from land search to permits to actual construction.
                </p>
              </div>
            </div>
            
            {/* Bold CTA section */}
            <div className="space-y-6">
              <Button 
                size="lg" 
                onClick={() => setShowConsultationModal(true)}
                className="text-lg sm:text-2xl px-8 sm:px-12 py-6 sm:py-8 bg-[#ff4800] text-white hover:bg-accent hover:text-white shadow-2xl transform hover:scale-105 transition-all duration-300 font-bold"
              >
              Book A Call Today
              </Button>
              
              <div className="flex items-center justify-center lg:justify-start gap-4 text-white/90">
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
                  <div className="text-4xl font-black text-highlight">5+</div>
                  <div className="text-white/80 font-medium">Projects Delivered</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl font-black text-highlight">100%</div>
                  <div className="text-white/80 font-medium">Success Rate</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl font-black text-highlight">1.8x+</div>
                  <div className="text-white/80 font-medium">ROI Multiples</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl font-black text-highlight">5+</div>
                  <div className="text-white/80 font-medium">Years of Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - iPhone frame with your image */}
          <div className="relative flex justify-center lg:justify-start lg:pl-24">
            <div className="relative w-80 h-[600px] sm:w-80 sm:h-[600px] lg:w-96 lg:h-[800px]">
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
                            onClick={handleVideoStart}
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
                      <div className="w-full h-full bg-black relative">
                        {/* HLS Video player */}
                        <HLSVideoPlayer
                          ref={videoPlayerRef}
                          videoUrl="https://vz-447b6532-fd2.b-cdn.net/c6b998b8-9763-4324-94ea-1b19b14c3dc1/playlist.m3u8"
                          autoPlay={isVideoPlaying}
                          showControls={true}
                          showUnmuteButton={true}
                          unmuteButtonPosition="bottom"
                          componentName="Hero"
                          className="w-full h-full object-cover"
                          containerClassName="w-full h-full"
                        />

                        {/* Close button */}
                        <button
                          onClick={handleVideoClose}
                          className="absolute top-4 right-4 px-4 py-2 bg-black/60 text-white rounded-lg hover:bg-black/80 transition-colors backdrop-blur-sm z-30"
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
          </div>
        </div>

        {/* Mobile floating images - after content */}
        <div className="lg:hidden mt-20 flex justify-center">
          <div className="w-55 h-44 rounded-xl overflow-hidden shadow-lg border-2 border-accent/60 rotate-2">
            <img 
              src="/lovable-uploads/PedersonExterior.jpg" 
              alt="Pederson St Exterior" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Modals */}
      <ConsultationModal 
        isOpen={showConsultationModal} 
        onClose={() => setShowConsultationModal(false)} 
      />
      <ExitIntentModal 
        isOpen={showExitIntent} 
        onClose={closeExitIntent} 
      />
    </section>
  );
};

export default Hero;
