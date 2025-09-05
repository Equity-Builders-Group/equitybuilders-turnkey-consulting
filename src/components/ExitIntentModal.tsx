import { X } from "lucide-react";
import { useEffect, useState } from "react";

interface ExitIntentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ExitIntentModal = ({ isOpen, onClose }: ExitIntentModalProps) => {
  const [showModal, setShowModal] = useState(false);

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

          {/* VSL Player */}
          <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl aspect-video max-w-4xl mx-auto">
            <iframe
              src="https://vz-447b6532-fd2.b-cdn.net/c6b998b8-9763-4324-94ea-1b19b14c3dc1/iframe?autoplay=true&loop=false&muted=false&preload=true&responsive=true"
              className="w-full h-full border-none"
              title="TurnKey Development VSL"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
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