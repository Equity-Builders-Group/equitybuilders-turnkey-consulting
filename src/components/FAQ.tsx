import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import textureBackground from "@/assets/texture-background.jpg";

const FAQ = () => {
  const faqs = [
    {
      question: "What types of real estate investment opportunities do you offer?",
      answer: "We specialize in missing middle housing developments, multifamily properties, and strategic real estate investments. Our target focus includes duplexes, triplexes, fourplexes, and small apartment complexes that provide strong cash flow and appreciation potential. We utilize the newly passed Chapter 42 ordinance that recently passed in the city of Houston, Texas."
    },
    {
      question: "How do you ensure profitable returns for investors?",
      answer: "We can't guarantee anything, however we know that your chances of success are much higher when you work with us. Our proven track record comes thorough market analysis, strategic property selection, and professional management. We focus on undervalued properties in growing markets and apply our expertise in land development and value-add strategies to maximize returns."
    },
    {
      question: "What is the minimum investment required?",
      answer: "Investment minimums vary by project and investment structure. We offer opportunities ranging from direct property ownership to partnership arrangements. Contact us to discuss options that align with your investment goals and capital availability."
    },
    {
      question: "Do you provide ongoing property management services?",
      answer: "Yes, we offer comprehensive property management services including tenant screening, rent collection, maintenance coordination, and regular property inspections. Our goal is to build wealth together and establish a long term partners with our investors."
    },
    {
      question: "How do you identify and evaluate potential investment properties?",
      answer: "We use advanced market analytics, demographic studies, and economic indicators to identify emerging markets. Our evaluation process includes detailed financial modeling, property condition assessments, and neighborhood growth potential analysis."
    },
    {
      question: "What markets do you currently operate in?",
      answer: "This service is primarily offered in Houston Texas."
    },
    {
      question: "Can I invest in individual properties or only funds?",
      answer: "We offer both individual property investment opportunities and a collective investment model through our alternative investment club structures. So if you have less capital to get started reach out and see if our group investments are a better fit. This flexibility allows investors to choose the approach that best fits their investment strategy, risk tolerance, and capital requirements."
    },
    {
      question: "What kind of returns can I expect from investments?",
      answer: "While past performance doesn't guarantee future results, our properties typically generate six figures plus in profit on top of initial capital invested per deal, with additional appreciation upside if you decide to hold the property for a longer term. Returns vary based on property type, market conditions, and investment structure."
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-background via-muted/50 to-background relative overflow-hidden" style={{
      backgroundImage: `url(${textureBackground}), linear-gradient(135deg, hsl(var(--background)), hsl(var(--muted)/0.5), hsl(var(--background)))`,
      backgroundSize: '200px 200px, cover',
      backgroundRepeat: 'repeat, no-repeat',
      backgroundBlendMode: 'multiply'
    }}>
      {/* Main background overlay */}
      <div className="absolute inset-0 bg-gradient-primary opacity-95"></div>
      
      {/* Floating architectural images */}
      <div className="absolute inset-0">
        {/* Large featured project - top right */}
        <div className="absolute top-16 right-8 lg:right-16 w-64 h-64 lg:w-80 lg:h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-highlight/60 rotate-3 hover:rotate-1 transition-all duration-700">
          <img 
            src="/lovable-uploads/2604-AmboySt_ExteriorDesign.png" 
            alt="2604 Amboy Street exterior design" 
            className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/30"></div>
        </div>
        
        {/* Project showcase - bottom left */}
        <div className="absolute bottom-20 left-8 lg:left-16 w-56 h-56 lg:w-72 lg:h-72 rounded-2xl overflow-hidden shadow-xl border-4 border-highlight/40 -rotate-6 hover:-rotate-3 transition-all duration-700">
          <img 
            src="/lovable-uploads/3909LavenderSt_ExteriorDesign.png" 
            alt="3909 Lavender Street development" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
        </div>
        
        {/* Professional headshot - center left */}
        <div className="absolute top-1/3 left-4 lg:left-12 w-48 h-48 lg:w-60 lg:h-60 rounded-full overflow-hidden shadow-xl border-6 border-highlight/50 hover:scale-105 transition-all duration-500">
          <img 
            src="/lovable-uploads/LavonNDiana_HeadShot_MCM.jpg" 
            alt="Lavon professional headshot" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Construction progress - top center */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-40 h-40 lg:w-52 lg:h-52 rounded-xl overflow-hidden shadow-lg border-3 border-secondary/60 rotate-12 hover:rotate-6 transition-all duration-500">
          <img 
            src="/lovable-uploads/PedersonExterior.jpg" 
            alt="Pederson exterior construction" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-highlight/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-2xl"></div>
        
        {/* Hexagonal pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Split layout: Header on left, FAQ on right */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left column - Header and intro */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-block bg-highlight/20 backdrop-blur-sm px-6 py-3 rounded-full border border-highlight/40">
                  <span className="text-highlight font-bold text-lg">Investor FAQ</span>
                </div>
                
                <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight">
                  Your Questions
                  <span className="block text-highlight">
                    Answered
                  </span>
                </h2>
                
                <p className="text-white/90 text-xl leading-relaxed">
                  Get clarity on our investment opportunities, processes, and what makes our real estate development approach unique in Houston's growing market.
                </p>
              </div>
              
              {/* Email Contact Form */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">Get Investment Info</h3>
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Full Name" 
                      className="w-full px-4 py-3 rounded-lg bg-white border border-white/30 text-foreground placeholder-muted-foreground focus:border-highlight focus:outline-none focus:ring-2 focus:ring-highlight/20 transition-colors"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full px-4 py-3 rounded-lg bg-white border border-white/30 text-foreground placeholder-muted-foreground focus:border-highlight focus:outline-none focus:ring-2 focus:ring-highlight/20 transition-colors"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Tell us about your investment goals..." 
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg bg-white border border-white/30 text-foreground placeholder-muted-foreground focus:border-highlight focus:outline-none focus:ring-2 focus:ring-highlight/20 transition-colors resize-none"
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="w-full px-6 py-3 bg-highlight text-highlight-foreground font-bold rounded-lg hover:bg-highlight/90 transition-colors shadow-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              
              {/* Stats cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-black text-highlight mb-2">15+</div>
                  <div className="text-white/90 text-sm font-medium">Projects Completed</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-black text-highlight mb-2">$2M+</div>
                  <div className="text-white/90 text-sm font-medium">Capital Deployed</div>
                </div>
              </div>
            </div>
            
            {/* Right column - FAQ Accordion */}
            <div className="space-y-4">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border border-white/20 rounded-xl px-6 py-2 bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all duration-300 group"
                  >
                    <AccordionTrigger className="text-left font-semibold text-lg text-white hover:text-highlight transition-colors py-6 group-hover:pr-2">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-white/85 text-base leading-relaxed pb-6 pl-2">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
          
          
        </div>
      </div>
    </section>
  );
};

export default FAQ;