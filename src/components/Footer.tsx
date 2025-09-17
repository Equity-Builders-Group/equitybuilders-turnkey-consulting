import useScrollReveal from "@/hooks/useScrollReveal";

const Footer = () => {
  const { elementRef: footerRef, isVisible: footerVisible } = useScrollReveal<HTMLElement>();
  
  return (
    <footer 
      ref={footerRef}
      className={`w-full bg-emerald-900 border-t border-emerald-800 py-8 transition-all duration-800 ${
        footerVisible ? 'animate-reveal-fade-up' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-white text-sm md:text-base">
            Copyright © 2025, Equity Builders Group LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;