import { X, Volume2 } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import Hls from "hls.js";

interface ExitIntentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ExitIntentModal = ({ isOpen, onClose }: ExitIntentModalProps) => {
  const [showModal, setShowModal] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [hasUnmutedOnce, setHasUnmutedOnce] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  console.log('ExitIntentModal render - isOpen:', isOpen, 'showModal:', showModal);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    if (videoRef.current && isOpen) {
      const video = videoRef.current;
      const hlsUrl = "https://vz-447b6532-fd2.b-cdn.net/114d20b4-b152-48e8-b8d1-0a0e12470326/playlist.m3u8";
      
      // Reset video state
      video.currentTime = 0;
      video.muted = true;
      setIsVideoMuted(true);
      setHasUnmutedOnce(false);
      
      console.log('ExitIntentModal: Starting video initialization');
      console.log('ExitIntentModal: Video URL:', hlsUrl);

      if (Hls.isSupported()) {
        console.log('ExitIntentModal: Using HLS.js for video playback');
        const hls = new Hls({
          startLevel: -1,
          capLevelToPlayerSize: true,
          maxBufferLength: 30,
          maxMaxBufferLength: 60
        });
        
        hls.on(Hls.Events.ERROR, (event, data) => {
          console.error('ExitIntentModal HLS Error:', event, data);
        });
        
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          console.log('ExitIntentModal: Manifest parsed, starting playback');
          video.play().catch(error => {
            console.error('ExitIntentModal: Error playing video:', error);
          });
        });
        
        hls.loadSource(hlsUrl);
        hls.attachMedia(video);
              
        return () => {
          console.log('ExitIntentModal: Cleaning up HLS');
          hls.destroy();
        };
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        // Native HLS support (Safari)
        console.log('ExitIntentModal: Using native HLS support');
        video.src = hlsUrl;
        video.addEventListener('loadeddata', () => {
          console.log('ExitIntentModal: Video data loaded, starting playback');
          video.play().catch(error => {
            console.error('ExitIntentModal: Error playing video:', error);
          });
        });
      } else {
        console.error('ExitIntentModal: HLS not supported');
      }
    }
  }, [isOpen]);

  if (!showModal) return null;

  const handleClose = () => {
    setShowModal(false);
    setTimeout(onClose, 300); // Wait for animation
  };

  return (
    <div className={`fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
      <div className={`relative bg-gradient-primary rounded-3xl shadow-2xl w-full max-w-6xl transform transition-all duration-300 ${isOpen ? 'scale-100' : 'scale-95'}`}>
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 z-10 p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors shadow-lg backdrop-blur-sm"
        >
          <X className="w-8 h-8 text-white" />
        </button>

        <div className="p-8 lg:p-12">
          {/* Large headline */}
          <div className="text-center mb-8">
            <h1 className="text-4xl lg:text-7xl font-black text-white leading-tight mb-4">
              WAIT! 
              <span className="block text-accent drop-shadow-2xl">
                WATCH THIS
              </span>
              <span className="block bg-gradient-to-r from-white to-highlight bg-clip-text text-transparent">
                BEFORE YOU LEAVE
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 font-semibold">
              See how we transform empty lots into profitable developments in just 90 seconds
            </p>
          </div>

          {/* HLS Video Player */}
          <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl aspect-video max-w-4xl mx-auto">
            <video 
              ref={videoRef}
              className="w-full h-full object-cover"
              controls={!isVideoMuted}
              autoPlay
              muted
              loop
              playsInline
              onVolumeChange={() => {
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
              }}
            >
              Your browser does not support HLS video streaming.
            </video>

            {/* Turn On Sound button - only show when video is muted */}
            {isVideoMuted && (
              <div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse z-20 cursor-pointer"
                onClick={() => {
                  if (videoRef.current) {
                    videoRef.current.muted = false;
                    setIsVideoMuted(false);
                    if (!hasUnmutedOnce) {
                      setHasUnmutedOnce(true);
                      videoRef.current.currentTime = 0;
                    }
                  }
                }}
              >
                <div className="relative flex flex-col items-center">
                  {/* Volume/Sound Icon */}
                  <Volume2 
                    size={48} 
                    className="text-white drop-shadow-2xl mb-2" 
                  />
                  
                  {/* Turn On Sound Text */}
                  <div className="bg-black/80 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-white">
                    <span className="text-white font-bold text-lg">
                      🔊 Turn On Sound
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* CTA below video */}
          <div className="text-center mt-8">
            <button
              onClick={() => {
                handleClose();
                // Trigger consultation modal
                const event = new CustomEvent('openConsultation');
                window.dispatchEvent(event);
              }}
              className="bg-white text-primary hover:bg-accent hover:text-white px-12 py-6 rounded-2xl text-2xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              📞 Book Your Free Consultation Now
            </button>
            <p className="text-white/80 mt-4 text-lg">
              Limited spots available this month
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentModal;