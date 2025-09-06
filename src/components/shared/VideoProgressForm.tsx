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
    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-30 p-2">
      <div className="bg-white rounded-xl p-4 max-w-sm w-full mx-2 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-3">
          <h3 className="text-lg font-bold text-gray-900 mb-1">
            Continue Watching
          </h3>
          <p className="text-xs text-gray-600">
            Enter your information to unlock the rest of this content
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-2">
          <Input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Full Name *"
            required
            className="text-sm"
          />

          <Input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="Email Address *"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            className="text-sm"
          />

          <Input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="Phone Number *"
            required
            pattern="[\+]?[0-9\s\-\(\)]{10,}"
            className="text-sm"
          />

          <div className="flex items-start space-x-2 pt-1">
            <Checkbox
              id="consent"
              checked={formData.consent}
              onCheckedChange={(checked) => setFormData({ ...formData, consent: !!checked })}
              className="mt-0.5 flex-shrink-0"
            />
            <Label htmlFor="consent" className="text-xs text-gray-600 leading-tight">
              I consent to receive SMS and communications about real estate opportunities *
            </Label>
          </div>

          <Button
            type="submit"
            disabled={!isFormValid}
            className="w-full bg-primary hover:bg-primary/90 text-white py-2 text-sm font-semibold mt-3"
          >
            Continue Watching
          </Button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-2">
          Your information is secure and never shared
        </p>
      </div>
    </div>
  );
};

export default VideoProgressForm;