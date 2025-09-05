import { ArrowRight, TrendingUp, Users, Shield } from "lucide-react";

const NovalTransition = () => {
  return (
    <section className="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-600 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Looking For Something More 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> Passive?</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Discover hands-off real estate investments with proven track records and professional management
            </p>
          </div>

          {/* Main Content Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Side - Benefits */}
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <TrendingUp className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Proven Returns</h3>
                    <p className="text-slate-600">Track record of 1.25x - 2.6x equity multiples on completed projects</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-100 rounded-xl">
                    <Users className="text-indigo-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Professional Management</h3>
                    <p className="text-slate-600">Experienced team handling all aspects of investment management</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-100 rounded-xl">
                    <Shield className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Risk Management</h3>
                    <p className="text-slate-600">Data-driven underwriting and active risk management protocols</p>
                  </div>
                </div>
              </div>

              {/* Right Side - CTA */}
              <div className="text-center lg:text-left">
                <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-8 text-white relative overflow-hidden">
                  {/* Background accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16"></div>
                  
                  <div className="relative z-10">
                    {/* Logo Section */}
                    <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                      <img 
                        src="/lovable-uploads/b840c248-e891-4529-bc14-29c4cf690268.png" 
                        alt="Noval Capital Group Logo" 
                        className="h-12 w-auto"
                      />
                      <div className="text-left">
                        <div className="text-2xl font-bold tracking-wide">NOVAL</div>
                        <div className="text-sm font-light tracking-widest opacity-90">CAPITAL GROUP</div>
                      </div>
                    </div>
                    
                    <p className="text-blue-100 mb-8 text-lg">
                      Ready to explore passive real estate opportunities?
                    </p>
                    
                    <a 
                      href="https://novalcapitalgroup.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
                    >
                      Explore Opportunities
                      <ArrowRight size={20} />
                    </a>
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

export default NovalTransition;