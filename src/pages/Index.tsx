import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Features from "@/components/Features";
import CodeExamples from "@/components/CodeExamples";
import Stats from "@/components/Stats";
import UseCases from "@/components/UseCases";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Stats />
      <Features />
      <UseCases />
      <CodeExamples />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
