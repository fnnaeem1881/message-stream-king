import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Features from "@/components/Features";
import CodeExamples from "@/components/CodeExamples";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <CodeExamples />
      <CTA />
    </div>
  );
};

export default Index;
