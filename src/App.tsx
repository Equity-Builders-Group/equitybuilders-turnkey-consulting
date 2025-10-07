import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate, useSearchParams, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import ClassReplay from "./pages/ClassReplay";
import NotFound from "./pages/NotFound";
import ExitIntentModal from "./components/ExitIntentModal";
import ConsultationModal from "./components/ConsultationModal";
import WebinarRegistrationModal from "./components/WebinarRegistrationModal";
import DebugBar from "./components/DebugBar";
import useExitIntent from "./hooks/useExitIntent";
import { trackPageView, trackCTAClick } from "./lib/tracking";

const queryClient = new QueryClient();

const RedirectHandler = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const redirect = searchParams.get("redirect");
    if (redirect) {
      navigate(redirect, { replace: true });
    }
  }, [searchParams, navigate]);

  return null;
};

const PageViewTracker = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView();
  }, [location]);

  return null;
};

const App = () => {
  const { showExitIntent, closeExitIntent } = useExitIntent();
  const [showConsultationModal, setShowConsultationModal] = useState(false);
  const [showWebinarModal, setShowWebinarModal] = useState(false);

  // Listen for custom consultation event
  useEffect(() => {
    const handleOpenConsultation = () => {
      trackCTAClick('consultation');
      setShowConsultationModal(true);
    };

    const handleOpenWebinarRegistration = () => {
      trackCTAClick('webinar');
      setShowWebinarModal(true);
    };

    window.addEventListener("openConsultation", handleOpenConsultation);
    window.addEventListener("openWebinarRegistration", handleOpenWebinarRegistration);

    return () => {
      window.removeEventListener("openConsultation", handleOpenConsultation);
      window.removeEventListener("openWebinarRegistration", handleOpenWebinarRegistration);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <PageViewTracker />
          <DebugBar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/class-replay" element={<ClassReplay />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>

          {/* Modals inside Router context */}
          <ExitIntentModal
            isOpen={showExitIntent}
            onClose={closeExitIntent}
            otherModalsOpen={showConsultationModal || showWebinarModal}
          />

          <ConsultationModal isOpen={showConsultationModal} onClose={() => setShowConsultationModal(false)} />

          <WebinarRegistrationModal isOpen={showWebinarModal} onClose={() => setShowWebinarModal(false)} />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
