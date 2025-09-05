import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import Services from "@/components/Services";
import WhyWorkWithUs from "@/components/WhyWorkWithUs";
import ClientShowcase from "@/components/ClientShowcase";
import About from "@/components/About";
import CTA from "@/components/CTA";
import NovalTransition from "@/components/NovalTransition";
import Footer from "@/components/Footer";

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
      <NovalTransition />
      <Footer />
    </div>
  );
};

export default Index;
