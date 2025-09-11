import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Handshake, Star, Users, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Partners = () => {
  const partnerTypes = [
    {
      icon: Zap,
      title: "Technology Partners",
      description: "Integrate with leading platforms and services",
      benefits: ["Deep integrations", "Co-marketing opportunities", "Technical support"],
      examples: ["AWS", "Google Cloud", "Microsoft Azure", "Heroku"]
    },
    {
      icon: Users,
      title: "Solution Partners", 
      description: "Build and deliver Pusher-powered solutions",
      benefits: ["Revenue sharing", "Training programs", "Sales support"],
      examples: ["System Integrators", "Digital Agencies", "Consultants"]
    },
    {
      icon: Star,
      title: "Channel Partners",
      description: "Resell Pusher services to your customers", 
      benefits: ["Partner discounts", "Dedicated support", "Marketing materials"],
      examples: ["Resellers", "Distributors", "VARs"]
    }
  ];

  const featuredPartners = [
    {
      name: "Stripe",
      category: "Payment Platform",
      description: "Real-time payment processing updates and webhooks integration",
      logo: "💳",
      featured: true
    },
    {
      name: "Shopify",
      category: "E-commerce",
      description: "Live inventory updates and real-time order tracking for online stores",
      logo: "🛍️",
      featured: true
    },
    {
      name: "Slack",
      category: "Communication",
      description: "Real-time messaging and notification integrations",
      logo: "💬",
      featured: true
    },
    {
      name: "Zendesk",
      category: "Customer Support",
      description: "Live chat and real-time support ticket updates",
      logo: "🎧",
      featured: false
    },
    {
      name: "Twilio",
      category: "Communications API",
      description: "Combined messaging and real-time communication solutions",
      logo: "📱",
      featured: false
    },
    {
      name: "MongoDB",
      category: "Database",
      description: "Real-time data synchronization and live database updates",
      logo: "🍃",
      featured: false
    }
  ];

  const benefits = [
    "Access to Pusher's technical expertise and resources",
    "Joint go-to-market opportunities and co-marketing",
    "Dedicated partner support and success management",
    "Early access to new features and beta programs",
    "Training and certification programs",
    "Revenue sharing and incentive programs"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle relative overflow-hidden">
          <div className="container mx-auto px-6 relative">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-hero bg-clip-text text-transparent">Partner</span>
                {" "}with Pusher
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Join our global partner ecosystem and help businesses build amazing real-time experiences. 
                Grow your business while delivering cutting-edge solutions to your customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Become a Partner
                </Button>
                <Button variant="outline" size="lg">
                  Partner Portal
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Types */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Partnership Opportunities</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choose the partnership model that best fits your business goals
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {partnerTypes.map((type, index) => (
                <Card key={index} className="border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-hero rounded-lg flex items-center justify-center mx-auto mb-4">
                      <type.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle>{type.title}</CardTitle>
                    <CardDescription>{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Key Benefits:</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {type.benefits.map((benefit, bIndex) => (
                          <li key={bIndex} className="flex items-center">
                            <Handshake className="h-3 w-3 mr-2 text-accent flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Examples:</h4>
                      <div className="flex flex-wrap gap-2">
                        {type.examples.map((example, eIndex) => (
                          <Badge key={eIndex} variant="secondary" className="text-xs">
                            {example}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Partners */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold mb-8 text-center">Featured Partners</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPartners.map((partner, index) => (
                <Card key={index} className={`border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all cursor-pointer group ${partner.featured ? 'ring-2 ring-accent/20' : ''}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">{partner.logo}</div>
                        <div>
                          <CardTitle className="text-lg group-hover:text-accent transition-colors">
                            {partner.name}
                          </CardTitle>
                          <Badge variant="outline" className="text-xs">
                            {partner.category}
                          </Badge>
                        </div>
                      </div>
                      {partner.featured && (
                        <Badge className="bg-gradient-hero text-primary-foreground">
                          Featured
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{partner.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Why Partner with Pusher?</h2>
                <p className="text-muted-foreground">
                  Join hundreds of partners worldwide who are growing their business with Pusher
                </p>
              </div>
              
              <Card className="border-border bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-6">Partnership Benefits</h3>
                      <ul className="space-y-3">
                        {benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <Handshake className="h-4 w-4 mr-3 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-gradient-subtle p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-4">Success Stats</h3>
                      <div className="space-y-4">
                        <div>
                          <div className="text-2xl font-bold text-accent">300+</div>
                          <div className="text-sm text-muted-foreground">Active Partners</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-accent">85%</div>
                          <div className="text-sm text-muted-foreground">Revenue Growth</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-accent">50+</div>
                          <div className="text-sm text-muted-foreground">Countries</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-accent">99.9%</div>
                          <div className="text-sm text-muted-foreground">Partner Satisfaction</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-muted-foreground mb-8">
                Join our partner program in three simple steps
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-foreground font-bold">1</span>
                  </div>
                  <h3 className="font-semibold mb-2">Apply</h3>
                  <p className="text-sm text-muted-foreground">Submit your partnership application</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-foreground font-bold">2</span>
                  </div>
                  <h3 className="font-semibold mb-2">Review</h3>
                  <p className="text-sm text-muted-foreground">We'll review and get in touch within 48 hours</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-foreground font-bold">3</span>
                  </div>
                  <h3 className="font-semibold mb-2">Launch</h3>
                  <p className="text-sm text-muted-foreground">Start building and selling solutions</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Apply Now
                </Button>
                <Button variant="outline" size="lg">
                  Partner FAQ
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

export default Partners;