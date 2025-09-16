const LogoStrip = () => {
  return (
    <section className="w-full bg-primary py-8 overflow-hidden">
      <div 
        className="flex items-center"
        style={{
          maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)'
        }}
      >
        <div className="flex animate-ticker whitespace-nowrap">
          {/* First set of logos */}
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="flex-shrink-0 mx-12">
              <img 
                src="/lovable-uploads/EB_Logo_Icon_Circle_Horizontal.png" 
                alt="Equity Builders Logo" 
                className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={`duplicate-${index}`} className="flex-shrink-0 mx-12">
              <img 
                src="/lovable-uploads/EB_Logo_Icon_Circle_Horizontal.png" 
                alt="Equity Builders Logo" 
                className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;