import { useState } from "react";
import { Search, X } from "lucide-react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";

const BuildVsBuySection = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-m-in-fade-up">
          <h2 className="text-4xl md:text-6xl font-black leading-tight text-foreground mb-6 drop-shadow-lg">
            Why Build Instead Of Buy
            <span className="block text-accent drop-shadow-lg">an Investment Property?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The numbers speak for themselves. When you build you walk into a strong equity position from day one. Building a property is like buying a product at a wholesale price. You have a brand new product that can be depreciated over time to offer huge tax write-offs. 
            Your repair cost for the first 5-10 years will be very minimal because major items are covered by the warranty. Its just a no brainer!
          </p>
        </div>

        {/* Feature Image with Magnifying Glass */}
        <div className="flex justify-center mb-8 scroll-m-in-scale-up">
          <div 
            className="relative group cursor-pointer max-w-4xl w-full"
            onClick={() => setIsLightboxOpen(true)}
          >
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <img
                src="/lovable-uploads/EBMeetupPresentation_Slide_BuildVsBuy.jpg"
                alt="Build vs Buy Investment Property Comparison"
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Magnifying glass overlay with pulse animation */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Search className="w-16 h-16 text-white animate-pulse drop-shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <Dialog open={isLightboxOpen} onOpenChange={setIsLightboxOpen}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-none">
          <DialogClose className="absolute top-4 right-4 z-50 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors">
            <X className="h-6 w-6" />
          </DialogClose>
          <div className="flex items-center justify-center p-4">
            <img
              src="/lovable-uploads/EBMeetupPresentation_Slide_BuildVsBuy.jpg"
              alt="Build vs Buy Investment Property Comparison"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </DialogContent>
      </Dialog>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/15 rounded-full blur-2xl"></div>
      </div>

      {/* Green gradient dashed divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-green-500 to-transparent relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-60" 
               style={{
                 backgroundImage: 'repeating-linear-gradient(to right, transparent 0px, transparent 8px, currentColor 8px, currentColor 16px)',
                 color: 'rgb(34 197 94)'
               }}>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildVsBuySection;