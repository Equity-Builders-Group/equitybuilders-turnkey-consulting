import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

interface VideoProgressFormProps {
  onSubmit: (data: { name: string; email: string; phone: string; consent: boolean }) => void;
  onClose: () => void;
}

const VideoProgressForm = ({ onSubmit, onClose }: VideoProgressFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    consent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone && formData.consent) {
      onSubmit(formData);
    }
  };

  const isFormValid = formData.name && formData.email && formData.phone && formData.consent;

  return (
    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-30 p-2 md:p-4">
      <div className="bg-white rounded-xl p-4 md:p-6 max-w-sm w-full mx-2 relative max-h-[95%] overflow-y-auto scale-90 md:scale-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-3 md:mb-4">
          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">
            Continue Watching
          </h3>
          <p className="text-xs md:text-sm text-gray-600">
            Enter your information to unlock the rest of this exclusive content
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-2 md:space-y-3">
          <div>
            <Label htmlFor="name" className="text-sm font-medium text-gray-700">
              Full Name *
            </Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="mt-1"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="mt-1"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
              Phone Number *
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="mt-1"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="flex items-start space-x-3">
            <Checkbox
              id="consent"
              checked={formData.consent}
              onCheckedChange={(checked) => setFormData({ ...formData, consent: !!checked })}
              className="mt-1"
            />
            <Label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed">
              I consent to receive SMS messages and further communications about real estate development opportunities *
            </Label>
          </div>

          <Button
            type="submit"
            disabled={!isFormValid}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black py-2 md:py-3 text-sm md:text-base font-semibold"
          >
            Continue Watching
          </Button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-2">
          Your information is secure and will never be shared with third parties
        </p>
      </div>
    </div>
  );
};

export default VideoProgressForm;