import { X } from "lucide-react";
import { useEffect, useState } from "react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultationModal = ({ isOpen, onClose }: ConsultationModalProps) => {
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

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div 
      className={`fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-black/80 backdrop-blur-sm z-[9999] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
      onClick={handleOverlayClick}
      style={{ 
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 9999 
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div 
          className={`relative bg-background rounded-2xl shadow-2xl w-full max-w-4xl h-[90vh] overflow-hidden transform transition-all duration-300 ${isOpen ? 'scale-100' : 'scale-95'}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 p-2 bg-background/90 hover:bg-muted rounded-full transition-colors shadow-lg"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Header */}
          <div className="p-6 border-b bg-gradient-primary text-white">
            <h2 className="text-2xl font-bold">Book Your Call</h2>
            <p className="text-white/90 mt-2">Let's discuss your real estate investment goals and see if it is a fit.</p>
          </div>

          {/* Iframe container */}
          <div className="w-full h-[calc(100%-120px)]">
            <iframe
              src="https://equitybuilders.co/turnkey-call/"
              className="w-full h-full border-none"
              title="Book Your Pre-Qualification Call"
              allow="fullscreen"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationModal;