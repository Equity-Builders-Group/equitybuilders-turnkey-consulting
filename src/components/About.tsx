import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-accent/20 via-background to-primary/10">
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
            <div className="aspect-[4/5] bg-gradient-primary rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
              {/* Professional image */}
              <div className="absolute bottom-4 left-4 w-20 h-20 rounded-xl overflow-hidden border-4 border-white/30">
                <img 
                  src="/src/assets/professional-headshot-2.jpg" 
                  alt="TurnKey Development consultant" 
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