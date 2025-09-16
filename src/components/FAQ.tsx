import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What types of real estate investment opportunities do you offer?",
      answer: "We specialize in missing middle housing developments, multifamily properties, and strategic real estate investments. Our portfolio includes duplexes, fourplexes, townhouses, and small apartment complexes that provide strong cash flow and appreciation potential."
    },
    {
      question: "How do you ensure profitable returns for investors?",
      answer: "Our proven track record comes from thorough market analysis, strategic property selection, and professional management. We focus on undervalued properties in growing markets and apply our expertise in development and value-add strategies to maximize returns."
    },
    {
      question: "What is the minimum investment required?",
      answer: "Investment minimums vary by project and investment structure. We offer opportunities ranging from direct property ownership to partnership arrangements. Contact us to discuss options that align with your investment goals and capital availability."
    },
    {
      question: "Do you provide ongoing property management services?",
      answer: "Yes, we offer comprehensive property management services including tenant screening, rent collection, maintenance coordination, and regular property inspections. Our goal is to provide passive income opportunities for our investors."
    },
    {
      question: "How do you identify and evaluate potential investment properties?",
      answer: "We use advanced market analytics, demographic studies, and economic indicators to identify emerging markets. Our evaluation process includes detailed financial modeling, property condition assessments, and neighborhood growth potential analysis."
    },
    {
      question: "What markets do you currently operate in?",
      answer: "We focus primarily on high-growth suburban and urban markets with strong job growth, population increases, and housing demand. Our current markets include several key metropolitan areas where missing middle housing is in high demand."
    },
    {
      question: "Can I invest in individual properties or only funds?",
      answer: "We offer both individual property investment opportunities and fund structures. This flexibility allows investors to choose the approach that best fits their investment strategy, risk tolerance, and capital requirements."
    },
    {
      question: "What kind of returns can I expect from investments?",
      answer: "While past performance doesn't guarantee future results, our properties typically target cash-on-cash returns of 8-12% annually, with additional appreciation upside. Returns vary based on property type, market conditions, and investment structure."
    }
  ];

  return (
    <section className="py-32 bg-gradient-accent relative overflow-hidden">
      {/* Background images with your real photos and construction projects */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-30">
          <img 
            src="/lovable-uploads/993aef6a-33f5-465f-8eba-159acc3d0dd8.png" 
            alt="Business transformation expert and consultant" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-accent via-accent/80 to-accent"></div>
        </div>
        
        {/* Construction project texture background */}
        <div className="absolute left-0 bottom-0 w-3/5 h-2/3 opacity-20">
          <img 
            src="/lovable-uploads/f48a2dc0-af37-42d8-824b-fc482c4ceb7f.png" 
            alt="Quality construction and development projects" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-accent to-transparent"></div>
        </div>
        
        {/* Floating CTA images - adjusted for mobile */}
        <div className="absolute bottom-20 left-4 lg:left-16 w-48 h-48 lg:w-80 lg:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 lg:border-6 border-white/50 rotate-6 hover:rotate-3 transition-all duration-700">
          <img 
            src="/lovable-uploads/099d43ed-30ee-447a-8302-8f31d970c7b5.png" 
            alt="Professional business growth expert" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-accent/30"></div>
        </div>
        
        {/* Additional construction project showcase - centered on mobile */}
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 lg:top-20 lg:left-auto lg:right-20 lg:transform-none w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-xl border-4 border-accent/60 -rotate-12">
          <img 
            src="/lovable-uploads/9622KinderAve_Exterior.jpg" 
            alt="9622 Kinder Avenue development expertise" 
            className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
          />
        </div>
      </div>

      {/* Enhanced textured background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-secondary/20 rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-primary/15 rounded-full blur-3xl"></div>
        
        {/* Construction/blueprint texture */}
        <div className="absolute inset-0 opacity-8">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(0deg, rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Material texture overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-gradient-to-br from-amber-800/15 via-amber-600/10 to-amber-900/20"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 mt-48 lg:mt-0">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-8 py-4 rounded-full border border-white/30 mb-8">
              <span className="text-white font-bold text-xl">FAQs</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white leading-tight">
              Frequently Asked Questions
            </h2>
          </div>

          {/* FAQ Accordion */}
          <div className="mb-16">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-white/20 rounded-lg px-6 py-2 bg-white/10 backdrop-blur-lg"
                >
                  <AccordionTrigger className="text-left font-semibold text-lg text-white hover:text-white/80 transition-colors py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/90 text-base leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Contact CTA */}
          <div className="text-center">
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-4">
                Have Questions? We're Here to Help!
              </h3>
              <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
                Reach out to our support team for any queries or assistance.
              </p>
              <Button 
                size="lg"
                className="px-8 py-3 text-lg bg-white text-primary hover:bg-white/90 font-bold transform hover:scale-105 transition-all duration-300"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;