import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Users, Globe, Shield, BarChart, Smartphone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Channels = () => {
  const features = [
    {
      icon: Zap,
      title: "Real-time messaging",
      description: "Instantly deliver messages to millions of users with sub-100ms latency"
    },
    {
      icon: Users,
      title: "Presence channels",
      description: "See who's online and track user activity across your application"
    },
    {
      icon: Globe,
      title: "Global infrastructure",
      description: "Deliver messages worldwide with our distributed edge network"
    },
    {
      icon: Shield,
      title: "Enterprise security",
      description: "Bank-grade security with end-to-end encryption and compliance"
    },
    {
      icon: BarChart,
      title: "Real-time analytics",
      description: "Monitor performance and usage with comprehensive analytics"
    },
    {
      icon: Smartphone,
      title: "Cross-platform SDKs",
      description: "Native support for web, mobile, and server-side applications"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
          <div className="container mx-auto px-6 relative">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-secondary/50">Most Popular</Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Pusher
                <span className="bg-gradient-hero bg-clip-text text-transparent"> Channels</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                The original real-time messaging API. Trusted by thousands of developers to deliver 
                billions of messages to millions of users every day.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Get Started Free
                </Button>
                <Button variant="outline" size="lg">
                  View Documentation
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Powerful real-time features</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Everything you need to build engaging real-time experiences
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Code Example */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Get started in minutes</h2>
                <p className="text-muted-foreground">
                  Add real-time messaging to your app with just a few lines of code
                </p>
              </div>
              
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Start Example</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="text-sm text-muted-foreground overflow-x-auto">
{`// Initialize Pusher
const pusher = new Pusher('your-app-key', {
  cluster: 'your-cluster'
});

// Subscribe to a channel
const channel = pusher.subscribe('my-channel');

// Bind to events
channel.bind('my-event', (data) => {
  console.log('Received data:', data);
});

// Trigger events from your server
pusher.trigger('my-channel', 'my-event', {
  message: 'Hello World!'
});`}
                  </pre>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to add real-time features?
              </h2>
              <p className="text-muted-foreground mb-8">
                Start building with Pusher Channels today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Start Free Trial
                </Button>
                <Button variant="outline" size="lg">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Channels;