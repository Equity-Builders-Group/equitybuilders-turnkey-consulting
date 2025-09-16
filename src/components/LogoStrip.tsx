const LogoStrip = () => {
  return (
    <section className="w-full bg-primary py-8 overflow-hidden">
      <div 
        className="flex items-center justify-center"
        style={{
          maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)'
        }}
      >
        <div className="flex animate-ticker">
          {/* First set of logos */}
          <div className="flex items-center gap-16 px-8">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="flex-shrink-0">
                <img 
                  src="/lovable-uploads/EB_Logo_Icon_Circle_Horizontal.png" 
                  alt="Equity Builders Logo" 
                  className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex items-center gap-16 px-8">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={`duplicate-${index}`} className="flex-shrink-0">
                <img 
                  src="/lovable-uploads/EB_Logo_Icon_Circle_Horizontal.png" 
                  alt="Equity Builders Logo" 
                  className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;