import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import professionalHeadshot1 from "@/assets/professional-headshot-1.jpg";
import professionalHeadshot2 from "@/assets/professional-headshot-2.jpg";

const Services = () => {
  const services = [
    {
      title: "Strategic Planning",
      description: "Comprehensive business strategy development to align your goals with actionable roadmaps.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      title: "Process Optimization",
      description: "Streamline operations and eliminate inefficiencies to maximize productivity and reduce costs.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Digital Transformation",
      description: "Modernize your business with cutting-edge technology solutions and digital processes.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Change Management",
      description: "Guide your organization through transformations with minimal disruption and maximum adoption.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Performance Analytics",
      description: "Data-driven insights to measure success and identify opportunities for continuous improvement.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Leadership Development",
      description: "Empower your team with leadership skills and strategic thinking capabilities.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-32 bg-gradient-secondary relative overflow-hidden">
      {/* Background images */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 w-2/5 h-full opacity-50">
          <img 
            src={professionalHeadshot2} 
            alt="Strategic consulting expert" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/80 to-transparent"></div>
        </div>
        
        {/* Floating service images */}
        <div className="absolute top-20 left-20 w-80 h-80 rounded-3xl overflow-hidden shadow-2xl border-8 border-accent/50 -rotate-12 transform hover:-rotate-6 transition-all duration-700">
          <img 
            src={professionalHeadshot1} 
            alt="Business development specialist" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-secondary/40"></div>
        </div>

        <div className="absolute bottom-20 right-32 w-64 h-64 rounded-full overflow-hidden shadow-xl border-6 border-white/40 rotate-12">
          <img 
            src={professionalHeadshot2} 
            alt="Digital transformation expert" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>

      {/* Dynamic background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-40 w-80 h-80 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 right-1/3 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full border border-white/30 mb-8">
            <span className="text-white font-bold text-xl">💼 OUR EXPERT SERVICES</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-black mb-8 text-white">
            ACCELERATE YOUR
            <span className="block text-accent drop-shadow-2xl">
              BUSINESS SUCCESS
            </span>
          </h2>
          
          <p className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Comprehensive consulting solutions designed to transform your business 
            and <span className="text-accent font-semibold">drive sustainable growth</span> across all operational areas.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:scale-105 bg-white/95 hover:bg-gradient-accent hover:text-white border-0 backdrop-blur-sm">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-white/20 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl group-hover:text-white font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground group-hover:text-white/90 text-lg leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Bold CTA at bottom of services */}
        <div className="text-center mt-20">
          <div className="bg-black/20 backdrop-blur-sm p-8 rounded-3xl border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform?</h3>
            <p className="text-white/90 text-xl mb-6">Let's discuss how these services can accelerate your growth</p>
            <div className="flex items-center justify-center gap-4 text-accent text-lg font-semibold">
              <span>📞</span> Book Your Free Strategy Call Now
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;