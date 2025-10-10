import { Link } from "react-router-dom";
import useScrollReveal from "@/hooks/useScrollReveal";

const Footer = () => {
  const { elementRef: footerRef, isVisible: footerVisible } = useScrollReveal<HTMLElement>();
  
  return (
    <footer 
      ref={footerRef}
      className={`w-full bg-emerald-900 border-t border-emerald-800 py-8 scroll-reveal-fade-up ${footerVisible ? 'visible' : ''}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <Link 
              to="/privacy-policy" 
              className="text-white hover:text-emerald-200 text-sm md:text-base transition-colors underline"
            >
              Privacy Policy
            </Link>
            <span className="text-white">|</span>
            <Link 
              to="/terms-of-service" 
              className="text-white hover:text-emerald-200 text-sm md:text-base transition-colors underline"
            >
              Terms of Service
            </Link>
          </div>
          <p className="text-white text-sm md:text-base">
            Copyright © 2025, Equity Builders Group LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;