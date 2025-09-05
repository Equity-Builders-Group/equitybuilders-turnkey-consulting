import { useEffect, useRef, useState, forwardRef, useImperativeHandle } from "react";
import { Volume2 } from "lucide-react";
import Hls from "hls.js";

interface HLSVideoPlayerProps {
  videoUrl: string;
  autoPlay?: boolean;
  showControls?: boolean;
  showUnmuteButton?: boolean;
  onVideoReady?: () => void;
  onError?: (error: any) => void;
  className?: string;
  containerClassName?: string;
  unmuteButtonPosition?: "center" | "bottom";
  componentName?: string; // For debugging
}

export interface HLSVideoPlayerRef {
  play: () => Promise<void>;
  pause: () => void;
  reset: () => void;
  setMuted: (muted: boolean) => void;
  getCurrentTime: () => number;
  setCurrentTime: (time: number) => void;
  isPlaying: () => boolean;
  isMuted: () => boolean;
}

const HLSVideoPlayer = forwardRef<HLSVideoPlayerRef, HLSVideoPlayerProps>(({
  videoUrl,
  autoPlay = false,
  showControls = true,
  showUnmuteButton = true,
  onVideoReady,
  onError,
  className = "w-full h-full object-cover",
  containerClassName = "relative w-full h-full",
  unmuteButtonPosition = "center",
  componentName = "HLSVideoPlayer"
}, ref) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<Hls | null>(null);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [hasUnmutedOnce, setHasUnmutedOnce] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);

  // Expose methods via ref
  useImperativeHandle(ref, () => ({
    play: async () => {
      if (videoRef.current) {
        return videoRef.current.play();
      }
      return Promise.reject("Video not available");
    },
    pause: () => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    },
    reset: () => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.muted = true;
        setIsVideoMuted(true);
        setHasUnmutedOnce(false);
      }
    },
    setMuted: (muted: boolean) => {
      if (videoRef.current) {
        videoRef.current.muted = muted;
        setIsVideoMuted(muted);
      }
    },
    getCurrentTime: () => {
      return videoRef.current?.currentTime || 0;
    },
    setCurrentTime: (time: number) => {
      if (videoRef.current) {
        videoRef.current.currentTime = time;
      }
    },
    isPlaying: () => {
      return videoRef.current ? !videoRef.current.paused : false;
    },
    isMuted: () => {
      return videoRef.current ? videoRef.current.muted : true;
    }
  }));

  useEffect(() => {
    if (videoRef.current && videoUrl) {
      const video = videoRef.current;
      
      console.log(`${componentName}: Starting video initialization`);
      console.log(`${componentName}: Video element available:`, !!video);
      console.log(`${componentName}: Video URL:`, videoUrl);
      
      // Reset video state
      video.currentTime = 0;
      video.muted = true;
      setIsVideoMuted(true);
      setHasUnmutedOnce(false);
      setIsVideoReady(false);

      // Cleanup any existing HLS instance
      if (hlsRef.current) {
        console.log(`${componentName}: Cleaning up existing HLS instance`);
        hlsRef.current.destroy();
        hlsRef.current = null;
      }

      if (Hls.isSupported()) {
        console.log(`${componentName}: Using HLS.js for video playback`);
        const hls = new Hls({
          startLevel: -1,
          capLevelToPlayerSize: true,
          maxBufferLength: 30,
          maxMaxBufferLength: 60
        });
        
        hlsRef.current = hls;
        
        hls.on(Hls.Events.ERROR, (event, data) => {
          if (data.fatal) {
            console.error(`${componentName}: Fatal HLS Error:`, event, data);
            onError?.(data);
          }
        });
        
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          console.log(`${componentName}: Manifest parsed, video ready`);
          setIsVideoReady(true);
          onVideoReady?.();
          
          if (autoPlay) {
            video.play().catch(error => {
              console.error(`${componentName}: Error auto-playing video:`, error);
            });
          }
        });
        
        hls.loadSource(videoUrl);
        hls.attachMedia(video);
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        // Native HLS support (Safari)
        console.log(`${componentName}: Using native HLS support`);
        video.src = videoUrl;
        
        const handleLoadedData = () => {
          console.log(`${componentName}: Video data loaded, ready for playback`);
          setIsVideoReady(true);
          onVideoReady?.();
          
          if (autoPlay) {
            video.play().catch(error => {
              console.error(`${componentName}: Error auto-playing video:`, error);
            });
          }
        };
        
        video.addEventListener('loadeddata', handleLoadedData);
        
        return () => {
          video.removeEventListener('loadeddata', handleLoadedData);
        };
      } else {
        console.error(`${componentName}: HLS not supported`);
        onError?.({ message: "HLS not supported in this browser" });
      }
    }

    return () => {
      if (hlsRef.current) {
        console.log(`${componentName}: Cleaning up HLS`);
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
    };
  }, [videoUrl, autoPlay, componentName, onVideoReady, onError]);

  const handleVolumeChange = () => {
    if (videoRef.current) {
      const previousMuted = isVideoMuted;
      const currentMuted = videoRef.current.muted;
      setIsVideoMuted(currentMuted);
      
      // If video was previously muted and is now unmuted for the first time
      if (previousMuted && !currentMuted && !hasUnmutedOnce) {
        setHasUnmutedOnce(true);
        videoRef.current.currentTime = 0; // Restart from beginning
      }
    }
  };

  const handleUnmuteClick = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      setIsVideoMuted(false);
      if (!hasUnmutedOnce) {
        setHasUnmutedOnce(true);
        videoRef.current.currentTime = 0;
      }
    }
  };

  return (
    <div className={containerClassName}>
      <video 
        ref={videoRef}
        className={className}
        controls={showControls && !isVideoMuted}
        muted
        loop
        playsInline
        onVolumeChange={handleVolumeChange}
      >
        Your browser does not support HLS video streaming.
      </video>

      {/* Unmute button - only show when video is muted and ready */}
      {showUnmuteButton && isVideoMuted && isVideoReady && (
        <div 
          className={`absolute cursor-pointer z-20 ${
            unmuteButtonPosition === "center" 
              ? "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" 
              : "bottom-6 left-6 right-6"
          }`}
          onClick={handleUnmuteClick}
        >
          <div className="flex flex-col items-center">
            <Volume2 
              size={unmuteButtonPosition === "center" ? 48 : 32} 
              className="text-white drop-shadow-2xl mb-2 animate-pulse" 
            />
            
            <div className="relative">
              {/* Pulse animation wrapper */}
              <div 
                className="relative bg-black/80 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-white"
                style={{
                  boxShadow: '0 0 0 1.5px rgba(0, 0, 0, 0.08)'
                }}
              >
                {/* Pulse effect */}
                <div 
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={{
                    animation: 'pulse-shadow 1.5s infinite ease-out',
                    animationName: 'pulse-shadow',
                    animationDuration: '1.5s',
                    animationIterationCount: 'infinite',
                    animationTimingFunction: 'ease-out',
                  }}
                ></div>
                
                <span className="relative text-white font-bold text-lg z-10">
                  🔊 Turn On Sound
                </span>
              </div>
              
              {/* CSS Animation */}
              <style dangerouslySetInnerHTML={{
                __html: `
                  @keyframes pulse-shadow {
                    0% {
                      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
                    }
                    70% {
                      box-shadow: 0 0 0 20px rgba(255, 255, 255, 0);
                    }
                    100% {
                      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
                    }
                  }
                `
              }} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

HLSVideoPlayer.displayName = "HLSVideoPlayer";

export default HLSVideoPlayer;