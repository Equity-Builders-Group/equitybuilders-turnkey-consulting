import { useRef } from "react";
import HLSVideoPlayer, { HLSVideoPlayerRef } from "@/components/shared/HLSVideoPlayer";

const VideoShowcase = () => {
  const videoPlayerRef = useRef<HLSVideoPlayerRef>(null);

  return (
    <section className="w-full bg-black">
      <div className="w-full">
        {/* Heading */}
        <div className="text-center py-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 drop-shadow-lg">
            See Us In Action
          </h2>
        </div>
        
        {/* Video Container - Full width, height matches 16:9 aspect ratio */}
        <div className="w-full">
          <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh]">
            <HLSVideoPlayer
              ref={videoPlayerRef}
              videoUrl="https://vz-447b6532-fd2.b-cdn.net/65558fdd-047e-401c-b75c-210360836388/playlist.m3u8"
              autoPlay={true}
              showControls={true}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;