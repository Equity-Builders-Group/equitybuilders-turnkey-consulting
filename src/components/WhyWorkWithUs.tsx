import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, BookOpen, Key, Handshake } from "lucide-react";

const WhyWorkWithUs = () => {
  const reasons = [
    {
      title: "Proven Track Record",
      description: "Over $1.2M in active construction and $5M+ in pre-construction pipeline.",
      icon: <Award className="w-8 h-8" />,
      stats: "$1.2M+",
      statsLabel: "Active Construction"
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
      stats: "100%",
      statsLabel: "Transparency"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-primary via-primary-dark to-secondary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-40 w-80 h-80 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full border border-white/30 mb-8">
            <span className="text-white font-bold text-xl">🏆 WHY CHOOSE US</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-black mb-8 text-white">
            WHY WORK
            <span className="block text-accent drop-shadow-2xl">
              WITH US?
            </span>
          </h2>
          
          <p className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            We don't just talk about results — we deliver them. We will teach you how to fish in this Real Estate development game for a fraction of your profit potential. Here's what sets us apart in the competitive world of real estate development.
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
            <h3 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h3>
            <p className="text-white/90 text-xl mb-8 leading-relaxed">
              Join the ranks of successful developers by leveraging our experience and track record. Will do what it takes to get you across the finish line. Let's start building up your net-worth today.
            </p>
            <div className="flex items-center justify-center gap-4 text-accent text-2xl font-bold">
              <span>🚀</span> Let's Build Your Success Story Together
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;