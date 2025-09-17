import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, BookOpen, Key, Handshake } from "lucide-react";
import { useRef } from "react";
import HLSVideoPlayer, { HLSVideoPlayerRef } from "@/components/shared/HLSVideoPlayer";

const WhyWorkWithUs = () => {
  const videoPlayerRef = useRef<HLSVideoPlayerRef>(null);
  const reasons = [
    {
      title: "Proven Track Record",
      description: "Over $1.2M in active construction and $2.4M+ in development in the pipeline.",
      icon: <Award className="w-8 h-8" />,
      stats: "$5M+",
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
        <div className="text-center mb-20">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-8 py-4 rounded-2xl border border-white/30 mb-8">
            <span className="text-white font-bold text-xl">WHY CHOOSE US</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-black mb-8 text-white drop-shadow-lg">
            WHY WORK
            <span className="block text-accent drop-shadow-2xl">
              WITH US?
            </span>
          </h2>
          
          <p className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            We don't just talk about results — we deliver them. We have a proven track record with HUD statements to back it up. You will not find another partner like us that is as vertically integrated from top to bottom.
            Lavon is a licensed real estate mortgage broker, developer, and builder. He has been in the Real Estate industry for over 20 years with most recent construction experience built up and honed over the last 5 years during probably
            one of the hardest times to build in the last 50 years with the Covid-19 pandemic. He has been through the trenches and knows what it takes to get a project done.<br/><br/>
            
            If you want to learn along the way we will also be very transparent and teach you how to fish in this Real Estate development game as an additional benefit.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-6 hover:scale-105 bg-white/95 hover:bg-white border-0 backdrop-blur-sm text-center">
              <CardHeader className="pb-4">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110 mx-auto">
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
        
        {/* Call to action */}
        <div className="text-center mt-20">
          <div className="bg-white/10 backdrop-blur-sm p-12 rounded-3xl border border-white/20 max-w-4xl mx-auto">
              <h3 className="text-4xl font-bold text-white mb-6 uppercase drop-shadow-lg">Let's start building up your net-worth</h3>
            <p className="text-white/90 text-xl mb-8 leading-relaxed">
              Join the ranks of successful developers by leveraging our experience and track record to accelerate your path to success. We will do what it takes to get you across the finish line with a return on your investment.
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