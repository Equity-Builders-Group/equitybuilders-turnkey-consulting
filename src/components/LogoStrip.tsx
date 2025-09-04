const LogoStrip = () => {
  return (
    <section className="w-full bg-emerald-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-4">
          {/* Icon */}
          <img 
            src="/lovable-uploads/4816903b-b6a4-4c11-984e-7832aca0c77c.png" 
            alt="Equity Builders Icon" 
            className="h-12 w-auto"
          />
          {/* Text Logo */}
          <img 
            src="/lovable-uploads/d9e364d3-b8e5-4fa9-aa0f-abb5fc4965a8.png" 
            alt="Equity Builders" 
            className="h-10 w-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;