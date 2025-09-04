import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import professionalHeadshot1 from "@/assets/professional-headshot-1.jpg";
import professionalHeadshot2 from "@/assets/professional-headshot-2.jpg";

const CTA = () => {
  return (
    <section className="py-32 bg-gradient-accent relative overflow-hidden">
      {/* Background images */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-40">
          <img 
            src={professionalHeadshot1} 
            alt="Business transformation consultant" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-accent via-accent/80 to-accent"></div>
        </div>
        
        {/* Floating CTA images */}
        <div className="absolute bottom-20 left-16 w-72 h-72 rounded-2xl overflow-hidden shadow-2xl border-6 border-white/50 rotate-6 transform hover:rotate-3 transition-all duration-700">
          <img 
            src={professionalHeadshot2} 
            alt="Business growth expert" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-accent/30"></div>
        </div>
      </div>

      {/* Dynamic background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-secondary/20 rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-primary/15 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Bold headline section */}
          <div className="text-center mb-16">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-8 py-4 rounded-full border border-white/30 mb-8">
              <span className="text-white font-bold text-xl">🚀 TAKE ACTION NOW</span>
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-black mb-8 text-white leading-tight">
              READY TO
              <span className="block text-white drop-shadow-2xl">
                DOMINATE YOUR
              </span>
              <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                INDUSTRY?
              </span>
            </h2>
            
            <p className="text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Schedule a <span className="text-white font-bold">FREE consultation</span> to discover how TurnKey Development 
              can skyrocket your revenue and optimize your operations.
            </p>
          </div>

          <Card className="border-0 shadow-2xl bg-black/20 backdrop-blur-sm border border-white/20">
            <CardHeader className="text-center pb-8">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                <CardTitle className="text-4xl font-black mb-6 text-white">
                  🎯 FREE STRATEGY SESSION
                </CardTitle>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">
                  Get a custom roadmap to transform your business in just 30 minutes
                </p>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-10">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="space-y-4 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl text-white">30-Minute Call</h3>
                  <p className="text-white/80 text-lg">Deep dive into your challenges and goals</p>
                </div>
                
                <div className="space-y-4 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl text-white">Custom Strategy</h3>
                  <p className="text-white/80 text-lg">Receive tailored growth recommendations</p>
                </div>
                
                <div className="space-y-4 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl text-white">Rapid Results</h3>
                  <p className="text-white/80 text-lg">See improvements within weeks</p>
                </div>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 space-y-6 border border-white/30">
                <h3 className="text-2xl font-bold text-center text-white">⚡ CLAIM YOUR SPOT NOW</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input 
                    placeholder="Enter your business email" 
                    type="email"
                    className="flex-1 h-14 bg-white/90 border-white text-primary placeholder:text-primary/60 text-lg"
                  />
                  <Button size="lg" className="h-14 px-12 bg-white text-primary hover:bg-white/90 font-bold text-lg transform hover:scale-105 transition-all duration-300">
                    🚀 GET FREE SESSION
                  </Button>
                </div>
                <p className="text-sm text-white/90 text-center">
                  <span className="font-semibold">LIMITED TIME:</span> Free consultation includes detailed business assessment worth $500
                </p>
              </div>
              
              <div className="text-center space-y-6">
                <div className="flex items-center justify-center flex-wrap gap-8">
                  <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white font-medium">No Obligation</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white font-medium">100% Confidential</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white font-medium">Instant Response</span>
                  </div>
                </div>
                
                {/* Social proof */}
                <div className="bg-black/30 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                  <div className="flex items-center justify-center gap-4 text-white/90 text-lg">
                    <div className="flex -space-x-2">
                      <div className="w-12 h-12 rounded-full border-2 border-white bg-accent"></div>
                      <div className="w-12 h-12 rounded-full border-2 border-white bg-secondary"></div>
                      <div className="w-12 h-12 rounded-full border-2 border-white bg-primary"></div>
                    </div>
                    <span className="font-semibold">Join 500+ successful businesses that transformed with us</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CTA;