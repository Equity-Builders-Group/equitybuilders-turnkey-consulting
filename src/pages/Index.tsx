import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import Services from "@/components/Services";
import WhyWorkWithUs from "@/components/WhyWorkWithUs";
import ClientShowcase from "@/components/ClientShowcase";
import About from "@/components/About";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <LogoStrip />
      <Services />
      <WhyWorkWithUs />
      <ClientShowcase />
      <About />
      <CTA />
    </div>
  );
};

export default Index;
