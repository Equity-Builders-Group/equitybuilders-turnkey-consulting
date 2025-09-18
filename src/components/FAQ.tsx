import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import textureBackground from "@/assets/texture-background.jpg";
import useScrollReveal from "@/hooks/useScrollReveal";

const FAQ = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();
  const { elementRef: formRef, isVisible: formVisible } = useScrollReveal<HTMLDivElement>();
  const { elementRef: accordionRef, isVisible: accordionVisible } = useScrollReveal<HTMLDivElement>();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("https://equitybuilders.co/wp-json/autonami/v1/webhook/?bwfan_autonami_webhook_id=3&bwfan_autonami_webhook_key=1307432ec34fc9c6cc445571d6f81c48", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Accept": "application/json",
        },
        mode: "no-cors",
        body: new URLSearchParams({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          timestamp: new Date().toISOString(),
          source: "FAQ Form"
        }).toString(),
      });

      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to submit form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
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
      answer: "Yes, we offer comprehensive property management services including tenant screening, rent collection, maintenance coordination, and regular property inspections. Our goal is to build wealth together and establish a long term partnership with our investors."
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
      question: "What kind of returns can I expect from investments?",
      answer: "While past performance doesn't guarantee future results, our properties typically generate six figures plus in profit on top of initial capital invested per deal, with additional appreciation upside if you decide to hold the property for a longer term. Returns vary based on property type, market conditions, and investment structure."
    },
    {
      question: "Will you help me to secure financing?",
      answer: "We can help you source business credit and partner with you to qualify for construction financing loans."
    },
    {
      question: "Am I able to make the decision on whether we sell or hold the property?",
      answer: "Yes!"
    },
    {
      question: "Can I invest in individual properties?",
      answer: "We offer both individual property investment opportunities and a collective investment model through our investment club structure. So if you have less capital to get started reach out and see if our group investments are a better fit. This flexibility allows investors to choose the approach that best fits their investment strategy, risk tolerance, and capital requirements."
    },
    {
      question: "Is this an SEC compliant investment fund?",
      answer: 'No this is not a fund opportunity. SEC rules apply differently to joint ventures based on participation; if investors contribute cash with little involvement, their interest is likely a security under an "investment contract" test, requiring disclosures and prohibitions against fraud, but if all parties actively participate with meaningful management roles and voting rights, it is generally not a security and falls under standard joint venture agreements and state law. The core distinction is whether the parties are engaged in a common enterprise with profits expected from the efforts of others (a security) or are actively working together on the project.'
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-background via-muted/50 to-background relative overflow-hidden" style={{
      backgroundImage: `url(${textureBackground}), linear-gradient(135deg, hsl(var(--background)), hsl(var(--muted)/0.5), hsl(var(--background)))`,
      backgroundSize: '300px 300px, cover',
      backgroundRepeat: 'repeat, no-repeat',
      backgroundBlendMode: 'overlay'
    }}>
      {/* Main background overlay */}
      <div className="absolute inset-0 bg-gradient-primary opacity-75"></div>
      
      {/* Floating architectural images */}
      <div className="absolute inset-0">
        {/* Large featured project - top right */}
        <div className="absolute top-16 right-8 lg:right-16 w-64 h-64 lg:w-80 lg:h-60 rounded-3xl overflow-hidden shadow-2xl border-4 border-highlight/60 rotate-3 hover:rotate-1 transition-all duration-700">
          <img 
            src="/lovable-uploads/2604-AmboySt_ExteriorDesign.png" 
            alt="2604 Amboy Street exterior design" 
            className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/30"></div>
        </div>
        
        {/* Project showcase - bottom left */}
        <div className="absolute top-10 left-8 lg:left-16 w-56 h-56 lg:w-72 lg:h-62 rounded-2xl overflow-hidden shadow-xl border-4 border-highlight/40 -rotate-6 hover:-rotate-3 transition-all duration-700">
          <img 
            src="/lovable-uploads/3909LavenderSt_ExteriorDesign.png" 
            alt="3909 Lavender Street development" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
        </div>
                
        {/* Construction progress - top center */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-60 h-50 lg:w-72 lg:h-62 rounded-xl overflow-hidden shadow-lg border-3 border-secondary/60 rotate-12 hover:rotate-6 transition-all duration-500">
          <img 
            src="/lovable-uploads/9622KinderAve_Exterior.jpg" 
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
        <div className="absolute inset-0 opacity-45">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Title */}
          <div className="text-center mt-48 mb-8">
            <div 
              ref={headerRef}
              className={`inline-block px-6 py-3 scroll-reveal-fade-up ${headerVisible ? 'visible' : ''}`}
            >
              <h2 className="text-5xl lg:text-6xl font-black text-white leading-tight drop-shadow-lg">
                Frequently Asked Questions
              </h2>
            </div>
          </div>

          {/* FAQ Questions in Two Columns */}
          <div 
            ref={accordionRef}
            className={`grid lg:grid-cols-2 gap-8 mb-20 scroll-reveal-fade-up ${accordionVisible ? 'visible' : ''}`}
          >
            {/* Left Column */}
            <div className="space-y-4">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border border-white/20 rounded-xl px-6 py-2 bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all duration-300 group"
                  >
                    <AccordionTrigger className="text-left font-semibold text-lg text-white hover:text-highlight transition-colors py-6 group-hover:pr-2 drop-shadow-lg">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-white/85 text-base leading-relaxed pb-6 pl-2 drop-shadow-lg">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.slice(Math.ceil(faqs.length / 2)).map((faq, index) => (
                  <AccordionItem 
                    key={index + Math.ceil(faqs.length / 2)} 
                    value={`item-${index + Math.ceil(faqs.length / 2)}`}
                    className="border border-white/20 rounded-xl px-6 py-2 bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all duration-300 group"
                  >
                    <AccordionTrigger className="text-left font-semibold text-lg text-white hover:text-highlight transition-colors py-6 group-hover:pr-2 drop-shadow-lg">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-white/85 text-base leading-relaxed pb-6 pl-2 drop-shadow-lg">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Form Section Below FAQ */}
          <div className="max-w-3xl mx-auto">
            <div 
              ref={formRef}
              className={`space-y-8 scroll-reveal-scale-up ${formVisible ? 'visible' : ''}`}
            >
              <div className="text-center space-y-6">
                <h2 className="text-5xl lg:text-6xl font-black text-white leading-tight drop-shadow-lg">
                  Your Questions
                  <span className="block text-highlight">
                    Answered
                  </span>
                </h2>
                
                <p className="text-white/90 text-xl leading-relaxed drop-shadow-lg">
                  Get clarity on our investment opportunities, processes, and what makes our real estate development approach unique in Houston's growing market.
                </p>
              </div>
              
              {/* Email Contact Form */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                {!isSubmitted ? (
                  <>
                    <h3 className="text-xl font-bold text-white mb-4 text-center">Get Additional Clarity</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Full Name" 
                          className="w-full px-4 py-3 rounded-lg bg-white border border-white/30 text-foreground placeholder-muted-foreground focus:border-highlight focus:outline-none focus:ring-2 focus:ring-highlight/20 transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Email Address" 
                          className="w-full px-4 py-3 rounded-lg bg-white border border-white/30 text-foreground placeholder-muted-foreground focus:border-highlight focus:outline-none focus:ring-2 focus:ring-highlight/20 transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <textarea 
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="What else can we clear up for you?" 
                          rows={3}
                          className="w-full px-4 py-3 rounded-lg bg-white border border-white/30 text-foreground placeholder-muted-foreground focus:border-highlight focus:outline-none focus:ring-2 focus:ring-highlight/20 transition-colors resize-none"
                          required
                        />
                      </div>
                      <button 
                        type="submit" 
                        disabled={isLoading}
                        className="w-full px-6 py-3 bg-highlight text-highlight-foreground font-bold rounded-lg hover:bg-highlight/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg"
                      >
                        {isLoading ? "Sending..." : "Send Message"}
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <h3 className="text-xl font-bold text-white mb-4">Message Sent!</h3>
                    <p className="text-white/90 text-lg leading-relaxed">
                      Thanks {formData.name || ""} for sending in your additional questions. We will respond within the next 24-48 hours.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;