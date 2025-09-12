import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MessageCircle, Bell, Users, Globe, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    {
      name: "Pusher Channels",
      description: "Real-time bidirectional communication at scale",
      icon: MessageCircle,
      features: ["WebSocket connections", "HTTP fallback", "Presence channels", "Private channels"],
      popular: true
    },
    {
      name: "Pusher Beams",
      description: "Cross-platform push notifications",
      icon: Bell,
      features: ["iOS & Android", "Web push", "Rich notifications", "Delivery tracking"],
      popular: false
    },
    {
      name: "Pusher ChatKit",
      description: "Complete chat infrastructure",
      icon: Users,
      features: ["Typing indicators", "File sharing", "User management", "Message history"],
      popular: false
    }
  ];

  const features = [
    {
      icon: Globe,
      title: "Global Infrastructure",
      description: "Edge locations worldwide for low-latency delivery"
    },
    {
      icon: Zap,
      title: "Real-time Performance",
      description: "Sub-300ms message delivery globally"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "End-to-end encryption and compliance"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              Real-time products for
              <span className="bg-gradient-hero bg-clip-text text-transparent"> every need</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in">
              Choose from our suite of real-time products designed to power 
              modern applications at any scale.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <Card key={index} className="bg-gradient-card border-border hover:shadow-card transition-all duration-300 group relative">
                {product.popular && (
                  <Badge className="absolute -top-3 left-6 bg-gradient-hero text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow group-hover:scale-110 transition-all duration-300">
                    <product.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{product.name}</CardTitle>
                  <CardDescription className="text-muted-foreground text-lg">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <ul className="text-left space-y-3 mb-8">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-muted-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="hero" className="w-full group-hover:shadow-glow" asChild>
                    <Link to={`/${product.name.toLowerCase().replace(' ', '-')}`}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Built for
              <span className="bg-gradient-hero bg-clip-text text-transparent"> enterprise scale</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our infrastructure is designed to handle millions of concurrent connections 
              with enterprise-grade reliability and security.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to get started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Choose the product that fits your needs and start building real-time features today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/signup">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/contact">Schedule Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;