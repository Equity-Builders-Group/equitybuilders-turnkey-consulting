import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import HLSVideoPlayer, { HLSVideoPlayerRef } from "@/components/shared/HLSVideoPlayer";
import Footer from "@/components/Footer";

const ClassReplay = () => {
  const videoPlayerRef = useRef<HLSVideoPlayerRef>(null);
  const [showConsultationModal, setShowConsultationModal] = useState(false);

  const handleBookCall = () => {
    const event = new CustomEvent('openConsultation');
    window.dispatchEvent(event);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section with Video */}
      <section className="flex-1 bg-gradient-primary relative overflow-hidden">
        {/* Background texture */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(/lovable-uploads/4a2cd88c-1e89-4f93-a9e5-ccb59cbce7a6.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="container relative z-10 mx-auto px-4 py-12 md:py-20">
          {/* Top Heading */}
          <div className="text-center mb-8">
            <h2 className="text-5xl sm:text-6xl font-black leading-none text-white drop-shadow-lg">
              TURNKEY DEVELOPMENT
              <span className="block text-accent drop-shadow-2xl">
                DONE FOR YOU.
              </span>
              <span className="block bg-gradient-to-r from-white to-highlight bg-clip-text text-transparent drop-shadow-lg">
                WE'LL DO ALL THE WORK!
              </span>
            </h2>
          </div>

          {/* Hero Text */}
          <div className="text-center mb-8 md:mb-12">
            <p className="text-2xl md:text-3xl text-white font-semibold mb-4 drop-shadow-lg">
              We help busy professionals to
            </p>
            <h1 className="text-6xl sm:text-5xl lg:text-7xl font-black leading-none text-white drop-shadow-lg">
              <span className="block drop-shadow-2xl text-5xl sm:text-4xl lg:text-6xl">
                CONVERT CASH OR
              </span>
              <span className="block text-accent-gold drop-shadow-2xl text-5xl sm:text-5xl lg:text-7xl">
                UNDEVELOPED LAND INTO
              </span>
              <span className="block bg-gradient-to-r from-white to-highlight bg-clip-text text-6xl lg:text-8xl text-transparent drop-shadow-lg">
                SIX FIGURE PROFITS
              </span>
            </h1>
          </div>

          {/* Video Player */}
          <div className="max-w-5xl mx-auto mb-8 md:mb-12">
            <div className="relative bg-black rounded-xl md:rounded-2xl overflow-hidden shadow-2xl aspect-video">
              <HLSVideoPlayer
                ref={videoPlayerRef}
                videoUrl="https://vz-447b6532-fd2.b-cdn.net/114d20b4-b152-48e8-b8d1-0a0e12470326/playlist.m3u8"
                autoPlay={true}
                showControls={true}
                showUnmuteButton={true}
                unmuteButtonPosition="center"
                componentName="ClassReplayPage"
                className="w-full h-full object-cover"
                containerClassName="w-full h-full"
                enableProgressGate={true}
                progressGatePercentage={20}
                enablePlayheadStorage={true}
                onProgressGateSubmit={(data) => {
                  console.log('Progress gate form submitted:', data);
                }}
              />
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <div className="relative inline-block">
              <Button
                onClick={handleBookCall}
                size="lg"
                className="text-lg sm:text-2xl px-8 sm:px-12 py-6 sm:py-8 bg-[#ff4800] text-white hover:bg-accent hover:text-white shadow-2xl transform hover:scale-105 transition-all duration-300 font-bold"
              >
                Book A Call
              </Button>

              {/* Pulse effect */}
              <div 
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  animation: 'pulse-shadow 1.5s infinite ease-out',
                  animationName: 'pulse-shadow',
                  animationDuration: '1.5s',
                  animationIterationCount: 'infinite',
                  animationTimingFunction: 'ease-out',
                }}
              ></div>
            </div>
            <p className="text-white/90 mt-4 text-base md:text-lg font-semibold">
              Limited spots are available on the calendar.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ClassReplay;
