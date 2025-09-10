import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gradient-card border border-border rounded-full mb-8 shadow-glow">
            <span className="text-sm text-accent font-medium">New:</span>
            <span className="text-sm text-muted-foreground ml-2">WebSocket API v2.0 now available</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Build real-time
            <span className="bg-gradient-hero bg-clip-text text-transparent"> experiences</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
            Power your applications with reliable real-time APIs. From chat and notifications 
            to live updates and collaboration features.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="group">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="secondary" size="lg" className="group">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground mb-6">Trusted by developers at</p>
            <div className="flex flex-wrap justify-center items-center gap-8 grayscale opacity-60">
              <div className="text-lg font-semibold">GitHub</div>
              <div className="text-lg font-semibold">Shopify</div>
              <div className="text-lg font-semibold">The New York Times</div>
              <div className="text-lg font-semibold">Mailchimp</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default Hero;