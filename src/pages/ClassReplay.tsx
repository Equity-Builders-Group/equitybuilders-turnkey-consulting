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
          {/* Hero Text */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight drop-shadow-2xl">
              CONVERT CASH OR
              <br />
              UNDEVELOPED LAND INTO
              <br />
              <span className="bg-gradient-to-r from-accent to-highlight bg-clip-text text-transparent">
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
            <Button
              onClick={handleBookCall}
              size="lg"
              className="bg-white text-primary hover:bg-accent hover:text-white px-8 md:px-12 py-6 md:py-8 rounded-xl md:rounded-2xl text-xl md:text-2xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Book A Call
            </Button>
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
