const LogoStrip = () => {
  return (
    <section className="w-full bg-emerald-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-4">
          {/* Icon */}
          <img 
            src="/equity-builders-icon.png" 
            alt="Equity Builders Icon" 
            className="h-12 w-auto"
          />
          {/* Text Logo */}
          <img 
            src="/equity-builders-text.png" 
            alt="Equity Builders" 
            className="h-10 w-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;