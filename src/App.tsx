import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ExitIntentModal from "./components/ExitIntentModal";
import ConsultationModal from "./components/ConsultationModal";
import useExitIntent from "./hooks/useExitIntent";

const queryClient = new QueryClient();

const App = () => {
  const { showExitIntent, closeExitIntent } = useExitIntent();
  const [showConsultationModal, setShowConsultationModal] = useState(false);

  // Listen for custom consultation event
  useEffect(() => {
    const handleOpenConsultation = () => {
      setShowConsultationModal(true);
    };

    window.addEventListener('openConsultation', handleOpenConsultation);
    return () => window.removeEventListener('openConsultation', handleOpenConsultation);
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        
        {/* Exit Intent Modal at top level */}
        <ExitIntentModal 
          isOpen={showExitIntent} 
          onClose={closeExitIntent} 
        />
        
        {/* Consultation Modal at top level */}
        <ConsultationModal 
          isOpen={showConsultationModal} 
          onClose={() => setShowConsultationModal(false)} 
        />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
