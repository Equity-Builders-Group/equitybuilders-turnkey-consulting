import { X } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import HLSVideoPlayer, { HLSVideoPlayerRef } from "@/components/shared/HLSVideoPlayer";

interface ExitIntentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ExitIntentModal = ({ isOpen, onClose }: ExitIntentModalProps) => {
  const [showModal, setShowModal] = useState(false);
  const videoPlayerRef = useRef<HLSVideoPlayerRef>(null);

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
    if (isOpen && showModal) {
      console.log('ExitIntentModal: Modal opened, resetting video player');
      videoPlayerRef.current?.reset();
    }
  }, [isOpen, showModal]);

  if (!showModal) return null;

  const handleClose = () => {
    setShowModal(false);
    setTimeout(onClose, 300); // Wait for animation
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div 
      className={`fixed inset-0 bg-black/90 backdrop-blur-md z-[9999] flex items-center justify-center p-2 sm:p-4 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
      onClick={handleOverlayClick}
    >
      <div 
        className={`relative bg-gradient-primary rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-sm sm:max-w-2xl lg:max-w-4xl xl:max-w-6xl max-h-[95vh] overflow-y-auto transform transition-all duration-300 ${isOpen ? 'scale-100' : 'scale-95'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 z-10 p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors shadow-lg backdrop-blur-sm"
        >
          <X className="w-8 h-8 text-white" />
        </button>

        <div className="p-4 sm:p-6 lg:p-12">
          {/* Large headline */}
          <div className="text-center mb-4 sm:mb-8 drop-shadow-lg">
            <h1 className="text-2xl sm:text-4xl lg:text-7xl font-black text-white leading-tight mb-2 sm:mb-4">
              WAIT! 
              <span className="block text-accent drop-shadow-2xl">
                WATCH THIS
              </span>
              <span className="block bg-gradient-to-r from-white to-highlight bg-clip-text text-transparent">
                BEFORE YOU LEAVE
              </span>
            </h1>
            <p className="text-sm sm:text-xl lg:text-2xl text-white/90 font-semibold">
              See how we transform undeveloped land into profitable assets in this development class replay.
            </p>
          </div>

          {/* HLS Video Player */}
          <div className="relative bg-black rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl aspect-video max-w-4xl mx-auto">
            <HLSVideoPlayer
              ref={videoPlayerRef}
              videoUrl="https://vz-447b6532-fd2.b-cdn.net/114d20b4-b152-48e8-b8d1-0a0e12470326/playlist.m3u8"
              autoPlay={isOpen && showModal}
              showControls={true}
              showUnmuteButton={true}
              unmuteButtonPosition="center"
              componentName="ExitIntentModal"
              className="w-full h-full object-cover"
              containerClassName="w-full h-full"
              enableProgressGate={true}
              progressGatePercentage={20}
              enablePlayheadStorage={false}
              onProgressGateSubmit={(data) => {
                console.log('Progress gate form submitted:', data);
                // Handle form submission - save to database, etc.
              }}
            />
          </div>

          {/* CTA below video */}
          <div className="text-center mt-4 sm:mt-8">
            <button
              onClick={() => {
                handleClose();
                // Trigger consultation modal
                const event = new CustomEvent('openConsultation');
                window.dispatchEvent(event);
              }}
              className="bg-white text-primary hover:bg-accent hover:text-white px-6 sm:px-12 py-3 sm:py-6 rounded-xl sm:rounded-2xl text-lg sm:text-2xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
            Book A Call
            </button>
            <p className="text-white/80 mt-2 sm:mt-4 text-sm sm:text-lg">
              Limited spots are available on the calendar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentModal;