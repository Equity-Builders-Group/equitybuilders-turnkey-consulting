import Hero from "@/components/Hero";
import Comparison from "@/components/Comparison";
import LogoStrip from "@/components/LogoStrip";
import Services from "@/components/Services";
import WhyWorkWithUs from "@/components/WhyWorkWithUs";
import MissingMiddleSection from "@/components/MissingMiddleSection";
import ClientShowcase from "@/components/ClientShowcase";
import About from "@/components/About";
import VideoShowcase from "@/components/VideoShowcase";
import FAQ from "@/components/FAQ";
import NovalTransition from "@/components/NovalTransition";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Comparison />
      <LogoStrip />
      <Services />
      <WhyWorkWithUs />
      <MissingMiddleSection />
      <ClientShowcase />
      <About />
      <FAQ />
      <NovalTransition />
      <Footer />
    </div>
  );
};

export default Index;
