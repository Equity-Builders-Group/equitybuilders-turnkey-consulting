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
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-primary/10 backdrop-blur-sm px-8 py-4 rounded-full border border-primary/20 mb-8">
              <span className="text-primary font-bold text-xl">FAQs</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-foreground">
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
                  className="border border-border rounded-lg px-6 py-2 bg-card/50 backdrop-blur-sm"
                >
                  <AccordionTrigger className="text-left font-semibold text-lg text-foreground hover:text-primary transition-colors py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Contact CTA */}
          <div className="text-center">
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Have Questions? We're Here to Help!
              </h3>
              <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
                Reach out to our support team for any queries or assistance.
              </p>
              <Button 
                size="lg"
                className="px-8 py-3 text-lg"
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