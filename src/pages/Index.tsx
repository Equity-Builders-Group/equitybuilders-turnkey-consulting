import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import Services from "@/components/Services";
import About from "@/components/About";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <LogoStrip />
      <Services />
      <About />
      <CTA />
    </div>
  );
};

export default Index;
