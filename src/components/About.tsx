import { Button } from "@/components/ui/button";
import useScrollReveal from "@/hooks/useScrollReveal";
const About = () => {
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollReveal();
  const { elementRef: imageRef, isVisible: imageVisible } = useScrollReveal();
  
  return <section className="py-20 bg-gradient-to-br from-accent/20 via-background to-primary/10 relative overflow-hidden">
      {/* Background with architectural drawing */}
      <div className="absolute inset-0">
        {/* Architectural drawing background */}
        <div className="absolute inset-0 opacity-90">
          <img src="/lovable-uploads/5df938db-8063-4672-9fdb-4bb75420dbc7.png" alt="Construction site plan and architectural drawing" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-br from-background/20 via-transparent to-background/20"></div>
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
          <div 
            ref={contentRef}
            className={`bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 scroll-reveal-fade-up ${contentVisible ? 'visible' : ''}`}
          >
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold drop-shadow-lg">
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
            </div>
          </div>
          
          <div 
            ref={imageRef}
            className={`relative scroll-reveal-fade-up ${imageVisible ? 'visible' : ''}`}
          >
            <div className="aspect-[4/5] bg-gradient-primary rounded-2xl overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
              
              {/* Your real professional image */}
              <div className="absolute inset-4 rounded-xl overflow-hidden">
                <img src="/lovable-uploads/LavonNDiana_HeadShot_MCM.jpg" alt="TurnKey Development founders and business consultants" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;