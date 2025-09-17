import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ConsultationModal from "@/components/ConsultationModal";
import { useState } from "react";
import useScrollReveal, { useStaggeredScrollReveal } from "@/hooks/useScrollReveal";

const Services = () => {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { elementRef: cardsRef, isVisible: cardsVisible } = useScrollReveal({ threshold: 0.05 });
  const { elementRef: ctaRef, isVisible: ctaVisible } = useScrollReveal();
  const processSteps = [
    {
      title: "Land Search & Vetting",
      category: "Our Proven 11-Step Process",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      title: "Survey & Soil Reports",
      category: "Our Proven 11-Step Process",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Site Plan Design",
      category: "Our Proven 11-Step Process",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      )
    },
    {
      title: "Plat Design & Submission",
      category: "Our Proven 11-Step Process",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Civil Drainage Planning",
      category: "Our Proven 11-Step Process",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Architectural & Floor Plan Design",
      category: "Our Proven 11-Step Process",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Structural Engineer Plans",
      category: "Our Proven 11-Step Process",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 10a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      title: "Budget Creation & Material Selections",
      category: "Our Proven 11-Step Process",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      )
    },
    {
      title: "Project Underwriting & Cashflow Projections",
      category: "Our Proven 11-Step Process",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Construction Loan Submission & Approval",
      category: "Our Proven 11-Step Process",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    },
    {
      title: "City Permit Submission & Approval",
      category: "Our Proven 11-Step Process",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const servicesIncluded = [
    {
      title: "Comparative Market Analysis",
      category: "Services Included",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Builder Selection & Contract Review",
      category: "Services Included",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Full In-House Construction Services",
      category: "Services Included",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "Entity Structuring & Setup Consulting",
      category: "Services Included",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Exit & Tax Strategy Consulting",
      category: "Services Included",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM21 12h-6m3-3l3 3-3 3" />
        </svg>
      )
    }
  ];

  const allServices = [...processSteps, ...servicesIncluded];

  return (
    <section className="py-32 bg-gradient-secondary relative overflow-hidden">
      {/* Background images with your real photos and construction projects */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 w-2/5 h-full opacity-30">
          <img 
            src="/lovable-uploads/099d43ed-30ee-447a-8302-8f31d970c7b5.png" 
            alt="TurnKey Development strategic consultant" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/80 to-transparent"></div>
        </div>
        
        {/* Construction texture background */}
        <div className="absolute right-0 bottom-0 w-3/5 h-2/3 opacity-15">
          <img 
            src="/lovable-uploads/4a2cd88c-1e89-4f93-a9e5-ccb59cbce7a6.png" 
            alt="Construction project showcasing expertise" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-secondary/80 to-transparent"></div>
        </div>
        
        {/* Floating service images - centered on mobile */}
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 lg:left-20 lg:transform-none w-48 h-48 lg:w-80 lg:h-80 rounded-3xl overflow-hidden shadow-2xl border-4 lg:border-8 border-accent/50 -rotate-12 hover:-rotate-6 transition-all duration-700">
          <img 
            src="/lovable-uploads/LavonReebok.png" 
            alt="Lavon Reebok Shot" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-secondary/40"></div>
        </div>

        <div className="hidden lg:block absolute bottom-20 right-32 w-72 h-72 rounded-2xl overflow-hidden shadow-xl border-6 border-white/40 rotate-12">
          <img 
            src="/lovable-uploads/1017Calvin_Exterior.jpg" 
            alt="1017 Calvin Avenue development project" 
            className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
          />
        </div>
      </div>

      {/* Enhanced textured background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-40 w-80 h-80 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 right-1/3 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"></div>
        
        {/* Blueprint/architectural grid texture */}
        <div className="absolute inset-0 opacity-8">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(0deg, rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Wood/construction material texture */}
        <div className="absolute inset-0 opacity-3">
          <div className="w-full h-full bg-gradient-to-br from-amber-700/20 via-amber-500/10 to-amber-800/15"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={headerRef}
          className={`text-center mb-20 mt-48 lg:mt-0 transition-all duration-800 ${
            headerVisible ? 'animate-reveal-fade-down' : 'opacity-0 -translate-y-12'
          }`}
        >
          <div className="inline-block bg-white/10 backdrop-blur-sm px-8 py-4 rounded-2xl border border-white/30 mb-8">
            <span className="text-white font-bold text-xl">OUR EXPERTISE</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-black mb-8 text-white drop-shadow-lg">
            WE WILL TAKE YOU
            <span className="block text-accent drop-shadow-2xl">
              FROM A TO Z
            </span>
          </h2>
          
          <p className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Use our experience, our team, our vendors, relationships, and take all of our knowledge and processes around developing residential multi-family properties for a flat fee.
          </p>
        </div>
        
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {allServices.map((service, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:scale-105 bg-white/95 hover:bg-gradient-accent hover:text-white border-0 backdrop-blur-sm ${
                cardsVisible ? `animate-reveal-fade-up-${Math.min(index + 1, 8)}` : 'opacity-0 translate-y-8'
              }`}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-4 group-hover:bg-white/20 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <CardTitle className="text-lg group-hover:text-white font-bold">{service.title}</CardTitle>
                {service.category && (
                  <div className="text-xs text-muted-foreground group-hover:text-white/70 bg-primary/5 group-hover:bg-white/10 px-2 py-1 rounded-full w-fit">
                    {service.category}
                  </div>
                )}
              </CardHeader>
              <CardContent>
                {(service as any).description && (
                  <p className="text-muted-foreground group-hover:text-white/90 text-sm leading-relaxed">{(service as any).description}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Bold CTA at bottom of services */}
        <div 
          ref={ctaRef}
          className={`text-center mt-20 transition-all duration-800 ${
            ctaVisible ? 'animate-reveal-zoom-in' : 'opacity-0 scale-50'
          }`}
        >
          <div className="bg-black/20 backdrop-blur-sm p-8 rounded-3xl border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Working With Us Is Easy!</h3>
            <p className="text-white/90 text-xl mb-6">We already have the relationships, the experience, and the processes in place specifically in Houston, Texas.</p>
            <Button 
              onClick={() => setIsConsultationModalOpen(true)}
              size="lg"
              className="text-black text-lg font-semibold bg-yellow-400 hover:bg-yellow-500 border border-yellow-500 hover:border-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Book Your Call Today
            </Button>
          </div>
        </div>
      </div>

      <ConsultationModal 
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />
    </section>
  );
};

export default Services;