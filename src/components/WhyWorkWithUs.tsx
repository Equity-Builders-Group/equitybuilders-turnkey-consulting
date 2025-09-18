import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, BookOpen, Key, Handshake } from "lucide-react";
import { useRef } from "react";
import HLSVideoPlayer, { HLSVideoPlayerRef } from "@/components/shared/HLSVideoPlayer";
import useScrollReveal from "@/hooks/useScrollReveal";

const WhyWorkWithUs = () => {
  const videoPlayerRef = useRef<HLSVideoPlayerRef>(null);
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { elementRef: cardsRef, isVisible: cardsVisible } = useScrollReveal({ threshold: 0.05 });
  const { elementRef: ctaRef, isVisible: ctaVisible } = useScrollReveal();
  const reasons = [
    {
      title: "Proven Track Record",
      description: "Over $1.2M in active construction and $3.2M+ in development in the pipeline.",
      icon: <Award className="w-8 h-8" />,
      stats: "$4M+",
      statsLabel: "Pending Developments"
    },
    {
      title: "Experience",
      description: "From mortgage brokering to property management to development — we cover the full transaction.",
      icon: <BookOpen className="w-8 h-8" />,
      stats: "Full Stack",
      statsLabel: "Real Estate Services"
    },
    {
      title: "Barrier Removal",
      description: "We help new developers overcome the toughest entry challenges, including financing and permitting.",
      icon: <Key className="w-8 h-8" />,
      stats: "100%",
      statsLabel: "Permit Success Rate"
    },
    {
      title: "Mentorship Included",
      description: "We will let you see behind the curtain and process full transparency of actual costs and process.",
      icon: <Handshake className="w-8 h-8" />,
      stats: "FULL",
      statsLabel: "Transparency"
    }
  ];

  return (
    <>
      <section className="w-full py-32 bg-gradient-to-br from-primary via-primary-dark to-secondary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-40 w-80 h-80 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={headerRef}
          className={`text-center mb-20 scroll-reveal-fade-up ${headerVisible ? 'visible' : ''}`}
        >
            <div className="inline-block bg-white/10 backdrop-blur-sm px-8 py-4 rounded-2xl border border-white/30 mb-8">
            <span className="text-white font-bold text-xl">OUR DIFFERENTIATOR</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-black mb-8 text-white drop-shadow-lg">
            WHY WORK
            <span className="block text-accent drop-shadow-2xl">
              WITH US?
            </span>
          </h2>
          
          <p className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              We don’t just talk about results — we deliver them.<br /><br />
              Our track record is proven and documented, with HUD statements to back it up. You won’t find another partner as vertically integrated as we are — from financing to development to construction, we cover it all under one roof.
              <br /><br />
              Lavon Woods, our founder, is a licensed mortgage broker, real estate developer, and builder with over 20 years in the industry. Over the past 5 years, he has sharpened his construction expertise during one of the most challenging times to build in the last 50 years — navigating supply chain chaos and the Covid-19 pandemic. Having been through the trenches, Lavon knows exactly what it takes to bring a project from blueprint to completion.
              <br /><br />
              And if you want to learn along the way, we’re transparent. We’ll not only show you the process step by step, but also teach you the strategies that make this business work — so you can build, invest, and grow with confidence.
          </p>
        </div>
        
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-8 hover:scale-110 bg-white/95 hover:bg-gradient-to-br hover:from-white hover:to-accent/5 border-0 backdrop-blur-sm text-center scroll-reveal-fade-up ${cardsVisible ? 'visible' : ''}`}
            >
              <CardHeader className="pb-4">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-125 group-hover:shadow-lg mx-auto">
                  {reason.icon}
                </div>
                
                <div className="mb-4">
                  <div className="text-3xl font-black text-primary group-hover:text-primary-dark">
                    {reason.stats}
                  </div>
                  <div className="text-sm text-muted-foreground font-semibold">
                    {reason.statsLabel}
                  </div>
                </div>
                
                <CardTitle className="text-xl group-hover:text-primary-dark font-bold">
                  {reason.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Moved About Section Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mt-20 mb-20">
          <div 
            className={`bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 scroll-reveal-fade-up ${cardsVisible ? 'visible' : ''}`}
          >
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold drop-shadow-lg text-foreground">
                  Think About Your Why?
                </h2>
                <p className="text-xl text-muted-foreground">
                    My purpose is to break down the barriers that keep everyday people like yourself — from accessing the wealth, control, and freedom that real estate development provides. God didn't give us a table and a chair. He gave us the tree. What will you do with it?
                    <br /><br />
                    I've lived the reality: traditional paths to wealth (retirement accounts, stocks, W-2 income) don’t create enough wealth fast enough, with control. By mastering house hacking, new construction, and financing, I’ve found a way to build wealth through one of the hardest industries to break into.
                    <br /><br />
                    Now, my mission is to help myself by helping others. I can't reap if I don't sow. Don't block my blessings by not allowing me to serve you!
                    {/*— giving others the tools, education, capital access, and hands-on mentorship to not only invest but also develop and own the neighborhoods where they live.*/}
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
                      <h3 className="text-lg font-semibold mb-2 text-foreground">Generational impact</h3>
                    <p className="text-muted-foreground">
                      Leaving a legacy of ownership, not just money and teaching my girls by example.
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
                      <h3 className="text-lg font-semibold mb-2 text-foreground">Access and empowerment</h3>
                    <p className="text-muted-foreground">
                       Opening doors for people who’ve been locked out of development.
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
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Teaching by doing</h3>
                    <p className="text-muted-foreground">
                       Being transparent and showing others how to fish, not just giving them the fish.
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
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Neighborhood revitalization</h3>
                    <p className="text-muted-foreground">
                      Turning blighted undeveloped land into thriving communities, one project at a time.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
          
          <div 
            className={`relative scroll-reveal-fade-up ${cardsVisible ? 'visible' : ''}`}
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

        {/* Call to action */}
        <div 
          ref={ctaRef}
          className={`text-center mt-20 scroll-reveal-scale-up ${ctaVisible ? 'visible' : ''}`}
        >
          <div className="bg-white/10 backdrop-blur-sm p-12 rounded-3xl border border-white/20 max-w-4xl mx-auto">
              <h3 className="text-4xl font-bold text-white mb-6 uppercase drop-shadow-lg">Let's start building up your net-worth</h3>
            <p className="text-white/90 text-xl mb-8 leading-relaxed">
              Leverage our experience and track record to accelerate your path to success. We will do what it takes to get you across the finish line.
            </p>
            <div className="flex items-center justify-center gap-4 text-yellow-400 text-2xl font-bold uppercase">
              One Step At A Time...
            </div>
          </div>
        </div>
      </div>
    </section>
    
    {/* Full Screen Video Section */}
    <section className="w-full bg-black">
      <div className="w-full">

        {/* Video Container - Full screen width */}
        <div className="w-full">
          <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh]">
            <HLSVideoPlayer
              ref={videoPlayerRef}
              videoUrl="https://vz-447b6532-fd2.b-cdn.net/65558fdd-047e-401c-b75c-210360836388/playlist.m3u8"
              autoPlay={true}
              showControls={true}
              className="w-screen h-full object-cover"
              containerClassName="relative w-screen h-full"
            />
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default WhyWorkWithUs;