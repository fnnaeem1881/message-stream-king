import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Shield, Globe, Code2, Users, BarChart3 } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Real-time APIs",
      description: "WebSocket and HTTP APIs for instant data delivery with 99.999% uptime guarantee."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "End-to-end encryption, compliance with SOC 2, GDPR, and enterprise-grade security."
    },
    {
      icon: Globe,
      title: "Global Infrastructure",
      description: "Low-latency delivery worldwide with edge locations across 6 continents."
    },
    {
      icon: Code2,
      title: "Developer Experience",
      description: "Simple SDKs, comprehensive docs, and debugging tools for faster development."
    },
    {
      icon: Users,
      title: "Collaboration Features",
      description: "Presence, chat, live cursors, and collaborative editing out of the box."
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Real-time dashboards, metrics, and debugging tools to monitor your applications."
    }
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything you need for
            <span className="bg-gradient-hero bg-clip-text text-transparent"> real-time apps</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From simple notifications to complex collaborative experiences, 
            our platform scales with your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-card border-border hover:shadow-card transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;