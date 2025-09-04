import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-accent/20 via-background to-primary/10 relative overflow-hidden">
      {/* Background with architectural drawing and construction projects */}
      <div className="absolute inset-0">
        {/* Architectural drawing background */}
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/lovable-uploads/5df938db-8063-4672-9fdb-4bb75420dbc7.png" 
            alt="Construction site plan and architectural drawing" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-background/40 to-background/60"></div>
        </div>
        
        {/* Main professional photo background */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-20">
          <img 
            src="/lovable-uploads/993aef6a-33f5-465f-8eba-159acc3d0dd8.png" 
            alt="TurnKey Development leadership and expertise" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/40 to-background"></div>
        </div>
        
        {/* Construction project texture */}
        <div className="absolute left-0 bottom-0 w-3/5 h-1/2 opacity-12">
          <img 
            src="/lovable-uploads/f48a2dc0-af37-42d8-824b-fc482c4ceb7f.png" 
            alt="Quality construction and development work" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent"></div>
        </div>
      </div>

      {/* Enhanced textured background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Architectural texture overlays */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(120, 100, 25, 0.1) 25%, transparent 25%),
              linear-gradient(-45deg, rgba(120, 100, 25, 0.1) 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, rgba(120, 100, 25, 0.1) 75%),
              linear-gradient(-45deg, transparent 75%, rgba(120, 100, 25, 0.1) 75%)
            `,
            backgroundSize: '30px 30px',
            backgroundPosition: '0 0, 0 15px, 15px -15px, -15px 0px'
          }}></div>
        </div>
        
        {/* Wood grain texture */}
        <div className="absolute inset-0 opacity-8">
          <div className="w-full h-full bg-gradient-to-br from-amber-900/10 via-amber-700/5 to-amber-800/10"></div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">
                Why Choose TurnKey Development?
              </h2>
              <p className="text-xl text-muted-foreground">
                With over 15 years of experience in business consulting, we've helped 
                hundreds of organizations achieve their strategic objectives and 
                overcome complex challenges.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Proven Track Record</h3>
                  <p className="text-muted-foreground">
                    Successfully delivered 500+ projects with 98% client satisfaction rate.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Industry Expertise</h3>
                  <p className="text-muted-foreground">
                    Deep knowledge across multiple industries including technology, healthcare, finance, and manufacturing.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Tailored Solutions</h3>
                  <p className="text-muted-foreground">
                    Custom strategies designed specifically for your unique business challenges and objectives.
                  </p>
                </div>
              </div>
            </div>
            
            <Button size="lg" className="text-lg px-8 py-6">
              Start Your Transformation
            </Button>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-primary rounded-2xl overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
              
              {/* Your real professional image */}
              <div className="absolute inset-4 rounded-xl overflow-hidden">
                <img 
                  src="/lovable-uploads/099d43ed-30ee-447a-8302-8f31d970c7b5.png" 
                  alt="TurnKey Development founder and business consultant" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
              </div>
              
              {/* Construction project overlay */}
              <div className="absolute bottom-4 right-4 w-24 h-24 rounded-xl overflow-hidden border-4 border-white/30">
                <img 
                  src="/lovable-uploads/4a2cd88c-1e89-4f93-a9e5-ccb59cbce7a6.png" 
                  alt="Construction project showcase" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="relative z-10 h-full p-8 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Growth-Focused Results</h3>
                  <p className="text-white/90">
                    Average 40% improvement in operational efficiency within the first 6 months.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center border border-white/30">
                    <div className="text-2xl font-bold text-accent">40%</div>
                    <div className="text-sm text-white/80">Efficiency Gain</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center border border-white/30">
                    <div className="text-2xl font-bold text-accent">6mo</div>
                    <div className="text-sm text-white/80">Avg Timeline</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;