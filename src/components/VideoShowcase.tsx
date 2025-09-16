import { useRef } from "react";
import HLSVideoPlayer, { HLSVideoPlayerRef } from "@/components/shared/HLSVideoPlayer";

const VideoShowcase = () => {
  const videoPlayerRef = useRef<HLSVideoPlayerRef>(null);

  return (
    <section className="w-full bg-black py-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            See Us In Action
          </h2>
        </div>
        
        {/* Video Container */}
        <div className="w-full max-w-7xl mx-auto">
          <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
            <HLSVideoPlayer
              ref={videoPlayerRef}
              videoUrl="https://vz-447b6532-fd2.b-cdn.net/65558fdd-047e-401c-b75c-210360836388/playlist.m3u8"
              autoPlay={true}
              showControls={true}
              className="w-full h-full rounded-lg overflow-hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;