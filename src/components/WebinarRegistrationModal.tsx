import { X } from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";

interface WebinarRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WebinarRegistrationModal = ({ isOpen, onClose }: WebinarRegistrationModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-2xl shadow-2xl w-full max-w-4xl h-[90vh] relative overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-background/90 hover:bg-muted rounded-full transition-colors shadow-lg"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="p-6 border-b bg-gradient-primary text-white">
          <h2 className="text-2xl font-bold">Webinar Registration</h2>
          <p className="text-white/90 mt-2">Register for our exclusive real estate investment webinar.</p>
          
          {/* Countdown Timer */}
          <div className="mt-4">
            <CountdownTimer 
              targetDate={new Date('2025-10-03T19:00:00')} 
              className="bg-white/10 border-white/30"
              compact={true}
            />
          </div>
        </div>

        {/* Iframe container */}
        <div className="w-full h-[calc(100%-200px)] min-h-0 flex-1">
          <iframe
            src="https://multiculturemortgage.com/consultation"
            className="w-full h-full border-none"
            title="Webinar Registration"
            allow="fullscreen"
            style={{ minHeight: '400px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default WebinarRegistrationModal;