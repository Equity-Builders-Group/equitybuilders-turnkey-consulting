import { Shield, Check } from "lucide-react";

const Comparison = () => {
  const traditionalProblems = [
    "Limited Property Selection",
    "Complex Financing Processes", 
    "Time-Consuming Research Required",
    "Manual Permit & Legal Work",
    "Lack of Construction Expertise",
    "No Project Management Support",
    "Inconsistent Quality Control",
    "Limited Market Knowledge"
  ];

  const turnkeyAdvantages = [
    "Curated Investment Opportunities",
    "Streamlined Financing Solutions",
    "Complete Market Analysis Provided",
    "Full Permit & Legal Handling",
    "Expert Construction Management",
    "End-to-End Project Oversight",
    "Guaranteed Quality Standards",
    "Comprehensive Market Insights"
  ];

  return (
    <section className="w-full py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-accent/10 backdrop-blur-sm px-6 py-2 rounded-full border border-accent/20 mb-6">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Comparison</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black leading-tight text-foreground mb-6">
            What Sets TurnKey
            <span className="block text-accent">Development Apart</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Discover how our done-for-you approach outperforms traditional real estate investing 
            with superior support, better results, and unmatched ease of investment.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            
            {/* Traditional Approach - Left Side */}
            <div className="relative">
              <div className="bg-muted/30 backdrop-blur-sm rounded-3xl p-8 border border-muted/40 relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="w-full h-full bg-gradient-to-br from-destructive/20 to-muted/30"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-16 h-16 bg-muted rounded-2xl mb-6 mx-auto">
                    <Shield className="w-8 h-8 text-muted-foreground" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
                    Traditional Approaches
                  </h3>
                  
                  <div className="space-y-4">
                    {traditionalProblems.map((problem, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-muted/20 border border-muted/30">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-muted flex items-center justify-center mt-0.5 shadow-md border-2 border-muted-foreground/20 hover:scale-110 transition-all duration-300">
                          <Shield className="w-6 h-6 text-muted-foreground" strokeWidth={2.5} />
                        </div>
                        <span className="text-foreground font-medium">{problem}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* TurnKey Development - Right Side */}
            <div className="relative">
              <div className="bg-gradient-primary backdrop-blur-sm rounded-3xl p-8 border border-accent/30 relative overflow-hidden shadow-2xl">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full bg-gradient-to-br from-accent/30 to-highlight/20"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-16 h-16 bg-accent/20 backdrop-blur-sm rounded-2xl mb-6 mx-auto border border-accent/30">
                    <span className="text-2xl font-bold text-white">🏗️</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-center mb-8 text-white">
                    TurnKey Development
                  </h3>
                  
                  <div className="space-y-4">
                    {turnkeyAdvantages.map((advantage, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-accent flex items-center justify-center mt-0.5 shadow-lg border-2 border-white/30 hover:scale-110 transition-all duration-300">
                          <Check className="w-6 h-6 text-white drop-shadow-md" strokeWidth={3} />
                        </div>
                        <span className="text-white font-medium">{advantage}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* VS Badge */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:block">
            <div className="w-20 h-20 bg-foreground rounded-full flex items-center justify-center border-4 border-background shadow-2xl">
              <span className="text-background font-bold text-lg">VS</span>
            </div>
          </div>

          {/* Mobile VS Badge */}
          <div className="flex justify-center mt-8 lg:hidden">
            <div className="w-16 h-16 bg-foreground rounded-full flex items-center justify-center border-4 border-background shadow-xl">
              <span className="text-background font-bold text-base">VS</span>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-accent/10 backdrop-blur-sm rounded-2xl p-8 border border-accent/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Experience the TurnKey Difference?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Join successful investors who chose the smarter path to real estate wealth building.
            </p>
            <div className="flex items-center justify-center gap-2 text-accent font-semibold">
              <Check className="w-5 h-5" />
              <span>No more hassles. No more guesswork. Just results.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;