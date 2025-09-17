import useScrollReveal from "@/hooks/useScrollReveal";

const LogoStrip = () => {
  const { elementRef: stripRef, isVisible: stripVisible } = useScrollReveal<HTMLElement>();
  // Array of logos with label and asset file name
  const logos = [
    {
      label: "Equity Builders",
      assetFileName: "EB_Logo_Icon_Circle_Horizontal.png"
    },
    {
      label: "Multiculture Mortgage",
      assetFileName: "Multiculture_Mortgage_Stationary_Horizontal_Logo_cropped.png"
    },
    {
      label: "Noval Capital Group", 
      assetFileName: "Noval-Capital-Final_Horizontal.png"
    },
    {
      label: "The American Dream TV",
      assetFileName: "TheAmericanDreamTV_Logo-1000x252.png"
    },
    {
      label: "House Hacking The American Dream: Maximizing Cash Flow In An Unaffordable America",
      assetFileName: "HouseHackingTheAmericanDream_Logo-Final_Horizontal.png"
    }
  ];

  return (
    <section 
      ref={stripRef}
      className={`w-full bg-primary py-8 overflow-hidden transition-all duration-800 ${
        stripVisible ? 'animate-reveal-fade-left' : 'opacity-0 translate-x-12'
      }`}
    >
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
                className="h-14 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 brightness-0 invert"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div key={`duplicate-${index}`} className="flex-shrink-0 mx-12">
              <img 
                src={`/lovable-uploads/${logo.assetFileName}`}
                alt={logo.label}
                className="h-14 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 brightness-0 invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;