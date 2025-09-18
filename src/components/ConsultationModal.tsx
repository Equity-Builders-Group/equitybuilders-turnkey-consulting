import { X } from "lucide-react";
import { useEffect } from "react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultationModal = ({ isOpen, onClose }: ConsultationModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Auto-scroll to bring modal into view on mobile
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, 100);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative bg-background rounded-2xl shadow-2xl w-full max-w-4xl h-[90vh] overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
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
  );
};

export default ConsultationModal;