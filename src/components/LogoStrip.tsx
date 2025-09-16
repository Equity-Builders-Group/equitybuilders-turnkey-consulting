const LogoStrip = () => {
  // Array of logos with label and asset file name
  const logos = [
    {
      label: "Equity Builders",
      assetFileName: "EB_Logo_Icon_Circle_Horizontal.png"
    },
    {
      label: "Equity Builders",
      assetFileName: "EB_Logo_Icon_Circle_Horizontal.png"
    },
    {
      label: "Equity Builders", 
      assetFileName: "EB_Logo_Icon_Circle_Horizontal.png"
    },
    {
      label: "Equity Builders",
      assetFileName: "EB_Logo_Icon_Circle_Horizontal.png"
    },
    {
      label: "Equity Builders",
      assetFileName: "EB_Logo_Icon_Circle_Horizontal.png"
    },
    {
      label: "Equity Builders",
      assetFileName: "EB_Logo_Icon_Circle_Horizontal.png"
    }
  ];

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
          {logos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 mx-12">
              <img 
                src={`/lovable-uploads/${logo.assetFileName}`}
                alt={logo.label}
                className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div key={`duplicate-${index}`} className="flex-shrink-0 mx-12">
              <img 
                src={`/lovable-uploads/${logo.assetFileName}`}
                alt={logo.label}
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